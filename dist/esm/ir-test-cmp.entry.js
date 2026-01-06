import { r as registerInstance, h, H as Host } from './index-7e96440e.js';
import { C as sleep } from './utils-646592bd.js';
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
        return (h(Host, { key: 'babd229e18b8909994724d118f5c89bd3e2051e2' }, h("nav", { key: 'c2394127f8d938b3b7b84656aa0b8792f31014ae', class: "modern-navbar" }, h("span", { key: 'dfd26141f94d505ce2270906f618aa29494c4a18', class: "overdue-banner" }, "Overdue $300"), h("div", { key: '70b078434bd904c21f412f413dd9679f4f8fc559', class: "navbar-container" }, h("div", { key: 'f1a5dac5196ca76e38344a62a8939f9639676a43', class: "navbar-left" }, h("button", { key: 'f8448a367c5f37fe73b3da48d87022912ee9148d', class: "mobile-menu-toggle d-md-none", onClick: () => this.toggleMobileMenu() }, h("span", { key: 'dc9a5aa8531e57b37eeb94ee61bcf3d553964e6c', class: "hamburger-icon" }, h("span", { key: '7e38158074108bbb30e7166b9e0ee5b7fa4ec406' }), h("span", { key: '18c41ba83f41bda674a93805eae9bb7868962e4d' }), h("span", { key: '97e1be94478047981dd1960784736b82ee80e8fd' }))), h("div", { key: '5acf0c80b2049a1a205967d1cd44ebdb5ab27b15', class: "navbar-brand" }, "Logo"), h("div", { key: '1676559895f7742e75fc2ec8e0dcc3bdf4f6d5e9', class: "d-none d-md-flex " }, h("ir-m-combobox", { key: '55c0c97ffa6e84856ac2aa25ee7d916689616211', style: { '--ir-combobox-width': 'max-content' }, placeholder: "Find property", dataMode: "static", options: this.staticOptions, onOptionChange: this.handleStaticOptionChange })), h("div", { key: 'e2f666a42a1a1f1b4b862960fcd08afad14497e8', class: "hotel-name d-none d-md-block" }, "Hotel Name"), h("div", { key: '8af3dac7ee9b6bf7ee05da01343f798868a8ae6e', class: "ml-auto d-md-none" }, h("ir-notifications", { key: 'b97b02a6d01ec2c637b8925d3fa49c64218ea547', notifications: this.notifications }))), h("div", { key: '3a2e0f2500c243248bd0d35346b0ef02acc77ce6', class: "navbar-center d-none d-md-flex flex-fill mx-auto" }, h("ir-m-combobox", { key: '50ecfe30b17db77be0213b8bc1e7d43c962e6522', placeholder: "Search...", dataMode: "static", options: this.staticOptions, onOptionChange: this.handleStaticOptionChange })), h("div", { key: 'f8f7b0bfb79172ccf85fac71e3363a6638d9c63e', class: "navbar-right" }, h("ul", { key: '6c6ec4d5590a87d01623f1e65d08d9ab0f65d40b', class: "nav-items d-none d-md-flex" }, h("li", { key: '3b5d1e3a1dd61a85e2d957da41179018c3a269ae', class: "nav-item dropdown" }, h("a", { key: '6c1e765334b5120d18653e4cb27a396a9844c596', "data-reference": "parent", href: "#", role: "button", class: "nav-link", "data-toggle": "dropdown", "aria-expanded": "false" }, "a"), h("ul", { key: '318398b5b7232709d221ba9a0e843cbb088e2d42', class: `ir-mega-menu mx-auto dropdown-menu-right dropdown-menu    w-100 shadow-sm` }, h("li", { key: 'b9162066578b15910f979ef8c378f7f5583f3eba' }, h("ul", { key: 'd7228694782d8b0963b58b44da8f37ad0aee1498', class: "ir-mega-menu-column" }, h("li", { key: '7fa3d542766929aeae4346680e4e6ba1f8a7d1f3', class: "ir-mega-menu-row title" }, "Parameters"), h("li", { key: '11f5e2660a0f02dcc1f3311690d9409c9d0bbac7', class: "ir-mega-menu-row" }, h("a", { key: 'bf8926b4ae9303d0a3e1cdcb32ad77dd1b34db8d', href: "userinline.aspx" }, "Users List")), h("li", { key: 'c4d7bb0692fa0b72729f877a368eec3c7d6cb7a6', class: "ir-mega-menu-row" }, h("a", { key: '996ceff368ad7eca329de11526643220398b865d', href: "languageinline.aspx" }, "System Languages")), h("li", { key: 'eb62c1ee29c2ceacc44f2fe5496aea4ea656bf5c', class: "ir-mega-menu-row" }, h("a", { key: '6005b75a32ba746c96863133e13a622a3635e744', href: "countryinline.aspx" }, "Countries")), h("li", { key: 'eeaa73e90a416a0526ed7066d338d7585a3f40c6', class: "ir-mega-menu-row" }, h("a", { key: '59c7dce5a4a3b2d65fe9d5078e3357b813c1473b', href: "level2inline.aspx" }, "Country Level 2")), h("li", { key: 'bcd5d65453e4c3ca3639c5913d912b0a6d07c850', class: "ir-mega-menu-row" }, h("a", { key: '424e5a7c7437443490504bed64261017ec657b2f', href: "cardinline.aspx" }, "Credit Cards")), h("li", { key: 'c485f5b0573619c6ceaab84bbf2fde9aa1946d84', class: "ir-mega-menu-row" }, h("a", { key: '6f73b7fc68982f7550c5c644d13a07d8df64b396', href: "hotel_chaininline.aspx" }, "Hotel Chains")), h("li", { key: 'dad823f17c4518120b4a9bb7e726a870a63175e9', class: "ir-mega-menu-row" }, h("a", { key: 'c8b716f7dd3b7694728c0ddfd8a6fc5a308bcd1e', href: "currencyinline.aspx" }, "Currencies")), h("li", { key: '6b25fba98fba6bec2d831f3f589a1663573e684a', class: "ir-mega-menu-row" }, h("a", { key: 'e77b052670545b47a26004f3d2a3652c131a92db', href: "amenityinline.aspx" }, "Amenities")), h("li", { key: 'bb6621c64b4f3d1c6f8262d4468cb6a8a6c416e5', class: "ir-mega-menu-row" }, h("a", { key: 'bc6347e79173bc40c9300fcea2f7b118e248da40', href: "foodinline.aspx" }, "Food")), h("li", { key: '3378480f3df2bf1a09fd54f8719e8a0c038ff60f', class: "ir-mega-menu-row" }, h("a", { key: 'e18a7495270effafebd1dbe9edb2fdce7cd9c420', href: "beddinginline.aspx" }, "Bedding")), h("li", { key: 'c97b09c4abc8d7c7437625c1c8f0cd765c7f68d0', class: "ir-mega-menu-row" }, h("a", { key: 'de2a7dfcafa17e57ca2623a3de53cf3389d67ea4', href: "setupinline.aspx" }, "Setup Table")), h("li", { key: '874581b26860582062dc5ac3e37544fa34eec3f9', class: "ir-mega-menu-row" }, h("a", { key: 'd43c675b75a601623b21142ccbc32d1266a3a0d8', href: "gwedit.aspx" }, "Payment Gateways")), h("li", { key: '08878c3869478340f9bb2aa7616bf736fbcc1624', class: "ir-mega-menu-row" }, h("a", { key: '3fdfa86c80fe2dce4f842434d87e92100b7e0da2', href: "channelmanager.aspx" }, "Channel Manager")))), h("li", { key: 'e4c89d43c4f547d66c240277a346ce58e6e5a440' }, h("ul", { key: 'a974207c04d2230ee0632f01b49a5b09c64bc7c7', class: "ir-mega-menu-column" }, h("li", { key: 'a77740338a0acab9a4a4d8836d148f5d003735af', class: "ir-mega-menu-row title" }, "Main"), h("li", { key: '44893363ed518f79fea44921bd8406c79543ad15', class: "ir-mega-menu-row" }, h("a", { key: 'f279a571f746fc0a6d9c623acd95472cfbb00a94', href: "mpolist.aspx" }, "MPOs")), h("li", { key: 'bf8aadd1d14f00e4d07919caaa074f6fec5109af', class: "ir-mega-menu-row" }, h("a", { key: 'cac4067ad0db7514973a7f1cb809eb9a3fdf39db', href: "aclist.aspx" }, "Properties")), h("li", { key: '18d6d9703c3e91c51589678aaced2df2948226f8', class: "ir-mega-menu-row" }, h("a", { key: 'a1e34f638da9a0be9c6cb89ebe7cb8110e5527ee', href: "acbookinglist.aspx?MODE=MPO" }, "Bookings")), h("li", { key: '79b3eb7a1e0c363fe7c55824dbe9da65f4d86202', class: "ir-mega-menu-row" }, h("a", { key: '266181a236bf576c1f0f20098d73d60aa56c494d', href: "mpoaffiliateproperties.aspx" }, "MPO Affiliate Properties")), h("li", { key: '83e2275979780c2995473460f970598ecb7cdb1f', class: "ir-mega-menu-row" }, h("a", { key: '0983c0fb6c7d5a7b104e6c0cc759832dabeea71d', href: "acratesallotment.aspx?VIEW_MODE=CV" }, "MPO Combined Inventory")), h("li", { key: 'a6ca4542f0ad37dcb63a009c70403713b5ee23c2', class: "ir-mega-menu-row" }, h("a", { key: 'f9b83ce97ef4ed777266b9cbef45f789baafb933', href: "acbookinglist.aspx?VIEW_MODE=CV" }, "MPO Combined Bookings")), h("li", { key: '19231a992eeaacadc657d733f983ab108d90dce4', class: "ir-mega-menu-row" }, h("a", { key: '9d345563f6b91b4e271b98317334cd292423a3db', href: "Acmemberlist.aspx?VIEW_MODE=CV" }, "MPO Combined Guests")), h("li", { key: '4a87894b1f3e6191ca232325bfad9a6b713ec13f', class: "ir-mega-menu-row" }, h("a", { key: '3f1fdcc518875f409b966eef36c989c668fb16e5', href: "mpobillingreport.aspx" }, "MPO Billing Report")), h("li", { key: 'db3ca5c19457cc07550349cfb3db4121a1d674f8', class: "ir-mega-menu-row" }, h("a", { key: 'e1b49413a9f67e7a0686f4d2d9612b8d5052a592', href: "Acmemberlist.aspx" }, "Guests")), h("li", { key: '089a88e8808cd9c2a641232466a580399813f70a', class: "ir-mega-menu-row" }, h("a", { key: 'e0727d8dce83afe93f5853f3e218b8a29ea66f31', href: "acbookinglist.aspx" }, "Bookings")), h("li", { key: 'd37700eddb52b6f7b6acfa3371aaaff9b569bc5b', class: "ir-mega-menu-row" }, h("a", { key: '69a450668cad2c211f33136920330ee624d8f039', href: "billing.aspx" }, "Billing")))), h("li", { key: '97041b61c90302a167706f9d2c59858f4942f09e' }, h("ul", { key: '311d74bf2eae0cc83965049aee186dd6989ccd99', class: "ir-mega-menu-column" }, h("li", { key: '8c09b22021c30d11d125646a51e3a01fbd5df26f', class: "ir-mega-menu-row title" }, "Locations"), h("li", { key: 'b21f6bc964a856cc985680e246b680f528856b9c', class: "ir-mega-menu-row" }, h("a", { key: '5d4998e4a5b5c8339d02c1183dcaa59d44e484a6', href: "poicategoriesinline.aspx" }, "Types")), h("li", { key: '5718d232b92550558a61dddd8ea8b240d8ddd4aa', class: "ir-mega-menu-row" }, h("a", { key: 'ee7e82d25cb316aac12e157340280f5197d28310', href: "poilist.aspx" }, "List")))), h("li", { key: '100abb83dcf2a07c6f06f481b39af84fccf25809' }, h("ul", { key: 'edb60fdb7c98896913be68fd19c91df05b5c8598', class: "ir-mega-menu-column" }, h("li", { key: 'b8a62152cf103d9bf20f5e060ffdc9b819920209', class: "ir-mega-menu-row title" }, "Referrers"), h("li", { key: '18f7ceb2ea1f2f342c49cc135e657081f86aeef0', class: "ir-mega-menu-row" }, h("a", { key: '0eae601a54c0208a3d5bbc4af7d1ed3956abe4a9', href: "affiliatelist.aspx" }, "Affiliates")), h("li", { key: 'c5ba01662c13e45c2035c4c0115d6ba907a8da6d', class: "ir-mega-menu-row" }, h("a", { key: '4e8d37b3079eeb2de0f03e1cc5f7b70536dceec3', href: "travelagentslist.aspx" }, "Travel Agents ...NOT USED")))))), h("li", { key: '1dd30b37b2f6ea35b6eeba6a68b0142b2cf6c881', class: "nav-item" }, h("a", { key: 'd8cc9454a10e88b85bb92773485ad6ab5f618b36', href: "#", class: "nav-link" }, "b")), h("li", { key: '8b4cb6349e7638a4b0b9611961f75a9de5e4abc4', class: "nav-item" }, h("a", { key: '28c97235cfff73b815acfafac0b19cf47f047e77', href: "#", class: "nav-link" }, "c")), h("li", { key: '488ea7b6b8f020d75fb4e45552cf94b22d755822', class: "nav-item" }, h("a", { key: 'caa8cb17b32d73a9dfb2cf37ea650fc45ba8a158', href: "#", class: "nav-link" }, "d")), h("li", { key: '5dafcc1a35be3e2f1c570e71d629eb8377184a9d', class: "nav-item" }, h("div", { key: 'f5a8f780fc35fa8b8974d59e58b32757f608d874', class: "d-flex align-items-center justify-content-center", style: { marginTop: '2px' } }, h("ir-notifications", { key: 'b470d40bc2b024dc89e64eb18f05a5db35d5eae2', notifications: this.notifications }))))), h("div", { key: '24f3ca8f4155146542aa07e8673b27d779844da1', class: `mobile-menu ${this.isMobileMenuOpen ? 'active' : ''}` }, h("div", { key: '4d3e73b50a453450c3b9c5fda2f99adf0d9b9c04', class: "mobile-menu-header" }, h("div", { key: '6271a6136015999221de43544f99eab5b8652ebd', class: "hotel-name" }, "Hotel Name"), h("button", { key: 'e66a7a1672e22e0d9f388830c53e8d4afdd638e3', class: "close-menu", onClick: () => this.toggleMobileMenu() }, "\u00D7")), h("div", { key: '969e98d32e1f381f3cb15044692d7bc2557dff59', class: "mobile-search" }, h("ir-m-combobox", { key: 'db33e7084f9a77815d2114fb6f6cabeac48c23e2', placeholder: "Search...", dataMode: "static", options: this.staticOptions, onOptionChange: this.handleStaticOptionChange })), h("ac-pages-menu", { key: 'ba49cbd93cb430c6bb95e8a1301de8b593d62ba0', location: "sheet", "onLink-clicked": async (e) => {
                await sleep(1000);
                window.location.href = e.detail.target.href;
            }, pages: this.pages }))), h("div", { key: '1aee560b4ae121a18e7e1e7f6407f3e44a354260', class: "submenus d-none d-md-block" }, h("ac-pages-menu", { key: 'acfd42742ebce3249b487db3942c08a4076dde18', pages: this.pages }))), h("section", { key: 'f14408c726e4fe7fe93cd554c7c91c326febd081', class: "p-2" }, h("div", { key: '25e7ef595610dc8bbe0c55211e9b73b366b0a340', class: "row g-3" }, h("div", { key: '99a7a2d7e4c770c0e23e2cb9868bc27092d48b69', class: "col-md-3" }, h("h5", { key: 'ea80da8e459acab24f0f4fce6196480b3faa962b' }, "Static Options Example"), h("ir-m-combobox", { key: '27b92f56b10aeeccd9e6d9dedf79e0712af504c6', placeholder: "Select an option...", dataMode: "static", options: this.staticOptions, onOptionChange: this.handleStaticOptionChange }, h("svg", { key: '28677a8ecd787ed514579a3226abaec9ea0efc48', xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 640 640", slot: "prefix" }, h("path", { key: 'a9eb16447b58973b008fbabedaaa4ec563e2b4c5', d: "M480 272C480 317.9 465.1 360.3 440 394.7L566.6 521.4C579.1 533.9 579.1 554.2 566.6 566.7C554.1 579.2 533.8 579.2 521.3 566.7L394.7 440C360.3 465.1 317.9 480 272 480C157.1 480 64 386.9 64 272C64 157.1 157.1 64 272 64C386.9 64 480 157.1 480 272zM272 416C351.5 416 416 351.5 416 272C416 192.5 351.5 128 272 128C192.5 128 128 192.5 128 272C128 351.5 192.5 416 272 416z" }))), this.selectedStaticOption && h("p", { key: '84f1f93f8bdd3f5d5aae3ffe2c489e7552a985d7', class: "mt-2 text-muted" }, "Selected: ", this.selectedStaticOption.label)), h("div", { key: '60cd7f214ab1b19a659f3fa4a08ca6a79aa7372d', class: "col-md-3" }, h("h5", { key: '7ded142758321717b93e25e3e06bccc68942b8dc' }, "External API - Countries"), h("ir-m-combobox", { key: '4bdb562ab7926d357fe4de01eb1d23c6ce1b1982', placeholder: "Search countries...", dataMode: "external", options: this.countryOptions, loading: this.isLoadingCountries, debounceDelay: 300, onSearchQuery: this.handleCountrySearch, onOptionChange: this.handleCountryChange }), this.selectedCountry && h("p", { key: '7959813043bd957212c50a05d12be703bc6eee44', class: "mt-2 text-muted" }, "Selected: ", this.selectedCountry.label)), h("div", { key: 'd47de61e9581d02a54eb0c6e7626afa649d3e1be', class: "col-md-3" }, h("h5", { key: '9486158d5edcd81471ad8f9d3013fc98a324d7aa' }, "Custom Dropdown Content"), h("ir-m-combobox", { key: '01b04fe3446590f9906e268a2bd78ee5d5471cb6', class: "custom-width", ref: el => (this.customComboboxRef = el), placeholder: "Search with custom dropdown...", dataMode: "external", options: this.customOptions, loading: this.isLoadingCustom, useSlot: true, debounceDelay: 500, onSearchQuery: this.handleCustomSearch, onOptionChange: this.handleCustomOptionChange }, h("div", { key: '918724b1c347da2a64695a1a5b00bc0f271dec27', slot: "dropdown-content" }, this.isLoadingCustom && h("div", { key: '657a8c1c631033ded7504a321df185cf178ed3f9', class: "dropdown-item" }, "\uD83D\uDD04 Loading custom results..."), !this.isLoadingCustom && this.customOptions.length === 0 && h("div", { key: '5262def37808e0a2138c560bf93d7b99cf8332e0', class: "dropdown-item" }, "\uD83D\uDD0D Type to search..."), !this.isLoadingCustom &&
            this.customOptions.map((option, index) => (h("div", { key: index, class: "dropdown-item d-flex align-items-center", "data-option": option.value, "data-label": option.label, onClick: () => this.handleCustomOptionClick(option), onMouseEnter: e => {
                    const element = e.target;
                    const slotIndex = element.getAttribute('data-slot-index');
                    if (slotIndex && this.customComboboxRef) {
                        this.customComboboxRef.focusedIndex = parseInt(slotIndex);
                    }
                }, style: { cursor: 'pointer' } }, h("span", { class: "me-2" }, "\u2B50"), h("div", null, h("div", { class: "fw-bold" }, option.label), h("small", { class: "text-muted" }, "Custom option with ID: ", option.value))))))), this.selectedCustomOption && h("p", { key: 'e88c8c20bd79faab830aeb4cc4ac944946721ebb', class: "mt-2 text-muted" }, "Selected: ", this.selectedCustomOption.label))), h("div", { key: '4081d6ae9453ed4790785db92f420ed40121430b', class: 'd-flex align-items-center my-1', style: { gap: '1rem' } }, h("button", { key: 'ccddf7916df19227e34945932618f38faadcdf6d', class: "btn btn-primary", onClick: () => (this.notificationCount += 1) }, "+"), h("button", { key: '1b63c8712be480b1208d19af28d2d3a3fffa4e7d', class: "btn btn-primary", onClick: () => (this.notificationCount -= 1) }, "-")), h("ir-input-text", { key: 'b8e104a9d050fe163d45a40fe54b7a3adf14ec2a', variant: "floating-label", class: "my-text-input", label: "First name" }, h("svg", { key: '887b5480742ff2f418cdf7ca54c9f2affe487fa5', xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 640 640", slot: "prefix" }, h("path", { key: 'df8d7f7e2d117f270170045e4147e07e951e0f27', d: "M480 272C480 317.9 465.1 360.3 440 394.7L566.6 521.4C579.1 533.9 579.1 554.2 566.6 566.7C554.1 579.2 533.8 579.2 521.3 566.7L394.7 440C360.3 465.1 317.9 480 272 480C157.1 480 64 386.9 64 272C64 157.1 157.1 64 272 64C386.9 64 480 157.1 480 272zM272 416C351.5 416 416 351.5 416 272C416 192.5 351.5 128 272 128C192.5 128 128 192.5 128 272C128 351.5 192.5 416 272 416z" })), h("svg", { key: 'ea364924118cafe5697f09ec0f5372120c5db2a7', slot: "suffix", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 640 640" }, h("path", { key: '95b171dfc2cb8611a29ef4f03182fa70eed39a18', d: "M264 112L376 112C380.4 112 384 115.6 384 120L384 160L256 160L256 120C256 115.6 259.6 112 264 112zM208 120L208 544L432 544L432 120C432 89.1 406.9 64 376 64L264 64C233.1 64 208 89.1 208 120zM480 160L480 544L512 544C547.3 544 576 515.3 576 480L576 224C576 188.7 547.3 160 512 160L480 160zM160 544L160 160L128 160C92.7 160 64 188.7 64 224L64 480C64 515.3 92.7 544 128 544L160 544z" }))), h("ir-select", { key: 'dd0e7ad10ec95952c37921692011ef3f187c2061', "floating-label": true, label: "Hello", data: [{ value: '1', text: '1' }] }), h("div", { key: 'cb3f328c94ec1087190080d1e4d4cca93832d63c', class: "my-2" }), h("ir-select", { key: 'd267dcef61258bdd7b3bd15ce03dd8533a86b26e', label: "Hello", data: [{ value: '1', text: '1' }] }), h("div", { key: 'b02ffae53bb8973c749c64c183c6fd89a88e2ad2', class: "my-2" }), h("ir-select", { key: '94f26a23a69d0a9cb5c04c843a14761fee44a2ee', data: [{ value: '1', text: '1' }] }), h("div", { key: 'e98f145c29c6f9e8a7336cfb355b2357794b8ce5', class: "card p-1" }, [
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