import { r as registerInstance, h, H as Host } from './index-60982d00.js';
import { s as sleep } from './utils-b77baf9f.js';
import './index-6ecc32cd.js';
import './calendar-data-f4e207f9.js';
import './index-c4cf83be.js';
import './axios-aa1335b8.js';
import './locales.store-629477c2.js';

const irTestCmpCss = ".sc-ir-test-cmp-h{display:block;height:100vh}.modern-navbar.sc-ir-test-cmp{background:#fff;box-shadow:0 2px 10px rgba(0, 0, 0, 0.1);position:sticky;top:0;z-index:1000;border-bottom:1px solid #e5e7eb}.overdue-banner.sc-ir-test-cmp{padding:0.5rem;background:var(--red);color:white;text-align:center;width:100%;display:block}.navbar-container.sc-ir-test-cmp{display:flex;align-items:center;justify-content:space-between;padding:0.5rem 1rem;margin:0 auto}.submenus.sc-ir-test-cmp{background:#104064 !important;width:100%}.navbar-left.sc-ir-test-cmp{display:flex;align-items:center;gap:1rem;width:100%}.custom-width.sc-ir-test-cmp{width:240px}.navbar-brand.sc-ir-test-cmp{font-weight:700;font-size:1.5rem;color:#1f2937}.hotel-name.sc-ir-test-cmp{color:#6b7280;font-size:0.875rem;font-weight:500}.navbar-center.sc-ir-test-cmp{margin-inline:auto}.navbar-right.sc-ir-test-cmp{display:flex;align-items:center}.nav-items.sc-ir-test-cmp{display:flex;list-style:none;margin:0;padding:0;gap:0.5rem}.nav-item.sc-ir-test-cmp{margin:0}.nav-link.sc-ir-test-cmp{display:flex;align-items:center;padding:0.5rem 1rem;text-decoration:none;font-weight:500;border-radius:0.375rem;transition:all 0.2s ease;cursor:pointer}.nav-link.sc-ir-test-cmp:hover{background-color:#f3f4f6;color:#1f2937;text-decoration:none}.mobile-menu-toggle.sc-ir-test-cmp{display:flex;align-items:center;justify-content:center;width:2.5rem;height:2.5rem;border:none;background:none;cursor:pointer;border-radius:0.375rem;transition:background-color 0.2s ease}.mobile-menu-toggle.sc-ir-test-cmp:hover{background-color:#f3f4f6}.hamburger-icon.sc-ir-test-cmp{display:flex;flex-direction:column;width:1.25rem;height:1rem;justify-content:space-between}.hamburger-icon.sc-ir-test-cmp span.sc-ir-test-cmp{display:block;height:2px;width:100%;background-color:#374151;border-radius:1px;transition:all 0.3s ease}.mobile-menu.sc-ir-test-cmp{position:fixed;top:0;left:0;width:100%;height:100vh;background:#fff;transform:translateX(-100%);transition:transform 0.3s ease;z-index:1001;overflow-y:auto}.mobile-menu.active.sc-ir-test-cmp{transform:translateX(0)}.mobile-menu-header.sc-ir-test-cmp{display:flex;align-items:center;justify-content:space-between;padding:1rem;border-bottom:1px solid #e5e7eb}.mobile-menu-header.sc-ir-test-cmp .hotel-name.sc-ir-test-cmp{font-size:1.125rem;font-weight:600;color:#1f2937}.close-menu.sc-ir-test-cmp{display:flex;align-items:center;justify-content:center;width:2.5rem;height:2.5rem;border:none;background:none;font-size:1.5rem;color:#6b7280;cursor:pointer;border-radius:0.375rem;transition:background-color 0.2s ease}.close-menu.sc-ir-test-cmp:hover{background-color:#f3f4f6;color:#374151}.mobile-search.sc-ir-test-cmp{padding:1rem;border-bottom:1px solid #e5e7eb}.mobile-nav-items.sc-ir-test-cmp{list-style:none;margin:0;padding:1rem 0}.mobile-nav-item.sc-ir-test-cmp{margin:0}.mobile-nav-link.sc-ir-test-cmp{display:block;padding:0.75rem 1rem;color:#374151;text-decoration:none;font-weight:500;transition:all 0.2s ease;cursor:pointer}.mobile-nav-link.sc-ir-test-cmp:hover{background-color:#f9fafb;color:#1f2937;text-decoration:none}@media (max-width: 767.98px){.navbar-container.sc-ir-test-cmp{padding:0.5rem 1rem}.navbar-brand.sc-ir-test-cmp{font-size:1.25rem}}.nav-item.sc-ir-test-cmp{color:#1f2937 !important}.ir-mega-menu.sc-ir-test-cmp{list-style:none;margin:0;padding:1rem;grid-template-columns:repeat(4, 1fr) !important;gap:1.25rem;background:#ffffff;border:1px solid #e5e7eb;border-radius:0.5rem}.ir-mega-menu.show.sc-ir-test-cmp{display:grid !important;width:max-content !important}.ir-mega-menu.sc-ir-test-cmp>li.sc-ir-test-cmp{list-style:none}.ir-mega-menu-column.sc-ir-test-cmp{list-style:none;margin:0;padding:0;display:flex;flex-direction:column;gap:0.25rem}.ir-mega-menu-row.title.sc-ir-test-cmp{font-weight:700;color:#0f172a;margin-bottom:0.375rem;font-size:0.825rem;text-transform:uppercase;letter-spacing:0.02em;padding:0rem 0.75rem}.ir-mega-menu-row.sc-ir-test-cmp a.sc-ir-test-cmp{display:block;padding:0.5rem 0.75rem;color:#334155;text-decoration:none;line-height:1;transition:background-color 0.2s ease, color 0.2s ease}.ir-mega-menu-row.sc-ir-test-cmp a.sc-ir-test-cmp:hover{background-color:#f4f5fa;color:#1e2122;text-decoration:none}@media (min-width: 576px){.ir-mega-menu.sc-ir-test-cmp{grid-template-columns:repeat(2, 1fr)}}@media (min-width: 992px){.ir-mega-menu.sc-ir-test-cmp{grid-template-columns:repeat(3, 1fr);padding:1.25rem 1.5rem;gap:1.5rem}}@media (min-width: 768px){.mobile-menu-toggle.sc-ir-test-cmp{display:none !important}.mobile-menu.sc-ir-test-cmp{display:none}.navbar-left.sc-ir-test-cmp{width:auto}}.ir-mega-menu.sc-ir-test-cmp{opacity:0;visibility:hidden;transform:translateY(-10px);transition:opacity 0.3s ease, transform 0.3s ease, visibility 0.3s ease;pointer-events:none;position:absolute;top:100%;left:0;z-index:1000}.ir-mega-menu.show.sc-ir-test-cmp{opacity:1;visibility:visible;transform:translateY(0);pointer-events:auto;display:grid !important}";
const IrTestCmpStyle0 = irTestCmpCss;

const IrTestCmp = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
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
    }
    render() {
        return (h(Host, { key: 'bfc9531e87ca537556d29b324a5b0f0f924b567a' }, h("nav", { key: 'ce43ce80a6b843680c55e6e71934e971836ffcf6', class: "modern-navbar" }, h("span", { key: '5feca7ba8ed83c86b4d21cb1595d5c299a5ddb8e', class: "overdue-banner" }, "Overdue $300"), h("div", { key: '4bdf4bb3b43e62e6181ba2e9f285984df4ababb7', class: "navbar-container" }, h("div", { key: '4d58cee9730aedcd620e3607305d5d0fcb5bf28d', class: "navbar-left" }, h("button", { key: '03a17970cf2c40681cc924fe903387c1f2e91f77', class: "mobile-menu-toggle d-md-none", onClick: () => this.toggleMobileMenu() }, h("span", { key: '451018e5ba5544c2447840764e19af3778d9a249', class: "hamburger-icon" }, h("span", { key: 'b2b520d33f41ebeeac8b9889f863b479041da20e' }), h("span", { key: 'ce7623b20068703bcb90b5cd97581d971c6317d6' }), h("span", { key: '50e78044394169c06f771803baf376ab41ca825b' }))), h("div", { key: '39584333210cca49fd118837bd411636c572c119', class: "navbar-brand" }, "Logo"), h("div", { key: '8b94a3729f26abde2e60d310a6f2f3b9dd85bf11', class: "d-none d-md-flex " }, h("ir-m-combobox", { key: '867bcaf5b6c9c59c4cf52abeedc7f9f8408ebd62', style: { '--ir-combobox-width': 'max-content' }, placeholder: "Find property", dataMode: "static", options: this.staticOptions, onOptionChange: this.handleStaticOptionChange })), h("div", { key: 'dd2a32b63c8f8ba0bfacc0c2ee7a1b28a256d2ef', class: "hotel-name d-none d-md-block" }, "Hotel Name"), h("div", { key: '5b35198682c2b6f553957bfd855d5e97ff21d80a', class: "ml-auto d-md-none" }, h("ir-notifications", { key: '61872d5ab13b1e3f8e02d1b8fa2e3002ba9f4557', notificationCount: this.notificationCount }))), h("div", { key: '6cfb3b64a830a60008e7598494ca0554b5bf7ad1', class: "navbar-center d-none d-md-flex flex-fill mx-auto" }, h("ir-m-combobox", { key: '6ffff7ac1e3da68ddba7f2164b45ba984f1a75ba', placeholder: "Search...", dataMode: "static", options: this.staticOptions, onOptionChange: this.handleStaticOptionChange })), h("div", { key: '8f38bf326f7b08faab6c9d60874c681be777f3ae', class: "navbar-right" }, h("ul", { key: '23d9fee9d713d49aa0f60609bf3762d93b0dac49', class: "nav-items d-none d-md-flex" }, h("li", { key: '168d655936ef0b2be267d41014821566f223c98b', class: "nav-item dropdown" }, h("a", { key: 'b52d7a4a9fcd981b58c19db1353eb3e423c6b16f', "data-reference": "parent", href: "#", role: "button", class: "nav-link", "data-toggle": "dropdown", "aria-expanded": "false" }, "a"), h("ul", { key: 'ce31ae6867c1a70a3e1226463922b5eefbf0ffad', class: `ir-mega-menu mx-auto dropdown-menu-right dropdown-menu    w-100 shadow-sm` }, h("li", { key: 'b98ebcc863494a7754388d8b17ccdba9150746a8' }, h("ul", { key: '750d512e9f095ddc01ca122b38a6339ecc03d678', class: "ir-mega-menu-column" }, h("li", { key: '7a7ff7afba791ea2203c796a740c7fa6aed18abf', class: "ir-mega-menu-row title" }, "Parameters"), h("li", { key: '6ed67bc388bfda96bb21c1faa48a06a380da4334', class: "ir-mega-menu-row" }, h("a", { key: 'e48c6b5f224d93e3216611f20bce720210b6b27b', href: "userinline.aspx" }, "Users List")), h("li", { key: 'cb46254d6b28ee4c5a475803b6140fccf83fcce0', class: "ir-mega-menu-row" }, h("a", { key: 'a08e8ba4951ca6c3089fad4b4c940a449f872fa5', href: "languageinline.aspx" }, "System Languages")), h("li", { key: '34d45911a5376e91e0a3d9c75edf77ac9d7b2347', class: "ir-mega-menu-row" }, h("a", { key: '6bb586fa69e6482ff1758d50691a14119349ddff', href: "countryinline.aspx" }, "Countries")), h("li", { key: 'e1eb43f91b6a12e3232716277bcfd185ec860b9e', class: "ir-mega-menu-row" }, h("a", { key: '20e354034c6891c1e719a2493cfa6d9eeb7779b5', href: "level2inline.aspx" }, "Country Level 2")), h("li", { key: 'c6bd4a405f5a48e68cbc85ed14b206004c0b7504', class: "ir-mega-menu-row" }, h("a", { key: 'feedfcf09f1643fcdba38693930ac50cb3f02c56', href: "cardinline.aspx" }, "Credit Cards")), h("li", { key: '4b557a98a7681011b0d5c778616d4367ff7ab987', class: "ir-mega-menu-row" }, h("a", { key: '7f90a72dc1d1d276d4ba253c31da8c2caa56d0da', href: "hotel_chaininline.aspx" }, "Hotel Chains")), h("li", { key: '7cd997fb9a64c3636ad174f922d7de6188b522c7', class: "ir-mega-menu-row" }, h("a", { key: 'd50bcfcceafeed03edd4752d790b8eb364250ae9', href: "currencyinline.aspx" }, "Currencies")), h("li", { key: '20045c867260beafc1388383c066c76fe527c811', class: "ir-mega-menu-row" }, h("a", { key: 'e041dcc1642e22e76cd02b66abe907732317dbc8', href: "amenityinline.aspx" }, "Amenities")), h("li", { key: '41a524c21667c08c05d43d38d07fa5fd346ffb3a', class: "ir-mega-menu-row" }, h("a", { key: '996ca18e7dbc40d9d118c58f8f920a4a54a4caec', href: "foodinline.aspx" }, "Food")), h("li", { key: '33d436e6831609f256e91e2e37e2c98b1a5c38b8', class: "ir-mega-menu-row" }, h("a", { key: 'a84ee72de1382b4a73ee8520e048ff410ba74ad4', href: "beddinginline.aspx" }, "Bedding")), h("li", { key: '9d6ed61207941f690ebf5fb83eed9538b1f4e75f', class: "ir-mega-menu-row" }, h("a", { key: 'f6d5229e989f7f2e914e1913eefb3f8592b47746', href: "setupinline.aspx" }, "Setup Table")), h("li", { key: '7249c0dd801cf3cd4a8338415775597a8b36c5d9', class: "ir-mega-menu-row" }, h("a", { key: '36f14e5be94b93f5e1bf98d4d6c07b22171e5427', href: "gwedit.aspx" }, "Payment Gateways")), h("li", { key: '1cd58c903c262e3b3c199318ab18b92c9bade9ea', class: "ir-mega-menu-row" }, h("a", { key: '2d3d9906b275c58a1847c940c9823bfa851fc080', href: "channelmanager.aspx" }, "Channel Manager")))), h("li", { key: '018198141a767dc80e65950a616f1d3d1cb487ce' }, h("ul", { key: '689389f6ceb981c9cf07cd6cc8c5621ac30fcf29', class: "ir-mega-menu-column" }, h("li", { key: '28156c20b1ebbc314caac6e389df525fdd221eb3', class: "ir-mega-menu-row title" }, "Main"), h("li", { key: 'd022d60513bbdc608c064b207657c2599e936c8d', class: "ir-mega-menu-row" }, h("a", { key: '8a20c034ac0cc36397354631cc50f528ef74668e', href: "mpolist.aspx" }, "MPOs")), h("li", { key: 'b0b1dfddf671ac6beaf5972562d7ed19f3acb7f5', class: "ir-mega-menu-row" }, h("a", { key: '843203b830ddaf49ec9276feaf6df441a6642057', href: "aclist.aspx" }, "Properties")), h("li", { key: '9886c983690797b4d2af5118626027427f31f369', class: "ir-mega-menu-row" }, h("a", { key: 'cbd19ef865b99098819bc084b9abbccda840e02d', href: "acbookinglist.aspx?MODE=MPO" }, "Bookings")), h("li", { key: '5570451700a7da41e1a0d35277e531635f18649d', class: "ir-mega-menu-row" }, h("a", { key: '495da15f6a336d9ca0153ea76739bb15bde309d5', href: "mpoaffiliateproperties.aspx" }, "MPO Affiliate Properties")), h("li", { key: '81e987eaf35bf0324d1084d2e29368f7b6156254', class: "ir-mega-menu-row" }, h("a", { key: 'e9272cca2256129d42ed5bb376f9f8336f6153dc', href: "acratesallotment.aspx?VIEW_MODE=CV" }, "MPO Combined Inventory")), h("li", { key: '4279147d7cc594ea35b85b0ed7125e7890fee60f', class: "ir-mega-menu-row" }, h("a", { key: '241ed482955a88bdde8827e6addf16840ab1aed8', href: "acbookinglist.aspx?VIEW_MODE=CV" }, "MPO Combined Bookings")), h("li", { key: '4ad46bfd8c9156d2e82e88c70115f23314bb55e6', class: "ir-mega-menu-row" }, h("a", { key: '1ea56586905f4bc954c63602c3cba3ef437007a9', href: "Acmemberlist.aspx?VIEW_MODE=CV" }, "MPO Combined Guests")), h("li", { key: '355a22f32b6dfa2a64ef2733accfbf2743b17349', class: "ir-mega-menu-row" }, h("a", { key: '8640aa964ccae0a0c5ed2a49484e938bb56659b8', href: "mpobillingreport.aspx" }, "MPO Billing Report")), h("li", { key: 'f13743aba89523c78cb1af2a3ffcb8e562083942', class: "ir-mega-menu-row" }, h("a", { key: '8a607a814902289ff35dc1132999199a7dc0db9b', href: "Acmemberlist.aspx" }, "Guests")), h("li", { key: '2a4149573356927f12a1a22c917b26e6d2c70311', class: "ir-mega-menu-row" }, h("a", { key: 'c95adef66e311a6d7d70b579762d37f388f6649a', href: "acbookinglist.aspx" }, "Bookings")), h("li", { key: '157400882afae4fa6e6883e58520f348cdaac0f8', class: "ir-mega-menu-row" }, h("a", { key: 'c3e2fa14a14bd074f60c4cfcbebdc17b5401c5c9', href: "billing.aspx" }, "Billing")))), h("li", { key: 'a441158b6d5244d1ba3c1b404f31dbec1ade598a' }, h("ul", { key: '30ca4bdc53775e7c59848233caf2f6340e89ad5d', class: "ir-mega-menu-column" }, h("li", { key: '913365bef3284133035143150452e9330fe91e64', class: "ir-mega-menu-row title" }, "Locations"), h("li", { key: '109e9381c5c78887187ef576074c4fb3e9f4209f', class: "ir-mega-menu-row" }, h("a", { key: 'd24e23e8baf4a1076525612e94d20db01ad0a7ad', href: "poicategoriesinline.aspx" }, "Types")), h("li", { key: 'd6c6a273bce994dcb30169be9811ab1b9318cebf', class: "ir-mega-menu-row" }, h("a", { key: '18e1e86b82ad86d1a725204b2641101e45e94065', href: "poilist.aspx" }, "List")))), h("li", { key: '477b0cd6b288b58732787aaa9c4c7b5abaf108a2' }, h("ul", { key: '6411367ab153b923016e126613b5df6a4b262544', class: "ir-mega-menu-column" }, h("li", { key: '14ce956f80a53e0b078b3d072d1c7b3c0120af6d', class: "ir-mega-menu-row title" }, "Referrers"), h("li", { key: '7fac305c3a2d2e13e353421569fb7c71fd999f12', class: "ir-mega-menu-row" }, h("a", { key: '614a2bd4e497d912b5b1131661c8a6d0e74bc719', href: "affiliatelist.aspx" }, "Affiliates")), h("li", { key: 'd85f496ce4bbeb0981339c6814bc541cd9b18182', class: "ir-mega-menu-row" }, h("a", { key: 'eac9dc84080378dbec7948c809178298d20c4714', href: "travelagentslist.aspx" }, "Travel Agents ...NOT USED")))))), h("li", { key: '47b7ae689c5dbc4eec1d87ec4eae361cb0e843b0', class: "nav-item" }, h("a", { key: 'f26a997fadca4dd8401535c74cca46995761407e', href: "#", class: "nav-link" }, "b")), h("li", { key: '375fbf323f07dc9e21dc26907dfd501c1587af06', class: "nav-item" }, h("a", { key: '21ceb444321a83e92daad22a8cd7ac656717217e', href: "#", class: "nav-link" }, "c")), h("li", { key: '67c2ec0701c586321e796187ff320cafd9ee26a7', class: "nav-item" }, h("a", { key: 'f2edcb0add3c0d3c9c651c4dbfab77b7e954edf9', href: "#", class: "nav-link" }, "d")), h("li", { key: '97f2056b532191ef48dc035b1e1001dbfad26254', class: "nav-item" }, h("div", { key: '7533e84df8ce751165ffc1441a47d8a64ee471af', class: "d-flex align-items-center justify-content-center", style: { marginTop: '2px' } }, h("ir-notifications", { key: '349eae5acaae72ab4af2f0b8f46a027d1eaca1d6', notificationCount: this.notificationCount }))))), h("div", { key: '6016b4640a711fb878619d0cc33d201d8544eb2b', class: `mobile-menu ${this.isMobileMenuOpen ? 'active' : ''}` }, h("div", { key: '7a6fcfcd4033e4192b0ef112338ecd0d567321a3', class: "mobile-menu-header" }, h("div", { key: '21ef8b07e1097f99b6e3d942cd9fdabcd9a74af5', class: "hotel-name" }, "Hotel Name"), h("button", { key: '0a700d30ecb7712278b748a2965ce8cb9addbdf6', class: "close-menu", onClick: () => this.toggleMobileMenu() }, "\u00D7")), h("div", { key: 'a151bcb8ff49b72c5989ce607ff8b68567b538b9', class: "mobile-search" }, h("ir-m-combobox", { key: '849ad11dee29ece765817861ce59673823a4d451', placeholder: "Search...", dataMode: "static", options: this.staticOptions, onOptionChange: this.handleStaticOptionChange })), h("ac-pages-menu", { key: '9a983247c96f4c9d1f6570d41ed219e83f1720dc', location: "sheet", "onLink-clicked": async (e) => {
                await sleep(1000);
                window.location.href = e.detail.target.href;
            }, pages: this.pages }))), h("div", { key: 'b4812f76ebad2f46eef238ceb0c680ddf78f660d', class: "submenus d-none d-md-block" }, h("ac-pages-menu", { key: '4a8e42e7d24f022c7b524efd87ede359213449c7', pages: this.pages }))), h("section", { key: 'fc9323da78d4ac76ee9de4dbd0a3474f9e64f638', class: "p-2" }, h("div", { key: '095088040c70657a7eb68a03d2c6dd7b478d72ca', class: "row g-3" }, h("div", { key: 'd786f0431eae9915cb809958513d740095be872b', class: "col-md-3" }, h("h5", { key: '64ef4ce34c5bc3e5c8dc007f26a0b68092140eaf' }, "Static Options Example"), h("ir-m-combobox", { key: 'e8e8560bf3686b15de70ff785ff6a2fd43b34432', placeholder: "Select an option...", dataMode: "static", options: this.staticOptions, onOptionChange: this.handleStaticOptionChange }, h("svg", { key: '7facc80ac337f6121382c12797669acfce69368e', xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 640 640", slot: "prefix" }, h("path", { key: '6be36662dc9d382d9053e0edfe85625541d7a017', d: "M480 272C480 317.9 465.1 360.3 440 394.7L566.6 521.4C579.1 533.9 579.1 554.2 566.6 566.7C554.1 579.2 533.8 579.2 521.3 566.7L394.7 440C360.3 465.1 317.9 480 272 480C157.1 480 64 386.9 64 272C64 157.1 157.1 64 272 64C386.9 64 480 157.1 480 272zM272 416C351.5 416 416 351.5 416 272C416 192.5 351.5 128 272 128C192.5 128 128 192.5 128 272C128 351.5 192.5 416 272 416z" }))), this.selectedStaticOption && h("p", { key: 'b429bfac7b1302699be3503f65a25c1c5b3f77b2', class: "mt-2 text-muted" }, "Selected: ", this.selectedStaticOption.label)), h("div", { key: '8fb73987e0d00a0f4d573db9d2dc9100e37e8449', class: "col-md-3" }, h("h5", { key: 'e17a7016281161f6aec26c7270f052f4c0ff8600' }, "External API - Countries"), h("ir-m-combobox", { key: '01dd5b07ad63966962d053e99ead5d00566718fa', placeholder: "Search countries...", dataMode: "external", options: this.countryOptions, loading: this.isLoadingCountries, debounceDelay: 300, onSearchQuery: this.handleCountrySearch, onOptionChange: this.handleCountryChange }), this.selectedCountry && h("p", { key: 'ebd04d3067ef3e987b3689f8390649102e43d967', class: "mt-2 text-muted" }, "Selected: ", this.selectedCountry.label)), h("div", { key: 'b23bac3866f6fc72ba3614e0fc09bee4d11def7e', class: "col-md-3" }, h("h5", { key: 'b942c28f48e059824287c4339cda930251f25686' }, "Custom Dropdown Content"), h("ir-m-combobox", { key: '9e150874974341cdc1ef478e132c78ded0ac8992', class: "custom-width", ref: el => (this.customComboboxRef = el), placeholder: "Search with custom dropdown...", dataMode: "external", options: this.customOptions, loading: this.isLoadingCustom, useSlot: true, debounceDelay: 500, onSearchQuery: this.handleCustomSearch, onOptionChange: this.handleCustomOptionChange }, h("div", { key: '2d35f912759efc4476417207a7437fefe57179b9', slot: "dropdown-content" }, this.isLoadingCustom && h("div", { key: '07fbcc4ed9e46e04d26addea0560b3a06efb300d', class: "dropdown-item" }, "\uD83D\uDD04 Loading custom results..."), !this.isLoadingCustom && this.customOptions.length === 0 && h("div", { key: '115e594873355632ac02ca09360bbc0cafe46ea7', class: "dropdown-item" }, "\uD83D\uDD0D Type to search..."), !this.isLoadingCustom &&
            this.customOptions.map((option, index) => (h("div", { key: index, class: "dropdown-item d-flex align-items-center", "data-option": option.value, "data-label": option.label, onClick: () => this.handleCustomOptionClick(option), onMouseEnter: e => {
                    const element = e.target;
                    const slotIndex = element.getAttribute('data-slot-index');
                    if (slotIndex && this.customComboboxRef) {
                        this.customComboboxRef.focusedIndex = parseInt(slotIndex);
                    }
                }, style: { cursor: 'pointer' } }, h("span", { class: "me-2" }, "\u2B50"), h("div", null, h("div", { class: "fw-bold" }, option.label), h("small", { class: "text-muted" }, "Custom option with ID: ", option.value))))))), this.selectedCustomOption && h("p", { key: '052d53db6d027dbdfa6af6cf7fc182d0bef62c27', class: "mt-2 text-muted" }, "Selected: ", this.selectedCustomOption.label))), h("div", { key: 'add6e3ce2f253b1aec51246aa3be876dad0c56f1', class: 'd-flex align-items-center my-1', style: { gap: '1rem' } }, h("button", { key: 'd0863024cae9bd29afdaceca9dc4f946b60593cf', class: "btn btn-primary", onClick: () => (this.notificationCount += 1) }, "+"), h("button", { key: '9ee7b77223304f790c3ad8298a5c5f9a68944d22', class: "btn btn-primary", onClick: () => (this.notificationCount -= 1) }, "-")), h("ir-input-text", { key: 'cc7083e58cca704882172daada78a8a713b8cbad', variant: "floating-label", class: "my-text-input", label: "First name", style: { '--ir-floating-input-height': '4rem' } }, h("svg", { key: '18c200902b1e91653d736ebb91306cb91f3d47ca', xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 640 640", slot: "prefix" }, h("path", { key: '3aaf4e32a27f948037d90b21551cf0073520b4c4', d: "M480 272C480 317.9 465.1 360.3 440 394.7L566.6 521.4C579.1 533.9 579.1 554.2 566.6 566.7C554.1 579.2 533.8 579.2 521.3 566.7L394.7 440C360.3 465.1 317.9 480 272 480C157.1 480 64 386.9 64 272C64 157.1 157.1 64 272 64C386.9 64 480 157.1 480 272zM272 416C351.5 416 416 351.5 416 272C416 192.5 351.5 128 272 128C192.5 128 128 192.5 128 272C128 351.5 192.5 416 272 416z" })), h("svg", { key: '0853054690c30fd1951b2fddaa408a2c8c83b517', slot: "suffix", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 640 640" }, h("path", { key: 'f5b1dc35174a8f7a489ee39cf14151c5140ca1ad', d: "M264 112L376 112C380.4 112 384 115.6 384 120L384 160L256 160L256 120C256 115.6 259.6 112 264 112zM208 120L208 544L432 544L432 120C432 89.1 406.9 64 376 64L264 64C233.1 64 208 89.1 208 120zM480 160L480 544L512 544C547.3 544 576 515.3 576 480L576 224C576 188.7 547.3 160 512 160L480 160zM160 544L160 160L128 160C92.7 160 64 188.7 64 224L64 480C64 515.3 92.7 544 128 544L160 544z" }))))));
    }
};
IrTestCmp.style = IrTestCmpStyle0;

export { IrTestCmp as ir_test_cmp };

//# sourceMappingURL=ir-test-cmp.entry.js.map