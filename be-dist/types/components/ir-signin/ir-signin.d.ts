import { EventEmitter } from '../../stencil-public-runtime';
import { TAuthNavigation } from '../ir-auth/auth.types';
export declare class IrSignin {
    navigate: EventEmitter<TAuthNavigation>;
    renderFBIcon(): any;
    render(): any;
}
