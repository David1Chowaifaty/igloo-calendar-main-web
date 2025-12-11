import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';
import { T as sleep } from './utils.js';
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
        return (h(Host, { key: '3b248848d1d2ff000dfad92bda82131f5e09c4a1' }, h("nav", { key: '3110696a6c56f3de764816b44e8a0abd9dbbf4db', class: "modern-navbar" }, h("span", { key: '42249e3dd2cd08297d9282467d72f22eb70368d5', class: "overdue-banner" }, "Overdue $300"), h("div", { key: '509b11ca4541bc894db38c7271c2d5c757787fb1', class: "navbar-container" }, h("div", { key: '172839af8484722d83ffb10d5e496083813998d9', class: "navbar-left" }, h("button", { key: '873624707148964c69a93fcc7bc070fdf65ab65a', class: "mobile-menu-toggle d-md-none", onClick: () => this.toggleMobileMenu() }, h("span", { key: '9d2cd242117c4f3cc961799f81710c5f10a017d8', class: "hamburger-icon" }, h("span", { key: 'f4a1708651f4204836234bf6f6f6f070d097c8d5' }), h("span", { key: '9d259b1fe8f49f13d9ee3a15bd1f85c52dd373ff' }), h("span", { key: 'e1764a03983d3c1f270ec6799712baba58743623' }))), h("div", { key: 'bad69da069c829bb5f865e4cb1d8d716fa392c99', class: "navbar-brand" }, "Logo"), h("div", { key: '593e908a3f80daeb6a5709838355d239ac69aadb', class: "d-none d-md-flex " }, h("ir-m-combobox", { key: '88aeb659c755b138df5120b17d4a66092a5a30d4', style: { '--ir-combobox-width': 'max-content' }, placeholder: "Find property", dataMode: "static", options: this.staticOptions, onOptionChange: this.handleStaticOptionChange })), h("div", { key: 'd3b5268c5284eb0d628ec7862f3c06af11add983', class: "hotel-name d-none d-md-block" }, "Hotel Name"), h("div", { key: '49970c8386074b0db242375e2b615fbb607a0e3e', class: "ml-auto d-md-none" }, h("ir-notifications", { key: 'f9fa2ae60278b19a752ef9d71536173485c734a9', notifications: this.notifications }))), h("div", { key: 'f9b713e7947f269f74e2cfee4cb0d5ee88e80331', class: "navbar-center d-none d-md-flex flex-fill mx-auto" }, h("ir-m-combobox", { key: '765e0cdb5334db1226692cb28b8fd239a9ceee21', placeholder: "Search...", dataMode: "static", options: this.staticOptions, onOptionChange: this.handleStaticOptionChange })), h("div", { key: 'ef6963c77c474f7c41d95aea2476601664bbd68f', class: "navbar-right" }, h("ul", { key: '2dc60b51a08a07ba613464eab8d171468b51fd5e', class: "nav-items d-none d-md-flex" }, h("li", { key: 'fcd209a4f8b17674dea8f8056e9eaf128dd78750', class: "nav-item dropdown" }, h("a", { key: 'cfd3cba6078853b859edb669bfbef1afe84e45b2', "data-reference": "parent", href: "#", role: "button", class: "nav-link", "data-toggle": "dropdown", "aria-expanded": "false" }, "a"), h("ul", { key: '40c3c12577c5ae94bbb3b07f8f908c9e5d7d80d4', class: `ir-mega-menu mx-auto dropdown-menu-right dropdown-menu    w-100 shadow-sm` }, h("li", { key: 'fc328a70708618098cc0f4967a429d48db20e152' }, h("ul", { key: 'd4f317a853d56fcc21491b2a826f25846483fb9a', class: "ir-mega-menu-column" }, h("li", { key: 'be1ec7cac7d2221844eb0a4461c00823c4239d22', class: "ir-mega-menu-row title" }, "Parameters"), h("li", { key: 'f58fe3b994eb0d9bf2f4c1bae89c8bab169dd6fb', class: "ir-mega-menu-row" }, h("a", { key: '27745209b2c9e14f527f0c5c96b28e343b686833', href: "userinline.aspx" }, "Users List")), h("li", { key: '7166c6b6bf99ca5cd15a55fbabfe6258867867b0', class: "ir-mega-menu-row" }, h("a", { key: 'd544524529a4caa1c4ea24a36d1b99d2103b138c', href: "languageinline.aspx" }, "System Languages")), h("li", { key: '4760fca08addb0d35742c9f981cf0ad7b3c1ffa5', class: "ir-mega-menu-row" }, h("a", { key: 'e82d9d7acb3f2555d7b6027473c85af9a4aaa9ea', href: "countryinline.aspx" }, "Countries")), h("li", { key: '595e442b4bbcde8f08ed85d7c0d390f4b6fbe986', class: "ir-mega-menu-row" }, h("a", { key: '56bd39ea1ea04f8790dfaa9dfa933b2fe25affcf', href: "level2inline.aspx" }, "Country Level 2")), h("li", { key: '8a3be68614668e12942b85f0a8097748c526ae4b', class: "ir-mega-menu-row" }, h("a", { key: '7719635404c33b07f66016c83337779f4e1c2616', href: "cardinline.aspx" }, "Credit Cards")), h("li", { key: '0316752b55b5ab6746cbb9da4fb9567233797464', class: "ir-mega-menu-row" }, h("a", { key: '15794b511d591d9f6ae4d5e8e8c5cdf3125ab118', href: "hotel_chaininline.aspx" }, "Hotel Chains")), h("li", { key: 'bd2dc14b583e2bfd435f58d61eca03144561ed13', class: "ir-mega-menu-row" }, h("a", { key: '2f0250fa05444a0b78f11ff52a9358871900b0cf', href: "currencyinline.aspx" }, "Currencies")), h("li", { key: '5839659cc6e87904d046fe4678e66487faa61efc', class: "ir-mega-menu-row" }, h("a", { key: '839fb68df244662d389da683c48e3fb28cd9defa', href: "amenityinline.aspx" }, "Amenities")), h("li", { key: '4f3cdc6fe9209837d6f082976286445436c9c364', class: "ir-mega-menu-row" }, h("a", { key: '2ac51fb32ec906cac6c74bce0a067bebb7435b88', href: "foodinline.aspx" }, "Food")), h("li", { key: '3beec130531857a1ed6fe2af480b2a6844046a6c', class: "ir-mega-menu-row" }, h("a", { key: 'c7b1310f73cea49b5b85d4459315992f7eaea2a9', href: "beddinginline.aspx" }, "Bedding")), h("li", { key: '084bc3f0b971ed04e386bef49cf175c266b4884f', class: "ir-mega-menu-row" }, h("a", { key: '500113ef8c9d9454e2c2855d2db5db5a89740eb9', href: "setupinline.aspx" }, "Setup Table")), h("li", { key: '1a46be56b3712bdf5f80864565ad0bb70fa02ad5', class: "ir-mega-menu-row" }, h("a", { key: '33a441a99ce6d2700df3c929d4d3d4e823553524', href: "gwedit.aspx" }, "Payment Gateways")), h("li", { key: 'ae69eab520a0052e8cbfddd090563e489235dedc', class: "ir-mega-menu-row" }, h("a", { key: 'cd4971f270cd8848ab728b5435f066f47ccf8246', href: "channelmanager.aspx" }, "Channel Manager")))), h("li", { key: '09bd971fc0741332a29632f25c821ffea4adc378' }, h("ul", { key: 'bc5ce4655030ddef072d80d29d7ec5ae763e40b3', class: "ir-mega-menu-column" }, h("li", { key: 'd476a12633483c0bfdb931005e827c649c5c0576', class: "ir-mega-menu-row title" }, "Main"), h("li", { key: '3bba68ce4555b80657daef2771150b7333dc086e', class: "ir-mega-menu-row" }, h("a", { key: '8d43ef66f71d04f581c58a600b167d64f0ebb800', href: "mpolist.aspx" }, "MPOs")), h("li", { key: '16813678912e8a864b0d2d131d40930e2bde341b', class: "ir-mega-menu-row" }, h("a", { key: '25ab5877b80f9d228429f70bf5d63e910f5e5ddb', href: "aclist.aspx" }, "Properties")), h("li", { key: 'ba2278cd6297ec250efc85bd1fbe4af72aa61072', class: "ir-mega-menu-row" }, h("a", { key: '540577fa14e379fc8bfd7e2895a60abbd8fb9d75', href: "acbookinglist.aspx?MODE=MPO" }, "Bookings")), h("li", { key: '75c618ff6de6e9a30c5911cbf9924b8366010d51', class: "ir-mega-menu-row" }, h("a", { key: '7cb82fda00a312995677fa54b65807eef9fa774f', href: "mpoaffiliateproperties.aspx" }, "MPO Affiliate Properties")), h("li", { key: '499ca4374fcd96dc44fdcb68fc653a887d79d872', class: "ir-mega-menu-row" }, h("a", { key: '010d12657bc9f691481b3b57260cd2690fed03a6', href: "acratesallotment.aspx?VIEW_MODE=CV" }, "MPO Combined Inventory")), h("li", { key: '0b987ca73d0c203a676711ecb9e4816d4f068831', class: "ir-mega-menu-row" }, h("a", { key: 'cf6b26c67e26c89f41c2e6ee52f3ac4bb8f8aa8c', href: "acbookinglist.aspx?VIEW_MODE=CV" }, "MPO Combined Bookings")), h("li", { key: 'd8b8be199190b1dfb5d1905e97928bd74d0bfe85', class: "ir-mega-menu-row" }, h("a", { key: 'dd679866672aa6540f435327a317c43acd575336', href: "Acmemberlist.aspx?VIEW_MODE=CV" }, "MPO Combined Guests")), h("li", { key: '3f462c9aa2356e84c85e928734879b9aeab2e633', class: "ir-mega-menu-row" }, h("a", { key: '07d4fd3c152e35f4df95d205b63775f6154f5051', href: "mpobillingreport.aspx" }, "MPO Billing Report")), h("li", { key: '1bc1aaf819e8c049f271da49da6dd424311eefcb', class: "ir-mega-menu-row" }, h("a", { key: '2f8de85b7f8950d5e76b8e1e3dc2c2ed6cd8c4e0', href: "Acmemberlist.aspx" }, "Guests")), h("li", { key: 'eef8900c399c6016787b86c04192eb538f68d6d8', class: "ir-mega-menu-row" }, h("a", { key: '032e77ec596cebd9fbf56634ecd8804fd3195679', href: "acbookinglist.aspx" }, "Bookings")), h("li", { key: '0ef6169d4a797dae57b169ab13f9e3aa78df24e8', class: "ir-mega-menu-row" }, h("a", { key: '97e5fd61015777a0f643e549431d71772eb9ce81', href: "billing.aspx" }, "Billing")))), h("li", { key: '2ee2eee38834649af16c4941b112316c83e5c9f4' }, h("ul", { key: '4b5f751a9c790ab41d47568f02daccb7863296e1', class: "ir-mega-menu-column" }, h("li", { key: '72ada6722e103f29b91a5dab516b3250e7a1e455', class: "ir-mega-menu-row title" }, "Locations"), h("li", { key: 'e356611e191def24cdf5f5db98853d5b1d724db7', class: "ir-mega-menu-row" }, h("a", { key: '0b269de11d0d6fbbda4beb6e4fc50f4c4fcc3b29', href: "poicategoriesinline.aspx" }, "Types")), h("li", { key: '0fc3181f80a8ed2f7742a70d39a612e2c3627b6b', class: "ir-mega-menu-row" }, h("a", { key: 'd1334339db62ceeaacb1b2831e33b266cb233c0a', href: "poilist.aspx" }, "List")))), h("li", { key: '8512c68c9afca6753a9da2dc1adbc5811b23b031' }, h("ul", { key: '4486bffecb2d9c410c6f4521dd72b3c2aa7c9645', class: "ir-mega-menu-column" }, h("li", { key: 'cd5b44f443f97bfd18db177bc476b481e462f567', class: "ir-mega-menu-row title" }, "Referrers"), h("li", { key: '62fba8efe54c5caa78527ab6414a60b024131dad', class: "ir-mega-menu-row" }, h("a", { key: '8a5f0342b20e3506a4802ef12fa7f00b2928092a', href: "affiliatelist.aspx" }, "Affiliates")), h("li", { key: '8553809ceedfdccb0c9dfcc9463f0b9641f3ee2c', class: "ir-mega-menu-row" }, h("a", { key: 'd0e26044741287934bd2a5537fdf0f6e47785695', href: "travelagentslist.aspx" }, "Travel Agents ...NOT USED")))))), h("li", { key: 'bf676ec7ac2982e8938fd13813e3f6c6cd774be6', class: "nav-item" }, h("a", { key: '55224863b643612472d48643c1e6667d383cb320', href: "#", class: "nav-link" }, "b")), h("li", { key: '059b68e9b7477d93e0f667d55d038d5b9bf0199c', class: "nav-item" }, h("a", { key: 'c0b4c8ce3a37d67fd79bf6c29ef232452b4a6cb1', href: "#", class: "nav-link" }, "c")), h("li", { key: '4588b4f6076bdf3e895194717b4f481f54857440', class: "nav-item" }, h("a", { key: 'c790fbaafd4d60d9cd8330c1d80b119ddf94f937', href: "#", class: "nav-link" }, "d")), h("li", { key: '4fc56bec7dead166aea4e725fcab3f6d5948f0df', class: "nav-item" }, h("div", { key: '20e5c69cb3fb10fdd0d0a958bcbb9bcb5774abc7', class: "d-flex align-items-center justify-content-center", style: { marginTop: '2px' } }, h("ir-notifications", { key: 'a9ce470f04af54e8070ad4bcb2ab5e8e7757e457', notifications: this.notifications }))))), h("div", { key: '616ae87e51357afe5d23edfe744566f5cce921e0', class: `mobile-menu ${this.isMobileMenuOpen ? 'active' : ''}` }, h("div", { key: 'db79b666da30d8c2493dc68ffb550b1036d2efe8', class: "mobile-menu-header" }, h("div", { key: 'f5d0776a8ce3635f56786a9f9ddb7b73ea623524', class: "hotel-name" }, "Hotel Name"), h("button", { key: '08722f83252dd23e785f0271ef9058f5131636dc', class: "close-menu", onClick: () => this.toggleMobileMenu() }, "\u00D7")), h("div", { key: '2cf1c7e37166de0fbafa159993b022d548c8ab7e', class: "mobile-search" }, h("ir-m-combobox", { key: '120797a707410012fa9d4fe1fbb83c515fb15296', placeholder: "Search...", dataMode: "static", options: this.staticOptions, onOptionChange: this.handleStaticOptionChange })), h("ac-pages-menu", { key: '22948c6a695b5ea7625803de0ab0cb57424279a5', location: "sheet", "onLink-clicked": async (e) => {
                await sleep(1000);
                window.location.href = e.detail.target.href;
            }, pages: this.pages }))), h("div", { key: '0484bbc3ecfefec1309eb7cbe24d7f46ecfddbb4', class: "submenus d-none d-md-block" }, h("ac-pages-menu", { key: '036c5c824bf1fb3b3a4944a8cbb54739c482094e', pages: this.pages }))), h("section", { key: '688e810e55ffb987d1ec968415b378b8960ee937', class: "p-2" }, h("div", { key: 'f06f4c2d0a87ffaf8ee3b2d8a72a58bafc0c24de', class: "row g-3" }, h("div", { key: 'cec9eb84422bbe6f07f1cf63d14b5826b5bd9f4b', class: "col-md-3" }, h("h5", { key: '96b14c9134a06ac4efd3bcd0b85ec9a10bc5c54d' }, "Static Options Example"), h("ir-m-combobox", { key: 'd6e72f47497706152306ddc53dad98fb550637ad', placeholder: "Select an option...", dataMode: "static", options: this.staticOptions, onOptionChange: this.handleStaticOptionChange }, h("svg", { key: '20dc8127a247c3b86623334276b1b54f440a5193', xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 640 640", slot: "prefix" }, h("path", { key: '07967251bdb3a8fdc9510d9b287a18bd8bedf1ee', d: "M480 272C480 317.9 465.1 360.3 440 394.7L566.6 521.4C579.1 533.9 579.1 554.2 566.6 566.7C554.1 579.2 533.8 579.2 521.3 566.7L394.7 440C360.3 465.1 317.9 480 272 480C157.1 480 64 386.9 64 272C64 157.1 157.1 64 272 64C386.9 64 480 157.1 480 272zM272 416C351.5 416 416 351.5 416 272C416 192.5 351.5 128 272 128C192.5 128 128 192.5 128 272C128 351.5 192.5 416 272 416z" }))), this.selectedStaticOption && h("p", { key: '47a52bd138c7c62503a8ffa3d48de251375b1b06', class: "mt-2 text-muted" }, "Selected: ", this.selectedStaticOption.label)), h("div", { key: '3c4422d33fef18c3083f9a35137257f23f23eaab', class: "col-md-3" }, h("h5", { key: '5c12edbd0d4674694c2c240e9c5e7da85928ceb8' }, "External API - Countries"), h("ir-m-combobox", { key: '41ce81d86e3de53efcb3b16e665c63f43e4afa8f', placeholder: "Search countries...", dataMode: "external", options: this.countryOptions, loading: this.isLoadingCountries, debounceDelay: 300, onSearchQuery: this.handleCountrySearch, onOptionChange: this.handleCountryChange }), this.selectedCountry && h("p", { key: '7d85a8280a2d011f63057b2ebca87471c9ee6018', class: "mt-2 text-muted" }, "Selected: ", this.selectedCountry.label)), h("div", { key: '73fd4020de167e1a6043bbb0d8c948c907dca84d', class: "col-md-3" }, h("h5", { key: '63020d5c5e869db396c918d08cdc515501163bcc' }, "Custom Dropdown Content"), h("ir-m-combobox", { key: 'b18381c96ae5f0a5adb62334761bc9fc6f478b62', class: "custom-width", ref: el => (this.customComboboxRef = el), placeholder: "Search with custom dropdown...", dataMode: "external", options: this.customOptions, loading: this.isLoadingCustom, useSlot: true, debounceDelay: 500, onSearchQuery: this.handleCustomSearch, onOptionChange: this.handleCustomOptionChange }, h("div", { key: '65184a2e9b32b6c957c623725902aed845be686c', slot: "dropdown-content" }, this.isLoadingCustom && h("div", { key: '7e41bd188edd1a1715ad47ad9f01ad84be766f6d', class: "dropdown-item" }, "\uD83D\uDD04 Loading custom results..."), !this.isLoadingCustom && this.customOptions.length === 0 && h("div", { key: 'aa36272973ccf577ae132356e7596b05d039f2fe', class: "dropdown-item" }, "\uD83D\uDD0D Type to search..."), !this.isLoadingCustom &&
            this.customOptions.map((option, index) => (h("div", { key: index, class: "dropdown-item d-flex align-items-center", "data-option": option.value, "data-label": option.label, onClick: () => this.handleCustomOptionClick(option), onMouseEnter: e => {
                    const element = e.target;
                    const slotIndex = element.getAttribute('data-slot-index');
                    if (slotIndex && this.customComboboxRef) {
                        this.customComboboxRef.focusedIndex = parseInt(slotIndex);
                    }
                }, style: { cursor: 'pointer' } }, h("span", { class: "me-2" }, "\u2B50"), h("div", null, h("div", { class: "fw-bold" }, option.label), h("small", { class: "text-muted" }, "Custom option with ID: ", option.value))))))), this.selectedCustomOption && h("p", { key: '969baf401979154d72657494e5fdff670f2d8515', class: "mt-2 text-muted" }, "Selected: ", this.selectedCustomOption.label))), h("div", { key: '6156e2d0a50a54e1b6cb955702324347c68c514e', class: 'd-flex align-items-center my-1', style: { gap: '1rem' } }, h("button", { key: '1438f2caa0e042bee56b120cf308d0f56436519a', class: "btn btn-primary", onClick: () => (this.notificationCount += 1) }, "+"), h("button", { key: 'b9bf214afef5ff30c82c455c5bb4d51105bf454f', class: "btn btn-primary", onClick: () => (this.notificationCount -= 1) }, "-")), h("ir-input-text", { key: 'b6298fa32bf974ea93cec1f82a3a8cd4cbb756a0', variant: "floating-label", class: "my-text-input", label: "First name" }, h("svg", { key: 'ab5cc9c8ef642870550ac1cf5774b56e98dcd553', xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 640 640", slot: "prefix" }, h("path", { key: 'e50476a3acca75ccb55a0350ae7faa5d236cad85', d: "M480 272C480 317.9 465.1 360.3 440 394.7L566.6 521.4C579.1 533.9 579.1 554.2 566.6 566.7C554.1 579.2 533.8 579.2 521.3 566.7L394.7 440C360.3 465.1 317.9 480 272 480C157.1 480 64 386.9 64 272C64 157.1 157.1 64 272 64C386.9 64 480 157.1 480 272zM272 416C351.5 416 416 351.5 416 272C416 192.5 351.5 128 272 128C192.5 128 128 192.5 128 272C128 351.5 192.5 416 272 416z" })), h("svg", { key: '83ecfa64b486608606d6b86db1213926f9c95f2a', slot: "suffix", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 640 640" }, h("path", { key: '0e70e8f7390355090c1f3958652341321d299151', d: "M264 112L376 112C380.4 112 384 115.6 384 120L384 160L256 160L256 120C256 115.6 259.6 112 264 112zM208 120L208 544L432 544L432 120C432 89.1 406.9 64 376 64L264 64C233.1 64 208 89.1 208 120zM480 160L480 544L512 544C547.3 544 576 515.3 576 480L576 224C576 188.7 547.3 160 512 160L480 160zM160 544L160 160L128 160C92.7 160 64 188.7 64 224L64 480C64 515.3 92.7 544 128 544L160 544z" }))), h("ir-select", { key: '6d4701a4fc2e78424627cb073e4cc999a3186cd3', "floating-label": true, label: "Hello", data: [{ value: '1', text: '1' }] }), h("div", { key: 'dfaacbfa7ed1a0df116b3dee7cd2bcbb6966a67d', class: "my-2" }), h("ir-select", { key: 'c1edbde40444a451fce19f5ae8ebea654eab1361', label: "Hello", data: [{ value: '1', text: '1' }] }), h("div", { key: '41d68f1cdb77c199fa1a24559db3eb1d014e3549', class: "my-2" }), h("ir-select", { key: 'ad0d3374c7bb39a615fb5591c60ef62876ef0876', data: [{ value: '1', text: '1' }] }), h("div", { key: '4148222c2046ada50a783c182c840a56769b062a', class: "card p-1" }, [
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