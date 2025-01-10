import { EventEmitter } from '../../../../stencil-public-runtime';
import { ZodIssue } from 'zod';
export declare class IrUserForm {
    errors: Record<string, ZodIssue>;
    changePageLoading: EventEmitter<'remove' | 'add'>;
    private propertyService;
    componentWillLoad(): Promise<void>;
    render(): any;
}
