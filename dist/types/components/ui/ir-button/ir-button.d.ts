import { EventEmitter } from '../../../stencil-public-runtime';
import { TIcons } from '../ir-icons/icons';
export declare class IrButton {
    name: string;
    text: string;
    icon: string;
    btn_color: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark' | 'outline' | 'link';
    size: 'sm' | 'md' | 'lg';
    textSize: 'sm' | 'md' | 'lg';
    btn_block: boolean;
    btn_disabled: boolean;
    btn_type: string;
    isLoading: boolean;
    btn_styles: string;
    btn_id: string;
    variant: 'default' | 'icon';
    icon_name: TIcons;
    visibleBackgroundOnHover: boolean;
    iconPosition: 'left' | 'right';
    icon_style: any;
    btnStyle: {
        [key: string]: string;
    };
    labelStyle: {
        [key: string]: string;
    };
    /** If true, will render `content` as HTML */
    renderContentAsHtml: boolean;
    clickHandler: EventEmitter<any>;
    private buttonEl;
    handleButtonAnimation(e: CustomEvent): void;
    render(): any;
}
