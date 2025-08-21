import { EventEmitter } from '../../stencil-public-runtime';
import { Notification } from './types';
export declare class IrNotifications {
    el: HTMLElement;
    notifications: Notification[];
    isOpen: boolean;
    notificationCleared: EventEmitter<Notification>;
    private buttonRef;
    componentDidLoad(): void;
    componentDidUpdate(): void;
    disconnectedCallback(): void;
    handleNotificationCountChange(newValue: Notification[], oldValue: Notification[]): void;
    private updateNotificationBadge;
    private animateNotificationChange;
    private dismissNotification;
    private onDocumentClick;
    private onDocumentKeydown;
    render(): any;
}
