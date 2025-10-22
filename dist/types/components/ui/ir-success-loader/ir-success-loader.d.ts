import { EventEmitter } from '../../../stencil-public-runtime';
export declare class IrSuccessLoader {
    /**
     * How long the spinner should be shown before transitioning to the success icon.
     * Value is expressed in milliseconds.
     */
    spinnerDuration: number;
    /**
     * How long the success icon should be shown before the loader dispatches the completion event.
     * Value is expressed in milliseconds.
     */
    successDuration: number;
    /**
     * Whether the loader should automatically start its cycle when it becomes active.
     */
    autoStart: boolean;
    /**
     * Controls the visibility of the loader. Setting this to `true` starts the spinner/success cycle.
     */
    active: boolean;
    /**
     * Emit when the loader finishes the success state and should be hidden by the parent.
     */
    loaderComplete: EventEmitter<void>;
    private phase;
    private spinnerTimer?;
    private successTimer?;
    componentWillLoad(): void;
    disconnectedCallback(): void;
    protected onActiveChange(isActive: boolean): void;
    protected onDurationChange(): void;
    private startCycle;
    private showSuccess;
    private handleCompletion;
    private resetCycle;
    private clearTimers;
    render(): any;
}
