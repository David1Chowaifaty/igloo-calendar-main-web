import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';
import { g as getDateDifference, d as dateFns, f as formatAmount } from './utils.js';
import { l as localizedWords } from './localization.store.js';
import { a as app_store } from './app.store.js';
import { b as booking_store } from './booking.js';
import { d as defineCustomElement$1 } from './ir-icons2.js';

const booking = {
    agent: null,
    allowed_actions: [
        {
            code: '001',
            description: 'Pending',
        },
        {
            code: '003',
            description: 'Cancel',
        },
        {
            code: 'CANC_RA',
            description: 'Cancel & reopen',
        },
        {
            code: '004',
            description: 'No show',
        },
        {
            code: 'NOSHOW_RA',
            description: 'No show & reopen',
        },
    ],
    arrival: {
        code: '001',
        description: 'Not sure yet',
    },
    booked_on: {
        date: '2024-05-01',
        hour: 19,
        minute: 25,
    },
    booking_nbr: '53247983',
    channel_booking_nbr: null,
    cost: 0.0,
    currency: {
        code: 'USD',
        id: 4,
        symbol: null,
    },
    financial: {
        due_amount: 8114.1,
        due_dates: [
            {
                amount: 849.15,
                currencysymbol: 'US$',
                date: '2024-04-12',
                description: 'Cancellation',
                room: 'Premium Suites - test3 ',
            },
            {
                amount: 8114.1,
                currencysymbol: 'US$',
                date: '2024-04-13',
                description: 'Cancellation',
                room: 'Premium Suites - test3 ',
            },
            {
                amount: 849.15,
                currencysymbol: 'US$',
                date: '2024-05-01',
                description: 'Prepayment',
                room: 'Premium Suites - test3 ',
            },
        ],
        gross_cost: 0.0,
        gross_total: 8114.1,
        payments: null,
        total_amount: 7310.0,
    },
    format: {
        from_date: 'Sat, 27 Apr 2024',
        to_date: 'Sat, 11 May 2024',
    },
    from_date: '2024-04-27',
    guest: {
        address: '',
        cci: null,
        city: null,
        country_id: 2,
        dob: null,
        email: 'test@gmail.com',
        first_name: 'test',
        id: 195932,
        last_name: 'test',
        mobile: '+96112345678',
        subscribe_to_news_letter: false,
    },
    is_direct: true,
    is_editable: true,
    is_in_loyalty_mode: null,
    is_pms_enabled: true,
    occupancy: {
        adult_nbr: 2,
        children_nbr: 0,
        infant_nbr: null,
    },
    origin: {
        Icon: 'https://x.igloorooms.com/assets/images/png/direct.png',
        Label: 'Direct | Phone/Email',
    },
    ota_notes: null,
    pickup_info: null,
    promo_key: '',
    property: {
        address: null,
        adult_child_constraints: null,
        affiliates: null,
        agents: null,
        allowed_booking_sources: null,
        allowed_cards: null,
        allowed_payment_methods: null,
        amenities: null,
        area: null,
        baby_cot_offering: null,
        calendar_legends: null,
        city: null,
        contacts: null,
        country: null,
        currency: null,
        description: null,
        id: 42,
        images: null,
        internet_offering: null,
        is_frontdesk_enabled: null,
        is_pms_enabled: null,
        is_vacation_rental: null,
        location: null,
        max_nights: 0,
        name: 'igloorooms Demo Hotel',
        parking_offering: null,
        payment_methods: null,
        pets_acceptance: null,
        phone: null,
        pickup_service: null,
        postal: null,
        privacy_policy: null,
        promotions: null,
        roomtypes: null,
        social_media: null,
        space_theme: null,
        tax_statement: null,
        taxes: null,
        time_constraints: null,
    },
    remark: '',
    rooms: [
        {
            assigned_units_pool: 'ef13e5c6-aea6-4db7-b158-01bdc34f893f',
            bed_preference: '',
            cost: 0.0,
            days: [
                {
                    amount: 765.0,
                    cost: 0.0,
                    date: '2024-04-27',
                },
                {
                    amount: 765.0,
                    cost: 0.0,
                    date: '2024-04-28',
                },
                {
                    amount: 765.0,
                    cost: 0.0,
                    date: '2024-04-29',
                },
                {
                    amount: 765.0,
                    cost: 0.0,
                    date: '2024-04-30',
                },
                {
                    amount: 765.0,
                    cost: 0.0,
                    date: '2024-05-01',
                },
                {
                    amount: 765.0,
                    cost: 0.0,
                    date: '2024-05-02',
                },
                {
                    amount: 765.0,
                    cost: 0.0,
                    date: '2024-05-03',
                },
                {
                    amount: 765.0,
                    cost: 0.0,
                    date: '2024-05-04',
                },
                {
                    amount: 765.0,
                    cost: 0.0,
                    date: '2024-05-05',
                },
                {
                    amount: 85.0,
                    cost: 0.0,
                    date: '2024-05-06',
                },
                {
                    amount: 85.0,
                    cost: 0.0,
                    date: '2024-05-07',
                },
                {
                    amount: 85.0,
                    cost: 0.0,
                    date: '2024-05-08',
                },
                {
                    amount: 85.0,
                    cost: 0.0,
                    date: '2024-05-09',
                },
                {
                    amount: 85.0,
                    cost: 0.0,
                    date: '2024-05-10',
                },
            ],
            from_date: '2024-04-27',
            gross_cost: 0.0,
            gross_total: 8114.1,
            guest: {
                address: null,
                cci: null,
                city: null,
                country_id: null,
                dob: null,
                email: null,
                first_name: 'test3',
                id: null,
                last_name: null,
                mobile: null,
                subscribe_to_news_letter: null,
            },
            identifier: 'b6998d8b-f0f6-4693-bc0a-12089a674763',
            notes: null,
            occupancy: {
                adult_nbr: 2,
                children_nbr: 0,
                infant_nbr: null,
            },
            ota_taxes: null,
            rateplan: {
                assignable_units: null,
                cancelation: '<u><b>Cancellation</b></u>: 100% of the total price will be charged if cancelled after Saturday, 13 Apr 2024, 22:00 or in case of no show.\r\n',
                custom_text: null,
                guarantee: '<u><b>Guarantee</b></u>: First night from your booking will be charged.',
                id: 3755,
                is_active: null,
                is_booking_engine_enabled: null,
                is_channel_enabled: null,
                is_closed: null,
                is_non_refundable: false,
                is_targeting_travel_agency: null,
                name: 'Half-board',
                rate_restrictions: null,
                selected_variation: {
                    adult_child_offering: '2 adults',
                    adult_nbr: 2,
                    amount: null,
                    amount_per_night: null,
                    child_nbr: 0,
                    discount_pct: null,
                    is_lmd: null,
                    nights_nbr: null,
                    total_before_discount: null,
                },
                sell_mode: null,
                short_name: null,
                variations: null,
            },
            roomtype: {
                amenities: null,
                availabilities: null,
                bedding_setup: null,
                description: null,
                exposed_inventory: null,
                id: 111,
                images: null,
                inventory: null,
                is_active: null,
                is_bed_configuration_enabled: null,
                main_image: null,
                name: 'Premium Suites',
                occupancy_default: null,
                occupancy_max: null,
                physicalrooms: null,
                pre_payment_amount: null,
                rate: null,
                rateplans: null,
                size: null,
                smoking_option: null,
            },
            smoking_option: null,
            to_date: '2024-05-11',
            total: 7310.0,
            unit: {
                calendar_cell: null,
                housekeeper: null,
                id: 3,
                name: '102',
            },
        },
    ],
    source: {
        code: '003',
        description: 'Phone/Email',
        id: null,
        tag: '',
        type: null,
    },
    status: {
        code: '002',
        description: 'Confirmed',
    },
    system_id: 14266943,
    to_date: '2024-05-11',
    total: 7310.0,
};

const irInvoiceCss = "*,:after,:before{--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-scroll-snap-strictness:proximity;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgba(59,130,246,.5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;border:0 solid #e5e7eb;box-sizing:border-box}:after,:before{--tw-content:\"\"}:host,html{-webkit-text-size-adjust:100%;font-feature-settings:normal;-webkit-tap-highlight-color:transparent;font-family:ui-sans-serif,system-ui,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;font-variation-settings:normal;line-height:1.5;-moz-tab-size:4;tab-size:4}body{line-height:inherit;margin:0}hr{border-top-width:1px;color:inherit;height:0}abbr:where([title]){text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,pre,samp{font-feature-settings:normal;font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace;font-size:1em;font-variation-settings:normal}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}table{border-collapse:collapse;border-color:inherit;text-indent:0}button,input,optgroup,select,textarea{font-feature-settings:inherit;color:inherit;font-family:inherit;font-size:100%;font-variation-settings:inherit;font-weight:inherit;line-height:inherit;margin:0;padding:0}button,select{text-transform:none}[type=button],[type=reset],[type=submit],button{-webkit-appearance:button;background-color:transparent;background-image:none}:-moz-focusring{outline:auto}:-moz-ui-invalid{box-shadow:none}progress{vertical-align:baseline}::-webkit-inner-spin-button,::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}summary{display:list-item}blockquote,dd,dl,fieldset,figure,h1,h2,h3,h4,h5,h6,hr,p,pre{margin:0}fieldset,legend{padding:0}menu,ol,ul{list-style:none;margin:0;padding:0}dialog{padding:0}textarea{resize:vertical}input::placeholder,textarea::placeholder{color:#9ca3af;opacity:1}[role=button],button{cursor:pointer}:disabled{cursor:default}audio,canvas,embed,iframe,img,object,svg,video{display:block;vertical-align:middle}img,video{height:auto;max-width:100%}[hidden]{display:none}::backdrop{--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-scroll-snap-strictness:proximity;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgba(59,130,246,.5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;}.block{display:block}:host{display:block}.booking-info{border-bottom:1px solid var(--gray-300,#d0d5dd)}.booking-info-text,.room-info-text{color:var(--gray-800,#1d293a);font-size:.875rem;font-weight:500}.booking-info-text span,.room-info-text span{color:var(--gray-600,#344055);font-weight:400}.room-info,section{padding:1rem 0}.booking-details-header{font-size:1.1rem;font-weight:600}.room-type{font-size:1rem;font-weight:600;margin-bottom:.3rem}p{font-size:.875rem}.total-payment{font-size:1rem}.static{position:static}.relative{position:relative}.sticky{position:sticky}.top-0{top:0}.z-50{z-index:50}.mx-auto{margin-left:auto;margin-right:auto}.flex{display:flex}.w-full{width:100%}.max-w-6xl{max-width:72rem}.flex-1{flex:1 1 0%}.flex-col{flex-direction:column}.space-y-5>:not([hidden])~:not([hidden]){--tw-space-y-reverse:0;margin-bottom:calc(1.25rem*var(--tw-space-y-reverse));margin-top:calc(1.25rem*(1 - var(--tw-space-y-reverse)))}.px-4{padding-left:1rem;padding-right:1rem}@media (min-width:1024px){.lg\\:px-6{padding-left:1.5rem;padding-right:1.5rem}}.shadow{--tw-shadow:0 1px 3px 0 rgba(0,0,0,.1),0 1px 2px -1px rgba(0,0,0,.1);--tw-shadow-colored:0 1px 3px 0 var(--tw-shadow-color),0 1px 2px -1px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow)}.visible{visibility:visible}@media (min-width:1024px){.lg\\:size-7{height:1.75rem;width:1.75rem}}.bottom-2{bottom:.5rem}.z-40{z-index:40}.mb-5{margin-bottom:1.25rem}.mt-14{margin-top:3.5rem}.w-auto{width:auto}.items-center{align-items:center}.justify-end{justify-content:flex-end}.justify-between{justify-content:space-between}.gap-4{gap:1rem}.rounded-md{border-radius:.375rem}.bg-gray-700\\/80{background-color:rgba(55,65,81,.8)}.px-6{padding-left:1.5rem;padding-right:1.5rem}.py-2{padding-bottom:.5rem;padding-top:.5rem}.py-8{padding-bottom:2rem;padding-top:2rem}.pb-5{padding-bottom:1.25rem}.text-base{font-size:1rem;line-height:1.5rem}.text-lg{font-size:1.125rem;line-height:1.75rem}.text-sm{font-size:.875rem;line-height:1.25rem}.font-medium{font-weight:500}.text-gray-200{--tw-text-opacity:1;color:rgb(229 231 235/var(--tw-text-opacity))}@media (min-width:768px){.md\\:text-lg{font-size:1.125rem;line-height:1.75rem}}@media (min-width:1024px){.lg\\:w-60{width:15rem}.lg\\:gap-10{gap:2.5rem}.lg\\:text-2xl{font-size:1.5rem;line-height:2rem}}.justify-center{justify-content:center}.sr-only{clip:rect(0,0,0,0);border-width:0;height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;white-space:nowrap;width:1px}.table{display:table}.grid{display:grid}.absolute{position:absolute}.right-3{right:.75rem}.top-3{top:.75rem}.size-4{height:1rem;width:1rem}.gap-2{gap:.5rem}.gap-2\\.5{gap:.625rem}.space-y-4>:not([hidden])~:not([hidden]){--tw-space-y-reverse:0;margin-bottom:calc(1rem*var(--tw-space-y-reverse));margin-top:calc(1rem*(1 - var(--tw-space-y-reverse)))}.space-y-8>:not([hidden])~:not([hidden]){--tw-space-y-reverse:0;margin-bottom:calc(2rem*var(--tw-space-y-reverse));margin-top:calc(2rem*(1 - var(--tw-space-y-reverse)))}.text-2xl{font-size:1.5rem;line-height:2rem}.font-semibold{font-weight:600}@media (min-width:768px){.md\\:sticky{position:sticky}.md\\:top-20{top:5rem}.md\\:flex{display:flex}.md\\:max-w-4xl{max-width:56rem}.md\\:max-w-md{max-width:28rem}.md\\:flex-row{flex-direction:row}.md\\:items-start{align-items:flex-start}.md\\:justify-end{justify-content:flex-end}}.flex-wrap{flex-wrap:wrap}.gap-1{gap:.25rem}.space-y-2>:not([hidden])~:not([hidden]){--tw-space-y-reverse:0;margin-bottom:calc(.5rem*var(--tw-space-y-reverse));margin-top:calc(.5rem*(1 - var(--tw-space-y-reverse)))}.text-center{text-align:center}.text-green-500{--tw-text-opacity:1;color:rgb(34 197 94/var(--tw-text-opacity))}@media (min-width:768px){.md\\:text-right{text-align:right}}.h-5{height:1.25rem}.w-5{width:1.25rem}.justify-start{justify-content:flex-start}.hidden{display:none}.filter{filter:var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)}.resize{resize:both}@media (min-width:640px){.sm\\:block{display:block}}@media (min-width:768px){.md\\:hidden{display:none}}.mb-4{margin-bottom:1rem}.max-h-\\[83vh\\]{max-height:83vh}.overflow-y-auto{overflow-y:auto}.p-4{padding:1rem}.text-xl{font-size:1.25rem;line-height:1.75rem}.text-\\[var\\(--gray-600\\2c \\#475467\\)\\]{color:var(--gray-600,#475467)}.text-\\[var\\(--gray-700\\2c \\#344054\\)\\]{color:var(--gray-700,#344054)}@media (min-width:768px){.md\\:p-6{padding:1.5rem}}.pointer-events-none{pointer-events:none}.inset-y-0{bottom:0;top:0}.end-1{inset-inline-end:.25rem}.start-2{inset-inline-start:.5rem}.h-full{height:100%}.bg-white{--tw-bg-opacity:1;background-color:rgb(255 255 255/var(--tw-bg-opacity))}.px-\\[0\\.3rem\\]{padding-left:.3rem;padding-right:.3rem}.px-\\[0\\.875rem\\]{padding-left:.875rem;padding-right:.875rem}.py-1{padding-bottom:.25rem;padding-top:.25rem}.py-\\[0\\.625rem\\]{padding-bottom:.625rem;padding-top:.625rem}.pe-7{padding-inline-end:1.75rem}.ps-9{padding-inline-start:2.25rem}.pt-1{padding-top:.25rem}.text-\\[1rem\\]{font-size:1rem}.text-xs{font-size:.75rem;line-height:1rem}.text-\\[\\#667085\\]{--tw-text-opacity:1;color:rgb(102 112 133/var(--tw-text-opacity))}.text-gray-900{--tw-text-opacity:1;color:rgb(17 24 39/var(--tw-text-opacity))}.max-w-xs{max-width:20rem}.rounded-lg{border-radius:.5rem}.px-3{padding-left:.75rem;padding-right:.75rem}.fixed{position:fixed}.right-0{right:0}.right-4{right:1rem}.top-4{top:1rem}.mt-8{margin-top:2rem}.h-6{height:1.5rem}.h-screen{height:100vh}.w-6{width:1.5rem}.min-w-\\[70\\%\\]{min-width:70%}.max-w-full{max-width:100%}.translate-x-0{--tw-translate-x:0px}.translate-x-0,.translate-x-\\[100\\%\\]{transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.translate-x-\\[100\\%\\]{--tw-translate-x:100%}.shadow,.shadow-md{box-shadow:var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow)}.shadow-md{--tw-shadow:0 4px 6px -1px rgba(0,0,0,.1),0 2px 4px -2px rgba(0,0,0,.1);--tw-shadow-colored:0 4px 6px -1px var(--tw-shadow-color),0 2px 4px -2px var(--tw-shadow-color)}.transition-transform{transition-duration:.15s;transition-property:transform;transition-timing-function:cubic-bezier(.4,0,.2,1)}.duration-300{transition-duration:.3s}.ease-in-out{transition-timing-function:cubic-bezier(.4,0,.2,1)}.data-\\[state\\=\\'closed\\'\\]\\:translate-x-\\[100\\%\\][data-state=closed]{--tw-translate-x:100%}.data-\\[state\\=\\'closed\\'\\]\\:translate-x-\\[100\\%\\][data-state=closed],.data-\\[state\\=\\'opened\\'\\]\\:translate-x-0[data-state=opened]{transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.data-\\[state\\=\\'opened\\'\\]\\:translate-x-0[data-state=opened]{--tw-translate-x:0px}.pb-2{padding-bottom:.5rem}.font-normal{font-weight:400}.text-gray-700{--tw-text-opacity:1;color:rgb(55 65 81/var(--tw-text-opacity))}.transform{transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.text-red-500{--tw-text-opacity:1;color:rgb(239 68 68/var(--tw-text-opacity))}.outline{outline-style:solid}@media (min-width:640px){.sm\\:p-6{padding:1.5rem}}@media (min-width:768px){.md\\:w-fit{width:fit-content}.md\\:flex-row-reverse{flex-direction:row-reverse}}.size-\\[18px\\]{height:18px;width:18px}.h-\\[3rem\\]{height:3rem}.gap-0{gap:0}.gap-0\\.5{gap:.125rem}.border-0{border-width:0}.shadow,.shadow-none{box-shadow:var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow)}.shadow-none{--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000}@media (min-width:640px){.sm\\:w-auto{width:auto}.sm\\:w-fit{width:fit-content}.sm\\:border{border-width:1px}.sm\\:shadow-sm{--tw-shadow:0 1px 2px 0 rgba(0,0,0,.05);--tw-shadow-colored:0 1px 2px 0 var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow)}}.ml-1{margin-left:.25rem}.max-w-\\[60\\%\\]{max-width:60%}.flex-row{flex-direction:row}.gap-3{gap:.75rem}.space-y-6>:not([hidden])~:not([hidden]){--tw-space-y-reverse:0;margin-bottom:calc(1.5rem*var(--tw-space-y-reverse));margin-top:calc(1.5rem*(1 - var(--tw-space-y-reverse)))}.bg-gray-100{--tw-bg-opacity:1;background-color:rgb(243 244 246/var(--tw-bg-opacity))}.pl-0{padding-left:0}.pt-0{padding-top:0}.pt-0\\.5{padding-top:.125rem}.text-right{text-align:right}.text-end{text-align:end}.text-gray-500{--tw-text-opacity:1;color:rgb(107 114 128/var(--tw-text-opacity))}@media (min-width:768px){.md\\:block{display:block}.md\\:inline-flex{display:inline-flex}.md\\:w-full{width:100%}.md\\:max-w-full{max-width:100%}.md\\:items-center{align-items:center}.md\\:justify-center{justify-content:center}}@media (min-width:1024px){.lg\\:flex-row{flex-direction:row}}@media (min-width:1280px){.xl\\:text-xl{font-size:1.25rem;line-height:1.75rem}}.p-6{padding:1.5rem}.text-start{text-align:start}@media (min-width:768px){.md\\:justify-between{justify-content:space-between}.md\\:gap-8{gap:2rem}}.h-10{height:2.5rem}.h-14{height:3.5rem}.h-24{height:6rem}.h-28{height:7rem}@keyframes pulse{50%{opacity:.5}}.animate-pulse{animation:pulse 2s cubic-bezier(.4,0,.6,1) infinite}.gap-12{gap:3rem}.gap-8{gap:2rem}.bg-gray-200{--tw-bg-opacity:1;background-color:rgb(229 231 235/var(--tw-bg-opacity))}@media (min-width:1024px){.lg\\:max-w-sm{max-width:24rem}}.mt-4{margin-top:1rem}.aspect-\\[1\\/1\\]{aspect-ratio:1/1}.h-\\[1px\\]{height:1px}.max-h-32{max-height:8rem}.w-56{width:14rem}.min-w-\\[1rem\\]{min-width:1rem}.rounded-t-md{border-top-left-radius:.375rem;border-top-right-radius:.375rem}.border{border-width:1px}.border-gray-300{--tw-border-opacity:1;border-color:rgb(209 213 219/var(--tw-border-opacity))}.bg-gray-300{--tw-bg-opacity:1;background-color:rgb(209 213 219/var(--tw-bg-opacity))}.object-cover{object-fit:cover}.p-2{padding:.5rem}@media (min-width:768px){.md\\:max-w-sm{max-width:24rem}}@media (min-width:1024px){.lg\\:aspect-\\[16\\/9\\]{aspect-ratio:16/9}.lg\\:p-6{padding:1.5rem}}.w-72{width:18rem}.w-fit{width:fit-content}@media (min-width:768px){.md\\:p-4{padding:1rem}}.ml-4{margin-left:1rem}.size-3{height:.75rem;width:.75rem}.grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr))}.space-y-3>:not([hidden])~:not([hidden]){--tw-space-y-reverse:0;margin-bottom:calc(.75rem*var(--tw-space-y-reverse));margin-top:calc(.75rem*(1 - var(--tw-space-y-reverse)))}.py-4{padding-bottom:1rem;padding-top:1rem}.pb-6{padding-bottom:1.5rem}.ordinal{--tw-ordinal:ordinal;font-variant-numeric:var(--tw-ordinal) var(--tw-slashed-zero) var(--tw-numeric-figure) var(--tw-numeric-spacing) var(--tw-numeric-fraction)}.text-gray-800{--tw-text-opacity:1;color:rgb(31 41 55/var(--tw-text-opacity))}@media (min-width:640px){.sm\\:flex-row{flex-direction:row}.sm\\:items-center{align-items:center}.sm\\:text-sm{font-size:.875rem;line-height:1.25rem}}@media (min-width:1024px){.lg\\:grid-cols-3{grid-template-columns:repeat(3,minmax(0,1fr))}}.space-y-1>:not([hidden])~:not([hidden]){--tw-space-y-reverse:0;margin-bottom:calc(.25rem*var(--tw-space-y-reverse));margin-top:calc(.25rem*(1 - var(--tw-space-y-reverse)))}.text-slate-900{--tw-text-opacity:1;color:rgb(15 23 42/var(--tw-text-opacity))}.-bottom-1{bottom:-.25rem}.z-0{z-index:0}.mb-1{margin-bottom:.25rem}.mb-2{margin-bottom:.5rem}.h-48{height:12rem}.max-h-\\[80vh\\]{max-height:80vh}.cursor-pointer{cursor:pointer}.items-end{align-items:flex-end}.rounded-\\[var\\(--radius\\2c 8px\\)\\]{border-radius:var(--radius,8px)}.bg-white\\/80{background-color:hsla(0,0%,100%,.8)}.px-2{padding-left:.5rem;padding-right:.5rem}.pb-4{padding-bottom:1rem}@media (min-width:768px){.md\\:max-h-\\[200px\\]{max-height:200px}.md\\:w-auto{width:auto}.md\\:pt-0{padding-top:0}.md\\:pt-4{padding-top:1rem}.md\\:text-xl{font-size:1.25rem;line-height:1.75rem}}@media (min-width:1280px){.xl\\:max-h-\\[250px\\]{max-height:250px}}.text-slate-500{--tw-text-opacity:1;color:rgb(100 116 139/var(--tw-text-opacity))}@media (min-width:640px){.sm\\:p-4{padding:1rem}}.pb-0{padding-bottom:0}.text-\\[hsl\\(var\\(--brand-600\\)\\)\\]{color:hsl(var(--brand-600))}@media (min-width:640px){.sm\\:pb-0{padding-bottom:0}.sm\\:pt-0{padding-top:0}}.space-y-1\\.5>:not([hidden])~:not([hidden]){--tw-space-y-reverse:0;margin-bottom:calc(.375rem*var(--tw-space-y-reverse));margin-top:calc(.375rem*(1 - var(--tw-space-y-reverse)))}.border-solid{border-style:solid}.mb-2\\.5{margin-bottom:.625rem}.mb-6{margin-bottom:1.5rem}.w-\\[45\\%\\]{width:45%}.bg-\\[var\\(--gray-200\\)\\]{background-color:var(--gray-200)}.text-\\[var\\(--gray-500\\)\\]{color:var(--gray-500)}";
const IrInvoiceStyle0 = irInvoiceCss;

const IrInvoice = /*@__PURE__*/ proxyCustomElement(class IrInvoice extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
    }
    renderBookingDetailHeader() {
        const total_nights = getDateDifference(new Date(booking.from_date), new Date(booking.to_date));
        const nbr_of_persons = booking.occupancy.adult_nbr + booking.occupancy.children_nbr;
        const total_rooms = booking.rooms.length;
        return `${total_nights} ${total_nights > 1 ? localizedWords.entries.Lcz_Nights : localizedWords.entries.Lcz_night} - ${nbr_of_persons}
    ${localizedWords.entries.Lcz_Persons } - ${total_rooms}
    ${total_rooms > 1 ? localizedWords.entries.Lcz_Rooms : localizedWords.entries.Lcz_Room}`;
    }
    render() {
        var _a, _b, _c, _d, _e, _f, _g, _h;
        const booking = booking_store.booking;
        return (h(Host, { key: '31c5124f91b008aeaaf1d70ff72c372b797362d4' }, h("div", { key: 'ef4cea0895f74e4bcf5b61abe80d946b4b12ec1d' }, h("section", { key: 'af91fa7c11800e125d683b109cc76da55016476f', class: "booking-info " }, h("p", { key: '8070fdbd4c06bb0e1080bb3e3441e5f2a2f4bed9', class: "booking-info-text" }, "Booking reference: ", h("span", { key: 'eec6638afae5121a5e630464b1d5e6bf0ff0ba84' }, booking.booking_nbr)), h("p", { key: 'a2770cd184d59cf261f7349a2687597899790587', class: "booking-info-text" }, "Booked by:", ' ', h("span", { key: '442d9b6e2aee81ac64888f40e6416f10135b61dc' }, booking.guest.first_name, " ", booking.guest.last_name)), h("p", { key: '9a48d57e13602e97a9a903b901c35a4ca90513e5', class: "booking-info-text" }, "Check-in: ", h("span", { key: '6a9c6f17557346a89d29f459bf181123935d7217' }, dateFns.format(booking.from_date, 'eee, dd MMM yyyy'), " "), h("span", { key: '190643c249100fc29adbe969c2d6297886271653' }, localizedWords.entries.Lcz_From, " ", (_a = app_store.property) === null || _a === void 0 ? void 0 :
            _a.time_constraints.check_in_from)), h("p", { key: 'd8fd87688d132938a4a35d307e31b698bd9361ed', class: "booking-info-text" }, "Check-out: ", h("span", { key: 'c78016d6f8ea227b0aa60b997fa6340d0d0f6987' }, dateFns.format(booking.to_date, 'eee, dd MMM yyyy'), " "), h("span", { key: 'e516b4a66db13636d650047ed453fba5e4329446' }, localizedWords.entries.Lcz_Before, " ", (_b = app_store.property) === null || _b === void 0 ? void 0 :
            _b.time_constraints.check_out_till)), h("p", { key: '984c71c8dd043f7340ab0b7765212bbb2128aaa1', class: "booking-info-text" }, "Arrival time: ", h("span", { key: '23ff2aa9cfb56a13a112b69e61f55ef9b16de8d0' }, booking.arrival.description)), booking.remark && (h("p", { class: "booking-info-text" }, "Special request: ", h("span", null, booking.remark)))), h("section", { key: '763d68d1bcebaad1be4310ac66fdcb1e276ec4ec', class: "booking-details space-y-2" }, h("div", { key: 'd6abd69119fc339693a688264e714f85da3dcc7e', class: "flex flex-wrap items-center justify-between gap-1 text-center md:text-right" }, h("div", { key: '147dee4a31a5c56f747fa9b696ba5fa88aef18b5', class: "flex items-center gap-4" }, h("ir-icons", { key: '088767b856f022d6ea6e3d94597c5a538aa81660', name: "bed" }), h("h3", { key: 'f81f1512f3357da9690b0e8159f5011656fb5b31', class: "booking-details-header" }, this.renderBookingDetailHeader())), h("p", { key: '38a10ae8c2c39fa4fc0064c2b6766f86b432a626' }, (_c = app_store.property) === null || _c === void 0 ? void 0 : _c.tax_statement)), (_d = booking.rooms) === null || _d === void 0 ? void 0 :
            _d.map(room => (h("div", { class: "room-info", key: room.identifier }, h("div", { class: "flex w-full items-center justify-between" }, h("h4", { class: "room-type" }, room.roomtype.name), h("p", { class: "text-lg font-medium text-green-500" }, " ", formatAmount(room.gross_total, booking.currency.code))), h("p", { class: "room-info-text" }, "Guest name:", ' ', h("span", null, room.guest.first_name, " ", room.guest.last_name, " (", room.rateplan.selected_variation.adult_child_offering, ")")), h("p", { class: "room-info-text" }, "Meal plan:", ' ', h("span", null, room.rateplan.name)), h("p", { class: "room-info-text", innerHTML: room.rateplan.cancelation }), h("p", { class: "room-info-text", innerHTML: room.rateplan.guarantee }))))), h("section", { key: '9676a8655565314fa6edc80c4334c79f39773f34', class: "space-y-2" }, h("div", { key: '6e68a48b802c2630c9c750ab0b4d716a230277d3', class: 'flex items-center gap-4' }, h("ir-icons", { key: 'e05b06e7bc9fb866486b3df124a7f6b45d691ea8', name: "credit_card" }), h("h3", { key: '4650b449958aab811af53c946384488f7db75843' }, "Payment details")), h("p", { key: '5ea045542b17f896fca9804446a55b0f4f310b05', class: "total-payment" }, "Total: ", h("span", { key: '47e4b94e7a4e6d33716e0d2eb98b19c3c399c6dc', class: "text-green-500" }, formatAmount(booking.financial.gross_total, booking.currency.code)))), h("section", { key: '8635c8ebd5ac413dbe149cec51abf8f5e12c441e', class: "space-y-2" }, h("div", { key: '8244a04eaf591ac25d8ffdd0c31ad89ed9e3726c', class: "flex items-center gap-4" }, h("ir-icons", { key: 'd3295637573bc9078a0c43d12ca09f0886ee986e', name: "danger" }), h("h3", { key: '51ee1bea4b71621cd555315ebcd5919e838f037a' }, "Important information")), h("p", { key: '88c5310bfbe6894c746ccca78156084772a501c9' }, app_store.property.description.important_info)), h("section", { key: '0168e71fe0ad6c72bf4d4296eb6a8b5ed42735fc', class: 'space-y-2' }, h("div", { key: '906964ca7ea686c8859fa917a9bb8087f69af2e7', class: "flex items-center gap-4" }, h("ir-icons", { key: 'b4875a8363f4198637687dbc84c6cc0d1bb0d06b', name: "car" }), h("p", { key: '04d2d066e55115d1ef502d10a1ce0d1d1e458e3b' }, (_e = app_store.property) === null || _e === void 0 ? void 0 :
            _e.parking_offering.title, " ", localizedWords.entries.Lcz_At, ' ', formatAmount((_f = app_store.property) === null || _f === void 0 ? void 0 : _f.parking_offering.pricing, app_store.userPreferences.currency_id))), h("div", { key: '810ac35f06b38c9dd6a82a88406a27b6caa230c2', class: "flex items-center gap-4" }, h("ir-icons", { key: '12d5d91fb6ea8ba62d8a0ef7b9e075b5821c0499', name: "pets" }), h("p", { key: '0e38166771ebf811af1da13f1f474865fa6adac7' }, (_g = app_store.property) === null || _g === void 0 ? void 0 : _g.pets_acceptance.title)), h("div", { key: '59412639b9660381de7ba060241825b6adbdb273', class: "flex items-center gap-4 " }, h("ir-icons", { key: '7affea0bbde67769e8a252ef5a33c6b38b2be1bf', name: "bed" }), h("p", { key: 'f4cd6f972a20d3fc77d79a451acbc21b1dd0dc04' }, (_h = app_store.property) === null || _h === void 0 ? void 0 : _h.baby_cot_offering.title))))));
    }
    static get style() { return IrInvoiceStyle0; }
}, [1, "ir-invoice"]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["ir-invoice", "ir-icons"];
    components.forEach(tagName => { switch (tagName) {
        case "ir-invoice":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, IrInvoice);
            }
            break;
        case "ir-icons":
            if (!customElements.get(tagName)) {
                defineCustomElement$1();
            }
            break;
    } });
}

export { IrInvoice as I, defineCustomElement as d };

//# sourceMappingURL=ir-invoice2.js.map