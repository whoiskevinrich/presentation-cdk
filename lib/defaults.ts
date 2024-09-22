import * as lambda from 'aws-cdk-lib/aws-lambda';
import * as nodeLambda from 'aws-cdk-lib/aws-lambda-nodejs';

export const lambdaDemoDefaults = {
    runtime: lambda.Runtime.NODEJS_20_X,
} as nodeLambda.NodejsFunctionProps;
