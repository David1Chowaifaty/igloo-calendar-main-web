import { THousekeepingTrigger } from "../../../models/housekeeping";
export declare class IrHkTeam {
    el: HTMLElement;
    currentTrigger: THousekeepingTrigger | null;
    private deletionTimout;
    private renderAssignedUnits;
    renderCurrentTrigger(): any;
    handleCloseSideBar(e: CustomEvent): void;
    handleDeletion(user: any): void;
    disconnectedCallback(): void;
    render(): any;
}
