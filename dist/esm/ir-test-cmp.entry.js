import { r as registerInstance, h, H as Host } from './index-60982d00.js';
import { J as sleep } from './utils-4f97ee3e.js';
import './moment-ab846cee.js';
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
        return (h(Host, { key: '478286fd48a2ae6dd790cf235fbd4ffef26a7741' }, h("nav", { key: '34ae43660b1a35e555b9b3fa19219321c7ac72bd', class: "modern-navbar" }, h("span", { key: '5e674ab20981bbf795ef278dd15d0e8e090e75b5', class: "overdue-banner" }, "Overdue $300"), h("div", { key: '3ce12af8b643859876d6570564fca47508291163', class: "navbar-container" }, h("div", { key: '637e21239de9ecb501e97863ec0dd2283bf03d68', class: "navbar-left" }, h("button", { key: '8a1dcded9968f6a9126b78958ea3ee9ab355aac4', class: "mobile-menu-toggle d-md-none", onClick: () => this.toggleMobileMenu() }, h("span", { key: 'ccd5a30dc149fd4bdb489f9fe10cf4766205b430', class: "hamburger-icon" }, h("span", { key: '0cdc1cc57e259d81f15d5c0aa81ac2cbb4ca55d0' }), h("span", { key: '00748b533a3ea4107ab89cd5e96c79d84a2241f2' }), h("span", { key: '654a1c231112abe6e8c94e78ac3e1e7046a6e14d' }))), h("div", { key: '73332663a4f0426ebab890b0e61ac4993bfcd7ba', class: "navbar-brand" }, "Logo"), h("div", { key: '8924e208d124446c4d4e611f378d3418e702e895', class: "d-none d-md-flex " }, h("ir-m-combobox", { key: '135b07108d73b8aed242bc55a5a3ad73f75f773f', style: { '--ir-combobox-width': 'max-content' }, placeholder: "Find property", dataMode: "static", options: this.staticOptions, onOptionChange: this.handleStaticOptionChange })), h("div", { key: '09b5e7ed5f4a7e4767ca1ddb3562f0628db42872', class: "hotel-name d-none d-md-block" }, "Hotel Name"), h("div", { key: 'f2144c34ce36cc4ccf868bb809ad326e95918ee5', class: "ml-auto d-md-none" }, h("ir-notifications", { key: 'b38234cc7895d1ed057d1bbfeb3d8b5f9fb7eead', notificationCount: this.notificationCount }))), h("div", { key: 'f5bc5ca66c1c2767be4bedce5315b46f15871376', class: "navbar-center d-none d-md-flex flex-fill mx-auto" }, h("ir-m-combobox", { key: 'c1b296a31af1ff73018ff86772e449126009b63e', placeholder: "Search...", dataMode: "static", options: this.staticOptions, onOptionChange: this.handleStaticOptionChange })), h("div", { key: '9c76e454abbd50fd1b6012c99c723fd02a1775c3', class: "navbar-right" }, h("ul", { key: '4aab300c956b8a767c62bed2147cce436ca3db72', class: "nav-items d-none d-md-flex" }, h("li", { key: '0762a4987f6fb5f5cccf834d7ff2eb9bac8acefd', class: "nav-item dropdown" }, h("a", { key: '581241875e046e2e6404d0f3e705cb697232070a', "data-reference": "parent", href: "#", role: "button", class: "nav-link", "data-toggle": "dropdown", "aria-expanded": "false" }, "a"), h("ul", { key: 'eb561f143bcacecbfd0129c8d928009da2eca01f', class: `ir-mega-menu mx-auto dropdown-menu-right dropdown-menu    w-100 shadow-sm` }, h("li", { key: '11ccae7348063e183b5021a13e3bf8c8943f1244' }, h("ul", { key: '8756ad97593bbc43bc5631d452c49e4dee39762d', class: "ir-mega-menu-column" }, h("li", { key: 'f618a679834dcb820499fc553cef0270f71008bf', class: "ir-mega-menu-row title" }, "Parameters"), h("li", { key: '7bd3be977c763173e83458c136518357f8134b9f', class: "ir-mega-menu-row" }, h("a", { key: 'abeff2d49637f6e19a26b9d6712cb6ff6bf6b5c6', href: "userinline.aspx" }, "Users List")), h("li", { key: '33db1b40aaa20b060caa106fc90ff73bf243d874', class: "ir-mega-menu-row" }, h("a", { key: '1cc5584caaac7fd721cac201dad41cecf69f8160', href: "languageinline.aspx" }, "System Languages")), h("li", { key: 'c14e63bd0fb328f30db61475ac7a0c97b4cf3ccc', class: "ir-mega-menu-row" }, h("a", { key: '45370ac30dc8381fede3f042721e73cb2f7e1dbd', href: "countryinline.aspx" }, "Countries")), h("li", { key: 'e0c5149798acf2416b2b0af0aa4f4eeac6171142', class: "ir-mega-menu-row" }, h("a", { key: 'd7ffff47302e8246658488d41b9cde17548c169b', href: "level2inline.aspx" }, "Country Level 2")), h("li", { key: '49f5e2049fa9b466afc7a9b81dabd03c225cd431', class: "ir-mega-menu-row" }, h("a", { key: 'f40d1053f4aadf4a163eeea1b7deca05a30a2a5d', href: "cardinline.aspx" }, "Credit Cards")), h("li", { key: '9dd37046c8038ad0bec16d8eaef814aba5571170', class: "ir-mega-menu-row" }, h("a", { key: 'c5b5c4cb477de862cc9ec24f23aa05862de09b02', href: "hotel_chaininline.aspx" }, "Hotel Chains")), h("li", { key: '0fd232a596a400e22cd3c389d31065f559e0c23d', class: "ir-mega-menu-row" }, h("a", { key: '5e8d01cb1e9ec1626cc9d22a382d4b125c51ede2', href: "currencyinline.aspx" }, "Currencies")), h("li", { key: '2e9680c6ed35fdb0a919d7587fa7216ca7be13a4', class: "ir-mega-menu-row" }, h("a", { key: '18e2610683641acc9eccba91ffa851e007de11df', href: "amenityinline.aspx" }, "Amenities")), h("li", { key: '50bdfac6f30cfd9787f1fea24fd2bcbf6b46f9ce', class: "ir-mega-menu-row" }, h("a", { key: '323d354b2dd377c7489581a12e6c13715020de6d', href: "foodinline.aspx" }, "Food")), h("li", { key: 'd863667c5bf606a72c3fa8f0eea117dc4020fd53', class: "ir-mega-menu-row" }, h("a", { key: '210ac6eaa38bcf73c72ecf44c8aaa4c69627f6fc', href: "beddinginline.aspx" }, "Bedding")), h("li", { key: '1539ff7d709ef4824d7537d3ed4901f4cdcbfaa1', class: "ir-mega-menu-row" }, h("a", { key: '90de5cd3ce8f8e254bdccae1a15da7abea14ac01', href: "setupinline.aspx" }, "Setup Table")), h("li", { key: 'ceef0fa0adaf3bcf9b0e90ebb046386e69b61078', class: "ir-mega-menu-row" }, h("a", { key: 'fba6a37a81bcb729a2140877b3f39ad9b2d6fcc8', href: "gwedit.aspx" }, "Payment Gateways")), h("li", { key: '88058e445c94333791d347d88b7e1f69ad3f8270', class: "ir-mega-menu-row" }, h("a", { key: '5ac0047f99355d180990bcc6d6146190f27466b8', href: "channelmanager.aspx" }, "Channel Manager")))), h("li", { key: 'f0265e7d944a6afc1080a56f493cfd981e72a4bc' }, h("ul", { key: '3eaaec99f971ce2831a93385d7bdf0bf9c89b0d3', class: "ir-mega-menu-column" }, h("li", { key: 'b0aa7c3c18fc29ff299527c18c375208bed53611', class: "ir-mega-menu-row title" }, "Main"), h("li", { key: '16c6c7a958a4db722a1b08037b372adc3725a288', class: "ir-mega-menu-row" }, h("a", { key: '7c2dc4946966078444588fee4dfad3bad6052af0', href: "mpolist.aspx" }, "MPOs")), h("li", { key: '4c255eeee27c5a90a20cf32c66c642d2494d2e11', class: "ir-mega-menu-row" }, h("a", { key: '6e3a2abb52f04da171d28ef76a20792bbe896c56', href: "aclist.aspx" }, "Properties")), h("li", { key: '17b4c6a74f3889c20816b998c0fced69786cc9a1', class: "ir-mega-menu-row" }, h("a", { key: '8ab04259e84de128c92ff648b831e7d854e1428b', href: "acbookinglist.aspx?MODE=MPO" }, "Bookings")), h("li", { key: 'a03c44c7063eabe12e8f368e15cf22ff02f3edec', class: "ir-mega-menu-row" }, h("a", { key: '43792a22f958e0bc4ec1bae2853de958d8fee676', href: "mpoaffiliateproperties.aspx" }, "MPO Affiliate Properties")), h("li", { key: 'bf138b8f1b2adfbeb3bf72f03bfa8ea6a84e4a68', class: "ir-mega-menu-row" }, h("a", { key: '7892ec88d8257825b216db91856a55c667b811d7', href: "acratesallotment.aspx?VIEW_MODE=CV" }, "MPO Combined Inventory")), h("li", { key: '81b87a2da81ce91e7d380a8aea446cff1910e4f9', class: "ir-mega-menu-row" }, h("a", { key: 'f2078e1afb2b21768d7b593becf39fdbc31b6d8d', href: "acbookinglist.aspx?VIEW_MODE=CV" }, "MPO Combined Bookings")), h("li", { key: '00a35f4876092bf863c3ca3092b1ecb8c44e1e0c', class: "ir-mega-menu-row" }, h("a", { key: '4cacd8624d0f72a4024ff988a36b740db295afa6', href: "Acmemberlist.aspx?VIEW_MODE=CV" }, "MPO Combined Guests")), h("li", { key: '260e1037a6502a64b9238378656fbc4f25202f7d', class: "ir-mega-menu-row" }, h("a", { key: 'd3007cacb6b005f99a7a27cbf7d317e868a6525e', href: "mpobillingreport.aspx" }, "MPO Billing Report")), h("li", { key: '8b2c36f5917438364100d6173d146a1645493b20', class: "ir-mega-menu-row" }, h("a", { key: '72e7aa404eca9f473a9d81b7b2eb34611553686d', href: "Acmemberlist.aspx" }, "Guests")), h("li", { key: 'cd6d5acefdd0a55e9701706ad5f53170fd05f5ec', class: "ir-mega-menu-row" }, h("a", { key: '35a25c86b62520f7479a1a29345868744ef4a078', href: "acbookinglist.aspx" }, "Bookings")), h("li", { key: '32ef6bdaddef1dc5e540561155b0d362b34c0ea4', class: "ir-mega-menu-row" }, h("a", { key: '8283025a97810a562edb1372fb38caf9955cab32', href: "billing.aspx" }, "Billing")))), h("li", { key: '98c09d8570520aed0d55e1de92c1e2f85671a41a' }, h("ul", { key: 'e75e3a3e3cb40b9c9e8055f0196f71f708bb71ea', class: "ir-mega-menu-column" }, h("li", { key: '4c24253516c991df5a4d5beeebeb29c5a3af9761', class: "ir-mega-menu-row title" }, "Locations"), h("li", { key: '90cba4d35ed0957a988bc58d30672fb704507dee', class: "ir-mega-menu-row" }, h("a", { key: '9d85229d0ebb1acc95378213b7bc1fd7c5dc7de8', href: "poicategoriesinline.aspx" }, "Types")), h("li", { key: '785bdb7fc771825e31a83826e74f9431483e4ac5', class: "ir-mega-menu-row" }, h("a", { key: '7be681d3c777c2694bb6f77ab233dafbe9d65b21', href: "poilist.aspx" }, "List")))), h("li", { key: '6ceda5bbe59c129544c698a056ce849f4b4552c2' }, h("ul", { key: '86fd4777159fd5f6bc08cba9c9a73000943c8d74', class: "ir-mega-menu-column" }, h("li", { key: '04e487cb6bb3fa6f769b8b8b71a415b8eb69ffc0', class: "ir-mega-menu-row title" }, "Referrers"), h("li", { key: '64358b91a4471e36f0253e8a6128c34d93d1110c', class: "ir-mega-menu-row" }, h("a", { key: '85844f5aed6793b9dec4fdc1ccc45db153b466ab', href: "affiliatelist.aspx" }, "Affiliates")), h("li", { key: 'e6354aa82efc0f39e9c157dd82a5776b9b14e468', class: "ir-mega-menu-row" }, h("a", { key: 'f72b60098ea8b96d27fbf031b1f41142988dd973', href: "travelagentslist.aspx" }, "Travel Agents ...NOT USED")))))), h("li", { key: 'df2c868188b0e1ad2beb8caa1a30c9801dffb39b', class: "nav-item" }, h("a", { key: '2964446da3ab2f6f38bd69f2a883c774f6a0218f', href: "#", class: "nav-link" }, "b")), h("li", { key: '8074c6e23ac78f43d53d4516e3a1fb381acd2dc5', class: "nav-item" }, h("a", { key: 'e0a84ee9b5c93269bc7b8aa15a56f2313c3dcc46', href: "#", class: "nav-link" }, "c")), h("li", { key: 'd3ae74a059d3f5c21ebf59ffe122e8c348de5a43', class: "nav-item" }, h("a", { key: 'cf681826616e3e0fa49eb220b7b5317fc9927e3e', href: "#", class: "nav-link" }, "d")), h("li", { key: '1c36727d85d02fff56e508d74124e7a65a56fc61', class: "nav-item" }, h("div", { key: 'cd9757d6af78bea68ba05f5a44abae0e9d319c81', class: "d-flex align-items-center justify-content-center", style: { marginTop: '2px' } }, h("ir-notifications", { key: 'd86470791b1ae23f8f2e6569d9cdbb7ddb63253b', notificationCount: this.notificationCount }))))), h("div", { key: 'ffaaba8bc4cb9cc6dd6fe38e1f3961a43ee04743', class: `mobile-menu ${this.isMobileMenuOpen ? 'active' : ''}` }, h("div", { key: '338a3b8af415df352f3da4fb9d0b20c72bff298d', class: "mobile-menu-header" }, h("div", { key: '588129d636767e71b7594ef56fdf3eb5019784cf', class: "hotel-name" }, "Hotel Name"), h("button", { key: '4269b798a57e544321c40b314fd2a6f381a2ba98', class: "close-menu", onClick: () => this.toggleMobileMenu() }, "\u00D7")), h("div", { key: 'aa8829bdf2ae2ffae0477ebc4c7ac388bd73c198', class: "mobile-search" }, h("ir-m-combobox", { key: 'd076acef01ca9267fa6c3fcd4b795f3fb93ae03a', placeholder: "Search...", dataMode: "static", options: this.staticOptions, onOptionChange: this.handleStaticOptionChange })), h("ac-pages-menu", { key: 'e458ac3cd85bfe506d5f85cdf0b5fda57670f2ab', location: "sheet", "onLink-clicked": async (e) => {
                await sleep(1000);
                window.location.href = e.detail.target.href;
            }, pages: this.pages }))), h("div", { key: 'dff1a04dd65aafd135f65d7e647d036fc0edb316', class: "submenus d-none d-md-block" }, h("ac-pages-menu", { key: 'a590d48c62b7222ba69b198f145bb418896e8d3a', pages: this.pages }))), h("section", { key: '08d1b276c833b10c0297b407bc699ff6917f5886', class: "p-2" }, h("div", { key: '91a0b34245b6f7d17a5ba81ba6f4ee3ebf24d760', class: "row g-3" }, h("div", { key: '6f4c5e117c0a71f7d0f95c5e2a9614d71b08ecbf', class: "col-md-3" }, h("h5", { key: 'a383ac47bc44dc1c20bf5d9612d5a9b8e1df1d72' }, "Static Options Example"), h("ir-m-combobox", { key: '9e465851a942e93e2fc0c7c7ec1b704ea81eb276', placeholder: "Select an option...", dataMode: "static", options: this.staticOptions, onOptionChange: this.handleStaticOptionChange }, h("svg", { key: '4cd713369d6cb8ad930e3d9d8597a8416ab9ec9d', xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 640 640", slot: "prefix" }, h("path", { key: '4b352d40e5d9598e2eec40c9716079af54dce588', d: "M480 272C480 317.9 465.1 360.3 440 394.7L566.6 521.4C579.1 533.9 579.1 554.2 566.6 566.7C554.1 579.2 533.8 579.2 521.3 566.7L394.7 440C360.3 465.1 317.9 480 272 480C157.1 480 64 386.9 64 272C64 157.1 157.1 64 272 64C386.9 64 480 157.1 480 272zM272 416C351.5 416 416 351.5 416 272C416 192.5 351.5 128 272 128C192.5 128 128 192.5 128 272C128 351.5 192.5 416 272 416z" }))), this.selectedStaticOption && h("p", { key: '2a4db864d66e6c456abf82d1551c43da67e4d399', class: "mt-2 text-muted" }, "Selected: ", this.selectedStaticOption.label)), h("div", { key: '2eff0231afdccaeee89ef475c21c479e51eeb91d', class: "col-md-3" }, h("h5", { key: '09ea999f655c30faafab62fa16f9deb9450ec07d' }, "External API - Countries"), h("ir-m-combobox", { key: 'ac84685e85f6f0562010e198d6ea048e29dbfb8f', placeholder: "Search countries...", dataMode: "external", options: this.countryOptions, loading: this.isLoadingCountries, debounceDelay: 300, onSearchQuery: this.handleCountrySearch, onOptionChange: this.handleCountryChange }), this.selectedCountry && h("p", { key: '06418daa841bc34792ddec315790c85c914c1454', class: "mt-2 text-muted" }, "Selected: ", this.selectedCountry.label)), h("div", { key: '1b86e7111e742bac4ffe4e00b0b146a840a28847', class: "col-md-3" }, h("h5", { key: 'f88a42b80e06e883fbf3f0452d69df0d21ff9eed' }, "Custom Dropdown Content"), h("ir-m-combobox", { key: '9ccd8fb78439f516a74fb8dbb3fbfde4448063bc', class: "custom-width", ref: el => (this.customComboboxRef = el), placeholder: "Search with custom dropdown...", dataMode: "external", options: this.customOptions, loading: this.isLoadingCustom, useSlot: true, debounceDelay: 500, onSearchQuery: this.handleCustomSearch, onOptionChange: this.handleCustomOptionChange }, h("div", { key: '18082adb2ff3ce399c72e315092f1d39fc994d37', slot: "dropdown-content" }, this.isLoadingCustom && h("div", { key: 'c5b8628252289760ad32c89c1d1ae5bb1589d639', class: "dropdown-item" }, "\uD83D\uDD04 Loading custom results..."), !this.isLoadingCustom && this.customOptions.length === 0 && h("div", { key: '616c3bc6bb34b717a87b3f473874508beab40133', class: "dropdown-item" }, "\uD83D\uDD0D Type to search..."), !this.isLoadingCustom &&
            this.customOptions.map((option, index) => (h("div", { key: index, class: "dropdown-item d-flex align-items-center", "data-option": option.value, "data-label": option.label, onClick: () => this.handleCustomOptionClick(option), onMouseEnter: e => {
                    const element = e.target;
                    const slotIndex = element.getAttribute('data-slot-index');
                    if (slotIndex && this.customComboboxRef) {
                        this.customComboboxRef.focusedIndex = parseInt(slotIndex);
                    }
                }, style: { cursor: 'pointer' } }, h("span", { class: "me-2" }, "\u2B50"), h("div", null, h("div", { class: "fw-bold" }, option.label), h("small", { class: "text-muted" }, "Custom option with ID: ", option.value))))))), this.selectedCustomOption && h("p", { key: 'f39606edf99da93fe3432cda2efedde25aae4365', class: "mt-2 text-muted" }, "Selected: ", this.selectedCustomOption.label))), h("div", { key: '67fa9105748fb93007dcd9e0404bb7a0c27156e5', class: 'd-flex align-items-center my-1', style: { gap: '1rem' } }, h("button", { key: 'a911ab30f2b4208dc7d6eae39e3ee4c24aded03f', class: "btn btn-primary", onClick: () => (this.notificationCount += 1) }, "+"), h("button", { key: '9a939c9b782ec8210ed00164d5f3fcd7df8907db', class: "btn btn-primary", onClick: () => (this.notificationCount -= 1) }, "-")), h("ir-input-text", { key: '36e718a078932e37f7165159fae44d9339d74891', variant: "floating-label", class: "my-text-input", label: "First name", style: { '--ir-floating-input-height': '4rem' } }, h("svg", { key: '6366df01c5952a39b1f353109f32418051b46056', xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 640 640", slot: "prefix" }, h("path", { key: '1b9af2823542d98020681d62c13a4e7aadd61ec4', d: "M480 272C480 317.9 465.1 360.3 440 394.7L566.6 521.4C579.1 533.9 579.1 554.2 566.6 566.7C554.1 579.2 533.8 579.2 521.3 566.7L394.7 440C360.3 465.1 317.9 480 272 480C157.1 480 64 386.9 64 272C64 157.1 157.1 64 272 64C386.9 64 480 157.1 480 272zM272 416C351.5 416 416 351.5 416 272C416 192.5 351.5 128 272 128C192.5 128 128 192.5 128 272C128 351.5 192.5 416 272 416z" })), h("svg", { key: '733fcc8f5acb149c937870e6bf4ea7fd73f4c4f4', slot: "suffix", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 640 640" }, h("path", { key: '3130b934a8b7e9d8b2bb6e82d3bf5aeb6d8e69f6', d: "M264 112L376 112C380.4 112 384 115.6 384 120L384 160L256 160L256 120C256 115.6 259.6 112 264 112zM208 120L208 544L432 544L432 120C432 89.1 406.9 64 376 64L264 64C233.1 64 208 89.1 208 120zM480 160L480 544L512 544C547.3 544 576 515.3 576 480L576 224C576 188.7 547.3 160 512 160L480 160zM160 544L160 160L128 160C92.7 160 64 188.7 64 224L64 480C64 515.3 92.7 544 128 544L160 544z" }))))));
    }
};
IrTestCmp.style = IrTestCmpStyle0;

export { IrTestCmp as ir_test_cmp };

//# sourceMappingURL=ir-test-cmp.entry.js.map