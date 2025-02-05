import { ICountry } from "../../components";
import { EventEmitter } from '../../stencil-public-runtime';
export declare class IrPhoneInput {
    el: HTMLElement;
    label: string;
    value: string;
    disabled: boolean;
    error: boolean;
    token: string;
    language: string;
    default_country: number;
    phone_prefix: string | null;
    placeholder: string;
    countries: ICountry[];
    textChange: EventEmitter<{
        phone_prefix: string;
        mobile: string;
    }>;
    inputValue: string;
    isDropdownVisible: boolean;
    currentCountry: ICountry;
    private bookingService;
    componentWillLoad(): Promise<void>;
    handleValueChange(newValue: any, oldValue: any): void;
    handlePhoneChange(newValue: any, oldValue: any): void;
    handleDocumentClick(event: MouseEvent): void;
    handleInputChange(e: InputEvent): void;
    private setCountryFromPhonePrefix;
    setCurrentCountry(id: number): void;
    render(): any;
}
