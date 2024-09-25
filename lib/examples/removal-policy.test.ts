import * as cdk from 'aws-cdk-lib';
import { Template } from 'aws-cdk-lib/assertions';
import { RemovalPolicyStack } from './removal-policy';

it('should have a DESTROY removal policy', () => {
    const app = new cdk.App();
    const stack = new RemovalPolicyStack(app, 'MyTestStack');
    const template = Template.fromStack(stack);

    template.hasResource('AWS::DynamoDB::Table', {
        DeletionPolicy: 'Delete',
    });
});
