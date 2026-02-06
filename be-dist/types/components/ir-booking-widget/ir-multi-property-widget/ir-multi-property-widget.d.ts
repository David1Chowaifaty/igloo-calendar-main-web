import { EventEmitter } from '../../../stencil-public-runtime';
import { IExposedProperty } from "../../../models/property";
import { CombinedLevel2Properties } from '../ir-booking-widget';
export declare class IrMultiPropertyWidget {
    position: string;
    linkedProperties: IExposedProperty[];
    selectedPropertyId: string | number;
    dateModifiers: any;
    property: IExposedProperty;
    isFetchingProperty: boolean;
    locale: string;
    dates: {
        from_date: Date | null;
        to_date: Date | null;
    };
    guests: {
        adultCount: number;
        childrenCount: number;
        infants: number;
        childrenAges: string[];
    };
    error: boolean;
    locations: string[];
    level2Properties: CombinedLevel2Properties;
    selectedCity: string;
    propertyChange: EventEmitter<string | number>;
    cityChange: EventEmitter<string>;
    dateChange: EventEmitter<{
        from_date: Date | null;
        to_date: Date | null;
    }>;
    guestsChange: EventEmitter<{
        adultCount: number;
        childrenCount: number;
        infants: number;
        childrenAges: string[];
    }>;
    bookNow: EventEmitter<void>;
    private capitalize;
    render(): any;
}
