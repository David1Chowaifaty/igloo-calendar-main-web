export declare class IrQueueManager {
    el: HTMLElement;
    ticket: string;
    isLoading: boolean;
    private tokenService;
    data: {
        pendingRequests: number[];
        properties: string[];
        q_name: string;
        total_pending: number;
    }[];
    componentWillLoad(): void;
    handleTicketChange(newValue: string, oldValue: string): void;
    private init;
    private formatResults;
    render(): any;
}
