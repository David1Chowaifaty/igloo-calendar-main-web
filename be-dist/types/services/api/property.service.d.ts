import { TExposedBookingAvailability } from "../../components/ir-availibility-header/availability";
import { Token } from "../../models/Token";
import { DataStructure } from "../../models/common";
import { ISetupEntries } from "../../models/property";
export declare class PropertyService extends Token {
    getExposedProperty(params: {
        id: number;
        language: string;
    }): Promise<any>;
    getExposedBookingAvailability(params: TExposedBookingAvailability): Promise<DataStructure>;
    fetchSetupEntries(): Promise<ISetupEntries>;
    private generateDays;
    filterRooms(): any[];
    private convertPickup;
    bookUser(): Promise<any>;
}
