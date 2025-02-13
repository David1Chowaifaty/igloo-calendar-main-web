import { EventEmitter } from '../../../../stencil-public-runtime';
export declare class IrTasksHeader {
    isCleanedEnabled: boolean;
    private btnRef;
    headerButtonPress: EventEmitter<{
        name: 'cleaned' | 'export' | 'archive';
    }>;
    handleCleanedButtonAnimation(e: CustomEvent): void;
    render(): any;
}
