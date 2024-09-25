import * as cdk from 'aws-cdk-lib';
import { Code, Function, Runtime } from 'aws-cdk-lib/aws-lambda';
import { Queue } from 'aws-cdk-lib/aws-sqs';
import { Construct } from 'constructs';

export class ExampleRoleAbstractions extends cdk.Stack {
    constructor(scope: Construct, id: string, props?: cdk.StackProps) {
        super(scope, id, props);

        const fn = new Function(this, 'Function', {
            code: Code.fromInline('export async function handler() { return "hello"; }'),
            runtime: Runtime.NODEJS_20_X,
            handler: 'index.handler',
        });
        const queue = new Queue(this, 'Queue');

        queue.grantSendMessages(fn);
    }
}
