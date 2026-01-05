import { r as registerInstance, h, H as Host } from './index-7e96440e.js';
import { s as sleep } from './utils-41b21cb2.js';
import { c as colorVariants } from './icons-5bea2cc2.js';
import './moment-ab846cee.js';
import './index-1e1f097b.js';
import './calendar-data-2ae53dc9.js';
import './index-f100e9d2.js';
import './locales.store-cb784e95.js';

const irTestCmpCss = ".sc-ir-test-cmp-h{display:block;height:100vh}.modern-navbar.sc-ir-test-cmp{background:#fff;box-shadow:0 2px 10px rgba(0, 0, 0, 0.1);position:sticky;top:0;z-index:1000;border-bottom:1px solid #e5e7eb}.overdue-banner.sc-ir-test-cmp{padding:0.5rem;background:var(--red);color:white;text-align:center;width:100%;display:block}.navbar-container.sc-ir-test-cmp{display:flex;align-items:center;justify-content:space-between;padding:0.5rem 1rem;margin:0 auto}.submenus.sc-ir-test-cmp{background:#104064 !important;width:100%}.navbar-left.sc-ir-test-cmp{display:flex;align-items:center;gap:1rem;width:100%}.custom-width.sc-ir-test-cmp{width:240px}.navbar-brand.sc-ir-test-cmp{font-weight:700;font-size:1.5rem;color:#1f2937}.hotel-name.sc-ir-test-cmp{color:#6b7280;font-size:0.875rem;font-weight:500}.navbar-center.sc-ir-test-cmp{margin-inline:auto}.navbar-right.sc-ir-test-cmp{display:flex;align-items:center}.nav-items.sc-ir-test-cmp{display:flex;list-style:none;margin:0;padding:0;gap:0.5rem}.nav-item.sc-ir-test-cmp{margin:0}.nav-link.sc-ir-test-cmp{display:flex;align-items:center;padding:0.5rem 1rem;text-decoration:none;font-weight:500;border-radius:0.375rem;transition:all 0.2s ease;cursor:pointer}.nav-link.sc-ir-test-cmp:hover{background-color:#f3f4f6;color:#1f2937;text-decoration:none}.mobile-menu-toggle.sc-ir-test-cmp{display:flex;align-items:center;justify-content:center;width:2.5rem;height:2.5rem;border:none;background:none;cursor:pointer;border-radius:0.375rem;transition:background-color 0.2s ease}.mobile-menu-toggle.sc-ir-test-cmp:hover{background-color:#f3f4f6}.hamburger-icon.sc-ir-test-cmp{display:flex;flex-direction:column;width:1.25rem;height:1rem;justify-content:space-between}.hamburger-icon.sc-ir-test-cmp span.sc-ir-test-cmp{display:block;height:2px;width:100%;background-color:#374151;border-radius:1px;transition:all 0.3s ease}.mobile-menu.sc-ir-test-cmp{position:fixed;top:0;left:0;width:100%;height:100vh;background:#fff;transform:translateX(-100%);transition:transform 0.3s ease;z-index:1001;overflow-y:auto}.mobile-menu.active.sc-ir-test-cmp{transform:translateX(0)}.mobile-menu-header.sc-ir-test-cmp{display:flex;align-items:center;justify-content:space-between;padding:1rem;border-bottom:1px solid #e5e7eb}.mobile-menu-header.sc-ir-test-cmp .hotel-name.sc-ir-test-cmp{font-size:1.125rem;font-weight:600;color:#1f2937}.close-menu.sc-ir-test-cmp{display:flex;align-items:center;justify-content:center;width:2.5rem;height:2.5rem;border:none;background:none;font-size:1.5rem;color:#6b7280;cursor:pointer;border-radius:0.375rem;transition:background-color 0.2s ease}.close-menu.sc-ir-test-cmp:hover{background-color:#f3f4f6;color:#374151}.mobile-search.sc-ir-test-cmp{padding:1rem;border-bottom:1px solid #e5e7eb}.mobile-nav-items.sc-ir-test-cmp{list-style:none;margin:0;padding:1rem 0}.mobile-nav-item.sc-ir-test-cmp{margin:0}.mobile-nav-link.sc-ir-test-cmp{display:block;padding:0.75rem 1rem;color:#374151;text-decoration:none;font-weight:500;transition:all 0.2s ease;cursor:pointer}.mobile-nav-link.sc-ir-test-cmp:hover{background-color:#f9fafb;color:#1f2937;text-decoration:none}@media (max-width: 767.98px){.navbar-container.sc-ir-test-cmp{padding:0.5rem 1rem}.navbar-brand.sc-ir-test-cmp{font-size:1.25rem}}.nav-item.sc-ir-test-cmp{color:#1f2937 !important}.ir-mega-menu.sc-ir-test-cmp{list-style:none;margin:0;padding:1rem;grid-template-columns:repeat(4, 1fr) !important;gap:1.25rem;background:#ffffff;border:1px solid #e5e7eb;border-radius:0.5rem}.ir-mega-menu.show.sc-ir-test-cmp{display:grid !important;width:max-content !important}.ir-mega-menu.sc-ir-test-cmp>li.sc-ir-test-cmp{list-style:none}.ir-mega-menu-column.sc-ir-test-cmp{list-style:none;margin:0;padding:0;display:flex;flex-direction:column;gap:0.25rem}.ir-mega-menu-row.title.sc-ir-test-cmp{font-weight:700;color:#0f172a;margin-bottom:0.375rem;font-size:0.825rem;text-transform:uppercase;letter-spacing:0.02em;padding:0rem 0.75rem}.ir-mega-menu-row.sc-ir-test-cmp a.sc-ir-test-cmp{display:block;padding:0.5rem 0.75rem;color:#334155;text-decoration:none;line-height:1;transition:background-color 0.2s ease, color 0.2s ease}.ir-mega-menu-row.sc-ir-test-cmp a.sc-ir-test-cmp:hover{background-color:#f4f5fa;color:#1e2122;text-decoration:none}@media (min-width: 576px){.ir-mega-menu.sc-ir-test-cmp{grid-template-columns:repeat(2, 1fr)}}@media (min-width: 992px){.ir-mega-menu.sc-ir-test-cmp{grid-template-columns:repeat(3, 1fr);padding:1.25rem 1.5rem;gap:1.5rem}}@media (min-width: 768px){.mobile-menu-toggle.sc-ir-test-cmp{display:none !important}.mobile-menu.sc-ir-test-cmp{display:none}.navbar-left.sc-ir-test-cmp{width:auto}}.ir-mega-menu.sc-ir-test-cmp{opacity:0;visibility:hidden;transform:translateY(-10px);transition:opacity 0.3s ease, transform 0.3s ease, visibility 0.3s ease;pointer-events:none;position:absolute;top:100%;left:0;z-index:1000}.ir-mega-menu.show.sc-ir-test-cmp{opacity:1;visibility:visible;transform:translateY(0);pointer-events:auto;display:grid !important}.payment-item.sc-ir-test-cmp{position:relative;width:100%;display:flex;border-bottom:1px solid gainsboro;padding:0.5rem 0.5rem;align-items:center;min-height:3rem}.payment-item.sc-ir-test-cmp:last-child{border-bottom:0}.payment-item.sc-ir-test-cmp:hover{background:#f4f5fa}.payment-item.sc-ir-test-cmp p.sc-ir-test-cmp{padding:0;margin:0;box-sizing:border-box}.payment-item.sc-ir-test-cmp .payment-actions.sc-ir-test-cmp{display:none;background:#f4f5fa;gap:0.5rem;justify-content:flex-end;align-items:center}.payment-body.sc-ir-test-cmp{display:flex;flex-direction:column;gap:0.25rem;flex:1 1 0%}.payment-fields.sc-ir-test-cmp{display:flex;align-items:center;gap:0.5rem}.payment-item.sc-ir-test-cmp:hover .payment-actions.sc-ir-test-cmp{display:flex}.payment-amount.sc-ir-test-cmp{font-weight:700}.payment-amount.is-credit.sc-ir-test-cmp{color:#629a4c}.payment-amount.is-debit.sc-ir-test-cmp{color:#ff4961}.payment-reference.sc-ir-test-cmp{width:300px;font-size:12px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}@media (min-width: 640px){.payment-reference.sc-ir-test-cmp{width:350px}}@media (min-width: 768px){.payment-reference.sc-ir-test-cmp{width:400px}}@media (min-width: 1024px){.payment-reference.sc-ir-test-cmp{width:350px}}.menu-footer.sc-ir-test-cmp{display:flex;flex-direction:column;box-sizing:border-box;width:100%;text-align:start}.menu-footer.sc-ir-test-cmp h4.sc-ir-test-cmp{font-family:var(--wa-font-family-heading);font-weight:var(--wa-font-weight-heading);line-height:var(--wa-line-height-condensed);text-wrap:balance;font-size:var(--wa-font-size-m)}";
const IrTestCmpStyle0 = irTestCmpCss;

const IrTestCmp = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
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
        return (h(Host, { key: 'a33c5b3bb558737ae7cdd3463715f7aafb5dd5a6' }, h("nav", { key: '8eb2801c33ce1b04571d9cc1aaa61bb704f003af', class: "modern-navbar" }, h("span", { key: '74397ea4e8ec3c52f0ce4be5c501958976588755', class: "overdue-banner" }, "Overdue $300"), h("div", { key: 'aab8fdf5f298133b550019d117184ccf11f8f7ee', class: "navbar-container" }, h("div", { key: 'a6bd3dd2e28c29b1aaca70bb885aaea7cd5cbc9c', class: "navbar-left" }, h("button", { key: 'c6d2066164f8d98fdf2540269588181c965e0b6d', class: "mobile-menu-toggle d-md-none", onClick: () => this.toggleMobileMenu() }, h("span", { key: '5e0e4c7b3062778b4a8e416085cdbcb3e729bbed', class: "hamburger-icon" }, h("span", { key: '5fedc5a97760a6e9195e228142d12bad34a6960c' }), h("span", { key: '5cfbe1c2c3c44d183be19fb3f5771e1ef6885335' }), h("span", { key: 'b596ef2bf82abb1f3a768f9af551dca1baca802c' }))), h("div", { key: '2d0fb6efc7cfb02888cce08bba5153ea0dce1a84', class: "navbar-brand" }, "Logo"), h("div", { key: '5a2ec13b4cb8171c6b6bd0c233d3f999b38eefd2', class: "d-none d-md-flex " }, h("ir-m-combobox", { key: '2a7bdd8b69b5e0b5a838243125f966b2e956d4d3', style: { '--ir-combobox-width': 'max-content' }, placeholder: "Find property", dataMode: "static", options: this.staticOptions, onOptionChange: this.handleStaticOptionChange })), h("div", { key: 'c491b2e9aab7c19f00694faeea3748a34391a784', class: "hotel-name d-none d-md-block" }, "Hotel Name"), h("div", { key: '559134fdcd9451d6f97cbc803c5acad0f08c0694', class: "ml-auto d-md-none" }, h("ir-notifications", { key: '892252227c5e092e42aa0ecbc450c720ba1275d0', notifications: this.notifications }))), h("div", { key: 'b593e0d1027686e6586751c219c42dc985b27a4f', class: "navbar-center d-none d-md-flex flex-fill mx-auto" }, h("ir-m-combobox", { key: '6bf8ec1225392411d01904fba21f8fad0730c6a9', placeholder: "Search...", dataMode: "static", options: this.staticOptions, onOptionChange: this.handleStaticOptionChange })), h("div", { key: 'fe8a2640a45b20527e35940326173ceffd3266e4', class: "navbar-right" }, h("ul", { key: '108a421573ab7ab70bb902e83d1c0ef1e6f58694', class: "nav-items d-none d-md-flex" }, h("li", { key: '3124154a97d385604b908a6a9b39d32edc0163eb', class: "nav-item dropdown" }, h("a", { key: 'f5a6df326aa18ecd7e2f9016e2619384d77ea5be', "data-reference": "parent", href: "#", role: "button", class: "nav-link", "data-toggle": "dropdown", "aria-expanded": "false" }, "a"), h("ul", { key: '34164d5ed54ec7f7aeabc0dc0b9ed3000c37ba93', class: `ir-mega-menu mx-auto dropdown-menu-right dropdown-menu    w-100 shadow-sm` }, h("li", { key: 'a578687d160c8693012906da76af90e581a47b58' }, h("ul", { key: '33088c8082809aeb18636380621a4b4fd9f7305a', class: "ir-mega-menu-column" }, h("li", { key: '3c8e8eccedf521a43de937579145dd76749131ab', class: "ir-mega-menu-row title" }, "Parameters"), h("li", { key: 'be05515fdfa800ff2b2b60406ee375545cdb52f0', class: "ir-mega-menu-row" }, h("a", { key: 'bccf9c351d9e7f29a0395f6e3b9923677947b782', href: "userinline.aspx" }, "Users List")), h("li", { key: 'b4a70fecc61b0fa686a42133948043b7c9d20c1f', class: "ir-mega-menu-row" }, h("a", { key: '8122aa9a67d03b2d19fdb24e49c3eca64f31d802', href: "languageinline.aspx" }, "System Languages")), h("li", { key: '37213e22e3ad6c1780d4c6006f2d3833a8aa9c6e', class: "ir-mega-menu-row" }, h("a", { key: 'a6ac2a918b0858f99eb44144789148d4471faf07', href: "countryinline.aspx" }, "Countries")), h("li", { key: '71d8e5260a9db58a346766b208110af678c76f6b', class: "ir-mega-menu-row" }, h("a", { key: '182bbb5d11d47e4774667e643ecd3f21543807ef', href: "level2inline.aspx" }, "Country Level 2")), h("li", { key: 'b07ef8c15b1d7621146e741b447060b7ff85f1cf', class: "ir-mega-menu-row" }, h("a", { key: '04c58530b8414945e0fbb0a2012707f47a83c37f', href: "cardinline.aspx" }, "Credit Cards")), h("li", { key: '0ddb09d138e42626ed2194deec06249c40ade68e', class: "ir-mega-menu-row" }, h("a", { key: '4c187b288503e745aa3ab1cc207bf207d3f5fc9a', href: "hotel_chaininline.aspx" }, "Hotel Chains")), h("li", { key: '1536782bf06775e7cf308e2a14ead8e055419559', class: "ir-mega-menu-row" }, h("a", { key: '6297f2c89939a211870205e22441750aaefad72f', href: "currencyinline.aspx" }, "Currencies")), h("li", { key: 'afa0a08eef9261c1e01d92538a8ee34789bd5468', class: "ir-mega-menu-row" }, h("a", { key: '85ea23bffbe74410d5d6f3d8a3307577df0d8091', href: "amenityinline.aspx" }, "Amenities")), h("li", { key: '0f76d60d13df033740fba6e646591a5dbee5144b', class: "ir-mega-menu-row" }, h("a", { key: 'a06b828b96b6bc494c3861434210f73c2e054cb6', href: "foodinline.aspx" }, "Food")), h("li", { key: '164a4cea4aaef216fe7a4c3733ba8e29b1b789a5', class: "ir-mega-menu-row" }, h("a", { key: 'd7d509c28f0bbf23c4d23e92af34d8a9618a93e0', href: "beddinginline.aspx" }, "Bedding")), h("li", { key: 'be973374470d3cd9380006fc6ec1f55c5097d8a5', class: "ir-mega-menu-row" }, h("a", { key: 'ddfdd5d62a89c5197f5e8db56082b6bffba8ab83', href: "setupinline.aspx" }, "Setup Table")), h("li", { key: '36a3651dc82b7b178eb186cf828de4467694abb6', class: "ir-mega-menu-row" }, h("a", { key: '5db17528c1a5c9fee09c537f3da321e5ced94417', href: "gwedit.aspx" }, "Payment Gateways")), h("li", { key: '6cf26a3089c39c726ac042ebae84a4c501fb5c9b', class: "ir-mega-menu-row" }, h("a", { key: '79d71fa4b2c112036abe7a4a1d2959d5c6bf0ed7', href: "channelmanager.aspx" }, "Channel Manager")))), h("li", { key: 'b18c44c7594994ce77ba9303100ccf9ef5a3b01d' }, h("ul", { key: 'aed11db20e7ca4864acae593233bb71a2215e22a', class: "ir-mega-menu-column" }, h("li", { key: '66c21f8c97c8c84b58863b56eb8cf28320551b7e', class: "ir-mega-menu-row title" }, "Main"), h("li", { key: '1a87d947c87607f53765e45ab1eb8a018997141a', class: "ir-mega-menu-row" }, h("a", { key: 'c5e725a3e0ae22f8622a0583f9c3df0609371541', href: "mpolist.aspx" }, "MPOs")), h("li", { key: '16e35ae45619e4428de24954f5f041a6395508f9', class: "ir-mega-menu-row" }, h("a", { key: 'e41d5762da664104fee50771708eb870e34895a7', href: "aclist.aspx" }, "Properties")), h("li", { key: '8d55846145a88f281c48426d6ca38e7178b3e8b7', class: "ir-mega-menu-row" }, h("a", { key: 'a43d71a75ee2697fba1a983d1ed56f6d86c12171', href: "acbookinglist.aspx?MODE=MPO" }, "Bookings")), h("li", { key: '59e1200b04a6d4e0f3f514915dc3bdc6e74f9cb0', class: "ir-mega-menu-row" }, h("a", { key: '06ec28d3c1520a31d57735d2bf26729c8b5da185', href: "mpoaffiliateproperties.aspx" }, "MPO Affiliate Properties")), h("li", { key: '2b8c68b24537da5a4bbe97951882e111de8a78c5', class: "ir-mega-menu-row" }, h("a", { key: '7a1bdd4197356b10f7d529ea000d73b969bd35ee', href: "acratesallotment.aspx?VIEW_MODE=CV" }, "MPO Combined Inventory")), h("li", { key: '8a6de086b42efd77ea8436fae5aab62abad17df1', class: "ir-mega-menu-row" }, h("a", { key: '914ac259d79019a281b6efca03ee44c264193703', href: "acbookinglist.aspx?VIEW_MODE=CV" }, "MPO Combined Bookings")), h("li", { key: '251758da27165a83ff49097a4a8ff7087194b430', class: "ir-mega-menu-row" }, h("a", { key: '29fd08eb47e7487803546258d2c31142cd723170', href: "Acmemberlist.aspx?VIEW_MODE=CV" }, "MPO Combined Guests")), h("li", { key: 'e011b18dd5733f28f7c47c09d6b534ac98957033', class: "ir-mega-menu-row" }, h("a", { key: '2a734692a7e850f56c88b27277c62f229a5e162d', href: "mpobillingreport.aspx" }, "MPO Billing Report")), h("li", { key: 'b293c67ad57add31c441472907fb20d11779fdd4', class: "ir-mega-menu-row" }, h("a", { key: '5278cf7eebc8a2ef46749b371ad263a91d20948a', href: "Acmemberlist.aspx" }, "Guests")), h("li", { key: '6cd255bc6901f902289f58db11ac8b90f494ba01', class: "ir-mega-menu-row" }, h("a", { key: 'bdc28e1aea16370853ed3df7e506bffaf9eb7b69', href: "acbookinglist.aspx" }, "Bookings")), h("li", { key: 'da163237d7a9f8766faa2463a529f06e638a0f46', class: "ir-mega-menu-row" }, h("a", { key: 'e9541532ffdec7be7e6cfc8eb83a9b97e47e8768', href: "billing.aspx" }, "Billing")))), h("li", { key: 'c55dcf0f9649842ea40b6739411451979c58bb5a' }, h("ul", { key: '9cac1fc475fcd222b663be8f58a36b7e5dd082fc', class: "ir-mega-menu-column" }, h("li", { key: '5f2fdf964197a8e0bc1634deb57d206a53d13889', class: "ir-mega-menu-row title" }, "Locations"), h("li", { key: 'aebdef5016bf295342c2d133ef6da9db110da05e', class: "ir-mega-menu-row" }, h("a", { key: '27bf27d72346d1382eb22711ec539c5f01fdc5ae', href: "poicategoriesinline.aspx" }, "Types")), h("li", { key: '2d2b4322067eff36b8babf98682eef4b309378dd', class: "ir-mega-menu-row" }, h("a", { key: '754a71c4f12e67d34e65b315199a79c6252cc657', href: "poilist.aspx" }, "List")))), h("li", { key: '9d31bcdf24acaf54763ca5c3015c162790259352' }, h("ul", { key: '61f413a9e99543685fe84509c87586fd7a39035a', class: "ir-mega-menu-column" }, h("li", { key: 'ac347ee7505dd93dd88c139f3e33d238034091f4', class: "ir-mega-menu-row title" }, "Referrers"), h("li", { key: 'f32377f2eecf9546e18b2922d97ec18d92d2feec', class: "ir-mega-menu-row" }, h("a", { key: '78ca08387067cd94ef30ab9f3de54942083d472c', href: "affiliatelist.aspx" }, "Affiliates")), h("li", { key: '48676d9684b1e22278a51a3d476eda3fb024afaf', class: "ir-mega-menu-row" }, h("a", { key: '8c01bfcb1734c869793d795490e64548b142ad2a', href: "travelagentslist.aspx" }, "Travel Agents ...NOT USED")))))), h("li", { key: 'd563b35a5b1f00b3d425f4b23fddbf53f8dd531c', class: "nav-item" }, h("a", { key: '53827bf1e0bd725ee289408f44e38cb3d2fa18a6', href: "#", class: "nav-link" }, "b")), h("li", { key: 'c259e72e0a5d26d48f0681b3adc013727f6b5b34', class: "nav-item" }, h("a", { key: 'ff8addba132c153d8db963e2443050bcceb7e768', href: "#", class: "nav-link" }, "c")), h("li", { key: '4f2837b0c1830bc6710c728cc5b8a919f9421b28', class: "nav-item" }, h("a", { key: '79cc78dbbad392e21d6e1d2008e02de86119197f', href: "#", class: "nav-link" }, "d")), h("li", { key: 'a71c1696ec39dbcac33e09df5257464155519bb4', class: "nav-item" }, h("div", { key: '7f99630a663e804cb253a807fdd2ad585339dd8e', class: "d-flex align-items-center justify-content-center", style: { marginTop: '2px' } }, h("ir-notifications", { key: '91dfa1e9b8c053d3994230282bd47cca41e5e373', notifications: this.notifications }))))), h("div", { key: '94bb27966f8702199a4ce0bc196ef14d7bfb8633', class: `mobile-menu ${this.isMobileMenuOpen ? 'active' : ''}` }, h("div", { key: '04e0afc7045c411ff1d2a4274e279246462b12f5', class: "mobile-menu-header" }, h("div", { key: 'e9905fdc880152c16500e1893df1f9c6c4fbd1f3', class: "hotel-name" }, "Hotel Name"), h("button", { key: 'dfd90721b65a604ca04816a7e32e7ceb8e6ad355', class: "close-menu", onClick: () => this.toggleMobileMenu() }, "\u00D7")), h("div", { key: '4950bb17d11d27f7a0ece09278f4e98f424d2465', class: "mobile-search" }, h("ir-m-combobox", { key: 'be37d320c219698f5ccffd9426b3fd0087f8c593', placeholder: "Search...", dataMode: "static", options: this.staticOptions, onOptionChange: this.handleStaticOptionChange })), h("ac-pages-menu", { key: '2741dbcaf023c420ff4d38570705e6ae72f090f2', location: "sheet", "onLink-clicked": async (e) => {
                await sleep(1000);
                window.location.href = e.detail.target.href;
            }, pages: this.pages }))), h("div", { key: 'a7acd80d5c6b6561ba47bb8ac3bedc3cee763ae0', class: "submenus d-none d-md-block" }, h("ac-pages-menu", { key: 'ecba287a9915a0045f9729450f7c923e96b8ec30', pages: this.pages }))), h("section", { key: 'd329173990e09650458ae4577e5d30a1c3bd4d1d', class: "p-2" }, h("div", { key: 'da34bcfbe27edd18a7f98933db4311931f709e9b', class: "row g-3" }, h("div", { key: 'bf2054617ca677502cd1966e973b6cc5a07469aa', class: "col-md-3" }, h("h5", { key: '64e5bbd5f9998d46e4c6d2268d333353b9a8c1ba' }, "Static Options Example"), h("ir-m-combobox", { key: '0f0e99c8889b588325bdc97c93f34c977ba69919', placeholder: "Select an option...", dataMode: "static", options: this.staticOptions, onOptionChange: this.handleStaticOptionChange }, h("svg", { key: '3d5e9619ade1a7cefb38d2aed0d015b7423d75b3', xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 640 640", slot: "prefix" }, h("path", { key: '04ec924c4baa21b0b31d635c0290220f25b9d869', d: "M480 272C480 317.9 465.1 360.3 440 394.7L566.6 521.4C579.1 533.9 579.1 554.2 566.6 566.7C554.1 579.2 533.8 579.2 521.3 566.7L394.7 440C360.3 465.1 317.9 480 272 480C157.1 480 64 386.9 64 272C64 157.1 157.1 64 272 64C386.9 64 480 157.1 480 272zM272 416C351.5 416 416 351.5 416 272C416 192.5 351.5 128 272 128C192.5 128 128 192.5 128 272C128 351.5 192.5 416 272 416z" }))), this.selectedStaticOption && h("p", { key: '3a2a0d30522f5a318d7dfceadab38898c1a675ad', class: "mt-2 text-muted" }, "Selected: ", this.selectedStaticOption.label)), h("div", { key: '8922e6933e12ced33a27de6369db1ab8bbc82efc', class: "col-md-3" }, h("h5", { key: '4b2f52032e323f8cccffcc3452fdf812c3170a4e' }, "External API - Countries"), h("ir-m-combobox", { key: 'b090543b7bc47aad45b79246ab0f6581af167f6e', placeholder: "Search countries...", dataMode: "external", options: this.countryOptions, loading: this.isLoadingCountries, debounceDelay: 300, onSearchQuery: this.handleCountrySearch, onOptionChange: this.handleCountryChange }), this.selectedCountry && h("p", { key: 'add2610feb0e658091a1c0ae959e4223620016c9', class: "mt-2 text-muted" }, "Selected: ", this.selectedCountry.label)), h("div", { key: 'aa81843ecc6360cc69ccc6b7372a1820702adb7c', class: "col-md-3" }, h("h5", { key: '0eb859c629b487df48ee4e48635bfb06161cd661' }, "Custom Dropdown Content"), h("ir-m-combobox", { key: '5890e4717eb4ebd98fd97740b43c90820fc51573', class: "custom-width", ref: el => (this.customComboboxRef = el), placeholder: "Search with custom dropdown...", dataMode: "external", options: this.customOptions, loading: this.isLoadingCustom, useSlot: true, debounceDelay: 500, onSearchQuery: this.handleCustomSearch, onOptionChange: this.handleCustomOptionChange }, h("div", { key: 'd6321325f95a23fa7132869130e74767ada37479', slot: "dropdown-content" }, this.isLoadingCustom && h("div", { key: 'f75c04ce4d6dfcc113b58bab41e0f1be36212e72', class: "dropdown-item" }, "\uD83D\uDD04 Loading custom results..."), !this.isLoadingCustom && this.customOptions.length === 0 && h("div", { key: '56c0a13c6248901ff9c8037c9878570a9543f64a', class: "dropdown-item" }, "\uD83D\uDD0D Type to search..."), !this.isLoadingCustom &&
            this.customOptions.map((option, index) => (h("div", { key: index, class: "dropdown-item d-flex align-items-center", "data-option": option.value, "data-label": option.label, onClick: () => this.handleCustomOptionClick(option), onMouseEnter: e => {
                    const element = e.target;
                    const slotIndex = element.getAttribute('data-slot-index');
                    if (slotIndex && this.customComboboxRef) {
                        this.customComboboxRef.focusedIndex = parseInt(slotIndex);
                    }
                }, style: { cursor: 'pointer' } }, h("span", { class: "me-2" }, "\u2B50"), h("div", null, h("div", { class: "fw-bold" }, option.label), h("small", { class: "text-muted" }, "Custom option with ID: ", option.value))))))), this.selectedCustomOption && h("p", { key: '2e3502515a5d17915bd304acad6066412bee7f02', class: "mt-2 text-muted" }, "Selected: ", this.selectedCustomOption.label))), h("div", { key: 'c5f4f84bc9eaed53eed878e8ea0b51483e937c76', class: 'd-flex align-items-center my-1', style: { gap: '1rem' } }, h("button", { key: '243b8631351fcf91ea650399caa0a71604c64aff', class: "btn btn-primary", onClick: () => (this.notificationCount += 1) }, "+"), h("button", { key: '3ac40b64dd447a7625eeab7e1a06ca72294a063f', class: "btn btn-primary", onClick: () => (this.notificationCount -= 1) }, "-")), h("ir-input-text", { key: '11c88ae2a7da18009bbca668c9835eb101cf379a', variant: "floating-label", class: "my-text-input", label: "First name" }, h("svg", { key: 'b93b11f8da773fff0f1ed504807776cb98023928', xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 640 640", slot: "prefix" }, h("path", { key: '945bbeeeb945c2651af8c8b2352df15ed83bb325', d: "M480 272C480 317.9 465.1 360.3 440 394.7L566.6 521.4C579.1 533.9 579.1 554.2 566.6 566.7C554.1 579.2 533.8 579.2 521.3 566.7L394.7 440C360.3 465.1 317.9 480 272 480C157.1 480 64 386.9 64 272C64 157.1 157.1 64 272 64C386.9 64 480 157.1 480 272zM272 416C351.5 416 416 351.5 416 272C416 192.5 351.5 128 272 128C192.5 128 128 192.5 128 272C128 351.5 192.5 416 272 416z" })), h("svg", { key: '2a4d334e470bff60563723030ae6fced0dd6abde', slot: "suffix", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 640 640" }, h("path", { key: '868b507385dae86a861d11200bbdfa3396ec4e42', d: "M264 112L376 112C380.4 112 384 115.6 384 120L384 160L256 160L256 120C256 115.6 259.6 112 264 112zM208 120L208 544L432 544L432 120C432 89.1 406.9 64 376 64L264 64C233.1 64 208 89.1 208 120zM480 160L480 544L512 544C547.3 544 576 515.3 576 480L576 224C576 188.7 547.3 160 512 160L480 160zM160 544L160 160L128 160C92.7 160 64 188.7 64 224L64 480C64 515.3 92.7 544 128 544L160 544z" }))), h("ir-select", { key: '9d15cc5087df98a63cff97c66564941843c629cd', "floating-label": true, label: "Hello", data: [{ value: '1', text: '1' }] }), h("div", { key: 'e0adb7a16ec7ece418406320cf755481de9ab787', class: "my-2" }), h("ir-select", { key: '5df60944bef40096f4d32c8e002cae5ccaa7bd16', label: "Hello", data: [{ value: '1', text: '1' }] }), h("div", { key: 'd953e0c3c9d90b1043162946ec341da07d88faef', class: "my-2" }), h("ir-select", { key: '69e2a5c6bc378f6c869111dac711cf0ebac3ed5f', data: [{ value: '1', text: '1' }] }), h("div", { key: 'ab58a83ac51e701b1a3d2a241e10a7c9b1468223', class: "card p-1" }, [
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
};
IrTestCmp.style = IrTestCmpStyle0;

export { IrTestCmp as ir_test_cmp };

//# sourceMappingURL=ir-test-cmp.entry.js.map