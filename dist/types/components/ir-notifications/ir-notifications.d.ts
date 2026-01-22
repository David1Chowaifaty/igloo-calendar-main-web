import { EventEmitter } from '../../stencil-public-runtime';
import { Notification } from './types';
import { FetchNotificationsResult as Notifications } from "../../services/property.service";
export declare class IrNotifications {
    el: HTMLElement;
    ticket: string;
    propertyid: number;
    notifications: Notifications;
    notificationCleared: EventEmitter<Notification>;
    private tokenService;
    private propertyService;
    private buttonRef;
    private animationRef;
    private readonly bellKeyframes;
    componentWillLoad(): void;
    componentDidLoad(): void;
    componentDidUpdate(): void;
    handleNotificationCountChange(newValue: Notification[], oldValue: Notification[]): void;
    handleTicketChange(newValue: string, oldValue: string): void;
    handlePropertyChange(newValue: number, oldValue: number): void;
    private fetchNotifications;
    private updateNotificationBadge;
    private animateNotificationChange;
    render(): any;
}
