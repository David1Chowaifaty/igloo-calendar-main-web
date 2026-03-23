import { EventEmitter } from '../../../stencil-public-runtime';
import type { TaxOption, ServiceCategoryOption } from './ir-city-ledger-transaction-drawer/ir-city-ledger-transaction-form/ir-city-ledger-transaction-form.schema';
import type { FolioFilters, FolioSummary } from './types';
import type { ICurrency } from "../../../models/property";
export declare class IrCityLedgerFolio {
    agentId: number | null;
    propertyId: number;
    taxOptions: TaxOption[];
    serviceCategoryOptions: ServiceCategoryOption[];
    currencySymbol: string;
    currencies: ICurrency[];
    isTransactionOpen: boolean;
    filters: FolioFilters;
    folioSummaryUpdate: EventEmitter<FolioSummary>;
    render(): any;
}
