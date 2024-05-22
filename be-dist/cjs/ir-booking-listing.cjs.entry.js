'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-ad166e1c.js');
const common_service = require('./common.service-40fae555.js');
require('./index-08156e03.js');

class BookingListingService extends common_service.Token {
    async getExposedGuestToken(property_id) {
        const token = this.getToken();
        if (!token) {
            throw new common_service.MissingTokenError();
        }
        const { data } = await common_service.axios.post(`/Get_Exposed_Guest_Bookings?Ticket=${token}`, {
            property_id,
        });
        if (data['ExceptionMsg'] !== '') {
            throw new Error(data['ExceptionMsg']);
        }
        return data['My_Result'];
    }
}

const irBookingListingCss = "*,:after,:before{--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-scroll-snap-strictness:proximity;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgba(59,130,246,.5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;border:0 solid #e5e7eb;box-sizing:border-box}:after,:before{--tw-content:\"\"}:host,html{-webkit-text-size-adjust:100%;font-feature-settings:normal;-webkit-tap-highlight-color:transparent;font-family:ui-sans-serif,system-ui,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;font-variation-settings:normal;line-height:1.5;-moz-tab-size:4;tab-size:4}body{line-height:inherit;margin:0}hr{border-top-width:1px;color:inherit;height:0}abbr:where([title]){text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,pre,samp{font-feature-settings:normal;font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace;font-size:1em;font-variation-settings:normal}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}table{border-collapse:collapse;border-color:inherit;text-indent:0}button,input,optgroup,select,textarea{font-feature-settings:inherit;color:inherit;font-family:inherit;font-size:100%;font-variation-settings:inherit;font-weight:inherit;line-height:inherit;margin:0;padding:0}button,select{text-transform:none}[type=button],[type=reset],[type=submit],button{-webkit-appearance:button;background-color:transparent;background-image:none}:-moz-focusring{outline:auto}:-moz-ui-invalid{box-shadow:none}progress{vertical-align:baseline}::-webkit-inner-spin-button,::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}summary{display:list-item}blockquote,dd,dl,fieldset,figure,h1,h2,h3,h4,h5,h6,hr,p,pre{margin:0}fieldset,legend{padding:0}menu,ol,ul{list-style:none;margin:0;padding:0}dialog{padding:0}textarea{resize:vertical}input::placeholder,textarea::placeholder{color:#9ca3af;opacity:1}[role=button],button{cursor:pointer}:disabled{cursor:default}audio,canvas,embed,iframe,img,object,svg,video{display:block;vertical-align:middle}img,video{height:auto;max-width:100%}[hidden]{display:none}::backdrop{--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-scroll-snap-strictness:proximity;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgba(59,130,246,.5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;}.block{display:block}.table{caption-side:bottom;color:var(--gray-900,#101828);display:table;font-size:.875rem;line-height:1.25rem;width:100%}.table-cell{display:table-cell}.table-row{border-bottom-width:1px;border-color:var(--gray-200,#eaecf0);display:table-row;transition-duration:.15s;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke;transition-timing-function:cubic-bezier(.4,0,.2,1)}.border{border-width:1px}.app_container{border-radius:min(var(--radius,.5rem),.5rem)!important}.trigger-container{min-block-size:3rem}.table-header{background:var(--gray-50,#fcfcfd);border-bottom:1px solid var(--gray-200,#eaecf0);color:var(--gray-600,#475467);font-size:12px}.table-header th:first-child{border-top-left-radius:min(var(--radius,.5rem),1.25rem)}.table-header th:last-child{border-top-right-radius:min(var(--radius,.5rem),1.25rem)}.table-header:hover,.table-row:hover{background:var(--gray-100,#f2f4f7)}.table-header tr{border-bottom:1px solid var(--gray-200,#eaecf0)}.table-footer{border-top:1px solid var(--gray-200,#eaecf0);font-weight:500}.table-footer tr:last-child{border-bottom-width:0}.table-head{font-weight:500;height:2.5rem;text-align:left}.table-cell,.table-head{padding:.75rem 1.5rem;vertical-align:middle}.table-container{background:#fff;border:1px solid var(--gray-200,#eaecf0);border-radius:min(var(--radius,.5rem),1.25rem);overflow-x:auto;width:100%}:host{display:block}.sr-only{clip:rect(0,0,0,0);border-width:0;height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;white-space:nowrap;width:1px}.static{position:static}.mx-auto{margin-left:auto;margin-right:auto}.flex{display:flex}.h-screen{height:100vh}.w-full{width:100%}.max-w-6xl{max-width:72rem}.max-w-full{max-width:100%}.max-w-md{max-width:28rem}.flex-col{flex-direction:column}.justify-center{justify-content:center}.gap-2{gap:.5rem}.gap-2\\.5{gap:.625rem}.overflow-x-auto{overflow-x:auto}.overflow-x-hidden{overflow-x:hidden}.p-4{padding:1rem}.px-4{padding-left:1rem;padding-right:1rem}.px-\\[20px\\]{padding-left:20px;padding-right:20px}.py-\\[16px\\]{padding-bottom:16px;padding-top:16px}.shadow{--tw-shadow:0 1px 3px 0 rgba(0,0,0,.1),0 1px 2px -1px rgba(0,0,0,.1);--tw-shadow-colored:0 1px 3px 0 var(--tw-shadow-color),0 1px 2px -1px var(--tw-shadow-color)}.shadow,.shadow-md{box-shadow:var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow)}.shadow-md{--tw-shadow:0 4px 6px -1px rgba(0,0,0,.1),0 2px 4px -2px rgba(0,0,0,.1);--tw-shadow-colored:0 4px 6px -1px var(--tw-shadow-color),0 2px 4px -2px var(--tw-shadow-color)}@media (min-width:768px){.md\\:flex-row{flex-direction:row}.md\\:items-center{align-items:center}.md\\:justify-between{justify-content:space-between}}.justify-start{justify-content:flex-start}.items-center{align-items:center}.h-5{height:1.25rem}.w-5{width:1.25rem}.relative{position:relative}.absolute{position:absolute}.right-3{right:.75rem}.top-3{top:.75rem}.size-4{height:1rem;width:1rem}.pointer-events-none{pointer-events:none}.inset-y-0{bottom:0;top:0}.end-1{inset-inline-end:.25rem}.start-2{inset-inline-start:.5rem}.h-full{height:100%}.rounded-md{border-radius:.375rem}.bg-white{--tw-bg-opacity:1;background-color:rgb(255 255 255/var(--tw-bg-opacity))}.px-\\[0\\.3rem\\]{padding-left:.3rem;padding-right:.3rem}.px-\\[0\\.875rem\\]{padding-left:.875rem;padding-right:.875rem}.py-1{padding-bottom:.25rem;padding-top:.25rem}.py-\\[0\\.625rem\\]{padding-bottom:.625rem;padding-top:.625rem}.pe-7{padding-inline-end:1.75rem}.ps-9{padding-inline-start:2.25rem}.pt-1{padding-top:.25rem}.text-\\[1rem\\]{font-size:1rem}.text-sm{font-size:.875rem;line-height:1.25rem}.text-xs{font-size:.75rem;line-height:1rem}.text-\\[\\#667085\\]{--tw-text-opacity:1;color:rgb(102 112 133/var(--tw-text-opacity))}.text-gray-900{--tw-text-opacity:1;color:rgb(17 24 39/var(--tw-text-opacity))}.mb-4{margin-bottom:1rem}.max-h-\\[83vh\\]{max-height:83vh}.overflow-y-auto{overflow-y:auto}.text-xl{font-size:1.25rem;line-height:1.75rem}.font-semibold{font-weight:600}.text-\\[var\\(--gray-600\\2c \\#475467\\)\\]{color:var(--gray-600,#475467)}.text-\\[var\\(--gray-700\\2c \\#344054\\)\\]{color:var(--gray-700,#344054)}@media (min-width:768px){.md\\:p-6{padding:1.5rem}}.fixed{position:fixed}.right-0{right:0}.right-4{right:1rem}.top-0{top:0}.top-4{top:1rem}.z-50{z-index:50}.mt-8{margin-top:2rem}.h-6{height:1.5rem}.w-6{width:1.5rem}.min-w-\\[70\\%\\]{min-width:70%}.translate-x-0{--tw-translate-x:0px}.translate-x-0,.translate-x-\\[100\\%\\]{transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.translate-x-\\[100\\%\\]{--tw-translate-x:100%}.transition-transform{transition-duration:.15s;transition-property:transform;transition-timing-function:cubic-bezier(.4,0,.2,1)}.duration-300{transition-duration:.3s}.ease-in-out{transition-timing-function:cubic-bezier(.4,0,.2,1)}.data-\\[state\\=\\'closed\\'\\]\\:translate-x-\\[100\\%\\][data-state=closed]{--tw-translate-x:100%}.data-\\[state\\=\\'closed\\'\\]\\:translate-x-\\[100\\%\\][data-state=closed],.data-\\[state\\=\\'opened\\'\\]\\:translate-x-0[data-state=opened]{transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.data-\\[state\\=\\'opened\\'\\]\\:translate-x-0[data-state=opened]{--tw-translate-x:0px}.transform{transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.gap-4{gap:1rem}.text-red-500{--tw-text-opacity:1;color:rgb(239 68 68/var(--tw-text-opacity))}.outline{outline-style:solid}@media (min-width:640px){.sm\\:p-6{padding:1.5rem}}@media (min-width:768px){.md\\:w-fit{width:fit-content}.md\\:flex-row-reverse{flex-direction:row-reverse}}.mb-2{margin-bottom:.5rem}.mb-2\\.5{margin-bottom:.625rem}.mb-6{margin-bottom:1.5rem}.mt-4{margin-top:1rem}.h-\\[1px\\]{height:1px}.w-\\[45\\%\\]{width:45%}.space-y-3>:not([hidden])~:not([hidden]){--tw-space-y-reverse:0;margin-bottom:calc(.75rem*var(--tw-space-y-reverse));margin-top:calc(.75rem*(1 - var(--tw-space-y-reverse)))}.bg-\\[var\\(--gray-200\\)\\]{background-color:var(--gray-200)}.text-\\[var\\(--gray-500\\)\\]{color:var(--gray-500)}";
const IrBookingListingStyle0 = irBookingListingCss;

const IrBookingListing = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.bookingListingService = new BookingListingService();
        this.commonService = new common_service.CommonService();
        this.propertyService = new common_service.PropertyService();
        this.propertyid = undefined;
        this.baseUrl = undefined;
        this.headerShown = true;
        this.footerShown = true;
        this.isLoading = false;
        this.token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE3MTY0NzAzMjYsIkNMQUlNLTAxIjoiZE1TL0hDV21NdW89IiwiQ0xBSU0tMDIiOiI5UStMQm93VTl6az0iLCJDTEFJTS0wMyI6Ilp3Tys5azJoTzUwPSIsIkNMQUlNLTA0IjoiQUVxVnRCMm1kWTg9IiwiQ0xBSU0tMDUiOiJFQTEzejA3ejBUcWRkM2gwNElyYThITHBnTWQvOWV5aSJ9.9hKPGjcvmTuRMAOE8BmXUY1NT3DDqSYDKgEokUV2N6U';
        this.bookings = [];
    }
    async componentWillLoad() {
        common_service.axios.defaults.baseURL = this.baseUrl;
        if (!this.propertyid) {
            throw new Error('missing property id');
        }
        if (this.token) {
            this.initializeServices();
            this.initializeApp();
        }
        else {
            const token = await this.commonService.getBEToken();
            if (token) {
                common_service.app_store.app_data.token = token;
            }
        }
    }
    initializeServices() {
        this.bookingListingService.setToken(this.token);
        this.propertyService.setToken(this.token);
    }
    async initializeApp() {
        var _a;
        try {
            this.isLoading = true;
            const [bookings] = await Promise.all([
                this.bookingListingService.getExposedGuestToken(this.propertyid),
                this.propertyService.getExposedProperty({ id: this.propertyid, language: ((_a = common_service.app_store.userPreferences) === null || _a === void 0 ? void 0 : _a.language_id) || 'en' }),
            ]);
            this.bookings = bookings;
            console.log(this.bookings);
        }
        catch (error) {
            console.error(error);
        }
        finally {
            this.isLoading = false;
        }
    }
    handleAuthFinish(e) {
        e.stopImmediatePropagation();
        e.stopPropagation();
        const { token, state } = e.detail;
        console.log(token, state);
        if (state === 'success') {
            this.token = token;
            this.initializeServices();
            this.initializeApp();
        }
    }
    getBadgeVariant(code) {
        if (code === '001') {
            return 'pending';
        }
        else if (code === '002') {
            return 'success';
        }
        return 'error';
    }
    render() {
        var _a, _b, _c, _d;
        if (!this.token) {
            return (index.h(index.Host, null, index.h("main", { class: "flex h-screen flex-col  justify-center" }, index.h("div", { class: "mx-auto w-full max-w-md px-4" }, index.h("ir-auth", { enableSignUp: false, onAuthFinish: this.handleAuthFinish.bind(this) })))));
        }
        return (index.h(index.Host, null, this.headerShown && index.h("ir-nav", { isBookingListing: true, website: (_a = common_service.app_store.property) === null || _a === void 0 ? void 0 : _a.space_theme.website, logo: (_c = (_b = common_service.app_store.property) === null || _b === void 0 ? void 0 : _b.space_theme) === null || _c === void 0 ? void 0 : _c.logo }), index.h("main", { class: ' p-4' }, index.h("div", { class: "table-container mx-auto max-w-6xl overflow-x-hidden shadow-md" }, index.h("div", { class: "flex flex-col gap-2.5 px-[20px] py-[16px] md:flex-row md:items-center md:justify-between " }, index.h("h3", null, "Bookings")), index.h("div", { class: "max-w-full overflow-x-auto " }, index.h("table", { class: "table" }, index.h("thead", null, index.h("tr", { class: "table-header" }, index.h("th", { class: "table-head" }, "Status"), index.h("th", { class: "table-head" }, "Booking reference"), index.h("th", { class: "table-head" }, "Booking date"), index.h("th", { class: "table-head" }, "Check-in"), index.h("th", { class: "table-head" }, "Duration"), index.h("th", { class: "table-head" }, "Total price"), index.h("th", { class: "table-head sr-only" }, "pay now"))), index.h("tbody", null, (_d = this.bookings) === null || _d === void 0 ? void 0 : _d.map(booking => {
            const totalNights = common_service.dateFns.differenceInCalendarDays(new Date(booking.to_date), new Date(booking.from_date));
            return (index.h("tr", { class: "table-row", key: booking.booking_nbr }, index.h("td", { class: "table-cell" }, index.h("ir-badge", { label: booking.status.description, variant: this.getBadgeVariant(booking.status.code) })), index.h("td", { class: "table-cell" }, booking.booking_nbr), index.h("td", { class: "table-cell" }, common_service.dateFns.format(new Date(booking.booked_on.date), 'dd-MMM-yyyy')), index.h("td", { class: "table-cell" }, common_service.dateFns.format(new Date(booking.from_date), 'EEE, dd MMM yyyy')), index.h("td", { class: "table-cell" }, totalNights, " ", totalNights > 1 ? 'nights' : 'night'), index.h("td", { class: "table-cell" }, common_service.formatAmount(booking.total, booking.currency.code)), index.h("td", { class: "table-cell" })));
        })))))), this.footerShown && index.h("ir-footer", null)));
    }
};
IrBookingListing.style = IrBookingListingStyle0;

exports.ir_booking_listing = IrBookingListing;

//# sourceMappingURL=ir-booking-listing.cjs.entry.js.map