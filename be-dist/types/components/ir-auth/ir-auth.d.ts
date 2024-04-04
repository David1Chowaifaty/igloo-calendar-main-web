import { EventEmitter } from '../../stencil-public-runtime';
import { TAuthNavigation } from './auth.types';
export declare class IrAuth {
    el: HTMLElement;
    authState: TAuthNavigation;
    animationDirection: string;
    closeDialog: EventEmitter<null>;
    handleNavigation(e: CustomEvent): void;
    render(): any;
}
