export declare class IrLabel {
    /** The text to display as the label's title */
    labelText: string;
    /** The main text or HTML content to display */
    content: string;
    /** If true, will render `content` as HTML */
    renderContentAsHtml: boolean;
    /** Object representing the image used within the label */
    image?: {
        src: string;
        alt: string;
        style?: string;
    } | null;
    /** Renders a country-type image style (vs. a 'logo') */
    isCountryImage: boolean;
    /** Additional CSS classes or style for the image */
    imageStyle: string;
    /** If true, label will ignore checking for an empty content */
    ignoreEmptyContent: boolean;
    /** Placeholder text to display if content is empty */
    placeholder: string;
    render(): any;
}
