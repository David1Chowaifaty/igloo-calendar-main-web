import { EventEmitter } from '../../../stencil-public-runtime';
import type { ZodTypeAny } from 'zod';
export declare class IrValidator {
    el: HTMLIrValidatorElement;
    /** Zod schema used to validate the child control's value. */
    schema: ZodTypeAny;
    value: any;
    /** Enables automatic validation on every value change. */
    autovalidate?: boolean;
    /** Optional form id. Falls back to the closest ancestor form when omitted. */
    form?: string;
    /** Event names (space/comma separated) dispatched when the child value changes. */
    valueEvent: string;
    /** Event names (space/comma separated) dispatched when the child loses focus. */
    blurEvent: string;
    /** Debounce delay (ms) before running validation for autovalidated changes. */
    validationDebounce: number;
    /** Emits whenever the validation state toggles. */
    validationChange: EventEmitter<{
        valid: boolean;
        value: unknown;
    }>;
    /** Emits whenever the tracked value changes. */
    valueChange: EventEmitter<{
        value: unknown;
    }>;
    private isValid;
    private autoValidateActive;
    private childEl?;
    private formEl?;
    private slotEl?;
    private currentValue;
    private hasInteracted;
    private validationTimer?;
    private valueEventsBound;
    private blurEventsBound;
    componentWillLoad(): void;
    componentDidLoad(): void;
    disconnectedCallback(): void;
    protected handleSchemaChange(): void;
    protected handleAutoValidatePropChange(next?: boolean): void;
    protected handleFormPropChange(): void;
    protected handleValueEventChange(newValue: string, oldValue: string): void;
    protected handleBlurEventChange(newValue: string, oldValue: string): void;
    private syncAutovalidateFlag;
    private parseEvents;
    protected handleValuePropChange(next: unknown, previous: unknown): void;
    private handleSlotChange;
    private initializeChildReference;
    private pickSingleChild;
    private registerChildListeners;
    private unbindChildListeners;
    private teardownChildListeners;
    private rebindChildListeners;
    private handleValueEvent;
    private handleBlurEvent;
    private extractEventValue;
    private readValueFromChild;
    private updateValue;
    private validateCurrentValue;
    private updateAriaValidity;
    private emitValidationChange;
    private attachFormListener;
    private detachFormListener;
    private resolveFormRef;
    private handleFormSubmit;
    private scheduleValidation;
    private flushValidation;
    private clearValidationTimer;
    render(): any;
}
