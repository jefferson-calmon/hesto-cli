
/**
 * @param %name%
 */
export const context = `import React, { createContext } from 'react';

import { %name% } from 'models/%name%';

interface %name%ContextProps {
    children: React.ReactNode;
}

export interface %name%ContextData {

}

export const %name%Context = createContext({} as %name%ContextData);

export const %name%Provider = (props: %name%ContextProps): JSX.Element => {
    return (
        <%name%Context.Provider value={{  }}>
            {props.children}
        </%name%Context.Provider>
    );
};`;
