import { HouseKeepingService } from "../../../services/housekeeping.service";
import housekeeping_store from "../../../stores/housekeeping.store";
import locales from "../../../stores/locales.store";
import { Host, h } from "@stencil/core";
export class IrUnitStatus {
    housekeepingService = new HouseKeepingService();
    resetData;
    async handleSelectChange(e) {
        try {
            e.stopPropagation();
            e.stopImmediatePropagation();
            const window = e.detail;
            let mode;
            if (window === '') {
                mode = {
                    is_active: false,
                    window: -1,
                };
            }
            else {
                mode = {
                    is_active: true,
                    window: +window,
                };
            }
            await this.housekeepingService.setExposedInspectionMode(housekeeping_store.default_properties.property_id, mode);
            this.resetData.emit(null);
        }
        catch (error) {
            console.error(error);
        }
    }
    render() {
        return (h(Host, { key: '17ac90116188305beec989370be2751865c2692d', class: "card p-1" }, h("ir-title", { key: 'aa674fb84124df88fe0026c366d3259a521837b8', label: locales.entries.Lcz_RoomOrUnitStatus }), h("div", { key: 'ff02c1859f56e68fbd4b6ab657b3ea28bb131a7a', class: "table-container" }, h("table", { key: 'd5a1e9126e3e59a9b9fad3f15ba786e1134db143' }, h("thead", { key: 'f847e9ed0979a9563db4fdc73f861ac01e8dd9b8' }, h("tr", { key: '564913a217a1ece58b864a5d10be4ca801e55a58' }, h("th", { key: '1fda2046efa9abc1e6b659fab1a43da8610419e5' }, locales.entries.Lcz_Status), h("th", { key: 'c906df2730f547aa109041df8f30ec0c02ee9d21', class: 'text-center' }, locales.entries.Lcz_Code), h("th", { key: 'd656b1283fe5c4bc016f81dc8d2d6b850625b078' }, locales.entries.Lcz_Action))), h("tbody", { key: '9c82e0a13abe4bb5b1d8670085206471b894e568' }, housekeeping_store.hk_criteria.statuses?.map(status => (h("tr", { key: status.code }, h("td", null, h("div", { class: "status-container" }, h("span", { class: `circle ${status.style.shape} ${status.style.color}` }), h("p", null, status.description))), h("td", null, status.code), h("td", null, h("div", { class: "action-container" }, h("p", { class: 'm-0' }, status.action), status.code === 'VAC' && (h("div", null, h("ir-select", { selectedValue: status.inspection_mode.is_active ? status.inspection_mode?.window.toString() : '', firstOption: locales.entries.Lcz_No, onSelectChange: this.handleSelectChange.bind(this), data: Array.from(Array(7 + 1), (_, i) => i).map(i => {
                const text = i === 0
                    ? locales.entries.Lcz_YesOnTheSameDay
                    : i === 1
                        ? locales.entries.Lcz_DayPrior.replace('%1', i.toString())
                        : locales.entries.Lcz_DaysPrior.replace('%1', i.toString());
                return {
                    text,
                    value: i.toString(),
                };
            }) })))))))))))));
    }
    static get is() { return "ir-unit-status"; }
    static get encapsulation() { return "scoped"; }
    static get originalStyleUrls() {
        return {
            "$": ["ir-unit-status.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["ir-unit-status.css"]
        };
    }
    static get events() {
        return [{
                "method": "resetData",
                "name": "resetData",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "complexType": {
                    "original": "null",
                    "resolved": "null",
                    "references": {}
                }
            }];
    }
}
//# sourceMappingURL=ir-unit-status.js.map
