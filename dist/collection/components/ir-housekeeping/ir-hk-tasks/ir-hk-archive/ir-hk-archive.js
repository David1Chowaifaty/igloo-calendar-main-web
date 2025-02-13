// import { HouseKeepingService } from '@/services/housekeeping.service';
// import housekeeping_store from '@/stores/housekeeping.store';
import housekeeping_store from "../../../../stores/housekeeping.store";
import { Host, h } from "@stencil/core";
import moment from "moment";
export class IrHkArchive {
    constructor() {
        this.selectedDates = {
            start: moment().add(-90, 'days').format('YYYY-MM-DD'),
            end: moment().format('YYYY-MM-DD'),
        };
        this.data = [
            {
                id: 1,
                date: '20 Jun (Mon)',
                hk_id: 2,
                housekeeper: 'Test',
                unit: {
                    id: 2,
                    name: 'test',
                },
                booking_nbr: 15525610155,
            },
            {
                id: 2,
                date: '20 Jun (Mon)',
                hk_id: 2,
                housekeeper: 'Test aanjhjanjn ajna',
                unit: {
                    id: 2,
                    name: 'test',
                },
                booking_nbr: 15525610155,
            },
        ];
    }
    // private houseKeepingService = new HouseKeepingService();
    componentWillLoad() {
        this.initializeData();
    }
    async initializeData() { }
    handleDateRangeChange(e) {
        e.stopImmediatePropagation();
        e.stopPropagation();
        const { start, end } = e.detail;
        this.selectedDates = {
            start: start.format('YYYY-MM-DD'),
            end: end.format('YYYY-MM-DD'),
        };
    }
    async searchArchive(e) {
        e.stopImmediatePropagation();
        e.stopPropagation();
    }
    async exportArchive(e) {
        e.stopImmediatePropagation();
        e.stopPropagation();
    }
    render() {
        return (h(Host, { key: '7466168e91b99add39a3d811afe9caeb71dcf643' }, h("ir-title", { key: '0820f3faf2912317f9f7011c0999718c389b987d', class: "px-1", label: "Cleaning Archives (90 days)", displayContext: "sidebar" }), h("section", { key: 'f3f4dfd5762d0796c978f8b3df6a8bc6d7a5a8ab', class: "px-1" }, h("div", { key: '9ab878b3e157d4d8859a2b8ce9cac150d155289c', class: "d-flex" }, h("ir-select", { key: '3cfaf95f518c62d43b1867143641ceb27e351ea0', class: "w-100", LabelAvailable: false, data: [], firstOption: "All units" }), h("ir-select", { key: 'dae47fb815ac65e19abdd5a948b520972b67a410', class: "ml-1 w-100", LabelAvailable: false, data: housekeeping_store.hk_criteria.housekeepers.map(hk => ({ text: hk.name, value: hk.id.toString() })), firstOption: "All housekeepers" })), h("div", { key: '99c0e1c928cd9077bbb336f6b0206ec3d23b61b6', class: "d-flex mt-1 align-items-center" }, h("igl-date-range", { key: '03d903097be321ac0d55b53636ca975272e49b41', class: "mr-1", withDateDifference: false, minDate: moment().add(-90, 'days').format('YYYY-MM-DD'), defaultData: {
                fromDate: this.selectedDates.start,
                toDate: this.selectedDates.end,
            } }), h("ir-icon", { key: '08eb6e38ad9c28d109e331231228d08fae8479bb', onIconClickHandler: this.searchArchive.bind(this), class: "mr-1" }, h("svg", { key: '97571177fa2d7b481d7e45d7c08d5d92429f08e6', slot: "icon", xmlns: "http://www.w3.org/2000/svg", height: "20", width: "20", viewBox: "0 0 512 512" }, h("path", { key: '6c6268e3f1f6522e9207d36a42479501a0cc3780', fill: "currentColor", d: "M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" }))), h("ir-icon", { key: '85fe947051009bfdc83cfbde68d33c4d709d052b', onIconClickHandler: this.exportArchive.bind(this) }, h("svg", { key: '725f2bf699a487525f72a0c8a53148198c876958', slot: "icon", xmlns: "http://www.w3.org/2000/svg", height: "20", width: "15", viewBox: "0 0 384 512" }, h("path", { key: 'd8b914a5d50334e87b7ed7f6be9b72237b16449a', fill: "currentColor", d: "M48 448V64c0-8.8 7.2-16 16-16H224v80c0 17.7 14.3 32 32 32h80V448c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16zM64 0C28.7 0 0 28.7 0 64V448c0 35.3 28.7 64 64 64H320c35.3 0 64-28.7 64-64V154.5c0-17-6.7-33.3-18.7-45.3L274.7 18.7C262.7 6.7 246.5 0 229.5 0H64zm90.9 233.3c-8.1-10.5-23.2-12.3-33.7-4.2s-12.3 23.2-4.2 33.7L161.6 320l-44.5 57.3c-8.1 10.5-6.3 25.5 4.2 33.7s25.5 6.3 33.7-4.2L192 359.1l37.1 47.6c8.1 10.5 23.2 12.3 33.7 4.2s12.3-23.2 4.2-33.7L222.4 320l44.5-57.3c8.1-10.5 6.3-25.5-4.2-33.7s-25.5-6.3-33.7 4.2L192 280.9l-37.1-47.6z" })))), h("table", { key: '8dc0f6b362767d447f20708294f74f8ca48dd0e9', class: "mt-2" }, h("thead", { key: '04fcde22b71faca2fbffcaee10369779b21ad3c7' }, h("th", { key: '898e60a269ea98ae86e1613c9cdbfa9cdc3e1ab1', class: "sr-only" }, "period"), h("th", { key: '2fafd2c1aeb46a5abc631f4ed6f3ab4cc1914b17', class: "sr-only" }, "housekeeper name"), h("th", { key: 'cabacd1f0da8721fc8e896412046563ce982f9ee', class: "sr-only" }, "unit"), h("th", { key: 'b4066e79e658697020c52f2b84edfc79ad07641e', class: "sr-only" }, "booking number")), h("tbody", { key: '225df476c7cee399080d57d4af0f400c6f6bbe4e' }, this.data.map(d => {
            var _a;
            return (h("tr", { key: d.id }, h("td", { class: "pr-2" }, d.date), h("td", { class: "px-2" }, d.housekeeper), h("td", { class: "px-2" }, (_a = d.unit) === null || _a === void 0 ? void 0 : _a.name), h("td", { class: "px-2" }, h("ir-button", { btn_color: "link", btnStyle: {
                    width: 'fit-content',
                    padding: '0',
                    margin: '0',
                }, labelStyle: {
                    padding: '0',
                }, text: d.booking_nbr.toString(), onClick: () => {
                    window.open(`https://x.igloorooms.com/manage/acbookingeditV2.aspx?BN=${d.booking_nbr}`, '_blank');
                } }))));
        }))))));
    }
    static get is() { return "ir-hk-archive"; }
    static get encapsulation() { return "scoped"; }
    static get originalStyleUrls() {
        return {
            "$": ["ir-hk-archive.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["ir-hk-archive.css"]
        };
    }
    static get states() {
        return {
            "selectedDates": {},
            "data": {}
        };
    }
    static get listeners() {
        return [{
                "name": "dateChanged",
                "method": "handleDateRangeChange",
                "target": undefined,
                "capture": false,
                "passive": false
            }];
    }
}
//# sourceMappingURL=ir-hk-archive.js.map
