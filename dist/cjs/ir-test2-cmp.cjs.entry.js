'use strict';

var index = require('./index-CJ0kc5p1.js');

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

const irTestCmpCss = () => `.sc-ir-test2-cmp-h{display:block;height:100vh}.modern-navbar.sc-ir-test2-cmp{background:#fff;box-shadow:0 2px 10px rgba(0, 0, 0, 0.1);position:sticky;top:0;z-index:1000;border-bottom:1px solid #e5e7eb}.overdue-banner.sc-ir-test2-cmp{padding:0.5rem;background:var(--red);color:white;text-align:center;width:100%;display:block}.navbar-container.sc-ir-test2-cmp{display:flex;align-items:center;justify-content:space-between;padding:0.5rem 1rem;margin:0 auto}.submenus.sc-ir-test2-cmp{background:#104064 !important;width:100%}.navbar-left.sc-ir-test2-cmp{display:flex;align-items:center;gap:1rem;width:100%}.custom-width.sc-ir-test2-cmp{width:240px}.navbar-brand.sc-ir-test2-cmp{font-weight:700;font-size:1.5rem;color:#1f2937}.hotel-name.sc-ir-test2-cmp{color:#6b7280;font-size:0.875rem;font-weight:500}.navbar-center.sc-ir-test2-cmp{margin-inline:auto}.navbar-right.sc-ir-test2-cmp{display:flex;align-items:center}.nav-items.sc-ir-test2-cmp{display:flex;list-style:none;margin:0;padding:0;gap:0.5rem}.nav-item.sc-ir-test2-cmp{margin:0}.nav-link.sc-ir-test2-cmp{display:flex;align-items:center;padding:0.5rem 1rem;text-decoration:none;font-weight:500;border-radius:0.375rem;transition:all 0.2s ease;cursor:pointer}.nav-link.sc-ir-test2-cmp:hover{background-color:#f3f4f6;color:#1f2937;text-decoration:none}.mobile-menu-toggle.sc-ir-test2-cmp{display:flex;align-items:center;justify-content:center;width:2.5rem;height:2.5rem;border:none;background:none;cursor:pointer;border-radius:0.375rem;transition:background-color 0.2s ease}.mobile-menu-toggle.sc-ir-test2-cmp:hover{background-color:#f3f4f6}.hamburger-icon.sc-ir-test2-cmp{display:flex;flex-direction:column;width:1.25rem;height:1rem;justify-content:space-between}.hamburger-icon.sc-ir-test2-cmp span.sc-ir-test2-cmp{display:block;height:2px;width:100%;background-color:#374151;border-radius:1px;transition:all 0.3s ease}.mobile-menu.sc-ir-test2-cmp{position:fixed;top:0;left:0;width:100%;height:100vh;background:#fff;transform:translateX(-100%);transition:transform 0.3s ease;z-index:1001;overflow-y:auto}.mobile-menu.active.sc-ir-test2-cmp{transform:translateX(0)}.mobile-menu-header.sc-ir-test2-cmp{display:flex;align-items:center;justify-content:space-between;padding:1rem;border-bottom:1px solid #e5e7eb}.mobile-menu-header.sc-ir-test2-cmp .hotel-name.sc-ir-test2-cmp{font-size:1.125rem;font-weight:600;color:#1f2937}.close-menu.sc-ir-test2-cmp{display:flex;align-items:center;justify-content:center;width:2.5rem;height:2.5rem;border:none;background:none;font-size:1.5rem;color:#6b7280;cursor:pointer;border-radius:0.375rem;transition:background-color 0.2s ease}.close-menu.sc-ir-test2-cmp:hover{background-color:#f3f4f6;color:#374151}.mobile-search.sc-ir-test2-cmp{padding:1rem;border-bottom:1px solid #e5e7eb}.mobile-nav-items.sc-ir-test2-cmp{list-style:none;margin:0;padding:1rem 0}.mobile-nav-item.sc-ir-test2-cmp{margin:0}.mobile-nav-link.sc-ir-test2-cmp{display:block;padding:0.75rem 1rem;color:#374151;text-decoration:none;font-weight:500;transition:all 0.2s ease;cursor:pointer}.mobile-nav-link.sc-ir-test2-cmp:hover{background-color:#f9fafb;color:#1f2937;text-decoration:none}@media (max-width: 767.98px){.navbar-container.sc-ir-test2-cmp{padding:0.5rem 1rem}.navbar-brand.sc-ir-test2-cmp{font-size:1.25rem}}.nav-item.sc-ir-test2-cmp{color:#1f2937 !important}.ir-mega-menu.sc-ir-test2-cmp{list-style:none;margin:0;padding:1rem;grid-template-columns:repeat(4, 1fr) !important;gap:1.25rem;background:#ffffff;border:1px solid #e5e7eb;border-radius:0.5rem}.ir-mega-menu.show.sc-ir-test2-cmp{display:grid !important;width:max-content !important}.ir-mega-menu.sc-ir-test2-cmp>li.sc-ir-test2-cmp{list-style:none}.ir-mega-menu-column.sc-ir-test2-cmp{list-style:none;margin:0;padding:0;display:flex;flex-direction:column;gap:0.25rem}.ir-mega-menu-row.title.sc-ir-test2-cmp{font-weight:700;color:#0f172a;margin-bottom:0.375rem;font-size:0.825rem;text-transform:uppercase;letter-spacing:0.02em;padding:0rem 0.75rem}.ir-mega-menu-row.sc-ir-test2-cmp a.sc-ir-test2-cmp{display:block;padding:0.5rem 0.75rem;color:#334155;text-decoration:none;line-height:1;transition:background-color 0.2s ease, color 0.2s ease}.ir-mega-menu-row.sc-ir-test2-cmp a.sc-ir-test2-cmp:hover{background-color:#f4f5fa;color:#1e2122;text-decoration:none}@media (min-width: 576px){.ir-mega-menu.sc-ir-test2-cmp{grid-template-columns:repeat(2, 1fr)}}@media (min-width: 992px){.ir-mega-menu.sc-ir-test2-cmp{grid-template-columns:repeat(3, 1fr);padding:1.25rem 1.5rem;gap:1.5rem}}@media (min-width: 768px){.mobile-menu-toggle.sc-ir-test2-cmp{display:none !important}.mobile-menu.sc-ir-test2-cmp{display:none}.navbar-left.sc-ir-test2-cmp{width:auto}}.ir-mega-menu.sc-ir-test2-cmp{opacity:0;visibility:hidden;transform:translateY(-10px);transition:opacity 0.3s ease, transform 0.3s ease, visibility 0.3s ease;pointer-events:none;position:absolute;top:100%;left:0;z-index:1000}.ir-mega-menu.show.sc-ir-test2-cmp{opacity:1;visibility:visible;transform:translateY(0);pointer-events:auto;display:grid !important}.payment-item.sc-ir-test2-cmp{position:relative;width:100%;display:flex;border-bottom:1px solid gainsboro;padding:0.5rem 0.5rem;align-items:center;min-height:3rem}.payment-item.sc-ir-test2-cmp:last-child{border-bottom:0}.payment-item.sc-ir-test2-cmp:hover{background:#f4f5fa}.payment-item.sc-ir-test2-cmp p.sc-ir-test2-cmp{padding:0;margin:0;box-sizing:border-box}.payment-item.sc-ir-test2-cmp .payment-actions.sc-ir-test2-cmp{display:none;background:#f4f5fa;gap:0.5rem;justify-content:flex-end;align-items:center}.payment-body.sc-ir-test2-cmp{display:flex;flex-direction:column;gap:0.25rem;flex:1 1 0%}.payment-fields.sc-ir-test2-cmp{display:flex;align-items:center;gap:0.5rem}.payment-item.sc-ir-test2-cmp:hover .payment-actions.sc-ir-test2-cmp{display:flex}.payment-amount.sc-ir-test2-cmp{font-weight:700}.payment-amount.is-credit.sc-ir-test2-cmp{color:#629a4c}.payment-amount.is-debit.sc-ir-test2-cmp{color:#ff4961}.payment-reference.sc-ir-test2-cmp{width:300px;font-size:12px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}@media (min-width: 640px){.payment-reference.sc-ir-test2-cmp{width:350px}}@media (min-width: 768px){.payment-reference.sc-ir-test2-cmp{width:400px}}@media (min-width: 1024px){.payment-reference.sc-ir-test2-cmp{width:350px}}.menu-footer.sc-ir-test2-cmp{display:flex;flex-direction:column;box-sizing:border-box;width:100%;text-align:start}.menu-footer.sc-ir-test2-cmp h4.sc-ir-test2-cmp{font-family:var(--wa-font-family-heading);font-weight:var(--wa-font-weight-heading);line-height:var(--wa-line-height-condensed);text-wrap:balance;font-size:var(--wa-font-size-m)}`;

const tableCss = () => `.sc-ir-test2-cmp-h{--ir-cell-padding:0.5rem 1rem}.table--container.sc-ir-test2-cmp{overflow-x:auto}.table--container.sc-ir-test2-cmp,.data-table.sc-ir-test2-cmp{height:100%}.ir-table-row.sc-ir-test2-cmp td.sc-ir-test2-cmp{padding:var(--ir-cell-padding) !important;text-align:left;z-index:2;background-color:var(--wa-color-surface-default);white-space:nowrap;color:var(--wa-color-text-normal);box-sizing:border-box;transition-duration:var(--wa-transition-fast)}.table.sc-ir-test2-cmp td.sc-ir-test2-cmp{border-top:0;border-bottom:1px solid var(--wa-color-neutral-border-quiet, #abaeb9);transition:color 0.15s ease-in-out,     background-color 0.15s ease-in-out,     border-color 0.15s ease-in-out,     box-shadow 0.15s ease-in-out}.table.sc-ir-test2-cmp tbody.sc-ir-test2-cmp tr.sc-ir-test2-cmp:last-child>td.sc-ir-test2-cmp{border-bottom:0 !important}.table.sc-ir-test2-cmp thead.sc-ir-test2-cmp th.sc-ir-test2-cmp{border:none !important;background:color-mix(in oklab, var(--wa-color-neutral-fill-quiet, #f1f2f3) 60%, transparent);color:var(--wa-color-neutral-on-quiet);padding:0.5rem 1rem !important;text-align:left}.data-table.sc-ir-test2-cmp thead.sc-ir-test2-cmp th.sc-ir-test2-cmp{box-sizing:border-box;background:var(--wa-color-surface-default) !important;padding-top:0.5rem !important;padding-bottom:0.5rem !important;border-bottom:var(--wa-border-style) var(--wa-border-width-s) var(--wa-color-neutral-border-normal) !important;color:var(--wa-color-text-normal)}.empty-row.sc-ir-test2-cmp{height:50vh !important;text-align:center;color:var(--wa-color-gray-60)}.sortable.sc-ir-test2-cmp,.ir-table-row.sc-ir-test2-cmp{transition:color 0.15s ease-in-out,     background-color 0.15s ease-in-out,     border-color 0.15s ease-in-out,     box-shadow 0.15s ease-in-out}.sortable.sc-ir-test2-cmp{text-transform:capitalize;cursor:pointer}.table.sc-ir-test2-cmp thead.sc-ir-test2-cmp th.sortable.sc-ir-test2-cmp{transition-property:background, border, box-shadow, color;transition-duration:var(--wa-transition-fast);transition-timing-function:var(--wa-transition-easing)}.table.sc-ir-test2-cmp thead.sc-ir-test2-cmp th.sortable.sc-ir-test2-cmp:hover{color:var(--wa-color-on-quiet, var(--wa-color-neutral-on-quiet));background-color:var(--wa-color-fill-quiet, var(--wa-color-neutral-fill-quiet)) !important}.table.sc-ir-test2-cmp thead.sc-ir-test2-cmp th.sortable.sc-ir-test2-cmp:active{color:var(--wa-color-on-quiet, var(--wa-color-neutral-on-quiet));background-color:color-mix(in oklab, var(--wa-color-fill-quiet, var(--wa-color-neutral-fill-quiet)), var(--wa-color-mix-active)) !important}.sortable.sc-ir-test2-cmp:active{color:#212529;background-color:#e2e8f0;border-color:#d3d9df}.sortable.sc-ir-test2-cmp svg.sc-ir-test2-cmp{color:var(--wa-color-brand-fill-loud)}.ir-table-row.sc-ir-test2-cmp:hover td.sc-ir-test2-cmp{background:var(--wa-color-neutral-fill-quiet, #f1f2f3) !important}.--clickable.ir-table-row.sc-ir-test2-cmp:hover td.sc-ir-test2-cmp{background-color:var(--wa-color-fill-quiet, var(--wa-color-neutral-fill-quiet)) !important}.--clickable.ir-table-row.sc-ir-test2-cmp:active td.sc-ir-test2-cmp{background-color:color-mix(in oklab, var(--wa-color-fill-quiet, var(--wa-color-neutral-fill-quiet)), var(--wa-color-mix-active)) !important}.selected.sc-ir-test2-cmp td.sc-ir-test2-cmp{background:var(--wa-color-brand-fill-quiet) !important;border-color:var(--wa-color-neutral-border-quiet) !important;color:var(--gray-dark) !important;transition:color 0.15s ease-in-out,     background-color 0.15s ease-in-out,     border-color 0.15s ease-in-out,     box-shadow 0.15s ease-in-out}.selected.ir-table-row.sc-ir-test2-cmp:hover td.sc-ir-test2-cmp{background-color:color-mix(in oklab, var(--wa-color-fill-normal, var(--wa-color-brand-fill-normal)), var(--wa-color-mix-hover)) !important}.selected.ir-table-row.sc-ir-test2-cmp:active td.sc-ir-test2-cmp{background-color:color-mix(in oklab, var(--wa-color-fill-normal, var(--wa-color-brand-fill-normal)), var(--wa-color-mix-active)) !important}.data-table.sc-ir-test2-cmp .empty-row.sc-ir-test2-cmp{height:50vh !important;text-align:center;color:var(--wa-color-gray-60)}.data-table--pagination.sc-ir-test2-cmp{padding:0.5rem 1rem;background:var(--wa-color-surface-default);border-top:1px solid var(--wa-color-neutral-90)}.sticky-column.sc-ir-test2-cmp{position:sticky !important;right:0;background-color:white}`;

const IrTest2Cmp = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    invoiceRef;
    render() {
        return (index.h(index.Host, { key: '3a57fab7e1dbb2d536c9d2cee4c824acea9a6418', style: { background: 'white' } }, index.h("ir-custom-button", { key: '14bf7062c3f7cea28da167d35173f76c2bd14417', onClickHandler: () => this.invoiceRef.openDrawer() }, "open"), index.h("ir-invoice", { key: 'a1066424925b314c0c3139c207a159edda9dbe77', ref: el => (this.invoiceRef = el), booking: booking }), index.h("div", { key: 'c4b3d3e135ced2380bb5564ec8393ec88d94012a', style: { background: 'white' } }, index.h("table", { key: '066bace5a0954f0f341af11775e98c77e5246a94', class: "table ir-table ir-zebra-rows ir-hover-rows" }, index.h("caption", { key: 'e70b53550fe9957d704137531a0890e610f9f958' }, "This", index.h("code", { key: '0f8d4c3ced305a0d967beeb3230058356fb72437' }, "<caption>"), "describes the table"), index.h("thead", { key: 'c422d3b077c8aa5feb33607245b01c919e50020b' }, index.h("tr", { key: '98438d867f459047aa3e6d76cf09dd89e20f74f6' }, index.h("th", { key: 'e836a6d06234fd6aaaa9609021e97d46f2c29f2f' }, "First column"), index.h("th", { key: 'c56c9f6b23717cbc4b4b0cd49659ed419b9eb256' }, "Second column"), index.h("th", { key: '91e21ae7899b4afd8b0bf50dd5c04068848e0b91' }, "Third column"), index.h("th", { key: '622bf6286aebae36bf19dfa762df47bd60eba213' }, "Final column"))), index.h("tbody", { key: 'ca9844ece4ee94550c3cf9f4849f10821ca80855' }, index.h("tr", { key: '2903e864f1da9482d7c54e880ef1cc866a5c599a' }, index.h("td", { key: 'f718e99c95385cd141d2d03083dd5b0964f64ec8' }, "Data"), index.h("td", { key: '8b7d1dcc4e63c6b90794e6571492c4644053b97f' }, "Data"), index.h("td", { key: '6fadf1521ed0e30a75993a10727b4158b125f186' }, "Data"), index.h("td", { key: '0b546955c78b425c243770e336b481d8328a6ca0' }, "Data")), index.h("tr", { key: '3d954e2cd319aad55f7f0a3e51500af8c6992b7e' }, index.h("td", { key: '123e92865b9eb500261f7fd2cfa8a207d0c13d01' }, "Data"), index.h("td", { key: 'ebef6e34737c2a4fe7b3431e4b92e9f2475f3fe8' }, "Data"), index.h("td", { key: '4f5a0d0550abc918b6473db4ee3be86a6be18613' }, "Data"), index.h("td", { key: 'f6845207f12509554ea94275f98134f8c884a8c1' }, "Data")), index.h("tr", { key: '5e43f5ed95add14a2979ea9779d5757cb605c812' }, index.h("td", { key: '59d789028b400659d51ac6d556ef98302ce1f994' }, "Data"), index.h("td", { key: '905676564da7f5c5994f67ff0e41d2d7f0e106cd' }, "Data"), index.h("td", { key: 'b4aaa15a1d73a82afb7b9468272b4091fdd1dd8c' }, "Data"), index.h("td", { key: '2a62daa07fecd4667d1461d3967904017188e945' }, "Data")), index.h("tr", { key: '02694cdddd309c5d158b96f2e8543cc355a009a8' }, index.h("td", { key: '5f2d98f105299d028e873ead108ba4022c2a20eb' }, "Data"), index.h("td", { key: '37fbcbd6cf925c13ed1894269b54b3e61a7499e7' }, "Data"), index.h("td", { key: 'dea8bf81c75dd69a2c07fd6e46f4c4de26ac6906' }, "Data"), index.h("td", { key: 'cf749574079df1209724ea3e68beb581e3cba864' }, "Data")))))));
    }
};
IrTest2Cmp.style = irTestCmpCss() + tableCss();

exports.ir_test2_cmp = IrTest2Cmp;
