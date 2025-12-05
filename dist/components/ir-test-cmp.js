import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';
import { S as sleep } from './utils.js';
import { c as colorVariants, d as defineCustomElement$6 } from './ir-icons2.js';
import { d as defineCustomElement$8 } from './ac-pages-menu2.js';
import { d as defineCustomElement$7 } from './ir-button2.js';
import { d as defineCustomElement$5 } from './ir-input-text2.js';
import { d as defineCustomElement$4 } from './ir-m-combobox2.js';
import { d as defineCustomElement$3 } from './ir-notifications2.js';
import { d as defineCustomElement$2 } from './ir-select2.js';

const irTestCmpCss = ".sc-ir-test-cmp-h{display:block;height:100vh}.modern-navbar.sc-ir-test-cmp{background:#fff;box-shadow:0 2px 10px rgba(0, 0, 0, 0.1);position:sticky;top:0;z-index:1000;border-bottom:1px solid #e5e7eb}.overdue-banner.sc-ir-test-cmp{padding:0.5rem;background:var(--red);color:white;text-align:center;width:100%;display:block}.navbar-container.sc-ir-test-cmp{display:flex;align-items:center;justify-content:space-between;padding:0.5rem 1rem;margin:0 auto}.submenus.sc-ir-test-cmp{background:#104064 !important;width:100%}.navbar-left.sc-ir-test-cmp{display:flex;align-items:center;gap:1rem;width:100%}.custom-width.sc-ir-test-cmp{width:240px}.navbar-brand.sc-ir-test-cmp{font-weight:700;font-size:1.5rem;color:#1f2937}.hotel-name.sc-ir-test-cmp{color:#6b7280;font-size:0.875rem;font-weight:500}.navbar-center.sc-ir-test-cmp{margin-inline:auto}.navbar-right.sc-ir-test-cmp{display:flex;align-items:center}.nav-items.sc-ir-test-cmp{display:flex;list-style:none;margin:0;padding:0;gap:0.5rem}.nav-item.sc-ir-test-cmp{margin:0}.nav-link.sc-ir-test-cmp{display:flex;align-items:center;padding:0.5rem 1rem;text-decoration:none;font-weight:500;border-radius:0.375rem;transition:all 0.2s ease;cursor:pointer}.nav-link.sc-ir-test-cmp:hover{background-color:#f3f4f6;color:#1f2937;text-decoration:none}.mobile-menu-toggle.sc-ir-test-cmp{display:flex;align-items:center;justify-content:center;width:2.5rem;height:2.5rem;border:none;background:none;cursor:pointer;border-radius:0.375rem;transition:background-color 0.2s ease}.mobile-menu-toggle.sc-ir-test-cmp:hover{background-color:#f3f4f6}.hamburger-icon.sc-ir-test-cmp{display:flex;flex-direction:column;width:1.25rem;height:1rem;justify-content:space-between}.hamburger-icon.sc-ir-test-cmp span.sc-ir-test-cmp{display:block;height:2px;width:100%;background-color:#374151;border-radius:1px;transition:all 0.3s ease}.mobile-menu.sc-ir-test-cmp{position:fixed;top:0;left:0;width:100%;height:100vh;background:#fff;transform:translateX(-100%);transition:transform 0.3s ease;z-index:1001;overflow-y:auto}.mobile-menu.active.sc-ir-test-cmp{transform:translateX(0)}.mobile-menu-header.sc-ir-test-cmp{display:flex;align-items:center;justify-content:space-between;padding:1rem;border-bottom:1px solid #e5e7eb}.mobile-menu-header.sc-ir-test-cmp .hotel-name.sc-ir-test-cmp{font-size:1.125rem;font-weight:600;color:#1f2937}.close-menu.sc-ir-test-cmp{display:flex;align-items:center;justify-content:center;width:2.5rem;height:2.5rem;border:none;background:none;font-size:1.5rem;color:#6b7280;cursor:pointer;border-radius:0.375rem;transition:background-color 0.2s ease}.close-menu.sc-ir-test-cmp:hover{background-color:#f3f4f6;color:#374151}.mobile-search.sc-ir-test-cmp{padding:1rem;border-bottom:1px solid #e5e7eb}.mobile-nav-items.sc-ir-test-cmp{list-style:none;margin:0;padding:1rem 0}.mobile-nav-item.sc-ir-test-cmp{margin:0}.mobile-nav-link.sc-ir-test-cmp{display:block;padding:0.75rem 1rem;color:#374151;text-decoration:none;font-weight:500;transition:all 0.2s ease;cursor:pointer}.mobile-nav-link.sc-ir-test-cmp:hover{background-color:#f9fafb;color:#1f2937;text-decoration:none}@media (max-width: 767.98px){.navbar-container.sc-ir-test-cmp{padding:0.5rem 1rem}.navbar-brand.sc-ir-test-cmp{font-size:1.25rem}}.nav-item.sc-ir-test-cmp{color:#1f2937 !important}.ir-mega-menu.sc-ir-test-cmp{list-style:none;margin:0;padding:1rem;grid-template-columns:repeat(4, 1fr) !important;gap:1.25rem;background:#ffffff;border:1px solid #e5e7eb;border-radius:0.5rem}.ir-mega-menu.show.sc-ir-test-cmp{display:grid !important;width:max-content !important}.ir-mega-menu.sc-ir-test-cmp>li.sc-ir-test-cmp{list-style:none}.ir-mega-menu-column.sc-ir-test-cmp{list-style:none;margin:0;padding:0;display:flex;flex-direction:column;gap:0.25rem}.ir-mega-menu-row.title.sc-ir-test-cmp{font-weight:700;color:#0f172a;margin-bottom:0.375rem;font-size:0.825rem;text-transform:uppercase;letter-spacing:0.02em;padding:0rem 0.75rem}.ir-mega-menu-row.sc-ir-test-cmp a.sc-ir-test-cmp{display:block;padding:0.5rem 0.75rem;color:#334155;text-decoration:none;line-height:1;transition:background-color 0.2s ease, color 0.2s ease}.ir-mega-menu-row.sc-ir-test-cmp a.sc-ir-test-cmp:hover{background-color:#f4f5fa;color:#1e2122;text-decoration:none}@media (min-width: 576px){.ir-mega-menu.sc-ir-test-cmp{grid-template-columns:repeat(2, 1fr)}}@media (min-width: 992px){.ir-mega-menu.sc-ir-test-cmp{grid-template-columns:repeat(3, 1fr);padding:1.25rem 1.5rem;gap:1.5rem}}@media (min-width: 768px){.mobile-menu-toggle.sc-ir-test-cmp{display:none !important}.mobile-menu.sc-ir-test-cmp{display:none}.navbar-left.sc-ir-test-cmp{width:auto}}.ir-mega-menu.sc-ir-test-cmp{opacity:0;visibility:hidden;transform:translateY(-10px);transition:opacity 0.3s ease, transform 0.3s ease, visibility 0.3s ease;pointer-events:none;position:absolute;top:100%;left:0;z-index:1000}.ir-mega-menu.show.sc-ir-test-cmp{opacity:1;visibility:visible;transform:translateY(0);pointer-events:auto;display:grid !important}.payment-item.sc-ir-test-cmp{position:relative;width:100%;display:flex;border-bottom:1px solid gainsboro;padding:0.5rem 0.5rem;align-items:center;min-height:3rem}.payment-item.sc-ir-test-cmp:last-child{border-bottom:0}.payment-item.sc-ir-test-cmp:hover{background:#f4f5fa}.payment-item.sc-ir-test-cmp p.sc-ir-test-cmp{padding:0;margin:0;box-sizing:border-box}.payment-item.sc-ir-test-cmp .payment-actions.sc-ir-test-cmp{display:none;background:#f4f5fa;gap:0.5rem;justify-content:flex-end;align-items:center}.payment-body.sc-ir-test-cmp{display:flex;flex-direction:column;gap:0.25rem;flex:1 1 0%}.payment-fields.sc-ir-test-cmp{display:flex;align-items:center;gap:0.5rem}.payment-item.sc-ir-test-cmp:hover .payment-actions.sc-ir-test-cmp{display:flex}.payment-amount.sc-ir-test-cmp{font-weight:700}.payment-amount.is-credit.sc-ir-test-cmp{color:#629a4c}.payment-amount.is-debit.sc-ir-test-cmp{color:#ff4961}.payment-reference.sc-ir-test-cmp{width:300px;font-size:12px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}@media (min-width: 640px){.payment-reference.sc-ir-test-cmp{width:350px}}@media (min-width: 768px){.payment-reference.sc-ir-test-cmp{width:400px}}@media (min-width: 1024px){.payment-reference.sc-ir-test-cmp{width:350px}}";
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
    notifications = [
        {
            id: '1',
            type: 'info',
            title: 'Welcome!',
            message: 'Your account has been created successfully.',
            createdAt: Date.now(),
            read: false,
            dismissible: true,
        },
        {
            id: '2',
            type: 'warning',
            title: 'Storage Almost Full',
            message: 'You have used 90% of your storage. Please upgrade.',
            createdAt: Date.now(),
            read: false,
            dismissible: true,
            link: { href: '#', text: 'Upgrade now' },
        },
        {
            id: '3',
            type: 'success',
            title: 'Payment Received',
            message: 'Your invoice has been paid. Thank you!',
            createdAt: Date.now(),
            read: true,
            dismissible: true,
        },
    ];
    showMegaMenu;
    render() {
        return (h(Host, { key: '4c9a2c56d52a1791a920cbbbd7885690c891a731' }, h("nav", { key: '60469fc1f32fdd6dc69980a896cfcc1ac7a40205', class: "modern-navbar" }, h("span", { key: 'd6259346cfa87818fa5c2dc317f9c86c54eff101', class: "overdue-banner" }, "Overdue $300"), h("div", { key: '2fc7b151b9d13a0b19be6aefe8327f5123d464c7', class: "navbar-container" }, h("div", { key: '3b25a6a33bb0bf1fc40f636ceb059339f74d115d', class: "navbar-left" }, h("button", { key: 'bfbea79464731788ebb5e67f6dad4056e138a301', class: "mobile-menu-toggle d-md-none", onClick: () => this.toggleMobileMenu() }, h("span", { key: '7d9c2ef42361d89ddfaf41cc47db41ae49f98949', class: "hamburger-icon" }, h("span", { key: 'e395450061800c2053858f52a34ed1c860945357' }), h("span", { key: 'a415446cb176091b23a9cf3a5872f16af94f5316' }), h("span", { key: 'eb1d11880eba24de6b729cc9fc09d804b50eb408' }))), h("div", { key: '933f044f664f3bd951639b1bac93ca868f303e6d', class: "navbar-brand" }, "Logo"), h("div", { key: 'ab49994a27968eb1d2a1bfb96bb7c6a0e7955df9', class: "d-none d-md-flex " }, h("ir-m-combobox", { key: '322b4ddf393bd45a0f1af878f92cffd3fe7d24a6', style: { '--ir-combobox-width': 'max-content' }, placeholder: "Find property", dataMode: "static", options: this.staticOptions, onOptionChange: this.handleStaticOptionChange })), h("div", { key: '05d23e40b1f7e3a9a31276d52d300c67ea72369d', class: "hotel-name d-none d-md-block" }, "Hotel Name"), h("div", { key: '1b8ad2918e1f73ce1ae7720a5f65f7f7033a99d9', class: "ml-auto d-md-none" }, h("ir-notifications", { key: '1e8d21a4430b63c902c8707a0b260a7833492fd1', notifications: this.notifications }))), h("div", { key: 'c9254c1dfb2dcbd4b663735c1206f9faaa839878', class: "navbar-center d-none d-md-flex flex-fill mx-auto" }, h("ir-m-combobox", { key: '7841ca8766fb770a04c488617142973b41d52d2d', placeholder: "Search...", dataMode: "static", options: this.staticOptions, onOptionChange: this.handleStaticOptionChange })), h("div", { key: '2314dfe3361520e66d862043a6c8828905ac51f7', class: "navbar-right" }, h("ul", { key: 'a0e5dfa5267662f5c09e1b0306c9e2ae10e6cf0c', class: "nav-items d-none d-md-flex" }, h("li", { key: 'ef93871d9e76d6d498c9f5e54b8be1da8667c16e', class: "nav-item dropdown" }, h("a", { key: 'b557c9769c29ee894ac88153273be41a40c59f85', "data-reference": "parent", href: "#", role: "button", class: "nav-link", "data-toggle": "dropdown", "aria-expanded": "false" }, "a"), h("ul", { key: '6afdabcbb13468ee745d45a0248aa11f99b3c66e', class: `ir-mega-menu mx-auto dropdown-menu-right dropdown-menu    w-100 shadow-sm` }, h("li", { key: '2074249d512179227e603b7efbaac960fdbff12d' }, h("ul", { key: '92965d14b1826b5e41ed3ae80945701a309dd07a', class: "ir-mega-menu-column" }, h("li", { key: 'ced1f7002211e8b66455555cb775fa05022c4407', class: "ir-mega-menu-row title" }, "Parameters"), h("li", { key: 'c964f8f4d6cfb29ec70135618028f4b5852d2b06', class: "ir-mega-menu-row" }, h("a", { key: '4f04b0231def9b286fa25f5db99f5683ff13e809', href: "userinline.aspx" }, "Users List")), h("li", { key: '1b3392043b58dae4fef884bba2a436c24f5ac484', class: "ir-mega-menu-row" }, h("a", { key: '25a35d0f4bea1e76407863bbfc7909347f2b3e53', href: "languageinline.aspx" }, "System Languages")), h("li", { key: '06eb5b4345815e29ed8d8197afe9ff169f12218f', class: "ir-mega-menu-row" }, h("a", { key: 'dbd411ebb344634f49729b3b0fa9dfb3d82b6e22', href: "countryinline.aspx" }, "Countries")), h("li", { key: 'bd19b58e2ccdc5b2ef9141491d6e0206aaacc86c', class: "ir-mega-menu-row" }, h("a", { key: 'c187a7e04ed277545e00f402d78d03a80bb4d6b9', href: "level2inline.aspx" }, "Country Level 2")), h("li", { key: '3d2601914f439cbe7bde09b32486097a561582d9', class: "ir-mega-menu-row" }, h("a", { key: 'a226041a377dd5a7c68fe8852524be4517873bd6', href: "cardinline.aspx" }, "Credit Cards")), h("li", { key: 'efdc358bffc23a74a59001581572ac3e3f824288', class: "ir-mega-menu-row" }, h("a", { key: '8c21d5c62ca92bd3068ef2843fec97dec4c8a59e', href: "hotel_chaininline.aspx" }, "Hotel Chains")), h("li", { key: 'aa4496c8a100011fa35b74da7f54ee8ba354ca11', class: "ir-mega-menu-row" }, h("a", { key: '4efbc3e5deee0a95a8e983c0bc2edef9e9c464dc', href: "currencyinline.aspx" }, "Currencies")), h("li", { key: 'e525f40586f33426a520bc803786f10d2dcd32d9', class: "ir-mega-menu-row" }, h("a", { key: '353b46876eb87c99932a052043cf6d628be4703a', href: "amenityinline.aspx" }, "Amenities")), h("li", { key: '59cbce3cd29b0138fa5ce824c201fc4f93240984', class: "ir-mega-menu-row" }, h("a", { key: '30ea504bc798b01bfe9ed34151dbf1905269d848', href: "foodinline.aspx" }, "Food")), h("li", { key: '2f4fa89c0e86df63d3ec621b0bd02aed31ae5e65', class: "ir-mega-menu-row" }, h("a", { key: '317b00c9223ce6c77e2ca9a065f27b6fbd593789', href: "beddinginline.aspx" }, "Bedding")), h("li", { key: 'c8d0e979b9144eb6c700bb2906930b49f5189df0', class: "ir-mega-menu-row" }, h("a", { key: '3ee45b893fae981881d281601fcf6c88796968de', href: "setupinline.aspx" }, "Setup Table")), h("li", { key: '232a89c0ce7c3e395b42f46a423532053f306330', class: "ir-mega-menu-row" }, h("a", { key: 'f2174fa70040006d20cd15a8221b13ef1bc0a869', href: "gwedit.aspx" }, "Payment Gateways")), h("li", { key: '6f7ecc39d442cf6e37c87f4250471545374de145', class: "ir-mega-menu-row" }, h("a", { key: '42a2137b1c179ef7868b46fa7e1117d4f8c56721', href: "channelmanager.aspx" }, "Channel Manager")))), h("li", { key: 'b821c910f898d73cb5a44bf8853c83801089bcb5' }, h("ul", { key: '45b22c35e8d79118cb8b4fce3d046637ce46ca1a', class: "ir-mega-menu-column" }, h("li", { key: 'e316dd026480bcc0c87dd1cf0c44cbb7fdee1e98', class: "ir-mega-menu-row title" }, "Main"), h("li", { key: 'be2bee1328ee8c037bacb4cc646033d8e9e5f2f9', class: "ir-mega-menu-row" }, h("a", { key: '1613570e90ad43bed61eb64fe26380882976b691', href: "mpolist.aspx" }, "MPOs")), h("li", { key: '5f8b19889d46926b7a8c70b4050a30d19206714a', class: "ir-mega-menu-row" }, h("a", { key: 'cebb52854fbf2b889c7955497d65f8483dc0fd29', href: "aclist.aspx" }, "Properties")), h("li", { key: '480d439aa818c69310f3b90234796a8c3a182fa0', class: "ir-mega-menu-row" }, h("a", { key: 'ad84a6548b3251309e57908e016d14eafc099880', href: "acbookinglist.aspx?MODE=MPO" }, "Bookings")), h("li", { key: '45b58b7b18148ebda8d49f50b56a39d292fbafa1', class: "ir-mega-menu-row" }, h("a", { key: '6b4eb12978b9a8bac4bf436bd21967cbd9febb26', href: "mpoaffiliateproperties.aspx" }, "MPO Affiliate Properties")), h("li", { key: 'e2adef0074282f15e7ac2ff913f0bb67bd9a6701', class: "ir-mega-menu-row" }, h("a", { key: 'a924fa72e7f5dec2ed9c305dd9ae8138186c8d4e', href: "acratesallotment.aspx?VIEW_MODE=CV" }, "MPO Combined Inventory")), h("li", { key: '67adb635ec37090334f6139c339c17f0c8fd12ce', class: "ir-mega-menu-row" }, h("a", { key: 'd1e32a85fdeb3b21fd602017bfb70ad5facf8c67', href: "acbookinglist.aspx?VIEW_MODE=CV" }, "MPO Combined Bookings")), h("li", { key: '646965e1d0fb68580cd0ec9a292e8f8f754875af', class: "ir-mega-menu-row" }, h("a", { key: 'bfbd76d32451902020800e09596346a1a6af8e7f', href: "Acmemberlist.aspx?VIEW_MODE=CV" }, "MPO Combined Guests")), h("li", { key: '81e743f3d00ba57ca595b6f991b6393a9344e52a', class: "ir-mega-menu-row" }, h("a", { key: '1ae4df8ecd2b5a5f9c57c6f962969156ca6f04bc', href: "mpobillingreport.aspx" }, "MPO Billing Report")), h("li", { key: '267aeda0b3df1491ec7dbe7de2a66872281ccb49', class: "ir-mega-menu-row" }, h("a", { key: 'c1d4d2ac2b8dc50f4e23937414c8fa9d9cc398b1', href: "Acmemberlist.aspx" }, "Guests")), h("li", { key: '656526af5ae8f2c15a2f81065abc00d7e01e3914', class: "ir-mega-menu-row" }, h("a", { key: 'c72cfe7164ec7002b3ef594d178251740d4f47a2', href: "acbookinglist.aspx" }, "Bookings")), h("li", { key: '32fd9665c129a02d844e1b4f0c5256528fd8e0f9', class: "ir-mega-menu-row" }, h("a", { key: '4a40673956c0ae05d2c441db3f67a5623f4411a7', href: "billing.aspx" }, "Billing")))), h("li", { key: 'b0e96ca947af9d9a936af3876cf7fc7eed1af02d' }, h("ul", { key: '2a891e1d4eb64ab1a2fe9b4bd4284fade4d46083', class: "ir-mega-menu-column" }, h("li", { key: 'aa6c088cf8cfcd62c2ede58cb01c4834c5538927', class: "ir-mega-menu-row title" }, "Locations"), h("li", { key: '4054ea37f12c26ac53a520b3e1855dedcef174ce', class: "ir-mega-menu-row" }, h("a", { key: '441006ca777a078d0f745c290f63cea3f94bf54e', href: "poicategoriesinline.aspx" }, "Types")), h("li", { key: 'bea60de5ed96342e3cbe0734053627ae12e75665', class: "ir-mega-menu-row" }, h("a", { key: 'c8788a5f317ad23f4741af4e6dd30de6fcc380a5', href: "poilist.aspx" }, "List")))), h("li", { key: 'f8005d784036773fec643900c5948e4b94f98aeb' }, h("ul", { key: '14ced54c401854977aa26fde33470c7032ac0b5b', class: "ir-mega-menu-column" }, h("li", { key: 'ccf339de8e8ad92b7a4311b809435e1d7f3c605c', class: "ir-mega-menu-row title" }, "Referrers"), h("li", { key: '11151cd5e9f34aacf98254297b4731038cda1cf3', class: "ir-mega-menu-row" }, h("a", { key: '3fe7bcd88fc9b93ce3881aa51ddb0e4580efc14d', href: "affiliatelist.aspx" }, "Affiliates")), h("li", { key: 'fea1dd1df9275ec8e6f9f70a73557b1e38c400e0', class: "ir-mega-menu-row" }, h("a", { key: '126cad1fe7aedd366e3f80ab4a28f80d46fa3587', href: "travelagentslist.aspx" }, "Travel Agents ...NOT USED")))))), h("li", { key: '5252b14152f47bf6d61057c6dbf278b6bcf22f85', class: "nav-item" }, h("a", { key: 'afe495bfbc3ce5381ee17fa6947d4081a7749721', href: "#", class: "nav-link" }, "b")), h("li", { key: '31db2b4fd736699511b95411d4e09178c0859a18', class: "nav-item" }, h("a", { key: '658d0e9ecd9b621f871dc1d0defe32942f28596f', href: "#", class: "nav-link" }, "c")), h("li", { key: '6b1ab8467900c3e6fbfca50713958b44839c7113', class: "nav-item" }, h("a", { key: '6ccd9dbc6f9e3609468ac5ed1c286670a1ec9378', href: "#", class: "nav-link" }, "d")), h("li", { key: '184ada8d54f0e8fd98ef7ed2b8a1b43146edbbc7', class: "nav-item" }, h("div", { key: 'ab2e7254a72cb190fbe39b45b3c5f615d9864ec8', class: "d-flex align-items-center justify-content-center", style: { marginTop: '2px' } }, h("ir-notifications", { key: 'd73c606c09b71752a124c2855bcf9c6c37139662', notifications: this.notifications }))))), h("div", { key: '0cb9ecd91930aa9303d827190f6bef78aadace94', class: `mobile-menu ${this.isMobileMenuOpen ? 'active' : ''}` }, h("div", { key: '6fe8ed5e7cf2afd5406bbe289137ac740765561f', class: "mobile-menu-header" }, h("div", { key: '9807f41edd680167259674993b29ff326eb159a4', class: "hotel-name" }, "Hotel Name"), h("button", { key: '5ff2d9820b0d2a400765d03873aa01dee2d5ec3d', class: "close-menu", onClick: () => this.toggleMobileMenu() }, "\u00D7")), h("div", { key: '521f6de898f08ea362dfee355488902ddd93f3be', class: "mobile-search" }, h("ir-m-combobox", { key: '7b1b3351e4681ecf65774a4cfee8159be8b8c1b7', placeholder: "Search...", dataMode: "static", options: this.staticOptions, onOptionChange: this.handleStaticOptionChange })), h("ac-pages-menu", { key: '297bc687fd1020ffe3504768c26370ec1cf29023', location: "sheet", "onLink-clicked": async (e) => {
                await sleep(1000);
                window.location.href = e.detail.target.href;
            }, pages: this.pages }))), h("div", { key: '9aeea2a17dec5f3b095168f8fff9abcfbf3daea6', class: "submenus d-none d-md-block" }, h("ac-pages-menu", { key: 'a652fa6e1bab94bef8f71675fc95d3c8343ea1d3', pages: this.pages }))), h("section", { key: 'acba0a127fbde43f0de00b3d67c81050f88ed779', class: "p-2" }, h("div", { key: 'bcacdc7dd132218edeec792bbba5c51ecbd92b83', class: "row g-3" }, h("div", { key: 'bfad7985ce3d5a19cb215e0e7c7f4e11e74b0997', class: "col-md-3" }, h("h5", { key: '45fbb9c1ecfe65692149175802b982aeb26ec4b3' }, "Static Options Example"), h("ir-m-combobox", { key: 'e1efcaf99100d97e5c6c3756ee58f6fbe17beb10', placeholder: "Select an option...", dataMode: "static", options: this.staticOptions, onOptionChange: this.handleStaticOptionChange }, h("svg", { key: '34dd8513f83e1bd0dfcb220575a9aa6c43066fc9', xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 640 640", slot: "prefix" }, h("path", { key: 'd36827477021038929963b886b355cebdae2cd5f', d: "M480 272C480 317.9 465.1 360.3 440 394.7L566.6 521.4C579.1 533.9 579.1 554.2 566.6 566.7C554.1 579.2 533.8 579.2 521.3 566.7L394.7 440C360.3 465.1 317.9 480 272 480C157.1 480 64 386.9 64 272C64 157.1 157.1 64 272 64C386.9 64 480 157.1 480 272zM272 416C351.5 416 416 351.5 416 272C416 192.5 351.5 128 272 128C192.5 128 128 192.5 128 272C128 351.5 192.5 416 272 416z" }))), this.selectedStaticOption && h("p", { key: '434ab8c0df392cdaf611040bf8d4c83fb581d1a7', class: "mt-2 text-muted" }, "Selected: ", this.selectedStaticOption.label)), h("div", { key: '614de962efbfc1b3b7cd3705db355d210c19caa6', class: "col-md-3" }, h("h5", { key: '9f7f1be2dc2c583c5d788ed261af9e51808694dd' }, "External API - Countries"), h("ir-m-combobox", { key: '6cce41a26142a8df921533460d6eb87f5f6f4c13', placeholder: "Search countries...", dataMode: "external", options: this.countryOptions, loading: this.isLoadingCountries, debounceDelay: 300, onSearchQuery: this.handleCountrySearch, onOptionChange: this.handleCountryChange }), this.selectedCountry && h("p", { key: '8c8718b524529ad1139c1561c56c8038041f8548', class: "mt-2 text-muted" }, "Selected: ", this.selectedCountry.label)), h("div", { key: '4cd880354bfd436c7d9f18180fe33da1d7afae85', class: "col-md-3" }, h("h5", { key: '3f745a63bb66c45d80f1959fed5c8f124ffd43c6' }, "Custom Dropdown Content"), h("ir-m-combobox", { key: 'ee66f31f885dcbfdd3dab33ab596c698ffac1edc', class: "custom-width", ref: el => (this.customComboboxRef = el), placeholder: "Search with custom dropdown...", dataMode: "external", options: this.customOptions, loading: this.isLoadingCustom, useSlot: true, debounceDelay: 500, onSearchQuery: this.handleCustomSearch, onOptionChange: this.handleCustomOptionChange }, h("div", { key: '9d03af0f3fa3fc0458a244f04d22c55524cf601c', slot: "dropdown-content" }, this.isLoadingCustom && h("div", { key: 'f3cbedc7f0ec37618eeace96ca4afd5e486eed48', class: "dropdown-item" }, "\uD83D\uDD04 Loading custom results..."), !this.isLoadingCustom && this.customOptions.length === 0 && h("div", { key: '713d3f1aef989107c4934fc97457eeb2125a84dc', class: "dropdown-item" }, "\uD83D\uDD0D Type to search..."), !this.isLoadingCustom &&
            this.customOptions.map((option, index) => (h("div", { key: index, class: "dropdown-item d-flex align-items-center", "data-option": option.value, "data-label": option.label, onClick: () => this.handleCustomOptionClick(option), onMouseEnter: e => {
                    const element = e.target;
                    const slotIndex = element.getAttribute('data-slot-index');
                    if (slotIndex && this.customComboboxRef) {
                        this.customComboboxRef.focusedIndex = parseInt(slotIndex);
                    }
                }, style: { cursor: 'pointer' } }, h("span", { class: "me-2" }, "\u2B50"), h("div", null, h("div", { class: "fw-bold" }, option.label), h("small", { class: "text-muted" }, "Custom option with ID: ", option.value))))))), this.selectedCustomOption && h("p", { key: '0c9f2e3d701833e86a63265e918a960554a436cf', class: "mt-2 text-muted" }, "Selected: ", this.selectedCustomOption.label))), h("div", { key: '74952d256b48c0daac409b77d9ffe0cba1036ea1', class: 'd-flex align-items-center my-1', style: { gap: '1rem' } }, h("button", { key: '6d32069fc05a9dfc01430606ab03fc3996ccb71b', class: "btn btn-primary", onClick: () => (this.notificationCount += 1) }, "+"), h("button", { key: '78d7b98d6dbb5233c332e8a5712fdf9e54b2d9b3', class: "btn btn-primary", onClick: () => (this.notificationCount -= 1) }, "-")), h("ir-input-text", { key: 'afe4304588ce799f4d7918383f564d0e10469f57', variant: "floating-label", class: "my-text-input", label: "First name" }, h("svg", { key: 'bccd0ee3db32273c7356ef893ba88d1840ac9e00', xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 640 640", slot: "prefix" }, h("path", { key: '0a824cb1c1add482c94571875967460bde539ff5', d: "M480 272C480 317.9 465.1 360.3 440 394.7L566.6 521.4C579.1 533.9 579.1 554.2 566.6 566.7C554.1 579.2 533.8 579.2 521.3 566.7L394.7 440C360.3 465.1 317.9 480 272 480C157.1 480 64 386.9 64 272C64 157.1 157.1 64 272 64C386.9 64 480 157.1 480 272zM272 416C351.5 416 416 351.5 416 272C416 192.5 351.5 128 272 128C192.5 128 128 192.5 128 272C128 351.5 192.5 416 272 416z" })), h("svg", { key: '07cea4ce7009cf66edc968b5c3be7d0e7ab0d616', slot: "suffix", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 640 640" }, h("path", { key: '46b2c3ce3d24829d8a7c3c6a10642bd1006b0dd4', d: "M264 112L376 112C380.4 112 384 115.6 384 120L384 160L256 160L256 120C256 115.6 259.6 112 264 112zM208 120L208 544L432 544L432 120C432 89.1 406.9 64 376 64L264 64C233.1 64 208 89.1 208 120zM480 160L480 544L512 544C547.3 544 576 515.3 576 480L576 224C576 188.7 547.3 160 512 160L480 160zM160 544L160 160L128 160C92.7 160 64 188.7 64 224L64 480C64 515.3 92.7 544 128 544L160 544z" }))), h("ir-select", { key: '024af2b1e4e67f18577b1b9a91c6fc17fc2be67a', "floating-label": true, label: "Hello", data: [{ value: '1', text: '1' }] }), h("div", { key: 'b705795ebe48a4c2d97f94ae2602ce46401e79fc', class: "my-2" }), h("ir-select", { key: '2bbbb67ebf2b88423f99a7dc23d355a9d4058413', label: "Hello", data: [{ value: '1', text: '1' }] }), h("div", { key: '0ba1349d6834670a23d5a38e4c361090f972cf80', class: "my-2" }), h("ir-select", { key: '64a6211cd3781fe1c8942d7620c8a4d479e97688', data: [{ value: '1', text: '1' }] }), h("div", { key: '7507a8d11d08a62f73ee1c5947b5e9ec70aca4b8', class: "card p-1" }, [
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
    const components = ["ir-test-cmp", "ac-pages-menu", "ir-button", "ir-icons", "ir-input-text", "ir-m-combobox", "ir-notifications", "ir-select"];
    components.forEach(tagName => { switch (tagName) {
        case "ir-test-cmp":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, IrTestCmp$1);
            }
            break;
        case "ac-pages-menu":
            if (!customElements.get(tagName)) {
                defineCustomElement$8();
            }
            break;
        case "ir-button":
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