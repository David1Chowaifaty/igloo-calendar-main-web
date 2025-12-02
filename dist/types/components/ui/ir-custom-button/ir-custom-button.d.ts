import type WaButton from '@awesome.me/webawesome/dist/components/button/button';
import { EventEmitter } from '../../../stencil-public-runtime';
export type NativeButton = WaButton;
export declare class IrCustomButton {
    link: boolean;
    iconBtn: boolean;
    /** The button's theme variant. Defaults to `neutral` if not within another element with a variant. */
    variant: NativeButton['variant'];
    /** The button's visual appearance. */
    appearance: NativeButton['appearance'];
    /** The button's size. */
    size: NativeButton['size'];
    /** Draws the button with a caret. Used to indicate that the button triggers a dropdown menu or similar behavior. */
    withCaret: NativeButton['withCaret'];
    /** Disables the button. Does not apply to link buttons. */
    disabled: NativeButton['disabled'];
    /** Draws the button in a loading state. */
    loading: NativeButton['loading'];
    /** Draws a pill-style button with rounded edges. */
    pill: NativeButton['pill'];
    /**
     * The type of button. Note that the default value is `button` instead of `submit`, which is opposite of how native
     * `<button>` elements behave. When the type is `submit`, the button will submit the surrounding form.
     */
    type: NativeButton['type'];
    /**
     * The name of the button, submitted as a name/value pair with form data, but only when this button is the submitter.
     * This attribute is ignored when `href` is present.
     */
    name: NativeButton['name'];
    /**
     * The value of the button, submitted as a pair with the button's name as part of the form data, but only when this
     * button is the submitter. This attribute is ignored when `href` is present.
     */
    value: NativeButton['value'];
    /** When set, the underlying button will be rendered as an `<a>` with this `href` instead of a `<button>`. */
    href: NativeButton['href'];
    /** Tells the browser where to open the link. Only used when `href` is present. */
    target: NativeButton['target'];
    /** When using `href`, this attribute will map to the underlying link's `rel` attribute. */
    rel: NativeButton['rel'];
    /** Tells the browser to download the linked file as this filename. Only used when `href` is present. */
    download: NativeButton['download'];
    /**
     * The "form owner" to associate the button with. If omitted, the closest containing form will be used instead. The
     * value of this attribute must be an id of a form in the same document or shadow root as the button.
     */
    form: NativeButton['form'];
    /** Used to override the form owner's `action` attribute. */
    formAction: NativeButton['formAction'];
    /** Used to override the form owner's `enctype` attribute.  */
    formEnctype: NativeButton['formEnctype'];
    /** Used to override the form owner's `method` attribute.  */
    formMethod: NativeButton['formMethod'];
    /** Used to override the form owner's `novalidate` attribute. */
    formNoValidate: NativeButton['formNoValidate'];
    /** Used to override the form owner's `target` attribute. */
    formTarget: NativeButton['formTarget'];
    clickHandler: EventEmitter<MouseEvent>;
    private buttonEl;
    componentDidLoad(): void;
    disconnectedCallback(): void;
    private handleButtonClick;
    render(): any;
}
