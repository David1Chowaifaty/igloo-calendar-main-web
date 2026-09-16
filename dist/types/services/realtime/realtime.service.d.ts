import type { RealtimeEventMap, RealtimeMessage, RealtimeReason } from './types';
export type { RealtimeEventMap, RealtimeMessage, RealtimeReason };
export type { UnitHkStatusChangePayload, SalesBatchPayload, AvailabilityBatchPayload, DayUseModifiedPayload, DayUseRemovedPayload } from './types';
export type MessageHandler = (msg: RealtimeMessage) => void | Promise<void>;
declare class RealtimeService {
    private static _instance;
    private socket;
    /** Handlers bucketed by propertyId, so dispatching a message never walks subscribers it can't match. */
    private subscribers;
    private subscriberCount;
    private constructor();
    static getInstance(): RealtimeService;
    /**
     * Subscribe to real-time messages for a given propertyId.
     *
     * The handler receives a typed {@link RealtimeMessage} discriminated union.
     * Narrowing `msg.reason` in a switch/if also narrows `msg.payload` to the
     * correct type for that reason.
     *
     * @returns An unsubscribe function — call it in `disconnectedCallback`.
     */
    subscribe(propertyId: number | string, handler: MessageHandler): () => void;
    private connect;
    private disconnect;
}
export declare const realtimeService: RealtimeService;
