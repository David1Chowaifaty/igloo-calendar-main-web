import { EventEmitter } from '../../stencil-public-runtime';
import { GHS_Candidate_Property } from '../../services/ghs/types';
export declare class IrGhsSelectionBucket {
    selectedProperties: GHS_Candidate_Property[];
    isGenerating: boolean;
    generateRequest: EventEmitter<void>;
    removeAll: EventEmitter<void>;
    removeProperty: EventEmitter<number>;
    render(): any;
}
