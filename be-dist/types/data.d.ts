export declare const data: {
    booking_nbr: string;
    roomtypes: {
        amenities: {
            amenity_type: string;
            code: string;
            description: string;
        }[];
        availabilities: any;
        bedding_setup: {
            code: string;
            count: number;
            name: string;
        }[];
        description: string;
        exposed_inventory: any;
        id: number;
        images: {
            tooltip: string;
            url: string;
        }[];
        inventory: number;
        is_active: boolean;
        is_bed_configuration_enabled: boolean;
        main_image: {
            tooltip: string;
            url: string;
        };
        name: string;
        occupancy_default: {
            adult_nbr: number;
            children_nbr: number;
            infant_nbr: any;
        };
        occupancy_max: {
            adult_nbr: number;
            children_nbr: number;
            infant_nbr: number;
        };
        physicalrooms: {
            calendar_cell: any;
            housekeeper: {
                assigned_units: any;
                id: number;
                is_active: boolean;
                is_soft_deleted: boolean;
                mobile: any;
                name: string;
                note: any;
                password: any;
                phone_prefix: any;
                property_id: number;
                username: any;
            };
            id: number;
            name: string;
        }[];
        rate: any;
        rateplans: {
            assignable_units: any;
            cancelation: string;
            custom_text: string;
            guarantee: string;
            id: number;
            is_active: boolean;
            is_booking_engine_enabled: boolean;
            is_channel_enabled: boolean;
            is_closed: boolean;
            is_non_refundable: boolean;
            is_targeting_travel_agency: boolean;
            name: string;
            pre_payment_amount: number;
            pre_payment_amount_gross: number;
            rate_restrictions: any;
            selected_variation: any;
            sell_mode: {
                code: string;
                description: string;
            };
            short_name: string;
            variations: {
                IS_MLS_VIOLATED: boolean;
                MLS_ALERT: any;
                adult_child_offering: string;
                adult_nbr: number;
                amount: number;
                amount_gross: number;
                amount_per_night: number;
                child_nbr: number;
                discount_pct: number;
                is_lmd: boolean;
                nights_nbr: number;
                total_before_discount: number;
            }[];
        }[];
        size: number;
        smoking_option: {
            allowed_smoking_options: {
                code: string;
                description: string;
            }[];
            code: string;
            description: string;
        };
    }[];
    tax_statement: string;
};
