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
        return (h(Host, { key: 'fea60f4da6b8cd71647b4e63ada00917a495892f', class: "card p-1" }, h("ir-title", { key: 'aeb7e78abe2e19a1ceb179a290bf39d8edb8ecd5', label: locales.entries.Lcz_RoomOrUnitStatus }), h("div", { key: '99b5db04de786af7985cb7348929acab99a3aaf2', class: "table-container" }, h("table", { key: '086a74ed33269fcf7beceb7bc4963afe9260cc11' }, h("thead", { key: 'c9a3d232b81252941abad6ca408683697a1c3aa4' }, h("tr", { key: '60ff5568d62180ab49254aeac95197ba54169312' }, h("th", { key: 'f63f0c860e5a048e48b4562ea625a278d2ebcf1a' }, locales.entries.Lcz_Status), h("th", { key: '9e9bd01f63338342d851ee5e0814e9439ba198b7', class: 'text-center' }, locales.entries.Lcz_Code), h("th", { key: '44f5165bfe9ab5db32f8e3abc23424bbd7e262d4' }, locales.entries.Lcz_Action))), h("tbody", { key: '7bccf4161f061dc035b66dac3829862f63a44fd1' }, housekeeping_store.hk_criteria.statuses?.map(status => (h("tr", { key: status.code }, h("td", null, h("div", { class: "status-container" }, h("span", { class: `circle ${status.style.shape} ${status.style.color}` }), h("p", null, status.description))), h("td", null, status.code), h("td", null, h("div", { class: "action-container" }, h("p", { class: 'm-0' }, status.action), status.code === 'VAC' && (h("div", null, h("ir-select", { selectedValue: status.inspection_mode.is_active ? status.inspection_mode?.window.toString() : '', firstOption: locales.entries.Lcz_No, onSelectChange: this.handleSelectChange.bind(this), data: Array.from(Array(7 + 1), (_, i) => i).map(i => {
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
