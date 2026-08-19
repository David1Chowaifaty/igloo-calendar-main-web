import { r as registerInstance, c as createEvent, d as getElement, h, H as Host, F as Fragment } from './index-Kqbk9HdW.js';
import { a as OverflowRelease, O as OverflowAdd } from './OverflowLock-D_hNs0sI.js';
import { l as libExports } from './index-DeW5X45W.js';
import { c as calendar_data, g as getDayUseBlockState, a as getBabyCotPricingModel, b as getExtraServiceDefaultPrice } from './calendar-data-MrKyEgFn.js';
import { T as Token } from './Token-CkxFIO_J.js';
import { B as BookingService } from './booking.service-CGh5oFNL.js';
import { P as PropertyService, t as taxationModes } from './index-BAOyChVe.js';
import { g as groupSvcCategoriesByParent, t as toAccChargeRule, f as findAccTax, a as getAccTaxPayloadFields } from './svc-category.utils-BUHTr2yK.js';
import { k as showToast, l as getEntryValue } from './utils-aikO_b6Z.js';
import { m as masks } from './masks-BtrHTRt_.js';
import { I as IMask } from './index-BQB1ooJC.js';
import { a as axios } from './axios-B50ozOIF.js';
import { a as interceptor_requests } from './ir-interceptor.store-P7NCUZUW.js';
import { R as RoomService } from './room.service-DpkAyTYs.js';
import { S as SystemService } from './system.service-DN8zRqj9.js';
import { l as locales } from './locales.store-C-PbJt6i.js';
import { D as Debounce } from './debounce-DF70NVXP.js';
import './index-BJS0kaeV.js';
import './booking-CGjPrFOk.js';
import './moment-Mki5YqAR.js';
import './commonSchemas-ByEkDTMV.js';
import './type-D7rOPtKA.js';
import './_commonjsHelpers-BFTU3MAI.js';

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

const appCss = () => `@layer wa-native,wa-base,wa-utilities,wa-color-palette,wa-color-variant,wa-theme,wa-theme-dimension,wa-theme-overrides; @layer wa-base{wa-page :is(*,*:after,*:before){scroll-margin-top:var(--scroll-margin-top)}wa-page[view='desktop'] [data-toggle-nav]{display:none}wa-page[view='mobile'] .wa-desktop-only,wa-page[view='desktop'] .wa-mobile-only{display:none !important}}@layer wa-native,wa-base,wa-utilities,wa-color-palette,wa-color-variant,wa-theme,wa-theme-dimension,wa-theme-overrides; @layer wa-base{wa-page :is(*,*:after,*:before){scroll-margin-top:var(--scroll-margin-top)}wa-page[view='desktop'] [data-toggle-nav]{display:none}wa-page[view='mobile'] .wa-desktop-only,wa-page[view='desktop'] .wa-mobile-only{display:none !important}}@layer wa-color-variant{:where(:root),.wa-brand-blue{--wa-color-brand-95:var(--wa-color-blue-95);--wa-color-brand-90:var(--wa-color-blue-90);--wa-color-brand-80:var(--wa-color-blue-80);--wa-color-brand-70:var(--wa-color-blue-70);--wa-color-brand-60:var(--wa-color-blue-60);--wa-color-brand-50:var(--wa-color-blue-50);--wa-color-brand-40:var(--wa-color-blue-40);--wa-color-brand-30:var(--wa-color-blue-30);--wa-color-brand-20:var(--wa-color-blue-20);--wa-color-brand-10:var(--wa-color-blue-10);--wa-color-brand-05:var(--wa-color-blue-05);--wa-color-brand:var(--wa-color-blue);--wa-color-brand-on:var(--wa-color-blue-on)}.wa-brand-red{--wa-color-brand-95:var(--wa-color-red-95);--wa-color-brand-90:var(--wa-color-red-90);--wa-color-brand-80:var(--wa-color-red-80);--wa-color-brand-70:var(--wa-color-red-70);--wa-color-brand-60:var(--wa-color-red-60);--wa-color-brand-50:var(--wa-color-red-50);--wa-color-brand-40:var(--wa-color-red-40);--wa-color-brand-30:var(--wa-color-red-30);--wa-color-brand-20:var(--wa-color-red-20);--wa-color-brand-10:var(--wa-color-red-10);--wa-color-brand-05:var(--wa-color-red-05);--wa-color-brand:var(--wa-color-red);--wa-color-brand-on:var(--wa-color-red-on)}.wa-brand-orange{--wa-color-brand-95:var(--wa-color-orange-95);--wa-color-brand-90:var(--wa-color-orange-90);--wa-color-brand-80:var(--wa-color-orange-80);--wa-color-brand-70:var(--wa-color-orange-70);--wa-color-brand-60:var(--wa-color-orange-60);--wa-color-brand-50:var(--wa-color-orange-50);--wa-color-brand-40:var(--wa-color-orange-40);--wa-color-brand-30:var(--wa-color-orange-30);--wa-color-brand-20:var(--wa-color-orange-20);--wa-color-brand-10:var(--wa-color-orange-10);--wa-color-brand-05:var(--wa-color-orange-05);--wa-color-brand:var(--wa-color-orange);--wa-color-brand-on:var(--wa-color-orange-on)}.wa-brand-yellow{--wa-color-brand-95:var(--wa-color-yellow-95);--wa-color-brand-90:var(--wa-color-yellow-90);--wa-color-brand-80:var(--wa-color-yellow-80);--wa-color-brand-70:var(--wa-color-yellow-70);--wa-color-brand-60:var(--wa-color-yellow-60);--wa-color-brand-50:var(--wa-color-yellow-50);--wa-color-brand-40:var(--wa-color-yellow-40);--wa-color-brand-30:var(--wa-color-yellow-30);--wa-color-brand-20:var(--wa-color-yellow-20);--wa-color-brand-10:var(--wa-color-yellow-10);--wa-color-brand-05:var(--wa-color-yellow-05);--wa-color-brand:var(--wa-color-yellow);--wa-color-brand-on:var(--wa-color-yellow-on)}.wa-brand-green{--wa-color-brand-95:var(--wa-color-green-95);--wa-color-brand-90:var(--wa-color-green-90);--wa-color-brand-80:var(--wa-color-green-80);--wa-color-brand-70:var(--wa-color-green-70);--wa-color-brand-60:var(--wa-color-green-60);--wa-color-brand-50:var(--wa-color-green-50);--wa-color-brand-40:var(--wa-color-green-40);--wa-color-brand-30:var(--wa-color-green-30);--wa-color-brand-20:var(--wa-color-green-20);--wa-color-brand-10:var(--wa-color-green-10);--wa-color-brand-05:var(--wa-color-green-05);--wa-color-brand:var(--wa-color-green);--wa-color-brand-on:var(--wa-color-green-on)}.wa-brand-cyan{--wa-color-brand-95:var(--wa-color-cyan-95);--wa-color-brand-90:var(--wa-color-cyan-90);--wa-color-brand-80:var(--wa-color-cyan-80);--wa-color-brand-70:var(--wa-color-cyan-70);--wa-color-brand-60:var(--wa-color-cyan-60);--wa-color-brand-50:var(--wa-color-cyan-50);--wa-color-brand-40:var(--wa-color-cyan-40);--wa-color-brand-30:var(--wa-color-cyan-30);--wa-color-brand-20:var(--wa-color-cyan-20);--wa-color-brand-10:var(--wa-color-cyan-10);--wa-color-brand-05:var(--wa-color-cyan-05);--wa-color-brand:var(--wa-color-cyan);--wa-color-brand-on:var(--wa-color-cyan-on)}.wa-brand-indigo{--wa-color-brand-95:var(--wa-color-indigo-95);--wa-color-brand-90:var(--wa-color-indigo-90);--wa-color-brand-80:var(--wa-color-indigo-80);--wa-color-brand-70:var(--wa-color-indigo-70);--wa-color-brand-60:var(--wa-color-indigo-60);--wa-color-brand-50:var(--wa-color-indigo-50);--wa-color-brand-40:var(--wa-color-indigo-40);--wa-color-brand-30:var(--wa-color-indigo-30);--wa-color-brand-20:var(--wa-color-indigo-20);--wa-color-brand-10:var(--wa-color-indigo-10);--wa-color-brand-05:var(--wa-color-indigo-05);--wa-color-brand:var(--wa-color-indigo);--wa-color-brand-on:var(--wa-color-indigo-on)}.wa-brand-purple{--wa-color-brand-95:var(--wa-color-purple-95);--wa-color-brand-90:var(--wa-color-purple-90);--wa-color-brand-80:var(--wa-color-purple-80);--wa-color-brand-70:var(--wa-color-purple-70);--wa-color-brand-60:var(--wa-color-purple-60);--wa-color-brand-50:var(--wa-color-purple-50);--wa-color-brand-40:var(--wa-color-purple-40);--wa-color-brand-30:var(--wa-color-purple-30);--wa-color-brand-20:var(--wa-color-purple-20);--wa-color-brand-10:var(--wa-color-purple-10);--wa-color-brand-05:var(--wa-color-purple-05);--wa-color-brand:var(--wa-color-purple);--wa-color-brand-on:var(--wa-color-purple-on)}.wa-brand-pink{--wa-color-brand-95:var(--wa-color-pink-95);--wa-color-brand-90:var(--wa-color-pink-90);--wa-color-brand-80:var(--wa-color-pink-80);--wa-color-brand-70:var(--wa-color-pink-70);--wa-color-brand-60:var(--wa-color-pink-60);--wa-color-brand-50:var(--wa-color-pink-50);--wa-color-brand-40:var(--wa-color-pink-40);--wa-color-brand-30:var(--wa-color-pink-30);--wa-color-brand-20:var(--wa-color-pink-20);--wa-color-brand-10:var(--wa-color-pink-10);--wa-color-brand-05:var(--wa-color-pink-05);--wa-color-brand:var(--wa-color-pink);--wa-color-brand-on:var(--wa-color-pink-on)}.wa-brand-gray{--wa-color-brand-95:var(--wa-color-gray-95);--wa-color-brand-90:var(--wa-color-gray-90);--wa-color-brand-80:var(--wa-color-gray-80);--wa-color-brand-70:var(--wa-color-gray-70);--wa-color-brand-60:var(--wa-color-gray-60);--wa-color-brand-50:var(--wa-color-gray-50);--wa-color-brand-40:var(--wa-color-gray-40);--wa-color-brand-30:var(--wa-color-gray-30);--wa-color-brand-20:var(--wa-color-gray-20);--wa-color-brand-10:var(--wa-color-gray-10);--wa-color-brand-05:var(--wa-color-gray-05);--wa-color-brand:var(--wa-color-gray);--wa-color-brand-on:var(--wa-color-gray-on)}}@layer wa-color-variant{:where(:root),.wa-neutral-gray{--wa-color-neutral-95:var(--wa-color-gray-95);--wa-color-neutral-90:var(--wa-color-gray-90);--wa-color-neutral-80:var(--wa-color-gray-80);--wa-color-neutral-70:var(--wa-color-gray-70);--wa-color-neutral-60:var(--wa-color-gray-60);--wa-color-neutral-50:var(--wa-color-gray-50);--wa-color-neutral-40:var(--wa-color-gray-40);--wa-color-neutral-30:var(--wa-color-gray-30);--wa-color-neutral-20:var(--wa-color-gray-20);--wa-color-neutral-10:var(--wa-color-gray-10);--wa-color-neutral-05:var(--wa-color-gray-05);--wa-color-neutral:var(--wa-color-gray);--wa-color-neutral-on:var(--wa-color-gray-on)}.wa-neutral-red{--wa-color-neutral-95:var(--wa-color-red-95);--wa-color-neutral-90:var(--wa-color-red-90);--wa-color-neutral-80:var(--wa-color-red-80);--wa-color-neutral-70:var(--wa-color-red-70);--wa-color-neutral-60:var(--wa-color-red-60);--wa-color-neutral-50:var(--wa-color-red-50);--wa-color-neutral-40:var(--wa-color-red-40);--wa-color-neutral-30:var(--wa-color-red-30);--wa-color-neutral-20:var(--wa-color-red-20);--wa-color-neutral-10:var(--wa-color-red-10);--wa-color-neutral-05:var(--wa-color-red-05);--wa-color-neutral:var(--wa-color-red);--wa-color-neutral-on:var(--wa-color-red-on)}.wa-neutral-orange{--wa-color-neutral-95:var(--wa-color-orange-95);--wa-color-neutral-90:var(--wa-color-orange-90);--wa-color-neutral-80:var(--wa-color-orange-80);--wa-color-neutral-70:var(--wa-color-orange-70);--wa-color-neutral-60:var(--wa-color-orange-60);--wa-color-neutral-50:var(--wa-color-orange-50);--wa-color-neutral-40:var(--wa-color-orange-40);--wa-color-neutral-30:var(--wa-color-orange-30);--wa-color-neutral-20:var(--wa-color-orange-20);--wa-color-neutral-10:var(--wa-color-orange-10);--wa-color-neutral-05:var(--wa-color-orange-05);--wa-color-neutral:var(--wa-color-orange);--wa-color-neutral-on:var(--wa-color-orange-on)}.wa-neutral-yellow{--wa-color-neutral-95:var(--wa-color-yellow-95);--wa-color-neutral-90:var(--wa-color-yellow-90);--wa-color-neutral-80:var(--wa-color-yellow-80);--wa-color-neutral-70:var(--wa-color-yellow-70);--wa-color-neutral-60:var(--wa-color-yellow-60);--wa-color-neutral-50:var(--wa-color-yellow-50);--wa-color-neutral-40:var(--wa-color-yellow-40);--wa-color-neutral-30:var(--wa-color-yellow-30);--wa-color-neutral-20:var(--wa-color-yellow-20);--wa-color-neutral-10:var(--wa-color-yellow-10);--wa-color-neutral-05:var(--wa-color-yellow-05);--wa-color-neutral:var(--wa-color-yellow);--wa-color-neutral-on:var(--wa-color-yellow-on)}.wa-neutral-green{--wa-color-neutral-95:var(--wa-color-green-95);--wa-color-neutral-90:var(--wa-color-green-90);--wa-color-neutral-80:var(--wa-color-green-80);--wa-color-neutral-70:var(--wa-color-green-70);--wa-color-neutral-60:var(--wa-color-green-60);--wa-color-neutral-50:var(--wa-color-green-50);--wa-color-neutral-40:var(--wa-color-green-40);--wa-color-neutral-30:var(--wa-color-green-30);--wa-color-neutral-20:var(--wa-color-green-20);--wa-color-neutral-10:var(--wa-color-green-10);--wa-color-neutral-05:var(--wa-color-green-05);--wa-color-neutral:var(--wa-color-green);--wa-color-neutral-on:var(--wa-color-green-on)}.wa-neutral-cyan{--wa-color-neutral-95:var(--wa-color-cyan-95);--wa-color-neutral-90:var(--wa-color-cyan-90);--wa-color-neutral-80:var(--wa-color-cyan-80);--wa-color-neutral-70:var(--wa-color-cyan-70);--wa-color-neutral-60:var(--wa-color-cyan-60);--wa-color-neutral-50:var(--wa-color-cyan-50);--wa-color-neutral-40:var(--wa-color-cyan-40);--wa-color-neutral-30:var(--wa-color-cyan-30);--wa-color-neutral-20:var(--wa-color-cyan-20);--wa-color-neutral-10:var(--wa-color-cyan-10);--wa-color-neutral-05:var(--wa-color-cyan-05);--wa-color-neutral:var(--wa-color-cyan);--wa-color-neutral-on:var(--wa-color-cyan-on)}.wa-neutral-blue{--wa-color-neutral-95:var(--wa-color-blue-95);--wa-color-neutral-90:var(--wa-color-blue-90);--wa-color-neutral-80:var(--wa-color-blue-80);--wa-color-neutral-70:var(--wa-color-blue-70);--wa-color-neutral-60:var(--wa-color-blue-60);--wa-color-neutral-50:var(--wa-color-blue-50);--wa-color-neutral-40:var(--wa-color-blue-40);--wa-color-neutral-30:var(--wa-color-blue-30);--wa-color-neutral-20:var(--wa-color-blue-20);--wa-color-neutral-10:var(--wa-color-blue-10);--wa-color-neutral-05:var(--wa-color-blue-05);--wa-color-neutral:var(--wa-color-blue);--wa-color-neutral-on:var(--wa-color-blue-on)}.wa-neutral-indigo{--wa-color-neutral-95:var(--wa-color-indigo-95);--wa-color-neutral-90:var(--wa-color-indigo-90);--wa-color-neutral-80:var(--wa-color-indigo-80);--wa-color-neutral-70:var(--wa-color-indigo-70);--wa-color-neutral-60:var(--wa-color-indigo-60);--wa-color-neutral-50:var(--wa-color-indigo-50);--wa-color-neutral-40:var(--wa-color-indigo-40);--wa-color-neutral-30:var(--wa-color-indigo-30);--wa-color-neutral-20:var(--wa-color-indigo-20);--wa-color-neutral-10:var(--wa-color-indigo-10);--wa-color-neutral-05:var(--wa-color-indigo-05);--wa-color-neutral:var(--wa-color-indigo);--wa-color-neutral-on:var(--wa-color-indigo-on)}.wa-neutral-purple{--wa-color-neutral-95:var(--wa-color-purple-95);--wa-color-neutral-90:var(--wa-color-purple-90);--wa-color-neutral-80:var(--wa-color-purple-80);--wa-color-neutral-70:var(--wa-color-purple-70);--wa-color-neutral-60:var(--wa-color-purple-60);--wa-color-neutral-50:var(--wa-color-purple-50);--wa-color-neutral-40:var(--wa-color-purple-40);--wa-color-neutral-30:var(--wa-color-purple-30);--wa-color-neutral-20:var(--wa-color-purple-20);--wa-color-neutral-10:var(--wa-color-purple-10);--wa-color-neutral-05:var(--wa-color-purple-05);--wa-color-neutral:var(--wa-color-purple);--wa-color-neutral-on:var(--wa-color-purple-on)}.wa-neutral-pink{--wa-color-neutral-95:var(--wa-color-pink-95);--wa-color-neutral-90:var(--wa-color-pink-90);--wa-color-neutral-80:var(--wa-color-pink-80);--wa-color-neutral-70:var(--wa-color-pink-70);--wa-color-neutral-60:var(--wa-color-pink-60);--wa-color-neutral-50:var(--wa-color-pink-50);--wa-color-neutral-40:var(--wa-color-pink-40);--wa-color-neutral-30:var(--wa-color-pink-30);--wa-color-neutral-20:var(--wa-color-pink-20);--wa-color-neutral-10:var(--wa-color-pink-10);--wa-color-neutral-05:var(--wa-color-pink-05);--wa-color-neutral:var(--wa-color-pink);--wa-color-neutral-on:var(--wa-color-pink-on)}}@layer wa-color-variant{:where(:root),.wa-success-green{--wa-color-success-95:var(--wa-color-green-95);--wa-color-success-90:var(--wa-color-green-90);--wa-color-success-80:var(--wa-color-green-80);--wa-color-success-70:var(--wa-color-green-70);--wa-color-success-60:var(--wa-color-green-60);--wa-color-success-50:var(--wa-color-green-50);--wa-color-success-40:var(--wa-color-green-40);--wa-color-success-30:var(--wa-color-green-30);--wa-color-success-20:var(--wa-color-green-20);--wa-color-success-10:var(--wa-color-green-10);--wa-color-success-05:var(--wa-color-green-05);--wa-color-success:var(--wa-color-green);--wa-color-success-on:var(--wa-color-green-on)}.wa-success-red{--wa-color-success-95:var(--wa-color-red-95);--wa-color-success-90:var(--wa-color-red-90);--wa-color-success-80:var(--wa-color-red-80);--wa-color-success-70:var(--wa-color-red-70);--wa-color-success-60:var(--wa-color-red-60);--wa-color-success-50:var(--wa-color-red-50);--wa-color-success-40:var(--wa-color-red-40);--wa-color-success-30:var(--wa-color-red-30);--wa-color-success-20:var(--wa-color-red-20);--wa-color-success-10:var(--wa-color-red-10);--wa-color-success-05:var(--wa-color-red-05);--wa-color-success:var(--wa-color-red);--wa-color-success-on:var(--wa-color-red-on)}.wa-success-orange{--wa-color-success-95:var(--wa-color-orange-95);--wa-color-success-90:var(--wa-color-orange-90);--wa-color-success-80:var(--wa-color-orange-80);--wa-color-success-70:var(--wa-color-orange-70);--wa-color-success-60:var(--wa-color-orange-60);--wa-color-success-50:var(--wa-color-orange-50);--wa-color-success-40:var(--wa-color-orange-40);--wa-color-success-30:var(--wa-color-orange-30);--wa-color-success-20:var(--wa-color-orange-20);--wa-color-success-10:var(--wa-color-orange-10);--wa-color-success-05:var(--wa-color-orange-05);--wa-color-success:var(--wa-color-orange);--wa-color-success-on:var(--wa-color-orange-on)}.wa-success-yellow{--wa-color-success-95:var(--wa-color-yellow-95);--wa-color-success-90:var(--wa-color-yellow-90);--wa-color-success-80:var(--wa-color-yellow-80);--wa-color-success-70:var(--wa-color-yellow-70);--wa-color-success-60:var(--wa-color-yellow-60);--wa-color-success-50:var(--wa-color-yellow-50);--wa-color-success-40:var(--wa-color-yellow-40);--wa-color-success-30:var(--wa-color-yellow-30);--wa-color-success-20:var(--wa-color-yellow-20);--wa-color-success-10:var(--wa-color-yellow-10);--wa-color-success-05:var(--wa-color-yellow-05);--wa-color-success:var(--wa-color-yellow);--wa-color-success-on:var(--wa-color-yellow-on)}.wa-success-cyan{--wa-color-success-95:var(--wa-color-cyan-95);--wa-color-success-90:var(--wa-color-cyan-90);--wa-color-success-80:var(--wa-color-cyan-80);--wa-color-success-70:var(--wa-color-cyan-70);--wa-color-success-60:var(--wa-color-cyan-60);--wa-color-success-50:var(--wa-color-cyan-50);--wa-color-success-40:var(--wa-color-cyan-40);--wa-color-success-30:var(--wa-color-cyan-30);--wa-color-success-20:var(--wa-color-cyan-20);--wa-color-success-10:var(--wa-color-cyan-10);--wa-color-success-05:var(--wa-color-cyan-05);--wa-color-success:var(--wa-color-cyan);--wa-color-success-on:var(--wa-color-cyan-on)}.wa-success-blue{--wa-color-success-95:var(--wa-color-blue-95);--wa-color-success-90:var(--wa-color-blue-90);--wa-color-success-80:var(--wa-color-blue-80);--wa-color-success-70:var(--wa-color-blue-70);--wa-color-success-60:var(--wa-color-blue-60);--wa-color-success-50:var(--wa-color-blue-50);--wa-color-success-40:var(--wa-color-blue-40);--wa-color-success-30:var(--wa-color-blue-30);--wa-color-success-20:var(--wa-color-blue-20);--wa-color-success-10:var(--wa-color-blue-10);--wa-color-success-05:var(--wa-color-blue-05);--wa-color-success:var(--wa-color-blue);--wa-color-success-on:var(--wa-color-blue-on)}.wa-success-indigo{--wa-color-success-95:var(--wa-color-indigo-95);--wa-color-success-90:var(--wa-color-indigo-90);--wa-color-success-80:var(--wa-color-indigo-80);--wa-color-success-70:var(--wa-color-indigo-70);--wa-color-success-60:var(--wa-color-indigo-60);--wa-color-success-50:var(--wa-color-indigo-50);--wa-color-success-40:var(--wa-color-indigo-40);--wa-color-success-30:var(--wa-color-indigo-30);--wa-color-success-20:var(--wa-color-indigo-20);--wa-color-success-10:var(--wa-color-indigo-10);--wa-color-success-05:var(--wa-color-indigo-05);--wa-color-success:var(--wa-color-indigo);--wa-color-success-on:var(--wa-color-indigo-on)}.wa-success-purple{--wa-color-success-95:var(--wa-color-purple-95);--wa-color-success-90:var(--wa-color-purple-90);--wa-color-success-80:var(--wa-color-purple-80);--wa-color-success-70:var(--wa-color-purple-70);--wa-color-success-60:var(--wa-color-purple-60);--wa-color-success-50:var(--wa-color-purple-50);--wa-color-success-40:var(--wa-color-purple-40);--wa-color-success-30:var(--wa-color-purple-30);--wa-color-success-20:var(--wa-color-purple-20);--wa-color-success-10:var(--wa-color-purple-10);--wa-color-success-05:var(--wa-color-purple-05);--wa-color-success:var(--wa-color-purple);--wa-color-success-on:var(--wa-color-purple-on)}.wa-success-pink{--wa-color-success-95:var(--wa-color-pink-95);--wa-color-success-90:var(--wa-color-pink-90);--wa-color-success-80:var(--wa-color-pink-80);--wa-color-success-70:var(--wa-color-pink-70);--wa-color-success-60:var(--wa-color-pink-60);--wa-color-success-50:var(--wa-color-pink-50);--wa-color-success-40:var(--wa-color-pink-40);--wa-color-success-30:var(--wa-color-pink-30);--wa-color-success-20:var(--wa-color-pink-20);--wa-color-success-10:var(--wa-color-pink-10);--wa-color-success-05:var(--wa-color-pink-05);--wa-color-success:var(--wa-color-pink);--wa-color-success-on:var(--wa-color-pink-on)}.wa-success-gray{--wa-color-success-95:var(--wa-color-gray-95);--wa-color-success-90:var(--wa-color-gray-90);--wa-color-success-80:var(--wa-color-gray-80);--wa-color-success-70:var(--wa-color-gray-70);--wa-color-success-60:var(--wa-color-gray-60);--wa-color-success-50:var(--wa-color-gray-50);--wa-color-success-40:var(--wa-color-gray-40);--wa-color-success-30:var(--wa-color-gray-30);--wa-color-success-20:var(--wa-color-gray-20);--wa-color-success-10:var(--wa-color-gray-10);--wa-color-success-05:var(--wa-color-gray-05);--wa-color-success:var(--wa-color-gray);--wa-color-success-on:var(--wa-color-gray-on)}}@layer wa-color-variant{:where(:root),.wa-warning-yellow{--wa-color-warning-95:var(--wa-color-yellow-95);--wa-color-warning-90:var(--wa-color-yellow-90);--wa-color-warning-80:var(--wa-color-yellow-80);--wa-color-warning-70:var(--wa-color-yellow-70);--wa-color-warning-60:var(--wa-color-yellow-60);--wa-color-warning-50:var(--wa-color-yellow-50);--wa-color-warning-40:var(--wa-color-yellow-40);--wa-color-warning-30:var(--wa-color-yellow-30);--wa-color-warning-20:var(--wa-color-yellow-20);--wa-color-warning-10:var(--wa-color-yellow-10);--wa-color-warning-05:var(--wa-color-yellow-05);--wa-color-warning:var(--wa-color-yellow);--wa-color-warning-on:var(--wa-color-yellow-on)}.wa-warning-red{--wa-color-warning-95:var(--wa-color-red-95);--wa-color-warning-90:var(--wa-color-red-90);--wa-color-warning-80:var(--wa-color-red-80);--wa-color-warning-70:var(--wa-color-red-70);--wa-color-warning-60:var(--wa-color-red-60);--wa-color-warning-50:var(--wa-color-red-50);--wa-color-warning-40:var(--wa-color-red-40);--wa-color-warning-30:var(--wa-color-red-30);--wa-color-warning-20:var(--wa-color-red-20);--wa-color-warning-10:var(--wa-color-red-10);--wa-color-warning-05:var(--wa-color-red-05);--wa-color-warning:var(--wa-color-red);--wa-color-warning-on:var(--wa-color-red-on)}.wa-warning-orange{--wa-color-warning-95:var(--wa-color-orange-95);--wa-color-warning-90:var(--wa-color-orange-90);--wa-color-warning-80:var(--wa-color-orange-80);--wa-color-warning-70:var(--wa-color-orange-70);--wa-color-warning-60:var(--wa-color-orange-60);--wa-color-warning-50:var(--wa-color-orange-50);--wa-color-warning-40:var(--wa-color-orange-40);--wa-color-warning-30:var(--wa-color-orange-30);--wa-color-warning-20:var(--wa-color-orange-20);--wa-color-warning-10:var(--wa-color-orange-10);--wa-color-warning-05:var(--wa-color-orange-05);--wa-color-warning:var(--wa-color-orange);--wa-color-warning-on:var(--wa-color-orange-on)}.wa-warning-green{--wa-color-warning-95:var(--wa-color-green-95);--wa-color-warning-90:var(--wa-color-green-90);--wa-color-warning-80:var(--wa-color-green-80);--wa-color-warning-70:var(--wa-color-green-70);--wa-color-warning-60:var(--wa-color-green-60);--wa-color-warning-50:var(--wa-color-green-50);--wa-color-warning-40:var(--wa-color-green-40);--wa-color-warning-30:var(--wa-color-green-30);--wa-color-warning-20:var(--wa-color-green-20);--wa-color-warning-10:var(--wa-color-green-10);--wa-color-warning-05:var(--wa-color-green-05);--wa-color-warning:var(--wa-color-green);--wa-color-warning-on:var(--wa-color-green-on)}.wa-warning-cyan{--wa-color-warning-95:var(--wa-color-cyan-95);--wa-color-warning-90:var(--wa-color-cyan-90);--wa-color-warning-80:var(--wa-color-cyan-80);--wa-color-warning-70:var(--wa-color-cyan-70);--wa-color-warning-60:var(--wa-color-cyan-60);--wa-color-warning-50:var(--wa-color-cyan-50);--wa-color-warning-40:var(--wa-color-cyan-40);--wa-color-warning-30:var(--wa-color-cyan-30);--wa-color-warning-20:var(--wa-color-cyan-20);--wa-color-warning-10:var(--wa-color-cyan-10);--wa-color-warning-05:var(--wa-color-cyan-05);--wa-color-warning:var(--wa-color-cyan);--wa-color-warning-on:var(--wa-color-cyan-on)}.wa-warning-blue{--wa-color-warning-95:var(--wa-color-blue-95);--wa-color-warning-90:var(--wa-color-blue-90);--wa-color-warning-80:var(--wa-color-blue-80);--wa-color-warning-70:var(--wa-color-blue-70);--wa-color-warning-60:var(--wa-color-blue-60);--wa-color-warning-50:var(--wa-color-blue-50);--wa-color-warning-40:var(--wa-color-blue-40);--wa-color-warning-30:var(--wa-color-blue-30);--wa-color-warning-20:var(--wa-color-blue-20);--wa-color-warning-10:var(--wa-color-blue-10);--wa-color-warning-05:var(--wa-color-blue-05);--wa-color-warning:var(--wa-color-blue);--wa-color-warning-on:var(--wa-color-blue-on)}.wa-warning-indigo{--wa-color-warning-95:var(--wa-color-indigo-95);--wa-color-warning-90:var(--wa-color-indigo-90);--wa-color-warning-80:var(--wa-color-indigo-80);--wa-color-warning-70:var(--wa-color-indigo-70);--wa-color-warning-60:var(--wa-color-indigo-60);--wa-color-warning-50:var(--wa-color-indigo-50);--wa-color-warning-40:var(--wa-color-indigo-40);--wa-color-warning-30:var(--wa-color-indigo-30);--wa-color-warning-20:var(--wa-color-indigo-20);--wa-color-warning-10:var(--wa-color-indigo-10);--wa-color-warning-05:var(--wa-color-indigo-05);--wa-color-warning:var(--wa-color-indigo);--wa-color-warning-on:var(--wa-color-indigo-on)}.wa-warning-purple{--wa-color-warning-95:var(--wa-color-purple-95);--wa-color-warning-90:var(--wa-color-purple-90);--wa-color-warning-80:var(--wa-color-purple-80);--wa-color-warning-70:var(--wa-color-purple-70);--wa-color-warning-60:var(--wa-color-purple-60);--wa-color-warning-50:var(--wa-color-purple-50);--wa-color-warning-40:var(--wa-color-purple-40);--wa-color-warning-30:var(--wa-color-purple-30);--wa-color-warning-20:var(--wa-color-purple-20);--wa-color-warning-10:var(--wa-color-purple-10);--wa-color-warning-05:var(--wa-color-purple-05);--wa-color-warning:var(--wa-color-purple);--wa-color-warning-on:var(--wa-color-purple-on)}.wa-warning-pink{--wa-color-warning-95:var(--wa-color-pink-95);--wa-color-warning-90:var(--wa-color-pink-90);--wa-color-warning-80:var(--wa-color-pink-80);--wa-color-warning-70:var(--wa-color-pink-70);--wa-color-warning-60:var(--wa-color-pink-60);--wa-color-warning-50:var(--wa-color-pink-50);--wa-color-warning-40:var(--wa-color-pink-40);--wa-color-warning-30:var(--wa-color-pink-30);--wa-color-warning-20:var(--wa-color-pink-20);--wa-color-warning-10:var(--wa-color-pink-10);--wa-color-warning-05:var(--wa-color-pink-05);--wa-color-warning:var(--wa-color-pink);--wa-color-warning-on:var(--wa-color-pink-on)}.wa-warning-gray{--wa-color-warning-95:var(--wa-color-gray-95);--wa-color-warning-90:var(--wa-color-gray-90);--wa-color-warning-80:var(--wa-color-gray-80);--wa-color-warning-70:var(--wa-color-gray-70);--wa-color-warning-60:var(--wa-color-gray-60);--wa-color-warning-50:var(--wa-color-gray-50);--wa-color-warning-40:var(--wa-color-gray-40);--wa-color-warning-30:var(--wa-color-gray-30);--wa-color-warning-20:var(--wa-color-gray-20);--wa-color-warning-10:var(--wa-color-gray-10);--wa-color-warning-05:var(--wa-color-gray-05);--wa-color-warning:var(--wa-color-gray);--wa-color-warning-on:var(--wa-color-gray-on)}}@layer wa-color-variant{:where(:root),.wa-danger-red{--wa-color-danger-95:var(--wa-color-red-95);--wa-color-danger-90:var(--wa-color-red-90);--wa-color-danger-80:var(--wa-color-red-80);--wa-color-danger-70:var(--wa-color-red-70);--wa-color-danger-60:var(--wa-color-red-60);--wa-color-danger-50:var(--wa-color-red-50);--wa-color-danger-40:var(--wa-color-red-40);--wa-color-danger-30:var(--wa-color-red-30);--wa-color-danger-20:var(--wa-color-red-20);--wa-color-danger-10:var(--wa-color-red-10);--wa-color-danger-05:var(--wa-color-red-05);--wa-color-danger:var(--wa-color-red);--wa-color-danger-on:var(--wa-color-red-on)}.wa-danger-orange{--wa-color-danger-95:var(--wa-color-orange-95);--wa-color-danger-90:var(--wa-color-orange-90);--wa-color-danger-80:var(--wa-color-orange-80);--wa-color-danger-70:var(--wa-color-orange-70);--wa-color-danger-60:var(--wa-color-orange-60);--wa-color-danger-50:var(--wa-color-orange-50);--wa-color-danger-40:var(--wa-color-orange-40);--wa-color-danger-30:var(--wa-color-orange-30);--wa-color-danger-20:var(--wa-color-orange-20);--wa-color-danger-10:var(--wa-color-orange-10);--wa-color-danger-05:var(--wa-color-orange-05);--wa-color-danger:var(--wa-color-orange);--wa-color-danger-on:var(--wa-color-orange-on)}.wa-danger-yellow{--wa-color-danger-95:var(--wa-color-yellow-95);--wa-color-danger-90:var(--wa-color-yellow-90);--wa-color-danger-80:var(--wa-color-yellow-80);--wa-color-danger-70:var(--wa-color-yellow-70);--wa-color-danger-60:var(--wa-color-yellow-60);--wa-color-danger-50:var(--wa-color-yellow-50);--wa-color-danger-40:var(--wa-color-yellow-40);--wa-color-danger-30:var(--wa-color-yellow-30);--wa-color-danger-20:var(--wa-color-yellow-20);--wa-color-danger-10:var(--wa-color-yellow-10);--wa-color-danger-05:var(--wa-color-yellow-05);--wa-color-danger:var(--wa-color-yellow);--wa-color-danger-on:var(--wa-color-yellow-on)}.wa-danger-green{--wa-color-danger-95:var(--wa-color-green-95);--wa-color-danger-90:var(--wa-color-green-90);--wa-color-danger-80:var(--wa-color-green-80);--wa-color-danger-70:var(--wa-color-green-70);--wa-color-danger-60:var(--wa-color-green-60);--wa-color-danger-50:var(--wa-color-green-50);--wa-color-danger-40:var(--wa-color-green-40);--wa-color-danger-30:var(--wa-color-green-30);--wa-color-danger-20:var(--wa-color-green-20);--wa-color-danger-10:var(--wa-color-green-10);--wa-color-danger-05:var(--wa-color-green-05);--wa-color-danger:var(--wa-color-green);--wa-color-danger-on:var(--wa-color-green-on)}.wa-danger-cyan{--wa-color-danger-95:var(--wa-color-cyan-95);--wa-color-danger-90:var(--wa-color-cyan-90);--wa-color-danger-80:var(--wa-color-cyan-80);--wa-color-danger-70:var(--wa-color-cyan-70);--wa-color-danger-60:var(--wa-color-cyan-60);--wa-color-danger-50:var(--wa-color-cyan-50);--wa-color-danger-40:var(--wa-color-cyan-40);--wa-color-danger-30:var(--wa-color-cyan-30);--wa-color-danger-20:var(--wa-color-cyan-20);--wa-color-danger-10:var(--wa-color-cyan-10);--wa-color-danger-05:var(--wa-color-cyan-05);--wa-color-danger:var(--wa-color-cyan);--wa-color-danger-on:var(--wa-color-cyan-on)}.wa-danger-blue{--wa-color-danger-95:var(--wa-color-blue-95);--wa-color-danger-90:var(--wa-color-blue-90);--wa-color-danger-80:var(--wa-color-blue-80);--wa-color-danger-70:var(--wa-color-blue-70);--wa-color-danger-60:var(--wa-color-blue-60);--wa-color-danger-50:var(--wa-color-blue-50);--wa-color-danger-40:var(--wa-color-blue-40);--wa-color-danger-30:var(--wa-color-blue-30);--wa-color-danger-20:var(--wa-color-blue-20);--wa-color-danger-10:var(--wa-color-blue-10);--wa-color-danger-05:var(--wa-color-blue-05);--wa-color-danger:var(--wa-color-blue);--wa-color-danger-on:var(--wa-color-blue-on)}.wa-danger-indigo{--wa-color-danger-95:var(--wa-color-indigo-95);--wa-color-danger-90:var(--wa-color-indigo-90);--wa-color-danger-80:var(--wa-color-indigo-80);--wa-color-danger-70:var(--wa-color-indigo-70);--wa-color-danger-60:var(--wa-color-indigo-60);--wa-color-danger-50:var(--wa-color-indigo-50);--wa-color-danger-40:var(--wa-color-indigo-40);--wa-color-danger-30:var(--wa-color-indigo-30);--wa-color-danger-20:var(--wa-color-indigo-20);--wa-color-danger-10:var(--wa-color-indigo-10);--wa-color-danger-05:var(--wa-color-indigo-05);--wa-color-danger:var(--wa-color-indigo);--wa-color-danger-on:var(--wa-color-indigo-on)}.wa-danger-purple{--wa-color-danger-95:var(--wa-color-purple-95);--wa-color-danger-90:var(--wa-color-purple-90);--wa-color-danger-80:var(--wa-color-purple-80);--wa-color-danger-70:var(--wa-color-purple-70);--wa-color-danger-60:var(--wa-color-purple-60);--wa-color-danger-50:var(--wa-color-purple-50);--wa-color-danger-40:var(--wa-color-purple-40);--wa-color-danger-30:var(--wa-color-purple-30);--wa-color-danger-20:var(--wa-color-purple-20);--wa-color-danger-10:var(--wa-color-purple-10);--wa-color-danger-05:var(--wa-color-purple-05);--wa-color-danger:var(--wa-color-purple);--wa-color-danger-on:var(--wa-color-purple-on)}.wa-danger-pink{--wa-color-danger-95:var(--wa-color-pink-95);--wa-color-danger-90:var(--wa-color-pink-90);--wa-color-danger-80:var(--wa-color-pink-80);--wa-color-danger-70:var(--wa-color-pink-70);--wa-color-danger-60:var(--wa-color-pink-60);--wa-color-danger-50:var(--wa-color-pink-50);--wa-color-danger-40:var(--wa-color-pink-40);--wa-color-danger-30:var(--wa-color-pink-30);--wa-color-danger-20:var(--wa-color-pink-20);--wa-color-danger-10:var(--wa-color-pink-10);--wa-color-danger-05:var(--wa-color-pink-05);--wa-color-danger:var(--wa-color-pink);--wa-color-danger-on:var(--wa-color-pink-on)}.wa-danger-gray{--wa-color-danger-95:var(--wa-color-gray-95);--wa-color-danger-90:var(--wa-color-gray-90);--wa-color-danger-80:var(--wa-color-gray-80);--wa-color-danger-70:var(--wa-color-gray-70);--wa-color-danger-60:var(--wa-color-gray-60);--wa-color-danger-50:var(--wa-color-gray-50);--wa-color-danger-40:var(--wa-color-gray-40);--wa-color-danger-30:var(--wa-color-gray-30);--wa-color-danger-20:var(--wa-color-gray-20);--wa-color-danger-10:var(--wa-color-gray-10);--wa-color-danger-05:var(--wa-color-gray-05);--wa-color-danger:var(--wa-color-gray);--wa-color-danger-on:var(--wa-color-gray-on)}}:where(:root),:host{--wa-color-red-gte-60:calc(100% - (clamp(0, 60 - var(--wa-color-red-key), 1) * 100%));--wa-color-orange-gte-60:calc(100% - (clamp(0, 60 - var(--wa-color-orange-key), 1) * 100%));--wa-color-yellow-gte-60:calc(100% - (clamp(0, 60 - var(--wa-color-yellow-key), 1) * 100%));--wa-color-green-gte-60:calc(100% - (clamp(0, 60 - var(--wa-color-green-key), 1) * 100%));--wa-color-cyan-gte-60:calc(100% - (clamp(0, 60 - var(--wa-color-cyan-key), 1) * 100%));--wa-color-blue-gte-60:calc(100% - (clamp(0, 60 - var(--wa-color-blue-key), 1) * 100%));--wa-color-indigo-gte-60:calc(100% - (clamp(0, 60 - var(--wa-color-indigo-key), 1) * 100%));--wa-color-purple-gte-60:calc(100% - (clamp(0, 60 - var(--wa-color-purple-key), 1) * 100%));--wa-color-pink-gte-60:calc(100% - (clamp(0, 60 - var(--wa-color-pink-key), 1) * 100%));--wa-color-gray-gte-60:calc(100% - (clamp(0, 60 - var(--wa-color-gray-key), 1) * 100%));--wa-color-red-on:color-mix(in oklab, var(--wa-color-red-10) var(--wa-color-red-gte-60), white);--wa-color-orange-on:color-mix(in oklab, var(--wa-color-orange-10) var(--wa-color-orange-gte-60), white);--wa-color-yellow-on:color-mix(in oklab, var(--wa-color-yellow-10) var(--wa-color-yellow-gte-60), white);--wa-color-green-on:color-mix(in oklab, var(--wa-color-green-10) var(--wa-color-green-gte-60), white);--wa-color-cyan-on:color-mix(in oklab, var(--wa-color-cyan-10) var(--wa-color-cyan-gte-60), white);--wa-color-blue-on:color-mix(in oklab, var(--wa-color-blue-10) var(--wa-color-blue-gte-60), white);--wa-color-indigo-on:color-mix(in oklab, var(--wa-color-indigo-10) var(--wa-color-indigo-gte-60), white);--wa-color-purple-on:color-mix(in oklab, var(--wa-color-purple-10) var(--wa-color-purple-gte-60), white);--wa-color-pink-on:color-mix(in oklab, var(--wa-color-pink-10) var(--wa-color-pink-gte-60), white);--wa-color-gray-on:color-mix(in oklab, var(--wa-color-gray-10) var(--wa-color-gray-gte-60), white)}@layer wa-color-palette{:where(:root),.wa-palette-default{--wa-color-red-95:#fff0ef ;--wa-color-red-90:#ffdedc ;--wa-color-red-80:#ffb8b6 ;--wa-color-red-70:#fd8f90 ;--wa-color-red-60:#f3676c ;--wa-color-red-50:#dc3146 ;--wa-color-red-40:#b30532 ;--wa-color-red-30:#8a132c ;--wa-color-red-20:#631323 ;--wa-color-red-10:#3e0913 ;--wa-color-red-05:#2a040b ;--wa-color-red:var(--wa-color-red-50);--wa-color-red-key:50;--wa-color-orange-95:#fff0e6 ;--wa-color-orange-90:#ffdfca ;--wa-color-orange-80:#ffbb94 ;--wa-color-orange-70:#ff9266 ;--wa-color-orange-60:#f46a45 ;--wa-color-orange-50:#cd491c ;--wa-color-orange-40:#9f3501 ;--wa-color-orange-30:#802700 ;--wa-color-orange-20:#601b00 ;--wa-color-orange-10:#3c0d00 ;--wa-color-orange-05:#280600 ;--wa-color-orange:var(--wa-color-orange-60);--wa-color-orange-key:60;--wa-color-yellow-95:#fef3cd ;--wa-color-yellow-90:#ffe495 ;--wa-color-yellow-80:#fac22b ;--wa-color-yellow-70:#ef9d00 ;--wa-color-yellow-60:#da7e00 ;--wa-color-yellow-50:#b45f04 ;--wa-color-yellow-40:#8c4602 ;--wa-color-yellow-30:#6f3601 ;--wa-color-yellow-20:#532600 ;--wa-color-yellow-10:#331600 ;--wa-color-yellow-05:#220c00 ;--wa-color-yellow:var(--wa-color-yellow-80);--wa-color-yellow-key:80;--wa-color-green-95:#e3f9e3 ;--wa-color-green-90:#c2f2c1 ;--wa-color-green-80:#93da98 ;--wa-color-green-70:#5dc36f ;--wa-color-green-60:#00ac49 ;--wa-color-green-50:#00883c ;--wa-color-green-40:#036730 ;--wa-color-green-30:#0a5027 ;--wa-color-green-20:#0a3a1d ;--wa-color-green-10:#052310 ;--wa-color-green-05:#031608 ;--wa-color-green:var(--wa-color-green-60);--wa-color-green-key:60;--wa-color-cyan-95:#e3f6fb ;--wa-color-cyan-90:#c5ecf7 ;--wa-color-cyan-80:#7fd6ec ;--wa-color-cyan-70:#2fbedc ;--wa-color-cyan-60:#00a3c0 ;--wa-color-cyan-50:#078098 ;--wa-color-cyan-40:#026274 ;--wa-color-cyan-30:#014c5b ;--wa-color-cyan-20:#003844 ;--wa-color-cyan-10:#002129 ;--wa-color-cyan-05:#00151b ;--wa-color-cyan:var(--wa-color-cyan-70);--wa-color-cyan-key:70;--wa-color-blue-95:#e8f3ff ;--wa-color-blue-90:#d1e8ff ;--wa-color-blue-80:#9fceff ;--wa-color-blue-70:#6eb3ff ;--wa-color-blue-60:#3e96ff ;--wa-color-blue-50:#0071ec ;--wa-color-blue-40:#0053c0 ;--wa-color-blue-30:#003f9c ;--wa-color-blue-20:#002d77 ;--wa-color-blue-10:#001a4e ;--wa-color-blue-05:#000f35 ;--wa-color-blue:var(--wa-color-blue-50);--wa-color-blue-key:50;--wa-color-indigo-95:#f0f2ff ;--wa-color-indigo-90:#dfe5ff ;--wa-color-indigo-80:#bcc7ff ;--wa-color-indigo-70:#9da9ff ;--wa-color-indigo-60:#808aff ;--wa-color-indigo-50:#6163f2 ;--wa-color-indigo-40:#4945cb ;--wa-color-indigo-30:#3933a7 ;--wa-color-indigo-20:#292381 ;--wa-color-indigo-10:#181255 ;--wa-color-indigo-05:#0d0a3a ;--wa-color-indigo:var(--wa-color-indigo-50);--wa-color-indigo-key:50;--wa-color-purple-95:#f7f0ff ;--wa-color-purple-90:#eedfff ;--wa-color-purple-80:#ddbdff ;--wa-color-purple-70:#ca99ff ;--wa-color-purple-60:#b678f5 ;--wa-color-purple-50:#9951db ;--wa-color-purple-40:#7936b3 ;--wa-color-purple-30:#612692 ;--wa-color-purple-20:#491870 ;--wa-color-purple-10:#2d0b48 ;--wa-color-purple-05:#1e0532 ;--wa-color-purple:var(--wa-color-purple-50);--wa-color-purple-key:50;--wa-color-pink-95:#feeff9 ;--wa-color-pink-90:#feddf0 ;--wa-color-pink-80:#fcb5d8 ;--wa-color-pink-70:#f78dbf ;--wa-color-pink-60:#e66ba3 ;--wa-color-pink-50:#c84382 ;--wa-color-pink-40:#9e2a6c ;--wa-color-pink-30:#7d1e58 ;--wa-color-pink-20:#5e1342 ;--wa-color-pink-10:#3c0828 ;--wa-color-pink-05:#28041a ;--wa-color-pink:var(--wa-color-pink-50);--wa-color-pink-key:50;--wa-color-gray-95:#f1f2f3 ;--wa-color-gray-90:#e4e5e9 ;--wa-color-gray-80:#c7c9d0 ;--wa-color-gray-70:#abaeb9 ;--wa-color-gray-60:#9194a2 ;--wa-color-gray-50:#717584 ;--wa-color-gray-40:#545868 ;--wa-color-gray-30:#424554 ;--wa-color-gray-20:#2f323f ;--wa-color-gray-10:#1b1d26 ;--wa-color-gray-05:#101219 ;--wa-color-gray:var(--wa-color-gray-40);--wa-color-gray-key:40}}@layer wa-theme{:where(:root),.wa-theme-default,.wa-light,.wa-dark .wa-invert,.wa-light .wa-theme-default,.wa-dark .wa-theme-default.wa-invert,.wa-dark .wa-theme-default .wa-invert{color-scheme:light;color:var(--wa-color-text-normal);--wa-color-surface-raised:white;--wa-color-surface-default:white;--wa-color-surface-lowered:var(--wa-color-neutral-95);--wa-color-surface-border:var(--wa-color-neutral-90);--wa-color-text-normal:var(--wa-color-neutral-10);--wa-color-text-quiet:var(--wa-color-neutral-40);--wa-color-text-link:var(--wa-color-brand-40);--wa-color-overlay-modal:color-mix(in oklab, var(--wa-color-neutral-05) 50%, transparent);--wa-color-overlay-inline:color-mix(in oklab, var(--wa-color-neutral-80) 25%, transparent);--wa-color-shadow:color-mix(       in oklab,       var(--wa-color-neutral-05) calc(var(--wa-shadow-blur-scale) * 4% + 8%),       transparent     );--wa-color-focus:var(--wa-color-brand-60);--wa-color-mix-hover:oklch(from currentColor calc(1 - l) c h) 10%;--wa-color-mix-active:var(--wa-color-surface-default) 10%;--wa-color-brand-fill-quiet:var(--wa-color-brand-95);--wa-color-brand-fill-normal:var(--wa-color-brand-90);--wa-color-brand-fill-loud:var(--wa-color-brand-50);--wa-color-brand-border-quiet:var(--wa-color-brand-90);--wa-color-brand-border-normal:var(--wa-color-brand-80);--wa-color-brand-border-loud:var(--wa-color-brand-60);--wa-color-brand-on-quiet:var(--wa-color-brand-40);--wa-color-brand-on-normal:var(--wa-color-brand-30);--wa-color-brand-on-loud:white;--wa-color-success-fill-quiet:var(--wa-color-success-95);--wa-color-success-fill-normal:var(--wa-color-success-90);--wa-color-success-fill-loud:var(--wa-color-success-50);--wa-color-success-border-quiet:var(--wa-color-success-90);--wa-color-success-border-normal:var(--wa-color-success-80);--wa-color-success-border-loud:var(--wa-color-success-60);--wa-color-success-on-quiet:var(--wa-color-success-40);--wa-color-success-on-normal:var(--wa-color-success-30);--wa-color-success-on-loud:white;--wa-color-warning-fill-quiet:var(--wa-color-warning-95);--wa-color-warning-fill-normal:var(--wa-color-warning-90);--wa-color-warning-fill-loud:var(--wa-color-warning-50);--wa-color-warning-border-quiet:var(--wa-color-warning-90);--wa-color-warning-border-normal:var(--wa-color-warning-80);--wa-color-warning-border-loud:var(--wa-color-warning-60);--wa-color-warning-on-quiet:var(--wa-color-warning-40);--wa-color-warning-on-normal:var(--wa-color-warning-30);--wa-color-warning-on-loud:white;--wa-color-danger-fill-quiet:var(--wa-color-danger-95);--wa-color-danger-fill-normal:var(--wa-color-danger-90);--wa-color-danger-fill-loud:var(--wa-color-danger-50);--wa-color-danger-border-quiet:var(--wa-color-danger-90);--wa-color-danger-border-normal:var(--wa-color-danger-80);--wa-color-danger-border-loud:var(--wa-color-danger-60);--wa-color-danger-on-quiet:var(--wa-color-danger-40);--wa-color-danger-on-normal:var(--wa-color-danger-30);--wa-color-danger-on-loud:white;--wa-color-neutral-fill-quiet:var(--wa-color-neutral-95);--wa-color-neutral-fill-normal:var(--wa-color-neutral-90);--wa-color-neutral-fill-loud:var(--wa-color-neutral-20);--wa-color-neutral-border-quiet:var(--wa-color-neutral-90);--wa-color-neutral-border-normal:var(--wa-color-neutral-80);--wa-color-neutral-border-loud:var(--wa-color-neutral-60);--wa-color-neutral-on-quiet:var(--wa-color-neutral-40);--wa-color-neutral-on-normal:var(--wa-color-neutral-30);--wa-color-neutral-on-loud:white;}.wa-dark,.wa-invert,.wa-dark .wa-theme-default,.wa-light .wa-theme-default.wa-invert,.wa-light .wa-theme-default .wa-invert{color-scheme:dark;color:var(--wa-color-text-normal);--wa-color-surface-raised:var(--wa-color-neutral-10);--wa-color-surface-default:var(--wa-color-neutral-05);--wa-color-surface-lowered:color-mix(in oklab, var(--wa-color-surface-default), black 20%);--wa-color-surface-border:var(--wa-color-neutral-20);--wa-color-text-normal:var(--wa-color-neutral-95);--wa-color-text-quiet:var(--wa-color-neutral-60);--wa-color-text-link:var(--wa-color-brand-70);--wa-color-overlay-modal:color-mix(in oklab, black 60%, transparent);--wa-color-overlay-inline:color-mix(in oklab, var(--wa-color-neutral-50) 10%, transparent);--wa-color-shadow:color-mix(       in oklab,       var(--wa-color-surface-lowered) calc(var(--wa-shadow-blur-scale) * 32% + 40%),       transparent     );--wa-color-focus:var(--wa-color-brand-60);--wa-color-mix-hover:oklch(from currentColor calc(1 - l) c h) 20%;--wa-color-mix-active:var(--wa-color-surface-default) 20%;--wa-color-brand-fill-quiet:var(--wa-color-brand-10);--wa-color-brand-fill-normal:var(--wa-color-brand-20);--wa-color-brand-fill-loud:var(--wa-color-brand-50);--wa-color-brand-border-quiet:var(--wa-color-brand-20);--wa-color-brand-border-normal:var(--wa-color-brand-30);--wa-color-brand-border-loud:var(--wa-color-brand-40);--wa-color-brand-on-quiet:var(--wa-color-brand-60);--wa-color-brand-on-normal:var(--wa-color-brand-70);--wa-color-brand-on-loud:white;--wa-color-success-fill-quiet:var(--wa-color-success-10);--wa-color-success-fill-normal:var(--wa-color-success-20);--wa-color-success-fill-loud:var(--wa-color-success-50);--wa-color-success-border-quiet:var(--wa-color-success-20);--wa-color-success-border-normal:var(--wa-color-success-30);--wa-color-success-border-loud:var(--wa-color-success-40);--wa-color-success-on-quiet:var(--wa-color-success-60);--wa-color-success-on-normal:var(--wa-color-success-70);--wa-color-success-on-loud:white;--wa-color-warning-fill-quiet:var(--wa-color-warning-10);--wa-color-warning-fill-normal:var(--wa-color-warning-20);--wa-color-warning-fill-loud:var(--wa-color-warning-50);--wa-color-warning-border-quiet:var(--wa-color-warning-20);--wa-color-warning-border-normal:var(--wa-color-warning-30);--wa-color-warning-border-loud:var(--wa-color-warning-40);--wa-color-warning-on-quiet:var(--wa-color-warning-60);--wa-color-warning-on-normal:var(--wa-color-warning-70);--wa-color-warning-on-loud:white;--wa-color-danger-fill-quiet:var(--wa-color-danger-10);--wa-color-danger-fill-normal:var(--wa-color-danger-20);--wa-color-danger-fill-loud:var(--wa-color-danger-50);--wa-color-danger-border-quiet:var(--wa-color-danger-20);--wa-color-danger-border-normal:var(--wa-color-danger-30);--wa-color-danger-border-loud:var(--wa-color-danger-40);--wa-color-danger-on-quiet:var(--wa-color-danger-60);--wa-color-danger-on-normal:var(--wa-color-danger-70);--wa-color-danger-on-loud:white;--wa-color-neutral-fill-quiet:var(--wa-color-neutral-10);--wa-color-neutral-fill-normal:var(--wa-color-neutral-20);--wa-color-neutral-fill-loud:var(--wa-color-neutral-90);--wa-color-neutral-border-quiet:var(--wa-color-neutral-20);--wa-color-neutral-border-normal:var(--wa-color-neutral-30);--wa-color-neutral-border-loud:var(--wa-color-neutral-40);--wa-color-neutral-on-quiet:var(--wa-color-neutral-60);--wa-color-neutral-on-normal:var(--wa-color-neutral-70);--wa-color-neutral-on-loud:var(--wa-color-neutral-05);}:where(:root),.wa-theme-default,.wa-light,.wa-dark,.wa-invert{font-family:var(--wa-font-family-body);--wa-font-family-body:ui-sans-serif, system-ui, sans-serif;--wa-font-family-heading:var(--wa-font-family-body);--wa-font-family-code:ui-monospace, monospace;--wa-font-family-longform:ui-serif, serif;--wa-font-size-scale:1;--wa-font-size-3xs:round(calc(var(--wa-font-size-2xs) / 1.125), 1px);--wa-font-size-2xs:round(calc(var(--wa-font-size-xs) / 1.125), 1px);--wa-font-size-xs:round(calc(var(--wa-font-size-s) / 1.125), 1px);--wa-font-size-s:round(calc(var(--wa-font-size-m) / 1.125), 1px);--wa-font-size-m:calc(1rem * var(--wa-font-size-scale));--wa-font-size-l:round(calc(var(--wa-font-size-m) * 1.125 * 1.125), 1px);--wa-font-size-xl:round(calc(var(--wa-font-size-l) * 1.125 * 1.125), 1px);--wa-font-size-2xl:round(calc(var(--wa-font-size-xl) * 1.125 * 1.125), 1px);--wa-font-size-3xl:round(calc(var(--wa-font-size-2xl) * 1.125 * 1.125), 1px);--wa-font-size-4xl:round(calc(var(--wa-font-size-3xl) * 1.125 * 1.125), 1px);--wa-font-size-5xl:round(calc(var(--wa-font-size-4xl) * 1.125 * 1.125), 1px);--wa-font-size-smaller:round(calc(1em / 1.125), 1px);--wa-font-size-larger:round(calc(1em * 1.125 * 1.125), 1px);--wa-font-weight-light:300;--wa-font-weight-normal:400;--wa-font-weight-semibold:500;--wa-font-weight-bold:600;--wa-font-weight-body:var(--wa-font-weight-normal);--wa-font-weight-heading:var(--wa-font-weight-bold);--wa-font-weight-code:var(--wa-font-weight-normal);--wa-font-weight-longform:var(--wa-font-weight-normal);--wa-font-weight-action:var(--wa-font-weight-semibold);--wa-line-height-condensed:1.2;--wa-line-height-normal:1.6;--wa-line-height-expanded:2;--wa-link-decoration-default:underline color-mix(in oklab, currentColor 70%, transparent) dotted;--wa-link-decoration-hover:underline;--wa-space-scale:1;--wa-space-3xs:calc(var(--wa-space-scale) * 0.125rem);--wa-space-2xs:calc(var(--wa-space-scale) * 0.25rem);--wa-space-xs:calc(var(--wa-space-scale) * 0.5rem);--wa-space-s:calc(var(--wa-space-scale) * 0.75rem);--wa-space-m:calc(var(--wa-space-scale) * 1rem);--wa-space-l:calc(var(--wa-space-scale) * 1.5rem);--wa-space-xl:calc(var(--wa-space-scale) * 2rem);--wa-space-2xl:calc(var(--wa-space-scale) * 2.5rem);--wa-space-3xl:calc(var(--wa-space-scale) * 3rem);--wa-space-4xl:calc(var(--wa-space-scale) * 4rem);--wa-space-5xl:calc(var(--wa-space-scale) * 5rem);--wa-content-spacing:var(--wa-space-l);--wa-border-style:solid;--wa-border-width-scale:1;--wa-border-width-s:calc(var(--wa-border-width-scale) * 0.0625rem);--wa-border-width-m:calc(var(--wa-border-width-scale) * 0.125rem);--wa-border-width-l:calc(var(--wa-border-width-scale) * 0.1875rem);--wa-border-radius-scale:1;--wa-border-radius-s:calc(var(--wa-border-radius-scale) * 0.1875rem);--wa-border-radius-m:calc(var(--wa-border-radius-scale) * 0.375rem);--wa-border-radius-l:calc(var(--wa-border-radius-scale) * 0.75rem);--wa-border-radius-pill:9999px;--wa-border-radius-circle:50%;--wa-border-radius-square:0px;--wa-focus-ring-style:solid;--wa-focus-ring-width:0.1875rem;--wa-focus-ring:var(--wa-focus-ring-style) var(--wa-focus-ring-width) var(--wa-color-focus);--wa-focus-ring-offset:0.0625rem;--wa-shadow-offset-x-scale:0;--wa-shadow-offset-x-s:calc(var(--wa-shadow-offset-x-scale) * 0.125rem);--wa-shadow-offset-x-m:calc(var(--wa-shadow-offset-x-scale) * 0.25rem);--wa-shadow-offset-x-l:calc(var(--wa-shadow-offset-x-scale) * 0.5rem);--wa-shadow-offset-y-scale:1;--wa-shadow-offset-y-s:calc(var(--wa-shadow-offset-y-scale) * 0.125rem);--wa-shadow-offset-y-m:calc(var(--wa-shadow-offset-y-scale) * 0.25rem);--wa-shadow-offset-y-l:calc(var(--wa-shadow-offset-y-scale) * 0.5rem);--wa-shadow-blur-scale:1;--wa-shadow-blur-s:calc(var(--wa-shadow-blur-scale) * 0.125rem);--wa-shadow-blur-m:calc(var(--wa-shadow-blur-scale) * 0.25rem);--wa-shadow-blur-l:calc(var(--wa-shadow-blur-scale) * 0.5rem);--wa-shadow-spread-scale:-0.5;--wa-shadow-spread-s:calc(var(--wa-shadow-spread-scale) * 0.125rem);--wa-shadow-spread-m:calc(var(--wa-shadow-spread-scale) * 0.25rem);--wa-shadow-spread-l:calc(var(--wa-shadow-spread-scale) * 0.5rem);--wa-shadow-s:var(--wa-shadow-offset-x-s) var(--wa-shadow-offset-y-s) var(--wa-shadow-blur-s)       var(--wa-shadow-spread-s) var(--wa-color-shadow);--wa-shadow-m:var(--wa-shadow-offset-x-m) var(--wa-shadow-offset-y-m) var(--wa-shadow-blur-m)       var(--wa-shadow-spread-m) var(--wa-color-shadow);--wa-shadow-l:var(--wa-shadow-offset-x-l) var(--wa-shadow-offset-y-l) var(--wa-shadow-blur-l)       var(--wa-shadow-spread-l) var(--wa-color-shadow);--wa-transition-easing:ease;--wa-transition-slow:300ms;--wa-transition-normal:150ms;--wa-transition-fast:75ms;--wa-form-control-background-color:var(--wa-color-surface-default);--wa-form-control-border-color:var(--wa-color-neutral-border-loud);--wa-form-control-border-style:var(--wa-border-style);--wa-form-control-border-width:var(--wa-border-width-s);--wa-form-control-border-radius:var(--wa-border-radius-m);--wa-form-control-activated-color:var(--wa-color-brand-fill-loud);--wa-form-control-label-color:var(--wa-color-text-normal);--wa-form-control-label-font-weight:var(--wa-font-weight-semibold);--wa-form-control-label-line-height:var(--wa-line-height-condensed);--wa-form-control-value-color:var(--wa-color-text-normal);--wa-form-control-value-font-weight:var(--wa-font-weight-body);--wa-form-control-value-line-height:var(--wa-line-height-condensed);--wa-form-control-hint-color:var(--wa-color-text-quiet);--wa-form-control-hint-font-weight:var(--wa-font-weight-body);--wa-form-control-hint-line-height:var(--wa-line-height-normal);--wa-form-control-placeholder-color:var(--wa-color-gray-50);--wa-form-control-required-content:'*';--wa-form-control-required-content-color:inherit;--wa-form-control-required-content-offset:0.1em;--wa-form-control-padding-block:0.75em;--wa-form-control-padding-inline:1em;--wa-form-control-height:round(       calc(2 * var(--wa-form-control-padding-block) + 1em * var(--wa-form-control-value-line-height)),       1px     );--wa-form-control-toggle-size:round(1.25em, 1px);--wa-button-transform-hover:none;--wa-button-transform-active:scale(0.9875);--wa-panel-border-style:var(--wa-border-style);--wa-panel-border-width:var(--wa-border-width-s);--wa-panel-border-radius:var(--wa-border-radius-l);--wa-tooltip-arrow-size:0.375rem;--wa-tooltip-background-color:var(--wa-color-text-normal);--wa-tooltip-border-color:var(--wa-tooltip-background-color);--wa-tooltip-border-style:var(--wa-border-style);--wa-tooltip-border-width:var(--wa-border-width-s);--wa-tooltip-border-radius:var(--wa-border-radius-s);--wa-tooltip-content-color:var(--wa-color-surface-default);--wa-tooltip-font-size:var(--wa-font-size-s);--wa-tooltip-line-height:var(--wa-line-height-normal);}:is(html,body):has(wa-page){min-height:100%;padding:0;margin:0}}wa-input[aria-invalid='true']::part(base),wa-textarea[aria-invalid='true']::part(base),wa-select[aria-invalid='true']::part(combobox){border-color:var(--ir-color-border-error, var(--wa-color-danger-border-loud));outline-color:var(--ir-color-border-error, var(--wa-color-danger-border-loud));border-top-width:var(--error-border-width) !important;border-left-width:var(--error-border-width) !important;border-right-width:var(--error-border-width) !important;border-bottom-width:var(--error-border-width) !important}.ir-dialog__footer{display:flex;align-items:center;gap:1rem;justify-content:flex-end;width:100%}.dialog__loader-container{display:flex;flex-direction:column;justify-content:center;align-items:center;height:100%;width:100%;min-height:50px;min-width:31rem}#dialog-overview::part(title){color:var(--wa-color-text-normal);text-align:start}.ir__drawer{text-align:left !important}.ir__drawer::part(header){border-bottom:1px solid var(--wa-color-surface-border);padding-bottom:calc(var(--spacing) / 2);color:var(--wa-color-text-normal);background-color:var(--ir-drawer-background-color, var(--wa-color-surface-default))}.ir__drawer::part(title){text-align:start}.ir__drawer::part(body){background-color:var(--ir-drawer-background-color, var(--wa-color-surface-default));padding:0;padding-left:var(--ir-drawer-padding-left, var(--spacing));padding-right:var(--ir-drawer-padding-right, var(--spacing));padding-top:var(--ir-drawer-padding-top, var(--spacing));padding-bottom:var(--ir-drawer-padding-bottom, var(--spacing))}.ir__drawer::part(footer){background-color:var(--ir-drawer-background-color, var(--wa-color-surface-default));padding-top:calc(var(--spacing) / 2);border-top:1px solid var(--wa-color-surface-border)}.ir__drawer-footer{display:flex;align-items:center;gap:1rem;width:100%}.ir__drawer-footer>*{flex:1 1 0%}.drawer__loader-container{display:flex;flex-direction:column;justify-content:center;align-items:center;height:100%;width:100%}.my-custom-style{background:#000;color:white}html:dir(rtl),body:dir(rtl){direction:rtl !important}:root{--ir-color-muted-background:#f2f3f8;--ir-color-loader:rgba(255, 255, 255, 0.2);--error-border-width:2px;--ir-color-border-error:var(--wa-color-danger-border-loud)}.wa-dark{--ir-color-loader:rgba(0, 0, 0, 0.2);--ir-color-muted-background:#12141a}body{background-color:var(--ir-color-muted-background) !important;color:var(--wa-color-text-normal)}h1,h2,h3,h4,h5,h6{color:var(--wa-color-text-normal) !important}html{font-size:14px !important}.truncate{overflow:hidden !important;text-overflow:ellipsis !important;white-space:nowrap !important}.ir-page__container{display:flex;flex-direction:column;gap:var(--wa-space-l, 1.5rem);padding:var(--wa-space-l);position:relative}.ir-price{font-family:inherit;font-size:1rem;font-weight:800;text-align:right;white-space:nowrap;color:var(--wa-color-text-normal);margin:0;padding:0}.page-title{font-family:var(--wa-font-family-heading);font-weight:var(--wa-font-weight-heading);line-height:var(--wa-line-height-condensed);text-wrap:balance;font-size:var(--wa-font-size-xl);margin:0;padding:0}:root{--wa-form-control-required-content-color:var(--wa-color-danger-border-loud, #f3676c)}.label-on-left{display:grid;gap:var(--wa-space-m)}wa-card::part(base){box-sizing:border-box}@media (min-width: 768px){.label-on-left{align-items:center;grid-template-columns:auto 1fr}.label-on-left wa-switch::part(base),.label-on-left wa-select::part(form-control),.label-on-left wa-select,.label-on-left wa-switch,.label-on-left wa-input,.label-on-left wa-textarea{grid-column:1 / -1;grid-row-end:span 2;display:grid;grid-template-columns:subgrid;gap:0 var(--wa-space-l);align-items:center}.label-on-left wa-switch::part(base){direction:rtl}.label-on-left wa-switch::part(base)>*{justify-self:flex-start;justify-content:flex-start;direction:ltr;}.label-on-left ::part(label){justify-content:flex-end}.label-on-left ::part(hint){grid-column:2}}.ir-preview-print-container{position:fixed;inset:0;opacity:0;pointer-events:none;z-index:-1}.sr-only{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip-path:inset(50%);white-space:nowrap;border-width:0}@media print{body.ir-preview-dialog-print-mode{background:#fff !important}body.ir-preview-dialog-print-mode>*:not(.ir-preview-print-container){display:none !important}body.ir-preview-dialog-print-mode .ir-preview-print-container{opacity:1;pointer-events:auto;position:static;z-index:auto;width:100%;min-height:auto;margin:0 auto;padding:1.5rem;box-sizing:border-box}}@page {margin:0.5in}.ir__field-group{display:flex;width:100%}:dir(rtl) .ir__field-group>:first-child::part(base),:dir(rtl) .ir__field-group>:first-child::part(combobox),:dir(ltr) .ir__field-group>:last-child::part(combobox),:dir(ltr) .ir__field-group>:last-child::part(base){border-top-left-radius:0;border-bottom-left-radius:0}.ir__field-group>:first-child{z-index:1}.ir__field-group .--grow{flex:1 1 0%}:dir(rtl) .ir__field-group>:last-child::part(combobox),:dir(rtl) .ir__field-group>:last-child::part(base),:dir(ltr) .ir__field-group>:first-child::part(base),:dir(ltr) .ir__field-group>:first-child::part(combobox){border-top-right-radius:0;border-bottom-right-radius:0}:dir(rtl) .ir__field-group>:last-child::part(combobox),:dir(rtl) .ir__field-group>:last-child::part(base){border-right-width:0}.ir__field-group>:not(:first-child):not(:last-child)::part(combobox),.ir__field-group>:not(:first-child):not(:last-child)::part(base){border-radius:0;border-inline-start:0}:dir(ltr) .ir__field-group>:last-child::part(combobox),:dir(ltr) .ir__field-group>:last-child::part(base){border-left-width:0}.ir__field-group>:not(:first-child):not(:last-child)[open],.ir__field-group>:not(:first-child):not(:last-child):focus-within,.ir__field-group>:not(:first-child):not(:last-child):focus-visible,.ir__field-group>:last-child[open],.ir__field-group>:last-child:focus-visible,.ir__field-group>:last-child:focus-within{z-index:2}`;

const IrCommon = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
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
        registerInstance(this, hostRef);
        this.clickHandler = createEvent(this, "clickHandler");
    }
    get el() { return getElement(this); }
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
            return (h("button", { class: "ir-button__link", onClick: e => {
                    this.clickHandler.emit(e);
                } }, h("slot", { slot: "start", name: "start" }), h("slot", null), h("slot", { slot: "end", name: "end" })));
        }
        return (h(Host, null, h("wa-button", { onClick: e => {
                this.handleButtonClick(e);
            },
            /* core button props */
            type: this.type, size: this.size, class: `ir__custom-button ${this.iconBtn ? '--icon' : ''} ${this.link ? '--link' : ''}`, disabled: this.disabled, appearance: this.link ? 'plain' : this.appearance, loading: this.loading, "with-caret": this.withCaret, variant: this.link ? 'brand' : this.variant, pill: this.pill,
            /* link-related props */
            href: this.href, target: this.target, rel: this.rel, download: this.download,
            /* form-related props */
            name: this.name, value: this.value, form: this.form, "form-action": this.formAction, "form-enctype": this.formEnctype, "form-method": this.formMethod, "form-no-validate": this.formNoValidate, "form-target": this.formTarget, exportparts: "base, start, label, end, caret, spinner" }, h("slot", { slot: "start", name: "start" }), h("slot", null), h("slot", { slot: "end", name: "end" }))));
    }
};
IrCustomButton.style = irCustomButtonCss();

const irDialogCss = () => `.ir-dialog__footer{display:flex;align-items:center;gap:1rem;justify-content:flex-end;width:100%}.dialog__loader-container{display:flex;flex-direction:column;justify-content:center;align-items:center;height:100%;width:100%;min-height:50px;min-width:31rem}#dialog-overview::part(title){color:var(--wa-color-text-normal);text-align:start}`;

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
const IrDialog = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.irDialogShow = createEvent(this, "irDialogShow");
        this.irDialogHide = createEvent(this, "irDialogHide");
        this.irDialogAfterShow = createEvent(this, "irDialogAfterShow");
        this.irDialogAfterHide = createEvent(this, "irDialogAfterHide");
    }
    get el() { return getElement(this); }
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
        return (h("wa-dialog", { key: 'c1c30c0aef0959d0e73ef7cd51317998303019aa', "onwa-hide": this.handleWaHide.bind(this), "onwa-show": this.handleWaShow.bind(this), "onwa-after-hide": this.handleWaAfterHide.bind(this), "onwa-after-show": this.handleWaAfterShow.bind(this), label: this.label, id: "dialog-overview", open: this.open, style: { '--width': 'var(--ir-dialog-width,31rem)' }, "without-header": this.withoutHeader, lightDismiss: this.lightDismiss, exportparts: "dialog, header, header-actions, title, close-button, close-button__base, body, footer" }, this.slotState.get('header-actions') && h("slot", { key: '3e25ebce6030493f8bb11a8e31cd7232cf6efab8', name: "header-actions", slot: "header-actions" }), this.slotState.get('label') && h("slot", { key: '78c3389bfb6e5b77a6e496ce3451e2351f8ba872', name: "label", slot: "label" }), h("slot", { key: '44b63102b0e01d2edcd9598c82e570e833408f46' }), this.slotState.get('footer') && h("slot", { key: 'd9c33559a88fb3de6fef6c709334c6ba2446f982', name: "footer", slot: "footer" })));
    }
};
__decorate$1([
    OverflowRelease()
], IrDialog.prototype, "handleWaHide", null);
__decorate$1([
    OverflowAdd()
], IrDialog.prototype, "handleWaShow", null);
IrDialog.style = irDialogCss();

const irEmptyStateCss = () => `:host{box-sizing:border-box !important}:host *,:host *::before,:host *::after{box-sizing:inherit !important;padding:0;margin:0}[hidden]{display:none !important}:host{display:flex;flex-direction:column;gap:var(--wa-space-m);align-items:center}::slotted([slot='icon']){font-size:2rem}.icon_container{display:flex;align-items:center;justify-content:center;width:3.5rem;height:3.5rem;border-radius:0.875rem;background:var(--wa-color-brand-fill-quiet, #eff6ff);color:var(--wa-color-brand-fill-loud, #2563eb);font-size:1.5rem;margin-bottom:0.5rem}.message{margin:0;font-size:1rem;font-weight:600;color:var(--wa-color-text-normal, #111827)}.message.--secondary{font-weight:400;color:var(--wa-color-neutral-400, #a1a1aa)}`;

const IrEmptyState = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    message = 'No records found';
    showIcon = true;
    render() {
        return (h(Host, { key: '54f4ba58bec90bb5e844d760eae59639447293d5' }, h("slot", { key: '5b25eb13fe9128bc61ec4703c64e168a1f38816e', name: "icon" }, this.showIcon && (h("div", { key: '44a7a6ac6bcdf90e8586dfa3ad741833fc6d3c27', class: 'icon_container' }, h("wa-icon", { key: 'ba396b6a7b157513fe81f4c9de8c1fbf02d7ad9d', name: "ban", style: { transform: 'rotate(90deg)' } })))), h("p", { key: '9f035bcea810a302294f831ae47748ff25d7756a', part: "message", class: `message ${this.showIcon ? '' : '--secondary'}` }, this.message), h("slot", { key: '2bd483f0a9d4570387da9d99b55c4d548f75f025' })));
    }
};
IrEmptyState.style = irEmptyStateCss();

const irExtraServicePriceInputCss = () => `wa-input[aria-invalid='true']::part(base),wa-textarea[aria-invalid='true']::part(base),wa-select[aria-invalid='true']::part(combobox){border-color:var(--ir-color-border-error, var(--wa-color-danger-border-loud));outline-color:var(--ir-color-border-error, var(--wa-color-danger-border-loud));border-top-width:var(--error-border-width) !important;border-left-width:var(--error-border-width) !important;border-right-width:var(--error-border-width) !important;border-bottom-width:var(--error-border-width) !important}:host{display:flex;flex:1}.ir-extra-service-price-input__price-wrapper{flex:1 1 0%}`;

const IrExtraServicePriceInput = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.priceChange = createEvent(this, "priceChange");
    }
    label;
    placeholder;
    /**
     * Controlled charge rule value passed from the parent: `value` holds the price,
     * `mode` holds the taxation mode code (Inclusive/Exclusive).
     */
    chargeRule;
    autoValidate;
    price;
    priceChange;
    componentWillLoad() {
        if (this.chargeRule)
            this.updatePriceField(this.chargeRule);
    }
    handlePriceValueChange(newValue, oldValue) {
        if (newValue !== oldValue) {
            this.updatePriceField(newValue);
        }
    }
    updatePriceField(params) {
        this.price = { ...(this.price || {}), ...params };
    }
    render() {
        return (h(Host, { key: 'b82a84a64b0bf36b7c0ed4e7634607000ca9b75c', class: "ir-extra-service-price-input" }, h("ir-validator", { key: 'b005a0c93e8e99076de864ba5392a1b3014a6ccd', form: "extra-services-settings__form", class: "ir-extra-service-price-input__price-wrapper", value: this.price?.value ?? null, schema: libExports.z
                .number()
                .nullable()
                .refine(value => value === null || value >= 0.01, { message: 'Price must be greater than 0' }) }, h("ir-input", { key: '601877e033652727b10ffd2ec5bd64fff6f8ad7d', value: this.price?.value?.toString() ?? '', mask: 'price', onChange: () => {
                this.priceChange.emit({ value: this.price?.value ?? this.chargeRule?.value ?? null, mode: this.price?.mode ?? this.chargeRule?.mode ?? '' });
            }, part: "input", label: this.label, class: "ir-extra-service-price-input__price", exportparts: "base", size: "s", placeholder: this.placeholder, "onText-change": e => {
                const inputValue = `${e.detail ?? ''}`.trim();
                const value = inputValue === '' ? null : Number(inputValue);
                this.updatePriceField({ value });
            } }, h("span", { key: 'b416c11232c682bc2b1fa05c50505fe22b449218', slot: "start", class: "ir-extra-service-price-input__price-symbol" }, calendar_data.property.currency.symbol)))));
    }
    static get watchers() { return {
        "chargeRule": [{
                "handlePriceValueChange": 0
            }]
    }; }
};
IrExtraServicePriceInput.style = irExtraServicePriceInputCss();

const irExtraServicesSettingsCss = () => `.sc-ir-extra-services-settings-h{display:block}.extra-services-settings__groups.sc-ir-extra-services-settings{display:flex;flex-direction:column;gap:var(--wa-space-l)}.extra-services-settings__card.sc-ir-extra-services-settings{background-color:var(--wa-color-surface-default, white)}.extra-services-settings__header.sc-ir-extra-services-settings{display:flex;align-items:center;font-size:var(--wa-font-size-l);gap:var(--wa-space-s)}.extra-services-settings__tax-chip.sc-ir-extra-services-settings{display:flex;align-items:center;gap:var(--wa-space-3xs);font-size:var(--wa-font-size-s);font-weight:400;color:var(--wa-color-text-quiet);padding-top:0.25rem}.extra-services-settings__tax-chip-label.sc-ir-extra-services-settings{font-weight:600;color:var(--wa-color-text-normal)}.extra-services-grid__row.sc-ir-extra-services-settings{display:flex;flex-direction:column;gap:var(--wa-space-m);padding:var(--wa-space-m) 0}.extra-services-grid__name.sc-ir-extra-services-settings{display:flex;flex-direction:column;gap:var(--wa-space-3xs)}.extra-services-grid__title.sc-ir-extra-services-settings{font-size:var(--wa-font-size-m);margin:0;padding:0}.extra-services-grid__hint.sc-ir-extra-services-settings{margin:0;padding:0;font-size:var(--wa-font-size-xs);color:var(--wa-color-text-quiet)}.extra-services-grid__controls.sc-ir-extra-services-settings{display:flex;align-items:flex-end;gap:var(--wa-space-m)}.extra-services-grid__cell.sc-ir-extra-services-settings:empty{display:none}@media (min-width: 768px){.extra-services-grid.sc-ir-extra-services-settings{display:grid;grid-template-columns:max-content max-content 1fr;column-gap:var(--wa-space-xl);align-items:center}.extra-services-grid__row.sc-ir-extra-services-settings{display:contents}.extra-services-grid__controls.sc-ir-extra-services-settings{display:contents}.extra-services-grid__divider.sc-ir-extra-services-settings{grid-column:1 / -1}.extra-services-grid__name.sc-ir-extra-services-settings,.extra-services-grid__cell.sc-ir-extra-services-settings{align-self:center}.extra-services-grid__cell.sc-ir-extra-services-settings:empty{display:block}ir-extra-service-price-input.sc-ir-extra-services-settings,.extra-services-grid__cell.sc-ir-extra-services-settings{width:100%}}`;

/** `_SVC_CATEGORY` short code for Day Use — only used to place the Block Night switch, not for grouping. */
const DAY_USE_CATEGORY_CODE = 'DUZ';
/** `_SVC_CATEGORY` short code for Baby Cot — only used to place the Stay/Night pricing-model select, not for grouping. */
const BABY_COT_CATEGORY_CODE = 'BCT';
/** Valid `BABY_COT_PRICING_MODEL` values — the baby cot's default price is either a flat per-stay charge or a per-night charge. */
const BABY_COT_PRICING_MODELS = ['Stay', 'Night'];
const IrExtraServicesSettings = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    ticket;
    p;
    language = 'en';
    propertyid;
    isLoading;
    isSaving;
    setupEntries;
    priceCategoryRules = new Map();
    autoValidate;
    dayUseBlockNight = false;
    babyCotPricingModel = 'Stay';
    tokenService = new Token();
    bookingService = new BookingService();
    propertyService = new PropertyService();
    componentWillLoad() {
        if (this.ticket) {
            this.tokenService.setToken(this.ticket);
            this.init();
        }
    }
    handleTicketChange(newValue, oldValue) {
        if (newValue !== oldValue)
            this.reinit();
    }
    handlePChange(newValue, oldValue) {
        if (newValue !== oldValue && this.ticket)
            this.reinit();
    }
    handlePropertyIdChange(newValue, oldValue) {
        if (newValue !== oldValue && this.ticket)
            this.reinit();
    }
    reinit() {
        this.tokenService.setToken(this.ticket);
        this.init();
    }
    async init() {
        this.isLoading = true;
        try {
            const [, tableEntries] = await Promise.all([
                this.propertyService.getExposedProperty({ id: this.propertyid, language: this.language }),
                this.bookingService.getSetupEntriesByTableNameMulti(['_VAT_INCLUDED', '_SVC_CATEGORY']),
            ]);
            this.setupEntries = this.bookingService.groupEntryTablesResult(tableEntries);
            this.priceCategoryRules = this.buildInitialRules();
            this.dayUseBlockNight = getDayUseBlockState() === '1';
            this.babyCotPricingModel = this.resolveBabyCotPricingModel(getBabyCotPricingModel());
        }
        catch (error) {
            console.error(error);
        }
        finally {
            this.isLoading = false;
        }
    }
    /** `svc_category` entries grouped by their `NOTES`-referenced parent code. See `groupSvcCategoriesByParent`. */
    get serviceGroups() {
        return Array.from(groupSvcCategoriesByParent(this.setupEntries?.svc_category ?? [], this.language).values());
    }
    /** All grouped categories flattened, for building the price-rules map and the save payload. */
    get categories() {
        return this.serviceGroups.flatMap(group => group.categories);
    }
    /**
     * The property's VAT setup. Every grouped extra service shares this one rate and is always
     * marked Inclusive — there's no per-category tax mode to configure anymore, so this single
     * value both drives the card-header summary and is what gets saved for every category.
     */
    get vatSummary() {
        return toAccChargeRule(findAccTax('vat'));
    }
    /** Formats a charge rule as e.g. "15% Inclusive" or "Not Applicable". */
    formatAccChargeRule(rule) {
        if (rule.mode === taxationModes.NOT_APPLICABLE)
            return 'Not Applicable';
        return `${rule.value ?? 0}% ${rule.mode === taxationModes.INCLUSIVE ? 'Inclusive' : 'Exclusive'}`;
    }
    /** Builds the initial price rules map from `extra_info`'s `SVC_DEFAULT_PRICE_<code>` entries. Mode is always Inclusive — see `vatSummary`. */
    buildInitialRules() {
        const rules = new Map();
        this.categories.forEach(c => {
            const defaultPrice = getExtraServiceDefaultPrice(c.CODE_NAME);
            rules.set(c.CODE_NAME, { mode: taxationModes.INCLUSIVE, value: defaultPrice !== undefined ? Number(defaultPrice) : null });
        });
        return rules;
    }
    /** Narrows the persisted `BABY_COT_PRICING_MODEL` string to a known option, defaulting to `'Stay'` if unset or unrecognized. */
    resolveBabyCotPricingModel(value) {
        return BABY_COT_PRICING_MODELS.includes(value ?? '') ? value : 'Stay';
    }
    handlePriceRuleChange(categoryCode, nextRule) {
        const next = new Map(this.priceCategoryRules);
        next.set(categoryCode, nextRule);
        this.priceCategoryRules = next;
    }
    /** Assembles the API payload from the current price rules state. Every category shares the property's VAT rate and is Inclusive. */
    buildPayload() {
        const vat = this.vatSummary;
        const inclusiveEntry = (this.setupEntries?.vat_included ?? []).find(v => v.CODE_NAME === taxationModes.INCLUSIVE);
        const tax_categories = this.categories.map(category => {
            const rule = this.priceCategoryRules.get(category.CODE_NAME);
            return {
                category: { code: category.CODE_NAME, description: category.CODE_VALUE_EN },
                taxation_mode: { code: taxationModes.INCLUSIVE, description: inclusiveEntry?.CODE_VALUE_EN ?? 'Inclusive' },
                pct: vat.mode === taxationModes.NOT_APPLICABLE ? 0 : (vat.value ?? 0),
                default_price: rule?.value ?? null,
            };
        });
        return {
            property_id: this.propertyid,
            ...getAccTaxPayloadFields(),
            tax_categories,
            DAY_USE_BLOCK: this.dayUseBlockNight ? '1' : '0',
            BABY_COT_PRICING_MODEL: this.babyCotPricingModel,
        };
    }
    /** Validates and submits the extra-service price configuration to the API. */
    async handleSubmit(e) {
        e.preventDefault();
        this.autoValidate = true;
        try {
            this.isSaving = true;
            const payload = this.buildPayload();
            await this.propertyService.handleExposedPropertyTaxCategories(payload);
            showToast({
                title: 'Saved Successfully',
                type: 'success',
            });
        }
        catch (error) {
            console.error(error);
        }
        finally {
            this.isSaving = false;
        }
    }
    render() {
        if (this.isLoading) {
            return h("ir-loading-screen", null);
        }
        return (h("ir-page", { label: "Extra Services", description: "Define pricing and options for the extra services offered on this property.", "data-testid": "ir-extra-services-settings" }, h("ir-custom-button", { slot: "page-header", loading: this.isSaving, type: "submit", form: "extra-services-settings__form", style: { width: '100px' }, variant: "brand" }, "Save"), h("form", { id: "extra-services-settings__form", onSubmit: e => this.handleSubmit(e), class: "extra-services-settings__groups" }, this.serviceGroups.length === 0 && (h("ir-empty-state", { message: "No extra-service groups are set up yet. Add a service category whose CODE_NAME is referenced by other categories' NOTES to group them here." })), this.serviceGroups.map(group => (h("wa-card", { appearance: "plain", class: "extra-services-settings__card" }, h("div", { slot: "header", class: "extra-services-settings__header" }, h("span", null, group.label), h("span", { class: "extra-services-settings__tax-chip" }, h("span", { class: "extra-services-settings__tax-chip-label" }, "VAT"), h("span", null, this.formatAccChargeRule(this.vatSummary)))), h("div", { class: "extra-services-grid" }, group.categories.map((category, idx) => {
            const rule = this.priceCategoryRules.get(category.CODE_NAME);
            const isDayUse = category.CODE_NAME === DAY_USE_CATEGORY_CODE;
            const isBabyCot = category.CODE_NAME === BABY_COT_CATEGORY_CODE;
            return [
                idx > 0 && (h("div", { class: "extra-services-grid__divider", key: category.CODE_NAME + 'divider' + idx }, h("wa-divider", null))),
                h("div", { class: "extra-services-grid__row", id: category.CODE_NAME, key: category.CODE_NAME + 'row' + idx }, h("div", { class: "extra-services-grid__name" }, h("p", { class: "extra-services-grid__title" }, getEntryValue({ entry: category, language: this.language }))), h("div", { class: "extra-services-grid__controls" }, h("div", { class: "extra-services-grid__cell" }, isBabyCot ? (h("div", { class: 'ir__field-group' }, h("ir-extra-service-price-input", {
                    // class={'--grow'}
                    autoValidate: this.autoValidate, onPriceChange: e => this.handlePriceRuleChange(category.CODE_NAME, e.detail), chargeRule: rule
                }), h("wa-select", { value: this.babyCotPricingModel, defaultValue: this.babyCotPricingModel, size: "s", style: { width: 'min-content', minWidth: '100px' }, onchange: e => (this.babyCotPricingModel = e.target.value) }, h("wa-option", { value: "Stay" }, "Stay"), h("wa-option", { value: "Night" }, "Night")))) : (h("ir-extra-service-price-input", { autoValidate: this.autoValidate, onPriceChange: e => this.handlePriceRuleChange(category.CODE_NAME, e.detail), chargeRule: rule }))), h("div", { class: "extra-services-grid__cell" }, isDayUse && (h("wa-switch", { checked: this.dayUseBlockNight, defaultChecked: this.dayUseBlockNight, onchange: e => (this.dayUseBlockNight = e.target.checked) }, "Block night"))))),
            ];
        }))))))));
    }
    static get watchers() { return {
        "ticket": [{
                "handleTicketChange": 0
            }],
        "p": [{
                "handlePChange": 0
            }],
        "propertyid": [{
                "handlePropertyIdChange": 0
            }]
    }; }
};
IrExtraServicesSettings.style = irExtraServicesSettingsCss();

const irInputCss = () => `wa-input[aria-invalid='true']::part(base),wa-textarea[aria-invalid='true']::part(base),wa-select[aria-invalid='true']::part(combobox){border-color:var(--ir-color-border-error, var(--wa-color-danger-border-loud));outline-color:var(--ir-color-border-error, var(--wa-color-danger-border-loud));border-top-width:var(--error-border-width) !important;border-left-width:var(--error-border-width) !important;border-right-width:var(--error-border-width) !important;border-bottom-width:var(--error-border-width) !important}:host{display:block}`;

const IrInput = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.textChange = createEvent(this, "text-change");
        this.inputBlur = createEvent(this, "input-blur");
        this.inputFocus = createEvent(this, "inputFocus");
        this.inputCleared = createEvent(this, "inputCleared");
        if (hostRef.$hostElement$["s-ei"]) {
            this.internals = hostRef.$hostElement$["s-ei"];
        }
        else {
            this.internals = hostRef.$hostElement$.attachInternals();
            hostRef.$hostElement$["s-ei"] = this.internals;
        }
    }
    internals;
    get el() { return getElement(this); }
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
        // Find the closest form element (if any)
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
            if (this._mask && this.returnMaskedValue && this._mask.value !== newValue) {
                this._mask.value = newValue;
                this._mask.updateValue();
            }
        }
    }
    handleInput = (nextValue) => {
        if (nextValue === this.value) {
            return;
        }
        if (!this.mask) {
            this.value = nextValue ?? '';
        }
        this.internals.setFormValue(nextValue ?? '');
        this.textChange.emit(nextValue ?? '');
    };
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
        this._mask = IMask(nativeInput, maskOpts);
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
        return maskOpts;
    }
    resolveMask() {
        if (!this.mask)
            return;
        if (typeof this.mask === 'string') {
            return masks[this.mask];
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
        return (h(Host, { key: '23369d30d29fce3ee12b8b33aa3bf713ea1ba96e' }, h("wa-input", { key: '01f90daed45924794fd6a25f8c598e9f0ca16605', part: "wa-input", type: this.type, name: this.name, value: displayValue, ref: el => (this.inputRef = el), defaultValue: this.defaultValue, size: this.size, appearance: this.appearance, pill: this.pill, "aria-invalid": String(!this.isValid), label: this.label, hint: this.hint, withClear: this.withClear, placeholder: this.placeholder, readonly: this.readonly, passwordToggle: this.passwordToggle, passwordVisible: this.passwordVisible, withoutSpinButtons: this.withoutSpinButtons, form: this.form, required: this.required, pattern: this.pattern, minlength: this.minlength, maxlength: this.maxlength, min: this.min, max: this.max, step: this.step, class: this.inputClass, autocapitalize: this.autocapitalize, autocorrect: this.autocorrect, autocomplete: this.autocomplete, autofocus: this.autofocus, enterkeyhint: this.enterkeyhint, spellcheck: this.spellcheck, inputmode: this.inputmode, withLabel: this.withLabel, withHint: this.withHint, oninput: this.handleChange, "onwa-clear": this.handleClear, onblur: this.handleBlur, onfocus: this.handleFocus, exportparts: "base, hint, label, input, start, end, clear-button, password-toggle-button" }, this.slotState.get('label') && h("slot", { key: '7be73e562c69f7445eb2c86adf8d4ad9c1e0df58', name: "label", slot: "label" }), this.slotState.get('start') && h("slot", { key: '05448b93c81834c070e21d19419328913773eda9', name: "start", slot: "start" }), this.slotState.get('end') && h("slot", { key: 'ad4154f77ef8bb49084b3da28594234a38ea5520', name: "end", slot: "end" }), this.slotState.get('clear-icon') && h("slot", { key: '764c2dfa48e35bf61b4383b1bcc370699f721f04', name: "clear-icon", slot: "clear-icon" }), this.slotState.get('hide-password-icon') && h("slot", { key: 'ae88dfe8863693fc66c6dea63e7288da20670545', name: "hide-password-icon", slot: "hide-password-icon" }), this.slotState.get('show-password-icon') && h("slot", { key: '067314da5d6c558559ed4669ba1972b3079365a7', name: "show-password-icon", slot: "show-password-icon" }), this.slotState.get('hint') && h("slot", { key: 'd7d77d24f95ee8b135dc31830a2e9f76d7d4c70e', name: "hint", slot: "hint" }))));
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

const irInterceptorCss = () => `.page-loader.sc-ir-interceptor{width:1.25rem;height:1.25rem;border:2.5px solid #3f3f3f;border-bottom-color:transparent;border-radius:50%;display:inline-block;box-sizing:border-box;animation:rotation 1s linear infinite}.loaderContainer.sc-ir-interceptor{padding:20px;display:flex;align-items:center;justify-content:center;border-radius:5px}.loadingScreenContainer.sc-ir-interceptor{position:fixed;top:0;left:0;height:100vh;width:100vw;z-index:100000;background:var(--ir-color-loader, rgba(255, 255, 255, 0.2));backdrop-filter:blur(5px);pointer-events:all;display:flex;align-items:center;justify-content:center}@keyframes rotation{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}`;

const IrInterceptor = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.toast = createEvent(this, "toast");
    }
    /**
     * List of endpoint paths that should trigger loader logic and OTP handling.
     */
    handledEndpoints = ['/Get_Exposed_Calendar', '/ReAllocate_Exposed_Room', '/Get_Exposed_Bookings', '/UnBlock_Exposed_Unit'];
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
        axios.interceptors.request.use(this.handleRequest.bind(this), this.handleError.bind(this));
        axios.interceptors.response.use(this.handleResponse.bind(this), this.handleError.bind(this));
    }
    /**
     * Removes query params from URL for consistent endpoint matching.
     */
    extractEndpoint(url) {
        return url.split('?')[0];
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
        interceptor_requests[extractedUrl] = 'pending';
        config.params = config.params || {};
        // if (this.ticket) {
        //   config.params.Ticket = this.ticket;
        // }
        if (this.isHandledEndpoint(extractedUrl) && this.isPageLoadingStopped !== extractedUrl) {
            if (extractedUrl !== '/Get_Exposed_Calendar') {
                this.isLoading = true;
            }
            else {
                if (this.endpointsCount > 0) {
                    this.isLoading = true;
                }
            }
        }
        if (extractedUrl === '/Get_Exposed_Calendar') {
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
        interceptor_requests[extractedUrl] = 'done';
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
     */
    handleError(error, url, code) {
        const shouldSuppressToast = this.suppressToastEndpoints.includes(url);
        if (!shouldSuppressToast || (shouldSuppressToast && !code)) {
            this.toast.emit({
                type: 'error',
                title: error,
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
                    const resp = await axios.request(retryConfig);
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
        return (h(Host, { key: '7da95e991c1c32f40e15f664efb66a5d268ba4be' }, this.isLoading && !this.isPageLoadingStopped && (h("div", { key: '9357222413a563bd9b5abd737eda43e80ffcc358', class: "loadingScreenContainer" }, h("div", { key: '98ac264caef14557ee7b38fb445c207206addefe', class: "loaderContainer" }, h("wa-spinner", { key: '27ee4deb75fe872fe17f9086b00d56533856bd12', style: { 'fontSize': '2.5rem', '--track-width': '3.5px' } })))), this.showModal && (h("ir-otp-modal", { key: '12f0f556021981d759d194a07b264e3c31140401', email: this.email, baseOTPUrl: this.baseOTPUrl, requestUrl: this.requestUrl, ref: el => (this.otpModal = el), onOtpFinished: this.handleOtpFinished.bind(this) }))));
    }
};
IrInterceptor.style = irInterceptorCss();

const irLoadingScreenCss = () => `.loader__container.sc-ir-loading-screen{position:fixed;z-index:1000;inset:0;display:flex;align-items:center;justify-content:center;background:var(--wa-color-surface-default, white);margin:0 !important;padding:0 !important;box-sizing:border-box}.loader.sc-ir-loading-screen{width:1.25rem;height:1.25rem;border:2.5px solid #3f3f3f;border-bottom-color:transparent;border-radius:50%;display:inline-block;box-sizing:border-box;animation:rotation 1s linear infinite}.loaderContainer.sc-ir-loading-screen{position:absolute;z-index:100001;padding:20px;top:50%;left:50%;transform:translate(-50%, -50%);background:var(--wa-color-surface-default, white);display:flex;align-items:center;justify-content:center;gap:20px;border-radius:5px}@keyframes rotation{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}`;

const IrLoadingScreen = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    message = '';
    render() {
        return (h("div", { key: '5bf21e597da12c5a558dc86e77b52813c9c4d3bd', class: "loader__container", "data-testid": "loading-screen" }, h("wa-spinner", { key: '22edfe698c84e2663bcad932e6b53c58032d950e', style: { 'fontSize': '2.5rem', '--track-width': '3.5px' } })));
    }
};
IrLoadingScreen.style = irLoadingScreenCss();

const irOtpCss = () => `.otp-input-wrapper{display:flex;gap:0.5rem;justify-content:space-evenly}.otp-digit{--otp-size:3rem;width:var(--otp-size) !important;height:var(--otp-size) !important;padding:0 !important;font-size:24px !important;font-weight:500 !important;text-align:center !important;padding:0 var(--wa-form-control-padding-inline) !important;color:var(--wa-form-control-value-color) !important;font-size:var(--wa-form-control-value-size) !important;font-family:inherit !important;font-weight:var(--wa-form-control-value-font-weight) !important;line-height:var(--wa-form-control-value-line-height) !important;vertical-align:middle !important;background-color:var(--wa-form-control-background-color) !important;border-color:var(--wa-form-control-border-color) !important;border-style:var(--wa-form-control-border-style) !important;border-width:var(--wa-form-control-border-width) !important;border-radius:var(--wa-form-control-border-radius) !important;transition:background-color var(--wa-transition-normal),     border-color var(--wa-transition-normal),     outline-color var(--wa-transition-fast) !important;transition-timing-function:var(--wa-transition-easing) !important;outline:var(--wa-focus-ring-style) var(--wa-focus-ring-width) transparent !important;outline-offset:var(--wa-focus-ring-offset) !important;cursor:text !important;box-sizing:border-box}.otp-digit:focus-visible{outline-color:var(--wa-color-focus)}.otp-digit:disabled{opacity:0.5;cursor:not-allowed}input[type='number']::-webkit-inner-spin-button,input[type='number']::-webkit-outer-spin-button{-webkit-appearance:none;margin:0}input[type='number']{-moz-appearance:textfield}@media (max-width: 480px){.otp-digit{width:35px;height:45px;font-size:20px}.otp-input-wrapper{gap:6px}}@media (max-width: 360px){.otp-digit{width:30px;height:40px;font-size:18px}.otp-input-wrapper{gap:4px}}`;

const IrOtp = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.otpChange = createEvent(this, "otpChange");
        this.otpComplete = createEvent(this, "otpComplete");
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
        return (h(Host, { key: 'e82ed22a3443b23213b3bbebdec0765ba980d056', class: "otp-input-container" }, h("div", { key: '6c078f3de8d689e72b78c10e357f1eed519764a5', class: "otp-input-wrapper" }, Array(this.length)
            .fill(null)
            .map((_, index) => (h("input", { ref: el => (this.inputRefs[index] = el), type: this.type, inputmode: this.numbersOnly ? 'numeric' : 'text', class: "otp-digit", maxlength: "1", placeholder: this.placeholder, disabled: this.disabled, autocomplete: "one-time-code", value: this.otpValues[index], onInput: e => this.handleInput(e, index), onKeyDown: e => this.handleKeyDown(e, index), onPaste: e => this.handlePaste(e, index), onFocus: this.handleFocus, "aria-label": `Digit ${index + 1} of ${this.length}` }))))));
    }
    static get watchers() { return {
        "length": [{
                "handleLengthChange": 0
            }]
    }; }
};
IrOtp.style = irOtpCss();

const irOtpModalCss = () => `:host{display:block;box-sizing:border-box}:host(*){box-sizing:border-box}.otp-modal{--ir-dialog-width:fit-content}.otp-modal-header{display:flex;justify-content:space-between;padding-bottom:1rem;border-bottom:0}.otp-modal-title{margin:0;font-family:var(--wa-font-family-heading) !important;font-weight:var(--wa-font-weight-heading) !important;line-height:var(--wa-line-height-condensed) !important;text-wrap:balance !important;font-size:var(--wa-font-size-l)}.otp-modal-body{display:flex;flex-direction:column;max-height:100%}.verification-message{font-size:var(--wa-font-size-m);max-width:90%;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;margin:0;text-align:flex-start;padding-bottom:1rem}.otp-error{margin:0.25rem 0 0;padding:0;font-size:0.875em;color:var(--wa-color-danger-fill-loud)}.otp-resend-timer{margin-top:0.5rem;font-size:0.875em}.otp-resend-btn{margin-top:0.5rem;font-size:var(--wa-font-size-s)}.otp-modal-footer{display:flex;gap:0.5rem;width:100%;border-top:0;flex-direction:row;align-items:center;justify-content:flex-end}.modal-loading-container{display:flex;align-items:center;justify-content:center;height:250px;width:80vw}@media (min-width: 768px){.modal-loading-container{width:380px}.verification-message{max-width:350px}}`;

const IrOtpModal = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.otpFinished = createEvent(this, "otpFinished");
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
    get el() { return getElement(this); }
    dialogRef;
    timerInterval;
    systemService = new SystemService();
    roomService = new RoomService();
    tokenService = new Token();
    otpVerificationSchema = libExports.z.object({ email: libExports.z.string().nonempty(), requestUrl: libExports.z.string().nonempty(), otp: libExports.z.string().length(this.otpLength) });
    /** Emits the final OTP (or empty on cancel) */
    otpFinished;
    isInitializing;
    componentWillLoad() {
        if (this.ticket) {
            this.tokenService.setToken(this.ticket);
        }
        this.fetchLocale();
    }
    handleTicketChange(newValue, oldValue) {
        if (newValue !== oldValue) {
            this.tokenService.setToken(newValue);
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
        if (!this.tokenService.getToken()) {
            return;
        }
        this.isInitializing = true;
        await this.roomService.fetchLanguage(this.language, ['_USER_MGT']);
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
            this.error = 'Verification failed. Please try again.';
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
        return (h(Host, { key: 'e6406a0ffd0d0c13634d0a2da9c4a23f4bac8410' }, h("ir-dialog", { key: '69051d21b4a31c836c49c1c637740d4f93bc386b', class: "otp-modal", ref: el => (this.dialogRef = el), open: this.open, withoutHeader: true, lightDismiss: false, onIrDialogHide: e => this.handleDialogHide(e) }, this.isInitializing || !locales.entries ? (h("div", { class: "modal-loading-container" }, h("ir-spinner", null))) : (h(Fragment, null, h("header", { class: "otp-modal-header" }, h("h5", { class: "otp-modal-title" }, locales.entries.Lcz_VerifyYourIdentity)), h("section", { class: "otp-modal-body" }, h("p", { class: "verification-message" }, locales.entries.Lcz_WeSentYuoVerificationCode, " ", this.email), h("ir-otp", { autoFocus: true, length: this.otpLength, defaultValue: this.otp, onOtpComplete: this.handleOtpComplete }), this.error && h("p", { class: "otp-error" }, this.error), this.showResend && (h(Fragment, null, this.timer > 0 ? (h("p", { class: "otp-resend-timer" }, locales.entries.Lcz_ResendCode, " 00:", String(this.timer).padStart(2, '0'))) : (h("ir-custom-button", { class: "otp-resend-btn", link: true, size: "s", onClickHandler: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.resendOtp();
            } }, "Didn\u2019t receive code? Resend"))))), h("div", { slot: "footer", class: "ir-dialog__footer" }, h("ir-custom-button", { variant: "neutral", appearance: "filled", size: "m", onClickHandler: () => this.handleCancelClicked() }, locales.entries.Lcz_Cancel), h("ir-custom-button", { variant: "brand", size: "m", loading: this.isLoading, disabled: this.otp?.length < this.otpLength || this.isLoading, onClickHandler: () => this.verifyOtp() }, locales.entries.Lcz_VerifyNow)))))));
    }
    static get watchers() { return {
        "ticket": [{
                "handleTicketChange": 0
            }]
    }; }
};
IrOtpModal.style = irOtpModalCss();

const irPageCss = () => `:host{box-sizing:border-box !important}:host *,:host *::before,:host *::after{box-sizing:inherit !important;padding:0;margin:0}[hidden]{display:none !important}:host{display:block;height:100%;color:var(--wa-color-text-normal);font-size:var(--wa-font-size-m)}.page-title{font-family:var(--wa-font-family-heading);font-weight:var(--wa-font-weight-heading);line-height:var(--wa-line-height-condensed);text-wrap:balance;font-size:var(--wa-font-size-xl)}.page__description{font-size:var(--wa-font-size-m)}.ir-page__container{display:flex;flex-direction:column;gap:var(--wa-space-l, 1.5rem);padding:var(--wa-space-l);position:relative;height:100%;width:100%;max-width:none;margin:0}.tax-page__header{display:flex;gap:var(--wa-space-l, 1.5rem);flex-wrap:wrap;align-items:center;margin-bottom:0.5rem;justify-content:space-between}.page-body{display:flex;flex-direction:column;gap:var(--wa-space-l, 1.5rem)}`;

const IrPage = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    label;
    description;
    render() {
        return (h(Host, { key: '80f693e862be35c65c1940f3c55500b5003074e9' }, h("ir-interceptor", { key: 'c48881071ddd051a9b72e6d38b18cf8b46266f64' }), h("ir-toast", { key: 'bce105f9f130be7bec2e649c68a1b88687fd416d' }), h("main", { key: '5009693b2de4a5d0ecd66f86e07a0a21ee99165a', part: "main", class: "ir-page__container" }, h("header", { key: 'fec2c2fb6b47612ff74636b80fcecfdd99539ae4', part: "header", class: "tax-page__header" }, h("slot", { key: '2b083ef23cc45d6db01673c352f76c83519bcb93', name: "heading" }, h("div", { key: 'ba590087d23cb19065673ebdaf632c400af0a634', class: "tax-page__heading" }, h("h3", { key: 'c276afb6edcb7cf20a355627e13c29e209bc78f6', part: "title", class: "page-title" }, this.label), this.description && (h("p", { key: '5e8ddb06a2f50d5227b0e9cb65a50eb5741a86bc', part: "description", class: "page__description" }, this.description, h("slot", { key: '2575b144ce5f6f4e6c07b6bdf9d5135fae7299a8', name: "page-description" }))))), h("slot", { key: 'd3357399ff34025747caefc1600b2401fca9894c', name: "page-header" })), h("div", { key: 'd278bccf0f4e3e75fec1d73c8b142ef7aa5a3af6', part: "body", class: 'page-body' }, h("slot", { key: '89d768ccbf978a28a3198263db6679c6a13dd224' })))));
    }
};
IrPage.style = irPageCss();

const irSpinnerCss = () => ``;

const IrSpinner = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    get el() { return getElement(this); }
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
        return (h(Host, { key: '6635dee77ce0aa2a458e89200a6374c4e9a78627' }, h("wa-spinner", { key: '79b9a4c39dcc65a1b62a9a9ae5863eb85fd272a0', style: { 'fontSize': '2rem', '--track-width': '3px' } })));
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

const irToastCss = () => `button.sc-ir-toast,p.sc-ir-toast,h3.sc-ir-toast,div.sc-ir-toast{all:unset}.sc-ir-toast-h{--rd-viewport-padding:25px;--rd-success:#2b9a66;position:fixed;bottom:0;right:0;display:flex;flex-direction:column;padding:var(--rd-viewport-padding);gap:10px;max-width:100vw;margin:0;list-style:none;z-index:2147483647;outline:none;pointer-events:none;-webkit-user-select:none;user-select:none}@media (prefers-color-scheme: dark){.sc-ir-toast-h{--rd-success:#33b074}}p.sc-ir-toast{color:hsla(222.2, 84%, 4.9%, 0.8);font-size:13px;line-height:1.3}h1.sc-ir-toast,h2.sc-ir-toast,h3.sc-ir-toast,h4.sc-ir-toast,h5.sc-ir-toast,h6.sc-ir-toast{font-weight:500;color:hsl(222.2, 84%, 4.9%);font-size:15px}[position='top-left'].sc-ir-toast-h{top:0;left:0}[position='top-right'].sc-ir-toast-h{top:0;right:0}[position='bottom-left'].sc-ir-toast-h{bottom:0;left:0}[position='bottom-right'].sc-ir-toast-h{bottom:0;right:0}.icon-container.sc-ir-toast{height:25px;width:25px;border-radius:25px;display:flex;align-items:center;justify-content:center;padding:0;margin:0}.icon-container.sc-ir-toast>svg.sc-ir-toast{margin:0;color:white;stroke-width:5px}.success.sc-ir-toast{background-color:var(--rd-success)}.error.sc-ir-toast{background-color:red}.ToastRoot.sc-ir-toast{background-color:hsl(0, 0%, 100%);border-radius:0.5rem;box-shadow:hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px;padding:15px;display:grid;grid-template-areas:'title action' 'description action';grid-template-columns:auto max-content;column-gap:15px;align-items:center;pointer-events:none;opacity:0;border:1px solid hsl(214.3, 31.8%, 91.4%);position:relative}.ToastRoot[data-state='open'].sc-ir-toast{pointer-events:all;animation:slideIn 150ms cubic-bezier(0.16, 1, 0.3, 1)}.ToastRoot[data-state='closed'].sc-ir-toast{pointer-events:none;animation:hide 100ms ease-in}@-webkit-keyframes slideIn{from{transform:translateX(var(--rd-offset-width))}to{transform:translateX(0)}}@keyframes slideIn{from{transform:translateX(var(--rd-offset-width))}to{transform:translateX(0)}}.ToastTitle.sc-ir-toast{grid-area:title;font-weight:500;color:hsl(222.2, 84%, 4.9%);font-size:15px}.ToastDescription.sc-ir-toast{grid-area:description;margin:0;margin-top:5px;color:hsla(222.2, 84%, 4.9%, 0.8);font-size:13px;line-height:1.3;overflow:hidden;text-overflow:ellipsis}.ToastAction.sc-ir-toast{grid-area:action}`;

const IrToast = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
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
        return h("ir-toast-provider", { key: 'dcc3e1446f7b852c0b0e04de468a7574f17dcba5', position: this.providerPosition });
    }
};
IrToast.style = irToastCss();

const irToastItemCss = () => `:host{box-sizing:border-box !important}:host *,:host *::before,:host *::after{box-sizing:inherit !important;padding:0;margin:0}[hidden]{display:none !important}:host{display:block;--accent-width:4px}.accent{flex:0 0 auto;width:var(--accent-width);background:var(--accent-color)}.toast-item{display:flex;align-items:stretch;background:var(--wa-color-surface-raised);border:var(--wa-border-width-s) solid var(--wa-color-surface-border);border-radius:var(--wa-border-radius-m);box-shadow:var(--wa-shadow-l);overflow:hidden;animation:toast-enter 280ms cubic-bezier(0.16, 1, 0.3, 1) both}:host([data-placement^='bottom']) .toast-item{animation-name:toast-enter-up}:host([data-leaving]) .toast-item{animation:toast-exit 200ms cubic-bezier(0.23, 1, 0.32, 1) both;pointer-events:none}.icon{display:flex;align-items:center;padding:var(--wa-space-l);padding-inline-end:0px;color:var(--accent-color);font-size:1.25em}.content{font-size:var(--wa-font-size-s);flex:1 1 auto;align-self:center;min-width:0px;padding:var(--wa-space-l);color:var(--wa-color-text-normal)}::slotted([data-toast-title]){display:block;font-weight:var(--wa-font-weight-semibold, 600);color:var(--wa-color-text-normal)}::slotted([data-toast-description]){display:block;margin-top:2px;color:var(--wa-color-text-quiet)}::slotted([data-toast-action]){display:inline-flex;margin-top:var(--wa-space-s);padding:0.25rem 0.625rem;border:var(--wa-border-width-s) solid var(--wa-color-surface-border);border-radius:var(--wa-border-radius-s);background:transparent;color:var(--accent-color);font:inherit;font-size:var(--wa-font-size-s);font-weight:600;cursor:pointer;transition:background-color var(--wa-transition-fast)}::slotted([data-toast-action]:hover){background:var(--wa-color-neutral-fill-quiet)}::slotted([data-toast-action]:focus-visible){outline:2px solid var(--wa-color-brand-fill-loud);outline-offset:2px}.close-button wa-progress-ring{--size:30px;--track-width:2px;--indicator-width:2px;--track-color:var(--wa-color-surface-border);--indicator-color:var(--accent-color);--indicator-transition-duration:150ms;font-size:var(--wa-font-size-xs)}.close-button{flex:0 0 auto;display:flex;align-items:center;justify-content:center;align-self:stretch;padding-inline:var(--wa-space-l);background:transparent;border:none;border-start-end-radius:var(--border-radius);border-end-end-radius:var(--border-radius);color:var(--wa-color-neutral-on-quiet);font-size:inherit;cursor:pointer;transition:background-color var(--wa-transition-fast)}.close-button:hover{background:var(--wa-color-neutral-fill-quiet);color:var(--wa-color-text-normal)}.close-button:focus-visible{outline:2px solid var(--wa-color-brand-fill-loud);outline-offset:-2px}@keyframes toast-enter{from{opacity:0;transform:translateY(-12px) scale(0.96)}to{opacity:1;transform:none}}@keyframes toast-enter-up{from{opacity:0;transform:translateY(12px) scale(0.96)}to{opacity:1;transform:none}}@keyframes toast-exit{to{opacity:0;transform:scale(0.95)}}@keyframes toast-fade-in{from{opacity:0}to{opacity:1}}@media (prefers-reduced-motion: reduce){.toast-item,:host([data-placement^='bottom']) .toast-item{animation:toast-fade-in 120ms linear both}:host([data-leaving]) .toast-item{animation:none}}:host([data-entered]:not([data-leaving])) .toast-item{animation:none}`;

const IrToastItem = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.irDismiss = createEvent(this, "irDismiss");
    }
    get el() { return getElement(this); }
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
        return (h(Host, { key: '5f6b8d9b080d6f132f913f1220611220ff38887c', "data-leaving": this.leaving ? 'true' : undefined, "data-entered": this.entered ? 'true' : undefined, style: { '--accent-color': `var(--wa-color-${this.variant}-fill-loud)` } }, h("div", { key: '7b2092fec027d8800a24fdad7c91a517f31f12f9', class: 'toast-item', onMouseEnter: this.handleMouseEnter, onMouseLeave: this.handleMouseLeave, onFocusin: this.handleFocusIn, onFocusout: this.handleFocusOut }, h("div", { key: 'c5255090a853cd5b5ee4cb12f19081fbdbdbb443', part: "accent", class: "accent" }), h("div", { key: 'b4e9ad998bdff56b9d760b86e6cdc83deed34b86', part: "icon", class: "icon" }, h("slot", { key: 'fae7702f4846e46f03bda9f98cc789b6e93619df', name: "icon" })), h("div", { key: '6875dcb044c374df4cd9b67a0ece32d52a76022d', part: "content", class: "content" }, h("slot", { key: '02a7f5794a593b1f4e63b8757085e4115a55cfba' })), this.dismissible && (h("button", { key: '1c361d6f8e3bea47c4fe795e24daba3196f405dd', part: "close-button", class: "close-button", type: "button", "aria-label": "Close notification", onClick: this.handleClose }, this.hasTimer ? (h("wa-progress-ring", { part: "progress-ring", "aria-hidden": "true", exportparts: "\n                  base:progress-ring__base,\n                  label:progress-ring__label,\n                  track:progress-ring__track,\n                  indicator:progress-ring__indicator\n                ", value: this.progress }, h("wa-icon", { part: "close-icon", exportparts: "svg:close-icon__svg", name: "xmark", library: "system", variant: "solid", "aria-hidden": "true" }))) : (h("wa-icon", { part: "close-icon", exportparts: "svg:close-icon__svg", name: "xmark", library: "system", variant: "solid", "aria-hidden": "true" })))))));
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
        registerInstance(this, hostRef);
        this.toastAction = createEvent(this, "toastAction");
    }
    position = 'top-end';
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
        const title = detail.title || detail.description || 'Notification';
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
        this.announce(`${type}: ${toast.title}${toast.description ? '. ' + toast.description : ''}`, type === 'error' || type === 'danger');
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
        this.layer.setAttribute('dir', this.rtl ? 'rtl' : 'ltr');
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
        return h(Host, { key: '2f1289fca9959b51251762ed70cc6134363475a2' });
    }
};
IrToastProvider.style = irToastProviderCss();

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
        registerInstance(this, hostRef);
        this.validationChange = createEvent(this, "irValidationChange");
        this.valueChange = createEvent(this, "irValueChange");
    }
    get el() { return getElement(this); }
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
            .map(token => token.trim())
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
        return (h(Host, { key: '3dfe5322d24fab483716b2d3cb7ef5ca6b9f372a' }, h("slot", { key: '22e26c52126aa405b06d6eb50f6f1989f7758e04' }), !this.isValid && this.showErrorMessage && (h("span", { key: '3d37c994beb9d49c14d32838bbd235888cb95441', part: "error-message", class: "error-message" }, this.errorMessage))));
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
    Debounce(300)
], IrValidator.prototype, "scheduleValidation", null);
IrValidator.style = irValidatorCss();

export { IrCommon as ir_common, IrCustomButton as ir_custom_button, IrDialog as ir_dialog, IrEmptyState as ir_empty_state, IrExtraServicePriceInput as ir_extra_service_price_input, IrExtraServicesSettings as ir_extra_services_settings, IrInput as ir_input, IrInterceptor as ir_interceptor, IrLoadingScreen as ir_loading_screen, IrOtp as ir_otp, IrOtpModal as ir_otp_modal, IrPage as ir_page, IrSpinner as ir_spinner, IrToast as ir_toast, IrToastItem as ir_toast_item, IrToastProvider as ir_toast_provider, IrValidator as ir_validator };
