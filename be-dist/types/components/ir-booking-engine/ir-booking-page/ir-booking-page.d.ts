import { EventEmitter } from '../../../stencil-public-runtime';
import { Locale } from 'date-fns';
import { ICurrency, IExposedLanguages, pages } from "../../../models/common";
import { IExposedProperty } from "../../../models/property";
export declare class IrBookingPage {
    selectedLocale: Locale;
    property: IExposedProperty;
    currencies: ICurrency[];
    languages: IExposedLanguages[];
    routing: EventEmitter<pages>;
    checkoutContainerRef: HTMLDivElement;
    componentWillLoad(): void;
    handleBookingAnimation(e: CustomEvent): void;
    renderTotalNights(): string;
    render(): any;
}
