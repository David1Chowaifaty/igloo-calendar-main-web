import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';
import { N as sleep } from './utils.js';
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
        return (h(Host, { key: '5754da214372f755cd7915388495fb2bf853cd62' }, h("nav", { key: '8f0f462996f12dc541a40d38904319c3a50a5a89', class: "modern-navbar" }, h("span", { key: '529c266094a137f32afadc4da8946e26d4a52077', class: "overdue-banner" }, "Overdue $300"), h("div", { key: 'de24156d62adfb21733b9a3ec655a39fe11d908d', class: "navbar-container" }, h("div", { key: 'b07d01aa69bbb0b5af99b22521c045b27cfa743c', class: "navbar-left" }, h("button", { key: '66a433ca945288df0121f7c7224ba952cbd1c9e8', class: "mobile-menu-toggle d-md-none", onClick: () => this.toggleMobileMenu() }, h("span", { key: 'a6c03bb90481556eb129025be5922f438dc28ba0', class: "hamburger-icon" }, h("span", { key: 'cb85e269db7fb18021329e9b34de710cd26e625a' }), h("span", { key: '522a322dc925d04e79120e98c179a63206c449f1' }), h("span", { key: '7846c7a11e11284e5e2727f4e565ec92ad74613b' }))), h("div", { key: '8202d747ce34342ca3a8818e6ed335f9e389bb5b', class: "navbar-brand" }, "Logo"), h("div", { key: '1c96f23680e6f01c151e46a8b551f90043e74c7f', class: "d-none d-md-flex " }, h("ir-m-combobox", { key: 'b12589317a75d8e76e61f358870ac92deb56ce3c', style: { '--ir-combobox-width': 'max-content' }, placeholder: "Find property", dataMode: "static", options: this.staticOptions, onOptionChange: this.handleStaticOptionChange })), h("div", { key: '062a9a6fddbc3092996e5ebcc79e4d6a223bc2c8', class: "hotel-name d-none d-md-block" }, "Hotel Name"), h("div", { key: 'bd6676ea01452252aeff396e4d219350a925079d', class: "ml-auto d-md-none" }, h("ir-notifications", { key: '5d47c36246909b49bb0ffea0897e86f0ed402b48', notifications: this.notifications }))), h("div", { key: '4b4a127f10e8859a346a470fe4e5d75d6c91e75c', class: "navbar-center d-none d-md-flex flex-fill mx-auto" }, h("ir-m-combobox", { key: '8bb20686c1bce44c498f64cbe7d019ff365583b5', placeholder: "Search...", dataMode: "static", options: this.staticOptions, onOptionChange: this.handleStaticOptionChange })), h("div", { key: 'b895c50d43d8ab682f29099635ae8e488ea6d125', class: "navbar-right" }, h("ul", { key: 'e34fd20e9d14e21b4553251c401e6c1c73df7767', class: "nav-items d-none d-md-flex" }, h("li", { key: 'faf836a054ba33334765785df24077bf1e2811e2', class: "nav-item dropdown" }, h("a", { key: 'a7c5a80af7d1090aaa2d79c253751a65df40488f', "data-reference": "parent", href: "#", role: "button", class: "nav-link", "data-toggle": "dropdown", "aria-expanded": "false" }, "a"), h("ul", { key: '6ed53b253589b408dbd0bfcee6763aace1acc5dd', class: `ir-mega-menu mx-auto dropdown-menu-right dropdown-menu    w-100 shadow-sm` }, h("li", { key: '7f445662a420f481e20a998305a57fc1536e4b2e' }, h("ul", { key: '3880b751a512faf3e8e0a184accf88464e13bbc9', class: "ir-mega-menu-column" }, h("li", { key: '62f9b6b1d659ff014c3738dfff2f4a92720b87ce', class: "ir-mega-menu-row title" }, "Parameters"), h("li", { key: '6b8ba586bf594154133be02eda9eb544b0f3af7d', class: "ir-mega-menu-row" }, h("a", { key: 'e67bac0cd78ec338485fd6335b5979515465363c', href: "userinline.aspx" }, "Users List")), h("li", { key: '182d5f2881f16380dd1aefd8f426cb4acd4a1afc', class: "ir-mega-menu-row" }, h("a", { key: 'd2eb82091b9baa223a57ed37f22db4bcfd148770', href: "languageinline.aspx" }, "System Languages")), h("li", { key: '2eb8a8ba495d7a3126e7c270b7ebc2255295edc7', class: "ir-mega-menu-row" }, h("a", { key: 'fc6bab8391aa0beac787c3d0834b733d5860988e', href: "countryinline.aspx" }, "Countries")), h("li", { key: '8b16fb61454bd68baf14bdb3516487dbf71351eb', class: "ir-mega-menu-row" }, h("a", { key: '4e2719dcd7093d7491e05779b5b9e61efdf660c5', href: "level2inline.aspx" }, "Country Level 2")), h("li", { key: '1ffecf1ee3b6334e52c357bf9ef97de2bcf898d4', class: "ir-mega-menu-row" }, h("a", { key: 'c6aac783e054debe8c73dad66b5cfacb26a5b2ba', href: "cardinline.aspx" }, "Credit Cards")), h("li", { key: 'e89fc68999168898a891b2ddbf0c28d322bf1e40', class: "ir-mega-menu-row" }, h("a", { key: '2f6f948ef4cbefa92e1831dd8bb75e538543f121', href: "hotel_chaininline.aspx" }, "Hotel Chains")), h("li", { key: '71408f1c634434028f2a5d8f499d8d1e2d3b5f06', class: "ir-mega-menu-row" }, h("a", { key: 'cf538c3c63c7cf6db9709c65e76c5fdc391813f9', href: "currencyinline.aspx" }, "Currencies")), h("li", { key: '8add08b60147591c31d20fec4988bec6e6c815f7', class: "ir-mega-menu-row" }, h("a", { key: '30ecef236339f087864f347ef138b91d76375781', href: "amenityinline.aspx" }, "Amenities")), h("li", { key: '9a354b6879dcb3da13a7c214881394ab8b0252ba', class: "ir-mega-menu-row" }, h("a", { key: 'b18cc8a3480078fb0187a28a8e7ec70fbd2f5032', href: "foodinline.aspx" }, "Food")), h("li", { key: '74eaf516427a26c527733378427c7a536d592691', class: "ir-mega-menu-row" }, h("a", { key: '6230c35c0f836a26333a60f5a3380dfbee86059c', href: "beddinginline.aspx" }, "Bedding")), h("li", { key: '9996ecc1ca309b2e4d866123a90fa0145fdcbdd4', class: "ir-mega-menu-row" }, h("a", { key: '314a1e8b3c9504b360317e79b813e4f824f22f7f', href: "setupinline.aspx" }, "Setup Table")), h("li", { key: '7803eae2e6be4c9affd6ee9c7c76b69647a4b681', class: "ir-mega-menu-row" }, h("a", { key: '338bc4fe287a0d4a8f92a2ab16f12c0b50bd38c3', href: "gwedit.aspx" }, "Payment Gateways")), h("li", { key: '0fdb0553b5fe57ac5e86bb00f12895f99ca1a20f', class: "ir-mega-menu-row" }, h("a", { key: '3c6c6c5420f265317f38fa6ca3744898ae92c5e0', href: "channelmanager.aspx" }, "Channel Manager")))), h("li", { key: '3777531e9c7d663b82873fe78586938330723cad' }, h("ul", { key: '912e64b8343d172f275b94c41f89620abf5685c9', class: "ir-mega-menu-column" }, h("li", { key: 'c316b8d04eb57935db6307da3fb8138a040b014f', class: "ir-mega-menu-row title" }, "Main"), h("li", { key: '3a6d436bdf6e1bd4e899f273c3d5ba864362785d', class: "ir-mega-menu-row" }, h("a", { key: 'f1351af53a3eb24f47bd248af57758cef68b4fce', href: "mpolist.aspx" }, "MPOs")), h("li", { key: '8729d353292f95a6ad1580c4712fd8338b60a4fb', class: "ir-mega-menu-row" }, h("a", { key: '169ea9b1437a5e89f1b1d985cec220578c43df8c', href: "aclist.aspx" }, "Properties")), h("li", { key: '09dda873971d9e628768c8fb64dac554c88fc4ba', class: "ir-mega-menu-row" }, h("a", { key: '660b9bf1bb9f4fe247bd9fd08971e55f6935e913', href: "acbookinglist.aspx?MODE=MPO" }, "Bookings")), h("li", { key: '002d9a5111276085a49854444257877f09484e84', class: "ir-mega-menu-row" }, h("a", { key: 'b95c29a771d415ea7cf35f7f5f92916cc6434bdb', href: "mpoaffiliateproperties.aspx" }, "MPO Affiliate Properties")), h("li", { key: 'be14c56119b8bcbf295f862c9e1dd3d874ca4e9d', class: "ir-mega-menu-row" }, h("a", { key: 'e2845422026626da0b1ba50fbfd3d57325b2e9c0', href: "acratesallotment.aspx?VIEW_MODE=CV" }, "MPO Combined Inventory")), h("li", { key: '727252fa97700677c7c395abb3a3351b1d834054', class: "ir-mega-menu-row" }, h("a", { key: '07bfe9151e3a14cc05e69e881ead57a95086d60b', href: "acbookinglist.aspx?VIEW_MODE=CV" }, "MPO Combined Bookings")), h("li", { key: '3f1368a6a4b641e59de540b933d91e50270d6681', class: "ir-mega-menu-row" }, h("a", { key: 'c4a0d6ba469a55800d9ad7701d8ebcbcb97da51d', href: "Acmemberlist.aspx?VIEW_MODE=CV" }, "MPO Combined Guests")), h("li", { key: '3e4fa378d9dc37fea80d6db500a6ab703436b749', class: "ir-mega-menu-row" }, h("a", { key: '77a40c4d73423b67529f258ac3e668e32981a385', href: "mpobillingreport.aspx" }, "MPO Billing Report")), h("li", { key: '7464f146a3c322152a21d7185a9f4bdc9e9bc039', class: "ir-mega-menu-row" }, h("a", { key: '1286be244044acaac33252b45a981517a3b339be', href: "Acmemberlist.aspx" }, "Guests")), h("li", { key: 'e0dc15c6631550f76a3391280c49f147a3585222', class: "ir-mega-menu-row" }, h("a", { key: 'e2b8fc98411d407671b5a66f9f034c1f6f78b72f', href: "acbookinglist.aspx" }, "Bookings")), h("li", { key: '67e7414a761cbe842555a23ad45744487a949d59', class: "ir-mega-menu-row" }, h("a", { key: 'b95b67a2fc8bb9d0347923d6278437a5a1c6800e', href: "billing.aspx" }, "Billing")))), h("li", { key: '72b2dfe1efaaadbb7708b8306a4e962c8fea17f1' }, h("ul", { key: '93d5b9dee2ecc32e89d4a3ae5b0137810094b442', class: "ir-mega-menu-column" }, h("li", { key: '506a12d3d0ae78988b5e34d5c05aea4c66ad7dfc', class: "ir-mega-menu-row title" }, "Locations"), h("li", { key: '8fa56810cd0acbdf1f1c3944256afc7eb92e9b60', class: "ir-mega-menu-row" }, h("a", { key: '7f947bca9f7498f1dead9ee28f779b3fe247dc2f', href: "poicategoriesinline.aspx" }, "Types")), h("li", { key: '17072b3f9ebe81c618e8bbbda6cdfdf1a44f8428', class: "ir-mega-menu-row" }, h("a", { key: '2c37fa9490102be54f9b69ea5014705c86e1310a', href: "poilist.aspx" }, "List")))), h("li", { key: '1975f3d9c8242d2a4ef6722d1427e85b35b3f4e0' }, h("ul", { key: '93e84e4666ac32bd088eea181006135f76a6d8b9', class: "ir-mega-menu-column" }, h("li", { key: '35cae057fca646aa0889127c1c6087898afb1777', class: "ir-mega-menu-row title" }, "Referrers"), h("li", { key: 'f9674a0e265e29589250c06300bbefb5d1608b1a', class: "ir-mega-menu-row" }, h("a", { key: 'd9323acf6a2cab47565f3125141199a7ee9c6e77', href: "affiliatelist.aspx" }, "Affiliates")), h("li", { key: '8e25c6f8097fac2365a42167b63b9cf0e254e20f', class: "ir-mega-menu-row" }, h("a", { key: '16c47db3824c3065c88814ea00751a8ee612b018', href: "travelagentslist.aspx" }, "Travel Agents ...NOT USED")))))), h("li", { key: '58ef8a1279a6ddd6a053651a22e4dc2e553cbb17', class: "nav-item" }, h("a", { key: '180e20c35a3208d167158c279f6ed4467b59d7cc', href: "#", class: "nav-link" }, "b")), h("li", { key: '9eb4c00bb6cc55c91210b8912134fe10e42159ed', class: "nav-item" }, h("a", { key: '09e4204ce83de4bc7907c27cdc9686255938e850', href: "#", class: "nav-link" }, "c")), h("li", { key: 'e07dad5db1fa2d0cd228ff10f4d989b204cd152f', class: "nav-item" }, h("a", { key: '565839a8c5724b63492394ca135f68d47699954d', href: "#", class: "nav-link" }, "d")), h("li", { key: 'e0f9db61d8d98c837929fedb7115f91570448737', class: "nav-item" }, h("div", { key: 'ba44be4bf803b20bddfb46649db196f22076afbb', class: "d-flex align-items-center justify-content-center", style: { marginTop: '2px' } }, h("ir-notifications", { key: '7057eca60fdf4ef56cd5d975dd4b3f6b2669636e', notifications: this.notifications }))))), h("div", { key: '580c9cfcc8770d5ac35119a68cf5ed01b06609b0', class: `mobile-menu ${this.isMobileMenuOpen ? 'active' : ''}` }, h("div", { key: '908d839297524c675d514b91a8ed3e65acc556b8', class: "mobile-menu-header" }, h("div", { key: 'dd14cfb65d811059f2955248bfada0d57d5a5f64', class: "hotel-name" }, "Hotel Name"), h("button", { key: 'ff5cec93e765a03093a77c47362e43b8a9c14a02', class: "close-menu", onClick: () => this.toggleMobileMenu() }, "\u00D7")), h("div", { key: '3ee3e2d35595872fd841442fcd8d6644b3c0dfe3', class: "mobile-search" }, h("ir-m-combobox", { key: 'd356aa39a762f345e0e3f19a5a4325f2cc717b2d', placeholder: "Search...", dataMode: "static", options: this.staticOptions, onOptionChange: this.handleStaticOptionChange })), h("ac-pages-menu", { key: 'ac9d6c111b1d901e82be981f31d9d94df07a3100', location: "sheet", "onLink-clicked": async (e) => {
                await sleep(1000);
                window.location.href = e.detail.target.href;
            }, pages: this.pages }))), h("div", { key: '5f1856c1863f00d749bf4dc481679c32801b1328', class: "submenus d-none d-md-block" }, h("ac-pages-menu", { key: '12bb4d54ab7469ee882e6a6376d66f1944492e63', pages: this.pages }))), h("section", { key: 'c3f205df9efc66ebf9bdaf5deba7f6aba9a3f07d', class: "p-2" }, h("div", { key: '46003ce987c46aed7d9722d8f507eb2d06160d9d', class: "row g-3" }, h("div", { key: '30679a52667f674b6ce57cdb59e58e7a73db217e', class: "col-md-3" }, h("h5", { key: 'eb4c46e21d50166dd5cbc8bcfe25a9e3fcd80ee3' }, "Static Options Example"), h("ir-m-combobox", { key: '3a9c83fcda55ce02b6aa75f7bd4ee23a3eb972b5', placeholder: "Select an option...", dataMode: "static", options: this.staticOptions, onOptionChange: this.handleStaticOptionChange }, h("svg", { key: '26ded107477b396487a0cc953d8ffd01d691a9db', xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 640 640", slot: "prefix" }, h("path", { key: '94c307ce35f5ebbb9b5720deb506574dde7f2537', d: "M480 272C480 317.9 465.1 360.3 440 394.7L566.6 521.4C579.1 533.9 579.1 554.2 566.6 566.7C554.1 579.2 533.8 579.2 521.3 566.7L394.7 440C360.3 465.1 317.9 480 272 480C157.1 480 64 386.9 64 272C64 157.1 157.1 64 272 64C386.9 64 480 157.1 480 272zM272 416C351.5 416 416 351.5 416 272C416 192.5 351.5 128 272 128C192.5 128 128 192.5 128 272C128 351.5 192.5 416 272 416z" }))), this.selectedStaticOption && h("p", { key: '39f6d11f651e04fbc84563767669f55b3c15ec8f', class: "mt-2 text-muted" }, "Selected: ", this.selectedStaticOption.label)), h("div", { key: 'd6775ec56aef8351ccfa85656391bf50853886e2', class: "col-md-3" }, h("h5", { key: 'fe3ab59b35da535260a93145b4d81124aaef1071' }, "External API - Countries"), h("ir-m-combobox", { key: 'f13b7e9f1d70a3d2321b3d6d8aaa6f033c29eeac', placeholder: "Search countries...", dataMode: "external", options: this.countryOptions, loading: this.isLoadingCountries, debounceDelay: 300, onSearchQuery: this.handleCountrySearch, onOptionChange: this.handleCountryChange }), this.selectedCountry && h("p", { key: '195bf0510864b8b9d9a1c2beef20ce3c09078ad4', class: "mt-2 text-muted" }, "Selected: ", this.selectedCountry.label)), h("div", { key: '659e424c53fd3269b86a3449d933df0cc9bc1b60', class: "col-md-3" }, h("h5", { key: '98e955101f9d99308d49ba2e28a939c086ddbdf3' }, "Custom Dropdown Content"), h("ir-m-combobox", { key: '919d919496110a785fba8705192c1af33d48155f', class: "custom-width", ref: el => (this.customComboboxRef = el), placeholder: "Search with custom dropdown...", dataMode: "external", options: this.customOptions, loading: this.isLoadingCustom, useSlot: true, debounceDelay: 500, onSearchQuery: this.handleCustomSearch, onOptionChange: this.handleCustomOptionChange }, h("div", { key: '7515761ad4596136e075ede11f8a6f48116c963b', slot: "dropdown-content" }, this.isLoadingCustom && h("div", { key: 'b87b0fc11973076300a6aaea234d68682c4de95f', class: "dropdown-item" }, "\uD83D\uDD04 Loading custom results..."), !this.isLoadingCustom && this.customOptions.length === 0 && h("div", { key: 'b97fbcc445375dff30ba151d5102bd1a16c45ad0', class: "dropdown-item" }, "\uD83D\uDD0D Type to search..."), !this.isLoadingCustom &&
            this.customOptions.map((option, index) => (h("div", { key: index, class: "dropdown-item d-flex align-items-center", "data-option": option.value, "data-label": option.label, onClick: () => this.handleCustomOptionClick(option), onMouseEnter: e => {
                    const element = e.target;
                    const slotIndex = element.getAttribute('data-slot-index');
                    if (slotIndex && this.customComboboxRef) {
                        this.customComboboxRef.focusedIndex = parseInt(slotIndex);
                    }
                }, style: { cursor: 'pointer' } }, h("span", { class: "me-2" }, "\u2B50"), h("div", null, h("div", { class: "fw-bold" }, option.label), h("small", { class: "text-muted" }, "Custom option with ID: ", option.value))))))), this.selectedCustomOption && h("p", { key: '0bf64b75016adc7708218e9716e2c6ce2cf38236', class: "mt-2 text-muted" }, "Selected: ", this.selectedCustomOption.label))), h("div", { key: '3892861b4d3ea7b5df81751912ecedca33501b4a', class: 'd-flex align-items-center my-1', style: { gap: '1rem' } }, h("button", { key: '34d70a22a462361b76ccfee932c0fc53accc7757', class: "btn btn-primary", onClick: () => (this.notificationCount += 1) }, "+"), h("button", { key: '9ae1fec6626131783d3b816e6d64bdbb65b40ab2', class: "btn btn-primary", onClick: () => (this.notificationCount -= 1) }, "-")), h("ir-input-text", { key: '9f6a5c8cdc4688339ab3ca14f1b48d958807dfe2', variant: "floating-label", class: "my-text-input", label: "First name" }, h("svg", { key: '23ea1587edba56cc30a95b5b436cdb5fec419697', xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 640 640", slot: "prefix" }, h("path", { key: '05c7decee19cf7c07923949d5adc345d0ba23f9e', d: "M480 272C480 317.9 465.1 360.3 440 394.7L566.6 521.4C579.1 533.9 579.1 554.2 566.6 566.7C554.1 579.2 533.8 579.2 521.3 566.7L394.7 440C360.3 465.1 317.9 480 272 480C157.1 480 64 386.9 64 272C64 157.1 157.1 64 272 64C386.9 64 480 157.1 480 272zM272 416C351.5 416 416 351.5 416 272C416 192.5 351.5 128 272 128C192.5 128 128 192.5 128 272C128 351.5 192.5 416 272 416z" })), h("svg", { key: 'a6ce3353feb84e9b0f615a4d1ec861918f9f58a4', slot: "suffix", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 640 640" }, h("path", { key: '2fc66bea98cef721df41bd48cb3879d72299f5c7', d: "M264 112L376 112C380.4 112 384 115.6 384 120L384 160L256 160L256 120C256 115.6 259.6 112 264 112zM208 120L208 544L432 544L432 120C432 89.1 406.9 64 376 64L264 64C233.1 64 208 89.1 208 120zM480 160L480 544L512 544C547.3 544 576 515.3 576 480L576 224C576 188.7 547.3 160 512 160L480 160zM160 544L160 160L128 160C92.7 160 64 188.7 64 224L64 480C64 515.3 92.7 544 128 544L160 544z" }))), h("ir-select", { key: '4b8635815087a55e0a32da6ac0eb9881a6f8a74f', "floating-label": true, label: "Hello", data: [{ value: '1', text: '1' }] }), h("div", { key: '0296047786b94152038bd8701873b83d5aff160c', class: "my-2" }), h("ir-select", { key: 'b953cd9dd05870d569729bcfef5c3e66da3a35a6', label: "Hello", data: [{ value: '1', text: '1' }] }), h("div", { key: 'fd18b267c03aa3259511f71bb1fb113919fe621a', class: "my-2" }), h("ir-select", { key: '9f6fcbfa20cc4b46c0de971b562738bd6e0a0704', data: [{ value: '1', text: '1' }] }), h("div", { key: 'f7dc363a5e01c7efe36ceeb1d2f06908fca0c27b', class: "card p-1" }, [
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