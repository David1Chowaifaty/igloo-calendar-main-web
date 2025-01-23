import locales from "../../../stores/locales.store";
import { Host, h } from "@stencil/core";
export class IglLegends {
    constructor() {
        this.legendData = undefined;
    }
    handleOptionEvent(key, data = '') {
        this.optionEvent.emit({ key, data });
    }
    render() {
        return (h(Host, { key: '2a1e0684822dea49c217256216dbcf9b2264f80a', class: "legendContainer pr-1 text-left" }, h("div", { key: '1b617815b48f37a82a8455ad06754972d1ea9e19', class: 'w-full' }, h("div", { key: 'e21640dc9f4afb1fbe3e26472ec7697f7283fd99', class: 'w-full' }, h("div", { key: 'e3d993440aa39a29102a38af52f6e1c3c9d72ccf', class: "stickyHeader pt-1 " }, h("p", { key: '26e18c0fd8d824dd1854738d89d8c59d87676759', class: "legendHeader" }, locales.entries.Lcz_Legend), h("div", { key: 'e08530b5dcaae898e2d448050171511b9b332e38', class: "legendCloseBtn", onClick: () => this.handleOptionEvent('closeSideMenu') }, h("svg", { key: '2aee677a9d52412eb5cc311c357fc6855c3a11b8', xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", height: 18, width: 18 }, h("path", { key: '15c18c52207cfade4803903d49975008d6f53f94', fill: "#6b6f82", d: "M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 246.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160zm352-160l-160 160c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L301.3 256 438.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0z" }))), h("hr", { key: '7db05b17853026cdc90ed5b6c2b19a548ac962f1' })), h("div", { key: '37df609766f8f429598b3618d861e8f0086950a3', class: "mt-2 pl-1" }, this.legendData.map(legendInfo => (h("div", { class: "legendRow " }, h("div", { class: `legend_${legendInfo.design} mr-1`, style: { backgroundColor: legendInfo.color } }), h("span", { class: "font-small-3" }, legendInfo.name))))), h("hr", { key: '7a42bde89052b35e422638eefbd989861b8b766d' }), h("div", { key: 'f3142fd212aaed7548aa5ff24d0c8da078943c1b', class: "mt-2" }, h("div", { key: '26fe39e1d6a727d0dccbf0303f2885575303c5bc', class: "legendCalendar" }, h("div", { key: '9e81091a3d23562d9408fae92b5c69fdbb26b666', class: "legendRow align-items-center" }, h("div", { key: '6ddf55a6ca0dc6288c32e3323856b5986cee0efe', class: "legendCal br-t br-s br-bt" }, h("strong", { key: '181ab9b3d6f1843dbe08c2f5dac654fea3f1a815' }, "MAR 2022")), h("div", { key: '8507b981e0376b67fea8c0bc4a7c497e5368caa2', class: "highphenLegend" }, locales.entries.Lcz_MonthAndYear)), h("div", { key: '68247d49a25f5659b0ab6e9f813d495b887454d4', class: "legendRow" }, h("div", { key: '7d50f83cf0ca1eeb391c4f810d944fa3c3347962', class: "legendCal headerCell align-items-center br-s" }, h("span", { key: 'fb076e68070a55896964f3c1d4713608def55067', class: "badge badge-info  badge-pill" }, "3")), h("div", { key: 'c46b38bcd74286c4537786abaa1bd5ee0b9c7c77', class: "highphenLegend" }, h("div", { key: 'bcb5954c631abb933e287d35d1702a54315f2167' }, locales.entries.Lcz_UnassignedUnits))), h("div", { key: '094445cfbdad3522325d2ccb72ce9215902e9dc4', class: "legendRow" }, h("div", { key: 'cca3a2befe313fff6ec55a7c59ac9453b5bfcd32', class: "legendCal dayTitle br-s" }, "Fri 18"), h("div", { key: 'e9a4945300db845da359a48e0f897f9ea0ec248d', class: "highphenLegend" }, locales.entries.Lcz_Date)), h("div", { key: 'bfaad014333503fe33c98743f4af09116e949c1f', class: "legendRow" }, h("div", { key: '9cb1d50eb87120970a7db14df75170b1b28601a0', class: "legendCal br-s br-bt dayCapacityPercent" }, "15%"), h("div", { key: '8779180cf3a610afdf9b06bea8cb0576f19510ae', class: "highphenLegend" }, locales.entries.Lcz_Occupancy)), h("div", { key: '271a9700f90d5cfaf6f69eb661adcadcea01ea90', class: "legendRow" }, h("div", { key: 'e698daa8a588d97fd59be6f998258b2b934ace3f', class: "legendCal br-s br-bt  font-weight-bold total-availability" }, "20"), h("div", { key: '6e134af5ad03117b1b356054fccf68d27dcf9e2a', class: "highphenLegend" }, locales.entries.Lcz_TotalAvailability))))))));
    }
    static get is() { return "igl-legends"; }
    static get encapsulation() { return "scoped"; }
    static get originalStyleUrls() {
        return {
            "$": ["igl-legends.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["igl-legends.css"]
        };
    }
    static get properties() {
        return {
            "legendData": {
                "type": "unknown",
                "mutable": false,
                "complexType": {
                    "original": "{ [key: string]: any }",
                    "resolved": "{ [key: string]: any; }",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                }
            }
        };
    }
    static get events() {
        return [{
                "method": "optionEvent",
                "name": "optionEvent",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "complexType": {
                    "original": "{ [key: string]: any }",
                    "resolved": "{ [key: string]: any; }",
                    "references": {}
                }
            }];
    }
}
//# sourceMappingURL=igl-legends.js.map
