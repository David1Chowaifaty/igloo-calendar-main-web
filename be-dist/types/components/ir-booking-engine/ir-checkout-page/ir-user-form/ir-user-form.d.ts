import { ZodIssue } from 'zod';
export declare class IrUserForm {
    errors: Record<string, ZodIssue>;
    private dialogRef;
    private propertyService;
    componentWillLoad(): Promise<void>;
    handleButtonClick(): void;
    render(): any;
}