import { EventEmitter } from '../../../stencil-public-runtime';
import { Locale } from 'date-fns';
import { ICurrency, IExposedLanguages, pages } from "../../../models/commun";
import { IExposedProperty } from "../../../models/property";
export declare class IrBookingPage {
    fromDate: string;
    toDate: string;
    adultCount: string;
    childrenCount: string;
    selectedLocale: Locale;
    property: IExposedProperty;
    currencies: ICurrency[];
    languages: IExposedLanguages[];
    routing: EventEmitter<pages>;
    checkoutContainerRef: HTMLDivElement;
    roomTypeSectionRef: HTMLElement;
    componentWillLoad(): void;
    handleBookingAnimation(e: CustomEvent): void;
    handleScrolling(e: CustomEvent): void;
    renderTotalNights(): string;
    render(): any;
}
