import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';
import { d as defineCustomElement$6 } from './ac-pages-menu2.js';
import { d as defineCustomElement$5 } from './ir-button2.js';
import { d as defineCustomElement$4 } from './ir-icons2.js';
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
        return (h(Host, { key: '8fd41d1030daf99b7a9f37b381581e98fbf245dd' }, h("nav", { key: '39b6083a5341da356635d2bf45b2148983b02174', class: "modern-navbar" }, h("span", { key: '88ea7979e0bbefc022c7315afbf708417762c841', class: "overdue-banner" }, "Overdue $300"), h("div", { key: '4b0f88bbe1c3cf59f3e2a24c48bc67f79b17128a', class: "navbar-container" }, h("div", { key: 'ad8bfaaa26fe46f543735b20866b1b1c6312eee8', class: "navbar-left" }, h("button", { key: 'c73a034109370fb834a5eede54d8f37a1d5188d9', class: "mobile-menu-toggle d-md-none", onClick: () => this.toggleMobileMenu() }, h("span", { key: '487c5245784da0770d17a9ec65673f1e299eb317', class: "hamburger-icon" }, h("span", { key: 'a73774f59afcd375edea231977bdf5881a802dad' }), h("span", { key: 'f767b53eeee3bce468fc9d4ae7ba4bd58781da9e' }), h("span", { key: '0bece551401c0097370305f13ae363a452989f90' }))), h("div", { key: 'd49d422cc1f3f99dfb4662182b760b5bef75a46b', class: "navbar-brand" }, "Logo"), h("div", { key: 'a8fb57bf7a3679588aab98296987b81e1c208fa7', class: "d-none d-md-flex " }, h("ir-m-combobox", { key: '636c8a816462a6c48c17e176f6953125fac2d239', style: { '--ir-combobox-width': 'max-content' }, placeholder: "Find property", dataMode: "static", options: this.staticOptions, onOptionChange: this.handleStaticOptionChange })), h("div", { key: '3d6da712918194259f0770abcc9b39d2c8c9e005', class: "hotel-name d-none d-md-block" }, "Hotel Name"), h("div", { key: '9ff7c3f5e056cc96a0a703c49fe7642b8e7f0a9f', class: "ml-auto d-md-none" }, h("ir-notifications", { key: 'ceca3ef7fb58064422cc2b24da2604437015d1b3', notificationCount: this.notificationCount }))), h("div", { key: '9c5e68b703c159d10f3d05851d369afd18b04c8a', class: "navbar-center d-none d-md-flex flex-fill mx-auto" }, h("ir-m-combobox", { key: 'd04ff8b0510265c91d92d8302b87f893b6ccd3fe', placeholder: "Search...", dataMode: "static", options: this.staticOptions, onOptionChange: this.handleStaticOptionChange })), h("div", { key: '36b10d2816a976ccb8c1d617dd9fc4acdc80c230', class: "navbar-right" }, h("ul", { key: '474aad4ad7478214864d80df470b87547a53d18b', class: "nav-items d-none d-md-flex" }, h("li", { key: '0d0d08c2298f688544fab53872de774f722045c1', class: "nav-item dropdown" }, h("a", { key: 'ce40bf94d3e64bba8bd9fffd06bc194a4cd309d4', "data-reference": "parent", href: "#", role: "button", class: "nav-link", "data-toggle": "dropdown", "aria-expanded": "false" }, "a"), h("ul", { key: 'e7ece12e6e0a8296556a037e7f2aae1e3f6605e3', class: `ir-mega-menu mx-auto dropdown-menu-right dropdown-menu    w-100 shadow-sm` }, h("li", { key: '423c7b1b8fc123471b14b60eb3a1645506dd1d09' }, h("ul", { key: 'a8b2310e8cae27d90cac7bc7dfa1a447169a7653', class: "ir-mega-menu-column" }, h("li", { key: '5793653a94d4dbd9ede43bbde15e6399e16a2baf', class: "ir-mega-menu-row title" }, "Parameters"), h("li", { key: '344b4d58a3268b906c45ef9206a1eff0752fe385', class: "ir-mega-menu-row" }, h("a", { key: 'abc1dd0a8010c83b74227773951aa09953f4f160', href: "userinline.aspx" }, "Users List")), h("li", { key: '1a85bf3d72543e40701ff2f097e040fe67212081', class: "ir-mega-menu-row" }, h("a", { key: '335192612d544efda7e29d8898ccc085eaa85187', href: "languageinline.aspx" }, "System Languages")), h("li", { key: '341c86273a580f918954d00d9b429179ffd5601e', class: "ir-mega-menu-row" }, h("a", { key: '8214de67d25dc4a529b496a121f4e57a5a210abd', href: "countryinline.aspx" }, "Countries")), h("li", { key: '43b05f88dc8adcbe4e75dcc46980193a9eac716e', class: "ir-mega-menu-row" }, h("a", { key: 'ab6a5e9a6f9bb006099986ec927c859fe5ab08e5', href: "level2inline.aspx" }, "Country Level 2")), h("li", { key: '476cfbcd1f25cbb2e3626fb3af247bb88e4b0a0d', class: "ir-mega-menu-row" }, h("a", { key: '6e05b9447cbe6c5eb4997aacc1c385f8fd3d98f0', href: "cardinline.aspx" }, "Credit Cards")), h("li", { key: 'cb6478a4574062e4e55ffd867dca2f85aa2949d2', class: "ir-mega-menu-row" }, h("a", { key: '244d3f2d1a161788e41304ca6737bc1a24a617ea', href: "hotel_chaininline.aspx" }, "Hotel Chains")), h("li", { key: '4fd38268859ca12cfd5ed96b85e7d17cfc135afd', class: "ir-mega-menu-row" }, h("a", { key: '05136605e5da8f9befe55ed08bcca0ef6ca43d93', href: "currencyinline.aspx" }, "Currencies")), h("li", { key: '5406cb71fb1faf0ff9ce3eecf8d773361afba4fa', class: "ir-mega-menu-row" }, h("a", { key: 'f70b3b8ddf9de49baa24216c7eb85ef383215288', href: "amenityinline.aspx" }, "Amenities")), h("li", { key: 'bd45ee8ca1f8e21db1da3e96ecb9443a77f5cf75', class: "ir-mega-menu-row" }, h("a", { key: '2a701111d39d8e247260b146d568469a3d5ad6f5', href: "foodinline.aspx" }, "Food")), h("li", { key: '0576544b49d13eb6466068612666905a7f0fdfee', class: "ir-mega-menu-row" }, h("a", { key: '734b5045c42a59d2486d5bb744cb13f63562b7dd', href: "beddinginline.aspx" }, "Bedding")), h("li", { key: 'e31fca410fb8cbb2de8e1ef31f9ba0e947f0615b', class: "ir-mega-menu-row" }, h("a", { key: '5a6bc3542a75b3cc3c17eb36c44290e5d4b03a82', href: "setupinline.aspx" }, "Setup Table")), h("li", { key: 'cf9217c16913bd69085c352b58b9960f6cfc0462', class: "ir-mega-menu-row" }, h("a", { key: '293f7fd7b8feba8ecb2b5dc19a26a4def7fff8cf', href: "gwedit.aspx" }, "Payment Gateways")), h("li", { key: 'deddfcc9482f6c936d5ead1dfa0255ae6cb4aa84', class: "ir-mega-menu-row" }, h("a", { key: 'c8bf1e2ebc2d3c4e10df7c4f7fc8343330129dfd', href: "channelmanager.aspx" }, "Channel Manager")))), h("li", { key: '683ae500f2746ed23d8900040796b32a5066e0d2' }, h("ul", { key: 'a46e6fbb6f1181a52f898f697873a62ab2875bc4', class: "ir-mega-menu-column" }, h("li", { key: '6ac95ac678fb95abade4bb4b8ff81a5414870e79', class: "ir-mega-menu-row title" }, "Main"), h("li", { key: 'e7115b0526be0e474521dd9c468720124e902cca', class: "ir-mega-menu-row" }, h("a", { key: 'fa866dc618dfdb9a46fca574f6f30917c0883ced', href: "mpolist.aspx" }, "MPOs")), h("li", { key: '4b7ba456905a1421584c885e362e5615c0d8fde7', class: "ir-mega-menu-row" }, h("a", { key: 'c2db3261105366e563966bd5074bee07ea92cbef', href: "aclist.aspx" }, "Properties")), h("li", { key: '5167619572d896c699940fb01904aae572ab132d', class: "ir-mega-menu-row" }, h("a", { key: '82cf0b179f2d61b480f4e85c0e9616742a653e3e', href: "acbookinglist.aspx?MODE=MPO" }, "Bookings")), h("li", { key: '2fc165bb8dc3b6a79ecc5becd4f5737e4bac4e62', class: "ir-mega-menu-row" }, h("a", { key: 'acce7ba1c275a4a66995b343737807e33df8e4ed', href: "mpoaffiliateproperties.aspx" }, "MPO Affiliate Properties")), h("li", { key: 'f09706a12b1898f9dda0a686baac8dfd98747be7', class: "ir-mega-menu-row" }, h("a", { key: '7a7fec8c282f7a51ae222f4328c632cf9869daff', href: "acratesallotment.aspx?VIEW_MODE=CV" }, "MPO Combined Inventory")), h("li", { key: 'a671df9a459e70bd302b8373e4106e6becacee91', class: "ir-mega-menu-row" }, h("a", { key: '1c0c83cd42398b4d98b24bd4dfa7244f224ca30f', href: "acbookinglist.aspx?VIEW_MODE=CV" }, "MPO Combined Bookings")), h("li", { key: '24aa4d85815444faa5fd86aced526e7ff4f7d565', class: "ir-mega-menu-row" }, h("a", { key: '8e383061203719e63a73aac4246f8d47788614be', href: "Acmemberlist.aspx?VIEW_MODE=CV" }, "MPO Combined Guests")), h("li", { key: 'ae6cfdf70bef54dae3a92dccd0abc4119e7fe803', class: "ir-mega-menu-row" }, h("a", { key: '5fa694b61cae0901287183046e926ff36f14b3e7', href: "mpobillingreport.aspx" }, "MPO Billing Report")), h("li", { key: 'b322323ee25c2a94c69ec42dc9d7208038d499f6', class: "ir-mega-menu-row" }, h("a", { key: '3de95e8e74f2ecadf53887231559dca3f0ed74c9', href: "Acmemberlist.aspx" }, "Guests")), h("li", { key: '6388e38df82070b1fe126b613c679fe48da85905', class: "ir-mega-menu-row" }, h("a", { key: '207f04d0beab7571d7e2b241d35e0ee3e6929c00', href: "acbookinglist.aspx" }, "Bookings")), h("li", { key: 'f70bee42266bd9900748b1d918835aa1c8a4526b', class: "ir-mega-menu-row" }, h("a", { key: '960dafb56fbf761ea3633a70784798f8426678e9', href: "billing.aspx" }, "Billing")))), h("li", { key: 'f3041c93d8b0d3b73800401bb70be9b47b3b2fa6' }, h("ul", { key: '893b54d4135dba50f374642fae50c76d1ef1c634', class: "ir-mega-menu-column" }, h("li", { key: '48168daaa5c7788f6679ef15b289acfc01f7dc1d', class: "ir-mega-menu-row title" }, "Locations"), h("li", { key: 'a09c162f643cddd8533d3fd63ff0a6ea996e8e58', class: "ir-mega-menu-row" }, h("a", { key: 'daaeb6f4e441c852902b5f30623e81cda1948a9c', href: "poicategoriesinline.aspx" }, "Types")), h("li", { key: 'da28c7100be162941bae28082b788515b2841d52', class: "ir-mega-menu-row" }, h("a", { key: '5b86fe880aa163431b7b616eb1fa1f4b0de73b4a', href: "poilist.aspx" }, "List")))), h("li", { key: '3e9ede56c56148c3fde79870c7da1182ff0aa8c3' }, h("ul", { key: '70a46d553b3c51a7dfcaf672e850de3d07863f70', class: "ir-mega-menu-column" }, h("li", { key: '39b330930197ee5b171d0c3d553214b65a17f91d', class: "ir-mega-menu-row title" }, "Referrers"), h("li", { key: '7712eec6056345191e6eb7ce64f3c499c2da3bfa', class: "ir-mega-menu-row" }, h("a", { key: '3bf710c2f3c8a7439ea85849a616893400acf7e4', href: "affiliatelist.aspx" }, "Affiliates")), h("li", { key: 'aca6dfc4aa8c5610ca5703f199671a48e5536149', class: "ir-mega-menu-row" }, h("a", { key: '4c981148d94ddcbd3871bdc5475d7ae4ea2c0af2', href: "travelagentslist.aspx" }, "Travel Agents ...NOT USED")))))), h("li", { key: 'b1ddcaf02da78bc4c30a5d7ffab9b72b002f79f9', class: "nav-item" }, h("a", { key: '3a7776425d182c27c525176cc45ca47fa1e2b4b6', href: "#", class: "nav-link" }, "b")), h("li", { key: '42a75d828d9de0aaecf1feb54376a89464544d92', class: "nav-item" }, h("a", { key: '2f5e472c12a6fda58077e59b733e178ebcf8e9b7', href: "#", class: "nav-link" }, "c")), h("li", { key: '76c7cac71e621070a4ffa9449219c40ea5bea81c', class: "nav-item" }, h("a", { key: '1a85a34598f182fc9f3a502f3936980c3f85b3d3', href: "#", class: "nav-link" }, "d")), h("li", { key: '4c26964b634af10d3e6a74987197621b143e79ac', class: "nav-item" }, h("div", { key: '7399d63dba5fc8fe868c7e7ab7349377eee5de93', class: "d-flex align-items-center justify-content-center", style: { marginTop: '2px' } }, h("ir-notifications", { key: 'a60a68c1f5315fa92c2638d73910b6d02e00e27b', notificationCount: this.notificationCount }))))), h("div", { key: 'fb18f0ed42de68defa20e98237ede3db243d3837', class: `mobile-menu ${this.isMobileMenuOpen ? 'active' : ''}` }, h("div", { key: '2e6d2c9a4a0dcc5aaea49d49bdf68c816ae6f9f5', class: "mobile-menu-header" }, h("div", { key: '39ed7ad5497a52ae0ca0f2871329d6e017afe0fb', class: "hotel-name" }, "Hotel Name"), h("button", { key: 'fa5f77084aa641a34b5764d50c06e0279ff84681', class: "close-menu", onClick: () => this.toggleMobileMenu() }, "\u00D7")), h("div", { key: 'e044a942669192133be5c90c614f3fccb1ecbe0b', class: "mobile-search" }, h("ir-m-combobox", { key: '86eb09e3e9e1c9309751e43bb5e9e2ca5aa58373', placeholder: "Search...", dataMode: "static", options: this.staticOptions, onOptionChange: this.handleStaticOptionChange })), h("ac-pages-menu", { key: '94979345879b16fe46470bdf267af672036dbda5', location: "sheet", pages: this.pages }))), h("div", { key: '64a6581edb1f43c36ce68f13a35a7e33cc148cdd', class: "submenus d-none d-md-block" }, h("ac-pages-menu", { key: '6501438774a8b3f9c291b042c77ae7e6cc59213f', pages: this.pages }))), h("section", { key: 'ad38714522f2c4fb99e1f099d83324b476528f46', class: "p-2" }, h("div", { key: '99e6f83cbf81b274cefd02919af46c0cfa761ae8', class: "row g-3" }, h("div", { key: '2b860687fc471373ccf4e10eef6cc8b26123b68a', class: "col-md-3" }, h("h5", { key: 'cb1bd847d04aa1ed644200419f5c4c649ae9ed5a' }, "Static Options Example"), h("ir-m-combobox", { key: '9e08b4ef88d5deb9f005d74c17c9fa45027aff60', placeholder: "Select an option...", dataMode: "static", options: this.staticOptions, onOptionChange: this.handleStaticOptionChange }, h("svg", { key: 'c27ba81ab76f184ec6afbfc1c8820be0b6ea5b88', xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 640 640", slot: "prefix" }, h("path", { key: 'e4deaca620b7fe4d0bf620fba550ccf857ca3a11', d: "M480 272C480 317.9 465.1 360.3 440 394.7L566.6 521.4C579.1 533.9 579.1 554.2 566.6 566.7C554.1 579.2 533.8 579.2 521.3 566.7L394.7 440C360.3 465.1 317.9 480 272 480C157.1 480 64 386.9 64 272C64 157.1 157.1 64 272 64C386.9 64 480 157.1 480 272zM272 416C351.5 416 416 351.5 416 272C416 192.5 351.5 128 272 128C192.5 128 128 192.5 128 272C128 351.5 192.5 416 272 416z" }))), this.selectedStaticOption && h("p", { key: 'a252d79aa37b5a2e9874bbc9bceec701de60f39f', class: "mt-2 text-muted" }, "Selected: ", this.selectedStaticOption.label)), h("div", { key: 'd7f6f4f7e8b59525e609b8a05b6ebb941ae6722d', class: "col-md-3" }, h("h5", { key: '62cba5ebb4fa73418b9d08ae8eb054bcb1e09428' }, "External API - Countries"), h("ir-m-combobox", { key: 'e29318cc7c125ff15f46a70f8b3ab51f9b09fbb4', placeholder: "Search countries...", dataMode: "external", options: this.countryOptions, loading: this.isLoadingCountries, debounceDelay: 300, onSearchQuery: this.handleCountrySearch, onOptionChange: this.handleCountryChange }), this.selectedCountry && h("p", { key: '31ca254ea606d2266088fe4d02c53a4ef2e123e6', class: "mt-2 text-muted" }, "Selected: ", this.selectedCountry.label)), h("div", { key: '7547ace6db9e4b53cc142b4715d4884b401b8ef4', class: "col-md-3" }, h("h5", { key: '735a17c3f62b80aadba21ac0b1e75240cfc3c68b' }, "Custom Dropdown Content"), h("ir-m-combobox", { key: '54f1f80ca7cbd1f2fe8dab2f1f364ab9bf767f81', class: "custom-width", ref: el => (this.customComboboxRef = el), placeholder: "Search with custom dropdown...", dataMode: "external", options: this.customOptions, loading: this.isLoadingCustom, useSlot: true, debounceDelay: 500, onSearchQuery: this.handleCustomSearch, onOptionChange: this.handleCustomOptionChange }, h("div", { key: 'a9e5e29bee35f1ec1e7ddb61c1f1f90b2475ca2b', slot: "dropdown-content" }, this.isLoadingCustom && h("div", { key: '672fba82ccd3483717dbf069a8378c6a3c573422', class: "dropdown-item" }, "\uD83D\uDD04 Loading custom results..."), !this.isLoadingCustom && this.customOptions.length === 0 && h("div", { key: '29e897c8055b0c99d6b903b592b6091d412dd2e4', class: "dropdown-item" }, "\uD83D\uDD0D Type to search..."), !this.isLoadingCustom &&
            this.customOptions.map((option, index) => (h("div", { key: index, class: "dropdown-item d-flex align-items-center", "data-option": option.value, "data-label": option.label, onClick: () => this.handleCustomOptionClick(option), onMouseEnter: e => {
                    const element = e.target;
                    const slotIndex = element.getAttribute('data-slot-index');
                    if (slotIndex && this.customComboboxRef) {
                        this.customComboboxRef.focusedIndex = parseInt(slotIndex);
                    }
                }, style: { cursor: 'pointer' } }, h("span", { class: "me-2" }, "\u2B50"), h("div", null, h("div", { class: "fw-bold" }, option.label), h("small", { class: "text-muted" }, "Custom option with ID: ", option.value))))))), this.selectedCustomOption && h("p", { key: '7fcd53e34156d20a2303c9881372b0373734030d', class: "mt-2 text-muted" }, "Selected: ", this.selectedCustomOption.label))), h("div", { key: 'a956d492e86d1d7d91606cb41966a2a4cbe6d358', class: 'd-flex align-items-center my-1', style: { gap: '1rem' } }, h("button", { key: 'd0e3402e013a663f1792574406d6f5e3ba83dd78', class: "btn btn-primary", onClick: () => (this.notificationCount += 1) }, "+"), h("button", { key: '1cf2b64a04cb1b711978170ef6fe072b3fd2b3d3', class: "btn btn-primary", onClick: () => (this.notificationCount -= 1) }, "-")))));
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
    const components = ["ir-test-cmp", "ac-pages-menu", "ir-button", "ir-icons", "ir-m-combobox", "ir-notifications"];
    components.forEach(tagName => { switch (tagName) {
        case "ir-test-cmp":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, IrTestCmp$1);
            }
            break;
        case "ac-pages-menu":
            if (!customElements.get(tagName)) {
                defineCustomElement$6();
            }
            break;
        case "ir-button":
            if (!customElements.get(tagName)) {
                defineCustomElement$5();
            }
            break;
        case "ir-icons":
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