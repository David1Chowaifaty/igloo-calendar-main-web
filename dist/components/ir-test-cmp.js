import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';
import { R as sleep } from './utils.js';
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
        this.countryOptions = [];
        this.customOptions = [];
        this.isLoadingCountries = false;
        this.isLoadingCustom = false;
        this.staticOptions = [
            { value: 'option1', label: 'Option 1' },
            { value: 'option2', label: 'Option 2' },
            { value: 'option3', label: 'Option 3 ajnajanjanjna janajnjanjan najnajnajn ajnaj' },
            { value: 'option4', label: 'Option 4' },
            { value: 'option5', label: 'Option 5' },
        ];
        this.handleStaticOptionChange = (event) => {
            this.selectedStaticOption = event.detail;
        };
        this.handleCountryChange = (event) => {
            this.selectedCountry = event.detail;
        };
        this.handleCustomOptionChange = (event) => {
            this.selectedCustomOption = event.detail;
        };
        this.handleCountrySearch = async (event) => {
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
        this.handleCustomSearch = async (event) => {
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
        this.handleCustomOptionClick = (option) => {
            if (this.customComboboxRef) {
                this.customComboboxRef.selectOptionFromSlot(option);
            }
        };
        this.notificationCount = 0;
        this.isMobileMenuOpen = false;
        this.toggleMobileMenu = () => {
            this.isMobileMenuOpen = !this.isMobileMenuOpen;
        };
        this.pages = [
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
        this.notifications = [
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
    }
    render() {
        return (h(Host, { key: 'cd741a9a61ae6d16cf0e34144d72850f04c38d82' }, h("nav", { key: '5ba3a45b1435f9f6eb1692497b8bffbd8e73b64b', class: "modern-navbar" }, h("span", { key: '8922d63cf00cd4ec348f31333cb258696f633e2d', class: "overdue-banner" }, "Overdue $300"), h("div", { key: '33698086d59edaa4c995a7060606686792abbd61', class: "navbar-container" }, h("div", { key: '10029babe9b3974a21959300ef650e6b626d9e06', class: "navbar-left" }, h("button", { key: 'f473b695e0f2fc49561b4d76bbbb990ab856d3ef', class: "mobile-menu-toggle d-md-none", onClick: () => this.toggleMobileMenu() }, h("span", { key: 'a1084a5a615f1c432cf9ba93465858298706e644', class: "hamburger-icon" }, h("span", { key: '8bae6829821286e7b6a77024d9756959794e3053' }), h("span", { key: '4193aeba1e51aafbcb38002a2fbbe9b2480779f3' }), h("span", { key: 'a92689389fb87862103a0c473ae4bd5567f58e47' }))), h("div", { key: '4ac884d8be69492dcea12bbe6135150de3fd3ef2', class: "navbar-brand" }, "Logo"), h("div", { key: '17e33ab3ca7aa2927966264a34b87bda555e9d11', class: "d-none d-md-flex " }, h("ir-m-combobox", { key: 'ed67c945632a5fcb84f74f30faded1766cb23476', style: { '--ir-combobox-width': 'max-content' }, placeholder: "Find property", dataMode: "static", options: this.staticOptions, onOptionChange: this.handleStaticOptionChange })), h("div", { key: '7894cf1cb3b475a8483bf4350a74810a33e44629', class: "hotel-name d-none d-md-block" }, "Hotel Name"), h("div", { key: '4c52013e4ef15f862660606153ab60917a339c52', class: "ml-auto d-md-none" }, h("ir-notifications", { key: '8def870a3c63e267744d29aae7f1580f1da59bf8', notifications: this.notifications }))), h("div", { key: 'bfd411a734b4b2787118fe4a1ca7866bb0e838ce', class: "navbar-center d-none d-md-flex flex-fill mx-auto" }, h("ir-m-combobox", { key: 'a2248dc61686254004768bd9a854e705cb1b72a3', placeholder: "Search...", dataMode: "static", options: this.staticOptions, onOptionChange: this.handleStaticOptionChange })), h("div", { key: '5a5f7c4d73ba19c97ef5423c7dcea6903c821836', class: "navbar-right" }, h("ul", { key: '66c1c88f6054a17f5a4334037221c8e6a9afc0ea', class: "nav-items d-none d-md-flex" }, h("li", { key: 'bf323f7745aab72fe1ad854639117ba9307d0f62', class: "nav-item dropdown" }, h("a", { key: '3c84955d9951a9adcd3ad26429066c1bdfd7104e', "data-reference": "parent", href: "#", role: "button", class: "nav-link", "data-toggle": "dropdown", "aria-expanded": "false" }, "a"), h("ul", { key: '03fcc59c482e0d316a37d99d4d4abb27ae5a93ad', class: `ir-mega-menu mx-auto dropdown-menu-right dropdown-menu    w-100 shadow-sm` }, h("li", { key: '3ce2bc1079d0f4cf2ca35f5d6bc510e5636bb522' }, h("ul", { key: 'e605728112ceedfc80d94f7691127ca8a112fab7', class: "ir-mega-menu-column" }, h("li", { key: 'd9489cc2353fb8485895733b6e32491c2e8ca5f8', class: "ir-mega-menu-row title" }, "Parameters"), h("li", { key: 'ae1e7a50c9966a6ed06c9113bb5abb596ec3238e', class: "ir-mega-menu-row" }, h("a", { key: '6532122d2735d6bcd3991bd7b0aca793a1f90850', href: "userinline.aspx" }, "Users List")), h("li", { key: '09007d3752c976519475714e87606b2528c8b056', class: "ir-mega-menu-row" }, h("a", { key: '965b72b95b07010beb77ccdf55ae3a616d4ae47a', href: "languageinline.aspx" }, "System Languages")), h("li", { key: 'fe8554fb231b6c4d3d3959bf08ee8a6d7156ca67', class: "ir-mega-menu-row" }, h("a", { key: 'b7f795152b30eb756f9c7b76891aa88c8bf9a0e3', href: "countryinline.aspx" }, "Countries")), h("li", { key: 'bb0ec3a01fa128e434d0debc780aa16e4cc161d2', class: "ir-mega-menu-row" }, h("a", { key: 'a5dc039f78127dc21e15cdf7d5245a2a4f01a7b9', href: "level2inline.aspx" }, "Country Level 2")), h("li", { key: '75607036d3b399f468e650f91a39c108f3af43f3', class: "ir-mega-menu-row" }, h("a", { key: '206be1adc72e0443de0710df94faff32275f19f1', href: "cardinline.aspx" }, "Credit Cards")), h("li", { key: 'ce2e1499b966044c27b16c676eb675a2579c860d', class: "ir-mega-menu-row" }, h("a", { key: '7e9975ea61cb4eb1f374423de89b037f7075e91c', href: "hotel_chaininline.aspx" }, "Hotel Chains")), h("li", { key: 'd8d2b60f82b1467d89fc9c3f6f4a9f7d4d9fe2a9', class: "ir-mega-menu-row" }, h("a", { key: '76cc78fe017ffce02b68bdb10484760e0b96f61a', href: "currencyinline.aspx" }, "Currencies")), h("li", { key: '91b5a87a28d9ec27b86d64c12272c51e7ceb0f46', class: "ir-mega-menu-row" }, h("a", { key: '0a7292e2f9b748602c007a202f77c2955feee472', href: "amenityinline.aspx" }, "Amenities")), h("li", { key: '92fa3a2eb6adb880c93df8a9be874f5e23b724b9', class: "ir-mega-menu-row" }, h("a", { key: '8133f76ec37e16a6ea413847735ee4e4d5f0efab', href: "foodinline.aspx" }, "Food")), h("li", { key: '6f60fd637d6cc2c993532234c5262212c75b7cee', class: "ir-mega-menu-row" }, h("a", { key: '0f1f85f5a2d1abde5a40aeb4ecc64d774f2b4bec', href: "beddinginline.aspx" }, "Bedding")), h("li", { key: '411651e96e5ca7230090ec2bbd062e92d11c0c62', class: "ir-mega-menu-row" }, h("a", { key: '54c0cdbf26ba5d99a4f48cb1a11933b617bde669', href: "setupinline.aspx" }, "Setup Table")), h("li", { key: 'dca5bd680f1d8d4136bc259f51514083d7eb26b2', class: "ir-mega-menu-row" }, h("a", { key: 'e1add490ca90050fdf04af4b35c61f2f00bbd096', href: "gwedit.aspx" }, "Payment Gateways")), h("li", { key: '52611f94026a79add7cd35cd33ee20879a1dd6f7', class: "ir-mega-menu-row" }, h("a", { key: '056f916f90dd76ac293593df0daa8ae8f3be348e', href: "channelmanager.aspx" }, "Channel Manager")))), h("li", { key: '78ba60059aed5bcc5f6565825671d51562dc93ac' }, h("ul", { key: '44aea60947f3c397b73c9f6b727379c2ec53f0e3', class: "ir-mega-menu-column" }, h("li", { key: '36c3c5c185bc628382dd18c5fa78f7276532af4b', class: "ir-mega-menu-row title" }, "Main"), h("li", { key: '2acdcc47160d4c915253318ba01db3975cf6bb31', class: "ir-mega-menu-row" }, h("a", { key: '91068d6ef4ce0676d1ed38016dbd1dcd6c441c0a', href: "mpolist.aspx" }, "MPOs")), h("li", { key: '678c85609bb6a9d90ddb1701b681a5199725537a', class: "ir-mega-menu-row" }, h("a", { key: '87d729a329e1ca67ef5076e68c346b010af6c9bf', href: "aclist.aspx" }, "Properties")), h("li", { key: 'a87f5c671f25a91f5f14501917b7f9e9129fd75a', class: "ir-mega-menu-row" }, h("a", { key: 'b9f130d6908c327f641d08474507e0ec11481ad0', href: "acbookinglist.aspx?MODE=MPO" }, "Bookings")), h("li", { key: '66cc78cdc93681f025b75da8491c7582b3b0c429', class: "ir-mega-menu-row" }, h("a", { key: '57abc5cd1d66ddbf19909506733bfdda70744ae6', href: "mpoaffiliateproperties.aspx" }, "MPO Affiliate Properties")), h("li", { key: 'dcc3ebe9a682a86a9312681698d6b5e6790e2c8e', class: "ir-mega-menu-row" }, h("a", { key: 'cad451149e18216bce938e327930364cafd696a0', href: "acratesallotment.aspx?VIEW_MODE=CV" }, "MPO Combined Inventory")), h("li", { key: 'f2f6079150d9de731f0caffefe63eb99d584a428', class: "ir-mega-menu-row" }, h("a", { key: '8da031daa8ac82dace158996f8b80af5bce04848', href: "acbookinglist.aspx?VIEW_MODE=CV" }, "MPO Combined Bookings")), h("li", { key: 'affe99b0f67604a8acfdfa592d911e30bfaa498d', class: "ir-mega-menu-row" }, h("a", { key: 'ed41f686069937c0312f0a87809abad75f7229ef', href: "Acmemberlist.aspx?VIEW_MODE=CV" }, "MPO Combined Guests")), h("li", { key: '4397e98c9e10110cf65d64ac85fb2267f721b493', class: "ir-mega-menu-row" }, h("a", { key: 'a90a6a1b658242841a551033ff464b2ac1514059', href: "mpobillingreport.aspx" }, "MPO Billing Report")), h("li", { key: '9a32451002af403c0ba77f8dafa09dfd626106d6', class: "ir-mega-menu-row" }, h("a", { key: 'fa029c49e041a7b8dc958b7ef8231dfd2f84299e', href: "Acmemberlist.aspx" }, "Guests")), h("li", { key: '85b13799757f9c1222062b76a31aa305e5f63806', class: "ir-mega-menu-row" }, h("a", { key: '4265eb86b02b7a0d0bca6c9cf44d7b1bad4137a0', href: "acbookinglist.aspx" }, "Bookings")), h("li", { key: '5ff918c23f71fb30db43666675e1e09e374b0422', class: "ir-mega-menu-row" }, h("a", { key: 'bb50f2c1f6dd39ce84c9bcc1afee996950fba8b7', href: "billing.aspx" }, "Billing")))), h("li", { key: '26b90581cb7a8028f672e616cda5cb4e10ec8923' }, h("ul", { key: 'de0a76e2e22d8544c49cdd2cd4f1d7cb455379c0', class: "ir-mega-menu-column" }, h("li", { key: '0da6d465cfebbac29947c139bf817b71fafcb713', class: "ir-mega-menu-row title" }, "Locations"), h("li", { key: 'b17cbe29f33b27ffb643159c32145a84c60a6228', class: "ir-mega-menu-row" }, h("a", { key: 'f088001b208f6169789b29897b25af1089f8e8c4', href: "poicategoriesinline.aspx" }, "Types")), h("li", { key: '6f0d8bc210d2e25b0a4df3dbe32d4f1922f9bb86', class: "ir-mega-menu-row" }, h("a", { key: '12f0c241325554ceff24606b36fa0bde2b7278be', href: "poilist.aspx" }, "List")))), h("li", { key: '441773fbe87ab32bf38b828de69aa2282325d437' }, h("ul", { key: '5ea21d40aadb2f5659b4d5fa2d2ecd6d59de51bc', class: "ir-mega-menu-column" }, h("li", { key: 'ebc5bf1dac0386167e886db78350f2aadb8654e0', class: "ir-mega-menu-row title" }, "Referrers"), h("li", { key: '00042a4c0f4a883c01d89847a392005665f2e5ce', class: "ir-mega-menu-row" }, h("a", { key: 'b81a9b06ac4b6401188e7db32ade49a06c7fc550', href: "affiliatelist.aspx" }, "Affiliates")), h("li", { key: '50beff5929f8520f4efe1d292be44ce82e1ef8e0', class: "ir-mega-menu-row" }, h("a", { key: '84a086d15a56a12599c2f85c66bd024503b3e374', href: "travelagentslist.aspx" }, "Travel Agents ...NOT USED")))))), h("li", { key: 'e3e552c421095975c76630124ea999d1aa4095f8', class: "nav-item" }, h("a", { key: '4c5b7d29400bc0140242e5b8c82976273f07bcdd', href: "#", class: "nav-link" }, "b")), h("li", { key: '5f24c755bbd46b96fafccf78b0af15450f634129', class: "nav-item" }, h("a", { key: '113e5ceb9ffa4320dd3b2de3e240b776d32f54d8', href: "#", class: "nav-link" }, "c")), h("li", { key: '1fe8a0c313f449afefbe990f180677bd0f1dbb06', class: "nav-item" }, h("a", { key: '6f7e494ae6d3c24cd23b25ccad709e419d43f314', href: "#", class: "nav-link" }, "d")), h("li", { key: '7231df8693a1e168e77757e09dec8d2fbd04dcaa', class: "nav-item" }, h("div", { key: 'ed875c8976003c5186cb1e8de3360c217bb3ecbd', class: "d-flex align-items-center justify-content-center", style: { marginTop: '2px' } }, h("ir-notifications", { key: '709fd94a5c8700cabaf5f29a8fe22c357d92a0d4', notifications: this.notifications }))))), h("div", { key: '1b88880593f4cfd399a8c6023664231c670f08ca', class: `mobile-menu ${this.isMobileMenuOpen ? 'active' : ''}` }, h("div", { key: 'df0c590226a4a2b59ac9ee517e6212fba25723f2', class: "mobile-menu-header" }, h("div", { key: '01cfc98aeb1c42ca7047f2af88cafc94ce5486e0', class: "hotel-name" }, "Hotel Name"), h("button", { key: '5540474bad69f5c4f49cef331a44ecec820997a4', class: "close-menu", onClick: () => this.toggleMobileMenu() }, "\u00D7")), h("div", { key: 'd7e8c111f767c989a847f0439e7196539c8dba87', class: "mobile-search" }, h("ir-m-combobox", { key: '95a26297dbed9b82e2f2f54508c90a48f8f0b07e', placeholder: "Search...", dataMode: "static", options: this.staticOptions, onOptionChange: this.handleStaticOptionChange })), h("ac-pages-menu", { key: 'e062cc2dda9c660b48cdb550f482c356ba2ad86e', location: "sheet", "onLink-clicked": async (e) => {
                await sleep(1000);
                window.location.href = e.detail.target.href;
            }, pages: this.pages }))), h("div", { key: '12108adba12d81b45cdb03370ed70b55d104b6a2', class: "submenus d-none d-md-block" }, h("ac-pages-menu", { key: '91adc157ac40de85d94336e0335dd5372870717e', pages: this.pages }))), h("section", { key: 'acf8f233276c0bad393b049a3819d3613509cc28', class: "p-2" }, h("div", { key: '402d039ab995c0bcbc6c9855cff7c59b2e3b9fd6', class: "row g-3" }, h("div", { key: '318fce16bd613ba8f3f211447e6227ccc56c1e23', class: "col-md-3" }, h("h5", { key: '83caac437550c48dab13a82bc10ddcc00a48f9d8' }, "Static Options Example"), h("ir-m-combobox", { key: 'b0d7ae944133bf7584af88ee4bfa9b400e83e3fa', placeholder: "Select an option...", dataMode: "static", options: this.staticOptions, onOptionChange: this.handleStaticOptionChange }, h("svg", { key: '7b4fa19f116d469c4c3baf07f6472d9fb50138bd', xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 640 640", slot: "prefix" }, h("path", { key: 'c5f885d73434e99b33ae2890b5437349cc615234', d: "M480 272C480 317.9 465.1 360.3 440 394.7L566.6 521.4C579.1 533.9 579.1 554.2 566.6 566.7C554.1 579.2 533.8 579.2 521.3 566.7L394.7 440C360.3 465.1 317.9 480 272 480C157.1 480 64 386.9 64 272C64 157.1 157.1 64 272 64C386.9 64 480 157.1 480 272zM272 416C351.5 416 416 351.5 416 272C416 192.5 351.5 128 272 128C192.5 128 128 192.5 128 272C128 351.5 192.5 416 272 416z" }))), this.selectedStaticOption && h("p", { key: 'd3da3986c496f742dfcd184d7508659cafc55d88', class: "mt-2 text-muted" }, "Selected: ", this.selectedStaticOption.label)), h("div", { key: 'c6cc0d9c394d89c5a5c9a87752cd5b7e879ecfbe', class: "col-md-3" }, h("h5", { key: 'ba48158334ca8b450f4014fbd120252ff3c9664f' }, "External API - Countries"), h("ir-m-combobox", { key: 'da56e074c447fbcfd66d6295456790ce8a807ead', placeholder: "Search countries...", dataMode: "external", options: this.countryOptions, loading: this.isLoadingCountries, debounceDelay: 300, onSearchQuery: this.handleCountrySearch, onOptionChange: this.handleCountryChange }), this.selectedCountry && h("p", { key: 'aa8add7a7bb52fb740194c39ebc25b0d48fd3d4d', class: "mt-2 text-muted" }, "Selected: ", this.selectedCountry.label)), h("div", { key: '35057b6e03a993829619fca08e830382d7640f4e', class: "col-md-3" }, h("h5", { key: 'e4271ae86f36521fbed49f64ddc63b5db27a8faf' }, "Custom Dropdown Content"), h("ir-m-combobox", { key: 'ccea2440b20a1ff475a5a78bb0d7e6c023983b23', class: "custom-width", ref: el => (this.customComboboxRef = el), placeholder: "Search with custom dropdown...", dataMode: "external", options: this.customOptions, loading: this.isLoadingCustom, useSlot: true, debounceDelay: 500, onSearchQuery: this.handleCustomSearch, onOptionChange: this.handleCustomOptionChange }, h("div", { key: 'b3d373d317a15a32fd8609c7e0096bee61650593', slot: "dropdown-content" }, this.isLoadingCustom && h("div", { key: '8ae4886b7ba04376be44464d8bba109d2ad77935', class: "dropdown-item" }, "\uD83D\uDD04 Loading custom results..."), !this.isLoadingCustom && this.customOptions.length === 0 && h("div", { key: 'c6a14d6adb4a6eb4d6ce134cf6c82747abc6254f', class: "dropdown-item" }, "\uD83D\uDD0D Type to search..."), !this.isLoadingCustom &&
            this.customOptions.map((option, index) => (h("div", { key: index, class: "dropdown-item d-flex align-items-center", "data-option": option.value, "data-label": option.label, onClick: () => this.handleCustomOptionClick(option), onMouseEnter: e => {
                    const element = e.target;
                    const slotIndex = element.getAttribute('data-slot-index');
                    if (slotIndex && this.customComboboxRef) {
                        this.customComboboxRef.focusedIndex = parseInt(slotIndex);
                    }
                }, style: { cursor: 'pointer' } }, h("span", { class: "me-2" }, "\u2B50"), h("div", null, h("div", { class: "fw-bold" }, option.label), h("small", { class: "text-muted" }, "Custom option with ID: ", option.value))))))), this.selectedCustomOption && h("p", { key: '3cf2efc97c036daea9a2711e7bdb997eecaab198', class: "mt-2 text-muted" }, "Selected: ", this.selectedCustomOption.label))), h("div", { key: 'a9339c85517d698af837d2d14b3e87ffd24c545a', class: 'd-flex align-items-center my-1', style: { gap: '1rem' } }, h("button", { key: '5be37b9ca30b99b2696a4b899ebe0315d7913aa0', class: "btn btn-primary", onClick: () => (this.notificationCount += 1) }, "+"), h("button", { key: 'cc61b851275c8b1b743b0689d305060dd573378a', class: "btn btn-primary", onClick: () => (this.notificationCount -= 1) }, "-")), h("ir-input-text", { key: '83c8893ad6a1196a783b680ab47dddcd1d3b0a3d', variant: "floating-label", class: "my-text-input", label: "First name" }, h("svg", { key: '2119aa3fb67e015ed9cf06f3a0a3f3449532b514', xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 640 640", slot: "prefix" }, h("path", { key: '41d8634c724943574de0f8cdbb0b6429b3cd7a1e', d: "M480 272C480 317.9 465.1 360.3 440 394.7L566.6 521.4C579.1 533.9 579.1 554.2 566.6 566.7C554.1 579.2 533.8 579.2 521.3 566.7L394.7 440C360.3 465.1 317.9 480 272 480C157.1 480 64 386.9 64 272C64 157.1 157.1 64 272 64C386.9 64 480 157.1 480 272zM272 416C351.5 416 416 351.5 416 272C416 192.5 351.5 128 272 128C192.5 128 128 192.5 128 272C128 351.5 192.5 416 272 416z" })), h("svg", { key: 'bf566f9bd659a118ee9715b0dda4fb35344f7647', slot: "suffix", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 640 640" }, h("path", { key: '19627fce9a4b8763d72b94e8bfb6018b74c7d439', d: "M264 112L376 112C380.4 112 384 115.6 384 120L384 160L256 160L256 120C256 115.6 259.6 112 264 112zM208 120L208 544L432 544L432 120C432 89.1 406.9 64 376 64L264 64C233.1 64 208 89.1 208 120zM480 160L480 544L512 544C547.3 544 576 515.3 576 480L576 224C576 188.7 547.3 160 512 160L480 160zM160 544L160 160L128 160C92.7 160 64 188.7 64 224L64 480C64 515.3 92.7 544 128 544L160 544z" }))), h("ir-select", { key: '0fbfb4424cfa62855f323a7845659d89d5ccaaca', "floating-label": true, label: "Hello", data: [{ value: '1', text: '1' }] }), h("div", { key: '6adba19c1cce6fb92900b3cf8d8b3c87c88adeb6', class: "my-2" }), h("ir-select", { key: 'e9faabf763463e1c621e272f2e7c5bbdd5d214ca', label: "Hello", data: [{ value: '1', text: '1' }] }), h("div", { key: '427b984f5a4345a8e2250799de9b92f84c981896', class: "my-2" }), h("ir-select", { key: '7c3a967a601a9443887d2d8c91b5a4d07926d804', data: [{ value: '1', text: '1' }] }), h("div", { key: 'e2310c665da6b0e7212cba71c024733f51cf9c05', class: "card p-1" }, [
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
        ].map(row => (h("div", { key: row.id, class: 'payment-item' }, h("div", { class: "payment-body" }, h("div", { class: "payment-fields" }, h("p", null, h("b", null, row.cause)), h("p", { class: "text-muted" }, row.date)), row.reference && (h("p", { class: "payment-reference text-muted" }, h("b", null, "Ref: "), row === null || row === void 0 ? void 0 :
            row.reference))), h("div", { class: "d-flex align-items-center justify-content-between", style: { gap: '0.5rem' } }, h("p", { class: `payment-amount ${row.type === 'Credit' ? 'is-credit' : 'is-debit'}` }, row.type === 'Credit' ? '+' : '-', "$US ", row.amount), h("div", { class: "payment-actions" }, h("ir-button", { variant: "icon", icon_name: "save", style: colorVariants.secondary }), h("ir-button", { variant: "icon", style: colorVariants.danger, icon_name: "trash" }))))))))));
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