import { r as registerInstance, h, H as Host } from './index-21632897.js';
import { T as Token, M as MissingTokenError, a as axios, C as CommonService, P as PropertyService } from './common.service-9f2faf40.js';
import { B as BookingListingAppService } from './booking-listing.service-00084fe5.js';
import { b as getUserPrefernce, a as app_store, d as dateFns, f as formatAmount } from './utils-071e589e.js';

class BookingListingService extends Token {
    async getExposedGuestBookings(params) {
        const token = this.getToken();
        if (!token) {
            throw new MissingTokenError();
        }
        const { data } = await axios.post(`/Get_Exposed_Guest_Bookings?Ticket=${token}`, params);
        if (data['ExceptionMsg'] !== '') {
            throw new Error(data['ExceptionMsg']);
        }
        return { bookings: data['My_Result'], total_count: data['My_Params_Get_Exposed_Guest_Bookings'].total_count };
    }
}

const irBookingListingCss = "*,:after,:before{--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-scroll-snap-strictness:proximity;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgba(59,130,246,.5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;border:0 solid #e5e7eb;box-sizing:border-box}:after,:before{--tw-content:\"\"}:host,html{-webkit-text-size-adjust:100%;font-feature-settings:normal;-webkit-tap-highlight-color:transparent;font-family:ui-sans-serif,system-ui,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;font-variation-settings:normal;line-height:1.5;-moz-tab-size:4;tab-size:4}body{line-height:inherit;margin:0}hr{border-top-width:1px;color:inherit;height:0}abbr:where([title]){text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,pre,samp{font-feature-settings:normal;font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace;font-size:1em;font-variation-settings:normal}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}table{border-collapse:collapse;border-color:inherit;text-indent:0}button,input,optgroup,select,textarea{font-feature-settings:inherit;color:inherit;font-family:inherit;font-size:100%;font-variation-settings:inherit;font-weight:inherit;line-height:inherit;margin:0;padding:0}button,select{text-transform:none}[type=button],[type=reset],[type=submit],button{-webkit-appearance:button;background-color:transparent;background-image:none}:-moz-focusring{outline:auto}:-moz-ui-invalid{box-shadow:none}progress{vertical-align:baseline}::-webkit-inner-spin-button,::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}summary{display:list-item}blockquote,dd,dl,fieldset,figure,h1,h2,h3,h4,h5,h6,hr,p,pre{margin:0}fieldset,legend{padding:0}menu,ol,ul{list-style:none;margin:0;padding:0}dialog{padding:0}textarea{resize:vertical}input::placeholder,textarea::placeholder{color:#9ca3af;opacity:1}[role=button],button{cursor:pointer}:disabled{cursor:default}audio,canvas,embed,iframe,img,object,svg,video{display:block;vertical-align:middle}img,video{height:auto;max-width:100%}[hidden]{display:none}::backdrop{--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-scroll-snap-strictness:proximity;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgba(59,130,246,.5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;}.block{display:block}.transform{transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.border{border-width:1px}.app_container{border-radius:min(var(--radius,.5rem),.5rem)!important}.trigger-container{min-block-size:3rem}.ir-table{caption-side:bottom;color:var(--gray-900,#101828);font-size:.875rem;line-height:1.25rem;width:100%}.ir-table-header{background:var(--gray-50,#fcfcfd);border-bottom:1px solid var(--gray-200,#eaecf0);color:var(--gray-600,#475467);font-size:12px;width:100%}.ir-table-header:hover,.ir-table-row:hover{background:var(--gray-100,#f2f4f7)}.ir-table-header tr{border-bottom:1px solid var(--gray-200,#eaecf0)}.ir-table-footer{border-top:1px solid var(--gray-200,#eaecf0);font-weight:500}.ir-table-footer tr:last-child{border-bottom-width:0}.ir-table-row{border-bottom-width:1px;border-color:var(--gray-200,#eaecf0);transition-duration:.15s;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke;transition-timing-function:cubic-bezier(.4,0,.2,1)}.ir-table-head{font-weight:500;height:2.5rem;text-align:left}.ir-table-cell,.ir-table-head{padding:.75rem .2rem;vertical-align:middle;width:-moz-max-content!important;width:max-content!important}.ir-table-cell{font-size:.875rem}.ir-table-container{background:#fff;border:1px solid var(--gray-200,#eaecf0);border-radius:min(var(--radius,.5rem),1.25rem);overflow-x:auto;width:100%}:host{display:block}.page-loader{animation:l13 1s linear infinite;aspect-ratio:1;background:radial-gradient(farthest-side,#000 94%,#0000) top/4px 4px no-repeat,conic-gradient(#0000 30%,#000);border-radius:50%;mask:radial-gradient(farthest-side,#0000 calc(100% - 4px),#000 0);-webkit-mask:radial-gradient(farthest-side,#0000 calc(100% - 4px),#000 0);width:30px}@keyframes l13{to{transform:rotate(1turn)}}.sr-only{clip:rect(0,0,0,0);border-width:0;height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;white-space:nowrap;width:1px}.static{position:static}.mx-auto{margin-left:auto;margin-right:auto}.flex{display:flex}.table{display:table}.grid{display:grid}.hidden{display:none}.h-screen{height:100vh}.min-h-screen{min-height:100vh}.w-full{width:100%}.max-w-6xl{max-width:72rem}.max-w-full{max-width:100%}.max-w-md{max-width:28rem}.flex-1{flex:1 1 0%}.flex-col{flex-direction:column}.place-content-center{place-content:center}.items-center{align-items:center}.justify-end{justify-content:flex-end}.justify-center{justify-content:center}.gap-2{gap:.5rem}.gap-2\\.5{gap:.625rem}.gap-4{gap:1rem}.space-y-4>:not([hidden])~:not([hidden]){--tw-space-y-reverse:0;margin-bottom:calc(1rem*var(--tw-space-y-reverse));margin-top:calc(1rem*(1 - var(--tw-space-y-reverse)))}.overflow-x-auto{overflow-x:auto}.overflow-x-hidden{overflow-x:hidden}.px-4{padding-left:1rem;padding-right:1rem}.px-\\[20px\\]{padding-left:20px;padding-right:20px}.py-\\[16px\\]{padding-bottom:16px;padding-top:16px}.shadow-md{--tw-shadow:0 4px 6px -1px rgba(0,0,0,.1),0 2px 4px -2px rgba(0,0,0,.1);--tw-shadow-colored:0 4px 6px -1px var(--tw-shadow-color),0 2px 4px -2px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow)}.outline{outline-style:solid}@media (min-width:768px){.md\\:block{display:block}.md\\:hidden{display:none}.md\\:px-4{padding-left:1rem;padding-right:1rem}}@media (min-width:1024px){.lg\\:table-cell{display:table-cell}.lg\\:px-6{padding-left:1.5rem;padding-right:1.5rem}}@media (min-width:1280px){.xl\\:px-0{padding-left:0;padding-right:0}}.absolute{position:absolute}.right-3{right:.75rem}.top-3{top:.75rem}.shadow{--tw-shadow:0 1px 3px 0 rgba(0,0,0,.1),0 1px 2px -1px rgba(0,0,0,.1);--tw-shadow-colored:0 1px 3px 0 var(--tw-shadow-color),0 1px 2px -1px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow)}.h-5{height:1.25rem}.w-5{width:1.25rem}.mx-1{margin-left:.25rem;margin-right:.25rem}.justify-start{justify-content:flex-start}.relative{position:relative}.mb-4{margin-bottom:1rem}.max-h-\\[83vh\\]{max-height:83vh}.overflow-y-auto{overflow-y:auto}.p-4{padding:1rem}.text-sm{font-size:.875rem;line-height:1.25rem}.text-xl{font-size:1.25rem;line-height:1.75rem}.font-semibold{font-weight:600}.text-\\[var\\(--gray-600\\2c \\#475467\\)\\]{color:var(--gray-600,#475467)}.text-\\[var\\(--gray-700\\2c \\#344054\\)\\]{color:var(--gray-700,#344054)}@media (min-width:768px){.md\\:p-6{padding:1.5rem}}.pointer-events-none{pointer-events:none}.inset-y-0{bottom:0;top:0}.end-1{inset-inline-end:.25rem}.start-2{inset-inline-start:.5rem}.h-full{height:100%}.rounded-md{border-radius:.375rem}.bg-white{--tw-bg-opacity:1;background-color:rgb(255 255 255/var(--tw-bg-opacity))}.px-\\[0\\.3rem\\]{padding-left:.3rem;padding-right:.3rem}.px-\\[0\\.875rem\\]{padding-left:.875rem;padding-right:.875rem}.py-1{padding-bottom:.25rem;padding-top:.25rem}.py-\\[0\\.625rem\\]{padding-bottom:.625rem;padding-top:.625rem}.pe-7{padding-inline-end:1.75rem}.ps-9{padding-inline-start:2.25rem}.pt-1{padding-top:.25rem}.text-\\[1rem\\]{font-size:1rem}.text-xs{font-size:.75rem;line-height:1rem}.text-\\[\\#667085\\]{--tw-text-opacity:1;color:rgb(102 112 133/var(--tw-text-opacity))}.text-gray-900{--tw-text-opacity:1;color:rgb(17 24 39/var(--tw-text-opacity))}.fixed{position:fixed}.right-0{right:0}.right-4{right:1rem}.top-0{top:0}.top-4{top:1rem}.z-50{z-index:50}.mt-8{margin-top:2rem}.min-w-\\[70\\%\\]{min-width:70%}.translate-x-0{--tw-translate-x:0px}.translate-x-0,.translate-x-\\[100\\%\\]{transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.translate-x-\\[100\\%\\]{--tw-translate-x:100%}.shadow,.shadow-md{box-shadow:var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow)}.transition-transform{transition-duration:.15s;transition-property:transform;transition-timing-function:cubic-bezier(.4,0,.2,1)}.duration-300{transition-duration:.3s}.ease-in-out{transition-timing-function:cubic-bezier(.4,0,.2,1)}.data-\\[state\\=\\'closed\\'\\]\\:translate-x-\\[100\\%\\][data-state=closed]{--tw-translate-x:100%}.data-\\[state\\=\\'closed\\'\\]\\:translate-x-\\[100\\%\\][data-state=closed],.data-\\[state\\=\\'opened\\'\\]\\:translate-x-0[data-state=opened]{transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.data-\\[state\\=\\'opened\\'\\]\\:translate-x-0[data-state=opened]{--tw-translate-x:0px}.text-red-500{--tw-text-opacity:1;color:rgb(239 68 68/var(--tw-text-opacity))}@media (min-width:640px){.sm\\:p-6{padding:1.5rem}}@media (min-width:768px){.md\\:w-fit{width:fit-content}.md\\:flex-row-reverse{flex-direction:row-reverse}}.mt-2{margin-top:.5rem}.mt-2\\.5{margin-top:.625rem}.justify-between{justify-content:space-between}.space-y-1>:not([hidden])~:not([hidden]){--tw-space-y-reverse:0;margin-bottom:calc(.25rem*var(--tw-space-y-reverse));margin-top:calc(.25rem*(1 - var(--tw-space-y-reverse)))}.space-y-1\\.5>:not([hidden])~:not([hidden]){--tw-space-y-reverse:0;margin-bottom:calc(.375rem*var(--tw-space-y-reverse));margin-top:calc(.375rem*(1 - var(--tw-space-y-reverse)))}.rounded-xl{border-radius:.75rem}.bg-gray-100{--tw-bg-opacity:1;background-color:rgb(243 244 246/var(--tw-bg-opacity))}.p-6{padding:1.5rem}.pt-2{padding-top:.5rem}.text-base{font-size:1rem;line-height:1.5rem}.font-medium{font-weight:500}.leading-none{line-height:1}.tracking-tight{letter-spacing:-.025em}.py-4{padding-bottom:1rem;padding-top:1rem}.text-lg{font-size:1.125rem;line-height:1.75rem}.size-3{height:.75rem;width:.75rem}.mb-2{margin-bottom:.5rem}.mb-2\\.5{margin-bottom:.625rem}.mb-6{margin-bottom:1.5rem}.mt-4{margin-top:1rem}.h-\\[1px\\]{height:1px}.w-\\[45\\%\\]{width:45%}.space-y-3>:not([hidden])~:not([hidden]){--tw-space-y-reverse:0;margin-bottom:calc(.75rem*var(--tw-space-y-reverse));margin-top:calc(.75rem*(1 - var(--tw-space-y-reverse)))}.bg-\\[var\\(--gray-200\\)\\]{background-color:var(--gray-200)}.text-\\[var\\(--gray-500\\)\\]{color:var(--gray-500)}";
const IrBookingListingStyle0 = irBookingListingCss;

const IrBookingListing = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.bookingListingService = new BookingListingService();
        this.commonService = new CommonService();
        this.propertyService = new PropertyService();
        this.bookingListingAppService = new BookingListingAppService();
        this.propertyid = undefined;
        this.baseUrl = undefined;
        this.language = undefined;
        this.headerShown = true;
        this.footerShown = true;
        this.maxPages = 10;
        this.perma_link = null;
        this.aName = null;
        this.isLoading = false;
        this.token = undefined;
        this.bookings = [];
        this.currentPage = 1;
        this.total_count = 1;
        this.bookingNumber = null;
        this.page_mode = 'multi';
        this.activeLink = 'single_booking';
    }
    async componentWillLoad() {
        axios.defaults.baseURL = this.baseUrl;
        if (!this.propertyid) {
            throw new Error('missing property id');
        }
        getUserPrefernce();
        const isAuthenticated = this.commonService.checkUserAuthState();
        if (isAuthenticated) {
            this.bookingNumber = isAuthenticated.params ? isAuthenticated.params.booking_nbr : null;
            this.token = isAuthenticated.token;
            this.page_mode = isAuthenticated.params ? 'single' : 'multi';
            this.initializeServices();
            this.initializeApp();
        }
        else {
            const token = await this.commonService.getBEToken();
            if (token) {
                app_store.app_data.token = token;
            }
            // this.initializeServices();
            // this.initializeApp();
        }
    }
    initializeServices() {
        this.bookingListingService.setToken(this.token);
        this.propertyService.setToken(this.token);
        this.commonService.setToken(this.token);
    }
    async initializeApp() {
        var _a;
        try {
            this.isLoading = true;
            let requests = [
                this.propertyService.getExposedProperty({
                    id: this.propertyid,
                    language: ((_a = app_store.userPreferences) === null || _a === void 0 ? void 0 : _a.language_id) || 'en',
                    aname: this.aName,
                    perma_link: this.perma_link,
                }),
                this.commonService.getExposedLanguage(),
                this.propertyService.getExposedGuest(),
            ];
            if (this.bookingNumber && this.page_mode === 'single') {
                requests.unshift(this.propertyService.getExposedBooking({ booking_nbr: this.bookingNumber, language: this.language }, false));
            }
            else if (this.page_mode === 'multi') {
                requests.unshift(this.getBookings());
            }
            const [bookings] = await Promise.all(requests);
            this.booking = this.page_mode === 'single' ? bookings : undefined;
            this.bookings = this.page_mode === 'single' ? [bookings] : bookings;
        }
        catch (error) {
            console.error(error);
        }
        finally {
            this.isLoading = false;
        }
    }
    async getBookings() {
        try {
            this.isLoading = true;
            const start_row = this.currentPage === 1 ? 0 : this.currentPage * this.maxPages;
            const end_row = start_row + this.maxPages;
            const { bookings, total_count } = await this.bookingListingService.getExposedGuestBookings({ property_id: this.propertyid, start_row, end_row, total_count: 0 });
            this.total_count = total_count;
            return bookings;
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
        const { token, state, payload } = e.detail;
        if (state === 'success') {
            if (payload.method === 'direct') {
                this.bookingNumber = payload.booking_nbr;
            }
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
    async handlePageChange(e) {
        e.stopImmediatePropagation();
        e.stopPropagation();
        this.currentPage = e.detail;
        this.bookings = await this.getBookings();
    }
    async handleLinkChanged(e) {
        e.stopImmediatePropagation();
        e.stopPropagation();
        this.activeLink = e.detail;
        if (this.activeLink === 'all_booking') {
            this.page_mode = 'multi';
            this.bookings = await this.getBookings();
        }
        else {
            if (this.booking) {
                this.page_mode = 'single';
                this.bookings = [this.booking];
            }
        }
    }
    render() {
        var _a, _b, _c, _d, _e;
        if (!this.token) {
            return (h(Host, null, h("main", { class: "flex h-screen flex-col  justify-center" }, h("div", { class: "mx-auto w-full max-w-md px-4" }, h("ir-auth", { enableSignUp: false })))));
        }
        if (this.isLoading) {
            return (h("div", { class: "grid h-screen w-full place-content-center" }, h("div", { class: "page-loader" })));
        }
        const totalPages = Math.round(this.total_count / this.maxPages);
        return (h(Host, null, h("main", { class: 'flex min-h-screen flex-col gap-4 md:px-4 lg:px-6 xl:px-0' }, this.headerShown && (h("ir-nav", { isBookingListing: true, showBookingCode: false, showCurrency: false, website: (_a = app_store.property) === null || _a === void 0 ? void 0 : _a.space_theme.website, logo: (_c = (_b = app_store.property) === null || _b === void 0 ? void 0 : _b.space_theme) === null || _c === void 0 ? void 0 : _c.logo })), h("div", { class: "ir-table-container mx-auto hidden max-w-6xl flex-1 overflow-x-hidden px-4  shadow-md md:block" }, h("ir-booking-header", { bookingNumber: this.bookingNumber, activeLink: this.activeLink, mode: this.bookingNumber ? 'multi' : 'single' }), h("div", { class: "max-w-full overflow-x-auto" }, h("table", { class: "ir-table" }, h("thead", null, h("tr", { class: "ir-table-header" }, h("th", { class: "ir-table-head" }, "Status"), h("th", { class: "ir-table-head" }, "Booking reference"), h("th", { class: "ir-table-head md:hidden lg:table-cell" }, "Booking date"), h("th", { class: "ir-table-head" }, "Check-in"), h("th", { class: "ir-table-head" }, "Duration"), h("th", { class: "ir-table-head" }, "Total price"), h("th", { class: "ir-table-head sr-only" }, "pay now"))), h("tbody", null, (_d = this.bookings) === null || _d === void 0 ? void 0 : _d.map(booking => {
            const totalNights = dateFns.differenceInCalendarDays(new Date(booking.to_date), new Date(booking.from_date));
            const { cancel, payment } = this.bookingListingAppService.getBookingActions(booking);
            return (h("tr", { class: "ir-table-row", key: booking.booking_nbr }, h("td", { class: "ir-table-cell" }, h("ir-badge", { label: booking.status.description, variant: this.getBadgeVariant(booking.status.code) })), h("td", { class: "ir-table-cell" }, booking.booking_nbr), h("td", { class: "ir-table-cell md:hidden lg:table-cell" }, dateFns.format(new Date(booking.booked_on.date), 'dd-MMM-yyyy')), h("td", { class: "ir-table-cell" }, dateFns.format(new Date(booking.from_date), 'dd-MMM-yyyy')), h("td", { class: "ir-table-cell" }, totalNights, " ", totalNights > 1 ? 'nights' : 'night'), h("td", { class: "ir-table-cell" }, formatAmount(booking.total, booking.currency.code)), h("td", { class: "ir-table-cell" }, (payment || cancel) && (h("div", { class: "flex items-center justify-end gap-2.5" }, cancel && h("ir-button", { class: "w-full", variants: "outline", label: "Cancel" }), payment && h("ir-button", { label: `Pay ${formatAmount(booking.financial.due_amount || 0, booking.currency.code)} to guarentee` }))))));
        })))), this.page_mode === 'multi' && (h("div", { class: "px-[20px] py-[16px] " }, h("ir-pagination", { total: totalPages, current: this.currentPage })))), h("section", { class: 'flex-1 space-y-4 px-4 md:hidden' }, h("ir-booking-header", { bookingNumber: this.bookingNumber, mode: this.bookingNumber ? 'multi' : 'single' }), (_e = this.bookings) === null || _e === void 0 ? void 0 :
            _e.map(booking => h("ir-booking-card", { booking: booking, key: booking.booking_nbr })), this.page_mode === 'multi' && h("ir-pagination", { total: totalPages, current: this.currentPage })), this.footerShown && h("ir-footer", null))));
    }
};
IrBookingListing.style = IrBookingListingStyle0;

export { IrBookingListing as ir_booking_listing };

//# sourceMappingURL=ir-booking-listing.entry.js.map