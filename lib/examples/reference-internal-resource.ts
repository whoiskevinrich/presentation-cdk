import * as cdk from 'aws-cdk-lib';
import * as nodeLambda from 'aws-cdk-lib/aws-lambda-nodejs';
import * as logs from 'aws-cdk-lib/aws-logs';
import { Construct } from 'constructs';

export class MonitoringPlane extends cdk.Stack {
    public readonly LogGroup: logs.ILogGroup;

    constructor(scope: Construct, id: string, props?: cdk.StackProps) {
        super(scope, id, props);

        this.LogGroup = new logs.LogGroup(this, 'LogGroup', {
            logGroupName: 'my-log-group',
        });
    }
}

export interface ApplicationPlaneProps extends cdk.StackProps {
    readonly logGroup: logs.ILogGroup;
}

export class ApplicationPlane extends cdk.Stack {
    constructor(scope: Construct, id: string, props: ApplicationPlaneProps) {
        super(scope, id, props);

        new nodeLambda.NodejsFunction(this, 'my-function', {
            logGroup: props.logGroup,
        });
    }
}

const app = new cdk.App();
const monitoringPlane = new MonitoringPlane(app, 'MonitoringPlane');
new ApplicationPlane(app, 'ApplicationPlane', {
    logGroup: monitoringPlane.LogGroup,
});
