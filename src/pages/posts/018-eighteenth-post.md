---
title: "Building a serverless Web App (part 5)"
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

In this part of the series we will add a new and extremely helpful feature for the users of the app. Since most of them will be tourists from different countries, we want to make it easy for them to use our app in case that English is not their first language.

## How it works

Our frontend files will contain local language resources that substitute language string whenever the locale is changed. A Node function that uses Amazon Translate will be responsible for the creation of a new file with a given number of languages. Once the file is created, this will be moved to the frontend repository in order to redeploy the application through Amplify.

## Step by step

Create a directory in your frontend containing 2 files: translate.js and translation-input.js

You can find here the array with support languages for [Amazon Translate ](https://docs.aws.amazon.com/translate/latest/dg/how-it-works.html#how-it-works-language-codes)

```node
const main = async () => {
  // Make sure list entered matches allowed language codes
  const listLanguages = targetLanguages.filter(lang =>
    possibleLanguages.includes(lang)
  )

  const translations = {}
  translations.en = messages.en

  // For each language selected...
  const pArray = listLanguages.map(async function(lang) {
    const output = {}
    // For each category...
    for (let category in messages.en) {
      output[category] = {}
      // For each phrases
      for (let phrase in messages.en[category]) {
        const translation = await translateText(
          messages.en[category][phrase],
          lang
        )
        output[category][phrase] = translation
      }
    }
    translations[lang] = output
  })

  // Await for all promises to resolve
  await Promise.all(pArray)

  // Here are the results
  console.log(translations)

  // Write to the local file system.
  fs.writeFileSync(outputFileName, JSON.stringify(translations, null, 2))
}

if (!process.argv[2])
  return console.error("Missing REGION in command line parameters.")

main()

//Translate function
const targetLanguages = ["fr", "zh", "da", "nl"]
const outputFileName = "./translations.json"
const translateText = async (originalText, targetLanguageCode) => {
  const params = {
    Text: originalText.substring(0, MAX_LENGTH),
    SourceLanguageCode: "auto",
    TargetLanguageCode: targetLanguageCode,
  }

  try {
    console.log(`Translating to ${targetLanguageCode}: ${originalText} `)
    const result = await translate.translateText(params).promise()

    // Introduce a slight delay to avoid throttling on the AWS Translate service
    // In production systems, you can raise your throttling limits as needed
    return new Promise(resolve => {
      setTimeout(() => resolve(result.TranslatedText), 500)
    })
  } catch (err) {
    console.error(err)
  }
}
```

Test the application by choosing different target language under the translation dropdown of your application

Next, in the final part of the series we will implement functionality to ingest real-time data from the tourists and get some useful statistics using Amazon Quicksight.
