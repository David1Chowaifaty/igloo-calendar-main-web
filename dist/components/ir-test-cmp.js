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
        return (h(Host, { key: '8c2c230a3ee9cfcb00911b1372d86690b7ed5395' }, h("nav", { key: '6d706544cccdf501781860e221a09a0f6e057740', class: "modern-navbar" }, h("span", { key: '8a517545b75a982100a14c3c3e06fac318bc9f7f', class: "overdue-banner" }, "Overdue $300"), h("div", { key: 'c182e4770922aa60e580fb1e3ddfb3e8cced90bb', class: "navbar-container" }, h("div", { key: '323d03a0c68ed9615b3b34f180739a7c8acf7d69', class: "navbar-left" }, h("button", { key: '2d1ea4f0fbd1043b8b1fa4e0a6807bb88b1c3a91', class: "mobile-menu-toggle d-md-none", onClick: () => this.toggleMobileMenu() }, h("span", { key: '646256d01bec5bb0f85dc6ca2e20644bb7f97154', class: "hamburger-icon" }, h("span", { key: '019a58e8ec65585a221f02e0a4b38729f29f7a96' }), h("span", { key: '88135c7c687b1a69c49fd9939c73ae3f018fed26' }), h("span", { key: 'c42302e2f176bc36f4f41099797f535c43849a03' }))), h("div", { key: '19486535a30b52d95edd53798d15dbaf0356e55c', class: "navbar-brand" }, "Logo"), h("div", { key: '25a6ce46974ec194ac42edd30793e692971dd690', class: "d-none d-md-flex " }, h("ir-m-combobox", { key: '8752a4ad5523d474d416c37ff9cc374536e8859e', style: { '--ir-combobox-width': 'max-content' }, placeholder: "Find property", dataMode: "static", options: this.staticOptions, onOptionChange: this.handleStaticOptionChange })), h("div", { key: '226071ab2dafa81d43794622fd6b117a71c7d0ce', class: "hotel-name d-none d-md-block" }, "Hotel Name"), h("div", { key: 'f6720fdb19b8e213770bc72a35d8c56db02bac11', class: "ml-auto d-md-none" }, h("ir-notifications", { key: 'b34833e71511412b83344c979dc4f2e8e17cdb3c', notifications: this.notifications }))), h("div", { key: '1b6f833436188ab13d12eaf083f6c62e2b48efca', class: "navbar-center d-none d-md-flex flex-fill mx-auto" }, h("ir-m-combobox", { key: 'f73f1021199f4a6bdb70453c22b81ac0cc48121b', placeholder: "Search...", dataMode: "static", options: this.staticOptions, onOptionChange: this.handleStaticOptionChange })), h("div", { key: '5b80ebc6aadafbb37622879a7931fb438a79c2b9', class: "navbar-right" }, h("ul", { key: 'b73debe8160773a7855566de08958e57b639608e', class: "nav-items d-none d-md-flex" }, h("li", { key: '3270a6ce178aeb1c7e8474a7a9eb8dadf4e20a5c', class: "nav-item dropdown" }, h("a", { key: '4d101cefd5a59888f602ca2137dbaf80736fb8dc', "data-reference": "parent", href: "#", role: "button", class: "nav-link", "data-toggle": "dropdown", "aria-expanded": "false" }, "a"), h("ul", { key: '8835d5bba006f7a318c9f465d30494bffc272b5d', class: `ir-mega-menu mx-auto dropdown-menu-right dropdown-menu    w-100 shadow-sm` }, h("li", { key: 'f6431a0a71d587f36a76a49e904a744f42a3177b' }, h("ul", { key: 'f3a92208a1f109b7c7b800f9bd338c230cb0a582', class: "ir-mega-menu-column" }, h("li", { key: '65f9e331edb3088bc0acaf007639f937c930d1a6', class: "ir-mega-menu-row title" }, "Parameters"), h("li", { key: '6a18b5861d16042fc875442faf212ecbfe8ee25a', class: "ir-mega-menu-row" }, h("a", { key: '30dc6a49ad930d1701c0f48d89b8608e96cf0b81', href: "userinline.aspx" }, "Users List")), h("li", { key: '60f0d43563ed694c09faedecb7d945c0fa6dca09', class: "ir-mega-menu-row" }, h("a", { key: '920e37fef868b3e07693a59b806750f5818c06d7', href: "languageinline.aspx" }, "System Languages")), h("li", { key: 'eb23f5402565ed3b2717a36b90232322c5075f08', class: "ir-mega-menu-row" }, h("a", { key: 'a3d3d15ef89f7194054b984be353f3a91f0df0bb', href: "countryinline.aspx" }, "Countries")), h("li", { key: '07bc040d89d363aa76b2cdf831c0d6622458b0c3', class: "ir-mega-menu-row" }, h("a", { key: '6dc43725cc1bc442a15fcd28eefe762e69904ece', href: "level2inline.aspx" }, "Country Level 2")), h("li", { key: '78841a320e6dfd266768f9817acfd563d44993e1', class: "ir-mega-menu-row" }, h("a", { key: '017770a91450d8e09d6d52f0b2907475e551d6f3', href: "cardinline.aspx" }, "Credit Cards")), h("li", { key: 'bf3a7c899953b3fdd25e82157b814ffa8c0f48bd', class: "ir-mega-menu-row" }, h("a", { key: '7884d7c343198bf9dd612879639f71329af78164', href: "hotel_chaininline.aspx" }, "Hotel Chains")), h("li", { key: '43460a804df1e04af00d56d834fcff3018d61ecf', class: "ir-mega-menu-row" }, h("a", { key: 'e835477d0f7578ebd71734c01d81da3e5ed3077b', href: "currencyinline.aspx" }, "Currencies")), h("li", { key: '5e5fe33f4c59d4f3f1714c2f01448b6a8ae83704', class: "ir-mega-menu-row" }, h("a", { key: '2bba122376624b9be94b739864c217388811aa16', href: "amenityinline.aspx" }, "Amenities")), h("li", { key: '8809444d550bebe11493f4c60800e9219740aca8', class: "ir-mega-menu-row" }, h("a", { key: '59404037c34aeed842eba8b7cac0cadfa1ca0d50', href: "foodinline.aspx" }, "Food")), h("li", { key: '77e73efc0dfa1bf5fc9888af0606cafc67b00139', class: "ir-mega-menu-row" }, h("a", { key: 'bf0a5a6dbc9f70d8d62c983a5c02114fb0ddd236', href: "beddinginline.aspx" }, "Bedding")), h("li", { key: '26a970cce65efcfd48c68d073e491ef1abf52142', class: "ir-mega-menu-row" }, h("a", { key: '756f13ed82b05fe8d5a17585943d91200edf083d', href: "setupinline.aspx" }, "Setup Table")), h("li", { key: '864d9047fbdfaf5712db7d5fabea24f7e411a026', class: "ir-mega-menu-row" }, h("a", { key: '0119681c01e50c2ba7586bbdbdc92648cfbb1be9', href: "gwedit.aspx" }, "Payment Gateways")), h("li", { key: '080cabd7d9936955d2d0369458fad71319438172', class: "ir-mega-menu-row" }, h("a", { key: '3d4e371199569bbf2a2e5c7959734ec793915746', href: "channelmanager.aspx" }, "Channel Manager")))), h("li", { key: 'eca09b89e3ed761466dd93b988450f2f230585c7' }, h("ul", { key: 'b6b2e555600003dfb53a71094c49be168237609e', class: "ir-mega-menu-column" }, h("li", { key: '379722202d2831d43ae7598c02e3ab0457dc49de', class: "ir-mega-menu-row title" }, "Main"), h("li", { key: '6f5e5d4438437ad3ff62d389b8182a2e11726482', class: "ir-mega-menu-row" }, h("a", { key: '7736ce6156a62365a1aae3433120a633729f839e', href: "mpolist.aspx" }, "MPOs")), h("li", { key: '62b3b6a3b827e7bcbed802c4bf77dd6fbd7045dc', class: "ir-mega-menu-row" }, h("a", { key: 'b66068877e8f946bfd469b8834c932f3c37dcf21', href: "aclist.aspx" }, "Properties")), h("li", { key: '910474356931a9b68158aeae667cac768aefbcbe', class: "ir-mega-menu-row" }, h("a", { key: '5818e124b11bce244f86dc180d0e177271d37a66', href: "acbookinglist.aspx?MODE=MPO" }, "Bookings")), h("li", { key: '02f67b3bf53a6bb9e03fd0399bdc32889bc5b773', class: "ir-mega-menu-row" }, h("a", { key: '70de69cef23acd8a2e6f3b45881ba2c5f6010033', href: "mpoaffiliateproperties.aspx" }, "MPO Affiliate Properties")), h("li", { key: 'f95df6a9f19c6eb998755fa52ec3a3604a6c0507', class: "ir-mega-menu-row" }, h("a", { key: '10578b785cd9c88b96b5c0ef5c1e89b35dd80099', href: "acratesallotment.aspx?VIEW_MODE=CV" }, "MPO Combined Inventory")), h("li", { key: 'cc3d6b40da4263e419a735d9dd3464bdd20b024e', class: "ir-mega-menu-row" }, h("a", { key: 'cf857261bf8e155c1c5494d8cd9feebce1ba886e', href: "acbookinglist.aspx?VIEW_MODE=CV" }, "MPO Combined Bookings")), h("li", { key: '60f385fca625d9e061a970fb707fb2bf4c36accf', class: "ir-mega-menu-row" }, h("a", { key: '44289e55782e4053740d2de7add88285148eff4b', href: "Acmemberlist.aspx?VIEW_MODE=CV" }, "MPO Combined Guests")), h("li", { key: 'da4984117f847e92346eb6837c7f7e5befbfd574', class: "ir-mega-menu-row" }, h("a", { key: '524f4f1cc94be2784cc5c15bf2bb494951da6ee0', href: "mpobillingreport.aspx" }, "MPO Billing Report")), h("li", { key: '56c4c4891706220c1e65dccd6c571e1e7cbf1545', class: "ir-mega-menu-row" }, h("a", { key: '676e97883404db93ff7de4cda6768fb718007975', href: "Acmemberlist.aspx" }, "Guests")), h("li", { key: '8180c834faf91efc1a8f6ea0f6cd461b8a507882', class: "ir-mega-menu-row" }, h("a", { key: '407003dc39de28d0b7d9e65b536e1dcf0091126f', href: "acbookinglist.aspx" }, "Bookings")), h("li", { key: '0572db7878481ae7f1b2b928e03c26fec4619b0c', class: "ir-mega-menu-row" }, h("a", { key: '1cd2b86ac998e86ffb79fe4daa61e26ac981e69b', href: "billing.aspx" }, "Billing")))), h("li", { key: 'a89dcce864be1c5ded43e2f1d0093b129968cb0e' }, h("ul", { key: 'bb21bfd95a7447b2c8a40b2470605bca37a4fdc2', class: "ir-mega-menu-column" }, h("li", { key: '5edb4f9c838c420776c5bfec2cd83a2a5ce5d869', class: "ir-mega-menu-row title" }, "Locations"), h("li", { key: 'af7aaf8824e62ae9b6193e666038de7a3dd80b1e', class: "ir-mega-menu-row" }, h("a", { key: 'b732a125e8c4356856cd151d1816f5007a274351', href: "poicategoriesinline.aspx" }, "Types")), h("li", { key: 'c735410637d147f147d346725300784c1bb3a4ca', class: "ir-mega-menu-row" }, h("a", { key: '790f55654110862c6aaad58f0cd6d504b0910d1e', href: "poilist.aspx" }, "List")))), h("li", { key: 'b6f7e7510e1ca4b85f99e82fec30720ef47e7c45' }, h("ul", { key: '145c6427ffbe4e220b4bfd0778c8edd3e0545af4', class: "ir-mega-menu-column" }, h("li", { key: 'a1a7e07b105be32ffd402d01519371ef90dbeaf6', class: "ir-mega-menu-row title" }, "Referrers"), h("li", { key: '48b33b2f38d97a9e8cc2ac56b914147af8359a22', class: "ir-mega-menu-row" }, h("a", { key: 'b2320f716fde91bd36c68b033214741e4c8d4f6a', href: "affiliatelist.aspx" }, "Affiliates")), h("li", { key: '7218606e8fd6c61af6f4acc0d65a5f8cf76a419e', class: "ir-mega-menu-row" }, h("a", { key: 'ddd96f2c3f56c6128fdbdb2fec8935cf0079a85d', href: "travelagentslist.aspx" }, "Travel Agents ...NOT USED")))))), h("li", { key: '62e65be5b51203576c065d39bff8aa3c6df57ea2', class: "nav-item" }, h("a", { key: '2ccbe0b4d6668b3534049b7b545e2db347273da5', href: "#", class: "nav-link" }, "b")), h("li", { key: '5a03647b9f463af7821dc36a4db67eb9efb1c417', class: "nav-item" }, h("a", { key: '7493e792212cf7da2899eb5288da8b56c4b01c87', href: "#", class: "nav-link" }, "c")), h("li", { key: '5796bc8619e8fee292644caa4aacca50ec84b9b7', class: "nav-item" }, h("a", { key: 'ceed982e3f7afe201a15bf2f316eb68b115c361b', href: "#", class: "nav-link" }, "d")), h("li", { key: '54d0d4ae49b73a82b6803afbccfc7a4d6b961ef6', class: "nav-item" }, h("div", { key: 'f4d3d61075b0096037cabaaf5c765fb47e6f172d', class: "d-flex align-items-center justify-content-center", style: { marginTop: '2px' } }, h("ir-notifications", { key: 'dd93c78cbd18a5b05a1fe89be6f405db50c24bc7', notifications: this.notifications }))))), h("div", { key: '0a1947311140f30e970f387709a577a046eaf554', class: `mobile-menu ${this.isMobileMenuOpen ? 'active' : ''}` }, h("div", { key: 'f10cb3af43fdfe4624d20ef7cbcddac2faaf30e4', class: "mobile-menu-header" }, h("div", { key: 'd96674388ccf2e66247310c5b5e3441a1ded8187', class: "hotel-name" }, "Hotel Name"), h("button", { key: '4ef8460a641e9987b48eb1867ae85b0ae65ce39d', class: "close-menu", onClick: () => this.toggleMobileMenu() }, "\u00D7")), h("div", { key: 'a6fa805c0a6b2adcb31e7d040562f1c10a3369fc', class: "mobile-search" }, h("ir-m-combobox", { key: '15fb1584b3a19005b150f38024a5c60d51c62cb4', placeholder: "Search...", dataMode: "static", options: this.staticOptions, onOptionChange: this.handleStaticOptionChange })), h("ac-pages-menu", { key: 'b57da6c15ed1ecc156a07d3db24ba422760c1f9b', location: "sheet", "onLink-clicked": async (e) => {
                await sleep(1000);
                window.location.href = e.detail.target.href;
            }, pages: this.pages }))), h("div", { key: '0abb7a22f4ad563cd94daaea6d48187f5a71ae0a', class: "submenus d-none d-md-block" }, h("ac-pages-menu", { key: 'd6dd9775a2d4cb42fda8dc94a9255f4215401996', pages: this.pages }))), h("section", { key: 'bb2de053a1928cfcdf1631fce544f96c12c79769', class: "p-2" }, h("div", { key: 'fd67fd42e8caca550b26e9ccc3b61afaf3b99e73', class: "row g-3" }, h("div", { key: 'a8ca070e07977fa79cc9914ca69a0d62917174a3', class: "col-md-3" }, h("h5", { key: 'aff1bb2df247152208a4331de5ac398863423679' }, "Static Options Example"), h("ir-m-combobox", { key: 'ef5ea3d6951099ae3ff284054083791dd73e5dcf', placeholder: "Select an option...", dataMode: "static", options: this.staticOptions, onOptionChange: this.handleStaticOptionChange }, h("svg", { key: 'a9e418c3f8c4d5eb448197515d3b705a32f6928c', xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 640 640", slot: "prefix" }, h("path", { key: '38f8febc96a9e69d66c8170bfc12a8b1eeedccc1', d: "M480 272C480 317.9 465.1 360.3 440 394.7L566.6 521.4C579.1 533.9 579.1 554.2 566.6 566.7C554.1 579.2 533.8 579.2 521.3 566.7L394.7 440C360.3 465.1 317.9 480 272 480C157.1 480 64 386.9 64 272C64 157.1 157.1 64 272 64C386.9 64 480 157.1 480 272zM272 416C351.5 416 416 351.5 416 272C416 192.5 351.5 128 272 128C192.5 128 128 192.5 128 272C128 351.5 192.5 416 272 416z" }))), this.selectedStaticOption && h("p", { key: 'f8d4eb38c3796d1a3a2ec168e7d82362ef03f1ad', class: "mt-2 text-muted" }, "Selected: ", this.selectedStaticOption.label)), h("div", { key: '2e473c15a4a62a4bee54ebfab97c26a2c2fb2683', class: "col-md-3" }, h("h5", { key: '83502064d141fad9db0fb57be490291a22b3fe1b' }, "External API - Countries"), h("ir-m-combobox", { key: '6304a5e6d1c6f691d1027c8dd8289aab5ee87119', placeholder: "Search countries...", dataMode: "external", options: this.countryOptions, loading: this.isLoadingCountries, debounceDelay: 300, onSearchQuery: this.handleCountrySearch, onOptionChange: this.handleCountryChange }), this.selectedCountry && h("p", { key: 'e446ceca30db228dba899928a3b08b9fd889b017', class: "mt-2 text-muted" }, "Selected: ", this.selectedCountry.label)), h("div", { key: '8f5421936088c2c1ccbb21142ed3fc8c5ec0d60b', class: "col-md-3" }, h("h5", { key: 'd04973fda627dd081d80327c40506bd515fe1184' }, "Custom Dropdown Content"), h("ir-m-combobox", { key: '03d44a2c5660eddb062effee3e1e9db1a2a9a2e1', class: "custom-width", ref: el => (this.customComboboxRef = el), placeholder: "Search with custom dropdown...", dataMode: "external", options: this.customOptions, loading: this.isLoadingCustom, useSlot: true, debounceDelay: 500, onSearchQuery: this.handleCustomSearch, onOptionChange: this.handleCustomOptionChange }, h("div", { key: 'addfe49513a3c6c2482c8902bf96390769679dda', slot: "dropdown-content" }, this.isLoadingCustom && h("div", { key: '1922696a3e2ee400c4bc727bb02cf63f6c8efa18', class: "dropdown-item" }, "\uD83D\uDD04 Loading custom results..."), !this.isLoadingCustom && this.customOptions.length === 0 && h("div", { key: 'df3da1ce3e912ea8df9cd0bc87533f073a67c74c', class: "dropdown-item" }, "\uD83D\uDD0D Type to search..."), !this.isLoadingCustom &&
            this.customOptions.map((option, index) => (h("div", { key: index, class: "dropdown-item d-flex align-items-center", "data-option": option.value, "data-label": option.label, onClick: () => this.handleCustomOptionClick(option), onMouseEnter: e => {
                    const element = e.target;
                    const slotIndex = element.getAttribute('data-slot-index');
                    if (slotIndex && this.customComboboxRef) {
                        this.customComboboxRef.focusedIndex = parseInt(slotIndex);
                    }
                }, style: { cursor: 'pointer' } }, h("span", { class: "me-2" }, "\u2B50"), h("div", null, h("div", { class: "fw-bold" }, option.label), h("small", { class: "text-muted" }, "Custom option with ID: ", option.value))))))), this.selectedCustomOption && h("p", { key: '45f17f6e47d037a25376229c089768b8adcb53e9', class: "mt-2 text-muted" }, "Selected: ", this.selectedCustomOption.label))), h("div", { key: 'e2152e2873aa0752ecf92f06f09c493bea63070d', class: 'd-flex align-items-center my-1', style: { gap: '1rem' } }, h("button", { key: 'ae4b5142f3714682a069dd20c968a08f6f8f1dda', class: "btn btn-primary", onClick: () => (this.notificationCount += 1) }, "+"), h("button", { key: 'd69fb222f8d578115fca16b070ae89b38a2cdef0', class: "btn btn-primary", onClick: () => (this.notificationCount -= 1) }, "-")), h("ir-input-text", { key: '480db33aeaf9384f087e9969a2e35e9ae894ec03', variant: "floating-label", class: "my-text-input", label: "First name" }, h("svg", { key: '4144a5e72651ae718461ab202771e256e3238864', xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 640 640", slot: "prefix" }, h("path", { key: '7a5a190d31bd9edfac20e2493d3bce7fc8319942', d: "M480 272C480 317.9 465.1 360.3 440 394.7L566.6 521.4C579.1 533.9 579.1 554.2 566.6 566.7C554.1 579.2 533.8 579.2 521.3 566.7L394.7 440C360.3 465.1 317.9 480 272 480C157.1 480 64 386.9 64 272C64 157.1 157.1 64 272 64C386.9 64 480 157.1 480 272zM272 416C351.5 416 416 351.5 416 272C416 192.5 351.5 128 272 128C192.5 128 128 192.5 128 272C128 351.5 192.5 416 272 416z" })), h("svg", { key: '07fb759b0a71471d7620983d3805759ff48aace0', slot: "suffix", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 640 640" }, h("path", { key: '8e79a3f146512294c610f72049bec3dce2c1d2bf', d: "M264 112L376 112C380.4 112 384 115.6 384 120L384 160L256 160L256 120C256 115.6 259.6 112 264 112zM208 120L208 544L432 544L432 120C432 89.1 406.9 64 376 64L264 64C233.1 64 208 89.1 208 120zM480 160L480 544L512 544C547.3 544 576 515.3 576 480L576 224C576 188.7 547.3 160 512 160L480 160zM160 544L160 160L128 160C92.7 160 64 188.7 64 224L64 480C64 515.3 92.7 544 128 544L160 544z" }))), h("ir-select", { key: '4acb03d6a48c70079e04950ebad353d268ba222f', "floating-label": true, label: "Hello", data: [{ value: '1', text: '1' }] }), h("div", { key: 'a587271f11eba4d86ced7867fc58bcbded2c1af9', class: "my-2" }), h("ir-select", { key: 'b60ceefa6560131cf30fd44610cdc693837070cb', label: "Hello", data: [{ value: '1', text: '1' }] }), h("div", { key: '5fe8ae49c294d2d63494d9569ca8b0f51ecca971', class: "my-2" }), h("ir-select", { key: 'df9055cb7ecb20c3b650319925d32aa382cee2b5', data: [{ value: '1', text: '1' }] }), h("div", { key: '4b87ef94165f2cb57b4ec59c05ba7be92c38a63c', class: "card p-1" }, [
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