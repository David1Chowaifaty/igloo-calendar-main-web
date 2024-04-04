import { EventEmitter } from '../../../stencil-public-runtime';
export declare class IrButton {
    size: 'sm' | 'md' | 'lg';
    disabled: boolean;
    label: string;
    name: string;
    buttonId: string;
    type: 'button' | 'submit' | 'reset' | 'menu';
    haveLeftIcon: boolean;
    variants: 'default' | 'outline' | 'secondary' | 'destructive' | 'ghost' | 'link' | 'icon' | 'ghost-primary' | 'outline-primary';
    isLoading: boolean;
    buttonStyles: Partial<CSSStyleDeclaration>;
    buttonClassName: string;
    buttonClick: EventEmitter<MouseEvent>;
    private buttonRef;
    applyStyles(style: Partial<CSSStyleDeclaration>): void;
    componentDidLoad(): void;
    render(): any;
}
