import { EventEmitter } from '../../../stencil-public-runtime';
export declare class IrFooter {
    version: string;
    openPrivacyPolicy: EventEmitter<null>;
    private socials;
    contactDialog: HTMLIrDialogElement;
    renderLocationField(field: string | null, withComma?: boolean): string;
    renderPropertyEmail(): any;
    getPhoneNumber(): any[];
    render(): any;
}
