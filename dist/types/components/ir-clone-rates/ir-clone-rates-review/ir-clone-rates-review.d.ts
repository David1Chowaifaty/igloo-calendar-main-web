import { EventEmitter } from '../../../stencil-public-runtime';
import { ReviewRow } from '../clone-rates.utils';
export declare class IrCloneRatesReview {
    open: boolean;
    /** Summary lines rendered as label/value pairs. */
    rows: ReviewRow[];
    /** Shows the Confirm button as busy and blocks Go back while the copy request is in flight. */
    loading: boolean;
    /** Fired by Go back, the close button or Escape. The parent should set `open` to false. */
    goBack: EventEmitter<void>;
    confirmClone: EventEmitter<void>;
    private dialogRef;
    componentDidLoad(): void;
    handleOpenChange(open: boolean): void;
    render(): any;
}
