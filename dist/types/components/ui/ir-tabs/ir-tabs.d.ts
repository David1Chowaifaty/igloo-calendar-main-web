import { EventEmitter } from '../../../stencil-public-runtime';
export type Tab = {
    id: string;
    label: string;
};
export declare class IrTabs {
    el: HTMLElement;
    /**
     * Array of tab objects containing id and label
     * @type {Tab[]}
     * @default []
     */
    tabs: Tab[];
    /**
     * ID of the tab that should be selected initially
     * @type {string}
     * @default undefined
     */
    initialTab: string;
    /**
     * Whether the tabs are disabled
     * @type {boolean}
     * @default false
     */
    disabled: boolean;
    /**
     * Aria label for the tab list
     * @type {string}
     * @default 'Tabs'
     */
    ariaLabel: string;
    _selectedTab: Tab;
    /**
     * Emitted when a tab is selected
     * @event tabChanged
     * @type {CustomEvent<Tab>}
     */
    tabChanged: EventEmitter<Tab>;
    private activeIndicator;
    private animationFrameId;
    componentWillLoad(): void;
    disconnectedCallback(): void;
    private updateActiveIndicator;
    private remSize;
    private selectTab;
    private handleKeyDown;
    render(): any;
}
