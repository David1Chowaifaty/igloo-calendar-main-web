/** Builds an O(1) lookup from the API array shape. */
export function toRoomTypeCodeMap(list) {
    const map = {};
    for (const { id, room_type_id, name } of list ?? []) {
        map[room_type_id] = { id: id ?? -1, name };
    }
    return map;
}
/**
 * Converts the lookup back to the API array shape.
 * Blank names are dropped so clearing an input removes the mapping.
 */
export function toRoomTypeCodeList(map) {
    const list = [];
    for (const [roomTypeId, { id, name }] of Object.entries(map)) {
        const trimmed = name?.trim();
        if (trimmed) {
            list.push({ id, room_type_id: Number(roomTypeId), name: trimmed });
        }
    }
    return list;
}
