import { EventEmitter } from '../../../stencil-public-runtime';
import { ExtraServiceDefinition } from "../../../services/extra-services/types";
export declare class IrExtraServiceEditorDrawer {
    open: boolean;
    service?: ExtraServiceDefinition;
    loading: boolean;
    extraServiceEditorClose: EventEmitter<void>;
    private baseId;
    private handleDrawerClose;
    render(): any;
}
