import { type TableOptions } from '@tanstack/table-core';
export declare const flexRender: <TProps extends object>(comp: any, props: TProps) => any;
export declare const useTable: <TData extends unknown>(options: TableOptions<TData>) => import("@tanstack/table-core").Table<TData>;
