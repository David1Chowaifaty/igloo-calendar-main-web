import { FolioPayment } from "../../../../../components";
import { EventEmitter } from '../../../../../stencil-public-runtime';
import { SidebarOpenEvent } from "../../../types";
export declare class IrRevenueRowDetails {
    payment: FolioPayment;
    revenueOpenSidebar: EventEmitter<SidebarOpenEvent>;
    render(): any;
}
