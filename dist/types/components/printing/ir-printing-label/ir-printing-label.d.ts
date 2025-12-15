export declare class IrPrintingLabel {
    /**
     * Fallback label text (used if no label slot is provided)
     */
    label?: string;
    asHtml: boolean;
    display: 'inline' | 'flex';
    /**
     * Fallback content text (used if no content slot is provided)
     */
    content?: string;
    render(): any;
}
