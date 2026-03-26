import { EventEmitter } from '../../../../stencil-public-runtime';
export declare class IrTasksHeader {
    private cleanInspectAnimationRef;
    private cleanedAnimationRef;
    headerButtonPress: EventEmitter<{
        name: 'cleaned' | 'export' | 'archive' | 'clean-inspect';
    }>;
    handleCleanedButtonAnimation(e: CustomEvent): void;
    render(): any;
}
