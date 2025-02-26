import { ArchivedTask } from "../../../../models/housekeeping";
export type ArchivesFilters = {
    from_date: string;
    to_date: string;
    filtered_by_hkm?: number[];
    filtered_by_unit?: number[];
};
export declare class IrHkArchive {
    propertyId: string | number;
    filters: ArchivesFilters;
    data: (ArchivedTask & {
        id: string;
    })[];
    isLoading: 'search' | 'excel' | null;
    private houseKeepingService;
    private units;
    componentWillLoad(): void;
    private setUpUnits;
    private initializeData;
    private getArchivedTasks;
    handleDateRangeChange(e: CustomEvent): void;
    private updateFilters;
    searchArchive(e: CustomEvent): Promise<void>;
    exportArchive(e: CustomEvent): Promise<void>;
    render(): any;
}
