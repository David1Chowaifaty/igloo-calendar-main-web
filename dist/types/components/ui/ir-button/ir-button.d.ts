import { EventEmitter } from '../../../stencil-public-runtime';
import { TIcons } from '../ir-icons/icons';
export declare class IrButton {
    /**
     * The name of the button, used for identification purposes.
     */
    name: string;
    /**
     * The text content displayed inside the button.
     */
    text: string;
    /**
     * The color theme of the button.
     */
    btn_color: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark' | 'outline' | 'link';
    /**
     * The size of the button.
     */
    size: 'sm' | 'md' | 'lg';
    /**
     * The size of the text inside the button.
     */
    textSize: 'sm' | 'md' | 'lg';
    /**
     * Whether the button should expand to the full width of its container.
     */
    btn_block: boolean;
    /**
     * Disables the button when set to true.
     */
    btn_disabled: boolean;
    /**
     * The button type attribute (`button`, `submit`, or `reset`).
     */
    btn_type: string;
    /**
     * Displays a loading indicator when true and disables the button.
     */
    isLoading: boolean;
    /**
     * Additional custom class names for the button.
     */
    btn_styles: string;
    /**
     * A unique identifier for the button instance.
     */
    btn_id: string;
    /**
     * Visual variant of the button: either standard (`default`) or icon-only (`icon`).
     */
    variant: 'default' | 'icon';
    /**
     * The name of the icon to display.
     */
    icon_name: TIcons;
    /**
     * If true, applies a visible background when hovered.
     */
    visibleBackgroundOnHover: boolean;
    /**
     * Position of the icon relative to the button text.
     */
    iconPosition: 'left' | 'right';
    /**
     * Custom style object for the icon.
     */
    icon_style: any;
    /**
     * Custom inline styles for the button element.
     */
    btnStyle: {
        [key: string]: string;
    };
    /**
     * Custom inline styles for the label/text inside the button.
     */
    labelStyle: {
        [key: string]: string;
    };
    /**
     * If true, renders the text property as raw HTML inside the button.
     */
    renderContentAsHtml: boolean;
    /**
     * Emits a custom click event when the button is clicked.
     */
    clickHandler: EventEmitter<any>;
    private buttonEl;
    handleButtonAnimation(e: CustomEvent): void;
    /**
     * Triggers a bounce animation on the button.
     */
    bounce(): Promise<void>;
    render(): any;
}
