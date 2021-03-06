# React SSR with Lambda and APIG via ClaudiaJS

Demo showing a very small reactjs with routes. The demo serves the initial route via API Gateway and Lambda and loads a webpack bundle from S3.

## Installation & Configuration

This demo uses [ClaudiaJS](https://claudiajs.com/) to setup a Lambda function and put an API Gateway proxy infront of the Lambda function. Please refer to the [ClaudiaJS installation & configuration guide] (https://claudiajs.com/tutorials/installing.html)

## Installation
**1. Install AWS CLI:**
```sh
$ pip install awscli
```
> Further information and installation instructions can be are available via the [AWS CLI](https://aws.amazon.com/cli/) docs.

**2. Install ClaudiaJS CLI:**
```sh
$ npm install -g claudia
```

**3. Clone this repo:**

```sh
$ git clone --depth 1 https://github.com/stuartflanagan/orb-react-ssr.git my-app
cd my-app
```

**4. Make it your own:**

```sh
rm -rf .git && git init && npm init
```

> This re-initializes the repo and sets up your NPM project.

**5. Install the dependencies:**

```sh
npm install
```

> That is it for installation.



## Configure the Project for AWS
There are 3 main areas to configure before you can create and deploy your project. These configuration variables are all set within the `package.json` file under `config`

**1. Name (config.name)**
This is the name of the Lambda function that will be created on AWS. It will also be used to identify the API Gateway proxy that is created.

**2. Region (config.region)**
This specifies the region you want to create the project in.

**3. Asset bucket (config.assetBucket)**
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
Besides the split between index.js as the entry point for WebPack

`$ npm run deploy`

You will receive confirmation that the bundle has been compiled and copied to AWS S3 as well as the server side application transpiled and deployed to the AWS Lambda function.