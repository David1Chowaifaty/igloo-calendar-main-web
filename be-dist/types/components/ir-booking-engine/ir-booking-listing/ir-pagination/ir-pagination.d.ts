import { EventEmitter } from '../../../../stencil-public-runtime';
export declare class IrPagination {
    total: number;
    current: number;
    minPageShown: number;
    pageChange: EventEmitter<number>;
    private getPages;
    render(): any;
}
