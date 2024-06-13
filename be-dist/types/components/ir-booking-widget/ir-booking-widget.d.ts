import { TContainerStyle } from './types';
export declare class IrBookingWidget {
    el: HTMLIrBookingWidgetElement;
    position: 'sticky' | 'block';
    contentContainerStyle: TContainerStyle;
    propertyId: number;
    baseUrl: string;
    language: string;
    isPopoverOpen: boolean;
    isLoading: boolean;
    dates: {
        from_date: Date | null;
        to_date: Date | null;
    };
    guests: {
        adultCount: number;
        childrenCount: number;
    };
    private popover;
    private token;
    private commonService;
    private propertyService;
    private initApp;
    componentWillLoad(): Promise<void>;
    initProperty(): Promise<void>;
    handleContentContainerStyle(): void;
    private modifyContainerStyle;
    handleBooknow(): void;
    private renderDateTrigger;
    private renderAdultChildTrigger;
    render(): any;
}
