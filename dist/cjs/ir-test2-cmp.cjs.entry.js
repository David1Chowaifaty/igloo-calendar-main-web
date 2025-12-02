'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-3978a3f8.js');

const booking = {
    "agent": null,
    "allowed_actions": [
        {
            "code": "001",
            "description": "Pending"
        },
        {
            "code": "CANC_RA",
            "description": "Cancel"
        },
        {
            "code": "NOSHOW_RA",
            "description": "No show"
        }
    ],
    "arrival": {
        "code": "001",
        "description": "Not sure yet"
    },
    "booked_on": {
        "date": "2025-11-25",
        "hour": 11,
        "minute": 7
    },
    "booking_nbr": "80537381041",
    "bypassed_ota_revisions": null,
    "channel_booking_nbr": null,
    "company_name": null,
    "company_tax_nbr": null,
    "cost": null,
    "currency": {
        "code": "USD",
        "id": 4,
        "symbol": "US$"
    },
    "events": [
        {
            "date": "2025-11-25",
            "hour": 11,
            "id": null,
            "minute": 7,
            "second": 28,
            "type": "Conf. email",
            "user": "System"
        },
        {
            "date": "2025-11-25",
            "hour": 11,
            "id": 8787694,
            "minute": 7,
            "second": 21,
            "type": "Confirmed",
            "user": "A35"
        }
    ],
    "extra_services": null,
    "extras": [
        {
            "key": "is_backend",
            "value": "true"
        }
    ],
    "financial": {
        "cancelation_penality_as_if_today": 469.530,
        "collected": 0.0,
        "due_amount": 469.530,
        "due_dates": null,
        "gross_cost": 0.0,
        "gross_total": 469.530,
        "invoice_nbr": "805373",
        "payments": null,
        "refunds": 0.0,
        "total_amount": 423.000
    },
    "format": {
        "from_date": "Tue, 25 Nov 2025",
        "to_date": "Sun, 30 Nov 2025"
    },
    "from_date": "2025-11-25",
    "guest": {
        "address": "",
        "alternative_email": null,
        "cci": null,
        "city": null,
        "country": {
            "cities": null,
            "code": "BZ",
            "currency": null,
            "flag": null,
            "gmt_offset": 0,
            "id": 486,
            "market_places": null,
            "name": "Belize",
            "phone_prefix": null
        },
        "country_id": 486,
        "country_phone_prefix": "+501",
        "dob": null,
        "email": "estest.test@gmail.com",
        "first_name": "Fa",
        "id": 528363,
        "id_info": null,
        "is_main": false,
        "last_name": "aL",
        "mobile": "12345678",
        "mobile_without_prefix": "12345678",
        "nbr_confirmed_bookings": 50,
        "notes": "",
        "password": null,
        "subscribe_to_news_letter": false
    },
    "is_direct": true,
    "is_editable": true,
    "is_in_loyalty_mode": false,
    "is_pms_enabled": true,
    "is_requested_to_cancel": null,
    "occupancy": {
        "adult_nbr": 2,
        "children_nbr": 0,
        "infant_nbr": 0
    },
    "origin": {
        "Icon": "https:\/\/x.igloorooms.com\/assets\/images\/png\/direct.png",
        "Label": "Direct | website"
    },
    "ota_commission": null,
    "ota_guarante": null,
    "ota_guarantee_plain": null,
    "ota_manipulations": null,
    "ota_notes": null,
    "ota_services": null,
    "ota_services_plain": null,
    "payment_collect": null,
    "payment_type": null,
    "pickup_info": null,
    "promo_key": "",
    "property": {
        "address": null,
        "adult_child_constraints": null,
        "affiliates": null,
        "agents": null,
        "allowed_booking_sources": null,
        "allowed_cards": null,
        "allowed_payment_methods": null,
        "amenities": null,
        "aname": null,
        "area": null,
        "baby_cot_offering": null,
        "be_listing_mode": null,
        "calendar_extra": null,
        "calendar_legends": null,
        "city": null,
        "cleaning_frequency": null,
        "company": null,
        "contacts": null,
        "country": null,
        "currency": null,
        "description": null,
        "extra_info": null,
        "id": 42,
        "images": null,
        "internet_offering": null,
        "is_automatic_check_in_out": null,
        "is_be_enabled": null,
        "is_frontdesk_enabled": null,
        "is_multi_property": null,
        "is_pms_enabled": null,
        "is_vacation_rental": null,
        "location": null,
        "max_nights": 0,
        "mpo": null,
        "name": "igloorooms Demo Hotel",
        "parking_offering": null,
        "payment_methods": null,
        "perma_link": null,
        "pets_acceptance": null,
        "phone": null,
        "pickup_service": null,
        "postal": null,
        "privacy_policy": null,
        "promotions": null,
        "registered_name": null,
        "roomtypes": null,
        "social_media": null,
        "sources": null,
        "space_theme": null,
        "tags": null,
        "tax_nbr": null,
        "tax_statement": null,
        "taxation_strategy": null,
        "taxes": null,
        "time_constraints": null
    },
    "remark": "",
    "rooms": [
        {
            "applicable_policies": [
                {
                    "brackets": [
                        {
                            "amount": 0.000,
                            "amount_formatted": "US$0.00",
                            "code": "007",
                            "currency_id": 4,
                            "due_on": "2025-11-25",
                            "due_on_formatted": "Tuesday, 25 Nov 2025, 14:00",
                            "gross_amount": 0.000,
                            "gross_amount_formatted": "US$0.00",
                            "statement": "0%"
                        }
                    ],
                    "combined_statement": "",
                    "type": "cancelation"
                },
                {
                    "brackets": [
                        {
                            "amount": 20.25000,
                            "amount_formatted": "US$20.25",
                            "code": "001",
                            "currency_id": 4,
                            "due_on": "2025-11-25",
                            "due_on_formatted": null,
                            "gross_amount": 22.47750,
                            "gross_amount_formatted": "US$22.48",
                            "statement": "25% of your booking total will be charged"
                        }
                    ],
                    "combined_statement": "25% of your booking total will be charged",
                    "type": "guarantee"
                }
            ],
            "assigned_units_pool": "e92357f0-62ae-433a-9c95-4553744b7e79",
            "bed_preference": null,
            "calendar_extra": "",
            "check_in": false,
            "cost": null,
            "days": [
                {
                    "amount": 81.000,
                    "cost": null,
                    "date": "2025-11-25"
                }
            ],
            "departure_time": {
                "code": "",
                "description": ""
            },
            "from_date": "2025-11-25",
            "gross_cost": null,
            "gross_guarantee": 22.47750,
            "gross_total": 89.910,
            "guarantee": 20.25000,
            "guest": {
                "address": null,
                "alternative_email": null,
                "cci": null,
                "city": null,
                "country": null,
                "country_id": null,
                "country_phone_prefix": null,
                "dob": null,
                "email": null,
                "first_name": "test",
                "id": null,
                "id_info": null,
                "is_main": false,
                "last_name": "test",
                "mobile": null,
                "mobile_without_prefix": null,
                "nbr_confirmed_bookings": 0,
                "notes": null,
                "password": null,
                "subscribe_to_news_letter": null
            },
            "identifier": "eaec5d7b-ac8a-4c7e-9268-4bc7afb33279",
            "in_out": {
                "code": "001",
                "description": "Checked in"
            },
            "is_split": null,
            "notes": "",
            "occupancy": {
                "adult_nbr": 2,
                "children_nbr": 0,
                "infant_nbr": null
            },
            "ota_meta": null,
            "ota_meta_plain": null,
            "ota_taxes": null,
            "ota_unique_id": null,
            "parent_room_identifier": null,
            "prepayment_amount": null,
            "prepayment_amount_gross": null,
            "rateplan": {
                "agents": null,
                "assignable_units": null,
                "cancelation": "",
                "custom_text": null,
                "extra_bed_for_code": null,
                "extra_bed_max": null,
                "extra_bed_rate_per_night": null,
                "extra_bed_rate_per_night_additional_child": null,
                "extra_bed_rate_per_night_first_child": null,
                "guarantee": "25% of your booking total will be charged",
                "id": 123,
                "is_active": null,
                "is_available_to_book": false,
                "is_booking_engine_enabled": null,
                "is_channel_enabled": null,
                "is_closed": null,
                "is_derived": false,
                "is_extra_bed_free_for_children": false,
                "is_non_refundable": false,
                "is_targeting_travel_agency": null,
                "meal_plan": {
                    "code": "002",
                    "name": null
                },
                "name": "Car Rental included\/Bed-&-breakfast",
                "not_available_reason": null,
                "pre_payment_amount": null,
                "pre_payment_amount_gross": null,
                "rate_restrictions": null,
                "selected_variation": {
                    "IS_MLS_VIOLATED": false,
                    "MLS_ALERT": null,
                    "MLS_ALERT_VALUE": null,
                    "adult_child_offering": "2 adults",
                    "adult_nbr": 2,
                    "amount": null,
                    "amount_gross": null,
                    "amount_per_night": null,
                    "amount_per_night_gross": null,
                    "applicable_policies": null,
                    "bed_preference_code": null,
                    "child_nbr": 0,
                    "discount_pct": null,
                    "discounted_amount": null,
                    "discounted_gross_amount": null,
                    "extra_bed_free_nbr": null,
                    "extra_bed_nbr": null,
                    "extra_bed_rate_per_night": null,
                    "food_nbr_upsell": 0,
                    "infant_nbr": null,
                    "is_lmd": null,
                    "nights": null,
                    "nights_nbr": null,
                    "prepayment_amount": null,
                    "prepayment_amount_gross": null,
                    "rate_plan_id": 123,
                    "smoking_code": null,
                    "total_before_discount": null
                },
                "sell_mode": null,
                "short_name": "Bed & breakfast",
                "sleeps": null,
                "variations": null
            },
            "roomtype": {
                "amenities": null,
                "availabilities": null,
                "bedding_setup": null,
                "description": null,
                "exposed_inventory": null,
                "id": 110,
                "images": null,
                "inventory": null,
                "is_active": null,
                "is_available_to_book": null,
                "is_bed_configuration_enabled": null,
                "is_channel_enabled": null,
                "main_image": null,
                "name": "Standard Rooms",
                "not_available_reason": null,
                "occupancy_default": null,
                "occupancy_max": null,
                "physicalrooms": null,
                "rate": null,
                "rateplans": null,
                "size": null,
                "smoking_option": null
            },
            "sharing_persons": [
                {
                    "address": null,
                    "alternative_email": null,
                    "cci": null,
                    "city": null,
                    "country": {
                        "cities": null,
                        "code": null,
                        "currency": null,
                        "flag": null,
                        "gmt_offset": 0,
                        "id": null,
                        "market_places": null,
                        "name": null,
                        "phone_prefix": null
                    },
                    "country_id": null,
                    "country_phone_prefix": null,
                    "dob": "1900-01-01",
                    "email": null,
                    "first_name": "test",
                    "id": 130854,
                    "id_info": {
                        "number": "",
                        "type": {
                            "code": "001",
                            "description": "Passport"
                        }
                    },
                    "is_main": true,
                    "last_name": "test",
                    "mobile": null,
                    "mobile_without_prefix": null,
                    "nbr_confirmed_bookings": 0,
                    "notes": null,
                    "password": null,
                    "subscribe_to_news_letter": null
                }
            ],
            "smoking_option": null,
            "taxes": null,
            "to_date": "2025-11-26",
            "total": 81.000,
            "unit": {
                "calendar_cell": null,
                "hk_status": null,
                "housekeeper": null,
                "id": 16,
                "is_active": null,
                "name": "05"
            }
        },
        {
            "applicable_policies": [
                {
                    "brackets": [
                        {
                            "amount": 0.0,
                            "amount_formatted": "US$0.00",
                            "code": "000",
                            "currency_id": 4,
                            "due_on": "2025-11-25",
                            "due_on_formatted": "Tuesday, 25 Nov 2025, 14:00",
                            "gross_amount": 0.0,
                            "gross_amount_formatted": "US$0.00",
                            "statement": "Do not use"
                        }
                    ],
                    "combined_statement": "",
                    "type": "cancelation"
                },
                {
                    "brackets": [
                        {
                            "amount": 20.25000,
                            "amount_formatted": "US$20.25",
                            "code": "001",
                            "currency_id": 4,
                            "due_on": "2025-11-25",
                            "due_on_formatted": null,
                            "gross_amount": 22.47750,
                            "gross_amount_formatted": "US$22.48",
                            "statement": "25% of your booking total will be charged"
                        }
                    ],
                    "combined_statement": "25% of your booking total will be charged",
                    "type": "guarantee"
                }
            ],
            "assigned_units_pool": "907e6d37-6c0c-492e-a72e-82d1d871db20",
            "bed_preference": null,
            "calendar_extra": "",
            "check_in": false,
            "cost": null,
            "days": [
                {
                    "amount": 81.000,
                    "cost": null,
                    "date": "2025-11-26"
                }
            ],
            "departure_time": {
                "code": "",
                "description": ""
            },
            "from_date": "2025-11-26",
            "gross_cost": null,
            "gross_guarantee": 22.47750,
            "gross_total": 89.910,
            "guarantee": 20.25000,
            "guest": {
                "address": null,
                "alternative_email": null,
                "cci": null,
                "city": null,
                "country": null,
                "country_id": null,
                "country_phone_prefix": null,
                "dob": null,
                "email": null,
                "first_name": "test",
                "id": null,
                "id_info": null,
                "is_main": false,
                "last_name": "test",
                "mobile": null,
                "mobile_without_prefix": null,
                "nbr_confirmed_bookings": 0,
                "notes": null,
                "password": null,
                "subscribe_to_news_letter": null
            },
            "identifier": "aae85c09-b8e8-4947-a212-d00393d16002",
            "in_out": {
                "code": "001",
                "description": "Checked in"
            },
            "is_split": true,
            "notes": "",
            "occupancy": {
                "adult_nbr": 2,
                "children_nbr": 0,
                "infant_nbr": null
            },
            "ota_meta": null,
            "ota_meta_plain": null,
            "ota_taxes": null,
            "ota_unique_id": null,
            "parent_room_identifier": "eaec5d7b-ac8a-4c7e-9268-4bc7afb33279",
            "prepayment_amount": null,
            "prepayment_amount_gross": null,
            "rateplan": {
                "agents": null,
                "assignable_units": null,
                "cancelation": "",
                "custom_text": null,
                "extra_bed_for_code": null,
                "extra_bed_max": null,
                "extra_bed_rate_per_night": null,
                "extra_bed_rate_per_night_additional_child": null,
                "extra_bed_rate_per_night_first_child": null,
                "guarantee": "25% of your booking total will be charged",
                "id": 123,
                "is_active": null,
                "is_available_to_book": false,
                "is_booking_engine_enabled": null,
                "is_channel_enabled": null,
                "is_closed": null,
                "is_derived": false,
                "is_extra_bed_free_for_children": false,
                "is_non_refundable": false,
                "is_targeting_travel_agency": null,
                "meal_plan": {
                    "code": "002",
                    "name": null
                },
                "name": "Car Rental included\/Bed-&-breakfast",
                "not_available_reason": null,
                "pre_payment_amount": null,
                "pre_payment_amount_gross": null,
                "rate_restrictions": null,
                "selected_variation": {
                    "IS_MLS_VIOLATED": false,
                    "MLS_ALERT": null,
                    "MLS_ALERT_VALUE": null,
                    "adult_child_offering": "2 adults",
                    "adult_nbr": 2,
                    "amount": null,
                    "amount_gross": null,
                    "amount_per_night": null,
                    "amount_per_night_gross": null,
                    "applicable_policies": null,
                    "bed_preference_code": null,
                    "child_nbr": 0,
                    "discount_pct": null,
                    "discounted_amount": null,
                    "discounted_gross_amount": null,
                    "extra_bed_free_nbr": null,
                    "extra_bed_nbr": null,
                    "extra_bed_rate_per_night": null,
                    "food_nbr_upsell": 0,
                    "infant_nbr": null,
                    "is_lmd": null,
                    "nights": null,
                    "nights_nbr": null,
                    "prepayment_amount": null,
                    "prepayment_amount_gross": null,
                    "rate_plan_id": 123,
                    "smoking_code": null,
                    "total_before_discount": null
                },
                "sell_mode": null,
                "short_name": "Bed & breakfast",
                "sleeps": null,
                "variations": null
            },
            "roomtype": {
                "amenities": null,
                "availabilities": null,
                "bedding_setup": null,
                "description": null,
                "exposed_inventory": null,
                "id": 110,
                "images": null,
                "inventory": null,
                "is_active": null,
                "is_available_to_book": null,
                "is_bed_configuration_enabled": null,
                "is_channel_enabled": null,
                "main_image": null,
                "name": "Standard Rooms",
                "not_available_reason": null,
                "occupancy_default": null,
                "occupancy_max": null,
                "physicalrooms": null,
                "rate": null,
                "rateplans": null,
                "size": null,
                "smoking_option": null
            },
            "sharing_persons": [
                {
                    "address": null,
                    "alternative_email": null,
                    "cci": null,
                    "city": null,
                    "country": {
                        "cities": null,
                        "code": null,
                        "currency": null,
                        "flag": null,
                        "gmt_offset": 0,
                        "id": null,
                        "market_places": null,
                        "name": null,
                        "phone_prefix": null
                    },
                    "country_id": null,
                    "country_phone_prefix": null,
                    "dob": "1900-01-01",
                    "email": null,
                    "first_name": "test",
                    "id": 130855,
                    "id_info": {
                        "number": "",
                        "type": {
                            "code": "001",
                            "description": "Passport"
                        }
                    },
                    "is_main": true,
                    "last_name": "test",
                    "mobile": null,
                    "mobile_without_prefix": null,
                    "nbr_confirmed_bookings": 0,
                    "notes": null,
                    "password": null,
                    "subscribe_to_news_letter": null
                }
            ],
            "smoking_option": null,
            "taxes": null,
            "to_date": "2025-11-27",
            "total": 81.000,
            "unit": {
                "calendar_cell": null,
                "hk_status": null,
                "housekeeper": null,
                "id": 17,
                "is_active": null,
                "name": "06"
            }
        },
        {
            "applicable_policies": [
                {
                    "brackets": [
                        {
                            "amount": 0.0,
                            "amount_formatted": "US$0.00",
                            "code": "000",
                            "currency_id": 4,
                            "due_on": "2025-11-25",
                            "due_on_formatted": "Tuesday, 25 Nov 2025, 14:00",
                            "gross_amount": 0.0,
                            "gross_amount_formatted": "US$0.00",
                            "statement": "Do not use"
                        }
                    ],
                    "combined_statement": "",
                    "type": "cancelation"
                },
                {
                    "brackets": [
                        {
                            "amount": 20.25000,
                            "amount_formatted": "US$20.25",
                            "code": "001",
                            "currency_id": 4,
                            "due_on": "2025-11-25",
                            "due_on_formatted": null,
                            "gross_amount": 22.47750,
                            "gross_amount_formatted": "US$22.48",
                            "statement": "25% of your booking total will be charged"
                        }
                    ],
                    "combined_statement": "25% of your booking total will be charged",
                    "type": "guarantee"
                }
            ],
            "assigned_units_pool": "06616072-7947-4409-b524-e4509e7f6552",
            "bed_preference": null,
            "calendar_extra": "",
            "check_in": false,
            "cost": null,
            "days": [
                {
                    "amount": 81.000,
                    "cost": null,
                    "date": "2025-11-27"
                }
            ],
            "departure_time": {
                "code": "",
                "description": ""
            },
            "from_date": "2025-11-27",
            "gross_cost": null,
            "gross_guarantee": 22.47750,
            "gross_total": 89.910,
            "guarantee": 20.25000,
            "guest": {
                "address": null,
                "alternative_email": null,
                "cci": null,
                "city": null,
                "country": null,
                "country_id": null,
                "country_phone_prefix": null,
                "dob": null,
                "email": null,
                "first_name": "test",
                "id": null,
                "id_info": null,
                "is_main": false,
                "last_name": "test",
                "mobile": null,
                "mobile_without_prefix": null,
                "nbr_confirmed_bookings": 0,
                "notes": null,
                "password": null,
                "subscribe_to_news_letter": null
            },
            "identifier": "1b453b0c-3824-44c9-a1f2-f4e90147458c",
            "in_out": {
                "code": "001",
                "description": "Checked in"
            },
            "is_split": true,
            "notes": "",
            "occupancy": {
                "adult_nbr": 2,
                "children_nbr": 0,
                "infant_nbr": null
            },
            "ota_meta": null,
            "ota_meta_plain": null,
            "ota_taxes": null,
            "ota_unique_id": null,
            "parent_room_identifier": "aae85c09-b8e8-4947-a212-d00393d16002",
            "prepayment_amount": null,
            "prepayment_amount_gross": null,
            "rateplan": {
                "agents": null,
                "assignable_units": null,
                "cancelation": "",
                "custom_text": null,
                "extra_bed_for_code": null,
                "extra_bed_max": null,
                "extra_bed_rate_per_night": null,
                "extra_bed_rate_per_night_additional_child": null,
                "extra_bed_rate_per_night_first_child": null,
                "guarantee": "25% of your booking total will be charged",
                "id": 123,
                "is_active": null,
                "is_available_to_book": false,
                "is_booking_engine_enabled": null,
                "is_channel_enabled": null,
                "is_closed": null,
                "is_derived": false,
                "is_extra_bed_free_for_children": false,
                "is_non_refundable": false,
                "is_targeting_travel_agency": null,
                "meal_plan": {
                    "code": "002",
                    "name": null
                },
                "name": "Car Rental included\/Bed-&-breakfast",
                "not_available_reason": null,
                "pre_payment_amount": null,
                "pre_payment_amount_gross": null,
                "rate_restrictions": null,
                "selected_variation": {
                    "IS_MLS_VIOLATED": false,
                    "MLS_ALERT": null,
                    "MLS_ALERT_VALUE": null,
                    "adult_child_offering": "2 adults",
                    "adult_nbr": 2,
                    "amount": null,
                    "amount_gross": null,
                    "amount_per_night": null,
                    "amount_per_night_gross": null,
                    "applicable_policies": null,
                    "bed_preference_code": null,
                    "child_nbr": 0,
                    "discount_pct": null,
                    "discounted_amount": null,
                    "discounted_gross_amount": null,
                    "extra_bed_free_nbr": null,
                    "extra_bed_nbr": null,
                    "extra_bed_rate_per_night": null,
                    "food_nbr_upsell": 0,
                    "infant_nbr": null,
                    "is_lmd": null,
                    "nights": null,
                    "nights_nbr": null,
                    "prepayment_amount": null,
                    "prepayment_amount_gross": null,
                    "rate_plan_id": 123,
                    "smoking_code": null,
                    "total_before_discount": null
                },
                "sell_mode": null,
                "short_name": "Bed & breakfast",
                "sleeps": null,
                "variations": null
            },
            "roomtype": {
                "amenities": null,
                "availabilities": null,
                "bedding_setup": null,
                "description": null,
                "exposed_inventory": null,
                "id": 110,
                "images": null,
                "inventory": null,
                "is_active": null,
                "is_available_to_book": null,
                "is_bed_configuration_enabled": null,
                "is_channel_enabled": null,
                "main_image": null,
                "name": "Standard Rooms",
                "not_available_reason": null,
                "occupancy_default": null,
                "occupancy_max": null,
                "physicalrooms": null,
                "rate": null,
                "rateplans": null,
                "size": null,
                "smoking_option": null
            },
            "sharing_persons": [
                {
                    "address": null,
                    "alternative_email": null,
                    "cci": null,
                    "city": null,
                    "country": {
                        "cities": null,
                        "code": null,
                        "currency": null,
                        "flag": null,
                        "gmt_offset": 0,
                        "id": null,
                        "market_places": null,
                        "name": null,
                        "phone_prefix": null
                    },
                    "country_id": null,
                    "country_phone_prefix": null,
                    "dob": "1900-01-01",
                    "email": null,
                    "first_name": "test",
                    "id": 130856,
                    "id_info": {
                        "number": "",
                        "type": {
                            "code": "001",
                            "description": "Passport"
                        }
                    },
                    "is_main": true,
                    "last_name": "test",
                    "mobile": null,
                    "mobile_without_prefix": null,
                    "nbr_confirmed_bookings": 0,
                    "notes": null,
                    "password": null,
                    "subscribe_to_news_letter": null
                }
            ],
            "smoking_option": null,
            "taxes": null,
            "to_date": "2025-11-28",
            "total": 81.000,
            "unit": {
                "calendar_cell": null,
                "hk_status": null,
                "housekeeper": null,
                "id": 26,
                "is_active": null,
                "name": "07"
            }
        },
        {
            "applicable_policies": [
                {
                    "brackets": [
                        {
                            "amount": 0.0,
                            "amount_formatted": "US$0.00",
                            "code": "000",
                            "currency_id": 4,
                            "due_on": "2025-11-25",
                            "due_on_formatted": "Tuesday, 25 Nov 2025, 14:00",
                            "gross_amount": 0.0,
                            "gross_amount_formatted": "US$0.00",
                            "statement": "Do not use"
                        }
                    ],
                    "combined_statement": "",
                    "type": "cancelation"
                },
                {
                    "brackets": [
                        {
                            "amount": 22.50000,
                            "amount_formatted": "US$22.50",
                            "code": "001",
                            "currency_id": 4,
                            "due_on": "2025-11-25",
                            "due_on_formatted": null,
                            "gross_amount": 24.97500,
                            "gross_amount_formatted": "US$24.98",
                            "statement": "25% of your booking total will be charged"
                        }
                    ],
                    "combined_statement": "25% of your booking total will be charged",
                    "type": "guarantee"
                }
            ],
            "assigned_units_pool": "8aa33ef5-a670-457d-9f6e-b94f1d1ff7ce",
            "bed_preference": null,
            "calendar_extra": "",
            "check_in": false,
            "cost": null,
            "days": [
                {
                    "amount": 90.000,
                    "cost": null,
                    "date": "2025-11-28"
                }
            ],
            "departure_time": {
                "code": "",
                "description": ""
            },
            "from_date": "2025-11-28",
            "gross_cost": null,
            "gross_guarantee": 24.97500,
            "gross_total": 99.900,
            "guarantee": 22.50000,
            "guest": {
                "address": null,
                "alternative_email": null,
                "cci": null,
                "city": null,
                "country": null,
                "country_id": null,
                "country_phone_prefix": null,
                "dob": null,
                "email": null,
                "first_name": "test",
                "id": null,
                "id_info": null,
                "is_main": false,
                "last_name": "test",
                "mobile": null,
                "mobile_without_prefix": null,
                "nbr_confirmed_bookings": 0,
                "notes": null,
                "password": null,
                "subscribe_to_news_letter": null
            },
            "identifier": "5dd224df-5f2b-4800-a256-f8e83e8389fe",
            "in_out": {
                "code": "001",
                "description": "Checked in"
            },
            "is_split": true,
            "notes": "",
            "occupancy": {
                "adult_nbr": 2,
                "children_nbr": 0,
                "infant_nbr": null
            },
            "ota_meta": null,
            "ota_meta_plain": null,
            "ota_taxes": null,
            "ota_unique_id": null,
            "parent_room_identifier": "1b453b0c-3824-44c9-a1f2-f4e90147458c",
            "prepayment_amount": null,
            "prepayment_amount_gross": null,
            "rateplan": {
                "agents": null,
                "assignable_units": null,
                "cancelation": "",
                "custom_text": null,
                "extra_bed_for_code": null,
                "extra_bed_max": null,
                "extra_bed_rate_per_night": null,
                "extra_bed_rate_per_night_additional_child": null,
                "extra_bed_rate_per_night_first_child": null,
                "guarantee": "25% of your booking total will be charged",
                "id": 123,
                "is_active": null,
                "is_available_to_book": false,
                "is_booking_engine_enabled": null,
                "is_channel_enabled": null,
                "is_closed": null,
                "is_derived": false,
                "is_extra_bed_free_for_children": false,
                "is_non_refundable": false,
                "is_targeting_travel_agency": null,
                "meal_plan": {
                    "code": "002",
                    "name": null
                },
                "name": "Car Rental included\/Bed-&-breakfast",
                "not_available_reason": null,
                "pre_payment_amount": null,
                "pre_payment_amount_gross": null,
                "rate_restrictions": null,
                "selected_variation": {
                    "IS_MLS_VIOLATED": false,
                    "MLS_ALERT": null,
                    "MLS_ALERT_VALUE": null,
                    "adult_child_offering": "2 adults",
                    "adult_nbr": 2,
                    "amount": null,
                    "amount_gross": null,
                    "amount_per_night": null,
                    "amount_per_night_gross": null,
                    "applicable_policies": null,
                    "bed_preference_code": null,
                    "child_nbr": 0,
                    "discount_pct": null,
                    "discounted_amount": null,
                    "discounted_gross_amount": null,
                    "extra_bed_free_nbr": null,
                    "extra_bed_nbr": null,
                    "extra_bed_rate_per_night": null,
                    "food_nbr_upsell": 0,
                    "infant_nbr": null,
                    "is_lmd": null,
                    "nights": null,
                    "nights_nbr": null,
                    "prepayment_amount": null,
                    "prepayment_amount_gross": null,
                    "rate_plan_id": 123,
                    "smoking_code": null,
                    "total_before_discount": null
                },
                "sell_mode": null,
                "short_name": "Bed & breakfast",
                "sleeps": null,
                "variations": null
            },
            "roomtype": {
                "amenities": null,
                "availabilities": null,
                "bedding_setup": null,
                "description": null,
                "exposed_inventory": null,
                "id": 110,
                "images": null,
                "inventory": null,
                "is_active": null,
                "is_available_to_book": null,
                "is_bed_configuration_enabled": null,
                "is_channel_enabled": null,
                "main_image": null,
                "name": "Standard Rooms",
                "not_available_reason": null,
                "occupancy_default": null,
                "occupancy_max": null,
                "physicalrooms": null,
                "rate": null,
                "rateplans": null,
                "size": null,
                "smoking_option": null
            },
            "sharing_persons": [
                {
                    "address": null,
                    "alternative_email": null,
                    "cci": null,
                    "city": null,
                    "country": {
                        "cities": null,
                        "code": null,
                        "currency": null,
                        "flag": null,
                        "gmt_offset": 0,
                        "id": null,
                        "market_places": null,
                        "name": null,
                        "phone_prefix": null
                    },
                    "country_id": null,
                    "country_phone_prefix": null,
                    "dob": "1900-01-01",
                    "email": null,
                    "first_name": "test",
                    "id": 131081,
                    "id_info": {
                        "number": "",
                        "type": {
                            "code": "001",
                            "description": "Passport"
                        }
                    },
                    "is_main": true,
                    "last_name": "test",
                    "mobile": null,
                    "mobile_without_prefix": null,
                    "nbr_confirmed_bookings": 0,
                    "notes": null,
                    "password": null,
                    "subscribe_to_news_letter": null
                }
            ],
            "smoking_option": null,
            "taxes": null,
            "to_date": "2025-11-29",
            "total": 90.000,
            "unit": {
                "calendar_cell": null,
                "hk_status": null,
                "housekeeper": null,
                "id": 17,
                "is_active": null,
                "name": "06"
            }
        },
        {
            "applicable_policies": [
                {
                    "brackets": [
                        {
                            "amount": 0.0,
                            "amount_formatted": "US$0.00",
                            "code": "000",
                            "currency_id": 4,
                            "due_on": "2025-11-25",
                            "due_on_formatted": "Tuesday, 25 Nov 2025, 14:00",
                            "gross_amount": 0.0,
                            "gross_amount_formatted": "US$0.00",
                            "statement": "Do not use"
                        }
                    ],
                    "combined_statement": "",
                    "type": "cancelation"
                },
                {
                    "brackets": [
                        {
                            "amount": 22.50000,
                            "amount_formatted": "US$22.50",
                            "code": "001",
                            "currency_id": 4,
                            "due_on": "2025-11-25",
                            "due_on_formatted": null,
                            "gross_amount": 24.97500,
                            "gross_amount_formatted": "US$24.98",
                            "statement": "25% of your booking total will be charged"
                        }
                    ],
                    "combined_statement": "25% of your booking total will be charged",
                    "type": "guarantee"
                }
            ],
            "assigned_units_pool": "c0239d40-74f7-4ca7-aca9-5024615509ec",
            "bed_preference": null,
            "calendar_extra": "",
            "check_in": false,
            "cost": null,
            "days": [
                {
                    "amount": 90.000,
                    "cost": null,
                    "date": "2025-11-29"
                }
            ],
            "departure_time": {
                "code": "029",
                "description": "18:00"
            },
            "from_date": "2025-11-29",
            "gross_cost": null,
            "gross_guarantee": 24.97500,
            "gross_total": 99.900,
            "guarantee": 22.50000,
            "guest": {
                "address": null,
                "alternative_email": null,
                "cci": null,
                "city": null,
                "country": null,
                "country_id": null,
                "country_phone_prefix": null,
                "dob": null,
                "email": null,
                "first_name": "test",
                "id": null,
                "id_info": null,
                "is_main": false,
                "last_name": "test",
                "mobile": null,
                "mobile_without_prefix": null,
                "nbr_confirmed_bookings": 0,
                "notes": null,
                "password": null,
                "subscribe_to_news_letter": null
            },
            "identifier": "6bf0f61d-9a44-4e0c-bbe0-cdf6687750ab",
            "in_out": {
                "code": "001",
                "description": "Checked in"
            },
            "is_split": true,
            "notes": "",
            "occupancy": {
                "adult_nbr": 2,
                "children_nbr": 0,
                "infant_nbr": null
            },
            "ota_meta": null,
            "ota_meta_plain": null,
            "ota_taxes": null,
            "ota_unique_id": null,
            "parent_room_identifier": "5dd224df-5f2b-4800-a256-f8e83e8389fe",
            "prepayment_amount": null,
            "prepayment_amount_gross": null,
            "rateplan": {
                "agents": null,
                "assignable_units": null,
                "cancelation": "",
                "custom_text": null,
                "extra_bed_for_code": null,
                "extra_bed_max": null,
                "extra_bed_rate_per_night": null,
                "extra_bed_rate_per_night_additional_child": null,
                "extra_bed_rate_per_night_first_child": null,
                "guarantee": "25% of your booking total will be charged",
                "id": 123,
                "is_active": null,
                "is_available_to_book": false,
                "is_booking_engine_enabled": null,
                "is_channel_enabled": null,
                "is_closed": null,
                "is_derived": false,
                "is_extra_bed_free_for_children": false,
                "is_non_refundable": false,
                "is_targeting_travel_agency": null,
                "meal_plan": {
                    "code": "002",
                    "name": null
                },
                "name": "Car Rental included\/Bed-&-breakfast",
                "not_available_reason": null,
                "pre_payment_amount": null,
                "pre_payment_amount_gross": null,
                "rate_restrictions": null,
                "selected_variation": {
                    "IS_MLS_VIOLATED": false,
                    "MLS_ALERT": null,
                    "MLS_ALERT_VALUE": null,
                    "adult_child_offering": "2 adults",
                    "adult_nbr": 2,
                    "amount": null,
                    "amount_gross": null,
                    "amount_per_night": null,
                    "amount_per_night_gross": null,
                    "applicable_policies": null,
                    "bed_preference_code": null,
                    "child_nbr": 0,
                    "discount_pct": null,
                    "discounted_amount": null,
                    "discounted_gross_amount": null,
                    "extra_bed_free_nbr": null,
                    "extra_bed_nbr": null,
                    "extra_bed_rate_per_night": null,
                    "food_nbr_upsell": 0,
                    "infant_nbr": null,
                    "is_lmd": null,
                    "nights": null,
                    "nights_nbr": null,
                    "prepayment_amount": null,
                    "prepayment_amount_gross": null,
                    "rate_plan_id": 123,
                    "smoking_code": null,
                    "total_before_discount": null
                },
                "sell_mode": null,
                "short_name": "Bed & breakfast",
                "sleeps": null,
                "variations": null
            },
            "roomtype": {
                "amenities": null,
                "availabilities": null,
                "bedding_setup": null,
                "description": null,
                "exposed_inventory": null,
                "id": 110,
                "images": null,
                "inventory": null,
                "is_active": null,
                "is_available_to_book": null,
                "is_bed_configuration_enabled": null,
                "is_channel_enabled": null,
                "main_image": null,
                "name": "Standard Rooms",
                "not_available_reason": null,
                "occupancy_default": null,
                "occupancy_max": null,
                "physicalrooms": null,
                "rate": null,
                "rateplans": null,
                "size": null,
                "smoking_option": null
            },
            "sharing_persons": [
                {
                    "address": null,
                    "alternative_email": null,
                    "cci": null,
                    "city": null,
                    "country": {
                        "cities": null,
                        "code": null,
                        "currency": null,
                        "flag": null,
                        "gmt_offset": 0,
                        "id": null,
                        "market_places": null,
                        "name": null,
                        "phone_prefix": null
                    },
                    "country_id": null,
                    "country_phone_prefix": null,
                    "dob": "1900-01-01",
                    "email": null,
                    "first_name": "test",
                    "id": 131082,
                    "id_info": {
                        "number": "",
                        "type": {
                            "code": "001",
                            "description": "Passport"
                        }
                    },
                    "is_main": true,
                    "last_name": "test",
                    "mobile": null,
                    "mobile_without_prefix": null,
                    "nbr_confirmed_bookings": 0,
                    "notes": null,
                    "password": null,
                    "subscribe_to_news_letter": null
                }
            ],
            "smoking_option": null,
            "taxes": null,
            "to_date": "2025-11-30",
            "total": 90.000,
            "unit": {
                "calendar_cell": null,
                "hk_status": null,
                "housekeeper": null,
                "id": 26,
                "is_active": null,
                "name": "07"
            }
        }
    ],
    "source": {
        "code": null,
        "description": null,
        "id": null,
        "tag": "",
        "type": null
    },
    "status": {
        "code": "002",
        "description": "Confirmed"
    },
    "system_id": 14952310,
    "to_date": "2025-11-30",
    "total": 423.000
};

const irTestCmpCss = ".sc-ir-test2-cmp-h{display:block;height:100vh}.modern-navbar.sc-ir-test2-cmp{background:#fff;box-shadow:0 2px 10px rgba(0, 0, 0, 0.1);position:sticky;top:0;z-index:1000;border-bottom:1px solid #e5e7eb}.overdue-banner.sc-ir-test2-cmp{padding:0.5rem;background:var(--red);color:white;text-align:center;width:100%;display:block}.navbar-container.sc-ir-test2-cmp{display:flex;align-items:center;justify-content:space-between;padding:0.5rem 1rem;margin:0 auto}.submenus.sc-ir-test2-cmp{background:#104064 !important;width:100%}.navbar-left.sc-ir-test2-cmp{display:flex;align-items:center;gap:1rem;width:100%}.custom-width.sc-ir-test2-cmp{width:240px}.navbar-brand.sc-ir-test2-cmp{font-weight:700;font-size:1.5rem;color:#1f2937}.hotel-name.sc-ir-test2-cmp{color:#6b7280;font-size:0.875rem;font-weight:500}.navbar-center.sc-ir-test2-cmp{margin-inline:auto}.navbar-right.sc-ir-test2-cmp{display:flex;align-items:center}.nav-items.sc-ir-test2-cmp{display:flex;list-style:none;margin:0;padding:0;gap:0.5rem}.nav-item.sc-ir-test2-cmp{margin:0}.nav-link.sc-ir-test2-cmp{display:flex;align-items:center;padding:0.5rem 1rem;text-decoration:none;font-weight:500;border-radius:0.375rem;transition:all 0.2s ease;cursor:pointer}.nav-link.sc-ir-test2-cmp:hover{background-color:#f3f4f6;color:#1f2937;text-decoration:none}.mobile-menu-toggle.sc-ir-test2-cmp{display:flex;align-items:center;justify-content:center;width:2.5rem;height:2.5rem;border:none;background:none;cursor:pointer;border-radius:0.375rem;transition:background-color 0.2s ease}.mobile-menu-toggle.sc-ir-test2-cmp:hover{background-color:#f3f4f6}.hamburger-icon.sc-ir-test2-cmp{display:flex;flex-direction:column;width:1.25rem;height:1rem;justify-content:space-between}.hamburger-icon.sc-ir-test2-cmp span.sc-ir-test2-cmp{display:block;height:2px;width:100%;background-color:#374151;border-radius:1px;transition:all 0.3s ease}.mobile-menu.sc-ir-test2-cmp{position:fixed;top:0;left:0;width:100%;height:100vh;background:#fff;transform:translateX(-100%);transition:transform 0.3s ease;z-index:1001;overflow-y:auto}.mobile-menu.active.sc-ir-test2-cmp{transform:translateX(0)}.mobile-menu-header.sc-ir-test2-cmp{display:flex;align-items:center;justify-content:space-between;padding:1rem;border-bottom:1px solid #e5e7eb}.mobile-menu-header.sc-ir-test2-cmp .hotel-name.sc-ir-test2-cmp{font-size:1.125rem;font-weight:600;color:#1f2937}.close-menu.sc-ir-test2-cmp{display:flex;align-items:center;justify-content:center;width:2.5rem;height:2.5rem;border:none;background:none;font-size:1.5rem;color:#6b7280;cursor:pointer;border-radius:0.375rem;transition:background-color 0.2s ease}.close-menu.sc-ir-test2-cmp:hover{background-color:#f3f4f6;color:#374151}.mobile-search.sc-ir-test2-cmp{padding:1rem;border-bottom:1px solid #e5e7eb}.mobile-nav-items.sc-ir-test2-cmp{list-style:none;margin:0;padding:1rem 0}.mobile-nav-item.sc-ir-test2-cmp{margin:0}.mobile-nav-link.sc-ir-test2-cmp{display:block;padding:0.75rem 1rem;color:#374151;text-decoration:none;font-weight:500;transition:all 0.2s ease;cursor:pointer}.mobile-nav-link.sc-ir-test2-cmp:hover{background-color:#f9fafb;color:#1f2937;text-decoration:none}@media (max-width: 767.98px){.navbar-container.sc-ir-test2-cmp{padding:0.5rem 1rem}.navbar-brand.sc-ir-test2-cmp{font-size:1.25rem}}.nav-item.sc-ir-test2-cmp{color:#1f2937 !important}.ir-mega-menu.sc-ir-test2-cmp{list-style:none;margin:0;padding:1rem;grid-template-columns:repeat(4, 1fr) !important;gap:1.25rem;background:#ffffff;border:1px solid #e5e7eb;border-radius:0.5rem}.ir-mega-menu.show.sc-ir-test2-cmp{display:grid !important;width:max-content !important}.ir-mega-menu.sc-ir-test2-cmp>li.sc-ir-test2-cmp{list-style:none}.ir-mega-menu-column.sc-ir-test2-cmp{list-style:none;margin:0;padding:0;display:flex;flex-direction:column;gap:0.25rem}.ir-mega-menu-row.title.sc-ir-test2-cmp{font-weight:700;color:#0f172a;margin-bottom:0.375rem;font-size:0.825rem;text-transform:uppercase;letter-spacing:0.02em;padding:0rem 0.75rem}.ir-mega-menu-row.sc-ir-test2-cmp a.sc-ir-test2-cmp{display:block;padding:0.5rem 0.75rem;color:#334155;text-decoration:none;line-height:1;transition:background-color 0.2s ease, color 0.2s ease}.ir-mega-menu-row.sc-ir-test2-cmp a.sc-ir-test2-cmp:hover{background-color:#f4f5fa;color:#1e2122;text-decoration:none}@media (min-width: 576px){.ir-mega-menu.sc-ir-test2-cmp{grid-template-columns:repeat(2, 1fr)}}@media (min-width: 992px){.ir-mega-menu.sc-ir-test2-cmp{grid-template-columns:repeat(3, 1fr);padding:1.25rem 1.5rem;gap:1.5rem}}@media (min-width: 768px){.mobile-menu-toggle.sc-ir-test2-cmp{display:none !important}.mobile-menu.sc-ir-test2-cmp{display:none}.navbar-left.sc-ir-test2-cmp{width:auto}}.ir-mega-menu.sc-ir-test2-cmp{opacity:0;visibility:hidden;transform:translateY(-10px);transition:opacity 0.3s ease, transform 0.3s ease, visibility 0.3s ease;pointer-events:none;position:absolute;top:100%;left:0;z-index:1000}.ir-mega-menu.show.sc-ir-test2-cmp{opacity:1;visibility:visible;transform:translateY(0);pointer-events:auto;display:grid !important}.payment-item.sc-ir-test2-cmp{position:relative;width:100%;display:flex;border-bottom:1px solid gainsboro;padding:0.5rem 0.5rem;align-items:center;min-height:3rem}.payment-item.sc-ir-test2-cmp:last-child{border-bottom:0}.payment-item.sc-ir-test2-cmp:hover{background:#f4f5fa}.payment-item.sc-ir-test2-cmp p.sc-ir-test2-cmp{padding:0;margin:0;box-sizing:border-box}.payment-item.sc-ir-test2-cmp .payment-actions.sc-ir-test2-cmp{display:none;background:#f4f5fa;gap:0.5rem;justify-content:flex-end;align-items:center}.payment-body.sc-ir-test2-cmp{display:flex;flex-direction:column;gap:0.25rem;flex:1 1 0%}.payment-fields.sc-ir-test2-cmp{display:flex;align-items:center;gap:0.5rem}.payment-item.sc-ir-test2-cmp:hover .payment-actions.sc-ir-test2-cmp{display:flex}.payment-amount.sc-ir-test2-cmp{font-weight:700}.payment-amount.is-credit.sc-ir-test2-cmp{color:#629a4c}.payment-amount.is-debit.sc-ir-test2-cmp{color:#ff4961}.payment-reference.sc-ir-test2-cmp{width:300px;font-size:12px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}@media (min-width: 640px){.payment-reference.sc-ir-test2-cmp{width:350px}}@media (min-width: 768px){.payment-reference.sc-ir-test2-cmp{width:400px}}@media (min-width: 1024px){.payment-reference.sc-ir-test2-cmp{width:350px}}";
const IrTest2CmpStyle0 = irTestCmpCss;

const tableCss = ".ir-table-row.sc-ir-test2-cmp td.sc-ir-test2-cmp{padding:0.5rem 1rem !important;text-align:left;z-index:2;background-color:white;white-space:nowrap}.table.sc-ir-test2-cmp td.sc-ir-test2-cmp{border-top:0;border-bottom:1px solid var(--wa-color-neutral-border-quiet, #abaeb9);transition:color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out}.table.sc-ir-test2-cmp tbody.sc-ir-test2-cmp tr.sc-ir-test2-cmp:last-child>td.sc-ir-test2-cmp{border-bottom:0 !important}.table.sc-ir-test2-cmp thead.sc-ir-test2-cmp th.sc-ir-test2-cmp{border:none !important;background:#ececec;background:color-mix(in oklab, var(--wa-color-neutral-fill-quiet, #f1f2f3) 60%, transparent);color:#374151;padding:0.5rem 1rem !important;text-align:left}.data-table.sc-ir-test2-cmp thead.sc-ir-test2-cmp th.sc-ir-test2-cmp{background:rgb(255, 255, 255) !important;padding-top:1rem !important;padding-bottom:1rem !important;border-bottom:1px solid var(--wa-color-neutral-70) !important}.data-table.sc-ir-test2-cmp .empty-row.sc-ir-test2-cmp{height:50vh !important;text-align:center;color:var(--wa-color-gray-60)}.data-table--pagination.sc-ir-test2-cmp{padding:0.5rem 1rem;position:sticky;bottom:0;border-top:1px solid var(--wa-color-neutral-70)}.selected.sc-ir-test2-cmp td.sc-ir-test2-cmp{background:#e3f3fa !important}.selected.sc-ir-test2-cmp td.sc-ir-test2-cmp{color:var(--gray-dark) !important;transition:color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out}.sortable.sc-ir-test2-cmp,.ir-table-row.sc-ir-test2-cmp{transition:color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out}.sortable.sc-ir-test2-cmp{text-transform:capitalize}.sortable.sc-ir-test2-cmp:hover{color:#212529;background-color:#e2e8f0 !important;border-color:#dae0e5;cursor:pointer}.ir-table-row.sc-ir-test2-cmp:hover td.sc-ir-test2-cmp{background:#e2e6ea3f !important;background:var(--wa-color-neutral-fill-quiet, #f1f2f3) !important}.sortable.sc-ir-test2-cmp:active{color:#212529;background-color:#e2e8f0;border-color:#d3d9df}.sortable.sc-ir-test2-cmp svg.sc-ir-test2-cmp{color:var(--blue)}.sticky-column.sc-ir-test2-cmp{position:sticky !important;right:0;background-color:white}";
const IrTest2CmpStyle1 = tableCss;

const IrTest2Cmp = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    invoiceRef;
    render() {
        return (index.h(index.Host, { key: '1751c1bd38aaf52e3d1c3d9ae20e9f5bd38956a9', style: { background: 'white' } }, index.h("ir-custom-button", { key: '9122e12a3276e8b614e75d85da711585dc9cbd31', onClickHandler: () => this.invoiceRef.openDrawer() }, "open"), index.h("ir-invoice", { key: '601e7c718d4967910fd6ff6cf3d980bf9d76de21', ref: el => (this.invoiceRef = el), booking: booking }), index.h("div", { key: 'c917288811a768fd04d0fdacd7a1a3afe5ddd789', style: { background: 'white' } }, index.h("table", { key: '6063fc5d37bfe6c1660c3436837c1d98975f0f7a', class: "table ir-table ir-zebra-rows ir-hover-rows" }, index.h("caption", { key: 'e47caeff89fded4cc99ac8be93133d0c1114298d' }, "This", index.h("code", { key: '5a83547bb9fe287779e321cf34cca0e87fe6ee88' }, "<caption>"), "describes the table"), index.h("thead", { key: '4048a3ace22c97b865cc49400c842e498a30dc46' }, index.h("tr", { key: '440dae71f77b13082c55ffa17578acd65a391cef' }, index.h("th", { key: '287c88018e3e1f6db3ee15f8f43554d4ae6e29cb' }, "First column"), index.h("th", { key: '2864c8a0eac5a997d2eaab353162ee6c9114d7b1' }, "Second column"), index.h("th", { key: '4affe4ebfa447d995e060f6e177723f9021799f3' }, "Third column"), index.h("th", { key: '6a645de48ed44cc627517e7745497d91ce4b6a8b' }, "Final column"))), index.h("tbody", { key: '4f92189cda34485f24ec3dd23367efced34aaeeb' }, index.h("tr", { key: '5175bac1c3bc92ecb9ff9faac556ce3fd1ab8107' }, index.h("td", { key: '833b1da811085dd1d362253e81ba7c30e1f4b088' }, "Data"), index.h("td", { key: '198be26fab464dd1c962ccc38b385f949eb8b128' }, "Data"), index.h("td", { key: 'f1d2889b953069c2a57d4ad34bca375bc44e761a' }, "Data"), index.h("td", { key: '67e000fc56097840fb4500405c9e55c30da96bd3' }, "Data")), index.h("tr", { key: '2ff5f865a0b73ed24bf09f08cea52d80d64ab6fa' }, index.h("td", { key: '6d42997a32bfe8cc6be30cb316c1d4203bc69c29' }, "Data"), index.h("td", { key: '39d6ba8a7d599adf76666a278aab4fd7ee86c5ca' }, "Data"), index.h("td", { key: '3980c874ee2566bafa0b2e20b86587de9d376982' }, "Data"), index.h("td", { key: 'be12fa9d0b81d21124eb355a366f034bf29f3e57' }, "Data")), index.h("tr", { key: '98ca5e2e35adfa302f8da56b4e85efcb790c8e5d' }, index.h("td", { key: 'e3827cccc606c3d1b5007455fe160f55efd995c4' }, "Data"), index.h("td", { key: '5ba0bf854bfdaeafef4f47e85ed0c74103a13a20' }, "Data"), index.h("td", { key: '73ecfddb3eba009fed9f1140aee07f1c1dd06396' }, "Data"), index.h("td", { key: 'e09d516aae43f482f2a6b4dedf504983cd0811b6' }, "Data")), index.h("tr", { key: 'c125e7e3221e0526c7b11e112594fb83d35fdc46' }, index.h("td", { key: '1604d1313f3c5938c84ac0c330f0d5c616bdc226' }, "Data"), index.h("td", { key: '5aec7e66697719fd5ce472abab51284808ca1527' }, "Data"), index.h("td", { key: 'd4aec18fe65ce75ec4231c0b53c2d455402069e0' }, "Data"), index.h("td", { key: 'f3602c3f19b0ff554e65d2503eda9b974f87b495' }, "Data")))))));
    }
};
IrTest2Cmp.style = IrTest2CmpStyle0 + IrTest2CmpStyle1;

exports.ir_test2_cmp = IrTest2Cmp;

//# sourceMappingURL=ir-test2-cmp.cjs.entry.js.map