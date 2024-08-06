export declare class IrFooter {
    version: string;
    private socials;
    contactDialog: HTMLIrDialogElement;
    renderLocationField(field: string | null, withComma?: boolean): string;
    renderPropertyEmail(): any;
    getPhoneNumber(): any[];
    render(): any;
}
