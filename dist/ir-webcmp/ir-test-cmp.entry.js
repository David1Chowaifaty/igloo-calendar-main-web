import { r as registerInstance, h, e as Host } from './index-7b3961ed.js';
import { s as sleep } from './utils-7eaed9ad.js';
import { c as colorVariants } from './icons-5bea2cc2.js';
import './moment-ab846cee.js';
import './index-40c31d5b.js';
import './calendar-data-cdc01d0d.js';
import './index-17663a35.js';
import './locales.store-daef23cc.js';

const irTestCmpCss = ".sc-ir-test-cmp-h{display:block;height:100vh}.modern-navbar.sc-ir-test-cmp{background:#fff;box-shadow:0 2px 10px rgba(0, 0, 0, 0.1);position:sticky;top:0;z-index:1000;border-bottom:1px solid #e5e7eb}.overdue-banner.sc-ir-test-cmp{padding:0.5rem;background:var(--red);color:white;text-align:center;width:100%;display:block}.navbar-container.sc-ir-test-cmp{display:flex;align-items:center;justify-content:space-between;padding:0.5rem 1rem;margin:0 auto}.submenus.sc-ir-test-cmp{background:#104064 !important;width:100%}.navbar-left.sc-ir-test-cmp{display:flex;align-items:center;gap:1rem;width:100%}.custom-width.sc-ir-test-cmp{width:240px}.navbar-brand.sc-ir-test-cmp{font-weight:700;font-size:1.5rem;color:#1f2937}.hotel-name.sc-ir-test-cmp{color:#6b7280;font-size:0.875rem;font-weight:500}.navbar-center.sc-ir-test-cmp{margin-inline:auto}.navbar-right.sc-ir-test-cmp{display:flex;align-items:center}.nav-items.sc-ir-test-cmp{display:flex;list-style:none;margin:0;padding:0;gap:0.5rem}.nav-item.sc-ir-test-cmp{margin:0}.nav-link.sc-ir-test-cmp{display:flex;align-items:center;padding:0.5rem 1rem;text-decoration:none;font-weight:500;border-radius:0.375rem;transition:all 0.2s ease;cursor:pointer}.nav-link.sc-ir-test-cmp:hover{background-color:#f3f4f6;color:#1f2937;text-decoration:none}.mobile-menu-toggle.sc-ir-test-cmp{display:flex;align-items:center;justify-content:center;width:2.5rem;height:2.5rem;border:none;background:none;cursor:pointer;border-radius:0.375rem;transition:background-color 0.2s ease}.mobile-menu-toggle.sc-ir-test-cmp:hover{background-color:#f3f4f6}.hamburger-icon.sc-ir-test-cmp{display:flex;flex-direction:column;width:1.25rem;height:1rem;justify-content:space-between}.hamburger-icon.sc-ir-test-cmp span.sc-ir-test-cmp{display:block;height:2px;width:100%;background-color:#374151;border-radius:1px;transition:all 0.3s ease}.mobile-menu.sc-ir-test-cmp{position:fixed;top:0;left:0;width:100%;height:100vh;background:#fff;transform:translateX(-100%);transition:transform 0.3s ease;z-index:1001;overflow-y:auto}.mobile-menu.active.sc-ir-test-cmp{transform:translateX(0)}.mobile-menu-header.sc-ir-test-cmp{display:flex;align-items:center;justify-content:space-between;padding:1rem;border-bottom:1px solid #e5e7eb}.mobile-menu-header.sc-ir-test-cmp .hotel-name.sc-ir-test-cmp{font-size:1.125rem;font-weight:600;color:#1f2937}.close-menu.sc-ir-test-cmp{display:flex;align-items:center;justify-content:center;width:2.5rem;height:2.5rem;border:none;background:none;font-size:1.5rem;color:#6b7280;cursor:pointer;border-radius:0.375rem;transition:background-color 0.2s ease}.close-menu.sc-ir-test-cmp:hover{background-color:#f3f4f6;color:#374151}.mobile-search.sc-ir-test-cmp{padding:1rem;border-bottom:1px solid #e5e7eb}.mobile-nav-items.sc-ir-test-cmp{list-style:none;margin:0;padding:1rem 0}.mobile-nav-item.sc-ir-test-cmp{margin:0}.mobile-nav-link.sc-ir-test-cmp{display:block;padding:0.75rem 1rem;color:#374151;text-decoration:none;font-weight:500;transition:all 0.2s ease;cursor:pointer}.mobile-nav-link.sc-ir-test-cmp:hover{background-color:#f9fafb;color:#1f2937;text-decoration:none}@media (max-width: 767.98px){.navbar-container.sc-ir-test-cmp{padding:0.5rem 1rem}.navbar-brand.sc-ir-test-cmp{font-size:1.25rem}}.nav-item.sc-ir-test-cmp{color:#1f2937 !important}.ir-mega-menu.sc-ir-test-cmp{list-style:none;margin:0;padding:1rem;grid-template-columns:repeat(4, 1fr) !important;gap:1.25rem;background:#ffffff;border:1px solid #e5e7eb;border-radius:0.5rem}.ir-mega-menu.show.sc-ir-test-cmp{display:grid !important;width:max-content !important}.ir-mega-menu.sc-ir-test-cmp>li.sc-ir-test-cmp{list-style:none}.ir-mega-menu-column.sc-ir-test-cmp{list-style:none;margin:0;padding:0;display:flex;flex-direction:column;gap:0.25rem}.ir-mega-menu-row.title.sc-ir-test-cmp{font-weight:700;color:#0f172a;margin-bottom:0.375rem;font-size:0.825rem;text-transform:uppercase;letter-spacing:0.02em;padding:0rem 0.75rem}.ir-mega-menu-row.sc-ir-test-cmp a.sc-ir-test-cmp{display:block;padding:0.5rem 0.75rem;color:#334155;text-decoration:none;line-height:1;transition:background-color 0.2s ease, color 0.2s ease}.ir-mega-menu-row.sc-ir-test-cmp a.sc-ir-test-cmp:hover{background-color:#f4f5fa;color:#1e2122;text-decoration:none}@media (min-width: 576px){.ir-mega-menu.sc-ir-test-cmp{grid-template-columns:repeat(2, 1fr)}}@media (min-width: 992px){.ir-mega-menu.sc-ir-test-cmp{grid-template-columns:repeat(3, 1fr);padding:1.25rem 1.5rem;gap:1.5rem}}@media (min-width: 768px){.mobile-menu-toggle.sc-ir-test-cmp{display:none !important}.mobile-menu.sc-ir-test-cmp{display:none}.navbar-left.sc-ir-test-cmp{width:auto}}.ir-mega-menu.sc-ir-test-cmp{opacity:0;visibility:hidden;transform:translateY(-10px);transition:opacity 0.3s ease, transform 0.3s ease, visibility 0.3s ease;pointer-events:none;position:absolute;top:100%;left:0;z-index:1000}.ir-mega-menu.show.sc-ir-test-cmp{opacity:1;visibility:visible;transform:translateY(0);pointer-events:auto;display:grid !important}.payment-item.sc-ir-test-cmp{position:relative;width:100%;display:flex;border-bottom:1px solid gainsboro;padding:0.5rem 0.5rem;align-items:center;min-height:3rem}.payment-item.sc-ir-test-cmp:last-child{border-bottom:0}.payment-item.sc-ir-test-cmp:hover{background:#f4f5fa}.payment-item.sc-ir-test-cmp p.sc-ir-test-cmp{padding:0;margin:0;box-sizing:border-box}.payment-item.sc-ir-test-cmp .payment-actions.sc-ir-test-cmp{display:none;background:#f4f5fa;gap:0.5rem;justify-content:flex-end;align-items:center}.payment-body.sc-ir-test-cmp{display:flex;flex-direction:column;gap:0.25rem;flex:1 1 0%}.payment-fields.sc-ir-test-cmp{display:flex;align-items:center;gap:0.5rem}.payment-item.sc-ir-test-cmp:hover .payment-actions.sc-ir-test-cmp{display:flex}.payment-amount.sc-ir-test-cmp{font-weight:700}.payment-amount.is-credit.sc-ir-test-cmp{color:#629a4c}.payment-amount.is-debit.sc-ir-test-cmp{color:#ff4961}.payment-reference.sc-ir-test-cmp{width:300px;font-size:12px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}@media (min-width: 640px){.payment-reference.sc-ir-test-cmp{width:350px}}@media (min-width: 768px){.payment-reference.sc-ir-test-cmp{width:400px}}@media (min-width: 1024px){.payment-reference.sc-ir-test-cmp{width:350px}}.menu-footer.sc-ir-test-cmp{display:flex;flex-direction:column;box-sizing:border-box;width:100%;text-align:start}.menu-footer.sc-ir-test-cmp h4.sc-ir-test-cmp{font-family:var(--wa-font-family-heading);font-weight:var(--wa-font-weight-heading);line-height:var(--wa-line-height-condensed);text-wrap:balance;font-size:var(--wa-font-size-m)}";

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
    // private notifications = [
    //   {
    //     id: '1',
    //     type: 'info',
    //     title: 'Welcome!',
    //     message: 'Your account has been created successfully.',
    //     createdAt: Date.now(),
    //     read: false,
    //     dismissible: true,
    //   },
    //   {
    //     id: '2',
    //     type: 'warning',
    //     title: 'Storage Almost Full',
    //     message: 'You have used 90% of your storage. Please upgrade.',
    //     createdAt: Date.now(),
    //     read: false,
    //     dismissible: true,
    //     link: { href: '#', text: 'Upgrade now' },
    //   },
    //   {
    //     id: '3',
    //     type: 'success',
    //     title: 'Payment Received',
    //     message: 'Your invoice has been paid. Thank you!',
    //     createdAt: Date.now(),
    //     read: true,
    //     dismissible: true,
    //   },
    // ];
    showMegaMenu;
    render() {
        return (h(Host, { key: '0ca1191e27f96cec5d16c4845b958ac6ba7d445b' }, h("nav", { key: 'a4a8f0063b5e3294d3eaf27f72458aa78c654881', class: "modern-navbar" }, h("span", { key: '4b26ef7bd1fda3000657190fc7a66c31c6835736', class: "overdue-banner" }, "Overdue $300"), h("div", { key: '5aec1805a30830a4955e9c42cb4293b40b8176d0', class: "navbar-container" }, h("div", { key: '117a63a677251d8a06b7bb5a55e1d72539c7761f', class: "navbar-left" }, h("button", { key: 'f38e8f36f91c4ec0f3aacd185e48d90670b31241', class: "mobile-menu-toggle d-md-none", onClick: () => this.toggleMobileMenu() }, h("span", { key: 'dcfd37c8a01a38b02af12f30f34a3069ac761c29', class: "hamburger-icon" }, h("span", { key: 'e4f69b79fd927f413977e98ef110b228ac83457f' }), h("span", { key: '25795dc51bc0e9986680155ca9836ef144a29dd2' }), h("span", { key: '5dd0ed74d6b66ca84ed8cc9ffa0c548183059090' }))), h("div", { key: '95060c9be32c8663a2b679a4bf0decd3083f2a7a', class: "navbar-brand" }, "Logo"), h("div", { key: 'ed2ec6d3c272d48a0eccae95e26f0c194cb7d525', class: "d-none d-md-flex " }, h("ir-m-combobox", { key: '192e705d9c33065fb6d5153b97851ac3970abcd8', style: { '--ir-combobox-width': 'max-content' }, placeholder: "Find property", dataMode: "static", options: this.staticOptions, onOptionChange: this.handleStaticOptionChange })), h("div", { key: 'f3da63a5aa5dc801c67bc10153cd73019244ee44', class: "hotel-name d-none d-md-block" }, "Hotel Name"), h("div", { key: 'd28ecbb98a0870bad9e65971ed41d2ac417f1456', class: "ml-auto d-md-none" }, h("ir-notifications", { key: 'd5672acece6f337bb240ec1e08b1c4427cd4a5af' }))), h("div", { key: 'ffb14568431b2fab0dea72f906afa9197d9eba26', class: "navbar-center d-none d-md-flex flex-fill mx-auto" }, h("ir-m-combobox", { key: 'e61f2cb0aa119fefe9ffd8792bebb72bf223795d', placeholder: "Search...", dataMode: "static", options: this.staticOptions, onOptionChange: this.handleStaticOptionChange })), h("div", { key: 'a0d2ccb98ed7638c4bbff378f33aa80657a5710d', class: "navbar-right" }, h("ul", { key: 'bf17183cb16b28e2df97c41f828632baa8a5accd', class: "nav-items d-none d-md-flex" }, h("li", { key: '6f452b1334c6332673b64e90bc99967d51b8012b', class: "nav-item dropdown" }, h("a", { key: 'fe5cb99bb5972ac06f4da33af7a02e172f96e686', "data-reference": "parent", href: "#", role: "button", class: "nav-link", "data-toggle": "dropdown", "aria-expanded": "false" }, "a"), h("ul", { key: '3b0c4d39b4858a02f2efd712f424ead43596e1c3', class: `ir-mega-menu mx-auto dropdown-menu-right dropdown-menu    w-100 shadow-sm` }, h("li", { key: '731dfa8bb1e0441e7c7b16802d4184ab72246f0a' }, h("ul", { key: 'fc5cfcb2fa9f5cc9a1e89fd78bf305a2d8e7afc9', class: "ir-mega-menu-column" }, h("li", { key: '0701aeea27852e45fd31eed53f5c413d278d5f62', class: "ir-mega-menu-row title" }, "Parameters"), h("li", { key: '4da9366da0d13be7ec19481a702187e638c13312', class: "ir-mega-menu-row" }, h("a", { key: '4a8b2926fc0f9cf40be595055330aff319bdded3', href: "userinline.aspx" }, "Users List")), h("li", { key: 'bc1f013eacf57ab21dd3c283730d42cb643c2cc2', class: "ir-mega-menu-row" }, h("a", { key: 'b2463472124456225c4b0552cd50571217d2a16e', href: "languageinline.aspx" }, "System Languages")), h("li", { key: '76051d0ee60bbcc6d018bbd3a2ce17d5c82fe7ff', class: "ir-mega-menu-row" }, h("a", { key: '7ba7c843bf153793fc9e54e3482c530779bc9c14', href: "countryinline.aspx" }, "Countries")), h("li", { key: '260bf0300a12fbe7ab13dc6238aa2dff5dc8198f', class: "ir-mega-menu-row" }, h("a", { key: '750a9b75378afa4ddb91889b5f5de3fa6d81ea35', href: "level2inline.aspx" }, "Country Level 2")), h("li", { key: '26812791e21d6da1cbc4d1a47d33589c258d2465', class: "ir-mega-menu-row" }, h("a", { key: '9398d6d0974a9f69e58f01dc19d3ebf239160580', href: "cardinline.aspx" }, "Credit Cards")), h("li", { key: '72e5a3addae6f9d9a972e1fa1f6e0960b9e0743b', class: "ir-mega-menu-row" }, h("a", { key: 'e93533e4c54589287048e8323d2d3bfbc9b5f2dd', href: "hotel_chaininline.aspx" }, "Hotel Chains")), h("li", { key: '2498c6e6e87f2f99077d1f5b5a5b97d3561a205c', class: "ir-mega-menu-row" }, h("a", { key: '6ae525e35c5ae918a24af19d79adc8e10fcab866', href: "currencyinline.aspx" }, "Currencies")), h("li", { key: '815d73afa2e5113a7918ec34b2999793f77d807b', class: "ir-mega-menu-row" }, h("a", { key: 'b5013be0a8255309de4d94cebda82b24ddeb20a2', href: "amenityinline.aspx" }, "Amenities")), h("li", { key: '1a453138701851d800537bcd9143db31689b00f8', class: "ir-mega-menu-row" }, h("a", { key: '04ada27300aba7b573187c6ed1b6e86da7f86403', href: "foodinline.aspx" }, "Food")), h("li", { key: '2472ee273b2070bf7a1a532b3617039ff0c09c86', class: "ir-mega-menu-row" }, h("a", { key: '2dd6641eddf221d22121d31196a448b05b56256f', href: "beddinginline.aspx" }, "Bedding")), h("li", { key: '853b2ed5e2949ccaf5c2858bb35b2eb36f912082', class: "ir-mega-menu-row" }, h("a", { key: '61f4f262aadffa603013ef468fac70a8eb10ec71', href: "setupinline.aspx" }, "Setup Table")), h("li", { key: 'd2216bcd1051702ce09ffeb0ed2591f437286903', class: "ir-mega-menu-row" }, h("a", { key: '85d9a56ebc37c0bcc96f00fc8942d428b0caf070', href: "gwedit.aspx" }, "Payment Gateways")), h("li", { key: 'beb3a0017996c822e32c5cd6b1a02fd8a20c20b9', class: "ir-mega-menu-row" }, h("a", { key: '0908537c0ed047eae0f22e87951c8d96a5790a8f', href: "channelmanager.aspx" }, "Channel Manager")))), h("li", { key: '8e15176c7a47025b14ebdb3b445b832162ba4fab' }, h("ul", { key: 'b6c49b897357b8f75fe6882b650d288f4f70e9dd', class: "ir-mega-menu-column" }, h("li", { key: '0028cfbf85a321cdacdc83b7ffecc86b22c79cf4', class: "ir-mega-menu-row title" }, "Main"), h("li", { key: 'e8781a6cef4861e6e45aa53fa625bb97cb1de0fe', class: "ir-mega-menu-row" }, h("a", { key: '33ed1e0d6ef8b8f9866efeb2b98a2e49631ed7dc', href: "mpolist.aspx" }, "MPOs")), h("li", { key: '3a6374d1b08122778a324f1fd9dcf4a53c386f50', class: "ir-mega-menu-row" }, h("a", { key: 'da7e4126f87254718f49b2e2bfb52630db1b519e', href: "aclist.aspx" }, "Properties")), h("li", { key: '127fb663b68a05a39f169c4c4305dbbe6afe3567', class: "ir-mega-menu-row" }, h("a", { key: '60687eacd41f43b623c892b4818719461e09b674', href: "acbookinglist.aspx?MODE=MPO" }, "Bookings")), h("li", { key: '923e91fad35cfcf14a130d92df4a0c5c05a042f7', class: "ir-mega-menu-row" }, h("a", { key: '943cfb286cf8b36bdf940a869c0350702ad66ed1', href: "mpoaffiliateproperties.aspx" }, "MPO Affiliate Properties")), h("li", { key: '98b1622f34d0db49b53fdee7b9c8d197c774d718', class: "ir-mega-menu-row" }, h("a", { key: '1ac40bec9368d388f0c28d20d033fb6177f1c958', href: "acratesallotment.aspx?VIEW_MODE=CV" }, "MPO Combined Inventory")), h("li", { key: 'dd0764a6d031dd3c31b2efe3a9e1a1ff0627c47e', class: "ir-mega-menu-row" }, h("a", { key: '36159acbf04cbf9e9494177b4b11e615afca7574', href: "acbookinglist.aspx?VIEW_MODE=CV" }, "MPO Combined Bookings")), h("li", { key: 'da8e8d7489bf0fb3c9fa8767d2761dafe3b01566', class: "ir-mega-menu-row" }, h("a", { key: '732406fabc5f396ef9e234e369d8a3a970d9f008', href: "Acmemberlist.aspx?VIEW_MODE=CV" }, "MPO Combined Guests")), h("li", { key: 'cd0b2ea1b4055bc4320f45db048b255b473f4d69', class: "ir-mega-menu-row" }, h("a", { key: 'fa63cbaf64edeae68a078cffcc268f349a193b03', href: "mpobillingreport.aspx" }, "MPO Billing Report")), h("li", { key: '62d0c999af4312d8a971816188c35cbaa1a9676a', class: "ir-mega-menu-row" }, h("a", { key: '7ab1c3e1ff2f690f7707ed520218f5ef5232a58d', href: "Acmemberlist.aspx" }, "Guests")), h("li", { key: 'e40874a1735d6a009b26c1b03f652ae58efd498b', class: "ir-mega-menu-row" }, h("a", { key: 'afcd6ef93b7698d7a95ef1c63014bfeda251d2fa', href: "acbookinglist.aspx" }, "Bookings")), h("li", { key: 'd31d8ddca2db37fc3aeabad2c36d235f01c2b0fd', class: "ir-mega-menu-row" }, h("a", { key: 'cc18447fe136755f73268cde9fe574ef588c2eeb', href: "billing.aspx" }, "Billing")))), h("li", { key: '76a686b5db1e4c663aca8bcfc6f8f5d4e72f708c' }, h("ul", { key: 'c778ca51db11a66f68950d4a013f22708cd77455', class: "ir-mega-menu-column" }, h("li", { key: '1ca8d043fba8ac0192a46564c2e35aa40aaea0c1', class: "ir-mega-menu-row title" }, "Locations"), h("li", { key: 'c4704baa83d1c4541c8124c2dcd78caa490f64b9', class: "ir-mega-menu-row" }, h("a", { key: 'aecc7c800e38a9fd9c77ba523db178d00eaba9fe', href: "poicategoriesinline.aspx" }, "Types")), h("li", { key: '5deda91666e40b16bec6409926272b0e3c0d5053', class: "ir-mega-menu-row" }, h("a", { key: '63d0c424c913272d43becff82517e3a640e1a579', href: "poilist.aspx" }, "List")))), h("li", { key: 'b0a3d8a21cff77bb44551f0007d7e8a27bf010e7' }, h("ul", { key: '41a86589756d8f54d3f3e7ee0e9b9122d5505d88', class: "ir-mega-menu-column" }, h("li", { key: '6f997f79e609b0721f4e8f072e06259656499436', class: "ir-mega-menu-row title" }, "Referrers"), h("li", { key: 'ca68003cd88ea2d2ef04d002ab4580a7673e7a1b', class: "ir-mega-menu-row" }, h("a", { key: 'da3fc68698282283849f0e42a0b1b0e5b870d854', href: "affiliatelist.aspx" }, "Affiliates")), h("li", { key: 'f0f7d42eb59f05661f3bc2aefd98cf61c5a51799', class: "ir-mega-menu-row" }, h("a", { key: 'cf42f5cd46c21b8f91d7c670c230167b72a87304', href: "travelagentslist.aspx" }, "Travel Agents ...NOT USED")))))), h("li", { key: 'f477529ea914a3fb050214f07c8ec6c400e014d1', class: "nav-item" }, h("a", { key: '8c2ccdb378171e6cdd3227c954138370d9317a4f', href: "#", class: "nav-link" }, "b")), h("li", { key: 'b0de4ab8f0da4de99b83793bfff69dfabecaa5fa', class: "nav-item" }, h("a", { key: 'd1b30574c1d5e704129f934a888e52033385abcf', href: "#", class: "nav-link" }, "c")), h("li", { key: 'caf35e643cfac900f7c26d3d8db3025610b587a6', class: "nav-item" }, h("a", { key: '447d37356c0bed08d8c06b528fecd15269804d44', href: "#", class: "nav-link" }, "d")), h("li", { key: '8e66eecd9f3621461ba08386665a4c8877077d89', class: "nav-item" }, h("div", { key: '40282898423b148e623616007d859769bcdd34ec', class: "d-flex align-items-center justify-content-center", style: { marginTop: '2px' } }, h("ir-notifications", { key: 'cc394be0b46b0943bb1626581b13fb747b354952' }))))), h("div", { key: '2aae41b2e5bc0c0fc7cfe5e80b8c0a9504a8e108', class: `mobile-menu ${this.isMobileMenuOpen ? 'active' : ''}` }, h("div", { key: '4ce75b5d4c5580eea225d5d0bf651e7a07409dd6', class: "mobile-menu-header" }, h("div", { key: '7d6bcec590aa20db43632cae29f8df6d7820c69d', class: "hotel-name" }, "Hotel Name"), h("button", { key: '931a5dcf5ac030a2e259119925a75cc017d33e1d', class: "close-menu", onClick: () => this.toggleMobileMenu() }, "\u00D7")), h("div", { key: '4770f40674169aadcdcb54dbbb7fe070f6cc93e3', class: "mobile-search" }, h("ir-m-combobox", { key: 'ea55c2d83ed68d37c1b2eb5656658d8d09d8b9d3', placeholder: "Search...", dataMode: "static", options: this.staticOptions, onOptionChange: this.handleStaticOptionChange })), h("ac-pages-menu", { key: '4de27e860cc4250adf433c2f64631808f97c1a60', location: "sheet", "onLink-clicked": async (e) => {
                await sleep(1000);
                window.location.href = e.detail.target.href;
            }, pages: this.pages }))), h("div", { key: '56ed8507bd3d834001934ae74963889587388225', class: "submenus d-none d-md-block" }, h("ac-pages-menu", { key: 'a7d7d557fc774605ee8c1af05f2da9a84728c842', pages: this.pages }))), h("section", { key: '028b86f457e0f65e42e3e9fac0b53ea33f2c938f', class: "p-2" }, h("div", { key: 'e8d5d0305c7a0d39898347795386b67ed760cd9e', class: "row g-3" }, h("div", { key: 'cda88fd850307a898bde7dfa765cb4fbc229385d', class: "col-md-3" }, h("h5", { key: '36263248d394cf1e86c107071cf6564cd483a3e7' }, "Static Options Example"), h("ir-m-combobox", { key: 'c1294427f9e066aef8b68354f473272fa02d198d', placeholder: "Select an option...", dataMode: "static", options: this.staticOptions, onOptionChange: this.handleStaticOptionChange }, h("svg", { key: '29f8b61e670e295e25451430b5d57e88a73f8eb7', xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 640 640", slot: "prefix" }, h("path", { key: '612cd4665fa5242ccde257a268e3bb0c4099b056', d: "M480 272C480 317.9 465.1 360.3 440 394.7L566.6 521.4C579.1 533.9 579.1 554.2 566.6 566.7C554.1 579.2 533.8 579.2 521.3 566.7L394.7 440C360.3 465.1 317.9 480 272 480C157.1 480 64 386.9 64 272C64 157.1 157.1 64 272 64C386.9 64 480 157.1 480 272zM272 416C351.5 416 416 351.5 416 272C416 192.5 351.5 128 272 128C192.5 128 128 192.5 128 272C128 351.5 192.5 416 272 416z" }))), this.selectedStaticOption && h("p", { key: '86d6ec7ded497e96e86417938dc5e088c80fed86', class: "mt-2 text-muted" }, "Selected: ", this.selectedStaticOption.label)), h("div", { key: 'a04cee658fabeefc74673e85f3cb3b1c3cbc22df', class: "col-md-3" }, h("h5", { key: 'fd2b84d4d0d20db09d5a11ab6b5c2fd22f0b84f3' }, "External API - Countries"), h("ir-m-combobox", { key: '54206e0d93f9742b8a197bef65ef4b364da6c069', placeholder: "Search countries...", dataMode: "external", options: this.countryOptions, loading: this.isLoadingCountries, debounceDelay: 300, onSearchQuery: this.handleCountrySearch, onOptionChange: this.handleCountryChange }), this.selectedCountry && h("p", { key: 'c476ff9d21aa50c1a4d9a4dea5b191ac0bf44a3e', class: "mt-2 text-muted" }, "Selected: ", this.selectedCountry.label)), h("div", { key: '6543f4477620ed192fd61014769e22f5a31df083', class: "col-md-3" }, h("h5", { key: '9b12eb7fc6e9a2701d1fb9e4daa5db984b3513a2' }, "Custom Dropdown Content"), h("ir-m-combobox", { key: 'be6215fc4eedcbc3f77f66456aa59f3d2574e50f', class: "custom-width", ref: el => (this.customComboboxRef = el), placeholder: "Search with custom dropdown...", dataMode: "external", options: this.customOptions, loading: this.isLoadingCustom, useSlot: true, debounceDelay: 500, onSearchQuery: this.handleCustomSearch, onOptionChange: this.handleCustomOptionChange }, h("div", { key: '69503de2e7d99d271f61a8d25a24115f85be32c5', slot: "dropdown-content" }, this.isLoadingCustom && h("div", { key: '8c9a672cb59cc7e899b29c2589befe57a718ac50', class: "dropdown-item" }, "\uD83D\uDD04 Loading custom results..."), !this.isLoadingCustom && this.customOptions.length === 0 && h("div", { key: '3d27d30445170ad345fe5bdb40c0f16d9a7b09d9', class: "dropdown-item" }, "\uD83D\uDD0D Type to search..."), !this.isLoadingCustom &&
            this.customOptions.map((option, index) => (h("div", { key: index, class: "dropdown-item d-flex align-items-center", "data-option": option.value, "data-label": option.label, onClick: () => this.handleCustomOptionClick(option), onMouseEnter: e => {
                    const element = e.target;
                    const slotIndex = element.getAttribute('data-slot-index');
                    if (slotIndex && this.customComboboxRef) {
                        this.customComboboxRef.focusedIndex = parseInt(slotIndex);
                    }
                }, style: { cursor: 'pointer' } }, h("span", { class: "me-2" }, "\u2B50"), h("div", null, h("div", { class: "fw-bold" }, option.label), h("small", { class: "text-muted" }, "Custom option with ID: ", option.value))))))), this.selectedCustomOption && h("p", { key: 'dc377a3a8fd247453f66050cca8ffbaf33150461', class: "mt-2 text-muted" }, "Selected: ", this.selectedCustomOption.label))), h("div", { key: '70c162c93f8c7ef54121fd2e095f4b586e1ee87e', class: 'd-flex align-items-center my-1', style: { gap: '1rem' } }, h("button", { key: '550b6a85f58adaa99bea51e3fcfa1aee9804dd7a', class: "btn btn-primary", onClick: () => (this.notificationCount += 1) }, "+"), h("button", { key: 'bd71648b76e86b812094e7e57a3380d2b7613ea2', class: "btn btn-primary", onClick: () => (this.notificationCount -= 1) }, "-")), h("ir-input-text", { key: 'd974b346cb548c5dc155d81d5f832e545000572b', variant: "floating-label", class: "my-text-input", label: "First name" }, h("svg", { key: 'f994ce22f028d95deb8f977f9a3ec0e1283ba025', xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 640 640", slot: "prefix" }, h("path", { key: '7659df3198edc415487bc8be8e9504529c14b038', d: "M480 272C480 317.9 465.1 360.3 440 394.7L566.6 521.4C579.1 533.9 579.1 554.2 566.6 566.7C554.1 579.2 533.8 579.2 521.3 566.7L394.7 440C360.3 465.1 317.9 480 272 480C157.1 480 64 386.9 64 272C64 157.1 157.1 64 272 64C386.9 64 480 157.1 480 272zM272 416C351.5 416 416 351.5 416 272C416 192.5 351.5 128 272 128C192.5 128 128 192.5 128 272C128 351.5 192.5 416 272 416z" })), h("svg", { key: 'e7ea7f9b35578df1f31ce7b3c131bf8a28d5808e', slot: "suffix", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 640 640" }, h("path", { key: 'efad021ba0bad333a4edb5fae7b8efb13fe36087', d: "M264 112L376 112C380.4 112 384 115.6 384 120L384 160L256 160L256 120C256 115.6 259.6 112 264 112zM208 120L208 544L432 544L432 120C432 89.1 406.9 64 376 64L264 64C233.1 64 208 89.1 208 120zM480 160L480 544L512 544C547.3 544 576 515.3 576 480L576 224C576 188.7 547.3 160 512 160L480 160zM160 544L160 160L128 160C92.7 160 64 188.7 64 224L64 480C64 515.3 92.7 544 128 544L160 544z" }))), h("ir-select", { key: 'e2df0b08845794b0007139e4a02bb7ff35303880', "floating-label": true, label: "Hello", data: [{ value: '1', text: '1' }] }), h("div", { key: '4d71dc9133a217f0b1632f1f7edcffba5d1eee2d', class: "my-2" }), h("ir-select", { key: 'a0bfc5251f88c8bd35aae0b55c8cf0961f474217', label: "Hello", data: [{ value: '1', text: '1' }] }), h("div", { key: 'c57a5d4db611d1242aec6ee4704e1b1623f30a56', class: "my-2" }), h("ir-select", { key: '51f3ebdef028c9dc82e1d23c17a94fefde950fbb', data: [{ value: '1', text: '1' }] }), h("div", { key: '898a8e2efbeb345d869643480c50be7228f63250', class: "card p-1" }, [
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
IrTestCmp.style = irTestCmpCss;

export { IrTestCmp as ir_test_cmp };

//# sourceMappingURL=ir-test-cmp.entry.js.map