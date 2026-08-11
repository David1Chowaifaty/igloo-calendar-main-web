import { EventEmitter } from '../../../../stencil-public-runtime';
import { ExtraServiceDefinition } from "../../../../services/extra-services/types";
export declare class IrExtraServiceEditorForm {
    service: ExtraServiceDefinition;
    formId: string;
    upsertExtraService: EventEmitter<ExtraServiceDefinition>;
    closeDrawer: EventEmitter<void>;
    loadingChanged: EventEmitter<boolean>;
    private extraServicesService;
    private updateField;
    private isDayUse;
    private isAccommodation;
    private handleSubmit;
    render(): any;
}
