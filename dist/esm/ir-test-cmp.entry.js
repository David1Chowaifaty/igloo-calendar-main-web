import { r as registerInstance, h, H as Host } from './index-60982d00.js';
import { s as sleep } from './utils-89f2d39e.js';
import { c as colorVariants } from './icons-f8664e4a.js';
import './moment-ab846cee.js';
import './index-6ecc32cd.js';
import './calendar-data-f4e207f9.js';
import './index-c4cf83be.js';
import './axios-aa1335b8.js';
import './locales.store-629477c2.js';

const irTestCmpCss = ".sc-ir-test-cmp-h{display:block;height:100vh}.modern-navbar.sc-ir-test-cmp{background:#fff;box-shadow:0 2px 10px rgba(0, 0, 0, 0.1);position:sticky;top:0;z-index:1000;border-bottom:1px solid #e5e7eb}.overdue-banner.sc-ir-test-cmp{padding:0.5rem;background:var(--red);color:white;text-align:center;width:100%;display:block}.navbar-container.sc-ir-test-cmp{display:flex;align-items:center;justify-content:space-between;padding:0.5rem 1rem;margin:0 auto}.submenus.sc-ir-test-cmp{background:#104064 !important;width:100%}.navbar-left.sc-ir-test-cmp{display:flex;align-items:center;gap:1rem;width:100%}.custom-width.sc-ir-test-cmp{width:240px}.navbar-brand.sc-ir-test-cmp{font-weight:700;font-size:1.5rem;color:#1f2937}.hotel-name.sc-ir-test-cmp{color:#6b7280;font-size:0.875rem;font-weight:500}.navbar-center.sc-ir-test-cmp{margin-inline:auto}.navbar-right.sc-ir-test-cmp{display:flex;align-items:center}.nav-items.sc-ir-test-cmp{display:flex;list-style:none;margin:0;padding:0;gap:0.5rem}.nav-item.sc-ir-test-cmp{margin:0}.nav-link.sc-ir-test-cmp{display:flex;align-items:center;padding:0.5rem 1rem;text-decoration:none;font-weight:500;border-radius:0.375rem;transition:all 0.2s ease;cursor:pointer}.nav-link.sc-ir-test-cmp:hover{background-color:#f3f4f6;color:#1f2937;text-decoration:none}.mobile-menu-toggle.sc-ir-test-cmp{display:flex;align-items:center;justify-content:center;width:2.5rem;height:2.5rem;border:none;background:none;cursor:pointer;border-radius:0.375rem;transition:background-color 0.2s ease}.mobile-menu-toggle.sc-ir-test-cmp:hover{background-color:#f3f4f6}.hamburger-icon.sc-ir-test-cmp{display:flex;flex-direction:column;width:1.25rem;height:1rem;justify-content:space-between}.hamburger-icon.sc-ir-test-cmp span.sc-ir-test-cmp{display:block;height:2px;width:100%;background-color:#374151;border-radius:1px;transition:all 0.3s ease}.mobile-menu.sc-ir-test-cmp{position:fixed;top:0;left:0;width:100%;height:100vh;background:#fff;transform:translateX(-100%);transition:transform 0.3s ease;z-index:1001;overflow-y:auto}.mobile-menu.active.sc-ir-test-cmp{transform:translateX(0)}.mobile-menu-header.sc-ir-test-cmp{display:flex;align-items:center;justify-content:space-between;padding:1rem;border-bottom:1px solid #e5e7eb}.mobile-menu-header.sc-ir-test-cmp .hotel-name.sc-ir-test-cmp{font-size:1.125rem;font-weight:600;color:#1f2937}.close-menu.sc-ir-test-cmp{display:flex;align-items:center;justify-content:center;width:2.5rem;height:2.5rem;border:none;background:none;font-size:1.5rem;color:#6b7280;cursor:pointer;border-radius:0.375rem;transition:background-color 0.2s ease}.close-menu.sc-ir-test-cmp:hover{background-color:#f3f4f6;color:#374151}.mobile-search.sc-ir-test-cmp{padding:1rem;border-bottom:1px solid #e5e7eb}.mobile-nav-items.sc-ir-test-cmp{list-style:none;margin:0;padding:1rem 0}.mobile-nav-item.sc-ir-test-cmp{margin:0}.mobile-nav-link.sc-ir-test-cmp{display:block;padding:0.75rem 1rem;color:#374151;text-decoration:none;font-weight:500;transition:all 0.2s ease;cursor:pointer}.mobile-nav-link.sc-ir-test-cmp:hover{background-color:#f9fafb;color:#1f2937;text-decoration:none}@media (max-width: 767.98px){.navbar-container.sc-ir-test-cmp{padding:0.5rem 1rem}.navbar-brand.sc-ir-test-cmp{font-size:1.25rem}}.nav-item.sc-ir-test-cmp{color:#1f2937 !important}.ir-mega-menu.sc-ir-test-cmp{list-style:none;margin:0;padding:1rem;grid-template-columns:repeat(4, 1fr) !important;gap:1.25rem;background:#ffffff;border:1px solid #e5e7eb;border-radius:0.5rem}.ir-mega-menu.show.sc-ir-test-cmp{display:grid !important;width:max-content !important}.ir-mega-menu.sc-ir-test-cmp>li.sc-ir-test-cmp{list-style:none}.ir-mega-menu-column.sc-ir-test-cmp{list-style:none;margin:0;padding:0;display:flex;flex-direction:column;gap:0.25rem}.ir-mega-menu-row.title.sc-ir-test-cmp{font-weight:700;color:#0f172a;margin-bottom:0.375rem;font-size:0.825rem;text-transform:uppercase;letter-spacing:0.02em;padding:0rem 0.75rem}.ir-mega-menu-row.sc-ir-test-cmp a.sc-ir-test-cmp{display:block;padding:0.5rem 0.75rem;color:#334155;text-decoration:none;line-height:1;transition:background-color 0.2s ease, color 0.2s ease}.ir-mega-menu-row.sc-ir-test-cmp a.sc-ir-test-cmp:hover{background-color:#f4f5fa;color:#1e2122;text-decoration:none}@media (min-width: 576px){.ir-mega-menu.sc-ir-test-cmp{grid-template-columns:repeat(2, 1fr)}}@media (min-width: 992px){.ir-mega-menu.sc-ir-test-cmp{grid-template-columns:repeat(3, 1fr);padding:1.25rem 1.5rem;gap:1.5rem}}@media (min-width: 768px){.mobile-menu-toggle.sc-ir-test-cmp{display:none !important}.mobile-menu.sc-ir-test-cmp{display:none}.navbar-left.sc-ir-test-cmp{width:auto}}.ir-mega-menu.sc-ir-test-cmp{opacity:0;visibility:hidden;transform:translateY(-10px);transition:opacity 0.3s ease, transform 0.3s ease, visibility 0.3s ease;pointer-events:none;position:absolute;top:100%;left:0;z-index:1000}.ir-mega-menu.show.sc-ir-test-cmp{opacity:1;visibility:visible;transform:translateY(0);pointer-events:auto;display:grid !important}.payment-item.sc-ir-test-cmp{position:relative;width:100%;display:flex;border-bottom:1px solid gainsboro;padding:0.5rem 0.5rem;align-items:center;min-height:3rem}.payment-item.sc-ir-test-cmp:last-child{border-bottom:0}.payment-item.sc-ir-test-cmp:hover{background:#f4f5fa}.payment-item.sc-ir-test-cmp p.sc-ir-test-cmp{padding:0;margin:0;box-sizing:border-box}.payment-item.sc-ir-test-cmp .payment-actions.sc-ir-test-cmp{display:none;background:#f4f5fa;gap:0.5rem;justify-content:flex-end;align-items:center}.payment-body.sc-ir-test-cmp{display:flex;flex-direction:column;gap:0.25rem;flex:1 1 0%}.payment-fields.sc-ir-test-cmp{display:flex;align-items:center;gap:0.5rem}.payment-item.sc-ir-test-cmp:hover .payment-actions.sc-ir-test-cmp{display:flex}.payment-amount.sc-ir-test-cmp{font-weight:700}.payment-amount.is-credit.sc-ir-test-cmp{color:#629a4c}.payment-amount.is-debit.sc-ir-test-cmp{color:#ff4961}.payment-reference.sc-ir-test-cmp{width:300px;font-size:12px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}@media (min-width: 640px){.payment-reference.sc-ir-test-cmp{width:350px}}@media (min-width: 768px){.payment-reference.sc-ir-test-cmp{width:400px}}@media (min-width: 1024px){.payment-reference.sc-ir-test-cmp{width:350px}}";
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
        return (h(Host, { key: 'f0a6b5375ad2cb0a2ac3faf2ce65e468b31454d1' }, h("nav", { key: 'ba5a638d98af0f15a729f322893dde63803a6a60', class: "modern-navbar" }, h("span", { key: 'e40b709341d6884da618e4aee33eb7e05cd65e8c', class: "overdue-banner" }, "Overdue $300"), h("div", { key: '87aa804588f526692b2788ac90561938b8302028', class: "navbar-container" }, h("div", { key: 'eb0e360d8763e11f3d4f959e0b1508193ea33a82', class: "navbar-left" }, h("button", { key: '95c6111eb3c12b7fea73820ba926db1a6829b076', class: "mobile-menu-toggle d-md-none", onClick: () => this.toggleMobileMenu() }, h("span", { key: '1a2faf2e778eb49631b0e2da2992ce0628380236', class: "hamburger-icon" }, h("span", { key: '06b02a48430e50288964a2a3b1516c21b7f0c8f9' }), h("span", { key: '57393d5c75e1ca152c8fe34bd2914f42e3ad6234' }), h("span", { key: '0c21571d33d47c77ae60dee0bc5944e4cdfead86' }))), h("div", { key: '0927fcecd9a36e51d601c7bc393728af6cacd765', class: "navbar-brand" }, "Logo"), h("div", { key: 'cf31e584ecc0b42e985913c09c13d2dd8cbaddc0', class: "d-none d-md-flex " }, h("ir-m-combobox", { key: 'b77e3d9bd571a59a435b4342c88092692abd6ecc', style: { '--ir-combobox-width': 'max-content' }, placeholder: "Find property", dataMode: "static", options: this.staticOptions, onOptionChange: this.handleStaticOptionChange })), h("div", { key: '9e968664bcc620a9eefd2bd3161a74236ea9ddef', class: "hotel-name d-none d-md-block" }, "Hotel Name"), h("div", { key: '1e95be6246515313601c5fd9fa39530c9dccb8e8', class: "ml-auto d-md-none" }, h("ir-notifications", { key: '1af10d5372b97fff529c99d9335c8f4e76894c4d', notifications: this.notifications }))), h("div", { key: '1560cfe40228f25e42fd61df21b6235e35626745', class: "navbar-center d-none d-md-flex flex-fill mx-auto" }, h("ir-m-combobox", { key: 'cea965d7e13bea77cdce6ec02543c6627950dec2', placeholder: "Search...", dataMode: "static", options: this.staticOptions, onOptionChange: this.handleStaticOptionChange })), h("div", { key: '2f88a1dcbc7be76b23e0a6e466bae767da9b10d6', class: "navbar-right" }, h("ul", { key: '68e934cd7ea7df1b54fbae82cc61f9e1ab6edc47', class: "nav-items d-none d-md-flex" }, h("li", { key: '9fdaccfc2e9ef73a4648c31496ccac49d7645022', class: "nav-item dropdown" }, h("a", { key: '3f3567fb97e2d41920cae2909ef1af67474a026f', "data-reference": "parent", href: "#", role: "button", class: "nav-link", "data-toggle": "dropdown", "aria-expanded": "false" }, "a"), h("ul", { key: '53fb23b2a2ab46ee34a094f4e974f3d8e40a914f', class: `ir-mega-menu mx-auto dropdown-menu-right dropdown-menu    w-100 shadow-sm` }, h("li", { key: '9c802b3ec1d96293844ee9824bb1943b9e6c5f34' }, h("ul", { key: '4c6c111fb02ae0c70c7a06a0943c548c460661f8', class: "ir-mega-menu-column" }, h("li", { key: '82bd4721391a16f9e48d757e31625e272ed8c532', class: "ir-mega-menu-row title" }, "Parameters"), h("li", { key: '3a76d18615979c52967e25aa45df120dc3c4c915', class: "ir-mega-menu-row" }, h("a", { key: '191dd6bf102c17dda15984529c8c1df75912af33', href: "userinline.aspx" }, "Users List")), h("li", { key: '4fe0ccb80ae0430aaddfcae7479f4fac4b574406', class: "ir-mega-menu-row" }, h("a", { key: '325beb095afb839ddba38f993be1fdfdae48ed36', href: "languageinline.aspx" }, "System Languages")), h("li", { key: '60b8d190e24c7d5a052e5e62ec87f317f7618d0c', class: "ir-mega-menu-row" }, h("a", { key: '8884d001b5e03dd926b80e0379503ec95f77b3e9', href: "countryinline.aspx" }, "Countries")), h("li", { key: 'a7a41c4ca63a66100b86a3cda9dd2b69272fe774', class: "ir-mega-menu-row" }, h("a", { key: '5c5f0200a0ba9e7745e847f852b4b3f6ed15a3c8', href: "level2inline.aspx" }, "Country Level 2")), h("li", { key: '338ec9d1d0abb96ecd7fd0463b6145a7048b74fc', class: "ir-mega-menu-row" }, h("a", { key: 'aa2796adee73618364dcf79f557b8719e16e824a', href: "cardinline.aspx" }, "Credit Cards")), h("li", { key: 'cbb1733fd69e04bb778a241b883ff3d693842312', class: "ir-mega-menu-row" }, h("a", { key: '6ab1d1a131731254b2a6608146c451b63d55fe7e', href: "hotel_chaininline.aspx" }, "Hotel Chains")), h("li", { key: '985ac4fead2dc8aed15529b45653bae0803ece11', class: "ir-mega-menu-row" }, h("a", { key: 'df637ae72f4aab8d8e88d9f14fdd73f450b450ce', href: "currencyinline.aspx" }, "Currencies")), h("li", { key: '73cb1f824fea7e256d81697286b29aade4eb5abb', class: "ir-mega-menu-row" }, h("a", { key: '5c5338b50d9ae0e7e7142d54b8a71676380d3e51', href: "amenityinline.aspx" }, "Amenities")), h("li", { key: '227fb2bcdbcc257c496a7accece7471602c50731', class: "ir-mega-menu-row" }, h("a", { key: 'da1a94cde8663ae46cbad52258a774430f3e9505', href: "foodinline.aspx" }, "Food")), h("li", { key: '6aabd32396e6b30f75fac38c0a5edd2cbdf1989e', class: "ir-mega-menu-row" }, h("a", { key: '4208257d81fd63efa4166c7d5e3ee72807c988bb', href: "beddinginline.aspx" }, "Bedding")), h("li", { key: '51836ae7ee261915a889a9edf4928c48c1912d21', class: "ir-mega-menu-row" }, h("a", { key: '08ffc6461cf2bb929b4ef0fd36aac493da1e38f8', href: "setupinline.aspx" }, "Setup Table")), h("li", { key: '28a38dee27f87db9bfb4aa41503c54019b2f6a3f', class: "ir-mega-menu-row" }, h("a", { key: '7a6577ed26f7e672d46db02807af8d5a878ccc1e', href: "gwedit.aspx" }, "Payment Gateways")), h("li", { key: 'e7000d5aea57860617a173495cbfe88e90cedbc2', class: "ir-mega-menu-row" }, h("a", { key: '4f22cabfd27505b57487479f05320741253046a4', href: "channelmanager.aspx" }, "Channel Manager")))), h("li", { key: '56d0ca7620a717a944ce5acfffc60f5cd1b69fe2' }, h("ul", { key: '016c79af443039911f852d40febff8fee672ba86', class: "ir-mega-menu-column" }, h("li", { key: 'e6346f7c1631390998b3d36df2ac64675fda8368', class: "ir-mega-menu-row title" }, "Main"), h("li", { key: '42469402b3d77a5d3cced3f2184fe161061f825f', class: "ir-mega-menu-row" }, h("a", { key: '35f06fe6a4ad824278978ab5a9d4114a04e1cd51', href: "mpolist.aspx" }, "MPOs")), h("li", { key: '943669d7d1b1dc08c1182dbebd430275fd3bffd3', class: "ir-mega-menu-row" }, h("a", { key: '6453c1ec5478aed0f186ae2e9aeecd00a3be0f5c', href: "aclist.aspx" }, "Properties")), h("li", { key: 'd0701ab8297d55c4d54176290d412c19d95bc109', class: "ir-mega-menu-row" }, h("a", { key: '35e5cb0e15fa46397d260ba68c1caab73c017f95', href: "acbookinglist.aspx?MODE=MPO" }, "Bookings")), h("li", { key: 'e21f34cb756d1b5ac632e3a37d43b35d7228e57b', class: "ir-mega-menu-row" }, h("a", { key: '9eda4c603e0b35419150b4e54f45fb7d8900bb63', href: "mpoaffiliateproperties.aspx" }, "MPO Affiliate Properties")), h("li", { key: 'b1f1efe5565decae16b3752b61c8278efad7c5ac', class: "ir-mega-menu-row" }, h("a", { key: '86d30e70668e32d11de9741e9a8d5ca481da7a03', href: "acratesallotment.aspx?VIEW_MODE=CV" }, "MPO Combined Inventory")), h("li", { key: 'c7ae5f56e28a768033a920732ab24fbe4dd9d80e', class: "ir-mega-menu-row" }, h("a", { key: '642599210b31299e97e7a78aaf2cfc2d1cfd615d', href: "acbookinglist.aspx?VIEW_MODE=CV" }, "MPO Combined Bookings")), h("li", { key: '2e472ce8969a51edb35bcc83810c87f8f6761b8a', class: "ir-mega-menu-row" }, h("a", { key: '3200359a2c45d0c4f029fcd5df34972e4ce9858c', href: "Acmemberlist.aspx?VIEW_MODE=CV" }, "MPO Combined Guests")), h("li", { key: '1db90da02f48b448735e2e492c283032d5517f95', class: "ir-mega-menu-row" }, h("a", { key: 'a044a5f54428e5c4892e9ee54329994af2a0313a', href: "mpobillingreport.aspx" }, "MPO Billing Report")), h("li", { key: '6b3737e77e865c8926759d839964f74442365dc7', class: "ir-mega-menu-row" }, h("a", { key: 'fb226f39adc570f63f2331e6cef132b5b0e25bda', href: "Acmemberlist.aspx" }, "Guests")), h("li", { key: 'ae687d9e9819f457f941864d07dcb097e107d84b', class: "ir-mega-menu-row" }, h("a", { key: '82a26fd82e3d793ab1afafc88f97215e938b0a56', href: "acbookinglist.aspx" }, "Bookings")), h("li", { key: 'd8715372c90a07281080af8f5a496709e0c46d17', class: "ir-mega-menu-row" }, h("a", { key: '666c8cb9d9b1c80bcaca073c64a82063a52eb8bc', href: "billing.aspx" }, "Billing")))), h("li", { key: '3a4537b37b877bd0885e7e7ea3d4b8bbec7e8770' }, h("ul", { key: '6914d2083e665b2d8fc09085aee64bd5789aff9b', class: "ir-mega-menu-column" }, h("li", { key: '30673da471f3076886625928a0e1d9fa4dabfe7f', class: "ir-mega-menu-row title" }, "Locations"), h("li", { key: 'a48b44ac1ee1e143a4f4e86438cd65d93971acbe', class: "ir-mega-menu-row" }, h("a", { key: 'c44a5ef1b3a88c44cd10c70bfc8bbf693b16c41e', href: "poicategoriesinline.aspx" }, "Types")), h("li", { key: '73463ef8c68e7d207bacdc73e4f5076b70d1827c', class: "ir-mega-menu-row" }, h("a", { key: '26446dc382146795d35f98e172c9245247c9bc53', href: "poilist.aspx" }, "List")))), h("li", { key: '7ea416d9281aa66a5d86d403d4146cbd383f0b5a' }, h("ul", { key: '9130572f66ad8539d20870a1a2ae0e4b4783dff0', class: "ir-mega-menu-column" }, h("li", { key: 'f494d63ef579316436e3f51034836cf9260f9e4f', class: "ir-mega-menu-row title" }, "Referrers"), h("li", { key: 'add5679765da00caafbf1da1b501d2b453b01a68', class: "ir-mega-menu-row" }, h("a", { key: 'ef6ebec7566794b7f354561b94ef12eba69c9843', href: "affiliatelist.aspx" }, "Affiliates")), h("li", { key: '821e793c708b965f097963a411fa47cfe23e17da', class: "ir-mega-menu-row" }, h("a", { key: 'b7dc5d5bbad8076286c45681d52a3871d59710ac', href: "travelagentslist.aspx" }, "Travel Agents ...NOT USED")))))), h("li", { key: '800daab825a98ea053f8947f724e632a1c3ecf20', class: "nav-item" }, h("a", { key: 'd7957d924472c5c07d0c3f9e2e320f916a4f1340', href: "#", class: "nav-link" }, "b")), h("li", { key: '771860f5df6dfb526e61f9170a200f822bc4dbde', class: "nav-item" }, h("a", { key: 'dafeb2a69507dc6ef3d7405d4d97ac546b49fd37', href: "#", class: "nav-link" }, "c")), h("li", { key: '5c2e38f3fa42747afe0d3fa7826e57f6e7c51779', class: "nav-item" }, h("a", { key: '2460659c1bcb46d972b15c05f863e91dc75c9eeb', href: "#", class: "nav-link" }, "d")), h("li", { key: 'c7a463caac76e7c3168f356cfe2ccc08d598bf63', class: "nav-item" }, h("div", { key: '7af6ede50c024e36de4b92a65c800b73875b908d', class: "d-flex align-items-center justify-content-center", style: { marginTop: '2px' } }, h("ir-notifications", { key: '8a66cd099bba798c47627b321fadf3051529cbc8', notifications: this.notifications }))))), h("div", { key: '00111381677c15f31e90f1b7600273ac1899619e', class: `mobile-menu ${this.isMobileMenuOpen ? 'active' : ''}` }, h("div", { key: '450fe155610a57b9ecea4baa6a16358c548fe7a1', class: "mobile-menu-header" }, h("div", { key: '7f07b6d91151fb2744cd2c6b9297ee24f1458ab5', class: "hotel-name" }, "Hotel Name"), h("button", { key: '08dfc058843e3dce64530724d4ae0830c0d0ad70', class: "close-menu", onClick: () => this.toggleMobileMenu() }, "\u00D7")), h("div", { key: '967e6322c148a41dbbcebbae05d9f6abcd3aaee1', class: "mobile-search" }, h("ir-m-combobox", { key: '8085dae195798b20fbda8f0b36e67f56ddc7e1e3', placeholder: "Search...", dataMode: "static", options: this.staticOptions, onOptionChange: this.handleStaticOptionChange })), h("ac-pages-menu", { key: '18bb7d379c72d11e6014a7f06245dca87124fe40', location: "sheet", "onLink-clicked": async (e) => {
                await sleep(1000);
                window.location.href = e.detail.target.href;
            }, pages: this.pages }))), h("div", { key: 'b0100778ebd2be9cbdcb8e199b94ce4a4c8d6f43', class: "submenus d-none d-md-block" }, h("ac-pages-menu", { key: 'bd3eb80b9b6b0c9b90a0a1c18d5aa09743f52abe', pages: this.pages }))), h("section", { key: 'ac0a34991b81abed3496dbed9b568c8a043a901e', class: "p-2" }, h("div", { key: '46ee2170790fb38d5a5b44c001c480e7cf4eb6b2', class: "row g-3" }, h("div", { key: '45a2d47bc3fb877bd0ac39ff5fde08a597ad9784', class: "col-md-3" }, h("h5", { key: 'fe611beea41c9eff3f0600e125b5459c9daeb2c1' }, "Static Options Example"), h("ir-m-combobox", { key: '20b14cb20e56dc3bc6375c61b8de25e217fd8e99', placeholder: "Select an option...", dataMode: "static", options: this.staticOptions, onOptionChange: this.handleStaticOptionChange }, h("svg", { key: 'f4fad2d82c5ba8d197cc88ae978d6f3bf329719b', xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 640 640", slot: "prefix" }, h("path", { key: 'eb6359d6bac4590e1b94bf9bb7c5b50b886555d1', d: "M480 272C480 317.9 465.1 360.3 440 394.7L566.6 521.4C579.1 533.9 579.1 554.2 566.6 566.7C554.1 579.2 533.8 579.2 521.3 566.7L394.7 440C360.3 465.1 317.9 480 272 480C157.1 480 64 386.9 64 272C64 157.1 157.1 64 272 64C386.9 64 480 157.1 480 272zM272 416C351.5 416 416 351.5 416 272C416 192.5 351.5 128 272 128C192.5 128 128 192.5 128 272C128 351.5 192.5 416 272 416z" }))), this.selectedStaticOption && h("p", { key: '3a3bffa7a6d8b08f58dcfd2915962208695aa494', class: "mt-2 text-muted" }, "Selected: ", this.selectedStaticOption.label)), h("div", { key: '89ec1e9cf975578930f2bda21e12d4399c03f6ef', class: "col-md-3" }, h("h5", { key: '6117f95d08117fffa52d15fb646056c9a99dd485' }, "External API - Countries"), h("ir-m-combobox", { key: 'e0d0e67b1315b55a07567ce55efd826aa2568071', placeholder: "Search countries...", dataMode: "external", options: this.countryOptions, loading: this.isLoadingCountries, debounceDelay: 300, onSearchQuery: this.handleCountrySearch, onOptionChange: this.handleCountryChange }), this.selectedCountry && h("p", { key: '7725acb7b6f89a18e2b589d2e37cc16885803282', class: "mt-2 text-muted" }, "Selected: ", this.selectedCountry.label)), h("div", { key: '6d03da5a8022fdb766ae42fd3559e9711a33a666', class: "col-md-3" }, h("h5", { key: '28b10ba9be0a19a208a83c49e001e009491f9bdc' }, "Custom Dropdown Content"), h("ir-m-combobox", { key: '8db26ef13f51171dbc20fd92ba87ca3064eeb0c8', class: "custom-width", ref: el => (this.customComboboxRef = el), placeholder: "Search with custom dropdown...", dataMode: "external", options: this.customOptions, loading: this.isLoadingCustom, useSlot: true, debounceDelay: 500, onSearchQuery: this.handleCustomSearch, onOptionChange: this.handleCustomOptionChange }, h("div", { key: '028ba1bbad67a0ee78025366993871f0a5940c4b', slot: "dropdown-content" }, this.isLoadingCustom && h("div", { key: 'e33d455e66e9d3373af35a31cda787af3e1f9a8c', class: "dropdown-item" }, "\uD83D\uDD04 Loading custom results..."), !this.isLoadingCustom && this.customOptions.length === 0 && h("div", { key: '31eaf212e279e9590e309ba47fb65ce9dd21449a', class: "dropdown-item" }, "\uD83D\uDD0D Type to search..."), !this.isLoadingCustom &&
            this.customOptions.map((option, index) => (h("div", { key: index, class: "dropdown-item d-flex align-items-center", "data-option": option.value, "data-label": option.label, onClick: () => this.handleCustomOptionClick(option), onMouseEnter: e => {
                    const element = e.target;
                    const slotIndex = element.getAttribute('data-slot-index');
                    if (slotIndex && this.customComboboxRef) {
                        this.customComboboxRef.focusedIndex = parseInt(slotIndex);
                    }
                }, style: { cursor: 'pointer' } }, h("span", { class: "me-2" }, "\u2B50"), h("div", null, h("div", { class: "fw-bold" }, option.label), h("small", { class: "text-muted" }, "Custom option with ID: ", option.value))))))), this.selectedCustomOption && h("p", { key: '683da020393f92c9e163ffb4a96ead8ec1ba9d0a', class: "mt-2 text-muted" }, "Selected: ", this.selectedCustomOption.label))), h("div", { key: 'f31e92fa06f9f651c79f2a6a8a5df202567b5336', class: 'd-flex align-items-center my-1', style: { gap: '1rem' } }, h("button", { key: '0379445fafe3f351bca2f975b9a2cea3afe7c213', class: "btn btn-primary", onClick: () => (this.notificationCount += 1) }, "+"), h("button", { key: 'e9a670ba4dcc5a8bba8200791c51c620c01cddc5', class: "btn btn-primary", onClick: () => (this.notificationCount -= 1) }, "-")), h("ir-input-text", { key: '87032e8213093f31063a828381410b4810bc5443', variant: "floating-label", class: "my-text-input", label: "First name" }, h("svg", { key: 'c2f90c817713d1d9b9a95ed8e99918671fac5139', xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 640 640", slot: "prefix" }, h("path", { key: 'dbdeebf76ffe9c80309a220cd6754a3e5d7da229', d: "M480 272C480 317.9 465.1 360.3 440 394.7L566.6 521.4C579.1 533.9 579.1 554.2 566.6 566.7C554.1 579.2 533.8 579.2 521.3 566.7L394.7 440C360.3 465.1 317.9 480 272 480C157.1 480 64 386.9 64 272C64 157.1 157.1 64 272 64C386.9 64 480 157.1 480 272zM272 416C351.5 416 416 351.5 416 272C416 192.5 351.5 128 272 128C192.5 128 128 192.5 128 272C128 351.5 192.5 416 272 416z" })), h("svg", { key: '8608691382487ca229a4cfc33d439f3095df0cdc', slot: "suffix", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 640 640" }, h("path", { key: '448789af04c900586171e6f51f75025688475d30', d: "M264 112L376 112C380.4 112 384 115.6 384 120L384 160L256 160L256 120C256 115.6 259.6 112 264 112zM208 120L208 544L432 544L432 120C432 89.1 406.9 64 376 64L264 64C233.1 64 208 89.1 208 120zM480 160L480 544L512 544C547.3 544 576 515.3 576 480L576 224C576 188.7 547.3 160 512 160L480 160zM160 544L160 160L128 160C92.7 160 64 188.7 64 224L64 480C64 515.3 92.7 544 128 544L160 544z" }))), h("ir-select", { key: '68f272153ee5a2e839473896c5f10f5b5230d820', "floating-label": true, label: "Hello", data: [{ value: '1', text: '1' }] }), h("div", { key: '2306aee3b006c789c4a234a5626d9e10e9ad1532', class: "my-2" }), h("ir-select", { key: '353e7acffdf39636c24d7b760fe1a72a24b94034', label: "Hello", data: [{ value: '1', text: '1' }] }), h("div", { key: 'a12f14d9acac9eef8addc4d3a238e6352a9b8ce3', class: "my-2" }), h("ir-select", { key: '2ba65d7bee348d1f2230b96ffc6dd096b3d21bbe', data: [{ value: '1', text: '1' }] }), h("div", { key: 'df70b57266fdbef70219bbe67fb2407a85f5fb27', class: "card p-1" }, [
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
};
IrTestCmp.style = IrTestCmpStyle0;

export { IrTestCmp as ir_test_cmp };

//# sourceMappingURL=ir-test-cmp.entry.js.map