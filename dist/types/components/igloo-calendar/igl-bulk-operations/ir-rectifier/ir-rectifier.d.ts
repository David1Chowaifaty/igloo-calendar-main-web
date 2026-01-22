import { EventEmitter } from '../../../../stencil-public-runtime';
type RectifierFormState = {
    property_id: number | null;
    room_type_ids: number[];
    from: string | null;
    to: string | null;
};
export declare class IrRectifier {
    formId: string;
    form: RectifierFormState;
    autoValidate: boolean;
    showRoomTypeError: boolean;
    loadingChanged: EventEmitter<boolean>;
    closeDrawer: EventEmitter<void>;
    private propertyService;
    toDateRef: HTMLIrCustomDatePickerElement;
    componentWillLoad(): void;
    private updateForm;
    private normalizeDateRange;
    private updateRoomTypeSelection;
    private handleSubmit;
    render(): any;
}
export {};
