import { EventEmitter } from '../../stencil-public-runtime';
import { Locale } from 'date-fns';
import { ICurrency, IExposedLanguages, pages } from "../../models/common";
import { IExposedProperty, Variation } from "../../models/property";
export declare class IrBookingPage {
    selectedLocale: Locale;
    property: IExposedProperty;
    currencies: ICurrency[];
    languages: IExposedLanguages[];
    routing: EventEmitter<pages>;
    componentWillLoad(): void;
    handleVariationChange(e: CustomEvent, variations: Variation[], rateplanId: number, roomTypeId: number): void;
    render(): any;
}
