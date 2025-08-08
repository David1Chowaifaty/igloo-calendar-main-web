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
        return (h(Host, { key: 'b684212239948e1adf56a2bbcd93fb151e305517' }, h("nav", { key: '15f1780b22bb1d8f3553b06a29263a7010107a76', class: "modern-navbar" }, h("span", { key: '17879f2cac23a0b6b84a581d35e0144a19b3b0d7', class: "overdue-banner" }, "Overdue $300"), h("div", { key: '3c3fd2eded9bf58cbe8eb993622962253fa88427', class: "navbar-container" }, h("div", { key: 'd1a1a66e96a6917a9712d0d59fa689aa03b8ed17', class: "navbar-left" }, h("button", { key: '2d5f8b7de9bc4b7d9e484bf3d729f6a0fb73a70e', class: "mobile-menu-toggle d-md-none", onClick: () => this.toggleMobileMenu() }, h("span", { key: '42ccaf21223cbea8f20dbaacd18bcd44e590983f', class: "hamburger-icon" }, h("span", { key: 'fe2e5ff8236d01ba64c8fd2a9e3b7ba24afdb580' }), h("span", { key: '464f3066fc4d1b1cf158ca51203470171c5c5bdd' }), h("span", { key: '0d7cee7605eee6420fa9f3f7fbb20a63b10aafe2' }))), h("div", { key: '87ded4441f0b225eb68ebeed5134d8049ec7daed', class: "navbar-brand" }, "Logo"), h("div", { key: '1ff93be56742c8ea3f0b75b14229c91f3c4ea5c5', class: "d-none d-md-flex " }, h("ir-m-combobox", { key: '5cd337f02829546e2ffb1fa9b97cdc3ea5b9fd46', style: { '--ir-combobox-width': 'max-content' }, placeholder: "Find property", dataMode: "static", options: this.staticOptions, onOptionChange: this.handleStaticOptionChange })), h("div", { key: 'a4ca3fbd84aff4893a3caf21a219275479f9ba1f', class: "hotel-name d-none d-md-block" }, "Hotel Name"), h("div", { key: '5dade346a8b7152a2968863915101b6ae3772773', class: "ml-auto d-md-none" }, h("ir-notifications", { key: '1f01aafb12a3a1f89100965defcec3fe1fa281ff', notificationCount: this.notificationCount }))), h("div", { key: '35c3ea277364d65d2fe0871448156e4f6b5834b2', class: "navbar-center d-none d-md-flex flex-fill mx-auto" }, h("ir-m-combobox", { key: '10f1d9e8622540184f61609ccc15e51898b2f4b0', placeholder: "Search...", dataMode: "static", options: this.staticOptions, onOptionChange: this.handleStaticOptionChange })), h("div", { key: 'ed0a57a156ce477649e12cb4560dde05c75bc5a9', class: "navbar-right" }, h("ul", { key: '17fd8aeb7a25bffebd69484eefe8e1e7f87f1ba5', class: "nav-items d-none d-md-flex" }, h("li", { key: '35779aacb3f6c64eb99c9de92472aa801dcafe58', class: "nav-item dropdown" }, h("a", { key: '87d6213b2e8ba7d481ee51c02e0e85c191d3eea0', "data-reference": "parent", href: "#", role: "button", class: "nav-link", "data-toggle": "dropdown", "aria-expanded": "false" }, "a"), h("ul", { key: '795f575ba0fbb0ea37863f7e0b4671be63e43b78', class: `ir-mega-menu mx-auto dropdown-menu-right dropdown-menu    w-100 shadow-sm` }, h("li", { key: '237cf28361b9205adb36eab38fb9e815bdc268f1' }, h("ul", { key: 'e1a912e8dc7b2ec13f530baae2289f397f3b1a41', class: "ir-mega-menu-column" }, h("li", { key: 'c5a4aa9a7195224484124da1099bb2a9c004316e', class: "ir-mega-menu-row title" }, "Parameters"), h("li", { key: '6ab906f74fb4baa830650deba08f0cf48f1de3bf', class: "ir-mega-menu-row" }, h("a", { key: '56d8b8ef397523ea3129d05fde3fef42cb8cd001', href: "userinline.aspx" }, "Users List")), h("li", { key: 'abbe7de31b52b2da7c7434b062f7c97283556b41', class: "ir-mega-menu-row" }, h("a", { key: 'd6bf18040785d7953e1bd9c56e96ddd2b49f7e22', href: "languageinline.aspx" }, "System Languages")), h("li", { key: '6d3709dba9def08fcf82588e51e4b99f8b6605ca', class: "ir-mega-menu-row" }, h("a", { key: 'efd2cd0bb7132ce23202918240c262861df6950a', href: "countryinline.aspx" }, "Countries")), h("li", { key: '52505b5f7670acbb14985c17d64d20312d098e5e', class: "ir-mega-menu-row" }, h("a", { key: 'e757855b3deb34c10a09c1bfcecced187c268c80', href: "level2inline.aspx" }, "Country Level 2")), h("li", { key: '461b77fc91527014e90122a603029119e7193229', class: "ir-mega-menu-row" }, h("a", { key: '7d6cef61fb438f695f6587f1f81ac232e26f4311', href: "cardinline.aspx" }, "Credit Cards")), h("li", { key: '58b340ad1c9d2ee91e3b4a9086b1261a819b5b12', class: "ir-mega-menu-row" }, h("a", { key: 'd0a7b3b025494e85f65b4b36464b988ac0c70ce2', href: "hotel_chaininline.aspx" }, "Hotel Chains")), h("li", { key: '2836dac56e08135addd2446beeacf5b16d1f64e0', class: "ir-mega-menu-row" }, h("a", { key: '1533a97c12253d7e9a2ac445b649bca89b7fb4b5', href: "currencyinline.aspx" }, "Currencies")), h("li", { key: '7da2fd63c2527c90282e9b1aad5e2fe631bc4d39', class: "ir-mega-menu-row" }, h("a", { key: 'abb98d158883e66d5119b5e9ebfa0f71ff95c0b1', href: "amenityinline.aspx" }, "Amenities")), h("li", { key: '75f6c0aa7fab52f3554973b7e4a0cad01a19d17c', class: "ir-mega-menu-row" }, h("a", { key: 'e5123cd0911b03987b957dd02a5e498bfd30bb23', href: "foodinline.aspx" }, "Food")), h("li", { key: '15dbb9b174d5e1c462d089042766c2e4f4442991', class: "ir-mega-menu-row" }, h("a", { key: '14807d2ce62f0c5a281c15868a9b7398a7705f56', href: "beddinginline.aspx" }, "Bedding")), h("li", { key: '07a3903515de305a4de3d74cd8ebefbdec8c1e6e', class: "ir-mega-menu-row" }, h("a", { key: 'b6e00f5429f74644f9c64ade8b96d465b4c12746', href: "setupinline.aspx" }, "Setup Table")), h("li", { key: 'bb5f0e5ba15d98420087bc0b7a6e994c1369e508', class: "ir-mega-menu-row" }, h("a", { key: '363f68b24ced765d0b0b57ecc0d0f5edd8311c4a', href: "gwedit.aspx" }, "Payment Gateways")), h("li", { key: '6b8e8cf995507fd578dc4029fda48c1fc3f22aa8', class: "ir-mega-menu-row" }, h("a", { key: 'bfe48e5c22917ce871a3078e0a242308366db3a3', href: "channelmanager.aspx" }, "Channel Manager")))), h("li", { key: '9691a72492fa4569716d1eca986d6bcd11c7d3e7' }, h("ul", { key: '378e2fae4138018b0f850e5107baca5be67c6ac2', class: "ir-mega-menu-column" }, h("li", { key: '5c3db21c7f79a1ed837ade5717d8116e4c053549', class: "ir-mega-menu-row title" }, "Main"), h("li", { key: '8effac12e5c0b47d2ff3fb54ba215c22df2e6b13', class: "ir-mega-menu-row" }, h("a", { key: 'aecaeb92c71b88dcd46ec91ec7d0456373b6c0b4', href: "mpolist.aspx" }, "MPOs")), h("li", { key: 'e720381cfbeb64e932b537fa2139ee3b1efb7bcf', class: "ir-mega-menu-row" }, h("a", { key: 'c3e775764b04a58a80c3fa03a5c0c8583479c36e', href: "aclist.aspx" }, "Properties")), h("li", { key: '6394bdfcb701c4e2de39f6fb0465a92f060efe72', class: "ir-mega-menu-row" }, h("a", { key: '2756a34fd2a75b9d43c341a2ef954e94fb0e6f58', href: "acbookinglist.aspx?MODE=MPO" }, "Bookings")), h("li", { key: '749280036064b471b22f140ad0e80d6c278f49d1', class: "ir-mega-menu-row" }, h("a", { key: '8801e2b8f6c0697b68c8de61c4dc64d4efe962d9', href: "mpoaffiliateproperties.aspx" }, "MPO Affiliate Properties")), h("li", { key: 'f2057d6da978feab41d9442437e597e2a754c766', class: "ir-mega-menu-row" }, h("a", { key: '173b1520888165428f2aad9dc4959569954d8749', href: "acratesallotment.aspx?VIEW_MODE=CV" }, "MPO Combined Inventory")), h("li", { key: 'f3d8c1e8dd0f3e9806e8d2ac0bfcfa72e96763a1', class: "ir-mega-menu-row" }, h("a", { key: '4ac105b987bb3d7f289c35b6094e1b15ae3d6039', href: "acbookinglist.aspx?VIEW_MODE=CV" }, "MPO Combined Bookings")), h("li", { key: '91edfacbb714604f449b1746a2bf3af43d81d86d', class: "ir-mega-menu-row" }, h("a", { key: '2168ade21a0e495e77b73cd41a9e940c8c3cce56', href: "Acmemberlist.aspx?VIEW_MODE=CV" }, "MPO Combined Guests")), h("li", { key: '8397b85120c3a0bed9adcee2e350c2181379027e', class: "ir-mega-menu-row" }, h("a", { key: '0c3421c1b9fbc94548722661096988169cbcd65c', href: "mpobillingreport.aspx" }, "MPO Billing Report")), h("li", { key: '05482d696d0923eca9e3cfb4f75cac02ff595841', class: "ir-mega-menu-row" }, h("a", { key: 'f665139ccb3fb1dd79af466c19f6f4ab13ace15d', href: "Acmemberlist.aspx" }, "Guests")), h("li", { key: '5742c95f72c8e49560b5e35d415fb065bbf63f73', class: "ir-mega-menu-row" }, h("a", { key: '4aac2caff2a25391d3a553295727b15b53509825', href: "acbookinglist.aspx" }, "Bookings")), h("li", { key: '1d7c3d05704c76337e5b0af6f53bde3ac541e061', class: "ir-mega-menu-row" }, h("a", { key: 'e1b0042e08405ec6e9ef4bfef80dedbd939454b8', href: "billing.aspx" }, "Billing")))), h("li", { key: '5970df958f73c75412979aba9d941cc2d2429e80' }, h("ul", { key: '4614274cfb1f87d7e343bbf51131628a558f7898', class: "ir-mega-menu-column" }, h("li", { key: 'ac7223347833e6f60d01320d8b2509d8ca09eee4', class: "ir-mega-menu-row title" }, "Locations"), h("li", { key: '9636c2606f53a2e84a3c18b4d7b4fa550fb087f5', class: "ir-mega-menu-row" }, h("a", { key: '72bcd0450e8b321406c6a1f98665d0318d5ceaf7', href: "poicategoriesinline.aspx" }, "Types")), h("li", { key: 'f29940837e8eb6024f4aef3ffdcf226c6e52c0d3', class: "ir-mega-menu-row" }, h("a", { key: '27755ecd4fef435e845f7c6071eb1bf2dba16d11', href: "poilist.aspx" }, "List")))), h("li", { key: '0dc8f79ce0337e5d34a8ef6a4828c0670d7b6abe' }, h("ul", { key: '033b145eb96af7219586627b04963500b347a28a', class: "ir-mega-menu-column" }, h("li", { key: '3283d645479aa8104768667c11b5caeb2e9de785', class: "ir-mega-menu-row title" }, "Referrers"), h("li", { key: '64fd81aced6a56b4aaf659f4163245db3d7f5789', class: "ir-mega-menu-row" }, h("a", { key: '86c4ee70e3af2bcb1f7d6a012fa7be6c843861aa', href: "affiliatelist.aspx" }, "Affiliates")), h("li", { key: 'd5b538fca25da41aa4f3482d482d70afdd34caef', class: "ir-mega-menu-row" }, h("a", { key: '2a8aa1e22d0eec34e8c617dfe8b4fe48859cbf2b', href: "travelagentslist.aspx" }, "Travel Agents ...NOT USED")))))), h("li", { key: 'fe87901aaee50d2b47c719aff22108ba13ba59aa', class: "nav-item" }, h("a", { key: '015448cc4b2e6b4a363c6d2174d040fc7118f649', href: "#", class: "nav-link" }, "b")), h("li", { key: 'c0f94f134ea0c2ecbeee24727b2871b3999ecdf1', class: "nav-item" }, h("a", { key: '5d75cb5094e8cccf6da62cf37539e7db9561a931', href: "#", class: "nav-link" }, "c")), h("li", { key: '6ee8b8d6930840d290fe110503b4438af5020aa8', class: "nav-item" }, h("a", { key: '9bbf6bf4e9f17bac3644cef751f4d49fefbf3cdd', href: "#", class: "nav-link" }, "d")), h("li", { key: 'b23261f45a377b46541d98463f91997fbf54c390', class: "nav-item" }, h("div", { key: '31d011cad6724d694e01a1b2c5091ef411671630', class: "d-flex align-items-center justify-content-center", style: { marginTop: '2px' } }, h("ir-notifications", { key: '63c9c73d24765186cb4fc6a65db541a810da19c8', notificationCount: this.notificationCount }))))), h("div", { key: '4c30ada6134db3a3582a886489f9a44856539557', class: `mobile-menu ${this.isMobileMenuOpen ? 'active' : ''}` }, h("div", { key: 'bf36c95a46d7d72f729251dcab0574158d1d09e1', class: "mobile-menu-header" }, h("div", { key: 'ec4f6d20bb14ebf842c2c7101fb29a9583bd50c5', class: "hotel-name" }, "Hotel Name"), h("button", { key: 'acf68aab19fdb4d39a59ec4f7b623e9a9f45f43f', class: "close-menu", onClick: () => this.toggleMobileMenu() }, "\u00D7")), h("div", { key: '65631a6974160823dfb219d0c34d7cb227626735', class: "mobile-search" }, h("ir-m-combobox", { key: 'fb602fe10c8f380fe67b47cf2a6d4a81a8ee33b6', placeholder: "Search...", dataMode: "static", options: this.staticOptions, onOptionChange: this.handleStaticOptionChange })), h("ac-pages-menu", { key: '525cbb9b699f6ca05e44767932b2540f99554466', location: "sheet", pages: this.pages }))), h("div", { key: '6d622e6d352825e31ba0d6db51746d8c48a2f38f', class: "submenus d-none d-md-block" }, h("ac-pages-menu", { key: '67487d8f11a123652913a06db0366c283d942170', pages: this.pages }))), h("section", { key: '476e1145ea216d22d76a0dc4bf764b36d308ca8e', class: "p-2" }, h("div", { key: 'e755f0db2142580ff039c7148586172eb425273f', class: "row g-3" }, h("div", { key: '973937d0838c07b675e1786ed390dac96c50224e', class: "col-md-3" }, h("h5", { key: 'e118649b776375c464e305e05d0f00b266f5a654' }, "Static Options Example"), h("ir-m-combobox", { key: '75751b5b736290346208aead9eeae74130635e78', placeholder: "Select an option...", dataMode: "static", options: this.staticOptions, onOptionChange: this.handleStaticOptionChange }), this.selectedStaticOption && h("p", { key: 'b948375c27cb06d329b8f6eba60629de1c1459d7', class: "mt-2 text-muted" }, "Selected: ", this.selectedStaticOption.label)), h("div", { key: '122a7fed92ba5b9334d635adef6aafd314d6c763', class: "col-md-3" }, h("h5", { key: 'eb60d6660507cf047e1ef147e42523f159642427' }, "External API - Countries"), h("ir-m-combobox", { key: '2285f0ba1f5e16765c9e2f4ca11f0d799751522a', placeholder: "Search countries...", dataMode: "external", options: this.countryOptions, loading: this.isLoadingCountries, debounceDelay: 300, onSearchQuery: this.handleCountrySearch, onOptionChange: this.handleCountryChange }), this.selectedCountry && h("p", { key: 'f10d43560ad6d96cf431d9038b95d653c803f214', class: "mt-2 text-muted" }, "Selected: ", this.selectedCountry.label)), h("div", { key: 'e6a9f312bb2393af6d090addc83d177540d21171', class: "col-md-3" }, h("h5", { key: '3c9a33063db8a1a5df3b8929f9d08f775c0ccba4' }, "Custom Dropdown Content"), h("ir-m-combobox", { key: 'a8beb88690f616748510ec9b231b878d120b640d', class: "custom-width", ref: el => (this.customComboboxRef = el), placeholder: "Search with custom dropdown...", dataMode: "external", options: this.customOptions, loading: this.isLoadingCustom, useSlot: true, debounceDelay: 500, onSearchQuery: this.handleCustomSearch, onOptionChange: this.handleCustomOptionChange }, h("div", { key: 'c7a2512f23c243b01f132e300f9df70ecd78f52f', slot: "dropdown-content" }, this.isLoadingCustom && h("div", { key: 'c3f9afde7875db3a1fd0cccc2b16d593ebc71572', class: "dropdown-item" }, "\uD83D\uDD04 Loading custom results..."), !this.isLoadingCustom && this.customOptions.length === 0 && h("div", { key: '2bdd809989d25f9b66fabe36096be1c9653223b1', class: "dropdown-item" }, "\uD83D\uDD0D Type to search..."), !this.isLoadingCustom &&
            this.customOptions.map((option, index) => (h("div", { key: index, class: "dropdown-item d-flex align-items-center", "data-option": option.value, "data-label": option.label, onClick: () => this.handleCustomOptionClick(option), onMouseEnter: e => {
                    const element = e.target;
                    const slotIndex = element.getAttribute('data-slot-index');
                    if (slotIndex && this.customComboboxRef) {
                        this.customComboboxRef.focusedIndex = parseInt(slotIndex);
                    }
                }, style: { cursor: 'pointer' } }, h("span", { class: "me-2" }, "\u2B50"), h("div", null, h("div", { class: "fw-bold" }, option.label), h("small", { class: "text-muted" }, "Custom option with ID: ", option.value))))))), this.selectedCustomOption && h("p", { key: 'adb7a2b4b301da9d878708a267494c2f50ec4479', class: "mt-2 text-muted" }, "Selected: ", this.selectedCustomOption.label))), h("div", { key: 'a2fc62a9e7e899ee4cbecc074bad77b6e3a52058', class: 'd-flex align-items-center my-1', style: { gap: '1rem' } }, h("button", { key: '0182ae11cbd7adc018cd769ec9b4413456cf6031', class: "btn btn-primary", onClick: () => (this.notificationCount += 1) }, "+"), h("button", { key: '8646e890cac1a4e99a059e85e4ad2734e2012dc7', class: "btn btn-primary", onClick: () => (this.notificationCount -= 1) }, "-")))));
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