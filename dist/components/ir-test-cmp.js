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
        return (h(Host, { key: '377ee15f0d08d972056fa1d9ba62db86a1a27dff' }, h("nav", { key: '2f838ea34b99098e6194e5a717c49aa96beff074', class: "modern-navbar" }, h("span", { key: 'f94e498e7d71dbe045ebd0d4d396efa88d973fd2', class: "overdue-banner" }, "Overdue $300"), h("div", { key: '9f2c90e4da02379411eda2ea884f537c30dadc58', class: "navbar-container" }, h("div", { key: 'f3e9e370b22e8b93badd09ebead387ee39898f62', class: "navbar-left" }, h("button", { key: 'b2dfd50b5f87c9d963168d8df740de5afe3c3f54', class: "mobile-menu-toggle d-md-none", onClick: () => this.toggleMobileMenu() }, h("span", { key: 'f012df034109bb77c79fa977eb761d8999369ff5', class: "hamburger-icon" }, h("span", { key: 'f90b0641d98f9473baa3c31e807f3d7706cfa7ed' }), h("span", { key: 'dbe67668f61cd081b79d7069c3e1076ffc858dba' }), h("span", { key: 'e3811d67b388bfff6a22f58a5bdf1b9e77cf7684' }))), h("div", { key: '77cc5e241c1eea5f8122c44bcc30d28fa2c4baea', class: "navbar-brand" }, "Logo"), h("div", { key: '4a68b1fc565cfda817c93703c2372a70d7e55b0b', class: "d-none d-md-flex " }, h("ir-m-combobox", { key: '1e0c58dc7c9914ca31a26fc841776a5ccd9d0318', style: { '--ir-combobox-width': 'max-content' }, placeholder: "Find property", dataMode: "static", options: this.staticOptions, onOptionChange: this.handleStaticOptionChange })), h("div", { key: 'c783fc8feeb71ce4e8a6d421b749a1bee4b3209d', class: "hotel-name d-none d-md-block" }, "Hotel Name"), h("div", { key: '30fae97bf03d4e2bd8ec77d460cd051fb984158c', class: "ml-auto d-md-none" }, h("ir-notifications", { key: 'c5515d07ed6fdd61db82ea93862fc893e0abbe0f', notifications: this.notifications }))), h("div", { key: 'e95cb5d94b0013d382648aacfc38bb4a6b051472', class: "navbar-center d-none d-md-flex flex-fill mx-auto" }, h("ir-m-combobox", { key: '5149a5f8117f962d4f6f16e778caa652188e98d8', placeholder: "Search...", dataMode: "static", options: this.staticOptions, onOptionChange: this.handleStaticOptionChange })), h("div", { key: '1f474f382609c3fe57958ad2ef45bfc6d5a0ceaf', class: "navbar-right" }, h("ul", { key: '24ee35504964addf831fab243f5a26c64c22990d', class: "nav-items d-none d-md-flex" }, h("li", { key: 'e9128ec1db6495b53a485f45a6107e2e93db3e1d', class: "nav-item dropdown" }, h("a", { key: 'ddf56f51a44567938b2de471edbfeb37f93ab51b', "data-reference": "parent", href: "#", role: "button", class: "nav-link", "data-toggle": "dropdown", "aria-expanded": "false" }, "a"), h("ul", { key: '14f7abdb366b3982e0ccdbfc2b622d803c789c61', class: `ir-mega-menu mx-auto dropdown-menu-right dropdown-menu    w-100 shadow-sm` }, h("li", { key: 'f519ab7bef20da254bb18165035a88aea16ff6ad' }, h("ul", { key: 'db79c234f0a9a520357856f5eac8f6ed5972fdd7', class: "ir-mega-menu-column" }, h("li", { key: '1087580b299a5fd9e0c852b7e91910e2d5e954eb', class: "ir-mega-menu-row title" }, "Parameters"), h("li", { key: 'fc244827977bd4f64b7d511de199821e8d3f231b', class: "ir-mega-menu-row" }, h("a", { key: 'ef110a34573ecf6eb5f25699d68f70d3bd11aa7e', href: "userinline.aspx" }, "Users List")), h("li", { key: 'df899eda9dc994c9257ec11ef3045be6a791e703', class: "ir-mega-menu-row" }, h("a", { key: 'bf2221cedde7640e83db58e10379be081d65c312', href: "languageinline.aspx" }, "System Languages")), h("li", { key: '02c113ff6649d4c866dec64691888368180634e6', class: "ir-mega-menu-row" }, h("a", { key: '44961f045aa360efc8ab2498c55744ed3f45a5ab', href: "countryinline.aspx" }, "Countries")), h("li", { key: 'f3cd9bd03617e19ce10e2980032ae1c9de7cad9d', class: "ir-mega-menu-row" }, h("a", { key: '819dc2966100f94e738e6e584445862418db2852', href: "level2inline.aspx" }, "Country Level 2")), h("li", { key: 'aeb707ed126a65a8cb7b00a57c38af2d3a23ce1d', class: "ir-mega-menu-row" }, h("a", { key: 'd0e290a0c292ce88997745ad5904b79680678e06', href: "cardinline.aspx" }, "Credit Cards")), h("li", { key: '8cf82772769a4992086ce16d4e39833e90d8c095', class: "ir-mega-menu-row" }, h("a", { key: 'dadb982a1b29bcda4627a2013de61723047334d1', href: "hotel_chaininline.aspx" }, "Hotel Chains")), h("li", { key: 'f59eb5386acd06aa1674ff6cfcbb649794f0ce89', class: "ir-mega-menu-row" }, h("a", { key: '8639d0c4969628f1cedab7c05a63c635d2cdb704', href: "currencyinline.aspx" }, "Currencies")), h("li", { key: '8feef374770162cf8cea4c162e716a04221b0ef3', class: "ir-mega-menu-row" }, h("a", { key: 'a2130c286c133642c722d6a4ae9eab789ef58277', href: "amenityinline.aspx" }, "Amenities")), h("li", { key: 'f0d3329e952a56f6e4d5c1d9e9adeefbad21e2ac', class: "ir-mega-menu-row" }, h("a", { key: 'b9842d795dd90529a81c3789221bdaba60a2569f', href: "foodinline.aspx" }, "Food")), h("li", { key: '2a53f007029bb42a06845a46d724d175693c0cfd', class: "ir-mega-menu-row" }, h("a", { key: '8fc65fcf4d200c8ed6a67359dddac9f587d3a252', href: "beddinginline.aspx" }, "Bedding")), h("li", { key: 'd28d363bcd8660bef33417fef8c4ec1b2073475d', class: "ir-mega-menu-row" }, h("a", { key: 'b4fb5fc7933f5ca857223238772993d6ea06b608', href: "setupinline.aspx" }, "Setup Table")), h("li", { key: 'a1dbce6e42120f9fc77779570f83f7a44d51d2a1', class: "ir-mega-menu-row" }, h("a", { key: '77018e9208fcb7548dcab187b62bb57952990042', href: "gwedit.aspx" }, "Payment Gateways")), h("li", { key: '1ba7e35a1da2825116f2d77a4a36a89b05f47f87', class: "ir-mega-menu-row" }, h("a", { key: '625d469ab9dc0c12c78ed51761f16d879ac9c24e', href: "channelmanager.aspx" }, "Channel Manager")))), h("li", { key: '6bdb707835c2aa189b50c8aad3daebc0daf1984f' }, h("ul", { key: 'db815e3aecba3f80e5633991792b59bc8500fa58', class: "ir-mega-menu-column" }, h("li", { key: 'af3480ed146afd9d886cbcd2826eaf24e1c5a142', class: "ir-mega-menu-row title" }, "Main"), h("li", { key: '256f97c3dcb632ac9251c05976b981ef9ec8f23a', class: "ir-mega-menu-row" }, h("a", { key: '7f26708a1492e63727f3bda4718d2bb6f07fe19e', href: "mpolist.aspx" }, "MPOs")), h("li", { key: '382891c373eee7f36ad1c4196cdf8d5bc887eb99', class: "ir-mega-menu-row" }, h("a", { key: '2ed9257a52f06b028ac7b5dc717aba2bcd42965b', href: "aclist.aspx" }, "Properties")), h("li", { key: '543b5f65cfe8b4e5410405da99dc51c4ba7bd7a7', class: "ir-mega-menu-row" }, h("a", { key: '8fc3b13feceeb1f8610d36f1e51a50ad3342c13d', href: "acbookinglist.aspx?MODE=MPO" }, "Bookings")), h("li", { key: '250d364b69f4e197602576c0dd5cdd97f7a8cd2e', class: "ir-mega-menu-row" }, h("a", { key: '3671ed857f8685f0d0de53810b467953ee68aea6', href: "mpoaffiliateproperties.aspx" }, "MPO Affiliate Properties")), h("li", { key: '2ea998b3c513628e48a39188b71b16e6eaacc66a', class: "ir-mega-menu-row" }, h("a", { key: '03fdcfb39240a60c0025426d9cfcc03b5647f9fd', href: "acratesallotment.aspx?VIEW_MODE=CV" }, "MPO Combined Inventory")), h("li", { key: '7d54f09c3f2c0919d69083b3305e37c9195dff48', class: "ir-mega-menu-row" }, h("a", { key: 'bb24dd9a3e0ece07d2c7c62ff766973026fc7977', href: "acbookinglist.aspx?VIEW_MODE=CV" }, "MPO Combined Bookings")), h("li", { key: '709ad1848f5b7952611a4ad625edd5551926ddfb', class: "ir-mega-menu-row" }, h("a", { key: 'cbd60a2c7c213314ed4771f3569959a4092e24d8', href: "Acmemberlist.aspx?VIEW_MODE=CV" }, "MPO Combined Guests")), h("li", { key: '85a64500b0a43484d4942a93dbfecc87734ef806', class: "ir-mega-menu-row" }, h("a", { key: 'bac9a6acbb8435da98b5f49546696db58ddc8370', href: "mpobillingreport.aspx" }, "MPO Billing Report")), h("li", { key: '9b239b5bb6a5018251b300d45953a6560be3c4c8', class: "ir-mega-menu-row" }, h("a", { key: 'bb9a590b977347773cf710a48cb7c503d6ff3eef', href: "Acmemberlist.aspx" }, "Guests")), h("li", { key: '804174c5f3a1caee7ca48fdf1780843be75fdf99', class: "ir-mega-menu-row" }, h("a", { key: 'cc14b1eaa8fe72fb8f6d5301236e2ece2893dc58', href: "acbookinglist.aspx" }, "Bookings")), h("li", { key: '7d4505555e501e86227375244225772ed93321b3', class: "ir-mega-menu-row" }, h("a", { key: 'ae95542ac05e3682c374e54a378982fb4c4bc03f', href: "billing.aspx" }, "Billing")))), h("li", { key: '16977334e8f4ed0713b6baf7579b986fb4cce00d' }, h("ul", { key: '4a76578c361be31b224f93c116835bfcc295d1c0', class: "ir-mega-menu-column" }, h("li", { key: '72f48a04fcf7519eb7b4c8dc482ad31f2920d99b', class: "ir-mega-menu-row title" }, "Locations"), h("li", { key: '951df421b62daf916e811b204e1a42a4cf21f8a1', class: "ir-mega-menu-row" }, h("a", { key: 'efe8b97f67ace306012249d13ddbf5b1fb39a28c', href: "poicategoriesinline.aspx" }, "Types")), h("li", { key: 'e9a01058462fc810213ea1f3253da3b3f7a8e9d3', class: "ir-mega-menu-row" }, h("a", { key: 'c5b45bfbb86eb6233530c7e560fbb36b132eff4e', href: "poilist.aspx" }, "List")))), h("li", { key: 'ffdaf8520ec85904c1f51ac25cf49f6a51b700a4' }, h("ul", { key: 'a12ac31f6631b09b6e4115a1d993067814dea3c8', class: "ir-mega-menu-column" }, h("li", { key: '6f18f2526f43b3ed84202635e063d6e316a6f253', class: "ir-mega-menu-row title" }, "Referrers"), h("li", { key: '8c64a61c292d9d289861eb104954c2bc921b746a', class: "ir-mega-menu-row" }, h("a", { key: '0d16533cbab017725b87d4cf962362b8558698b6', href: "affiliatelist.aspx" }, "Affiliates")), h("li", { key: '2c9f3b4240b9331643616bcbf28e6567eef20c34', class: "ir-mega-menu-row" }, h("a", { key: '98a2afc2781a219a94b0ce70c8f6034257a4a1cb', href: "travelagentslist.aspx" }, "Travel Agents ...NOT USED")))))), h("li", { key: '385eae285e59a4c6d9b21fc7f7a9e81fa371e13b', class: "nav-item" }, h("a", { key: '67f14f3e157aa6f606b265134da0bac0749ba9ea', href: "#", class: "nav-link" }, "b")), h("li", { key: 'b38d7f80689244ae023d0fe2db5e7a9bafca6985', class: "nav-item" }, h("a", { key: 'cae3279844e62fbeb5dd125e6eecc00d060fb581', href: "#", class: "nav-link" }, "c")), h("li", { key: 'b626600d404e8fc99af049ab0c53070996fab0bc', class: "nav-item" }, h("a", { key: 'c247df0d07f741f95edd8d3ae02766c1067c4bdd', href: "#", class: "nav-link" }, "d")), h("li", { key: 'a3a279a566a63d1cc28788b03c3cbaeda57fdb80', class: "nav-item" }, h("div", { key: '05c4936bb01c0221d2e79a1aae255d15ce70ce34', class: "d-flex align-items-center justify-content-center", style: { marginTop: '2px' } }, h("ir-notifications", { key: 'ef2775f76fb95ef319ff0fabbf4e71c361d48994', notifications: this.notifications }))))), h("div", { key: 'efd9f248db01210bafaa74d06a33feadd535bae1', class: `mobile-menu ${this.isMobileMenuOpen ? 'active' : ''}` }, h("div", { key: '0bc63057a7a5209d0f1d314c37e7524a15c18dc4', class: "mobile-menu-header" }, h("div", { key: '8f89a66b2b585cc2e00197345f68b2804f63358e', class: "hotel-name" }, "Hotel Name"), h("button", { key: 'fb1ece68a31aa1191e211c5b5a552c3087d3a4fc', class: "close-menu", onClick: () => this.toggleMobileMenu() }, "\u00D7")), h("div", { key: '39b45232e265c9e361553281e8017225a309dcbc', class: "mobile-search" }, h("ir-m-combobox", { key: '96cb962d5b02a0c388f27955c12e9ec900825e19', placeholder: "Search...", dataMode: "static", options: this.staticOptions, onOptionChange: this.handleStaticOptionChange })), h("ac-pages-menu", { key: 'e980d2b65304eb6216f0c85a7939c0a5e5784fad', location: "sheet", "onLink-clicked": async (e) => {
                await sleep(1000);
                window.location.href = e.detail.target.href;
            }, pages: this.pages }))), h("div", { key: '671c22756745279b4b9d11f7ef263f8860ec8eb2', class: "submenus d-none d-md-block" }, h("ac-pages-menu", { key: '262305f2865c21952f8abc11c1edf34a61454abe', pages: this.pages }))), h("section", { key: '28373d5c9472af2bf18a984a7713dbf90f1ea0fd', class: "p-2" }, h("div", { key: '448f7848d485227eed39a9494e47524f906f06e4', class: "row g-3" }, h("div", { key: '72873fe5f78399d2098b06521b732bb2a91b0258', class: "col-md-3" }, h("h5", { key: '5adf06be34cbb475a498736d2c75fb650a738362' }, "Static Options Example"), h("ir-m-combobox", { key: '4ee0de89054fbe0543ab2a2331b68db9e6c55a6f', placeholder: "Select an option...", dataMode: "static", options: this.staticOptions, onOptionChange: this.handleStaticOptionChange }, h("svg", { key: '2494a385c846f5796e7207d6c1f80967854fc378', xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 640 640", slot: "prefix" }, h("path", { key: '120cb4ec6d1d378b8c1de7df8cbcd5bf5dbac56b', d: "M480 272C480 317.9 465.1 360.3 440 394.7L566.6 521.4C579.1 533.9 579.1 554.2 566.6 566.7C554.1 579.2 533.8 579.2 521.3 566.7L394.7 440C360.3 465.1 317.9 480 272 480C157.1 480 64 386.9 64 272C64 157.1 157.1 64 272 64C386.9 64 480 157.1 480 272zM272 416C351.5 416 416 351.5 416 272C416 192.5 351.5 128 272 128C192.5 128 128 192.5 128 272C128 351.5 192.5 416 272 416z" }))), this.selectedStaticOption && h("p", { key: '576899605991abdb54479da344f5c720ffd5fb01', class: "mt-2 text-muted" }, "Selected: ", this.selectedStaticOption.label)), h("div", { key: '898cad10fe07b6d7dec354a4061c8f625b4a584e', class: "col-md-3" }, h("h5", { key: '61d379c7b9a8f69ec1c1570730987dc96fd7fc6b' }, "External API - Countries"), h("ir-m-combobox", { key: 'e2e54c885cb26c9e28d3e1e7c35ebfae16ed0012', placeholder: "Search countries...", dataMode: "external", options: this.countryOptions, loading: this.isLoadingCountries, debounceDelay: 300, onSearchQuery: this.handleCountrySearch, onOptionChange: this.handleCountryChange }), this.selectedCountry && h("p", { key: 'a5b35deb990d3c174350f13e6951862df8a55ac6', class: "mt-2 text-muted" }, "Selected: ", this.selectedCountry.label)), h("div", { key: 'f743504d908158c0d6689f0260b215c0adcc560c', class: "col-md-3" }, h("h5", { key: '3e38fab18f48cec742926e176314081add67dfe2' }, "Custom Dropdown Content"), h("ir-m-combobox", { key: '4b2b551cf251b4b6ecf98b3cabf25cf9c7661536', class: "custom-width", ref: el => (this.customComboboxRef = el), placeholder: "Search with custom dropdown...", dataMode: "external", options: this.customOptions, loading: this.isLoadingCustom, useSlot: true, debounceDelay: 500, onSearchQuery: this.handleCustomSearch, onOptionChange: this.handleCustomOptionChange }, h("div", { key: '52cea5581203585be4973c2c6b42c489c1d7d6fe', slot: "dropdown-content" }, this.isLoadingCustom && h("div", { key: '79adb141c8d252a53b300c960675e70851553698', class: "dropdown-item" }, "\uD83D\uDD04 Loading custom results..."), !this.isLoadingCustom && this.customOptions.length === 0 && h("div", { key: '3311c01b64c5b855881a5ded15c3b5cb57e8b297', class: "dropdown-item" }, "\uD83D\uDD0D Type to search..."), !this.isLoadingCustom &&
            this.customOptions.map((option, index) => (h("div", { key: index, class: "dropdown-item d-flex align-items-center", "data-option": option.value, "data-label": option.label, onClick: () => this.handleCustomOptionClick(option), onMouseEnter: e => {
                    const element = e.target;
                    const slotIndex = element.getAttribute('data-slot-index');
                    if (slotIndex && this.customComboboxRef) {
                        this.customComboboxRef.focusedIndex = parseInt(slotIndex);
                    }
                }, style: { cursor: 'pointer' } }, h("span", { class: "me-2" }, "\u2B50"), h("div", null, h("div", { class: "fw-bold" }, option.label), h("small", { class: "text-muted" }, "Custom option with ID: ", option.value))))))), this.selectedCustomOption && h("p", { key: 'd746ff8d90f5582eddf3f67f1e33498fabdf4e6f', class: "mt-2 text-muted" }, "Selected: ", this.selectedCustomOption.label))), h("div", { key: '082f885a76e6fa5dbf35f997db687ecfa6adb714', class: 'd-flex align-items-center my-1', style: { gap: '1rem' } }, h("button", { key: '30f016ce565fcc143c6a6d57ff314f5a793fc85d', class: "btn btn-primary", onClick: () => (this.notificationCount += 1) }, "+"), h("button", { key: 'a027862937df988b70c825da5f28f02a82b916f2', class: "btn btn-primary", onClick: () => (this.notificationCount -= 1) }, "-")), h("ir-input-text", { key: '1c0b05f12b2c5785d4f7d7b0a1706aa1ead953c0', variant: "floating-label", class: "my-text-input", label: "First name" }, h("svg", { key: '36e1bd44c57ff349fdcc4b7725aabe7ed4b753ec', xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 640 640", slot: "prefix" }, h("path", { key: '41b011457367d64be6e92b35ccadc3b98cdfd22e', d: "M480 272C480 317.9 465.1 360.3 440 394.7L566.6 521.4C579.1 533.9 579.1 554.2 566.6 566.7C554.1 579.2 533.8 579.2 521.3 566.7L394.7 440C360.3 465.1 317.9 480 272 480C157.1 480 64 386.9 64 272C64 157.1 157.1 64 272 64C386.9 64 480 157.1 480 272zM272 416C351.5 416 416 351.5 416 272C416 192.5 351.5 128 272 128C192.5 128 128 192.5 128 272C128 351.5 192.5 416 272 416z" })), h("svg", { key: '9afcc28d4d63e37bce5b7d2f39aa4411d5ee9eab', slot: "suffix", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 640 640" }, h("path", { key: '0060d4bdd89d62a2c476f0fb29c44c8d13c62f9d', d: "M264 112L376 112C380.4 112 384 115.6 384 120L384 160L256 160L256 120C256 115.6 259.6 112 264 112zM208 120L208 544L432 544L432 120C432 89.1 406.9 64 376 64L264 64C233.1 64 208 89.1 208 120zM480 160L480 544L512 544C547.3 544 576 515.3 576 480L576 224C576 188.7 547.3 160 512 160L480 160zM160 544L160 160L128 160C92.7 160 64 188.7 64 224L64 480C64 515.3 92.7 544 128 544L160 544z" }))), h("ir-select", { key: '98b74a8d88e0ed18c0311df9b5fd3b640a8361c5', "floating-label": true, label: "Hello", data: [{ value: '1', text: '1' }] }), h("div", { key: 'e01cf27fb572d17ffc0f2c60cbb0d8e5f1a8a4ce', class: "my-2" }), h("ir-select", { key: 'b5ff7c675d46883399811e2a51405f10cc060219', label: "Hello", data: [{ value: '1', text: '1' }] }), h("div", { key: 'dc1f7ef1373f34d9faafdf6edaa4745b3eb5b201', class: "my-2" }), h("ir-select", { key: '2eadfd0f4bb557286a5b27ddf966a317de93d43e', data: [{ value: '1', text: '1' }] }), h("div", { key: '98c1335881b27f46d858cd15cb1692d87401f845', class: "card p-1" }, [
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