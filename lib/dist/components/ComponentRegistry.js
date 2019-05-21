"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_native_1 = require("react-native");
class ComponentRegistry {
    constructor(store, componentEventsObserver) {
        this.store = store;
        this.componentEventsObserver = componentEventsObserver;
    }
    registerComponent(componentName, componentProvider, componentWrapper, concreteComponentProvider, ReduxProvider, reduxStore) {
        const NavigationComponent = () => {
            return componentWrapper.wrap(componentName.toString(), componentProvider, this.store, this.componentEventsObserver, concreteComponentProvider, ReduxProvider, reduxStore);
        };
        this.store.setComponentClassForName(componentName.toString(), NavigationComponent);
        react_native_1.AppRegistry.registerComponent(componentName.toString(), NavigationComponent);
        return NavigationComponent;
    }
}
exports.ComponentRegistry = ComponentRegistry;
