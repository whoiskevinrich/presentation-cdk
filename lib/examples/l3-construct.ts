import * as cdk from 'aws-cdk-lib';
import * as lambda from 'aws-cdk-lib/aws-lambda';
import * as lambdaEventSource from 'aws-cdk-lib/aws-lambda-event-sources';
import * as sns from 'aws-cdk-lib/aws-sns';
import * as sqs from 'aws-cdk-lib/aws-sqs';
import { Construct } from 'constructs';

export interface ExampleL3ConstructProps extends cdk.StackProps {
    readonly timeout: number;
}

export class ExampleL3Construct extends cdk.Stack {
    constructor(scope: Construct, id: string, props: ExampleL3ConstructProps) {
        super(scope, id, props);

        const queue = new sqs.Queue(this, 'InputQueue', {
            visibilityTimeout: cdk.Duration.seconds(props.timeout),
        });

        const lambdaFn = new lambda.Function(this, 'MyFunction', {
            code: lambda.Code.fromInline(
                'exports.handler = function(event) { console.info(event) }'
            ),
            runtime: lambda.Runtime.NODEJS_20_X,
            handler: 'index.handler',
            timeout: cdk.Duration.seconds(props.timeout),
            events: [new lambdaEventSource.SqsEventSource(queue)],
        });

        const topic = new sns.Topic(this, 'OutputTopic', {});
        topic.grantPublish(lambdaFn);
    }
}
