import { ComponentProvider } from 'react-native';
import { Store } from './Store';
import { ComponentEventsObserver } from '../events/ComponentEventsObserver';
import { ComponentWrapper } from './ComponentWrapper';
export declare class ComponentRegistry {
    private readonly store;
    private readonly componentEventsObserver;
    constructor(store: Store, componentEventsObserver: ComponentEventsObserver);
    registerComponent(componentName: string | number, componentProvider: ComponentProvider, componentWrapper: ComponentWrapper, concreteComponentProvider?: ComponentProvider, ReduxProvider?: any, reduxStore?: any): ComponentProvider;
}
