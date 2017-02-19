# React SSR with Lambda and APIG via ClaudiaJS

Demo showing a very small reactjs with routes. The demo serves the initial route via API Gateway and Lambda and loads a webpack bundle from S3.

## installation & Configuration

This demo uses [ClaudiaJS](https://claudiajs.com/) to setup a Lambda function and put an API Gateway proxy infront of the Lambda function. Please refer to the [ClaudiaJS installation & configuration guide] (https://claudiajs.com/tutorials/installing.html)

### Install [AWS CLI](https://aws.amazon.com/cli/)
`$ pip install awscli`

### Install ClaudiaJS CLI
`$ npm install -g claudia`

### Clone the repository.
`$ git clone git@github.com:stuartflanagan/orb-react-ssr.git`

### Install Dependencies
`$ npm install`


## Configure the Project for AWS
There are 3 main areas to configure before you can create and deploy your project. These configuration variables are all set within the `package.json` file under `config`
### Name
This is the name of the Lambda function that will be created on AWS. It will also be used to identify the API Gateway proxy that is created.

### Region
This specifies the region you want to create the project in.

### Asset bucket (config.assetBucket)
This is the name of the S3 bucket that is created to serve static assets. S3 bucket names are required to be unique across the whole of S3.

## Create the project and deploy to AWS Lambda, APIG and S3
As long as you have an AWS user set up with the correct permissions you should just need to run this command.
`$ npm run create`

On success a JSON response will return with a URL of the running project.
This will also generate a `claudia.json` file in the project root directory with the metadata required to update the method.
This is currently in the `.gitignore` file so as to not share around a running project.

### Create a New Lambda Function and API Gateway Proxy
...
### Create a New S3 bucket and copy transpiled assets
...
## Code editing and updates
No doubt you will want to update the ReactJS app to do what you want it to do. If so fork this repo to your own repo and start making the changes required.
When you are finished editing and are ready to deply the latest version to AWS run the following command.

`$ npm run deploy`

You will receive confirmation that the bundle has been compiled and copied to AWS S3 as well as the server side application transpiled and deployed to the AWS Lambda function.