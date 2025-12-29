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
        return (h(Host, { key: '1df3426e6298ba8af9865b6635185d9a5c9e6940' }, h("nav", { key: 'eb6acb50756c2176e575b2c6f211fc1485220fa7', class: "modern-navbar" }, h("span", { key: '9373fba335ff91267cde7c9f2597cdd873098543', class: "overdue-banner" }, "Overdue $300"), h("div", { key: '6d84d57873022169421ee5a251580e3207fcbfe5', class: "navbar-container" }, h("div", { key: '341c7c0bd7038d49ed25386db8473994d6d4672d', class: "navbar-left" }, h("button", { key: '1358edb2bac25fbbd1a6128af4c6da4ee96669a8', class: "mobile-menu-toggle d-md-none", onClick: () => this.toggleMobileMenu() }, h("span", { key: '397a5f05d1113cff30d3a3d70425dadc00057ea1', class: "hamburger-icon" }, h("span", { key: '5a5f2b6de635f54b6f963b1837c397fb03eb2248' }), h("span", { key: '95680459571aa2caf06eb950a05c9c2ebbf97d7c' }), h("span", { key: '26ab8752d019c91a44dda256473a0a5cf3a1b814' }))), h("div", { key: '0f344699c80975908bd6b22c891dc623e3307a60', class: "navbar-brand" }, "Logo"), h("div", { key: '459d6a3a4ffad4037f2ad2d89cf65915d40213e7', class: "d-none d-md-flex " }, h("ir-m-combobox", { key: 'd644a3cf67bdd8a6fd5c4cd5d2c0ea39c39f4cfc', style: { '--ir-combobox-width': 'max-content' }, placeholder: "Find property", dataMode: "static", options: this.staticOptions, onOptionChange: this.handleStaticOptionChange })), h("div", { key: '342a6d7f926f9585008a96050088196c4bde7f19', class: "hotel-name d-none d-md-block" }, "Hotel Name"), h("div", { key: 'f9086e707356a5bfcc10584359cc34adb271da7c', class: "ml-auto d-md-none" }, h("ir-notifications", { key: '3361d4ec4d33dd1e39d105795b2a1afdf4737c7d', notifications: this.notifications }))), h("div", { key: '279852a31d2b4140c036c7f7cb53bcebc482fb56', class: "navbar-center d-none d-md-flex flex-fill mx-auto" }, h("ir-m-combobox", { key: 'ddb8d5daf0a4b2add7274063e4cbbe048cb692ab', placeholder: "Search...", dataMode: "static", options: this.staticOptions, onOptionChange: this.handleStaticOptionChange })), h("div", { key: '3be292b53b5802e0fe38e3af2bab1bdd39d192b8', class: "navbar-right" }, h("ul", { key: 'b1821451cad87fc9fa7d6078219395d457f64ea7', class: "nav-items d-none d-md-flex" }, h("li", { key: 'cebf960d7932c28de61716b3b81737f4226d3037', class: "nav-item dropdown" }, h("a", { key: 'c836f14ba8c8477d4b2bad35f6dbeaabf6f45347', "data-reference": "parent", href: "#", role: "button", class: "nav-link", "data-toggle": "dropdown", "aria-expanded": "false" }, "a"), h("ul", { key: '456d8bb8eacde87135493ec11040b3fb0b3fc133', class: `ir-mega-menu mx-auto dropdown-menu-right dropdown-menu    w-100 shadow-sm` }, h("li", { key: '30194b92588376a685cfc55c1f926760411a8a95' }, h("ul", { key: '9620a9e24de02f75a151ee1ab04e8a3d3ebd4ec5', class: "ir-mega-menu-column" }, h("li", { key: 'e48cf2a11dd3cdead298ba3a528d40226eb2599b', class: "ir-mega-menu-row title" }, "Parameters"), h("li", { key: 'cc5317edf3b2ace50596612dca2205d72eb3de7a', class: "ir-mega-menu-row" }, h("a", { key: '015915b73d88e735e8a9291183037370280c7a3b', href: "userinline.aspx" }, "Users List")), h("li", { key: '5020e226d9911f847cb774b3073e621cacfe51d6', class: "ir-mega-menu-row" }, h("a", { key: '4606709eb2554402572427bddde58ddc52b14cc0', href: "languageinline.aspx" }, "System Languages")), h("li", { key: 'eab9bbf6466af98612edd724dab40fb7f6879149', class: "ir-mega-menu-row" }, h("a", { key: '25ce73535469c212e26d9bb195cf2a609218cae2', href: "countryinline.aspx" }, "Countries")), h("li", { key: '374f458cb203407d7532e72e6354e0b80e79d144', class: "ir-mega-menu-row" }, h("a", { key: '9b3b98e95f67c7fe09d38a982f3e60cff1a07a14', href: "level2inline.aspx" }, "Country Level 2")), h("li", { key: '083491e2250ffa5c6de6e606fabcf5c53cf8bb4a', class: "ir-mega-menu-row" }, h("a", { key: '1e80f68e1f524d402146d9ce610b084dfc8ae2cd', href: "cardinline.aspx" }, "Credit Cards")), h("li", { key: 'c55f664b43eca3a29fa096b3b54652f3123f552d', class: "ir-mega-menu-row" }, h("a", { key: 'be4983ce7e6f392fd32a86f11fb7225a72fca739', href: "hotel_chaininline.aspx" }, "Hotel Chains")), h("li", { key: 'ae1df47194d170b109b5ddd0aa630fde5ab57449', class: "ir-mega-menu-row" }, h("a", { key: '84808424ec7b5cc377eef95e0b862e46e973b274', href: "currencyinline.aspx" }, "Currencies")), h("li", { key: '2a53172e2fd4edc2ae96a4f1cc9cf2da059ea66f', class: "ir-mega-menu-row" }, h("a", { key: '136a246859895ffa1fe2f733340eaeddb2717e23', href: "amenityinline.aspx" }, "Amenities")), h("li", { key: 'bd60ccef0de7c57ec6fcbf9aaadd51403df9e9b1', class: "ir-mega-menu-row" }, h("a", { key: '73749a21415e5419799da314aa546a6536f87ffa', href: "foodinline.aspx" }, "Food")), h("li", { key: '091508bafdf477ccceb14af445ea29d77482c9bc', class: "ir-mega-menu-row" }, h("a", { key: '36c9dfdb6218eedf8e593f416c5d55d151fa6337', href: "beddinginline.aspx" }, "Bedding")), h("li", { key: '7e98fd65b8912efc096a4d23db517082cbc597cb', class: "ir-mega-menu-row" }, h("a", { key: '13a275a037921b83a57413821a3c7b89ea3f2ef1', href: "setupinline.aspx" }, "Setup Table")), h("li", { key: 'f601e70c72923d18e5b1ca569146bfee0f78a49c', class: "ir-mega-menu-row" }, h("a", { key: 'b9e63e1813b37879ca777681549a4c03a67cda64', href: "gwedit.aspx" }, "Payment Gateways")), h("li", { key: 'f2f4d2a91e5ba6d813c65134947fdb3502afddb6', class: "ir-mega-menu-row" }, h("a", { key: 'f5535e15b6dc4062a5ce7da2c5b6d09cfffc5bc8', href: "channelmanager.aspx" }, "Channel Manager")))), h("li", { key: '11311d95065fa982b00ded60f6ecf08466d25aea' }, h("ul", { key: '64f0d83a66af0dc0ec072dc61590f9b8c874f00d', class: "ir-mega-menu-column" }, h("li", { key: '6c66edcc27c3a3b67a62703eb1b38241da15fee7', class: "ir-mega-menu-row title" }, "Main"), h("li", { key: '08cf6a4fc1f8c26fb46f68c8a56cf1d339929d21', class: "ir-mega-menu-row" }, h("a", { key: '069554388df5dc77f4939e35713faf99a1c93d0b', href: "mpolist.aspx" }, "MPOs")), h("li", { key: '85ad0c25bd8980ec5d67565bfea470a47e44769b', class: "ir-mega-menu-row" }, h("a", { key: 'a355a2f6158bc246f5dd5654bfcf447861e3c5e0', href: "aclist.aspx" }, "Properties")), h("li", { key: '2561ba3eec752dc4f054b60a0f7edfa866e5fcc0', class: "ir-mega-menu-row" }, h("a", { key: '1304cc9c9a57b9c77b73d21dd3cff8a599cc0348', href: "acbookinglist.aspx?MODE=MPO" }, "Bookings")), h("li", { key: '732e571402099c35b32bc76c699c72912e872a1b', class: "ir-mega-menu-row" }, h("a", { key: 'c18264a8c2b2b3f6fa328b35d9343b3fc508debd', href: "mpoaffiliateproperties.aspx" }, "MPO Affiliate Properties")), h("li", { key: 'c766498f8c4d834182de1359cf76e70d7cd57604', class: "ir-mega-menu-row" }, h("a", { key: '9ee56579fe63f188d40ff3f4c9d5ee1cf554656c', href: "acratesallotment.aspx?VIEW_MODE=CV" }, "MPO Combined Inventory")), h("li", { key: '50e8b6ef25811d7a8f1e3b5abf880661ee9fd2bc', class: "ir-mega-menu-row" }, h("a", { key: '18f9230bc671ff8558739a8fc49e4f350a4ebd57', href: "acbookinglist.aspx?VIEW_MODE=CV" }, "MPO Combined Bookings")), h("li", { key: '1253ba75236b0c1ce8ae6abba3f8a11927f30599', class: "ir-mega-menu-row" }, h("a", { key: '3e38f75038b78e8ea1058e9c97231f997dc73e9a', href: "Acmemberlist.aspx?VIEW_MODE=CV" }, "MPO Combined Guests")), h("li", { key: '1dc1b870c3d1422b2afdb987443776dc2d950ae9', class: "ir-mega-menu-row" }, h("a", { key: '6c9c8bafb1c9cfc576c60ccf375c1da27a55ae67', href: "mpobillingreport.aspx" }, "MPO Billing Report")), h("li", { key: '6d40a204bdc7745c0858f0a8d7a3bef5cdc1d330', class: "ir-mega-menu-row" }, h("a", { key: '93ef71721e4b95350f65080dc4d479df08e85179', href: "Acmemberlist.aspx" }, "Guests")), h("li", { key: '37062d9841bdd3e95c8596da20201aed640cd42f', class: "ir-mega-menu-row" }, h("a", { key: '58c748b72569ff479c55200c8c2f1d63c386c308', href: "acbookinglist.aspx" }, "Bookings")), h("li", { key: 'd5f945761b0750e203691607b3fe8fa53188d2f8', class: "ir-mega-menu-row" }, h("a", { key: 'd9a83e1a6127b3408912c2911b337eeb49102189', href: "billing.aspx" }, "Billing")))), h("li", { key: '187a8009ff6e0044efec221c340c8e209a897225' }, h("ul", { key: 'af2546be64ae87bd3687f98f2759cdf7db7b747f', class: "ir-mega-menu-column" }, h("li", { key: 'a857e27bb5e9d616dda9b2f966278d140c895aab', class: "ir-mega-menu-row title" }, "Locations"), h("li", { key: 'faa135ff1f96273215be241b63ca1be753b28906', class: "ir-mega-menu-row" }, h("a", { key: 'fbcda3b46cc24e2226650720dfc2736e70f33921', href: "poicategoriesinline.aspx" }, "Types")), h("li", { key: '19515b498430196c079ecdc0e28bea9a0b5c7e12', class: "ir-mega-menu-row" }, h("a", { key: 'ef502e8903bbf1a0646ef8cb6634fac06e94ff62', href: "poilist.aspx" }, "List")))), h("li", { key: '12dadd0dcb1fba8470acc26a07c3be30f44d0dc5' }, h("ul", { key: 'd95bd35c99151f764ae21fc24f6191458145a68e', class: "ir-mega-menu-column" }, h("li", { key: 'dafb529c04272bac6287f1de41ecf820814a687b', class: "ir-mega-menu-row title" }, "Referrers"), h("li", { key: '05041897925960f48fde4a237e6410fcf64ffacf', class: "ir-mega-menu-row" }, h("a", { key: '669d47357915efa607b40285c94d709e076951ce', href: "affiliatelist.aspx" }, "Affiliates")), h("li", { key: '4a65fbc07b5134492e0b864c7ce32d5cdea05fd6', class: "ir-mega-menu-row" }, h("a", { key: 'e83d8200940f438498018714a14553a3e8b18983', href: "travelagentslist.aspx" }, "Travel Agents ...NOT USED")))))), h("li", { key: '2bd26cd4eca6b788dfc8d7c05ffe6de54e46703d', class: "nav-item" }, h("a", { key: '5778dbc02bd2d7d6f0d6b50f076a54f99334360d', href: "#", class: "nav-link" }, "b")), h("li", { key: '94e3542818d4ea892a98f8188f5bab8b607708f2', class: "nav-item" }, h("a", { key: 'ecf9d6dd4aadf18424b6f0a16b07762972e3ef3d', href: "#", class: "nav-link" }, "c")), h("li", { key: '88a278e43394a251698b0090f75985bea115c9ec', class: "nav-item" }, h("a", { key: 'c27eb7801c031b7f09e20f83e8e4d395c75f9d4b', href: "#", class: "nav-link" }, "d")), h("li", { key: 'c225986bf6c2e22b55534ab732fcf25f81944fb5', class: "nav-item" }, h("div", { key: 'a690af6c1b3b95112f076669a49f0a98ac6deee2', class: "d-flex align-items-center justify-content-center", style: { marginTop: '2px' } }, h("ir-notifications", { key: 'b8e5a208a97f127d9f04841dfff0e110da0f61ef', notifications: this.notifications }))))), h("div", { key: 'da5a7599d351de6e61b9295967fec269d8295bf7', class: `mobile-menu ${this.isMobileMenuOpen ? 'active' : ''}` }, h("div", { key: '63031109c095ad6df7317fe1289e2a075f9851d0', class: "mobile-menu-header" }, h("div", { key: '699b99b79f16b4af51c6d8b5945173e37085302c', class: "hotel-name" }, "Hotel Name"), h("button", { key: 'e42ee93db6e334c411fb24833bd494fc58a2568c', class: "close-menu", onClick: () => this.toggleMobileMenu() }, "\u00D7")), h("div", { key: '6626072637fa6fb657a1efed23a12e6372a5cb14', class: "mobile-search" }, h("ir-m-combobox", { key: '485b53c6976c1531923a77a685d5c3ac7179289d', placeholder: "Search...", dataMode: "static", options: this.staticOptions, onOptionChange: this.handleStaticOptionChange })), h("ac-pages-menu", { key: '0c64dd33d66320268286ca8d61f63e9f31a3479a', location: "sheet", "onLink-clicked": async (e) => {
                await sleep(1000);
                window.location.href = e.detail.target.href;
            }, pages: this.pages }))), h("div", { key: '63ac453fd0b1fe6ef80764b47ba430a6fb1ade84', class: "submenus d-none d-md-block" }, h("ac-pages-menu", { key: 'eaa9d01892fb061cef4ce04f10e2cb3ddbb32b41', pages: this.pages }))), h("section", { key: '03cded8866283085512a05c62fb620020729549f', class: "p-2" }, h("div", { key: '35ce3df0f870f9eae0658e47d8184468845e3d65', class: "row g-3" }, h("div", { key: '5c3ed5730ba228486d50b2bedd92f6159c4b60cc', class: "col-md-3" }, h("h5", { key: 'b6bd701037127e6b26169e2a7dbfdc92952de084' }, "Static Options Example"), h("ir-m-combobox", { key: '718d91b5829d1305fd2fc6e78ab3711343e72789', placeholder: "Select an option...", dataMode: "static", options: this.staticOptions, onOptionChange: this.handleStaticOptionChange }, h("svg", { key: '659ac4874fcd1750162aafbe467cfbc7e59d0783', xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 640 640", slot: "prefix" }, h("path", { key: '61efad51b42524bf1e23485b9458c09cf549d7ba', d: "M480 272C480 317.9 465.1 360.3 440 394.7L566.6 521.4C579.1 533.9 579.1 554.2 566.6 566.7C554.1 579.2 533.8 579.2 521.3 566.7L394.7 440C360.3 465.1 317.9 480 272 480C157.1 480 64 386.9 64 272C64 157.1 157.1 64 272 64C386.9 64 480 157.1 480 272zM272 416C351.5 416 416 351.5 416 272C416 192.5 351.5 128 272 128C192.5 128 128 192.5 128 272C128 351.5 192.5 416 272 416z" }))), this.selectedStaticOption && h("p", { key: '2e2e19a7501f76177b6035b2d2340d012b22b92e', class: "mt-2 text-muted" }, "Selected: ", this.selectedStaticOption.label)), h("div", { key: '93a91f07fd9a0b754a1b03774a5219127e2711e1', class: "col-md-3" }, h("h5", { key: 'dae45c0f7e92ce9001cbab880b170271485d0659' }, "External API - Countries"), h("ir-m-combobox", { key: '44cc9865b356e989cebb40eda97774f5ebdae908', placeholder: "Search countries...", dataMode: "external", options: this.countryOptions, loading: this.isLoadingCountries, debounceDelay: 300, onSearchQuery: this.handleCountrySearch, onOptionChange: this.handleCountryChange }), this.selectedCountry && h("p", { key: '6f28cad8e5aaafee7c7780608e19ad97f333a399', class: "mt-2 text-muted" }, "Selected: ", this.selectedCountry.label)), h("div", { key: '36080998aba69488f0d950f1702f2de5f2569d0a', class: "col-md-3" }, h("h5", { key: '567a0052f0ec136771db002a6745391dc459d29e' }, "Custom Dropdown Content"), h("ir-m-combobox", { key: 'fb5e399697ffbb1fbb658a295bebd8c445a582bf', class: "custom-width", ref: el => (this.customComboboxRef = el), placeholder: "Search with custom dropdown...", dataMode: "external", options: this.customOptions, loading: this.isLoadingCustom, useSlot: true, debounceDelay: 500, onSearchQuery: this.handleCustomSearch, onOptionChange: this.handleCustomOptionChange }, h("div", { key: '7df96ad8e7c51396f88873ff1f20aaebc6f9efcc', slot: "dropdown-content" }, this.isLoadingCustom && h("div", { key: 'a598d4f5badf34a6e93cdd2685d023a1994b648f', class: "dropdown-item" }, "\uD83D\uDD04 Loading custom results..."), !this.isLoadingCustom && this.customOptions.length === 0 && h("div", { key: '98f56afba14ff26ac00e11e8a620867672729bb8', class: "dropdown-item" }, "\uD83D\uDD0D Type to search..."), !this.isLoadingCustom &&
            this.customOptions.map((option, index) => (h("div", { key: index, class: "dropdown-item d-flex align-items-center", "data-option": option.value, "data-label": option.label, onClick: () => this.handleCustomOptionClick(option), onMouseEnter: e => {
                    const element = e.target;
                    const slotIndex = element.getAttribute('data-slot-index');
                    if (slotIndex && this.customComboboxRef) {
                        this.customComboboxRef.focusedIndex = parseInt(slotIndex);
                    }
                }, style: { cursor: 'pointer' } }, h("span", { class: "me-2" }, "\u2B50"), h("div", null, h("div", { class: "fw-bold" }, option.label), h("small", { class: "text-muted" }, "Custom option with ID: ", option.value))))))), this.selectedCustomOption && h("p", { key: '6e2d45106df3dc7db5256b18a8f40caba38fb0dd', class: "mt-2 text-muted" }, "Selected: ", this.selectedCustomOption.label))), h("div", { key: '77a7c861b085b42ae6e1a215bdfe823e78789712', class: 'd-flex align-items-center my-1', style: { gap: '1rem' } }, h("button", { key: '9cfb8913c5ea1fcbc7d3fb50c996a6540008450d', class: "btn btn-primary", onClick: () => (this.notificationCount += 1) }, "+"), h("button", { key: '45a826902401ca933b37c07db7f0cb1925c2bae4', class: "btn btn-primary", onClick: () => (this.notificationCount -= 1) }, "-")), h("ir-input-text", { key: 'a77c5efe71db8a332d0093967d54f814682fb8c0', variant: "floating-label", class: "my-text-input", label: "First name" }, h("svg", { key: '726b649a1be03bc8dcb0768423e7c40d8318bc4f', xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 640 640", slot: "prefix" }, h("path", { key: '9a09fe9825ce0d0a6e37eab964d7697d8e50d9e7', d: "M480 272C480 317.9 465.1 360.3 440 394.7L566.6 521.4C579.1 533.9 579.1 554.2 566.6 566.7C554.1 579.2 533.8 579.2 521.3 566.7L394.7 440C360.3 465.1 317.9 480 272 480C157.1 480 64 386.9 64 272C64 157.1 157.1 64 272 64C386.9 64 480 157.1 480 272zM272 416C351.5 416 416 351.5 416 272C416 192.5 351.5 128 272 128C192.5 128 128 192.5 128 272C128 351.5 192.5 416 272 416z" })), h("svg", { key: '8453ece1d7e8a3d1e13246f4a96549a012bb936c', slot: "suffix", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 640 640" }, h("path", { key: 'baae1695438dbd07624a6cf07ebf114750da1035', d: "M264 112L376 112C380.4 112 384 115.6 384 120L384 160L256 160L256 120C256 115.6 259.6 112 264 112zM208 120L208 544L432 544L432 120C432 89.1 406.9 64 376 64L264 64C233.1 64 208 89.1 208 120zM480 160L480 544L512 544C547.3 544 576 515.3 576 480L576 224C576 188.7 547.3 160 512 160L480 160zM160 544L160 160L128 160C92.7 160 64 188.7 64 224L64 480C64 515.3 92.7 544 128 544L160 544z" }))), h("ir-select", { key: 'b407c4c7e7bdeac4d5c147a15076f3745d711fb1', "floating-label": true, label: "Hello", data: [{ value: '1', text: '1' }] }), h("div", { key: '4124bf4c3582e0cbd272822c3e925e62b029fa9e', class: "my-2" }), h("ir-select", { key: '70872f0fbe0da95b79c39641a0cdf9c856d00deb', label: "Hello", data: [{ value: '1', text: '1' }] }), h("div", { key: 'b27b76440bc760cc946e4bbabb025ccbe5fa1fe8', class: "my-2" }), h("ir-select", { key: 'f24ce610a991dbab03cfeb7e53e13cb07e90ec3d', data: [{ value: '1', text: '1' }] }), h("div", { key: '23f9097a3466389b554745a203ca0f47ba909204', class: "card p-1" }, [
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