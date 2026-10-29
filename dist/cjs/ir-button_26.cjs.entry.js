'use strict';

var index = require('./index-IDeZZwEK.js');
var v4 = require('./v4-_2BfiRUa.js');
var slot = require('./slot-BU-FjeKp.js');
var masks = require('./masks-DJsCZmbG.js');
var index$1 = require('./index-DtKMs5Q4.js');
var number = require('./number-xBpNWk3H.js');
var axios = require('./axios-EresIryl.js');
var irInterceptor_store = require('./ir-interceptor.store-GIfc0Pi9.js');
var t = require('./t-CqJPQrfm.js');
var ApiClient = require('./ApiClient-dg2yha-e.js');
var system_service = require('./system.service-q3G6_5Tb.js');
var localeScope = require('./locale-scope-Cch-vf1R.js');
var locale_controller = require('./locale.controller-BYGzJwun.js');
var types = require('./types-BVJQZ50e.js');
var authenticate_service = require('./authenticate.service-CUEKvxj9.js');
var user_service = require('./user.service-DnFMo961.js');
var utils = require('./utils-DC_1UV-i.js');
var calendarData = require('./calendar-data-ShS6b-Ns.js');
var functions = require('./functions-CaNAUyCw.js');
var irDate = require('./ir-date-CbkOKs2C.js');
var moment = require('./moment-CdViwxPQ.js');
var booking_service = require('./booking.service-Cq8eFpFp.js');
var index$2 = require('./index-Cb_LC8em.js');
var room_service = require('./room.service-DQPC1AMo.js');
var realtime_service = require('./realtime.service-BMgF8Zdb.js');
var languageSync = require('./language-sync-D_AAmQlu.js');
var utils$1 = require('./utils-PciJI6G4.js');
var debounce = require('./debounce-Be8tSGtB.js');
require('./_commonjsHelpers-BJu3ubxk.js');
require('./language-observer-DKp37LIu.js');
require('./types-B4nFkhmU.js');
require('./booking.dto-CMx8s-oW.js');
require('./type-DxODN41W.js');
require('./calendar-dates-BxDGM1ix.js');
require('./IBooking-hDE_y33g.js');
require('./booking-Bp-n-MGf.js');
require('./commonSchemas-D4iFLV5-.js');

const irButtonCss = () => `.sc-ir-button-h{--icon-button-color:#6b6f82;--icon-button-hover-color:#104064}.button-icon.sc-ir-button{padding:0;margin-top:0}.button-icon[data-state='loading'].sc-ir-button{display:none}.button-text.sc-ir-button{padding:0 5px}.bounce-3.sc-ir-button{animation:bounce 1s 1}.btn-link.sc-ir-button{color:var(--blue, #1e9ff2)}.ir-button-class.sc-ir-button{display:inline-flex !important;justify-content:center;align-items:center;box-sizing:border-box}.btn-outline.sc-ir-button{background:transparent;border:1px solid #104064;color:#104064}.btn-outline.sc-ir-button:hover,.btn-outline.sc-ir-button:active{background:#104064;color:white}.icon-button.sc-ir-button{all:unset;box-sizing:border-box;border-radius:0.25rem;display:inline-flex;align-items:center;justify-content:center;color:var(--icon-button-color);padding:0.2rem;transition:color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out, -webkit-box-shadow 0.15s ease-in-out}.icon-button.sc-ir-button:hover{color:var(--icon-button-hover-color)}.icon-button.sc-ir-button:hover.hovered_bg{background:var('--ir-icon-bg-hover', #f6f6f6)}.icon-button.sc-ir-button:disabled{pointer-events:none}.icon-loader.sc-ir-button{margin:0;padding:0;width:var(--icon-size, 1.25rem);height:var(--icon-size, 1.25rem);border-radius:50%;background:radial-gradient(farthest-side, var(--icon-button-color) 94%, #0000) top/2px 2px no-repeat, conic-gradient(#0000 30%, var(--icon-button-color));-webkit-mask:radial-gradient(farthest-side, #0000 calc(100% - 2px), var(--icon-button-color) 0);mask:radial-gradient(farthest-side, #0000 calc(100% - 2px), var(--icon-button-color) 0);animation:l13 1s infinite linear}.btn_loader.sc-ir-button{width:15px;height:10px;--c:no-repeat linear-gradient(#ffffff 0 0);background:var(--c) 0% 50%, var(--c) 50% 50%, var(--c) 100% 50%;background-size:20% 100%;animation:l1 1s infinite linear}@keyframes l13{100%{transform:rotate(1turn)}}@keyframes l1{0%{background-size:20% 100%, 20% 100%, 20% 100%}33%{background-size:20% 10%, 20% 100%, 20% 100%}50%{background-size:20% 100%, 20% 10%, 20% 100%}66%{background-size:20% 100%, 20% 100%, 20% 10%}100%{background-size:20% 100%, 20% 100%, 20% 100%}}@keyframes bounce{0%,100%{transform:scale(1);animation-timing-function:cubic-bezier(0.8, 0, 1, 1)}50%{transform:scale(1.2);animation-timing-function:cubic-bezier(0, 0, 0.2, 1)}}@keyframes ping{75%,100%{transform:scale(1.2)}}@keyframes rotation{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}`;

const IrButton = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.clickHandler = index.createEvent(this, "clickHandler");
    }
    /**
     * The name of the button, used for identification purposes.
     */
    name;
    /**
     * The text content displayed inside the button.
     */
    text;
    /**
     * The color theme of the button.
     */
    btn_color = 'primary';
    /**
     * The size of the button.
     */
    size = 'md';
    /**
     * The size of the text inside the button.
     */
    textSize = 'md';
    /**
     * Whether the button should expand to the full width of its container.
     */
    btn_block = true;
    /**
     * Disables the button when set to true.
     */
    btn_disabled = false;
    /**
     * The button type attribute (`button`, `submit`, or `reset`).
     */
    btn_type = 'button';
    /**
     * Displays a loading indicator when true and disables the button.
     */
    isLoading = false;
    /**
     * Additional custom class names for the button.
     */
    btn_styles;
    /**
     * A unique identifier for the button instance.
     */
    btn_id = v4.v4();
    /**
     * Visual variant of the button: either standard (`default`) or icon-only (`icon`).
     */
    variant = 'default';
    /**
     * The name of the icon to display.
     */
    icon_name;
    /**
     * If true, applies a visible background when hovered.
     */
    visibleBackgroundOnHover = false;
    /**
     * Position of the icon relative to the button text.
     */
    iconPosition = 'left';
    /**
     * Custom style object for the icon.
     */
    icon_style;
    /**
     * Custom inline styles for the button element.
     */
    btnStyle;
    /**
     * Custom inline styles for the label/text inside the button.
     */
    labelStyle;
    /**
     * If true, renders the text property as raw HTML inside the button.
     */
    renderContentAsHtml = false;
    /**
     * Emits a custom click event when the button is clicked.
     */
    clickHandler;
    buttonEl;
    handleButtonAnimation(e) {
        if (!this.buttonEl || e.detail !== this.btn_id) {
            return;
        }
        e.stopImmediatePropagation();
        e.stopPropagation();
        this.buttonEl.classList.remove('bounce-3');
        this.buttonEl.classList.add('bounce-3');
    }
    /**
     * Triggers a bounce animation on the button.
     */
    async bounce() {
        this.buttonEl.classList.remove('bounce-3');
        this.buttonEl.classList.add('bounce-3');
    }
    render() {
        const disabled = this.btn_disabled || this.isLoading;
        if (this.variant === 'icon') {
            return (index.h("button", { id: this.btn_id, class: `icon-button ${this.btn_styles} ${this.visibleBackgroundOnHover ? 'hovered_bg' : ''}`, ref: el => (this.buttonEl = el), onClick: () => this.clickHandler.emit(), type: this.btn_type, disabled: disabled }, this.isLoading ? index.h("span", { class: "icon-loader" }) : index.h("ir-icons", { class: 'm-0 p-0', name: this.icon_name })));
        }
        let blockClass = this.btn_block ? 'btn-block' : '';
        return (index.h("button", { id: this.btn_id, ref: el => (this.buttonEl = el), onClick: () => this.clickHandler.emit(), class: `btn btn-${this.btn_color} ${this.btn_styles} ir-button-class  btn-${this.size} text-${this.textSize} ${blockClass}`, type: this.btn_type, style: this.btnStyle, disabled: disabled }, this.icon_name && this.iconPosition === 'left' && index.h("ir-icons", { name: this.icon_name, style: this.icon_style }), this.text &&
            (this.renderContentAsHtml ? (index.h("span", { class: "button-text m-0", innerHTML: this.text, style: this.labelStyle })) : (index.h("span", { style: this.labelStyle, class: "button-text m-0" }, this.text))), this.isLoading ? index.h("div", { class: "btn_loader m-0 p-0" }) : this.iconPosition === 'right' && index.h("ir-icons", { style: this.icon_style, name: this.icon_name })));
    }
};
IrButton.style = irButtonCss();

const onlineResources = [
    // {
    //   isJS: true,
    //   link: "https://x.igloorooms.com/manage/micro/app-assets/required/assets/scripts/jquery.min.js",
    // },
    {
        isCSS: true,
        link: 'https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i%7CQuicksand:300,400,500,700',
    },
    {
        isCSS: true,
        link: 'https://x.igloorooms.com/app-assets/css/bootstrap.css',
    },
    {
        isCSS: true,
        link: 'https://x.igloorooms.com/app-assets/css/bootstrap-extended.css',
    },
    { isCSS: true, link: 'https://x.igloorooms.com/app-assets/css/colors.css' },
    {
        isCSS: true,
        link: 'https://x.igloorooms.com/app-assets/css/core/menu/menu-types/horizontal-menu.css',
    },
    {
        isCSS: true,
        link: 'https://x.igloorooms.com/app-assets/css/core/colors/palette-gradient.css',
    },
    {
        isCSS: true,
        link: 'https://x.igloorooms.com/app-assets/css/components.css',
    },
    { isCSS: true, link: 'https://x.igloorooms.com/assets/css/style.css' },
    {
        isCSS: true,
        link: 'https://x.igloorooms.com/app-assets/vendors/css/forms/icheck/icheck.css',
    },
    {
        isCSS: true,
        link: 'https://x.igloorooms.com/app-assets/vendors/css/forms/icheck/custom.css',
    },
    {
        isCSS: true,
        link: 'https://x.igloorooms.com/app-assets/css/pages/login-register.css',
    },
    // {
    //   isCSS: true,
    //   link: 'https://x.igloorooms.com/manage/micro/app-assets/required/assets/scripts/daterangepicker/daterangepicker.css',
    // },
    // {
    //   isJS: true,
    //   link: "https://x.igloorooms.com/manage/micro/app-assets/required/assets/scripts/daterangepicker/moment.min.js",
    // },
    // {
    //   isJS: true,
    //   link: "https://x.igloorooms.com/manage/micro/app-assets/required/assets/scripts/daterangepicker/daterangepicker.js",
    // },
];

const appCss = () => `@layer wa-native,wa-base,wa-utilities,wa-color-palette,wa-color-variant,wa-theme,wa-theme-dimension,wa-theme-overrides; @layer wa-base{wa-page :is(*,*:after,*:before){scroll-margin-top:var(--scroll-margin-top)}wa-page[view='desktop'] [data-toggle-nav]{display:none}wa-page[view='mobile'] .wa-desktop-only,wa-page[view='desktop'] .wa-mobile-only{display:none !important}}@layer wa-native,wa-base,wa-utilities,wa-color-palette,wa-color-variant,wa-theme,wa-theme-dimension,wa-theme-overrides; @layer wa-base{wa-page :is(*,*:after,*:before){scroll-margin-top:var(--scroll-margin-top)}wa-page[view='desktop'] [data-toggle-nav]{display:none}wa-page[view='mobile'] .wa-desktop-only,wa-page[view='desktop'] .wa-mobile-only{display:none !important}}@layer wa-color-variant{:where(:root),.wa-brand-blue{--wa-color-brand-95:var(--wa-color-blue-95);--wa-color-brand-90:var(--wa-color-blue-90);--wa-color-brand-80:var(--wa-color-blue-80);--wa-color-brand-70:var(--wa-color-blue-70);--wa-color-brand-60:var(--wa-color-blue-60);--wa-color-brand-50:var(--wa-color-blue-50);--wa-color-brand-40:var(--wa-color-blue-40);--wa-color-brand-30:var(--wa-color-blue-30);--wa-color-brand-20:var(--wa-color-blue-20);--wa-color-brand-10:var(--wa-color-blue-10);--wa-color-brand-05:var(--wa-color-blue-05);--wa-color-brand:var(--wa-color-blue);--wa-color-brand-on:var(--wa-color-blue-on)}.wa-brand-red{--wa-color-brand-95:var(--wa-color-red-95);--wa-color-brand-90:var(--wa-color-red-90);--wa-color-brand-80:var(--wa-color-red-80);--wa-color-brand-70:var(--wa-color-red-70);--wa-color-brand-60:var(--wa-color-red-60);--wa-color-brand-50:var(--wa-color-red-50);--wa-color-brand-40:var(--wa-color-red-40);--wa-color-brand-30:var(--wa-color-red-30);--wa-color-brand-20:var(--wa-color-red-20);--wa-color-brand-10:var(--wa-color-red-10);--wa-color-brand-05:var(--wa-color-red-05);--wa-color-brand:var(--wa-color-red);--wa-color-brand-on:var(--wa-color-red-on)}.wa-brand-orange{--wa-color-brand-95:var(--wa-color-orange-95);--wa-color-brand-90:var(--wa-color-orange-90);--wa-color-brand-80:var(--wa-color-orange-80);--wa-color-brand-70:var(--wa-color-orange-70);--wa-color-brand-60:var(--wa-color-orange-60);--wa-color-brand-50:var(--wa-color-orange-50);--wa-color-brand-40:var(--wa-color-orange-40);--wa-color-brand-30:var(--wa-color-orange-30);--wa-color-brand-20:var(--wa-color-orange-20);--wa-color-brand-10:var(--wa-color-orange-10);--wa-color-brand-05:var(--wa-color-orange-05);--wa-color-brand:var(--wa-color-orange);--wa-color-brand-on:var(--wa-color-orange-on)}.wa-brand-yellow{--wa-color-brand-95:var(--wa-color-yellow-95);--wa-color-brand-90:var(--wa-color-yellow-90);--wa-color-brand-80:var(--wa-color-yellow-80);--wa-color-brand-70:var(--wa-color-yellow-70);--wa-color-brand-60:var(--wa-color-yellow-60);--wa-color-brand-50:var(--wa-color-yellow-50);--wa-color-brand-40:var(--wa-color-yellow-40);--wa-color-brand-30:var(--wa-color-yellow-30);--wa-color-brand-20:var(--wa-color-yellow-20);--wa-color-brand-10:var(--wa-color-yellow-10);--wa-color-brand-05:var(--wa-color-yellow-05);--wa-color-brand:var(--wa-color-yellow);--wa-color-brand-on:var(--wa-color-yellow-on)}.wa-brand-green{--wa-color-brand-95:var(--wa-color-green-95);--wa-color-brand-90:var(--wa-color-green-90);--wa-color-brand-80:var(--wa-color-green-80);--wa-color-brand-70:var(--wa-color-green-70);--wa-color-brand-60:var(--wa-color-green-60);--wa-color-brand-50:var(--wa-color-green-50);--wa-color-brand-40:var(--wa-color-green-40);--wa-color-brand-30:var(--wa-color-green-30);--wa-color-brand-20:var(--wa-color-green-20);--wa-color-brand-10:var(--wa-color-green-10);--wa-color-brand-05:var(--wa-color-green-05);--wa-color-brand:var(--wa-color-green);--wa-color-brand-on:var(--wa-color-green-on)}.wa-brand-cyan{--wa-color-brand-95:var(--wa-color-cyan-95);--wa-color-brand-90:var(--wa-color-cyan-90);--wa-color-brand-80:var(--wa-color-cyan-80);--wa-color-brand-70:var(--wa-color-cyan-70);--wa-color-brand-60:var(--wa-color-cyan-60);--wa-color-brand-50:var(--wa-color-cyan-50);--wa-color-brand-40:var(--wa-color-cyan-40);--wa-color-brand-30:var(--wa-color-cyan-30);--wa-color-brand-20:var(--wa-color-cyan-20);--wa-color-brand-10:var(--wa-color-cyan-10);--wa-color-brand-05:var(--wa-color-cyan-05);--wa-color-brand:var(--wa-color-cyan);--wa-color-brand-on:var(--wa-color-cyan-on)}.wa-brand-indigo{--wa-color-brand-95:var(--wa-color-indigo-95);--wa-color-brand-90:var(--wa-color-indigo-90);--wa-color-brand-80:var(--wa-color-indigo-80);--wa-color-brand-70:var(--wa-color-indigo-70);--wa-color-brand-60:var(--wa-color-indigo-60);--wa-color-brand-50:var(--wa-color-indigo-50);--wa-color-brand-40:var(--wa-color-indigo-40);--wa-color-brand-30:var(--wa-color-indigo-30);--wa-color-brand-20:var(--wa-color-indigo-20);--wa-color-brand-10:var(--wa-color-indigo-10);--wa-color-brand-05:var(--wa-color-indigo-05);--wa-color-brand:var(--wa-color-indigo);--wa-color-brand-on:var(--wa-color-indigo-on)}.wa-brand-purple{--wa-color-brand-95:var(--wa-color-purple-95);--wa-color-brand-90:var(--wa-color-purple-90);--wa-color-brand-80:var(--wa-color-purple-80);--wa-color-brand-70:var(--wa-color-purple-70);--wa-color-brand-60:var(--wa-color-purple-60);--wa-color-brand-50:var(--wa-color-purple-50);--wa-color-brand-40:var(--wa-color-purple-40);--wa-color-brand-30:var(--wa-color-purple-30);--wa-color-brand-20:var(--wa-color-purple-20);--wa-color-brand-10:var(--wa-color-purple-10);--wa-color-brand-05:var(--wa-color-purple-05);--wa-color-brand:var(--wa-color-purple);--wa-color-brand-on:var(--wa-color-purple-on)}.wa-brand-pink{--wa-color-brand-95:var(--wa-color-pink-95);--wa-color-brand-90:var(--wa-color-pink-90);--wa-color-brand-80:var(--wa-color-pink-80);--wa-color-brand-70:var(--wa-color-pink-70);--wa-color-brand-60:var(--wa-color-pink-60);--wa-color-brand-50:var(--wa-color-pink-50);--wa-color-brand-40:var(--wa-color-pink-40);--wa-color-brand-30:var(--wa-color-pink-30);--wa-color-brand-20:var(--wa-color-pink-20);--wa-color-brand-10:var(--wa-color-pink-10);--wa-color-brand-05:var(--wa-color-pink-05);--wa-color-brand:var(--wa-color-pink);--wa-color-brand-on:var(--wa-color-pink-on)}.wa-brand-gray{--wa-color-brand-95:var(--wa-color-gray-95);--wa-color-brand-90:var(--wa-color-gray-90);--wa-color-brand-80:var(--wa-color-gray-80);--wa-color-brand-70:var(--wa-color-gray-70);--wa-color-brand-60:var(--wa-color-gray-60);--wa-color-brand-50:var(--wa-color-gray-50);--wa-color-brand-40:var(--wa-color-gray-40);--wa-color-brand-30:var(--wa-color-gray-30);--wa-color-brand-20:var(--wa-color-gray-20);--wa-color-brand-10:var(--wa-color-gray-10);--wa-color-brand-05:var(--wa-color-gray-05);--wa-color-brand:var(--wa-color-gray);--wa-color-brand-on:var(--wa-color-gray-on)}}@layer wa-color-variant{:where(:root),.wa-neutral-gray{--wa-color-neutral-95:var(--wa-color-gray-95);--wa-color-neutral-90:var(--wa-color-gray-90);--wa-color-neutral-80:var(--wa-color-gray-80);--wa-color-neutral-70:var(--wa-color-gray-70);--wa-color-neutral-60:var(--wa-color-gray-60);--wa-color-neutral-50:var(--wa-color-gray-50);--wa-color-neutral-40:var(--wa-color-gray-40);--wa-color-neutral-30:var(--wa-color-gray-30);--wa-color-neutral-20:var(--wa-color-gray-20);--wa-color-neutral-10:var(--wa-color-gray-10);--wa-color-neutral-05:var(--wa-color-gray-05);--wa-color-neutral:var(--wa-color-gray);--wa-color-neutral-on:var(--wa-color-gray-on)}.wa-neutral-red{--wa-color-neutral-95:var(--wa-color-red-95);--wa-color-neutral-90:var(--wa-color-red-90);--wa-color-neutral-80:var(--wa-color-red-80);--wa-color-neutral-70:var(--wa-color-red-70);--wa-color-neutral-60:var(--wa-color-red-60);--wa-color-neutral-50:var(--wa-color-red-50);--wa-color-neutral-40:var(--wa-color-red-40);--wa-color-neutral-30:var(--wa-color-red-30);--wa-color-neutral-20:var(--wa-color-red-20);--wa-color-neutral-10:var(--wa-color-red-10);--wa-color-neutral-05:var(--wa-color-red-05);--wa-color-neutral:var(--wa-color-red);--wa-color-neutral-on:var(--wa-color-red-on)}.wa-neutral-orange{--wa-color-neutral-95:var(--wa-color-orange-95);--wa-color-neutral-90:var(--wa-color-orange-90);--wa-color-neutral-80:var(--wa-color-orange-80);--wa-color-neutral-70:var(--wa-color-orange-70);--wa-color-neutral-60:var(--wa-color-orange-60);--wa-color-neutral-50:var(--wa-color-orange-50);--wa-color-neutral-40:var(--wa-color-orange-40);--wa-color-neutral-30:var(--wa-color-orange-30);--wa-color-neutral-20:var(--wa-color-orange-20);--wa-color-neutral-10:var(--wa-color-orange-10);--wa-color-neutral-05:var(--wa-color-orange-05);--wa-color-neutral:var(--wa-color-orange);--wa-color-neutral-on:var(--wa-color-orange-on)}.wa-neutral-yellow{--wa-color-neutral-95:var(--wa-color-yellow-95);--wa-color-neutral-90:var(--wa-color-yellow-90);--wa-color-neutral-80:var(--wa-color-yellow-80);--wa-color-neutral-70:var(--wa-color-yellow-70);--wa-color-neutral-60:var(--wa-color-yellow-60);--wa-color-neutral-50:var(--wa-color-yellow-50);--wa-color-neutral-40:var(--wa-color-yellow-40);--wa-color-neutral-30:var(--wa-color-yellow-30);--wa-color-neutral-20:var(--wa-color-yellow-20);--wa-color-neutral-10:var(--wa-color-yellow-10);--wa-color-neutral-05:var(--wa-color-yellow-05);--wa-color-neutral:var(--wa-color-yellow);--wa-color-neutral-on:var(--wa-color-yellow-on)}.wa-neutral-green{--wa-color-neutral-95:var(--wa-color-green-95);--wa-color-neutral-90:var(--wa-color-green-90);--wa-color-neutral-80:var(--wa-color-green-80);--wa-color-neutral-70:var(--wa-color-green-70);--wa-color-neutral-60:var(--wa-color-green-60);--wa-color-neutral-50:var(--wa-color-green-50);--wa-color-neutral-40:var(--wa-color-green-40);--wa-color-neutral-30:var(--wa-color-green-30);--wa-color-neutral-20:var(--wa-color-green-20);--wa-color-neutral-10:var(--wa-color-green-10);--wa-color-neutral-05:var(--wa-color-green-05);--wa-color-neutral:var(--wa-color-green);--wa-color-neutral-on:var(--wa-color-green-on)}.wa-neutral-cyan{--wa-color-neutral-95:var(--wa-color-cyan-95);--wa-color-neutral-90:var(--wa-color-cyan-90);--wa-color-neutral-80:var(--wa-color-cyan-80);--wa-color-neutral-70:var(--wa-color-cyan-70);--wa-color-neutral-60:var(--wa-color-cyan-60);--wa-color-neutral-50:var(--wa-color-cyan-50);--wa-color-neutral-40:var(--wa-color-cyan-40);--wa-color-neutral-30:var(--wa-color-cyan-30);--wa-color-neutral-20:var(--wa-color-cyan-20);--wa-color-neutral-10:var(--wa-color-cyan-10);--wa-color-neutral-05:var(--wa-color-cyan-05);--wa-color-neutral:var(--wa-color-cyan);--wa-color-neutral-on:var(--wa-color-cyan-on)}.wa-neutral-blue{--wa-color-neutral-95:var(--wa-color-blue-95);--wa-color-neutral-90:var(--wa-color-blue-90);--wa-color-neutral-80:var(--wa-color-blue-80);--wa-color-neutral-70:var(--wa-color-blue-70);--wa-color-neutral-60:var(--wa-color-blue-60);--wa-color-neutral-50:var(--wa-color-blue-50);--wa-color-neutral-40:var(--wa-color-blue-40);--wa-color-neutral-30:var(--wa-color-blue-30);--wa-color-neutral-20:var(--wa-color-blue-20);--wa-color-neutral-10:var(--wa-color-blue-10);--wa-color-neutral-05:var(--wa-color-blue-05);--wa-color-neutral:var(--wa-color-blue);--wa-color-neutral-on:var(--wa-color-blue-on)}.wa-neutral-indigo{--wa-color-neutral-95:var(--wa-color-indigo-95);--wa-color-neutral-90:var(--wa-color-indigo-90);--wa-color-neutral-80:var(--wa-color-indigo-80);--wa-color-neutral-70:var(--wa-color-indigo-70);--wa-color-neutral-60:var(--wa-color-indigo-60);--wa-color-neutral-50:var(--wa-color-indigo-50);--wa-color-neutral-40:var(--wa-color-indigo-40);--wa-color-neutral-30:var(--wa-color-indigo-30);--wa-color-neutral-20:var(--wa-color-indigo-20);--wa-color-neutral-10:var(--wa-color-indigo-10);--wa-color-neutral-05:var(--wa-color-indigo-05);--wa-color-neutral:var(--wa-color-indigo);--wa-color-neutral-on:var(--wa-color-indigo-on)}.wa-neutral-purple{--wa-color-neutral-95:var(--wa-color-purple-95);--wa-color-neutral-90:var(--wa-color-purple-90);--wa-color-neutral-80:var(--wa-color-purple-80);--wa-color-neutral-70:var(--wa-color-purple-70);--wa-color-neutral-60:var(--wa-color-purple-60);--wa-color-neutral-50:var(--wa-color-purple-50);--wa-color-neutral-40:var(--wa-color-purple-40);--wa-color-neutral-30:var(--wa-color-purple-30);--wa-color-neutral-20:var(--wa-color-purple-20);--wa-color-neutral-10:var(--wa-color-purple-10);--wa-color-neutral-05:var(--wa-color-purple-05);--wa-color-neutral:var(--wa-color-purple);--wa-color-neutral-on:var(--wa-color-purple-on)}.wa-neutral-pink{--wa-color-neutral-95:var(--wa-color-pink-95);--wa-color-neutral-90:var(--wa-color-pink-90);--wa-color-neutral-80:var(--wa-color-pink-80);--wa-color-neutral-70:var(--wa-color-pink-70);--wa-color-neutral-60:var(--wa-color-pink-60);--wa-color-neutral-50:var(--wa-color-pink-50);--wa-color-neutral-40:var(--wa-color-pink-40);--wa-color-neutral-30:var(--wa-color-pink-30);--wa-color-neutral-20:var(--wa-color-pink-20);--wa-color-neutral-10:var(--wa-color-pink-10);--wa-color-neutral-05:var(--wa-color-pink-05);--wa-color-neutral:var(--wa-color-pink);--wa-color-neutral-on:var(--wa-color-pink-on)}}@layer wa-color-variant{:where(:root),.wa-success-green{--wa-color-success-95:var(--wa-color-green-95);--wa-color-success-90:var(--wa-color-green-90);--wa-color-success-80:var(--wa-color-green-80);--wa-color-success-70:var(--wa-color-green-70);--wa-color-success-60:var(--wa-color-green-60);--wa-color-success-50:var(--wa-color-green-50);--wa-color-success-40:var(--wa-color-green-40);--wa-color-success-30:var(--wa-color-green-30);--wa-color-success-20:var(--wa-color-green-20);--wa-color-success-10:var(--wa-color-green-10);--wa-color-success-05:var(--wa-color-green-05);--wa-color-success:var(--wa-color-green);--wa-color-success-on:var(--wa-color-green-on)}.wa-success-red{--wa-color-success-95:var(--wa-color-red-95);--wa-color-success-90:var(--wa-color-red-90);--wa-color-success-80:var(--wa-color-red-80);--wa-color-success-70:var(--wa-color-red-70);--wa-color-success-60:var(--wa-color-red-60);--wa-color-success-50:var(--wa-color-red-50);--wa-color-success-40:var(--wa-color-red-40);--wa-color-success-30:var(--wa-color-red-30);--wa-color-success-20:var(--wa-color-red-20);--wa-color-success-10:var(--wa-color-red-10);--wa-color-success-05:var(--wa-color-red-05);--wa-color-success:var(--wa-color-red);--wa-color-success-on:var(--wa-color-red-on)}.wa-success-orange{--wa-color-success-95:var(--wa-color-orange-95);--wa-color-success-90:var(--wa-color-orange-90);--wa-color-success-80:var(--wa-color-orange-80);--wa-color-success-70:var(--wa-color-orange-70);--wa-color-success-60:var(--wa-color-orange-60);--wa-color-success-50:var(--wa-color-orange-50);--wa-color-success-40:var(--wa-color-orange-40);--wa-color-success-30:var(--wa-color-orange-30);--wa-color-success-20:var(--wa-color-orange-20);--wa-color-success-10:var(--wa-color-orange-10);--wa-color-success-05:var(--wa-color-orange-05);--wa-color-success:var(--wa-color-orange);--wa-color-success-on:var(--wa-color-orange-on)}.wa-success-yellow{--wa-color-success-95:var(--wa-color-yellow-95);--wa-color-success-90:var(--wa-color-yellow-90);--wa-color-success-80:var(--wa-color-yellow-80);--wa-color-success-70:var(--wa-color-yellow-70);--wa-color-success-60:var(--wa-color-yellow-60);--wa-color-success-50:var(--wa-color-yellow-50);--wa-color-success-40:var(--wa-color-yellow-40);--wa-color-success-30:var(--wa-color-yellow-30);--wa-color-success-20:var(--wa-color-yellow-20);--wa-color-success-10:var(--wa-color-yellow-10);--wa-color-success-05:var(--wa-color-yellow-05);--wa-color-success:var(--wa-color-yellow);--wa-color-success-on:var(--wa-color-yellow-on)}.wa-success-cyan{--wa-color-success-95:var(--wa-color-cyan-95);--wa-color-success-90:var(--wa-color-cyan-90);--wa-color-success-80:var(--wa-color-cyan-80);--wa-color-success-70:var(--wa-color-cyan-70);--wa-color-success-60:var(--wa-color-cyan-60);--wa-color-success-50:var(--wa-color-cyan-50);--wa-color-success-40:var(--wa-color-cyan-40);--wa-color-success-30:var(--wa-color-cyan-30);--wa-color-success-20:var(--wa-color-cyan-20);--wa-color-success-10:var(--wa-color-cyan-10);--wa-color-success-05:var(--wa-color-cyan-05);--wa-color-success:var(--wa-color-cyan);--wa-color-success-on:var(--wa-color-cyan-on)}.wa-success-blue{--wa-color-success-95:var(--wa-color-blue-95);--wa-color-success-90:var(--wa-color-blue-90);--wa-color-success-80:var(--wa-color-blue-80);--wa-color-success-70:var(--wa-color-blue-70);--wa-color-success-60:var(--wa-color-blue-60);--wa-color-success-50:var(--wa-color-blue-50);--wa-color-success-40:var(--wa-color-blue-40);--wa-color-success-30:var(--wa-color-blue-30);--wa-color-success-20:var(--wa-color-blue-20);--wa-color-success-10:var(--wa-color-blue-10);--wa-color-success-05:var(--wa-color-blue-05);--wa-color-success:var(--wa-color-blue);--wa-color-success-on:var(--wa-color-blue-on)}.wa-success-indigo{--wa-color-success-95:var(--wa-color-indigo-95);--wa-color-success-90:var(--wa-color-indigo-90);--wa-color-success-80:var(--wa-color-indigo-80);--wa-color-success-70:var(--wa-color-indigo-70);--wa-color-success-60:var(--wa-color-indigo-60);--wa-color-success-50:var(--wa-color-indigo-50);--wa-color-success-40:var(--wa-color-indigo-40);--wa-color-success-30:var(--wa-color-indigo-30);--wa-color-success-20:var(--wa-color-indigo-20);--wa-color-success-10:var(--wa-color-indigo-10);--wa-color-success-05:var(--wa-color-indigo-05);--wa-color-success:var(--wa-color-indigo);--wa-color-success-on:var(--wa-color-indigo-on)}.wa-success-purple{--wa-color-success-95:var(--wa-color-purple-95);--wa-color-success-90:var(--wa-color-purple-90);--wa-color-success-80:var(--wa-color-purple-80);--wa-color-success-70:var(--wa-color-purple-70);--wa-color-success-60:var(--wa-color-purple-60);--wa-color-success-50:var(--wa-color-purple-50);--wa-color-success-40:var(--wa-color-purple-40);--wa-color-success-30:var(--wa-color-purple-30);--wa-color-success-20:var(--wa-color-purple-20);--wa-color-success-10:var(--wa-color-purple-10);--wa-color-success-05:var(--wa-color-purple-05);--wa-color-success:var(--wa-color-purple);--wa-color-success-on:var(--wa-color-purple-on)}.wa-success-pink{--wa-color-success-95:var(--wa-color-pink-95);--wa-color-success-90:var(--wa-color-pink-90);--wa-color-success-80:var(--wa-color-pink-80);--wa-color-success-70:var(--wa-color-pink-70);--wa-color-success-60:var(--wa-color-pink-60);--wa-color-success-50:var(--wa-color-pink-50);--wa-color-success-40:var(--wa-color-pink-40);--wa-color-success-30:var(--wa-color-pink-30);--wa-color-success-20:var(--wa-color-pink-20);--wa-color-success-10:var(--wa-color-pink-10);--wa-color-success-05:var(--wa-color-pink-05);--wa-color-success:var(--wa-color-pink);--wa-color-success-on:var(--wa-color-pink-on)}.wa-success-gray{--wa-color-success-95:var(--wa-color-gray-95);--wa-color-success-90:var(--wa-color-gray-90);--wa-color-success-80:var(--wa-color-gray-80);--wa-color-success-70:var(--wa-color-gray-70);--wa-color-success-60:var(--wa-color-gray-60);--wa-color-success-50:var(--wa-color-gray-50);--wa-color-success-40:var(--wa-color-gray-40);--wa-color-success-30:var(--wa-color-gray-30);--wa-color-success-20:var(--wa-color-gray-20);--wa-color-success-10:var(--wa-color-gray-10);--wa-color-success-05:var(--wa-color-gray-05);--wa-color-success:var(--wa-color-gray);--wa-color-success-on:var(--wa-color-gray-on)}}@layer wa-color-variant{:where(:root),.wa-warning-yellow{--wa-color-warning-95:var(--wa-color-yellow-95);--wa-color-warning-90:var(--wa-color-yellow-90);--wa-color-warning-80:var(--wa-color-yellow-80);--wa-color-warning-70:var(--wa-color-yellow-70);--wa-color-warning-60:var(--wa-color-yellow-60);--wa-color-warning-50:var(--wa-color-yellow-50);--wa-color-warning-40:var(--wa-color-yellow-40);--wa-color-warning-30:var(--wa-color-yellow-30);--wa-color-warning-20:var(--wa-color-yellow-20);--wa-color-warning-10:var(--wa-color-yellow-10);--wa-color-warning-05:var(--wa-color-yellow-05);--wa-color-warning:var(--wa-color-yellow);--wa-color-warning-on:var(--wa-color-yellow-on)}.wa-warning-red{--wa-color-warning-95:var(--wa-color-red-95);--wa-color-warning-90:var(--wa-color-red-90);--wa-color-warning-80:var(--wa-color-red-80);--wa-color-warning-70:var(--wa-color-red-70);--wa-color-warning-60:var(--wa-color-red-60);--wa-color-warning-50:var(--wa-color-red-50);--wa-color-warning-40:var(--wa-color-red-40);--wa-color-warning-30:var(--wa-color-red-30);--wa-color-warning-20:var(--wa-color-red-20);--wa-color-warning-10:var(--wa-color-red-10);--wa-color-warning-05:var(--wa-color-red-05);--wa-color-warning:var(--wa-color-red);--wa-color-warning-on:var(--wa-color-red-on)}.wa-warning-orange{--wa-color-warning-95:var(--wa-color-orange-95);--wa-color-warning-90:var(--wa-color-orange-90);--wa-color-warning-80:var(--wa-color-orange-80);--wa-color-warning-70:var(--wa-color-orange-70);--wa-color-warning-60:var(--wa-color-orange-60);--wa-color-warning-50:var(--wa-color-orange-50);--wa-color-warning-40:var(--wa-color-orange-40);--wa-color-warning-30:var(--wa-color-orange-30);--wa-color-warning-20:var(--wa-color-orange-20);--wa-color-warning-10:var(--wa-color-orange-10);--wa-color-warning-05:var(--wa-color-orange-05);--wa-color-warning:var(--wa-color-orange);--wa-color-warning-on:var(--wa-color-orange-on)}.wa-warning-green{--wa-color-warning-95:var(--wa-color-green-95);--wa-color-warning-90:var(--wa-color-green-90);--wa-color-warning-80:var(--wa-color-green-80);--wa-color-warning-70:var(--wa-color-green-70);--wa-color-warning-60:var(--wa-color-green-60);--wa-color-warning-50:var(--wa-color-green-50);--wa-color-warning-40:var(--wa-color-green-40);--wa-color-warning-30:var(--wa-color-green-30);--wa-color-warning-20:var(--wa-color-green-20);--wa-color-warning-10:var(--wa-color-green-10);--wa-color-warning-05:var(--wa-color-green-05);--wa-color-warning:var(--wa-color-green);--wa-color-warning-on:var(--wa-color-green-on)}.wa-warning-cyan{--wa-color-warning-95:var(--wa-color-cyan-95);--wa-color-warning-90:var(--wa-color-cyan-90);--wa-color-warning-80:var(--wa-color-cyan-80);--wa-color-warning-70:var(--wa-color-cyan-70);--wa-color-warning-60:var(--wa-color-cyan-60);--wa-color-warning-50:var(--wa-color-cyan-50);--wa-color-warning-40:var(--wa-color-cyan-40);--wa-color-warning-30:var(--wa-color-cyan-30);--wa-color-warning-20:var(--wa-color-cyan-20);--wa-color-warning-10:var(--wa-color-cyan-10);--wa-color-warning-05:var(--wa-color-cyan-05);--wa-color-warning:var(--wa-color-cyan);--wa-color-warning-on:var(--wa-color-cyan-on)}.wa-warning-blue{--wa-color-warning-95:var(--wa-color-blue-95);--wa-color-warning-90:var(--wa-color-blue-90);--wa-color-warning-80:var(--wa-color-blue-80);--wa-color-warning-70:var(--wa-color-blue-70);--wa-color-warning-60:var(--wa-color-blue-60);--wa-color-warning-50:var(--wa-color-blue-50);--wa-color-warning-40:var(--wa-color-blue-40);--wa-color-warning-30:var(--wa-color-blue-30);--wa-color-warning-20:var(--wa-color-blue-20);--wa-color-warning-10:var(--wa-color-blue-10);--wa-color-warning-05:var(--wa-color-blue-05);--wa-color-warning:var(--wa-color-blue);--wa-color-warning-on:var(--wa-color-blue-on)}.wa-warning-indigo{--wa-color-warning-95:var(--wa-color-indigo-95);--wa-color-warning-90:var(--wa-color-indigo-90);--wa-color-warning-80:var(--wa-color-indigo-80);--wa-color-warning-70:var(--wa-color-indigo-70);--wa-color-warning-60:var(--wa-color-indigo-60);--wa-color-warning-50:var(--wa-color-indigo-50);--wa-color-warning-40:var(--wa-color-indigo-40);--wa-color-warning-30:var(--wa-color-indigo-30);--wa-color-warning-20:var(--wa-color-indigo-20);--wa-color-warning-10:var(--wa-color-indigo-10);--wa-color-warning-05:var(--wa-color-indigo-05);--wa-color-warning:var(--wa-color-indigo);--wa-color-warning-on:var(--wa-color-indigo-on)}.wa-warning-purple{--wa-color-warning-95:var(--wa-color-purple-95);--wa-color-warning-90:var(--wa-color-purple-90);--wa-color-warning-80:var(--wa-color-purple-80);--wa-color-warning-70:var(--wa-color-purple-70);--wa-color-warning-60:var(--wa-color-purple-60);--wa-color-warning-50:var(--wa-color-purple-50);--wa-color-warning-40:var(--wa-color-purple-40);--wa-color-warning-30:var(--wa-color-purple-30);--wa-color-warning-20:var(--wa-color-purple-20);--wa-color-warning-10:var(--wa-color-purple-10);--wa-color-warning-05:var(--wa-color-purple-05);--wa-color-warning:var(--wa-color-purple);--wa-color-warning-on:var(--wa-color-purple-on)}.wa-warning-pink{--wa-color-warning-95:var(--wa-color-pink-95);--wa-color-warning-90:var(--wa-color-pink-90);--wa-color-warning-80:var(--wa-color-pink-80);--wa-color-warning-70:var(--wa-color-pink-70);--wa-color-warning-60:var(--wa-color-pink-60);--wa-color-warning-50:var(--wa-color-pink-50);--wa-color-warning-40:var(--wa-color-pink-40);--wa-color-warning-30:var(--wa-color-pink-30);--wa-color-warning-20:var(--wa-color-pink-20);--wa-color-warning-10:var(--wa-color-pink-10);--wa-color-warning-05:var(--wa-color-pink-05);--wa-color-warning:var(--wa-color-pink);--wa-color-warning-on:var(--wa-color-pink-on)}.wa-warning-gray{--wa-color-warning-95:var(--wa-color-gray-95);--wa-color-warning-90:var(--wa-color-gray-90);--wa-color-warning-80:var(--wa-color-gray-80);--wa-color-warning-70:var(--wa-color-gray-70);--wa-color-warning-60:var(--wa-color-gray-60);--wa-color-warning-50:var(--wa-color-gray-50);--wa-color-warning-40:var(--wa-color-gray-40);--wa-color-warning-30:var(--wa-color-gray-30);--wa-color-warning-20:var(--wa-color-gray-20);--wa-color-warning-10:var(--wa-color-gray-10);--wa-color-warning-05:var(--wa-color-gray-05);--wa-color-warning:var(--wa-color-gray);--wa-color-warning-on:var(--wa-color-gray-on)}}@layer wa-color-variant{:where(:root),.wa-danger-red{--wa-color-danger-95:var(--wa-color-red-95);--wa-color-danger-90:var(--wa-color-red-90);--wa-color-danger-80:var(--wa-color-red-80);--wa-color-danger-70:var(--wa-color-red-70);--wa-color-danger-60:var(--wa-color-red-60);--wa-color-danger-50:var(--wa-color-red-50);--wa-color-danger-40:var(--wa-color-red-40);--wa-color-danger-30:var(--wa-color-red-30);--wa-color-danger-20:var(--wa-color-red-20);--wa-color-danger-10:var(--wa-color-red-10);--wa-color-danger-05:var(--wa-color-red-05);--wa-color-danger:var(--wa-color-red);--wa-color-danger-on:var(--wa-color-red-on)}.wa-danger-orange{--wa-color-danger-95:var(--wa-color-orange-95);--wa-color-danger-90:var(--wa-color-orange-90);--wa-color-danger-80:var(--wa-color-orange-80);--wa-color-danger-70:var(--wa-color-orange-70);--wa-color-danger-60:var(--wa-color-orange-60);--wa-color-danger-50:var(--wa-color-orange-50);--wa-color-danger-40:var(--wa-color-orange-40);--wa-color-danger-30:var(--wa-color-orange-30);--wa-color-danger-20:var(--wa-color-orange-20);--wa-color-danger-10:var(--wa-color-orange-10);--wa-color-danger-05:var(--wa-color-orange-05);--wa-color-danger:var(--wa-color-orange);--wa-color-danger-on:var(--wa-color-orange-on)}.wa-danger-yellow{--wa-color-danger-95:var(--wa-color-yellow-95);--wa-color-danger-90:var(--wa-color-yellow-90);--wa-color-danger-80:var(--wa-color-yellow-80);--wa-color-danger-70:var(--wa-color-yellow-70);--wa-color-danger-60:var(--wa-color-yellow-60);--wa-color-danger-50:var(--wa-color-yellow-50);--wa-color-danger-40:var(--wa-color-yellow-40);--wa-color-danger-30:var(--wa-color-yellow-30);--wa-color-danger-20:var(--wa-color-yellow-20);--wa-color-danger-10:var(--wa-color-yellow-10);--wa-color-danger-05:var(--wa-color-yellow-05);--wa-color-danger:var(--wa-color-yellow);--wa-color-danger-on:var(--wa-color-yellow-on)}.wa-danger-green{--wa-color-danger-95:var(--wa-color-green-95);--wa-color-danger-90:var(--wa-color-green-90);--wa-color-danger-80:var(--wa-color-green-80);--wa-color-danger-70:var(--wa-color-green-70);--wa-color-danger-60:var(--wa-color-green-60);--wa-color-danger-50:var(--wa-color-green-50);--wa-color-danger-40:var(--wa-color-green-40);--wa-color-danger-30:var(--wa-color-green-30);--wa-color-danger-20:var(--wa-color-green-20);--wa-color-danger-10:var(--wa-color-green-10);--wa-color-danger-05:var(--wa-color-green-05);--wa-color-danger:var(--wa-color-green);--wa-color-danger-on:var(--wa-color-green-on)}.wa-danger-cyan{--wa-color-danger-95:var(--wa-color-cyan-95);--wa-color-danger-90:var(--wa-color-cyan-90);--wa-color-danger-80:var(--wa-color-cyan-80);--wa-color-danger-70:var(--wa-color-cyan-70);--wa-color-danger-60:var(--wa-color-cyan-60);--wa-color-danger-50:var(--wa-color-cyan-50);--wa-color-danger-40:var(--wa-color-cyan-40);--wa-color-danger-30:var(--wa-color-cyan-30);--wa-color-danger-20:var(--wa-color-cyan-20);--wa-color-danger-10:var(--wa-color-cyan-10);--wa-color-danger-05:var(--wa-color-cyan-05);--wa-color-danger:var(--wa-color-cyan);--wa-color-danger-on:var(--wa-color-cyan-on)}.wa-danger-blue{--wa-color-danger-95:var(--wa-color-blue-95);--wa-color-danger-90:var(--wa-color-blue-90);--wa-color-danger-80:var(--wa-color-blue-80);--wa-color-danger-70:var(--wa-color-blue-70);--wa-color-danger-60:var(--wa-color-blue-60);--wa-color-danger-50:var(--wa-color-blue-50);--wa-color-danger-40:var(--wa-color-blue-40);--wa-color-danger-30:var(--wa-color-blue-30);--wa-color-danger-20:var(--wa-color-blue-20);--wa-color-danger-10:var(--wa-color-blue-10);--wa-color-danger-05:var(--wa-color-blue-05);--wa-color-danger:var(--wa-color-blue);--wa-color-danger-on:var(--wa-color-blue-on)}.wa-danger-indigo{--wa-color-danger-95:var(--wa-color-indigo-95);--wa-color-danger-90:var(--wa-color-indigo-90);--wa-color-danger-80:var(--wa-color-indigo-80);--wa-color-danger-70:var(--wa-color-indigo-70);--wa-color-danger-60:var(--wa-color-indigo-60);--wa-color-danger-50:var(--wa-color-indigo-50);--wa-color-danger-40:var(--wa-color-indigo-40);--wa-color-danger-30:var(--wa-color-indigo-30);--wa-color-danger-20:var(--wa-color-indigo-20);--wa-color-danger-10:var(--wa-color-indigo-10);--wa-color-danger-05:var(--wa-color-indigo-05);--wa-color-danger:var(--wa-color-indigo);--wa-color-danger-on:var(--wa-color-indigo-on)}.wa-danger-purple{--wa-color-danger-95:var(--wa-color-purple-95);--wa-color-danger-90:var(--wa-color-purple-90);--wa-color-danger-80:var(--wa-color-purple-80);--wa-color-danger-70:var(--wa-color-purple-70);--wa-color-danger-60:var(--wa-color-purple-60);--wa-color-danger-50:var(--wa-color-purple-50);--wa-color-danger-40:var(--wa-color-purple-40);--wa-color-danger-30:var(--wa-color-purple-30);--wa-color-danger-20:var(--wa-color-purple-20);--wa-color-danger-10:var(--wa-color-purple-10);--wa-color-danger-05:var(--wa-color-purple-05);--wa-color-danger:var(--wa-color-purple);--wa-color-danger-on:var(--wa-color-purple-on)}.wa-danger-pink{--wa-color-danger-95:var(--wa-color-pink-95);--wa-color-danger-90:var(--wa-color-pink-90);--wa-color-danger-80:var(--wa-color-pink-80);--wa-color-danger-70:var(--wa-color-pink-70);--wa-color-danger-60:var(--wa-color-pink-60);--wa-color-danger-50:var(--wa-color-pink-50);--wa-color-danger-40:var(--wa-color-pink-40);--wa-color-danger-30:var(--wa-color-pink-30);--wa-color-danger-20:var(--wa-color-pink-20);--wa-color-danger-10:var(--wa-color-pink-10);--wa-color-danger-05:var(--wa-color-pink-05);--wa-color-danger:var(--wa-color-pink);--wa-color-danger-on:var(--wa-color-pink-on)}.wa-danger-gray{--wa-color-danger-95:var(--wa-color-gray-95);--wa-color-danger-90:var(--wa-color-gray-90);--wa-color-danger-80:var(--wa-color-gray-80);--wa-color-danger-70:var(--wa-color-gray-70);--wa-color-danger-60:var(--wa-color-gray-60);--wa-color-danger-50:var(--wa-color-gray-50);--wa-color-danger-40:var(--wa-color-gray-40);--wa-color-danger-30:var(--wa-color-gray-30);--wa-color-danger-20:var(--wa-color-gray-20);--wa-color-danger-10:var(--wa-color-gray-10);--wa-color-danger-05:var(--wa-color-gray-05);--wa-color-danger:var(--wa-color-gray);--wa-color-danger-on:var(--wa-color-gray-on)}}:where(:root),:host{--wa-color-red-gte-60:calc(100% - (clamp(0, 60 - var(--wa-color-red-key), 1) * 100%));--wa-color-orange-gte-60:calc(100% - (clamp(0, 60 - var(--wa-color-orange-key), 1) * 100%));--wa-color-yellow-gte-60:calc(100% - (clamp(0, 60 - var(--wa-color-yellow-key), 1) * 100%));--wa-color-green-gte-60:calc(100% - (clamp(0, 60 - var(--wa-color-green-key), 1) * 100%));--wa-color-cyan-gte-60:calc(100% - (clamp(0, 60 - var(--wa-color-cyan-key), 1) * 100%));--wa-color-blue-gte-60:calc(100% - (clamp(0, 60 - var(--wa-color-blue-key), 1) * 100%));--wa-color-indigo-gte-60:calc(100% - (clamp(0, 60 - var(--wa-color-indigo-key), 1) * 100%));--wa-color-purple-gte-60:calc(100% - (clamp(0, 60 - var(--wa-color-purple-key), 1) * 100%));--wa-color-pink-gte-60:calc(100% - (clamp(0, 60 - var(--wa-color-pink-key), 1) * 100%));--wa-color-gray-gte-60:calc(100% - (clamp(0, 60 - var(--wa-color-gray-key), 1) * 100%));--wa-color-red-on:color-mix(in oklab, var(--wa-color-red-10) var(--wa-color-red-gte-60), white);--wa-color-orange-on:color-mix(in oklab, var(--wa-color-orange-10) var(--wa-color-orange-gte-60), white);--wa-color-yellow-on:color-mix(in oklab, var(--wa-color-yellow-10) var(--wa-color-yellow-gte-60), white);--wa-color-green-on:color-mix(in oklab, var(--wa-color-green-10) var(--wa-color-green-gte-60), white);--wa-color-cyan-on:color-mix(in oklab, var(--wa-color-cyan-10) var(--wa-color-cyan-gte-60), white);--wa-color-blue-on:color-mix(in oklab, var(--wa-color-blue-10) var(--wa-color-blue-gte-60), white);--wa-color-indigo-on:color-mix(in oklab, var(--wa-color-indigo-10) var(--wa-color-indigo-gte-60), white);--wa-color-purple-on:color-mix(in oklab, var(--wa-color-purple-10) var(--wa-color-purple-gte-60), white);--wa-color-pink-on:color-mix(in oklab, var(--wa-color-pink-10) var(--wa-color-pink-gte-60), white);--wa-color-gray-on:color-mix(in oklab, var(--wa-color-gray-10) var(--wa-color-gray-gte-60), white)}@layer wa-color-palette{:where(:root),.wa-palette-default{--wa-color-red-95:#fff0ef ;--wa-color-red-90:#ffdedc ;--wa-color-red-80:#ffb8b6 ;--wa-color-red-70:#fd8f90 ;--wa-color-red-60:#f3676c ;--wa-color-red-50:#dc3146 ;--wa-color-red-40:#b30532 ;--wa-color-red-30:#8a132c ;--wa-color-red-20:#631323 ;--wa-color-red-10:#3e0913 ;--wa-color-red-05:#2a040b ;--wa-color-red:var(--wa-color-red-50);--wa-color-red-key:50;--wa-color-orange-95:#fff0e6 ;--wa-color-orange-90:#ffdfca ;--wa-color-orange-80:#ffbb94 ;--wa-color-orange-70:#ff9266 ;--wa-color-orange-60:#f46a45 ;--wa-color-orange-50:#cd491c ;--wa-color-orange-40:#9f3501 ;--wa-color-orange-30:#802700 ;--wa-color-orange-20:#601b00 ;--wa-color-orange-10:#3c0d00 ;--wa-color-orange-05:#280600 ;--wa-color-orange:var(--wa-color-orange-60);--wa-color-orange-key:60;--wa-color-yellow-95:#fef3cd ;--wa-color-yellow-90:#ffe495 ;--wa-color-yellow-80:#fac22b ;--wa-color-yellow-70:#ef9d00 ;--wa-color-yellow-60:#da7e00 ;--wa-color-yellow-50:#b45f04 ;--wa-color-yellow-40:#8c4602 ;--wa-color-yellow-30:#6f3601 ;--wa-color-yellow-20:#532600 ;--wa-color-yellow-10:#331600 ;--wa-color-yellow-05:#220c00 ;--wa-color-yellow:var(--wa-color-yellow-80);--wa-color-yellow-key:80;--wa-color-green-95:#e3f9e3 ;--wa-color-green-90:#c2f2c1 ;--wa-color-green-80:#93da98 ;--wa-color-green-70:#5dc36f ;--wa-color-green-60:#00ac49 ;--wa-color-green-50:#00883c ;--wa-color-green-40:#036730 ;--wa-color-green-30:#0a5027 ;--wa-color-green-20:#0a3a1d ;--wa-color-green-10:#052310 ;--wa-color-green-05:#031608 ;--wa-color-green:var(--wa-color-green-60);--wa-color-green-key:60;--wa-color-cyan-95:#e3f6fb ;--wa-color-cyan-90:#c5ecf7 ;--wa-color-cyan-80:#7fd6ec ;--wa-color-cyan-70:#2fbedc ;--wa-color-cyan-60:#00a3c0 ;--wa-color-cyan-50:#078098 ;--wa-color-cyan-40:#026274 ;--wa-color-cyan-30:#014c5b ;--wa-color-cyan-20:#003844 ;--wa-color-cyan-10:#002129 ;--wa-color-cyan-05:#00151b ;--wa-color-cyan:var(--wa-color-cyan-70);--wa-color-cyan-key:70;--wa-color-blue-95:#e8f3ff ;--wa-color-blue-90:#d1e8ff ;--wa-color-blue-80:#9fceff ;--wa-color-blue-70:#6eb3ff ;--wa-color-blue-60:#3e96ff ;--wa-color-blue-50:#0071ec ;--wa-color-blue-40:#0053c0 ;--wa-color-blue-30:#003f9c ;--wa-color-blue-20:#002d77 ;--wa-color-blue-10:#001a4e ;--wa-color-blue-05:#000f35 ;--wa-color-blue:var(--wa-color-blue-50);--wa-color-blue-key:50;--wa-color-indigo-95:#f0f2ff ;--wa-color-indigo-90:#dfe5ff ;--wa-color-indigo-80:#bcc7ff ;--wa-color-indigo-70:#9da9ff ;--wa-color-indigo-60:#808aff ;--wa-color-indigo-50:#6163f2 ;--wa-color-indigo-40:#4945cb ;--wa-color-indigo-30:#3933a7 ;--wa-color-indigo-20:#292381 ;--wa-color-indigo-10:#181255 ;--wa-color-indigo-05:#0d0a3a ;--wa-color-indigo:var(--wa-color-indigo-50);--wa-color-indigo-key:50;--wa-color-purple-95:#f7f0ff ;--wa-color-purple-90:#eedfff ;--wa-color-purple-80:#ddbdff ;--wa-color-purple-70:#ca99ff ;--wa-color-purple-60:#b678f5 ;--wa-color-purple-50:#9951db ;--wa-color-purple-40:#7936b3 ;--wa-color-purple-30:#612692 ;--wa-color-purple-20:#491870 ;--wa-color-purple-10:#2d0b48 ;--wa-color-purple-05:#1e0532 ;--wa-color-purple:var(--wa-color-purple-50);--wa-color-purple-key:50;--wa-color-pink-95:#feeff9 ;--wa-color-pink-90:#feddf0 ;--wa-color-pink-80:#fcb5d8 ;--wa-color-pink-70:#f78dbf ;--wa-color-pink-60:#e66ba3 ;--wa-color-pink-50:#c84382 ;--wa-color-pink-40:#9e2a6c ;--wa-color-pink-30:#7d1e58 ;--wa-color-pink-20:#5e1342 ;--wa-color-pink-10:#3c0828 ;--wa-color-pink-05:#28041a ;--wa-color-pink:var(--wa-color-pink-50);--wa-color-pink-key:50;--wa-color-gray-95:#f1f2f3 ;--wa-color-gray-90:#e4e5e9 ;--wa-color-gray-80:#c7c9d0 ;--wa-color-gray-70:#abaeb9 ;--wa-color-gray-60:#9194a2 ;--wa-color-gray-50:#717584 ;--wa-color-gray-40:#545868 ;--wa-color-gray-30:#424554 ;--wa-color-gray-20:#2f323f ;--wa-color-gray-10:#1b1d26 ;--wa-color-gray-05:#101219 ;--wa-color-gray:var(--wa-color-gray-40);--wa-color-gray-key:40}}@layer wa-theme{:where(:root),.wa-theme-default,.wa-light,.wa-dark .wa-invert,.wa-light .wa-theme-default,.wa-dark .wa-theme-default.wa-invert,.wa-dark .wa-theme-default .wa-invert{color-scheme:light;color:var(--wa-color-text-normal);--wa-color-surface-raised:white;--wa-color-surface-default:white;--wa-color-surface-lowered:var(--wa-color-neutral-95);--wa-color-surface-border:var(--wa-color-neutral-90);--wa-color-text-normal:var(--wa-color-neutral-10);--wa-color-text-quiet:var(--wa-color-neutral-40);--wa-color-text-link:var(--wa-color-brand-40);--wa-color-overlay-modal:color-mix(in oklab, var(--wa-color-neutral-05) 50%, transparent);--wa-color-overlay-inline:color-mix(in oklab, var(--wa-color-neutral-80) 25%, transparent);--wa-color-shadow:color-mix(       in oklab,       var(--wa-color-neutral-05) calc(var(--wa-shadow-blur-scale) * 4% + 8%),       transparent     );--wa-color-focus:var(--wa-color-brand-60);--wa-color-mix-hover:oklch(from currentColor calc(1 - l) c h) 10%;--wa-color-mix-active:var(--wa-color-surface-default) 10%;--wa-color-brand-fill-quiet:var(--wa-color-brand-95);--wa-color-brand-fill-normal:var(--wa-color-brand-90);--wa-color-brand-fill-loud:var(--wa-color-brand-50);--wa-color-brand-border-quiet:var(--wa-color-brand-90);--wa-color-brand-border-normal:var(--wa-color-brand-80);--wa-color-brand-border-loud:var(--wa-color-brand-60);--wa-color-brand-on-quiet:var(--wa-color-brand-40);--wa-color-brand-on-normal:var(--wa-color-brand-30);--wa-color-brand-on-loud:white;--wa-color-success-fill-quiet:var(--wa-color-success-95);--wa-color-success-fill-normal:var(--wa-color-success-90);--wa-color-success-fill-loud:var(--wa-color-success-50);--wa-color-success-border-quiet:var(--wa-color-success-90);--wa-color-success-border-normal:var(--wa-color-success-80);--wa-color-success-border-loud:var(--wa-color-success-60);--wa-color-success-on-quiet:var(--wa-color-success-40);--wa-color-success-on-normal:var(--wa-color-success-30);--wa-color-success-on-loud:white;--wa-color-warning-fill-quiet:var(--wa-color-warning-95);--wa-color-warning-fill-normal:var(--wa-color-warning-90);--wa-color-warning-fill-loud:var(--wa-color-warning-50);--wa-color-warning-border-quiet:var(--wa-color-warning-90);--wa-color-warning-border-normal:var(--wa-color-warning-80);--wa-color-warning-border-loud:var(--wa-color-warning-60);--wa-color-warning-on-quiet:var(--wa-color-warning-40);--wa-color-warning-on-normal:var(--wa-color-warning-30);--wa-color-warning-on-loud:white;--wa-color-danger-fill-quiet:var(--wa-color-danger-95);--wa-color-danger-fill-normal:var(--wa-color-danger-90);--wa-color-danger-fill-loud:var(--wa-color-danger-50);--wa-color-danger-border-quiet:var(--wa-color-danger-90);--wa-color-danger-border-normal:var(--wa-color-danger-80);--wa-color-danger-border-loud:var(--wa-color-danger-60);--wa-color-danger-on-quiet:var(--wa-color-danger-40);--wa-color-danger-on-normal:var(--wa-color-danger-30);--wa-color-danger-on-loud:white;--wa-color-neutral-fill-quiet:var(--wa-color-neutral-95);--wa-color-neutral-fill-normal:var(--wa-color-neutral-90);--wa-color-neutral-fill-loud:var(--wa-color-neutral-20);--wa-color-neutral-border-quiet:var(--wa-color-neutral-90);--wa-color-neutral-border-normal:var(--wa-color-neutral-80);--wa-color-neutral-border-loud:var(--wa-color-neutral-60);--wa-color-neutral-on-quiet:var(--wa-color-neutral-40);--wa-color-neutral-on-normal:var(--wa-color-neutral-30);--wa-color-neutral-on-loud:white;}.wa-dark,.wa-invert,.wa-dark .wa-theme-default,.wa-light .wa-theme-default.wa-invert,.wa-light .wa-theme-default .wa-invert{color-scheme:dark;color:var(--wa-color-text-normal);--wa-color-surface-raised:var(--wa-color-neutral-10);--wa-color-surface-default:var(--wa-color-neutral-05);--wa-color-surface-lowered:color-mix(in oklab, var(--wa-color-surface-default), black 20%);--wa-color-surface-border:var(--wa-color-neutral-20);--wa-color-text-normal:var(--wa-color-neutral-95);--wa-color-text-quiet:var(--wa-color-neutral-60);--wa-color-text-link:var(--wa-color-brand-70);--wa-color-overlay-modal:color-mix(in oklab, black 60%, transparent);--wa-color-overlay-inline:color-mix(in oklab, var(--wa-color-neutral-50) 10%, transparent);--wa-color-shadow:color-mix(       in oklab,       var(--wa-color-surface-lowered) calc(var(--wa-shadow-blur-scale) * 32% + 40%),       transparent     );--wa-color-focus:var(--wa-color-brand-60);--wa-color-mix-hover:oklch(from currentColor calc(1 - l) c h) 20%;--wa-color-mix-active:var(--wa-color-surface-default) 20%;--wa-color-brand-fill-quiet:var(--wa-color-brand-10);--wa-color-brand-fill-normal:var(--wa-color-brand-20);--wa-color-brand-fill-loud:var(--wa-color-brand-50);--wa-color-brand-border-quiet:var(--wa-color-brand-20);--wa-color-brand-border-normal:var(--wa-color-brand-30);--wa-color-brand-border-loud:var(--wa-color-brand-40);--wa-color-brand-on-quiet:var(--wa-color-brand-60);--wa-color-brand-on-normal:var(--wa-color-brand-70);--wa-color-brand-on-loud:white;--wa-color-success-fill-quiet:var(--wa-color-success-10);--wa-color-success-fill-normal:var(--wa-color-success-20);--wa-color-success-fill-loud:var(--wa-color-success-50);--wa-color-success-border-quiet:var(--wa-color-success-20);--wa-color-success-border-normal:var(--wa-color-success-30);--wa-color-success-border-loud:var(--wa-color-success-40);--wa-color-success-on-quiet:var(--wa-color-success-60);--wa-color-success-on-normal:var(--wa-color-success-70);--wa-color-success-on-loud:white;--wa-color-warning-fill-quiet:var(--wa-color-warning-10);--wa-color-warning-fill-normal:var(--wa-color-warning-20);--wa-color-warning-fill-loud:var(--wa-color-warning-50);--wa-color-warning-border-quiet:var(--wa-color-warning-20);--wa-color-warning-border-normal:var(--wa-color-warning-30);--wa-color-warning-border-loud:var(--wa-color-warning-40);--wa-color-warning-on-quiet:var(--wa-color-warning-60);--wa-color-warning-on-normal:var(--wa-color-warning-70);--wa-color-warning-on-loud:white;--wa-color-danger-fill-quiet:var(--wa-color-danger-10);--wa-color-danger-fill-normal:var(--wa-color-danger-20);--wa-color-danger-fill-loud:var(--wa-color-danger-50);--wa-color-danger-border-quiet:var(--wa-color-danger-20);--wa-color-danger-border-normal:var(--wa-color-danger-30);--wa-color-danger-border-loud:var(--wa-color-danger-40);--wa-color-danger-on-quiet:var(--wa-color-danger-60);--wa-color-danger-on-normal:var(--wa-color-danger-70);--wa-color-danger-on-loud:white;--wa-color-neutral-fill-quiet:var(--wa-color-neutral-10);--wa-color-neutral-fill-normal:var(--wa-color-neutral-20);--wa-color-neutral-fill-loud:var(--wa-color-neutral-90);--wa-color-neutral-border-quiet:var(--wa-color-neutral-20);--wa-color-neutral-border-normal:var(--wa-color-neutral-30);--wa-color-neutral-border-loud:var(--wa-color-neutral-40);--wa-color-neutral-on-quiet:var(--wa-color-neutral-60);--wa-color-neutral-on-normal:var(--wa-color-neutral-70);--wa-color-neutral-on-loud:var(--wa-color-neutral-05);}:where(:root),.wa-theme-default,.wa-light,.wa-dark,.wa-invert{font-family:var(--wa-font-family-body);--wa-font-family-body:ui-sans-serif, system-ui, sans-serif;--wa-font-family-heading:var(--wa-font-family-body);--wa-font-family-code:ui-monospace, monospace;--wa-font-family-longform:ui-serif, serif;--wa-font-size-scale:1;--wa-font-size-3xs:round(calc(var(--wa-font-size-2xs) / 1.125), 1px);--wa-font-size-2xs:round(calc(var(--wa-font-size-xs) / 1.125), 1px);--wa-font-size-xs:round(calc(var(--wa-font-size-s) / 1.125), 1px);--wa-font-size-s:round(calc(var(--wa-font-size-m) / 1.125), 1px);--wa-font-size-m:calc(1rem * var(--wa-font-size-scale));--wa-font-size-l:round(calc(var(--wa-font-size-m) * 1.125 * 1.125), 1px);--wa-font-size-xl:round(calc(var(--wa-font-size-l) * 1.125 * 1.125), 1px);--wa-font-size-2xl:round(calc(var(--wa-font-size-xl) * 1.125 * 1.125), 1px);--wa-font-size-3xl:round(calc(var(--wa-font-size-2xl) * 1.125 * 1.125), 1px);--wa-font-size-4xl:round(calc(var(--wa-font-size-3xl) * 1.125 * 1.125), 1px);--wa-font-size-5xl:round(calc(var(--wa-font-size-4xl) * 1.125 * 1.125), 1px);--wa-font-size-smaller:round(calc(1em / 1.125), 1px);--wa-font-size-larger:round(calc(1em * 1.125 * 1.125), 1px);--wa-font-weight-light:300;--wa-font-weight-normal:400;--wa-font-weight-semibold:500;--wa-font-weight-bold:600;--wa-font-weight-body:var(--wa-font-weight-normal);--wa-font-weight-heading:var(--wa-font-weight-bold);--wa-font-weight-code:var(--wa-font-weight-normal);--wa-font-weight-longform:var(--wa-font-weight-normal);--wa-font-weight-action:var(--wa-font-weight-semibold);--wa-line-height-condensed:1.2;--wa-line-height-normal:1.6;--wa-line-height-expanded:2;--wa-link-decoration-default:underline color-mix(in oklab, currentColor 70%, transparent) dotted;--wa-link-decoration-hover:underline;--wa-space-scale:1;--wa-space-3xs:calc(var(--wa-space-scale) * 0.125rem);--wa-space-2xs:calc(var(--wa-space-scale) * 0.25rem);--wa-space-xs:calc(var(--wa-space-scale) * 0.5rem);--wa-space-s:calc(var(--wa-space-scale) * 0.75rem);--wa-space-m:calc(var(--wa-space-scale) * 1rem);--wa-space-l:calc(var(--wa-space-scale) * 1.5rem);--wa-space-xl:calc(var(--wa-space-scale) * 2rem);--wa-space-2xl:calc(var(--wa-space-scale) * 2.5rem);--wa-space-3xl:calc(var(--wa-space-scale) * 3rem);--wa-space-4xl:calc(var(--wa-space-scale) * 4rem);--wa-space-5xl:calc(var(--wa-space-scale) * 5rem);--wa-content-spacing:var(--wa-space-l);--wa-border-style:solid;--wa-border-width-scale:1;--wa-border-width-s:calc(var(--wa-border-width-scale) * 0.0625rem);--wa-border-width-m:calc(var(--wa-border-width-scale) * 0.125rem);--wa-border-width-l:calc(var(--wa-border-width-scale) * 0.1875rem);--wa-border-radius-scale:1;--wa-border-radius-s:calc(var(--wa-border-radius-scale) * 0.1875rem);--wa-border-radius-m:calc(var(--wa-border-radius-scale) * 0.375rem);--wa-border-radius-l:calc(var(--wa-border-radius-scale) * 0.75rem);--wa-border-radius-pill:9999px;--wa-border-radius-circle:50%;--wa-border-radius-square:0px;--wa-focus-ring-style:solid;--wa-focus-ring-width:0.1875rem;--wa-focus-ring:var(--wa-focus-ring-style) var(--wa-focus-ring-width) var(--wa-color-focus);--wa-focus-ring-offset:0.0625rem;--wa-shadow-offset-x-scale:0;--wa-shadow-offset-x-s:calc(var(--wa-shadow-offset-x-scale) * 0.125rem);--wa-shadow-offset-x-m:calc(var(--wa-shadow-offset-x-scale) * 0.25rem);--wa-shadow-offset-x-l:calc(var(--wa-shadow-offset-x-scale) * 0.5rem);--wa-shadow-offset-y-scale:1;--wa-shadow-offset-y-s:calc(var(--wa-shadow-offset-y-scale) * 0.125rem);--wa-shadow-offset-y-m:calc(var(--wa-shadow-offset-y-scale) * 0.25rem);--wa-shadow-offset-y-l:calc(var(--wa-shadow-offset-y-scale) * 0.5rem);--wa-shadow-blur-scale:1;--wa-shadow-blur-s:calc(var(--wa-shadow-blur-scale) * 0.125rem);--wa-shadow-blur-m:calc(var(--wa-shadow-blur-scale) * 0.25rem);--wa-shadow-blur-l:calc(var(--wa-shadow-blur-scale) * 0.5rem);--wa-shadow-spread-scale:-0.5;--wa-shadow-spread-s:calc(var(--wa-shadow-spread-scale) * 0.125rem);--wa-shadow-spread-m:calc(var(--wa-shadow-spread-scale) * 0.25rem);--wa-shadow-spread-l:calc(var(--wa-shadow-spread-scale) * 0.5rem);--wa-shadow-s:var(--wa-shadow-offset-x-s) var(--wa-shadow-offset-y-s) var(--wa-shadow-blur-s)       var(--wa-shadow-spread-s) var(--wa-color-shadow);--wa-shadow-m:var(--wa-shadow-offset-x-m) var(--wa-shadow-offset-y-m) var(--wa-shadow-blur-m)       var(--wa-shadow-spread-m) var(--wa-color-shadow);--wa-shadow-l:var(--wa-shadow-offset-x-l) var(--wa-shadow-offset-y-l) var(--wa-shadow-blur-l)       var(--wa-shadow-spread-l) var(--wa-color-shadow);--wa-transition-easing:ease;--wa-transition-slow:300ms;--wa-transition-normal:150ms;--wa-transition-fast:75ms;--wa-form-control-background-color:var(--wa-color-surface-default);--wa-form-control-border-color:var(--wa-color-neutral-border-loud);--wa-form-control-border-style:var(--wa-border-style);--wa-form-control-border-width:var(--wa-border-width-s);--wa-form-control-border-radius:var(--wa-border-radius-m);--wa-form-control-activated-color:var(--wa-color-brand-fill-loud);--wa-form-control-label-color:var(--wa-color-text-normal);--wa-form-control-label-font-weight:var(--wa-font-weight-semibold);--wa-form-control-label-line-height:var(--wa-line-height-condensed);--wa-form-control-value-color:var(--wa-color-text-normal);--wa-form-control-value-font-weight:var(--wa-font-weight-body);--wa-form-control-value-line-height:var(--wa-line-height-condensed);--wa-form-control-hint-color:var(--wa-color-text-quiet);--wa-form-control-hint-font-weight:var(--wa-font-weight-body);--wa-form-control-hint-line-height:var(--wa-line-height-normal);--wa-form-control-placeholder-color:var(--wa-color-gray-50);--wa-form-control-required-content:'*';--wa-form-control-required-content-color:inherit;--wa-form-control-required-content-offset:0.1em;--wa-form-control-padding-block:0.75em;--wa-form-control-padding-inline:1em;--wa-form-control-height:round(       calc(2 * var(--wa-form-control-padding-block) + 1em * var(--wa-form-control-value-line-height)),       1px     );--wa-form-control-toggle-size:round(1.25em, 1px);--wa-button-transform-hover:none;--wa-button-transform-active:scale(0.9875);--wa-panel-border-style:var(--wa-border-style);--wa-panel-border-width:var(--wa-border-width-s);--wa-panel-border-radius:var(--wa-border-radius-l);--wa-tooltip-arrow-size:0.375rem;--wa-tooltip-background-color:var(--wa-color-text-normal);--wa-tooltip-border-color:var(--wa-tooltip-background-color);--wa-tooltip-border-style:var(--wa-border-style);--wa-tooltip-border-width:var(--wa-border-width-s);--wa-tooltip-border-radius:var(--wa-border-radius-s);--wa-tooltip-content-color:var(--wa-color-surface-default);--wa-tooltip-font-size:var(--wa-font-size-s);--wa-tooltip-line-height:var(--wa-line-height-normal);}:is(html,body):has(wa-page){min-height:100%;padding:0;margin:0}}wa-input[aria-invalid='true']::part(base),wa-textarea[aria-invalid='true']::part(base),wa-select[aria-invalid='true']::part(combobox){border-color:var(--ir-color-border-error, var(--wa-color-danger-border-loud));outline-color:var(--ir-color-border-error, var(--wa-color-danger-border-loud));border-top-width:var(--error-border-width) !important;border-inline-start-width:var(--error-border-width) !important;border-inline-end-width:var(--error-border-width) !important;border-bottom-width:var(--error-border-width) !important}:dir(rtl) .toast-close-button{right:auto;left:-0.3em;float:left}:dir(rtl) #toast-container>div{direction:rtl;padding:15px 50px 15px 15px;background-position:right 15px center}:dir(rtl) #toast-container.toast-top-left,:dir(rtl) #toast-container.toast-bottom-left{left:auto;right:12px}:dir(rtl) #toast-container.toast-top-right,:dir(rtl) #toast-container.toast-bottom-right{right:auto;left:12px}:dir(rtl) .toast-progress{left:auto;right:0}.ir-dialog__footer{display:flex;align-items:center;gap:1rem;justify-content:flex-end;width:100%}.dialog__loader-container{display:flex;flex-direction:column;justify-content:center;align-items:center;height:100%;width:100%;min-height:50px;min-width:31rem}#dialog-overview::part(title){color:var(--wa-color-text-normal);text-align:start}.ir__drawer{text-align:start !important}.ir__drawer::part(header){border-bottom:1px solid var(--wa-color-surface-border);padding-bottom:calc(var(--spacing) / 2);color:var(--wa-color-text-normal);background-color:var(--ir-drawer-background-color, var(--wa-color-surface-default))}.ir__drawer::part(title){text-align:start}.ir__drawer::part(body){background-color:var(--ir-drawer-background-color, var(--wa-color-surface-default));padding:0;padding-inline-start:var(--ir-drawer-padding-inline-start, var(--ir-drawer-padding-left, var(--spacing)));padding-inline-end:var(--ir-drawer-padding-inline-end, var(--ir-drawer-padding-right, var(--spacing)));padding-top:var(--ir-drawer-padding-top, var(--spacing));padding-bottom:var(--ir-drawer-padding-bottom, var(--spacing))}.ir__drawer::part(footer){background-color:var(--ir-drawer-background-color, var(--wa-color-surface-default));padding-top:calc(var(--spacing) / 2);border-top:1px solid var(--wa-color-surface-border)}.ir__drawer-footer{display:flex;align-items:center;gap:1rem;width:100%}.ir__drawer-footer>*{flex:1 1 0%}.drawer__loader-container{display:flex;flex-direction:column;justify-content:center;align-items:center;height:100%;width:100%}.my-custom-style{background:#000;color:white}html:dir(rtl),body:dir(rtl){direction:rtl !important;text-align:start}:root{--ir-color-muted-background:#f2f3f8;--ir-color-loader:rgba(255, 255, 255, 0.2);--error-border-width:2px;--ir-color-border-error:var(--wa-color-danger-border-loud)}.wa-dark{--ir-color-loader:rgba(0, 0, 0, 0.2);--ir-color-muted-background:#12141a;--ir-color-muted-background:#07090d}body{background-color:var(--ir-color-muted-background) !important;color:var(--wa-color-text-normal)}h1,h2,h3,h4,h5,h6{color:var(--wa-color-text-normal) !important}html{font-size:14px !important}.truncate{overflow:hidden !important;text-overflow:ellipsis !important;white-space:nowrap !important}.ir-page__container{display:flex;flex-direction:column;gap:var(--wa-space-l, 1.5rem);padding:var(--wa-space-l);position:relative}.ir-price{font-family:inherit;font-size:1rem;font-weight:800;text-align:end;white-space:nowrap;color:var(--wa-color-text-normal);margin:0;padding:0}.page-title{font-family:var(--wa-font-family-heading);font-weight:var(--wa-font-weight-heading);line-height:var(--wa-line-height-condensed);text-wrap:balance;font-size:var(--wa-font-size-xl);margin:0;padding:0}:root{--wa-form-control-required-content-color:var(--wa-color-danger-border-loud, #f3676c)}.label-on-left{display:grid;gap:var(--wa-space-m)}wa-card::part(base){box-sizing:border-box}@media (min-width: 768px){.label-on-left{align-items:center;grid-template-columns:auto 1fr}.label-on-left wa-switch::part(base),.label-on-left wa-select::part(form-control),.label-on-left wa-select,.label-on-left wa-switch,.label-on-left wa-input,.label-on-left wa-textarea{grid-column:1 / -1;grid-row-end:span 2;display:grid;grid-template-columns:subgrid;gap:0 var(--wa-space-l);align-items:center}.label-on-left wa-switch::part(base){flex-direction:row-reverse}.label-on-left wa-switch::part(base)>*{justify-self:flex-start;justify-content:flex-start}.label-on-left ::part(label){justify-content:flex-end}.label-on-left ::part(hint){grid-column:2}}.ir-preview-print-container{position:fixed;inset:0;opacity:0;pointer-events:none;z-index:-1}.sr-only{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip-path:inset(50%);white-space:nowrap;border-width:0}@media print{body.ir-preview-dialog-print-mode{background:#fff !important}body.ir-preview-dialog-print-mode>*:not(.ir-preview-print-container){display:none !important}body.ir-preview-dialog-print-mode .ir-preview-print-container{opacity:1;pointer-events:auto;position:static;z-index:auto;width:100%;min-height:auto;margin:0 auto;padding:1.5rem;box-sizing:border-box}}@page {margin:0.5in}.ir__field-group{display:flex;width:100%}.ir__field-group>:first-child::part(base),.ir__field-group>:first-child::part(combobox){border-start-end-radius:0;border-end-end-radius:0}.ir__field-group>:first-child{z-index:1}.ir__field-group .--grow{flex:1 1 0%}.ir__field-group>:last-child::part(base),.ir__field-group>:last-child::part(combobox){border-start-start-radius:0;border-end-start-radius:0;border-inline-start-width:0}.ir__field-group>:not(:first-child):not(:last-child)::part(combobox),.ir__field-group>:not(:first-child):not(:last-child)::part(base){border-radius:0;border-inline-start:0}.ir__field-group>:not(:first-child):not(:last-child)[open],.ir__field-group>:not(:first-child):not(:last-child):focus-within,.ir__field-group>:not(:first-child):not(:last-child):focus-visible,.ir__field-group>:last-child[open],.ir__field-group>:last-child:focus-visible,.ir__field-group>:last-child:focus-within{z-index:2}.ir-flip-rtl:dir(rtl){scale:-1 1}`;

const IrCommon = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    extraResources = '';
    disableResourceInjection;
    resources = onlineResources;
    componentWillLoad() {
        this.parseRefs();
    }
    componentDidLoad() {
        this.initializeStyles();
    }
    hrefsChanged() {
        this.parseRefs();
        this.initializeStyles();
    }
    parseRefs() {
        if (this.disableResourceInjection) {
            return;
        }
        if (this.extraResources !== '')
            this.resources.push(JSON.parse(this.extraResources));
    }
    appendTag(tagName, attributes) {
        const tag = document.createElement(tagName);
        const selectorParts = [];
        Object.keys(attributes).forEach(attr => {
            tag.setAttribute(attr, attributes[attr]);
            selectorParts.push(`[${attr}="${attributes[attr]}"]`);
        });
        const selector = `${tagName}${selectorParts.join('')}`;
        const existingTag = document.querySelector(selector);
        if (!existingTag) {
            document.head.appendChild(tag);
        }
    }
    initializeStyles() {
        if (this.disableResourceInjection) {
            return;
        }
        this.resources.forEach(res => {
            if (res.isCSS) {
                this.appendTag('link', {
                    href: res.link,
                    rel: 'stylesheet',
                    type: 'text/css',
                });
            }
            if (res.isJS) {
                this.appendTag('script', {
                    src: res.link,
                });
            }
        });
    }
    render() {
        return null;
    }
    static get watchers() { return {
        "extraResources": [{
                "hrefsChanged": 0
            }]
    }; }
};
IrCommon.style = appCss();

const irCustomButtonCss = () => `:host{display:block}.ir__custom-button{width:100%}.ir__custom-button.--icon::part(base){height:auto;width:auto;padding:0}.ir__custom-button::part(base){height:var(--ir-c-btn-height, var(--wa-form-control-height));padding:var(--ir-c-btn-padding, 0 var(--wa-form-control-padding-inline));font-size:var(--ir-c-btn-font-size, auto)}.ir__custom-button.--link::part(base){height:fit-content;padding:0}.ir-button__link:focus{outline:none}.ir-button__link:focus-visible{outline:var(--wa-focus-ring);outline-offset:var(--wa-focus-ring-offset)}.ir-button__link{display:inline-flex;align-items:center;justify-content:center;padding:0;font-family:inherit;font-size:var(--wa-form-control-value-font-size);font-weight:var(--wa-font-weight-action);line-height:calc(var(--wa-form-control-height) - var(--border-width) * 2);text-decoration:none;vertical-align:middle;white-space:nowrap;border-style:var(--wa-border-style);border-width:max(1px, var(--wa-form-control-border-width));border-radius:var(--wa-form-control-border-radius);transition-property:background, border, box-shadow, color;transition-duration:var(--wa-transition-fast);transition-timing-function:var(--wa-transition-easing);cursor:pointer;user-select:none;-webkit-user-select:none;color:var(--wa-color-brand-fill-loud);background-color:transparent;border-color:transparent}.ir-button__link:hover,.ir-button__link:active{color:var(--wa-color-on-quiet, var(--wa-color-brand-on-quiet));}.ir-button__link:focus-visible{outline:var(--wa-focus-ring);outline-offset:var(--wa-focus-ring-offset)}`;

const IrCustomButton = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.clickHandler = index.createEvent(this, "clickHandler");
    }
    get el() { return index.getElement(this); }
    link;
    iconBtn;
    /** The button's theme variant. Defaults to `neutral` if not within another element with a variant. */
    variant;
    /** The button's visual appearance. */
    appearance;
    /** The button's size. */
    size = 's';
    /** Draws the button with a caret. Used to indicate that the button triggers a dropdown menu or similar behavior. */
    withCaret;
    /** Disables the button. Does not apply to link buttons. */
    disabled;
    /** Draws the button in a loading state. */
    loading;
    /** Draws a pill-style button with rounded edges. */
    pill;
    /**
     * The type of button. Note that the default value is `button` instead of `submit`, which is opposite of how native
     * `<button>` elements behave. When the type is `submit`, the button will submit the surrounding form.
     */
    type = 'button';
    /**
     * The name of the button, submitted as a name/value pair with form data, but only when this button is the submitter.
     * This attribute is ignored when `href` is present.
     */
    name;
    /**
     * The value of the button, submitted as a pair with the button's name as part of the form data, but only when this
     * button is the submitter. This attribute is ignored when `href` is present.
     */
    value;
    /** When set, the underlying button will be rendered as an `<a>` with this `href` instead of a `<button>`. */
    href;
    /** Tells the browser where to open the link. Only used when `href` is present. */
    target;
    /** When using `href`, this attribute will map to the underlying link's `rel` attribute. */
    rel;
    /** Tells the browser to download the linked file as this filename. Only used when `href` is present. */
    download;
    /**
     * The "form owner" to associate the button with. If omitted, the closest containing form will be used instead. The
     * value of this attribute must be an id of a form in the same document or shadow root as the button.
     */
    form;
    /** Used to override the form owner's `action` attribute. */
    formAction;
    /** Used to override the form owner's `enctype` attribute.  */
    formEnctype;
    /** Used to override the form owner's `method` attribute.  */
    formMethod;
    /** Used to override the form owner's `novalidate` attribute. */
    formNoValidate;
    /** Used to override the form owner's `target` attribute. */
    formTarget;
    clickHandler;
    handleButtonClick(e) {
        this.clickHandler.emit(e);
    }
    render() {
        if (this.link) {
            return (index.h("button", { class: "ir-button__link", onClick: e => {
                    this.clickHandler.emit(e);
                } }, index.h("slot", { slot: "start", name: "start" }), index.h("slot", null), index.h("slot", { slot: "end", name: "end" })));
        }
        return (index.h(index.Host, null, index.h("wa-button", { onClick: e => {
                this.handleButtonClick(e);
            },
            /* core button props */
            type: this.type, size: this.size, class: `ir__custom-button ${this.iconBtn ? '--icon' : ''} ${this.link ? '--link' : ''}`, disabled: this.disabled, appearance: this.link ? 'plain' : this.appearance, loading: this.loading, "with-caret": this.withCaret, variant: this.link ? 'brand' : this.variant, pill: this.pill,
            /* link-related props */
            href: this.href, target: this.target, rel: this.rel, download: this.download,
            /* form-related props */
            name: this.name, value: this.value, form: this.form, "form-action": this.formAction, "form-enctype": this.formEnctype, "form-method": this.formMethod, "form-no-validate": this.formNoValidate, "form-target": this.formTarget, exportparts: "base, start, label, end, caret, spinner" }, index.h("slot", { slot: "start", name: "start" }), index.h("slot", null), index.h("slot", { slot: "end", name: "end" }))));
    }
};
IrCustomButton.style = irCustomButtonCss();

/**
 * Decorator: call on a method that *acquires* an overflow lock for the host under a specific tag.
 * Example:
 *   @OverflowAdd('modal')
 *   openModal() { ... }
 *
 * NOTE: this decorator no longer controls overflow (body locking). It's kept as a
 * pass-through so existing usages keep compiling. It still ensures the
 * `--ir-scrollbar-width` CSS variable is available on `:root`.
 */
function OverflowAdd(tag = 'data-ir-overflow') {
    return (_proto, _methodName, descriptor) => {
        const original = descriptor?.value;
        descriptor.value = function (...args) {
            // const host = getOverflowHost(this);
            // if (host) {
            //   addOverflowForHost(host, tag);
            // }
            ensureStyleForTag(tag);
            return original?.apply(this, args);
        };
        return descriptor;
    };
}
/**
 * Decorator: call on a method that *releases* an overflow lock for the host under a specific tag.
 * Example:
 *   @OverflowRelease('modal')
 *   closeModal() { ... }
 *
 * NOTE: this decorator no longer controls overflow (body locking). It's kept as a
 * pass-through so existing usages keep compiling.
 */
function OverflowRelease(_tag = 'data-ir-overflow') {
    return (_proto, _methodName, descriptor) => {
        const original = descriptor?.value;
        descriptor.value = function (...args) {
            // const host = getOverflowHost(this);
            // if (host) {
            //   removeOverflowForHost(host, tag);
            // }
            return original?.apply(this, args);
        };
        return descriptor;
    };
}
/** Host augmentation so we can track how many locks this host has per tag. */
// export interface HTMLOverflowHostElement extends HTMLStencilElement {
//   __overflowTags__?: Map<string, number>;
// }
// interface TagRegistryEntry {
//   hosts: Set<HTMLElement>;
//   count: number;
// }
/* ---------------------- Core registry & body lock logic --------------------- */
// const TAG_REGISTRY: Map<string, TagRegistryEntry> = new Map();
// Attribute on <body> that holds a space-separated list of active tags
// const BODY_ATTR = 'data-overflow-locks';
// Style element id prefix for per-tag CSS
const STYLE_ID_PREFIX = 'overflow-style-';
/** Ensure a <style> for this tag exists (once) and targets the body attr ApiClient. */
function ensureStyleForTag(tag) {
    if (!isDomAvailable())
        return;
    const styleId = STYLE_ID_PREFIX + tag;
    if (document.getElementById(styleId))
        return;
    // Determine if page has vertical overflow
    const hasOverflow = document.documentElement.scrollHeight > window.innerHeight;
    // Calculate scrollbar width (0 if no overflow)
    const scrollbarWidth = hasOverflow ? window.innerWidth - document.documentElement.clientWidth : 0;
    // const css = `
    //   /* Auto-inserted overflow lock for "${tag}" */
    //   body[${BODY_ATTR}~="${tag}"] {
    //     overflow: hidden !important;
    //     /* margin-inline-end respects LTR/RTL direction */
    //     margin-inline-end: ${scrollbarWidth}px !important;
    //   }
    // `.trim();
    const css = `
  :root{
    --ir-scrollbar-width:${scrollbarWidth}px;
  }
  .wa-scroll-lock body{
    overflow:hidden !important;
    margin-inline-end:var(--wa-scroll-lock-size);
  }
 
  
  
  `.trim();
    const style = document.createElement('style');
    style.id = styleId;
    style.textContent = css;
    document.head.appendChild(style);
}
/** Add the tag ApiClient to body’s data-overflow-locks (space-separated tokens). */
// function addBodyTag(tag: string) {
//   if (!isDomAvailable()) return;
//
//   ensureStyleForTag(tag);
//
//   const body = document.body;
//   const current = (body.getAttribute(BODY_ATTR) || '').trim();
//   const tokens = new Set(current ? current.split(/\s+/) : []);
//   if (!tokens.has(tag)) {
//     tokens.add(tag);
//     body.setAttribute(BODY_ATTR, Array.from(tokens).join(' '));
//   }
// }
/** Remove the tag ApiClient from body’s data-overflow-locks. */
// function removeBodyTag(tag: string) {
//   if (!isDomAvailable()) return;
//
//   const body = document.body;
//   const current = (body.getAttribute(BODY_ATTR) || '').trim();
//   if (!current) return;
//
//   const tokens = new Set(current.split(/\s+/));
//   if (tokens.delete(tag)) {
//     const next = Array.from(tokens).join(' ');
//     if (next) body.setAttribute(BODY_ATTR, next);
//     else body.removeAttribute(BODY_ATTR);
//   }
// }
/** Register a host under a tag, and lock the body for that tag if it’s the first. */
// function addOverflowForHost(host: HTMLOverflowHostElement, tag: string) {
//   if (!host || !isDomAvailable()) return;
//
//   // Track on host
//   host.__overflowTags__ ||= new Map<string, number>();
//   const counts = host.__overflowTags__;
//   const previous = counts.get(tag) ?? 0;
//   counts.set(tag, previous + 1);
//
//   // Track globally
//   let entry = TAG_REGISTRY.get(tag);
//   if (!entry) {
//     entry = { hosts: new Set<HTMLElement>(), count: 0 };
//     TAG_REGISTRY.set(tag, entry);
//   }
//
//   if (previous === 0) {
//     entry.hosts.add(host as any);
//   }
//
//   entry.count += 1;
//
//   // If this is the first active lock for this tag, lock the body for this tag
//   if (entry.count === 1) {
//     addBodyTag(tag);
//   }
//
//   // Safety: auto-clean on detach
//   attachDisconnectCleanup(host);
// }
/** Unregister a host from a tag, and possibly unlock the body for that tag. */
// function removeOverflowForHost(host: HTMLOverflowHostElement, tag: string) {
//   if (!host || !isDomAvailable()) return;
//
//   // Update host
//   const counts = host.__overflowTags__;
//   if (!counts) return;
//
//   const current = counts.get(tag);
//   if (!current) return;
//
//   if (current > 1) {
//     counts.set(tag, current - 1);
//   } else {
//     counts.delete(tag);
//     if (counts.size === 0) {
//       delete host.__overflowTags__;
//     }
//   }
//
//   // Update global registry
//   const entry = TAG_REGISTRY.get(tag);
//   if (!entry) return;
//
//   entry.count = Math.max(0, entry.count - 1);
//
//   if (current === 1) {
//     entry.hosts.delete(host as any);
//   }
//
//   if (entry.count === 0) {
//     TAG_REGISTRY.delete(tag);
//     removeBodyTag(tag);
//     // Optional: also remove the injected style node if you prefer cleanup:
//     // const style = document.getElementById(STYLE_ID_PREFIX + tag);
//     // style?.remove();
//   }
// }
/** If a host is removed from the DOM without calling release, auto-clean its tags. */
// function attachDisconnectCleanup(host: HTMLOverflowHostElement) {
//   if (!host || !isDomAvailable() || typeof MutationObserver === 'undefined') return;
//   // Don’t attach multiple observers to the same host
//   if ((host as any).__overflowObserver__) return;
//
//   const obs = new MutationObserver(() => {
//     // If host is no longer connected, clear all tags it owned
//     if (!host.isConnected) {
//       const tagEntries = host.__overflowTags__ ? Array.from(host.__overflowTags__.entries()) : [];
//       tagEntries.forEach(([tag, count]) => {
//         for (let i = 0; i < count; i += 1) {
//           removeOverflowForHost(host, tag);
//         }
//       });
//       obs.disconnect();
//       delete (host as any).__overflowObserver__;
//     }
//   });
//
//   obs.observe(document.documentElement, { childList: true, subtree: true });
//   (host as any).__overflowObserver__ = obs;
// }
// function getOverflowHost(instance: any): HTMLOverflowHostElement | null {
//   if (!isDomAvailable()) return null;
//
//   try {
//     return getElement(instance) as HTMLOverflowHostElement;
//   } catch {
//     return null;
//   }
// }
function isDomAvailable() {
    return typeof window !== 'undefined' && typeof document !== 'undefined';
}

const irDialogCss = () => `.ir-dialog__footer{display:flex;align-items:center;gap:1rem;justify-content:flex-end;width:100%}.dialog__loader-container{display:flex;flex-direction:column;justify-content:center;align-items:center;height:100%;width:100%;min-height:50px;min-width:31rem}#dialog-overview::part(title){color:var(--wa-color-text-normal);text-align:start}`;

var __decorate$2 = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
        r = Reflect.decorate(decorators, target, key, desc);
    else
        for (var i = decorators.length - 1; i >= 0; i--)
            if (d = decorators[i])
                r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
const IrDialog = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.irDialogShow = index.createEvent(this, "irDialogShow");
        this.irDialogHide = index.createEvent(this, "irDialogHide");
        this.irDialogAfterShow = index.createEvent(this, "irDialogAfterShow");
        this.irDialogAfterHide = index.createEvent(this, "irDialogAfterHide");
    }
    get el() { return index.getElement(this); }
    /**
     * The dialog's label as displayed in the header.
     * You should always include a relevant label, as it is required for proper accessibility.
     * If you need to display HTML, use the label slot instead.
     */
    label;
    /**
     * Indicates whether or not the dialog is open.
     * Toggle this attribute to show and hide the dialog.
     */
    open;
    /**
     * Disables the header.
     * This will also remove the default close button.
     */
    withoutHeader;
    /**
     * When enabled, the dialog will be closed when the user clicks outside of it.
     */
    lightDismiss = true;
    /**
     * Emitted when the dialog opens.
     */
    irDialogShow;
    /**
     * Emitted when the dialog is requested to close.
     * Calling event.preventDefault() will prevent the dialog from closing.
     * You can inspect event.detail.source to see which element caused the dialog to close.
     * If the source is the dialog element itself, the user has pressed Escape or the dialog has been closed programmatically.
     * Avoid using this unless closing the dialog will result in destructive behavior such as data loss.
     */
    irDialogHide;
    /**
     * Emitted after the dialog opens and all animations are complete.
     */
    irDialogAfterShow;
    /**
     * Emitted after the dialog closes and all animations are complete.
     */
    irDialogAfterHide;
    slotState = new Map();
    slotObserver;
    SLOT_NAMES = ['label', 'header-actions', 'footer'];
    componentWillLoad() {
        this.updateSlotState();
    }
    componentDidLoad() {
        this.setupSlotListeners();
    }
    disconnectedCallback() {
        this.removeSlotListeners();
    }
    async openModal() {
        this.open = true;
    }
    async closeModal() {
        this.open = false;
    }
    /**
     * Nested Web Awesome components (dropdowns, selects, tooltips) emit their own
     * composed `wa-show`/`wa-hide`, which bubble through the slot into these
     * handlers. Acting on them would close the dialog when a menu closes, so only
     * the dialog's own events count.
     */
    isOwnEvent(e) {
        return e.target === e.currentTarget;
    }
    handleWaHide(e) {
        e.stopImmediatePropagation();
        e.stopPropagation();
        if (!e.detail) {
            return;
        }
        this.open = false;
        this.irDialogHide.emit(e.detail);
    }
    handleWaShow(e) {
        e.stopImmediatePropagation();
        e.stopPropagation();
        this.open = true;
        this.irDialogShow.emit();
    }
    handleWaAfterHide(e) {
        e.stopImmediatePropagation();
        e.stopPropagation();
        this.irDialogAfterHide.emit();
    }
    handleWaAfterShow(e) {
        e.stopImmediatePropagation();
        e.stopPropagation();
        this.irDialogAfterShow.emit();
    }
    setupSlotListeners() {
        // Listen to slotchange events on the host element
        this.el.addEventListener('slotchange', this.handleSlotChange);
        // Also use MutationObserver as a fallback for browsers that don't fire slotchange reliably
        this.slotObserver = new MutationObserver(this.handleSlotChange);
        this.slotObserver.observe(this.el, {
            childList: true,
            subtree: true,
            attributes: true,
            attributeFilter: ['slot'],
        });
    }
    removeSlotListeners() {
        this.el.removeEventListener('slotchange', this.handleSlotChange);
        this.slotObserver?.disconnect();
    }
    handleSlotChange = () => {
        this.updateSlotState();
    };
    updateSlotState() {
        const newState = new Map();
        this.SLOT_NAMES.forEach(name => {
            newState.set(name, this.hasSlot(name));
        });
        this.slotState = newState;
    }
    hasSlot(name) {
        return !!this.el.querySelector(`[slot="${name}"]`);
    }
    render() {
        return (index.h("wa-dialog", { key: '0fcad9927a4eb9465f7e469c34bcde52e8091583', "onwa-hide": (e) => this.isOwnEvent(e) && this.handleWaHide(e), "onwa-show": (e) => this.isOwnEvent(e) && this.handleWaShow(e), "onwa-after-hide": (e) => this.isOwnEvent(e) && this.handleWaAfterHide(e), "onwa-after-show": (e) => this.isOwnEvent(e) && this.handleWaAfterShow(e), label: this.label, id: "dialog-overview", open: this.open, style: { '--width': 'var(--ir-dialog-width,31rem)' }, "without-header": this.withoutHeader, lightDismiss: this.lightDismiss, exportparts: "dialog, header, header-actions, title, close-button, close-button__base, body, footer" }, this.slotState.get('header-actions') && index.h("slot", { key: 'c02ebfdc3bd92a90b7f860e55f2a9666999ca39d', name: "header-actions", slot: "header-actions" }), this.slotState.get('label') && index.h("slot", { key: '6118003f6fe0f4fe12b5c68f6c5415325b6e263c', name: "label", slot: "label" }), index.h("slot", { key: '669d331b5b4fa7ddfa30428deae01176231b6182' }), this.slotState.get('footer') && index.h("slot", { key: 'fc6473a55ae9305f48c796eca37c48412a91e9ef', name: "footer", slot: "footer" })));
    }
};
__decorate$2([
    OverflowRelease()
], IrDialog.prototype, "handleWaHide", null);
__decorate$2([
    OverflowAdd()
], IrDialog.prototype, "handleWaShow", null);
IrDialog.style = irDialogCss();

const irDrawerCss = () => `.ir__drawer{text-align:start !important}.ir__drawer::part(header){border-bottom:1px solid var(--wa-color-surface-border);padding-bottom:calc(var(--spacing) / 2);color:var(--wa-color-text-normal);background-color:var(--ir-drawer-background-color, var(--wa-color-surface-default))}.ir__drawer::part(title){text-align:start}.ir__drawer::part(body){background-color:var(--ir-drawer-background-color, var(--wa-color-surface-default));padding:0;padding-inline-start:var(--ir-drawer-padding-inline-start, var(--ir-drawer-padding-left, var(--spacing)));padding-inline-end:var(--ir-drawer-padding-inline-end, var(--ir-drawer-padding-right, var(--spacing)));padding-top:var(--ir-drawer-padding-top, var(--spacing));padding-bottom:var(--ir-drawer-padding-bottom, var(--spacing))}.ir__drawer::part(footer){background-color:var(--ir-drawer-background-color, var(--wa-color-surface-default));padding-top:calc(var(--spacing) / 2);border-top:1px solid var(--wa-color-surface-border)}.ir__drawer-footer{display:flex;align-items:center;gap:1rem;width:100%}.ir__drawer-footer>*{flex:1 1 0%}.drawer__loader-container{display:flex;flex-direction:column;justify-content:center;align-items:center;height:100%;width:100%}`;

var __decorate$1 = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
        r = Reflect.decorate(decorators, target, key, desc);
    else
        for (var i = decorators.length - 1; i >= 0; i--)
            if (d = decorators[i])
                r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
const IrDrawer = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.drawerShow = index.createEvent(this, "drawerShow");
        this.drawerHide = index.createEvent(this, "drawerHide");
    }
    get el() { return index.getElement(this); }
    /** Indicates whether or not the drawer is open. Toggle this attribute to show and hide the drawer. */
    open;
    /**
     * The drawer's label as displayed in the header. You should always include a relevant label, as it is required for
     * proper accessibility. If you need to display HTML, use the `label` slot instead.
     */
    label;
    /** The direction from which the drawer will open. */
    placement = 'end';
    /** Disables the header. This will also remove the default close button. */
    withoutHeader;
    /** When enabled, the drawer will be closed when the user clicks outside of it. */
    lightDismiss = true;
    slotStateVersion = 0; // Trigger re-renders when slots change
    /** Emitted when the drawer opens. */
    drawerShow;
    /**Emitted when the drawer is requesting to close. Calling event.preventDefault() will prevent the drawer from closing. You can inspect event.detail.source to see which element caused the drawer to close. If the source is the drawer element itself, the user has pressed Escape or the drawer has been closed programmatically. Avoid using this unless closing the drawer will result in destructive behavior such as data loss. */
    drawerHide;
    SLOT_NAMES = ['label', 'header-actions', 'footer'];
    // Create slot manager with state change callback
    slotManager = slot.createSlotManager(null, // Will be set in componentWillLoad
    this.SLOT_NAMES, () => {
        // Trigger re-render when slot state changes
        this.slotStateVersion++;
    });
    onDrawerShow = (event) => {
        this.emitDrawerShow(event);
    };
    onDrawerHide = (event) => {
        this.emitDrawerHide(event);
    };
    componentWillLoad() {
        // Initialize slot manager with host element
        this.slotManager = slot.createSlotManager(this.el, this.SLOT_NAMES, () => {
            this.slotStateVersion++;
        });
        this.slotManager.initialize();
    }
    componentDidLoad() {
        this.slotManager.setupListeners();
    }
    disconnectedCallback() {
        this.slotManager.destroy();
    }
    emitDrawerShow(e) {
        e.stopImmediatePropagation();
        e.stopPropagation();
        this.drawerShow.emit();
    }
    emitDrawerHide(e) {
        e.stopImmediatePropagation();
        e.stopPropagation();
        if (!e.detail) {
            return;
        }
        this.drawerHide.emit(e.detail);
    }
    render() {
        return (index.h("wa-drawer", { key: '01f0dcc20f626f02a1396d9332ebfe1a692a470f', id: this.el.id, "onwa-show": this.onDrawerShow, "onwa-hide": this.onDrawerHide, class: "ir__drawer", style: { '--size': 'var(--ir-drawer-width,40rem)' }, open: this.open, label: this.label, placement: this.placement, withoutHeader: this.withoutHeader, lightDismiss: this.lightDismiss, exportparts: "dialog, header, header-actions, title, close-button, close-button__base, body, footer" }, this.slotManager.hasSlot('header-actions') && index.h("slot", { key: 'fb7868d3b1106cc87b1c9a2f2c64ae8ca50b6869', name: "header-actions", slot: "header-actions" }), this.slotManager.hasSlot('label') && index.h("slot", { key: '7e6d70d8e56fe5cb3d5ce5af59f3cfe7aadf271c', name: "label", slot: "label" }), index.h("slot", { key: '21af9ddb4d2623e2d36cc68161454cbf6b857e81' }), this.slotManager.hasSlot('footer') && index.h("slot", { key: '94ee142a3df26e6fcc6356954acfd456ad52a467', name: "footer", slot: "footer" })));
    }
};
__decorate$1([
    OverflowAdd()
], IrDrawer.prototype, "emitDrawerShow", null);
__decorate$1([
    OverflowRelease()
], IrDrawer.prototype, "emitDrawerHide", null);
IrDrawer.style = irDrawerCss();

const irIconCss = () => `.sc-ir-icon-h{margin:0;padding:0}.icon-button.sc-ir-icon{all:unset;margin:0;padding:0;color:#6b6f82}.icon-button.sc-ir-icon:hover{cursor:pointer;color:#104064}`;

const IrIcon = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.iconClickHandler = index.createEvent(this, "iconClickHandler");
    }
    icon = 'ft-check';
    type = 'button';
    iconClickHandler;
    render() {
        return (index.h("button", { key: '1aeb353b37cac221e93bec191fc94ace21493fb9', type: this.type, class: "icon-button", onClick: () => this.iconClickHandler.emit() }, index.h("slot", { key: '6866576f9a9e89beb541e153cc222a87a80bb204', name: "icon" })));
    }
};
IrIcon.style = irIconCss();

const icons = {
    'clock': {
        d: 'M464 256A208 208 0 1 1 48 256a208 208 0 1 1 416 0zM0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM232 120V256c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2V120c0-13.3-10.7-24-24-24s-24 10.7-24 24z',
        viewBox: '0 0 512 512',
    },
    'check': {
        viewBox: '0 0 448 512',
        d: 'M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z',
    },
    'heart-fill': {
        viewBox: '0 0 512 512',
        d: 'M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z',
    },
    'envelope-circle-check': {
        viewBox: '0 0 640 512',
        d: 'M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0l57.4-43c23.9-59.8 79.7-103.3 146.3-109.8l13.9-10.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48L48 64zM294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176 0 384c0 35.3 28.7 64 64 64l296.2 0C335.1 417.6 320 378.5 320 336c0-5.6 .3-11.1 .8-16.6l-26.4 19.8zM640 336a144 144 0 1 0 -288 0 144 144 0 1 0 288 0zm-76.7-43.3c6.2 6.2 6.2 16.4 0 22.6l-72 72c-6.2 6.2-16.4 6.2-22.6 0l-40-40c-6.2-6.2-6.2-16.4 0-22.6s16.4-6.2 22.6 0L480 353.4l60.7-60.7c6.2-6.2 16.4-6.2 22.6 0z',
    },
    'danger': {
        viewBox: '0 0 512 512',
        d: 'M256 32c14.2 0 27.3 7.5 34.5 19.8l216 368c7.3 12.4 7.3 27.7 .2 40.1S486.3 480 472 480H40c-14.3 0-27.6-7.7-34.7-20.1s-7-27.8 .2-40.1l216-368C228.7 39.5 241.8 32 256 32zm0 128c-13.3 0-24 10.7-24 24V296c0 13.3 10.7 24 24 24s24-10.7 24-24V184c0-13.3-10.7-24-24-24zm32 224a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z',
    },
    'bell': {
        viewBox: '0 0 448 512',
        d: 'M224 0c-17.7 0-32 14.3-32 32V51.2C119 66 64 130.6 64 208v18.8c0 47-17.3 92.4-48.5 127.6l-7.4 8.3c-8.4 9.4-10.4 22.9-5.3 34.4S19.4 416 32 416H416c12.6 0 24-7.4 29.2-18.9s3.1-25-5.3-34.4l-7.4-8.3C401.3 319.2 384 273.9 384 226.8V208c0-77.4-55-142-128-156.8V32c0-17.7-14.3-32-32-32zm45.3 493.3c12-12 18.7-28.3 18.7-45.3H224 160c0 17 6.7 33.3 18.7 45.3s28.3 18.7 45.3 18.7s33.3-6.7 45.3-18.7z',
    },
    'burger_menu': {
        viewBox: '0 0 448 512',
        d: 'M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z',
    },
    'home': {
        viewBox: '0 0 576 512',
        d: 'M575.8 255.5c0 18-15 32.1-32 32.1h-32l.7 160.2c0 2.7-.2 5.4-.5 8.1V472c0 22.1-17.9 40-40 40H456c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1H416 392c-22.1 0-40-17.9-40-40V448 384c0-17.7-14.3-32-32-32H256c-17.7 0-32 14.3-32 32v64 24c0 22.1-17.9 40-40 40H160 128.1c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2H104c-22.1 0-40-17.9-40-40V360c0-.9 0-1.9 .1-2.8V287.6H32c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z',
    },
    'xmark': {
        viewBox: '0 0 384 512',
        d: 'M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z',
    },
    'minus': {
        viewBox: '0 0 448 512',
        d: 'M432 256c0 17.7-14.3 32-32 32L48 288c-17.7 0-32-14.3-32-32s14.3-32 32-32l352 0c17.7 0 32 14.3 32 32z',
    },
    'user': {
        viewBox: '0 0 448 512',
        d: 'M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z',
    },
    'heart': {
        viewBox: '0 0 512 512',
        d: 'M225.8 468.2l-2.5-2.3L48.1 303.2C17.4 274.7 0 234.7 0 192.8v-3.3c0-70.4 50-130.8 119.2-144C158.6 37.9 198.9 47 231 69.6c9 6.4 17.4 13.8 25 22.3c4.2-4.8 8.7-9.2 13.5-13.3c3.7-3.2 7.5-6.2 11.5-9c0 0 0 0 0 0C313.1 47 353.4 37.9 392.8 45.4C462 58.6 512 119.1 512 189.5v3.3c0 41.9-17.4 81.9-48.1 110.4L288.7 465.9l-2.5 2.3c-8.2 7.6-19 11.9-30.2 11.9s-22-4.2-30.2-11.9zM239.1 145c-.4-.3-.7-.7-1-1.1l-17.8-20c0 0-.1-.1-.1-.1c0 0 0 0 0 0c-23.1-25.9-58-37.7-92-31.2C81.6 101.5 48 142.1 48 189.5v3.3c0 28.5 11.9 55.8 32.8 75.2L256 430.7 431.2 268c20.9-19.4 32.8-46.7 32.8-75.2v-3.3c0-47.3-33.6-88-80.1-96.9c-34-6.5-69 5.4-92 31.2c0 0 0 0-.1 .1s0 0-.1 .1l-17.8 20c-.3 .4-.7 .7-1 1.1c-4.5 4.5-10.6 7-16.9 7s-12.4-2.5-16.9-7z',
    },
    'user_group': {
        viewBox: '0 0 640 512',
        d: 'M96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM0 482.3C0 383.8 79.8 304 178.3 304h91.4C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7H29.7C13.3 512 0 498.7 0 482.3zM609.3 512H471.4c5.4-9.4 8.6-20.3 8.6-32v-8c0-60.7-27.1-115.2-69.8-151.8c2.4-.1 4.7-.2 7.1-.2h61.4C567.8 320 640 392.2 640 481.3c0 17-13.8 30.7-30.7 30.7zM432 256c-31 0-59-12.6-79.3-32.9C372.4 196.5 384 163.6 384 128c0-26.8-6.6-52.1-18.3-74.3C384.3 40.1 407.2 32 432 32c61.9 0 112 50.1 112 112s-50.1 112-112 112z',
    },
    'search': {
        viewBox: '0 0 512 512',
        d: 'M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z',
    },
    'arrow_right': {
        viewBox: '0 0 448 512',
        d: 'M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z',
    },
    'arrow_left': {
        viewBox: '0 0 448 512',
        d: 'M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z',
    },
    'circle_info': {
        viewBox: '0 0 512 512',
        d: 'M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-208a32 32 0 1 1 0 64 32 32 0 1 1 0-64z',
    },
    'calendar': {
        viewBox: ' 0 0 448 512',
        d: 'M152 24c0-13.3-10.7-24-24-24s-24 10.7-24 24V64H64C28.7 64 0 92.7 0 128v16 48V448c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V192 144 128c0-35.3-28.7-64-64-64H344V24c0-13.3-10.7-24-24-24s-24 10.7-24 24V64H152V24zM48 192H400V448c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16V192z',
    },
    'xmark-fill': {
        viewBox: '0 0 512 512',
        d: 'M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM175 175c9.4-9.4 24.6-9.4 33.9 0l47 47 47-47c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-47 47 47 47c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-47-47-47 47c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l47-47-47-47c-9.4-9.4-9.4-24.6 0-33.9z',
    },
    'globe': {
        viewBox: '0 0 256 256',
        d: 'M128 24a104 104 0 1 0 104 104A104.12 104.12 0 0 0 128 24m88 104a87.6 87.6 0 0 1-3.33 24h-38.51a157.4 157.4 0 0 0 0-48h38.51a87.6 87.6 0 0 1 3.33 24m-114 40h52a115.1 115.1 0 0 1-26 45a115.3 115.3 0 0 1-26-45m-3.9-16a140.8 140.8 0 0 1 0-48h59.88a140.8 140.8 0 0 1 0 48ZM40 128a87.6 87.6 0 0 1 3.33-24h38.51a157.4 157.4 0 0 0 0 48H43.33A87.6 87.6 0 0 1 40 128m114-40h-52a115.1 115.1 0 0 1 26-45a115.3 115.3 0 0 1 26 45m52.33 0h-35.62a135.3 135.3 0 0 0-22.3-45.6A88.29 88.29 0 0 1 206.37 88Zm-98.74-45.6A135.3 135.3 0 0 0 85.29 88H49.63a88.29 88.29 0 0 1 57.96-45.6M49.63 168h35.66a135.3 135.3 0 0 0 22.3 45.6A88.29 88.29 0 0 1 49.63 168m98.78 45.6a135.3 135.3 0 0 0 22.3-45.6h35.66a88.29 88.29 0 0 1-57.96 45.6',
    },
    'facebook': {
        viewBox: '0 0 512 512',
        d: 'M512 256C512 114.6 397.4 0 256 0S0 114.6 0 256C0 376 82.7 476.8 194.2 504.5V334.2H141.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H287V510.1C413.8 494.8 512 386.9 512 256h0z',
    },
    'twitter': {
        viewBox: '0 0 512 512',
        d: 'M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z',
    },
    'whatsapp': {
        viewBox: '0 0 448 512',
        d: 'M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7 .9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z',
    },
    'instagram': {
        viewBox: '0 0 448 512',
        d: 'M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z',
    },
    'youtube': {
        viewBox: '0 0 576 512',
        d: 'M549.7 124.1c-6.3-23.7-24.8-42.3-48.3-48.6C458.8 64 288 64 288 64S117.2 64 74.6 75.5c-23.5 6.3-42 24.9-48.3 48.6-11.4 42.9-11.4 132.3-11.4 132.3s0 89.4 11.4 132.3c6.3 23.7 24.8 41.5 48.3 47.8C117.2 448 288 448 288 448s170.8 0 213.4-11.5c23.5-6.3 42-24.2 48.3-47.8 11.4-42.9 11.4-132.3 11.4-132.3s0-89.4-11.4-132.3zm-317.5 213.5V175.2l142.7 81.2-142.7 81.2z',
    },
    'angle_left': {
        viewBox: '0 0 320 512',
        d: 'M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 246.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z',
    },
    'circle_check': {
        d: 'M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-111 111-47-47c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l64 64c9.4 9.4 24.6 9.4 33.9 0L369 209z',
        viewBox: '0 0 512 512',
    },
    'eraser': {
        viewBox: '0 0 576 512',
        d: 'M290.7 57.4L57.4 290.7c-25 25-25 65.5 0 90.5l80 80c12 12 28.3 18.7 45.3 18.7H288h9.4H512c17.7 0 32-14.3 32-32s-14.3-32-32-32H387.9L518.6 285.3c25-25 25-65.5 0-90.5L381.3 57.4c-25-25-65.5-25-90.5 0zM297.4 416H288l-105.4 0-80-80L227.3 211.3 364.7 348.7 297.4 416z',
    },
    'file': {
        viewBox: '0 0 384 512',
        d: 'M48 448V64c0-8.8 7.2-16 16-16H224v80c0 17.7 14.3 32 32 32h80V448c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16zM64 0C28.7 0 0 28.7 0 64V448c0 35.3 28.7 64 64 64H320c35.3 0 64-28.7 64-64V154.5c0-17-6.7-33.3-18.7-45.3L274.7 18.7C262.7 6.7 246.5 0 229.5 0H64zm90.9 233.3c-8.1-10.5-23.2-12.3-33.7-4.2s-12.3 23.2-4.2 33.7L161.6 320l-44.5 57.3c-8.1 10.5-6.3 25.5 4.2 33.7s25.5 6.3 33.7-4.2L192 359.1l37.1 47.6c8.1 10.5 23.2 12.3 33.7 4.2s12.3-23.2 4.2-33.7L222.4 320l44.5-57.3c8.1-10.5 6.3-25.5-4.2-33.7s-25.5-6.3-33.7 4.2L192 280.9l-37.1-47.6z',
    },
    'edit': {
        viewBox: '0 0 512 512',
        d: 'M471.6 21.7c-21.9-21.9-57.3-21.9-79.2 0L362.3 51.7l97.9 97.9 30.1-30.1c21.9-21.9 21.9-57.3 0-79.2L471.6 21.7zm-299.2 220c-6.1 6.1-10.8 13.6-13.5 21.9l-29.6 88.8c-2.9 8.6-.6 18.1 5.8 24.6s15.9 8.7 24.6 5.8l88.8-29.6c8.2-2.7 15.7-7.4 21.9-13.5L437.7 172.3 339.7 74.3 172.4 241.7zM96 64C43 64 0 107 0 160V416c0 53 43 96 96 96H352c53 0 96-43 96-96V320c0-17.7-14.3-32-32-32s-32 14.3-32 32v96c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V160c0-17.7 14.3-32 32-32h96c17.7 0 32-14.3 32-32s-14.3-32-32-32H96z',
    },
    'trash': {
        viewBox: '0 0 448 512',
        d: 'M135.2 17.7C140.6 6.8 151.7 0 163.8 0H284.2c12.1 0 23.2 6.8 28.6 17.7L320 32h96c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 96 0 81.7 0 64S14.3 32 32 32h96l7.2-14.3zM32 128H416V448c0 35.3-28.7 64-64 64H96c-35.3 0-64-28.7-64-64V128zm96 64c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16z',
    },
    'plus': {
        viewBox: '0 0 448 512',
        d: 'M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z',
    },
    'reciept': {
        viewBox: '0 0 384 512',
        d: 'M64 0C28.7 0 0 28.7 0 64V448c0 35.3 28.7 64 64 64H320c35.3 0 64-28.7 64-64V160H256c-17.7 0-32-14.3-32-32V0H64zM256 0V128H384L256 0zM80 64h64c8.8 0 16 7.2 16 16s-7.2 16-16 16H80c-8.8 0-16-7.2-16-16s7.2-16 16-16zm0 64h64c8.8 0 16 7.2 16 16s-7.2 16-16 16H80c-8.8 0-16-7.2-16-16s7.2-16 16-16zm16 96H288c17.7 0 32 14.3 32 32v64c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V256c0-17.7 14.3-32 32-32zm0 32v64H288V256H96zM240 416h64c8.8 0 16 7.2 16 16s-7.2 16-16 16H240c-8.8 0-16-7.2-16-16s7.2-16 16-16z',
    },
    'print': {
        viewBox: '0 0 512 512',
        d: 'M128 0C92.7 0 64 28.7 64 64v96h64V64H354.7L384 93.3V160h64V93.3c0-17-6.7-33.3-18.7-45.3L400 18.7C388 6.7 371.7 0 354.7 0H128zM384 352v32 64H128V384 368 352H384zm64 32h32c17.7 0 32-14.3 32-32V256c0-35.3-28.7-64-64-64H64c-35.3 0-64 28.7-64 64v96c0 17.7 14.3 32 32 32H64v64c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V384zM432 248a24 24 0 1 1 0 48 24 24 0 1 1 0-48z',
    },
    'menu_list': {
        viewBox: '0 0 512 512',
        d: 'M40 48C26.7 48 16 58.7 16 72v48c0 13.3 10.7 24 24 24H88c13.3 0 24-10.7 24-24V72c0-13.3-10.7-24-24-24H40zM192 64c-17.7 0-32 14.3-32 32s14.3 32 32 32H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H192zm0 160c-17.7 0-32 14.3-32 32s14.3 32 32 32H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H192zm0 160c-17.7 0-32 14.3-32 32s14.3 32 32 32H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H192zM16 232v48c0 13.3 10.7 24 24 24H88c13.3 0 24-10.7 24-24V232c0-13.3-10.7-24-24-24H40c-13.3 0-24 10.7-24 24zM40 368c-13.3 0-24 10.7-24 24v48c0 13.3 10.7 24 24 24H88c13.3 0 24-10.7 24-24V392c0-13.3-10.7-24-24-24H40z',
    },
    'save': {
        viewBox: '0 0 448 512',
        d: 'M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V173.3c0-17-6.7-33.3-18.7-45.3L352 50.7C340 38.7 323.7 32 306.7 32H64zm0 96c0-17.7 14.3-32 32-32H288c17.7 0 32 14.3 32 32v64c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V128zM224 288a64 64 0 1 1 0 128 64 64 0 1 1 0-128z',
    },
    'credit_card': {
        viewBox: '0 0 576 512',
        d: 'M512 80c8.8 0 16 7.2 16 16v32H48V96c0-8.8 7.2-16 16-16H512zm16 144V416c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16V224H528zM64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H512c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zm56 304c-13.3 0-24 10.7-24 24s10.7 24 24 24h48c13.3 0 24-10.7 24-24s-10.7-24-24-24H120zm128 0c-13.3 0-24 10.7-24 24s10.7 24 24 24H360c13.3 0 24-10.7 24-24s-10.7-24-24-24H248z',
    },
    'closed_eye': {
        viewBox: '0 0 640 512',
        d: 'M38.8 5.1C28.4-3.1 13.3-1.2 5.1 9.2S-1.2 34.7 9.2 42.9l592 464c10.4 8.2 25.5 6.3 33.7-4.1s6.3-25.5-4.1-33.7L525.6 386.7c39.6-40.6 66.4-86.1 79.9-118.4c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C465.5 68.8 400.8 32 320 32c-68.2 0-125 26.3-169.3 60.8L38.8 5.1zM223.1 149.5C248.6 126.2 282.7 112 320 112c79.5 0 144 64.5 144 144c0 24.9-6.3 48.3-17.4 68.7L408 294.5c8.4-19.3 10.6-41.4 4.8-63.3c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3c0 10.2-2.4 19.8-6.6 28.3l-90.3-70.8zM373 389.9c-16.4 6.5-34.3 10.1-53 10.1c-79.5 0-144-64.5-144-144c0-6.9 .5-13.6 1.4-20.2L83.1 161.5C60.3 191.2 44 220.8 34.5 243.7c-3.3 7.9-3.3 16.7 0 24.6c14.9 35.7 46.2 87.7 93 131.1C174.5 443.2 239.2 480 320 480c47.8 0 89.9-12.9 126.2-32.5L373 389.9z',
    },
    'open_eye': {
        viewBox: '0 0 576 512',
        d: 'M288 32c-80.8 0-145.5 36.8-192.6 80.6C48.6 156 17.3 208 2.5 243.7c-3.3 7.9-3.3 16.7 0 24.6C17.3 304 48.6 356 95.4 399.4C142.5 443.2 207.2 480 288 480s145.5-36.8 192.6-80.6c46.8-43.5 78.1-95.4 93-131.1c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C433.5 68.8 368.8 32 288 32zM144 256a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm144-64c0 35.3-28.7 64-64 64c-7.1 0-13.9-1.2-20.3-3.3c-5.5-1.8-11.9 1.6-11.7 7.4c.3 6.9 1.3 13.8 3.2 20.7c13.7 51.2 66.4 81.6 117.6 67.9s81.6-66.4 67.9-117.6c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3z',
    },
    'server': {
        viewBox: '0 0 512 512',
        d: 'M448 160H320V128H448v32zM48 64C21.5 64 0 85.5 0 112v64c0 26.5 21.5 48 48 48H464c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48H48zM448 352v32H192V352H448zM48 288c-26.5 0-48 21.5-48 48v64c0 26.5 21.5 48 48 48H464c26.5 0 48-21.5 48-48V336c0-26.5-21.5-48-48-48H48z',
    },
    'double_caret_left': {
        viewBox: '0 0 512 512',
        d: 'M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 246.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160zm352-160l-160 160c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L301.3 256 438.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0z',
    },
    'square_plus': {
        viewBox: '0 0 448 512',
        d: 'M64 80c-8.8 0-16 7.2-16 16l0 320c0 8.8 7.2 16 16 16l320 0c8.8 0 16-7.2 16-16l0-320c0-8.8-7.2-16-16-16L64 80zM0 96C0 60.7 28.7 32 64 32l320 0c35.3 0 64 28.7 64 64l0 320c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64L0 96zM200 344l0-64-64 0c-13.3 0-24-10.7-24-24s10.7-24 24-24l64 0 0-64c0-13.3 10.7-24 24-24s24 10.7 24 24l0 64 64 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-64 0 0 64c0 13.3-10.7 24-24 24s-24-10.7-24-24z',
    },
    'angles_left': {
        viewBox: '0 0 512 512',
        d: 'M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 246.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160zm352-160l-160 160c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L301.3 256 438.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0z',
    },
    'angle_right': {
        viewBox: '0 0 320 512',
        d: 'M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z',
    },
    'angles_right': {
        viewBox: '0 0 512 512',
        d: 'M470.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 256 265.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160zm-352 160l160-160c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L210.7 256 73.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0z',
    },
    'outline_user': {
        viewBox: '0 0 448 512',
        d: 'M304 128a80 80 0 1 0 -160 0 80 80 0 1 0 160 0zM96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM49.3 464l349.5 0c-8.9-63.3-63.3-112-129-112l-91.4 0c-65.7 0-120.1 48.7-129 112zM0 482.3C0 383.8 79.8 304 178.3 304l91.4 0C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7L29.7 512C13.3 512 0 498.7 0 482.3z',
    },
    'key': {
        viewBox: '0 0 512 512',
        d: 'M336 352c97.2 0 176-78.8 176-176S433.2 0 336 0S160 78.8 160 176c0 18.7 2.9 36.8 8.3 53.7L7 391c-4.5 4.5-7 10.6-7 17l0 80c0 13.3 10.7 24 24 24l80 0c13.3 0 24-10.7 24-24l0-40 40 0c13.3 0 24-10.7 24-24l0-40 40 0c6.4 0 12.5-2.5 17-7l33.3-33.3c16.9 5.4 35 8.3 53.7 8.3zM376 96a40 40 0 1 1 0 80 40 40 0 1 1 0-80z',
    },
    'unlock': {
        viewBox: '0 0 448 512',
        d: 'M144 144c0-44.2 35.8-80 80-80c31.9 0 59.4 18.6 72.3 45.7c7.6 16 26.7 22.8 42.6 15.2s22.8-26.7 15.2-42.6C331 33.7 281.5 0 224 0C144.5 0 80 64.5 80 144l0 48-16 0c-35.3 0-64 28.7-64 64L0 448c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-192c0-35.3-28.7-64-64-64l-240 0 0-48z',
    },
    'circle_plus': {
        viewBox: '0 0 15 15',
        d: 'M7.49991 0.876892C3.84222 0.876892 0.877075 3.84204 0.877075 7.49972C0.877075 11.1574 3.84222 14.1226 7.49991 14.1226C11.1576 14.1226 14.1227 11.1574 14.1227 7.49972C14.1227 3.84204 11.1576 0.876892 7.49991 0.876892ZM1.82707 7.49972C1.82707 4.36671 4.36689 1.82689 7.49991 1.82689C10.6329 1.82689 13.1727 4.36671 13.1727 7.49972C13.1727 10.6327 10.6329 13.1726 7.49991 13.1726C4.36689 13.1726 1.82707 10.6327 1.82707 7.49972ZM7.50003 4C7.77617 4 8.00003 4.22386 8.00003 4.5V7H10.5C10.7762 7 11 7.22386 11 7.5C11 7.77614 10.7762 8 10.5 8H8.00003V10.5C8.00003 10.7761 7.77617 11 7.50003 11C7.22389 11 7.00003 10.7761 7.00003 10.5V8H4.50003C4.22389 8 4.00003 7.77614 4.00003 7.5C4.00003 7.22386 4.22389 7 4.50003 7H7.00003V4.5C7.00003 4.22386 7.22389 4 7.50003 4Z',
    },
    'arrow-right-from-bracket': {
        d: 'M502.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 224 192 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l210.7 0-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128zM160 96c17.7 0 32-14.3 32-32s-14.3-32-32-32L96 32C43 32 0 75 0 128L0 384c0 53 43 96 96 96l64 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-64 0c-17.7 0-32-14.3-32-32l0-256c0-17.7 14.3-32 32-32l64 0z',
        viewBox: '0 0 512 512',
    },
    'note': {
        d: 'M64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64l224 0 0-112c0-26.5 21.5-48 48-48l112 0 0-224c0-35.3-28.7-64-64-64L64 32zM448 352l-45.3 0L336 352c-8.8 0-16 7.2-16 16l0 66.7 0 45.3 32-32 64-64 32-32z',
        viewBox: '0 0 448 512',
    },
    'email': {
        viewBox: '0 0 512 512',
        d: 'M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48L48 64zM0 176L0 384c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-208L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z',
    },
    'calendar-xmark': {
        viewBox: '0 0 448 512',
        d: 'M128 0c13.3 0 24 10.7 24 24l0 40 144 0 0-40c0-13.3 10.7-24 24-24s24 10.7 24 24l0 40 40 0c35.3 0 64 28.7 64 64l0 16 0 48 0 256c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 192l0-48 0-16C0 92.7 28.7 64 64 64l40 0 0-40c0-13.3 10.7-24 24-24zM400 192L48 192l0 256c0 8.8 7.2 16 16 16l320 0c8.8 0 16-7.2 16-16l0-256zm-95 89l-47 47 47 47c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-47-47-47 47c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l47-47-47-47c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47 47-47c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z',
    },
    'arrow-trend-up': {
        viewBox: '0 0 640 640',
        d: 'M416 224C398.3 224 384 209.7 384 192C384 174.3 398.3 160 416 160L576 160C593.7 160 608 174.3 608 192L608 352C608 369.7 593.7 384 576 384C558.3 384 544 369.7 544 352L544 269.3L374.6 438.7C362.1 451.2 341.8 451.2 329.3 438.7L224 333.3L86.6 470.6C74.1 483.1 53.8 483.1 41.3 470.6C28.8 458.1 28.8 437.8 41.3 425.3L201.3 265.3C213.8 252.8 234.1 252.8 246.6 265.3L352 370.7L498.7 224L416 224z',
    },
    'hotel': {
        viewBox: '0 0 640 640',
        d: 'M80 88C80 74.7 90.7 64 104 64L536 64C549.3 64 560 74.7 560 88C560 101.3 549.3 112 536 112L528 112L528 528L536 528C549.3 528 560 538.7 560 552C560 565.3 549.3 576 536 576L104 576C90.7 576 80 565.3 80 552C80 538.7 90.7 528 104 528L112 528L112 112L104 112C90.7 112 80 101.3 80 88zM288 176L288 208C288 216.8 295.2 224 304 224L336 224C344.8 224 352 216.8 352 208L352 176C352 167.2 344.8 160 336 160L304 160C295.2 160 288 167.2 288 176zM192 160C183.2 160 176 167.2 176 176L176 208C176 216.8 183.2 224 192 224L224 224C232.8 224 240 216.8 240 208L240 176C240 167.2 232.8 160 224 160L192 160zM288 272L288 304C288 312.8 295.2 320 304 320L336 320C344.8 320 352 312.8 352 304L352 272C352 263.2 344.8 256 336 256L304 256C295.2 256 288 263.2 288 272zM416 160C407.2 160 400 167.2 400 176L400 208C400 216.8 407.2 224 416 224L448 224C456.8 224 464 216.8 464 208L464 176C464 167.2 456.8 160 448 160L416 160zM176 272L176 304C176 312.8 183.2 320 192 320L224 320C232.8 320 240 312.8 240 304L240 272C240 263.2 232.8 256 224 256L192 256C183.2 256 176 263.2 176 272zM416 256C407.2 256 400 263.2 400 272L400 304C400 312.8 407.2 320 416 320L448 320C456.8 320 464 312.8 464 304L464 272C464 263.2 456.8 256 448 256L416 256zM352 448L395.8 448C405.7 448 413.3 439 409.8 429.8C396 393.7 361 368 320.1 368C279.2 368 244.2 393.7 230.4 429.8C226.9 439 234.5 448 244.4 448L288.2 448L288.2 528L352.2 528L352.2 448z',
    },
    'arrow-trend-down': {
        viewBox: '0 0 640 640',
        d: 'M416 416C398.3 416 384 430.3 384 448C384 465.7 398.3 480 416 480L576 480C593.7 480 608 465.7 608 448L608 288C608 270.3 593.7 256 576 256C558.3 256 544 270.3 544 288L544 370.7L374.6 201.3C362.1 188.8 341.8 188.8 329.3 201.3L224 306.7L86.6 169.4C74.1 156.9 53.8 156.9 41.3 169.4C28.8 181.9 28.8 202.2 41.3 214.7L201.3 374.7C213.8 387.2 234.1 387.2 246.6 374.7L352 269.3L498.7 416L416 416z',
    },
    'angle-up': {
        viewBox: '0 0 640 640',
        d: 'M297.4 201.4C309.9 188.9 330.2 188.9 342.7 201.4L502.7 361.4C515.2 373.9 515.2 394.2 502.7 406.7C490.2 419.2 469.9 419.2 457.4 406.7L320 269.3L182.6 406.6C170.1 419.1 149.8 419.1 137.3 406.6C124.8 394.1 124.8 373.8 137.3 361.3L297.3 201.3z',
    },
    'angle-down': {
        viewBox: '0 0 640 640',
        d: 'M297.4 438.6C309.9 451.1 330.2 451.1 342.7 438.6L502.7 278.6C515.2 266.1 515.2 245.8 502.7 233.3C490.2 220.8 469.9 220.8 457.4 233.3L320 370.7L182.6 233.4C170.1 220.9 149.8 220.9 137.3 233.4C124.8 245.9 124.8 266.2 137.3 278.7L297.3 438.7z',
    },
    'ban': {
        viewBox: '0 0 640 640',
        d: 'M431.2 476.5L163.5 208.8C141.1 240.2 128 278.6 128 320C128 426 214 512 320 512C361.5 512 399.9 498.9 431.2 476.5zM476.5 431.2C498.9 399.8 512 361.4 512 320C512 214 426 128 320 128C278.5 128 240.1 141.1 208.8 163.5L476.5 431.2zM64 320C64 178.6 178.6 64 320 64C461.4 64 576 178.6 576 320C576 461.4 461.4 576 320 576C178.6 576 64 461.4 64 320z',
    },
};

const irIconsCss = () => `.sc-ir-icons-h{display:block;box-sizing:border-box;margin:0;padding:0}.icon.sc-ir-icons{height:var(--icon-size, 1.25rem);width:var(--icon-size, 1.25rem);margin:0;padding:0}`;

const IrIcons = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    /**
     * The name of the icon to render.
     * Must match a key from the imported `icons` map.
     *
     * Example:
     * ```tsx
     * <ir-icons name="check" />
     * ```
     */
    name;
    /**
     * Additional CSS class applied to the `<svg>` element.
     * Can be used for sizing, positioning, etc.
     */
    svgClassName;
    /**
     * Sets the `color` attribute on the `<svg>` element.
     * Accepts any valid CSS color string.
     */
    color;
    render() {
        const svgPath = icons[this.name] || null;
        if (!svgPath) {
            return null;
        }
        return (index.h("svg", { xmlns: "http://www.w3.org/2000/svg", color: this.color, viewBox: svgPath.viewBox, class: `icon ${this.svgClassName}` }, index.h("path", { fill: "currentColor", d: svgPath.d })));
    }
};
IrIcons.style = irIconsCss();

const irInputCss = () => `wa-input[aria-invalid='true']::part(base),wa-textarea[aria-invalid='true']::part(base),wa-select[aria-invalid='true']::part(combobox){border-color:var(--ir-color-border-error, var(--wa-color-danger-border-loud));outline-color:var(--ir-color-border-error, var(--wa-color-danger-border-loud));border-top-width:var(--error-border-width) !important;border-inline-start-width:var(--error-border-width) !important;border-inline-end-width:var(--error-border-width) !important;border-bottom-width:var(--error-border-width) !important}:host{display:block}`;

const IrInput = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.textChange = index.createEvent(this, "text-change");
        this.inputBlur = index.createEvent(this, "input-blur");
        this.inputFocus = index.createEvent(this, "inputFocus");
        this.inputCleared = index.createEvent(this, "inputCleared");
        if (hostRef.$hostElement$["s-ei"]) {
            this.internals = hostRef.$hostElement$["s-ei"];
        }
        else {
            this.internals = hostRef.$hostElement$.attachInternals();
            hostRef.$hostElement$["s-ei"] = this.internals;
        }
    }
    internals;
    get el() { return index.getElement(this); }
    /** Reflected: a form-associated element is submitted under its `name` *attribute*. */
    name;
    /** The value of the input. */
    value = '';
    /**
     * The type of input. Works the same as a native `<input>` element, but only a subset of types are supported. Defaults
     * to `text`.
     */
    type = 'text';
    /** The default value of the form control. Primarily used for resetting the form control. */
    defaultValue;
    /** The input's size. */
    size = 's';
    /** The input's visual appearance. */
    appearance;
    /** Draws a pill-style input with rounded edges. */
    pill;
    returnMaskedValue = false;
    /** The input's label. If you need to display HTML, use the `label` slot instead. */
    label;
    /** The input's hint. If you need to display HTML, use the `hint` slot instead. */
    hint;
    /** Adds a clear button when the input is not empty. */
    withClear;
    /** Placeholder text to show as a hint when the input is empty. */
    placeholder;
    /** Makes the input readonly. */
    readonly;
    /** Adds a button to toggle the password's visibility. Only applies to password types. */
    passwordToggle;
    /** Determines whether or not the password is currently visible. Only applies to password input types. */
    passwordVisible;
    /** Hides the browser's built-in increment/decrement spin buttons for number inputs. */
    withoutSpinButtons;
    /**
     * By default, form controls are associated with the nearest containing `<form>` element. This attribute allows you
     * to place the form control outside of a form and associate it with the form that has this `id`. The form must be in
     * the same document or shadow root for this to work.
     */
    form;
    /** Makes the input a required field. */
    required;
    /** A regular expression pattern to validate input against. */
    pattern;
    /** The minimum length of input that will be considered valid. */
    minlength;
    /** The maximum length of input that will be considered valid. */
    maxlength;
    /** The input's minimum value. Only applies to date and number input types. */
    min;
    /** The input's maximum value. Only applies to date and number input types. */
    max;
    /**
     * Specifies the granularity that the value must adhere to, or the special value `any` which means no stepping is
     * implied, allowing any numeric value. Only applies to date and number input types.
     */
    step;
    /** Controls whether and how text input is automatically capitalized as it is entered by the user. */
    autocapitalize;
    /** Indicates whether the browser's autocorrect feature is on or off. */
    autocorrect;
    /**
     * Specifies what permission the browser has to provide assistance in filling out form field values. Refer to
     * [this page on MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/autocomplete) for available values.
     */
    autocomplete = 'off';
    /** Indicates that the input should receive focus on page load. */
    autofocus;
    /** Used to customize the label or icon of the Enter key on virtual keyboards. */
    enterkeyhint;
    /** Enables spell checking on the input. */
    spellcheck;
    /**
     * Tells the browser what type of data will be entered by the user, allowing it to display the appropriate virtual
     * keyboard on supportive devices.
     */
    inputmode;
    /**
     * Used for SSR. Will determine if the SSRed component will have the label slot rendered on initial paint.
     */
    withLabel;
    /**
     * Used for SSR. Will determine if the SSRed component will have the hint slot rendered on initial paint.
     */
    withHint;
    /** Mask for the input field (optional) */
    mask;
    /** Disables the input. */
    disabled;
    /**
     * Custom CSS classes applied to the inner `<wa-input>` element.
     *
     * You can also target the exposed parts `::part(input)` and `::part(base)`
     * for deeper styling of the native input and container.
     */
    inputClass;
    textChange;
    inputBlur;
    inputFocus;
    inputCleared;
    isValid = true;
    slotState = new Map();
    _mask;
    inputRef;
    animationFrame;
    slotObserver;
    SLOT_NAMES = ['label', 'start', 'end', 'clear-icon', 'hide-password-icon', 'show-password-icon', 'hint'];
    componentWillLoad() {
        if (this.mask === 'price' && typeof this.mask === 'string') {
            this.returnMaskedValue = true;
        }
        this.updateSlotState();
    }
    componentDidLoad() {
        if (this.disabled) {
            this.inputRef.disabled = this.disabled;
        }
        // Report the initial value too, so a prefilled field is posted without being typed into.
        this.syncFormValue(this.value);
        // track slotted prefix to compute width
        this.initializeMask();
        this.setupSlotListeners();
    }
    disconnectedCallback() {
        this.destroyMask();
        this.removeSlotListeners();
    }
    handleDisabledChange(newValue, oldValue) {
        if (newValue !== oldValue) {
            this.inputRef.disabled = newValue;
        }
    }
    handleMaskPropsChange() {
        if (!this.inputRef)
            return;
        const hasMask = Boolean(this.resolveMask());
        if (!hasMask) {
            this.destroyMask();
            return;
        }
        this.rebuildMask();
    }
    handleAriaInvalidChange(e) {
        this.isValid = !JSON.parse(e);
    }
    handleValueChange(newValue, oldValue) {
        if (newValue !== oldValue) {
            this.syncFormValue(newValue);
            if (this._mask && this.returnMaskedValue && this._mask.value !== newValue) {
                this._mask.value = newValue;
                this._mask.updateValue();
            }
        }
    }
    handleInput = (nextValue) => {
        if (!this.mask && this.isNumericField()) {
            const normalized = number.normalizeNumericInput(nextValue);
            if (normalized !== nextValue && this.inputRef) {
                // Rewrite the field directly: if the Latin value equals the current one, no re-render would fix the display.
                this.inputRef.value = normalized;
            }
            nextValue = normalized;
        }
        if (nextValue === this.value) {
            return;
        }
        if (!this.mask) {
            this.value = nextValue ?? '';
        }
        this.syncFormValue(nextValue);
        this.textChange.emit(nextValue ?? '');
    };
    /** Keeps the value submitted with the owning `<form>` in step with what the field holds. */
    syncFormValue(value) {
        this.internals?.setFormValue?.(value ?? '');
    }
    /** Unmasked phone/number fields get Latin digits too; free-text fields are left as typed. */
    isNumericField() {
        return ['tel', 'number'].includes(this.type) || ['tel', 'numeric', 'decimal'].includes(this.inputmode);
    }
    async initializeMask() {
        if (!this.inputRef)
            return;
        const maskOpts = this.buildMaskOptions();
        if (!maskOpts)
            return;
        await customElements.whenDefined('wa-input'); // optional, but explicit
        await this.inputRef.updateComplete;
        const nativeInput = this.inputRef.input;
        if (!nativeInput)
            return;
        this._mask = index$1.IMask(nativeInput, maskOpts);
        if (this.value) {
            if (this.returnMaskedValue) {
                this._mask.unmaskedValue = this.value;
            }
            else {
                this._mask.value = this.value;
            }
        }
        this._mask.on('accept', () => {
            const isEmpty = this.inputRef.value.trim() === '' || this._mask.unmaskedValue === '';
            const value = isEmpty ? '' : this.returnMaskedValue ? this._mask.unmaskedValue : this._mask.value;
            this.handleInput(value);
        });
    }
    setupSlotListeners() {
        // Listen to slotchange events on the host element
        this.el.addEventListener('slotchange', this.handleSlotChange);
        // Also use MutationObserver as a fallback for browsers that don't fire slotchange reliably
        this.slotObserver = new MutationObserver(this.handleSlotChange);
        this.slotObserver.observe(this.el, {
            childList: true,
            subtree: true,
            attributes: true,
            attributeFilter: ['slot'],
        });
    }
    removeSlotListeners() {
        this.el.removeEventListener('slotchange', this.handleSlotChange);
        this.slotObserver?.disconnect();
    }
    handleSlotChange = () => {
        this.updateSlotState();
    };
    updateSlotState() {
        const newState = new Map();
        this.SLOT_NAMES.forEach(name => {
            newState.set(name, this.hasSlot(name));
        });
        this.slotState = newState;
    }
    rebuildMask() {
        this.destroyMask();
        this.initializeMask();
    }
    destroyMask() {
        this._mask?.destroy();
        this._mask = undefined;
        this.clearAnimationFrame();
    }
    clearAnimationFrame() {
        if (this.animationFrame) {
            cancelAnimationFrame(this.animationFrame);
            this.animationFrame = undefined;
        }
    }
    buildMaskOptions() {
        const resolvedMask = this.resolveMask();
        if (!resolvedMask)
            return;
        const maskOpts = typeof resolvedMask === 'object' && resolvedMask !== null && !Array.isArray(resolvedMask) ? { ...resolvedMask } : { mask: resolvedMask };
        if (this.min !== undefined) {
            maskOpts.min = this.min;
        }
        if (this.max !== undefined) {
            maskOpts.max = this.max;
        }
        return masks.withLatinDigits(maskOpts);
    }
    resolveMask() {
        if (!this.mask)
            return;
        if (typeof this.mask === 'string') {
            return masks.masks[this.mask];
        }
        return this.mask;
    }
    handleChange = (e) => {
        e.stopImmediatePropagation();
        e.stopPropagation();
        if (!this.mask)
            this.handleInput(e.target.value);
    };
    handleClear = (e) => {
        e.stopImmediatePropagation();
        e.stopPropagation();
        this.inputCleared.emit();
        if (this._mask) {
            this._mask.value = '';
        }
        this.handleInput('');
    };
    handleBlur = (e) => {
        e.stopImmediatePropagation();
        e.stopPropagation();
        this.inputBlur.emit();
    };
    handleFocus = (e) => {
        e.stopImmediatePropagation();
        e.stopPropagation();
        this.inputFocus.emit();
    };
    hasSlot(name) {
        return !!this.el.querySelector(`[slot="${name}"]`);
    }
    async focusInput() {
        this.inputRef?.focus();
    }
    async blurInput() {
        this.inputRef?.blur();
    }
    /**
     * Returns the native `<input>` element nested inside `wa-input`.
     * Needed by composite controls (e.g. `ir-autocomplete`) to wire ARIA
     * combobox attributes and element reflection onto the real input.
     */
    async getNativeInput() {
        if (!this.inputRef)
            return undefined;
        await this.inputRef.updateComplete;
        return this.inputRef.input;
    }
    render() {
        let displayValue = this.value;
        if (this._mask && this.returnMaskedValue) {
            // IMask holds the formatted string (e.g., "1,000.00")
            // this.value holds the raw number (e.g., "1000")
            // We must pass "1,000.00" to wa-input to avoid the overwrite warning
            displayValue = this._mask.value;
        }
        return (index.h(index.Host, { key: '1b17839f8174f6a2405119ae398d6a85a7fe38fb' }, index.h("wa-input", { key: '0a9491baa121a199c8a662b36c7577ff1becfc65', part: "wa-input", type: this.type, name: this.name, value: displayValue, ref: el => (this.inputRef = el), defaultValue: this.defaultValue, size: this.size, appearance: this.appearance, pill: this.pill, "aria-invalid": String(!this.isValid), label: this.label, hint: this.hint, withClear: this.withClear, placeholder: this.placeholder, readonly: this.readonly, passwordToggle: this.passwordToggle, passwordVisible: this.passwordVisible, withoutSpinButtons: this.withoutSpinButtons, form: this.form, required: this.required, pattern: this.pattern, minlength: this.minlength, maxlength: this.maxlength, min: this.min, max: this.max, step: this.step, class: this.inputClass, autocapitalize: this.autocapitalize, autocorrect: this.autocorrect, autocomplete: this.autocomplete, autofocus: this.autofocus, enterkeyhint: this.enterkeyhint, spellcheck: this.spellcheck, inputmode: this.inputmode, withLabel: this.withLabel, withHint: this.withHint, oninput: this.handleChange, "onwa-clear": this.handleClear, onblur: this.handleBlur, onfocus: this.handleFocus, exportparts: "base, hint, label, input, start, end, clear-button, password-toggle-button" }, this.slotState.get('label') && index.h("slot", { key: '5b3432ed6902f96d814aa94df231a2ba746ba041', name: "label", slot: "label" }), this.slotState.get('start') && index.h("slot", { key: '1e9b82584b5e661d4ade3a16a956bcc029d91d44', name: "start", slot: "start" }), this.slotState.get('end') && index.h("slot", { key: 'd284bc57f93f06813b91ea7031a8edfd73c8a609', name: "end", slot: "end" }), this.slotState.get('clear-icon') && index.h("slot", { key: '3d461574f0eeb1fb70d1e9d5363f34a508db91fb', name: "clear-icon", slot: "clear-icon" }), this.slotState.get('hide-password-icon') && index.h("slot", { key: 'c0dfc330eebe0569db89873aa4ba26be763186e3', name: "hide-password-icon", slot: "hide-password-icon" }), this.slotState.get('show-password-icon') && index.h("slot", { key: '3e49070a1ec6704600d6958b549ea7250b611ec6', name: "show-password-icon", slot: "show-password-icon" }), this.slotState.get('hint') && index.h("slot", { key: 'a3f0969678d91a3173d2016d4230b55544289169', name: "hint", slot: "hint" }))));
    }
    static get formAssociated() { return true; }
    static get watchers() { return {
        "disabled": [{
                "handleDisabledChange": 0
            }],
        "mask": [{
                "handleMaskPropsChange": 0
            }],
        "min": [{
                "handleMaskPropsChange": 0
            }],
        "max": [{
                "handleMaskPropsChange": 0
            }],
        "aria-invalid": [{
                "handleAriaInvalidChange": 0
            }],
        "value": [{
                "handleValueChange": 0
            }]
    }; }
};
IrInput.style = irInputCss();

class InterceptorError extends Error {
    code;
    constructor(message, code) {
        super(message);
        this.name = 'InterceptorError';
        this.code = code;
        // Ensure the prototype chain is correct (important for `instanceof` checks)
        Object.setPrototypeOf(this, InterceptorError.prototype);
    }
}

const irInterceptorCss = () => `.page-loader.sc-ir-interceptor{width:1.25rem;height:1.25rem;border:2.5px solid #3f3f3f;border-bottom-color:transparent;border-radius:50%;display:inline-block;box-sizing:border-box;animation:rotation 1s linear infinite}.loaderContainer.sc-ir-interceptor{padding:20px;display:flex;align-items:center;justify-content:center;border-radius:5px}.loadingScreenContainer.sc-ir-interceptor{position:fixed;top:0;inset-inline-start:0;height:100vh;width:100vw;z-index:100000;background:var(--ir-color-loader, rgba(255, 255, 255, 0.2));backdrop-filter:blur(5px);pointer-events:all;display:flex;align-items:center;justify-content:center}@keyframes rotation{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}`;

const IrInterceptor = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.toast = index.createEvent(this, "toast");
    }
    /**
     * List of endpoint paths that should trigger loader logic and OTP handling.
     */
    handledEndpoints = ['/Get_Exposed_Calendar', '/Get_Exposed_Calendar_V4', '/ReAllocate_Exposed_Room', '/Get_Exposed_Bookings', '/UnBlock_Exposed_Unit'];
    /**
     * List of endpoints for which to suppress toast messages.
     */
    suppressToastEndpoints = [];
    /**
     * Indicates whether the loader is visible.
     */
    isShown = false;
    /**
     * Global loading indicator toggle.
     */
    isLoading = false;
    /**
     * Indicates if the intercepted request involves unassigned units.
     */
    isUnassignedUnit = false;
    /**
     * Count of `/Get_Exposed_Calendar` calls in progress.
     */
    endpointsCount = 0;
    /**
     * Identifier of the endpoint that manually disabled page loader.
     */
    isPageLoadingStopped = null;
    /**
     * Controls visibility of the OTP modal.
     */
    showModal;
    /**
     * Request path (used in OTP handling).
     */
    requestUrl;
    /**
     * The OTP endpoint path.
     */
    baseOTPUrl;
    /**
     * Email for OTP prompt.
     */
    email;
    /**
     * Emits a toast notification (`type`, `title`, `description`, `position`).
     */
    toast;
    otpModal;
    pendingConfig;
    pendingResolve;
    pendingReject;
    response;
    handleStopPageLoading(e) {
        this.isLoading = false;
        this.isPageLoadingStopped = e.detail;
    }
    componentWillLoad() {
        this.setupAxiosInterceptors();
    }
    /**
     * Sets up Axios request and response interceptors.
     */
    setupAxiosInterceptors() {
        axios.axios.interceptors.request.use(this.handleRequest.bind(this), this.handleError.bind(this));
        axios.axios.interceptors.response.use(this.handleResponse.bind(this), this.handleError.bind(this));
    }
    getLastPathSegment(url) {
        return `/${new URL(url, 'http://dummy.local').pathname.split('/').filter(Boolean).pop()}`;
    }
    /**
     * Removes query params from URL for consistent endpoint matching.
     */
    extractEndpoint(url) {
        return this.getLastPathSegment(url.split('?')[0]);
    }
    /**
     * Returns true if the given endpoint is listed as "handled".
     */
    isHandledEndpoint(url) {
        return this.handledEndpoints.includes(url);
    }
    /**
     * Handles outbound Axios requests.
     * - Triggers global loader for certain endpoints
     * - Tracks `/Get_Exposed_Calendar` calls separately
     */
    handleRequest(config) {
        const extractedUrl = this.extractEndpoint(config.url);
        irInterceptor_store.interceptor_requests[extractedUrl] = 'pending';
        config.params = config.params || {};
        // if (this.ticket) {
        //   config.params.Ticket = this.ticket;
        // }
        if (this.isHandledEndpoint(extractedUrl) && this.isPageLoadingStopped !== extractedUrl) {
            if (!extractedUrl.includes('/Get_Exposed_Calendar')) {
                this.isLoading = true;
            }
            else {
                if (this.endpointsCount > 0) {
                    this.isLoading = true;
                }
            }
        }
        if (extractedUrl.includes('/Get_Exposed_Calendar')) {
            this.endpointsCount = this.endpointsCount + 1;
        }
        return config;
    }
    /**
     * Handles inbound Axios responses:
     * - Resets loader
     * - Handles OTP flows and exception messages
     */
    async handleResponse(response) {
        const extractedUrl = this.extractEndpoint(response.config.url);
        if (this.isHandledEndpoint(extractedUrl)) {
            this.isLoading = false;
            this.isPageLoadingStopped = null;
        }
        irInterceptor_store.interceptor_requests[extractedUrl] = 'done';
        if (extractedUrl === '/Validate_Exposed_OTP') {
            return response;
        }
        if (response.data.ExceptionCode === 'OTP') {
            return this.handleOtpResponse({ response, extractedUrl });
        }
        if (response.data.ExceptionMsg?.trim()) {
            this.handleResponseExceptions({ response, extractedUrl });
        }
        return response;
    }
    /**
     * Handles and throws known API exception messages.
     */
    handleResponseExceptions({ response, extractedUrl }) {
        this.handleError(response.data.ExceptionMsg, extractedUrl, response.data.ExceptionCode);
        throw new InterceptorError(response.data.ExceptionMsg, response.data.ExceptionCode);
    }
    /**
     * Handles OTP-required API responses:
     * - Shows OTP modal
     * - Stores request context
     * - Defers resolution to OTP modal
     */
    handleOtpResponse({ extractedUrl, response }) {
        this.showModal = true;
        this.email = response.data.ExceptionMsg;
        const name = extractedUrl.slice(1);
        this.baseOTPUrl = name;
        if (name === 'Check_OTP_Necessity') {
            let methodName;
            try {
                const body = typeof response.config.data === 'string' ? JSON.parse(response.config.data) : response.config.data;
                methodName = body.METHOD_NAME;
            }
            catch (e) {
                console.error('Failed to parse request body for METHOD_NAME', e);
                methodName = name; // fallback
            }
            this.requestUrl = methodName;
        }
        else {
            this.requestUrl = name;
        }
        this.pendingConfig = response.config;
        this.response = response;
        return new Promise((resolve, reject) => {
            this.pendingResolve = resolve;
            this.pendingReject = reject;
            setTimeout(() => {
                this.otpModal?.openModal();
            }, 10);
        });
    }
    /**
     * Displays error toasts unless the endpoint is configured to suppress them.
     *
     * Also bound as the axios reject handler, where `error` is an error object rather than the
     * API's (already localized) `ExceptionMsg` — those get a generic localized title instead of
     * their English `toString()`.
     */
    handleError(error, url, code) {
        const shouldSuppressToast = this.suppressToastEndpoints.includes(url);
        if (!shouldSuppressToast || (shouldSuppressToast && !code)) {
            this.toast.emit({
                type: 'error',
                title: typeof error === 'string' && error.trim() ? error : t.t('Lcz_SomethingWentWrong', { fallback: 'Something went wrong' }),
                description: '',
                position: 'top-right',
            });
        }
        return Promise.reject(error);
    }
    /**
     * Handles the OTP modal completion.
     * Retries the request or cancels based on user action.
     */
    async handleOtpFinished(ev) {
        if (!this.pendingConfig || !this.pendingResolve || !this.pendingReject) {
            return;
        }
        const { otp, type } = ev.detail;
        if (type === 'cancel') {
            const cancelResp = {
                config: this.pendingConfig,
                data: { cancelled: true, baseOTPUrl: this.baseOTPUrl },
                status: 0,
                statusText: 'OTP Cancelled',
                headers: {},
                request: {},
            };
            this.pendingResolve(cancelResp);
        }
        else if (type === 'success') {
            if (!otp) {
                this.pendingReject(new Error('OTP cancelled by user'));
            }
            else if (this.baseOTPUrl === 'Check_OTP_Necessity') {
                // don't resend, just resolve with the original response
                this.pendingResolve(this.response);
            }
            else {
                try {
                    const retryConfig = {
                        ...this.pendingConfig,
                        data: typeof this.pendingConfig.data === 'string' ? JSON.parse(this.pendingConfig.data) : this.pendingConfig.data || {},
                    };
                    const resp = await axios.axios.request(retryConfig);
                    this.pendingResolve(resp);
                }
                catch (err) {
                    this.pendingReject(err);
                }
            }
        }
        // common clean-up
        this.pendingConfig = undefined;
        this.pendingResolve = undefined;
        this.pendingReject = undefined;
        this.showModal = false;
        this.baseOTPUrl = null;
    }
    render() {
        return (index.h(index.Host, { key: '9191ae20a66ca2385c23a773e2d754faa757131a' }, this.isLoading && !this.isPageLoadingStopped && (index.h("div", { key: '21b49929486550d153400b4d867b758f003647a7', class: "loadingScreenContainer" }, index.h("div", { key: 'ef01320e079f19d8fb1bfe1d895755311812fbe4', class: "loaderContainer" }, index.h("wa-spinner", { key: '3413da1cd2074e8bc228e746d3d27abaafc337b3', style: { 'fontSize': '2.5rem', '--track-width': '3.5px' } })))), this.showModal && (index.h("ir-otp-modal", { key: 'faf58780748b020ca63006c83bec733c4131c80d', email: this.email, baseOTPUrl: this.baseOTPUrl, requestUrl: this.requestUrl, ref: el => (this.otpModal = el), onOtpFinished: this.handleOtpFinished.bind(this) }))));
    }
};
IrInterceptor.style = irInterceptorCss();

const irLoadingScreenCss = () => `.loader__container.sc-ir-loading-screen{position:fixed;z-index:1000;inset:0;display:flex;align-items:center;justify-content:center;background:var(--wa-color-surface-default, white);margin:0 !important;padding:0 !important;box-sizing:border-box}.loader.sc-ir-loading-screen{width:1.25rem;height:1.25rem;border:2.5px solid #3f3f3f;border-bottom-color:transparent;border-radius:50%;display:inline-block;box-sizing:border-box;animation:rotation 1s linear infinite}.loaderContainer.sc-ir-loading-screen{position:absolute;z-index:100001;padding:20px;top:50%;left:50%;transform:translate(-50%, -50%);background:var(--wa-color-surface-default, white);display:flex;align-items:center;justify-content:center;gap:20px;border-radius:5px}@keyframes rotation{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}`;

const IrLoadingScreen = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    message = '';
    render() {
        return (index.h("div", { key: 'd41d18392591a3a5b64ccdd0a60b9adb7f76ec68', class: "loader__container", "data-testid": "loading-screen" }, index.h("wa-spinner", { key: '4c80fc2289e91098c043776ef3915cb7c156131d', style: { 'fontSize': '2.5rem', '--track-width': '3.5px' } })));
    }
};
IrLoadingScreen.style = irLoadingScreenCss();

const irOtpCss = () => `.otp-input-wrapper{display:flex;gap:0.5rem;justify-content:space-evenly}.otp-digit{--otp-size:3rem;width:var(--otp-size) !important;height:var(--otp-size) !important;padding:0 !important;font-size:24px !important;font-weight:500 !important;text-align:center !important;padding:0 var(--wa-form-control-padding-inline) !important;color:var(--wa-form-control-value-color) !important;font-size:var(--wa-form-control-value-size) !important;font-family:inherit !important;font-weight:var(--wa-form-control-value-font-weight) !important;line-height:var(--wa-form-control-value-line-height) !important;vertical-align:middle !important;background-color:var(--wa-form-control-background-color) !important;border-color:var(--wa-form-control-border-color) !important;border-style:var(--wa-form-control-border-style) !important;border-width:var(--wa-form-control-border-width) !important;border-radius:var(--wa-form-control-border-radius) !important;transition:background-color var(--wa-transition-normal),     border-color var(--wa-transition-normal),     outline-color var(--wa-transition-fast) !important;transition-timing-function:var(--wa-transition-easing) !important;outline:var(--wa-focus-ring-style) var(--wa-focus-ring-width) transparent !important;outline-offset:var(--wa-focus-ring-offset) !important;cursor:text !important;box-sizing:border-box}.otp-digit:focus-visible{outline-color:var(--wa-color-focus)}.otp-digit:disabled{opacity:0.5;cursor:not-allowed}input[type='number']::-webkit-inner-spin-button,input[type='number']::-webkit-outer-spin-button{-webkit-appearance:none;margin:0}input[type='number']{-moz-appearance:textfield}@media (max-width: 480px){.otp-digit{width:35px;height:45px;font-size:20px}.otp-input-wrapper{gap:6px}}@media (max-width: 360px){.otp-digit{width:30px;height:40px;font-size:18px}.otp-input-wrapper{gap:4px}}`;

const IrOtp = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.otpChange = index.createEvent(this, "otpChange");
        this.otpComplete = index.createEvent(this, "otpComplete");
    }
    /**
     * The length of the OTP code
     */
    length = 6;
    /**
     * The default OTP code
     */
    defaultValue;
    /**
     * Whether the input is disabled
     */
    disabled = false;
    /**
     * Placeholder character to display
     */
    placeholder = '';
    /**
     * Input type - can be 'text', 'password', 'number', or 'tel'
     */
    type = 'number';
    /**
     * Auto focus on the first input when component loads
     */
    autoFocus = true;
    /**
     * Whether to mask the input (show dots instead of text)
     */
    secure = false;
    /**
     * Allow only numbers (0-9) as input
     */
    numbersOnly = false;
    /**
     * Event emitted when the OTP value changes
     */
    otpChange;
    /**
     * Event emitted when the OTP is complete
     */
    otpComplete;
    /**
     * Current OTP value as an array of characters
     */
    otpValues = [];
    /**
     * Reference to input elements
     */
    inputRefs = [];
    /**
     * Initialize the component
     */
    componentWillLoad() {
        this.otpValues = Array(this.length).fill('');
        if (this.defaultValue) {
            this.setValue(this.defaultValue);
        }
    }
    /**
     * Focus the first input after component renders
     */
    componentDidLoad() {
        if (this.autoFocus && this.inputRefs[0]) {
            setTimeout(() => {
                this.inputRefs[0].focus();
            }, 0);
        }
    }
    /**
     * Watch for length changes and update the OTP values array
     */
    handleLengthChange(newLength) {
        if (newLength < 1)
            return;
        const oldLength = this.otpValues.length;
        if (newLength > oldLength) {
            // Add empty slots
            this.otpValues = [...this.otpValues, ...Array(newLength - oldLength).fill('')];
        }
        else if (newLength < oldLength) {
            // Remove extra slots
            this.otpValues = this.otpValues.slice(0, newLength);
        }
        this.emitChanges();
    }
    /**
     * Update the current OTP value at the specified index
     */
    handleInput = (event, index) => {
        const input = event.target;
        let value = input.value;
        // For number input type, restrict to digits only
        if (this.numbersOnly) {
            value = value.replace(/[^0-9]/g, '');
        }
        // Take only the last character if someone enters multiple
        if (value.length > 1) {
            value = value.slice(-1);
            input.value = value;
        }
        this.otpValues[index] = value;
        this.emitChanges();
        // Move to next input if this one is filled
        if (value && index < this.length - 1) {
            this.inputRefs[index + 1].focus();
        }
    };
    /**
     * Handle keyboard navigation
     */
    handleKeyDown = (event, index) => {
        switch (event.key) {
            case 'Backspace':
                if (!this.otpValues[index] && index > 0) {
                    // If current field is empty and backspace is pressed, go to previous field
                    this.inputRefs[index - 1].focus();
                    // Prevent default to avoid browser navigation
                    event.preventDefault();
                }
                break;
            case 'Delete':
                // Clear current input on delete
                this.otpValues[index] = '';
                this.emitChanges();
                break;
            case 'ArrowLeft':
                // Move to previous input on left arrow
                if (index > 0) {
                    this.inputRefs[index - 1].focus();
                    event.preventDefault();
                }
                break;
            case 'ArrowRight':
                // Move to next input on right arrow
                if (index < this.length - 1) {
                    this.inputRefs[index + 1].focus();
                    event.preventDefault();
                }
                break;
            case 'Home':
                // Move to first input
                this.inputRefs[0].focus();
                event.preventDefault();
                break;
            case 'End':
                // Move to last input
                this.inputRefs[this.length - 1].focus();
                event.preventDefault();
                break;
        }
    };
    /**
     * Handle paste event to populate the OTP fields
     */
    handlePaste = (event, index) => {
        event.preventDefault();
        const pastedData = event.clipboardData?.getData('text') || '';
        // If numbersOnly is enabled, filter non-number characters
        const filteredData = this.numbersOnly ? pastedData.replace(/[^0-9]/g, '') : pastedData;
        // Fill OTP values with pasted data
        for (let i = 0; i < Math.min(filteredData.length, this.length - index); i++) {
            this.otpValues[index + i] = filteredData[i];
        }
        // Update inputs with new values
        this.inputRefs.forEach((input, idx) => {
            input.value = this.otpValues[idx] || '';
        });
        // Focus on the next empty input or the last one
        const nextEmptyIndex = this.otpValues.findIndex(val => !val);
        if (nextEmptyIndex !== -1 && nextEmptyIndex < this.length) {
            this.inputRefs[nextEmptyIndex].focus();
        }
        else {
            this.inputRefs[this.length - 1].focus();
        }
        this.emitChanges();
    };
    /**
     * Focus handler to select all text when focused
     */
    handleFocus = (event) => {
        const input = event.target;
        if (input.value) {
            setTimeout(() => input.select(), 0);
        }
    };
    /**
     * Helper method to emit change events
     */
    emitChanges() {
        const otpValue = this.otpValues.join('');
        this.otpChange.emit(otpValue);
        // If all fields are filled, trigger the complete event
        if (this.otpValues.every(val => val !== '') && this.otpValues.length === this.length) {
            this.otpComplete.emit(otpValue);
        }
    }
    /**
     * Manually clear all inputs
     */
    clear() {
        this.otpValues = Array(this.length).fill('');
        this.inputRefs.forEach(input => {
            input.value = '';
        });
        this.emitChanges();
        // Focus the first input after clearing
        if (this.inputRefs[0]) {
            this.inputRefs[0].focus();
        }
    }
    /**
     * Set OTP values programmatically
     */
    setValue(value) {
        const valueArray = value.split('');
        for (let i = 0; i < this.length; i++) {
            this.otpValues[i] = i < valueArray.length ? valueArray[i] : '';
        }
        // Update the actual input elements
        this.inputRefs.forEach((input, idx) => {
            input.value = this.otpValues[idx] || '';
        });
        this.emitChanges();
    }
    render() {
        return (index.h(index.Host, { key: 'fb0f01dffb17e1c284370a7e33ccec1837f75267', class: "otp-input-container" }, index.h("div", { key: 'aa95682ad737d05f4025842c8261efd3804ec82e', class: "otp-input-wrapper" }, Array(this.length)
            .fill(null)
            .map((_, index$1) => (index.h("input", { ref: el => (this.inputRefs[index$1] = el), type: this.type, inputmode: this.numbersOnly ? 'numeric' : 'text', class: "otp-digit", maxlength: "1", placeholder: this.placeholder, disabled: this.disabled, autocomplete: "one-time-code", value: this.otpValues[index$1], onInput: e => this.handleInput(e, index$1), onKeyDown: e => this.handleKeyDown(e, index$1), onPaste: e => this.handlePaste(e, index$1), onFocus: this.handleFocus, "aria-label": t.t('Lcz_DigitOfLength', { fallback: 'Digit %1 of %2', params: [number.formatCount(index$1 + 1), number.formatCount(this.length)] }) }))))));
    }
    static get watchers() { return {
        "length": [{
                "handleLengthChange": 0
            }]
    }; }
};
IrOtp.style = irOtpCss();

const irOtpModalCss = () => `:host{display:block;box-sizing:border-box}:host(*){box-sizing:border-box}.otp-modal{--ir-dialog-width:fit-content}.otp-modal-header{display:flex;justify-content:space-between;padding-bottom:1rem;border-bottom:0}.otp-modal-title{margin:0;font-family:var(--wa-font-family-heading) !important;font-weight:var(--wa-font-weight-heading) !important;line-height:var(--wa-line-height-condensed) !important;text-wrap:balance !important;font-size:var(--wa-font-size-l)}.otp-modal-body{display:flex;flex-direction:column;max-height:100%}.verification-message{font-size:var(--wa-font-size-m);max-width:90%;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;margin:0;text-align:start;padding-bottom:1rem}.otp-error{margin:0.25rem 0 0;padding:0;font-size:0.875em;color:var(--wa-color-danger-fill-loud)}.otp-resend-timer{margin-top:0.5rem;font-size:0.875em}.otp-resend-btn{margin-top:0.5rem;font-size:var(--wa-font-size-s)}.otp-modal-footer{display:flex;gap:0.5rem;width:100%;border-top:0;flex-direction:row;align-items:center;justify-content:flex-end}.modal-loading-container{display:flex;align-items:center;justify-content:center;height:250px;width:80vw}@media (min-width: 768px){.modal-loading-container{width:380px}.verification-message{max-width:350px}}`;

const IrOtpModal = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.otpFinished = index.createEvent(this, "otpFinished");
    }
    language = 'en';
    /** Number of seconds to wait before allowing OTP resend */
    resendTimer = 60;
    /** URL or endpoint used to validate the OTP */
    requestUrl;
    /** URL or endpoint used to validate the OTP */
    baseOTPUrl;
    /** Whether the resend option should be visible */
    showResend = true;
    /** User's email address to display in the modal and send the OTP to */
    email;
    /** Number of digits the OTP should have */
    otpLength = 6;
    /** ticket for verifying and resending the verification code */
    ticket;
    otp = '';
    error = '';
    isLoading = false;
    timer = 60;
    open = false;
    get el() { return index.getElement(this); }
    dialogRef;
    timerInterval;
    systemService = new system_service.SystemService();
    apiClientService = new ApiClient.ApiClient();
    otpVerificationSchema = types.objectType({ email: types.stringType().nonempty(), requestUrl: types.stringType().nonempty(), otp: types.stringType().length(this.otpLength) });
    /** Emits the final OTP (or empty on cancel) */
    otpFinished;
    isInitializing;
    componentWillLoad() {
        if (this.ticket) {
            this.apiClientService.setApiClient(this.ticket);
        }
        this.fetchLocale();
    }
    handleTicketChange(newValue, oldValue) {
        if (newValue !== oldValue) {
            this.apiClientService.setApiClient(newValue);
            this.fetchLocale();
        }
    }
    /** Open & reset everything */
    async openModal() {
        this.resetState();
        this.open = true;
        if (this.showResend)
            this.startTimer();
        await this.focusFirstInput();
    }
    /** Hide & clear timer */
    async closeModal() {
        this.open = false;
        this.otp = null;
        this.clearTimer();
    }
    /**
     * Keeps the dialog non-dismissible: Escape / outside-click / programmatic
     * hide are ignored, so the flow can only be ended via the Cancel/Verify
     * buttons (which call closeModal explicitly).
     */
    handleDialogHide(e) {
        e.preventDefault();
        // ir-dialog has already flipped its internal open state to false; since our
        // `open` prop is unchanged Stencil won't re-push it, so re-open imperatively.
        if (this.open) {
            this.dialogRef?.openModal();
        }
    }
    async fetchLocale() {
        if (!this.apiClientService.getToken()) {
            return;
        }
        this.isInitializing = true;
        await locale_controller.LocaleController.load({ language: this.language, tables: locale_controller.SCREEN_TABLES.otpModal });
        this.isInitializing = false;
    }
    resetState() {
        this.otp = '';
        this.error = '';
        this.isLoading = false;
        this.timer = 60;
        this.clearTimer();
    }
    startTimer() {
        this.clearTimer();
        this.timerInterval = window.setInterval(() => {
            if (this.timer > 0) {
                this.timer--;
            }
            else {
                this.clearTimer();
            }
        }, 1000);
    }
    clearTimer() {
        if (this.timerInterval) {
            clearInterval(this.timerInterval);
            this.timerInterval = null;
        }
    }
    async focusFirstInput() {
        await new Promise(r => setTimeout(r, 50));
        const first = this.el.querySelector('input');
        first && first.focus();
    }
    handleOtpComplete = (e) => {
        this.error = '';
        this.otp = e.detail;
    };
    async verifyOtp() {
        if (this.otp.length < this.otpLength)
            return;
        this.isLoading = true;
        this.otpVerificationSchema.parse({
            otp: this.otp,
            requestUrl: this.requestUrl,
            email: this.email,
        });
        try {
            await this.systemService.validateOTP({ METHOD_NAME: this.requestUrl, OTP: this.otp });
            this.otpFinished.emit({ otp: this.otp, type: 'success' });
            this.closeModal();
        }
        catch (err) {
            this.error = t.t('Lcz_VerificationFailedTryAgain', { fallback: 'Verification failed. Please try again.' });
        }
        finally {
            this.isLoading = false;
        }
    }
    async resendOtp() {
        if (this.timer > 0)
            return;
        // Resend otp
        try {
            await this.systemService.resendOTP({ METHOD_NAME: this.requestUrl });
            this.timer = 60;
            this.startTimer();
        }
        catch (error) {
            console.log(error);
        }
    }
    handleCancelClicked() {
        if (this.baseOTPUrl === 'Check_OTP_Necessity') {
            this.closeModal();
            this.otpFinished.emit({
                otp: null,
                type: 'cancelled',
            });
            return;
        }
        window.location.reload();
    }
    disconnectedCallback() {
        this.clearTimer();
    }
    render() {
        return (index.h(index.Host, { key: '411e867e29ed43674fadfa2e2f8b1b159b4be188' }, index.h("ir-dialog", { key: '7b518409556286b3a591fcb68488bd27dd2d2b31', class: "otp-modal", ref: el => (this.dialogRef = el), open: this.open, withoutHeader: true, lightDismiss: false, onIrDialogHide: e => this.handleDialogHide(e) }, this.isInitializing || !localeScope.locales.entries ? (index.h("div", { class: "modal-loading-container" }, index.h("ir-spinner", null))) : (index.h(index.Fragment, null, index.h("header", { class: "otp-modal-header" }, index.h("h5", { class: "otp-modal-title" }, t.t('Lcz_VerifyYourIdentity'))), index.h("section", { class: "otp-modal-body" }, index.h("p", { class: "verification-message" }, t.t('Lcz_WeSentYuoVerificationCode'), " ", this.email), index.h("ir-otp", { autoFocus: true, length: this.otpLength, defaultValue: this.otp, onOtpComplete: this.handleOtpComplete }), this.error && index.h("p", { class: "otp-error" }, this.error), this.showResend && (index.h(index.Fragment, null, this.timer > 0 ? (index.h("p", { class: "otp-resend-timer" }, t.t('Lcz_ResendCode'), " 00:", String(this.timer).padStart(2, '0'))) : (index.h("ir-custom-button", { class: "otp-resend-btn", link: true, size: "s", onClickHandler: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.resendOtp();
            } }, t.t('Lcz_ResendCodeAction', { fallback: 'Didn’t receive code? Resend' })))))), index.h("div", { slot: "footer", class: "ir-dialog__footer" }, index.h("ir-custom-button", { variant: "neutral", appearance: "filled", size: "m", onClickHandler: () => this.handleCancelClicked() }, t.t('Lcz_Cancel', { fallback: 'Cancel' })), index.h("ir-custom-button", { variant: "brand", size: "m", loading: this.isLoading, disabled: this.otp?.length < this.otpLength || this.isLoading, onClickHandler: () => this.verifyOtp() }, t.t('Lcz_VerifyNow'))))))));
    }
    static get watchers() { return {
        "ticket": [{
                "handleTicketChange": 0
            }]
    }; }
};
IrOtpModal.style = irOtpModalCss();

const irPasswordValidatorCss = () => `.sc-ir-password-validator-h{display:block}`;

const IrPasswordValidator = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.passwordValidationChange = index.createEvent(this, "passwordValidationChange");
    }
    /**
     * The password string to validate
     */
    password = '';
    passwordValidationChange;
    handlePasswordChange(newValue, oldValue) {
        if (newValue !== oldValue) {
            this.passwordValidationChange.emit(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()\-_=+]).{8,16}$/.test(newValue));
        }
    }
    get validLength() {
        if (!this.password) {
            return false;
        }
        return this.password.length >= 8 && this.password.length <= 16;
    }
    get hasUppercase() {
        if (!this.password) {
            return false;
        }
        return /[A-Z]/.test(this.password);
    }
    get hasLowercase() {
        if (!this.password) {
            return false;
        }
        return /[a-z]/.test(this.password);
    }
    get hasDigit() {
        if (!this.password) {
            return false;
        }
        return /[0-9]/.test(this.password);
    }
    get hasSpecialChar() {
        if (!this.password) {
            return false;
        }
        return /[!@#$%^&*()\-_=+]/.test(this.password);
    }
    render() {
        return (index.h("div", { key: 'a928f0a2435f924621f70bdd652a745d4eb753ea', class: "m-0 p-0" }, index.h("requirement-check", { key: '817b7033718675f64676f879868e58b3b7c945cf', isValid: this.validLength, text: t.t('Lcz_Minimum8Characters', { fallback: 'Minimum 8 characters' }) }), index.h("requirement-check", { key: '14897c54883718c9211a07d80c94261169af2115', isValid: this.hasUppercase, text: t.t('Lcz_AtLeastOneUppercaseLetter', { fallback: 'At least one uppercase letter' }) }), index.h("requirement-check", { key: '5e4578f9528b9b434ce1b4594a18966cd447b445', isValid: this.hasLowercase, text: t.t('Lcz_AtLeastOneLowercaseLetter', { fallback: 'At least one lowercase letter' }) }), index.h("requirement-check", { key: '990a18d0193fa4bce4ecb3c76429f26b704f2dc3', isValid: this.hasDigit, text: t.t('Lcz_AtLeastOneDigit', { fallback: 'At least one digit' }) }), index.h("requirement-check", { key: '9f0a312e3813ce72d49940b972149f6931dd0ce7', isValid: this.hasSpecialChar, text: t.t('Lcz_AtLeastOneSpecialCharacter', { fallback: 'At least one special character' }) })));
    }
    static get watchers() { return {
        "password": [{
                "handlePasswordChange": 0
            }]
    }; }
};
IrPasswordValidator.style = irPasswordValidatorCss();

const irResetPasswordCss = () => `.base-host.sc-ir-reset-password{height:100vh;display:grid;align-content:center;padding:2rem;box-sizing:border-box;background-position:center;background-repeat:no-repeat;background-size:cover;background:white}p.sc-ir-reset-password,input.sc-ir-reset-password,button.sc-ir-reset-password{margin:0}p.sc-ir-reset-password,input.sc-ir-reset-password,button.sc-ir-reset-password,div.sc-ir-reset-password,section.sc-ir-reset-password,form.sc-ir-reset-password{box-sizing:border-box}.lock-icon.sc-ir-reset-password{align-self:center}.form-container.sc-ir-reset-password{padding:1rem;display:flex;flex-direction:column;height:100%;background:white;border-radius:0.25rem;gap:1rem;width:100%;max-width:38rem;margin-inline-start:auto;margin-inline-end:auto}.separator-container.sc-ir-reset-password{display:flex;align-items:center;gap:0.5rem;padding-top:1.5rem;padding-bottom:1rem}.separator-container.sc-ir-reset-password p.sc-ir-reset-password{color:#6b6f82;font-size:1rem}.separator.sc-ir-reset-password{flex:1 1 0%;height:1px;background:#dadada}.login-btn.sc-ir-reset-password{margin-top:1rem}.logo.sc-ir-reset-password{align-self:center}.app_links.sc-ir-reset-password{display:flex;align-items:center;justify-content:center;gap:1rem;padding-block:0.5rem}.app_links.sc-ir-reset-password a.sc-ir-reset-password img.sc-ir-reset-password{width:70%}.password_toggle.sc-ir-reset-password{all:unset;position:absolute;top:2px;inset-inline-end:1rem}`;

const sheetCss$1 = () => `.sc-ir-reset-password-h{height:100%}.sheet-container.sc-ir-reset-password{display:flex !important;flex-direction:column !important;background:white;height:100vh;gap:1rem;z-index:1000}.sheet-container.sc-ir-reset-password{height:-webkit-fill-available;height:100vh;height:100dvh}.sheet-footer.sc-ir-reset-password{position:sticky;bottom:0;z-index:20;background:white;border-top:1px solid #e4e5ec;display:flex;flex-direction:column;padding:1rem;gap:0.5rem}.sheet-header.sc-ir-reset-password{position:sticky;top:0;z-index:10;background:white}.sheet-body.sc-ir-reset-password{flex:1 1 0%}@media (min-width: 768px){.sheet-footer.sc-ir-reset-password{flex-direction:row;align-items:center}}`;

const IrResetPassword = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.closeSideBar = index.createEvent(this, "closeSideBar");
    }
    get el() { return index.getElement(this); }
    username;
    old_pwd;
    ticket;
    skip2Fa;
    language = 'en';
    confirmPassword;
    password;
    showValidator = false;
    autoValidate = false;
    error = {};
    submitted = false;
    isLoading = false;
    isFetching = false;
    closeSideBar;
    ApiClient = new ApiClient.ApiClient();
    authService = new authenticate_service.AuthService();
    systemService = new system_service.SystemService();
    initialized = false;
    componentWillLoad() {
        if (this.ticket) {
            this.ApiClient.setApiClient(this.ticket);
        }
    }
    componentDidLoad() {
        this.init();
    }
    handleTicketChange(oldValue, newValue) {
        if (oldValue !== newValue) {
            this.ApiClient.setApiClient(this.ticket);
            this.init();
        }
    }
    async init() {
        if (!this.ticket || this.initialized) {
            return;
        }
        await Promise.all([
            locale_controller.LocaleController.load({ language: this.language, tables: locale_controller.SCREEN_TABLES.resetPassword }),
            this.systemService.checkOTPNecessity({
                METHOD_NAME: 'Change_User_Pwd',
            }),
        ]);
        this.initialized = false;
    }
    ResetPasswordSchema = types.objectType({
        password: types.stringType().regex(user_service.CONSTANTS.PASSWORD),
        confirm_password: types.stringType()
            .nullable()
            .refine(password => {
            if (!user_service.CONSTANTS.PASSWORD.test(password)) {
                return false;
            }
            return password === this.password;
        }, { message: t.t('Lcz_PasswordMinLength', { fallback: 'Password must be at least 8 characters long.' }) }),
    });
    async handleChangePassword(e) {
        e.preventDefault();
        try {
            this.error = {};
            this.isLoading = true;
            this.autoValidate = true;
            this.ResetPasswordSchema.parse({
                password: this.password,
                confirm_password: this.confirmPassword,
            });
            await this.authService.changeUserPwd({
                username: this.username,
                new_pwd: this.password,
                old_pwd: this.old_pwd,
            });
            if (!this.skip2Fa) {
                // this.submitted = true;
                window.history.back();
            }
            if (this.el.slot === 'sidebar-body') {
                this.closeSideBar.emit();
            }
        }
        catch (error) {
            if (error instanceof types.ZodError) {
                let validationErrors = {};
                error.issues.map(issue => {
                    const path = issue.path[0];
                    console.log(path, issue);
                    if (path === 'password') {
                        this.showValidator = true;
                    }
                    validationErrors[path] = true;
                });
                this.error = validationErrors;
            }
        }
        finally {
            this.isLoading = false;
        }
    }
    handleOtpFinished(e) {
        if (e.detail.type === 'success') {
            return;
        }
        if (this.el.slot !== 'sidebar-body') {
            window.history.back();
        }
        else {
            this.closeSideBar.emit();
        }
    }
    render() {
        const insideSidebar = this.el.slot === 'sidebar-body';
        // if (!locales.entries && !insideSidebar) {
        //   return <ir-loading-screen></ir-loading-screen>;
        // }
        return (index.h("div", { key: 'ca2d15cdb25695536acb860cc6d4c577d6ed75c9', class: { 'base-host': !insideSidebar, 'h-100': insideSidebar } }, index.h(index.Fragment, { key: 'c27be372e3fc9ed8a4482b789d8434212f92cd03' }, !insideSidebar && (index.h(index.Fragment, { key: '2b003a883352cb6d7b6e685105bd14042dcc31f4' }, index.h("ir-interceptor", { key: 'b28943740b0f725383ab0ef1d86f990f093d9687', suppressToastEndpoints: ['/Change_User_Pwd'] }), index.h("ir-toast", { key: '9aca7faede931c580518c68f83f2918ddbd4f1fa' }))), index.h("form", { key: 'd42c464b8f9efacfd7fe9e88f96f33ec313fcb95', onSubmit: this.handleChangePassword.bind(this), class: { 'sheet-container': insideSidebar } }, insideSidebar && index.h("ir-title", { key: 'c4541dcee1fefe639be4248fa140b84a408961c1', class: "px-1 sheet-header", displayContext: "sidebar", label: t.t('Lcz_ChangePassword', { fallback: 'Change Password' }) }), index.h("div", { key: '277d38708c0f6abc266955fe446ff314f1efd3f2', class: { 'form-container': true, 'sheet-body px-1': insideSidebar, 'px-2': !insideSidebar } }, index.h("svg", { key: '4481a5960e48139f97921d6413f479848da246db', class: "lock-icon", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 448 512", height: 24, width: 24 }, index.h("path", { key: 'ce47ad2ba9ad54beeaf51cdc1959b7e5576d567f', fill: "currentColor", d: "M144 144l0 48 160 0 0-48c0-44.2-35.8-80-80-80s-80 35.8-80 80zM80 192l0-48C80 64.5 144.5 0 224 0s144 64.5 144 144l0 48 16 0c35.3 0 64 28.7 64 64l0 192c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 256c0-35.3 28.7-64 64-64l16 0z" })), index.h("div", { key: '65426668ee17c4613873688561572523c7cf9c5a', class: "text-center mb-2" }, index.h("h4", { key: '866931d9fa8080e1da9154a6a001e39e1cd8589e', class: "mb-1" }, t.t('Lcz_SetNewPassword')), this.submitted ? (index.h("p", null, t.t('Lcz_EmailSentConfirmPasswordChange', { fallback: 'An email has been sent to your address. Please check your inbox to confirm the password change.' }))) : (index.h("p", null, t.t('Lcz_NewPasswordMustBeDifferent', { fallback: 'Your new password must be different to previously used password' })))), !this.submitted && (index.h("section", { key: 'a26116df48463aaa3a650154f86bc68006374e3e' }, index.h("div", { key: '4e51e551e081d6963cbeeef64af665e974248975', class: 'mb-2 d-flex flex-column', style: { gap: '1rem' } }, index.h("div", { key: '56716188b2842272ba0e6049b6136ee85198537f', class: "m-0 p-0" }, index.h("div", { key: 'a3bb5aaac987cf0ab48c8cd9ecaf254ddb807646', class: 'position-relative' }, index.h("ir-validator", { key: '47dd6d13409f9afcc955197a676401b9fcc2866f', schema: this.ResetPasswordSchema.shape.password, value: this.password }, index.h("ir-input", { key: '85cea043a2cb160dd7ddd691ebedaa32f59f913d', type: "password", passwordToggle: true, "onText-change": e => (this.password = e.detail), onInputFocus: () => (this.showValidator = true), placeholder: t.t('Lcz_NewPassword', { fallback: 'New password' }), value: this.password }))), this.showValidator && index.h("ir-password-validator", { key: '9f8d1fc19a49fca9e41ad87d6dbf6f5a7ea92d99', class: "mb-1", password: this.password })), index.h("div", { key: '0af46d22416ca8a83744a87579a57b523f70c1c6', class: 'position-relative' }, index.h("ir-validator", { key: '054231f59dc7fc6feff1ac5489b06468d076e38b', schema: this.ResetPasswordSchema.shape.confirm_password, value: this.confirmPassword }, index.h("ir-input", { key: '62a24f19b0a549151cc96392a9bedd2fa8277230', type: "password", passwordToggle: true, "onText-change": e => (this.confirmPassword = e.detail), placeholder: t.t('Lcz_ConfirmPassword', { fallback: 'Confirm password' }), value: this.confirmPassword })))), !insideSidebar && (index.h("div", { key: '86969055539b5b0ce1753aebd16550c0be916d15', class: "d-flex flex-column mt-2 flex-sm-row align-items-sm-center", style: { gap: '0.5rem' } }, index.h("ir-custom-button", { key: '4469cca0bfbe06b54562219db0bff899b3b9e851',
            // btn_styles={'flex-fill'}
            onClickHandler: () => window.history.back(), class: "flex-fill",
            // text={t('Lcz_Cancel', { fallback: 'Cancel' })}
            size: "m", appearance: "filled", variant: "neutral" }, t.t('Lcz_Cancel', { fallback: 'Cancel' })), index.h("ir-custom-button", { key: '92a5f0ce3288e89c540bceba76c8d6aa754208da',
            // btn_styles={'flex-fill'}
            class: "flex-fill", loading: this.isLoading, type: "submit", size: "m", variant: "brand" }, t.t('Lcz_ChangePassword', { fallback: 'Change Password' }))))))), insideSidebar && (index.h("div", { key: 'a200891734e6e4548a16ef159aade7fdf23d5e6c', class: 'sheet-footer w-full' }, index.h("ir-custom-button", { key: 'fefbed2efb34354da30e66ed6dba27fa0592338a', onClickHandler: () => this.closeSideBar.emit(null), class: "flex-fill", appearance: "filled", variant: "neutral", size: "m" }, t.t('Lcz_Cancel', { fallback: 'Cancel' })), index.h("ir-custom-button", { key: '7c6d20cc8e6edfcf2917ce806a8bbb40ca7298ac', variant: "brand", loading: this.isLoading, class: "flex-fill", type: "submit", size: "m" }, t.t('Lcz_ChangePassword', { fallback: 'Change Password' }))))))));
    }
    static get watchers() { return {
        "ticket": [{
                "handleTicketChange": 0
            }]
    }; }
};
IrResetPassword.style = irResetPasswordCss() + sheetCss$1();

const irSidebarCss = () => `.backdrop{position:fixed;top:0;inset-inline-start:0;width:100%;height:100vh;cursor:pointer;background:rgba(0, 0, 0, 0.5);z-index:99;transition:all 0.5s;opacity:0;pointer-events:none;transition:all 0.5s}.backdrop.active{opacity:1;pointer-events:all}.sidebar-right{position:fixed;top:0;inset-inline-end:-120%;bottom:0;width:var(--sidebar-width, 40rem);max-width:100%;box-shadow:0 0 10px rgba(0, 0, 0, 0.1);transition:all 0.5s;z-index:100;overflow-y:hidden;color:var(--sidebar-color, #000);background-color:var(--sidebar-backgound, #fff);padding-block:var(--ir-sidebar-padding-block, 0);padding-inline:var(--ir-sidebar-padding-inline, 0.5rem);padding-top:var(--ir-sidebar-padding-top, unset);padding-bottom:var(--ir-sidebar-padding-bottom, unset);padding-inline-start:var(--ir-sidebar-padding-inline-start, var(--ir-sidebar-padding-left, unset));padding-inline-end:var(--ir-sidebar-padding-inline-end, var(--ir-sidebar-padding-right, unset))}.sidebar-right.active{inset-inline-end:0;overflow-y:auto}.sidebar-left{position:fixed;top:0;inset-inline-start:-120%;bottom:0;width:var(--sidebar-width, 40rem);max-width:100%;box-shadow:0 0 10px rgba(0, 0, 0, 0.1);transition:all 0.5s;z-index:100;overflow-y:hidden;color:var(--sidebar-color, #000);background-color:var(--sidebar-backgound, #fff);padding-block:var(--ir-sidebar-padding-block, 0);padding-inline:var(--ir-sidebar-padding-inline, 0.5rem);padding-top:var(--ir-sidebar-padding-top, unset);padding-bottom:var(--ir-sidebar-padding-bottom, unset);padding-inline-start:var(--ir-sidebar-padding-inline-start, var(--ir-sidebar-padding-left, unset));padding-inline-end:var(--ir-sidebar-padding-inline-end, var(--ir-sidebar-padding-right, unset))}.sidebar-title{display:flex;align-items:center;justify-content:space-between;padding:0 1rem;border-bottom:1px solid #e4e5ec}.sidebar-title p{font-weight:500;font-size:1.2rem}.sidebar-left.active{inset-inline-start:0;overflow-y:auto}.close{position:absolute;top:0.5rem;inset-inline-end:1rem;width:1rem;height:1rem;cursor:pointer}`;

const IrSidebar = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.irSidebarToggle = index.createEvent(this, "irSidebarToggle");
        this.beforeSidebarClose = index.createEvent(this, "beforeSidebarClose");
    }
    get el() { return index.getElement(this); }
    /**
     * Identifier for the sidebar instance.
     */
    name;
    /**
     * Which side of the screen the sidebar appears on.
     * Options: `'left'` or `'right'`.
     */
    side = 'right';
    /**
     * Whether to show the close (X) button in the sidebar header.
     */
    showCloseButton = true;
    /**
     * Whether the sidebar is open.
     * Can be used with two-way binding.
     */
    open = false;
    /**
     * Inline styles applied to the sidebar container.
     */
    sidebarStyles;
    /**
     * Label text displayed in the sidebar header.
     */
    label;
    /**
     * Prevents the sidebar from closing when `toggleSidebar()` is called.
     * When true, emits `beforeSidebarClose` instead of toggling.
     */
    preventClose;
    /**
     * Event emitted when the sidebar is toggled open/closed.
     * Emits the current `open` state.
     */
    irSidebarToggle;
    /**
     * Event emitted *before* the sidebar attempts to close,
     * but only if `preventClose` is set to true.
     */
    beforeSidebarClose;
    sidebarRef;
    componentDidLoad() {
        this.applyStyles();
    }
    handleSidebarStylesChange() {
        this.applyStyles();
    }
    handleOpenChange(newValue, oldValue) {
        if (newValue !== oldValue) {
            utils.handleBodyOverflow(newValue);
        }
    }
    handleKeyDown(e) {
        if (e.key === 'Escape' && this.open) {
            e.stopImmediatePropagation();
            e.stopPropagation();
            return this.toggleSidebar();
        }
        else {
            return;
        }
    }
    /**
     * Toggles the sidebar's visibility.
     *
     * - If `preventClose` is true, emits `beforeSidebarClose` and does nothing else.
     * - Otherwise, emits `irSidebarToggle` with the current `open` state.
     *
     * Example:
     * ```ts
     * const el = document.querySelector('ir-sidebar');
     * await el.toggleSidebar();
     * ```
     */
    async toggleSidebar() {
        if (this.preventClose) {
            this.beforeSidebarClose.emit();
            return;
        }
        this.irSidebarToggle.emit(this.open);
    }
    /**
     * Applies inline styles defined in `sidebarStyles` to the sidebar container.
     */
    applyStyles() {
        for (const property in this.sidebarStyles) {
            if (this.sidebarStyles.hasOwnProperty(property)) {
                this.sidebarRef.style[property] = this.sidebarStyles[property];
            }
        }
    }
    render() {
        let className = '';
        if (this.open) {
            className = 'active';
        }
        else {
            className = '';
        }
        return [
            index.h("div", { key: 'e264e1d23fb30262862f0bcccd7de8fa4449b7e0', class: `backdrop ${className}`, onClick: () => {
                    this.toggleSidebar();
                } }),
            index.h("div", { key: 'c0ef972b0f3ef66fb884c5832d3bb977ed2c8c54', ref: el => (this.sidebarRef = el), class: `sidebar-${this.side} ${className}` }, this.showCloseButton && (index.h("div", { key: 'd6bce64b04d8b6df6693e00e3b5679b2bc6a9721', class: 'sidebar-title' }, index.h("p", { key: '674b7e9d9c18a56d62d8b6e5ad7ec78f179701e9', class: 'p-0 m-0' }, this.label), index.h("div", { key: 'b4664ef1c603f36065618be0cd5f2baa9881707e', class: 'p-0 m-0 sidebar-icon-container' }, index.h("ir-icon", { key: '6abc3af0895b17fcb1e870ebfc54bba2f6869067', class: "", onIconClickHandler: () => {
                    this.toggleSidebar();
                } }, index.h("svg", { key: 'b937cc7a13a67cda5f100666d5486afc6ceb2c78', slot: "icon", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 384 512", height: 20, width: 20 }, index.h("path", { key: 'b068efe5b8e885084fef78b1e5af847c19f143c5', fill: "#6b6f82", d: "M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" })))))), index.h("slot", { key: 'c51fece67f3e9426c77cb597cee28141b4750d6b', name: "sidebar-body" })),
        ];
    }
    static get watchers() { return {
        "sidebarStyles": [{
                "handleSidebarStylesChange": 0
            }],
        "open": [{
                "handleOpenChange": 0
            }]
    }; }
};
IrSidebar.style = irSidebarCss();

const irSpinnerCss = () => ``;

const IrSpinner = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    get el() { return index.getElement(this); }
    /**
     * Size of the spinner (diameter).
     * Example: `size={2}` with `unit="rem"` sets spinner to `2rem`.
     */
    size;
    /**
     * Thickness of the spinner's border.
     * Example: `borderWidth={4}` renders a `4px` or `4rem` thick border.
     */
    borderWidth;
    /**
     * CSS unit used for `size` and `borderWidth`.
     * Can be `'px'` or `'rem'`.
     */
    unit = 'rem';
    /**
     * Color of the spinner.
     * Accepts any valid CSS color string.
     */
    color;
    componentWillLoad() {
        this.initStyles();
    }
    handleSpinnerSizeChange() {
        this.initStyles();
    }
    handleSpinnerBorderWidthChange() {
        this.initStyles();
    }
    handleSpinnerUnitChange() {
        this.initStyles();
    }
    handleSpinnerColorChange() {
        this.initStyles();
    }
    /**
     * Applies CSS custom properties based on current prop values.
     */
    initStyles() {
        if (this.size) {
            this.applyCssElement(`${this.size}${this.unit}`, '--ir-spinner-size');
        }
        if (this.borderWidth) {
            this.applyCssElement(`${this.borderWidth}${this.unit}`, '--ir-spinner-size');
        }
        if (this.color) {
            this.applyCssElement(`${this.color}`, '--ir-spinner-color');
        }
    }
    /**
     * Helper function to set CSS custom properties on the host element.
     *
     * @param value - The CSS value to apply
     * @param key - The CSS custom property name (e.g., `--ir-spinner-size`)
     */
    applyCssElement(value, key) {
        this.el.style.setProperty(key, value);
    }
    render() {
        return (index.h(index.Host, { key: '5f2d1752f06c64d959feaf32bcb5dd50029e4da0' }, index.h("wa-spinner", { key: '8a08fe3cdcb31644b2837dadcae54b85afc28ae7', style: { 'fontSize': '2rem', '--track-width': '3px' } })));
    }
    static get watchers() { return {
        "size": [{
                "handleSpinnerSizeChange": 0
            }],
        "borderWidth": [{
                "handleSpinnerBorderWidthChange": 0
            }],
        "unit": [{
                "handleSpinnerUnitChange": 0
            }],
        "color": [{
                "handleSpinnerColorChange": 0
            }]
    }; }
};
IrSpinner.style = irSpinnerCss();

const irTitleCss = () => `.sc-ir-title-h{padding:0px 0;margin-bottom:20px;display:flex;align-items:center;width:100%}[border-shown].sc-ir-title-h{border-bottom:1px solid #e4e5ec !important;border-color:#e4e5ec !important;padding-bottom:15px}[display-context='sidebar'].sc-ir-title-h{padding:15px 0;justify-content:space-between !important;width:100% !important;border-bottom:1px solid #e4e5ec !important;border-color:#e4e5ec !important}.title-body.sc-ir-title{margin:0;padding:0}.label.sc-ir-title{font-family:inherit !important}@media only screen and (max-width: 641px){.sc-ir-title-h{flex-direction:column;gap:8px;align-items:flex-start}[display-context='sidebar'].sc-ir-title-h{flex-direction:row}}.ir-text-start.sc-ir-title{text-align:start}`;

const IrTitle = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.closeSideBar = index.createEvent(this, "closeSideBar");
    }
    label;
    borderShown;
    displayContext = 'default';
    justifyContent = 'start';
    closeSideBar;
    get el() { return index.getElement(this); }
    componentDidLoad() {
        this.el.style.justifyContent = this.justifyContent;
    }
    handleJustifyContentChange(newValue, oldValue) {
        if (newValue !== oldValue) {
            this.el.style.justifyContent = newValue;
        }
    }
    render() {
        return (index.h(index.Host, { key: 'f7420d0927fa3cd7d31838d09ac35195d9b86b6f' }, index.h("h4", { key: '01d5734020a42eef4eab00af232416371fc82ef6', class: "ir-text-start label font-medium-2 py-0 my-0" }, this.label), this.displayContext === 'sidebar' && (index.h("ir-icon", { key: 'c9476f3b60d2775ae565261cc2ce4a9bac18ee72', class: 'close', onIconClickHandler: () => {
                this.closeSideBar.emit(null);
            } }, index.h("svg", { key: '48c17fb311726712996f36041fd03c944a6d6597', slot: "icon", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 384 512", height: 20, width: 20 }, index.h("path", { key: '2e7ef36006875b7dffcf578d7e57f6000677a36d', d: "M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" })))), this.displayContext !== 'sidebar' && (index.h("div", { key: 'cadcf1ce3c877ade6bc0fcb09b769d3bc400b647', class: 'title-body' }, index.h("slot", { key: '5cca1ba114085a1e8fac5831cc83e59c2335af93', name: "title-body" })))));
    }
    static get watchers() { return {
        "justifyContent": [{
                "handleJustifyContentChange": 0
            }]
    }; }
};
IrTitle.style = irTitleCss();

const irToastCss = () => `button.sc-ir-toast,p.sc-ir-toast,h3.sc-ir-toast,div.sc-ir-toast{all:unset}.sc-ir-toast-h{--rd-viewport-padding:25px;--rd-slide-sign:1;--rd-success:#2b9a66;position:fixed;bottom:0;inset-inline-end:0;display:flex;flex-direction:column;padding:var(--rd-viewport-padding);gap:10px;max-width:100vw;margin:0;list-style:none;z-index:2147483647;outline:none;pointer-events:none;-webkit-user-select:none;user-select:none}@media (prefers-color-scheme: dark){.sc-ir-toast-h{--rd-success:#33b074}}p.sc-ir-toast{color:hsla(222.2, 84%, 4.9%, 0.8);font-size:13px;line-height:1.3}h1.sc-ir-toast,h2.sc-ir-toast,h3.sc-ir-toast,h4.sc-ir-toast,h5.sc-ir-toast,h6.sc-ir-toast{font-weight:500;color:hsl(222.2, 84%, 4.9%);font-size:15px}.sc-ir-toast-h:dir(rtl){--rd-slide-sign:-1}[position='top-left'].sc-ir-toast-h,[position='bottom-left'].sc-ir-toast-h{--rd-slide-sign:-1}[position='top-left'].sc-ir-toast-h:dir(rtl),[position='bottom-left'].sc-ir-toast-h:dir(rtl){--rd-slide-sign:1}[position='top-left'].sc-ir-toast-h{top:0;inset-inline-start:0}[position='top-right'].sc-ir-toast-h{top:0;inset-inline-end:0}[position='bottom-left'].sc-ir-toast-h{bottom:0;inset-inline-start:0}[position='bottom-right'].sc-ir-toast-h{bottom:0;inset-inline-end:0}.icon-container.sc-ir-toast{height:25px;width:25px;border-radius:25px;display:flex;align-items:center;justify-content:center;padding:0;margin:0}.icon-container.sc-ir-toast>svg.sc-ir-toast{margin:0;color:white;stroke-width:5px}.success.sc-ir-toast{background-color:var(--rd-success)}.error.sc-ir-toast{background-color:red}.ToastRoot.sc-ir-toast{background-color:hsl(0, 0%, 100%);border-radius:0.5rem;box-shadow:hsl(206 22% 7% / 35%) 0px 10px 38px -10px,     hsl(206 22% 7% / 20%) 0px 10px 20px -15px;padding:15px;display:grid;grid-template-areas:'title action' 'description action';grid-template-columns:auto max-content;column-gap:15px;align-items:center;pointer-events:none;opacity:0;border:1px solid hsl(214.3, 31.8%, 91.4%);position:relative}.ToastRoot[data-state='open'].sc-ir-toast{pointer-events:all;animation:slideIn 150ms cubic-bezier(0.16, 1, 0.3, 1)}.ToastRoot[data-state='closed'].sc-ir-toast{pointer-events:none;animation:hide 100ms ease-in}@-webkit-keyframes slideIn{from{transform:translateX(calc(var(--rd-offset-width, 100%) * var(--rd-slide-sign)))}to{transform:translateX(0)}}@keyframes slideIn{from{transform:translateX(calc(var(--rd-offset-width, 100%) * var(--rd-slide-sign)))}to{transform:translateX(0)}}.ToastTitle.sc-ir-toast{grid-area:title;font-weight:500;color:hsl(222.2, 84%, 4.9%);font-size:15px}.ToastDescription.sc-ir-toast{grid-area:description;margin:0;margin-top:5px;color:hsla(222.2, 84%, 4.9%, 0.8);font-size:13px;line-height:1.3;overflow:hidden;text-overflow:ellipsis}.ToastAction.sc-ir-toast{grid-area:action}`;

const IrToast = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    /**
     * Position where toasts will appear.
     * Options include: `'top-left'`, `'top-right'`, `'bottom-left'`, `'bottom-right'`.
     */
    position = 'top-right';
    get providerPosition() {
        const map = {
            'top-left': 'top-start',
            'top-right': 'top-end',
            'bottom-left': 'bottom-start',
            'bottom-right': 'bottom-end',
        };
        return map[this.position] ?? 'top-end';
    }
    render() {
        // ir-toast-provider renders the ir-toast-item stack and listens for
        // `toast` events on the body, so this component is a thin shell kept
        // for backwards compatibility with the many pages that embed it.
        return index.h("ir-toast-provider", { key: 'ef28502025fd78c750bf2de556491d9d573bb06a', position: this.providerPosition });
    }
};
IrToast.style = irToastCss();

const irToastItemCss = () => `:host{box-sizing:border-box !important}:host *,:host *::before,:host *::after{box-sizing:inherit !important;padding:0;margin:0}[hidden]{display:none !important}:host{display:block;--accent-width:4px}.accent{flex:0 0 auto;width:var(--accent-width);background:var(--accent-color)}.toast-item{display:flex;align-items:stretch;background:var(--wa-color-surface-raised);border:var(--wa-border-width-s) solid var(--wa-color-surface-border);border-radius:var(--wa-border-radius-m);box-shadow:var(--wa-shadow-l);overflow:hidden;animation:toast-enter 280ms cubic-bezier(0.16, 1, 0.3, 1) both}:host([data-placement^='bottom']) .toast-item{animation-name:toast-enter-up}:host([data-leaving]) .toast-item{animation:toast-exit 200ms cubic-bezier(0.23, 1, 0.32, 1) both;pointer-events:none}.icon{display:flex;align-items:center;padding:var(--wa-space-l);padding-inline-end:0px;color:var(--accent-color);font-size:1.25em}.content{font-size:var(--wa-font-size-s);flex:1 1 auto;align-self:center;min-width:0px;padding:var(--wa-space-l);color:var(--wa-color-text-normal)}::slotted([data-toast-title]){display:block;font-weight:var(--wa-font-weight-semibold, 600);color:var(--wa-color-text-normal)}::slotted([data-toast-description]){display:block;margin-top:2px;color:var(--wa-color-text-quiet)}::slotted([data-toast-action]){display:inline-flex;margin-top:var(--wa-space-s);padding:0.25rem 0.625rem;border:var(--wa-border-width-s) solid var(--wa-color-surface-border);border-radius:var(--wa-border-radius-s);background:transparent;color:var(--accent-color);font:inherit;font-size:var(--wa-font-size-s);font-weight:600;cursor:pointer;transition:background-color var(--wa-transition-fast)}::slotted([data-toast-action]:hover){background:var(--wa-color-neutral-fill-quiet)}::slotted([data-toast-action]:focus-visible){outline:2px solid var(--wa-color-brand-fill-loud);outline-offset:2px}.close-button wa-progress-ring{--size:30px;--track-width:2px;--indicator-width:2px;--track-color:var(--wa-color-surface-border);--indicator-color:var(--accent-color);--indicator-transition-duration:150ms;font-size:var(--wa-font-size-xs)}.close-button{flex:0 0 auto;display:flex;align-items:center;justify-content:center;align-self:stretch;padding-inline:var(--wa-space-l);background:transparent;border:none;border-start-end-radius:var(--border-radius);border-end-end-radius:var(--border-radius);color:var(--wa-color-neutral-on-quiet);font-size:inherit;cursor:pointer;transition:background-color var(--wa-transition-fast)}.close-button:hover{background:var(--wa-color-neutral-fill-quiet);color:var(--wa-color-text-normal)}.close-button:focus-visible{outline:2px solid var(--wa-color-brand-fill-loud);outline-offset:-2px}@keyframes toast-enter{from{opacity:0;transform:translateY(-12px) scale(0.96)}to{opacity:1;transform:none}}@keyframes toast-enter-up{from{opacity:0;transform:translateY(12px) scale(0.96)}to{opacity:1;transform:none}}@keyframes toast-exit{to{opacity:0;transform:scale(0.95)}}@keyframes toast-fade-in{from{opacity:0}to{opacity:1}}@media (prefers-reduced-motion: reduce){.toast-item,:host([data-placement^='bottom']) .toast-item{animation:toast-fade-in 120ms linear both}:host([data-leaving]) .toast-item{animation:none}}:host([data-entered]:not([data-leaving])) .toast-item{animation:none}`;

const IrToastItem = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.irDismiss = index.createEvent(this, "irDismiss");
    }
    get el() { return index.getElement(this); }
    variant = 'neutral';
    /** Auto-dismiss delay in milliseconds. Pass `0` or `Infinity` for a persistent toast. */
    duration = 5000;
    /** Whether the close button is rendered. */
    dismissible = true;
    progress = 100;
    leaving = false;
    entered = false;
    /** Emitted once the exit animation finishes and the toast should be removed from the DOM. */
    irDismiss;
    timer;
    remainingMs;
    resumedAt;
    timerStarted = false;
    hiding = false;
    hovered = false;
    focused = false;
    componentDidLoad() {
        if (!this.timerStarted) {
            this.startTimer();
        }
        // Once the enter animation has played, mark the host so re-parenting (the
        // provider moving the toast layer in/out of a modal dialog) never replays it.
        const markEntered = () => {
            clearTimeout(fallback);
            this.entered = true;
        };
        const fallback = window.setTimeout(markEntered, 500);
        this.el.shadowRoot?.querySelector('.toast-item')?.addEventListener('animationend', markEntered, { once: true });
    }
    connectedCallback() {
        document.addEventListener('visibilitychange', this.handleVisibilityChange);
        // Re-parenting disconnects and reconnects the element; resume the countdown
        // with whatever time was left when it was paused.
        if (this.timerStarted && !this.hovered && !this.focused) {
            this.resumeTimer();
        }
    }
    disconnectedCallback() {
        document.removeEventListener('visibilitychange', this.handleVisibilityChange);
        this.pauseTimer();
    }
    /** Starts the auto-dismiss countdown. Safe to call more than once. */
    async startTimer() {
        this.timerStarted = true;
        if (this.hovered || this.focused) {
            return;
        }
        this.resumeTimer();
    }
    /** Plays the exit animation, then emits `irDismiss`. */
    async hide() {
        if (this.hiding) {
            return;
        }
        this.hiding = true;
        this.pauseTimer();
        if (!this.prefersReducedMotion()) {
            this.leaving = true;
            await new Promise(resolve => {
                const done = () => {
                    clearTimeout(fallback);
                    resolve();
                };
                // Safety timeout in case animationend never fires (display:none ancestors, etc.)
                const fallback = window.setTimeout(done, 300);
                this.el.shadowRoot?.querySelector('.toast-item')?.addEventListener('animationend', done, { once: true });
            });
        }
        this.irDismiss.emit();
    }
    get hasTimer() {
        return Number.isFinite(this.duration) && this.duration > 0;
    }
    prefersReducedMotion() {
        return typeof window !== 'undefined' && window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
    }
    // The countdown is wall-clock based so it survives pauses, re-parenting, and
    // interval throttling in background tabs without drifting.
    resumeTimer() {
        if (!this.hasTimer || this.hiding || this.timer || document.hidden) {
            return;
        }
        this.remainingMs = this.remainingMs ?? this.duration;
        this.resumedAt = Date.now();
        this.timer = window.setInterval(() => {
            const left = this.remainingMs - (Date.now() - this.resumedAt);
            this.progress = Math.max(0, (left / this.duration) * 100);
            if (left <= 0) {
                this.hide();
            }
        }, 100);
    }
    pauseTimer() {
        if (this.timer) {
            this.remainingMs = Math.max(0, this.remainingMs - (Date.now() - this.resumedAt));
            clearInterval(this.timer);
            this.timer = undefined;
        }
    }
    handleVisibilityChange = () => {
        if (document.hidden) {
            this.pauseTimer();
        }
        else {
            this.updateInteraction();
        }
    };
    updateInteraction() {
        if (this.hovered || this.focused) {
            // Reset the countdown while the user is interacting; it restarts from
            // the full duration once they move away.
            this.pauseTimer();
            this.remainingMs = this.duration;
            this.progress = 100;
        }
        else if (this.timerStarted) {
            this.resumeTimer();
        }
    }
    handleMouseEnter = () => {
        this.hovered = true;
        this.updateInteraction();
    };
    handleMouseLeave = () => {
        this.hovered = false;
        this.updateInteraction();
    };
    handleFocusIn = () => {
        this.focused = true;
        this.updateInteraction();
    };
    handleFocusOut = () => {
        this.focused = false;
        this.updateInteraction();
    };
    handleClose = () => {
        this.hide();
    };
    render() {
        return (index.h(index.Host, { key: '95b5a9f2270885d9b8559cc78becebcabfccb697', "data-leaving": this.leaving ? 'true' : undefined, "data-entered": this.entered ? 'true' : undefined, style: { '--accent-color': `var(--wa-color-${this.variant}-fill-loud)` } }, index.h("div", { key: 'bd39e616114318fb19f8fd101de3ba163b48e488', class: 'toast-item', onMouseEnter: this.handleMouseEnter, onMouseLeave: this.handleMouseLeave, onFocusin: this.handleFocusIn, onFocusout: this.handleFocusOut }, index.h("div", { key: '791af0626ff6bfada42ee20669ab091604719f01', part: "accent", class: "accent" }), index.h("div", { key: '7186bacb6b1741e03bea797cd1fc9d72061c58fb', part: "icon", class: "icon" }, index.h("slot", { key: '8079a5bc27a1322bcd170651f0a7faa51b9c1a58', name: "icon" })), index.h("div", { key: '21cc2e4f76e67142d7cfd612d5fa757051ede44c', part: "content", class: "content" }, index.h("slot", { key: '4adf4d8404a257a08b17dd083124413c74c7052a' })), this.dismissible && (index.h("button", { key: '00ce73ea314d684724426d7ce9e4bb902ac5c505', part: "close-button", class: "close-button", type: "button", "aria-label": t.t('Lcz_CloseNotification', { fallback: 'Close notification' }), onClick: this.handleClose }, this.hasTimer ? (index.h("wa-progress-ring", { part: "progress-ring", "aria-hidden": "true", exportparts: "\n                  base:progress-ring__base,\n                  label:progress-ring__label,\n                  track:progress-ring__track,\n                  indicator:progress-ring__indicator\n                ", value: this.progress }, index.h("wa-icon", { part: "close-icon", exportparts: "svg:close-icon__svg", name: "xmark", library: "system", variant: "solid", "aria-hidden": "true" }))) : (index.h("wa-icon", { part: "close-icon", exportparts: "svg:close-icon__svg", name: "xmark", library: "system", variant: "solid", "aria-hidden": "true" })))))));
    }
};
IrToastItem.style = irToastItemCss();

const irToastProviderCss = () => `:host{display:contents}`;

// In current Chrome, anything outside a modal dialog (`showModal()`) is inert —
// including popovers shown *after* the dialog, even though they paint above it.
// The only place a toast stays clickable while an ir-drawer/wa-dialog is open is
// *inside* the topmost modal dialog's subtree. The provider therefore keeps all
// toasts in a single fixed "layer" element that lives in document.body as a
// popover="manual" (top layer) when no modal is open, and re-parents into the
// topmost modal dialog whenever one opens.
const EDGE_PADDING = 16; // px from screen edges
const ITEM_GAP = 8; // px between toasts
// Pages and feature roots alike embed ir-toast (which renders a provider), so
// several providers can be connected at once — each listening for `toast`
// events on the body. Only the most recently connected provider handles them,
// so one event never produces duplicate toasts.
const connectedProviders = [];
/** `matches()` that tolerates engines without the pseudo-class (e.g. Stencil mock-doc). */
function safeMatches(el, selector) {
    try {
        return el.matches(selector);
    }
    catch (e) {
        return false;
    }
}
/** Finds the native <dialog> rendered by a component (e.g. ir-drawer → wa-drawer → dialog). */
function findDialogIn(el) {
    if (!el) {
        return null;
    }
    if (el instanceof HTMLDialogElement) {
        return el;
    }
    const root = el.shadowRoot;
    if (!root) {
        return null;
    }
    const direct = root.querySelector('dialog');
    if (direct) {
        return direct;
    }
    for (const child of Array.from(root.querySelectorAll('*'))) {
        const nested = findDialogIn(child);
        if (nested) {
            return nested;
        }
    }
    return null;
}
const IrToastProvider = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.toastAction = index.createEvent(this, "toastAction");
    }
    position = 'top-end';
    /** Pins the toast layer to RTL. Leave unset to inherit the document direction. */
    rtl = false;
    duration = 5000;
    /** Maximum number of toasts shown at once; when exceeded, the oldest are dismissed. */
    maxToasts = 5;
    /** Emitted when a toast's action button is clicked. */
    toastAction;
    items = [];
    layer = null;
    liveRegion = null;
    modalStack = [];
    positionCache = new Map();
    hostDialog = null;
    connectedCallback() {
        connectedProviders.push(this);
        document.addEventListener('keydown', this.handleKeyDown);
    }
    disconnectedCallback() {
        const index = connectedProviders.indexOf(this);
        if (index > -1) {
            connectedProviders.splice(index, 1);
        }
        document.removeEventListener('keydown', this.handleKeyDown);
        this.hostDialog?.removeEventListener('close', this.handleHostDialogClose);
        this.hostDialog = null;
        this.layer?.remove();
        this.layer = null;
        this.liveRegion = null;
        this.items = [];
        this.modalStack = [];
    }
    handleToast(event) {
        if (connectedProviders[connectedProviders.length - 1] !== this) {
            return;
        }
        const detail = event?.detail || {};
        // Legacy IToast emitters (ir-interceptor, booking details, …) often send an
        // empty description and put the message in `title`, or vice versa.
        const title = detail.title || detail.description || t.t('Lcz_Notification', { fallback: 'Notification' });
        const payload = {
            ...detail,
            title,
            description: detail.title ? detail.description || undefined : undefined,
            type: this.normalizeType(detail.type),
        };
        this.addToast(payload);
    }
    // A modal dialog opening makes everything outside it inert; track it and move
    // the toast layer inside so toasts stay visible and clickable above it.
    handleOverlayShow(event) {
        const dialog = findDialogIn(event.target);
        if (!dialog) {
            return;
        }
        this.modalStack = this.modalStack.filter(d => d !== dialog);
        this.modalStack.push(dialog);
        // Defer so the dialog is actually modal (showModal may run after the event).
        requestAnimationFrame(() => this.relocateLayer());
    }
    // Wrapper components (ir-dialog) stop the wa-* events and re-emit them under
    // their own names, so both vocabularies must be listened for. Only the
    // after-hide events are reliable for relocation: at wa-hide/irDialogHide time
    // the native dialog is still `:modal` for the duration of the close animation.
    handleOverlayHide() {
        if (!this.layer) {
            return;
        }
        requestAnimationFrame(() => this.relocateLayer());
    }
    async addToast(toast) {
        const id = toast.id ?? this.generateToastId();
        const type = toast.type ?? 'info';
        const item = document.createElement('ir-toast-item');
        item.variant = this.mapVariant(type);
        item.duration = toast.duration ?? this.duration;
        item.dismissible = toast.dismissible ?? true;
        item.setAttribute('data-placement', this.position);
        Object.assign(item.style, {
            pointerEvents: 'auto',
            minWidth: '20rem',
            maxWidth: `min(28rem, calc(100vw - ${EDGE_PADDING * 2}px))`,
        });
        item.append(this.buildIcon(type), ...this.buildContent(id, toast));
        item.addEventListener('irDismiss', () => this.destroyItem(item));
        const layer = this.ensureLayer();
        this.relocateLayer();
        this.capturePositions();
        layer.prepend(item);
        this.items.unshift({ id, el: item });
        for (const extra of this.items.slice(this.maxToasts)) {
            extra.el.hide();
        }
        this.showLayerIfNeeded();
        requestAnimationFrame(() => this.animatePositions());
        this.announce(`${this.typeLabel(type)}: ${toast.title}${toast.description ? '. ' + toast.description : ''}`, type === 'error' || type === 'danger');
        return id;
    }
    async removeToast(id) {
        const entry = this.items.find(item => item.id === id);
        if (!entry) {
            return;
        }
        await entry.el.hide();
    }
    async clearAllToasts() {
        await Promise.all(this.items.map(({ el }) => el.hide()));
    }
    handleHostDialogClose = () => {
        requestAnimationFrame(() => this.relocateLayer());
    };
    handleKeyDown = async (event) => {
        // Let modal drawers/dialogs consume Escape first (they mark it defaultPrevented).
        await new Promise(resolve => setTimeout(resolve));
        if (event.key === 'Escape' && !event.defaultPrevented && this.items.length > 0) {
            event.preventDefault();
            this.removeToast(this.items[0].id);
        }
    };
    destroyItem(el) {
        if (!el.parentElement) {
            return;
        }
        this.capturePositions();
        el.remove();
        this.items = this.items.filter(item => item.el !== el);
        if (this.items.length === 0) {
            this.hideLayer();
        }
        else {
            requestAnimationFrame(() => this.animatePositions());
        }
    }
    ensureLayer() {
        if (this.layer) {
            this.applyLayerPlacement();
            return this.layer;
        }
        const layer = document.createElement('div');
        layer.setAttribute('data-ir-toast-layer', '');
        Object.assign(layer.style, {
            position: 'fixed',
            display: 'flex',
            gap: `${ITEM_GAP}px`,
            padding: `${EDGE_PADDING}px`,
            boxSizing: 'border-box',
            left: '0',
            right: '0',
            width: 'auto',
            height: 'auto',
            maxHeight: '100dvh',
            margin: '0',
            border: 'none',
            background: 'transparent',
            overflow: 'visible',
            pointerEvents: 'none',
            zIndex: '2147483647',
        });
        // Visually hidden live region travels with the layer so announcements are
        // never inside an inert subtree while a modal drawer is open.
        const liveRegion = document.createElement('div');
        liveRegion.setAttribute('data-ir-toast-live-region', '');
        liveRegion.style.cssText = 'position:absolute;width:1px;height:1px;overflow:hidden;white-space:nowrap;clip-path:inset(50%);pointer-events:none;';
        layer.append(liveRegion);
        this.layer = layer;
        this.liveRegion = liveRegion;
        this.applyLayerPlacement();
        return layer;
    }
    applyLayerPlacement() {
        if (!this.layer) {
            return;
        }
        const [vertical = 'top', horizontal = 'end'] = this.position.split('-');
        const s = this.layer.style;
        s.flexDirection = vertical === 'bottom' ? 'column-reverse' : 'column';
        s.top = vertical === 'bottom' ? 'auto' : '0';
        s.bottom = vertical === 'bottom' ? '0' : 'auto';
        s.alignItems = horizontal === 'center' ? 'center' : horizontal === 'start' ? 'flex-start' : 'flex-end';
        // The layer lives in document.body (and is re-parented into modal dialogs), so it already
        // inherits the document direction. Only an explicit `rtl` opt-in pins it; forcing 'ltr'
        // otherwise would un-mirror every toast on an RTL page.
        if (this.rtl) {
            this.layer.setAttribute('dir', 'rtl');
        }
        else {
            this.layer.removeAttribute('dir');
        }
    }
    /** Deep-scans the document (piercing shadow roots) for open modal dialogs. */
    findOpenModalDialogs() {
        const found = [];
        const walk = (root) => {
            for (const dialog of Array.from(root.querySelectorAll('dialog'))) {
                if (safeMatches(dialog, ':modal')) {
                    found.push(dialog);
                }
            }
            for (const el of Array.from(root.querySelectorAll('*'))) {
                if (el.shadowRoot) {
                    walk(el.shadowRoot);
                }
            }
        };
        walk(document);
        return found;
    }
    /** Moves the layer into the topmost open modal dialog, or back to document.body. */
    relocateLayer() {
        const layer = this.layer;
        if (!layer) {
            return;
        }
        // Event tracking can miss dialogs opened before this provider connected,
        // so always reconcile against the dialogs that are actually open.
        const open = this.findOpenModalDialogs();
        this.modalStack = this.modalStack.filter(dialog => open.includes(dialog));
        const host = this.modalStack[this.modalStack.length - 1] ?? open[open.length - 1] ?? document.body;
        const inDialog = host !== document.body;
        // Safety net: the native `close` event always fires on the hosting <dialog>
        // itself, even when a wrapper component swallows the wa-* events, so the
        // layer can never be stranded inside a closed dialog.
        if (this.hostDialog !== host) {
            this.hostDialog?.removeEventListener('close', this.handleHostDialogClose);
            this.hostDialog = inDialog ? host : null;
            this.hostDialog?.addEventListener('close', this.handleHostDialogClose);
        }
        if (layer.parentNode !== host) {
            if (safeMatches(layer, ':popover-open')) {
                layer.hidePopover?.();
            }
            if (inDialog) {
                layer.removeAttribute('popover');
            }
            else {
                layer.setAttribute('popover', 'manual');
            }
            host.append(layer);
            // Re-parenting disconnects the items, which clears their countdown timers
            // (and Stencil may run the deferred disconnect *after* reconnect). Restart
            // them once the move has fully settled.
            requestAnimationFrame(() => {
                for (const { el } of this.items) {
                    el.startTimer?.();
                }
            });
        }
        else if (!inDialog && !layer.hasAttribute('popover')) {
            layer.setAttribute('popover', 'manual');
        }
        this.showLayerIfNeeded();
    }
    showLayerIfNeeded() {
        const layer = this.layer;
        if (!layer || this.items.length === 0) {
            return;
        }
        if (layer.hasAttribute('popover') && !safeMatches(layer, ':popover-open')) {
            try {
                layer.showPopover?.();
            }
            catch (e) {
                // Popover may be mid-transition
            }
        }
    }
    hideLayer() {
        const layer = this.layer;
        if (layer && safeMatches(layer, ':popover-open')) {
            layer.hidePopover?.();
        }
    }
    announce(text, assertive) {
        const trimmed = text.trim();
        if (!this.liveRegion || !trimmed) {
            return;
        }
        const announcer = document.createElement('div');
        announcer.setAttribute('role', assertive ? 'alert' : 'status');
        announcer.setAttribute('aria-live', assertive ? 'assertive' : 'polite');
        announcer.setAttribute('aria-atomic', 'true');
        this.liveRegion.append(announcer);
        // Double rAF so assistive tech registers the live region before content lands.
        requestAnimationFrame(() => {
            requestAnimationFrame(() => {
                announcer.textContent = trimmed;
            });
        });
        setTimeout(() => announcer.remove(), 1000);
    }
    buildIcon(type) {
        const names = {
            success: 'circle-check',
            warning: 'triangle-exclamation',
            error: 'circle-xmark',
            danger: 'circle-xmark',
        };
        const icon = document.createElement('wa-icon');
        icon.setAttribute('slot', 'icon');
        icon.setAttribute('name', names[type] ?? 'circle-info');
        icon.setAttribute('aria-hidden', 'true');
        return icon;
    }
    buildContent(id, toast) {
        const nodes = [];
        const title = document.createElement('strong');
        title.setAttribute('data-toast-title', '');
        title.textContent = toast.title;
        nodes.push(title);
        if (toast.description) {
            const description = document.createElement('div');
            description.setAttribute('data-toast-description', '');
            description.textContent = toast.description;
            nodes.push(description);
        }
        if (toast.actionLabel) {
            const action = document.createElement('button');
            action.type = 'button';
            action.setAttribute('data-toast-action', '');
            action.textContent = toast.actionLabel;
            action.addEventListener('click', () => {
                this.toastAction.emit({ id });
                this.removeToast(id);
            });
            nodes.push(action);
        }
        return nodes;
    }
    capturePositions() {
        this.positionCache.clear();
        for (const { el } of this.items) {
            this.positionCache.set(el, el.getBoundingClientRect());
        }
    }
    animatePositions() {
        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
            this.positionCache.clear();
            return;
        }
        for (const { el } of this.items) {
            const oldRect = this.positionCache.get(el);
            if (!oldRect) {
                continue;
            }
            const newRect = el.getBoundingClientRect();
            const deltaY = oldRect.top - newRect.top;
            if (Math.abs(deltaY) > 1) {
                // Animate `translate` so it never conflicts with `transform`-based CSS animations.
                el.animate?.([{ translate: `0 ${deltaY}px` }, { translate: '0 0' }], {
                    duration: 200,
                    easing: 'cubic-bezier(0.2, 0, 0, 1)',
                });
            }
        }
        this.positionCache.clear();
    }
    generateToastId() {
        return `toast-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
    }
    /** Accepts both the provider's own types and the legacy IToast vocabulary ('error', 'custom'). */
    normalizeType(type) {
        switch (type) {
            case 'success':
            case 'warning':
            case 'error':
            case 'danger':
                return type;
            default:
                return 'info';
        }
    }
    /** Localized name of the toast type, spoken ahead of the message by the live region. */
    typeLabel(type) {
        switch (type) {
            case 'success':
                return t.t('Lcz_Success', { fallback: 'Success' });
            case 'warning':
                return t.t('Lcz_Warning', { fallback: 'Warning' });
            case 'error':
                return t.t('Lcz_Error', { fallback: 'Error' });
            case 'danger':
                return t.t('Lcz_Danger', { fallback: 'Danger' });
            default:
                return t.t('Lcz_Info', { fallback: 'Info' });
        }
    }
    mapVariant(type) {
        switch (type) {
            case 'success':
                return 'success';
            case 'warning':
                return 'warning';
            case 'error':
            case 'danger':
                return 'danger';
            default:
                return 'brand';
        }
    }
    render() {
        return index.h(index.Host, { key: '89328fdd1b2aef9cf4a60181b991d504e1f04d24' });
    }
};
IrToastProvider.style = irToastProviderCss();

var uaParser$1 = {exports: {}};

var uaParser = uaParser$1.exports;

var hasRequiredUaParser;

function requireUaParser () {
	if (hasRequiredUaParser) return uaParser$1.exports;
	hasRequiredUaParser = 1;
	(function (module, exports) {
		/////////////////////////////////////////////////////////////////////////////////
		/* UAParser.js v2.0.3
		   Copyright © 2012-2025 Faisal Salman <f@faisalman.com>
		   AGPLv3 License *//*
		   Detect Browser, Engine, OS, CPU, and Device type/model from User-Agent data.
		   Supports browser & node.js environment. 
		   Demo   : https://uaparser.dev
		   Source : https://github.com/faisalman/ua-parser-js */
		/////////////////////////////////////////////////////////////////////////////////

		/* jshint esversion: 3 */ 
		/* globals window */

		(function (window, undefined$1) {
		    
		    //////////////
		    // Constants
		    /////////////

		    var LIBVERSION  = '2.0.3',
		        UA_MAX_LENGTH = 500,
		        USER_AGENT  = 'user-agent',
		        EMPTY       = '',
		        UNKNOWN     = '?',

		        // typeof
		        FUNC_TYPE   = 'function',
		        UNDEF_TYPE  = 'undefined',
		        OBJ_TYPE    = 'object',
		        STR_TYPE    = 'string',

		        // properties
		        UA_BROWSER  = 'browser',
		        UA_CPU      = 'cpu',
		        UA_DEVICE   = 'device',
		        UA_ENGINE   = 'engine',
		        UA_OS       = 'os',
		        UA_RESULT   = 'result',
		        
		        NAME        = 'name',
		        TYPE        = 'type',
		        VENDOR      = 'vendor',
		        VERSION     = 'version',
		        ARCHITECTURE= 'architecture',
		        MAJOR       = 'major',
		        MODEL       = 'model',

		        // device types
		        CONSOLE     = 'console',
		        MOBILE      = 'mobile',
		        TABLET      = 'tablet',
		        SMARTTV     = 'smarttv',
		        WEARABLE    = 'wearable',
		        XR          = 'xr',
		        EMBEDDED    = 'embedded',

		        // browser types
		        INAPP       = 'inapp',

		        // client hints
		        BRANDS      = 'brands',
		        FORMFACTORS = 'formFactors',
		        FULLVERLIST = 'fullVersionList',
		        PLATFORM    = 'platform',
		        PLATFORMVER = 'platformVersion',
		        BITNESS     = 'bitness',
		        CH_HEADER   = 'sec-ch-ua',
		        CH_HEADER_FULL_VER_LIST = CH_HEADER + '-full-version-list',
		        CH_HEADER_ARCH      = CH_HEADER + '-arch',
		        CH_HEADER_BITNESS   = CH_HEADER + '-' + BITNESS,
		        CH_HEADER_FORM_FACTORS = CH_HEADER + '-form-factors',
		        CH_HEADER_MOBILE    = CH_HEADER + '-' + MOBILE,
		        CH_HEADER_MODEL     = CH_HEADER + '-' + MODEL,
		        CH_HEADER_PLATFORM  = CH_HEADER + '-' + PLATFORM,
		        CH_HEADER_PLATFORM_VER = CH_HEADER_PLATFORM + '-version',
		        CH_ALL_VALUES       = [BRANDS, FULLVERLIST, MOBILE, MODEL, PLATFORM, PLATFORMVER, ARCHITECTURE, FORMFACTORS, BITNESS],

		        // device vendors
		        AMAZON      = 'Amazon',
		        APPLE       = 'Apple',
		        ASUS        = 'ASUS',
		        BLACKBERRY  = 'BlackBerry',
		        GOOGLE      = 'Google',
		        HUAWEI      = 'Huawei',
		        LENOVO      = 'Lenovo',
		        HONOR       = 'Honor',
		        LG          = 'LG',
		        MICROSOFT   = 'Microsoft',
		        MOTOROLA    = 'Motorola',
		        NVIDIA      = 'Nvidia',
		        ONEPLUS     = 'OnePlus',
		        OPPO        = 'OPPO',
		        SAMSUNG     = 'Samsung',
		        SHARP       = 'Sharp',
		        SONY        = 'Sony',
		        XIAOMI      = 'Xiaomi',
		        ZEBRA       = 'Zebra',

		        // browsers
		        CHROME      = 'Chrome',
		        CHROMIUM    = 'Chromium',
		        CHROMECAST  = 'Chromecast',
		        EDGE        = 'Edge',
		        FIREFOX     = 'Firefox',
		        OPERA       = 'Opera',
		        FACEBOOK    = 'Facebook',
		        SOGOU       = 'Sogou',

		        PREFIX_MOBILE  = 'Mobile ',
		        SUFFIX_BROWSER = ' Browser',

		        // os
		        WINDOWS     = 'Windows';
		   
		    var isWindow            = typeof window !== UNDEF_TYPE,
		        NAVIGATOR           = (isWindow && window.navigator) ? 
		                                window.navigator : 
		                                undefined$1,
		        NAVIGATOR_UADATA    = (NAVIGATOR && NAVIGATOR.userAgentData) ? 
		                                NAVIGATOR.userAgentData : 
		                                undefined$1;

		    ///////////
		    // Helper
		    //////////

		    var extend = function (defaultRgx, extensions) {
		            var mergedRgx = {};
		            var extraRgx = extensions;
		            if (!isExtensions(extensions)) {
		                extraRgx = {};
		                for (var i in extensions) {
		                    for (var j in extensions[i]) {
		                        extraRgx[j] = extensions[i][j].concat(extraRgx[j] ? extraRgx[j] : []);
		                    }
		                }
		            }
		            for (var k in defaultRgx) {
		                mergedRgx[k] = extraRgx[k] && extraRgx[k].length % 2 === 0 ? extraRgx[k].concat(defaultRgx[k]) : defaultRgx[k];
		            }
		            return mergedRgx;
		        },
		        enumerize = function (arr) {
		            var enums = {};
		            for (var i=0; i<arr.length; i++) {
		                enums[arr[i].toUpperCase()] = arr[i];
		            }
		            return enums;
		        },
		        has = function (str1, str2) {
		            if (typeof str1 === OBJ_TYPE && str1.length > 0) {
		                for (var i in str1) {
		                    if (lowerize(str1[i]) == lowerize(str2)) return true;
		                }
		                return false;
		            }
		            return isString(str1) ? lowerize(str2).indexOf(lowerize(str1)) !== -1 : false;
		        },
		        isExtensions = function (obj, deep) {
		            for (var prop in obj) {
		                return /^(browser|cpu|device|engine|os)$/.test(prop) || (deep ? isExtensions(obj[prop]) : false);
		            }
		        },
		        isString = function (val) {
		            return typeof val === STR_TYPE;
		        },
		        itemListToArray = function (header) {
		            if (!header) return undefined$1;
		            var arr = [];
		            var tokens = strip(/\\?\"/g, header).split(',');
		            for (var i = 0; i < tokens.length; i++) {
		                if (tokens[i].indexOf(';') > -1) {
		                    var token = trim(tokens[i]).split(';v=');
		                    arr[i] = { brand : token[0], version : token[1] };
		                } else {
		                    arr[i] = trim(tokens[i]);
		                }
		            }
		            return arr;
		        },
		        lowerize = function (str) {
		            return isString(str) ? str.toLowerCase() : str;
		        },
		        majorize = function (version) {
		            return isString(version) ? strip(/[^\d\.]/g, version).split('.')[0] : undefined$1;
		        },
		        setProps = function (arr) {
		            for (var i in arr) {
		                var propName = arr[i];
		                if (typeof propName == OBJ_TYPE && propName.length == 2) {
		                    this[propName[0]] = propName[1];
		                } else {
		                    this[propName] = undefined$1;
		                }
		            }
		            return this;
		        },
		        strip = function (pattern, str) {
		            return isString(str) ? str.replace(pattern, EMPTY) : str;
		        },
		        stripQuotes = function (str) {
		            return strip(/\\?\"/g, str); 
		        },
		        trim = function (str, len) {
		            if (isString(str)) {
		                str = strip(/^\s\s*/, str);
		                return typeof len === UNDEF_TYPE ? str : str.substring(0, UA_MAX_LENGTH);
		            }
		    };

		    ///////////////
		    // Map helper
		    //////////////

		    var rgxMapper = function (ua, arrays) {

		            if(!ua || !arrays) return;

		            var i = 0, j, k, p, q, matches, match;

		            // loop through all regexes maps
		            while (i < arrays.length && !matches) {

		                var regex = arrays[i],       // even sequence (0,2,4,..)
		                    props = arrays[i + 1];   // odd sequence (1,3,5,..)
		                j = k = 0;

		                // try matching uastring with regexes
		                while (j < regex.length && !matches) {

		                    if (!regex[j]) { break; }
		                    matches = regex[j++].exec(ua);

		                    if (!!matches) {
		                        for (p = 0; p < props.length; p++) {
		                            match = matches[++k];
		                            q = props[p];
		                            // check if given property is actually array
		                            if (typeof q === OBJ_TYPE && q.length > 0) {
		                                if (q.length === 2) {
		                                    if (typeof q[1] == FUNC_TYPE) {
		                                        // assign modified match
		                                        this[q[0]] = q[1].call(this, match);
		                                    } else {
		                                        // assign given value, ignore regex match
		                                        this[q[0]] = q[1];
		                                    }
		                                } else if (q.length === 3) {
		                                    // check whether function or regex
		                                    if (typeof q[1] === FUNC_TYPE && !(q[1].exec && q[1].test)) {
		                                        // call function (usually string mapper)
		                                        this[q[0]] = match ? q[1].call(this, match, q[2]) : undefined$1;
		                                    } else {
		                                        // sanitize match using given regex
		                                        this[q[0]] = match ? match.replace(q[1], q[2]) : undefined$1;
		                                    }
		                                } else if (q.length === 4) {
		                                        this[q[0]] = match ? q[3].call(this, match.replace(q[1], q[2])) : undefined$1;
		                                }
		                            } else {
		                                this[q] = match ? match : undefined$1;
		                            }
		                        }
		                    }
		                }
		                i += 2;
		            }
		        },

		        strMapper = function (str, map) {

		            for (var i in map) {
		                // check if current value is array
		                if (typeof map[i] === OBJ_TYPE && map[i].length > 0) {
		                    for (var j = 0; j < map[i].length; j++) {
		                        if (has(map[i][j], str)) {
		                            return (i === UNKNOWN) ? undefined$1 : i;
		                        }
		                    }
		                } else if (has(map[i], str)) {
		                    return (i === UNKNOWN) ? undefined$1 : i;
		                }
		            }
		            return map.hasOwnProperty('*') ? map['*'] : str;
		    };

		    ///////////////
		    // String map
		    //////////////

		    var windowsVersionMap = {
		            'ME'        : '4.90',
		            'NT 3.11'   : 'NT3.51',
		            'NT 4.0'    : 'NT4.0',
		            '2000'      : 'NT 5.0',
		            'XP'        : ['NT 5.1', 'NT 5.2'],
		            'Vista'     : 'NT 6.0',
		            '7'         : 'NT 6.1',
		            '8'         : 'NT 6.2',
		            '8.1'       : 'NT 6.3',
		            '10'        : ['NT 6.4', 'NT 10.0'],
		            'RT'        : 'ARM'
		        },
		        
		        formFactorsMap = {
		            'embedded'  : 'Automotive',
		            'mobile'    : 'Mobile',
		            'tablet'    : ['Tablet', 'EInk'],
		            'smarttv'   : 'TV',
		            'wearable'  : 'Watch',
		            'xr'        : ['VR', 'XR'],
		            '?'         : ['Desktop', 'Unknown'],
		            '*'         : undefined$1
		    };

		    //////////////
		    // Regex map
		    /////////////

		    var defaultRegexes = {

		        browser : [[

		            // Most common regardless engine
		            /\b(?:crmo|crios)\/([\w\.]+)/i                                      // Chrome for Android/iOS
		            ], [VERSION, [NAME, PREFIX_MOBILE + 'Chrome']], [
		            /edg(?:e|ios|a)?\/([\w\.]+)/i                                       // Microsoft Edge
		            ], [VERSION, [NAME, 'Edge']], [

		            // Presto based
		            /(opera mini)\/([-\w\.]+)/i,                                        // Opera Mini
		            /(opera [mobiletab]{3,6})\b.+version\/([-\w\.]+)/i,                 // Opera Mobi/Tablet
		            /(opera)(?:.+version\/|[\/ ]+)([\w\.]+)/i                           // Opera
		            ], [NAME, VERSION], [
		            /opios[\/ ]+([\w\.]+)/i                                             // Opera mini on iphone >= 8.0
		            ], [VERSION, [NAME, OPERA+' Mini']], [
		            /\bop(?:rg)?x\/([\w\.]+)/i                                          // Opera GX
		            ], [VERSION, [NAME, OPERA+' GX']], [
		            /\bopr\/([\w\.]+)/i                                                 // Opera Webkit
		            ], [VERSION, [NAME, OPERA]], [

		            // Mixed
		            /\bb[ai]*d(?:uhd|[ub]*[aekoprswx]{5,6})[\/ ]?([\w\.]+)/i            // Baidu
		            ], [VERSION, [NAME, 'Baidu']], [
		            /\b(?:mxbrowser|mxios|myie2)\/?([-\w\.]*)\b/i                       // Maxthon
		            ], [VERSION, [NAME, 'Maxthon']], [
		            /(kindle)\/([\w\.]+)/i,                                             // Kindle
		            /(lunascape|maxthon|netfront|jasmine|blazer|sleipnir)[\/ ]?([\w\.]*)/i,      
		                                                                                // Lunascape/Maxthon/Netfront/Jasmine/Blazer/Sleipnir
		            // Trident based
		            /(avant|iemobile|slim(?:browser|boat|jet))[\/ ]?([\d\.]*)/i,        // Avant/IEMobile/SlimBrowser/SlimBoat/Slimjet
		            /(?:ms|\()(ie) ([\w\.]+)/i,                                         // Internet Explorer

		            // Blink/Webkit/KHTML based                                         // Flock/RockMelt/Midori/Epiphany/Silk/Skyfire/Bolt/Iron/Iridium/PhantomJS/Bowser/QupZilla/Falkon/LG Browser/Otter/qutebrowser/Dooble
		            /(flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs|bowser|qupzilla|falkon|rekonq|puffin|brave|whale(?!.+naver)|qqbrowserlite|duckduckgo|klar|helio|(?=comodo_)?dragon|otter|dooble|(?:lg |qute)browser)\/([-\w\.]+)/i,
		                                                                                // Rekonq/Puffin/Brave/Whale/QQBrowserLite/QQ//Vivaldi/DuckDuckGo/Klar/Helio/Dragon
		            /(heytap|ovi|115|surf)browser\/([\d\.]+)/i,                         // HeyTap/Ovi/115/Surf
		            /(ecosia|weibo)(?:__| \w+@)([\d\.]+)/i                              // Ecosia/Weibo
		            ], [NAME, VERSION], [
		            /quark(?:pc)?\/([-\w\.]+)/i                                         // Quark
		            ], [VERSION, [NAME, 'Quark']], [
		            /\bddg\/([\w\.]+)/i                                                 // DuckDuckGo
		            ], [VERSION, [NAME, 'DuckDuckGo']], [
		            /(?:\buc? ?browser|(?:juc.+)ucweb)[\/ ]?([\w\.]+)/i                 // UCBrowser
		            ], [VERSION, [NAME, 'UCBrowser']], [
		            /microm.+\bqbcore\/([\w\.]+)/i,                                     // WeChat Desktop for Windows Built-in Browser
		            /\bqbcore\/([\w\.]+).+microm/i,
		            /micromessenger\/([\w\.]+)/i                                        // WeChat
		            ], [VERSION, [NAME, 'WeChat']], [
		            /konqueror\/([\w\.]+)/i                                             // Konqueror
		            ], [VERSION, [NAME, 'Konqueror']], [
		            /trident.+rv[: ]([\w\.]{1,9})\b.+like gecko/i                       // IE11
		            ], [VERSION, [NAME, 'IE']], [
		            /ya(?:search)?browser\/([\w\.]+)/i                                  // Yandex
		            ], [VERSION, [NAME, 'Yandex']], [
		            /slbrowser\/([\w\.]+)/i                                             // Smart Lenovo Browser
		            ], [VERSION, [NAME, 'Smart ' + LENOVO + SUFFIX_BROWSER]], [
		            /(avast|avg)\/([\w\.]+)/i                                           // Avast/AVG Secure Browser
		            ], [[NAME, /(.+)/, '$1 Secure' + SUFFIX_BROWSER], VERSION], [
		            /\bfocus\/([\w\.]+)/i                                               // Firefox Focus
		            ], [VERSION, [NAME, FIREFOX+' Focus']], [
		            /\bopt\/([\w\.]+)/i                                                 // Opera Touch
		            ], [VERSION, [NAME, OPERA+' Touch']], [
		            /coc_coc\w+\/([\w\.]+)/i                                            // Coc Coc Browser
		            ], [VERSION, [NAME, 'Coc Coc']], [
		            /dolfin\/([\w\.]+)/i                                                // Dolphin
		            ], [VERSION, [NAME, 'Dolphin']], [
		            /coast\/([\w\.]+)/i                                                 // Opera Coast
		            ], [VERSION, [NAME, OPERA+' Coast']], [
		            /miuibrowser\/([\w\.]+)/i                                           // MIUI Browser
		            ], [VERSION, [NAME, 'MIUI' + SUFFIX_BROWSER]], [
		            /fxios\/([\w\.-]+)/i                                                // Firefox for iOS
		            ], [VERSION, [NAME, PREFIX_MOBILE + FIREFOX]], [
		            /\bqihoobrowser\/?([\w\.]*)/i                                       // 360
		            ], [VERSION, [NAME, '360']], [
		            /\b(qq)\/([\w\.]+)/i                                                // QQ
		            ], [[NAME, /(.+)/, '$1Browser'], VERSION], [
		            /(oculus|sailfish|huawei|vivo|pico)browser\/([\w\.]+)/i
		            ], [[NAME, /(.+)/, '$1' + SUFFIX_BROWSER], VERSION], [              // Oculus/Sailfish/HuaweiBrowser/VivoBrowser/PicoBrowser
		            /samsungbrowser\/([\w\.]+)/i                                        // Samsung Internet
		            ], [VERSION, [NAME, SAMSUNG + ' Internet']], [
		            /metasr[\/ ]?([\d\.]+)/i                                            // Sogou Explorer
		            ], [VERSION, [NAME, SOGOU + ' Explorer']], [
		            /(sogou)mo\w+\/([\d\.]+)/i                                          // Sogou Mobile
		            ], [[NAME, SOGOU + ' Mobile'], VERSION], [
		            /(electron)\/([\w\.]+) safari/i,                                    // Electron-based App
		            /(tesla)(?: qtcarbrowser|\/(20\d\d\.[-\w\.]+))/i,                   // Tesla
		            /m?(qqbrowser|2345(?=browser|chrome|explorer))\w*[\/ ]?v?([\w\.]+)/i   // QQ/2345
		            ], [NAME, VERSION], [
		            /(lbbrowser|rekonq)/i                                               // LieBao Browser/Rekonq
		            ], [NAME], [
		            /ome\/([\w\.]+) \w* ?(iron) saf/i,                                  // Iron
		            /ome\/([\w\.]+).+qihu (360)[es]e/i                                  // 360
		            ], [VERSION, NAME], [

		            // WebView
		            /((?:fban\/fbios|fb_iab\/fb4a)(?!.+fbav)|;fbav\/([\w\.]+);)/i       // Facebook App for iOS & Android
		            ], [[NAME, FACEBOOK], VERSION, [TYPE, INAPP]], [
		            /(Klarna)\/([\w\.]+)/i,                                             // Klarna Shopping Browser for iOS & Android
		            /(kakao(?:talk|story))[\/ ]([\w\.]+)/i,                             // Kakao App
		            /(naver)\(.*?(\d+\.[\w\.]+).*\)/i,                                  // Naver InApp
		            /(daum)apps[\/ ]([\w\.]+)/i,                                        // Daum App
		            /safari (line)\/([\w\.]+)/i,                                        // Line App for iOS
		            /\b(line)\/([\w\.]+)\/iab/i,                                        // Line App for Android
		            /(alipay)client\/([\w\.]+)/i,                                       // Alipay
		            /(twitter)(?:and| f.+e\/([\w\.]+))/i,                               // Twitter
		            /(instagram|snapchat)[\/ ]([-\w\.]+)/i                              // Instagram/Snapchat
		            ], [NAME, VERSION, [TYPE, INAPP]], [
		            /\bgsa\/([\w\.]+) .*safari\//i                                      // Google Search Appliance on iOS
		            ], [VERSION, [NAME, 'GSA'], [TYPE, INAPP]], [
		            /musical_ly(?:.+app_?version\/|_)([\w\.]+)/i                        // TikTok
		            ], [VERSION, [NAME, 'TikTok'], [TYPE, INAPP]], [
		            /\[(linkedin)app\]/i                                                // LinkedIn App for iOS & Android
		            ], [NAME, [TYPE, INAPP]], [

		            /(chromium)[\/ ]([-\w\.]+)/i                                        // Chromium
		            ], [NAME, VERSION], [

		            /headlesschrome(?:\/([\w\.]+)| )/i                                  // Chrome Headless
		            ], [VERSION, [NAME, CHROME+' Headless']], [

		            / wv\).+(chrome)\/([\w\.]+)/i                                       // Chrome WebView
		            ], [[NAME, CHROME+' WebView'], VERSION], [

		            /droid.+ version\/([\w\.]+)\b.+(?:mobile safari|safari)/i           // Android Browser
		            ], [VERSION, [NAME, 'Android' + SUFFIX_BROWSER]], [

		            /chrome\/([\w\.]+) mobile/i                                         // Chrome Mobile
		            ], [VERSION, [NAME, PREFIX_MOBILE + 'Chrome']], [

		            /(chrome|omniweb|arora|[tizenoka]{5} ?browser)\/v?([\w\.]+)/i       // Chrome/OmniWeb/Arora/Tizen/Nokia
		            ], [NAME, VERSION], [

		            /version\/([\w\.\,]+) .*mobile(?:\/\w+ | ?)safari/i                 // Safari Mobile
		            ], [VERSION, [NAME, PREFIX_MOBILE + 'Safari']], [
		            /iphone .*mobile(?:\/\w+ | ?)safari/i
		            ], [[NAME, PREFIX_MOBILE + 'Safari']], [
		            /version\/([\w\.\,]+) .*(safari)/i                                  // Safari
		            ], [VERSION, NAME], [
		            /webkit.+?(mobile ?safari|safari)(\/[\w\.]+)/i                      // Safari < 3.0
		            ], [NAME, [VERSION, '1']], [

		            /(webkit|khtml)\/([\w\.]+)/i
		            ], [NAME, VERSION], [

		            // Gecko based
		            /(?:mobile|tablet);.*(firefox)\/([\w\.-]+)/i                        // Firefox Mobile
		            ], [[NAME, PREFIX_MOBILE + FIREFOX], VERSION], [
		            /(navigator|netscape\d?)\/([-\w\.]+)/i                              // Netscape
		            ], [[NAME, 'Netscape'], VERSION], [
		            /(wolvic|librewolf)\/([\w\.]+)/i                                    // Wolvic/LibreWolf
		            ], [NAME, VERSION], [
		            /mobile vr; rv:([\w\.]+)\).+firefox/i                               // Firefox Reality
		            ], [VERSION, [NAME, FIREFOX+' Reality']], [
		            /ekiohf.+(flow)\/([\w\.]+)/i,                                       // Flow
		            /(swiftfox)/i,                                                      // Swiftfox
		            /(icedragon|iceweasel|camino|chimera|fennec|maemo browser|minimo|conkeror)[\/ ]?([\w\.\+]+)/i,
		                                                                                // IceDragon/Iceweasel/Camino/Chimera/Fennec/Maemo/Minimo/Conkeror
		            /(seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([-\w\.]+)$/i,
		                                                                                // Firefox/SeaMonkey/K-Meleon/IceCat/IceApe/Firebird/Phoenix
		            /(firefox)\/([\w\.]+)/i,                                            // Other Firefox-based
		            /(mozilla)\/([\w\.]+) .+rv\:.+gecko\/\d+/i,                         // Mozilla

		            // Other
		            /(amaya|dillo|doris|icab|ladybird|lynx|mosaic|netsurf|obigo|polaris|w3m|(?:go|ice|up)[\. ]?browser)[-\/ ]?v?([\w\.]+)/i,
		                                                                                // Polaris/Lynx/Dillo/iCab/Doris/Amaya/w3m/NetSurf/Obigo/Mosaic/Go/ICE/UP.Browser/Ladybird
		            /\b(links) \(([\w\.]+)/i                                            // Links
		            ], [NAME, [VERSION, /_/g, '.']], [
		            
		            /(cobalt)\/([\w\.]+)/i                                              // Cobalt
		            ], [NAME, [VERSION, /[^\d\.]+./, EMPTY]]
		        ],

		        cpu : [[

		            /\b((amd|x|x86[-_]?|wow|win)64)\b/i                                 // AMD64 (x64)
		            ], [[ARCHITECTURE, 'amd64']], [

		            /(ia32(?=;))/i,                                                     // IA32 (quicktime)
		            /\b((i[346]|x)86)(pc)?\b/i                                          // IA32 (x86)
		            ], [[ARCHITECTURE, 'ia32']], [

		            /\b(aarch64|arm(v?[89]e?l?|_?64))\b/i                               // ARM64
		            ], [[ARCHITECTURE, 'arm64']], [

		            /\b(arm(v[67])?ht?n?[fl]p?)\b/i                                     // ARMHF
		            ], [[ARCHITECTURE, 'armhf']], [

		            // PocketPC mistakenly identified as PowerPC
		            /( (ce|mobile); ppc;|\/[\w\.]+arm\b)/i
		            ], [[ARCHITECTURE, 'arm']], [

		            /((ppc|powerpc)(64)?)( mac|;|\))/i                                  // PowerPC
		            ], [[ARCHITECTURE, /ower/, EMPTY, lowerize]], [

		            / sun4\w[;\)]/i                                                     // SPARC
		            ], [[ARCHITECTURE, 'sparc']], [

		            /\b(avr32|ia64(?=;)|68k(?=\))|\barm(?=v([1-7]|[5-7]1)l?|;|eabi)|(irix|mips|sparc)(64)?\b|pa-risc)/i
		                                                                                // IA64, 68K, ARM/64, AVR/32, IRIX/64, MIPS/64, SPARC/64, PA-RISC
		            ], [[ARCHITECTURE, lowerize]]
		        ],

		        device : [[

		            //////////////////////////
		            // MOBILES & TABLETS
		            /////////////////////////

		            // Samsung
		            /\b(sch-i[89]0\d|shw-m380s|sm-[ptx]\w{2,4}|gt-[pn]\d{2,4}|sgh-t8[56]9|nexus 10)/i
		            ], [MODEL, [VENDOR, SAMSUNG], [TYPE, TABLET]], [
		            /\b((?:s[cgp]h|gt|sm)-(?![lr])\w+|sc[g-]?[\d]+a?|galaxy nexus)/i,
		            /samsung[- ]((?!sm-[lr])[-\w]+)/i,
		            /sec-(sgh\w+)/i
		            ], [MODEL, [VENDOR, SAMSUNG], [TYPE, MOBILE]], [

		            // Apple
		            /(?:\/|\()(ip(?:hone|od)[\w, ]*)(?:\/|;)/i                          // iPod/iPhone
		            ], [MODEL, [VENDOR, APPLE], [TYPE, MOBILE]], [
		            /\((ipad);[-\w\),; ]+apple/i,                                       // iPad
		            /applecoremedia\/[\w\.]+ \((ipad)/i,
		            /\b(ipad)\d\d?,\d\d?[;\]].+ios/i
		            ], [MODEL, [VENDOR, APPLE], [TYPE, TABLET]], [
		            /(macintosh);/i
		            ], [MODEL, [VENDOR, APPLE]], [

		            // Sharp
		            /\b(sh-?[altvz]?\d\d[a-ekm]?)/i
		            ], [MODEL, [VENDOR, SHARP], [TYPE, MOBILE]], [

		            // Honor
		            /\b((?:brt|eln|hey2?|gdi|jdn)-a?[lnw]09|(?:ag[rm]3?|jdn2|kob2)-a?[lw]0[09]hn)(?: bui|\)|;)/i
		            ], [MODEL, [VENDOR, HONOR], [TYPE, TABLET]], [
		            /honor([-\w ]+)[;\)]/i
		            ], [MODEL, [VENDOR, HONOR], [TYPE, MOBILE]], [

		            // Huawei
		            /\b((?:ag[rs][2356]?k?|bah[234]?|bg[2o]|bt[kv]|cmr|cpn|db[ry]2?|jdn2|got|kob2?k?|mon|pce|scm|sht?|[tw]gr|vrd)-[ad]?[lw][0125][09]b?|605hw|bg2-u03|(?:gem|fdr|m2|ple|t1)-[7a]0[1-4][lu]|t1-a2[13][lw]|mediapad[\w\. ]*(?= bui|\)))\b(?!.+d\/s)/i
		            ], [MODEL, [VENDOR, HUAWEI], [TYPE, TABLET]], [
		            /(?:huawei)([-\w ]+)[;\)]/i,
		            /\b(nexus 6p|\w{2,4}e?-[atu]?[ln][\dx][012359c][adn]?)\b(?!.+d\/s)/i
		            ], [MODEL, [VENDOR, HUAWEI], [TYPE, MOBILE]], [

		            // Xiaomi
		            /oid[^\)]+; (2[\dbc]{4}(182|283|rp\w{2})[cgl]|m2105k81a?c)(?: bui|\))/i,
		            /\b((?:red)?mi[-_ ]?pad[\w- ]*)(?: bui|\))/i                                // Mi Pad tablets
		            ],[[MODEL, /_/g, ' '], [VENDOR, XIAOMI], [TYPE, TABLET]], [

		            /\b(poco[\w ]+|m2\d{3}j\d\d[a-z]{2})(?: bui|\))/i,                  // Xiaomi POCO
		            /\b; (\w+) build\/hm\1/i,                                           // Xiaomi Hongmi 'numeric' models
		            /\b(hm[-_ ]?note?[_ ]?(?:\d\w)?) bui/i,                             // Xiaomi Hongmi
		            /\b(redmi[\-_ ]?(?:note|k)?[\w_ ]+)(?: bui|\))/i,                   // Xiaomi Redmi
		            /oid[^\)]+; (m?[12][0-389][01]\w{3,6}[c-y])( bui|; wv|\))/i,        // Xiaomi Redmi 'numeric' models
		            /\b(mi[-_ ]?(?:a\d|one|one[_ ]plus|note lte|max|cc)?[_ ]?(?:\d?\w?)[_ ]?(?:plus|se|lite|pro)?)(?: bui|\))/i, // Xiaomi Mi
		            / ([\w ]+) miui\/v?\d/i
		            ], [[MODEL, /_/g, ' '], [VENDOR, XIAOMI], [TYPE, MOBILE]], [

		            // OPPO
		            /; (\w+) bui.+ oppo/i,
		            /\b(cph[12]\d{3}|p(?:af|c[al]|d\w|e[ar])[mt]\d0|x9007|a101op)\b/i
		            ], [MODEL, [VENDOR, OPPO], [TYPE, MOBILE]], [
		            /\b(opd2(\d{3}a?))(?: bui|\))/i
		            ], [MODEL, [VENDOR, strMapper, { 'OnePlus' : ['304', '403', '203'], '*' : OPPO }], [TYPE, TABLET]], [

		            // BLU Vivo Series
		            /(vivo (5r?|6|8l?|go|one|s|x[il]?[2-4]?)[\w\+ ]*)(?: bui|\))/i
		            ], [MODEL, [VENDOR, 'BLU'], [TYPE, MOBILE]], [            
		            // Vivo
		            /; vivo (\w+)(?: bui|\))/i,
		            /\b(v[12]\d{3}\w?[at])(?: bui|;)/i
		            ], [MODEL, [VENDOR, 'Vivo'], [TYPE, MOBILE]], [

		            // Realme
		            /\b(rmx[1-3]\d{3})(?: bui|;|\))/i
		            ], [MODEL, [VENDOR, 'Realme'], [TYPE, MOBILE]], [

		            // Motorola
		            /\b(milestone|droid(?:[2-4x]| (?:bionic|x2|pro|razr))?:?( 4g)?)\b[\w ]+build\//i,
		            /\bmot(?:orola)?[- ](\w*)/i,
		            /((?:moto(?! 360)[\w\(\) ]+|xt\d{3,4}|nexus 6)(?= bui|\)))/i
		            ], [MODEL, [VENDOR, MOTOROLA], [TYPE, MOBILE]], [
		            /\b(mz60\d|xoom[2 ]{0,2}) build\//i
		            ], [MODEL, [VENDOR, MOTOROLA], [TYPE, TABLET]], [

		            // LG
		            /((?=lg)?[vl]k\-?\d{3}) bui| 3\.[-\w; ]{10}lg?-([06cv9]{3,4})/i
		            ], [MODEL, [VENDOR, LG], [TYPE, TABLET]], [
		            /(lm(?:-?f100[nv]?|-[\w\.]+)(?= bui|\))|nexus [45])/i,
		            /\blg[-e;\/ ]+(?!.*(?:browser|netcast|android tv|watch))(\w+)/i,
		            /\blg-?([\d\w]+) bui/i
		            ], [MODEL, [VENDOR, LG], [TYPE, MOBILE]], [

		            // Lenovo
		            /(ideatab[-\w ]+|602lv|d-42a|a101lv|a2109a|a3500-hv|s[56]000|pb-6505[my]|tb-?x?\d{3,4}(?:f[cu]|xu|[av])|yt\d?-[jx]?\d+[lfmx])( bui|;|\)|\/)/i,
		            /lenovo ?(b[68]0[08]0-?[hf]?|tab(?:[\w- ]+?)|tb[\w-]{6,7})( bui|;|\)|\/)/i
		            ], [MODEL, [VENDOR, LENOVO], [TYPE, TABLET]], [

		            // Nokia
		            /(nokia) (t[12][01])/i
		            ], [VENDOR, MODEL, [TYPE, TABLET]], [
		            /(?:maemo|nokia).*(n900|lumia \d+|rm-\d+)/i,
		            /nokia[-_ ]?(([-\w\. ]*))/i
		            ], [[MODEL, /_/g, ' '], [TYPE, MOBILE], [VENDOR, 'Nokia']], [

		            // Google
		            /(pixel (c|tablet))\b/i                                             // Google Pixel C/Tablet
		            ], [MODEL, [VENDOR, GOOGLE], [TYPE, TABLET]], [
		            /droid.+; (pixel[\daxl ]{0,6})(?: bui|\))/i                         // Google Pixel
		            ], [MODEL, [VENDOR, GOOGLE], [TYPE, MOBILE]], [

		            // Sony
		            /droid.+; (a?\d[0-2]{2}so|[c-g]\d{4}|so[-gl]\w+|xq-a\w[4-7][12])(?= bui|\).+chrome\/(?![1-6]{0,1}\d\.))/i
		            ], [MODEL, [VENDOR, SONY], [TYPE, MOBILE]], [
		            /sony tablet [ps]/i,
		            /\b(?:sony)?sgp\w+(?: bui|\))/i
		            ], [[MODEL, 'Xperia Tablet'], [VENDOR, SONY], [TYPE, TABLET]], [

		            // OnePlus
		            / (kb2005|in20[12]5|be20[12][59])\b/i,
		            /(?:one)?(?:plus)? (a\d0\d\d)(?: b|\))/i
		            ], [MODEL, [VENDOR, ONEPLUS], [TYPE, MOBILE]], [

		            // Amazon
		            /(alexa)webm/i,
		            /(kf[a-z]{2}wi|aeo(?!bc)\w\w)( bui|\))/i,                           // Kindle Fire without Silk / Echo Show
		            /(kf[a-z]+)( bui|\)).+silk\//i                                      // Kindle Fire HD
		            ], [MODEL, [VENDOR, AMAZON], [TYPE, TABLET]], [
		            /((?:sd|kf)[0349hijorstuw]+)( bui|\)).+silk\//i                     // Fire Phone
		            ], [[MODEL, /(.+)/g, 'Fire Phone $1'], [VENDOR, AMAZON], [TYPE, MOBILE]], [

		            // BlackBerry
		            /(playbook);[-\w\),; ]+(rim)/i                                      // BlackBerry PlayBook
		            ], [MODEL, VENDOR, [TYPE, TABLET]], [
		            /\b((?:bb[a-f]|st[hv])100-\d)/i,
		            /\(bb10; (\w+)/i                                                    // BlackBerry 10
		            ], [MODEL, [VENDOR, BLACKBERRY], [TYPE, MOBILE]], [

		            // Asus
		            /(?:\b|asus_)(transfo[prime ]{4,10} \w+|eeepc|slider \w+|nexus 7|padfone|p00[cj])/i
		            ], [MODEL, [VENDOR, ASUS], [TYPE, TABLET]], [
		            / (z[bes]6[027][012][km][ls]|zenfone \d\w?)\b/i
		            ], [MODEL, [VENDOR, ASUS], [TYPE, MOBILE]], [

		            // HTC
		            /(nexus 9)/i                                                        // HTC Nexus 9
		            ], [MODEL, [VENDOR, 'HTC'], [TYPE, TABLET]], [
		            /(htc)[-;_ ]{1,2}([\w ]+(?=\)| bui)|\w+)/i,                         // HTC

		            // ZTE
		            /(zte)[- ]([\w ]+?)(?: bui|\/|\))/i,
		            /(alcatel|geeksphone|nexian|panasonic(?!(?:;|\.))|sony(?!-bra))[-_ ]?([-\w]*)/i         // Alcatel/GeeksPhone/Nexian/Panasonic/Sony
		            ], [VENDOR, [MODEL, /_/g, ' '], [TYPE, MOBILE]], [

		            // TCL
		            /tcl (xess p17aa)/i,
		            /droid [\w\.]+; ((?:8[14]9[16]|9(?:0(?:48|60|8[01])|1(?:3[27]|66)|2(?:6[69]|9[56])|466))[gqswx])(_\w(\w|\w\w))?(\)| bui)/i
		            ], [MODEL, [VENDOR, 'TCL'], [TYPE, TABLET]], [
		            /droid [\w\.]+; (418(?:7d|8v)|5087z|5102l|61(?:02[dh]|25[adfh]|27[ai]|56[dh]|59k|65[ah])|a509dl|t(?:43(?:0w|1[adepqu])|50(?:6d|7[adju])|6(?:09dl|10k|12b|71[efho]|76[hjk])|7(?:66[ahju]|67[hw]|7[045][bh]|71[hk]|73o|76[ho]|79w|81[hks]?|82h|90[bhsy]|99b)|810[hs]))(_\w(\w|\w\w))?(\)| bui)/i
		            ], [MODEL, [VENDOR, 'TCL'], [TYPE, MOBILE]], [

		            // itel
		            /(itel) ((\w+))/i
		            ], [[VENDOR, lowerize], MODEL, [TYPE, strMapper, { 'tablet' : ['p10001l', 'w7001'], '*' : 'mobile' }]], [

		            // Acer
		            /droid.+; ([ab][1-7]-?[0178a]\d\d?)/i
		            ], [MODEL, [VENDOR, 'Acer'], [TYPE, TABLET]], [

		            // Meizu
		            /droid.+; (m[1-5] note) bui/i,
		            /\bmz-([-\w]{2,})/i
		            ], [MODEL, [VENDOR, 'Meizu'], [TYPE, MOBILE]], [
		                
		            // Ulefone
		            /; ((?:power )?armor(?:[\w ]{0,8}))(?: bui|\))/i
		            ], [MODEL, [VENDOR, 'Ulefone'], [TYPE, MOBILE]], [

		            // Energizer
		            /; (energy ?\w+)(?: bui|\))/i,
		            /; energizer ([\w ]+)(?: bui|\))/i
		            ], [MODEL, [VENDOR, 'Energizer'], [TYPE, MOBILE]], [

		            // Cat
		            /; cat (b35);/i,
		            /; (b15q?|s22 flip|s48c|s62 pro)(?: bui|\))/i
		            ], [MODEL, [VENDOR, 'Cat'], [TYPE, MOBILE]], [

		            // Smartfren
		            /((?:new )?andromax[\w- ]+)(?: bui|\))/i
		            ], [MODEL, [VENDOR, 'Smartfren'], [TYPE, MOBILE]], [

		            // Nothing
		            /droid.+; (a(?:015|06[35]|142p?))/i
		            ], [MODEL, [VENDOR, 'Nothing'], [TYPE, MOBILE]], [

		            // Archos
		            /; (x67 5g|tikeasy \w+|ac[1789]\d\w+)( b|\))/i,
		            /archos ?(5|gamepad2?|([\w ]*[t1789]|hello) ?\d+[\w ]*)( b|\))/i
		            ], [MODEL, [VENDOR, 'Archos'], [TYPE, TABLET]], [
		            /archos ([\w ]+)( b|\))/i,
		            /; (ac[3-6]\d\w{2,8})( b|\))/i 
		            ], [MODEL, [VENDOR, 'Archos'], [TYPE, MOBILE]], [

		            // MIXED
		            /(imo) (tab \w+)/i,                                                 // IMO
		            /(infinix) (x1101b?)/i                                              // Infinix XPad
		            ], [VENDOR, MODEL, [TYPE, TABLET]], [

		            /(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus(?! zenw)|dell|jolla|meizu|motorola|polytron|infinix|tecno|micromax|advan)[-_ ]?([-\w]*)/i,
		                                                                                // BlackBerry/BenQ/Palm/Sony-Ericsson/Acer/Asus/Dell/Meizu/Motorola/Polytron/Infinix/Tecno/Micromax/Advan
		            /; (blu|hmd|imo|tcl)[_ ]([\w\+ ]+?)(?: bui|\)|; r)/i,               // BLU/HMD/IMO/TCL
		            /(hp) ([\w ]+\w)/i,                                                 // HP iPAQ
		            /(microsoft); (lumia[\w ]+)/i,                                      // Microsoft Lumia
		            /(lenovo)[-_ ]?([-\w ]+?)(?: bui|\)|\/)/i,                          // Lenovo
		            /(oppo) ?([\w ]+) bui/i                                             // OPPO
		            ], [VENDOR, MODEL, [TYPE, MOBILE]], [

		            /(kobo)\s(ereader|touch)/i,                                         // Kobo
		            /(hp).+(touchpad(?!.+tablet)|tablet)/i,                             // HP TouchPad
		            /(kindle)\/([\w\.]+)/i                                              // Kindle
		            ], [VENDOR, MODEL, [TYPE, TABLET]], [

		            /(surface duo)/i                                                    // Surface Duo
		            ], [MODEL, [VENDOR, MICROSOFT], [TYPE, TABLET]], [
		            /droid [\d\.]+; (fp\du?)(?: b|\))/i                                 // Fairphone
		            ], [MODEL, [VENDOR, 'Fairphone'], [TYPE, MOBILE]], [
		            /((?:tegranote|shield t(?!.+d tv))[\w- ]*?)(?: b|\))/i              // Nvidia Tablets
		            ], [MODEL, [VENDOR, NVIDIA], [TYPE, TABLET]], [
		            /(sprint) (\w+)/i                                                   // Sprint Phones
		            ], [VENDOR, MODEL, [TYPE, MOBILE]], [
		            /(kin\.[onetw]{3})/i                                                // Microsoft Kin
		            ], [[MODEL, /\./g, ' '], [VENDOR, MICROSOFT], [TYPE, MOBILE]], [
		            /droid.+; ([c6]+|et5[16]|mc[239][23]x?|vc8[03]x?)\)/i               // Zebra
		            ], [MODEL, [VENDOR, ZEBRA], [TYPE, TABLET]], [
		            /droid.+; (ec30|ps20|tc[2-8]\d[kx])\)/i
		            ], [MODEL, [VENDOR, ZEBRA], [TYPE, MOBILE]], [

		            ///////////////////
		            // SMARTTVS
		            ///////////////////

		            /smart-tv.+(samsung)/i                                              // Samsung
		            ], [VENDOR, [TYPE, SMARTTV]], [
		            /hbbtv.+maple;(\d+)/i
		            ], [[MODEL, /^/, 'SmartTV'], [VENDOR, SAMSUNG], [TYPE, SMARTTV]], [
		            /tcast.+(lg)e?. ([-\w]+)/i                                          // LG SmartTV
		            ], [VENDOR, MODEL, [TYPE, SMARTTV]], [
		            /(nux; netcast.+smarttv|lg (netcast\.tv-201\d|android tv))/i
		            ], [[VENDOR, LG], [TYPE, SMARTTV]], [
		            /(apple) ?tv/i                                                      // Apple TV
		            ], [VENDOR, [MODEL, APPLE+' TV'], [TYPE, SMARTTV]], [
		            /crkey.*devicetype\/chromecast/i                                    // Google Chromecast Third Generation
		            ], [[MODEL, CHROMECAST+' Third Generation'], [VENDOR, GOOGLE], [TYPE, SMARTTV]], [
		            /crkey.*devicetype\/([^/]*)/i                                       // Google Chromecast with specific device type
		            ], [[MODEL, /^/, 'Chromecast '], [VENDOR, GOOGLE], [TYPE, SMARTTV]], [
		            /fuchsia.*crkey/i                                                   // Google Chromecast Nest Hub
		            ], [[MODEL, CHROMECAST+' Nest Hub'], [VENDOR, GOOGLE], [TYPE, SMARTTV]], [
		            /crkey/i                                                            // Google Chromecast, Linux-based or unknown
		            ], [[MODEL, CHROMECAST], [VENDOR, GOOGLE], [TYPE, SMARTTV]], [
		            /(portaltv)/i                                                       // Facebook Portal TV
		            ], [MODEL, [VENDOR, FACEBOOK], [TYPE, SMARTTV]], [
		            /droid.+aft(\w+)( bui|\))/i                                         // Fire TV
		            ], [MODEL, [VENDOR, AMAZON], [TYPE, SMARTTV]], [
		            /(shield \w+ tv)/i                                                  // Nvidia Shield TV
		            ], [MODEL, [VENDOR, NVIDIA], [TYPE, SMARTTV]], [
		            /\(dtv[\);].+(aquos)/i,
		            /(aquos-tv[\w ]+)\)/i                                               // Sharp
		            ], [MODEL, [VENDOR, SHARP], [TYPE, SMARTTV]],[
		            /(bravia[\w ]+)( bui|\))/i                                          // Sony
		            ], [MODEL, [VENDOR, SONY], [TYPE, SMARTTV]], [
		            /(mi(tv|box)-?\w+) bui/i                                            // Xiaomi
		            ], [MODEL, [VENDOR, XIAOMI], [TYPE, SMARTTV]], [
		            /Hbbtv.*(technisat) (.*);/i                                         // TechniSAT
		            ], [VENDOR, MODEL, [TYPE, SMARTTV]], [
		            /\b(roku)[\dx]*[\)\/]((?:dvp-)?[\d\.]*)/i,                          // Roku
		            /hbbtv\/\d+\.\d+\.\d+ +\([\w\+ ]*; *([\w\d][^;]*);([^;]*)/i         // HbbTV devices
		            ], [[VENDOR, trim], [MODEL, trim], [TYPE, SMARTTV]], [
		                                                                                // SmartTV from Unidentified Vendors
		            /droid.+; ([\w- ]+) (?:android tv|smart[- ]?tv)/i
		            ], [MODEL, [TYPE, SMARTTV]], [
		            /\b(android tv|smart[- ]?tv|opera tv|tv; rv:)\b/i
		            ], [[TYPE, SMARTTV]], [

		            ///////////////////
		            // CONSOLES
		            ///////////////////

		            /(ouya)/i,                                                          // Ouya
		            /(nintendo) (\w+)/i                                                 // Nintendo
		            ], [VENDOR, MODEL, [TYPE, CONSOLE]], [
		            /droid.+; (shield)( bui|\))/i                                       // Nvidia Portable
		            ], [MODEL, [VENDOR, NVIDIA], [TYPE, CONSOLE]], [
		            /(playstation \w+)/i                                                // Playstation
		            ], [MODEL, [VENDOR, SONY], [TYPE, CONSOLE]], [
		            /\b(xbox(?: one)?(?!; xbox))[\); ]/i                                // Microsoft Xbox
		            ], [MODEL, [VENDOR, MICROSOFT], [TYPE, CONSOLE]], [

		            ///////////////////
		            // WEARABLES
		            ///////////////////

		            /\b(sm-[lr]\d\d[0156][fnuw]?s?|gear live)\b/i                       // Samsung Galaxy Watch
		            ], [MODEL, [VENDOR, SAMSUNG], [TYPE, WEARABLE]], [
		            /((pebble))app/i,                                                   // Pebble
		            /(asus|google|lg|oppo) ((pixel |zen)?watch[\w ]*)( bui|\))/i        // Asus ZenWatch / LG Watch / Pixel Watch
		            ], [VENDOR, MODEL, [TYPE, WEARABLE]], [
		            /(ow(?:19|20)?we?[1-3]{1,3})/i                                      // Oppo Watch
		            ], [MODEL, [VENDOR, OPPO], [TYPE, WEARABLE]], [
		            /(watch)(?: ?os[,\/]|\d,\d\/)[\d\.]+/i                              // Apple Watch
		            ], [MODEL, [VENDOR, APPLE], [TYPE, WEARABLE]], [
		            /(opwwe\d{3})/i                                                     // OnePlus Watch
		            ], [MODEL, [VENDOR, ONEPLUS], [TYPE, WEARABLE]], [
		            /(moto 360)/i                                                       // Motorola 360
		            ], [MODEL, [VENDOR, MOTOROLA], [TYPE, WEARABLE]], [
		            /(smartwatch 3)/i                                                   // Sony SmartWatch
		            ], [MODEL, [VENDOR, SONY], [TYPE, WEARABLE]], [
		            /(g watch r)/i                                                      // LG G Watch R
		            ], [MODEL, [VENDOR, LG], [TYPE, WEARABLE]], [
		            /droid.+; (wt63?0{2,3})\)/i
		            ], [MODEL, [VENDOR, ZEBRA], [TYPE, WEARABLE]], [

		            ///////////////////
		            // XR
		            ///////////////////

		            /droid.+; (glass) \d/i                                              // Google Glass
		            ], [MODEL, [VENDOR, GOOGLE], [TYPE, XR]], [
		            /(pico) (4|neo3(?: link|pro)?)/i                                    // Pico
		            ], [VENDOR, MODEL, [TYPE, XR]], [
		            /(quest( \d| pro)?s?).+vr/i                                         // Meta Quest
		            ], [MODEL, [VENDOR, FACEBOOK], [TYPE, XR]], [

		            ///////////////////
		            // EMBEDDED
		            ///////////////////

		            /(tesla)(?: qtcarbrowser|\/[-\w\.]+)/i                              // Tesla
		            ], [VENDOR, [TYPE, EMBEDDED]], [
		            /(aeobc)\b/i                                                        // Echo Dot
		            ], [MODEL, [VENDOR, AMAZON], [TYPE, EMBEDDED]], [
		            /(homepod).+mac os/i                                                // Apple HomePod
		            ], [MODEL, [VENDOR, APPLE], [TYPE, EMBEDDED]], [
		            /windows iot/i
		            ], [[TYPE, EMBEDDED]], [

		            ////////////////////
		            // MIXED (GENERIC)
		            ///////////////////

		            /droid .+?; ([^;]+?)(?: bui|; wv\)|\) applew).+?(mobile|vr|\d) safari/i
		            ], [MODEL, [TYPE, strMapper, { 'mobile' : 'Mobile', 'xr' : 'VR', '*' : TABLET }]], [
		            /\b((tablet|tab)[;\/]|focus\/\d(?!.+mobile))/i                      // Unidentifiable Tablet
		            ], [[TYPE, TABLET]], [
		            /(phone|mobile(?:[;\/]| [ \w\/\.]*safari)|pda(?=.+windows ce))/i    // Unidentifiable Mobile
		            ], [[TYPE, MOBILE]], [
		            /droid .+?; ([\w\. -]+)( bui|\))/i                                  // Generic Android Device
		            ], [MODEL, [VENDOR, 'Generic']]
		        ],

		        engine : [[

		            /windows.+ edge\/([\w\.]+)/i                                       // EdgeHTML
		            ], [VERSION, [NAME, EDGE+'HTML']], [

		            /(arkweb)\/([\w\.]+)/i                                              // ArkWeb
		            ], [NAME, VERSION], [

		            /webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i                         // Blink
		            ], [VERSION, [NAME, 'Blink']], [

		            /(presto)\/([\w\.]+)/i,                                             // Presto
		            /(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna|servo)\/([\w\.]+)/i, // WebKit/Trident/NetFront/NetSurf/Amaya/Lynx/w3m/Goanna/Servo
		            /ekioh(flow)\/([\w\.]+)/i,                                          // Flow
		            /(khtml|tasman|links)[\/ ]\(?([\w\.]+)/i,                           // KHTML/Tasman/Links
		            /(icab)[\/ ]([23]\.[\d\.]+)/i,                                      // iCab

		            /\b(libweb)/i                                                       // LibWeb
		            ], [NAME, VERSION], [
		            /ladybird\//i
		            ], [[NAME, 'LibWeb']], [

		            /rv\:([\w\.]{1,9})\b.+(gecko)/i                                     // Gecko
		            ], [VERSION, NAME]
		        ],

		        os : [[

		            // Windows
		            /microsoft (windows) (vista|xp)/i                                   // Windows (iTunes)
		            ], [NAME, VERSION], [
		            /(windows (?:phone(?: os)?|mobile|iot))[\/ ]?([\d\.\w ]*)/i         // Windows Phone
		            ], [NAME, [VERSION, strMapper, windowsVersionMap]], [
		            /windows nt 6\.2; (arm)/i,                                          // Windows RT
		            /windows[\/ ]([ntce\d\. ]+\w)(?!.+xbox)/i,
		            /(?:win(?=3|9|n)|win 9x )([nt\d\.]+)/i
		            ], [[VERSION, strMapper, windowsVersionMap], [NAME, WINDOWS]], [

		            // iOS/macOS
		            /[adehimnop]{4,7}\b(?:.*os ([\w]+) like mac|; opera)/i,             // iOS
		            /(?:ios;fbsv\/|iphone.+ios[\/ ])([\d\.]+)/i,
		            /cfnetwork\/.+darwin/i
		            ], [[VERSION, /_/g, '.'], [NAME, 'iOS']], [
		            /(mac os x) ?([\w\. ]*)/i,
		            /(macintosh|mac_powerpc\b)(?!.+haiku)/i                             // Mac OS
		            ], [[NAME, 'macOS'], [VERSION, /_/g, '.']], [

		            // Google Chromecast
		            /android ([\d\.]+).*crkey/i                                         // Google Chromecast, Android-based
		            ], [VERSION, [NAME, CHROMECAST + ' Android']], [
		            /fuchsia.*crkey\/([\d\.]+)/i                                        // Google Chromecast, Fuchsia-based
		            ], [VERSION, [NAME, CHROMECAST + ' Fuchsia']], [
		            /crkey\/([\d\.]+).*devicetype\/smartspeaker/i                       // Google Chromecast, Linux-based Smart Speaker
		            ], [VERSION, [NAME, CHROMECAST + ' SmartSpeaker']], [
		            /linux.*crkey\/([\d\.]+)/i                                          // Google Chromecast, Legacy Linux-based
		            ], [VERSION, [NAME, CHROMECAST + ' Linux']], [
		            /crkey\/([\d\.]+)/i                                                 // Google Chromecast, unknown
		            ], [VERSION, [NAME, CHROMECAST]], [

		            // Mobile OSes
		            /droid ([\w\.]+)\b.+(android[- ]x86|harmonyos)/i                    // Android-x86/HarmonyOS
		            ], [VERSION, NAME], [                                               
		            /(ubuntu) ([\w\.]+) like android/i                                  // Ubuntu Touch
		            ], [[NAME, /(.+)/, '$1 Touch'], VERSION], [
		                                                                                // Android/Blackberry/WebOS/QNX/Bada/RIM/KaiOS/Maemo/MeeGo/S40/Sailfish OS/OpenHarmony/Tizen
		            /(android|bada|blackberry|kaios|maemo|meego|openharmony|qnx|rim tablet os|sailfish|series40|symbian|tizen|webos)\w*[-\/\.; ]?([\d\.]*)/i
		            ], [NAME, VERSION], [
		            /\(bb(10);/i                                                        // BlackBerry 10
		            ], [VERSION, [NAME, BLACKBERRY]], [
		            /(?:symbian ?os|symbos|s60(?=;)|series ?60)[-\/ ]?([\w\.]*)/i       // Symbian
		            ], [VERSION, [NAME, 'Symbian']], [
		            /mozilla\/[\d\.]+ \((?:mobile|tablet|tv|mobile; [\w ]+); rv:.+ gecko\/([\w\.]+)/i // Firefox OS
		            ], [VERSION, [NAME, FIREFOX+' OS']], [
		            /web0s;.+rt(tv)/i,
		            /\b(?:hp)?wos(?:browser)?\/([\w\.]+)/i                              // WebOS
		            ], [VERSION, [NAME, 'webOS']], [
		            /watch(?: ?os[,\/]|\d,\d\/)([\d\.]+)/i                              // watchOS
		            ], [VERSION, [NAME, 'watchOS']], [

		            // Google ChromeOS
		            /(cros) [\w]+(?:\)| ([\w\.]+)\b)/i                                  // Chromium OS
		            ], [[NAME, "Chrome OS"], VERSION],[

		            // Smart TVs
		            /panasonic;(viera)/i,                                               // Panasonic Viera
		            /(netrange)mmh/i,                                                   // Netrange
		            /(nettv)\/(\d+\.[\w\.]+)/i,                                         // NetTV

		            // Console
		            /(nintendo|playstation) (\w+)/i,                                    // Nintendo/Playstation
		            /(xbox); +xbox ([^\);]+)/i,                                         // Microsoft Xbox (360, One, X, S, Series X, Series S)
		            /(pico) .+os([\w\.]+)/i,                                            // Pico

		            // Other
		            /\b(joli|palm)\b ?(?:os)?\/?([\w\.]*)/i,                            // Joli/Palm
		            /(mint)[\/\(\) ]?(\w*)/i,                                           // Mint
		            /(mageia|vectorlinux)[; ]/i,                                        // Mageia/VectorLinux
		            /([kxln]?ubuntu|debian|suse|opensuse|gentoo|arch(?= linux)|slackware|fedora|mandriva|centos|pclinuxos|red ?hat|zenwalk|linpus|raspbian|plan 9|minix|risc os|contiki|deepin|manjaro|elementary os|sabayon|linspire)(?: gnu\/linux)?(?: enterprise)?(?:[- ]linux)?(?:-gnu)?[-\/ ]?(?!chrom|package)([-\w\.]*)/i,
		                                                                                // Ubuntu/Debian/SUSE/Gentoo/Arch/Slackware/Fedora/Mandriva/CentOS/PCLinuxOS/RedHat/Zenwalk/Linpus/Raspbian/Plan9/Minix/RISCOS/Contiki/Deepin/Manjaro/elementary/Sabayon/Linspire
		            /(hurd|linux)(?: arm\w*| x86\w*| ?)([\w\.]*)/i,                     // Hurd/Linux
		            /(gnu) ?([\w\.]*)/i,                                                // GNU
		            /\b([-frentopcghs]{0,5}bsd|dragonfly)[\/ ]?(?!amd|[ix346]{1,2}86)([\w\.]*)/i, // FreeBSD/NetBSD/OpenBSD/PC-BSD/GhostBSD/DragonFly
		            /(haiku) (\w+)/i                                                    // Haiku
		            ], [NAME, VERSION], [
		            /(sunos) ?([\w\.\d]*)/i                                             // Solaris
		            ], [[NAME, 'Solaris'], VERSION], [
		            /((?:open)?solaris)[-\/ ]?([\w\.]*)/i,                              // Solaris
		            /(aix) ((\d)(?=\.|\)| )[\w\.])*/i,                                  // AIX
		            /\b(beos|os\/2|amigaos|morphos|openvms|fuchsia|hp-ux|serenityos)/i, // BeOS/OS2/AmigaOS/MorphOS/OpenVMS/Fuchsia/HP-UX/SerenityOS
		            /(unix) ?([\w\.]*)/i                                                // UNIX
		            ], [NAME, VERSION]
		        ]
		    };

		    /////////////////
		    // Factories
		    ////////////////

		    var defaultProps = (function () {
		            var props = { init : {}, isIgnore : {}, isIgnoreRgx : {}, toString : {}};
		            setProps.call(props.init, [
		                [UA_BROWSER, [NAME, VERSION, MAJOR, TYPE]],
		                [UA_CPU, [ARCHITECTURE]],
		                [UA_DEVICE, [TYPE, MODEL, VENDOR]],
		                [UA_ENGINE, [NAME, VERSION]],
		                [UA_OS, [NAME, VERSION]]
		            ]);
		            setProps.call(props.isIgnore, [
		                [UA_BROWSER, [VERSION, MAJOR]],
		                [UA_ENGINE, [VERSION]],
		                [UA_OS, [VERSION]]
		            ]);
		            setProps.call(props.isIgnoreRgx, [
		                [UA_BROWSER, / ?browser$/i],
		                [UA_OS, / ?os$/i]
		            ]);
		            setProps.call(props.toString, [
		                [UA_BROWSER, [NAME, VERSION]],
		                [UA_CPU, [ARCHITECTURE]],
		                [UA_DEVICE, [VENDOR, MODEL]],
		                [UA_ENGINE, [NAME, VERSION]],
		                [UA_OS, [NAME, VERSION]]
		            ]);
		            return props;
		    })();

		    var createIData = function (item, itemType) {

		        var init_props = defaultProps.init[itemType],
		            is_ignoreProps = defaultProps.isIgnore[itemType] || 0,
		            is_ignoreRgx = defaultProps.isIgnoreRgx[itemType] || 0,
		            toString_props = defaultProps.toString[itemType] || 0;

		        function IData () {
		            setProps.call(this, init_props);
		        }

		        IData.prototype.getItem = function () {
		            return item;
		        };

		        IData.prototype.withClientHints = function () {

		            // nodejs / non-client-hints browsers
		            if (!NAVIGATOR_UADATA) {
		                return item
		                        .parseCH()
		                        .get();
		            }

		            // browsers based on chromium 85+
		            return NAVIGATOR_UADATA
		                    .getHighEntropyValues(CH_ALL_VALUES)
		                    .then(function (res) {
		                        return item
		                                .setCH(new UACHData(res, false))
		                                .parseCH()
		                                .get();
		            });
		        };

		        IData.prototype.withFeatureCheck = function () {
		            return item.detectFeature().get();
		        };

		        if (itemType != UA_RESULT) {
		            IData.prototype.is = function (strToCheck) {
		                var is = false;
		                for (var i in this) {
		                    if (this.hasOwnProperty(i) && !has(is_ignoreProps, i) && lowerize(is_ignoreRgx ? strip(is_ignoreRgx, this[i]) : this[i]) == lowerize(is_ignoreRgx ? strip(is_ignoreRgx, strToCheck) : strToCheck)) {
		                        is = true;
		                        if (strToCheck != UNDEF_TYPE) break;
		                    } else if (strToCheck == UNDEF_TYPE && is) {
		                        is = !is;
		                        break;
		                    }
		                }
		                return is;
		            };
		            IData.prototype.toString = function () {
		                var str = EMPTY;
		                for (var i in toString_props) {
		                    if (typeof(this[toString_props[i]]) !== UNDEF_TYPE) {
		                        str += (str ? ' ' : EMPTY) + this[toString_props[i]];
		                    }
		                }
		                return str || UNDEF_TYPE;
		            };
		        }

		        if (!NAVIGATOR_UADATA) {
		            IData.prototype.then = function (cb) { 
		                var that = this;
		                var IDataResolve = function () {
		                    for (var prop in that) {
		                        if (that.hasOwnProperty(prop)) {
		                            this[prop] = that[prop];
		                        }
		                    }
		                };
		                IDataResolve.prototype = {
		                    is : IData.prototype.is,
		                    toString : IData.prototype.toString
		                };
		                var resolveData = new IDataResolve();
		                cb(resolveData);
		                return resolveData;
		            };
		        }

		        return new IData();
		    };

		    /////////////////
		    // Constructor
		    ////////////////

		    function UACHData (uach, isHttpUACH) {
		        uach = uach || {};
		        setProps.call(this, CH_ALL_VALUES);
		        if (isHttpUACH) {
		            setProps.call(this, [
		                [BRANDS, itemListToArray(uach[CH_HEADER])],
		                [FULLVERLIST, itemListToArray(uach[CH_HEADER_FULL_VER_LIST])],
		                [MOBILE, /\?1/.test(uach[CH_HEADER_MOBILE])],
		                [MODEL, stripQuotes(uach[CH_HEADER_MODEL])],
		                [PLATFORM, stripQuotes(uach[CH_HEADER_PLATFORM])],
		                [PLATFORMVER, stripQuotes(uach[CH_HEADER_PLATFORM_VER])],
		                [ARCHITECTURE, stripQuotes(uach[CH_HEADER_ARCH])],
		                [FORMFACTORS, itemListToArray(uach[CH_HEADER_FORM_FACTORS])],
		                [BITNESS, stripQuotes(uach[CH_HEADER_BITNESS])]
		            ]);
		        } else {
		            for (var prop in uach) {
		                if(this.hasOwnProperty(prop) && typeof uach[prop] !== UNDEF_TYPE) this[prop] = uach[prop];
		            }
		        }
		    }

		    function UAItem (itemType, ua, rgxMap, uaCH) {

		        this.get = function (prop) {
		            if (!prop) return this.data;
		            return this.data.hasOwnProperty(prop) ? this.data[prop] : undefined$1;
		        };

		        this.set = function (prop, val) {
		            this.data[prop] = val;
		            return this;
		        };

		        this.setCH = function (ch) {
		            this.uaCH = ch;
		            return this;
		        };

		        this.detectFeature = function () {
		            if (NAVIGATOR && NAVIGATOR.userAgent == this.ua) {
		                switch (this.itemType) {
		                    case UA_BROWSER:
		                        // Brave-specific detection
		                        if (NAVIGATOR.brave && typeof NAVIGATOR.brave.isBrave == FUNC_TYPE) {
		                            this.set(NAME, 'Brave');
		                        }
		                        break;
		                    case UA_DEVICE:
		                        // Chrome-specific detection: check for 'mobile' value of navigator.userAgentData
		                        if (!this.get(TYPE) && NAVIGATOR_UADATA && NAVIGATOR_UADATA[MOBILE]) {
		                            this.set(TYPE, MOBILE);
		                        }
		                        // iPadOS-specific detection: identified as Mac, but has some iOS-only properties
		                        if (this.get(MODEL) == 'Macintosh' && NAVIGATOR && typeof NAVIGATOR.standalone !== UNDEF_TYPE && NAVIGATOR.maxTouchPoints && NAVIGATOR.maxTouchPoints > 2) {
		                            this.set(MODEL, 'iPad')
		                                .set(TYPE, TABLET);
		                        }
		                        break;
		                    case UA_OS:
		                        // Chrome-specific detection: check for 'platform' value of navigator.userAgentData
		                        if (!this.get(NAME) && NAVIGATOR_UADATA && NAVIGATOR_UADATA[PLATFORM]) {
		                            this.set(NAME, NAVIGATOR_UADATA[PLATFORM]);
		                        }
		                        break;
		                    case UA_RESULT:
		                        var data = this.data;
		                        var detect = function (itemType) {
		                            return data[itemType]
		                                    .getItem()
		                                    .detectFeature()
		                                    .get();
		                        };
		                        this.set(UA_BROWSER, detect(UA_BROWSER))
		                            .set(UA_CPU, detect(UA_CPU))
		                            .set(UA_DEVICE, detect(UA_DEVICE))
		                            .set(UA_ENGINE, detect(UA_ENGINE))
		                            .set(UA_OS, detect(UA_OS));
		                }
		            }
		            return this;
		        };

		        this.parseUA = function () {
		            if (this.itemType != UA_RESULT) {
		                rgxMapper.call(this.data, this.ua, this.rgxMap);
		            }
		            if (this.itemType == UA_BROWSER) {
		                this.set(MAJOR, majorize(this.get(VERSION)));
		            }
		            return this;
		        };

		        this.parseCH = function () {
		            var uaCH = this.uaCH,
		                rgxMap = this.rgxMap;
		    
		            switch (this.itemType) {
		                case UA_BROWSER:
		                case UA_ENGINE:
		                    var brands = uaCH[FULLVERLIST] || uaCH[BRANDS], prevName;
		                    if (brands) {
		                        for (var i in brands) {
		                            var brandName = brands[i].brand || brands[i],
		                                brandVersion = brands[i].version;
		                            if (this.itemType == UA_BROWSER && !/not.a.brand/i.test(brandName) && (!prevName || (/chrom/i.test(prevName) && brandName != CHROMIUM))) {
		                                brandName = strMapper(brandName, {
		                                    'Chrome' : 'Google Chrome',
		                                    'Edge' : 'Microsoft Edge',
		                                    'Chrome WebView' : 'Android WebView',
		                                    'Chrome Headless' : 'HeadlessChrome',
		                                    'Huawei Browser' : 'HuaweiBrowser',
		                                    'MIUI Browser' : 'Miui Browser',
		                                    'Opera Mobi' : 'OperaMobile',
		                                    'Yandex' : 'YaBrowser'
		                                });
		                                this.set(NAME, brandName)
		                                    .set(VERSION, brandVersion)
		                                    .set(MAJOR, majorize(brandVersion));
		                                prevName = brandName;
		                            }
		                            if (this.itemType == UA_ENGINE && brandName == CHROMIUM) {
		                                this.set(VERSION, brandVersion);
		                            }
		                        }
		                    }
		                    break;
		                case UA_CPU:
		                    var archName = uaCH[ARCHITECTURE];
		                    if (archName) {
		                        if (archName && uaCH[BITNESS] == '64') archName += '64';
		                        rgxMapper.call(this.data, archName + ';', rgxMap);
		                    }
		                    break;
		                case UA_DEVICE:
		                    if (uaCH[MOBILE]) {
		                        this.set(TYPE, MOBILE);
		                    }
		                    if (uaCH[MODEL]) {
		                        this.set(MODEL, uaCH[MODEL]);
		                        if (!this.get(TYPE) || !this.get(VENDOR)) {
		                            var reParse = {};
		                            rgxMapper.call(reParse, 'droid 9; ' + uaCH[MODEL] + ')', rgxMap);
		                            if (!this.get(TYPE) && !!reParse.type) {
		                                this.set(TYPE, reParse.type);
		                            }
		                            if (!this.get(VENDOR) && !!reParse.vendor) {
		                                this.set(VENDOR, reParse.vendor);
		                            }
		                        }
		                    }
		                    if (uaCH[FORMFACTORS]) {
		                        var ff;
		                        if (typeof uaCH[FORMFACTORS] !== 'string') {
		                            var idx = 0;
		                            while (!ff && idx < uaCH[FORMFACTORS].length) {
		                                ff = strMapper(uaCH[FORMFACTORS][idx++], formFactorsMap);
		                            }
		                        } else {
		                            ff = strMapper(uaCH[FORMFACTORS], formFactorsMap);
		                        }
		                        this.set(TYPE, ff);
		                    }
		                    break;
		                case UA_OS:
		                    var osName = uaCH[PLATFORM];
		                    if(osName) {
		                        var osVersion = uaCH[PLATFORMVER];
		                        if (osName == WINDOWS) osVersion = (parseInt(majorize(osVersion), 10) >= 13 ? '11' : '10');
		                        this.set(NAME, osName)
		                            .set(VERSION, osVersion);
		                    }
		                    // Xbox-Specific Detection
		                    if (this.get(NAME) == WINDOWS && uaCH[MODEL] == 'Xbox') {
		                        this.set(NAME, 'Xbox')
		                            .set(VERSION, undefined$1);
		                    }           
		                    break;
		                case UA_RESULT:
		                    var data = this.data;
		                    var parse = function (itemType) {
		                        return data[itemType]
		                                .getItem()
		                                .setCH(uaCH)
		                                .parseCH()
		                                .get();
		                    };
		                    this.set(UA_BROWSER, parse(UA_BROWSER))
		                        .set(UA_CPU, parse(UA_CPU))
		                        .set(UA_DEVICE, parse(UA_DEVICE))
		                        .set(UA_ENGINE, parse(UA_ENGINE))
		                        .set(UA_OS, parse(UA_OS));
		            }
		            return this;
		        };

		        setProps.call(this, [
		            ['itemType', itemType],
		            ['ua', ua],
		            ['uaCH', uaCH],
		            ['rgxMap', rgxMap],
		            ['data', createIData(this, itemType)]
		        ]);

		        return this;
		    }

		    function UAParser (ua, extensions, headers) {

		        if (typeof ua === OBJ_TYPE) {
		            if (isExtensions(ua, true)) {
		                if (typeof extensions === OBJ_TYPE) {
		                    headers = extensions;               // case UAParser(extensions, headers)           
		                }
		                extensions = ua;                        // case UAParser(extensions)
		            } else {
		                headers = ua;                           // case UAParser(headers)
		                extensions = undefined$1;
		            }
		            ua = undefined$1;
		        } else if (typeof ua === STR_TYPE && !isExtensions(extensions, true)) {
		            headers = extensions;                       // case UAParser(ua, headers)
		            extensions = undefined$1;
		        }

		        // Convert Headers object into a plain object
		        if (headers && typeof headers.append === FUNC_TYPE) {
		            var kv = {};
		            headers.forEach(function (v, k) { kv[k] = v; });
		            headers = kv;
		        }
		        
		        if (!(this instanceof UAParser)) {
		            return new UAParser(ua, extensions, headers).getResult();
		        }

		        var userAgent = typeof ua === STR_TYPE ? ua :                                       // Passed user-agent string
		                                (headers && headers[USER_AGENT] ? headers[USER_AGENT] :     // User-Agent from passed headers
		                                ((NAVIGATOR && NAVIGATOR.userAgent) ? NAVIGATOR.userAgent : // navigator.userAgent
		                                    EMPTY)),                                                // empty string

		            httpUACH = new UACHData(headers, true),
		            regexMap = extensions ? 
		                        extend(defaultRegexes, extensions) : 
		                        defaultRegexes,

		            createItemFunc = function (itemType) {
		                if (itemType == UA_RESULT) {
		                    return function () {
		                        return new UAItem(itemType, userAgent, regexMap, httpUACH)
		                                    .set('ua', userAgent)
		                                    .set(UA_BROWSER, this.getBrowser())
		                                    .set(UA_CPU, this.getCPU())
		                                    .set(UA_DEVICE, this.getDevice())
		                                    .set(UA_ENGINE, this.getEngine())
		                                    .set(UA_OS, this.getOS())
		                                    .get();
		                    };
		                } else {
		                    return function () {
		                        return new UAItem(itemType, userAgent, regexMap[itemType], httpUACH)
		                                    .parseUA()
		                                    .get();
		                    };
		                }
		            };
		            
		        // public methods
		        setProps.call(this, [
		            ['getBrowser', createItemFunc(UA_BROWSER)],
		            ['getCPU', createItemFunc(UA_CPU)],
		            ['getDevice', createItemFunc(UA_DEVICE)],
		            ['getEngine', createItemFunc(UA_ENGINE)],
		            ['getOS', createItemFunc(UA_OS)],
		            ['getResult', createItemFunc(UA_RESULT)],
		            ['getUA', function () { return userAgent; }],
		            ['setUA', function (ua) {
		                if (isString(ua))
		                    userAgent = ua.length > UA_MAX_LENGTH ? trim(ua, UA_MAX_LENGTH) : ua;
		                return this;
		            }]
		        ])
		        .setUA(userAgent);

		        return this;
		    }

		    UAParser.VERSION = LIBVERSION;
		    UAParser.BROWSER =  enumerize([NAME, VERSION, MAJOR, TYPE]);
		    UAParser.CPU = enumerize([ARCHITECTURE]);
		    UAParser.DEVICE = enumerize([MODEL, VENDOR, TYPE, CONSOLE, MOBILE, SMARTTV, TABLET, WEARABLE, EMBEDDED]);
		    UAParser.ENGINE = UAParser.OS = enumerize([NAME, VERSION]);

		    ///////////
		    // Export
		    //////////

		    // check js environment
		    {
		        // nodejs env
		        if (module.exports) {
		            exports = module.exports = UAParser;
		        }
		        exports.UAParser = UAParser;
		    }

		    // jQuery/Zepto specific (optional)
		    // Note:
		    //   In AMD env the global scope should be kept clean, but jQuery is an exception.
		    //   jQuery always exports to global scope, unless jQuery.noConflict(true) is used,
		    //   and we should catch that.
		    var $ = isWindow && (window.jQuery || window.Zepto);
		    if ($ && !$.ua) {
		        var parser = new UAParser();
		        $.ua = parser.getResult();
		        $.ua.get = function () {
		            return parser.getUA();
		        };
		        $.ua.set = function (ua) {
		            parser.setUA(ua);
		            var result = parser.getResult();
		            for (var prop in result) {
		                $.ua[prop] = result[prop];
		            }
		        };
		    }

		})(typeof window === 'object' ? window : uaParser); 
	} (uaParser$1, uaParser$1.exports));
	return uaParser$1.exports;
}

var uaParserExports = requireUaParser();

const irUserFormPanelCss = () => `.sc-ir-user-form-panel-h{--font-family-sans-serif:'Open Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif !important;--font-family-monospace:'Quicksand', Georgia, 'Times New Roman', Times, serif !important}.logins-history-section.sc-ir-user-form-panel{margin-top:1.5rem}.sc-ir-user-form-panel-h h4.sc-ir-user-form-panel{font-family:inherit !important}.logins-history-list.sc-ir-user-form-panel{border-radius:8px;list-style-type:none;padding:0;margin:0;margin-top:1rem}.login-entry.sc-ir-user-form-panel{padding:0.25rem 0rem;border-bottom:1px solid #e4e5ec}.login-entry.sc-ir-user-form-panel:last-child{border:none}.login-meta.sc-ir-user-form-panel{display:flex;gap:0.5rem}.login-datetime.sc-ir-user-form-panel,.login-location.sc-ir-user-form-panel{margin:0;font-size:0.75rem;color:#374151;font-weight:500}.login-user-agent.sc-ir-user-form-panel{font-size:0.75rem;color:#6b7280;margin:0;word-break:break-word}.login-user-agent.sc-ir-user-form-panel{font-size:0.75rem;color:#4b5563;margin-top:0.5rem;line-height:1.4}.login-user-agent.sc-ir-user-form-panel p.sc-ir-user-form-panel{margin:0}.ua-browser.sc-ir-user-form-panel{font-weight:600;color:#1f2937}.ua-os.sc-ir-user-form-panel{color:#374151}.ua-device.sc-ir-user-form-panel{font-style:italic;color:#6b7280}.login-location.sc-ir-user-form-panel{font-size:0.75rem;color:#4b5563;display:flex;flex-wrap:wrap;gap:0.25rem;align-items:center}.login-location.sc-ir-user-form-panel span.sc-ir-user-form-panel{display:flex;align-items:center;gap:0.25rem}.login-location.sc-ir-user-form-panel i.sc-ir-user-form-panel{font-size:0.75rem;color:#9ca3af}.ir-pe-0.sc-ir-user-form-panel{padding-inline-end:0}`;

const sheetCss = () => `.sc-ir-user-form-panel-h{height:100%}.sheet-container.sc-ir-user-form-panel{display:flex !important;flex-direction:column !important;background:white;height:100vh;gap:1rem;z-index:1000}.sheet-container.sc-ir-user-form-panel{height:-webkit-fill-available;height:100vh;height:100dvh}.sheet-footer.sc-ir-user-form-panel{position:sticky;bottom:0;z-index:20;background:white;border-top:1px solid #e4e5ec;display:flex;flex-direction:column;padding:1rem;gap:0.5rem}.sheet-header.sc-ir-user-form-panel{position:sticky;top:0;z-index:10;background:white}.sheet-body.sc-ir-user-form-panel{flex:1 1 0%}@media (min-width: 768px){.sheet-footer.sc-ir-user-form-panel{flex-direction:row;align-items:center}}`;

const IrUserFormPanel = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.resetData = index.createEvent(this, "resetData");
        this.closeSideBar = index.createEvent(this, "closeSideBar");
    }
    formId;
    user;
    userTypes = (Map);
    isEdit = false;
    language = 'en';
    property_id;
    haveAdminPrivileges;
    superAdminId = '5';
    userTypeCode;
    allowedUsersTypes = [];
    baseUserTypeCode;
    showFullHistory = false;
    userInfo = {
        type: '',
        id: -1,
        is_active: true,
        sign_ins: null,
        created_on: null,
        mobile: '',
        name: '',
        note: '',
        password: '',
        email: '',
        property_id: null,
        username: null,
        phone_prefix: null,
    };
    showPasswordValidation = false;
    isUsernameTaken;
    isOpen;
    resetData;
    closeSideBar;
    userService = new user_service.UserService();
    disableFields = false;
    isPropertyAdmin = false;
    ApiClient = new ApiClient.ApiClient();
    mobileMask = {};
    // Messages are functions so they resolve when validation runs, in the current language — not once at construction.
    userSchema = types.objectType({
        mobile: types.stringType().optional(),
        email: types.stringType({ errorMap: () => ({ message: t.t('Lcz_InvalidEmail', { fallback: 'Invalid email' }) }) })
            .email()
            .refine(async (email) => {
            if (this.user && this.user.email === email) {
                return true; // unchanged email
            }
            const exists = await new user_service.UserService().checkUserExistence({
                Email: email,
                UserName: '',
            });
            return !exists;
        }, () => ({ message: t.t('Lcz_EmailAlreadyExists', { fallback: 'Email already exists.' }) })),
        password: types.stringType()
            .nullable()
            // .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()\-_=+]).{8,16}$/)
            .refine(password => {
            if (this.user && !this.userInfo?.password) {
                return true;
            }
            return user_service.CONSTANTS.PASSWORD.test(password);
        }, () => ({ message: t.t('Lcz_PasswordMinLength', { fallback: 'Password must be at least 8 characters long.' }) })),
        type: types.unionType([types.literalType(1), types.literalType(Number(this.superAdminId?.toString() ?? '5')), types.coerce.string().nonempty().min(2)]),
        username: types.stringType()
            .min(3)
            .refine(async (name) => {
            if (this.user && this.user.username) {
                return true;
            }
            if (name.length >= 3) {
                const exists = await new user_service.UserService().checkUserExistence({
                    UserName: name,
                });
                return !exists;
            }
            return true;
        }, () => ({ message: t.t('Lcz_UsernameAlreadyExists', { fallback: 'Username already exists.' }) })),
    });
    //make user active by default
    async componentWillLoad() {
        if (!this.user) {
            this.userInfo['property_id'] = this.property_id;
            // this.showPasswordValidation = true;
        }
        if (this.user) {
            this.userInfo = { ...this.user, password: '' };
            // this.disableFields = true;
        }
        this.isPropertyAdmin = this.userTypeCode.toString() === '17';
        if (this.isPropertyAdmin) {
            this.updateUserField('type', '17');
        }
        this.mobileMask = {
            mask: `{${calendarData.calendar_data.country.phone_prefix}} 000000000000`,
            lazy: false,
            autofix: true,
            placeholderChar: '\u200B',
        };
    }
    updateUserField(key, value) {
        this.userInfo = { ...this.userInfo, [key]: value };
    }
    async createOrUpdateUser() {
        try {
            const resolvedPassword = this.user && this.userInfo.password === '' ? this.user.password : this.userInfo.password;
            const normalizedMobile = this.userInfo.mobile?.split(' ')?.join('')?.replace(calendarData.calendar_data.country.phone_prefix, '') ?? '';
            const userPayload = {
                ...this.userInfo,
                base_user_type_code: this.baseUserTypeCode,
                property_id: this.property_id,
                password: resolvedPassword,
                type: Number(this.userInfo.type),
                mobile: normalizedMobile,
            };
            console.log('toValidateUserInfo', userPayload);
            await this.userSchema.parseAsync(userPayload);
            await this.userService.handleExposedUser(userPayload);
            this.resetData.emit(null);
            this.closeSideBar.emit(null);
        }
        catch (error) {
            console.error(error);
        }
    }
    render() {
        return (index.h("form", { key: 'b5e727c5d63d28f4c48539bc40635c190fab7503', id: this.formId,
            // class="sheet-container"
            onSubmit: async (e) => {
                e.preventDefault();
                await this.createOrUpdateUser();
            } }, index.h("div", { key: '599ceb7bf362195a5a0f2785bc3c3763d07b8056', class: "d-flex flex-column", style: { gap: '1rem' } }, index.h("ir-validator", { key: 'bcbdb8855ce7dd7bc9d1e768a56cc241ca4ca0c4', asyncValidation: true, showErrorMessage: true, value: this.userInfo.email, schema: this.userSchema.shape.email }, index.h("ir-input", { key: '900ad31b3d6c46c204a186de2f8ff2f0e3ac7c93', maxlength: 40, "onText-change": e => this.updateUserField('email', e.detail), value: this.userInfo.email, label: t.t('Lcz_Email', { fallback: 'Email' }), "data-testid": "email", id: "user-email" })), index.h("ir-validator", { key: '30a739127656ffa21d6066e830e8985ed1214f47', showErrorMessage: true, value: this.userInfo.mobile, schema: this.userSchema.shape.mobile }, index.h("ir-input", { key: 'e41766330ef6e161d32c3252af8ff9041da4bb61', "onText-change": e => this.updateUserField('mobile', e.detail), value: this.userInfo.mobile, label: t.t('Lcz_Mobile', { fallback: 'Mobile' }), "data-testid": "mobile", mask: this.mobileMask })), (this.user && this.user?.type?.toString() === this.superAdminId) || this.isPropertyAdmin ? null : (index.h("ir-validator", { value: this.userInfo.type?.toString(), schema: this.userSchema.shape.type }, index.h("wa-select", { "data-testId": "user_type",
            // error={this.errors?.type && !this.userInfo.type}
            disabled: this.disableFields, label: t.t('Lcz_Role', { fallback: 'Role' }), value: this.userInfo.type?.toString(), size: "s", defaultValue: this.userInfo.type?.toString(), placeholder: t.t('Lcz_Select', { fallback: 'Select' }), onchange: e => this.updateUserField('type', e.target.value) }, this.allowedUsersTypes.map(t => (index.h("wa-option", { value: t.code }, t.value)))))), this.user?.type?.toString() !== '5' && (index.h(index.Fragment, { key: '3758a354759bda713bbafb8e6d2140760685682b' }, index.h("input", { key: '5100a479c2cbe8925a84d413a080e8302405b573', type: "text", name: "dummy", style: { display: 'none' } }), index.h("ir-validator", { key: '8e4af279b3a838a95dbbaa29a3b8a0c5b3bcc457', asyncValidation: true, schema: this.userSchema.shape.username, value: this.userInfo.username }, index.h("ir-input", { key: '9ad630df6410ae2bc274c1e6874cf89bc52f679f', "onText-change": e => this.updateUserField('username', e.detail), autocomplete: "off", maxlength: 40, value: this.userInfo.username, disabled: this.disableFields, label: t.t('Lcz_Username', { fallback: 'Username' }) })))), !this.user ? (index.h(index.Fragment, null, index.h("input", { type: "text", name: "dummy", style: { display: 'none' } }), index.h("ir-validator", { value: this.userInfo.password, schema: this.userSchema.shape.password }, index.h("ir-input", { "data-testId": "password", label: t.t('Lcz_Password', { fallback: 'Password' }), value: this.userInfo.password, autocomplete: "off", passwordToggle: true, type: "password", id: "password", maxlength: 16, onInputFocus: () => (this.showPasswordValidation = true), "onInput-blur": () => {
                // if (this.user) this.showPasswordValidation = false;
            }, "onText-change": e => this.updateUserField('password', e.detail) })), this.showPasswordValidation && index.h("ir-password-validator", { class: "mb-1", password: this.userInfo.password }))) : (
        // this.haveAdminPrivileges &&
        // this.user.type.toString() !== this.superAdminId &&
        // (this.user?.type.toString() === '17' && this.userTypeCode?.toString() === '17' ? null : (
        index.h("div", { class: "d-flex mt-2 align-items-center justify-content-between" }, index.h("h4", { class: "m-0 p-0 logins-history-title" }, t.t('Lcz_Password', { fallback: 'Password' })), index.h("ir-button", { size: "sm", btn_styles: 'ir-pe-0', onClickHandler: () => (this.isOpen = true), text: t.t('Lcz_ChangePassword', { fallback: 'Change Password' }), btn_color: "link" }))
        // ))
        )), this.user?.sign_ins?.length > 0 && (index.h("section", { key: '43558179ecb7984bf4d8707a8b4da18c388f8ec0', class: "logins-history-section mt-2" }, index.h("div", { key: '8b6757a0d75db0362c1caadccee52cac65d5a5a7', class: "d-flex align-items-center logins-history-title-container justify-content-between" }, index.h("h4", { key: '7da868d3efc81d0687f16a13a042eb74818a8896', class: "logins-history-title m-0 p-0" }, t.t('Lcz_RecentSignins', { fallback: 'Recent sign-ins' })), this.user.sign_ins.length > 5 && (index.h("ir-button", { key: 'f049599a37bfa50b2e3d157147673861907202e2', btn_styles: 'ir-pe-0', text: !this.showFullHistory ? t.t('Lcz_ViewAll', { fallback: 'View all' }) : t.t('Lcz_ViewLess', { fallback: 'View less' }), btn_color: "link", size: "sm", onClickHandler: () => (this.showFullHistory = !this.showFullHistory) }))), index.h("ul", { key: 'e004e53327174a9ec8f52c7585a444a2267bee91', class: "logins-history-list" }, this.user.sign_ins.slice(0, this.showFullHistory ? this.user.sign_ins.length : 5).map((s, i) => {
            const ua = uaParserExports.UAParser(s.user_agent);
            return (index.h("li", { class: "login-entry", key: s.date + '_' + i }, index.h("div", { class: "login-meta" }, index.h("p", { class: "login-datetime" }, irDate.formatDate(s.date, 'DD-MMM-YYYY'), " ", functions._formatTime(s.hour?.toString(), s.minute?.toString()), " |"), index.h("p", { class: "login-location" }, index.h("span", { class: "login-ip" }, t.t('Lcz_IP', { fallback: 'IP' }), ": ", s.ip), ' ', "\u00A0|\u00A0", index.h("span", { class: "login-country" }, t.t('Lcz_Location', { fallback: 'Location' }), ": ", s.country), ' ', "\u00A0|\u00A0", index.h("span", { class: "login-os" }, t.t('Lcz_OS', { fallback: 'OS' }), ": ", ua.os.name ?? t.t('Lcz_NotAvailable', { fallback: 'N/A' }), " ", ua.os.version)))));
        })))), index.h("ir-sidebar", { key: '8abf0c8113a3da6490aa5f2c50fe6b7cebefb934', open: this.isOpen, showCloseButton: false, style: {
                '--sidebar-block-padding': '0',
            }, onIrSidebarToggle: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.isOpen = false;
            } }, this.isOpen && (index.h("ir-reset-password", { key: 'eee7a4583e6329404e8319d19183c401911034ba', ticket: this.ApiClient.getToken(), skip2Fa: true, username: this.user.username, onCloseSideBar: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.isOpen = false;
            }, slot: "sidebar-body" })))));
    }
};
IrUserFormPanel.style = irUserFormPanelCss() + sheetCss();

const irUserFormPanelDrawerCss = () => `.sc-ir-user-form-panel-drawer-h{display:block}`;

const IrUserFormPanelDrawer = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.closeSideBar = index.createEvent(this, "closeSideBar");
    }
    open;
    user;
    userTypes = (Map);
    isEdit = false;
    language = 'en';
    property_id;
    haveAdminPrivileges;
    superAdminId = '5';
    userTypeCode;
    allowedUsersTypes = [];
    baseUserTypeCode;
    closeSideBar;
    render() {
        const formId = `user-form-${this.user?.id}`;
        return (index.h("ir-drawer", { key: 'eb3bfaf168a3adf6aafc2fa2b3f7f62d67d08937', onDrawerHide: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                if (!e.detail) {
                    return;
                }
                this.closeSideBar.emit(null);
            }, label: this.isEdit ? this.user.username : t.t('Lcz_CreateNewUser', { fallback: 'Create New User' }), open: this.open }, this.open && (index.h("ir-user-form-panel", { key: '5c1c044420f62986593300c45ebdd1f6e1554ec2', user: this.user, userTypes: this.userTypes, isEdit: this.isEdit, language: this.language, property_id: this.property_id, haveAdminPrivileges: this.haveAdminPrivileges, superAdminId: this.superAdminId, userTypeCode: this.userTypeCode, allowedUsersTypes: this.allowedUsersTypes, baseUserTypeCode: this.baseUserTypeCode, formId: formId })), index.h("div", { key: '0acdda36db91ed16a764aa48e5843469da092c46', slot: "footer", class: 'ir__drawer-footer' }, index.h("ir-custom-button", { key: '63d84a90cb1cf81f330d640d802018d9db5928e3', "data-testid": "cancel", onClickHandler: () => this.closeSideBar.emit(null), class: "flex-fill", appearance: "filled", variant: "neutral", size: "m" }, t.t('Lcz_Cancel', { fallback: 'Cancel' })), index.h("ir-custom-button", { key: 'f056a99e9ea86cc66f30b40291be5d773b5d2053', form: formId, loading: irInterceptor_store.isRequestPending('/Handle_Exposed_User'), "data-testid": "save", size: "m", class: "flex-fill", type: "submit", variant: "brand" }, t.t('Lcz_Save', { fallback: 'Save' })))));
    }
};
IrUserFormPanelDrawer.style = irUserFormPanelDrawerCss();

const irUserManagementCss = () => `.sc-ir-user-management-h{display:block;height:100%}`;

const IrUserManagement = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    language = '';
    baseUrl;
    ticket;
    propertyid;
    p;
    isSuperAdmin = true;
    userTypeCode;
    baseUserTypeCode;
    userId;
    currentTrigger = null;
    user = null;
    isLoading = true;
    users = [];
    property_id;
    allowedUsersTypes = [];
    ApiClient = new ApiClient.ApiClient();
    roomService = new room_service.RoomService();
    userService = new user_service.UserService();
    bookingService = new booking_service.BookingService();
    setupService = new index$2.SetupService();
    userTypes = new Map();
    unsubscribeRealtime = null;
    superAdminId = '5';
    /** Re-runs init when the language changes so server-localized data follows. */
    languageSync = new languageSync.LanguageSync(locale_controller.SCREEN_TABLES.userManagement, () => this.initializeApp());
    componentWillLoad() {
        if (this.baseUrl) {
            this.ApiClient.setBaseUrl(this.baseUrl);
        }
        if (this.ticket) {
            this.ApiClient.setApiClient(this.ticket);
            this.initializeApp();
        }
    }
    componentDidLoad() {
        this.languageSync.connect();
    }
    ticketChanged(newValue, oldValue) {
        if (newValue === oldValue) {
            return;
        }
        this.ApiClient.setApiClient(this.ticket);
        this.initializeApp();
    }
    async handleResetData(e) {
        e.stopImmediatePropagation();
        e.stopPropagation();
        await this.fetchUsers();
    }
    async initializeApp() {
        try {
            if (this.baseUrl) {
                this.ApiClient.setBaseUrl(this.baseUrl);
            }
            this.isLoading = true;
            // Started first: it seeds `LocaleController.language` from the host prop synchronously,
            // so the requests below are built with the right language on first mount.
            const localeReady = locale_controller.LocaleController.load({ language: this.language, tables: locale_controller.SCREEN_TABLES.userManagement });
            let propertyId = this.propertyid;
            if (!this.propertyid && !this.p) {
                throw new Error('Property ID or username is required');
            }
            // let roomResp = null;
            if (!propertyId) {
                console.log(propertyId);
                const propertyData = await this.roomService.getExposedProperty({
                    id: 0,
                    aname: this.p,
                    language: locale_controller.LocaleController.language,
                    is_backend: true,
                    include_units_hk_status: true,
                });
                // roomResp = propertyData;
                propertyId = propertyData.My_Result.id;
            }
            this.property_id = propertyId;
            const requests = [this.fetchUserTypes(), this.fetchUsers(), localeReady];
            if (this.propertyid) {
                requests.push(this.roomService.getExposedProperty({
                    id: this.propertyid,
                    language: locale_controller.LocaleController.language,
                    is_backend: true,
                    include_units_hk_status: true,
                }));
            }
            await Promise.all(requests);
            // initializeApp re-runs on a language switch — don't stack subscriptions.
            this.unsubscribeRealtime?.();
            this.unsubscribeRealtime = realtime_service.realtimeService.subscribe(this.property_id, async (msg) => {
                await this.handleSocketMessage(msg.reason, msg.payload);
            });
        }
        catch (error) {
            console.log(error);
        }
        finally {
            this.isLoading = false;
        }
    }
    async handleSocketMessage(reason, result) {
        const reasonHandlers = {
            EMAIL_VERIFIED: this.updateUserVerificationStatus,
        };
        const handler = reasonHandlers[reason];
        if (handler) {
            await handler.call(this, result);
        }
    }
    updateUserVerificationStatus(result) {
        const users = [...this.users];
        const idx = users.findIndex(u => u.id === result.id);
        if (idx === -1) {
            console.warn(`User ${result.id} not found`);
            return;
        }
        users[idx] = {
            ...users[idx],
            is_email_verified: true,
        };
        this.users = users;
    }
    async fetchUsers() {
        const users = await this.userService.getExposedPropertyUsers({ property_id: this.propertyid });
        this.users = [...users].sort((u1, u2) => {
            const priority = (u) => {
                const t = u.type.toString();
                if (t === this.superAdminId)
                    return 0;
                if (t === '17')
                    return 1;
                return 2;
            };
            //sort by priority
            const p1 = priority(u1), p2 = priority(u2);
            if (p1 !== p2) {
                return p1 - p2;
            }
            // //sort by user id
            // if (p1 === 1) {
            //   const id1 = u1.id.toString(),
            //     id2 = u2.id.toString(),
            //     me = this.userId.toString();
            //   if (id1 === me) return -1; // u1 is me → goes before u2
            //   if (id2 === me) return 1; // u2 is me → u1 goes after
            // }
            // 3) sort by username
            return u1.username.localeCompare(u2.username);
        });
    }
    async fetchUserTypes() {
        const res = await Promise.all([this.setupService.getSetupEntriesByTableName('_USER_TYPE'), this.bookingService.getLov()]);
        const allowedUsers = res[1]?.My_Result?.allowed_user_types;
        // Fresh collections on every run: this re-runs on a language switch, and the children only re-render on a new reference.
        const allowedUsersTypes = [];
        const userTypes = new Map();
        for (const e of res[0]) {
            const value = utils$1.getEntryValue({ entry: e, language: locale_controller.LocaleController.language });
            if (allowedUsers.find(f => f.code === e.CODE_NAME)) {
                allowedUsersTypes.push({ code: e.CODE_NAME, value });
            }
            userTypes.set(e.CODE_NAME.toString(), value);
        }
        this.allowedUsersTypes = allowedUsersTypes;
        this.userTypes = userTypes;
    }
    disconnectedCallback() {
        this.unsubscribeRealtime?.();
        this.unsubscribeRealtime = null;
        this.languageSync.disconnect();
    }
    languageChanged(next, previous) {
        this.languageSync.propChanged(next, previous);
    }
    render() {
        if (this.isLoading) {
            return (index.h(index.Host, null, index.h("ir-toast", null), index.h("ir-interceptor", null), index.h("ir-loading-screen", null)));
        }
        return (index.h(index.Host, null, index.h("ir-toast", null), index.h("ir-interceptor", { suppressToastEndpoints: ['/Change_User_Pwd', '/Handle_Exposed_User'] }), index.h("section", { class: "p-2 d-flex flex-column", style: { gap: '1rem' } }, index.h("h3", { class: "page-title" }, t.t('Lcz_ExtranetUsers', { fallback: 'Extranet Users' })), index.h("div", { class: "", style: { gap: '1rem' } }, index.h("ir-user-management-table", { property_id: this.property_id, baseUserTypeCode: this.baseUserTypeCode, allowedUsersTypes: this.allowedUsersTypes, userTypeCode: this.userTypeCode, haveAdminPrivileges: [this.superAdminId, '17'].includes(this.userTypeCode?.toString()), userTypes: this.userTypes, isSuperAdmin: this.userTypeCode?.toString() === this.superAdminId, users: this.users })))));
    }
    static get watchers() { return {
        "ticket": [{
                "ticketChanged": 0
            }],
        "language": [{
                "languageChanged": 0
            }]
    }; }
};
IrUserManagement.style = irUserManagementCss();

const irUserManagementTableCss = () => `.sc-ir-user-management-table-h{display:flex;flex-direction:column;border-radius:0.5rem;overflow-x:auto;min-height:60vh;max-width:1920px;border:1px solid var(--wa-color-neutral-border-quiet, #abaeb9);background-color:white}.sc-ir-user-management-table-h{box-sizing:border-box !important}.sc-ir-user-management-table-h *.sc-ir-user-management-table,.sc-ir-user-management-table-h *.sc-ir-user-management-table::before,.sc-ir-user-management-table-h *.sc-ir-user-management-table::after{box-sizing:inherit !important;padding:0;margin:0}[hidden].sc-ir-user-management-table{display:none !important}.badge.sc-ir-user-management-table{border:none;padding:0.2rem 0.3rem}.badge.sc-ir-user-management-table:disabled{cursor:default}.ir-text-start.sc-ir-user-management-table{text-align:start}`;

const tableCss = () => `.sc-ir-user-management-table-h{--ir-cell-padding:0.5rem 1rem}.table--container.sc-ir-user-management-table{overflow-x:auto}.table--container.sc-ir-user-management-table,.data-table.sc-ir-user-management-table{height:100%}.ir-table-row.sc-ir-user-management-table td.sc-ir-user-management-table{padding:var(--ir-cell-padding) !important;text-align:start;z-index:2;background-color:var(--wa-color-surface-default);white-space:nowrap;color:var(--wa-color-text-normal);box-sizing:border-box;transition-duration:var(--wa-transition-fast)}.table.sc-ir-user-management-table td.sc-ir-user-management-table{border-top:0;border-bottom:1px solid var(--wa-color-neutral-border-quiet, #abaeb9);transition:color 0.15s ease-in-out,     background-color 0.15s ease-in-out,     border-color 0.15s ease-in-out,     box-shadow 0.15s ease-in-out}.table.sc-ir-user-management-table tbody.sc-ir-user-management-table tr.sc-ir-user-management-table:last-child>td.sc-ir-user-management-table{border-bottom:0 !important}.cell--align-start.sc-ir-user-management-table{text-align:start !important}.cell--align-center.sc-ir-user-management-table{text-align:center !important}.cell--align-end.sc-ir-user-management-table{text-align:end !important}.table.sc-ir-user-management-table thead.sc-ir-user-management-table th.sc-ir-user-management-table{border:none !important;background:color-mix(in oklab, var(--wa-color-neutral-fill-quiet, #f1f2f3) 60%, transparent);color:var(--wa-color-neutral-on-quiet);padding:0.5rem 1rem !important;text-align:start}.data-table.sc-ir-user-management-table thead.sc-ir-user-management-table th.sc-ir-user-management-table{box-sizing:border-box;background:var(--wa-color-surface-default) !important;padding-top:0.5rem !important;padding-bottom:0.5rem !important;border-bottom:var(--wa-border-style) var(--wa-border-width-s) var(--wa-color-neutral-border-normal) !important;color:var(--wa-color-text-normal)}.empty-row.sc-ir-user-management-table{height:50vh !important;text-align:center;color:var(--wa-color-gray-60)}.sortable.sc-ir-user-management-table,.ir-table-row.sc-ir-user-management-table{transition:color 0.15s ease-in-out,     background-color 0.15s ease-in-out,     border-color 0.15s ease-in-out,     box-shadow 0.15s ease-in-out}.sortable.sc-ir-user-management-table{text-transform:capitalize;cursor:pointer}.table.sc-ir-user-management-table thead.sc-ir-user-management-table th.sortable.sc-ir-user-management-table{transition-property:background, border, box-shadow, color;transition-duration:var(--wa-transition-fast);transition-timing-function:var(--wa-transition-easing)}.table.sc-ir-user-management-table thead.sc-ir-user-management-table th.sortable.sc-ir-user-management-table:hover{color:var(--wa-color-on-quiet, var(--wa-color-neutral-on-quiet));background-color:var(--wa-color-fill-quiet, var(--wa-color-neutral-fill-quiet)) !important}.table.sc-ir-user-management-table thead.sc-ir-user-management-table th.sortable.sc-ir-user-management-table:active{color:var(--wa-color-on-quiet, var(--wa-color-neutral-on-quiet));background-color:color-mix(in oklab, var(--wa-color-fill-quiet, var(--wa-color-neutral-fill-quiet)), var(--wa-color-mix-active)) !important}.sortable.sc-ir-user-management-table:active{color:#212529;background-color:#e2e8f0;border-color:#d3d9df}.sortable.sc-ir-user-management-table svg.sc-ir-user-management-table{color:var(--wa-color-brand-fill-loud)}.ir-table-row.sc-ir-user-management-table:hover td.sc-ir-user-management-table{background:var(--wa-color-neutral-fill-quiet, #f1f2f3) !important}.--clickable.ir-table-row.sc-ir-user-management-table:hover td.sc-ir-user-management-table{background-color:var(--wa-color-fill-quiet, var(--wa-color-neutral-fill-quiet)) !important}.--clickable.ir-table-row.sc-ir-user-management-table:active td.sc-ir-user-management-table{background-color:color-mix(in oklab, var(--wa-color-fill-quiet, var(--wa-color-neutral-fill-quiet)), var(--wa-color-mix-active)) !important}.selected.sc-ir-user-management-table td.sc-ir-user-management-table{background:var(--wa-color-brand-fill-quiet) !important;border-color:var(--wa-color-neutral-border-quiet) !important;color:var(--gray-dark) !important;transition:color 0.15s ease-in-out,     background-color 0.15s ease-in-out,     border-color 0.15s ease-in-out,     box-shadow 0.15s ease-in-out}.selected.ir-table-row.sc-ir-user-management-table:hover td.sc-ir-user-management-table{background-color:color-mix(in oklab, var(--wa-color-fill-normal, var(--wa-color-brand-fill-normal)), var(--wa-color-mix-hover)) !important}.selected.ir-table-row.sc-ir-user-management-table:active td.sc-ir-user-management-table{background-color:color-mix(in oklab, var(--wa-color-fill-normal, var(--wa-color-brand-fill-normal)), var(--wa-color-mix-active)) !important}.data-table.sc-ir-user-management-table .empty-row.sc-ir-user-management-table{height:50vh !important;text-align:center;color:var(--wa-color-gray-60)}.data-table--pagination.sc-ir-user-management-table{padding:0.5rem 1rem;background:var(--wa-color-surface-default);border-top:1px solid var(--wa-color-neutral-90)}.sticky-column.sc-ir-user-management-table{position:sticky !important;inset-inline-end:0;background-color:var(--wa-color-surface-default, white)}`;

const IrUserManagementTable = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.resetData = index.createEvent(this, "resetData");
    }
    users = [];
    isSuperAdmin;
    userTypes = new Map();
    userTypeCode;
    haveAdminPrivileges;
    superAdminId = '5';
    allowedUsersTypes = [];
    baseUserTypeCode;
    property_id;
    currentTrigger = null;
    user = null;
    modalType;
    //Permissions
    canDelete;
    canEdit;
    canCreate;
    resetData;
    dialogRef;
    userService = new user_service.UserService();
    systemService = new system_service.SystemService();
    componentWillLoad() {
        this.assignPermissions();
    }
    handleChange(n, o) {
        if (n !== o) {
            this.assignPermissions();
        }
    }
    assignPermissions() {
        this.canCreate = this.haveAdminPrivileges;
        this.canDelete = this.haveAdminPrivileges;
        this.canEdit = true;
    }
    async handleUserActiveChange(e, user) {
        e.stopImmediatePropagation();
        e.stopPropagation();
        const res = await this.verifyAdminAction({ type: 'user', mode: 'update', user });
        if (res === 'cancelled') {
            return;
        }
        await this.userService.handleExposedUser({
            email: user.email,
            id: user.id,
            is_active: e.target.checked,
            mobile: user.mobile,
            password: user.password,
            type: user.type,
            username: user.username,
            base_user_type_code: this.baseUserTypeCode,
            property_id: this.property_id,
        });
        utils.showToast({
            position: 'top-right',
            title: t.t('Lcz_SavedSuccessfully', { fallback: 'Saved Successfully' }),
            description: '',
            type: 'success',
        });
    }
    async executeUserAction(e) {
        try {
            e.stopImmediatePropagation();
            e.stopPropagation();
            await this.userService.handleExposedUser({
                email: this.user.email,
                id: this.user.id,
                is_active: this.user.is_active,
                is_email_verified: this.modalType === 'verify' ? false : this.user.is_email_verified,
                mobile: this.user.mobile,
                password: this.user.password,
                type: this.user.type,
                username: this.user.username,
                is_to_remove: this.modalType === 'delete',
            });
            this.resetData.emit(null);
        }
        finally {
            this.dialogRef.closeModal();
        }
    }
    // private async sendVerificationEmail(user: User) {
    //   try {
    //     console.log(user);
    //     await this.userService.sendVerificationEmail();
    //     showToast({
    //       position: 'top-right',
    //       title: `We've sent a verification email to ${this.maskEmail(user.email)}.`,
    //       description: '',
    //       type: 'success',
    //     });
    //   } catch (error) {
    //     console.log(error);
    //   }
    // }
    openModal(user, type) {
        if (!this.dialogRef || !user) {
            return;
        }
        this.user = user;
        this.modalType = type;
        this.dialogRef.openModal();
    }
    maskEmail(email) {
        if (!email || !email.includes('@'))
            return '';
        const [localPart, domain] = email.split('@');
        const visible = localPart.slice(0, 1); // show only the first letter
        const masked = '*'.repeat(Math.max(localPart.length - 1, 1)); // mask rest
        return `${visible}${masked}@${domain}`;
    }
    async verifyAdminAction(params) {
        const res = await this.systemService.checkOTPNecessity({
            METHOD_NAME: 'Handle_Exposed_User',
        });
        if (res?.cancelled) {
            return 'cancelled';
        }
        const { mode, ...rest } = params;
        if (mode === 'edit' || mode === 'create') {
            this.currentTrigger = {
                ...rest,
                isEdit: mode === 'edit',
            };
        }
        return 'ok';
    }
    render() {
        return (index.h(index.Host, { key: 'b6b6d1f49e69124cc0a9b3d65f23b805a3130ad9' }, index.h("section", { key: 'aee74777d86ed791913ebed608263d8c156b98d5', class: "table-container h-100  w-100 m-0 table-responsive" }, index.h("table", { key: '9f6274b1cd4f8a6c6680a3cb6642b3264a17dec4', class: "table" }, index.h("thead", { key: '0b1672b15b6627470c55f61f31f4518363c8b98c' }, index.h("tr", { key: 'bdb7bc76bac9b3da2a08a09e726b6edfb7d6f611' }, index.h("th", { key: '8437a4603a111e467888f1632a42d146637c9a0d', class: "ir-text-start" }, t.t('Lcz_Username', { fallback: 'Username' })), index.h("th", { key: 'df6173f788e076e9d9f7ec028c9f81b8084c6577', class: "ir-text-start" }, t.t('Lcz_Email', { fallback: 'Email' })), index.h("th", { key: 'fee1b4a772d26f8dccc2384f33936cf80572be26', class: "ir-text-start" }, t.t('Lcz_Mobile', { fallback: 'Mobile' })), index.h("th", { key: '906d945a4c72ded58255342d3d43bcfb403cdaf6', class: "ir-text-start" }, t.t('Lcz_Role', { fallback: 'Role' })), index.h("th", { key: '65f0c4ce074a0df41a0b63dcf2181ddb53c72301', class: "ir-text-start small", style: { fontWeight: 'bold' } }, index.h("p", { key: 'f2f55e0982e94eefc413949fe8dda97ac00f6a68', class: "m-0 p-0 " }, t.t('Lcz_CreatedAt', { fallback: 'Created at' })), index.h("p", { key: '4a4fb1b08d26df1b541c99222ca41bbed2fb1fa5', class: "m-0 p-0" }, t.t('Lcz_LastSignedIn', { fallback: 'Last signed in' }))), this.haveAdminPrivileges && index.h("th", { key: '746154a17283de68b112787d719596bdbe5e4d55' }, t.t('Lcz_Active', { fallback: 'Active' })), index.h("th", { key: '41aa56824fcbd172d21353663fb93ffd09800792', class: 'action-row' }, this.canCreate && (index.h(index.Fragment, { key: '0daced586fea8196c239949b2d75ea9a75a2f504' }, index.h("ir-custom-button", { key: 'c8f82e30b9f69640788eeb5df510f5ab4b4aceb7', appearance: "plain", variant: "neutral", id: "new-user-btn", onClickHandler: () => {
                this.verifyAdminAction({
                    type: 'user',
                    mode: 'create',
                    user: null,
                });
            } }, index.h("wa-icon", { key: '8272eec4ed8e18db3aa4c83000bde8217479ac50', name: "plus", style: { fontSize: '1.2rem' } })), index.h("wa-tooltip", { key: 'a7aaf2bb96fa0c80732044f3797a1172b83fc9b2', for: "new-user-btn" }, t.t('Lcz_CreateUser', { fallback: 'Create user' }))))))), index.h("tbody", { key: '524e6a617c538b0acb27789ff0e8efb0746b9ef5' }, this.users.map(user => {
            const isUserSuperAdmin = user.type.toString() === this.superAdminId;
            const latestSignIn = user.sign_ins ? user.sign_ins[0] : null;
            const latestSignInDate = latestSignIn ? moment.hooks(latestSignIn.date, 'YYYY-MM-DD') : null;
            const isLastSignInOld = latestSignInDate ? moment.hooks().diff(latestSignInDate, 'days') > 30 : false;
            return (index.h("tr", { key: user.id, class: "ir-table-row" }, index.h("td", null, user.username), index.h("td", null, user.email, this.haveAdminPrivileges && (index.h("span", { style: { marginInlineStart: '0.5rem', color: `var(--wa-color-${user.is_email_verified ? 'success' : 'danger'}-fill-loud)` }, class: `small` }, user.is_email_verified ? t.t('Lcz_Verified', { fallback: 'Verified' }) : t.t('Lcz_NotVerified', { fallback: 'Not verified' })))), index.h("td", null, user.mobile ?? t.t('Lcz_NotAvailable', { fallback: 'N/A' })), index.h("td", null, user.type.toString() === this.superAdminId ? t.t('Lcz_SuperAdmin', { fallback: 'Super admin' }) : this.userTypes.get(user.type.toString())), index.h("td", { class: "small" }, index.h("p", { class: "m-0 p-0" }, new Date(user.created_on).getFullYear() === 1900 || !user.created_on
                ? t.t('Lcz_NotAvailable', { fallback: 'N/A' })
                : irDate.formatDate(user.created_on, 'DD-MMM-YYYY')), index.h("p", { class: `m-0 p-0`, style: { color: isLastSignInOld ? 'var(--wa-color-danger-fill-loud)' : '' } }, latestSignIn && new Date(latestSignIn.date).getFullYear() > 1900
                ? irDate.formatDate(latestSignIn.date, 'DD-MMM-YYYY') + ' ' + functions._formatTime(latestSignIn.hour.toString(), latestSignIn.minute.toString())
                : t.t('Lcz_NotAvailable', { fallback: 'N/A' }))), this.haveAdminPrivileges && (index.h("td", null, this.haveAdminPrivileges && !this.isSuperAdmin && user.type.toString() === '17'
                ? null
                : !isUserSuperAdmin && (index.h("wa-switch", { onchange: e => this.handleUserActiveChange(e, user), defaultChecked: user.is_active, checked: user.is_active })))), index.h("td", { class: 'action-row' }, (this.canEdit || this.canDelete) && ((!this.isSuperAdmin && !isUserSuperAdmin) || this.isSuperAdmin) && (index.h("div", { class: "icons-container  d-flex align-items-center" }, this.canEdit && (index.h(index.Fragment, null, index.h("ir-custom-button", { "data-testid": "edit", onClickHandler: () => {
                    this.verifyAdminAction({
                        type: 'user',
                        mode: 'edit',
                        user,
                    });
                }, appearance: "plain", variant: "neutral", id: `edit-user-${user.id}` }, index.h("wa-icon", { name: "edit", style: { fontSize: '1.2rem' } })), index.h("wa-tooltip", { for: `edit-user-${user.id}` }, t.t('Lcz_EditUser', { fallback: 'Edit user' })))), this.canDelete && !isUserSuperAdmin && (this.isSuperAdmin || user.type.toString() !== '17') && (index.h(index.Fragment, null, index.h("ir-custom-button", { onClickHandler: async () => {
                    const res = await this.verifyAdminAction({
                        type: 'user',
                        mode: 'delete',
                        user,
                    });
                    if (res === 'cancelled') {
                        return;
                    }
                    this.openModal(user, 'delete');
                }, "data-testid": "delete", variant: "danger", appearance: "plain", id: `delete-user-${user.id}` }, index.h("wa-icon", { name: "trash-can", style: { fontSize: '1.2rem' } })), index.h("wa-tooltip", { for: `delete-user-${user.id}` }, t.t('Lcz_DeleteUser', { fallback: 'Delete user' })))))))));
        })))), index.h("ir-user-form-panel-drawer", { key: 'd5c221346a8fa558350f5cd7f8895c2efb5c7e90', open: this.currentTrigger !== null && this.currentTrigger?.type !== 'delete', property_id: this.property_id, baseUserTypeCode: this.baseUserTypeCode, superAdminId: this.superAdminId, allowedUsersTypes: this.allowedUsersTypes, userTypeCode: this.userTypeCode, haveAdminPrivileges: this.haveAdminPrivileges, onCloseSideBar: () => (this.currentTrigger = null), slot: "sidebar-body", user: this.currentTrigger?.user, isEdit: this.currentTrigger?.isEdit }), index.h("ir-dialog", { key: '609d6285fbcbe2f8bb2de2e393f2b9bc348eaa01', label: t.t('Lcz_Alert', { fallback: 'Alert' }), onIrDialogAfterHide: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.user = null;
                this.modalType = null;
            }, ref: el => (this.dialogRef = el) }, index.h("span", { key: 'da928a9a39b63371328f1c13157488629c434403' }, this.modalType === 'delete'
            ? t.t('Lcz_AreYouSureDeleteUser', { params: [this.user?.username ?? ''], fallback: 'Are you sure you want to delete %1?' })
            : t.t('Lcz_AreYouSureUnverifyEmail', { params: [this.maskEmail(this.user?.email)], fallback: 'Are you sure you want to unverify %1?' })), index.h("div", { key: '08a4ecfe14114408b02aebbb3d783d2fb297a230', slot: "footer", class: "ir-dialog__footer" }, index.h("ir-custom-button", { key: '420847198b4db5f6aabe96cbf6312808bcd9ca93', "data-dialog": "close", size: "m", appearance: "filled" }, t.t('Lcz_Cancel', { fallback: 'Cancel' })), index.h("ir-custom-button", { key: 'b1861739db2d69572156c5e40b6da1f23fe41839', size: "m", loading: irInterceptor_store.isRequestPending('/Handle_Exposed_User'), appearance: "accent", variant: this.modalType === 'verify' ? 'brand' : 'danger', onClickHandler: this.executeUserAction.bind(this) }, this.modalType === 'verify' ? t.t('Lcz_Confirm', { fallback: 'Confirm' }) : t.t('Lcz_Delete', { fallback: 'Delete' }))))));
    }
    static get watchers() { return {
        "haveAdminPrivileges": [{
                "handleChange": 0
            }]
    }; }
};
IrUserManagementTable.style = irUserManagementTableCss() + tableCss();

const irValidatorCss = () => `:host{display:block;position:relative}.error-message{font-weight:var(--wa-form-control-hint-font-weight);margin-block-start:0.5em;font-size:var(--wa-font-size-smaller);line-height:var(--wa-form-control-label-line-height);color:var(--wa-color-danger-fill-loud);}`;

var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
        r = Reflect.decorate(decorators, target, key, desc);
    else
        for (var i = decorators.length - 1; i >= 0; i--)
            if (d = decorators[i])
                r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
const IrValidator = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.validationChange = index.createEvent(this, "irValidationChange");
        this.valueChange = index.createEvent(this, "irValueChange");
    }
    get el() { return index.getElement(this); }
    /** Zod schema used to validate the child control's value. */
    schema;
    value;
    asyncValidation;
    showErrorMessage;
    /** Enables automatic validation on every value change. */
    autovalidate;
    /** Optional form id. Falls back to the closest ancestor form when omitted. */
    form;
    /** Event names (space/comma separated) dispatched when the child value changes. */
    valueEvent = 'input input-change value-change select-change';
    /** Event names (space/comma separated) dispatched when the child loses focus. */
    blurEvent = 'blur input-blur select-blur';
    /** Debounce delay (ms) before running validation for autovalidated changes. */
    validationDebounce = 200;
    /** Emits whenever the validation state toggles. */
    validationChange;
    /** Emits whenever the tracked value changes. */
    valueChange;
    isValid = true;
    autoValidateActive = false;
    errorMessage = '';
    childEl;
    formEl;
    slotEl;
    currentValue;
    hasInteracted = false;
    validationTimer;
    valueEventsBound = [];
    blurEventsBound = [];
    componentWillLoad() {
        if (!this.schema) {
            throw new Error('<ir-validator> requires a `schema` prop.');
        }
        this.syncAutovalidateFlag(this.autovalidate);
    }
    componentDidLoad() {
        this.slotEl = this.el.shadowRoot?.querySelector('slot');
        this.slotEl?.addEventListener('slotchange', this.handleSlotChange);
        this.initializeChildReference();
        this.attachFormListener();
    }
    disconnectedCallback() {
        this.teardownChildListeners();
        this.detachFormListener();
        this.slotEl?.removeEventListener('slotchange', this.handleSlotChange);
        this.clearValidationTimer();
    }
    async handleSchemaChange() {
        if (this.autoValidateActive && this.hasInteracted) {
            await this.flushValidation();
        }
    }
    async handleAutoValidatePropChange(next) {
        this.syncAutovalidateFlag(next);
        if (this.autoValidateActive) {
            await this.flushValidation();
        }
    }
    handleFormPropChange() {
        this.detachFormListener();
        this.attachFormListener();
    }
    handleValueEventChange(newValue, oldValue) {
        if (newValue === oldValue)
            return;
        this.rebindChildListeners();
    }
    handleBlurEventChange(newValue, oldValue) {
        if (newValue === oldValue)
            return;
        this.rebindChildListeners();
    }
    syncAutovalidateFlag(next) {
        this.autoValidateActive = JSON.parse(String(next ?? false));
    }
    parseEvents(spec) {
        if (!spec)
            return [];
        return spec
            .split(/[\s,]+/)
            .map(ApiClient => ApiClient.trim())
            .filter(Boolean);
    }
    async handleValuePropChange(next, previous) {
        if (Object.is(next, previous))
            return;
        // keep the tracked value in sync with external changes without emitting another change event
        this.updateValue(next, { suppressValidation: true, emitChange: false });
        if (this.autoValidateActive && this.hasInteracted) {
            await this.flushValidation();
        }
    }
    handleSlotChange = () => {
        this.initializeChildReference();
    };
    initializeChildReference() {
        const child = this.pickSingleChild();
        if (child === this.childEl)
            return;
        this.teardownChildListeners();
        if (!child)
            return;
        this.childEl = child;
        this.hasInteracted = false;
        this.registerChildListeners();
        const initialValue = this.readValueFromChild();
        this.updateValue(initialValue, { suppressValidation: !this.autoValidateActive, emitChange: true });
        if (!this.autoValidateActive) {
            this.updateAriaValidity(this.isValid);
        }
    }
    pickSingleChild() {
        const slotChildren = this.slotEl?.assignedElements({ flatten: true }) ?? Array.from(this.el.children);
        const elements = slotChildren.filter(node => node.nodeType === Node.ELEMENT_NODE);
        if (elements.length === 0) {
            console.warn('<ir-validator> requires exactly one child element but found none.');
            return undefined;
        }
        if (elements.length > 1) {
            console.warn(`<ir-validator> requires exactly one child element but found ${elements.length}. Using the first.`);
        }
        return elements[0];
    }
    registerChildListeners() {
        if (!this.childEl)
            return;
        this.unbindChildListeners();
        this.valueEventsBound = this.parseEvents(this.valueEvent);
        this.blurEventsBound = this.parseEvents(this.blurEvent);
        this.valueEventsBound.forEach(eventName => this.childEl.addEventListener(eventName, this.handleValueEvent));
        this.blurEventsBound.forEach(eventName => this.childEl.addEventListener(eventName, this.handleBlurEvent));
    }
    unbindChildListeners() {
        if (!this.childEl)
            return;
        this.valueEventsBound.forEach(eventName => this.childEl.removeEventListener(eventName, this.handleValueEvent));
        this.blurEventsBound.forEach(eventName => this.childEl.removeEventListener(eventName, this.handleBlurEvent));
        this.valueEventsBound = [];
        this.blurEventsBound = [];
    }
    teardownChildListeners() {
        if (this.childEl) {
            this.unbindChildListeners();
            this.childEl = undefined;
        }
        this.clearValidationTimer();
    }
    rebindChildListeners() {
        if (!this.childEl)
            return;
        this.registerChildListeners();
    }
    handleValueEvent = (event) => {
        if (!this.childEl)
            return;
        const nextValue = this.extractEventValue(event);
        this.hasInteracted = true;
        this.updateValue(nextValue);
    };
    handleBlurEvent = async () => {
        if (!this.childEl)
            return;
        this.hasInteracted = true;
        if (this.autoValidateActive) {
            await this.flushValidation();
        }
    };
    extractEventValue(event) {
        if ('detail' in event && event['detail'] && typeof event['detail'] === 'object' && 'value' in event.detail) {
            return event.detail.value;
        }
        const target = event.target;
        if (target && 'value' in target) {
            return target.value;
        }
        return this.readValueFromChild();
    }
    readValueFromChild() {
        if (this.value !== undefined) {
            return this.value;
        }
        if (!this.childEl)
            return undefined;
        if ('value' in this.childEl) {
            return this.childEl.value;
        }
        return this.childEl.getAttribute?.('value');
    }
    updateValue(nextValue, options = {}) {
        const previous = this.currentValue;
        this.currentValue = nextValue;
        if (options.emitChange !== false && !Object.is(previous, nextValue)) {
            this.valueChange.emit({ value: this.currentValue });
        }
        if (!options.suppressValidation && this.autoValidateActive && this.hasInteracted) {
            this.scheduleValidation();
        }
    }
    async validateCurrentValue(forceDisplay = false) {
        if (!this.schema)
            return true;
        const value = this.currentValue ?? this.readValueFromChild();
        this.currentValue = value;
        let result;
        if (this.asyncValidation) {
            result = await this.schema.safeParseAsync(value);
        }
        else {
            result = this.schema.safeParse(value);
        }
        const nextValidity = result.success;
        const previousValidity = this.isValid;
        this.isValid = nextValidity;
        if (!result.success) {
            this.errorMessage = result.error.issues[0]?.message ?? '';
        }
        else {
            this.errorMessage = '';
        }
        const shouldDisplay = forceDisplay || (this.autoValidateActive && this.hasInteracted);
        if (shouldDisplay) {
            this.updateAriaValidity(nextValidity);
            if (previousValidity !== nextValidity) {
                this.emitValidationChange();
            }
        }
        return nextValidity;
    }
    updateAriaValidity(valid) {
        if (!this.childEl)
            return;
        if (valid) {
            this.childEl.removeAttribute('aria-invalid');
        }
        else {
            this.childEl.setAttribute('aria-invalid', 'true');
        }
    }
    emitValidationChange() {
        this.validationChange.emit({ valid: this.isValid, value: this.currentValue });
    }
    attachFormListener() {
        this.formEl = this.resolveFormRef();
        this.formEl?.addEventListener('submit', this.handleFormSubmit, true);
    }
    detachFormListener() {
        this.formEl?.removeEventListener('submit', this.handleFormSubmit, true);
        this.formEl = undefined;
    }
    resolveFormRef() {
        if (typeof document !== 'undefined' && this.form) {
            const provided = document.getElementById(this.form);
            if (provided && provided instanceof HTMLFormElement) {
                return provided;
            }
        }
        return this.el.closest('form');
    }
    handleFormSubmit = async () => {
        this.hasInteracted = true;
        const valid = await this.flushValidation();
        if (!valid && !this.autoValidateActive) {
            this.autoValidateActive = true;
        }
    };
    async scheduleValidation() {
        // this.clearValidationTimer();
        // const delay = Number(this.validationDebounce);
        // if (immediate || !isFinite(delay) || delay <= 0) {
        return await this.validateCurrentValue(true);
        // }
        // this.validationTimer = setTimeout(async () => {
        //   this.validationTimer = undefined;
        //   await this.validateCurrentValue(true);
        // }, delay);
        // return this.isValid;
    }
    async flushValidation() {
        return await this.scheduleValidation();
    }
    clearValidationTimer() {
        if (this.validationTimer !== undefined) {
            clearTimeout(this.validationTimer);
            this.validationTimer = undefined;
        }
    }
    render() {
        return (index.h(index.Host, { key: '5926dc1bb7457743917d0c92fd56709097a1438b' }, index.h("slot", { key: '2f8474b0adf34b7fa4765494f21c019296cb4803' }), !this.isValid && this.showErrorMessage && (index.h("span", { key: '3892f6ee8fff535437bc7d56988031a15e2a1929', part: "error-message", class: "error-message" }, this.errorMessage))));
    }
    static get watchers() { return {
        "schema": [{
                "handleSchemaChange": 0
            }],
        "autovalidate": [{
                "handleAutoValidatePropChange": 0
            }],
        "form": [{
                "handleFormPropChange": 0
            }],
        "valueEvent": [{
                "handleValueEventChange": 0
            }],
        "blurEvent": [{
                "handleBlurEventChange": 0
            }],
        "value": [{
                "handleValuePropChange": 0
            }]
    }; }
};
__decorate([
    debounce.Debounce(300)
], IrValidator.prototype, "scheduleValidation", null);
IrValidator.style = irValidatorCss();

const requirementCheckCss = () => `.sc-requirement-check-h{display:block;font-size:0.875rem}.valid.sc-requirement-check{color:var(--wa-color-success-fill-loud, #28d094)}.requirement.sc-requirement-check{display:flex;align-items:center;gap:0.5rem}`;

const RequirementCheck = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    /**
     * Whether this requirement has been satisfied (true/false).
     */
    isValid = false;
    /**
     * The requirement text to display (e.g. "At least one lowercase letter").
     */
    text = '';
    render() {
        return (index.h("div", { key: '0af6227ba763064fe0bd1b940d4593f012df1b97', class: { requirement: true, valid: this.isValid } }, index.h("ir-icons", { key: 'c706cee566c885d9dddf808a9a972acfe7511efc', style: { '--icon-size': '0.875rem' }, name: this.isValid ? 'check' : 'xmark' }), index.h("span", { key: 'debbc8cd930895b26328e491dd3f865670530f9b' }, this.text)));
    }
};
RequirementCheck.style = requirementCheckCss();

exports.ir_button = IrButton;
exports.ir_common = IrCommon;
exports.ir_custom_button = IrCustomButton;
exports.ir_dialog = IrDialog;
exports.ir_drawer = IrDrawer;
exports.ir_icon = IrIcon;
exports.ir_icons = IrIcons;
exports.ir_input = IrInput;
exports.ir_interceptor = IrInterceptor;
exports.ir_loading_screen = IrLoadingScreen;
exports.ir_otp = IrOtp;
exports.ir_otp_modal = IrOtpModal;
exports.ir_password_validator = IrPasswordValidator;
exports.ir_reset_password = IrResetPassword;
exports.ir_sidebar = IrSidebar;
exports.ir_spinner = IrSpinner;
exports.ir_title = IrTitle;
exports.ir_toast = IrToast;
exports.ir_toast_item = IrToastItem;
exports.ir_toast_provider = IrToastProvider;
exports.ir_user_form_panel = IrUserFormPanel;
exports.ir_user_form_panel_drawer = IrUserFormPanelDrawer;
exports.ir_user_management = IrUserManagement;
exports.ir_user_management_table = IrUserManagementTable;
exports.ir_validator = IrValidator;
exports.requirement_check = RequirementCheck;
