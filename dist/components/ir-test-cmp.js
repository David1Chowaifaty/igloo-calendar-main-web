import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';
import { T as sleep } from './utils.js';
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
        return (h(Host, { key: 'e286c173204f228df2ba29241dabf12239ae280d' }, h("nav", { key: '9a3695c4fde5cce83f16593321c8550ce81b2ce0', class: "modern-navbar" }, h("span", { key: '14a63eea90b87cffd4dc23e6bc46e1f34158f41b', class: "overdue-banner" }, "Overdue $300"), h("div", { key: 'bc7cfa4c0bbb0d8c4566ceb422c6cbcbedd0c2b2', class: "navbar-container" }, h("div", { key: 'f5fe8a8c1a3b8e5dda7881dab8acdcc8954574ff', class: "navbar-left" }, h("button", { key: '032eb0e7fe387fb17848d62ae207e37b22d2b213', class: "mobile-menu-toggle d-md-none", onClick: () => this.toggleMobileMenu() }, h("span", { key: '93c93a28ac5e5046f0a76e71f08fcc920fd5c9f9', class: "hamburger-icon" }, h("span", { key: 'd761760dda900e62ff6c03096a826158a6e53b4e' }), h("span", { key: '8c25b919684d1fa4f754285308756bb96015893f' }), h("span", { key: '61df52332427da576a698325fb805e7dfd02a66e' }))), h("div", { key: 'ec8f31f96d69459aad6c3e92a2a6a34654745fd7', class: "navbar-brand" }, "Logo"), h("div", { key: '771d595bdd2e0d64d1c29dda7029ae59ed71115b', class: "d-none d-md-flex " }, h("ir-m-combobox", { key: 'b8d6090832f7a32ec7f0cd5d1636741c8f7bfa48', style: { '--ir-combobox-width': 'max-content' }, placeholder: "Find property", dataMode: "static", options: this.staticOptions, onOptionChange: this.handleStaticOptionChange })), h("div", { key: 'e729fb548292f7291abf8160ef1f8cbb85736b7e', class: "hotel-name d-none d-md-block" }, "Hotel Name"), h("div", { key: '84965364b37c6980daae06a8f6c3cad7187c6bd3', class: "ml-auto d-md-none" }, h("ir-notifications", { key: 'de81299f105f2e2d2fe013be3351886f632c6f93', notifications: this.notifications }))), h("div", { key: 'ce143d73a3c1a7fe6522b9751bcf73cd195f7474', class: "navbar-center d-none d-md-flex flex-fill mx-auto" }, h("ir-m-combobox", { key: '4f5a062c9665af1ab9dc27db68519dd27d745149', placeholder: "Search...", dataMode: "static", options: this.staticOptions, onOptionChange: this.handleStaticOptionChange })), h("div", { key: '8f2ecd8a7297a50e57f4f92735534754be5b3a25', class: "navbar-right" }, h("ul", { key: '1cdbecf59f4a29aa52edaacbf6456cb3e582dcb2', class: "nav-items d-none d-md-flex" }, h("li", { key: '04da687fd7a3c5b6e2b9827c22fc4a8a3d478be9', class: "nav-item dropdown" }, h("a", { key: '73c4f44aa140e088252caf94f00c211825e4160c', "data-reference": "parent", href: "#", role: "button", class: "nav-link", "data-toggle": "dropdown", "aria-expanded": "false" }, "a"), h("ul", { key: 'd9b851e83093b3f9c416f5f039798d508fce6c94', class: `ir-mega-menu mx-auto dropdown-menu-right dropdown-menu    w-100 shadow-sm` }, h("li", { key: '6294ece3499b0c3a7a45d55e2423d684b5ee8a74' }, h("ul", { key: '8bd252a8ea38601009bf42d29db14187db15fdaa', class: "ir-mega-menu-column" }, h("li", { key: '7e6cc88d206d625fccf0589659380d2ba816db3e', class: "ir-mega-menu-row title" }, "Parameters"), h("li", { key: '19f4711b2a99bb12af9479e6ad39663b149ce63a', class: "ir-mega-menu-row" }, h("a", { key: 'b75054dcfd8b382aac763295367fd378c2f9a691', href: "userinline.aspx" }, "Users List")), h("li", { key: 'd24b4be7c7765bf8847d44f5002776ad82e9bed2', class: "ir-mega-menu-row" }, h("a", { key: '0404877a49fa2710dd19434def2c83bc58cb990f', href: "languageinline.aspx" }, "System Languages")), h("li", { key: 'c07b6958f1f911867c99827b691a20f93cf2fdee', class: "ir-mega-menu-row" }, h("a", { key: '81a6b92321aa8fbedc5d98a84a9d0576404884ad', href: "countryinline.aspx" }, "Countries")), h("li", { key: '7d7c6842e69677f3efdf736528ce11d6df81233c', class: "ir-mega-menu-row" }, h("a", { key: '332508a5e8afff695b6bda071f7fe0d236651328', href: "level2inline.aspx" }, "Country Level 2")), h("li", { key: '4004925c7e6d1f1c561b2867b11f19339f595bf9', class: "ir-mega-menu-row" }, h("a", { key: 'cf0f6dc74b317956315df8b6fad48d86545742d7', href: "cardinline.aspx" }, "Credit Cards")), h("li", { key: '72d3c47176fda411285c0b168d243f5d844e459a', class: "ir-mega-menu-row" }, h("a", { key: '95eb4dbecf688fbcda4427fabc958b846c677e63', href: "hotel_chaininline.aspx" }, "Hotel Chains")), h("li", { key: '3c76bce9f9a7b3977f161efb96a1e48c7a0ecc6c', class: "ir-mega-menu-row" }, h("a", { key: 'b7c4d75a0051c205463e42c0d93521a8a3702adb', href: "currencyinline.aspx" }, "Currencies")), h("li", { key: '47e877b38f3280a8a67d845b5cd9463eb92aa98c', class: "ir-mega-menu-row" }, h("a", { key: '9156fdcbb95c58a41c896259f8a272728e46e9ab', href: "amenityinline.aspx" }, "Amenities")), h("li", { key: '72e1a9a030caaa5ebfb0ef0b20ecd305a677c744', class: "ir-mega-menu-row" }, h("a", { key: '06ebbd4df139a154b95b80d9f5a264e8ae7f3e73', href: "foodinline.aspx" }, "Food")), h("li", { key: 'deb6227e900d4f82018c24e1c57ed4805b44ac97', class: "ir-mega-menu-row" }, h("a", { key: 'd38d48eb22e7e8d4e219927ba0ef666328bb6fac', href: "beddinginline.aspx" }, "Bedding")), h("li", { key: '0db1b43cb48ba994785d512963e8530a2b7a5328', class: "ir-mega-menu-row" }, h("a", { key: '6b88423a47c8710b12cc6447db00e7e109933da5', href: "setupinline.aspx" }, "Setup Table")), h("li", { key: 'd3a634c0c564428c22154c14d57ad2823580d936', class: "ir-mega-menu-row" }, h("a", { key: '5a41fa27e18e147d54d497232eaeeacf0ed51fdf', href: "gwedit.aspx" }, "Payment Gateways")), h("li", { key: '24ac82657391ee02c70f6d3e44cb1577d5860b3c', class: "ir-mega-menu-row" }, h("a", { key: '13749a9a3d5fd9cbc106ddbe253f243c47907fa7', href: "channelmanager.aspx" }, "Channel Manager")))), h("li", { key: '151f097267b4e091d2f7d8d93facb677f99cb11b' }, h("ul", { key: '6c7b9c2519837aa16fa62e7c06cb549aa4b907e2', class: "ir-mega-menu-column" }, h("li", { key: '8b8530765f108de2a2e069c5e0292b8fa7e136e1', class: "ir-mega-menu-row title" }, "Main"), h("li", { key: '4eeece38944b0b108812990ea9b2eba9e41c2bd5', class: "ir-mega-menu-row" }, h("a", { key: 'c98630ae1aaaaaae1d246d8213f51cb33312224b', href: "mpolist.aspx" }, "MPOs")), h("li", { key: '565af7487a563325122f3e199af6017c43fec571', class: "ir-mega-menu-row" }, h("a", { key: '6b250f74f7914253487f6c52ef845449fa9ef1bd', href: "aclist.aspx" }, "Properties")), h("li", { key: '79bdae7036351bc0ef146ff6bb360e1f6ffc01b8', class: "ir-mega-menu-row" }, h("a", { key: '06a6e253d0ab5a814a11f170b9f8828cf64e45cd', href: "acbookinglist.aspx?MODE=MPO" }, "Bookings")), h("li", { key: '33acb8129968df2260b5c7757d996ec61201020b', class: "ir-mega-menu-row" }, h("a", { key: 'ceddabca10167bfa69ab55585630787832cb47f5', href: "mpoaffiliateproperties.aspx" }, "MPO Affiliate Properties")), h("li", { key: '2ef8dfa371284ae4fde65d512ebcf716e1f5cd53', class: "ir-mega-menu-row" }, h("a", { key: '32e60f7e513dc34f6666272493b03dd76380b57e', href: "acratesallotment.aspx?VIEW_MODE=CV" }, "MPO Combined Inventory")), h("li", { key: 'aa373385c8233fc00a403e2dca36a92c663499ae', class: "ir-mega-menu-row" }, h("a", { key: '0f476940cf0809577c797f76086dfffe3522975c', href: "acbookinglist.aspx?VIEW_MODE=CV" }, "MPO Combined Bookings")), h("li", { key: 'a5487bdcdbc467740bccbeb00eca08ab0d1e3e0e', class: "ir-mega-menu-row" }, h("a", { key: '11f7aad6bc1edbec06715a8d96bc19ae2baca54e', href: "Acmemberlist.aspx?VIEW_MODE=CV" }, "MPO Combined Guests")), h("li", { key: '7b24516e8a88d8c2fa54fc1a2153a0f2181be077', class: "ir-mega-menu-row" }, h("a", { key: 'c982672ad1d9976c88f56b6b930dc8d11ee6eb0c', href: "mpobillingreport.aspx" }, "MPO Billing Report")), h("li", { key: 'dc3e9c9e27c3e2942142e3846b5e7f7936d896ad', class: "ir-mega-menu-row" }, h("a", { key: '596d93bcae2edb27cdb8a392d7ec4d9580928cb2', href: "Acmemberlist.aspx" }, "Guests")), h("li", { key: 'f58509c35038312a83354f2a95635be29a2ca10a', class: "ir-mega-menu-row" }, h("a", { key: '012aaeea3b0dc1726258b26986bbf4e9e976b47c', href: "acbookinglist.aspx" }, "Bookings")), h("li", { key: '762d158f7a13ac2c3ce143402655e4b81a28bccc', class: "ir-mega-menu-row" }, h("a", { key: 'c0689280a036715f7b4bb222e320671c17711adc', href: "billing.aspx" }, "Billing")))), h("li", { key: 'a4a4b1b81bb9ae369f79234dd7dea831c122d2e1' }, h("ul", { key: '2834db63108f7c9f01be23e8e8334506a8af0308', class: "ir-mega-menu-column" }, h("li", { key: '1e723c99db5a18f6479c634fc00251afaf58f157', class: "ir-mega-menu-row title" }, "Locations"), h("li", { key: '72ee0ad561472de4d805e3e289a2ecea89de9373', class: "ir-mega-menu-row" }, h("a", { key: 'fba9569c52200321c09ed099272e5fea4ffd72f3', href: "poicategoriesinline.aspx" }, "Types")), h("li", { key: '7799038e20693034bf940c5dc26279459b053235', class: "ir-mega-menu-row" }, h("a", { key: '6f950dbee32de4d68f15a23496d29f1ff4068b76', href: "poilist.aspx" }, "List")))), h("li", { key: '4dd856e44252f20e911a41c1435a7545b537e375' }, h("ul", { key: '18132bdc7187e33903da1152b35034544310bbc8', class: "ir-mega-menu-column" }, h("li", { key: '7db6c7ce0842d5b2ef4eb848b497e2201f6c6ab7', class: "ir-mega-menu-row title" }, "Referrers"), h("li", { key: '9d32597177eef4d2732e7f27dd3e2747ee775fa2', class: "ir-mega-menu-row" }, h("a", { key: 'b6ca0233ba58ce0d4cfc030bbb56ae11e503e50c', href: "affiliatelist.aspx" }, "Affiliates")), h("li", { key: '2bcd1bc468bf02dba9c9b53f679dc698b94122e0', class: "ir-mega-menu-row" }, h("a", { key: '7ef2001ccdbd77ba07e966c6e95e34bd0726e7e5', href: "travelagentslist.aspx" }, "Travel Agents ...NOT USED")))))), h("li", { key: 'f186ba0cacf11773d20090cf70d7f26b1e2a74ec', class: "nav-item" }, h("a", { key: '12e357dad63d6f6fca7a63d3d8b55ef20b26076c', href: "#", class: "nav-link" }, "b")), h("li", { key: 'cb40bfbbe98e8190f0555ee7ae41ccb8067c70ea', class: "nav-item" }, h("a", { key: '9922c43b49740038b8238a3cf9d6f22f6ebde00d', href: "#", class: "nav-link" }, "c")), h("li", { key: '30d5b638e750b5e24f30d1e2429732cc8d5eaf80', class: "nav-item" }, h("a", { key: 'bdc3085d9c6f6099b8798a0f3602d0d220e2b01a', href: "#", class: "nav-link" }, "d")), h("li", { key: '1bdb9951fc347085d27268d9a5a8663b7035c0e3', class: "nav-item" }, h("div", { key: '4687260c7b274ecd352cf4f7c507b1626075a576', class: "d-flex align-items-center justify-content-center", style: { marginTop: '2px' } }, h("ir-notifications", { key: '70a902a74a700bcebb69bf65439e52ade99fde81', notifications: this.notifications }))))), h("div", { key: '35dab62db40bf7bab41934f0f3a7858d8429a768', class: `mobile-menu ${this.isMobileMenuOpen ? 'active' : ''}` }, h("div", { key: '41a53d7c3c9fcae2bdf88e41146c9854ae174cf1', class: "mobile-menu-header" }, h("div", { key: '7b5e4bfc25770febf2eaef25387d5886d2c7bca2', class: "hotel-name" }, "Hotel Name"), h("button", { key: 'bc4d2f2e83d6ea2d6845e48aaae7dd3df1ff9e22', class: "close-menu", onClick: () => this.toggleMobileMenu() }, "\u00D7")), h("div", { key: 'aa4cdb1c31f38d7674d54fd1ea1b73f49e6df2f6', class: "mobile-search" }, h("ir-m-combobox", { key: 'b3d6c5f69a666142a6dd289213a17e9cee7b5f7d', placeholder: "Search...", dataMode: "static", options: this.staticOptions, onOptionChange: this.handleStaticOptionChange })), h("ac-pages-menu", { key: '0d43e3dcc1f44b56aa42916672dc21844c4085f7', location: "sheet", "onLink-clicked": async (e) => {
                await sleep(1000);
                window.location.href = e.detail.target.href;
            }, pages: this.pages }))), h("div", { key: 'ee8c89bc301b0db708afecd4af43b1d2b0bee49c', class: "submenus d-none d-md-block" }, h("ac-pages-menu", { key: '171ea4f15d08d192025bceb78b78d01ad80a5950', pages: this.pages }))), h("section", { key: 'cc48c1be8f31f88f957bc22ee9d8ca2bae8a2259', class: "p-2" }, h("div", { key: '5e7e38e97f54435258fd4740a678283bd7d78554', class: "row g-3" }, h("div", { key: 'd1d51c591232db57c98b8d32c631c843f266d96b', class: "col-md-3" }, h("h5", { key: '303c3bda37c15db0583adb07b3865cfc7f0d6f50' }, "Static Options Example"), h("ir-m-combobox", { key: 'c02ae4cc05057edad874e127e5f06543128a0e98', placeholder: "Select an option...", dataMode: "static", options: this.staticOptions, onOptionChange: this.handleStaticOptionChange }, h("svg", { key: '0e0554d4b42ed4f1070cfd0e42443ba262540c23', xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 640 640", slot: "prefix" }, h("path", { key: '2667f2f0df50ff3cbf4a8f69140eeca8c8ba0db3', d: "M480 272C480 317.9 465.1 360.3 440 394.7L566.6 521.4C579.1 533.9 579.1 554.2 566.6 566.7C554.1 579.2 533.8 579.2 521.3 566.7L394.7 440C360.3 465.1 317.9 480 272 480C157.1 480 64 386.9 64 272C64 157.1 157.1 64 272 64C386.9 64 480 157.1 480 272zM272 416C351.5 416 416 351.5 416 272C416 192.5 351.5 128 272 128C192.5 128 128 192.5 128 272C128 351.5 192.5 416 272 416z" }))), this.selectedStaticOption && h("p", { key: '26b418e89987b13c3faf0bfa7b6d13619022181b', class: "mt-2 text-muted" }, "Selected: ", this.selectedStaticOption.label)), h("div", { key: '267ad6435e1d43c1dfa3fe17002be0ae91f02f0d', class: "col-md-3" }, h("h5", { key: '74dd8b2d50373dc71c98acf4337eed8376c1ee04' }, "External API - Countries"), h("ir-m-combobox", { key: '3ddf9d9c5bb9c74dd9061e18f5ba2e9aaac688ec', placeholder: "Search countries...", dataMode: "external", options: this.countryOptions, loading: this.isLoadingCountries, debounceDelay: 300, onSearchQuery: this.handleCountrySearch, onOptionChange: this.handleCountryChange }), this.selectedCountry && h("p", { key: '5da1061fc8ec6ebceb55cc9fb6cbd3431cba996f', class: "mt-2 text-muted" }, "Selected: ", this.selectedCountry.label)), h("div", { key: '8b12bf355a7e09d9078268e1b4d5996d9cec97d0', class: "col-md-3" }, h("h5", { key: '89d2d37d150a118aa36e0ae88d396f256afcec2d' }, "Custom Dropdown Content"), h("ir-m-combobox", { key: 'ab65474d9d69469b0e0098165aa90a03a2e8d0cd', class: "custom-width", ref: el => (this.customComboboxRef = el), placeholder: "Search with custom dropdown...", dataMode: "external", options: this.customOptions, loading: this.isLoadingCustom, useSlot: true, debounceDelay: 500, onSearchQuery: this.handleCustomSearch, onOptionChange: this.handleCustomOptionChange }, h("div", { key: '0b37b47ec4cf1f17226a7ada06735085616adc6b', slot: "dropdown-content" }, this.isLoadingCustom && h("div", { key: '6d9c02877a0be3bb64955537b86e0220515ed5a1', class: "dropdown-item" }, "\uD83D\uDD04 Loading custom results..."), !this.isLoadingCustom && this.customOptions.length === 0 && h("div", { key: 'ceca3120f2e4a836080a8ad0e6da0f8138b76a88', class: "dropdown-item" }, "\uD83D\uDD0D Type to search..."), !this.isLoadingCustom &&
            this.customOptions.map((option, index) => (h("div", { key: index, class: "dropdown-item d-flex align-items-center", "data-option": option.value, "data-label": option.label, onClick: () => this.handleCustomOptionClick(option), onMouseEnter: e => {
                    const element = e.target;
                    const slotIndex = element.getAttribute('data-slot-index');
                    if (slotIndex && this.customComboboxRef) {
                        this.customComboboxRef.focusedIndex = parseInt(slotIndex);
                    }
                }, style: { cursor: 'pointer' } }, h("span", { class: "me-2" }, "\u2B50"), h("div", null, h("div", { class: "fw-bold" }, option.label), h("small", { class: "text-muted" }, "Custom option with ID: ", option.value))))))), this.selectedCustomOption && h("p", { key: '7fdf168d8e3d3dfa6471d3af95669bba6c2935f2', class: "mt-2 text-muted" }, "Selected: ", this.selectedCustomOption.label))), h("div", { key: 'a7af45304682bec2287920e3adef07db658fe10a', class: 'd-flex align-items-center my-1', style: { gap: '1rem' } }, h("button", { key: 'c80c43001670779fbb601e043362a87da8ba1460', class: "btn btn-primary", onClick: () => (this.notificationCount += 1) }, "+"), h("button", { key: 'a52b80f513a4a6fd749abe8457e821513e654c23', class: "btn btn-primary", onClick: () => (this.notificationCount -= 1) }, "-")), h("ir-input-text", { key: '035c62151285b186bf20ced07e443a3c89341009', variant: "floating-label", class: "my-text-input", label: "First name" }, h("svg", { key: 'b916752e9c3d09626c844e058c35feeb22d2a6fa', xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 640 640", slot: "prefix" }, h("path", { key: '7d0155cffa13a20d3ef728aef6bbbec43cd22cfd', d: "M480 272C480 317.9 465.1 360.3 440 394.7L566.6 521.4C579.1 533.9 579.1 554.2 566.6 566.7C554.1 579.2 533.8 579.2 521.3 566.7L394.7 440C360.3 465.1 317.9 480 272 480C157.1 480 64 386.9 64 272C64 157.1 157.1 64 272 64C386.9 64 480 157.1 480 272zM272 416C351.5 416 416 351.5 416 272C416 192.5 351.5 128 272 128C192.5 128 128 192.5 128 272C128 351.5 192.5 416 272 416z" })), h("svg", { key: 'de2bbe96d408e6a76f86a2d7871f27157bc4db18', slot: "suffix", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 640 640" }, h("path", { key: '33ff3391ef97e4eab0f3a27798fb711c559796bb', d: "M264 112L376 112C380.4 112 384 115.6 384 120L384 160L256 160L256 120C256 115.6 259.6 112 264 112zM208 120L208 544L432 544L432 120C432 89.1 406.9 64 376 64L264 64C233.1 64 208 89.1 208 120zM480 160L480 544L512 544C547.3 544 576 515.3 576 480L576 224C576 188.7 547.3 160 512 160L480 160zM160 544L160 160L128 160C92.7 160 64 188.7 64 224L64 480C64 515.3 92.7 544 128 544L160 544z" }))), h("ir-select", { key: '75a4c5c18962b05e11e7e651fd81934ed8613c1a', "floating-label": true, label: "Hello", data: [{ value: '1', text: '1' }] }), h("div", { key: '1aa870b7aaa2df7423f82f24a3d7581103ac010d', class: "my-2" }), h("ir-select", { key: 'c961a9b78d81862aca6618d3a81cfe71be3ac93b', label: "Hello", data: [{ value: '1', text: '1' }] }), h("div", { key: '26d344a77d6da5e30a7fb667e38905347eba7cdc', class: "my-2" }), h("ir-select", { key: 'b0c09027ec0a04b96e1642700db89aea396879af', data: [{ value: '1', text: '1' }] }), h("div", { key: 'b546b70e21bbf36a93b248dbddbd172dcdd602fe', class: "card p-1" }, [
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