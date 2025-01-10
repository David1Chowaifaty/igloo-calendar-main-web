import { EventEmitter } from '../../../stencil-public-runtime';
import { Locale } from 'date-fns';
import { IExposedProperty } from "../../../models/property";
import { ICurrency, IExposedLanguages, pages } from "../../../models/common";
export declare class IrBookingPage {
    fromDate: string;
    toDate: string;
    adultCount: string;
    ages: string;
    childrenCount: string;
    selectedLocale: Locale;
    property: IExposedProperty;
    currencies: ICurrency[];
    languages: IExposedLanguages[];
    routing: EventEmitter<pages>;
    private checkoutContainerRef;
    roomTypeSectionRef: HTMLElement;
    private availabilityHeaderRef;
    propertyGalleryRef: HTMLDivElement;
    componentWillLoad(): void;
    handleBookingAnimation(e: CustomEvent): void;
    handleScrolling(e: CustomEvent): void;
    private renderTotalNights;
    render(): any;
}
