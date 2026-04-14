export declare const data: {
    booking: {
        agent: {
            code: string;
            id: number;
            is_active: any;
            name: string;
            payment_mode: any;
            verification_mode: any;
        };
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
        bypassed_ota_revisions: any;
        channel_booking_nbr: any;
        company_name: any;
        company_tax_nbr: any;
        cost: any;
        currency: {
            code: string;
            id: number;
            symbol: string;
        };
        events: {
            date: string;
            hour: number;
            id: number;
            minute: number;
            second: number;
            type: string;
            user: string;
        }[];
        extra_services: {
            booking_system_id: number;
            cost: any;
            currency_id: number;
            description: string;
            end_date: string;
            price: number;
            start_date: string;
            system_id: number;
        }[];
        extras: {
            key: string;
            value: string;
        }[];
        financial: {
            cancelation_penality_as_if_today: number;
            collected: number;
            due_amount: number;
            due_dates: any;
            gross_cost: number;
            gross_total: number;
            invoice_nbr: string;
            payments: {
                amount: number;
                book_nbr: string;
                currency: {
                    code: string;
                    id: number;
                    symbol: string;
                };
                date: string;
                designation: string;
                id: number;
                is_receipt_issued: any;
                payment_gateway_code: any;
                payment_method: {
                    code: string;
                    description: string;
                };
                payment_type: {
                    code: string;
                    description: string;
                    operation: string;
                };
                receipt_nbr: any;
                reference: string;
                time_stamp: {
                    day: string;
                    hour: number;
                    minute: number;
                    second: number;
                    user: string;
                };
            }[];
            refunds: number;
            total_amount: number;
        };
        format: {
            from_date: string;
            to_date: string;
        };
        from_date: string;
        guest: {
            address: string;
            alternative_email: any;
            cci: any;
            city: any;
            country: {
                cities: any;
                code: string;
                currency: any;
                flag: any;
                gmt_offset: number;
                id: number;
                market_places: any;
                name: string;
                phone_prefix: any;
            };
            country_id: number;
            country_phone_prefix: string;
            dob: any;
            email: string;
            first_name: string;
            id: number;
            id_info: any;
            is_main: boolean;
            last_name: string;
            mobile: string;
            mobile_without_prefix: string;
            nbr_confirmed_bookings: number;
            notes: string;
            password: any;
            subscribe_to_news_letter: boolean;
        };
        is_direct: boolean;
        is_editable: boolean;
        is_in_loyalty_mode: boolean;
        is_pms_enabled: boolean;
        is_requested_to_cancel: any;
        occupancy: {
            adult_nbr: number;
            children_nbr: number;
            infant_nbr: number;
        };
        origin: {
            Icon: string;
            Label: string;
        };
        ota_commission: any;
        ota_guarante: any;
        ota_guarantee_plain: any;
        ota_manipulations: any;
        ota_notes: any;
        ota_services: any;
        ota_services_plain: any;
        payment_collect: any;
        payment_type: any;
        pickup_info: {
            currency: {
                code: string;
                id: number;
                symbol: string;
            };
            date: string;
            details: string;
            hour: number;
            minute: number;
            nbr_of_units: number;
            selected_option: {
                amount: number;
                currency: {
                    code: string;
                    id: number;
                    symbol: string;
                };
                id: number;
                location: {
                    description: string;
                    id: number;
                };
                pricing_model: {
                    code: string;
                    description: string;
                };
                vehicle: {
                    capacity: number;
                    code: string;
                    description: string;
                };
            };
            system_id: number;
            total: number;
        };
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
            aname: any;
            area: any;
            baby_cot_offering: any;
            be_listing_mode: any;
            calendar_extra: any;
            calendar_legends: any;
            city: any;
            cleaning_frequency: any;
            company: any;
            contacts: any;
            country: any;
            currency: any;
            description: any;
            extra_info: any;
            id: number;
            images: any;
            internet_offering: any;
            invoicing_mode: any;
            is_automatic_check_in_out: any;
            is_be_enabled: any;
            is_frontdesk_enabled: any;
            is_multi_property: any;
            is_pms_enabled: any;
            is_vacation_rental: any;
            linked_pms: any;
            location: any;
            max_nights: number;
            mpo: any;
            name: string;
            parking_offering: any;
            payment_methods: any;
            perma_link: any;
            pets_acceptance: any;
            phone: any;
            pickup_service: any;
            postal: any;
            privacy_policy: any;
            promotions: any;
            registered_name: any;
            roomtypes: any;
            social_media: any;
            sources: any;
            space_theme: any;
            tags: any;
            tax_nbr: any;
            tax_statement: any;
            taxation_strategy: any;
            taxes: any;
            time_constraints: any;
        };
        remark: string;
        rooms: {
            applicable_policies: {
                brackets: {
                    amount: number;
                    amount_formatted: string;
                    code: string;
                    currency_id: number;
                    due_on: string;
                    due_on_formatted: string;
                    gross_amount: number;
                    gross_amount_formatted: string;
                    statement: string;
                }[];
                combined_statement: string;
                type: string;
            }[];
            assigned_units_pool: string;
            bed_preference: any;
            calendar_extra: any;
            check_in: boolean;
            cost: any;
            days: {
                amount: number;
                cost: any;
                date: string;
            }[];
            departure_time: {
                code: string;
                description: string;
            };
            from_date: string;
            gross_cost: any;
            gross_guarantee: number;
            gross_total: number;
            guarantee: number;
            guest: {
                address: any;
                alternative_email: any;
                cci: any;
                city: any;
                country: any;
                country_id: any;
                country_phone_prefix: any;
                dob: any;
                email: any;
                first_name: string;
                id: any;
                id_info: any;
                is_main: boolean;
                last_name: string;
                mobile: any;
                mobile_without_prefix: any;
                nbr_confirmed_bookings: number;
                notes: any;
                password: any;
                subscribe_to_news_letter: any;
            };
            identifier: string;
            in_out: {
                code: string;
                description: string;
            };
            is_split: any;
            notes: string;
            occupancy: {
                adult_nbr: number;
                children_nbr: number;
                infant_nbr: any;
            };
            ota_meta: any;
            ota_meta_plain: any;
            ota_taxes: any;
            ota_unique_id: any;
            parent_room_identifier: any;
            prepayment_amount: any;
            prepayment_amount_gross: any;
            rateplan: {
                agents: any;
                assignable_units: any;
                cancelation: string;
                custom_text: any;
                extra_bed_for_code: any;
                extra_bed_max: any;
                extra_bed_rate_per_night: any;
                extra_bed_rate_per_night_additional_child: any;
                extra_bed_rate_per_night_first_child: any;
                guarantee: string;
                id: number;
                is_active: any;
                is_available_to_book: boolean;
                is_booking_engine_enabled: any;
                is_channel_enabled: any;
                is_closed: any;
                is_derived: boolean;
                is_extra_bed_free_for_children: boolean;
                is_non_refundable: boolean;
                is_targeting_travel_agency: any;
                meal_plan: {
                    code: string;
                    name: any;
                };
                name: string;
                not_available_reason: any;
                pre_payment_amount: any;
                pre_payment_amount_gross: any;
                rate_restrictions: any;
                selected_variation: {
                    IS_MLS_VIOLATED: boolean;
                    MLS_ALERT: any;
                    MLS_ALERT_VALUE: any;
                    adult_child_offering: string;
                    adult_nbr: number;
                    amount: any;
                    amount_gross: any;
                    amount_per_night: any;
                    amount_per_night_gross: any;
                    applicable_policies: any;
                    bed_preference_code: any;
                    child_nbr: number;
                    discount_pct: any;
                    discounted_amount: any;
                    discounted_gross_amount: any;
                    extra_bed_free_nbr: any;
                    extra_bed_nbr: any;
                    extra_bed_rate_per_night: any;
                    food_nbr_upsell: number;
                    infant_nbr: any;
                    is_lmd: any;
                    nights: any;
                    nights_nbr: any;
                    prepayment_amount: any;
                    prepayment_amount_gross: any;
                    rate_plan_id: number;
                    smoking_code: any;
                    total_before_discount: any;
                };
                sell_mode: any;
                short_name: string;
                sleeps: any;
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
                is_available_to_book: any;
                is_bed_configuration_enabled: any;
                is_channel_enabled: any;
                main_image: any;
                name: string;
                not_available_reason: any;
                occupancy_default: any;
                occupancy_max: any;
                physicalrooms: any;
                rate: any;
                rateplans: any;
                size: any;
                smoking_option: any;
            };
            sharing_persons: {
                address: any;
                alternative_email: any;
                cci: any;
                city: any;
                country: {
                    cities: any;
                    code: any;
                    currency: any;
                    flag: any;
                    gmt_offset: number;
                    id: any;
                    market_places: any;
                    name: any;
                    phone_prefix: any;
                };
                country_id: any;
                country_phone_prefix: any;
                dob: string;
                email: any;
                first_name: string;
                id: number;
                id_info: {
                    number: string;
                    type: {
                        code: string;
                        description: string;
                    };
                };
                is_main: boolean;
                last_name: string;
                mobile: any;
                mobile_without_prefix: any;
                nbr_confirmed_bookings: number;
                notes: any;
                password: any;
                subscribe_to_news_letter: any;
            }[];
            smoking_option: any;
            system_id: number;
            taxes: any;
            to_date: string;
            total: number;
            unit: {
                calendar_cell: any;
                hk_status: any;
                housekeeper: any;
                id: number;
                is_active: any;
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
    invoice: {
        booking_nbr: string;
        currency: {
            id: number;
        };
        Date: string;
        items: {
            amount: number;
            booking_nbr: any;
            currency: any;
            description: string;
            invoice_nbr: any;
            is_invoiceable: boolean;
            key: number;
            reason: any;
            status: any;
            system_id: any;
            type: string;
        }[];
        target: {
            code: string;
            description: string;
        };
        billed_to_name: string;
    };
    property: {
        address: string;
        adult_child_constraints: {
            adult_max_nbr: number;
            child_max_age: number;
            child_max_nbr: number;
        };
        affiliates: any[];
        agents: {
            code: string;
            id: number;
            is_active: boolean;
            name: string;
            payment_mode: {
                code: string;
                description: string;
            };
            verification_mode: string;
        }[];
        allowed_booking_sources: {
            code: string;
            description: string;
            id: string;
            tag: string;
            type: string;
        }[];
        allowed_cards: {
            id: number;
            name: string;
        }[];
        allowed_payment_methods: ({
            affiliate_id: any;
            allowed_currencies: any;
            code: string;
            data: any;
            description: string;
            display_order: any;
            id: any;
            img_url: any;
            is_active: boolean;
            is_payment_gateway: boolean;
            localizables: {
                code: string;
                description: string;
                id: number;
                language: {
                    code: string;
                    culture: any;
                    description: string;
                    direction: any;
                    entries: any;
                    flag: any;
                    id: number;
                };
            }[];
            mpo_id: any;
            property_id: number;
        } | {
            affiliate_id: any;
            allowed_currencies: string;
            code: string;
            data: any;
            description: string;
            display_order: any;
            id: number;
            img_url: string;
            is_active: boolean;
            is_payment_gateway: boolean;
            localizables: any;
            mpo_id: any;
            property_id: number;
        })[];
        amenities: {
            amenity_type: string;
            code: string;
            description: string;
        }[];
        aname: string;
        area: string;
        baby_cot_offering: {
            rate_per_night: number;
            title: string;
        };
        be_listing_mode: string;
        calendar_extra: string;
        calendar_legends: {
            color: string;
            design: string;
            id: string;
            name: string;
        }[];
        city: {
            gmt_offset: number;
            id: number;
            latitude: number;
            longitude: number;
            name: string;
        };
        cleaning_frequency: {
            code: string;
            description: string;
        };
        company: {
            address: string;
            city: string;
            country: {
                cities: any;
                code: string;
                currency: any;
                flag: any;
                gmt_offset: number;
                id: number;
                market_places: any;
                name: string;
                phone_prefix: any;
            };
            credit_note_prefix: string;
            credit_note_start_nbr: number;
            invoice_footer_notes: string;
            invoice_prefix: string;
            invoice_start_nbr: number;
            name: string;
            phone: string;
            postal: string;
            tax_nbr: string;
        };
        contacts: {
            email: string;
            mobile: any;
            name: string;
            phone: string;
            type: string;
        }[];
        country: {
            cities: any;
            code: any;
            currency: any;
            flag: any;
            gmt_offset: number;
            id: number;
            market_places: any;
            name: string;
            phone_prefix: string;
        };
        currency: {
            code: string;
            id: number;
            symbol: string;
        };
        description: {
            food_and_beverage: string;
            important_info: string;
            location_and_intro: string;
            non_standard_conditions: string;
            rooming: string;
        };
        extra_info: {
            key: string;
            value: string;
        }[];
        id: number;
        images: {
            thumbnail: string;
            tooltip: string;
            url: string;
        }[];
        internet_offering: {
            is_public_internet_free: boolean;
            is_room_internet_free: boolean;
            public_internet_statement: string;
            room_internet_statement: string;
            room_rate_per_24_hour: number;
            room_rate_per_hour: number;
        };
        is_automatic_check_in_out: boolean;
        is_be_enabled: boolean;
        is_frontdesk_enabled: boolean;
        is_multi_property: boolean;
        is_pms_enabled: boolean;
        is_vacation_rental: boolean;
        linked_pms: {
            ari_integration_mode: {
                code: string;
                description: string;
            };
            ari_last_call: {
                is_acknowledged: any;
                is_sent: any;
                sent_date: string;
                sent_hour: number;
                sent_minute: number;
            };
            booking_last_call: {
                is_acknowledged: any;
                is_sent: any;
                sent_date: string;
                sent_hour: number;
                sent_minute: number;
            };
            bookings_integration_mode: {
                code: string;
                description: string;
            };
            code: string;
            description: string;
            id: number;
            is_active: boolean;
            mapping_mode: {
                code: string;
                description: string;
            };
            partner: {
                code: string;
                description: string;
            };
            property_id: number;
            request_count: number;
            user: {
                created_on: any;
                email: any;
                id: number;
                is_active: any;
                is_email_verified: any;
                mobile: any;
                password: string;
                sign_ins: any;
                type: number;
                username: string;
            };
        }[];
        location: {
            latitude: number;
            longitude: number;
        };
        max_nights: number;
        mpo: {
            address: string;
            affiliates: any[];
            bg_img_url: string;
            biling_currency: {
                code: string;
                id: number;
                symbol: any;
            };
            booking_name: string;
            booking_notify_email: string;
            booking_notify_mobile: string;
            city: string;
            company_name: any;
            country: {
                cities: any;
                code: string;
                currency: any;
                flag: any;
                gmt_offset: number;
                id: number;
                market_places: any;
                name: string;
                phone_prefix: any;
            };
            fav_icon: string;
            fax: string;
            footer_confirmation_text: string;
            id: number;
            is_email_notification: boolean;
            logo_url: string;
            market_places: {
                country_id: number;
                id: number;
                name: string;
            }[];
            name: string;
            notes: string;
            phone: string;
            smtp_info: {
                host: any;
                is_active: boolean;
                no_reply_email: any;
                password: any;
                port: number;
                username: any;
            };
            state: string;
            user: {
                created_on: string;
                email: string;
                id: number;
                is_active: boolean;
                is_email_verified: boolean;
                mobile: any;
                password: any;
                sign_ins: any;
                type: number;
                username: string;
            };
            vat_nbr: string;
            vat_pct: number;
            website: any;
            wl_url: any;
        };
        name: string;
        parking_offering: {
            pricing: number;
            schedule: string;
            title: string;
        };
        payment_methods: any;
        perma_link: string;
        pets_acceptance: {
            title: string;
        };
        phone: string;
        pickup_service: {
            allowed_locations: {
                description: string;
                id: number;
            }[];
            allowed_options: {
                amount: number;
                currency: {
                    code: string;
                    id: number;
                    symbol: string;
                };
                id: number;
                location: {
                    description: string;
                    id: number;
                };
                pricing_model: {
                    code: string;
                    description: string;
                };
                vehicle: {
                    capacity: number;
                    code: string;
                    description: string;
                };
            }[];
            allowed_pricing_models: {
                code: string;
                description: string;
            }[];
            allowed_vehicle_types: {
                capacity: number;
                code: string;
                description: string;
            }[];
            is_enabled: boolean;
            is_not_allowed_on_same_day: boolean;
            pickup_cancelation_prepayment: {
                code: string;
                description: string;
            };
            pickup_instruction: {
                code: string;
                description: string;
            };
        };
        postal: any;
        privacy_policy: string;
        promotions: {
            from: string;
            id: number;
            is_last_minute_discount: boolean;
            is_loyalty: boolean;
            key: string;
            mode: any;
            to: string;
            type: any;
            value: any;
        }[];
        registered_name: string;
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
                thumbnail: string;
                tooltip: string;
                url: string;
            }[];
            inventory: any;
            is_active: boolean;
            is_available_to_book: any;
            is_bed_configuration_enabled: boolean;
            is_channel_enabled: boolean;
            main_image: {
                thumbnail: any;
                tooltip: string;
                url: string;
            };
            name: string;
            not_available_reason: any;
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
                hk_status: string;
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
                is_active: boolean;
                name: string;
            }[];
            rate: any;
            rateplans: {
                agents: {
                    code: string;
                    id: number;
                    is_active: any;
                    name: string;
                    payment_mode: any;
                    verification_mode: any;
                }[];
                assignable_units: any;
                cancelation: any;
                custom_text: string;
                extra_bed_for_code: string;
                extra_bed_max: number;
                extra_bed_rate_per_night: number;
                extra_bed_rate_per_night_additional_child: number;
                extra_bed_rate_per_night_first_child: number;
                guarantee: any;
                id: number;
                is_active: boolean;
                is_available_to_book: boolean;
                is_booking_engine_enabled: boolean;
                is_channel_enabled: boolean;
                is_closed: any;
                is_derived: boolean;
                is_extra_bed_free_for_children: boolean;
                is_non_refundable: boolean;
                is_targeting_travel_agency: boolean;
                meal_plan: {
                    code: string;
                    name: string;
                };
                name: string;
                not_available_reason: any;
                pre_payment_amount: any;
                pre_payment_amount_gross: any;
                rate_restrictions: any;
                selected_variation: any;
                sell_mode: {
                    code: string;
                    description: string;
                };
                short_name: string;
                sleeps: number;
                variations: any;
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
        social_media: {
            code: string;
            link: string;
            name: string;
        }[];
        sources: {
            code: string;
            description: string;
        }[];
        space_theme: {
            background_image: string;
            button_bg_color: string;
            button_border_radius: string;
            favicon: string;
            heading_bar_color: string;
            heading_font_color: string;
            logo: string;
            website: string;
        };
        tags: {
            key: string;
            value: string;
        }[];
        tax_nbr: string;
        tax_statement: string;
        taxation_strategy: {
            code: string;
            description: string;
        };
        taxes: {
            is_exlusive: boolean;
            name: string;
            pct: number;
        }[];
        time_constraints: {
            booking_cutoff: string;
            check_in_from: string;
            check_in_till: string;
            check_out_till: string;
        };
    };
};
