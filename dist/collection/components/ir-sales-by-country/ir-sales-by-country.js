import Token from "../../models/Token";
import { PropertyService } from "../../services/property.service";
import { RoomService } from "../../services/room.service";
import locales from "../../stores/locales.store";
import { Host, h } from "@stencil/core";
import moment from "moment";
import { v4 } from "uuid";
import { BookingService } from "../../services/booking-service/booking.service";
export class IrSalesByCountry {
    language = '';
    ticket = '';
    propertyid;
    p;
    isLoading = null;
    isPageLoading = true;
    property_id;
    salesData;
    salesFilters;
    countries = new Map();
    token = new Token();
    roomService = new RoomService();
    propertyService = new PropertyService();
    bookingService = new BookingService();
    baseFilters = {
        FROM_DATE: moment().add(-7, 'days').format('YYYY-MM-DD'),
        TO_DATE: moment().format('YYYY-MM-DD'),
        BOOK_CASE: '001',
        WINDOW: 7,
        include_previous_year: false,
    };
    componentWillLoad() {
        this.salesFilters = this.baseFilters;
        if (this.ticket) {
            this.token.setToken(this.ticket);
            this.initializeApp();
        }
    }
    ticketChanged(newValue, oldValue) {
        if (newValue === oldValue) {
            return;
        }
        this.token.setToken(this.ticket);
        this.initializeApp();
    }
    async initializeApp() {
        try {
            let propertyId = this.propertyid;
            if (!this.propertyid && !this.p) {
                throw new Error('Property ID or username is required');
            }
            if (!propertyId) {
                const propertyData = await this.roomService.getExposedProperty({
                    id: 0,
                    aname: this.p,
                    language: this.language,
                    is_backend: true,
                    include_units_hk_status: true,
                });
                propertyId = propertyData.My_Result.id;
            }
            this.property_id = propertyId;
            const requests = [this.bookingService.getCountries(this.language), this.roomService.fetchLanguage(this.language), this.getCountrySales()];
            if (this.propertyid) {
                requests.push(this.roomService.getExposedProperty({
                    id: this.propertyid,
                    language: this.language,
                    is_backend: true,
                    include_units_hk_status: true,
                }));
            }
            const [countries] = await Promise.all(requests);
            const mappedCountries = new Map();
            countries.map(country => {
                mappedCountries.set(country.id, {
                    flag: country.flag,
                    name: country.name,
                });
            });
            this.countries = mappedCountries;
        }
        catch (error) {
            console.log(error);
        }
        finally {
            this.isPageLoading = false;
        }
    }
    async getCountrySales(isExportToExcel = false) {
        const formatSalesData = (data) => {
            return {
                country: data.COUNTRY,
                country_id: data.COUNTRY_ID,
                nights: data.NIGHTS,
                percentage: data.PCT,
                revenue: data.REVENUE,
                number_of_guests: data.Total_Guests,
            };
        };
        try {
            const { include_previous_year, ...filterParams } = this.salesFilters;
            this.isLoading = isExportToExcel ? 'export' : 'filter';
            const currentSales = await this.propertyService.getCountrySales({
                AC_ID: this.property_id,
                is_export_to_excel: isExportToExcel,
                ...filterParams,
            });
            const shouldFetchPreviousYear = !isExportToExcel && include_previous_year;
            let enrichedSales = [];
            if (shouldFetchPreviousYear) {
                const previousYearSales = await this.propertyService.getCountrySales({
                    AC_ID: this.property_id,
                    is_export_to_excel: false,
                    ...filterParams,
                    FROM_DATE: moment(filterParams.FROM_DATE).subtract(1, 'year').format('YYYY-MM-DD'),
                    TO_DATE: moment(filterParams.TO_DATE).subtract(1, 'year').format('YYYY-MM-DD'),
                });
                enrichedSales = currentSales.map(current => {
                    const previous = previousYearSales.find(prev => prev.COUNTRY.toLowerCase() === current.COUNTRY.toLowerCase());
                    return {
                        id: v4(),
                        ...formatSalesData(current),
                        last_year: previous ? formatSalesData(previous) : null,
                    };
                });
            }
            else {
                enrichedSales = currentSales.map(record => ({
                    id: v4(),
                    ...formatSalesData(record),
                    last_year: null,
                }));
            }
            this.salesData = [...enrichedSales];
        }
        catch (error) {
            console.error('Failed to fetch sales data:', error);
        }
        finally {
            this.isLoading = null;
        }
    }
    render() {
        if (this.isPageLoading) {
            return h("ir-loading-screen", null);
        }
        return (h(Host, null, h("ir-page", { label: "Sales by Country" }, h("ir-custom-button", { slot: "page-header", variant: "neutral", appearance: "outlined", loading: this.isLoading === 'export', onClickHandler: async (e) => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                await this.getCountrySales(true);
            } }, h("wa-icon", { name: "download", slot: "start" }), locales.entries?.Lcz_Export), h("ir-sales-by-country-summary", { salesReports: this.salesData }), h("div", { class: "sales-content-row" }, h("ir-sales-filters", { isLoading: this.isLoading === 'filter', onApplyFilters: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.salesFilters = e.detail;
                this.getCountrySales();
            }, baseFilters: this.baseFilters }), h("ir-sales-table", { mappedCountries: this.countries, class: "sales-table-card", records: this.salesData })))));
    }
    static get is() { return "ir-sales-by-country"; }
    static get encapsulation() { return "scoped"; }
    static get originalStyleUrls() {
        return {
            "$": ["ir-sales-by-country.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["ir-sales-by-country.css"]
        };
    }
    static get properties() {
        return {
            "language": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "language",
                "defaultValue": "''"
            },
            "ticket": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "ticket",
                "defaultValue": "''"
            },
            "propertyid": {
                "type": "number",
                "mutable": false,
                "complexType": {
                    "original": "number",
                    "resolved": "number",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "propertyid"
            },
            "p": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "p"
            }
        };
    }
    static get states() {
        return {
            "isLoading": {},
            "isPageLoading": {},
            "property_id": {},
            "salesData": {},
            "salesFilters": {},
            "countries": {}
        };
    }
    static get watchers() {
        return [{
                "propName": "ticket",
                "methodName": "ticketChanged"
            }];
    }
}
