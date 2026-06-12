export declare class IrFilterCard {
    /** Viewport at/above which the filter body is always shown and the toggle is hidden. */
    private static readonly DESKTOP_QUERY;
    collapsed: boolean;
    isDesktop: boolean;
    private mediaQuery?;
    componentWillLoad(): void;
    disconnectedCallback(): void;
    private handleViewportChange;
    render(): any;
}
