import { proxyCustomElement, HTMLElement, h, Host, Fragment } from '@stencil/core/internal/client';
import { T as Token, M as MissingTokenError } from './Token.js';
import { a as axios } from './axios.js';
import { C as CommonService } from './common.service.js';
import { P as PropertyService } from './property.service.js';
import { a as app_store } from './app.store.js';
import { b as getUserPrefernce, d as dateFns, f as formatAmount } from './utils.js';
import { d as defineCustomElement$l } from './ir-auth2.js';
import { d as defineCustomElement$k } from './ir-badge2.js';
import { d as defineCustomElement$j } from './ir-badge-group2.js';
import { d as defineCustomElement$i } from './ir-booking-code2.js';
import { d as defineCustomElement$h } from './ir-button2.js';
import { d as defineCustomElement$g } from './ir-dialog2.js';
import { d as defineCustomElement$f } from './ir-footer2.js';
import { d as defineCustomElement$e } from './ir-google-maps2.js';
import { d as defineCustomElement$d } from './ir-icons2.js';
import { d as defineCustomElement$c } from './ir-input2.js';
import { d as defineCustomElement$b } from './ir-language-picker2.js';
import { d as defineCustomElement$a } from './ir-menu2.js';
import { d as defineCustomElement$9 } from './ir-modal2.js';
import { d as defineCustomElement$8 } from './ir-nav2.js';
import { d as defineCustomElement$7 } from './ir-pagination2.js';
import { d as defineCustomElement$6 } from './ir-privacy-policy2.js';
import { d as defineCustomElement$5 } from './ir-select2.js';
import { d as defineCustomElement$4 } from './ir-sheet2.js';
import { d as defineCustomElement$3 } from './ir-signin2.js';
import { d as defineCustomElement$2 } from './ir-signup2.js';

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

const irBookingListingCss = "*.sc-ir-booking-listing,.sc-ir-booking-listing:after,.sc-ir-booking-listing:before{--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-scroll-snap-strictness:proximity;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgba(59,130,246,.5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;border:0 solid #e5e7eb;box-sizing:border-box}.sc-ir-booking-listing:after,.sc-ir-booking-listing:before{--tw-content:\"\"}.sc-ir-booking-listing-h,html.sc-ir-booking-listing{-webkit-text-size-adjust:100%;font-feature-settings:normal;-webkit-tap-highlight-color:transparent;font-family:ui-sans-serif,system-ui,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;font-variation-settings:normal;line-height:1.5;-moz-tab-size:4;tab-size:4}body.sc-ir-booking-listing{line-height:inherit;margin:0}hr.sc-ir-booking-listing{border-top-width:1px;color:inherit;height:0}abbr.sc-ir-booking-listing:where([title]){text-decoration:underline dotted}h1.sc-ir-booking-listing,h2.sc-ir-booking-listing,h3.sc-ir-booking-listing,h4.sc-ir-booking-listing,h5.sc-ir-booking-listing,h6.sc-ir-booking-listing{font-size:inherit;font-weight:inherit}a.sc-ir-booking-listing{color:inherit;text-decoration:inherit}b.sc-ir-booking-listing,strong.sc-ir-booking-listing{font-weight:bolder}code.sc-ir-booking-listing,kbd.sc-ir-booking-listing,pre.sc-ir-booking-listing,samp.sc-ir-booking-listing{font-feature-settings:normal;font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace;font-size:1em;font-variation-settings:normal}small.sc-ir-booking-listing{font-size:80%}sub.sc-ir-booking-listing,sup.sc-ir-booking-listing{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub.sc-ir-booking-listing{bottom:-.25em}sup.sc-ir-booking-listing{top:-.5em}table.sc-ir-booking-listing{border-collapse:collapse;border-color:inherit;text-indent:0}button.sc-ir-booking-listing,input.sc-ir-booking-listing,optgroup.sc-ir-booking-listing,select.sc-ir-booking-listing,textarea.sc-ir-booking-listing{font-feature-settings:inherit;color:inherit;font-family:inherit;font-size:100%;font-variation-settings:inherit;font-weight:inherit;line-height:inherit;margin:0;padding:0}button.sc-ir-booking-listing,select.sc-ir-booking-listing{text-transform:none}[type=button].sc-ir-booking-listing,[type=reset].sc-ir-booking-listing,[type=submit].sc-ir-booking-listing,button.sc-ir-booking-listing{-webkit-appearance:button;background-color:transparent;background-image:none}.sc-ir-booking-listing:-moz-focusring{outline:auto}.sc-ir-booking-listing:-moz-ui-invalid{box-shadow:none}progress.sc-ir-booking-listing{vertical-align:baseline}.sc-ir-booking-listing::-webkit-inner-spin-button,.sc-ir-booking-listing::-webkit-outer-spin-button{height:auto}[type=search].sc-ir-booking-listing{-webkit-appearance:textfield;outline-offset:-2px}.sc-ir-booking-listing::-webkit-search-decoration{-webkit-appearance:none}.sc-ir-booking-listing::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}summary.sc-ir-booking-listing{display:list-item}blockquote.sc-ir-booking-listing,dd.sc-ir-booking-listing,dl.sc-ir-booking-listing,fieldset.sc-ir-booking-listing,figure.sc-ir-booking-listing,h1.sc-ir-booking-listing,h2.sc-ir-booking-listing,h3.sc-ir-booking-listing,h4.sc-ir-booking-listing,h5.sc-ir-booking-listing,h6.sc-ir-booking-listing,hr.sc-ir-booking-listing,p.sc-ir-booking-listing,pre.sc-ir-booking-listing{margin:0}fieldset.sc-ir-booking-listing,legend.sc-ir-booking-listing{padding:0}menu.sc-ir-booking-listing,ol.sc-ir-booking-listing,ul.sc-ir-booking-listing{list-style:none;margin:0;padding:0}dialog.sc-ir-booking-listing{padding:0}textarea.sc-ir-booking-listing{resize:vertical}input.sc-ir-booking-listing::placeholder,textarea.sc-ir-booking-listing::placeholder{color:#9ca3af;opacity:1}[role=button].sc-ir-booking-listing,button.sc-ir-booking-listing{cursor:pointer}.sc-ir-booking-listing:disabled{cursor:default}audio.sc-ir-booking-listing,canvas.sc-ir-booking-listing,embed.sc-ir-booking-listing,iframe.sc-ir-booking-listing,img.sc-ir-booking-listing,object.sc-ir-booking-listing,svg.sc-ir-booking-listing,video.sc-ir-booking-listing{display:block;vertical-align:middle}img.sc-ir-booking-listing,video.sc-ir-booking-listing{height:auto;max-width:100%}[hidden].sc-ir-booking-listing{display:none}.sc-ir-booking-listing::backdrop{--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-scroll-snap-strictness:proximity;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgba(59,130,246,.5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;}.block.sc-ir-booking-listing{display:block}.transform.sc-ir-booking-listing{transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.border.sc-ir-booking-listing{border-width:1px}.app_container.sc-ir-booking-listing{border-radius:min(var(--radius,.5rem),.5rem)!important}.trigger-container.sc-ir-booking-listing{min-block-size:3rem}.ir-table.sc-ir-booking-listing{caption-side:bottom;color:var(--gray-900,#101828);font-size:.875rem;line-height:1.25rem;width:100%}.ir-table-header.sc-ir-booking-listing{background:var(--gray-50,#fcfcfd);border-bottom:1px solid var(--gray-200,#eaecf0);color:var(--gray-600,#475467);font-size:12px;width:100%}.ir-table-header.sc-ir-booking-listing:hover,.ir-table-row.sc-ir-booking-listing:hover{background:var(--gray-100,#f2f4f7)}.ir-table-header.sc-ir-booking-listing tr.sc-ir-booking-listing{border-bottom:1px solid var(--gray-200,#eaecf0)}.ir-table-footer.sc-ir-booking-listing{border-top:1px solid var(--gray-200,#eaecf0);font-weight:500}.ir-table-footer.sc-ir-booking-listing tr.sc-ir-booking-listing:last-child{border-bottom-width:0}.ir-table-row.sc-ir-booking-listing{border-bottom-width:1px;border-color:var(--gray-200,#eaecf0);transition-duration:.15s;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke;transition-timing-function:cubic-bezier(.4,0,.2,1)}.ir-table-head.sc-ir-booking-listing{font-weight:500;height:2.5rem;text-align:left}.ir-table-cell.sc-ir-booking-listing,.ir-table-head.sc-ir-booking-listing{padding:.75rem 1.5rem;vertical-align:middle}.ir-table-cell.sc-ir-booking-listing{font-size:.875rem}.ir-table-container.sc-ir-booking-listing{background:#fff;border:1px solid var(--gray-200,#eaecf0);border-radius:min(var(--radius,.5rem),1.25rem);overflow-x:auto;width:100%}.sc-ir-booking-listing-h{display:block}.page-loader.sc-ir-booking-listing{animation:l13 1s linear infinite;aspect-ratio:1;background:radial-gradient(farthest-side,#000 94%,#0000) top/4px 4px no-repeat,conic-gradient(#0000 30%,#000);border-radius:50%;-webkit-mask:radial-gradient(farthest-side,#0000 calc(100% - 4px),#000 0);width:30px}@keyframes l13{to{transform:rotate(1turn)}}.sr-only.sc-ir-booking-listing{clip:rect(0,0,0,0);border-width:0;height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;white-space:nowrap;width:1px}.static.sc-ir-booking-listing{position:static}.absolute.sc-ir-booking-listing{position:absolute}.relative.sc-ir-booking-listing{position:relative}.right-2.sc-ir-booking-listing{right:.5rem}.top-2.sc-ir-booking-listing{top:.5rem}.mx-auto.sc-ir-booking-listing{margin-left:auto;margin-right:auto}.mt-2.sc-ir-booking-listing{margin-top:.5rem}.mt-2\\.5.sc-ir-booking-listing{margin-top:.625rem}.flex.sc-ir-booking-listing{display:flex}.table.sc-ir-booking-listing{display:table}.grid.sc-ir-booking-listing{display:grid}.hidden.sc-ir-booking-listing{display:none}.h-screen.sc-ir-booking-listing{height:100vh}.w-full.sc-ir-booking-listing{width:100%}.max-w-6xl.sc-ir-booking-listing{max-width:72rem}.max-w-full.sc-ir-booking-listing{max-width:100%}.max-w-md.sc-ir-booking-listing{max-width:28rem}.flex-col.sc-ir-booking-listing{flex-direction:column}.place-content-center.sc-ir-booking-listing{place-content:center}.items-center.sc-ir-booking-listing{align-items:center}.justify-end.sc-ir-booking-listing{justify-content:flex-end}.justify-center.sc-ir-booking-listing{justify-content:center}.justify-between.sc-ir-booking-listing{justify-content:space-between}.gap-2.sc-ir-booking-listing{gap:.5rem}.gap-2\\.5.sc-ir-booking-listing{gap:.625rem}.gap-4.sc-ir-booking-listing{gap:1rem}.space-y-1.sc-ir-booking-listing>.sc-ir-booking-listing:not([hidden])~.sc-ir-booking-listing:not([hidden]){--tw-space-y-reverse:0;margin-bottom:calc(.25rem*var(--tw-space-y-reverse));margin-top:calc(.25rem*(1 - var(--tw-space-y-reverse)))}.space-y-1\\.5.sc-ir-booking-listing>.sc-ir-booking-listing:not([hidden])~.sc-ir-booking-listing:not([hidden]){--tw-space-y-reverse:0;margin-bottom:calc(.375rem*var(--tw-space-y-reverse));margin-top:calc(.375rem*(1 - var(--tw-space-y-reverse)))}.space-y-4.sc-ir-booking-listing>.sc-ir-booking-listing:not([hidden])~.sc-ir-booking-listing:not([hidden]){--tw-space-y-reverse:0;margin-bottom:calc(1rem*var(--tw-space-y-reverse));margin-top:calc(1rem*(1 - var(--tw-space-y-reverse)))}.overflow-x-auto.sc-ir-booking-listing{overflow-x:auto}.overflow-x-hidden.sc-ir-booking-listing{overflow-x:hidden}.rounded-xl.sc-ir-booking-listing{border-radius:.75rem}.bg-gray-100.sc-ir-booking-listing{--tw-bg-opacity:1;background-color:rgb(243 244 246/var(--tw-bg-opacity))}.p-4.sc-ir-booking-listing{padding:1rem}.p-6.sc-ir-booking-listing{padding:1.5rem}.px-4.sc-ir-booking-listing{padding-left:1rem;padding-right:1rem}.px-\\[20px\\].sc-ir-booking-listing{padding-left:20px;padding-right:20px}.py-\\[16px\\].sc-ir-booking-listing{padding-bottom:16px;padding-top:16px}.pb-2.sc-ir-booking-listing{padding-bottom:.5rem}.text-base.sc-ir-booking-listing{font-size:1rem;line-height:1.5rem}.text-lg.sc-ir-booking-listing{font-size:1.125rem;line-height:1.75rem}.text-sm.sc-ir-booking-listing{font-size:.875rem;line-height:1.25rem}.font-medium.sc-ir-booking-listing{font-weight:500}.font-semibold.sc-ir-booking-listing{font-weight:600}.leading-none.sc-ir-booking-listing{line-height:1}.tracking-tight.sc-ir-booking-listing{letter-spacing:-.025em}.shadow-md.sc-ir-booking-listing{--tw-shadow:0 4px 6px -1px rgba(0,0,0,.1),0 2px 4px -2px rgba(0,0,0,.1);--tw-shadow-colored:0 4px 6px -1px var(--tw-shadow-color),0 2px 4px -2px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow)}.outline.sc-ir-booking-listing{outline-style:solid}@media (min-width:768px){.md\\:block.sc-ir-booking-listing{display:block}.md\\:hidden.sc-ir-booking-listing{display:none}.md\\:flex-row.sc-ir-booking-listing{flex-direction:row}.md\\:items-center.sc-ir-booking-listing{align-items:center}.md\\:justify-between.sc-ir-booking-listing{justify-content:space-between}}.right-3.sc-ir-booking-listing{right:.75rem}.top-3.sc-ir-booking-listing{top:.75rem}.shadow.sc-ir-booking-listing{--tw-shadow:0 1px 3px 0 rgba(0,0,0,.1),0 1px 2px -1px rgba(0,0,0,.1);--tw-shadow-colored:0 1px 3px 0 var(--tw-shadow-color),0 1px 2px -1px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow)}.h-5.sc-ir-booking-listing{height:1.25rem}.w-5.sc-ir-booking-listing{width:1.25rem}.mx-1.sc-ir-booking-listing{margin-left:.25rem;margin-right:.25rem}.justify-start.sc-ir-booking-listing{justify-content:flex-start}.mb-4.sc-ir-booking-listing{margin-bottom:1rem}.max-h-\\[83vh\\].sc-ir-booking-listing{max-height:83vh}.overflow-y-auto.sc-ir-booking-listing{overflow-y:auto}.text-xl.sc-ir-booking-listing{font-size:1.25rem;line-height:1.75rem}.text-\\[var\\(--gray-600\\2c \\#475467\\)\\].sc-ir-booking-listing{color:var(--gray-600,#475467)}.text-\\[var\\(--gray-700\\2c \\#344054\\)\\].sc-ir-booking-listing{color:var(--gray-700,#344054)}@media (min-width:768px){.md\\:p-6.sc-ir-booking-listing{padding:1.5rem}}.pointer-events-none.sc-ir-booking-listing{pointer-events:none}.inset-y-0.sc-ir-booking-listing{bottom:0;top:0}.end-1.sc-ir-booking-listing{inset-inline-end:.25rem}.start-2.sc-ir-booking-listing{inset-inline-start:.5rem}.h-full.sc-ir-booking-listing{height:100%}.rounded-md.sc-ir-booking-listing{border-radius:.375rem}.bg-white.sc-ir-booking-listing{--tw-bg-opacity:1;background-color:rgb(255 255 255/var(--tw-bg-opacity))}.px-\\[0\\.3rem\\].sc-ir-booking-listing{padding-left:.3rem;padding-right:.3rem}.px-\\[0\\.875rem\\].sc-ir-booking-listing{padding-left:.875rem;padding-right:.875rem}.py-1.sc-ir-booking-listing{padding-bottom:.25rem;padding-top:.25rem}.py-\\[0\\.625rem\\].sc-ir-booking-listing{padding-bottom:.625rem;padding-top:.625rem}.pe-7.sc-ir-booking-listing{padding-inline-end:1.75rem}.ps-9.sc-ir-booking-listing{padding-inline-start:2.25rem}.pt-1.sc-ir-booking-listing{padding-top:.25rem}.text-\\[1rem\\].sc-ir-booking-listing{font-size:1rem}.text-xs.sc-ir-booking-listing{font-size:.75rem;line-height:1rem}.text-\\[\\#667085\\].sc-ir-booking-listing{--tw-text-opacity:1;color:rgb(102 112 133/var(--tw-text-opacity))}.text-gray-900.sc-ir-booking-listing{--tw-text-opacity:1;color:rgb(17 24 39/var(--tw-text-opacity))}.fixed.sc-ir-booking-listing{position:fixed}.right-0.sc-ir-booking-listing{right:0}.right-4.sc-ir-booking-listing{right:1rem}.top-0.sc-ir-booking-listing{top:0}.top-4.sc-ir-booking-listing{top:1rem}.z-50.sc-ir-booking-listing{z-index:50}.mt-8.sc-ir-booking-listing{margin-top:2rem}.min-w-\\[70\\%\\].sc-ir-booking-listing{min-width:70%}.translate-x-0.sc-ir-booking-listing{--tw-translate-x:0px}.translate-x-0.sc-ir-booking-listing,.translate-x-\\[100\\%\\].sc-ir-booking-listing{transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.translate-x-\\[100\\%\\].sc-ir-booking-listing{--tw-translate-x:100%}.shadow.sc-ir-booking-listing,.shadow-md.sc-ir-booking-listing{box-shadow:var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow)}.transition-transform.sc-ir-booking-listing{transition-duration:.15s;transition-property:transform;transition-timing-function:cubic-bezier(.4,0,.2,1)}.duration-300.sc-ir-booking-listing{transition-duration:.3s}.ease-in-out.sc-ir-booking-listing{transition-timing-function:cubic-bezier(.4,0,.2,1)}.data-\\[state\\=\\'closed\\'\\]\\:translate-x-\\[100\\%\\][data-state=closed].sc-ir-booking-listing{--tw-translate-x:100%}.data-\\[state\\=\\'closed\\'\\]\\:translate-x-\\[100\\%\\][data-state=closed].sc-ir-booking-listing,.data-\\[state\\=\\'opened\\'\\]\\:translate-x-0[data-state=opened].sc-ir-booking-listing{transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.data-\\[state\\=\\'opened\\'\\]\\:translate-x-0[data-state=opened].sc-ir-booking-listing{--tw-translate-x:0px}.text-red-500.sc-ir-booking-listing{--tw-text-opacity:1;color:rgb(239 68 68/var(--tw-text-opacity))}@media (min-width:640px){.sm\\:p-6.sc-ir-booking-listing{padding:1.5rem}}@media (min-width:768px){.md\\:w-fit.sc-ir-booking-listing{width:fit-content}.md\\:flex-row-reverse.sc-ir-booking-listing{flex-direction:row-reverse}}.size-3.sc-ir-booking-listing{height:.75rem;width:.75rem}.mb-2.sc-ir-booking-listing{margin-bottom:.5rem}.mb-2\\.5.sc-ir-booking-listing{margin-bottom:.625rem}.mb-6.sc-ir-booking-listing{margin-bottom:1.5rem}.mt-4.sc-ir-booking-listing{margin-top:1rem}.h-\\[1px\\].sc-ir-booking-listing{height:1px}.w-\\[45\\%\\].sc-ir-booking-listing{width:45%}.space-y-3.sc-ir-booking-listing>.sc-ir-booking-listing:not([hidden])~.sc-ir-booking-listing:not([hidden]){--tw-space-y-reverse:0;margin-bottom:calc(.75rem*var(--tw-space-y-reverse));margin-top:calc(.75rem*(1 - var(--tw-space-y-reverse)))}.bg-\\[var\\(--gray-200\\)\\].sc-ir-booking-listing{background-color:var(--gray-200)}.text-\\[var\\(--gray-500\\)\\].sc-ir-booking-listing{color:var(--gray-500)}";
const IrBookingListingStyle0 = irBookingListingCss;

const IrBookingListing$1 = /*@__PURE__*/ proxyCustomElement(class IrBookingListing extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.bookingListingService = new BookingListingService();
        this.commonService = new CommonService();
        this.propertyService = new PropertyService();
        this.propertyid = undefined;
        this.baseUrl = undefined;
        this.language = undefined;
        this.headerShown = true;
        this.footerShown = true;
        this.maxPages = 10;
        this.isLoading = false;
        this.token = undefined;
        this.bookings = [];
        this.currentPage = 1;
        this.total_count = 1;
    }
    async componentWillLoad() {
        axios.defaults.baseURL = this.baseUrl;
        if (!this.propertyid) {
            throw new Error('missing property id');
        }
        getUserPrefernce();
        if (this.token) {
            console.log('token');
            this.initializeServices();
            this.initializeApp();
        }
        else {
            const token = await this.commonService.getBEToken();
            console.log(token);
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
            await Promise.all([
                this.propertyService.getExposedProperty({
                    id: this.propertyid,
                    language: ((_a = app_store.userPreferences) === null || _a === void 0 ? void 0 : _a.language_id) || 'en',
                    aname: '',
                    perma_link: '',
                }),
                this.getBookings(),
                this.commonService.getExposedLanguage(),
            ]);
        }
        catch (error) {
            console.error(error);
        }
        finally {
            this.isLoading = false;
        }
    }
    async getBookings() {
        const start_row = this.currentPage === 1 ? 0 : this.currentPage * this.maxPages;
        const end_row = start_row + this.maxPages;
        const { bookings, total_count } = await this.bookingListingService.getExposedGuestBookings({ property_id: this.propertyid, start_row, end_row, total_count: 0 });
        this.bookings = bookings;
        this.total_count = total_count;
        return bookings;
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
    async handlePageChange(e) {
        e.stopImmediatePropagation();
        e.stopPropagation();
        this.currentPage = e.detail;
        this.getBookings();
    }
    render() {
        var _a, _b, _c, _d, _e;
        if (!this.token) {
            return (h(Host, null, h("main", { class: "flex h-screen flex-col  justify-center" }, h("div", { class: "mx-auto w-full max-w-md px-4" }, h("ir-auth", { enableSignUp: false, onAuthFinish: this.handleAuthFinish.bind(this) })))));
        }
        if (this.isLoading) {
            return (h("div", { class: "grid h-screen w-full place-content-center" }, h("div", { class: "page-loader" })));
        }
        const totalPages = Math.round(this.total_count / this.maxPages);
        return (h(Host, null, this.headerShown && h("ir-nav", { isBookingListing: true, website: (_a = app_store.property) === null || _a === void 0 ? void 0 : _a.space_theme.website, logo: (_c = (_b = app_store.property) === null || _b === void 0 ? void 0 : _b.space_theme) === null || _c === void 0 ? void 0 : _c.logo }), h("main", { class: 'p-4' }, h("div", { class: "ir-table-container mx-auto hidden max-w-6xl overflow-x-hidden shadow-md md:block" }, h("div", { class: "flex flex-col gap-2.5 px-[20px] py-[16px] md:flex-row md:items-center md:justify-between " }, h("h2", { class: "text-lg font-semibold leading-none tracking-tight" }, "Bookings")), h("div", { class: "max-w-full overflow-x-auto " }, h("table", { class: "ir-table" }, h("thead", null, h("tr", { class: "ir-table-header" }, h("th", { class: "ir-table-head" }, "Status"), h("th", { class: "ir-table-head" }, "Booking reference"), h("th", { class: "ir-table-head" }, "Booking date"), h("th", { class: "ir-table-head" }, "Check-in"), h("th", { class: "ir-table-head" }, "Duration"), h("th", { class: "ir-table-head" }, "Total price"), h("th", { class: "ir-table-head sr-only" }, "pay now"))), h("tbody", null, (_d = this.bookings) === null || _d === void 0 ? void 0 : _d.map(booking => {
            const totalNights = dateFns.differenceInCalendarDays(new Date(booking.to_date), new Date(booking.from_date));
            return (h("tr", { class: "ir-table-row", key: booking.booking_nbr }, h("td", { class: "ir-table-cell" }, h("ir-badge", { label: booking.status.description, variant: this.getBadgeVariant(booking.status.code) })), h("td", { class: "ir-table-cell" }, booking.booking_nbr), h("td", { class: "ir-table-cell" }, dateFns.format(new Date(booking.booked_on.date), 'dd-MMM-yyyy')), h("td", { class: "ir-table-cell" }, dateFns.format(new Date(booking.from_date), 'EEE, dd MMM yyyy')), h("td", { class: "ir-table-cell" }, totalNights, " ", totalNights > 1 ? 'nights' : 'night'), h("td", { class: "ir-table-cell" }, formatAmount(booking.total, booking.currency.code)), h("td", { class: "ir-table-cell" }, h("ir-menu", { data: [
                    { id: 1, item: 'Cancel Booking' },
                    { id: 2, item: 'Pay $50 to guarentee' },
                ] }, h("ir-button", { slot: "menu-trigger", variants: "icon", iconHeight: 16, iconWidth: 16, removeIconClassName: true, iconName: "elipse_vertical" })))));
        })))), h("div", { class: "px-[20px] py-[16px] " }, h("ir-pagination", { total: totalPages, current: this.currentPage }))), h("section", { class: 'space-y-4 md:hidden' }, h("h2", { class: "pb-2 text-lg font-semibold leading-none tracking-tight" }, "Bookings"), (_e = this.bookings) === null || _e === void 0 ? void 0 :
            _e.map(booking => {
                const totalNights = dateFns.differenceInCalendarDays(new Date(booking.to_date), new Date(booking.from_date));
                return (h("div", { class: "relative flex flex-col space-y-1.5 rounded-xl  bg-gray-100 p-6 text-sm ", key: booking.booking_nbr }, h("ir-menu", { class: "absolute right-2 top-2", data: [
                        { id: 1, item: 'Cancel Booking' },
                        { id: 2, item: 'Pay $50 to guarentee' },
                    ] }, h("ir-button", { slot: "menu-trigger", variants: "icon", iconHeight: 16, iconWidth: 16, removeIconClassName: true, iconName: "elipse_vertical" })), h("div", { class: "flex items-center justify-between text-base" }, h("h3", { class: " font-semibold leading-none tracking-tight" }, "Booking number: #", booking.booking_nbr), h("p", null, formatAmount(booking.total, booking.currency.code))), h("p", null, h("span", { class: "font-medium" }, "Booked on: "), dateFns.format(new Date(booking.booked_on.date), 'dd-MMM-yyyy')), h("p", null, h("span", { class: "font-medium" }, "Check-in: "), dateFns.format(new Date(booking.from_date), 'EEE, dd MMM yyyy')), h("p", null, h("span", { class: "font-medium" }, "Duration: "), totalNights, " ", totalNights > 1 ? 'nights' : 'night'), h("p", { class: "flex items-center" }, h("span", { class: "font-medium" }, "Status: "), h("ir-badge", { backgroundShown: false, label: booking.status.description, variant: this.getBadgeVariant(booking.status.code) })), h("div", { class: "mt-2.5 flex items-center justify-end gap-4" }, dateFns.isBefore(new Date(), new Date(booking.from_date)) && (h(Fragment, null, h("ir-button", { variants: "outline", label: "Cancel Booking" }), h("ir-button", { label: "Pay $40 to guarentee" }))))));
            }), h("ir-pagination", { total: totalPages, current: this.currentPage }))), this.footerShown && h("ir-footer", null)));
    }
    static get style() { return IrBookingListingStyle0; }
}, [2, "ir-booking-listing", {
        "propertyid": [2],
        "baseUrl": [1, "base-url"],
        "language": [1],
        "headerShown": [4, "header-shown"],
        "footerShown": [4, "footer-shown"],
        "maxPages": [2, "max-pages"],
        "isLoading": [32],
        "token": [32],
        "bookings": [32],
        "currentPage": [32],
        "total_count": [32]
    }, [[0, "pageChange", "handlePageChange"]]]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["ir-booking-listing", "ir-auth", "ir-badge", "ir-badge-group", "ir-booking-code", "ir-button", "ir-dialog", "ir-footer", "ir-google-maps", "ir-icons", "ir-input", "ir-language-picker", "ir-menu", "ir-modal", "ir-nav", "ir-pagination", "ir-privacy-policy", "ir-select", "ir-sheet", "ir-signin", "ir-signup"];
    components.forEach(tagName => { switch (tagName) {
        case "ir-booking-listing":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, IrBookingListing$1);
            }
            break;
        case "ir-auth":
            if (!customElements.get(tagName)) {
                defineCustomElement$l();
            }
            break;
        case "ir-badge":
            if (!customElements.get(tagName)) {
                defineCustomElement$k();
            }
            break;
        case "ir-badge-group":
            if (!customElements.get(tagName)) {
                defineCustomElement$j();
            }
            break;
        case "ir-booking-code":
            if (!customElements.get(tagName)) {
                defineCustomElement$i();
            }
            break;
        case "ir-button":
            if (!customElements.get(tagName)) {
                defineCustomElement$h();
            }
            break;
        case "ir-dialog":
            if (!customElements.get(tagName)) {
                defineCustomElement$g();
            }
            break;
        case "ir-footer":
            if (!customElements.get(tagName)) {
                defineCustomElement$f();
            }
            break;
        case "ir-google-maps":
            if (!customElements.get(tagName)) {
                defineCustomElement$e();
            }
            break;
        case "ir-icons":
            if (!customElements.get(tagName)) {
                defineCustomElement$d();
            }
            break;
        case "ir-input":
            if (!customElements.get(tagName)) {
                defineCustomElement$c();
            }
            break;
        case "ir-language-picker":
            if (!customElements.get(tagName)) {
                defineCustomElement$b();
            }
            break;
        case "ir-menu":
            if (!customElements.get(tagName)) {
                defineCustomElement$a();
            }
            break;
        case "ir-modal":
            if (!customElements.get(tagName)) {
                defineCustomElement$9();
            }
            break;
        case "ir-nav":
            if (!customElements.get(tagName)) {
                defineCustomElement$8();
            }
            break;
        case "ir-pagination":
            if (!customElements.get(tagName)) {
                defineCustomElement$7();
            }
            break;
        case "ir-privacy-policy":
            if (!customElements.get(tagName)) {
                defineCustomElement$6();
            }
            break;
        case "ir-select":
            if (!customElements.get(tagName)) {
                defineCustomElement$5();
            }
            break;
        case "ir-sheet":
            if (!customElements.get(tagName)) {
                defineCustomElement$4();
            }
            break;
        case "ir-signin":
            if (!customElements.get(tagName)) {
                defineCustomElement$3();
            }
            break;
        case "ir-signup":
            if (!customElements.get(tagName)) {
                defineCustomElement$2();
            }
            break;
    } });
}

const IrBookingListing = IrBookingListing$1;
const defineCustomElement = defineCustomElement$1;

export { IrBookingListing, defineCustomElement };

//# sourceMappingURL=ir-booking-listing.js.map