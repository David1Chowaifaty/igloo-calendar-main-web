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
        return (h(Host, { key: '1ee6b5d2f6d616e1d92b5849b868278b86e2c87c' }, h("nav", { key: '2105abe5e276110f09c5b79e0bccca5b8e7f2535', class: "modern-navbar" }, h("span", { key: '419d80aa041ddbb538397975e484ab71b44ae93a', class: "overdue-banner" }, "Overdue $300"), h("div", { key: '27ed5a0cda438ea726278eda0f1b6fee44d6f4da', class: "navbar-container" }, h("div", { key: '8930332f296961adb8d64058c2a2c65f87a9c19d', class: "navbar-left" }, h("button", { key: '83e31387ed00fd842de9f5710cd3db8bf6d999cf', class: "mobile-menu-toggle d-md-none", onClick: () => this.toggleMobileMenu() }, h("span", { key: '5209bbd48a272c2cc577725d32e3a9ea610c0d3c', class: "hamburger-icon" }, h("span", { key: 'd85fbd2f9c5f3f8e04809c309121b9f5a9ead4f8' }), h("span", { key: '400314f04106255325dd2f550ba05683b204bc3b' }), h("span", { key: 'd14f377c81534fae1bc50e9ee789853c97644eaa' }))), h("div", { key: '5bae2c1627ddc7873f1c1ba3a58b40a8632e9d46', class: "navbar-brand" }, "Logo"), h("div", { key: 'd124ed679959c003d5f2d9db15b2b9c7c035b4d3', class: "d-none d-md-flex " }, h("ir-m-combobox", { key: '6b73267576cf3bb7c24c2197bcbaf91634afca61', style: { '--ir-combobox-width': 'max-content' }, placeholder: "Find property", dataMode: "static", options: this.staticOptions, onOptionChange: this.handleStaticOptionChange })), h("div", { key: '43ba94751913a8ec42ed94a9efc947ab780ee1f6', class: "hotel-name d-none d-md-block" }, "Hotel Name"), h("div", { key: 'f3bcba1415be59f4b92c4210bbd15a926fe70477', class: "ml-auto d-md-none" }, h("ir-notifications", { key: '8dca95cd6c0beafbc02c3531520d198f3b785fde', notifications: this.notifications }))), h("div", { key: '8f349965d57f814d68f85e9133891c05306d04bf', class: "navbar-center d-none d-md-flex flex-fill mx-auto" }, h("ir-m-combobox", { key: '01af49d7ea2fedb1c5f5a971d27e493ce7f459c4', placeholder: "Search...", dataMode: "static", options: this.staticOptions, onOptionChange: this.handleStaticOptionChange })), h("div", { key: '8e2535ff6e2c480bbd811549386d9fb5dd5c7baa', class: "navbar-right" }, h("ul", { key: '598e513a7f87dc3264ff5b07c2b7a86c3c03826b', class: "nav-items d-none d-md-flex" }, h("li", { key: '79f28ad0c4a6fbef444d600b4132460ebe8c3991', class: "nav-item dropdown" }, h("a", { key: '37d714bde823c88cae7ea7694721c704357101ed', "data-reference": "parent", href: "#", role: "button", class: "nav-link", "data-toggle": "dropdown", "aria-expanded": "false" }, "a"), h("ul", { key: 'a2c9fde2b8cd6f997ee75882b8de5ddec59cc633', class: `ir-mega-menu mx-auto dropdown-menu-right dropdown-menu    w-100 shadow-sm` }, h("li", { key: 'c63fcd7ef008255705fb30a9b0732d12f619a989' }, h("ul", { key: '9a8057910769ca65ce7c4ecaaf0200c064981f30', class: "ir-mega-menu-column" }, h("li", { key: '13fac088501b20256a1d9ed8bf14ade3f8b85d3c', class: "ir-mega-menu-row title" }, "Parameters"), h("li", { key: 'c80d7d900608734b5ab70f4fcb1650c22fcc39cd', class: "ir-mega-menu-row" }, h("a", { key: 'ba13da5b45e4f21a94658bb568e4fc997a30f440', href: "userinline.aspx" }, "Users List")), h("li", { key: 'ae32eaf8eac30830acd1a7b8e3e9bdce656e314c', class: "ir-mega-menu-row" }, h("a", { key: 'b165db1db1c7fa916fb8e10d7d48f50615896cd8', href: "languageinline.aspx" }, "System Languages")), h("li", { key: 'abef6c7044bf070f380600d5078e5727499ccd80', class: "ir-mega-menu-row" }, h("a", { key: '8b66dcf26a565b3d987c10683888c9dbff448e96', href: "countryinline.aspx" }, "Countries")), h("li", { key: 'fb37e77d42a682ff8b303b63f90b15d5c65b8d54', class: "ir-mega-menu-row" }, h("a", { key: 'ba70d8afefef4fa880ad10299a708cd8308a0fa4', href: "level2inline.aspx" }, "Country Level 2")), h("li", { key: '327486a8d49e534fb5ec529d2a17d36ee6602ae9', class: "ir-mega-menu-row" }, h("a", { key: 'a3ee77d03436d704b39d2d34e7524534aaab078a', href: "cardinline.aspx" }, "Credit Cards")), h("li", { key: 'eb2351e631ecf297ff63c44ea3a32f56482a2585', class: "ir-mega-menu-row" }, h("a", { key: '26e240dcadcaea2890de9a43fd32265837a55d85', href: "hotel_chaininline.aspx" }, "Hotel Chains")), h("li", { key: 'fd302b367ca91797fe81dbf08c7a9f9da978829b', class: "ir-mega-menu-row" }, h("a", { key: '114a8979263b744bfb7022e264fe6da868dc28e8', href: "currencyinline.aspx" }, "Currencies")), h("li", { key: 'e8fd2b7cbed92c5be44e435f79f97895f328b99f', class: "ir-mega-menu-row" }, h("a", { key: '1cef9039991ea9a00cb733710579de7f267ab6dc', href: "amenityinline.aspx" }, "Amenities")), h("li", { key: 'ecc19fa023d4c4fc73f22bc775dd7dfbe476af17', class: "ir-mega-menu-row" }, h("a", { key: 'd8a1eb3d8a951d4a78546ec8b564b336e95cc889', href: "foodinline.aspx" }, "Food")), h("li", { key: 'adf09636ba6819764038d2680c03d7c6893ba0fb', class: "ir-mega-menu-row" }, h("a", { key: 'd9f65887eb9b36371af29cfbba9b56c7b0348be4', href: "beddinginline.aspx" }, "Bedding")), h("li", { key: '3478f6ec07bf22ac1742a38de69f55c5b5364777', class: "ir-mega-menu-row" }, h("a", { key: 'b55d1c36d7b9c3146213cfb84796ba2894f3483e', href: "setupinline.aspx" }, "Setup Table")), h("li", { key: 'e1a1358a4f4878f46354953ae18675935e94c562', class: "ir-mega-menu-row" }, h("a", { key: '50b34f76fb85c0b58823ec4a1c822e4391459919', href: "gwedit.aspx" }, "Payment Gateways")), h("li", { key: '6197fb1deee40be598c5e40b4f9a08f22fc256c8', class: "ir-mega-menu-row" }, h("a", { key: '45f725c0fdfc76608e0d9ee0c4f9902df6cc6ca7', href: "channelmanager.aspx" }, "Channel Manager")))), h("li", { key: 'aecce8433c048a2cc02798180f4a0056712dae71' }, h("ul", { key: 'baa23a0dc62abde3c6d309f5a00811ca967dc3d1', class: "ir-mega-menu-column" }, h("li", { key: 'c1a3762dde49321695e7a2de33dc2801173e64c4', class: "ir-mega-menu-row title" }, "Main"), h("li", { key: 'eb8b90003a87b0660f9457f9b473f409f216e065', class: "ir-mega-menu-row" }, h("a", { key: '3ac435d00087e30678f635b9df5f066e81a49128', href: "mpolist.aspx" }, "MPOs")), h("li", { key: '4a7c1f0abb2e868a9af104447e5aa5f7b3e254d1', class: "ir-mega-menu-row" }, h("a", { key: 'f799409b36e51639c6910b7f72c77c9fe620824f', href: "aclist.aspx" }, "Properties")), h("li", { key: 'bfdd7ed7bad87993d6e11faa7962d665381838ff', class: "ir-mega-menu-row" }, h("a", { key: 'a00f19ccdae47005db0e326001a97ae519809733', href: "acbookinglist.aspx?MODE=MPO" }, "Bookings")), h("li", { key: 'a1ad8fd84f33e88dc7c2c79e3d4f1553d430878a', class: "ir-mega-menu-row" }, h("a", { key: 'c01b983f2db1a4af771d98d234af994162018052', href: "mpoaffiliateproperties.aspx" }, "MPO Affiliate Properties")), h("li", { key: 'c36e44f63ebab5d11c021874421887f7e2d927a3', class: "ir-mega-menu-row" }, h("a", { key: '7a0d48595439dd93fb6f77fa4e71398ba8cbd105', href: "acratesallotment.aspx?VIEW_MODE=CV" }, "MPO Combined Inventory")), h("li", { key: 'f3c0efae283c478c1db57ca60fb797a18a219d1b', class: "ir-mega-menu-row" }, h("a", { key: '3a23090f9600c37b82f5f6a25b113b5f8d914cf3', href: "acbookinglist.aspx?VIEW_MODE=CV" }, "MPO Combined Bookings")), h("li", { key: '78154ec1a0a9c7f24d0d185022328530813939d6', class: "ir-mega-menu-row" }, h("a", { key: '55d5c710a8fd670bd21c68fd6e12903968e8aba8', href: "Acmemberlist.aspx?VIEW_MODE=CV" }, "MPO Combined Guests")), h("li", { key: 'e77117920a11ef2e425d300a39653b0e5230218a', class: "ir-mega-menu-row" }, h("a", { key: 'a72cd3b7339c56e91ab55e79f2c6749ea0683fbe', href: "mpobillingreport.aspx" }, "MPO Billing Report")), h("li", { key: '5937d9c510786ff0b8ae3600e03d41a341773bd9', class: "ir-mega-menu-row" }, h("a", { key: 'efa90af78878b70bb55b419180bbedf56e5696b3', href: "Acmemberlist.aspx" }, "Guests")), h("li", { key: '2804deb2a0027973007c69e1be5ff9e083cb3a14', class: "ir-mega-menu-row" }, h("a", { key: '1de01bf49317cf903b2a9b4f44e4716563ded9c2', href: "acbookinglist.aspx" }, "Bookings")), h("li", { key: '2ac96d9442e88dfcec546cedf259e9c35b6d5acc', class: "ir-mega-menu-row" }, h("a", { key: '27fa68547c6a7d727105c7c323d0defdd1a71fcf', href: "billing.aspx" }, "Billing")))), h("li", { key: 'd2d02fad7c9ca8826df3c12407161751450a7fdf' }, h("ul", { key: 'ddc45a80fb2d5b7545ef2f09d3113ea1fdbd726d', class: "ir-mega-menu-column" }, h("li", { key: 'd2243f303290620def04a36409973b706151bf21', class: "ir-mega-menu-row title" }, "Locations"), h("li", { key: 'cacd0f78cb2af8bc1076beaaf06013caa81de221', class: "ir-mega-menu-row" }, h("a", { key: 'f26153b768dfdc46afadb41652a2aa0bc9ca762f', href: "poicategoriesinline.aspx" }, "Types")), h("li", { key: '30f2379ca9beece6fbccf490a8381b143287a5ff', class: "ir-mega-menu-row" }, h("a", { key: '7c11b100ee10ca42728c088430e79a8a0227d63b', href: "poilist.aspx" }, "List")))), h("li", { key: 'fe4176105a9de8084855ad39a1c63869e81d06b9' }, h("ul", { key: '2e311930004965100045cd0c26b7a3374f8168c3', class: "ir-mega-menu-column" }, h("li", { key: '28ca15039b24e5575fa6baa7619409d615cca7aa', class: "ir-mega-menu-row title" }, "Referrers"), h("li", { key: '0fd4d8b094a17a5fe2990c7a32347d9b6d2d40b6', class: "ir-mega-menu-row" }, h("a", { key: 'e53d7a2ff98b41d79868e8c4ae53d1674e361604', href: "affiliatelist.aspx" }, "Affiliates")), h("li", { key: '485ed703f86c8c6faa7afb847e0682b3fcf5989f', class: "ir-mega-menu-row" }, h("a", { key: '7652730f092014e1a48089af0454d7129f64f52e', href: "travelagentslist.aspx" }, "Travel Agents ...NOT USED")))))), h("li", { key: '05dba79a163bb7738fbede5167524220dcbc215b', class: "nav-item" }, h("a", { key: '009822b91699cdf24f271bd9cf04bb83c7e80697', href: "#", class: "nav-link" }, "b")), h("li", { key: '2b4097947904299e606550a191bebec975932c15', class: "nav-item" }, h("a", { key: '97b507b3743294cb8e935a3ffa1fda84f1a3bafc', href: "#", class: "nav-link" }, "c")), h("li", { key: '97872360297d424d5669d55abd5ede3223aa14e4', class: "nav-item" }, h("a", { key: '22054cd743ac5c66b9859384371896e49c91bcdb', href: "#", class: "nav-link" }, "d")), h("li", { key: 'aed28e73309a3efe57cd2b37219434a2774dc5d1', class: "nav-item" }, h("div", { key: 'd8fdd6ea74e5a38cc739893428a5b205b74f4cdc', class: "d-flex align-items-center justify-content-center", style: { marginTop: '2px' } }, h("ir-notifications", { key: '2bc770ad2ce1206f8ba7fafadb70026b717dd28a', notifications: this.notifications }))))), h("div", { key: 'cb20fc976c7802748e36eeeaf8f6bd1f1f4df186', class: `mobile-menu ${this.isMobileMenuOpen ? 'active' : ''}` }, h("div", { key: '5fa794213efec09275a260c6f2c424a0dafdcea0', class: "mobile-menu-header" }, h("div", { key: '795db1121bae2adbc4824d8e2904997f639e10bc', class: "hotel-name" }, "Hotel Name"), h("button", { key: 'b10c145a58ad73232bb1178426a919c828853372', class: "close-menu", onClick: () => this.toggleMobileMenu() }, "\u00D7")), h("div", { key: '2b1bc81380132d8a1e622638e29c651712c6cbd4', class: "mobile-search" }, h("ir-m-combobox", { key: 'e350f967023a79cc8dd97bf62ab9cdc821bf8d6e', placeholder: "Search...", dataMode: "static", options: this.staticOptions, onOptionChange: this.handleStaticOptionChange })), h("ac-pages-menu", { key: '658cf3a9a36a12ac5449ddce9769d7e7078d37f8', location: "sheet", "onLink-clicked": async (e) => {
                await sleep(1000);
                window.location.href = e.detail.target.href;
            }, pages: this.pages }))), h("div", { key: '209037b3f71a09994fc957a1de59d80cb712070c', class: "submenus d-none d-md-block" }, h("ac-pages-menu", { key: 'a39e54d7469b905b1e64b6ede745875f967faec3', pages: this.pages }))), h("section", { key: 'd84067c8dc4d75ed9e9a48f7305a2c45005f0d16', class: "p-2" }, h("div", { key: '28b86acd892a1caaf6d2c4fd487e8bbdc030ad08', class: "row g-3" }, h("div", { key: '5973e0b9922dbc36bfcc92d27a326e37a89b7ff8', class: "col-md-3" }, h("h5", { key: '08399034c72da4345f021f93f99745d4c9151f71' }, "Static Options Example"), h("ir-m-combobox", { key: 'd94118eb57ec5d6a0be8e2b5928245659556db14', placeholder: "Select an option...", dataMode: "static", options: this.staticOptions, onOptionChange: this.handleStaticOptionChange }, h("svg", { key: '5dbc371f8b56164a668eebf28d447dcdcef22241', xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 640 640", slot: "prefix" }, h("path", { key: '7befe8904469b0b6c739675f880e9ed4fb553ff6', d: "M480 272C480 317.9 465.1 360.3 440 394.7L566.6 521.4C579.1 533.9 579.1 554.2 566.6 566.7C554.1 579.2 533.8 579.2 521.3 566.7L394.7 440C360.3 465.1 317.9 480 272 480C157.1 480 64 386.9 64 272C64 157.1 157.1 64 272 64C386.9 64 480 157.1 480 272zM272 416C351.5 416 416 351.5 416 272C416 192.5 351.5 128 272 128C192.5 128 128 192.5 128 272C128 351.5 192.5 416 272 416z" }))), this.selectedStaticOption && h("p", { key: '15303abb7f4e67028b6211c69932bf2ddb487b86', class: "mt-2 text-muted" }, "Selected: ", this.selectedStaticOption.label)), h("div", { key: 'bd33ffdce723bd33f15f1c915fd77917db5858b2', class: "col-md-3" }, h("h5", { key: '440205cc4a5b12b5982e5ab04b535d781c3af309' }, "External API - Countries"), h("ir-m-combobox", { key: '22d6f6e8d0440771f09bd522d901f7ff16b68221', placeholder: "Search countries...", dataMode: "external", options: this.countryOptions, loading: this.isLoadingCountries, debounceDelay: 300, onSearchQuery: this.handleCountrySearch, onOptionChange: this.handleCountryChange }), this.selectedCountry && h("p", { key: 'dbc3fff642ea452463e8cda6a4d81e7f09bd78a4', class: "mt-2 text-muted" }, "Selected: ", this.selectedCountry.label)), h("div", { key: '5171cf9878955a9e1ec7b3c72e99f11fa56c8c3a', class: "col-md-3" }, h("h5", { key: 'baee31bbbecbc999af5716e89bbb33f38bdd90a3' }, "Custom Dropdown Content"), h("ir-m-combobox", { key: '8c240c1bccd99820477555c0b4fe51803ce8bb04', class: "custom-width", ref: el => (this.customComboboxRef = el), placeholder: "Search with custom dropdown...", dataMode: "external", options: this.customOptions, loading: this.isLoadingCustom, useSlot: true, debounceDelay: 500, onSearchQuery: this.handleCustomSearch, onOptionChange: this.handleCustomOptionChange }, h("div", { key: '4aaf0443d5b8ecbc862f9c9e5d9b38d186f6b74e', slot: "dropdown-content" }, this.isLoadingCustom && h("div", { key: 'c527811914ff33edf21567599bcb6659beb168f0', class: "dropdown-item" }, "\uD83D\uDD04 Loading custom results..."), !this.isLoadingCustom && this.customOptions.length === 0 && h("div", { key: '67b7dcac7e6e8f2b7a641b149eac191f7c51ee0c', class: "dropdown-item" }, "\uD83D\uDD0D Type to search..."), !this.isLoadingCustom &&
            this.customOptions.map((option, index) => (h("div", { key: index, class: "dropdown-item d-flex align-items-center", "data-option": option.value, "data-label": option.label, onClick: () => this.handleCustomOptionClick(option), onMouseEnter: e => {
                    const element = e.target;
                    const slotIndex = element.getAttribute('data-slot-index');
                    if (slotIndex && this.customComboboxRef) {
                        this.customComboboxRef.focusedIndex = parseInt(slotIndex);
                    }
                }, style: { cursor: 'pointer' } }, h("span", { class: "me-2" }, "\u2B50"), h("div", null, h("div", { class: "fw-bold" }, option.label), h("small", { class: "text-muted" }, "Custom option with ID: ", option.value))))))), this.selectedCustomOption && h("p", { key: '24285b6dd66795540b70a264d3ef3a6083e5c409', class: "mt-2 text-muted" }, "Selected: ", this.selectedCustomOption.label))), h("div", { key: '3573a3f219e287c2535bcc1ad97e37bae046ad43', class: 'd-flex align-items-center my-1', style: { gap: '1rem' } }, h("button", { key: '2e96278bccfd3ed376ff15002782ac92efafe7ff', class: "btn btn-primary", onClick: () => (this.notificationCount += 1) }, "+"), h("button", { key: '2d4a95358cc5d372d1ab162a260c22e8cf3c0f3e', class: "btn btn-primary", onClick: () => (this.notificationCount -= 1) }, "-")), h("ir-input-text", { key: 'a5a73f9c8146b9da7907198fac8f3a7faca3f01d', variant: "floating-label", class: "my-text-input", label: "First name" }, h("svg", { key: '840d4914fe6a6a0ba1309b278648fcc08bfff937', xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 640 640", slot: "prefix" }, h("path", { key: '2ddb7623dec7601fde9e409c8f66c957dbcc5dfd', d: "M480 272C480 317.9 465.1 360.3 440 394.7L566.6 521.4C579.1 533.9 579.1 554.2 566.6 566.7C554.1 579.2 533.8 579.2 521.3 566.7L394.7 440C360.3 465.1 317.9 480 272 480C157.1 480 64 386.9 64 272C64 157.1 157.1 64 272 64C386.9 64 480 157.1 480 272zM272 416C351.5 416 416 351.5 416 272C416 192.5 351.5 128 272 128C192.5 128 128 192.5 128 272C128 351.5 192.5 416 272 416z" })), h("svg", { key: '8cd86970f666e7d458e6b091af6e75c6ef9ace13', slot: "suffix", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 640 640" }, h("path", { key: 'f61c4862ab771e9c02c95ea7008a4e87acc6a300', d: "M264 112L376 112C380.4 112 384 115.6 384 120L384 160L256 160L256 120C256 115.6 259.6 112 264 112zM208 120L208 544L432 544L432 120C432 89.1 406.9 64 376 64L264 64C233.1 64 208 89.1 208 120zM480 160L480 544L512 544C547.3 544 576 515.3 576 480L576 224C576 188.7 547.3 160 512 160L480 160zM160 544L160 160L128 160C92.7 160 64 188.7 64 224L64 480C64 515.3 92.7 544 128 544L160 544z" }))), h("ir-select", { key: 'f6dfafa67f31c4bb20b9a6e79d6fa71f51649cac', "floating-label": true, label: "Hello", data: [{ value: '1', text: '1' }] }), h("div", { key: 'fba11c9a85a1be4d4ed8b06a479d8352fabcc7ec', class: "my-2" }), h("ir-select", { key: '4ae28ed066316d4b3859192d2809c323461cc248', label: "Hello", data: [{ value: '1', text: '1' }] }), h("div", { key: 'd4bf654fed36a3ecc837ccead44c01000a1f84c3', class: "my-2" }), h("ir-select", { key: '6c548b6f564d98a68c09a2ed6f13e206047b38c7', data: [{ value: '1', text: '1' }] }), h("div", { key: '2dd08da787f481d20fe885c3b8f622152cdec1b8', class: "card p-1" }, [
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