export declare class IrQueueManager {
    el: HTMLElement;
    ticket: string;
    language: string;
    isLoading: boolean;
    private apiClientService;
    data: {
        pendingRequests: number[];
        properties: string[];
        q_name: string;
        total_pending: number;
    }[];
    componentWillLoad(): void;
    handleTicketChange(newValue: string, oldValue: string): void;
    private init;
    private fetchData;
    private formatResults;
    render(): any;
}
