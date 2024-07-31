import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';
import { a as IrGuest } from './user_form.js';
import { p as phone_input_store, d as defineCustomElement$2 } from './ir-phone-input2.js';
import { c as checkout_store } from './checkout.store.js';
import { Z as ZodError } from './index4.js';
import { P as PropertyService } from './property.service.js';
import { a as app_store } from './app.store.js';
import { C as CommonService } from './common.service.js';
import { i as isRequestPending } from './ir-interceptor.store.js';
import { d as defineCustomElement$6 } from './ir-button2.js';
import { d as defineCustomElement$5 } from './ir-checkbox2.js';
import { d as defineCustomElement$4 } from './ir-icons2.js';
import { d as defineCustomElement$3 } from './ir-input2.js';
import { d as defineCustomElement$1 } from './ir-select2.js';

const irUserProfileCss = "*,:after,:before{--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-scroll-snap-strictness:proximity;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgba(59,130,246,.5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;border:0 solid #e5e7eb;box-sizing:border-box}:after,:before{--tw-content:\"\"}:host,html{-webkit-text-size-adjust:100%;font-feature-settings:normal;-webkit-tap-highlight-color:transparent;font-family:ui-sans-serif,system-ui,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;font-variation-settings:normal;line-height:1.5;-moz-tab-size:4;tab-size:4}body{line-height:inherit;margin:0}hr{border-top-width:1px;color:inherit;height:0}abbr:where([title]){text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,pre,samp{font-feature-settings:normal;font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace;font-size:1em;font-variation-settings:normal}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}table{border-collapse:collapse;border-color:inherit;text-indent:0}button,input,optgroup,select,textarea{font-feature-settings:inherit;color:inherit;font-family:inherit;font-size:100%;font-variation-settings:inherit;font-weight:inherit;line-height:inherit;margin:0;padding:0}button,select{text-transform:none}[type=button],[type=reset],[type=submit],button{-webkit-appearance:button;background-color:transparent;background-image:none}:-moz-focusring{outline:auto}:-moz-ui-invalid{box-shadow:none}progress{vertical-align:baseline}::-webkit-inner-spin-button,::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}summary{display:list-item}blockquote,dd,dl,fieldset,figure,h1,h2,h3,h4,h5,h6,hr,p,pre{margin:0}fieldset,legend{padding:0}menu,ol,ul{list-style:none;margin:0;padding:0}dialog{padding:0}textarea{resize:vertical}input::placeholder,textarea::placeholder{color:#9ca3af;opacity:1}[role=button],button{cursor:pointer}:disabled{cursor:default}audio,canvas,embed,iframe,img,object,svg,video{display:block;vertical-align:middle}img,video{height:auto;max-width:100%}[hidden]{display:none}::backdrop{--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-scroll-snap-strictness:proximity;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgba(59,130,246,.5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;}.relative{position:relative}.block{display:block}.hidden{display:none}:host{display:block;overflow:hidden;position:relative}.static{position:static}.sticky{position:sticky}.top-0{top:0}.z-50{z-index:50}.m-0{margin:0}.mx-auto{margin-left:auto;margin-right:auto}.flex{display:flex}.w-full{width:100%}.max-w-6xl{max-width:72rem}.flex-1{flex:1 1 0%}.flex-col{flex-direction:column}.space-y-5>:not([hidden])~:not([hidden]){--tw-space-y-reverse:0;margin-bottom:calc(1.25rem*var(--tw-space-y-reverse));margin-top:calc(1.25rem*(1 - var(--tw-space-y-reverse)))}.p-0{padding:0}.px-4{padding-left:1rem;padding-right:1rem}@media (min-width:1024px){.lg\\:px-6{padding-left:1.5rem;padding-right:1.5rem}}.py-3{padding-bottom:.75rem;padding-top:.75rem}.text-lg{font-size:1.125rem;line-height:1.75rem}.font-medium{font-weight:500}.shadow{--tw-shadow:0 1px 3px 0 rgba(0,0,0,.1),0 1px 2px -1px rgba(0,0,0,.1);--tw-shadow-colored:0 1px 3px 0 var(--tw-shadow-color),0 1px 2px -1px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow)}.outline{outline-style:solid}.h-full{height:100%}.size-6{height:1.5rem;width:1.5rem}.items-center{align-items:center}.gap-4{gap:1rem}.pb-2{padding-bottom:.5rem}.font-semibold{font-weight:600}.text-red-500{--tw-text-opacity:1;color:rgb(239 68 68/var(--tw-text-opacity))}.top-\\[20\\%\\]{top:20%}.aspect-\\[1\\/1\\]{aspect-ratio:1/1}.h-\\[80vh\\]{height:80vh}.max-h-32{max-height:8rem}.max-h-52{max-height:13rem}.animate-pulse{animation:pulse 2s cubic-bezier(.4,0,.6,1) infinite}.flex-wrap{flex-wrap:wrap}.justify-center{justify-content:center}.justify-between{justify-content:space-between}.gap-1{gap:.25rem}.gap-16{gap:4rem}.space-y-2>:not([hidden])~:not([hidden]){--tw-space-y-reverse:0;margin-bottom:calc(.5rem*var(--tw-space-y-reverse));margin-top:calc(.5rem*(1 - var(--tw-space-y-reverse)))}.bg-gray-200{--tw-bg-opacity:1;background-color:rgb(229 231 235/var(--tw-bg-opacity))}.object-cover{object-fit:cover}.pt-2{padding-top:.5rem}.text-center{text-align:center}.text-sm{font-size:.875rem;line-height:1.25rem}.text-xs{font-size:.75rem;line-height:1rem}.text-green-500{--tw-text-opacity:1;color:rgb(34 197 94/var(--tw-text-opacity))}@media (min-width:768px){.md\\:w-fit{width:fit-content}.md\\:flex-row{flex-direction:row}.md\\:items-center{align-items:center}.md\\:text-right{text-align:right}}.grid{display:grid}.h-64{height:16rem}.h-screen{height:100vh}.max-w-md{max-width:28rem}.place-content-center{place-content:center}.rounded-md{border-radius:.375rem}@media (min-width:768px){.md\\:hidden{display:none}}.bottom-2{bottom:.5rem}.z-40{z-index:40}.mb-5{margin-bottom:1.25rem}.mt-14{margin-top:3.5rem}.w-auto{width:auto}.justify-end{justify-content:flex-end}.bg-gray-700\\/80{background-color:rgba(55,65,81,.8)}.px-6{padding-left:1.5rem;padding-right:1.5rem}.py-2{padding-bottom:.5rem;padding-top:.5rem}.py-8{padding-bottom:2rem;padding-top:2rem}.pb-5{padding-bottom:1.25rem}.text-base{font-size:1rem;line-height:1.5rem}.text-gray-200{--tw-text-opacity:1;color:rgb(229 231 235/var(--tw-text-opacity))}@media (min-width:768px){.md\\:text-lg{font-size:1.125rem;line-height:1.75rem}}@media (min-width:1024px){.lg\\:w-60{width:15rem}.lg\\:gap-10{gap:2.5rem}.lg\\:text-2xl{font-size:1.5rem;line-height:2rem}}.sr-only{clip:rect(0,0,0,0);border-width:0;height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;white-space:nowrap;width:1px}.table{display:table}@media (min-width:1024px){.lg\\:size-7{height:1.75rem;width:1.75rem}}.gap-2{gap:.5rem}.gap-2\\.5{gap:.625rem}.space-y-4>:not([hidden])~:not([hidden]){--tw-space-y-reverse:0;margin-bottom:calc(1rem*var(--tw-space-y-reverse));margin-top:calc(1rem*(1 - var(--tw-space-y-reverse)))}.space-y-8>:not([hidden])~:not([hidden]){--tw-space-y-reverse:0;margin-bottom:calc(2rem*var(--tw-space-y-reverse));margin-top:calc(2rem*(1 - var(--tw-space-y-reverse)))}.text-2xl{font-size:1.5rem;line-height:2rem}@media (min-width:768px){.md\\:sticky{position:sticky}.md\\:top-20{top:5rem}.md\\:flex{display:flex}.md\\:max-w-4xl{max-width:56rem}.md\\:max-w-md{max-width:28rem}.md\\:items-start{align-items:flex-start}.md\\:justify-end{justify-content:flex-end}}.absolute{position:absolute}.right-3{right:.75rem}.top-3{top:.75rem}.text-end{text-align:end}.text-gray-400{--tw-text-opacity:1;color:rgb(156 163 175/var(--tw-text-opacity))}.h-5{height:1.25rem}.w-5{width:1.25rem}.fixed{position:fixed}.mx-1{margin-left:.25rem;margin-right:.25rem}.justify-start{justify-content:flex-start}.filter{filter:var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)}.resize{resize:both}@media (min-width:640px){.sm\\:block{display:block}}.visible{visibility:visible}.pointer-events-none{pointer-events:none}.inset-y-0{bottom:0;top:0}.end-1{inset-inline-end:.25rem}.start-2{inset-inline-start:.5rem}.bg-white{--tw-bg-opacity:1;background-color:rgb(255 255 255/var(--tw-bg-opacity))}.px-\\[0\\.3rem\\]{padding-left:.3rem;padding-right:.3rem}.px-\\[0\\.875rem\\]{padding-left:.875rem;padding-right:.875rem}.py-1{padding-bottom:.25rem;padding-top:.25rem}.py-\\[0\\.625rem\\]{padding-bottom:.625rem;padding-top:.625rem}.pe-7{padding-inline-end:1.75rem}.ps-9{padding-inline-start:2.25rem}.pt-1{padding-top:.25rem}.text-\\[1rem\\]{font-size:1rem}.text-\\[\\#667085\\]{--tw-text-opacity:1;color:rgb(102 112 133/var(--tw-text-opacity))}.text-gray-900{--tw-text-opacity:1;color:rgb(17 24 39/var(--tw-text-opacity))}.right-0{right:0}.right-4{right:1rem}.top-4{top:1rem}.mt-8{margin-top:2rem}.min-w-\\[70\\%\\]{min-width:70%}.max-w-full{max-width:100%}.translate-x-0{--tw-translate-x:0px}.translate-x-0,.translate-x-\\[100\\%\\]{transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.translate-x-\\[100\\%\\]{--tw-translate-x:100%}.shadow,.shadow-md{box-shadow:var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow)}.shadow-md{--tw-shadow:0 4px 6px -1px rgba(0,0,0,.1),0 2px 4px -2px rgba(0,0,0,.1);--tw-shadow-colored:0 4px 6px -1px var(--tw-shadow-color),0 2px 4px -2px var(--tw-shadow-color)}.transition-transform{transition-duration:.15s;transition-property:transform;transition-timing-function:cubic-bezier(.4,0,.2,1)}.duration-300{transition-duration:.3s}.ease-in-out{transition-timing-function:cubic-bezier(.4,0,.2,1)}.data-\\[state\\=\\'closed\\'\\]\\:translate-x-\\[100\\%\\][data-state=closed]{--tw-translate-x:100%}.data-\\[state\\=\\'closed\\'\\]\\:translate-x-\\[100\\%\\][data-state=closed],.data-\\[state\\=\\'opened\\'\\]\\:translate-x-0[data-state=opened]{transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.data-\\[state\\=\\'opened\\'\\]\\:translate-x-0[data-state=opened]{--tw-translate-x:0px}.mb-4{margin-bottom:1rem}.max-h-\\[83vh\\]{max-height:83vh}.overflow-y-auto{overflow-y:auto}.p-4{padding:1rem}.text-xl{font-size:1.25rem;line-height:1.75rem}.text-\\[var\\(--gray-600\\2c \\#475467\\)\\]{color:var(--gray-600,#475467)}.text-\\[var\\(--gray-700\\2c \\#344054\\)\\]{color:var(--gray-700,#344054)}@media (min-width:768px){.md\\:p-6{padding:1.5rem}}.max-w-xs{max-width:20rem}.rounded-lg{border-radius:.5rem}.px-3{padding-left:.75rem;padding-right:.75rem}.transform{transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.size-4{height:1rem;width:1rem}.font-normal{font-weight:400}.text-gray-700{--tw-text-opacity:1;color:rgb(55 65 81/var(--tw-text-opacity))}.mx-2{margin-left:.5rem;margin-right:.5rem}.mt-2{margin-top:.5rem}.mt-2\\.5{margin-top:.625rem}.space-y-1>:not([hidden])~:not([hidden]){--tw-space-y-reverse:0;margin-bottom:calc(.25rem*var(--tw-space-y-reverse));margin-top:calc(.25rem*(1 - var(--tw-space-y-reverse)))}.space-y-1\\.5>:not([hidden])~:not([hidden]){--tw-space-y-reverse:0;margin-bottom:calc(.375rem*var(--tw-space-y-reverse));margin-top:calc(.375rem*(1 - var(--tw-space-y-reverse)))}.rounded-xl{border-radius:.75rem}.bg-gray-100{--tw-bg-opacity:1;background-color:rgb(243 244 246/var(--tw-bg-opacity))}.p-6{padding:1.5rem}.leading-none{line-height:1}.tracking-tight{letter-spacing:-.025em}@media (min-width:640px){.sm\\:p-6{padding:1.5rem}}@media (min-width:768px){.md\\:flex-row-reverse{flex-direction:row-reverse}}.ml-1{margin-left:.25rem}.line-clamp-3{-webkit-box-orient:vertical;-webkit-line-clamp:3;display:-webkit-box;overflow:hidden}.inline-flex{display:inline-flex}.h-16{height:4rem}.h-6{height:1.5rem}.max-w-\\[60\\%\\]{max-width:60%}.flex-row{flex-direction:row}.gap-3{gap:.75rem}.space-y-14>:not([hidden])~:not([hidden]){--tw-space-y-reverse:0;margin-bottom:calc(3.5rem*var(--tw-space-y-reverse));margin-top:calc(3.5rem*(1 - var(--tw-space-y-reverse)))}.pl-0{padding-left:0}.pt-0{padding-top:0}.pt-0\\.5{padding-top:.125rem}.text-right{text-align:right}.text-gray-500{--tw-text-opacity:1;color:rgb(107 114 128/var(--tw-text-opacity))}@media (min-width:768px){.md\\:block{display:block}.md\\:w-full{width:100%}.md\\:max-w-full{max-width:100%}}@media (min-width:1024px){.lg\\:flex-row{flex-direction:row}}@media (min-width:1280px){.xl\\:text-xl{font-size:1.25rem;line-height:1.75rem}}.py-4{padding-bottom:1rem;padding-top:1rem}.size-\\[18px\\]{height:18px;width:18px}.h-\\[14px\\]{height:14px}.h-\\[3rem\\]{height:3rem}.w-\\[12\\.25px\\]{width:12.25px}.gap-0{gap:0}.gap-0\\.5{gap:.125rem}.border-0{border-width:0}.pt-14{padding-top:3.5rem}.shadow,.shadow-none{box-shadow:var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow)}.shadow-none{--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000}@media (min-width:640px){.sm\\:w-auto{width:auto}.sm\\:w-fit{width:fit-content}.sm\\:border{border-width:1px}.sm\\:pt-4{padding-top:1rem}.sm\\:shadow-sm{--tw-shadow:0 1px 2px 0 rgba(0,0,0,.05);--tw-shadow-colored:0 1px 2px 0 var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow)}}.h-\\[50vh\\]{height:50vh}.overflow-x-auto{overflow-x:auto}.overflow-x-hidden{overflow-x:hidden}.px-\\[1\\.25rem\\]{padding-left:1.25rem;padding-right:1.25rem}.pt-\\[1rem\\]{padding-top:1rem}@media (min-width:1024px){.lg\\:table-cell{display:table-cell}}.mt-4{margin-top:1rem}.h-\\[1px\\]{height:1px}.w-56{width:14rem}.min-w-\\[1rem\\]{min-width:1rem}.rounded-t-md{border-top-left-radius:.375rem;border-top-right-radius:.375rem}.border{border-width:1px}.border-gray-300{--tw-border-opacity:1;border-color:rgb(209 213 219/var(--tw-border-opacity))}.bg-gray-300{--tw-bg-opacity:1;background-color:rgb(209 213 219/var(--tw-bg-opacity))}.p-2{padding:.5rem}@media (min-width:768px){.md\\:max-w-sm{max-width:24rem}}@media (min-width:1024px){.lg\\:aspect-\\[16\\/9\\]{aspect-ratio:16/9}.lg\\:p-6{padding:1.5rem}}.h-10{height:2.5rem}.h-14{height:3.5rem}.h-24{height:6rem}.h-28{height:7rem}.gap-12{gap:3rem}.gap-8{gap:2rem}@media (min-width:1024px){.lg\\:max-w-sm{max-width:24rem}}.text-start{text-align:start}@media (min-width:768px){.md\\:justify-between{justify-content:space-between}.md\\:gap-8{gap:2rem}}.size-3{height:.75rem;width:.75rem}.col-span-6{grid-column:span 6/span 6}.h-4{height:1rem}.h-8{height:2rem}.w-12{width:3rem}.place-items-center{place-items:center}.gap-\\[2px\\]{gap:2px}.w-72{width:18rem}.w-fit{width:fit-content}@media (min-width:768px){.md\\:p-4{padding:1rem}}.-bottom-0{bottom:0}.z-0{z-index:0}.mb-1{margin-bottom:.25rem}.mb-2{margin-bottom:.5rem}.size-10{height:2.5rem;width:2.5rem}.h-48{height:12rem}.max-h-\\[80vh\\]{max-height:80vh}.cursor-pointer{cursor:pointer}.items-end{align-items:flex-end}.overflow-hidden{overflow:hidden}.rounded-\\[var\\(--radius\\2c 8px\\)\\]{border-radius:var(--radius,8px)}.bg-white\\/80{background-color:hsla(0,0%,100%,.8)}.px-2{padding-left:.5rem;padding-right:.5rem}.pb-4{padding-bottom:1rem}.ordinal{--tw-ordinal:ordinal;font-variant-numeric:var(--tw-ordinal) var(--tw-slashed-zero) var(--tw-numeric-figure) var(--tw-numeric-spacing) var(--tw-numeric-fraction)}.text-white{--tw-text-opacity:1;color:rgb(255 255 255/var(--tw-text-opacity))}.hover\\:bg-gray-400:hover{--tw-bg-opacity:1;background-color:rgb(156 163 175/var(--tw-bg-opacity))}@media (min-width:768px){.md\\:max-h-\\[200px\\]{max-height:200px}.md\\:w-auto{width:auto}.md\\:pt-0{padding-top:0}.md\\:pt-4{padding-top:1rem}.md\\:text-xl{font-size:1.25rem;line-height:1.75rem}}@media (min-width:1280px){.xl\\:max-h-\\[250px\\]{max-height:250px}}.ml-4{margin-left:1rem}.grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr))}.space-y-3>:not([hidden])~:not([hidden]){--tw-space-y-reverse:0;margin-bottom:calc(.75rem*var(--tw-space-y-reverse));margin-top:calc(.75rem*(1 - var(--tw-space-y-reverse)))}.pb-6{padding-bottom:1.5rem}.text-gray-800{--tw-text-opacity:1;color:rgb(31 41 55/var(--tw-text-opacity))}@media (min-width:640px){.sm\\:flex-row{flex-direction:row}.sm\\:items-center{align-items:center}.sm\\:text-sm{font-size:.875rem;line-height:1.25rem}}@media (min-width:1024px){.lg\\:grid-cols-3{grid-template-columns:repeat(3,minmax(0,1fr))}}.text-slate-900{--tw-text-opacity:1;color:rgb(15 23 42/var(--tw-text-opacity))}.col-span-2{grid-column:span 2/span 2}.mb-6{margin-bottom:1.5rem}.mt-6{margin-top:1.5rem}.min-h-\\[80vh\\]{min-height:80vh}.max-w-xl{max-width:36rem}@media (min-width:768px){.md\\:grid{display:grid}.md\\:grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr))}}.text-\\[hsl\\(var\\(--brand-600\\)\\)\\]{color:hsl(var(--brand-600))}.text-slate-500{--tw-text-opacity:1;color:rgb(100 116 139/var(--tw-text-opacity))}@media (min-width:640px){.sm\\:p-4{padding:1rem}}.border-solid{border-style:solid}.mb-2\\.5{margin-bottom:.625rem}.w-\\[45\\%\\]{width:45%}.bg-\\[var\\(--gray-200\\)\\]{background-color:var(--gray-200)}.text-\\[var\\(--gray-500\\)\\]{color:var(--gray-500)}";
const IrUserProfileStyle0 = irUserProfileCss;

const IrUserProfile = /*@__PURE__*/ proxyCustomElement(class IrUserProfile extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
        this.propertyService = new PropertyService();
        this.commonService = new CommonService();
        this.user_data = {};
        this.be = true;
        this.user = {};
        this.isLoading = false;
        this.isPageLoading = false;
    }
    async componentWillLoad() {
        this.propertyService.setToken(app_store.app_data.token);
        console.log('token', app_store.app_data.token);
        this.commonService.setToken(app_store.app_data.token);
        await this.fetchData();
        this.user = Object.assign({}, this.user_data);
    }
    async fetchData() {
        if (this.be) {
            return;
        }
        await this.commonService.getExposedCountryByIp();
    }
    updateUserData(key, value) {
        console.log(key, value);
        this.user = Object.assign(Object.assign({}, this.user), { [key]: value });
    }
    async handleSubmit(e) {
        e.preventDefault();
        try {
            IrGuest.parse(this.user);
            this.isLoading = true;
            await this.propertyService.editExposedGuest(this.user, '');
            const { email, country_id, first_name, last_name, mobile, country_phone_prefix } = this.user;
            checkout_store.userFormData = Object.assign(Object.assign({}, checkout_store.userFormData), { country_phone_prefix: country_phone_prefix, email, firstName: first_name, lastName: last_name, mobile_number: mobile, country_id });
        }
        catch (error) {
            if (error instanceof ZodError) {
                console.log(error.issues);
            }
        }
        finally {
            this.isLoading = false;
        }
    }
    render() {
        var _a;
        console.log(isRequestPending('/Get_Exposed_Country_By_IP'));
        if (isRequestPending('/Get_Exposed_Country_By_IP')) {
            return null;
        }
        return (h("section", { class: `mx-auto h-full min-h-[80vh] max-w-xl ${!this.be ? 'p-4 md:p-6' : ''}` }, h("h1", { class: "mb-6 text-lg font-medium" }, "Personal profile"), h("form", { onSubmit: this.handleSubmit.bind(this) }, h("div", { class: "relative  flex flex-col gap-4 md:grid md:grid-cols-2 " }, h("ir-input", { label: "First name", onTextChanged: e => this.updateUserData('first_name', e.detail), value: this.user.first_name, placeholder: "", onInputBlur: e => {
                var _a;
                const emailSchema = IrGuest.pick({ first_name: true });
                const schemaValidation = emailSchema.safeParse({ first_name: (_a = this.user) === null || _a === void 0 ? void 0 : _a.first_name });
                const target = e.target;
                if (!schemaValidation.success) {
                    target.setAttribute('data-state', 'error');
                    target.setAttribute('aria-invalid', 'true');
                }
                else {
                    if (target.hasAttribute('aria-invalid')) {
                        target.setAttribute('aria-invalid', 'false');
                    }
                }
            }, onInputFocus: e => {
                const target = e.target;
                if (target.hasAttribute('data-state'))
                    target.removeAttribute('data-state');
            } }), h("ir-input", { value: this.user.last_name, label: "Last name", placeholder: "", onTextChanged: e => this.updateUserData('last_name', e.detail), onInputBlur: e => {
                var _a;
                const emailSchema = IrGuest.pick({ last_name: true });
                const schemaValidation = emailSchema.safeParse({ last_name: (_a = this.user) === null || _a === void 0 ? void 0 : _a.last_name });
                const target = e.target;
                if (!schemaValidation.success) {
                    target.setAttribute('data-state', 'error');
                    target.setAttribute('aria-invalid', 'true');
                }
                else {
                    if (target.hasAttribute('aria-invalid')) {
                        target.setAttribute('aria-invalid', 'false');
                    }
                }
            }, onInputFocus: e => {
                const target = e.target;
                if (target.hasAttribute('data-state'))
                    target.removeAttribute('data-state');
            } }), h("ir-input", { label: "Email", placeholder: "", value: this.user.email, onInputBlur: e => {
                var _a;
                const emailSchema = IrGuest.pick({ email: true });
                const schemaValidation = emailSchema.safeParse({ email: (_a = this.user) === null || _a === void 0 ? void 0 : _a.email });
                const target = e.target;
                if (!schemaValidation.success) {
                    target.setAttribute('data-state', 'error');
                    target.setAttribute('aria-invalid', 'true');
                }
                else {
                    if (target.hasAttribute('aria-invalid')) {
                        target.setAttribute('aria-invalid', 'false');
                    }
                }
            }, onInputFocus: e => {
                const target = e.target;
                if (target.hasAttribute('data-state'))
                    target.removeAttribute('data-state');
            }, onTextChanged: e => this.updateUserData('email', e.detail) }), h("ir-select", { value: this.user.country_id, label: "Country", variant: "double-line", data: (_a = phone_input_store.countries) === null || _a === void 0 ? void 0 : _a.map(country => ({
                id: country.id,
                value: country.name,
            })), onValueChange: e => this.updateUserData('country_id', e.detail) }), h("ir-phone-input", { class: "col-span-2 w-full", country_code: this.user.country_id || null, mode: "prefix_only", country_phone_prefix: this.user.country_phone_prefix || null, onTextChange: e => {
                this.updateUserData('mobile', e.detail.mobile);
                this.updateUserData('country_phone_prefix', e.detail.phone_prefix);
            }, mobile_number: (this.user.mobile || '').toString(), onPhoneInputBlur: e => {
                const schema = IrGuest.pick({ mobile: true });
                const schemaValidation = schema.safeParse({ mobile: this.user.mobile });
                const target = e.target;
                if (!schemaValidation.success) {
                    target.setAttribute('data-state', 'error');
                    target.setAttribute('aria-invalid', 'true');
                }
                else {
                    if (target.hasAttribute('aria-invalid')) {
                        target.setAttribute('aria-invalid', 'false');
                    }
                }
            }, onPhoneInputFocus: e => {
                const target = e.target;
                if (target.hasAttribute('data-state'))
                    target.removeAttribute('data-state');
            } })), h("div", { class: "mt-4" }, h("ir-checkbox", { onCheckChange: e => this.updateUserData('subscribe_to_news_letter', e.detail), label: "Register for exclusive deals" })), h("div", { class: "flex items-center justify-end" }, h("ir-button", { type: "submit", isLoading: this.isLoading, label: "Save", class: "mt-6 w-full md:w-fit" })))));
    }
    static get style() { return IrUserProfileStyle0; }
}, [1, "ir-user-profile", {
        "user_data": [16],
        "be": [4],
        "user": [32],
        "isLoading": [32],
        "isPageLoading": [32]
    }]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["ir-user-profile", "ir-button", "ir-checkbox", "ir-icons", "ir-input", "ir-phone-input", "ir-select"];
    components.forEach(tagName => { switch (tagName) {
        case "ir-user-profile":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, IrUserProfile);
            }
            break;
        case "ir-button":
            if (!customElements.get(tagName)) {
                defineCustomElement$6();
            }
            break;
        case "ir-checkbox":
            if (!customElements.get(tagName)) {
                defineCustomElement$5();
            }
            break;
        case "ir-icons":
            if (!customElements.get(tagName)) {
                defineCustomElement$4();
            }
            break;
        case "ir-input":
            if (!customElements.get(tagName)) {
                defineCustomElement$3();
            }
            break;
        case "ir-phone-input":
            if (!customElements.get(tagName)) {
                defineCustomElement$2();
            }
            break;
        case "ir-select":
            if (!customElements.get(tagName)) {
                defineCustomElement$1();
            }
            break;
    } });
}

export { IrUserProfile as I, defineCustomElement as d };

//# sourceMappingURL=ir-user-profile2.js.map