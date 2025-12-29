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
        return (h(Host, { key: '0b63ca9270eeec7ad3ee4664269aa447196f383b' }, h("nav", { key: '6bca67e81148d727f941bb5c4823190afbd47676', class: "modern-navbar" }, h("span", { key: '36ea5f1fbe67306977c29cb6f892cdd8789e2bcb', class: "overdue-banner" }, "Overdue $300"), h("div", { key: '40986e20bc47209738c876572462a0c3c2f4fcd6', class: "navbar-container" }, h("div", { key: 'f05b2cc49d4bba17c3dc36b9e6329c1d0099fd5a', class: "navbar-left" }, h("button", { key: '98655af585746a104a77500a2d5c25af7fcc2348', class: "mobile-menu-toggle d-md-none", onClick: () => this.toggleMobileMenu() }, h("span", { key: '6f0713a3a2d0b93c414af10ba408f6746bc3e3fb', class: "hamburger-icon" }, h("span", { key: '48b3f913d2192093a824639ca5f949048f65b263' }), h("span", { key: '0f10f954b37d3dafb4b6af5f145c6e80aa87810a' }), h("span", { key: 'd5f5b4ff57cc69ae59ad9c61fc720a883463f780' }))), h("div", { key: '564e3dff62e8a3f7a07bf39890582174864cc929', class: "navbar-brand" }, "Logo"), h("div", { key: 'ac6c32925f64302db4f438833cebd0b0f93480c5', class: "d-none d-md-flex " }, h("ir-m-combobox", { key: '8016768f58a9d7f60fa4261dba158d2607d08561', style: { '--ir-combobox-width': 'max-content' }, placeholder: "Find property", dataMode: "static", options: this.staticOptions, onOptionChange: this.handleStaticOptionChange })), h("div", { key: 'c2872e493e519c66d9c9f0794b0030c025cbe5f1', class: "hotel-name d-none d-md-block" }, "Hotel Name"), h("div", { key: '79c4638771e737c2cec1e6c75c033d25a5219b22', class: "ml-auto d-md-none" }, h("ir-notifications", { key: 'cb5a3733b81d36f33c626f5038caefc75baa7b35', notifications: this.notifications }))), h("div", { key: '6d722948480ff985b8cb8a8a631c53725824a3d1', class: "navbar-center d-none d-md-flex flex-fill mx-auto" }, h("ir-m-combobox", { key: '5fc4a3d1a1d3913088465b8cfcaabd7948b83423', placeholder: "Search...", dataMode: "static", options: this.staticOptions, onOptionChange: this.handleStaticOptionChange })), h("div", { key: 'e299b60c1d01942040d8af03f70d9dadb6daa0c0', class: "navbar-right" }, h("ul", { key: '120c175a108fec01db0f96c6ff67b4d073dfc924', class: "nav-items d-none d-md-flex" }, h("li", { key: 'be58cd002b53365a62f60dc4697af6af5ddd786c', class: "nav-item dropdown" }, h("a", { key: 'cb9a69d184b82c9dcbcb469c57254abacebdb0c8', "data-reference": "parent", href: "#", role: "button", class: "nav-link", "data-toggle": "dropdown", "aria-expanded": "false" }, "a"), h("ul", { key: '6682fcc14fab1752fe2feef69ddf060748fc4ea9', class: `ir-mega-menu mx-auto dropdown-menu-right dropdown-menu    w-100 shadow-sm` }, h("li", { key: '799a664ad47aeb90e91c727bbc1bcce3ac076ab9' }, h("ul", { key: '9ffcd05dd4655a8e13efcc6a8af7393baa27e1a0', class: "ir-mega-menu-column" }, h("li", { key: '40109558a70cf5629b88f9a811e336aa55c09183', class: "ir-mega-menu-row title" }, "Parameters"), h("li", { key: '8d75ac6a92641ed1f9f122a16d1ed04c2ed6f68b', class: "ir-mega-menu-row" }, h("a", { key: '134bb3ed6d799a97301e837b8be80b6dca751d55', href: "userinline.aspx" }, "Users List")), h("li", { key: 'efd8dd717fd4473abf31e6e7e37a696a23a98a1a', class: "ir-mega-menu-row" }, h("a", { key: 'a15003059f7afcccbcffe58871013700af3b2775', href: "languageinline.aspx" }, "System Languages")), h("li", { key: '5c590cc1b3568db9691ffe5339b02e72bbf0da9f', class: "ir-mega-menu-row" }, h("a", { key: 'dce1554fbdb2a489251070583952fed7c5461802', href: "countryinline.aspx" }, "Countries")), h("li", { key: '4501b522a768871850a2d31407b6caca340bd00c', class: "ir-mega-menu-row" }, h("a", { key: 'b98f47533e44e5d94b3e4bd24a2d9c9bb02d1640', href: "level2inline.aspx" }, "Country Level 2")), h("li", { key: 'ce884ce91d6d179224e2d35d8606ee7bc5147b5a', class: "ir-mega-menu-row" }, h("a", { key: 'a2d6f7d3d18903610748364eb87b36a68b596ab6', href: "cardinline.aspx" }, "Credit Cards")), h("li", { key: '89db06363f73fba0778f8cc29960fdd8f19a4c47', class: "ir-mega-menu-row" }, h("a", { key: 'd9264f95849620e8297cfd47f99248c2259116b1', href: "hotel_chaininline.aspx" }, "Hotel Chains")), h("li", { key: '2e7cf9e992f903d9490af1e01040697e867d5979', class: "ir-mega-menu-row" }, h("a", { key: 'c292752e0368e21048b8b0df6fe85f1c32353355', href: "currencyinline.aspx" }, "Currencies")), h("li", { key: '911f088657fdc4b09856ef4ff6525da8fdf1290c', class: "ir-mega-menu-row" }, h("a", { key: '8143ade00df69048544ba0d65297581b8be97f0e', href: "amenityinline.aspx" }, "Amenities")), h("li", { key: '26dda0b50b8a91746ab91be61067bcba9ddc3468', class: "ir-mega-menu-row" }, h("a", { key: 'bcc8b187ae432c0fa462fde975bfc32e7fd05eea', href: "foodinline.aspx" }, "Food")), h("li", { key: '2600d7e118d83080625e66bb44739361415f8f99', class: "ir-mega-menu-row" }, h("a", { key: '0000e79dd98472648f91f4d7eb837dead3b11c39', href: "beddinginline.aspx" }, "Bedding")), h("li", { key: 'c25a53be58b3cca370baa1cf8534146e87c1dc44', class: "ir-mega-menu-row" }, h("a", { key: '252f7b9fc12a38258f00bd044fb9ef14845a8331', href: "setupinline.aspx" }, "Setup Table")), h("li", { key: '8a80d600b9c56c6f949271f72bb0fa61bc5b17f1', class: "ir-mega-menu-row" }, h("a", { key: '18ffdb1527f6184575784c82348974e4ef1e3fbd', href: "gwedit.aspx" }, "Payment Gateways")), h("li", { key: 'a0f5b30cd6a44f204862ea7914b945e4b4c24fc7', class: "ir-mega-menu-row" }, h("a", { key: '45e335dc1137f80966d42666cea7e49a70beb08a', href: "channelmanager.aspx" }, "Channel Manager")))), h("li", { key: '84bc9d830c4a7babb8f68123a9139f0e0fd9280f' }, h("ul", { key: 'b73fa123174b6bf62883e90b6c77a26c09b54065', class: "ir-mega-menu-column" }, h("li", { key: '041a9d06afd3b7a6984085da2ae7e424b27a846e', class: "ir-mega-menu-row title" }, "Main"), h("li", { key: 'b53ffa216094b257eb5bc73e7e1a201021a133a0', class: "ir-mega-menu-row" }, h("a", { key: '1521c94721e626da572d9f66d17218bd619f038e', href: "mpolist.aspx" }, "MPOs")), h("li", { key: '709ed3219a60de3c3cdda7678ab5c83f79fb1048', class: "ir-mega-menu-row" }, h("a", { key: '8a94519e21a4446807e005b25ee4f8dd8c840018', href: "aclist.aspx" }, "Properties")), h("li", { key: '14f9a35043c1dbdd88ce4d35ec2a9d4a49802c54', class: "ir-mega-menu-row" }, h("a", { key: 'f4b6c15db9cc5e052cf6707008aeee0281e30559', href: "acbookinglist.aspx?MODE=MPO" }, "Bookings")), h("li", { key: '7a88c2f21953aea9e6df331604f30784334916f4', class: "ir-mega-menu-row" }, h("a", { key: '598f9a8a0a5ef95e7e30a9ad15ad59139381a6cf', href: "mpoaffiliateproperties.aspx" }, "MPO Affiliate Properties")), h("li", { key: 'c90d8a5c93a3a856a1767237324e2146344021c6', class: "ir-mega-menu-row" }, h("a", { key: '2e680485fc3fe981a8b22590b6996ad294c56a8b', href: "acratesallotment.aspx?VIEW_MODE=CV" }, "MPO Combined Inventory")), h("li", { key: 'a12fa3c624723ceb91c62c69638ce0691409c4b2', class: "ir-mega-menu-row" }, h("a", { key: 'a7f7aadeaf2343db5fd36e962bf3476084b3d96a', href: "acbookinglist.aspx?VIEW_MODE=CV" }, "MPO Combined Bookings")), h("li", { key: 'cc91549e657c5235c766db73e92bcb68185c6fc6', class: "ir-mega-menu-row" }, h("a", { key: 'f15f6aef7d1391615b64c5b39890d24719439c56', href: "Acmemberlist.aspx?VIEW_MODE=CV" }, "MPO Combined Guests")), h("li", { key: '670de21048adeb9492c9c33e1d462418f264f411', class: "ir-mega-menu-row" }, h("a", { key: '6fe521594eef1c5c7f850bc7890ea2e70b2eb1ec', href: "mpobillingreport.aspx" }, "MPO Billing Report")), h("li", { key: '977021b0a81e3f6536ac2596fdb7da7b286f20ae', class: "ir-mega-menu-row" }, h("a", { key: '8c17e549ab47b00f6a9207201d6d37cf32193098', href: "Acmemberlist.aspx" }, "Guests")), h("li", { key: '9b3090dd9c2d905c239e6230cc743d52dab891b6', class: "ir-mega-menu-row" }, h("a", { key: 'b94560f7461980212e37cefedfb88bf3b587ffc0', href: "acbookinglist.aspx" }, "Bookings")), h("li", { key: '7c1ace818183d658fc5361d25ea7a0c163aeb75b', class: "ir-mega-menu-row" }, h("a", { key: 'eaec73bc5543af8688852284a117f99fa2c7356f', href: "billing.aspx" }, "Billing")))), h("li", { key: 'b719dfb2f6b76530bcabb9c2fa3f69d32691b57c' }, h("ul", { key: '8e0e6c09e2fc26bc9563d0a805750934d9064024', class: "ir-mega-menu-column" }, h("li", { key: '83466ad1f8c0a92e284ecf29770f9bf59548d76a', class: "ir-mega-menu-row title" }, "Locations"), h("li", { key: '716dd42479b337a35feea46988d3f84d5e7973a6', class: "ir-mega-menu-row" }, h("a", { key: '17e92ec9e6b49c7faea1634277514c08f2f3ac33', href: "poicategoriesinline.aspx" }, "Types")), h("li", { key: '12720b07e7c9e42325615efcdf6188379a2aea16', class: "ir-mega-menu-row" }, h("a", { key: '06436db6ff08359226fda61acdadd5484d8a5323', href: "poilist.aspx" }, "List")))), h("li", { key: '87789f98f8121238f69cbc8383b3c06a0cae544e' }, h("ul", { key: '2433c1c42187cf91a699ba10a82e8c24a136d39c', class: "ir-mega-menu-column" }, h("li", { key: 'f0a920feb288dfba670d785a579fc775a293c1a4', class: "ir-mega-menu-row title" }, "Referrers"), h("li", { key: 'f83e080d6ef59c9186338a325e464063c51f9138', class: "ir-mega-menu-row" }, h("a", { key: '3e1c45a862cfd964265a68e98d0fd51a4b1e05b8', href: "affiliatelist.aspx" }, "Affiliates")), h("li", { key: 'a291d8d6eb676916d7086dafa13bcd087f2e04da', class: "ir-mega-menu-row" }, h("a", { key: 'ef98a5d3599d4688f87613fa57ffb37e88e95498', href: "travelagentslist.aspx" }, "Travel Agents ...NOT USED")))))), h("li", { key: '859720887a42bb1e224b47b593da759c9d72bc25', class: "nav-item" }, h("a", { key: 'f9726ede6e239bb0c6075b099fbc2974d3cc9af6', href: "#", class: "nav-link" }, "b")), h("li", { key: '90a4c789436328deefc9f057416e90f15bff56ce', class: "nav-item" }, h("a", { key: '244f3740f7f5e00ff40c240f9b927dbe53a42f11', href: "#", class: "nav-link" }, "c")), h("li", { key: 'c57d8227b5b86a907ac623a8785d306435b045e8', class: "nav-item" }, h("a", { key: '47f07835805b4466740477fd0fdf115317fa9395', href: "#", class: "nav-link" }, "d")), h("li", { key: '2e9f9f9a447d6d047ba637dfe9c46f3f66ea872c', class: "nav-item" }, h("div", { key: '6140fcadcec7a57df8d1eb3263dafacb1aa306c7', class: "d-flex align-items-center justify-content-center", style: { marginTop: '2px' } }, h("ir-notifications", { key: 'bc6081d2840c48b6e52c0c8b3a2f656f0a6159fa', notifications: this.notifications }))))), h("div", { key: '15ab8a28ec16fad2ec8565f3c91d3e7b7461d190', class: `mobile-menu ${this.isMobileMenuOpen ? 'active' : ''}` }, h("div", { key: '1a760680f93fc954a3cdda05016248ae920dc4db', class: "mobile-menu-header" }, h("div", { key: '28daff11e9d22534ab915b8cd3210e78e6203cd4', class: "hotel-name" }, "Hotel Name"), h("button", { key: 'ed5cccbcd4ca430b512e2a9f2adebf6cd3ad3f7c', class: "close-menu", onClick: () => this.toggleMobileMenu() }, "\u00D7")), h("div", { key: '7a3495db8db6c2044de697030a60aa4297470c9c', class: "mobile-search" }, h("ir-m-combobox", { key: '35f6c14df7e2a48a3df82f7dbd892f52e1bc3b10', placeholder: "Search...", dataMode: "static", options: this.staticOptions, onOptionChange: this.handleStaticOptionChange })), h("ac-pages-menu", { key: 'aedc7d7c38ba4f323714ec680e3175bad5c0fafa', location: "sheet", "onLink-clicked": async (e) => {
                await sleep(1000);
                window.location.href = e.detail.target.href;
            }, pages: this.pages }))), h("div", { key: '2f9ee19d1c4f800bd2fcc3b51233a45d994c2577', class: "submenus d-none d-md-block" }, h("ac-pages-menu", { key: 'c9fb26325f134c83734cd1af3b5a4df5b24f930c', pages: this.pages }))), h("section", { key: '0f29129d50a74fb88213b44766ca649055c4c7af', class: "p-2" }, h("div", { key: 'f9b0c57815e40747ac8e81fdb65b074264370f87', class: "row g-3" }, h("div", { key: '59dcee39dfe6aeba18472d7106e69505facc9cd5', class: "col-md-3" }, h("h5", { key: '58c3aaf2a3cb3a48485fcad066d03dc4edfad1c1' }, "Static Options Example"), h("ir-m-combobox", { key: '0fa2b8fe2cd3da45f997e977d92a0a4671d805e6', placeholder: "Select an option...", dataMode: "static", options: this.staticOptions, onOptionChange: this.handleStaticOptionChange }, h("svg", { key: '645ba14f7f1de6627eb3067d1b6560847154baa2', xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 640 640", slot: "prefix" }, h("path", { key: '78cc0a2b6ba7f21477ebf025aeb74c1bf96c3427', d: "M480 272C480 317.9 465.1 360.3 440 394.7L566.6 521.4C579.1 533.9 579.1 554.2 566.6 566.7C554.1 579.2 533.8 579.2 521.3 566.7L394.7 440C360.3 465.1 317.9 480 272 480C157.1 480 64 386.9 64 272C64 157.1 157.1 64 272 64C386.9 64 480 157.1 480 272zM272 416C351.5 416 416 351.5 416 272C416 192.5 351.5 128 272 128C192.5 128 128 192.5 128 272C128 351.5 192.5 416 272 416z" }))), this.selectedStaticOption && h("p", { key: 'b42c25a137a6525b74bb13dae8b594fa36d212e9', class: "mt-2 text-muted" }, "Selected: ", this.selectedStaticOption.label)), h("div", { key: '63295b36201c95b969b67fe16208d4ceb3097da1', class: "col-md-3" }, h("h5", { key: 'd9c6eb8992b13cfa429f4ea547e7a039c436f1cb' }, "External API - Countries"), h("ir-m-combobox", { key: '0b078d4c360a8981f07829120bf7708616d59a61', placeholder: "Search countries...", dataMode: "external", options: this.countryOptions, loading: this.isLoadingCountries, debounceDelay: 300, onSearchQuery: this.handleCountrySearch, onOptionChange: this.handleCountryChange }), this.selectedCountry && h("p", { key: 'e5bd3b5218d1d99db22111c91437688d9bdf3cc9', class: "mt-2 text-muted" }, "Selected: ", this.selectedCountry.label)), h("div", { key: '3e602625dc1d6ce9ba0cd8165fe74a69731099c8', class: "col-md-3" }, h("h5", { key: 'f0af348a3039398b83f8f7a4de79d3f2698908f8' }, "Custom Dropdown Content"), h("ir-m-combobox", { key: '22dd3c1ece492b4aa467d198c8b6711c45e9ace8', class: "custom-width", ref: el => (this.customComboboxRef = el), placeholder: "Search with custom dropdown...", dataMode: "external", options: this.customOptions, loading: this.isLoadingCustom, useSlot: true, debounceDelay: 500, onSearchQuery: this.handleCustomSearch, onOptionChange: this.handleCustomOptionChange }, h("div", { key: '502d50a5f4addec57cf0ce3007e94dac38736b40', slot: "dropdown-content" }, this.isLoadingCustom && h("div", { key: 'e118bcbf97ad129ad1030a0e65098d6de4a7304e', class: "dropdown-item" }, "\uD83D\uDD04 Loading custom results..."), !this.isLoadingCustom && this.customOptions.length === 0 && h("div", { key: '24f7a3fdeb5f356277c12bdd3f02a965a0f3b766', class: "dropdown-item" }, "\uD83D\uDD0D Type to search..."), !this.isLoadingCustom &&
            this.customOptions.map((option, index) => (h("div", { key: index, class: "dropdown-item d-flex align-items-center", "data-option": option.value, "data-label": option.label, onClick: () => this.handleCustomOptionClick(option), onMouseEnter: e => {
                    const element = e.target;
                    const slotIndex = element.getAttribute('data-slot-index');
                    if (slotIndex && this.customComboboxRef) {
                        this.customComboboxRef.focusedIndex = parseInt(slotIndex);
                    }
                }, style: { cursor: 'pointer' } }, h("span", { class: "me-2" }, "\u2B50"), h("div", null, h("div", { class: "fw-bold" }, option.label), h("small", { class: "text-muted" }, "Custom option with ID: ", option.value))))))), this.selectedCustomOption && h("p", { key: '896f27bdb3a7c6363ddce2b3c56ce7485c499e57', class: "mt-2 text-muted" }, "Selected: ", this.selectedCustomOption.label))), h("div", { key: '01f20a717a61627d9b8e4b9c28e909b2e49bc13d', class: 'd-flex align-items-center my-1', style: { gap: '1rem' } }, h("button", { key: '829d5b89e369080ebb38a9aac21dc1aa8ff4658f', class: "btn btn-primary", onClick: () => (this.notificationCount += 1) }, "+"), h("button", { key: '73706065bf70608c2a0da691699e72c184b24c0f', class: "btn btn-primary", onClick: () => (this.notificationCount -= 1) }, "-")), h("ir-input-text", { key: '5be6bab5d232d3f7089f9cc3111f30f6d0c286e6', variant: "floating-label", class: "my-text-input", label: "First name" }, h("svg", { key: '645e00790c8082461ac26f78b32e7e6f7065b00d', xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 640 640", slot: "prefix" }, h("path", { key: 'f992187e248c20b46ea8f47cb73aed1adea96ca2', d: "M480 272C480 317.9 465.1 360.3 440 394.7L566.6 521.4C579.1 533.9 579.1 554.2 566.6 566.7C554.1 579.2 533.8 579.2 521.3 566.7L394.7 440C360.3 465.1 317.9 480 272 480C157.1 480 64 386.9 64 272C64 157.1 157.1 64 272 64C386.9 64 480 157.1 480 272zM272 416C351.5 416 416 351.5 416 272C416 192.5 351.5 128 272 128C192.5 128 128 192.5 128 272C128 351.5 192.5 416 272 416z" })), h("svg", { key: '85845ab3437a42fc22cef60f186c5c076875c874', slot: "suffix", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 640 640" }, h("path", { key: '717ff0ab5f19dd9ba3c473757d6d469be4ebecc4', d: "M264 112L376 112C380.4 112 384 115.6 384 120L384 160L256 160L256 120C256 115.6 259.6 112 264 112zM208 120L208 544L432 544L432 120C432 89.1 406.9 64 376 64L264 64C233.1 64 208 89.1 208 120zM480 160L480 544L512 544C547.3 544 576 515.3 576 480L576 224C576 188.7 547.3 160 512 160L480 160zM160 544L160 160L128 160C92.7 160 64 188.7 64 224L64 480C64 515.3 92.7 544 128 544L160 544z" }))), h("ir-select", { key: 'fbc71657671ab6fef12a621ee7873c191fe0f20d', "floating-label": true, label: "Hello", data: [{ value: '1', text: '1' }] }), h("div", { key: 'df79e1eb4e017bdf984383c5eae5ea4f02431304', class: "my-2" }), h("ir-select", { key: '3fc0e3e0870f00d5bddbc351d632da778030d685', label: "Hello", data: [{ value: '1', text: '1' }] }), h("div", { key: 'e5c9f69a86d3d006d906baaccd132dc49fda4af0', class: "my-2" }), h("ir-select", { key: 'ee1357e5a610aec772edf793399d1e5a4ce142de', data: [{ value: '1', text: '1' }] }), h("div", { key: 'a79074fac7b81ae95b18d762472c7a700984ae74', class: "card p-1" }, [
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