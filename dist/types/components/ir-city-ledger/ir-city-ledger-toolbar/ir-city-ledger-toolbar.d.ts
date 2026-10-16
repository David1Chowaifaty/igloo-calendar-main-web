import { EventEmitter } from '../../../stencil-public-runtime';
import { type CLAccountOverview } from "../../../services/city-ledger/index";
export declare class IrCityLedgerToolbar {
    agentId: number | null;
    currencySymbol: string;
    accountOverview: CLAccountOverview | null;
    createInvoice: EventEmitter<void>;
    private cityLedgerService;
    componentWillLoad(): void;
    handleAgentIdChange(newValue: number | null, oldValue: number | null): Promise<void>;
    refresh(): Promise<void>;
    private fetchOverview;
    render(): any;
}
