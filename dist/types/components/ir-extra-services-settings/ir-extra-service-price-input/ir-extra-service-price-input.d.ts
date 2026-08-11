import { EventEmitter } from '../../../stencil-public-runtime';
import { ChargeRule } from "../../ir-tax-service-categories/types";
export declare class IrExtraServicePriceInput {
    label: string;
    placeholder: string;
    /**
     * Controlled charge rule value passed from the parent: `value` holds the price,
     * `mode` holds the taxation mode code (Inclusive/Exclusive).
     */
    chargeRule: ChargeRule;
    autoValidate: boolean;
    price: ChargeRule;
    priceChange: EventEmitter<ChargeRule>;
    componentWillLoad(): void;
    handlePriceValueChange(newValue: ChargeRule, oldValue: ChargeRule): void;
    private updatePriceField;
    render(): any;
}
