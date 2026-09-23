import { ConnectedHK } from "../../../../services/housekeeping/index";
import { EventEmitter } from '../../../../stencil-public-runtime';
export declare class IrHkStaffTasksHeader {
    connectedHK: ConnectedHK;
    language: string;
    languageChanged: EventEmitter<string>;
    private handleWaChange;
    render(): any;
}
