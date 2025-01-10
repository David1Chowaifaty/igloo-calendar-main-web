import { RoomType } from "../../../../models/property";
export declare class IrRoomtype {
    display: 'grid' | 'default';
    roomtype: RoomType;
    shouldHideMlsRateplans: boolean;
    componentWillLoad(): void;
    handleRoomTypeChange(): void;
    private checkRateplans;
    render(): any;
}
