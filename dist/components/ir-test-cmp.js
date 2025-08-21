import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';
import { N as sleep } from './utils.js';
import { d as defineCustomElement$7 } from './ac-pages-menu2.js';
import { d as defineCustomElement$6 } from './ir-button2.js';
import { d as defineCustomElement$5 } from './ir-icons2.js';
import { d as defineCustomElement$4 } from './ir-input-text2.js';
import { d as defineCustomElement$3 } from './ir-m-combobox2.js';
import { d as defineCustomElement$2 } from './ir-notifications2.js';

const irTestCmpCss = ".sc-ir-test-cmp-h{display:block;height:100vh}.modern-navbar.sc-ir-test-cmp{background:#fff;box-shadow:0 2px 10px rgba(0, 0, 0, 0.1);position:sticky;top:0;z-index:1000;border-bottom:1px solid #e5e7eb}.overdue-banner.sc-ir-test-cmp{padding:0.5rem;background:var(--red);color:white;text-align:center;width:100%;display:block}.navbar-container.sc-ir-test-cmp{display:flex;align-items:center;justify-content:space-between;padding:0.5rem 1rem;margin:0 auto}.submenus.sc-ir-test-cmp{background:#104064 !important;width:100%}.navbar-left.sc-ir-test-cmp{display:flex;align-items:center;gap:1rem;width:100%}.custom-width.sc-ir-test-cmp{width:240px}.navbar-brand.sc-ir-test-cmp{font-weight:700;font-size:1.5rem;color:#1f2937}.hotel-name.sc-ir-test-cmp{color:#6b7280;font-size:0.875rem;font-weight:500}.navbar-center.sc-ir-test-cmp{margin-inline:auto}.navbar-right.sc-ir-test-cmp{display:flex;align-items:center}.nav-items.sc-ir-test-cmp{display:flex;list-style:none;margin:0;padding:0;gap:0.5rem}.nav-item.sc-ir-test-cmp{margin:0}.nav-link.sc-ir-test-cmp{display:flex;align-items:center;padding:0.5rem 1rem;text-decoration:none;font-weight:500;border-radius:0.375rem;transition:all 0.2s ease;cursor:pointer}.nav-link.sc-ir-test-cmp:hover{background-color:#f3f4f6;color:#1f2937;text-decoration:none}.mobile-menu-toggle.sc-ir-test-cmp{display:flex;align-items:center;justify-content:center;width:2.5rem;height:2.5rem;border:none;background:none;cursor:pointer;border-radius:0.375rem;transition:background-color 0.2s ease}.mobile-menu-toggle.sc-ir-test-cmp:hover{background-color:#f3f4f6}.hamburger-icon.sc-ir-test-cmp{display:flex;flex-direction:column;width:1.25rem;height:1rem;justify-content:space-between}.hamburger-icon.sc-ir-test-cmp span.sc-ir-test-cmp{display:block;height:2px;width:100%;background-color:#374151;border-radius:1px;transition:all 0.3s ease}.mobile-menu.sc-ir-test-cmp{position:fixed;top:0;left:0;width:100%;height:100vh;background:#fff;transform:translateX(-100%);transition:transform 0.3s ease;z-index:1001;overflow-y:auto}.mobile-menu.active.sc-ir-test-cmp{transform:translateX(0)}.mobile-menu-header.sc-ir-test-cmp{display:flex;align-items:center;justify-content:space-between;padding:1rem;border-bottom:1px solid #e5e7eb}.mobile-menu-header.sc-ir-test-cmp .hotel-name.sc-ir-test-cmp{font-size:1.125rem;font-weight:600;color:#1f2937}.close-menu.sc-ir-test-cmp{display:flex;align-items:center;justify-content:center;width:2.5rem;height:2.5rem;border:none;background:none;font-size:1.5rem;color:#6b7280;cursor:pointer;border-radius:0.375rem;transition:background-color 0.2s ease}.close-menu.sc-ir-test-cmp:hover{background-color:#f3f4f6;color:#374151}.mobile-search.sc-ir-test-cmp{padding:1rem;border-bottom:1px solid #e5e7eb}.mobile-nav-items.sc-ir-test-cmp{list-style:none;margin:0;padding:1rem 0}.mobile-nav-item.sc-ir-test-cmp{margin:0}.mobile-nav-link.sc-ir-test-cmp{display:block;padding:0.75rem 1rem;color:#374151;text-decoration:none;font-weight:500;transition:all 0.2s ease;cursor:pointer}.mobile-nav-link.sc-ir-test-cmp:hover{background-color:#f9fafb;color:#1f2937;text-decoration:none}@media (max-width: 767.98px){.navbar-container.sc-ir-test-cmp{padding:0.5rem 1rem}.navbar-brand.sc-ir-test-cmp{font-size:1.25rem}}.nav-item.sc-ir-test-cmp{color:#1f2937 !important}.ir-mega-menu.sc-ir-test-cmp{list-style:none;margin:0;padding:1rem;grid-template-columns:repeat(4, 1fr) !important;gap:1.25rem;background:#ffffff;border:1px solid #e5e7eb;border-radius:0.5rem}.ir-mega-menu.show.sc-ir-test-cmp{display:grid !important;width:max-content !important}.ir-mega-menu.sc-ir-test-cmp>li.sc-ir-test-cmp{list-style:none}.ir-mega-menu-column.sc-ir-test-cmp{list-style:none;margin:0;padding:0;display:flex;flex-direction:column;gap:0.25rem}.ir-mega-menu-row.title.sc-ir-test-cmp{font-weight:700;color:#0f172a;margin-bottom:0.375rem;font-size:0.825rem;text-transform:uppercase;letter-spacing:0.02em;padding:0rem 0.75rem}.ir-mega-menu-row.sc-ir-test-cmp a.sc-ir-test-cmp{display:block;padding:0.5rem 0.75rem;color:#334155;text-decoration:none;line-height:1;transition:background-color 0.2s ease, color 0.2s ease}.ir-mega-menu-row.sc-ir-test-cmp a.sc-ir-test-cmp:hover{background-color:#f4f5fa;color:#1e2122;text-decoration:none}@media (min-width: 576px){.ir-mega-menu.sc-ir-test-cmp{grid-template-columns:repeat(2, 1fr)}}@media (min-width: 992px){.ir-mega-menu.sc-ir-test-cmp{grid-template-columns:repeat(3, 1fr);padding:1.25rem 1.5rem;gap:1.5rem}}@media (min-width: 768px){.mobile-menu-toggle.sc-ir-test-cmp{display:none !important}.mobile-menu.sc-ir-test-cmp{display:none}.navbar-left.sc-ir-test-cmp{width:auto}}.ir-mega-menu.sc-ir-test-cmp{opacity:0;visibility:hidden;transform:translateY(-10px);transition:opacity 0.3s ease, transform 0.3s ease, visibility 0.3s ease;pointer-events:none;position:absolute;top:100%;left:0;z-index:1000}.ir-mega-menu.show.sc-ir-test-cmp{opacity:1;visibility:visible;transform:translateY(0);pointer-events:auto;display:grid !important}";
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
        return (h(Host, { key: '4f2d375a90b93ae43ac7c582e9047fe21912dd9b' }, h("nav", { key: '6f4c3f95fcbc0c28bdad4576110769027f2e5e14', class: "modern-navbar" }, h("span", { key: '4a2d4e0bd5e67f6dee39e5f8006c788a6a9ccde9', class: "overdue-banner" }, "Overdue $300"), h("div", { key: '89b7a45062b17a5b81bd5daef060faf8ae6bec45', class: "navbar-container" }, h("div", { key: 'a5752da363e8376465bb8d8623ad74b6080962e1', class: "navbar-left" }, h("button", { key: 'a3657e0061d97bc673ba507955708fcfeb6f1e96', class: "mobile-menu-toggle d-md-none", onClick: () => this.toggleMobileMenu() }, h("span", { key: '7d4e62c0ece0e9d038a8c2c8ce46d2c542f0039b', class: "hamburger-icon" }, h("span", { key: '39b08420a59d0954cc6b001fc280f545f612f3c6' }), h("span", { key: '2b0b703c81c46943030a3722a75393f4cd1be9c4' }), h("span", { key: '8d41e4343c63825ca8ebba548e9c0a1a9cfe5f91' }))), h("div", { key: '6dffe65c1f0a56bc85879cc9851ea54aa54f1940', class: "navbar-brand" }, "Logo"), h("div", { key: '09f0bb2aef879cc449bdfd3e4c093a167a656c7c', class: "d-none d-md-flex " }, h("ir-m-combobox", { key: 'a9eabc6ff98ea0810ed6578ffa76771fee8fa193', style: { '--ir-combobox-width': 'max-content' }, placeholder: "Find property", dataMode: "static", options: this.staticOptions, onOptionChange: this.handleStaticOptionChange })), h("div", { key: '8f63ce61142decb19e3f69e603ab887a65a6b5bf', class: "hotel-name d-none d-md-block" }, "Hotel Name"), h("div", { key: '1a46c56e9f27fea62d3540f3f6ab0f58a10946c1', class: "ml-auto d-md-none" }, h("ir-notifications", { key: '1d184a19cca7b8e6e1b9943456a57c3f1673ec4b', notifications: this.notifications }))), h("div", { key: '5a83e78bf6cc7af0e28587c003e340d2156fdb97', class: "navbar-center d-none d-md-flex flex-fill mx-auto" }, h("ir-m-combobox", { key: 'd3d6c665eae852360788350fdfa2cee32fb5abe7', placeholder: "Search...", dataMode: "static", options: this.staticOptions, onOptionChange: this.handleStaticOptionChange })), h("div", { key: 'ee72fd9934a4f0425965a39fd8e0098828629eab', class: "navbar-right" }, h("ul", { key: '988aa44c85c4d2625bbdfc0f4f92293a8205babc', class: "nav-items d-none d-md-flex" }, h("li", { key: '0af6a0b24ba9db8b64c3dbda4dc913b660062b1f', class: "nav-item dropdown" }, h("a", { key: '9f2431205df8b206ce42bdf43e977f0baf4fedf2', "data-reference": "parent", href: "#", role: "button", class: "nav-link", "data-toggle": "dropdown", "aria-expanded": "false" }, "a"), h("ul", { key: '92d522178ecb7cb0ef75df09197353b730a4471e', class: `ir-mega-menu mx-auto dropdown-menu-right dropdown-menu    w-100 shadow-sm` }, h("li", { key: 'cc7a15f20311af4ded8517a9e144ce33e3b5d3ac' }, h("ul", { key: '09382847d40ee51346dff60228bd653098fa6883', class: "ir-mega-menu-column" }, h("li", { key: '10357ce52aa45cd06fe3aca21a90b8eb1caf82f0', class: "ir-mega-menu-row title" }, "Parameters"), h("li", { key: '3ab81907c5ca333a9c23f6db5dea262e1cdb4215', class: "ir-mega-menu-row" }, h("a", { key: '8694bb20c6d90b38693395e6e6ac973860693562', href: "userinline.aspx" }, "Users List")), h("li", { key: 'd22ea1988d6de21549a7ce9cd9fcc61ef596427b', class: "ir-mega-menu-row" }, h("a", { key: '648c1b728b5ff3af96ae3ba740ba59699477e595', href: "languageinline.aspx" }, "System Languages")), h("li", { key: 'd8136386bb5bebd6903f7e0f77d8fc569926ca0f', class: "ir-mega-menu-row" }, h("a", { key: '202a3b945aa13878789d51203cb08661cf9b8137', href: "countryinline.aspx" }, "Countries")), h("li", { key: '3a0a4322a2318669c7f9f0d9b9d8cf1653591f33', class: "ir-mega-menu-row" }, h("a", { key: 'c9d09e7fb9a6e39913f1119c34aa534571342421', href: "level2inline.aspx" }, "Country Level 2")), h("li", { key: '5a2d2c92d0fd48e2b6c85fb02e6141c18058c931', class: "ir-mega-menu-row" }, h("a", { key: 'dd5f6153d23ebbcb9a313bcc6a96ba42e1b898da', href: "cardinline.aspx" }, "Credit Cards")), h("li", { key: '5c608dfbedd654a4b0e1c207386773d13194691b', class: "ir-mega-menu-row" }, h("a", { key: '2ba7c763d8a9c5acee7d5faf0780778929ee7f39', href: "hotel_chaininline.aspx" }, "Hotel Chains")), h("li", { key: '5a701378889f6b49e81eaae59353e3b929df6de2', class: "ir-mega-menu-row" }, h("a", { key: '3df84e838fc6ec1d68ea07cdce225a1e2e6f7593', href: "currencyinline.aspx" }, "Currencies")), h("li", { key: '717df38650c0c47dbaec94f85d92b87f7622d769', class: "ir-mega-menu-row" }, h("a", { key: 'f01188d7a9f9810f5a8fce3d88fc398e2e1fb1d8', href: "amenityinline.aspx" }, "Amenities")), h("li", { key: 'cbcf949b829001487fcbfb32974fa9c0bd0412fb', class: "ir-mega-menu-row" }, h("a", { key: '7b2fffb967689939e9ac845ebc198d3d6407b840', href: "foodinline.aspx" }, "Food")), h("li", { key: '0724ac31a5caf7b7b0a0aca6a145fd918285d956', class: "ir-mega-menu-row" }, h("a", { key: 'ac985bd693f790add4a3285b23895153c865e029', href: "beddinginline.aspx" }, "Bedding")), h("li", { key: '4c15168ee99441c4e2d666d2449c8e959190deb8', class: "ir-mega-menu-row" }, h("a", { key: '9109df5a41f3e786b114398858db8f55e3cb8497', href: "setupinline.aspx" }, "Setup Table")), h("li", { key: '40d8abd156ce701be76c767c3c060074f49c4109', class: "ir-mega-menu-row" }, h("a", { key: '0c859a495dc567c6a9115f1c40435de8b98fca48', href: "gwedit.aspx" }, "Payment Gateways")), h("li", { key: '0c51be34526d2dc881fd4d85f384e2c57858328d', class: "ir-mega-menu-row" }, h("a", { key: '784fc3ab814819f7f205c04e7807fad20d327976', href: "channelmanager.aspx" }, "Channel Manager")))), h("li", { key: '18e1f451860033387f384c120d3f618dd3c37bff' }, h("ul", { key: 'ecd6a3ff3f09c253664efc599e9fe478f3cf0b5d', class: "ir-mega-menu-column" }, h("li", { key: '206c1381f90458eb9ed640ed2cdef21a9af39de2', class: "ir-mega-menu-row title" }, "Main"), h("li", { key: '2ae263b550d083d2f6d76875a7423cde53c8d9a2', class: "ir-mega-menu-row" }, h("a", { key: 'fad74bc6e64d40927ab2b4e18eab392637e39efa', href: "mpolist.aspx" }, "MPOs")), h("li", { key: '9d27637a5f240bcefa38c4c2ee7c42eafcb83f3a', class: "ir-mega-menu-row" }, h("a", { key: '43c339e236590a95e95672ae72874edf5765a19b', href: "aclist.aspx" }, "Properties")), h("li", { key: '5ba44bf704ae9b59eb3a00b1925ba0b83bdf2fec', class: "ir-mega-menu-row" }, h("a", { key: '61207e8e59f6d9d8f48dfee25223961d5993b45c', href: "acbookinglist.aspx?MODE=MPO" }, "Bookings")), h("li", { key: 'd574874e9e8b1f6087180179a3161c70ad7b1565', class: "ir-mega-menu-row" }, h("a", { key: 'ce703ef252d6654e0bb45c57f72bb223353e876c', href: "mpoaffiliateproperties.aspx" }, "MPO Affiliate Properties")), h("li", { key: 'dd11846997635a03a47ddaf150e07331653e37c2', class: "ir-mega-menu-row" }, h("a", { key: '2f53d3785cb6aef39db8a68acb84e4dd47b8840c', href: "acratesallotment.aspx?VIEW_MODE=CV" }, "MPO Combined Inventory")), h("li", { key: '99d6c70c3aacf41ad08598c5d6a0c76d42402a21', class: "ir-mega-menu-row" }, h("a", { key: 'a43759ae3d7156ff2a1538d60bf00764a47d3dcc', href: "acbookinglist.aspx?VIEW_MODE=CV" }, "MPO Combined Bookings")), h("li", { key: '259bf0094d68891c65fd9a1877ec83a3cced7737', class: "ir-mega-menu-row" }, h("a", { key: '07acbb7e8238cf0f98bea0cf3849f11c8fe6b81d', href: "Acmemberlist.aspx?VIEW_MODE=CV" }, "MPO Combined Guests")), h("li", { key: 'e5cbfd1134a397d6f938160da44f83a522e3fefe', class: "ir-mega-menu-row" }, h("a", { key: '5de2e2b1ccdc5f7a6606e63ee0b48abd99bf4a91', href: "mpobillingreport.aspx" }, "MPO Billing Report")), h("li", { key: '76cafb1302e566e7dfd31555c667e766e3c2f3a8', class: "ir-mega-menu-row" }, h("a", { key: 'feb1284db147dfb8c80d3b9a8817d3ba8f93cb40', href: "Acmemberlist.aspx" }, "Guests")), h("li", { key: 'e1010c64c577f4f396cbd4cd011e700541966751', class: "ir-mega-menu-row" }, h("a", { key: '43ff7e8a3ef52896baff00faddd4fd92b205ede0', href: "acbookinglist.aspx" }, "Bookings")), h("li", { key: 'd3ddf08f607246baac93928eb7aeb0c347030d14', class: "ir-mega-menu-row" }, h("a", { key: '926c662a27f490bf5dcb738028884acde48a977d', href: "billing.aspx" }, "Billing")))), h("li", { key: '2d6338520b3cc8bd573b92de8c6445a0f17a2223' }, h("ul", { key: '9da13b10bbbbc035a325804cb6f24db011c49f0a', class: "ir-mega-menu-column" }, h("li", { key: 'e09bd4ffcf6489c459f09c46fa1aa1747075eadf', class: "ir-mega-menu-row title" }, "Locations"), h("li", { key: '827d286b202cf01e419a437c842ec293a20568cb', class: "ir-mega-menu-row" }, h("a", { key: '4aefaef3b6e22af2ca6cd728f2e321cc208804c8', href: "poicategoriesinline.aspx" }, "Types")), h("li", { key: '305d4abe81112f0d5b5fc48b641916da4be7d440', class: "ir-mega-menu-row" }, h("a", { key: '16744f8268c8a7fa071c2b74a568f1ee9c8578fd', href: "poilist.aspx" }, "List")))), h("li", { key: '18ff2eaf724be9075937a59ff7909c375a60f1f7' }, h("ul", { key: '352489bb8990da32725ce9a92ee7a491ea4ca947', class: "ir-mega-menu-column" }, h("li", { key: '264347b283aeda7779018d83b63dcc63e9d3b401', class: "ir-mega-menu-row title" }, "Referrers"), h("li", { key: '0f970cfeaf4d7950431ebc2e9ea13cf2ec8674c7', class: "ir-mega-menu-row" }, h("a", { key: '53289a519ec15c0409dc796b609ff295411919ba', href: "affiliatelist.aspx" }, "Affiliates")), h("li", { key: '91440fae543361828986ada3223fa600b0007a69', class: "ir-mega-menu-row" }, h("a", { key: '1ea188f7b05d2be187919aa2c60cee4a93d142c9', href: "travelagentslist.aspx" }, "Travel Agents ...NOT USED")))))), h("li", { key: 'ffab5f55d1ac8a549afed3acdacc75e55ec39cda', class: "nav-item" }, h("a", { key: '1f186d263abadcfce474c9c040a19a816925d66f', href: "#", class: "nav-link" }, "b")), h("li", { key: '32283eea7894ddd2f4d48a7402e5fa6212d32f54', class: "nav-item" }, h("a", { key: 'fabf462b71a16af656d8269a90430e9a668854f4', href: "#", class: "nav-link" }, "c")), h("li", { key: 'b6da35060b75d56c4c6047e5027d2397b60df478', class: "nav-item" }, h("a", { key: 'e8d2dcb293c3e6c440b6429ebeadd31adb1de11e', href: "#", class: "nav-link" }, "d")), h("li", { key: '4c83c870ac72bcbe4fb01f80dc1ee17284f52a0e', class: "nav-item" }, h("div", { key: 'e28cf8954a8d80d0d46f4f399e495d02a1917020', class: "d-flex align-items-center justify-content-center", style: { marginTop: '2px' } }, h("ir-notifications", { key: 'c1b59a899e7eaa0436b4754e0ff05a07185e670e', notifications: this.notifications }))))), h("div", { key: 'f5e250511890b3e3a34347946a02d788ac496abf', class: `mobile-menu ${this.isMobileMenuOpen ? 'active' : ''}` }, h("div", { key: 'b21c6c1628d99619c85660bd5895e1a5fb6ca06a', class: "mobile-menu-header" }, h("div", { key: 'd7b1db746cf3c0af0e1ad16a5bbebc1f64f6fd45', class: "hotel-name" }, "Hotel Name"), h("button", { key: '2569930d9ff83d3fb5fa8f1a0074a0d7f0d576d6', class: "close-menu", onClick: () => this.toggleMobileMenu() }, "\u00D7")), h("div", { key: '0a3c4589a781073f4dcd274e7609143533f0c1b1', class: "mobile-search" }, h("ir-m-combobox", { key: '3127902e7b009c5070f27a3ab073d82039853cab', placeholder: "Search...", dataMode: "static", options: this.staticOptions, onOptionChange: this.handleStaticOptionChange })), h("ac-pages-menu", { key: 'e3d39da0c3ff0ebb2e7632e2b5558320a6e1cef6', location: "sheet", "onLink-clicked": async (e) => {
                await sleep(1000);
                window.location.href = e.detail.target.href;
            }, pages: this.pages }))), h("div", { key: '2cdfbc012c66365ba4bcb24a47c138e786063734', class: "submenus d-none d-md-block" }, h("ac-pages-menu", { key: '89859963fb3cb33f3e15086616c9ac5d51f8be57', pages: this.pages }))), h("section", { key: '176d8b4abd30f72f1bcd5668b646988e6087a97b', class: "p-2" }, h("div", { key: '0c798cafebf55c60bed1f07a7758a40ffc6c945e', class: "row g-3" }, h("div", { key: 'd04f5d2faea16c5b0aec5074b32dfd1e2c140fb0', class: "col-md-3" }, h("h5", { key: 'e562d9ea4ba14f9e292dcc960b27ef1f3d7402f3' }, "Static Options Example"), h("ir-m-combobox", { key: '534c436c1d95180c5b2e2417180082ca1cce881d', placeholder: "Select an option...", dataMode: "static", options: this.staticOptions, onOptionChange: this.handleStaticOptionChange }, h("svg", { key: '14224550c6ab5b74632f382b65b6ce8989870299', xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 640 640", slot: "prefix" }, h("path", { key: 'c29ed8bd1a71a89fd3997979c2a4c1208b9bb16d', d: "M480 272C480 317.9 465.1 360.3 440 394.7L566.6 521.4C579.1 533.9 579.1 554.2 566.6 566.7C554.1 579.2 533.8 579.2 521.3 566.7L394.7 440C360.3 465.1 317.9 480 272 480C157.1 480 64 386.9 64 272C64 157.1 157.1 64 272 64C386.9 64 480 157.1 480 272zM272 416C351.5 416 416 351.5 416 272C416 192.5 351.5 128 272 128C192.5 128 128 192.5 128 272C128 351.5 192.5 416 272 416z" }))), this.selectedStaticOption && h("p", { key: '485a162739c93a81092ad3b8e6a2df02526a914a', class: "mt-2 text-muted" }, "Selected: ", this.selectedStaticOption.label)), h("div", { key: 'c2d4b4a8656ec625056359f55569d9b4747ac522', class: "col-md-3" }, h("h5", { key: '8bf108c4c82a222087cdb7b303f3e5833fd3b9b7' }, "External API - Countries"), h("ir-m-combobox", { key: '4b3f01132f2d32487fe1695c4fee63aaea5a638e', placeholder: "Search countries...", dataMode: "external", options: this.countryOptions, loading: this.isLoadingCountries, debounceDelay: 300, onSearchQuery: this.handleCountrySearch, onOptionChange: this.handleCountryChange }), this.selectedCountry && h("p", { key: 'b2ff4f97e9296818e671749ca4fc9c98b85adff8', class: "mt-2 text-muted" }, "Selected: ", this.selectedCountry.label)), h("div", { key: '84d90d3a6831a84a97b2a19a5ecf4a98bf120496', class: "col-md-3" }, h("h5", { key: 'e2420b5141fc58e7a679e7f5e141434deea4146c' }, "Custom Dropdown Content"), h("ir-m-combobox", { key: 'b2d5cc765f1233f943b728d48c820f5e721d33cc', class: "custom-width", ref: el => (this.customComboboxRef = el), placeholder: "Search with custom dropdown...", dataMode: "external", options: this.customOptions, loading: this.isLoadingCustom, useSlot: true, debounceDelay: 500, onSearchQuery: this.handleCustomSearch, onOptionChange: this.handleCustomOptionChange }, h("div", { key: 'bd4fe0ad78a015d7bc24c88e31c9d47ea6f4e1ab', slot: "dropdown-content" }, this.isLoadingCustom && h("div", { key: '4a0b84748de7a4bc349ffd60add96f872d2dc110', class: "dropdown-item" }, "\uD83D\uDD04 Loading custom results..."), !this.isLoadingCustom && this.customOptions.length === 0 && h("div", { key: '994c307dc6e4840afebdefc1d18bab9a6065868b', class: "dropdown-item" }, "\uD83D\uDD0D Type to search..."), !this.isLoadingCustom &&
            this.customOptions.map((option, index) => (h("div", { key: index, class: "dropdown-item d-flex align-items-center", "data-option": option.value, "data-label": option.label, onClick: () => this.handleCustomOptionClick(option), onMouseEnter: e => {
                    const element = e.target;
                    const slotIndex = element.getAttribute('data-slot-index');
                    if (slotIndex && this.customComboboxRef) {
                        this.customComboboxRef.focusedIndex = parseInt(slotIndex);
                    }
                }, style: { cursor: 'pointer' } }, h("span", { class: "me-2" }, "\u2B50"), h("div", null, h("div", { class: "fw-bold" }, option.label), h("small", { class: "text-muted" }, "Custom option with ID: ", option.value))))))), this.selectedCustomOption && h("p", { key: '0bc09d721be823fbc7b7d3bd68f3e1c401472053', class: "mt-2 text-muted" }, "Selected: ", this.selectedCustomOption.label))), h("div", { key: '5e5a548442a53906a48d3548fcd3f989f5b9d5f4', class: 'd-flex align-items-center my-1', style: { gap: '1rem' } }, h("button", { key: '357eac1bebd60c0b1e80d01515fc0f678fa0e78a', class: "btn btn-primary", onClick: () => (this.notificationCount += 1) }, "+"), h("button", { key: '894daf3f9d601672b7e496c5d8b1cd0fb09eb8e2', class: "btn btn-primary", onClick: () => (this.notificationCount -= 1) }, "-")), h("ir-input-text", { key: '0b2bcff5ef23e6997f96de39274ccc3a8ee33184', variant: "floating-label", class: "my-text-input", label: "First name", style: { '--ir-floating-input-height': '4rem' } }, h("svg", { key: 'dcef2ab5f28f91c3706bff8dfe5a043641fb5182', xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 640 640", slot: "prefix" }, h("path", { key: '4c38a4c1cd2b26ba0d1ea39dc91ed2b76ffc99d6', d: "M480 272C480 317.9 465.1 360.3 440 394.7L566.6 521.4C579.1 533.9 579.1 554.2 566.6 566.7C554.1 579.2 533.8 579.2 521.3 566.7L394.7 440C360.3 465.1 317.9 480 272 480C157.1 480 64 386.9 64 272C64 157.1 157.1 64 272 64C386.9 64 480 157.1 480 272zM272 416C351.5 416 416 351.5 416 272C416 192.5 351.5 128 272 128C192.5 128 128 192.5 128 272C128 351.5 192.5 416 272 416z" })), h("svg", { key: 'e3cf0bcf41e82f2eac4c94b7419a67b78ff196a4', slot: "suffix", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 640 640" }, h("path", { key: '41082284a2c8c1f15f11af8cfb86b8e1d6f09c05', d: "M264 112L376 112C380.4 112 384 115.6 384 120L384 160L256 160L256 120C256 115.6 259.6 112 264 112zM208 120L208 544L432 544L432 120C432 89.1 406.9 64 376 64L264 64C233.1 64 208 89.1 208 120zM480 160L480 544L512 544C547.3 544 576 515.3 576 480L576 224C576 188.7 547.3 160 512 160L480 160zM160 544L160 160L128 160C92.7 160 64 188.7 64 224L64 480C64 515.3 92.7 544 128 544L160 544z" }))))));
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
    const components = ["ir-test-cmp", "ac-pages-menu", "ir-button", "ir-icons", "ir-input-text", "ir-m-combobox", "ir-notifications"];
    components.forEach(tagName => { switch (tagName) {
        case "ir-test-cmp":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, IrTestCmp$1);
            }
            break;
        case "ac-pages-menu":
            if (!customElements.get(tagName)) {
                defineCustomElement$7();
            }
            break;
        case "ir-button":
            if (!customElements.get(tagName)) {
                defineCustomElement$6();
            }
            break;
        case "ir-icons":
            if (!customElements.get(tagName)) {
                defineCustomElement$5();
            }
            break;
        case "ir-input-text":
            if (!customElements.get(tagName)) {
                defineCustomElement$4();
            }
            break;
        case "ir-m-combobox":
            if (!customElements.get(tagName)) {
                defineCustomElement$3();
            }
            break;
        case "ir-notifications":
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