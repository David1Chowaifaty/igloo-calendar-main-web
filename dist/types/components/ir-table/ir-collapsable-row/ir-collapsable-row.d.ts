import { Row } from '@tanstack/table-core';
export declare class IrCollapsableRow {
    row: Row<any>;
    isActive: boolean;
    private renderCell;
    render(): any[];
}
