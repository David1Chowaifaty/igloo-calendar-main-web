import { EventEmitter } from '../../stencil-public-runtime';
import { AllowedProperties } from "../../services/property.service";
type AllowedProperty = NonNullable<AllowedProperties>[number];
export declare class IrPropertySwitcher {
    el: HTMLIrPropertySwitcherElement;
    mode: 'dropdown' | 'dialog';
    open: boolean;
    selectedProperty?: AllowedProperty;
    /** Emits whenever the user selects a new property from the switcher dialog. */
    propertyChange: EventEmitter<AllowedProperty>;
    private trigger;
    private handlePropertySelected;
    render(): any;
}
export {};
