export declare class IrPrivacyPolicy {
    label: string;
    policyTriggerStyle: Partial<CSSStyleDeclaration>;
    dialogRef: HTMLIrDialogElement;
    replaceStringByObjectValue(input: string, replacements: {
        [key: string]: string;
    }): string;
    render(): any;
}
