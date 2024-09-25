import { CfnResource, IAspect, RemovalPolicy } from 'aws-cdk-lib';
import { IConstruct } from 'constructs';

export class ApplyDestroyPolicy implements IAspect {
    public visit(node: IConstruct): void {
        if (node instanceof CfnResource) {
            node.applyRemovalPolicy(RemovalPolicy.DESTROY);
        }
    }
}
