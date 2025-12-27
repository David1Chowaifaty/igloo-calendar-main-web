import { EventEmitter } from '../../stencil-public-runtime';
import { Notification } from './types';
export declare class IrNotifications {
    el: HTMLElement;
    notifications: Notification[];
    notificationCleared: EventEmitter<Notification>;
    private buttonRef;
    private animationRef;
    private readonly bellKeyframes;
    componentDidLoad(): void;
    componentDidUpdate(): void;
    handleNotificationCountChange(newValue: Notification[], oldValue: Notification[]): void;
    private updateNotificationBadge;
    private animateNotificationChange;
    private getRelativeTimeFromParts;
    render(): any;
}
