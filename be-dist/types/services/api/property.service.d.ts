import { TExposedBookingAvailability } from "../../components/ir-availibility-header/availability";
import { Token } from "../../models/Token";
export declare class PropertyService extends Token {
    getExposedProperty(params: {
        id: number;
        language: string;
    }): Promise<any>;
    getExposedBookingAvailability(params: TExposedBookingAvailability): Promise<any>;
}
