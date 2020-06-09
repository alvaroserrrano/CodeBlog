---
title: "Building a serverless Web App (part 2)"
date: 2020-06-08 09:00:00
author: "Alvaro Serrano"
image: ../../images/lambda.jpeg
tags:
  - Code
  - Software
  - AWS
  - Cloud Computing
  - Tutorial
---

### AWS Cloud9 IDE

You can use Cloud9 on Chrome or Firefox as an IDE to develop, run, and debug your code inside your web browser. Just create an environment and set up your IDE preferences. Using a t2.micro EC2 instance should be enough. Also, install JQ to provide formatting for JSON in the console:

```bash
sudo yum install jq -y
```

- Create a repository in [AWS CodeCommit](https://aws.amazon.com/codecommit/) and push your frontend code.
- Configure Amplify Console to connect to your repository and publish the web app. Notice that this will only display our frontend. By clicking the URL provided by Amplify we can see our application on Desktop and Mobile devices.
- The static content of the site (HTML, CSS, JS...) will be served through a Cloudfront distribution, which means that we do not have to worry about running our infrastructure.

![workflow](/src/images/ampl-wf.png "Sample Workflow").

### Commit frontend files to a CodeCommit repo

### Use AWS Amplify to deploy the static site

The Amplify Console automatically sets up a place to store your static web application code. For instance, you do not have to manually run scripts such 'npm run build'.

### Deploy the backend infrastructure

SAM [AWS Serverless Application Model](https://aws.amazon.com/serverless/sam/)
makes it easier to deploy serverless infrastructure. You can also use [Serverless Framework](https://www.serverless.com/)

You only need to specify your application requirements in code and SAM transforms and expands the SAM syntax into AWS CloudFormation to deploy your application.

- Create a S3 bucket to deploy your application services and store your bucket name as an env variable `s3_deploy_bucket`

```bash
accountId=$(curl -s http://169.254.169.254/latest/dynamic/instance-identity/document | jq -r .accountId)

s3_deploy_bucket="theme-park-sam-deploys-${accountId}"

echo $s3_deploy_bucket

aws s3 mb s3://$s3_deploy_bucket
```

Use SAM CLI to start deploying your infrastructure. It is recommended to use a CloudFormation template to create the following stack of backend services:

- 2 Lambda functions and a Lambda Layer
- 3 S3 buckets
- A DynamoDBTable
- A Cognito UserPool
- An AWS IoT thing
- Several IAM Roles and Policies.

In order to better represent your resources you can set a number of environment variables with custom names for each service.

```console
AWS_REGION=$(curl -s http://169.254.169.254/latest/meta-data/placement/availability-zone | sed 's/\(.*\)[a-z]/\1/')
FINAL_BUCKET=$(aws cloudformation describe-stack-resource --stack-name theme-park-backend --logical-resource-id FinalBucket --query "StackResourceDetail.PhysicalResourceId" --output text)
PROCESSING_BUCKET=$(aws cloudformation describe-stack-resource --stack-name theme-park-backend --logical-resource-id ProcessingBucket --query "StackResourceDetail.PhysicalResourceId" --output text)
UPLOAD_BUCKET=$(aws cloudformation describe-stack-resource --stack-name theme-park-backend --logical-resource-id UploadBucket --query "StackResourceDetail.PhysicalResourceId" --output text)
DDB_TABLE=$(aws cloudformation describe-stack-resource --stack-name theme-park-backend --logical-resource-id DynamoDBTable --query "StackResourceDetail.PhysicalResourceId" --output text)
echo $FINAL_BUCKET
echo $PROCESSING_BUCKET
echo $UPLOAD_BUCKET
echo $DDB_TABLE
```

Do not forget to upload data to the DynamoDB that you created with the CloudFormation template. You tipically run a local node script for that matter

```bash
node ./importData.js $AWS_REGION $DDB_TABLE

aws dynamodb scan --table-name $DDB_TABLE
```

This should return all the data in a table

Call the API Gateway endpoint URL created by SAM

```bash
aws cloudformation describe-stacks --stack-name theme-park-backend --query "Stacks[0].Outputs[?OutputKey=='InitStateApi'].OutputValue" --output text
```

When you open the URL link you will be faced with all the raw data from the DynamoDB table via API Gateway and Lambda. Your frontend will use this public API to populate the map with points of interest for the tourists.

For that matter, remember to update your API endpoint on your frontend configuration file

### Push to CodeCommit and deploy via Amplify

A new build will start automatically as a result of our latest commit

![workflow](/src/images/amplify.png "Sample Workflow").
