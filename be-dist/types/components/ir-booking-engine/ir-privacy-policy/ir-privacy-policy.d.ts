export declare class IrPrivacyPolicy {
    label: string;
    hideTrigger: boolean;
    policyTriggerStyle: Partial<CSSStyleDeclaration>;
    dialogRef: HTMLIrDialogElement;
    replaceStringByObjectValue(input: string, replacements: {
        [key: string]: string;
    }): string;
    openModal(): Promise<void>;
    closeModal(): Promise<void>;
    render(): any;
}
