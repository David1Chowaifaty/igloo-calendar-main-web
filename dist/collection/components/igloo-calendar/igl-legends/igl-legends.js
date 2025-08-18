import locales from "../../../stores/locales.store";
import { Host, h } from "@stencil/core";
export class IglLegends {
    handleOptionEvent(key, data = '') {
        this.optionEvent.emit({ key, data });
    }
    render() {
        return (h(Host, { key: '585508ea346488f4cb4b9a3a8db0e2bd0a1592e7', class: "legendContainer pr-1 text-left" }, h("div", { key: '9581010b25d36a6edc46eb291f84705bd8a0698a', class: 'w-full' }, h("div", { key: '4167fd624f229b1abbc1af885bc6d2b9238e26d6', class: 'w-full' }, h("div", { key: '42077c0bc360030902f0fdd8c172647d74a3a693', class: "stickyHeader pt-1 " }, h("p", { key: 'f81901f8277997cf4a6c4a96dd27b19f2ffe4963', class: "legendHeader" }, locales.entries.Lcz_Legend), h("div", { key: 'c99a21d1afb2d6c6e0f8559066895eb3f59dfaf2', class: "legendCloseBtn", onClick: () => this.handleOptionEvent('closeSideMenu') }, h("svg", { key: '0b277c257f72ec5d4372425eafa467f055230660', xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", height: 18, width: 18 }, h("path", { key: '737224edd2c12f98e68244f9dff82a4751871f01', fill: "#6b6f82", d: "M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 246.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160zm352-160l-160 160c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L301.3 256 438.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0z" }))), h("hr", { key: '21f106b2e55c4db0b0cebf7925dff98c17441378' })), h("div", { key: 'f704b3f31f652183d5dc8affd1f5decaa7f14c67', class: "mt-2 pl-1" }, h("table", { key: '3bc115f57c9e354c824376c6dc68a623451f2a37' }, this.legendData.map(legendInfo => {
            console.log(legendInfo);
            return (h("tr", { key: `legend_${legendInfo.id}`, class: "legendRow " }, h("td", null, h("div", { class: `legend_${legendInfo.design}`, style: { backgroundColor: legendInfo.color } })), h("td", null, h("span", { class: "font-small-3" }, legendInfo.name))));
        }))), h("hr", { key: 'b81aa20b6ee07afe80ba37972b21960d94015b3b' }), h("div", { key: '0b9812af67ca589e00d945f035298a1a4162ce5a', class: "mt-2" }, h("div", { key: 'c5d6d5431299a1d5f386118446ef7bcdd05a5772', class: "legendCalendar" }, h("div", { key: 'bc92d0f3f4bff27228578f08dcf225faa40af87f', class: "legendRow align-items-center" }, h("div", { key: 'fff85482ced3544c53a32cf0a29fd7b244cddf31', class: "legendCal br-t br-s br-bt" }, h("strong", { key: 'fe6273f14b4918e6e0afd349a610d44d7f7292fa' }, "MAR 2022")), h("div", { key: 'c7a51a480db799528813f1151d500496a42cec9f', class: "highphenLegend" }, locales.entries.Lcz_MonthAndYear)), h("div", { key: '32b604e490598169836a4403da519d82588e097c', class: "legendRow" }, h("div", { key: '5dba4679aca4b40cfafe27c4f93b88a805f60272', class: "legendCal headerCell align-items-center br-s" }, h("span", { key: 'cd23b24341de049c0677dc60646e92f68520346d', class: "badge badge-info  badge-pill" }, "3")), h("div", { key: '1c53a1448f8963d6c2f71d4d2d596191df22d276', class: "highphenLegend" }, h("div", { key: '0dba99ff11ceb30dd008cc5777f8e17e1917158c' }, locales.entries.Lcz_UnassignedUnits))), h("div", { key: 'd4c9cd7d8a4d47546b5157bd7f1dcb6e43a1e1d2', class: "legendRow" }, h("div", { key: '3783ad4e105c226f12397d821485c5c00d0719af', class: "legendCal dayTitle br-s" }, "Fri 18"), h("div", { key: '6018412d2eca3ca21e0f226dec4df312f3781605', class: "highphenLegend" }, locales.entries.Lcz_Date)), h("div", { key: 'eeb7915631734e91ffc40444ba572a72675c0805', class: "legendRow" }, h("div", { key: '7b1e9e34bff61996e8f6c5710fa02ea0d400a97f', class: "legendCal br-s br-bt dayCapacityPercent" }, "15%"), h("div", { key: '8f08b4e26689eaf6235737fd16c55ebfb6f2b5c3', class: "highphenLegend" }, locales.entries.Lcz_Occupancy)), h("div", { key: '0cee58e472baa80b81bbe038989456e1c9cd9e11', class: "legendRow" }, h("div", { key: 'd4a271d7187c431a28ab07832d45fa5533798c1d', class: "legendCal br-s br-bt  font-weight-bold total-availability" }, "20"), h("div", { key: '792b8876ce2edef63e65d4f002db19540b2d40a6', class: "highphenLegend" }, locales.entries.Lcz_TotalAvailability))))))));
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
                },
                "getter": false,
                "setter": false
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
