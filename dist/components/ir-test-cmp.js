import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';
import { H as sleep } from './utils.js';
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
        return (h(Host, { key: 'bc09b0517b70f45aab32b3e5a38cc5c91c154484' }, h("nav", { key: 'ef2ea0e88c8d5659578c2ff5ba976710fcba4c4e', class: "modern-navbar" }, h("span", { key: '61b77ec80b9cebb009145fdacaa8ffa848dcc672', class: "overdue-banner" }, "Overdue $300"), h("div", { key: '45a863a33061a2b91fb13f3e45229396cd82efcd', class: "navbar-container" }, h("div", { key: '9ef549b5182508b6ed8d9359c6b98fdc4c566cb7', class: "navbar-left" }, h("button", { key: '260cd73dadc87465aa6662924457ff1f246ba9b3', class: "mobile-menu-toggle d-md-none", onClick: () => this.toggleMobileMenu() }, h("span", { key: '6b633b2716ded653ea7e5a2eb5c9555709198e55', class: "hamburger-icon" }, h("span", { key: 'ca16b3b26eb713bb593a8ffd641bf4ac15f0fc00' }), h("span", { key: '0ac7c71a054158ac17125b0d22befede8d8a2395' }), h("span", { key: 'ef942b3f268f2b741ff4900e0cbb90e63c023cba' }))), h("div", { key: '64be18375d74e79bdd12cb1220fc083954bc24fb', class: "navbar-brand" }, "Logo"), h("div", { key: '574e080a20f3cecdd6726dc1162d0e68b4a663c6', class: "d-none d-md-flex " }, h("ir-m-combobox", { key: 'cf16c9051ef6859615ba95e8895e285b5f1713c5', style: { '--ir-combobox-width': 'max-content' }, placeholder: "Find property", dataMode: "static", options: this.staticOptions, onOptionChange: this.handleStaticOptionChange })), h("div", { key: '3d6770b37e6a1b3d867a2f0f0692cb2295ba50da', class: "hotel-name d-none d-md-block" }, "Hotel Name"), h("div", { key: '792854b58219fdb86861b985f65e69a84de0dc0a', class: "ml-auto d-md-none" }, h("ir-notifications", { key: '4575f638e606f05cdcf204f1deb7157febe46d1f' }))), h("div", { key: '8e9c33dae36e8c7781c7bc5e3e48464a80996de4', class: "navbar-center d-none d-md-flex flex-fill mx-auto" }, h("ir-m-combobox", { key: 'f455c32cee365bb9dd3c62af21909af2114bb74c', placeholder: "Search...", dataMode: "static", options: this.staticOptions, onOptionChange: this.handleStaticOptionChange })), h("div", { key: '3e392a7bbeafbe1d5d859baeb7061617302908b5', class: "navbar-right" }, h("ul", { key: '780aa5e53297886dd74c03b4fad24de31d7caca8', class: "nav-items d-none d-md-flex" }, h("li", { key: '0ad0c372f039821e65487e80d8bc66254261fea0', class: "nav-item dropdown" }, h("a", { key: 'e7195183c104b2c26c0bad9c31e3319cf32a8709', "data-reference": "parent", href: "#", role: "button", class: "nav-link", "data-toggle": "dropdown", "aria-expanded": "false" }, "a"), h("ul", { key: 'c44c65ad0a4ab3991272247c9a11aa550e2c3d86', class: `ir-mega-menu mx-auto dropdown-menu-right dropdown-menu    w-100 shadow-sm` }, h("li", { key: '83785b7774507602498e5e936f038a41a3228965' }, h("ul", { key: '4e32cee6acc778d0213c5837d385f32b9aff3b4c', class: "ir-mega-menu-column" }, h("li", { key: '89d58446b1f95000b8a39c1ce52ce53ac5bf3d83', class: "ir-mega-menu-row title" }, "Parameters"), h("li", { key: 'fdadf7e5b0972e1b10dfe658ff3b152dce8cac2e', class: "ir-mega-menu-row" }, h("a", { key: '32417c6162df9acab27382865bb9a260329fa5ba', href: "userinline.aspx" }, "Users List")), h("li", { key: '14327f24cf6a19bde441d26ebd0595c57a784e10', class: "ir-mega-menu-row" }, h("a", { key: '6a1c276f1f409a3265a3f214936c06cb8855222f', href: "languageinline.aspx" }, "System Languages")), h("li", { key: '4683e396b32dcb9603042aea0ec8b6d6aef8b703', class: "ir-mega-menu-row" }, h("a", { key: 'a80b2ba98f049c1bfd05a0abb5f33de699cc3e51', href: "countryinline.aspx" }, "Countries")), h("li", { key: 'f24c18c602a700ea61c0f11320ec28e6c6d40afb', class: "ir-mega-menu-row" }, h("a", { key: 'b0e2e57cd64765692c6ccb0515b2e7b68ecd3f01', href: "level2inline.aspx" }, "Country Level 2")), h("li", { key: '32e40f901ec9652edfb5e4d2d26a87bf3f784129', class: "ir-mega-menu-row" }, h("a", { key: '95a0d3747c5572a588887485f7a6bfc00f07174d', href: "cardinline.aspx" }, "Credit Cards")), h("li", { key: '756ee1e15fa94b0d85be270711e38fb87e03680d', class: "ir-mega-menu-row" }, h("a", { key: '8d70e5ee92bc72df407a6688d3e16e67509c0b75', href: "hotel_chaininline.aspx" }, "Hotel Chains")), h("li", { key: '0442e1454236794c447de75d8feb3883e8ab7017', class: "ir-mega-menu-row" }, h("a", { key: 'fa78881cac9b7c364e7889b42b9d7105c0eab6e9', href: "currencyinline.aspx" }, "Currencies")), h("li", { key: '27259339d7250128b69042a78c9b073519b588bc', class: "ir-mega-menu-row" }, h("a", { key: 'b0f7c0def2b9aed2097ed832137da43932dae6be', href: "amenityinline.aspx" }, "Amenities")), h("li", { key: '3f67c410189a324125ee755bb7103aaef0d2015f', class: "ir-mega-menu-row" }, h("a", { key: 'c2ac352860af61a127e8d11d334e38eff460a08e', href: "foodinline.aspx" }, "Food")), h("li", { key: 'b6d9028032026ac5c122b2bb3fac83ebeff1125a', class: "ir-mega-menu-row" }, h("a", { key: '6a540a098db2163317cbf1999e3b877798c8650a', href: "beddinginline.aspx" }, "Bedding")), h("li", { key: 'b1c53f7b31993dbfc54bddb45288aa017120688c', class: "ir-mega-menu-row" }, h("a", { key: '22d306630422a35f8de561e6cbdf0b9b964b6704', href: "setupinline.aspx" }, "Setup Table")), h("li", { key: 'ae76216d579392add94c96b47eb6b25f77547baf', class: "ir-mega-menu-row" }, h("a", { key: '45cb93a860d2023a5180b945ed8cb0cd46a37127', href: "gwedit.aspx" }, "Payment Gateways")), h("li", { key: '6ffd996a700fc19fcdb44befeb08648dd5dc9de0', class: "ir-mega-menu-row" }, h("a", { key: '4e513bcf8acffadc8d2350d33d8aa474da70c823', href: "channelmanager.aspx" }, "Channel Manager")))), h("li", { key: '36b7fed1ff69dd4f018350dd9fc6b9892c43e888' }, h("ul", { key: 'a4a5a7aa388f88c1e03071d4403257ca85bc3265', class: "ir-mega-menu-column" }, h("li", { key: 'e5172dd9c1f9206d8cfba1200777ba488d90ce49', class: "ir-mega-menu-row title" }, "Main"), h("li", { key: 'a00dd3fcf8a7fecca508f71f26631a605abdbd3d', class: "ir-mega-menu-row" }, h("a", { key: 'ead9c7c949d0a1d1f595da833c82db4ef130694c', href: "mpolist.aspx" }, "MPOs")), h("li", { key: 'a95710424439dd235252417b186383acb27101df', class: "ir-mega-menu-row" }, h("a", { key: 'd19da0cdb6df6ec8245f74ec4c72ce5c01448fcb', href: "aclist.aspx" }, "Properties")), h("li", { key: '189773b5e7534fec2a95d6e31ba998e13ea85710', class: "ir-mega-menu-row" }, h("a", { key: 'd072a3f2f296588cc126f4862346ad649b7ecd79', href: "acbookinglist.aspx?MODE=MPO" }, "Bookings")), h("li", { key: '585d29b1c45850e2b020cf5b06156176ce1b2486', class: "ir-mega-menu-row" }, h("a", { key: '78a64622d348b95305733336df308a0e8192bd0f', href: "mpoaffiliateproperties.aspx" }, "MPO Affiliate Properties")), h("li", { key: '5d783e9bf737e30ae0343b86bd147aedbc2afa5e', class: "ir-mega-menu-row" }, h("a", { key: '42e95d2f738a72e2ac0fc6c9b5fa25584d0c037b', href: "acratesallotment.aspx?VIEW_MODE=CV" }, "MPO Combined Inventory")), h("li", { key: '4ca452a0797850f9b4c89fbe8c542729018cba56', class: "ir-mega-menu-row" }, h("a", { key: 'cd998291f65859ebddf2583e7bc1710fef3fdf24', href: "acbookinglist.aspx?VIEW_MODE=CV" }, "MPO Combined Bookings")), h("li", { key: '968922651221ccb1a3d782226155be034517686f', class: "ir-mega-menu-row" }, h("a", { key: '7b1ddcfaf3a784ee1e9903fbb74617e884afe6a1', href: "Acmemberlist.aspx?VIEW_MODE=CV" }, "MPO Combined Guests")), h("li", { key: '19c3b59c47a525949e132f5e5c631b9b0d05ca39', class: "ir-mega-menu-row" }, h("a", { key: '2b86bd1911edb951be0109ef6efdde7caafae23d', href: "mpobillingreport.aspx" }, "MPO Billing Report")), h("li", { key: '6dd6aeae451cffc963a98be97409141524fac4b6', class: "ir-mega-menu-row" }, h("a", { key: '3b1f00ce81d182e9ff3065dff68a932a269b0f70', href: "Acmemberlist.aspx" }, "Guests")), h("li", { key: 'd15ad934f13ec6aebe41e1b86366818e7458fb5f', class: "ir-mega-menu-row" }, h("a", { key: '88e085e89f0c9888bf017778498a29eeee8fb2c4', href: "acbookinglist.aspx" }, "Bookings")), h("li", { key: '1a6b59d77be1f3ad55d48140816bc31a36dfbdd6', class: "ir-mega-menu-row" }, h("a", { key: 'bfa1e649ba42bd5cec6a0310ce0d570463cb18c4', href: "billing.aspx" }, "Billing")))), h("li", { key: '0eb2d3f07f29c6a57e7f147b9661b3335a40e6e1' }, h("ul", { key: 'bb3963049e5b98fe5b2b80f4381c1cb44b48d163', class: "ir-mega-menu-column" }, h("li", { key: '9a00ab9e27354245017e5fd0a0228da321344501', class: "ir-mega-menu-row title" }, "Locations"), h("li", { key: 'a4c307e0b4fd468b28d482f81f794b02a3eda4fc', class: "ir-mega-menu-row" }, h("a", { key: '1f6b44d7403cd55a27d477603e9570a8ca5e1902', href: "poicategoriesinline.aspx" }, "Types")), h("li", { key: '4c18f462e6186ee627fabd63d92255847e48a028', class: "ir-mega-menu-row" }, h("a", { key: 'e4ec3767d0512c37b343f313a3adc0f9c0ad1e07', href: "poilist.aspx" }, "List")))), h("li", { key: 'ae6e208d83f25a8d99fc9a657448ce2af3c5fcd1' }, h("ul", { key: '87c0f76a00aa18163af315b4ab0e0cd2e29d639b', class: "ir-mega-menu-column" }, h("li", { key: '3d043e17eccff7613e38f5af7f87b4cdb3ebd45a', class: "ir-mega-menu-row title" }, "Referrers"), h("li", { key: '3374b5564657537dfb88671e79d79787db18ee5e', class: "ir-mega-menu-row" }, h("a", { key: 'cc6adcf6c0dfad77225ecf9056ec74efe348d290', href: "affiliatelist.aspx" }, "Affiliates")), h("li", { key: 'd9851016f44df1842441d5865da5881645e2b87d', class: "ir-mega-menu-row" }, h("a", { key: '0b29e5f7d9b1e126da26e8de06d69c951b55633a', href: "travelagentslist.aspx" }, "Travel Agents ...NOT USED")))))), h("li", { key: '23d5f6a66b74e33fe106eb84746c77774f3498e6', class: "nav-item" }, h("a", { key: 'b3e3efa9f9da85428f187d798e595ebd94d0cef8', href: "#", class: "nav-link" }, "b")), h("li", { key: 'd5e17635eafc1f75f9cd3d089fd810d7886b0e5b', class: "nav-item" }, h("a", { key: 'cabdbe564b6a0085af8da900cb9e9efb5b29161b', href: "#", class: "nav-link" }, "c")), h("li", { key: '38520856c38b6cc268a6ad19627709681439f972', class: "nav-item" }, h("a", { key: 'cd4544ab379ac1830e58931d56551779bd7b8625', href: "#", class: "nav-link" }, "d")), h("li", { key: '6ec54d3749803274546785f2fc72b2cabe39018d', class: "nav-item" }, h("div", { key: 'cf7fcd6b1942871f57be4b33355ac5c66c7f2c9d', class: "d-flex align-items-center justify-content-center", style: { marginTop: '2px' } }, h("ir-notifications", { key: 'a49bf794e74bb73eae30e1a6a385c141add84c4a' }))))), h("div", { key: '49d04f9bc5e0dcaa042b3163b6c34761f1c75d7e', class: `mobile-menu ${this.isMobileMenuOpen ? 'active' : ''}` }, h("div", { key: 'fb80910871707c74e3a53455e883dc614b24f7bd', class: "mobile-menu-header" }, h("div", { key: '76e9a6a7d93829cea0823f2be02dcbb7a76f65e8', class: "hotel-name" }, "Hotel Name"), h("button", { key: '8427d4841cecc612d865355a2f0ee366cad8e579', class: "close-menu", onClick: () => this.toggleMobileMenu() }, "\u00D7")), h("div", { key: '58112edc0cec527633741581e056cb4e26b0fddf', class: "mobile-search" }, h("ir-m-combobox", { key: 'bcb36f769e81420aa66b04e5646593af1c9368e3', placeholder: "Search...", dataMode: "static", options: this.staticOptions, onOptionChange: this.handleStaticOptionChange })), h("ac-pages-menu", { key: '1347adf8a16c316166d85ddef080237504cf6c45', location: "sheet", "onLink-clicked": async (e) => {
                await sleep(1000);
                window.location.href = e.detail.target.href;
            }, pages: this.pages }))), h("div", { key: '35ac835655f7dc006d83b59f4dced3b19c289ec4', class: "submenus d-none d-md-block" }, h("ac-pages-menu", { key: '4c04f8b26352b2e4c7fd1dcb8f42e986e4b7b285', pages: this.pages }))), h("section", { key: 'c4b8cd824a762be4f1792a77af988f581675910b', class: "p-2" }, h("div", { key: 'e1839aa5dcf80709da769eab98957d28e13c130d', class: "row g-3" }, h("div", { key: '6abe565acd870efcf1f5ef2646805ceb4799e569', class: "col-md-3" }, h("h5", { key: '64c744bb9221daac2599b46e3bc0f0a398e5cdc6' }, "Static Options Example"), h("ir-m-combobox", { key: '4db303a786f3f970bfb4a9c09bf86be3328536ef', placeholder: "Select an option...", dataMode: "static", options: this.staticOptions, onOptionChange: this.handleStaticOptionChange }, h("svg", { key: 'b30f978aeeda4643bc339490d733eaf39e5be444', xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 640 640", slot: "prefix" }, h("path", { key: 'c54e4b1998999f6292eef8c6e569d67dbcc5e7d2', d: "M480 272C480 317.9 465.1 360.3 440 394.7L566.6 521.4C579.1 533.9 579.1 554.2 566.6 566.7C554.1 579.2 533.8 579.2 521.3 566.7L394.7 440C360.3 465.1 317.9 480 272 480C157.1 480 64 386.9 64 272C64 157.1 157.1 64 272 64C386.9 64 480 157.1 480 272zM272 416C351.5 416 416 351.5 416 272C416 192.5 351.5 128 272 128C192.5 128 128 192.5 128 272C128 351.5 192.5 416 272 416z" }))), this.selectedStaticOption && h("p", { key: '0afeb01d228b9197f2c9d6754e0f8455743f69d3', class: "mt-2 text-muted" }, "Selected: ", this.selectedStaticOption.label)), h("div", { key: 'fafb7dc2b99c416daf0c67512f550269d3c314c4', class: "col-md-3" }, h("h5", { key: 'f627fa2836ccb8ee7e54c355677345a767104a4d' }, "External API - Countries"), h("ir-m-combobox", { key: 'eb139844c72e3f6a1c7a4ca6cc58512d3d354e13', placeholder: "Search countries...", dataMode: "external", options: this.countryOptions, loading: this.isLoadingCountries, debounceDelay: 300, onSearchQuery: this.handleCountrySearch, onOptionChange: this.handleCountryChange }), this.selectedCountry && h("p", { key: '3a7ff964e0b7307b113c798c45acca7bc03c1cae', class: "mt-2 text-muted" }, "Selected: ", this.selectedCountry.label)), h("div", { key: 'b27bb65ae9a106d3265442517c0a24553d35aaa5', class: "col-md-3" }, h("h5", { key: 'df519443af8dd677cff6230791f262414dc8d0c0' }, "Custom Dropdown Content"), h("ir-m-combobox", { key: 'f0d10029a0941b26748a5327c0d50bfbe5e82991', class: "custom-width", ref: el => (this.customComboboxRef = el), placeholder: "Search with custom dropdown...", dataMode: "external", options: this.customOptions, loading: this.isLoadingCustom, useSlot: true, debounceDelay: 500, onSearchQuery: this.handleCustomSearch, onOptionChange: this.handleCustomOptionChange }, h("div", { key: '86cae25ad41ea080e19d159e07b729bc92baf2ab', slot: "dropdown-content" }, this.isLoadingCustom && h("div", { key: 'd2ddc0cf6d32bdcfe866f603869a07f81f8834ce', class: "dropdown-item" }, "\uD83D\uDD04 Loading custom results..."), !this.isLoadingCustom && this.customOptions.length === 0 && h("div", { key: '0e8e8ece5c3c6b7bc15eaca95a1b718cb592a6da', class: "dropdown-item" }, "\uD83D\uDD0D Type to search..."), !this.isLoadingCustom &&
            this.customOptions.map((option, index) => (h("div", { key: index, class: "dropdown-item d-flex align-items-center", "data-option": option.value, "data-label": option.label, onClick: () => this.handleCustomOptionClick(option), onMouseEnter: e => {
                    const element = e.target;
                    const slotIndex = element.getAttribute('data-slot-index');
                    if (slotIndex && this.customComboboxRef) {
                        this.customComboboxRef.focusedIndex = parseInt(slotIndex);
                    }
                }, style: { cursor: 'pointer' } }, h("span", { class: "me-2" }, "\u2B50"), h("div", null, h("div", { class: "fw-bold" }, option.label), h("small", { class: "text-muted" }, "Custom option with ID: ", option.value))))))), this.selectedCustomOption && h("p", { key: 'cff2fa5bdf0299069bb55afab55ed68118976089', class: "mt-2 text-muted" }, "Selected: ", this.selectedCustomOption.label))), h("div", { key: '5c069cf4339a75ac77b10b39108bb436d07e7681', class: 'd-flex align-items-center my-1', style: { gap: '1rem' } }, h("button", { key: '96547c5e9a21e240e50a21d030560634d23230e6', class: "btn btn-primary", onClick: () => (this.notificationCount += 1) }, "+"), h("button", { key: '91549980c8db0092377f81f08f6c11b7fd085a80', class: "btn btn-primary", onClick: () => (this.notificationCount -= 1) }, "-")), h("ir-input-text", { key: 'b5b6fcc48f7292175c03a03be595ab93983627e6', variant: "floating-label", class: "my-text-input", label: "First name" }, h("svg", { key: '6bde5a8d2f1a04f0b9bcf0655509f296a6191d07', xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 640 640", slot: "prefix" }, h("path", { key: '9496b73b514b67ca457550f895a5ec2cd0302fc7', d: "M480 272C480 317.9 465.1 360.3 440 394.7L566.6 521.4C579.1 533.9 579.1 554.2 566.6 566.7C554.1 579.2 533.8 579.2 521.3 566.7L394.7 440C360.3 465.1 317.9 480 272 480C157.1 480 64 386.9 64 272C64 157.1 157.1 64 272 64C386.9 64 480 157.1 480 272zM272 416C351.5 416 416 351.5 416 272C416 192.5 351.5 128 272 128C192.5 128 128 192.5 128 272C128 351.5 192.5 416 272 416z" })), h("svg", { key: 'ba15fe6d8908bc1abd0d29b316571e6d08059a2c', slot: "suffix", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 640 640" }, h("path", { key: 'c2ebf8943a2393d1b3fe0735aaadf59ffa92ef8e', d: "M264 112L376 112C380.4 112 384 115.6 384 120L384 160L256 160L256 120C256 115.6 259.6 112 264 112zM208 120L208 544L432 544L432 120C432 89.1 406.9 64 376 64L264 64C233.1 64 208 89.1 208 120zM480 160L480 544L512 544C547.3 544 576 515.3 576 480L576 224C576 188.7 547.3 160 512 160L480 160zM160 544L160 160L128 160C92.7 160 64 188.7 64 224L64 480C64 515.3 92.7 544 128 544L160 544z" }))), h("ir-select", { key: '14d72ac13cd141d1ce5f76637b9162a3959a3f81', "floating-label": true, label: "Hello", data: [{ value: '1', text: '1' }] }), h("div", { key: '2c935a2781f7634c97ca4f4cc3372f61a910d5c7', class: "my-2" }), h("ir-select", { key: '8ca1ca27398c71ea581458e4f6720bfc30ec4e98', label: "Hello", data: [{ value: '1', text: '1' }] }), h("div", { key: '8b8565d443b1b8627ac486886581e34baeade82e', class: "my-2" }), h("ir-select", { key: '06d418fba4e4dd6e3e030455d23bff4ac650dd4d', data: [{ value: '1', text: '1' }] }), h("div", { key: 'd25756ef96554e2e6b63394b5672a82f0eeaca5f', class: "card p-1" }, [
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