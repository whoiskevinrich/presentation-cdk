import * as cdk from 'aws-cdk-lib';
import * as lambdaEvents from 'aws-cdk-lib/aws-lambda-event-sources';
import * as nodeLambda from 'aws-cdk-lib/aws-lambda-nodejs';
import * as logs from 'aws-cdk-lib/aws-logs';
import * as sqs from 'aws-cdk-lib/aws-sqs';
import { Construct } from 'constructs';

export interface QueuedDevTipsAppStackProps extends cdk.StackProps {
    readonly logRetention: logs.RetentionDays;
}

export class QueuedDevTipsAppStack extends cdk.Stack {
    constructor(scope: Construct, id: string, props: QueuedDevTipsAppStackProps) {
        super(scope, id, props);

        const logGroup = new logs.LogGroup(this, 'logs', {
            retention: props?.logRetention,
        });
        const inputQueue = new sqs.Queue(this, 'input-queue');

        const fn = new nodeLambda.NodejsFunction(this, 'handler', {
            entry: 'lib/dev-tips-app-stack.handler.ts',
            handler: 'handler',
            logGroup: logGroup,
            events: [new lambdaEvents.SqsEventSource(inputQueue)],
        });
    }
}
