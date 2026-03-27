import { EventEmitter } from '../../../../stencil-public-runtime';
export declare class IrTasksHeader {
    el: HTMLIrTasksHeaderElement;
    headerButtonPress: EventEmitter<{
        name: 'cleaned' | 'export' | 'archive' | 'clean-inspect';
    }>;
    private cleanAndInspectEl;
    private cleanEl;
    private prevSelectedCount;
    componentDidRender(): void;
    render(): any;
}
