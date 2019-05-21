import * as React from 'react';
export declare class Store {
    private componentsByName;
    private propsById;
    setPropsForId(componentId: string, props: any): void;
    getPropsForId(componentId: string): any;
    setComponentClassForName(componentName: string | number, ComponentClass: () => React.ComponentClass<any, any>): void;
    getComponentClassForName(componentName: string | number): () => React.ComponentClass<any, any>;
    cleanId(componentId: string): void;
}
