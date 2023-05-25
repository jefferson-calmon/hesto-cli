/**
 * @param %name%
 * @param %database%
 * @param %baseDbPath%
 */
export const controller = `import BaseController from './BaseController';
import { %name% } from 'models/%name%';

class %name%Controller extends BaseController.%database%<%name%> {
    constructor() {
        const baseDbPath = '%baseDbPath%';

        super(baseDbPath);
        Object.assign(this, new BaseController.%database%<%name%>(baseDbPath));
    }
}

export default %name%Controller;`;

/**
 * @param %imports%
 * @param %items%
 */
export const controllerIndex = `%imports%\n\nexport const controllers = {\n%items%\n};`;
