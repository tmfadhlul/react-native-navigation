import { Store } from '../components/Store';
import { UniqueIdProvider } from '../adapters/UniqueIdProvider';
export declare class OptionsProcessor {
    store: Store;
    uniqueIdProvider: UniqueIdProvider;
    constructor(store: Store, uniqueIdProvider: UniqueIdProvider);
    processOptions(options: Record<string, any>): void;
    private processColor;
    private processImage;
    private processButtonsPassProps;
    private processComponent;
}
