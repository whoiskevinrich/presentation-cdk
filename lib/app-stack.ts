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
