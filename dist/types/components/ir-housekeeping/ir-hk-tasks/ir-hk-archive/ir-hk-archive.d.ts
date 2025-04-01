import { ArchivedTask } from "../../../../models/housekeeping";
export type ArchivesFilters = {
    from_date: string;
    to_date: string;
    filtered_by_hkm?: number[];
    filtered_by_unit?: number[];
};
export declare class IrHkArchive {
    propertyId: string | number;
    language: string;
    ticket: string;
    filters: ArchivesFilters;
    data: (ArchivedTask & {
        id: string;
    })[];
    isLoading: 'search' | 'excel' | null;
    fetchedData: boolean;
    selectedBooking: number | string | null;
    private houseKeepingService;
    private units;
    private handleSideBarToggle;
    componentWillLoad(): void;
    private setUpUnits;
    private getArchivedTasks;
    handleDateRangeChange(e: CustomEvent): void;
    private updateFilters;
    searchArchive(e: CustomEvent): Promise<void>;
    exportArchive(e: CustomEvent): Promise<void>;
    render(): any;
}
