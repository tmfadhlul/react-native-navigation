"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const react_native_1 = require("react-native");
const renderer = require("react-test-renderer");
const ComponentRegistry_1 = require("./ComponentRegistry");
const Store_1 = require("./Store");
describe('ComponentRegistry', () => {
    let uut;
    let store;
    let mockRegistry;
    let mockWrapper;
    class WrappedComponent extends React.Component {
        render() {
            return (<react_native_1.Text>
          {'Hello, World!'}
        </react_native_1.Text>);
        }
    }
    beforeEach(() => {
        store = new Store_1.Store();
        mockRegistry = react_native_1.AppRegistry.registerComponent = jest.fn(react_native_1.AppRegistry.registerComponent);
        mockWrapper = jest.mock('./ComponentWrapper');
        mockWrapper.wrap = () => WrappedComponent;
        uut = new ComponentRegistry_1.ComponentRegistry(store, {});
    });
    it('registers component by componentName into AppRegistry', () => {
        expect(mockRegistry).not.toHaveBeenCalled();
        const result = uut.registerComponent('example.MyComponent.name', () => { }, mockWrapper);
        expect(mockRegistry).toHaveBeenCalledTimes(1);
        expect(mockRegistry.mock.calls[0][0]).toEqual('example.MyComponent.name');
        expect(mockRegistry.mock.calls[0][1]()).toEqual(result());
    });
    it('saves the wrapper component generator to the store', () => {
        expect(store.getComponentClassForName('example.MyComponent.name')).toBeUndefined();
        uut.registerComponent('example.MyComponent.name', () => { }, mockWrapper);
        const Class = store.getComponentClassForName('example.MyComponent.name');
        expect(Class).not.toBeUndefined();
        expect(Class()).toEqual(WrappedComponent);
    });
    it('resulting in a normal component', () => {
        uut.registerComponent('example.MyComponent.name', () => { }, mockWrapper);
        const Component = mockRegistry.mock.calls[0][1]();
        const tree = renderer.create(<Component componentId='123'/>);
        expect(tree.toJSON().children).toEqual(['Hello, World!']);
    });
    it('should not invoke generator', () => {
        const generator = jest.fn(() => { });
        uut.registerComponent('example.MyComponent.name', generator);
        expect(generator).toHaveBeenCalledTimes(0);
    });
    it('saves wrapped component to store', () => {
        jest.spyOn(store, 'setComponentClassForName');
        const generator = jest.fn(() => { });
        const componentName = 'example.MyComponent.name';
        uut.registerComponent(componentName, generator, mockWrapper);
        expect(store.getComponentClassForName(componentName)()).toEqual(WrappedComponent);
    });
});
