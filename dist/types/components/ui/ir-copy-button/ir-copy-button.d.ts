export declare class IrCopyButton {
    text: string;
    state: 'success' | 'failed' | 'loading' | null;
    private tooltipId;
    private stateResetTimeout?;
    private get currentState();
    private get tooltipMessage();
    disconnectedCallback(): void;
    private queueStateReset;
    private copyToClipboard;
    private renderIcons;
    render(): any;
}
