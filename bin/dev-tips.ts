#!/usr/bin/env node
import * as cdk from 'aws-cdk-lib';
import 'source-map-support/register';
import { DevTipsAppStack } from '../lib/app-stack';

const app = new cdk.App();
new DevTipsAppStack(app, 'DevTipsApp', {});
