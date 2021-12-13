# aws-node-serverless-lambda-api-gw-dynamodb 🐳

![Stars](https://img.shields.io/github/stars/tquangdo/aws-node-serverless-lambda-api-gw-dynamodb?color=f05340)
![Issues](https://img.shields.io/github/issues/tquangdo/aws-node-serverless-lambda-api-gw-dynamodb?color=f05340)
![Forks](https://img.shields.io/github/forks/tquangdo/aws-node-serverless-lambda-api-gw-dynamodb?color=f05340)
[![Report an issue](https://img.shields.io/badge/Support-Issues-green)](https://github.com/tquangdo/aws-node-serverless-lambda-api-gw-dynamodb/issues/new)

## reference
[trungquandev](https://trungquandev.com/viet-mot-crud-api-su-dung-serverless-framework-dynamodb/)

## aws deploy
1. settting printenv
```shell
export AWS_ACCESS_KEY_ID=<your-key-here>
export AWS_SECRET_ACCESS_KEY=<your-secret-key-here>
printenv | grep AWS
```
2.
```shell
npm i serverless
sls deploy
```
3. =>
```yml
Serverless: Packaging service...
Serverless: Excluding development dependencies...
Serverless: Uploading CloudFormation file to S3...
Serverless: Uploading artifacts...
Serverless: Uploading service crud-cats.zip file to S3 (14.68 MB)...
Serverless: Validating template...
Serverless: Updating Stack...
Serverless: Checking Stack update progress...
........................................................
Serverless: Stack update finished...
Service Information
service: crud-cats
stage: dev
region: us-east-1
stack: crud-cats-dev
resources: 30
api keys:
  None
endpoints:
  POST - https://<endpoint>/dev/create
  GET - https://<endpoint>/dev/cat/{id}
  PUT - https://<endpoint>/dev/cat/{id}/update
  DELETE - https://<endpoint>/dev/cat/{id}/delete
functions:
  createCat: crud-cats-dev-createCat
  getCatById: crud-cats-dev-getCatById
  updateCatById: crud-cats-dev-updateCatById
  deleteCatById: crud-cats-dev-deleteCatById
layers:
  None
```
## note
1. `Uploading service crud-cats.zip file to S3` -> code uploaded into S3 bucket
2. connect to DynamoDB:
```js
models/CatModel.js
let Joi = require("joi"); //định nghĩa các Object Schema
let dynamo = require("dynamodb");
```

## API example
```json
* POST
https://<endpoint>/dev/create
{
    "name": "meo mun cua DoTQ!!!",
    "kind": "meo den may man"
}
* PUT
https://<endpoint>/dev/cat/e915b880-34e6-11ec-8a6f-d774d07c09bc/update
{
    "name": "meo mun!!!",
    "kind": "meo den may man"
}
```

## screenshots
![apigw](screenshots/apigw.png)
![dynamodb](screenshots/dynamodb.png)
![lambda](screenshots/lambda.png)
