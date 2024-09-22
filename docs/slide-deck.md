---
marp: true
theme: default
class:
    - lead
    - invert
---

# Getting Started with AWS Cloud Development Kit

Kevin Rich
Senior Software Engineering Manager
Sept 2024

---

# About Me

![bg left:35%](./img/me.png)

-   10 years experience with Azure & AWS
-   5 years experience with CDK, released in 2019
-   I enjoy leveraging automation to reduce toil

---

# Overview

---

# What is CDK?

From AWS:

> A software development framework for defining cloud infrastructure-as-code (IaC)

In Reality:

> A software framework to programmatically build and deploy CloudFormation templates

---

# A Bit of History

-   AWS was made available in 2006
-   CloudFormation was released in 2011
-   CDK was released in 2019

---

# A Basic CDK APP

The CDK App describes the infrastructure to deploy using "Stacks"

```typescript
// the app defines the entry point
const app = new cdk.App();

// apps are composed of stacks
const dataLayer = new cdk.DataStack(app, 'MyAppDataLayer');
const website = new cdk.WebsiteStack(app, 'MyAppWebsite');
```

---

# Deployment

We deploy stacks using the `cdk deploy` command

```powershell
> cdk deploy

```

---

# Constructs

Resources in CDK are assembled using _Constructs_
Here is an example of an out-of-the-box construct to create a CloudWatch Log Group

```typescript

```

---

# Recommendations

1. Understand the AWS Services before provisioning them

2. If provisioning an account to learn, secure it immediately and set budget alerts.

---

# Questions?

> "The only stupid question is the one not asked"

# Resources

-   CDK Workshop: [cdkworkshop.com](https://cdkworkshop.com/)

---

# Prerequisites

## Local tools

```bash
npm install -g typescript
npm install -g aws-cdk
```

## AWS Account

```bash
cdk bootstrap aws://123456789012/us-west-2
```

---

# Create the project

```bash
mkdir dev-tips
cd dev-tips
cdk init app --language typescript
```

---

# Folder Structure

![bg left:33%](./img/folder-structure.jpg)

A few preferences:

-   `bin` -> the entry point
-   `lib` -> infrastructure definitions

---

# Entry Point

```typescript
#!/usr/bin/env node
import * as cdk from 'aws-cdk-lib';
import 'source-map-support/register';
import { DevTipsAppStack } from '../lib/app-stack';

const app = new cdk.App();
new DevTipsAppStack(app, 'DevTipsApp', {});
```

---

# Stack

```typescript
import * as cdk from 'aws-cdk-lib';
import * as nodeLambda from 'aws-cdk-lib/aws-lambda-nodejs';
import { Construct } from 'constructs';

export class DevTipsAppStack extends cdk.Stack {
    constructor(scope: Construct, id: string, props?: cdk.StackProps) {
        super(scope, id, props);

        new nodeLambda.NodejsFunction(this, 'handler', {
            entry: 'lib/app-stack.handler.ts',
            handler: 'handler',
        });
    }
}
```

---

# Stack - Lambda Handler

```typescript
import { Handler } from 'aws-lambda';
import { ProgrammingTipsRepository } from './src/tips-generator-data';

export const handler: Handler = async (event, context) => {
    console.info('event:', event);

    const tips = new ProgrammingTipsRepository();
    const tip = tips.get();

    return {
        statusCode: 200,
        body: JSON.stringify({
            message: tip,
        }),
    };
};
```

---

# Deployment

```text
> cdk deploy
Bundling asset DevTipsApp/handler/Code/Stage...

  cdk.out\bundling-temp-71b27cb79b17c6e62a78ff3861ca3072019b795776390465250ead7ad25bc46d\index.js  10.5kb

Done in 3ms

✨  Synthesis time: 5.32s

DevTipsApp:  start: Building c9b0cc8804636a4a40d61a699ea1cc914bd8fd712db2b783e6d9c983df28f8fa:current_account-current_region
DevTipsApp:  success: Built c9b0cc8804636a4a40d61a699ea1cc914bd8fd712db2b783e6d9c983df28f8fa:current_account-current_region
DevTipsApp:  start: Building 648b7dba1db3fce97f8c4e5ba9144b15d4d4891b495ee5f6e293205e6be9a2d8:current_account-current_region
DevTipsApp:  success: Built 648b7dba1db3fce97f8c4e5ba9144b15d4d4891b495ee5f6e293205e6be9a2d8:current_account-current_region
DevTipsApp:  start: Publishing c9b0cc8804636a4a40d61a699ea1cc914bd8fd712db2b783e6d9c983df28f8fa:current_account-current_region
DevTipsApp:  start: Publishing 648b7dba1db3fce97f8c4e5ba9144b15d4d4891b495ee5f6e293205e6be9a2d8:current_account-current_region
DevTipsApp:  success: Published 648b7dba1db3fce97f8c4e5ba9144b15d4d4891b495ee5f6e293205e6be9a2d8:current_account-current_region
DevTipsApp:  success: Published c9b0cc8804636a4a40d61a699ea1cc914bd8fd712db2b783e6d9c983df28f8fa:current_account-current_region
DevTipsApp: deploying... [1/1]
DevTipsApp: creating CloudFormation changeset...
DevTipsApp | 0/4 | 10:23:00 AM | REVIEW_IN_PROGRESS   | AWS::CloudFormation::Stack | DevTipsApp User Initiated
DevTipsApp | 0/4 | 10:23:06 AM | CREATE_IN_PROGRESS   | AWS::CloudFormation::Stack | DevTipsApp User Initiated
DevTipsApp | 0/4 | 10:23:08 AM | CREATE_IN_PROGRESS   | AWS::IAM::Role        | handler/ServiceRole (handlerServiceRole187D5A5A)
DevTipsApp | 0/4 | 10:23:08 AM | CREATE_IN_PROGRESS   | AWS::CDK::Metadata    | CDKMetadata/Default (CDKMetadata)
DevTipsApp | 0/4 | 10:23:09 AM | CREATE_IN_PROGRESS   | AWS::IAM::Role        | handler/ServiceRole (handlerServiceRole187D5A5A) Resource creation Initiated
DevTipsApp | 0/4 | 10:23:09 AM | CREATE_IN_PROGRESS   | AWS::CDK::Metadata    | CDKMetadata/Default (CDKMetadata) Resource creation Initiated
DevTipsApp | 1/4 | 10:23:09 AM | CREATE_COMPLETE      | AWS::CDK::Metadata    | CDKMetadata/Default (CDKMetadata)
DevTipsApp | 2/4 | 10:23:25 AM | CREATE_COMPLETE      | AWS::IAM::Role        | handler/ServiceRole (handlerServiceRole187D5A5A)
DevTipsApp | 2/4 | 10:23:26 AM | CREATE_IN_PROGRESS   | AWS::Lambda::Function | handler (handlerE1533BD5)
DevTipsApp | 2/4 | 10:23:27 AM | CREATE_IN_PROGRESS   | AWS::Lambda::Function | handler (handlerE1533BD5) Resource creation Initiated
DevTipsApp | 2/4 | 10:23:28 AM | CREATE_IN_PROGRESS   | AWS::Lambda::Function | handler (handlerE1533BD5) Eventual consistency check initiated
DevTipsApp | 2/4 | 10:23:28 AM | CREATE_IN_PROGRESS   | AWS::CloudFormation::Stack | DevTipsApp Eventual consistency check initiated
DevTipsApp | 3/4 | 10:23:33 AM | CREATE_COMPLETE      | AWS::Lambda::Function | handler (handlerE1533BD5)
DevTipsApp | 4/4 | 10:23:34 AM | CREATE_COMPLETE      | AWS::CloudFormation::Stack | DevTipsApp

 ✅  DevTipsApp

✨  Deployment time: 37.41s

Stack ARN:
arn:aws:cloudformation:us-west-2:058308164167:stack/DevTipsApp/51097140-7907-11ef-8eab-02fe2446bd3d

✨  Total time: 42.73s

```

---

![bg:fit](./img/aws-console-lambda-deployed.jpg)

---

![bg:fit](./img/aws-console-lambda-test.jpg)

---

# How it works

Under the hood, CDK is programmatically creating/deploying CloudFormation templates by:

1. Bundling any application code into a zip file
2. Synthesizing CloudFormation templates from Stacks
3. Deploying the CloudFormation template

---

# Generated CloudFormation

We can see the generated artifacts in the `cdk.out` folder

```json
{
    "Resources": {
        "handlerServiceRole187D5A5A": {
            "Type": "AWS::IAM::Role",
            "Properties": {
                "AssumeRolePolicyDocument": {
                    "Statement": [
                        {
                            "Action": "sts:AssumeRole",
                            "Effect": "Allow",
                            "Principal": {
                                "Service": "lambda.amazonaws.com"
                            }
                        }
                    ],
                    "Version": "2012-10-17"
                },
                "ManagedPolicyArns": [
                    {
                        "Fn::Join": [
                            "",
                            [
                                "arn:",
                                {
                                    "Ref": "AWS::Partition"
                                },
                                ":iam::aws:policy/service-role/AWSLambdaBasicExecutionRole"
                            ]
                        ]
                    }
                ]
            },
            "Metadata": {
                "aws:cdk:path": "DevTipsApp/handler/ServiceRole/Resource"
            }
        },
        "handlerE1533BD5": {
            "Type": "AWS::Lambda::Function",
            "Properties": {
                "Code": {
                    "S3Bucket": {
                        "Fn::Sub": "cdk-hnb659fds-assets-${AWS::AccountId}-${AWS::Region}"
                    },
                    "S3Key": "c9b0cc8804636a4a40d61a699ea1cc914bd8fd712db2b783e6d9c983df28f8fa.zip"
                },
                "Handler": "index.handler",
                "Role": {
                    "Fn::GetAtt": ["handlerServiceRole187D5A5A", "Arn"]
                },
                "Runtime": "nodejs18.x"
            },
            "DependsOn": ["handlerServiceRole187D5A5A"]
        }
    }
}
```

---

# Why Not Just Use CloudFormation?

-   Abstraction
-   Testability
-   Coding Languages

---

# Abstraction

Earlier we saw this:

```typescript
new nodeLambda.NodejsFunction(this, 'handler', {
    entry: 'lib/app-stack.handler.ts',
    handler: 'handler',
});
```

---

## Abstraction - L1 Constructs

Deep in the bowels of the [CDK source code](https://github.com/aws/aws-cdk/blob/main/packages/aws-cdk-lib/aws-lambda/lib/function.ts) we find:

```typescript
const resource: CfnFunction = new CfnFunction(this, 'Resource', {
    functionName: this.physicalName,
    description: props.description,
    code: {
        s3Bucket: code.s3Location && code.s3Location.bucketName,
        s3Key: code.s3Location && code.s3Location.objectKey,
        s3ObjectVersion: code.s3Location && code.s3Location.objectVersion,
        zipFile: code.inlineCode,
        imageUri: code.image?.imageUri,
    },
    layers: Lazy.list({ produce: () => this.renderLayers() }), // Evaluated on synthesis
    handler: props.handler === Handler.FROM_IMAGE ? undefined : props.handler,
    timeout: props.timeout && props.timeout.toSeconds(),
    packageType: props.runtime === Runtime.FROM_IMAGE ? 'Image' : undefined,
    runtime: props.runtime === Runtime.FROM_IMAGE ? undefined : props.runtime.name,
    role: this.role.roleArn,
    environment: Lazy.uncachedAny({ produce: () => this.renderEnvironment() }),
    memorySize: props.memorySize,
    ephemeralStorage: props.ephemeralStorageSize
        ? {
              size: props.ephemeralStorageSize.toMebibytes(),
          }
        : undefined,
    vpcConfig: this.configureVpc(props),
    deadLetterConfig: this.buildDeadLetterConfig(dlqTopicOrQueue),
    reservedConcurrentExecutions: props.reservedConcurrentExecutions,
    imageConfig: undefinedIfNoKeys({
        command: code.image?.cmd,
        entryPoint: code.image?.entrypoint,
        workingDirectory: code.image?.workingDirectory,
    }),
    kmsKeyArn: props.environmentEncryption?.keyArn,
    fileSystemConfigs,
    codeSigningConfigArn: props.codeSigningConfig?.codeSigningConfigArn,
    architectures: this._architecture ? [this._architecture.name] : undefined,
    runtimeManagementConfig: props.runtimeManagementMode?.runtimeManagementConfig,
    snapStart: this.configureSnapStart(props),
    loggingConfig: this.getLoggingConfig(props),
    recursiveLoop: props.recursiveLoop,
});
```

---

## Abstraction - L2 Constructs

The L2 Constructs abstract away the need for us to know the L1 details.

```typescript
new nodeLambda.NodejsFunction(this, 'handler', {
    entry: 'lib/app-stack.handler.ts',
    handler: 'handler',
});
```

Did you notice the automagically created IAM Role in the CloudFormation Template?

```json
"Resources": {
    "handlerServiceRole187D5A5A": {
        "Type": "AWS::IAM::Role",
        "Properties": {
            "AssumeRolePolicyDocument": {
                "Statement": [{
                        "Action": "sts:AssumeRole",
                        "Effect": "Allow",
                        "Principal": {
                            "Service": "lambda.amazonaws.com"
```

---

## Abstraction - L3 Constructs

We can further build abstractions on top of the L2 constructs. Let's say we wanted to wire up an input queue and output topic to our Lambda:

```typescript

```
