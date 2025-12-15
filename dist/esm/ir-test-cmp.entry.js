import { r as registerInstance, h, H as Host } from './index-b3dce66a.js';
import { s as sleep } from './utils-7e795e17.js';
import { c as colorVariants } from './icons-5bea2cc2.js';
import './moment-ab846cee.js';
import './index-1e1f097b.js';
import './calendar-data-8a36a1b2.js';
import './index-a124d225.js';
import './locales.store-f4150353.js';
import './axios-aa1335b8.js';

const irTestCmpCss = ".sc-ir-test-cmp-h{display:block;height:100vh}.modern-navbar.sc-ir-test-cmp{background:#fff;box-shadow:0 2px 10px rgba(0, 0, 0, 0.1);position:sticky;top:0;z-index:1000;border-bottom:1px solid #e5e7eb}.overdue-banner.sc-ir-test-cmp{padding:0.5rem;background:var(--red);color:white;text-align:center;width:100%;display:block}.navbar-container.sc-ir-test-cmp{display:flex;align-items:center;justify-content:space-between;padding:0.5rem 1rem;margin:0 auto}.submenus.sc-ir-test-cmp{background:#104064 !important;width:100%}.navbar-left.sc-ir-test-cmp{display:flex;align-items:center;gap:1rem;width:100%}.custom-width.sc-ir-test-cmp{width:240px}.navbar-brand.sc-ir-test-cmp{font-weight:700;font-size:1.5rem;color:#1f2937}.hotel-name.sc-ir-test-cmp{color:#6b7280;font-size:0.875rem;font-weight:500}.navbar-center.sc-ir-test-cmp{margin-inline:auto}.navbar-right.sc-ir-test-cmp{display:flex;align-items:center}.nav-items.sc-ir-test-cmp{display:flex;list-style:none;margin:0;padding:0;gap:0.5rem}.nav-item.sc-ir-test-cmp{margin:0}.nav-link.sc-ir-test-cmp{display:flex;align-items:center;padding:0.5rem 1rem;text-decoration:none;font-weight:500;border-radius:0.375rem;transition:all 0.2s ease;cursor:pointer}.nav-link.sc-ir-test-cmp:hover{background-color:#f3f4f6;color:#1f2937;text-decoration:none}.mobile-menu-toggle.sc-ir-test-cmp{display:flex;align-items:center;justify-content:center;width:2.5rem;height:2.5rem;border:none;background:none;cursor:pointer;border-radius:0.375rem;transition:background-color 0.2s ease}.mobile-menu-toggle.sc-ir-test-cmp:hover{background-color:#f3f4f6}.hamburger-icon.sc-ir-test-cmp{display:flex;flex-direction:column;width:1.25rem;height:1rem;justify-content:space-between}.hamburger-icon.sc-ir-test-cmp span.sc-ir-test-cmp{display:block;height:2px;width:100%;background-color:#374151;border-radius:1px;transition:all 0.3s ease}.mobile-menu.sc-ir-test-cmp{position:fixed;top:0;left:0;width:100%;height:100vh;background:#fff;transform:translateX(-100%);transition:transform 0.3s ease;z-index:1001;overflow-y:auto}.mobile-menu.active.sc-ir-test-cmp{transform:translateX(0)}.mobile-menu-header.sc-ir-test-cmp{display:flex;align-items:center;justify-content:space-between;padding:1rem;border-bottom:1px solid #e5e7eb}.mobile-menu-header.sc-ir-test-cmp .hotel-name.sc-ir-test-cmp{font-size:1.125rem;font-weight:600;color:#1f2937}.close-menu.sc-ir-test-cmp{display:flex;align-items:center;justify-content:center;width:2.5rem;height:2.5rem;border:none;background:none;font-size:1.5rem;color:#6b7280;cursor:pointer;border-radius:0.375rem;transition:background-color 0.2s ease}.close-menu.sc-ir-test-cmp:hover{background-color:#f3f4f6;color:#374151}.mobile-search.sc-ir-test-cmp{padding:1rem;border-bottom:1px solid #e5e7eb}.mobile-nav-items.sc-ir-test-cmp{list-style:none;margin:0;padding:1rem 0}.mobile-nav-item.sc-ir-test-cmp{margin:0}.mobile-nav-link.sc-ir-test-cmp{display:block;padding:0.75rem 1rem;color:#374151;text-decoration:none;font-weight:500;transition:all 0.2s ease;cursor:pointer}.mobile-nav-link.sc-ir-test-cmp:hover{background-color:#f9fafb;color:#1f2937;text-decoration:none}@media (max-width: 767.98px){.navbar-container.sc-ir-test-cmp{padding:0.5rem 1rem}.navbar-brand.sc-ir-test-cmp{font-size:1.25rem}}.nav-item.sc-ir-test-cmp{color:#1f2937 !important}.ir-mega-menu.sc-ir-test-cmp{list-style:none;margin:0;padding:1rem;grid-template-columns:repeat(4, 1fr) !important;gap:1.25rem;background:#ffffff;border:1px solid #e5e7eb;border-radius:0.5rem}.ir-mega-menu.show.sc-ir-test-cmp{display:grid !important;width:max-content !important}.ir-mega-menu.sc-ir-test-cmp>li.sc-ir-test-cmp{list-style:none}.ir-mega-menu-column.sc-ir-test-cmp{list-style:none;margin:0;padding:0;display:flex;flex-direction:column;gap:0.25rem}.ir-mega-menu-row.title.sc-ir-test-cmp{font-weight:700;color:#0f172a;margin-bottom:0.375rem;font-size:0.825rem;text-transform:uppercase;letter-spacing:0.02em;padding:0rem 0.75rem}.ir-mega-menu-row.sc-ir-test-cmp a.sc-ir-test-cmp{display:block;padding:0.5rem 0.75rem;color:#334155;text-decoration:none;line-height:1;transition:background-color 0.2s ease, color 0.2s ease}.ir-mega-menu-row.sc-ir-test-cmp a.sc-ir-test-cmp:hover{background-color:#f4f5fa;color:#1e2122;text-decoration:none}@media (min-width: 576px){.ir-mega-menu.sc-ir-test-cmp{grid-template-columns:repeat(2, 1fr)}}@media (min-width: 992px){.ir-mega-menu.sc-ir-test-cmp{grid-template-columns:repeat(3, 1fr);padding:1.25rem 1.5rem;gap:1.5rem}}@media (min-width: 768px){.mobile-menu-toggle.sc-ir-test-cmp{display:none !important}.mobile-menu.sc-ir-test-cmp{display:none}.navbar-left.sc-ir-test-cmp{width:auto}}.ir-mega-menu.sc-ir-test-cmp{opacity:0;visibility:hidden;transform:translateY(-10px);transition:opacity 0.3s ease, transform 0.3s ease, visibility 0.3s ease;pointer-events:none;position:absolute;top:100%;left:0;z-index:1000}.ir-mega-menu.show.sc-ir-test-cmp{opacity:1;visibility:visible;transform:translateY(0);pointer-events:auto;display:grid !important}.payment-item.sc-ir-test-cmp{position:relative;width:100%;display:flex;border-bottom:1px solid gainsboro;padding:0.5rem 0.5rem;align-items:center;min-height:3rem}.payment-item.sc-ir-test-cmp:last-child{border-bottom:0}.payment-item.sc-ir-test-cmp:hover{background:#f4f5fa}.payment-item.sc-ir-test-cmp p.sc-ir-test-cmp{padding:0;margin:0;box-sizing:border-box}.payment-item.sc-ir-test-cmp .payment-actions.sc-ir-test-cmp{display:none;background:#f4f5fa;gap:0.5rem;justify-content:flex-end;align-items:center}.payment-body.sc-ir-test-cmp{display:flex;flex-direction:column;gap:0.25rem;flex:1 1 0%}.payment-fields.sc-ir-test-cmp{display:flex;align-items:center;gap:0.5rem}.payment-item.sc-ir-test-cmp:hover .payment-actions.sc-ir-test-cmp{display:flex}.payment-amount.sc-ir-test-cmp{font-weight:700}.payment-amount.is-credit.sc-ir-test-cmp{color:#629a4c}.payment-amount.is-debit.sc-ir-test-cmp{color:#ff4961}.payment-reference.sc-ir-test-cmp{width:300px;font-size:12px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}@media (min-width: 640px){.payment-reference.sc-ir-test-cmp{width:350px}}@media (min-width: 768px){.payment-reference.sc-ir-test-cmp{width:400px}}@media (min-width: 1024px){.payment-reference.sc-ir-test-cmp{width:350px}}";
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
        return (h(Host, { key: '7f37a359e1318cdbe49467b0e48e43ef965e83f6' }, h("nav", { key: '9c0133caeca38549b51c83e098f283341a4b26e4', class: "modern-navbar" }, h("span", { key: '478dac0e7d595fe4a4f623d609fe7b49cd9ae3dc', class: "overdue-banner" }, "Overdue $300"), h("div", { key: 'e04dd278ca224c3c6c90d38d54f7e1f818831fa3', class: "navbar-container" }, h("div", { key: '1bfc766dfba63eebe84fdbb4175c980ab38db06f', class: "navbar-left" }, h("button", { key: 'f3c93dfbb2ea6b8c12a7f3333c91c1a1804e3a74', class: "mobile-menu-toggle d-md-none", onClick: () => this.toggleMobileMenu() }, h("span", { key: '3dfe7f15272d63bdeb117d7512a8905c8310adf3', class: "hamburger-icon" }, h("span", { key: '2c7afc636ecbc27d3bc3828fa8d978a97a37a807' }), h("span", { key: 'c3e21bb85b52f473cfb3ddec4d067eab98c3a551' }), h("span", { key: '369e22a834672d23ff4133c077ea3a1c9dd867cc' }))), h("div", { key: '1b4809d15498b56bacf3487dfdf6438c7f5c1c5a', class: "navbar-brand" }, "Logo"), h("div", { key: '2228e13b0decdf45a8634f9b8271cfa2781f482b', class: "d-none d-md-flex " }, h("ir-m-combobox", { key: 'bfeed6ff475f2b6b4fcbc3f75f87d75ccd12c6fb', style: { '--ir-combobox-width': 'max-content' }, placeholder: "Find property", dataMode: "static", options: this.staticOptions, onOptionChange: this.handleStaticOptionChange })), h("div", { key: '6589f14e6fef1b5ec4b091df295e653d84b69407', class: "hotel-name d-none d-md-block" }, "Hotel Name"), h("div", { key: 'e16ee056e2e9603f36e80e42faaf9f63463256df', class: "ml-auto d-md-none" }, h("ir-notifications", { key: 'c23a42995d436db217f1d9dd1afcff1e3466dfbd', notifications: this.notifications }))), h("div", { key: '7f5e5962f8c4f8f75cf85a66b3acf9346185feab', class: "navbar-center d-none d-md-flex flex-fill mx-auto" }, h("ir-m-combobox", { key: 'fe982e271c511e994cf7fd670cd5a943ecccad44', placeholder: "Search...", dataMode: "static", options: this.staticOptions, onOptionChange: this.handleStaticOptionChange })), h("div", { key: 'aea0c81fb414abd713a6705a6e8ac2c322cb2ba7', class: "navbar-right" }, h("ul", { key: 'fa27d5f462736f81171a8c036d0e45343d63debf', class: "nav-items d-none d-md-flex" }, h("li", { key: '1f4cfb604723ba4b8d15917f43ae6cd1fcc26348', class: "nav-item dropdown" }, h("a", { key: '75d724fc7882b166d32f38b68f561c094822946b', "data-reference": "parent", href: "#", role: "button", class: "nav-link", "data-toggle": "dropdown", "aria-expanded": "false" }, "a"), h("ul", { key: '9034688d13fecdd298e88261484c80396fcc0bda', class: `ir-mega-menu mx-auto dropdown-menu-right dropdown-menu    w-100 shadow-sm` }, h("li", { key: '4895052070f43f18f2ddc764884d0f516e27527f' }, h("ul", { key: '96cdf3e30cf7d6db1e63b6071de817d32f5a7481', class: "ir-mega-menu-column" }, h("li", { key: 'c187012790bd2ba7ceef235a22e53e62d89ed755', class: "ir-mega-menu-row title" }, "Parameters"), h("li", { key: '344b52a2a8f1d3e87e5807b18642d7e8185b6021', class: "ir-mega-menu-row" }, h("a", { key: 'b72256cfa389da0037065031eb53b160d44e9442', href: "userinline.aspx" }, "Users List")), h("li", { key: 'a90ae9cf608645555086703d0b20c98ef29e5e1c', class: "ir-mega-menu-row" }, h("a", { key: '4a2d1a94acd9e2818dfbd810d10fcac94617836f', href: "languageinline.aspx" }, "System Languages")), h("li", { key: '9047cec3b3fd6c02861b6b34c81809e3a1b5d52e', class: "ir-mega-menu-row" }, h("a", { key: '8b7af5d661a4de9f82bc1010cacf673f8a727b16', href: "countryinline.aspx" }, "Countries")), h("li", { key: '93800a3b197467473f10e4c57361cd2f9216bb53', class: "ir-mega-menu-row" }, h("a", { key: 'ab691ab39c189cfb1f2102809b2a8f29ab357579', href: "level2inline.aspx" }, "Country Level 2")), h("li", { key: '9b1f3ddef49c0e4f242d67b71844aa02513fb6ac', class: "ir-mega-menu-row" }, h("a", { key: 'ad6116bef47f7784ec13a3887c272d9b5f26e4fb', href: "cardinline.aspx" }, "Credit Cards")), h("li", { key: '787c7f03e0aec4d8eec8ab2fd8940d945e83384a', class: "ir-mega-menu-row" }, h("a", { key: 'c3c95df8299f0798e7f0fec37207cce4c1b60f53', href: "hotel_chaininline.aspx" }, "Hotel Chains")), h("li", { key: '1c9bdd2969de86185d7923878e515ae2831da73c', class: "ir-mega-menu-row" }, h("a", { key: '8cfc1d5f7988cd57e0a7a85a419873ae154e9cc2', href: "currencyinline.aspx" }, "Currencies")), h("li", { key: 'b9c7c51540a96f197bc632982bce2efdafd1cef8', class: "ir-mega-menu-row" }, h("a", { key: 'ab1192b91b187e97c6654a265d8a197be998262d', href: "amenityinline.aspx" }, "Amenities")), h("li", { key: '0c6fd55310268090730fd5287b53b9ad9a2295e6', class: "ir-mega-menu-row" }, h("a", { key: '1dcdae460e2014576dc58983bbda16642b760a61', href: "foodinline.aspx" }, "Food")), h("li", { key: 'fddbe9edcaac6c35e4870ed3f59cdc09b483ae6d', class: "ir-mega-menu-row" }, h("a", { key: 'e269fd54291c9542a8cf6622c578767610b60214', href: "beddinginline.aspx" }, "Bedding")), h("li", { key: 'b1f992bcf33b5434a1d233c0bb8ec8517fd65d64', class: "ir-mega-menu-row" }, h("a", { key: 'a1a7b3973172a08f4f89a620c1057ed047ff9686', href: "setupinline.aspx" }, "Setup Table")), h("li", { key: '249206597f8bd9718c5cdd2b2818d793f207a024', class: "ir-mega-menu-row" }, h("a", { key: '03188017bdbd843fcc1c70efa3e8980f58ee83b1', href: "gwedit.aspx" }, "Payment Gateways")), h("li", { key: '9831509d6a0bda746812c549a965a9a0ff954dbd', class: "ir-mega-menu-row" }, h("a", { key: '990852fc4f485ce521ca6551ee80f6c3e81416ae', href: "channelmanager.aspx" }, "Channel Manager")))), h("li", { key: '656a8e86e6be8b06607f79524a0f42b1e071afda' }, h("ul", { key: 'c2c5398b985cf3c5eb56787508e8080d33c0193e', class: "ir-mega-menu-column" }, h("li", { key: '51139838194591c1301f04e7173f799fafeca9d5', class: "ir-mega-menu-row title" }, "Main"), h("li", { key: '1f8c1238af8017e159f24b07e84768b1be41aac5', class: "ir-mega-menu-row" }, h("a", { key: '50e6e08a8dcfde808616abadabe489f77be2f9f6', href: "mpolist.aspx" }, "MPOs")), h("li", { key: '37a2e9bffe41152b58388951bd957759e8159a35', class: "ir-mega-menu-row" }, h("a", { key: 'eaae7950409df1837ec9c44da7c5f39593ed2bc3', href: "aclist.aspx" }, "Properties")), h("li", { key: '78a1a622471e96ed4386b13aad947d9a442e8463', class: "ir-mega-menu-row" }, h("a", { key: 'e5ffe97e99e043ae740a20dbadef076574a7fdd4', href: "acbookinglist.aspx?MODE=MPO" }, "Bookings")), h("li", { key: 'b1189b4b4cbeb88c3445615e3c721ed70cffc2db', class: "ir-mega-menu-row" }, h("a", { key: 'ac8cff438c1a7c3810646f10fb4a290017ba3a74', href: "mpoaffiliateproperties.aspx" }, "MPO Affiliate Properties")), h("li", { key: '63db23fdccf0e4bf03ad04f1c69039b7b0beb0b1', class: "ir-mega-menu-row" }, h("a", { key: '2c227202a2fc78cb62198e19a3042d21eba9c3ed', href: "acratesallotment.aspx?VIEW_MODE=CV" }, "MPO Combined Inventory")), h("li", { key: '055843bfabafb986d7108d7ea29dcd7d18af191f', class: "ir-mega-menu-row" }, h("a", { key: '5d58f917ae74b5ccc53e4bc5def862823eb0b229', href: "acbookinglist.aspx?VIEW_MODE=CV" }, "MPO Combined Bookings")), h("li", { key: '9862b38693df9c4f84270290b006c057890aeb53', class: "ir-mega-menu-row" }, h("a", { key: '179150230913888c5b744654b0088781d9a10f0b', href: "Acmemberlist.aspx?VIEW_MODE=CV" }, "MPO Combined Guests")), h("li", { key: 'b00ddd5a7f25e530d0558019609fc881238007ae', class: "ir-mega-menu-row" }, h("a", { key: '7922afed6643c92c953aa85964f419b616d2e1ad', href: "mpobillingreport.aspx" }, "MPO Billing Report")), h("li", { key: '1f5a8576ac9309593ce45208895ff2f626c00aef', class: "ir-mega-menu-row" }, h("a", { key: 'bb6f62f2861807ad2c4fdb09347c7d94c767c7d4', href: "Acmemberlist.aspx" }, "Guests")), h("li", { key: 'd65d59eab3efdfae6ba3b6d7a91a3416f8402631', class: "ir-mega-menu-row" }, h("a", { key: '1c18226d92d96d12fe0726672279e8f33ae02fc9', href: "acbookinglist.aspx" }, "Bookings")), h("li", { key: 'b0db8eb6ade439039aed1f22ebfc843d00cc67da', class: "ir-mega-menu-row" }, h("a", { key: 'e7dd19603ceab21667d47dcc0dccfdf576fc29e6', href: "billing.aspx" }, "Billing")))), h("li", { key: 'e8c277ce0e9f19edba9014576ffa5e5bbb14d4c9' }, h("ul", { key: 'aed3c739a27e70b0d73b56ebb90b1c828e739bb7', class: "ir-mega-menu-column" }, h("li", { key: '1d82f4150965530f5673af4cb391a0fe91e91c46', class: "ir-mega-menu-row title" }, "Locations"), h("li", { key: 'c52a93d6298c95fb59a5683ad6640b80d8807fd2', class: "ir-mega-menu-row" }, h("a", { key: '75aeb699a20dbad2981ed807003a6366f0d5650e', href: "poicategoriesinline.aspx" }, "Types")), h("li", { key: '8f5cbbda48ea680d7c217cbd4bd8e71e53f4a5a1', class: "ir-mega-menu-row" }, h("a", { key: '8c404f506f28d7aaeb9e4979cc15905bacd530b1', href: "poilist.aspx" }, "List")))), h("li", { key: '6f4058e5ed20fc660ffbc4edae26b0f86488fdcd' }, h("ul", { key: '77037c0865ad5de4d9432e221b6eb49f06d617be', class: "ir-mega-menu-column" }, h("li", { key: 'ef70fd619064ab332430363a2b37343558f2c9ca', class: "ir-mega-menu-row title" }, "Referrers"), h("li", { key: 'c29289a9f5dcb1e39e5ef0b5151c1e7138857f5c', class: "ir-mega-menu-row" }, h("a", { key: '5efad6355ea6289b13c91d82fea9f0da54c8e799', href: "affiliatelist.aspx" }, "Affiliates")), h("li", { key: 'fd77d24d2741f48530b15a4db94f0c7633895745', class: "ir-mega-menu-row" }, h("a", { key: '00a6c625a20d0a882307081fd492f3be9f14c1b2', href: "travelagentslist.aspx" }, "Travel Agents ...NOT USED")))))), h("li", { key: '6bb4a70446f30b244c9a793077b164575e3be571', class: "nav-item" }, h("a", { key: '25b8532216d2029d87018738fbc1cae73bfce5d7', href: "#", class: "nav-link" }, "b")), h("li", { key: '8d32b29c0af30a23c5c1a1752a165daab8b57448', class: "nav-item" }, h("a", { key: '07c0b73a5cbd96a308980255c78009e90cb7d0b5', href: "#", class: "nav-link" }, "c")), h("li", { key: '424914e27198627e458df686c0c3258234549a94', class: "nav-item" }, h("a", { key: '6eea69f2b39d1741b0e089b5944c93100fb6d2ba', href: "#", class: "nav-link" }, "d")), h("li", { key: '1754e8395c0af410b7cb1410366aa514f0dda2b9', class: "nav-item" }, h("div", { key: '509d6821e35b95764dc98710c0a8e550bd91a201', class: "d-flex align-items-center justify-content-center", style: { marginTop: '2px' } }, h("ir-notifications", { key: '4de33e8bf3a49bb02e8d2e5d4cc55e56dc411ce0', notifications: this.notifications }))))), h("div", { key: 'b904d99ab1f1850471ea508e0ec91be367cb0ac5', class: `mobile-menu ${this.isMobileMenuOpen ? 'active' : ''}` }, h("div", { key: '6741ad56fb7d31be5f78aafb960dce93d2c950ea', class: "mobile-menu-header" }, h("div", { key: '7aa74bc3e670a6484cf78d4ed5ad5862ecb0497d', class: "hotel-name" }, "Hotel Name"), h("button", { key: '5738e012da8f4a7b18f63e6351f9d1adbc93ff3c', class: "close-menu", onClick: () => this.toggleMobileMenu() }, "\u00D7")), h("div", { key: '63d1d55aa43b757d9b9971639aa88ac8a1ac92cd', class: "mobile-search" }, h("ir-m-combobox", { key: '0bf0dd9b70f4ff5a727f0c88b28fe2d5053b842b', placeholder: "Search...", dataMode: "static", options: this.staticOptions, onOptionChange: this.handleStaticOptionChange })), h("ac-pages-menu", { key: '750b38904851da6953b5380d8b898259acef22f9', location: "sheet", "onLink-clicked": async (e) => {
                await sleep(1000);
                window.location.href = e.detail.target.href;
            }, pages: this.pages }))), h("div", { key: 'f3214720ad35dc9e444bbc919b107074d0648a98', class: "submenus d-none d-md-block" }, h("ac-pages-menu", { key: '8e09b8691a47c4b9131f020839a52dd9c6d9a5c1', pages: this.pages }))), h("section", { key: '92152d7c938f06440cf30c2d451f6ed5a5082567', class: "p-2" }, h("div", { key: 'f13c651957badc502aa6e3f39b313d619a91a06f', class: "row g-3" }, h("div", { key: '67a8e115cd87faba27f37e28ca9a32b8f3502b08', class: "col-md-3" }, h("h5", { key: '187c9bba99b655ddbf54fd6092c0b83212235533' }, "Static Options Example"), h("ir-m-combobox", { key: '4af461c94df772cf3be5a6d4ab1c82775e05cda5', placeholder: "Select an option...", dataMode: "static", options: this.staticOptions, onOptionChange: this.handleStaticOptionChange }, h("svg", { key: 'bdc8b06afb3e18c933aecfcf20a890fd7631c3e7', xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 640 640", slot: "prefix" }, h("path", { key: '0c0a1403437f9e86addc926587b11a7a0fc6f0bf', d: "M480 272C480 317.9 465.1 360.3 440 394.7L566.6 521.4C579.1 533.9 579.1 554.2 566.6 566.7C554.1 579.2 533.8 579.2 521.3 566.7L394.7 440C360.3 465.1 317.9 480 272 480C157.1 480 64 386.9 64 272C64 157.1 157.1 64 272 64C386.9 64 480 157.1 480 272zM272 416C351.5 416 416 351.5 416 272C416 192.5 351.5 128 272 128C192.5 128 128 192.5 128 272C128 351.5 192.5 416 272 416z" }))), this.selectedStaticOption && h("p", { key: 'cb75369121d9511b1436bd8c11719eabf01648d0', class: "mt-2 text-muted" }, "Selected: ", this.selectedStaticOption.label)), h("div", { key: '493ac0c9bd004a7a2309dc246829ad62cdffa64f', class: "col-md-3" }, h("h5", { key: 'c1dbd0f77d75303121e0836b6b4172249e6f524c' }, "External API - Countries"), h("ir-m-combobox", { key: '653422e6bc1d2078165e12addc3069524ce26051', placeholder: "Search countries...", dataMode: "external", options: this.countryOptions, loading: this.isLoadingCountries, debounceDelay: 300, onSearchQuery: this.handleCountrySearch, onOptionChange: this.handleCountryChange }), this.selectedCountry && h("p", { key: 'f7b037d09df0e114dfac550dee157031745db575', class: "mt-2 text-muted" }, "Selected: ", this.selectedCountry.label)), h("div", { key: '8a00cbc3b5a042c4dd8fb8fa353f557d8af5d3f5', class: "col-md-3" }, h("h5", { key: '4a51f5c52c50a9f3a33cb51e2cf4b20d7a655c2e' }, "Custom Dropdown Content"), h("ir-m-combobox", { key: '27f7408d11dae1a4119a93216e044b00f48007d5', class: "custom-width", ref: el => (this.customComboboxRef = el), placeholder: "Search with custom dropdown...", dataMode: "external", options: this.customOptions, loading: this.isLoadingCustom, useSlot: true, debounceDelay: 500, onSearchQuery: this.handleCustomSearch, onOptionChange: this.handleCustomOptionChange }, h("div", { key: 'fb3d8da4eacd47310ab9ac0fd251c1cb36c9553c', slot: "dropdown-content" }, this.isLoadingCustom && h("div", { key: '819474fb3dd20dfcbb7c2712101d794c8a586c98', class: "dropdown-item" }, "\uD83D\uDD04 Loading custom results..."), !this.isLoadingCustom && this.customOptions.length === 0 && h("div", { key: '7bc2e803394c6362801d71539a219a901a69990f', class: "dropdown-item" }, "\uD83D\uDD0D Type to search..."), !this.isLoadingCustom &&
            this.customOptions.map((option, index) => (h("div", { key: index, class: "dropdown-item d-flex align-items-center", "data-option": option.value, "data-label": option.label, onClick: () => this.handleCustomOptionClick(option), onMouseEnter: e => {
                    const element = e.target;
                    const slotIndex = element.getAttribute('data-slot-index');
                    if (slotIndex && this.customComboboxRef) {
                        this.customComboboxRef.focusedIndex = parseInt(slotIndex);
                    }
                }, style: { cursor: 'pointer' } }, h("span", { class: "me-2" }, "\u2B50"), h("div", null, h("div", { class: "fw-bold" }, option.label), h("small", { class: "text-muted" }, "Custom option with ID: ", option.value))))))), this.selectedCustomOption && h("p", { key: '71e526b8507e026898d8a0524526bb29f6096c4f', class: "mt-2 text-muted" }, "Selected: ", this.selectedCustomOption.label))), h("div", { key: '2676b566bb887ba59ee70e0b7adce8f6635bb3e8', class: 'd-flex align-items-center my-1', style: { gap: '1rem' } }, h("button", { key: '720e893bf2b10df148339b1656b6b4c8845ec0dc', class: "btn btn-primary", onClick: () => (this.notificationCount += 1) }, "+"), h("button", { key: '8fedec5bd2e5344a146b3b44e4f158b9cf85f8ec', class: "btn btn-primary", onClick: () => (this.notificationCount -= 1) }, "-")), h("ir-input-text", { key: '6ac5dee5e3347034a79cac3f8ba51f7e99345e05', variant: "floating-label", class: "my-text-input", label: "First name" }, h("svg", { key: '349daca139a5e30df62875627513156ffec6fd8b', xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 640 640", slot: "prefix" }, h("path", { key: '44543141cd62a0ad2101ce19f5cbb240286afbb5', d: "M480 272C480 317.9 465.1 360.3 440 394.7L566.6 521.4C579.1 533.9 579.1 554.2 566.6 566.7C554.1 579.2 533.8 579.2 521.3 566.7L394.7 440C360.3 465.1 317.9 480 272 480C157.1 480 64 386.9 64 272C64 157.1 157.1 64 272 64C386.9 64 480 157.1 480 272zM272 416C351.5 416 416 351.5 416 272C416 192.5 351.5 128 272 128C192.5 128 128 192.5 128 272C128 351.5 192.5 416 272 416z" })), h("svg", { key: '3a7344b732ccdb30f6e69dbea30dff0093c1b2de', slot: "suffix", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 640 640" }, h("path", { key: 'dab940c7adf388a71ad85942bf23502a6ca017ce', d: "M264 112L376 112C380.4 112 384 115.6 384 120L384 160L256 160L256 120C256 115.6 259.6 112 264 112zM208 120L208 544L432 544L432 120C432 89.1 406.9 64 376 64L264 64C233.1 64 208 89.1 208 120zM480 160L480 544L512 544C547.3 544 576 515.3 576 480L576 224C576 188.7 547.3 160 512 160L480 160zM160 544L160 160L128 160C92.7 160 64 188.7 64 224L64 480C64 515.3 92.7 544 128 544L160 544z" }))), h("ir-select", { key: '3e4e9778ee33ba502ac8b25a80a6a77eb113c318', "floating-label": true, label: "Hello", data: [{ value: '1', text: '1' }] }), h("div", { key: 'd99132b73a61bc85d61c53be1fab107646591183', class: "my-2" }), h("ir-select", { key: '64ce8362ba74980f5eec0f20f61aa77fe6307600', label: "Hello", data: [{ value: '1', text: '1' }] }), h("div", { key: 'faee053c5d0b02e8a9084ca3e6466bd29535e4f6', class: "my-2" }), h("ir-select", { key: 'b874b1089ea1829f961dea969473bc3a6fbbbec9', data: [{ value: '1', text: '1' }] }), h("div", { key: '82b33d3e711c433aea89cdb10d58cd4ec5742b38', class: "card p-1" }, [
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