export declare class IrProgressIndicator {
    /**
     * The percentage value to display and fill the progress bar.
     * Example: "75%"
     */
    percentage: string;
    /**
     * The color variant of the progress bar.
     * Options:
     * - 'primary' (default)
     * - 'secondary'
     */
    color: 'primary' | 'secondary';
    render(): any;
}
