import { EventEmitter } from '../../../stencil-public-runtime';
import type { IReallocationPayload } from "../../../models/property-types";
export declare class IglReallocationDialog {
    hostEl: HTMLElement;
    data?: IReallocationPayload;
    selectedRateplan?: string;
    showRateplanError: boolean;
    dialogClose: EventEmitter<boolean>;
    revertBooking: EventEmitter<string>;
    resetModalState: EventEmitter<void>;
    private dialogEl?;
    private rateplanSelectEl?;
    private eventsService;
    handleDataChange(newData: IReallocationPayload | undefined): void;
    private reallocateUnit;
    private get rateplanOptions();
    private formatRateplanLabel;
    private hasRateplanRequirement;
    private validateRateplanSelection;
    private focusRateplanSelect;
    private resetState;
    private handleDialogVisibilityChange;
    private handleRateplanChange;
    private handleCancelClick;
    render(): any;
}
