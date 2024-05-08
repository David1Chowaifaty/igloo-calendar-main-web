import { r as registerInstance, h, H as Host } from './index-21632897.js';
import { h as dateFns, T as Token } from './index-f5b207f5.js';
import { c as createStore } from './index-a8bcd484.js';
import { a as axios } from './axios-2aba0cfc.js';

const initialState = {
    channels: [],
    settlement_methods: [],
    statuses: [],
    types: [],
    token: '',
    rowCount: 10,
    bookings: [],
    userSelection: {
        from: dateFns.format(dateFns.addDays(new Date(), -7), 'yyyy-MM-dd'),
        to: dateFns.format(new Date(), 'yyyy-MM-dd'),
        channel: '',
        property_id: null,
        start_row: 0,
        end_row: 20,
        total_count: 0,
        filter_type: null,
        name: '',
        book_nbr: '',
        booking_status: '',
        affiliate_id: 0,
        is_mpo_managed: false,
        is_mpo_used: false,
        is_for_mobile: false,
        is_combined_view: false,
        is_to_export: false,
    },
    download_url: null,
};
const { state: booking_listing, onChange: onBookingListingChange } = createStore(initialState);
function initializeUserSelection() {
    //booking_listing.channels[0].name
    booking_listing.userSelection = Object.assign(Object.assign({}, booking_listing.userSelection), { channel: '', booking_status: booking_listing.statuses[0].code, filter_type: booking_listing.types[0].id, book_nbr: '', name: '', from: dateFns.format(dateFns.addDays(new Date(), -7), 'yyyy-MM-dd'), to: dateFns.format(new Date(), 'yyyy-MM-dd'), start_row: 0, end_row: booking_listing.rowCount });
}

class BookingListingService extends Token {
    async getExposedBookingsCriteria(property_id) {
        const token = this.getToken();
        if (!token) {
            throw new Error('Invalid token');
        }
        const { data } = await axios.post(`/Get_Exposed_Bookings_Criteria?Ticket=${token}`, {
            property_id,
        });
        const result = data.My_Result;
        booking_listing.channels = result.channels;
        booking_listing.settlement_methods = result.settlement_methods;
        booking_listing.statuses = result.statuses;
        booking_listing.types = result.types;
        initializeUserSelection();
    }
    async getExposedBookings(params) {
        const token = this.getToken();
        if (!token) {
            throw new Error('Invalid token');
        }
        const { data } = await axios.post(`/Get_Exposed_Bookings?Ticket=${token}`, params);
        const result = data.My_Result;
        const header = data.My_Params_Get_Exposed_Bookings;
        booking_listing.bookings = [...result];
        booking_listing.userSelection = Object.assign(Object.assign({}, booking_listing.userSelection), { total_count: header.total_count });
        booking_listing.download_url = header.exported_data_url;
    }
    async removeExposedBooking(booking_nbr, is_to_revover) {
        const token = this.getToken();
        if (!token) {
            throw new Error('Invalid token');
        }
        await axios.post(`/Remove_Exposed_Booking?Ticket=${token}`, {
            booking_nbr,
            is_to_revover,
        });
    }
}

const irBookingListingCss = "*,:after,:before{--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-scroll-snap-strictness:proximity;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgba(59,130,246,.5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;border:0 solid #e5e7eb;box-sizing:border-box}:after,:before{--tw-content:\"\"}:host,html{-webkit-text-size-adjust:100%;font-feature-settings:normal;-webkit-tap-highlight-color:transparent;font-family:ui-sans-serif,system-ui,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;font-variation-settings:normal;line-height:1.5;-moz-tab-size:4;tab-size:4}body{line-height:inherit;margin:0}hr{border-top-width:1px;color:inherit;height:0}abbr:where([title]){text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,pre,samp{font-feature-settings:normal;font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace;font-size:1em;font-variation-settings:normal}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}table{border-collapse:collapse;border-color:inherit;text-indent:0}button,input,optgroup,select,textarea{font-feature-settings:inherit;color:inherit;font-family:inherit;font-size:100%;font-variation-settings:inherit;font-weight:inherit;line-height:inherit;margin:0;padding:0}button,select{text-transform:none}[type=button],[type=reset],[type=submit],button{-webkit-appearance:button;background-color:transparent;background-image:none}:-moz-focusring{outline:auto}:-moz-ui-invalid{box-shadow:none}progress{vertical-align:baseline}::-webkit-inner-spin-button,::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}summary{display:list-item}blockquote,dd,dl,fieldset,figure,h1,h2,h3,h4,h5,h6,hr,p,pre{margin:0}fieldset,legend{padding:0}menu,ol,ul{list-style:none;margin:0;padding:0}dialog{padding:0}textarea{resize:vertical}input::placeholder,textarea::placeholder{color:#9ca3af;opacity:1}[role=button],button{cursor:pointer}:disabled{cursor:default}audio,canvas,embed,iframe,img,object,svg,video{display:block;vertical-align:middle}img,video{height:auto;max-width:100%}[hidden]{display:none}::backdrop{--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-scroll-snap-strictness:proximity;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgba(59,130,246,.5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;}.block{display:block}.table{caption-side:bottom;color:var(--gray-900,#101828);display:table;font-size:.875rem;line-height:1.25rem;width:100%}.table-cell{display:table-cell}.table-row{border-bottom-width:1px;border-color:var(--gray-200,#eaecf0);display:table-row;transition-duration:.15s;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke;transition-timing-function:cubic-bezier(.4,0,.2,1)}.border{border-width:1px}.app_container{border-radius:min(var(--radius,.5rem),.5rem)!important}.trigger-container{min-block-size:3rem}.table-header{background:var(--gray-50,#fcfcfd);border-bottom:1px solid var(--gray-200,#eaecf0);color:var(--gray-600,#475467);font-size:12px}.table-header th:first-child{border-top-left-radius:min(var(--radius,.5rem),1.25rem)}.table-header th:last-child{border-top-right-radius:min(var(--radius,.5rem),1.25rem)}.table-header:hover,.table-row:hover{background:var(--gray-100,#f2f4f7)}.table-header tr{border-bottom:1px solid var(--gray-200,#eaecf0)}.table-footer{border-top:1px solid var(--gray-200,#eaecf0);font-weight:500}.table-footer tr:last-child{border-bottom-width:0}.table-head{font-weight:500;height:2.5rem;text-align:left}.table-cell,.table-head{padding:.75rem 1.5rem;vertical-align:middle}.table-container{background:#fff;border:1px solid var(--gray-200,#eaecf0);border-radius:min(var(--radius,.5rem),1.25rem);overflow-x:auto;width:100%}:host{display:block}.sr-only{clip:rect(0,0,0,0);border-width:0;height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;white-space:nowrap;width:1px}.static{position:static}.mx-auto{margin-left:auto;margin-right:auto}.flex{display:flex}.size-3{height:.75rem;width:.75rem}.h-screen{height:100vh}.w-full{width:100%}.max-w-full{max-width:100%}.max-w-md{max-width:28rem}.max-w-sm{max-width:24rem}.flex-col{flex-direction:column}.items-center{align-items:center}.justify-center{justify-content:center}.justify-between{justify-content:space-between}.gap-2{gap:.5rem}.gap-2\\.5{gap:.625rem}.overflow-x-auto{overflow-x:auto}.overflow-x-hidden{overflow-x:hidden}.rounded-md{border-radius:.375rem}.border-solid{border-style:solid}.border-gray-300{--tw-border-opacity:1;border-color:rgb(209 213 219/var(--tw-border-opacity))}.p-4{padding:1rem}.px-4{padding-left:1rem;padding-right:1rem}.px-\\[20px\\]{padding-left:20px;padding-right:20px}.py-1{padding-bottom:.25rem;padding-top:.25rem}.py-1\\.5{padding-bottom:.375rem;padding-top:.375rem}.py-\\[16px\\]{padding-bottom:16px;padding-top:16px}.shadow{--tw-shadow:0 1px 3px 0 rgba(0,0,0,.1),0 1px 2px -1px rgba(0,0,0,.1);--tw-shadow-colored:0 1px 3px 0 var(--tw-shadow-color),0 1px 2px -1px var(--tw-shadow-color)}.shadow,.shadow-md{box-shadow:var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow)}.shadow-md{--tw-shadow:0 4px 6px -1px rgba(0,0,0,.1),0 2px 4px -2px rgba(0,0,0,.1);--tw-shadow-colored:0 4px 6px -1px var(--tw-shadow-color),0 2px 4px -2px var(--tw-shadow-color)}.outline{outline-style:solid}@media (min-width:768px){.md\\:flex-row{flex-direction:row}.md\\:items-center{align-items:center}.md\\:justify-between{justify-content:space-between}}.h-5{height:1.25rem}.w-5{width:1.25rem}.hidden{display:none}@media (min-width:640px){.sm\\:p-6{padding:1.5rem}}.mb-2{margin-bottom:.5rem}.mb-2\\.5{margin-bottom:.625rem}.mb-4{margin-bottom:1rem}.mb-6{margin-bottom:1.5rem}.mt-4{margin-top:1rem}.h-\\[1px\\]{height:1px}.w-\\[45\\%\\]{width:45%}.gap-4{gap:1rem}.space-y-3>:not([hidden])~:not([hidden]){--tw-space-y-reverse:0;margin-bottom:calc(.75rem*var(--tw-space-y-reverse));margin-top:calc(.75rem*(1 - var(--tw-space-y-reverse)))}.bg-\\[var\\(--gray-200\\)\\]{background-color:var(--gray-200)}.text-\\[var\\(--gray-500\\)\\]{color:var(--gray-500)}.my-6{margin-bottom:1.5rem;margin-top:1.5rem}.mb-5{margin-bottom:1.25rem}.mb-8{margin-bottom:2rem}.transform{transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.justify-end{justify-content:flex-end}.space-y-4>:not([hidden])~:not([hidden]){--tw-space-y-reverse:0;margin-bottom:calc(1rem*var(--tw-space-y-reverse));margin-top:calc(1rem*(1 - var(--tw-space-y-reverse)))}";
const IrBookingListingStyle0 = irBookingListingCss;

const IrBookingListing = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.bookingListingService = new BookingListingService();
        this.propertid = undefined;
        this.isLoading = false;
        this.token = undefined;
    }
    async initializeApp() {
        try {
            this.isLoading = true;
            // await Promise.all([this.bookingListingService.getExposedBookingsCriteria(this.propertyid), this.roomService.fetchLanguage(this.language, ['_BOOKING_LIST_FRONT'])]);
            await this.bookingListingService.getExposedBookings(Object.assign(Object.assign({}, booking_listing.userSelection), { is_to_export: false }));
        }
        catch (error) {
            console.error(error);
        }
        finally {
            this.isLoading = false;
        }
    }
    render() {
        if (!this.token) {
            return (h("main", { class: "flex h-screen flex-col  justify-center" }, h("div", { class: "mx-auto w-full max-w-md px-4" }, h("ir-auth", { enableSignUp: false }))));
        }
        return (h(Host, null, h("div", { class: 'p-4' }, h("div", { class: "table-container overflow-x-hidden shadow-md" }, h("div", { class: "flex flex-col gap-2.5 px-[20px] py-[16px] md:flex-row md:items-center md:justify-between " }, h("h3", null, "Bookings"), h("input", { type: "text", placeholder: "Search...", class: "w-full max-w-sm rounded-md border border-solid border-gray-300 px-4 py-1.5 " })), h("div", { class: "max-w-full overflow-x-auto " }, h("table", { class: "table" }, h("thead", null, h("tr", { class: "table-header" }, h("th", { class: "table-head" }, "Status"), h("th", { class: "table-head" }, "Booking reference"), h("th", { class: "table-head" }, "Booking date"), h("th", { class: "table-head" }, "Check-in"), h("th", { class: "table-head" }, "Duration"), h("th", { class: "table-head" }, "Total price"), h("th", { class: "table-head sr-only" }, "pay now"))), h("tbody", null, [...new Array(10)].map((_, i) => (h("tr", { class: "table-row" }, h("td", { class: "table-cell" }, h("ir-badge", { label: "Pending", variant: "pending" })), h("td", { class: "table-cell" }, i), h("td", { class: "table-cell" }, "Name ", i), h("td", { class: "table-cell" }, "email", i, "@example.com"), h("td", { class: "table-cell" }, "City ", i), h("td", { class: "table-cell" }, "Country ", i), h("td", { class: "table-cell" }, "Zip", i))))))), h("div", { class: "flex items-center justify-between px-[20px] py-[16px] " }, h("ir-button", { variants: "outline", label: "Previous", haveLeftIcon: true }, h("ir-icons", { name: "arrow_left", slot: "left-icon", svgClassName: "size-3" })), h("ir-button", { variants: "outline", label: "Next", haveRightIcon: true }, h("ir-icons", { name: "arrow_right", slot: "right-icon", svgClassName: "size-3" })))))));
    }
};
IrBookingListing.style = IrBookingListingStyle0;

export { IrBookingListing as ir_booking_listing };

//# sourceMappingURL=ir-booking-listing.entry.js.map