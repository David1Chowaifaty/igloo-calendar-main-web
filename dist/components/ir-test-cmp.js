import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';
import { D as sleep } from './utils.js';
import { c as colorVariants, d as defineCustomElement$6 } from './ir-icons2.js';
import { d as defineCustomElement$a } from './ac-pages-menu2.js';
import { d as defineCustomElement$9 } from './ir-button2.js';
import { d as defineCustomElement$8 } from './ir-custom-button2.js';
import { d as defineCustomElement$7 } from './ir-empty-state2.js';
import { d as defineCustomElement$5 } from './ir-input-text2.js';
import { d as defineCustomElement$4 } from './ir-m-combobox2.js';
import { d as defineCustomElement$3 } from './ir-notifications2.js';
import { d as defineCustomElement$2 } from './ir-select2.js';

const irTestCmpCss = ".sc-ir-test-cmp-h{display:block;height:100vh}.modern-navbar.sc-ir-test-cmp{background:#fff;box-shadow:0 2px 10px rgba(0, 0, 0, 0.1);position:sticky;top:0;z-index:1000;border-bottom:1px solid #e5e7eb}.overdue-banner.sc-ir-test-cmp{padding:0.5rem;background:var(--red);color:white;text-align:center;width:100%;display:block}.navbar-container.sc-ir-test-cmp{display:flex;align-items:center;justify-content:space-between;padding:0.5rem 1rem;margin:0 auto}.submenus.sc-ir-test-cmp{background:#104064 !important;width:100%}.navbar-left.sc-ir-test-cmp{display:flex;align-items:center;gap:1rem;width:100%}.custom-width.sc-ir-test-cmp{width:240px}.navbar-brand.sc-ir-test-cmp{font-weight:700;font-size:1.5rem;color:#1f2937}.hotel-name.sc-ir-test-cmp{color:#6b7280;font-size:0.875rem;font-weight:500}.navbar-center.sc-ir-test-cmp{margin-inline:auto}.navbar-right.sc-ir-test-cmp{display:flex;align-items:center}.nav-items.sc-ir-test-cmp{display:flex;list-style:none;margin:0;padding:0;gap:0.5rem}.nav-item.sc-ir-test-cmp{margin:0}.nav-link.sc-ir-test-cmp{display:flex;align-items:center;padding:0.5rem 1rem;text-decoration:none;font-weight:500;border-radius:0.375rem;transition:all 0.2s ease;cursor:pointer}.nav-link.sc-ir-test-cmp:hover{background-color:#f3f4f6;color:#1f2937;text-decoration:none}.mobile-menu-toggle.sc-ir-test-cmp{display:flex;align-items:center;justify-content:center;width:2.5rem;height:2.5rem;border:none;background:none;cursor:pointer;border-radius:0.375rem;transition:background-color 0.2s ease}.mobile-menu-toggle.sc-ir-test-cmp:hover{background-color:#f3f4f6}.hamburger-icon.sc-ir-test-cmp{display:flex;flex-direction:column;width:1.25rem;height:1rem;justify-content:space-between}.hamburger-icon.sc-ir-test-cmp span.sc-ir-test-cmp{display:block;height:2px;width:100%;background-color:#374151;border-radius:1px;transition:all 0.3s ease}.mobile-menu.sc-ir-test-cmp{position:fixed;top:0;left:0;width:100%;height:100vh;background:#fff;transform:translateX(-100%);transition:transform 0.3s ease;z-index:1001;overflow-y:auto}.mobile-menu.active.sc-ir-test-cmp{transform:translateX(0)}.mobile-menu-header.sc-ir-test-cmp{display:flex;align-items:center;justify-content:space-between;padding:1rem;border-bottom:1px solid #e5e7eb}.mobile-menu-header.sc-ir-test-cmp .hotel-name.sc-ir-test-cmp{font-size:1.125rem;font-weight:600;color:#1f2937}.close-menu.sc-ir-test-cmp{display:flex;align-items:center;justify-content:center;width:2.5rem;height:2.5rem;border:none;background:none;font-size:1.5rem;color:#6b7280;cursor:pointer;border-radius:0.375rem;transition:background-color 0.2s ease}.close-menu.sc-ir-test-cmp:hover{background-color:#f3f4f6;color:#374151}.mobile-search.sc-ir-test-cmp{padding:1rem;border-bottom:1px solid #e5e7eb}.mobile-nav-items.sc-ir-test-cmp{list-style:none;margin:0;padding:1rem 0}.mobile-nav-item.sc-ir-test-cmp{margin:0}.mobile-nav-link.sc-ir-test-cmp{display:block;padding:0.75rem 1rem;color:#374151;text-decoration:none;font-weight:500;transition:all 0.2s ease;cursor:pointer}.mobile-nav-link.sc-ir-test-cmp:hover{background-color:#f9fafb;color:#1f2937;text-decoration:none}@media (max-width: 767.98px){.navbar-container.sc-ir-test-cmp{padding:0.5rem 1rem}.navbar-brand.sc-ir-test-cmp{font-size:1.25rem}}.nav-item.sc-ir-test-cmp{color:#1f2937 !important}.ir-mega-menu.sc-ir-test-cmp{list-style:none;margin:0;padding:1rem;grid-template-columns:repeat(4, 1fr) !important;gap:1.25rem;background:#ffffff;border:1px solid #e5e7eb;border-radius:0.5rem}.ir-mega-menu.show.sc-ir-test-cmp{display:grid !important;width:max-content !important}.ir-mega-menu.sc-ir-test-cmp>li.sc-ir-test-cmp{list-style:none}.ir-mega-menu-column.sc-ir-test-cmp{list-style:none;margin:0;padding:0;display:flex;flex-direction:column;gap:0.25rem}.ir-mega-menu-row.title.sc-ir-test-cmp{font-weight:700;color:#0f172a;margin-bottom:0.375rem;font-size:0.825rem;text-transform:uppercase;letter-spacing:0.02em;padding:0rem 0.75rem}.ir-mega-menu-row.sc-ir-test-cmp a.sc-ir-test-cmp{display:block;padding:0.5rem 0.75rem;color:#334155;text-decoration:none;line-height:1;transition:background-color 0.2s ease, color 0.2s ease}.ir-mega-menu-row.sc-ir-test-cmp a.sc-ir-test-cmp:hover{background-color:#f4f5fa;color:#1e2122;text-decoration:none}@media (min-width: 576px){.ir-mega-menu.sc-ir-test-cmp{grid-template-columns:repeat(2, 1fr)}}@media (min-width: 992px){.ir-mega-menu.sc-ir-test-cmp{grid-template-columns:repeat(3, 1fr);padding:1.25rem 1.5rem;gap:1.5rem}}@media (min-width: 768px){.mobile-menu-toggle.sc-ir-test-cmp{display:none !important}.mobile-menu.sc-ir-test-cmp{display:none}.navbar-left.sc-ir-test-cmp{width:auto}}.ir-mega-menu.sc-ir-test-cmp{opacity:0;visibility:hidden;transform:translateY(-10px);transition:opacity 0.3s ease, transform 0.3s ease, visibility 0.3s ease;pointer-events:none;position:absolute;top:100%;left:0;z-index:1000}.ir-mega-menu.show.sc-ir-test-cmp{opacity:1;visibility:visible;transform:translateY(0);pointer-events:auto;display:grid !important}.payment-item.sc-ir-test-cmp{position:relative;width:100%;display:flex;border-bottom:1px solid gainsboro;padding:0.5rem 0.5rem;align-items:center;min-height:3rem}.payment-item.sc-ir-test-cmp:last-child{border-bottom:0}.payment-item.sc-ir-test-cmp:hover{background:#f4f5fa}.payment-item.sc-ir-test-cmp p.sc-ir-test-cmp{padding:0;margin:0;box-sizing:border-box}.payment-item.sc-ir-test-cmp .payment-actions.sc-ir-test-cmp{display:none;background:#f4f5fa;gap:0.5rem;justify-content:flex-end;align-items:center}.payment-body.sc-ir-test-cmp{display:flex;flex-direction:column;gap:0.25rem;flex:1 1 0%}.payment-fields.sc-ir-test-cmp{display:flex;align-items:center;gap:0.5rem}.payment-item.sc-ir-test-cmp:hover .payment-actions.sc-ir-test-cmp{display:flex}.payment-amount.sc-ir-test-cmp{font-weight:700}.payment-amount.is-credit.sc-ir-test-cmp{color:#629a4c}.payment-amount.is-debit.sc-ir-test-cmp{color:#ff4961}.payment-reference.sc-ir-test-cmp{width:300px;font-size:12px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}@media (min-width: 640px){.payment-reference.sc-ir-test-cmp{width:350px}}@media (min-width: 768px){.payment-reference.sc-ir-test-cmp{width:400px}}@media (min-width: 1024px){.payment-reference.sc-ir-test-cmp{width:350px}}.menu-footer.sc-ir-test-cmp{display:flex;flex-direction:column;box-sizing:border-box;width:100%;text-align:start}.menu-footer.sc-ir-test-cmp h4.sc-ir-test-cmp{font-family:var(--wa-font-family-heading);font-weight:var(--wa-font-weight-heading);line-height:var(--wa-line-height-condensed);text-wrap:balance;font-size:var(--wa-font-size-m)}";
const IrTestCmpStyle0 = irTestCmpCss;

const IrTestCmp$1 = /*@__PURE__*/ proxyCustomElement(class IrTestCmp extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
    }
    dates;
    selectedStaticOption;
    selectedCountry;
    selectedCustomOption;
    countryOptions = [];
    customOptions = [];
    isLoadingCountries = false;
    isLoadingCustom = false;
    customComboboxRef;
    staticOptions = [
        { value: 'option1', label: 'Option 1' },
        { value: 'option2', label: 'Option 2' },
        { value: 'option3', label: 'Option 3 ajnajanjanjna janajnjanjan najnajnajn ajnaj' },
        { value: 'option4', label: 'Option 4' },
        { value: 'option5', label: 'Option 5' },
    ];
    handleStaticOptionChange = (event) => {
        this.selectedStaticOption = event.detail;
    };
    handleCountryChange = (event) => {
        this.selectedCountry = event.detail;
    };
    handleCustomOptionChange = (event) => {
        this.selectedCustomOption = event.detail;
    };
    handleCountrySearch = async (event) => {
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
    handleCustomSearch = async (event) => {
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
    handleCustomOptionClick = (option) => {
        if (this.customComboboxRef) {
            this.customComboboxRef.selectOptionFromSlot(option);
        }
    };
    notificationCount = 0;
    isMobileMenuOpen = false;
    toggleMobileMenu = () => {
        this.isMobileMenuOpen = !this.isMobileMenuOpen;
    };
    pages = [
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
    notifications = [
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
    showMegaMenu;
    render() {
        return (h(Host, { key: 'f9a9a6dafb5a684534627b53343324828be6f310' }, h("nav", { key: '322689771563130dbe2572ca10d7d69eff047084', class: "modern-navbar" }, h("span", { key: 'f87a42ea0c4932f1a33a28cf954537c383c0e224', class: "overdue-banner" }, "Overdue $300"), h("div", { key: 'ca394e24ab348b6083a338ebcaeacff88b8ec40e', class: "navbar-container" }, h("div", { key: 'bf88bd6f182ff9df7d46c885a306341b29f1ee7d', class: "navbar-left" }, h("button", { key: '07156eab66de74edeae63eb6a5a36fb5a21fdac6', class: "mobile-menu-toggle d-md-none", onClick: () => this.toggleMobileMenu() }, h("span", { key: '7be68b6cb28a1a65b559a40a0245fea67db836ce', class: "hamburger-icon" }, h("span", { key: '390b37feeafd6abe081dccc0697831378c25ad01' }), h("span", { key: '749c4bbba8b2b1ffc72f8ea232187848aa3eb6af' }), h("span", { key: '45f249138ad1395619cdcc5f514f7d8d67051331' }))), h("div", { key: '77df1c8335f67a74ed34325aebe9ab1f703ca4c9', class: "navbar-brand" }, "Logo"), h("div", { key: '2ecb7cc7254782d815ead3b708e0b7c878adce3f', class: "d-none d-md-flex " }, h("ir-m-combobox", { key: '5e662bb010e8db6fbc1fc38866e1997e286d42d5', style: { '--ir-combobox-width': 'max-content' }, placeholder: "Find property", dataMode: "static", options: this.staticOptions, onOptionChange: this.handleStaticOptionChange })), h("div", { key: '2ee3e8c00c74aa2e1d818bfdef23c98423e7cd57', class: "hotel-name d-none d-md-block" }, "Hotel Name"), h("div", { key: '9bb70954fbd0a1017ecb67104d7f1cb77c7704d5', class: "ml-auto d-md-none" }, h("ir-notifications", { key: 'db55f9a49a7fee7c59b42ac41ffc9ae262b911e5', notifications: this.notifications }))), h("div", { key: '58ac732f10cf75f5513ba784531065e02f20d82e', class: "navbar-center d-none d-md-flex flex-fill mx-auto" }, h("ir-m-combobox", { key: '4832634330dcbeeecd4aad2d6a18ebf942204c2b', placeholder: "Search...", dataMode: "static", options: this.staticOptions, onOptionChange: this.handleStaticOptionChange })), h("div", { key: 'b162c2afa3b1f7a0a28f7c1c61cb26207ac02986', class: "navbar-right" }, h("ul", { key: '26eb9a08a45890fd0872787c0c06c61d4b10d3f3', class: "nav-items d-none d-md-flex" }, h("li", { key: '23218c8555f84288b376b07565d7ac4fdd4dee90', class: "nav-item dropdown" }, h("a", { key: '68bfd656354c157b68f89ae8e438ffb120ad05eb', "data-reference": "parent", href: "#", role: "button", class: "nav-link", "data-toggle": "dropdown", "aria-expanded": "false" }, "a"), h("ul", { key: 'b942fc903a11756189196a623849e64f891b1134', class: `ir-mega-menu mx-auto dropdown-menu-right dropdown-menu    w-100 shadow-sm` }, h("li", { key: '58199baf3d7689786613e162928e953c4169717d' }, h("ul", { key: '180aaa9bb7d630bcbdf1efcafefd5fd604a4efb2', class: "ir-mega-menu-column" }, h("li", { key: '60f73fa7b65a9604ddba95a7572a28620277b165', class: "ir-mega-menu-row title" }, "Parameters"), h("li", { key: 'e90736ac702c99a971464ab4c8a0491ff5390a36', class: "ir-mega-menu-row" }, h("a", { key: '7fb830d852e2c5e0b89caa4051a82052922c71b5', href: "userinline.aspx" }, "Users List")), h("li", { key: '7a9a82d3d14b754e4f0298165aaf3fe6f19d01f3', class: "ir-mega-menu-row" }, h("a", { key: '2e1611cd8014790fc7215ac7520798c34b36d0d1', href: "languageinline.aspx" }, "System Languages")), h("li", { key: '5a55ca0ddec21d6c13e1fbdc4fabaa2443976f7e', class: "ir-mega-menu-row" }, h("a", { key: 'd517fbcd965931da6a34ffdd28f1f2c246a64287', href: "countryinline.aspx" }, "Countries")), h("li", { key: '75efcfc14e6235663cdadef612bd15dce5cc6c21', class: "ir-mega-menu-row" }, h("a", { key: 'ef7ee69f9bb0e18ba833458303c57e01c1514fc0', href: "level2inline.aspx" }, "Country Level 2")), h("li", { key: '8f17aeab7bb403e5f75957ab494e5af5d1f2fcb8', class: "ir-mega-menu-row" }, h("a", { key: '0aa30c71b13347f2db022f41fd34c4e61ab778dd', href: "cardinline.aspx" }, "Credit Cards")), h("li", { key: 'ab48941bdff18e48cd0a7a28518c6534cfd8505e', class: "ir-mega-menu-row" }, h("a", { key: '438ea8c73fd79fb134880642c6bc3e0a0f28f8e3', href: "hotel_chaininline.aspx" }, "Hotel Chains")), h("li", { key: '779813f7be4de015b1d864681cc226453c5ac043', class: "ir-mega-menu-row" }, h("a", { key: 'b21446a5bf523282cd333a8b0ab687462e5ba84e', href: "currencyinline.aspx" }, "Currencies")), h("li", { key: 'a73b75992d58ed3f8f12868683f9d6229e7f51e5', class: "ir-mega-menu-row" }, h("a", { key: '269dd65b31bde518a2b3176319dc6b06479547df', href: "amenityinline.aspx" }, "Amenities")), h("li", { key: '64c3c0e96a5f47bfb0009ea3b716d8d906ebffcd', class: "ir-mega-menu-row" }, h("a", { key: '1352a9ae95789edd07c645b11411fffcf5a53e57', href: "foodinline.aspx" }, "Food")), h("li", { key: '76affa40899cd1f02dff0a4d68568f48d3516ea3', class: "ir-mega-menu-row" }, h("a", { key: 'b4087d06b8c1bfd1b78c5831eae6030cec9f0bf7', href: "beddinginline.aspx" }, "Bedding")), h("li", { key: '32fa9fc2a7a28f8f3394d41088e24db1c6e29786', class: "ir-mega-menu-row" }, h("a", { key: 'ac2d69290a535b62e744c6f67d5164f3e81aaeee', href: "setupinline.aspx" }, "Setup Table")), h("li", { key: '76aab039af0a1d08403a53a3b0aad3bad38852d4', class: "ir-mega-menu-row" }, h("a", { key: '6de83eb59387fe74c897eef394c64cc8d1430886', href: "gwedit.aspx" }, "Payment Gateways")), h("li", { key: '4535b6e12f251077d29aacbe5f2cded526cbbc1c', class: "ir-mega-menu-row" }, h("a", { key: 'c9ab3a91dc12fbfbc29a20d48d7bc86dc020b413', href: "channelmanager.aspx" }, "Channel Manager")))), h("li", { key: '4ae92f55f0e7beeba580e8f5bdf281aaaed666cd' }, h("ul", { key: '0c42ac57f9786fb7646d926791367aa7b2048838', class: "ir-mega-menu-column" }, h("li", { key: '268a5e1d42a15cb720059bcbdce5553c8e670444', class: "ir-mega-menu-row title" }, "Main"), h("li", { key: '2f578e9b9f231fe5a7e7c913532d0c7084823aad', class: "ir-mega-menu-row" }, h("a", { key: '7d7f8ea4a14aae0e0a39fb4c16dc2e068be0bc4d', href: "mpolist.aspx" }, "MPOs")), h("li", { key: 'bcaf13635addf9b4dbd484b3a0bb4cd338f40e64', class: "ir-mega-menu-row" }, h("a", { key: 'a008ce26e66db8d2b82771a2ac987e25d8e51459', href: "aclist.aspx" }, "Properties")), h("li", { key: '74a564772f2ea2273ecc218cf9636b6e24a44f0f', class: "ir-mega-menu-row" }, h("a", { key: '136855a7d5b8d361981f31e55ba95019cf22afbb', href: "acbookinglist.aspx?MODE=MPO" }, "Bookings")), h("li", { key: '85a6aaad6b1d448ddec4de8f261b7debb47fa833', class: "ir-mega-menu-row" }, h("a", { key: '64982215c89f82e7426330ffa29eb94da3d90b74', href: "mpoaffiliateproperties.aspx" }, "MPO Affiliate Properties")), h("li", { key: '3eb3e6eaefdf123ee8a67d785aeb561e09dce7ea', class: "ir-mega-menu-row" }, h("a", { key: '0577e1cf1ed2ae64192d8c0eb662de41e8757453', href: "acratesallotment.aspx?VIEW_MODE=CV" }, "MPO Combined Inventory")), h("li", { key: 'ca046b0f6590dcc65e03fbd9aac289376a2e9bbc', class: "ir-mega-menu-row" }, h("a", { key: '3c168cee17fb5ea3e9445e33b11dd79841987dc6', href: "acbookinglist.aspx?VIEW_MODE=CV" }, "MPO Combined Bookings")), h("li", { key: 'a9d3a621ad3d0a5ecf611deb874c918f514d73d3', class: "ir-mega-menu-row" }, h("a", { key: '1880a519900adba43fe85ba3246c5efd5a75134d', href: "Acmemberlist.aspx?VIEW_MODE=CV" }, "MPO Combined Guests")), h("li", { key: '2d00c206fc3e0fa3529995fea0dbc83317d67327', class: "ir-mega-menu-row" }, h("a", { key: 'e1400bd6c14ec0a9fa5524088b3832d86fa56952', href: "mpobillingreport.aspx" }, "MPO Billing Report")), h("li", { key: 'dca92cd4240989fc17c208fe4d5f50e51838848f', class: "ir-mega-menu-row" }, h("a", { key: 'c74a39fa2f56f5c3cab0bed435cb2a6aeda87a0e', href: "Acmemberlist.aspx" }, "Guests")), h("li", { key: 'd3c6edb094d381959f01e455a9860feb71327ee7', class: "ir-mega-menu-row" }, h("a", { key: '8e3b80ade8f54c7810ba88765b98f3c86819a1f4', href: "acbookinglist.aspx" }, "Bookings")), h("li", { key: 'bac763aa01efae7ba08b4fe7d23f26b6825ecd60', class: "ir-mega-menu-row" }, h("a", { key: '0c046f35c23954612dbe62643f7d3a2e96447cdd', href: "billing.aspx" }, "Billing")))), h("li", { key: 'ff2970efe04519dd9be81816a9aea40b0477889d' }, h("ul", { key: 'b2a20329ae1e2f6b37be4290074e8f73b8cc4c6a', class: "ir-mega-menu-column" }, h("li", { key: '493d14a4e296c2d37d940ead27bd8da334b26917', class: "ir-mega-menu-row title" }, "Locations"), h("li", { key: '17c09ff4a65d82394d635e77f9c8da1c596995b0', class: "ir-mega-menu-row" }, h("a", { key: '2682b8df22c037f1fb88a29d8e8d3a7f775fcb9c', href: "poicategoriesinline.aspx" }, "Types")), h("li", { key: 'efd4d6a517ce53ebc2ed9ae9f5b5c137654959d9', class: "ir-mega-menu-row" }, h("a", { key: '371e4e0f887a96bf4ff76f84f82f5ba5adc5afd9', href: "poilist.aspx" }, "List")))), h("li", { key: '9aeb35027950d4f6ebb47ef0d8f6b6f9fe1b4720' }, h("ul", { key: 'a90ce9e08a5a6f83a3f8e6f450e256f81f802bbd', class: "ir-mega-menu-column" }, h("li", { key: '5dd1e15b6ce5d89b7c0f82750156bd9af3e2c521', class: "ir-mega-menu-row title" }, "Referrers"), h("li", { key: 'eaebe8d9b1c7427a41c725c734c8c9b4bc88f88f', class: "ir-mega-menu-row" }, h("a", { key: '9b9a06d46329aa747900cdd7e543f958ae475476', href: "affiliatelist.aspx" }, "Affiliates")), h("li", { key: 'deb4c64903ad928145b87f7885e42f3d51249366', class: "ir-mega-menu-row" }, h("a", { key: '88124d67aca9a3f30f1ce120c9075ccea38a47de', href: "travelagentslist.aspx" }, "Travel Agents ...NOT USED")))))), h("li", { key: 'ecc99a8b5aa3ab821717cce1e4a198636aed95aa', class: "nav-item" }, h("a", { key: '298aad94559298611791183165f2fcc48ef10b09', href: "#", class: "nav-link" }, "b")), h("li", { key: '5e497c36194461fdc653f439f954df86efc89257', class: "nav-item" }, h("a", { key: '5b325a144d89ad153415e7d20bd68a4b3a65e879', href: "#", class: "nav-link" }, "c")), h("li", { key: '857028399fa87b16a94126b2db8856586d6e85da', class: "nav-item" }, h("a", { key: '20fec7a00531535cb97f473eaf6e5c4eafe7e8b2', href: "#", class: "nav-link" }, "d")), h("li", { key: 'bf07b7790ce693742ad33377213cc88b18bdb5fb', class: "nav-item" }, h("div", { key: '2db3897917ef23bd5b4431d5c4ba035afdbd88d0', class: "d-flex align-items-center justify-content-center", style: { marginTop: '2px' } }, h("ir-notifications", { key: '4bbce5f656c5260555df607c5825337dbc92d7c6', notifications: this.notifications }))))), h("div", { key: '7fe46084069bdc6c31218294ed24c2787f56b2e4', class: `mobile-menu ${this.isMobileMenuOpen ? 'active' : ''}` }, h("div", { key: 'e50f49d554051cf145dea9e7d89c11eb5de6a19d', class: "mobile-menu-header" }, h("div", { key: 'ec330fd95f526f0647b80a43d73db280f0cc6a13', class: "hotel-name" }, "Hotel Name"), h("button", { key: '664b6bffec37f8f8c32030c35f86555a58b40aa8', class: "close-menu", onClick: () => this.toggleMobileMenu() }, "\u00D7")), h("div", { key: '1373a79a0275b2acb43cf2e34cc26ca35a2efff4', class: "mobile-search" }, h("ir-m-combobox", { key: '9f6aa81f51e37325a7f26fcaf0daa1f1fadb0a03', placeholder: "Search...", dataMode: "static", options: this.staticOptions, onOptionChange: this.handleStaticOptionChange })), h("ac-pages-menu", { key: '750dfc2b79e19388a8c5fc373fcda8d401575e26', location: "sheet", "onLink-clicked": async (e) => {
                await sleep(1000);
                window.location.href = e.detail.target.href;
            }, pages: this.pages }))), h("div", { key: 'b0a57207d8666658a8209f740c566b88fb4aa253', class: "submenus d-none d-md-block" }, h("ac-pages-menu", { key: '0a084db38d1759a875ebd3265886b47ab6ae34ac', pages: this.pages }))), h("section", { key: 'd60cb282e410f8dd9ceaf3ba7c328272c8a5b79d', class: "p-2" }, h("div", { key: 'dc526c7c54216da4573c7fc6bee2c3c60463b14a', class: "row g-3" }, h("div", { key: '8de739c8b4abc2646bfabec9f8a4e265023568c5', class: "col-md-3" }, h("h5", { key: 'c0f3bdffa08a74e99b4c969b68f34cf3d74f00f3' }, "Static Options Example"), h("ir-m-combobox", { key: 'bb2f8028eeb9c1aedc9f21abbb8c7dabe71c857e', placeholder: "Select an option...", dataMode: "static", options: this.staticOptions, onOptionChange: this.handleStaticOptionChange }, h("svg", { key: '4593b5546fe10a522a14555e8c87c812bf3741c7', xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 640 640", slot: "prefix" }, h("path", { key: '32a2ddf59718c7a940cd88e207e48d86e90642d0', d: "M480 272C480 317.9 465.1 360.3 440 394.7L566.6 521.4C579.1 533.9 579.1 554.2 566.6 566.7C554.1 579.2 533.8 579.2 521.3 566.7L394.7 440C360.3 465.1 317.9 480 272 480C157.1 480 64 386.9 64 272C64 157.1 157.1 64 272 64C386.9 64 480 157.1 480 272zM272 416C351.5 416 416 351.5 416 272C416 192.5 351.5 128 272 128C192.5 128 128 192.5 128 272C128 351.5 192.5 416 272 416z" }))), this.selectedStaticOption && h("p", { key: 'd8c3e701cec99047289f478e343aaf17acc61d21', class: "mt-2 text-muted" }, "Selected: ", this.selectedStaticOption.label)), h("div", { key: 'c7a540ce278a66a8748602d8793a18e222a10e3c', class: "col-md-3" }, h("h5", { key: 'd785ad3fa68de763a1e789e588d02e6744c49cb6' }, "External API - Countries"), h("ir-m-combobox", { key: 'c6b643be76cb3144e693bfb6ddb212ec6fc07cbe', placeholder: "Search countries...", dataMode: "external", options: this.countryOptions, loading: this.isLoadingCountries, debounceDelay: 300, onSearchQuery: this.handleCountrySearch, onOptionChange: this.handleCountryChange }), this.selectedCountry && h("p", { key: '3d55d8b55c3ebd5fb54714e873ce24a5217f39c7', class: "mt-2 text-muted" }, "Selected: ", this.selectedCountry.label)), h("div", { key: 'e419b3c810a02ea713eaca44cf1d672bdf14a3ef', class: "col-md-3" }, h("h5", { key: '1b973460399fe12a4e5ba209a95f41260e2c4f86' }, "Custom Dropdown Content"), h("ir-m-combobox", { key: '9d1c5480631b62ac4c24b76777602ae91ffde595', class: "custom-width", ref: el => (this.customComboboxRef = el), placeholder: "Search with custom dropdown...", dataMode: "external", options: this.customOptions, loading: this.isLoadingCustom, useSlot: true, debounceDelay: 500, onSearchQuery: this.handleCustomSearch, onOptionChange: this.handleCustomOptionChange }, h("div", { key: 'bd067e7f6755db75902ed7e891a5a5fd3ed5b84f', slot: "dropdown-content" }, this.isLoadingCustom && h("div", { key: '00b169e494454251ebbe69d18728e503131aba59', class: "dropdown-item" }, "\uD83D\uDD04 Loading custom results..."), !this.isLoadingCustom && this.customOptions.length === 0 && h("div", { key: '78f42651ab67273a4279fe51e29f7e7ec6253f95', class: "dropdown-item" }, "\uD83D\uDD0D Type to search..."), !this.isLoadingCustom &&
            this.customOptions.map((option, index) => (h("div", { key: index, class: "dropdown-item d-flex align-items-center", "data-option": option.value, "data-label": option.label, onClick: () => this.handleCustomOptionClick(option), onMouseEnter: e => {
                    const element = e.target;
                    const slotIndex = element.getAttribute('data-slot-index');
                    if (slotIndex && this.customComboboxRef) {
                        this.customComboboxRef.focusedIndex = parseInt(slotIndex);
                    }
                }, style: { cursor: 'pointer' } }, h("span", { class: "me-2" }, "\u2B50"), h("div", null, h("div", { class: "fw-bold" }, option.label), h("small", { class: "text-muted" }, "Custom option with ID: ", option.value))))))), this.selectedCustomOption && h("p", { key: '82a40959cd8100d2847e951b9fe31c436e6c7c3e', class: "mt-2 text-muted" }, "Selected: ", this.selectedCustomOption.label))), h("div", { key: '5a123fdf61384f80d0a5e33b58d86f34cea903c8', class: 'd-flex align-items-center my-1', style: { gap: '1rem' } }, h("button", { key: '5c77f169128917d2351639fd6d8b207e372bce10', class: "btn btn-primary", onClick: () => (this.notificationCount += 1) }, "+"), h("button", { key: '365dea5e888dc79a0af0c2a7a609250b97d08412', class: "btn btn-primary", onClick: () => (this.notificationCount -= 1) }, "-")), h("ir-input-text", { key: 'dab05e5afe3c9fcc9c056ebbf910cd3e49afa111', variant: "floating-label", class: "my-text-input", label: "First name" }, h("svg", { key: '08ddc85df2fa93de626e94b5aa7d2a6874cbeb9d', xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 640 640", slot: "prefix" }, h("path", { key: '36f289a4fdfd2e87993548329d6b7f86818658c7', d: "M480 272C480 317.9 465.1 360.3 440 394.7L566.6 521.4C579.1 533.9 579.1 554.2 566.6 566.7C554.1 579.2 533.8 579.2 521.3 566.7L394.7 440C360.3 465.1 317.9 480 272 480C157.1 480 64 386.9 64 272C64 157.1 157.1 64 272 64C386.9 64 480 157.1 480 272zM272 416C351.5 416 416 351.5 416 272C416 192.5 351.5 128 272 128C192.5 128 128 192.5 128 272C128 351.5 192.5 416 272 416z" })), h("svg", { key: '2d40eed49e3ef6e4d21d97e249ab0d3af8a0ae79', slot: "suffix", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 640 640" }, h("path", { key: '228a3203fcf7e7e2dd80ab1e95bf0a7c2e4a72ea', d: "M264 112L376 112C380.4 112 384 115.6 384 120L384 160L256 160L256 120C256 115.6 259.6 112 264 112zM208 120L208 544L432 544L432 120C432 89.1 406.9 64 376 64L264 64C233.1 64 208 89.1 208 120zM480 160L480 544L512 544C547.3 544 576 515.3 576 480L576 224C576 188.7 547.3 160 512 160L480 160zM160 544L160 160L128 160C92.7 160 64 188.7 64 224L64 480C64 515.3 92.7 544 128 544L160 544z" }))), h("ir-select", { key: 'df7a5b93a5c1387785d4aeb9c10d19e8a4ad4f42', "floating-label": true, label: "Hello", data: [{ value: '1', text: '1' }] }), h("div", { key: 'a1d84b0677c544d403dffc7b8d7743d5a1382dda', class: "my-2" }), h("ir-select", { key: '3cf89075811a66421c51a53af2580af85103a62f', label: "Hello", data: [{ value: '1', text: '1' }] }), h("div", { key: '01b8e9fbc7f0aeed91f693a20bb229beaf8a36b8', class: "my-2" }), h("ir-select", { key: 'bc7e9e378c1f6483e0358abbe932a6b3fc33622b', data: [{ value: '1', text: '1' }] }), h("div", { key: 'c7ce2eb081de5cfd91693ed7d59bcaf32f36a0f1', class: "card p-1" }, [
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
        ].map(row => (h("div", { key: row.id, class: 'payment-item' }, h("div", { class: "payment-body" }, h("div", { class: "payment-fields" }, h("p", null, h("b", null, row.cause)), h("p", { class: "text-muted" }, row.date)), row.reference && (h("p", { class: "payment-reference text-muted" }, h("b", null, "Ref: "), row?.reference))), h("div", { class: "d-flex align-items-center justify-content-between", style: { gap: '0.5rem' } }, h("p", { class: `payment-amount ${row.type === 'Credit' ? 'is-credit' : 'is-debit'}` }, row.type === 'Credit' ? '+' : '-', "$US ", row.amount), h("div", { class: "payment-actions" }, h("ir-button", { variant: "icon", icon_name: "save", style: colorVariants.secondary }), h("ir-button", { variant: "icon", style: colorVariants.danger, icon_name: "trash" }))))))))));
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
    const components = ["ir-test-cmp", "ac-pages-menu", "ir-button", "ir-custom-button", "ir-empty-state", "ir-icons", "ir-input-text", "ir-m-combobox", "ir-notifications", "ir-select"];
    components.forEach(tagName => { switch (tagName) {
        case "ir-test-cmp":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, IrTestCmp$1);
            }
            break;
        case "ac-pages-menu":
            if (!customElements.get(tagName)) {
                defineCustomElement$a();
            }
            break;
        case "ir-button":
            if (!customElements.get(tagName)) {
                defineCustomElement$9();
            }
            break;
        case "ir-custom-button":
            if (!customElements.get(tagName)) {
                defineCustomElement$8();
            }
            break;
        case "ir-empty-state":
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