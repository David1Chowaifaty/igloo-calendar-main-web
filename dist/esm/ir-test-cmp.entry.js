import { r as registerInstance, h, H as Host } from './index-7e96440e.js';
import { s as sleep } from './utils-25b06543.js';
import { c as colorVariants } from './icons-5bea2cc2.js';
import './moment-ab846cee.js';
import './index-87419685.js';
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
        return (h(Host, { key: 'db748e072eab2b57dd342a93fc25aec189e3df06' }, h("nav", { key: '15f18aeea5ff5ccbe985877d8ab8b9b4ae03ed3c', class: "modern-navbar" }, h("span", { key: '6aa658f6e560ac13d1486473e683d4fae15302e9', class: "overdue-banner" }, "Overdue $300"), h("div", { key: '80b22ab86617751a740c5bf93e5c92e290f26ccc', class: "navbar-container" }, h("div", { key: 'ed0c451ac10f9f355e168c7e9e8cb95a77f9e436', class: "navbar-left" }, h("button", { key: '21f77abeb70b5033691fcf980b728192ec74b046', class: "mobile-menu-toggle d-md-none", onClick: () => this.toggleMobileMenu() }, h("span", { key: 'f460f560ba6ab55aec2952bd04cfa7c8a1951a02', class: "hamburger-icon" }, h("span", { key: 'dd6aedd79eacda3959470f278bfd1d49e7d19f03' }), h("span", { key: '46cddf023ccc3d84dca84d3e1ac8baa932e28fac' }), h("span", { key: 'ec363ac95848f8d0bcd36cb282da0d3dc5c066fd' }))), h("div", { key: 'ed8bc3530f8b5e67abb05fdde1577c0389fcf9d1', class: "navbar-brand" }, "Logo"), h("div", { key: 'eed88ea34d3f8909724f12768e245cfbfca0b07e', class: "d-none d-md-flex " }, h("ir-m-combobox", { key: '3cb2ff5cf528d550c0b4cd8ef88d8e60da77fc31', style: { '--ir-combobox-width': 'max-content' }, placeholder: "Find property", dataMode: "static", options: this.staticOptions, onOptionChange: this.handleStaticOptionChange })), h("div", { key: 'da711d2d6e148c097a62d301d6ae87096bac3226', class: "hotel-name d-none d-md-block" }, "Hotel Name"), h("div", { key: '0430ef6383c15ecccc08b80a5b0652fed404a37c', class: "ml-auto d-md-none" }, h("ir-notifications", { key: '6bd372beedccb2b3a9d1b0389113c95d87613f69', notifications: this.notifications }))), h("div", { key: 'd4b05e14747da318a658fc969d50600cb9533610', class: "navbar-center d-none d-md-flex flex-fill mx-auto" }, h("ir-m-combobox", { key: 'bdd96b6b7ae9f78e9ba01754940f6fdc2d5fcd47', placeholder: "Search...", dataMode: "static", options: this.staticOptions, onOptionChange: this.handleStaticOptionChange })), h("div", { key: '21fffd4baf6487f0b1bbc6220ed6948859b6d09e', class: "navbar-right" }, h("ul", { key: 'e19da3474324ddca786df043d04619f1ff6c6ba9', class: "nav-items d-none d-md-flex" }, h("li", { key: 'd9018b4a586be2d93209c94c25e667ad9e404e86', class: "nav-item dropdown" }, h("a", { key: '236f6c1129c3c8a4b847fc4e58bb31534b05e3c8', "data-reference": "parent", href: "#", role: "button", class: "nav-link", "data-toggle": "dropdown", "aria-expanded": "false" }, "a"), h("ul", { key: '1b3ed460755df446f0d92b3f713c76f24a3d6a21', class: `ir-mega-menu mx-auto dropdown-menu-right dropdown-menu    w-100 shadow-sm` }, h("li", { key: '2ed76d08b7dd49d4f1ab0e9a0660e0bcac1d8459' }, h("ul", { key: 'ee90bf51dc2a619478a9f156d791eaa96557e086', class: "ir-mega-menu-column" }, h("li", { key: '243f176492d0e789528bfd7c61ea9435ac1a9737', class: "ir-mega-menu-row title" }, "Parameters"), h("li", { key: '0b3b596f5da261f6d23cfe0eca8644094013a9f1', class: "ir-mega-menu-row" }, h("a", { key: '26eba538026f30299425cd2814d0d9c3fe25dcc2', href: "userinline.aspx" }, "Users List")), h("li", { key: '38a7081345b350a67de123ddb80900a2586b5c9d', class: "ir-mega-menu-row" }, h("a", { key: '93065fcd8d1241bebed512835f17ddae4e427442', href: "languageinline.aspx" }, "System Languages")), h("li", { key: 'b05cf4bdda16c612bfb32f76a2420eb4dce18cca', class: "ir-mega-menu-row" }, h("a", { key: 'af517908b28f4e5a32b8c4c2583520f5e9fe9c1c', href: "countryinline.aspx" }, "Countries")), h("li", { key: '073dfc40534627ab7585dacaed8b63a9fce4e046', class: "ir-mega-menu-row" }, h("a", { key: 'cc924eef6ba39955ba90943d542073588386a487', href: "level2inline.aspx" }, "Country Level 2")), h("li", { key: '69deeebe55a39e363b8cfe597098d3763089d744', class: "ir-mega-menu-row" }, h("a", { key: 'ca347f8dd1baf53425e856f77e147ef28ff80df7', href: "cardinline.aspx" }, "Credit Cards")), h("li", { key: '1beaedffa750b2223de485688ec4f19173cfaea5', class: "ir-mega-menu-row" }, h("a", { key: '36de08cf849e8acbb450bdc0a6f20539372bde10', href: "hotel_chaininline.aspx" }, "Hotel Chains")), h("li", { key: '21b7fd3621220aa4b09c1f95c5b12e127357519e', class: "ir-mega-menu-row" }, h("a", { key: '303e6e802d85c85c36359e0f5f4b2123dbdf8731', href: "currencyinline.aspx" }, "Currencies")), h("li", { key: '77e94703e6345f3f01df5e1e2409457a53ad0c85', class: "ir-mega-menu-row" }, h("a", { key: 'd9aeac3beb444da6d9187e719a4c6ca04582a941', href: "amenityinline.aspx" }, "Amenities")), h("li", { key: '4db785b2aa5df7b846a6a488f54a3c0ceaccb426', class: "ir-mega-menu-row" }, h("a", { key: '732841d4aaa562f8f14027348787c29a146cbfa1', href: "foodinline.aspx" }, "Food")), h("li", { key: 'ad08f742ac7bd388e4d5a9ab690119a0b94dfdcf', class: "ir-mega-menu-row" }, h("a", { key: '0f5b597f91d3b8d2ced0709ed27e17b98642ee6d', href: "beddinginline.aspx" }, "Bedding")), h("li", { key: '782e3d466a4c027699c133ddb523575fc0f3012c', class: "ir-mega-menu-row" }, h("a", { key: 'b67206bb1fd4183903756c13e0237f58df0e040e', href: "setupinline.aspx" }, "Setup Table")), h("li", { key: '21d1a47398e2830519e72869db5d3ebaeafcf594', class: "ir-mega-menu-row" }, h("a", { key: 'c56fd75ca8f55ac7bc79992c7d4b233d071939c1', href: "gwedit.aspx" }, "Payment Gateways")), h("li", { key: '5137604e78bec489ad57bfe22ddea43357d1671e', class: "ir-mega-menu-row" }, h("a", { key: 'b1fe36504779f17c097391993a1f5f2f1125fdc7', href: "channelmanager.aspx" }, "Channel Manager")))), h("li", { key: '013fa2b7bc6b1a485e58105c442969477f4f444e' }, h("ul", { key: '5e760ec97a310d86d94bab47648dfc53eef3ac8a', class: "ir-mega-menu-column" }, h("li", { key: '7e3fead2ffefb7d53fede8bfdb33d291d5dabe09', class: "ir-mega-menu-row title" }, "Main"), h("li", { key: 'b61c47c54ffc4e99125603be0af371abdef1535f', class: "ir-mega-menu-row" }, h("a", { key: '1cf79da9e3ddc08d80c88cd1bc7a646be49a6e65', href: "mpolist.aspx" }, "MPOs")), h("li", { key: '9389ab7e965f42cc77c20d759ad399be502ca041', class: "ir-mega-menu-row" }, h("a", { key: '58fb5766f966938b6afa4a5fe726d845c3a51944', href: "aclist.aspx" }, "Properties")), h("li", { key: '73c1884aa4da7a54478bbc8f1343990278715824', class: "ir-mega-menu-row" }, h("a", { key: '4e43a3ae79b5e7c94459e8b744d1c5f86c5e0087', href: "acbookinglist.aspx?MODE=MPO" }, "Bookings")), h("li", { key: 'f098268563e1c48dc5b25525a3391bc730a7c619', class: "ir-mega-menu-row" }, h("a", { key: 'cb35915dbf712c81b43bb443c2dee1a2f3393a32', href: "mpoaffiliateproperties.aspx" }, "MPO Affiliate Properties")), h("li", { key: '1d43957fe1b164b97e46014f8aeb6356a995ed13', class: "ir-mega-menu-row" }, h("a", { key: 'fda49be2c57cdfe6b829946d604a489ae9c327ea', href: "acratesallotment.aspx?VIEW_MODE=CV" }, "MPO Combined Inventory")), h("li", { key: '003f26a3fd1bc30b2062db1f175347ddf7581be9', class: "ir-mega-menu-row" }, h("a", { key: '07e95d12d0ba89858116bf32c144a62b51d0b635', href: "acbookinglist.aspx?VIEW_MODE=CV" }, "MPO Combined Bookings")), h("li", { key: 'cc22d68f78b1e5131bbb0f3128b95a426c090919', class: "ir-mega-menu-row" }, h("a", { key: '1258a09400d98f580e8023fae93cd26cc55c5063', href: "Acmemberlist.aspx?VIEW_MODE=CV" }, "MPO Combined Guests")), h("li", { key: '14176ae63110d01482efa5e4c80d27fff329415d', class: "ir-mega-menu-row" }, h("a", { key: '422cb432541c6526d8801f39221fa0f1f5e7e241', href: "mpobillingreport.aspx" }, "MPO Billing Report")), h("li", { key: '0921b89c9d49de6a8fb4e77aa4c9f1de264b11ef', class: "ir-mega-menu-row" }, h("a", { key: 'a53e7adf036f63102af2cec872cfaad80a2a7c6f', href: "Acmemberlist.aspx" }, "Guests")), h("li", { key: 'c3f5cd5704c45703e9a488d7c3e8cdd8aaf2155e', class: "ir-mega-menu-row" }, h("a", { key: 'af8ff4c0da5e2dcb3cac8bdbf1cc6fe7413c0aa7', href: "acbookinglist.aspx" }, "Bookings")), h("li", { key: '3c10213f5f7001c75c794cda8f001974ac26705d', class: "ir-mega-menu-row" }, h("a", { key: 'db324682708715dc5500e48052ddc25f62640f1e', href: "billing.aspx" }, "Billing")))), h("li", { key: '5c56038ce96e41779c29f41f09cf98a965c7167e' }, h("ul", { key: '63a44c6a7d75826db559814d86259aed55462b21', class: "ir-mega-menu-column" }, h("li", { key: 'b18c30c0a5714d7f388594eef6aec553cb629209', class: "ir-mega-menu-row title" }, "Locations"), h("li", { key: '8a2fd85a162cf423942774f117179828fbae2138', class: "ir-mega-menu-row" }, h("a", { key: '26f8f3c96113360b6f5319d623b261ca5d225f24', href: "poicategoriesinline.aspx" }, "Types")), h("li", { key: '29a2c825e82db1512a967af93ecff658358a61eb', class: "ir-mega-menu-row" }, h("a", { key: 'e575841ab066f4a36873a425431e8ebf939b506b', href: "poilist.aspx" }, "List")))), h("li", { key: 'ac3abe8f83bb834c5546b4fa6f1a0dd630de9fd1' }, h("ul", { key: '1022334327527f78424cd57df87c8f46e6a1730d', class: "ir-mega-menu-column" }, h("li", { key: 'ea3051df3af1cb5796d09912cc0aecd71e70c389', class: "ir-mega-menu-row title" }, "Referrers"), h("li", { key: '40dd7b1cbd044b2e3c2636e8565d5073a6e58552', class: "ir-mega-menu-row" }, h("a", { key: '0a17825facdb7b5df645a380dfc23ee548b92ba8', href: "affiliatelist.aspx" }, "Affiliates")), h("li", { key: '9de71fa44a338bfbb36d7efd9631bec29d66b790', class: "ir-mega-menu-row" }, h("a", { key: '1327902a49485e2ac98665417edc82f30e26d3b9', href: "travelagentslist.aspx" }, "Travel Agents ...NOT USED")))))), h("li", { key: 'f31ff18b60454610ec6284e2d270cd531755d465', class: "nav-item" }, h("a", { key: '0ce0ed03db2107827a835bd764a31ca5d066b4d6', href: "#", class: "nav-link" }, "b")), h("li", { key: '709f0e2ec9b6bbecac7cf5a0159e27d5b53c3ddf', class: "nav-item" }, h("a", { key: '37eb334cc8334572108e7a8bccd756c232e21bcc', href: "#", class: "nav-link" }, "c")), h("li", { key: 'fe7797e810ab54425a827423f37a9258d4b0f200', class: "nav-item" }, h("a", { key: 'c223e69f69b23563d2e98b8836ac6d7bc10b5d2d', href: "#", class: "nav-link" }, "d")), h("li", { key: 'fb2d9e8bfd19156645147f6fe0422f9e9ce8a6e3', class: "nav-item" }, h("div", { key: 'a7580ee0b193ea3aad68261f440145b9508a08c1', class: "d-flex align-items-center justify-content-center", style: { marginTop: '2px' } }, h("ir-notifications", { key: '3d43ec58e857949916c8fe0e5632fb93be85a13e', notifications: this.notifications }))))), h("div", { key: 'ec8e5108ba7cc78dbc5dc8e8eb3539c3070f761c', class: `mobile-menu ${this.isMobileMenuOpen ? 'active' : ''}` }, h("div", { key: '6bf7a0c126576ca44ed4fe3645d2836f99ffc3c2', class: "mobile-menu-header" }, h("div", { key: 'ff385158a5896801726817b3506c6d87464b1c1b', class: "hotel-name" }, "Hotel Name"), h("button", { key: '816d6f9978e9e927d86414d866eb952e34c2acca', class: "close-menu", onClick: () => this.toggleMobileMenu() }, "\u00D7")), h("div", { key: 'ef03ff87a3c8f8ca41d26bb1637a9386402d0800', class: "mobile-search" }, h("ir-m-combobox", { key: '60444bad761a66544b07cb2a319e84456862b7c3', placeholder: "Search...", dataMode: "static", options: this.staticOptions, onOptionChange: this.handleStaticOptionChange })), h("ac-pages-menu", { key: '93eee6ecd2d5f140dc17a5e537513035064390c4', location: "sheet", "onLink-clicked": async (e) => {
                await sleep(1000);
                window.location.href = e.detail.target.href;
            }, pages: this.pages }))), h("div", { key: '01b7e13a9408be42e9d63415360e6af2202c4ac1', class: "submenus d-none d-md-block" }, h("ac-pages-menu", { key: 'a6c54fbea979261885020458b25cc29d34a156ca', pages: this.pages }))), h("section", { key: 'e010b7c59d70c167321ee36a8c81bb935c00fc56', class: "p-2" }, h("div", { key: '545373a6f6267fac15a4547a3c4d178ab77e27c7', class: "row g-3" }, h("div", { key: '00e1e0c0c2c523fddffb9a8715453c3306b878e1', class: "col-md-3" }, h("h5", { key: '6673f1373b91a4d7e5ec2998bc42656fccf3abf8' }, "Static Options Example"), h("ir-m-combobox", { key: 'aa8c950d89ddb453909d5b6a10a4dd3c496f2aa1', placeholder: "Select an option...", dataMode: "static", options: this.staticOptions, onOptionChange: this.handleStaticOptionChange }, h("svg", { key: '2ff8f57a4dd4c120de8cfd64b6a979e46e3a2e2a', xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 640 640", slot: "prefix" }, h("path", { key: 'e954f9341ad14229bc9fec4c103883022eecf5ce', d: "M480 272C480 317.9 465.1 360.3 440 394.7L566.6 521.4C579.1 533.9 579.1 554.2 566.6 566.7C554.1 579.2 533.8 579.2 521.3 566.7L394.7 440C360.3 465.1 317.9 480 272 480C157.1 480 64 386.9 64 272C64 157.1 157.1 64 272 64C386.9 64 480 157.1 480 272zM272 416C351.5 416 416 351.5 416 272C416 192.5 351.5 128 272 128C192.5 128 128 192.5 128 272C128 351.5 192.5 416 272 416z" }))), this.selectedStaticOption && h("p", { key: '30bf9e790822c4ee0c4b6134bf780e2171740d5e', class: "mt-2 text-muted" }, "Selected: ", this.selectedStaticOption.label)), h("div", { key: 'ad54689d0a18430decd886bcced12bb202c0101e', class: "col-md-3" }, h("h5", { key: 'b6f78c79449bf24361f016bdaa4c694304b32ad6' }, "External API - Countries"), h("ir-m-combobox", { key: 'cd6b8fc7e0d179be54f7237cdbb1e3af799f5c38', placeholder: "Search countries...", dataMode: "external", options: this.countryOptions, loading: this.isLoadingCountries, debounceDelay: 300, onSearchQuery: this.handleCountrySearch, onOptionChange: this.handleCountryChange }), this.selectedCountry && h("p", { key: 'bf135717fd4b27ba34380fb47abbcb43c1933d76', class: "mt-2 text-muted" }, "Selected: ", this.selectedCountry.label)), h("div", { key: 'c1d6735220260f0ef786b2fc167a9ae5effef41c', class: "col-md-3" }, h("h5", { key: 'bed5028a863e20974a07d9688314c270203cf4b4' }, "Custom Dropdown Content"), h("ir-m-combobox", { key: '49aa35b66d3b4d187ed0a1c43c9150ce11c60e82', class: "custom-width", ref: el => (this.customComboboxRef = el), placeholder: "Search with custom dropdown...", dataMode: "external", options: this.customOptions, loading: this.isLoadingCustom, useSlot: true, debounceDelay: 500, onSearchQuery: this.handleCustomSearch, onOptionChange: this.handleCustomOptionChange }, h("div", { key: '9e0747221d4905052f0b99d565db34a74cf1facd', slot: "dropdown-content" }, this.isLoadingCustom && h("div", { key: 'cdabd05a48c2442f4a5b329a9bfc967ef85e4a51', class: "dropdown-item" }, "\uD83D\uDD04 Loading custom results..."), !this.isLoadingCustom && this.customOptions.length === 0 && h("div", { key: 'e720688834917d7353aa3e017e4b1cef77576c28', class: "dropdown-item" }, "\uD83D\uDD0D Type to search..."), !this.isLoadingCustom &&
            this.customOptions.map((option, index) => (h("div", { key: index, class: "dropdown-item d-flex align-items-center", "data-option": option.value, "data-label": option.label, onClick: () => this.handleCustomOptionClick(option), onMouseEnter: e => {
                    const element = e.target;
                    const slotIndex = element.getAttribute('data-slot-index');
                    if (slotIndex && this.customComboboxRef) {
                        this.customComboboxRef.focusedIndex = parseInt(slotIndex);
                    }
                }, style: { cursor: 'pointer' } }, h("span", { class: "me-2" }, "\u2B50"), h("div", null, h("div", { class: "fw-bold" }, option.label), h("small", { class: "text-muted" }, "Custom option with ID: ", option.value))))))), this.selectedCustomOption && h("p", { key: '396eb3ae51151b06b73d8d8c69683d7227adf1c1', class: "mt-2 text-muted" }, "Selected: ", this.selectedCustomOption.label))), h("div", { key: '2a9da3c0a8ac4867fd4f1e50c810646bcabc33b5', class: 'd-flex align-items-center my-1', style: { gap: '1rem' } }, h("button", { key: '87d249471ffb18d8a4b316f501aa832961f987ea', class: "btn btn-primary", onClick: () => (this.notificationCount += 1) }, "+"), h("button", { key: '68ef06b01540c24c9d486316e99d91d0d0e6e811', class: "btn btn-primary", onClick: () => (this.notificationCount -= 1) }, "-")), h("ir-input-text", { key: '80b547abf8dab3ac575f081d3d0401021e6ff109', variant: "floating-label", class: "my-text-input", label: "First name" }, h("svg", { key: '14573a2686cfddebe84dcf2a4e961011b491518f', xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 640 640", slot: "prefix" }, h("path", { key: 'b70f0bec7c5d18f746d1d11c19382a8ecc80c2f2', d: "M480 272C480 317.9 465.1 360.3 440 394.7L566.6 521.4C579.1 533.9 579.1 554.2 566.6 566.7C554.1 579.2 533.8 579.2 521.3 566.7L394.7 440C360.3 465.1 317.9 480 272 480C157.1 480 64 386.9 64 272C64 157.1 157.1 64 272 64C386.9 64 480 157.1 480 272zM272 416C351.5 416 416 351.5 416 272C416 192.5 351.5 128 272 128C192.5 128 128 192.5 128 272C128 351.5 192.5 416 272 416z" })), h("svg", { key: 'a64c43e1d16d089ee1a11640b60e2df367865324', slot: "suffix", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 640 640" }, h("path", { key: '7f25eebb9f9b00865dcbbed49ab0aab6e499757e', d: "M264 112L376 112C380.4 112 384 115.6 384 120L384 160L256 160L256 120C256 115.6 259.6 112 264 112zM208 120L208 544L432 544L432 120C432 89.1 406.9 64 376 64L264 64C233.1 64 208 89.1 208 120zM480 160L480 544L512 544C547.3 544 576 515.3 576 480L576 224C576 188.7 547.3 160 512 160L480 160zM160 544L160 160L128 160C92.7 160 64 188.7 64 224L64 480C64 515.3 92.7 544 128 544L160 544z" }))), h("ir-select", { key: 'f42294a9b4765c177a855bc66391d09b1c0a7715', "floating-label": true, label: "Hello", data: [{ value: '1', text: '1' }] }), h("div", { key: '7b57e128c13b86ee124a0f00c94fc66ec92a7bdc', class: "my-2" }), h("ir-select", { key: 'be5f8526f612acd173d7f0fe1702050ed64f01b4', label: "Hello", data: [{ value: '1', text: '1' }] }), h("div", { key: 'a050a041ef3212f2d3cb42fbd9d4763b45f4f167', class: "my-2" }), h("ir-select", { key: '80606e9eb6d8610666f47dd0d68b34a5adc0fa71', data: [{ value: '1', text: '1' }] }), h("div", { key: '42f010e35895cd549c48c9eb8e5adea00efc4541', class: "card p-1" }, [
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