import { EventEmitter } from '../../../stencil-public-runtime';
export declare class IrBadgeGroup {
    badge: string;
    message: string;
    variant: 'error' | 'succes' | 'primary' | 'secondary';
    clickable: boolean;
    messagePosition: 'default' | 'center';
    badgeClick: EventEmitter<MouseEvent>;
    render(): any;
}
