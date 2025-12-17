import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';
import { d as defineCustomElement$j } from './ir-booking-billing-recipient2.js';
import { d as defineCustomElement$i } from './ir-booking-company-dialog2.js';
import { d as defineCustomElement$h } from './ir-booking-company-form2.js';
import { d as defineCustomElement$g } from './ir-custom-button2.js';
import { d as defineCustomElement$f } from './ir-custom-date-picker2.js';
import { d as defineCustomElement$e } from './ir-dialog2.js';
import { d as defineCustomElement$d } from './ir-drawer2.js';
import { d as defineCustomElement$c } from './ir-empty-state2.js';
import { d as defineCustomElement$b } from './ir-input2.js';
import { d as defineCustomElement$a } from './ir-invoice2.js';
import { d as defineCustomElement$9 } from './ir-invoice-form2.js';
import { d as defineCustomElement$8 } from './ir-preview-screen-dialog2.js';
import { d as defineCustomElement$7 } from './ir-print-room2.js';
import { d as defineCustomElement$6 } from './ir-printing-extra-service2.js';
import { d as defineCustomElement$5 } from './ir-printing-label2.js';
import { d as defineCustomElement$4 } from './ir-printing-pickup2.js';
import { d as defineCustomElement$3 } from './ir-proforma-invoice-preview2.js';
import { d as defineCustomElement$2 } from './ir-spinner2.js';

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

const tableCss = ".ir-table-row.sc-ir-test2-cmp td.sc-ir-test2-cmp{padding:0.5rem 1rem !important;text-align:left;z-index:2;background-color:var(--wa-color-surface-default);white-space:nowrap;color:var(--wa-color-text-normal);box-sizing:border-box}.table--container.sc-ir-test2-cmp{flex:1 1 0%}.table--container.sc-ir-test2-cmp{overflow-x:auto}.table.sc-ir-test2-cmp td.sc-ir-test2-cmp{border-top:0;border-bottom:1px solid var(--wa-color-neutral-border-quiet, #abaeb9);transition:color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out}.table.sc-ir-test2-cmp tbody.sc-ir-test2-cmp tr.sc-ir-test2-cmp:last-child>td.sc-ir-test2-cmp{border-bottom:0 !important}.table.sc-ir-test2-cmp thead.sc-ir-test2-cmp th.sc-ir-test2-cmp{border:none !important;background:#ececec;background:color-mix(in oklab, var(--wa-color-neutral-fill-quiet, #f1f2f3) 60%, transparent);color:#374151;padding:0.5rem 1rem !important;text-align:left}.data-table.sc-ir-test2-cmp thead.sc-ir-test2-cmp th.sc-ir-test2-cmp{box-sizing:border-box;background:var(--wa-color-surface-default) !important;padding-top:0.5rem !important;padding-bottom:0.5rem !important;border-bottom:1px solid var(--wa-color-neutral-90) !important;color:var(--wa-color-text-normal)}.data-table.sc-ir-test2-cmp .empty-row.sc-ir-test2-cmp{height:50vh !important;text-align:center;color:var(--wa-color-gray-60)}.data-table--pagination.sc-ir-test2-cmp{padding:0.5rem 1rem;position:sticky;bottom:0;background:var(--wa-color-surface-default);border-top:1px solid var(--wa-color-neutral-90)}.selected.sc-ir-test2-cmp td.sc-ir-test2-cmp{background:#e3f3fa !important}.selected.sc-ir-test2-cmp td.sc-ir-test2-cmp{color:var(--gray-dark) !important;transition:color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out}.sortable.sc-ir-test2-cmp,.ir-table-row.sc-ir-test2-cmp{transition:color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out}.sortable.sc-ir-test2-cmp{text-transform:capitalize}.sortable.sc-ir-test2-cmp:hover{color:#212529;background-color:#e2e8f0 !important;border-color:#dae0e5;cursor:pointer}.ir-table-row.sc-ir-test2-cmp:hover td.sc-ir-test2-cmp{background:#e2e6ea3f !important;background:var(--wa-color-neutral-fill-quiet, #f1f2f3) !important}.sortable.sc-ir-test2-cmp:active{color:#212529;background-color:#e2e8f0;border-color:#d3d9df}.sortable.sc-ir-test2-cmp svg.sc-ir-test2-cmp{color:var(--blue)}.sticky-column.sc-ir-test2-cmp{position:sticky !important;right:0;background-color:white}";
const IrTest2CmpStyle1 = tableCss;

const IrTest2Cmp$1 = /*@__PURE__*/ proxyCustomElement(class IrTest2Cmp extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
    }
    invoiceRef;
    render() {
        return (h(Host, { key: '8a2de4ae3fb116b41885c517d4896919ed734664', style: { background: 'white' } }, h("ir-custom-button", { key: '09dbd15329d6ce168dd41465427e61ee988f7b84', onClickHandler: () => this.invoiceRef.openDrawer() }, "open"), h("ir-invoice", { key: 'c8791b84fafe93a87825e0d4ea39563149df668e', ref: el => (this.invoiceRef = el), booking: booking }), h("div", { key: '46846a38be8ca1d3476ffd0e38436c53c8c6bf96', style: { background: 'white' } }, h("table", { key: 'c55381b7891c1739c05f3fb42e0a48bc26e179ca', class: "table ir-table ir-zebra-rows ir-hover-rows" }, h("caption", { key: 'cc71531197283493b048be5564bd2fd504bcc399' }, "This", h("code", { key: '529580f03d1b323d884b6746616da006ed406b65' }, "<caption>"), "describes the table"), h("thead", { key: 'd8e83ac7fa1c85fd5d55485a4acc8500c05b6259' }, h("tr", { key: '9cb11b53ea2c8ccc6de9719c81e0b61f8c68ee13' }, h("th", { key: 'ee68256caf2c945f5c00085f75263e55e786344e' }, "First column"), h("th", { key: '57d70a17039370e8dc3f76c0e01aaeff92ceff3d' }, "Second column"), h("th", { key: 'bf6b48da8871dff18664b01aa67250f5521a0209' }, "Third column"), h("th", { key: '5f6124d19c3fae33fce922b7830eb3da3f396fcb' }, "Final column"))), h("tbody", { key: '390a716160dda3f4f38e733efdc8cb8c70399fe1' }, h("tr", { key: '50bb1bdb944514df28b3195eee2cd492180ad660' }, h("td", { key: 'f19c5e1bdef1ba0af5846aa6c0a8f566d18d5268' }, "Data"), h("td", { key: '5c494dc2d21727309184e94892e068773d42553f' }, "Data"), h("td", { key: '7881e6fca591f044aebee5624ba46fd7bc7c365d' }, "Data"), h("td", { key: '7eef267d302f63ad905e10c361fd929dae1afe9e' }, "Data")), h("tr", { key: 'de534c99056e8cdf1dc2eb820abf5b8adb2ba416' }, h("td", { key: 'e8f4fc34cdd98f9ef53d08ee3efc27c885e901d8' }, "Data"), h("td", { key: 'd208312aff88955b7458824bd5206873bb734fa6' }, "Data"), h("td", { key: 'b7b3847254d77daf59a0adbfe5da3ddcd08a17a5' }, "Data"), h("td", { key: '46eeeb22b3880b26d82d901a19e52653d2004273' }, "Data")), h("tr", { key: '8e2d4ad23a6379d5798360627893ca40423a9f4b' }, h("td", { key: 'b867134447473aaa303bb87a36d37fab94190949' }, "Data"), h("td", { key: 'bd62f5b285c7b1432a61b2cf908f6d8a8e5d176d' }, "Data"), h("td", { key: 'fc3c41239526487cf518f281c14ed4adeefda714' }, "Data"), h("td", { key: '944707a289d6614c93f5fed28ed37fdf5c75e42e' }, "Data")), h("tr", { key: '2437814c6d9ef9b9646a39f0461e781ce2fdfc5d' }, h("td", { key: 'b6e121d34886e4d69d3d183de9c8889ff98f6f4e' }, "Data"), h("td", { key: 'bdd6984d35df89b2560633549e7ec0a918d23d64' }, "Data"), h("td", { key: '0cca733e44c0b66b45a6de0a29490a9e38ca65ed' }, "Data"), h("td", { key: '7c707fbd678f146cd2208090d53f35c852ae6ce3' }, "Data")))))));
    }
    static get style() { return IrTest2CmpStyle0 + IrTest2CmpStyle1; }
}, [2, "ir-test2-cmp"]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["ir-test2-cmp", "ir-booking-billing-recipient", "ir-booking-company-dialog", "ir-booking-company-form", "ir-custom-button", "ir-custom-date-picker", "ir-dialog", "ir-drawer", "ir-empty-state", "ir-input", "ir-invoice", "ir-invoice-form", "ir-preview-screen-dialog", "ir-print-room", "ir-printing-extra-service", "ir-printing-label", "ir-printing-pickup", "ir-proforma-invoice-preview", "ir-spinner"];
    components.forEach(tagName => { switch (tagName) {
        case "ir-test2-cmp":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, IrTest2Cmp$1);
            }
            break;
        case "ir-booking-billing-recipient":
            if (!customElements.get(tagName)) {
                defineCustomElement$j();
            }
            break;
        case "ir-booking-company-dialog":
            if (!customElements.get(tagName)) {
                defineCustomElement$i();
            }
            break;
        case "ir-booking-company-form":
            if (!customElements.get(tagName)) {
                defineCustomElement$h();
            }
            break;
        case "ir-custom-button":
            if (!customElements.get(tagName)) {
                defineCustomElement$g();
            }
            break;
        case "ir-custom-date-picker":
            if (!customElements.get(tagName)) {
                defineCustomElement$f();
            }
            break;
        case "ir-dialog":
            if (!customElements.get(tagName)) {
                defineCustomElement$e();
            }
            break;
        case "ir-drawer":
            if (!customElements.get(tagName)) {
                defineCustomElement$d();
            }
            break;
        case "ir-empty-state":
            if (!customElements.get(tagName)) {
                defineCustomElement$c();
            }
            break;
        case "ir-input":
            if (!customElements.get(tagName)) {
                defineCustomElement$b();
            }
            break;
        case "ir-invoice":
            if (!customElements.get(tagName)) {
                defineCustomElement$a();
            }
            break;
        case "ir-invoice-form":
            if (!customElements.get(tagName)) {
                defineCustomElement$9();
            }
            break;
        case "ir-preview-screen-dialog":
            if (!customElements.get(tagName)) {
                defineCustomElement$8();
            }
            break;
        case "ir-print-room":
            if (!customElements.get(tagName)) {
                defineCustomElement$7();
            }
            break;
        case "ir-printing-extra-service":
            if (!customElements.get(tagName)) {
                defineCustomElement$6();
            }
            break;
        case "ir-printing-label":
            if (!customElements.get(tagName)) {
                defineCustomElement$5();
            }
            break;
        case "ir-printing-pickup":
            if (!customElements.get(tagName)) {
                defineCustomElement$4();
            }
            break;
        case "ir-proforma-invoice-preview":
            if (!customElements.get(tagName)) {
                defineCustomElement$3();
            }
            break;
        case "ir-spinner":
            if (!customElements.get(tagName)) {
                defineCustomElement$2();
            }
            break;
    } });
}

const IrTest2Cmp = IrTest2Cmp$1;
const defineCustomElement = defineCustomElement$1;

export { IrTest2Cmp, defineCustomElement };

//# sourceMappingURL=ir-test2-cmp.js.map