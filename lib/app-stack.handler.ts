import { Handler } from 'aws-lambda';
import { ProgrammingTipsRepository } from './src/tips-generator-data';

export const handler: Handler = async (event, context) => {
    console.info('event:', event);

    const tips = new ProgrammingTipsRepository();
    const tip = tips.get();

    return {
        statusCode: 200,
        body: JSON.stringify({
            message: tip,
        }),
    };
};
