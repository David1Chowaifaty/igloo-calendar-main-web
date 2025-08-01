export declare class IrNotifications {
    el: HTMLElement;
    notificationCount: number;
    private buttonRef;
    handleNotificationCountChange(newValue: number, oldValue: number): void;
    componentDidLoad(): void;
    componentDidUpdate(): void;
    private updateNotificationBadge;
    private animateNotificationChange;
    render(): any;
}
