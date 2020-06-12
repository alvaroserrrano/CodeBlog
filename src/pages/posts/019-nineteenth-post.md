---
title: "Building a serverless Web App (part 6)"
date: 2020-06-12 09:00:00
author: "Alvaro Serrano"
image: ../../images/lambda.jpeg
tags:
  - Code
  - Software
  - AWS
  - Cloud Computing
  - Tutorial
---

This is the last part of the series where we will mainly be dealing with data processing and event filters. Imagine that the visitors of the tours wore a wristband or had access to a device that allows them to rate each monument or sight. This device would transmit information not only about the visitors' rating, but also about their names, age, home address... For instance, every tap on the wristband would create an IoT message that would be routed to the Amazon Kinesis Firehose delivery stream. Next, we setup Amazon Quicksight to find insights and statistics.

## Serverless backend

1. The wristbands emit messages through the IoT infrastructure. These are sent to Kinesis Firehose.
2. Firehose aggegrates data into objects stored in a dedicated S3 bucket.
3. QuickSight uses the objects in the S3 bucket as a data source for analysis.

## Infrastructure Configuration

1. Configure Kinesis Firehose and select an S3 bucket as the destination.
2. Deploy and run the simulator using SAM. This simulator runs a Lambda function that in average produces arounf 300Mb of streaming data for a simulator that generates 1 million messages for between 70-80,000 visitors. It will take ~5 minutes to simulate an entire 12-hour day, streaming at an average 1000 transactions per second.

Here is an example of a simulator message that is sent to Firehose for one visitor

```json
{
    "event:": "Ride",
    "rideId": "ride-014",
    "rating": 4,
    "timestamp": "2020-02-25T20:59:33.184Z",
    "visitorId": 9,
    "visitor": {
        "id": 9,
        "firstName": "Kacie",
        "lastName": "Kahn",
        "age": 18,
        "birthday":
            "month": 7,
            "day": 25
        },
        "home": {
            "latitude": 42.058359409010635,
            "longitude": -90.28163047438535
        },
        "arrivalTime": "2020-02-25T20:20:16.787Z",
        "totalRides": 4
    }
}
```

Next, we deploy

```bash
sam build
sam package --output-template-file packaged.yaml --s3-bucket $s3_deploy_bucket
sam deploy --template-file packaged.yaml --stack-name app-name-simulator --capabilities CAPABILITY_IAM
```

We get the name of the Lambda function:

```bash
aws lambda list-functions | grep app-name | grep FunctionName
```

And we invoke the function

```bash
aws lambda invoke --function-name ENTER_FUNCTION_NAME output.txt
```

1. Go to the S3 console and select the bucket to view its contents. Click through the folders and reach the subfolder with the streaming data.

At this stage, the simulation is running and logging output to Kinesis. Your delivery stream is aggregating the data into the dedicated S3 bucket. Wait until the simulation shows a 200 status code.

At this point Quicksight comes into play. You can use Quicksight's standard edition and configure your account pointing to the S3 bucket.

1. Choose **Manage data**.

2. Choose **New data set**.

3. Choose **S3**.

4. Create the file `manifest.json`.

```json
{
  "fileLocations": [
    {
      "URIPrefixes": ["s3://ENTER-YOUR-BUCKET-NAME/"]
    }
  ],
  "globalUploadSettings": {
    "format": "JSON"
  }
}
```

5.On the _New S3 data source_ form:

- Enter `app-name-data` for _Date source name_.
- Select the _Upload_ radio button.
- Choose the file uploader icon and select the manifest file saved in the previous step.
- Choose **Connect**.

## Prepare the data and create the analysis

Choose **Add calculated field**.

- For _Calculated Field Name_, enter **minutesInVisit**.
- For _Formula_, enter `dateDiff(visitor.arrivalTime, timestamp, "MI")`.
- Choose **Create**.

1. Click the _QuickSight_ logo in the top left of the screen to return to the application's main menu. Choose **New analysis**.

2. Choose **Create analysis**.
3. In the analysis dashboard, note the following areas on the display, since you will need these to build the data visualizations:

- 1 - Analysis menu bar.
- 2 - Fields list.
- 3 - Visualization types.
- 4 - Field wells, for modifying fields in visualizations.
- 5 - Worksheet, containing multiple visualization panels.

## Build the visualizations

Now the guests know about wait times and outages but users would like to receive notifications when problems occur.

## Connect SNS with EventBridge

Through SNS, invoke a Lambda function that iterates through the list of wait times in the incoming SNS message and publish it to EventBridge. Now configure EventBridge rules to filter events and send those to designated targets.

You can use as your event pattern:

```json
{
  "app-name.visits"],
  "detail-type": ["waitTimesSummary"]
}
```

Save the dashboard to show the wait times. This can be shared to help monitor the state of all the stations of the Tour. Next, you will extract information about outages and provide richer events, so the Operations Team can gain more meaningful insights into problems with the stations of your Tour.

First, you will consume the data events already published by EventBridge from the last section and filter the outage-related events, append more data about the outage, and push the information back onto the default event bus.

Create an event patter as follows:

```json
{
  "app-name.visits"],
  "detail-type": ["waitTimes"],
  "detail": {
    "inService": [false]
  }
}
```

EventBridge will now filter events on the default bus and send events matching the pattern to a Lambda function and a CloudWatch log group. This Lambda function enriches those events with more outage information, and send these to the default eventbus with the _detail-type_ `outage`.

Create the following rule:

```json
{
  "source": ["app-name.visits"],
  "detail-type": ["outage"],
  "detail": {
    "type": ["Info", "Warning"]
  }
}
```

Select the desired SNS topic (Emergency-Alerts) and you will now start to receive emails at your email address when outages occur with the _Info_ or _Warning_ state. You will then create an EventBridge rule to route events to this topic.

```json
{
  "source": ["app-name.visits"],
  "detail-type": ["outage"],
  "detail": {
    "type": ["Emergency"]
  }
}
```

You can also receive SMS message at your phone number when emergency outages occur on tour visits.

## Test

```bash
aws events put-events --entries file://testEvent.json
```
