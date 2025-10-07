import { EventEmitter } from '../../../stencil-public-runtime';
import { TIcons } from '../ir-icons/icons';
export declare class IrFiltersPanel {
    /** Panel headline text */
    filterTitle: string;
    /** Optional custom collapse target id (useful for legacy CSS hooks) */
    collapseId?: string;
    /** Show collapse toggle button */
    showCollapseButton: boolean;
    /** Collapse by default */
    defaultCollapsed: boolean;
    /** Controlled collapse state */
    collapsed?: boolean;
    /** Keep content expanded on desktop and hide the collapse toggle */
    persistentOnDesktop: boolean;
    /** Optional extra class for the outer wrapper */
    panelClass?: string;
    /** Optional extra class for the card wrapper */
    cardClass: string;
    /** Optional extra class for the header row */
    headerClass?: string;
    /** Optional extra class for the filters content wrapper */
    contentClass?: string;
    /** Space between content items */
    contentGap: string;
    /** Align footer actions */
    actionsAlign: 'start' | 'center' | 'end' | 'space-between' | 'space-around';
    /** Hide the default footer actions */
    hideDefaultActions: boolean;
    /** Collapse icon when expanded */
    collapseIconOpen: TIcons;
    /** Collapse icon when collapsed */
    collapseIconClosed: TIcons;
    /** Apply button copy */
    applyLabel: string;
    /** Reset button copy */
    resetLabel: string;
    /** Disable apply action */
    disableApply: boolean;
    /** Disable reset action */
    disableReset: boolean;
    /** Show loader inside apply button */
    isApplyLoading: boolean;
    /** Optional data test id suffix for default buttons */
    actionTestId: string;
    filterToggle: EventEmitter<{
        collapsed: boolean;
    }>;
    filterApply: EventEmitter<void>;
    filterReset: EventEmitter<void>;
    internalCollapsed: boolean;
    private generatedCollapseId;
    componentWillLoad(): void;
    handleCollapsedChange(newValue: boolean | undefined): void;
    private get targetId();
    private toggleCollapse;
    private handleReset;
    private handleApply;
    private renderDefaultIcon;
    private renderCollapseButton;
    render(): any;
}
