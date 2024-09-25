#!/usr/bin/env node
import { App, Aspects } from 'aws-cdk-lib';
import { RetentionDays } from 'aws-cdk-lib/aws-logs';
import 'source-map-support/register';
import { ApplyDestroyPolicy } from '../lib/aspects/removal-policy-aspect';
import { DevTipsAppStack } from '../lib/dev-tips-app-stack';
import { ExampleRoleAbstractions } from '../lib/examples/role-abstractions';
import { QueuedDevTipsAppStack } from '../lib/queued-dev-tips-app-stack';

const app = new App();
new DevTipsAppStack(app, 'DevTipsApp', {});
new QueuedDevTipsAppStack(app, 'QueuedDevTipsApp', {
    logRetention: RetentionDays.ONE_WEEK,
});

new ExampleRoleAbstractions(app, 'RoleBuilder', {});

Aspects.of(app).add(new ApplyDestroyPolicy());
