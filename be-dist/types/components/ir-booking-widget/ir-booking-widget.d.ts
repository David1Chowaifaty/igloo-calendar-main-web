/// <reference types="node" />
import { TContainerStyle } from './types';
export declare class IrBookingWidget {
    el: HTMLIrWidgetElement;
    position: 'fixed' | 'block';
    contentContainerStyle: TContainerStyle;
    propertyId: number;
    perma_link: string;
    p: string;
    language: string;
    roomTypeId: string | null;
    aff: string;
    delay: number;
    isPopoverOpen: boolean;
    dateModifiers: any;
    isLoading: boolean;
    dates: {
        from_date: Date | null;
        to_date: Date | null;
    };
    guests: {
        adultCount: number;
        childrenCount: number;
    };
    private baseUrl;
    private popover;
    private token;
    private commonService;
    private propertyService;
    private guestPopover;
    containerRef: HTMLDivElement;
    elTimout: NodeJS.Timeout;
    private initApp;
    componentWillLoad(): Promise<void>;
    componentDidLoad(): void;
    initProperty(): Promise<void>;
    handleContentContainerStyle(): void;
    private modifyContainerStyle;
    handleBooknow(): void;
    private getDateModifiers;
    private renderDateTrigger;
    private renderAdultChildTrigger;
    disconnectedCallback(): void;
    render(): any;
}
