import moment from 'moment';
export declare class IrDateView {
    from_date: string | Date | moment.Moment;
    to_date: string | Date | moment.Moment;
    showDateDifference: boolean;
    dateOption: string;
    dates: {
        from_date: string;
        to_date: string;
        date_difference: number;
    };
    componentWillLoad(): void;
    handleFromDateChange(newVal: any, oldVal: any): void;
    handleToDateChange(newVal: any, oldVal: any): void;
    private initializeDates;
    private convertDate;
    render(): any;
}
