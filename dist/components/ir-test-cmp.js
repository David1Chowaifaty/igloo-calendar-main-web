import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';
import { K as sleep } from './utils.js';
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
        return (h(Host, { key: '94168014c21dc2dd516d71e230719f924372c375' }, h("nav", { key: 'ec2a96436f3d75297ee37360e3ea37711253f854', class: "modern-navbar" }, h("span", { key: '8a978db2a4e2cef7ff8b42522dfbe99d781db079', class: "overdue-banner" }, "Overdue $300"), h("div", { key: '564dfc5c199c43a32d36fdfbaadff2e88a09c0ba', class: "navbar-container" }, h("div", { key: '01c7091ffcadf5bcb5474a6efb76edc93357bfa4', class: "navbar-left" }, h("button", { key: 'f3a6270b1c0c7eb87e453b18dd86a5465a85784e', class: "mobile-menu-toggle d-md-none", onClick: () => this.toggleMobileMenu() }, h("span", { key: 'd98cbcb68851da7718ffaddaf39c987e41008038', class: "hamburger-icon" }, h("span", { key: '134066e4f1da9a161ed79b4ad68a372ece424714' }), h("span", { key: '23b74ade37ae42a2676fdf3ab0a2e822ad160df5' }), h("span", { key: '6bad2f0972c5ff9dd3fde74d3b87d33fd6b37475' }))), h("div", { key: '2ad1b058a6ce93e7da0e57272871963134f139b1', class: "navbar-brand" }, "Logo"), h("div", { key: '4e8bc5d00e7caba58ea173322db5fd34aef63882', class: "d-none d-md-flex " }, h("ir-m-combobox", { key: '30de9d0de7f87bb16d565060cc5ecd37ebdaff31', style: { '--ir-combobox-width': 'max-content' }, placeholder: "Find property", dataMode: "static", options: this.staticOptions, onOptionChange: this.handleStaticOptionChange })), h("div", { key: '6ff097f5b3efc8e96c98c2786fd74d1f851e7867', class: "hotel-name d-none d-md-block" }, "Hotel Name"), h("div", { key: '97fbb499875de8b0a6cf92cb0eaad12bf73b6f45', class: "ml-auto d-md-none" }, h("ir-notifications", { key: '873d3e6a862ab0e375ebf431840617c83ce13fa4', notificationCount: this.notificationCount }))), h("div", { key: 'e2f1457a7e727aed47808d829f132d6058b40b9b', class: "navbar-center d-none d-md-flex flex-fill mx-auto" }, h("ir-m-combobox", { key: 'f0566cb96ede8cd7ccd6ee2112ca63f8e12249d7', placeholder: "Search...", dataMode: "static", options: this.staticOptions, onOptionChange: this.handleStaticOptionChange })), h("div", { key: '35ad525940b1abc77965d8cf23c6a818fd1b9bd1', class: "navbar-right" }, h("ul", { key: 'da1070b2fe5f4f42b3abbcf6a7d68f84de803e70', class: "nav-items d-none d-md-flex" }, h("li", { key: 'c50634b7f65b4e001d84c5cee2f5d50a5d2e2553', class: "nav-item dropdown" }, h("a", { key: '9657d318239ed99a61aaab206ae733452bb0ef72', "data-reference": "parent", href: "#", role: "button", class: "nav-link", "data-toggle": "dropdown", "aria-expanded": "false" }, "a"), h("ul", { key: 'dad249b7683052ee63b3cbba8cfecb9a9963bf72', class: `ir-mega-menu mx-auto dropdown-menu-right dropdown-menu    w-100 shadow-sm` }, h("li", { key: 'c433fc8adcede743a7e3b9e1abf7546962e29773' }, h("ul", { key: '36438c124f9290191690ced30f32aec44dfe0ff9', class: "ir-mega-menu-column" }, h("li", { key: '6f46b7ee7d6c9bbf49a4a4014cc29b21ed575d1b', class: "ir-mega-menu-row title" }, "Parameters"), h("li", { key: '9d872504cd21da1a5914e7a5d3d280ca9491cf7a', class: "ir-mega-menu-row" }, h("a", { key: '42f15ce3c7be637e1dadb51249cc3f76d16b7acc', href: "userinline.aspx" }, "Users List")), h("li", { key: '707f5b00102ff01b5e407fc33709235789072b28', class: "ir-mega-menu-row" }, h("a", { key: '47422d8c3dd63d2f60bde6888060ba36cdd59d57', href: "languageinline.aspx" }, "System Languages")), h("li", { key: '2e02f96e7ea83c57e99d7cd0ff1eaa74d4660325', class: "ir-mega-menu-row" }, h("a", { key: '3594e28445956c736f95dbaff2ba7a4df939eacb', href: "countryinline.aspx" }, "Countries")), h("li", { key: '9e764188504a186f98b27ec10612cafd2f258a55', class: "ir-mega-menu-row" }, h("a", { key: '541cf3ac7dc611a4bebaac59bf33432992579a9c', href: "level2inline.aspx" }, "Country Level 2")), h("li", { key: '8c2086b48da91ddf4e4d7fbbee112250f93b1da0', class: "ir-mega-menu-row" }, h("a", { key: 'ea9423fd0e638f97c09ad97c22106c4af1ca019b', href: "cardinline.aspx" }, "Credit Cards")), h("li", { key: 'b90578f06a6155488ca4cf0309146e8331231e83', class: "ir-mega-menu-row" }, h("a", { key: '2571678aeb5330c7b1b9b999dbf3be173d79883a', href: "hotel_chaininline.aspx" }, "Hotel Chains")), h("li", { key: '2910a71b20a5c42a466cd45264543bd5c203ae5a', class: "ir-mega-menu-row" }, h("a", { key: 'e69ad72161de734295d336697ca5c4d542bd6809', href: "currencyinline.aspx" }, "Currencies")), h("li", { key: '32d68c863b0af52f508ddba10218437fa0ca1d51', class: "ir-mega-menu-row" }, h("a", { key: 'fb35df9bffeebb428e495b1eca780fca052b9372', href: "amenityinline.aspx" }, "Amenities")), h("li", { key: 'eaa719bb3033fecb51ee177d20692acece8ff9f4', class: "ir-mega-menu-row" }, h("a", { key: '0e3a425ccf3cef484ab1d83f07ba271b3dffd9b1', href: "foodinline.aspx" }, "Food")), h("li", { key: 'da762d3962c3820e0f227100494886debbb1e22c', class: "ir-mega-menu-row" }, h("a", { key: 'd0a30b5874056e5c708330143ebbb230c1decd91', href: "beddinginline.aspx" }, "Bedding")), h("li", { key: 'a6e5b66027502241524d5b9692a051fb485efc6b', class: "ir-mega-menu-row" }, h("a", { key: 'b1ab49d6c1880c8cce6f987049b4d783204e5de0', href: "setupinline.aspx" }, "Setup Table")), h("li", { key: 'af2ba6ad5aa7266a9e98ffa6a30c919b7f758755', class: "ir-mega-menu-row" }, h("a", { key: 'eadd3b55ff241202adf25d0c15eabaf2aa86f20f', href: "gwedit.aspx" }, "Payment Gateways")), h("li", { key: 'bbd015c8e8c9f12de70a96a08f0fce475c92e68d', class: "ir-mega-menu-row" }, h("a", { key: '2235820c66c52a7e3dfbd7e5fb506b0fd8bba9b7', href: "channelmanager.aspx" }, "Channel Manager")))), h("li", { key: 'd86c56a3a3838f6dfc1086481683aebc30e09966' }, h("ul", { key: '83f1d16a304f8879185b1fbb77b713cb0b5e4707', class: "ir-mega-menu-column" }, h("li", { key: 'e3d10a87284c4e6f9286cc3c376b3f02a9950349', class: "ir-mega-menu-row title" }, "Main"), h("li", { key: 'cfacbe7e05c697ed39e45395464192be598ca52d', class: "ir-mega-menu-row" }, h("a", { key: '8aad4e074b763602c7d5d277db53438aea84a9e2', href: "mpolist.aspx" }, "MPOs")), h("li", { key: '8a0ac6b2094f7d4897be081c5b244583eda2950a', class: "ir-mega-menu-row" }, h("a", { key: 'f6ddfa8dfbce5d7334f1d2607667858be0e66637', href: "aclist.aspx" }, "Properties")), h("li", { key: '45b46223c89eade2801274032c0a10cff5b50694', class: "ir-mega-menu-row" }, h("a", { key: 'd83083c68739cd89cf2677f64bc8d904f26b5b21', href: "acbookinglist.aspx?MODE=MPO" }, "Bookings")), h("li", { key: '5aa49beb8097ed2ac2cfe3ea10152e9da9fbfb41', class: "ir-mega-menu-row" }, h("a", { key: 'dfba434c9515994d5f5c943190ff1fdd9fc41e46', href: "mpoaffiliateproperties.aspx" }, "MPO Affiliate Properties")), h("li", { key: '4bee383189b6c80cd6a07c078b9599b647d4c71a', class: "ir-mega-menu-row" }, h("a", { key: '589b1607c6d87d031e9e9a26787b414761c61993', href: "acratesallotment.aspx?VIEW_MODE=CV" }, "MPO Combined Inventory")), h("li", { key: 'ab9992479dc2b331d84ea0d00f80913319d90cd0', class: "ir-mega-menu-row" }, h("a", { key: '3e7a0ab8bfc2eeeb2411887ba34e272760f993a1', href: "acbookinglist.aspx?VIEW_MODE=CV" }, "MPO Combined Bookings")), h("li", { key: 'ed274131dd24d3887d8a54acf92aa6ac7dfada08', class: "ir-mega-menu-row" }, h("a", { key: '6e6598dc10ab94e967ed656abe7815c5c2d55324', href: "Acmemberlist.aspx?VIEW_MODE=CV" }, "MPO Combined Guests")), h("li", { key: 'b4961694ea842d9cad992beef2ef0e7ebfbe56b7', class: "ir-mega-menu-row" }, h("a", { key: 'ba4ff894f984a86e5dc97f15292bd723f0deb098', href: "mpobillingreport.aspx" }, "MPO Billing Report")), h("li", { key: '7a35efc4a6e7b48aac1ecd169a374b1db29fd14c', class: "ir-mega-menu-row" }, h("a", { key: 'd2ddfaba96a2c7d337b5d6426a3e1f50e1a41229', href: "Acmemberlist.aspx" }, "Guests")), h("li", { key: 'bfc5d0c919ab31030a0af9db4f1ac8eee5112d8f', class: "ir-mega-menu-row" }, h("a", { key: '4678c94448ef572075469ea0450383001e0a6edb', href: "acbookinglist.aspx" }, "Bookings")), h("li", { key: '47cb8f20391e89d3ccf5ab3f222626566cdc73fd', class: "ir-mega-menu-row" }, h("a", { key: '17fe919ed47d583c72caa58e89976dba022de58f', href: "billing.aspx" }, "Billing")))), h("li", { key: '715ec13bccba7aa9a71bcf1508c5246caa75a38c' }, h("ul", { key: '40f7c45784659cb4db88ed5c7bb909c45f12a9ff', class: "ir-mega-menu-column" }, h("li", { key: 'a7a133ec4d1586240286a5d3a1d5c4fc6cd8f431', class: "ir-mega-menu-row title" }, "Locations"), h("li", { key: 'e3a87b95734ffaa9f2c6ad594a9b67fee04522ff', class: "ir-mega-menu-row" }, h("a", { key: '804f763fd356af6876d23f6025b3fc08dadd3216', href: "poicategoriesinline.aspx" }, "Types")), h("li", { key: 'dfb0535c5f2913c3feb7d1b8188267a607aa9eaa', class: "ir-mega-menu-row" }, h("a", { key: '0e28958913d0772e621a9ca3f404ea3ebaee291d', href: "poilist.aspx" }, "List")))), h("li", { key: 'b2912be1b3647cf4a9250e20c0d933c7ba0130bd' }, h("ul", { key: 'd4ce1758bd443de9d6ae2819275c70ec669fdc4d', class: "ir-mega-menu-column" }, h("li", { key: 'cb2448a7260657f9c1f95fbdf72834929f56f00c', class: "ir-mega-menu-row title" }, "Referrers"), h("li", { key: '9e01fffbda972473b98315e5583c19b54baaec22', class: "ir-mega-menu-row" }, h("a", { key: '4a585d63a796bc8c5e82b92b3b6eda41512c9694', href: "affiliatelist.aspx" }, "Affiliates")), h("li", { key: 'f0d44bea19fab8dc068d59ea32606cb2cd6cbf8b', class: "ir-mega-menu-row" }, h("a", { key: '8a431b3792c8b3bb3608644f6c071f2135588936', href: "travelagentslist.aspx" }, "Travel Agents ...NOT USED")))))), h("li", { key: 'aa2131d21de58cd9a8506e352a6cd1b11edbd424', class: "nav-item" }, h("a", { key: 'fbd45f4557033ed14ed12a6eb1c443f4410b8122', href: "#", class: "nav-link" }, "b")), h("li", { key: '4dae6e4f21308e7cbf413121504033021ca21fb2', class: "nav-item" }, h("a", { key: '3563ba840014b904447aa3398ca23e9f37a18c33', href: "#", class: "nav-link" }, "c")), h("li", { key: '21138c631ed8890aeabfddf2563a38388a616f3b', class: "nav-item" }, h("a", { key: '1183abc9e6d64e910d1a2e30bb976ccee0aaf054', href: "#", class: "nav-link" }, "d")), h("li", { key: '7077ed305bd9233be1c1e202f521bdad80c2294f', class: "nav-item" }, h("div", { key: 'c61cc9168286de3af63769a742a3881be069b20f', class: "d-flex align-items-center justify-content-center", style: { marginTop: '2px' } }, h("ir-notifications", { key: '4207b7ea874f9feeb68440f2b0aedd817c3243c4', notificationCount: this.notificationCount }))))), h("div", { key: '35f1bb325a263f9351b5d26033f1b3ba20862964', class: `mobile-menu ${this.isMobileMenuOpen ? 'active' : ''}` }, h("div", { key: '35fb7cc1df86ee8f198c50140d9832c041244741', class: "mobile-menu-header" }, h("div", { key: '0794aa6016c58140260ffc8378fa077cf7268c78', class: "hotel-name" }, "Hotel Name"), h("button", { key: '7a86b7f9beaf96f8c508cd036fc5a471913fbdd3', class: "close-menu", onClick: () => this.toggleMobileMenu() }, "\u00D7")), h("div", { key: 'f3851e787d07f4959aeb6086936033a0414054a9', class: "mobile-search" }, h("ir-m-combobox", { key: 'c73a2e6902ed04e507d67a4c524402800e092d7b', placeholder: "Search...", dataMode: "static", options: this.staticOptions, onOptionChange: this.handleStaticOptionChange })), h("ac-pages-menu", { key: 'eefa8cc510f3ee70b79cbdb6b9db44d3b067d00f', location: "sheet", "onLink-clicked": async (e) => {
                await sleep(1000);
                window.location.href = e.detail.target.href;
            }, pages: this.pages }))), h("div", { key: 'd0deb41b0e9141a175050048ff254eccdf76787c', class: "submenus d-none d-md-block" }, h("ac-pages-menu", { key: '82e3501ba4ff48a5195edf3b4531de5af66405ca', pages: this.pages }))), h("section", { key: 'fdc88ff7d1b77e3fe94981ec6064769248931b47', class: "p-2" }, h("div", { key: '500f2cc4b1b56e8130beafc23b04cd702a4e7e33', class: "row g-3" }, h("div", { key: '8bd3c9a28f4ea8946ffd9965fed37e4816be1e72', class: "col-md-3" }, h("h5", { key: '21c016dc228de1a3bf24d360a3cfa4918f8c4505' }, "Static Options Example"), h("ir-m-combobox", { key: '0884341b49f872689f84ecd602e843597812a60c', placeholder: "Select an option...", dataMode: "static", options: this.staticOptions, onOptionChange: this.handleStaticOptionChange }, h("svg", { key: '75c9191eef0f47a5a4beae8ab6887d965fb00799', xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 640 640", slot: "prefix" }, h("path", { key: '7e4ed62449daa3ed7c0b72288b582b69af8dc03e', d: "M480 272C480 317.9 465.1 360.3 440 394.7L566.6 521.4C579.1 533.9 579.1 554.2 566.6 566.7C554.1 579.2 533.8 579.2 521.3 566.7L394.7 440C360.3 465.1 317.9 480 272 480C157.1 480 64 386.9 64 272C64 157.1 157.1 64 272 64C386.9 64 480 157.1 480 272zM272 416C351.5 416 416 351.5 416 272C416 192.5 351.5 128 272 128C192.5 128 128 192.5 128 272C128 351.5 192.5 416 272 416z" }))), this.selectedStaticOption && h("p", { key: '7b1f57362ea1ca9d18157a4565463325d695f0d6', class: "mt-2 text-muted" }, "Selected: ", this.selectedStaticOption.label)), h("div", { key: '489848675aa12b4e457e91fd27e6f00aaa60be8d', class: "col-md-3" }, h("h5", { key: 'f8ce5d9e0b1ab2c8e144c337247adeaaf5898238' }, "External API - Countries"), h("ir-m-combobox", { key: 'ff983796aff3b6ed5e48ee47d2ed419738d51952', placeholder: "Search countries...", dataMode: "external", options: this.countryOptions, loading: this.isLoadingCountries, debounceDelay: 300, onSearchQuery: this.handleCountrySearch, onOptionChange: this.handleCountryChange }), this.selectedCountry && h("p", { key: '59079dce38ed771208af146658e08d2dda13a755', class: "mt-2 text-muted" }, "Selected: ", this.selectedCountry.label)), h("div", { key: '9fb25bb1445c9768c3ff230bb6c6959ec524ef50', class: "col-md-3" }, h("h5", { key: '435dd1f7d4982f337d3a3ac5794032a32da8dc64' }, "Custom Dropdown Content"), h("ir-m-combobox", { key: '8e55d1243e3d52c9c3e637e6ad0fce3fffb55675', class: "custom-width", ref: el => (this.customComboboxRef = el), placeholder: "Search with custom dropdown...", dataMode: "external", options: this.customOptions, loading: this.isLoadingCustom, useSlot: true, debounceDelay: 500, onSearchQuery: this.handleCustomSearch, onOptionChange: this.handleCustomOptionChange }, h("div", { key: 'd4ad24a4c01196b33c7ac3fc9334157dd34689a8', slot: "dropdown-content" }, this.isLoadingCustom && h("div", { key: '9802bfe437b9ccb45fef7ba9aed19ae27d6759f7', class: "dropdown-item" }, "\uD83D\uDD04 Loading custom results..."), !this.isLoadingCustom && this.customOptions.length === 0 && h("div", { key: '2879f30b948acfec5c1fee6d94853c791fbd12ef', class: "dropdown-item" }, "\uD83D\uDD0D Type to search..."), !this.isLoadingCustom &&
            this.customOptions.map((option, index) => (h("div", { key: index, class: "dropdown-item d-flex align-items-center", "data-option": option.value, "data-label": option.label, onClick: () => this.handleCustomOptionClick(option), onMouseEnter: e => {
                    const element = e.target;
                    const slotIndex = element.getAttribute('data-slot-index');
                    if (slotIndex && this.customComboboxRef) {
                        this.customComboboxRef.focusedIndex = parseInt(slotIndex);
                    }
                }, style: { cursor: 'pointer' } }, h("span", { class: "me-2" }, "\u2B50"), h("div", null, h("div", { class: "fw-bold" }, option.label), h("small", { class: "text-muted" }, "Custom option with ID: ", option.value))))))), this.selectedCustomOption && h("p", { key: '580302b91706eba96e1f61ac827539b2642d684d', class: "mt-2 text-muted" }, "Selected: ", this.selectedCustomOption.label))), h("div", { key: 'd11d5a97695a9541e8be0111319aa9eb07f1c4c8', class: 'd-flex align-items-center my-1', style: { gap: '1rem' } }, h("button", { key: '437a24eed79eda45cf05ef9226a4c0be3705033d', class: "btn btn-primary", onClick: () => (this.notificationCount += 1) }, "+"), h("button", { key: 'dafd0048079d40f0991ca0a0f82ef210c5b9a05e', class: "btn btn-primary", onClick: () => (this.notificationCount -= 1) }, "-")), h("ir-input-text", { key: '88c49d3cd499f97a2624f8482c6b9074822cf1c8', variant: "floating-label", class: "my-text-input", label: "First name", style: { '--ir-floating-input-height': '4rem' } }, h("svg", { key: 'b5f8979b01e507ca908bdf261fddf019342eb78b', xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 640 640", slot: "prefix" }, h("path", { key: '57fb315b61b9c157bfa91e50e925f613a9b62e48', d: "M480 272C480 317.9 465.1 360.3 440 394.7L566.6 521.4C579.1 533.9 579.1 554.2 566.6 566.7C554.1 579.2 533.8 579.2 521.3 566.7L394.7 440C360.3 465.1 317.9 480 272 480C157.1 480 64 386.9 64 272C64 157.1 157.1 64 272 64C386.9 64 480 157.1 480 272zM272 416C351.5 416 416 351.5 416 272C416 192.5 351.5 128 272 128C192.5 128 128 192.5 128 272C128 351.5 192.5 416 272 416z" })), h("svg", { key: 'f548d343b8de7a07cb70a233c6930ba3c2a30fe1', slot: "suffix", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 640 640" }, h("path", { key: 'edfd041d8a14f49c2f0c0fec4d631ae0963d2c9a', d: "M264 112L376 112C380.4 112 384 115.6 384 120L384 160L256 160L256 120C256 115.6 259.6 112 264 112zM208 120L208 544L432 544L432 120C432 89.1 406.9 64 376 64L264 64C233.1 64 208 89.1 208 120zM480 160L480 544L512 544C547.3 544 576 515.3 576 480L576 224C576 188.7 547.3 160 512 160L480 160zM160 544L160 160L128 160C92.7 160 64 188.7 64 224L64 480C64 515.3 92.7 544 128 544L160 544z" }))))));
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