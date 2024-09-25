import * as cdk from 'aws-cdk-lib';
import * as nodeLambda from 'aws-cdk-lib/aws-lambda-nodejs';
import * as logs from 'aws-cdk-lib/aws-logs';
import { Construct } from 'constructs';

export class ReferenceExternalResource extends cdk.Stack {
    constructor(scope: Construct, id: string, props?: cdk.StackProps) {
        super(scope, id, props);

        const logGroup = logs.LogGroup.fromLogGroupArn(
            this,
            'LogGroup',
            'arn:aws:logs:us-west-2:123456789012:log-group:/aws/lambda/my-function:*'
        );

        new nodeLambda.NodejsFunction(this, 'my-function', {
            logGroup,
        });
    }
}
