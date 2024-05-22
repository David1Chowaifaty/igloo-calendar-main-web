export declare const booking: {
    agent: any;
    allowed_actions: {
        code: string;
        description: string;
    }[];
    arrival: {
        code: string;
        description: string;
    };
    booked_on: {
        date: string;
        hour: number;
        minute: number;
    };
    booking_nbr: string;
    channel_booking_nbr: any;
    cost: number;
    currency: {
        code: string;
        id: number;
        symbol: any;
    };
    financial: {
        due_amount: number;
        due_dates: {
            amount: number;
            currencysymbol: string;
            date: string;
            description: string;
            room: string;
        }[];
        gross_cost: number;
        gross_total: number;
        payments: any;
        total_amount: number;
    };
    format: {
        from_date: string;
        to_date: string;
    };
    from_date: string;
    guest: {
        address: string;
        cci: any;
        city: any;
        country_id: number;
        dob: any;
        email: string;
        first_name: string;
        id: number;
        last_name: string;
        mobile: string;
        subscribe_to_news_letter: boolean;
    };
    is_direct: boolean;
    is_editable: boolean;
    is_in_loyalty_mode: any;
    is_pms_enabled: boolean;
    occupancy: {
        adult_nbr: number;
        children_nbr: number;
        infant_nbr: any;
    };
    origin: {
        Icon: string;
        Label: string;
    };
    ota_notes: any;
    pickup_info: any;
    promo_key: string;
    property: {
        address: any;
        adult_child_constraints: any;
        affiliates: any;
        agents: any;
        allowed_booking_sources: any;
        allowed_cards: any;
        allowed_payment_methods: any;
        amenities: any;
        area: any;
        baby_cot_offering: any;
        calendar_legends: any;
        city: any;
        contacts: any;
        country: any;
        currency: any;
        description: any;
        id: number;
        images: any;
        internet_offering: any;
        is_frontdesk_enabled: any;
        is_pms_enabled: any;
        is_vacation_rental: any;
        location: any;
        max_nights: number;
        name: string;
        parking_offering: any;
        payment_methods: any;
        pets_acceptance: any;
        phone: any;
        pickup_service: any;
        postal: any;
        privacy_policy: any;
        promotions: any;
        roomtypes: any;
        social_media: any;
        space_theme: any;
        tax_statement: any;
        taxes: any;
        time_constraints: any;
    };
    remark: string;
    rooms: {
        assigned_units_pool: string;
        bed_preference: string;
        cost: number;
        days: {
            amount: number;
            cost: number;
            date: string;
        }[];
        from_date: string;
        gross_cost: number;
        gross_total: number;
        guest: {
            address: any;
            cci: any;
            city: any;
            country_id: any;
            dob: any;
            email: any;
            first_name: string;
            id: any;
            last_name: any;
            mobile: any;
            subscribe_to_news_letter: any;
        };
        identifier: string;
        notes: any;
        occupancy: {
            adult_nbr: number;
            children_nbr: number;
            infant_nbr: any;
        };
        ota_taxes: any;
        rateplan: {
            assignable_units: any;
            cancelation: string;
            custom_text: any;
            guarantee: string;
            id: number;
            is_active: any;
            is_booking_engine_enabled: any;
            is_channel_enabled: any;
            is_closed: any;
            is_non_refundable: boolean;
            is_targeting_travel_agency: any;
            name: string;
            rate_restrictions: any;
            selected_variation: {
                adult_child_offering: string;
                adult_nbr: number;
                amount: any;
                amount_per_night: any;
                child_nbr: number;
                discount_pct: any;
                is_lmd: any;
                nights_nbr: any;
                total_before_discount: any;
            };
            sell_mode: any;
            short_name: any;
            variations: any;
        };
        roomtype: {
            amenities: any;
            availabilities: any;
            bedding_setup: any;
            description: any;
            exposed_inventory: any;
            id: number;
            images: any;
            inventory: any;
            is_active: any;
            is_bed_configuration_enabled: any;
            main_image: any;
            name: string;
            occupancy_default: any;
            occupancy_max: any;
            physicalrooms: any;
            pre_payment_amount: any;
            rate: any;
            rateplans: any;
            size: any;
            smoking_option: any;
        };
        smoking_option: any;
        to_date: string;
        total: number;
        unit: {
            calendar_cell: any;
            housekeeper: any;
            id: number;
            name: string;
        };
    }[];
    source: {
        code: string;
        description: string;
        id: any;
        tag: string;
        type: any;
    };
    status: {
        code: string;
        description: string;
    };
    system_id: number;
    to_date: string;
    total: number;
};
