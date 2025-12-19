import { r as registerInstance, h, H as Host } from './index-b3dce66a.js';
import { T as sleep } from './utils-ebd57799.js';
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
        return (h(Host, { key: '71306233f8c44857fc5c87177c52a1d4c6fd6fa2' }, h("nav", { key: 'c3aac269884406be3e7772f13d39b363c5855a1e', class: "modern-navbar" }, h("span", { key: 'b22b2baf7c0556c78812fd1c61155e1e85f0aba4', class: "overdue-banner" }, "Overdue $300"), h("div", { key: '64a4b932c0f4c194c0381da9c876cdb3d776cb33', class: "navbar-container" }, h("div", { key: 'f7939667f5fdd33d278eec818492b6cb7f380af0', class: "navbar-left" }, h("button", { key: '55d912f4d9577133a7c533f557d703d5d9df0562', class: "mobile-menu-toggle d-md-none", onClick: () => this.toggleMobileMenu() }, h("span", { key: '4340b3b5d0575f533d1cb5f7f7b66ddc41ff4b85', class: "hamburger-icon" }, h("span", { key: '7a16e2f221dba6de3a30b50471f9b4d42f0084de' }), h("span", { key: '7cd321169e2e764e0d403d230d32af891e15bf13' }), h("span", { key: 'd05af0ed6c538710a3829564f509723fc29375c6' }))), h("div", { key: '19a7b75aa9faae28c88179dc3b9c9b32bb7b6862', class: "navbar-brand" }, "Logo"), h("div", { key: '44bbce00a611e543b0e8a02b49ced48375bf2da0', class: "d-none d-md-flex " }, h("ir-m-combobox", { key: '0b78555911a2854f777f0357468618351b229e7c', style: { '--ir-combobox-width': 'max-content' }, placeholder: "Find property", dataMode: "static", options: this.staticOptions, onOptionChange: this.handleStaticOptionChange })), h("div", { key: 'bfab771d8c3a4bd67a95e47c653db8b474fd26b1', class: "hotel-name d-none d-md-block" }, "Hotel Name"), h("div", { key: '6c7d77ff3e1c6aa16a24d09572089475b3c6cc15', class: "ml-auto d-md-none" }, h("ir-notifications", { key: 'ebb12df3b11e03a7c82581327ea1475480954be1', notifications: this.notifications }))), h("div", { key: '32e1ae0e78f26584c76eed4da9f8cc3cb6dbf81c', class: "navbar-center d-none d-md-flex flex-fill mx-auto" }, h("ir-m-combobox", { key: '0efd70d26f4779bd0cabbe02ba9c93b8df2d96f1', placeholder: "Search...", dataMode: "static", options: this.staticOptions, onOptionChange: this.handleStaticOptionChange })), h("div", { key: '25ceacd69bad970d4f1cdd7fc5ecbd7dfc9a88f3', class: "navbar-right" }, h("ul", { key: 'e0d37dbb302aae49f4f4ec9e0051f20438ff6a24', class: "nav-items d-none d-md-flex" }, h("li", { key: '1b70434c7b985eca63d13442b0f2937556267950', class: "nav-item dropdown" }, h("a", { key: 'a5d6cda77a77783a7ef9dbc7ceae884f2202e3f9', "data-reference": "parent", href: "#", role: "button", class: "nav-link", "data-toggle": "dropdown", "aria-expanded": "false" }, "a"), h("ul", { key: 'e95646ece1160421ec1530220082e64b0de6358e', class: `ir-mega-menu mx-auto dropdown-menu-right dropdown-menu    w-100 shadow-sm` }, h("li", { key: '4aaf83895d0a43e13e898f31da2ae79754e1914d' }, h("ul", { key: 'e9af9ed98310a975074b3cbace80eee8f7c9b4da', class: "ir-mega-menu-column" }, h("li", { key: '5ac8cb5493f6f86cf03a6a19c7a849cebee45290', class: "ir-mega-menu-row title" }, "Parameters"), h("li", { key: '4caf11eb4bb2c789d3c19ca4a0e48bbcede871ab', class: "ir-mega-menu-row" }, h("a", { key: 'c403c2a1dc66ef9e3b2989874b0c912b26d5a583', href: "userinline.aspx" }, "Users List")), h("li", { key: 'dbbee8cdbcbfdf2d8a9ef8af2dce491cd0cf8db6', class: "ir-mega-menu-row" }, h("a", { key: 'e3ce9a238241dbbd77b1f107f899a9d1880df567', href: "languageinline.aspx" }, "System Languages")), h("li", { key: 'e07767547ca40ca72f9a52537f0e598b3cee298e', class: "ir-mega-menu-row" }, h("a", { key: 'a873eefe48c755d1b19c18cb71faa540662a5752', href: "countryinline.aspx" }, "Countries")), h("li", { key: '5dea8718641957f45fa30fe83b7fa53e2bccf13c', class: "ir-mega-menu-row" }, h("a", { key: '5fa6daa2d8d9936e148eb55bc202e4f8bdcb663d', href: "level2inline.aspx" }, "Country Level 2")), h("li", { key: 'aa2a433d2ce687822036b810997213490d66d983', class: "ir-mega-menu-row" }, h("a", { key: 'b7a20bc6b6deace603497381f5a1c76954b81b1e', href: "cardinline.aspx" }, "Credit Cards")), h("li", { key: '54c1b2c6ec34f12fd40bc7137edfe656bc3b6210', class: "ir-mega-menu-row" }, h("a", { key: '47a50044f1c0680c8f8c1da7a364795926bb6311', href: "hotel_chaininline.aspx" }, "Hotel Chains")), h("li", { key: '146f624778d38efedfd13459504d7966bc6ee2a6', class: "ir-mega-menu-row" }, h("a", { key: '964c5bd5082e040602a4518241ca9946b9b5cf6c', href: "currencyinline.aspx" }, "Currencies")), h("li", { key: '4f2892c63fc022ede4029bbf8242d24ddae388c4', class: "ir-mega-menu-row" }, h("a", { key: '6c395ff38cee3a44a3b817421e655861c2fcc991', href: "amenityinline.aspx" }, "Amenities")), h("li", { key: 'e4c63802795106c4474030bdf17356efb4aaa7d3', class: "ir-mega-menu-row" }, h("a", { key: 'e8e058ba8d91c099a6e5410d802061af7cc26405', href: "foodinline.aspx" }, "Food")), h("li", { key: '8616ebbda450728823751ff08bfff7ce00db9e7c', class: "ir-mega-menu-row" }, h("a", { key: '19690205146c16a52e8ab6ce281bc565184881ba', href: "beddinginline.aspx" }, "Bedding")), h("li", { key: '350154e66509064becd2cdb9e1b1f3e931ef892d', class: "ir-mega-menu-row" }, h("a", { key: '3a36ebbf519818d2753b69cbbbe526136a16652a', href: "setupinline.aspx" }, "Setup Table")), h("li", { key: '262b5158f1b81e88a17a737bbf38d3d8e8be1e63', class: "ir-mega-menu-row" }, h("a", { key: '945d85fed534c258c1f0b300dc7424eefbd04c5c', href: "gwedit.aspx" }, "Payment Gateways")), h("li", { key: 'bef320a9abaf67ea8abc4bdc9b04c37c71e680f4', class: "ir-mega-menu-row" }, h("a", { key: 'cabc525f99fe99616a3b615c1b05791e8cc5efbf', href: "channelmanager.aspx" }, "Channel Manager")))), h("li", { key: '2e1969691609688421dce31f2487502c9e055522' }, h("ul", { key: '39f78b0ef3306ca1280a0d93021d1b1165f18765', class: "ir-mega-menu-column" }, h("li", { key: '04e0f81fef716f5561792aa5f4f45ecf228de346', class: "ir-mega-menu-row title" }, "Main"), h("li", { key: '24c71e79c77078f77bb0c0ff91c4f180d96f96e3', class: "ir-mega-menu-row" }, h("a", { key: 'db9d9b4e742cd4a75c9d8b387c8ee2b11d51454a', href: "mpolist.aspx" }, "MPOs")), h("li", { key: 'd1500d25619a21ee79d48043087f5d93b2109c41', class: "ir-mega-menu-row" }, h("a", { key: '212cb1b1686d8f4d35746d805aabce3898f86aaf', href: "aclist.aspx" }, "Properties")), h("li", { key: '5f2b30f28a06b50d00b3ef8b546de45981a69a94', class: "ir-mega-menu-row" }, h("a", { key: 'a810112a712043d5a57c72bcd2b7ee9a9f76a025', href: "acbookinglist.aspx?MODE=MPO" }, "Bookings")), h("li", { key: 'cec0cd9d85bb023d5a5cee3aa620d8324048ec1a', class: "ir-mega-menu-row" }, h("a", { key: '5b88d3c2d30588efa5699637cde91810c8d23a36', href: "mpoaffiliateproperties.aspx" }, "MPO Affiliate Properties")), h("li", { key: 'b13f03f6dc716afde0ddaadae176731b76f79585', class: "ir-mega-menu-row" }, h("a", { key: 'eb3464f75e45a2b7865f752aebc51b21203a8f60', href: "acratesallotment.aspx?VIEW_MODE=CV" }, "MPO Combined Inventory")), h("li", { key: '86b6bf109c9923468f5cfe22f2936002306a00ad', class: "ir-mega-menu-row" }, h("a", { key: 'edc9d9004c29eaad71c072b4417b93de3055d6be', href: "acbookinglist.aspx?VIEW_MODE=CV" }, "MPO Combined Bookings")), h("li", { key: 'e341474e2dbf8cab99b3f7218ff5bd10a7b404b9', class: "ir-mega-menu-row" }, h("a", { key: 'a5519a82c226cb7466129303c24796fc7c86e893', href: "Acmemberlist.aspx?VIEW_MODE=CV" }, "MPO Combined Guests")), h("li", { key: '52a8619a10a7053d81d647d20ec6104554ea2cbd', class: "ir-mega-menu-row" }, h("a", { key: '0fe5eba304742fc0e168f277f49ffff08c4fa3cd', href: "mpobillingreport.aspx" }, "MPO Billing Report")), h("li", { key: 'a1652e55f8bfbf37f1a3d1d55a1b1c1decb29b4a', class: "ir-mega-menu-row" }, h("a", { key: '0df7ec55bda010ba652b667e86c173d7d2deadf8', href: "Acmemberlist.aspx" }, "Guests")), h("li", { key: 'f6a59460c8e02cd3863668b98c79c63c8af08d7a', class: "ir-mega-menu-row" }, h("a", { key: 'bb166d1657aed9b94e47e5a361b2b8f9b0c45285', href: "acbookinglist.aspx" }, "Bookings")), h("li", { key: '36d857d7d59c7b997221caba668a441a6ffe93ee', class: "ir-mega-menu-row" }, h("a", { key: '9d35ff271f9dbac5e3c73d3bc6193a411454c5e5', href: "billing.aspx" }, "Billing")))), h("li", { key: '9da8cc8eb5c565f13d9c98882d826747aae6a0e1' }, h("ul", { key: '34df68729e243a72ef178fae22b67c3af5b6a2c6', class: "ir-mega-menu-column" }, h("li", { key: '140c2cb86ab98745a0422c278e8e5701ca0b3637', class: "ir-mega-menu-row title" }, "Locations"), h("li", { key: '889586d05449f95ef9bbe6c1657d92d1f3d539e2', class: "ir-mega-menu-row" }, h("a", { key: 'b6fa63164169976303b1edbb0f16fcb3cbe25988', href: "poicategoriesinline.aspx" }, "Types")), h("li", { key: 'db535b93d3a69aaee26f6a7b1af424dd9e5f6d30', class: "ir-mega-menu-row" }, h("a", { key: '7d5c32ed2d5f5bf693112b16db478dbf48cb9d07', href: "poilist.aspx" }, "List")))), h("li", { key: '76985f687f4f466b79b8a8d502636146b3b4b93e' }, h("ul", { key: '0e8f92f0c1f4a7de9cb21da6e5320f90fe0cd489', class: "ir-mega-menu-column" }, h("li", { key: 'f7b1eeedfd7793c422faf2e0432c7489f705614b', class: "ir-mega-menu-row title" }, "Referrers"), h("li", { key: '7dcd8aebcd8d82ea4f74eabe86fa5a93afd8e04f', class: "ir-mega-menu-row" }, h("a", { key: '6b9b7b08db903604ffdc34b5b9f1e416ca08d893', href: "affiliatelist.aspx" }, "Affiliates")), h("li", { key: 'e6c0a4a9917b3c51b6a8a8568af943a375b8c60b', class: "ir-mega-menu-row" }, h("a", { key: 'f43358bcf219651a40efa302dcdf5fe3ee9e346e', href: "travelagentslist.aspx" }, "Travel Agents ...NOT USED")))))), h("li", { key: '8adc57fa80bc1886c5d389cfb39b5fde1bc3e745', class: "nav-item" }, h("a", { key: 'a9b34c39433969bfbdf9158b5d3944bc819b55c6', href: "#", class: "nav-link" }, "b")), h("li", { key: 'ec509edea8015a54f1d22fb6d7dd0813a5e775ef', class: "nav-item" }, h("a", { key: '543fa561f762a670e03f1a27eb081c5f1218a80a', href: "#", class: "nav-link" }, "c")), h("li", { key: '92bfc7f6d59b661842228bac4aeead0939d7cfaf', class: "nav-item" }, h("a", { key: '603739e451f8bfd34f1d12aa80bd014f2911d796', href: "#", class: "nav-link" }, "d")), h("li", { key: '31ac53fd722a9ef151a620f083198c920033653c', class: "nav-item" }, h("div", { key: '7ead10d70745cfb657e6a9507983c1a73d9d57ee', class: "d-flex align-items-center justify-content-center", style: { marginTop: '2px' } }, h("ir-notifications", { key: 'ca7f0c3a47551566995896c09624e16fba1da768', notifications: this.notifications }))))), h("div", { key: 'e9c39f7c36114dc8320c30ad059a77af715f5e3b', class: `mobile-menu ${this.isMobileMenuOpen ? 'active' : ''}` }, h("div", { key: '340b15d4f6fb422006d4864229f45a85d71facb9', class: "mobile-menu-header" }, h("div", { key: '1200b8826d2b3d05c6cd91cfbb8c6995ea0c2a7b', class: "hotel-name" }, "Hotel Name"), h("button", { key: '5ccb686eba8b33b4dbf1f38a3681e53299398612', class: "close-menu", onClick: () => this.toggleMobileMenu() }, "\u00D7")), h("div", { key: '455ebb312fd3ee8dfd09097723097d4bf6424648', class: "mobile-search" }, h("ir-m-combobox", { key: '9fd62e35a75fd90467d05d8ce3d07212d27c72e6', placeholder: "Search...", dataMode: "static", options: this.staticOptions, onOptionChange: this.handleStaticOptionChange })), h("ac-pages-menu", { key: 'a6f0f210b2aca80ff3e7e4ec7f5f3f16a6b16094', location: "sheet", "onLink-clicked": async (e) => {
                await sleep(1000);
                window.location.href = e.detail.target.href;
            }, pages: this.pages }))), h("div", { key: 'cdac52c70a0a2703bdc3c1b4e19efb38fd3813a5', class: "submenus d-none d-md-block" }, h("ac-pages-menu", { key: 'c9b62994f1a6b02e90d8370b815249655adff3f5', pages: this.pages }))), h("section", { key: '080fbe5fe5989856ae9214c7bb12fae88a03ef25', class: "p-2" }, h("div", { key: 'a59ca51dcfbda893752e3174697d4ab0b00740a1', class: "row g-3" }, h("div", { key: '4bf308df3ac3bae55fc6102ccec759d0ffd6b15f', class: "col-md-3" }, h("h5", { key: 'c4539acf5324ec3989435a0aa4767f8e510d1e4d' }, "Static Options Example"), h("ir-m-combobox", { key: '37b1798fbc33dc7ea783f504be4167e28309f1f9', placeholder: "Select an option...", dataMode: "static", options: this.staticOptions, onOptionChange: this.handleStaticOptionChange }, h("svg", { key: '4eba1933467af82a43a0355f543e697407663753', xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 640 640", slot: "prefix" }, h("path", { key: '6cbae27f58fca07b1c541e41deeec9150d3f2646', d: "M480 272C480 317.9 465.1 360.3 440 394.7L566.6 521.4C579.1 533.9 579.1 554.2 566.6 566.7C554.1 579.2 533.8 579.2 521.3 566.7L394.7 440C360.3 465.1 317.9 480 272 480C157.1 480 64 386.9 64 272C64 157.1 157.1 64 272 64C386.9 64 480 157.1 480 272zM272 416C351.5 416 416 351.5 416 272C416 192.5 351.5 128 272 128C192.5 128 128 192.5 128 272C128 351.5 192.5 416 272 416z" }))), this.selectedStaticOption && h("p", { key: 'd3fea1936e28794b4f654b06e261b4108275f55f', class: "mt-2 text-muted" }, "Selected: ", this.selectedStaticOption.label)), h("div", { key: 'a3e6d172415d53fa8ca5708e218fda78031201c7', class: "col-md-3" }, h("h5", { key: '083a50742f4dc4d47d1f94fa328de82ed91229d0' }, "External API - Countries"), h("ir-m-combobox", { key: '2bd0876b7e8dc8eb5a150ef79727218320e24b32', placeholder: "Search countries...", dataMode: "external", options: this.countryOptions, loading: this.isLoadingCountries, debounceDelay: 300, onSearchQuery: this.handleCountrySearch, onOptionChange: this.handleCountryChange }), this.selectedCountry && h("p", { key: 'e73fe865e74dcea3cdf05df0ccfa296b8d51af36', class: "mt-2 text-muted" }, "Selected: ", this.selectedCountry.label)), h("div", { key: 'c47ef2430d27ab48b6adc11e6253138a77a46d4e', class: "col-md-3" }, h("h5", { key: '66f650680774f30cfd48201a70124078f95e1de8' }, "Custom Dropdown Content"), h("ir-m-combobox", { key: 'ce703a7024ccf6af4a58ff7d8e0a2e1ce34521b2', class: "custom-width", ref: el => (this.customComboboxRef = el), placeholder: "Search with custom dropdown...", dataMode: "external", options: this.customOptions, loading: this.isLoadingCustom, useSlot: true, debounceDelay: 500, onSearchQuery: this.handleCustomSearch, onOptionChange: this.handleCustomOptionChange }, h("div", { key: '445769d87bc641a43ea643c9561ecb594f5ca794', slot: "dropdown-content" }, this.isLoadingCustom && h("div", { key: '0ea9d870bf2ac6e090b393945dae1e955bbc0920', class: "dropdown-item" }, "\uD83D\uDD04 Loading custom results..."), !this.isLoadingCustom && this.customOptions.length === 0 && h("div", { key: '789cb315552c50449d377acb314c35c40056b790', class: "dropdown-item" }, "\uD83D\uDD0D Type to search..."), !this.isLoadingCustom &&
            this.customOptions.map((option, index) => (h("div", { key: index, class: "dropdown-item d-flex align-items-center", "data-option": option.value, "data-label": option.label, onClick: () => this.handleCustomOptionClick(option), onMouseEnter: e => {
                    const element = e.target;
                    const slotIndex = element.getAttribute('data-slot-index');
                    if (slotIndex && this.customComboboxRef) {
                        this.customComboboxRef.focusedIndex = parseInt(slotIndex);
                    }
                }, style: { cursor: 'pointer' } }, h("span", { class: "me-2" }, "\u2B50"), h("div", null, h("div", { class: "fw-bold" }, option.label), h("small", { class: "text-muted" }, "Custom option with ID: ", option.value))))))), this.selectedCustomOption && h("p", { key: 'd5d28aad70d457a2d7c97bbd241d4b7c107ee8e0', class: "mt-2 text-muted" }, "Selected: ", this.selectedCustomOption.label))), h("div", { key: 'd0407871c34f7acaef07b747d5e6ef25c8301896', class: 'd-flex align-items-center my-1', style: { gap: '1rem' } }, h("button", { key: 'e6f445477b49625036ada1e06d15923ddffb5c41', class: "btn btn-primary", onClick: () => (this.notificationCount += 1) }, "+"), h("button", { key: '641fde65fa106fc73f6a6f9a6f235475a13e81d9', class: "btn btn-primary", onClick: () => (this.notificationCount -= 1) }, "-")), h("ir-input-text", { key: 'f984052af404a64284c573cb056824f9a072aaf8', variant: "floating-label", class: "my-text-input", label: "First name" }, h("svg", { key: '6087aa314b8cfdeed2071c6ee46993c71d844c98', xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 640 640", slot: "prefix" }, h("path", { key: '29ab1920abf56e4be13f485e8dbd0bf68a81660d', d: "M480 272C480 317.9 465.1 360.3 440 394.7L566.6 521.4C579.1 533.9 579.1 554.2 566.6 566.7C554.1 579.2 533.8 579.2 521.3 566.7L394.7 440C360.3 465.1 317.9 480 272 480C157.1 480 64 386.9 64 272C64 157.1 157.1 64 272 64C386.9 64 480 157.1 480 272zM272 416C351.5 416 416 351.5 416 272C416 192.5 351.5 128 272 128C192.5 128 128 192.5 128 272C128 351.5 192.5 416 272 416z" })), h("svg", { key: '035b62855f4a7083bd67aa09e4229f42392cecfd', slot: "suffix", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 640 640" }, h("path", { key: '868bd92d5ffecb6ad219ed787d5809c8350eae60', d: "M264 112L376 112C380.4 112 384 115.6 384 120L384 160L256 160L256 120C256 115.6 259.6 112 264 112zM208 120L208 544L432 544L432 120C432 89.1 406.9 64 376 64L264 64C233.1 64 208 89.1 208 120zM480 160L480 544L512 544C547.3 544 576 515.3 576 480L576 224C576 188.7 547.3 160 512 160L480 160zM160 544L160 160L128 160C92.7 160 64 188.7 64 224L64 480C64 515.3 92.7 544 128 544L160 544z" }))), h("ir-select", { key: '78bd80f59c2881bf500000af1cad0e049dad9f41', "floating-label": true, label: "Hello", data: [{ value: '1', text: '1' }] }), h("div", { key: '8070cc6b3bca7e86d6ea44974d2ca765aad5caa7', class: "my-2" }), h("ir-select", { key: 'a9bbb5988869bcd3e36c80e5434158c03d40efe5', label: "Hello", data: [{ value: '1', text: '1' }] }), h("div", { key: '7e3f81fdf85546980a10e8333f866a94eddfeed7', class: "my-2" }), h("ir-select", { key: '30ed490cab32a3f600ff7c2cc6a506264e25dd8a', data: [{ value: '1', text: '1' }] }), h("div", { key: '402c8ef1b3cb2a1e084f42df0a98c2f5a9f5e8ee', class: "card p-1" }, [
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