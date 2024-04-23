import { Amenity, BeddingSetup } from "../../models/property";
export declare class IrAccomodations {
    amenities: Amenity[];
    bookingAttributes: {
        max_occupancy: number;
        bedding_setup: BeddingSetup[];
    };
    private checkAmenity;
    renderAmeneties(): any;
    render(): any;
}
