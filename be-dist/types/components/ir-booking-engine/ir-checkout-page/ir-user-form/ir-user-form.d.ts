import { EventEmitter } from '../../../../stencil-public-runtime';
import { ZodIssue } from 'zod';
export declare class IrUserForm {
    errors: Record<string, ZodIssue>;
    private propertyService;
    changePageLoading: EventEmitter<'remove' | 'add'>;
    componentWillLoad(): Promise<void>;
    render(): any;
}
