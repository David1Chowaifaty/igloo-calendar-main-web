import { EventEmitter } from '../../../stencil-public-runtime';
import { IHouseKeepers } from "../../../models/housekeeping";
export declare class IrHkDeleteDialog {
    user: IHouseKeepers;
    isOpen: boolean;
    selectedId: string;
    isConfirming: boolean;
    modalClosed: EventEmitter<null>;
    resetData: EventEmitter<string>;
    private housekeepingService;
    openModal(): Promise<void>;
    closeModal(): Promise<void>;
    private handleConfirm;
    render(): any;
}
