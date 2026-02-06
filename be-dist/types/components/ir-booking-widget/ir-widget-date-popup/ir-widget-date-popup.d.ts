import { EventEmitter } from '../../../stencil-public-runtime';
export declare class IrWidgetDatePopup {
    dateModifiers: any;
    dates: {
        from_date: Date | null;
        to_date: Date | null;
    };
    locale: string;
    disabled: boolean;
    maxSpanDays: number;
    absoluteIcon: boolean;
    isLoading: boolean;
    dateChange: EventEmitter<{
        from_date: Date | null;
        to_date: Date | null;
    }>;
    private dateWidgetPopupRef;
    private mobileDatePopupModal;
    private mediaQueryList;
    private handleMediaChange;
    componentDidLoad(): void;
    disconnectedCallback(): void;
    private renderDateTrigger;
    private renderLoadingTrigger;
    private renderDateRange;
    render(): any;
}
