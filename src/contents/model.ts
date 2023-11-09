/**
 * @param %name%
 */
export const model = `import { Validations } from 'codekit';

import { BaseModel } from './Base';

export interface %name% extends BaseModel {

}

export const initial%name%: %name% = {
    id: String.uuid(),

    createdAt: '',
    updateAt: '',
}

export const validations: Validations<%name%> = {

}
`;

export const modelWithZod = `import { z } from 'zod';
import { Validations } from 'codekit';

import { BaseModelSchema, WithoutBaseProps } from './Base';

export const %name%Schema = BaseModelSchema.merge(
	z.object({
        
    })
);

export type %name% = z.infer<typeof %name%Schema>;
export type %name%Mutation = WithoutBaseProps<z.infer<typeof %name%Schema>>;

export const initial%name%: %name% = {
    id: String.uuid(),

    createdAt: '',
    updateAt: '',
}

export const validations: Validations<%name%> = {

}
`;
