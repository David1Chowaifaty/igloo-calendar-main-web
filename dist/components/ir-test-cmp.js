import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';
import { D as sleep } from './utils.js';
import { c as colorVariants, d as defineCustomElement$6 } from './ir-icons2.js';
import { d as defineCustomElement$a } from './ac-pages-menu2.js';
import { d as defineCustomElement$9 } from './ir-button2.js';
import { d as defineCustomElement$8 } from './ir-custom-button2.js';
import { d as defineCustomElement$7 } from './ir-empty-state2.js';
import { d as defineCustomElement$5 } from './ir-input-text2.js';
import { d as defineCustomElement$4 } from './ir-m-combobox2.js';
import { d as defineCustomElement$3 } from './ir-notifications2.js';
import { d as defineCustomElement$2 } from './ir-select2.js';

const irTestCmpCss = ".sc-ir-test-cmp-h{display:block;height:100vh}.modern-navbar.sc-ir-test-cmp{background:#fff;box-shadow:0 2px 10px rgba(0, 0, 0, 0.1);position:sticky;top:0;z-index:1000;border-bottom:1px solid #e5e7eb}.overdue-banner.sc-ir-test-cmp{padding:0.5rem;background:var(--red);color:white;text-align:center;width:100%;display:block}.navbar-container.sc-ir-test-cmp{display:flex;align-items:center;justify-content:space-between;padding:0.5rem 1rem;margin:0 auto}.submenus.sc-ir-test-cmp{background:#104064 !important;width:100%}.navbar-left.sc-ir-test-cmp{display:flex;align-items:center;gap:1rem;width:100%}.custom-width.sc-ir-test-cmp{width:240px}.navbar-brand.sc-ir-test-cmp{font-weight:700;font-size:1.5rem;color:#1f2937}.hotel-name.sc-ir-test-cmp{color:#6b7280;font-size:0.875rem;font-weight:500}.navbar-center.sc-ir-test-cmp{margin-inline:auto}.navbar-right.sc-ir-test-cmp{display:flex;align-items:center}.nav-items.sc-ir-test-cmp{display:flex;list-style:none;margin:0;padding:0;gap:0.5rem}.nav-item.sc-ir-test-cmp{margin:0}.nav-link.sc-ir-test-cmp{display:flex;align-items:center;padding:0.5rem 1rem;text-decoration:none;font-weight:500;border-radius:0.375rem;transition:all 0.2s ease;cursor:pointer}.nav-link.sc-ir-test-cmp:hover{background-color:#f3f4f6;color:#1f2937;text-decoration:none}.mobile-menu-toggle.sc-ir-test-cmp{display:flex;align-items:center;justify-content:center;width:2.5rem;height:2.5rem;border:none;background:none;cursor:pointer;border-radius:0.375rem;transition:background-color 0.2s ease}.mobile-menu-toggle.sc-ir-test-cmp:hover{background-color:#f3f4f6}.hamburger-icon.sc-ir-test-cmp{display:flex;flex-direction:column;width:1.25rem;height:1rem;justify-content:space-between}.hamburger-icon.sc-ir-test-cmp span.sc-ir-test-cmp{display:block;height:2px;width:100%;background-color:#374151;border-radius:1px;transition:all 0.3s ease}.mobile-menu.sc-ir-test-cmp{position:fixed;top:0;left:0;width:100%;height:100vh;background:#fff;transform:translateX(-100%);transition:transform 0.3s ease;z-index:1001;overflow-y:auto}.mobile-menu.active.sc-ir-test-cmp{transform:translateX(0)}.mobile-menu-header.sc-ir-test-cmp{display:flex;align-items:center;justify-content:space-between;padding:1rem;border-bottom:1px solid #e5e7eb}.mobile-menu-header.sc-ir-test-cmp .hotel-name.sc-ir-test-cmp{font-size:1.125rem;font-weight:600;color:#1f2937}.close-menu.sc-ir-test-cmp{display:flex;align-items:center;justify-content:center;width:2.5rem;height:2.5rem;border:none;background:none;font-size:1.5rem;color:#6b7280;cursor:pointer;border-radius:0.375rem;transition:background-color 0.2s ease}.close-menu.sc-ir-test-cmp:hover{background-color:#f3f4f6;color:#374151}.mobile-search.sc-ir-test-cmp{padding:1rem;border-bottom:1px solid #e5e7eb}.mobile-nav-items.sc-ir-test-cmp{list-style:none;margin:0;padding:1rem 0}.mobile-nav-item.sc-ir-test-cmp{margin:0}.mobile-nav-link.sc-ir-test-cmp{display:block;padding:0.75rem 1rem;color:#374151;text-decoration:none;font-weight:500;transition:all 0.2s ease;cursor:pointer}.mobile-nav-link.sc-ir-test-cmp:hover{background-color:#f9fafb;color:#1f2937;text-decoration:none}@media (max-width: 767.98px){.navbar-container.sc-ir-test-cmp{padding:0.5rem 1rem}.navbar-brand.sc-ir-test-cmp{font-size:1.25rem}}.nav-item.sc-ir-test-cmp{color:#1f2937 !important}.ir-mega-menu.sc-ir-test-cmp{list-style:none;margin:0;padding:1rem;grid-template-columns:repeat(4, 1fr) !important;gap:1.25rem;background:#ffffff;border:1px solid #e5e7eb;border-radius:0.5rem}.ir-mega-menu.show.sc-ir-test-cmp{display:grid !important;width:max-content !important}.ir-mega-menu.sc-ir-test-cmp>li.sc-ir-test-cmp{list-style:none}.ir-mega-menu-column.sc-ir-test-cmp{list-style:none;margin:0;padding:0;display:flex;flex-direction:column;gap:0.25rem}.ir-mega-menu-row.title.sc-ir-test-cmp{font-weight:700;color:#0f172a;margin-bottom:0.375rem;font-size:0.825rem;text-transform:uppercase;letter-spacing:0.02em;padding:0rem 0.75rem}.ir-mega-menu-row.sc-ir-test-cmp a.sc-ir-test-cmp{display:block;padding:0.5rem 0.75rem;color:#334155;text-decoration:none;line-height:1;transition:background-color 0.2s ease, color 0.2s ease}.ir-mega-menu-row.sc-ir-test-cmp a.sc-ir-test-cmp:hover{background-color:#f4f5fa;color:#1e2122;text-decoration:none}@media (min-width: 576px){.ir-mega-menu.sc-ir-test-cmp{grid-template-columns:repeat(2, 1fr)}}@media (min-width: 992px){.ir-mega-menu.sc-ir-test-cmp{grid-template-columns:repeat(3, 1fr);padding:1.25rem 1.5rem;gap:1.5rem}}@media (min-width: 768px){.mobile-menu-toggle.sc-ir-test-cmp{display:none !important}.mobile-menu.sc-ir-test-cmp{display:none}.navbar-left.sc-ir-test-cmp{width:auto}}.ir-mega-menu.sc-ir-test-cmp{opacity:0;visibility:hidden;transform:translateY(-10px);transition:opacity 0.3s ease, transform 0.3s ease, visibility 0.3s ease;pointer-events:none;position:absolute;top:100%;left:0;z-index:1000}.ir-mega-menu.show.sc-ir-test-cmp{opacity:1;visibility:visible;transform:translateY(0);pointer-events:auto;display:grid !important}.payment-item.sc-ir-test-cmp{position:relative;width:100%;display:flex;border-bottom:1px solid gainsboro;padding:0.5rem 0.5rem;align-items:center;min-height:3rem}.payment-item.sc-ir-test-cmp:last-child{border-bottom:0}.payment-item.sc-ir-test-cmp:hover{background:#f4f5fa}.payment-item.sc-ir-test-cmp p.sc-ir-test-cmp{padding:0;margin:0;box-sizing:border-box}.payment-item.sc-ir-test-cmp .payment-actions.sc-ir-test-cmp{display:none;background:#f4f5fa;gap:0.5rem;justify-content:flex-end;align-items:center}.payment-body.sc-ir-test-cmp{display:flex;flex-direction:column;gap:0.25rem;flex:1 1 0%}.payment-fields.sc-ir-test-cmp{display:flex;align-items:center;gap:0.5rem}.payment-item.sc-ir-test-cmp:hover .payment-actions.sc-ir-test-cmp{display:flex}.payment-amount.sc-ir-test-cmp{font-weight:700}.payment-amount.is-credit.sc-ir-test-cmp{color:#629a4c}.payment-amount.is-debit.sc-ir-test-cmp{color:#ff4961}.payment-reference.sc-ir-test-cmp{width:300px;font-size:12px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}@media (min-width: 640px){.payment-reference.sc-ir-test-cmp{width:350px}}@media (min-width: 768px){.payment-reference.sc-ir-test-cmp{width:400px}}@media (min-width: 1024px){.payment-reference.sc-ir-test-cmp{width:350px}}.menu-footer.sc-ir-test-cmp{display:flex;flex-direction:column;box-sizing:border-box;width:100%;text-align:start}.menu-footer.sc-ir-test-cmp h4.sc-ir-test-cmp{font-family:var(--wa-font-family-heading);font-weight:var(--wa-font-weight-heading);line-height:var(--wa-line-height-condensed);text-wrap:balance;font-size:var(--wa-font-size-m)}";
const IrTestCmpStyle0 = irTestCmpCss;

const IrTestCmp$1 = /*@__PURE__*/ proxyCustomElement(class IrTestCmp extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
    }
    dates;
    selectedStaticOption;
    selectedCountry;
    selectedCustomOption;
    countryOptions = [];
    customOptions = [];
    isLoadingCountries = false;
    isLoadingCustom = false;
    customComboboxRef;
    staticOptions = [
        { value: 'option1', label: 'Option 1' },
        { value: 'option2', label: 'Option 2' },
        { value: 'option3', label: 'Option 3 ajnajanjanjna janajnjanjan najnajnajn ajnaj' },
        { value: 'option4', label: 'Option 4' },
        { value: 'option5', label: 'Option 5' },
    ];
    handleStaticOptionChange = (event) => {
        this.selectedStaticOption = event.detail;
    };
    handleCountryChange = (event) => {
        this.selectedCountry = event.detail;
    };
    handleCustomOptionChange = (event) => {
        this.selectedCustomOption = event.detail;
    };
    handleCountrySearch = async (event) => {
        const query = event.detail;
        if (!query || query.length < 2) {
            this.countryOptions = [];
            return;
        }
        this.isLoadingCountries = true;
        try {
            const response = await fetch(`https://restcountries.com/v3.1/name/${encodeURIComponent(query)}`);
            if (response.ok) {
                const countries = await response.json();
                this.countryOptions = countries
                    .map(country => ({
                    value: country.cca2,
                    label: country.name.common,
                }))
                    .slice(0, 10); // Limit to 10 results
            }
            else {
                this.countryOptions = [];
            }
        }
        catch (error) {
            console.error('Error fetching countries:', error);
            this.countryOptions = [];
        }
        finally {
            this.isLoadingCountries = false;
        }
    };
    handleCustomSearch = async (event) => {
        const query = event.detail;
        if (!query || query.length < 2) {
            this.customOptions = [];
            return;
        }
        this.isLoadingCustom = true;
        // Simulate API call with timeout
        setTimeout(() => {
            this.customOptions = [
                { value: `custom-${query}-1`, label: `Custom Result 1 for "${query}"` },
                { value: `custom-${query}-2`, label: `Custom Result 2 for "${query}"` },
                { value: `custom-${query}-3`, label: `Custom Result 3 for "${query}"` },
            ];
            this.isLoadingCustom = false;
        }, 500);
    };
    handleCustomOptionClick = (option) => {
        if (this.customComboboxRef) {
            this.customComboboxRef.selectOptionFromSlot(option);
        }
    };
    notificationCount = 0;
    isMobileMenuOpen = false;
    toggleMobileMenu = () => {
        this.isMobileMenuOpen = !this.isMobileMenuOpen;
    };
    pages = [
        {
            label: 'Dashboard',
            href: 'acdashboard.aspx',
            id: 'Li_AcDashboard',
            icon: 'la la-dashboard',
            isNew: true,
        },
        {
            label: 'Frontdesk',
            href: 'frontdesk.aspx',
            id: 'Li_FrontDesk',
            icon: 'la la-calendar',
        },
        {
            label: 'Inventory',
            href: 'acratesallotment.aspx',
            id: 'Li_AcRatesAllotment',
            icon: 'la la-list',
        },
        {
            label: 'Marketing',
            id: 'Li_AcPromotions',
            icon: 'la la-rocket',
            href: '#',
            subMenus: [
                {
                    label: 'Discounts',
                    href: 'acpromodiscounts.aspx',
                },
                {
                    label: 'Automated Emails',
                    href: 'acautomatedemails.aspx',
                    id: 'Li_AutomatedEmails',
                },
            ],
        },
        {
            label: 'Bookings',
            href: 'acbookinglist.aspx',
            icon: 'la la-suitcase',
        },
        {
            href: '#',
            label: 'Settings',
            id: 'Li_AcSetup',
            icon: 'la la-building',
            isNew: true,
            subMenus: [
                {
                    label: 'General Info',
                    href: 'acgeneral.aspx',
                },
                {
                    label: 'Facilities & Services',
                    href: 'acamenities.aspx',
                },
                {
                    label: 'Descriptions',
                    href: 'acdescriptions.aspx',
                    id: 'Li_AcDesc',
                },
                {
                    label: 'Policies',
                    href: 'acconcan.aspx',
                },
                {
                    label: 'Money Matters',
                    href: 'accommtax.aspx',
                },
                {
                    label: 'Rooms & Rate Plans',
                    href: 'acroomcategories.aspx',
                    className: 'Li_AcRooming anchor_AcRooming',
                },
                {
                    label: 'Housekeeping & Check-in Setup',
                    href: 'ACHousekeeping.aspx',
                    id: 'Li_Housekeeping',
                    isNew: true,
                },
                {
                    label: 'Agents and Groups',
                    href: 'actravelagents.aspx',
                },
                {
                    label: 'Image Gallery',
                    href: 'acimagegallery.aspx',
                    className: 'Li_AcRooming',
                },
                {
                    label: 'Pickup Services',
                    href: 'acpickups.aspx',
                },
                {
                    label: 'Integrations',
                    href: 'acintegrations.aspx',
                },
                {
                    label: 'iSPACE',
                    href: 'acthemingwebsite.aspx',
                },
                {
                    label: 'iCHANNEL',
                    href: 'acigloochannel.aspx',
                },
                {
                    label: 'iSWITCH',
                    href: 'iSwitch.aspx',
                    id: 'Li_iSwitch',
                },
            ],
        },
        {
            href: '#',
            label: 'Reports',
            id: 'Li_AcAnalytics',
            icon: 'la la-bar-chart',
            isNew: true,
            subMenus: [
                {
                    label: 'Housekeeping Tasks',
                    href: 'ACHousekeepingTasks.aspx',
                    id: 'Li_HousekeepingTasks',
                },
                {
                    label: 'Guests',
                    href: 'acmemberlist.aspx',
                },
                {
                    label: 'Sales Statistics',
                    href: 'acsalesstatistics.aspx',
                },
                {
                    label: 'Sales by Channel',
                    href: 'acsalesbychannel.aspx',
                    isNew: true,
                },
                {
                    label: 'Sales by Country',
                    href: 'acsalesbycountry.aspx',
                    isNew: true,
                },
                {
                    label: 'Daily Occupancy',
                    href: 'ACDailyOccupancy.aspx',
                    id: 'Li_DailyOccupancy',
                },
                {
                    label: 'Accounting Report',
                    href: 'acaccountingreport.aspx',
                },
            ],
        },
    ];
    // private notifications = [
    //   {
    //     id: '1',
    //     type: 'info',
    //     title: 'Welcome!',
    //     message: 'Your account has been created successfully.',
    //     createdAt: Date.now(),
    //     read: false,
    //     dismissible: true,
    //   },
    //   {
    //     id: '2',
    //     type: 'warning',
    //     title: 'Storage Almost Full',
    //     message: 'You have used 90% of your storage. Please upgrade.',
    //     createdAt: Date.now(),
    //     read: false,
    //     dismissible: true,
    //     link: { href: '#', text: 'Upgrade now' },
    //   },
    //   {
    //     id: '3',
    //     type: 'success',
    //     title: 'Payment Received',
    //     message: 'Your invoice has been paid. Thank you!',
    //     createdAt: Date.now(),
    //     read: true,
    //     dismissible: true,
    //   },
    // ];
    showMegaMenu;
    render() {
        return (h(Host, { key: '0e593d22ce995cc8baf893d51dd5cece036e1e5b' }, h("nav", { key: 'c52ad015c569eb128e2e368f4bcf4d906037c0dc', class: "modern-navbar" }, h("span", { key: '57435f3b43c7d5afe5a57447a545429f1fabf5e8', class: "overdue-banner" }, "Overdue $300"), h("div", { key: '971d8658751aa4ae083bc6ad0017a35e60e471b6', class: "navbar-container" }, h("div", { key: '4ccbe62f789e50c6392d2cd86a9586ce736356e5', class: "navbar-left" }, h("button", { key: '0b8418c1b43798d4e58b3bc4ae8c69312d1f45e0', class: "mobile-menu-toggle d-md-none", onClick: () => this.toggleMobileMenu() }, h("span", { key: '2b1f7e0085cdbcf817607020d4b118945408131a', class: "hamburger-icon" }, h("span", { key: '2020b7ac62efac038d156a98ec04cc30d0fd8ed4' }), h("span", { key: '9445c8701b6048ce9ce2b12ef6f336bb7aeb9acb' }), h("span", { key: 'c8a1c02efce5517f4b2117ee1b70f39aa792cf37' }))), h("div", { key: '2e8fb1a4bd8317637cde63409f4f61da5e3f2688', class: "navbar-brand" }, "Logo"), h("div", { key: 'bb854b7bc049cca91352b4bcea758a0f11241be9', class: "d-none d-md-flex " }, h("ir-m-combobox", { key: '8a0a5c509bbebeb5fe15703c82c9c4e3cd78acde', style: { '--ir-combobox-width': 'max-content' }, placeholder: "Find property", dataMode: "static", options: this.staticOptions, onOptionChange: this.handleStaticOptionChange })), h("div", { key: '69ea7f1fb5228bbc89f6273c30f04fdfc1fa1c9f', class: "hotel-name d-none d-md-block" }, "Hotel Name"), h("div", { key: '7b74f338b54b04d67241cdd20406ae25901a0ea8', class: "ml-auto d-md-none" }, h("ir-notifications", { key: '4ea9e7d49a802a289ac82ed6e4015faea9acbdb7' }))), h("div", { key: 'dc5b2ac5b2f3b925e2cc5e26287e36b38a1ebcb7', class: "navbar-center d-none d-md-flex flex-fill mx-auto" }, h("ir-m-combobox", { key: '359c88b0cbaed361525142a9d2ea37251eccb207', placeholder: "Search...", dataMode: "static", options: this.staticOptions, onOptionChange: this.handleStaticOptionChange })), h("div", { key: '232515262bff40b7057be31cb3fc5e7c64acae69', class: "navbar-right" }, h("ul", { key: 'c608a784175ee77b5fab9d7adff203fe708ec0a7', class: "nav-items d-none d-md-flex" }, h("li", { key: '9cab310b60d7c275c492a13faeaf072981fcc765', class: "nav-item dropdown" }, h("a", { key: 'c878a0b16fb34be03cfc06be157dc0f3156b5f9b', "data-reference": "parent", href: "#", role: "button", class: "nav-link", "data-toggle": "dropdown", "aria-expanded": "false" }, "a"), h("ul", { key: 'a3e3bc0ef8fa54a96b336e9fcc644846ae699503', class: `ir-mega-menu mx-auto dropdown-menu-right dropdown-menu    w-100 shadow-sm` }, h("li", { key: 'f9333809b2f22635eadd0d22cd2cc3e6718aa256' }, h("ul", { key: '04c848ca17c6aa1f1a379f27b335497fc2f453e8', class: "ir-mega-menu-column" }, h("li", { key: 'b202732bc0eb65539db44cf30e9f34b3053ab766', class: "ir-mega-menu-row title" }, "Parameters"), h("li", { key: 'b36db2006b3ae6364bd835fd66bce1ac18007f05', class: "ir-mega-menu-row" }, h("a", { key: '01465f83fd7ed706b869ecea6724335f525d9fe2', href: "userinline.aspx" }, "Users List")), h("li", { key: '9fcaa3ba58965653f41d6f2df3fb1ae3668b5385', class: "ir-mega-menu-row" }, h("a", { key: 'e64b040ad7af1367b13ae89d667353540ea20dd0', href: "languageinline.aspx" }, "System Languages")), h("li", { key: '9537e782810f69f07489047ce3cd685011a5dfba', class: "ir-mega-menu-row" }, h("a", { key: '4d2bce94f0280b7c4fcced17083106c64a444bdf', href: "countryinline.aspx" }, "Countries")), h("li", { key: 'd0787659145700939231c2f9edc37476d4fca07e', class: "ir-mega-menu-row" }, h("a", { key: '7582f1f9a686295ed59361e0b1a9eeca395056d4', href: "level2inline.aspx" }, "Country Level 2")), h("li", { key: 'fae52e9d104f4782e0f6c7b4ba3954b66b869dbc', class: "ir-mega-menu-row" }, h("a", { key: '88e974728eef2c7dfc7c8cac8a137604bd1d3dac', href: "cardinline.aspx" }, "Credit Cards")), h("li", { key: '0ec3586f3c77b2f8efbe55c042cde8c08ea42554', class: "ir-mega-menu-row" }, h("a", { key: 'bb409fe1fe2cd8ae7231a86fa9f256cd2dc095e3', href: "hotel_chaininline.aspx" }, "Hotel Chains")), h("li", { key: 'f25f96d23b9e01106f6be383c7fb6b1050270e88', class: "ir-mega-menu-row" }, h("a", { key: 'bdbe77ddc4da4616663884cc8a0eccca8fa93427', href: "currencyinline.aspx" }, "Currencies")), h("li", { key: 'ced9574cb373e150f2afff520c7d0ad01347d6e1', class: "ir-mega-menu-row" }, h("a", { key: '235fb67c19d8a73c8d1a4dfdddd38cdd9d36b357', href: "amenityinline.aspx" }, "Amenities")), h("li", { key: '4bdb51d8004b611901c984df4171ddf9886e9ffd', class: "ir-mega-menu-row" }, h("a", { key: '67ba3549df020e1d33cae1ef20e526b82a01b619', href: "foodinline.aspx" }, "Food")), h("li", { key: '0c43a70de1053bbc51de553747ad7f8aa27ce5a5', class: "ir-mega-menu-row" }, h("a", { key: '2b4e2c1de71c9aef2a2f3ae8e18b0b77954cae91', href: "beddinginline.aspx" }, "Bedding")), h("li", { key: '866891ef7b77bc1bd4816b8a4ea3ebcd4934d260', class: "ir-mega-menu-row" }, h("a", { key: '6e1ecbe675d5fd340891290e525eb01280959967', href: "setupinline.aspx" }, "Setup Table")), h("li", { key: '47e3ba5dd0a6593e178b12a0d60aefcdd23c7893', class: "ir-mega-menu-row" }, h("a", { key: '5c8d7f71ca19a0c859c4cbcfbdda8522f05edd03', href: "gwedit.aspx" }, "Payment Gateways")), h("li", { key: '8973dae0f44934cdaefc489179931abf8442357f', class: "ir-mega-menu-row" }, h("a", { key: 'f9608575a307f690695c475790440ac97f975bd0', href: "channelmanager.aspx" }, "Channel Manager")))), h("li", { key: '384c178c5345d741aa97a7c0832a0015a2db2e66' }, h("ul", { key: 'c7335029f14560a5fbdc4289cc9f97e70ef82c6c', class: "ir-mega-menu-column" }, h("li", { key: '6395d0c57c3411fade484076d336d05f15240f05', class: "ir-mega-menu-row title" }, "Main"), h("li", { key: 'bb8e647216cafe7b45e6c610c8970155e21235e5', class: "ir-mega-menu-row" }, h("a", { key: 'ebe286a9cc135300eb932cceef57ec1c3da42276', href: "mpolist.aspx" }, "MPOs")), h("li", { key: '765ef98899f193c19e2fd26b029b1d899afea1e5', class: "ir-mega-menu-row" }, h("a", { key: '6c4fe829536c4c41288f5d538080b2053e9d253e', href: "aclist.aspx" }, "Properties")), h("li", { key: '6583caa1e3a586642b35cbdcdbd67678c21c8674', class: "ir-mega-menu-row" }, h("a", { key: 'b0cd452d88cecc687855475309b6e360c9f68550', href: "acbookinglist.aspx?MODE=MPO" }, "Bookings")), h("li", { key: 'fff3d4c6083114463e752335d28fbd60f01a39d5', class: "ir-mega-menu-row" }, h("a", { key: '094326fc95d1e4a196d347bf63c085594f8ddc0c', href: "mpoaffiliateproperties.aspx" }, "MPO Affiliate Properties")), h("li", { key: 'e570ed1cfa848d1f5972ad6d25740bd09103d16c', class: "ir-mega-menu-row" }, h("a", { key: '2e9f46865a3dc08e011fa577d28e2281f81470ae', href: "acratesallotment.aspx?VIEW_MODE=CV" }, "MPO Combined Inventory")), h("li", { key: 'ddb7b29067ae7f2472928c7a39e17086e02f70b9', class: "ir-mega-menu-row" }, h("a", { key: 'ac5cc8b441b764a22693900e10c193c65130a97f', href: "acbookinglist.aspx?VIEW_MODE=CV" }, "MPO Combined Bookings")), h("li", { key: '59f5e9482931f3917e7148e70285da041c0d376b', class: "ir-mega-menu-row" }, h("a", { key: 'b8cc99bf3fd0488233bec131b924838a59ecf03b', href: "Acmemberlist.aspx?VIEW_MODE=CV" }, "MPO Combined Guests")), h("li", { key: '150627c9259861b2245ad47cf222aa6e6d0a33ea', class: "ir-mega-menu-row" }, h("a", { key: 'd6c5f3521feb8af900b557ba3d18f67be49d6b57', href: "mpobillingreport.aspx" }, "MPO Billing Report")), h("li", { key: '67488e0ed0bd9b7de301b03eb24e36555a847ac4', class: "ir-mega-menu-row" }, h("a", { key: 'f9d3da2e2e073fc9b48c0b12832792e0f8a1edc8', href: "Acmemberlist.aspx" }, "Guests")), h("li", { key: 'ddeb4c7a59d04d51a942ad9aa9d27a1aa4704a63', class: "ir-mega-menu-row" }, h("a", { key: '53f3fc1c597aa6971fb4e7e1ef0b708430ad27a5', href: "acbookinglist.aspx" }, "Bookings")), h("li", { key: 'f18ecc3c56e83a697661f35f47ed9b574ebf730c', class: "ir-mega-menu-row" }, h("a", { key: 'ce113052610de9c75dca04b733d7c6e8dce619d7', href: "billing.aspx" }, "Billing")))), h("li", { key: 'cc8063968b755c96552ed87854cb43b082d4e4c5' }, h("ul", { key: 'a0fede74616696f13bdca79f8a358e0a294a56a8', class: "ir-mega-menu-column" }, h("li", { key: 'aa8b1350f0cac1c2244b7ddeb1a1472a108ea681', class: "ir-mega-menu-row title" }, "Locations"), h("li", { key: '4f8093d6461d92fbc7999d3ade4309dcbaec1c7b', class: "ir-mega-menu-row" }, h("a", { key: 'ce54bb5fb8a2360596eb326d343389623d3f804d', href: "poicategoriesinline.aspx" }, "Types")), h("li", { key: '5d9ff86677eadf0b3d3a47e335641f16d516786e', class: "ir-mega-menu-row" }, h("a", { key: '82989c53a1229a9e0a00b4928d81d2018fdf0336', href: "poilist.aspx" }, "List")))), h("li", { key: '8584abba208ecddd0e6abb9bac2fcf95e51f3cfc' }, h("ul", { key: '514a2354b8ae4f2f856a8dab93f762815f43715a', class: "ir-mega-menu-column" }, h("li", { key: '6f4144cfc55bdc50d6bc69b04c2673ff28a8b4f2', class: "ir-mega-menu-row title" }, "Referrers"), h("li", { key: 'd51980f5bbdbd345163d103e5d7f2029f84a287d', class: "ir-mega-menu-row" }, h("a", { key: '84ed44296b9d026bfffc6037962884f418658cbb', href: "affiliatelist.aspx" }, "Affiliates")), h("li", { key: '09349b8815feb14ac562a23b07c44d25aa78a56c', class: "ir-mega-menu-row" }, h("a", { key: '1c82548fc9c5d33d0b287f61cbb5065ebd61988a', href: "travelagentslist.aspx" }, "Travel Agents ...NOT USED")))))), h("li", { key: '19885db45419a04729cb0c06fab36594b7e784ff', class: "nav-item" }, h("a", { key: 'db85fbb2776bb0269a7839617257eb47f408bc15', href: "#", class: "nav-link" }, "b")), h("li", { key: '518da7f04c82d5f0b5d9d7c17d6994c64e8f575d', class: "nav-item" }, h("a", { key: 'e2ebed532a1ee7e0cdb06a2d4b9b3c8041cdf77e', href: "#", class: "nav-link" }, "c")), h("li", { key: 'b7d0a828bc670247a33b1d6a1894815821f8d499', class: "nav-item" }, h("a", { key: '27cc3dc7657941390cf5377deb14377dc7b91a84', href: "#", class: "nav-link" }, "d")), h("li", { key: '339ed43f2e2599518cdefa36f2fa8caeb1042d27', class: "nav-item" }, h("div", { key: '7a88e082656e3b902fa9ec17b5907e0251c0dc3d', class: "d-flex align-items-center justify-content-center", style: { marginTop: '2px' } }, h("ir-notifications", { key: 'd4b21ab7f37de142d528215ee97952a8e05d4000' }))))), h("div", { key: 'dbb8a72da03641414de2c799513de9ac45c8f09f', class: `mobile-menu ${this.isMobileMenuOpen ? 'active' : ''}` }, h("div", { key: '0ad62186814586db7cde95bbdac701299ec1e4f9', class: "mobile-menu-header" }, h("div", { key: '6b945fe01c8b9999bc3ed085c1b45ce2336e5821', class: "hotel-name" }, "Hotel Name"), h("button", { key: '344485439d65968461b3415f61d355acfd7a6c0f', class: "close-menu", onClick: () => this.toggleMobileMenu() }, "\u00D7")), h("div", { key: '5b64fe04a1cc50dc216a194f5118e42e9d0ce10e', class: "mobile-search" }, h("ir-m-combobox", { key: 'd4496cac44131f7b9b4006aba6b8f5bc3656b898', placeholder: "Search...", dataMode: "static", options: this.staticOptions, onOptionChange: this.handleStaticOptionChange })), h("ac-pages-menu", { key: 'a749f491c3503811c5fe9525c6e0fc5b5a1de7aa', location: "sheet", "onLink-clicked": async (e) => {
                await sleep(1000);
                window.location.href = e.detail.target.href;
            }, pages: this.pages }))), h("div", { key: '212861325fb77964a9f27bcd7c66d0ae285a1cad', class: "submenus d-none d-md-block" }, h("ac-pages-menu", { key: '9dc5f6720c7963c3ef7701afe7fae68fe5ded65b', pages: this.pages }))), h("section", { key: '449479e8c6e4dc8e3da6409bf804b1aa307f2d44', class: "p-2" }, h("div", { key: '0dff013c56cdd3f5031280de37dd77172e27f14f', class: "row g-3" }, h("div", { key: 'cc79731d5e30465e1c4096f1064021651b32b471', class: "col-md-3" }, h("h5", { key: '80f84b7117475d58ca1837656a13ca4b0df21594' }, "Static Options Example"), h("ir-m-combobox", { key: '2d4cd7baa35d31b433b7efac3d57e3c708e1022b', placeholder: "Select an option...", dataMode: "static", options: this.staticOptions, onOptionChange: this.handleStaticOptionChange }, h("svg", { key: '0438178463ed315123000867513b28dc224c3142', xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 640 640", slot: "prefix" }, h("path", { key: '65792bcf5632341f8da5aa7a8a3d383304b58b75', d: "M480 272C480 317.9 465.1 360.3 440 394.7L566.6 521.4C579.1 533.9 579.1 554.2 566.6 566.7C554.1 579.2 533.8 579.2 521.3 566.7L394.7 440C360.3 465.1 317.9 480 272 480C157.1 480 64 386.9 64 272C64 157.1 157.1 64 272 64C386.9 64 480 157.1 480 272zM272 416C351.5 416 416 351.5 416 272C416 192.5 351.5 128 272 128C192.5 128 128 192.5 128 272C128 351.5 192.5 416 272 416z" }))), this.selectedStaticOption && h("p", { key: 'ed7aebe8c605b5ae87c2156c7b7062a4cb0e99f4', class: "mt-2 text-muted" }, "Selected: ", this.selectedStaticOption.label)), h("div", { key: 'd90fddba5902befc132eab82ad74cfafd0dd1b3f', class: "col-md-3" }, h("h5", { key: 'f13ae90bfb16579a13e0540f5c998d242898f724' }, "External API - Countries"), h("ir-m-combobox", { key: '124f5554bad0e8ba198adfb8ca41a630d3b36172', placeholder: "Search countries...", dataMode: "external", options: this.countryOptions, loading: this.isLoadingCountries, debounceDelay: 300, onSearchQuery: this.handleCountrySearch, onOptionChange: this.handleCountryChange }), this.selectedCountry && h("p", { key: '98337614b7ccef81e6740cdc03e0ce81677b54d4', class: "mt-2 text-muted" }, "Selected: ", this.selectedCountry.label)), h("div", { key: '93eb10407d61c306deb383c7964280aa212c3ea7', class: "col-md-3" }, h("h5", { key: '7a5c7fd9cf12af14874bf96bd42830b8b925c753' }, "Custom Dropdown Content"), h("ir-m-combobox", { key: 'd99c750e636f9f316f56b95022b3f7efd898fb44', class: "custom-width", ref: el => (this.customComboboxRef = el), placeholder: "Search with custom dropdown...", dataMode: "external", options: this.customOptions, loading: this.isLoadingCustom, useSlot: true, debounceDelay: 500, onSearchQuery: this.handleCustomSearch, onOptionChange: this.handleCustomOptionChange }, h("div", { key: '0b9600ec12e756cfca04643e880144027d232341', slot: "dropdown-content" }, this.isLoadingCustom && h("div", { key: '161088114388f1d7cc938c80e329f81a2356b67d', class: "dropdown-item" }, "\uD83D\uDD04 Loading custom results..."), !this.isLoadingCustom && this.customOptions.length === 0 && h("div", { key: '69defef2d13dd89632d0ec8b40d7bffb90c53188', class: "dropdown-item" }, "\uD83D\uDD0D Type to search..."), !this.isLoadingCustom &&
            this.customOptions.map((option, index) => (h("div", { key: index, class: "dropdown-item d-flex align-items-center", "data-option": option.value, "data-label": option.label, onClick: () => this.handleCustomOptionClick(option), onMouseEnter: e => {
                    const element = e.target;
                    const slotIndex = element.getAttribute('data-slot-index');
                    if (slotIndex && this.customComboboxRef) {
                        this.customComboboxRef.focusedIndex = parseInt(slotIndex);
                    }
                }, style: { cursor: 'pointer' } }, h("span", { class: "me-2" }, "\u2B50"), h("div", null, h("div", { class: "fw-bold" }, option.label), h("small", { class: "text-muted" }, "Custom option with ID: ", option.value))))))), this.selectedCustomOption && h("p", { key: '9806974b0fcd8ec58dd2c4f20e1f58225dd04637', class: "mt-2 text-muted" }, "Selected: ", this.selectedCustomOption.label))), h("div", { key: '88de1fe20db6cc020e1d522313eb57e9eb19bb60', class: 'd-flex align-items-center my-1', style: { gap: '1rem' } }, h("button", { key: '68685a98fe51855505e11f1199128a23dd8d8431', class: "btn btn-primary", onClick: () => (this.notificationCount += 1) }, "+"), h("button", { key: '8ebb5fec390be89724548597da5f61ee5dc3a085', class: "btn btn-primary", onClick: () => (this.notificationCount -= 1) }, "-")), h("ir-input-text", { key: 'acfb5431f727cc2550f086f16c03f0b33444883c', variant: "floating-label", class: "my-text-input", label: "First name" }, h("svg", { key: 'fc133c97eff88da74a6a6c4431dbbb6fe77d2fd4', xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 640 640", slot: "prefix" }, h("path", { key: '291ec87d442f8a3b74ddc259b19acfbd46c0f77e', d: "M480 272C480 317.9 465.1 360.3 440 394.7L566.6 521.4C579.1 533.9 579.1 554.2 566.6 566.7C554.1 579.2 533.8 579.2 521.3 566.7L394.7 440C360.3 465.1 317.9 480 272 480C157.1 480 64 386.9 64 272C64 157.1 157.1 64 272 64C386.9 64 480 157.1 480 272zM272 416C351.5 416 416 351.5 416 272C416 192.5 351.5 128 272 128C192.5 128 128 192.5 128 272C128 351.5 192.5 416 272 416z" })), h("svg", { key: 'f47196c9dd1078b5e50522ecaaab401433136c86', slot: "suffix", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 640 640" }, h("path", { key: 'a834535e8724ab93f6b97b6a22fdbe1e5e1d7b17', d: "M264 112L376 112C380.4 112 384 115.6 384 120L384 160L256 160L256 120C256 115.6 259.6 112 264 112zM208 120L208 544L432 544L432 120C432 89.1 406.9 64 376 64L264 64C233.1 64 208 89.1 208 120zM480 160L480 544L512 544C547.3 544 576 515.3 576 480L576 224C576 188.7 547.3 160 512 160L480 160zM160 544L160 160L128 160C92.7 160 64 188.7 64 224L64 480C64 515.3 92.7 544 128 544L160 544z" }))), h("ir-select", { key: 'bd8f0b557ce3528f84cd4b2cef877c9e330bfb5c', "floating-label": true, label: "Hello", data: [{ value: '1', text: '1' }] }), h("div", { key: '975a108a51deba3d7f8987586ca33baab87d4fca', class: "my-2" }), h("ir-select", { key: '5fb36149f0bc0147d6b4bb57166ea0313d282f9f', label: "Hello", data: [{ value: '1', text: '1' }] }), h("div", { key: '3205323ee3f2bf82649fbcdde35d7def5b404e72', class: "my-2" }), h("ir-select", { key: 'c10a74835aa1663f0a2597d470dd945a241e1af7', data: [{ value: '1', text: '1' }] }), h("div", { key: '755c1b8a3c86b3fa656527594fc335494646d50b', class: "card p-1" }, [
            { id: 'REQ1000', cause: 'Reservation deposit', amount: 363.02, type: 'Credit', date: '2025-08-12', reference: 'INV-2025-0812-001' },
            { id: 'REQ1001', cause: 'Housekeeping fee', amount: 355.45, type: 'Debit', date: '2025-08-16' },
            { id: 'REQ1002', cause: 'Mini-bar', amount: 360.49, type: 'Debit', date: '2025-08-08', reference: 'RM120-MB-8842' },
            { id: 'REQ1003', cause: 'Refund – canceled tour', amount: 294.34, type: 'Credit', date: '2025-08-16' },
            { id: 'REQ1004', cause: 'Late checkout', amount: 80.97, type: 'Credit', date: '2025-08-04', reference: 'CHKO-2025-0804' },
            { id: 'REQ1005', cause: 'Airport pickup', amount: 346.6, type: 'Credit', date: '2025-08-17' },
            { id: 'REQ1006', cause: 'Room service', amount: 430.52, type: 'Credit', date: '2025-08-05', reference: 'RSV-7421' },
            { id: 'REQ1007', cause: 'City tax', amount: 89.39, type: 'Credit', date: '2025-08-09' },
            { id: 'REQ1008', cause: 'Laundry', amount: 49.93, type: 'Credit', date: '2025-07-30', reference: 'LND-20541' },
            { id: 'REQ1009', cause: 'Spa treatment', amount: 469.32, type: 'Credit', date: '2025-08-13' },
        ].map(row => (h("div", { key: row.id, class: 'payment-item' }, h("div", { class: "payment-body" }, h("div", { class: "payment-fields" }, h("p", null, h("b", null, row.cause)), h("p", { class: "text-muted" }, row.date)), row.reference && (h("p", { class: "payment-reference text-muted" }, h("b", null, "Ref: "), row?.reference))), h("div", { class: "d-flex align-items-center justify-content-between", style: { gap: '0.5rem' } }, h("p", { class: `payment-amount ${row.type === 'Credit' ? 'is-credit' : 'is-debit'}` }, row.type === 'Credit' ? '+' : '-', "$US ", row.amount), h("div", { class: "payment-actions" }, h("ir-button", { variant: "icon", icon_name: "save", style: colorVariants.secondary }), h("ir-button", { variant: "icon", style: colorVariants.danger, icon_name: "trash" }))))))))));
    }
    static get style() { return IrTestCmpStyle0; }
}, [2, "ir-test-cmp", {
        "dates": [32],
        "selectedStaticOption": [32],
        "selectedCountry": [32],
        "selectedCustomOption": [32],
        "countryOptions": [32],
        "customOptions": [32],
        "isLoadingCountries": [32],
        "isLoadingCustom": [32],
        "notificationCount": [32],
        "isMobileMenuOpen": [32],
        "showMegaMenu": [32]
    }]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["ir-test-cmp", "ac-pages-menu", "ir-button", "ir-custom-button", "ir-empty-state", "ir-icons", "ir-input-text", "ir-m-combobox", "ir-notifications", "ir-select"];
    components.forEach(tagName => { switch (tagName) {
        case "ir-test-cmp":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, IrTestCmp$1);
            }
            break;
        case "ac-pages-menu":
            if (!customElements.get(tagName)) {
                defineCustomElement$a();
            }
            break;
        case "ir-button":
            if (!customElements.get(tagName)) {
                defineCustomElement$9();
            }
            break;
        case "ir-custom-button":
            if (!customElements.get(tagName)) {
                defineCustomElement$8();
            }
            break;
        case "ir-empty-state":
            if (!customElements.get(tagName)) {
                defineCustomElement$7();
            }
            break;
        case "ir-icons":
            if (!customElements.get(tagName)) {
                defineCustomElement$6();
            }
            break;
        case "ir-input-text":
            if (!customElements.get(tagName)) {
                defineCustomElement$5();
            }
            break;
        case "ir-m-combobox":
            if (!customElements.get(tagName)) {
                defineCustomElement$4();
            }
            break;
        case "ir-notifications":
            if (!customElements.get(tagName)) {
                defineCustomElement$3();
            }
            break;
        case "ir-select":
            if (!customElements.get(tagName)) {
                defineCustomElement$2();
            }
            break;
    } });
}

const IrTestCmp = IrTestCmp$1;
const defineCustomElement = defineCustomElement$1;

export { IrTestCmp, defineCustomElement };

//# sourceMappingURL=ir-test-cmp.js.map