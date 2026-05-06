import { r as registerInstance, c as createEvent, h, H as Host } from './index-7e96440e.js';
import { H as HouseKeepingService, h as housekeeping_store } from './housekeeping.service-0e645d86.js';
import { l as locales } from './locales.store-cb784e95.js';
import './index-87419685.js';
import './index-f100e9d2.js';
import './axios-aa1335b8.js';

const irUnitStatusCss = ".sc-ir-unit-status-h{display:block}.circle.sc-ir-unit-status{display:inline-flex;border-radius:50%}.green.sc-ir-unit-status{background:#57f707}.red.sc-ir-unit-status{background:rgb(199, 139, 36)}.orange.sc-ir-unit-status{background:#ff9149}.table-container.sc-ir-unit-status{width:100%;overflow-x:auto}.black.sc-ir-unit-status{background:#ff4961}table.sc-ir-unit-status{width:max-content}td.sc-ir-unit-status{min-width:140px;text-align:center;height:2rem}.smallcircle.sc-ir-unit-status{height:7px;width:7px}.bigcircle.sc-ir-unit-status{height:7px;width:7px}.status-container.sc-ir-unit-status,.action-container.sc-ir-unit-status{display:flex;align-items:center;gap:8px}.status-container.sc-ir-unit-status p.sc-ir-unit-status{margin:0}";
const IrUnitStatusStyle0 = irUnitStatusCss;

const IrUnitStatus = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.resetData = createEvent(this, "resetData", 7);
    }
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
};
IrUnitStatus.style = IrUnitStatusStyle0;

export { IrUnitStatus as ir_unit_status };

//# sourceMappingURL=ir-unit-status.entry.js.map