import { Amenity, RoomType } from "../../../../models/property";
export declare class IrRoomTypeAmenities {
    amenities: Amenity[];
    roomType: RoomType;
    _amenities: any[];
    componentWillLoad(): void;
    handleAmenitiesChange(newValue: any, oldValue: any): void;
    handleRoomTypeChange(newValue: any, oldValue: any): void;
    private setupAmenities;
    private renderOccupancyView;
    private checkAmenity;
    render(): any;
}
