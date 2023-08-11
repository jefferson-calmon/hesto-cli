/**
 * @param %name%
 */
export const model = `import { BaseModel } from './Base';

export interface %name% extends BaseModel {

}
`;

export const modelWithZod = `import { z } from 'zod';

import { BaseModelSchema, WithoutBaseProps } from './Base';

export const %name%Schema = BaseModelSchema.merge(
	z.object({
        
    })
);

export type %name% = z.infer<typeof %name%Schema>;
export type %name%Mutation = WithoutBaseProps<z.infer<typeof %name%Schema>>;
`;
