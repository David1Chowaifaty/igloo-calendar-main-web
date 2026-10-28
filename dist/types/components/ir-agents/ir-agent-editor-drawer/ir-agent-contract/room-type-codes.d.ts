import type { AgentRtNaming } from "../../../../services/agents/type";
/** Room type id → agent naming (`id` is -1 until the backend persists it). */
export type RoomTypeCodeMap = Record<number, {
    id: number;
    name: string;
}>;
/** Builds an O(1) lookup from the API array shape. */
export declare function toRoomTypeCodeMap(list?: AgentRtNaming[] | null): RoomTypeCodeMap;
/**
 * Converts the lookup back to the API array shape.
 * Blank names are dropped so clearing an input removes the mapping.
 */
export declare function toRoomTypeCodeList(map: RoomTypeCodeMap): AgentRtNaming[];
