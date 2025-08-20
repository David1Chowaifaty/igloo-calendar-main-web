import locales from "../../../stores/locales.store";
import { Host, h } from "@stencil/core";
export class IglLegends {
    handleOptionEvent(key, data = '') {
        this.optionEvent.emit({ key, data });
    }
    render() {
        return (h(Host, { key: '585508ea346488f4cb4b9a3a8db0e2bd0a1592e7', class: "legendContainer pr-1 text-left" }, h("div", { key: '9581010b25d36a6edc46eb291f84705bd8a0698a', class: 'w-full' }, h("div", { key: '4167fd624f229b1abbc1af885bc6d2b9238e26d6', class: 'w-full' }, h("div", { key: '42077c0bc360030902f0fdd8c172647d74a3a693', class: "stickyHeader pt-1 " }, h("p", { key: 'f81901f8277997cf4a6c4a96dd27b19f2ffe4963', class: "legendHeader" }, locales.entries.Lcz_Legend), h("div", { key: 'c99a21d1afb2d6c6e0f8559066895eb3f59dfaf2', class: "legendCloseBtn", onClick: () => this.handleOptionEvent('closeSideMenu') }, h("svg", { key: '0b277c257f72ec5d4372425eafa467f055230660', xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", height: 18, width: 18 }, h("path", { key: '737224edd2c12f98e68244f9dff82a4751871f01', fill: "#6b6f82", d: "M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 246.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160zm352-160l-160 160c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L301.3 256 438.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0z" }))), h("hr", { key: '21f106b2e55c4db0b0cebf7925dff98c17441378' })), h("div", { key: 'f704b3f31f652183d5dc8affd1f5decaa7f14c67', class: "mt-2 pl-1" }, h("table", { key: '3bc115f57c9e354c824376c6dc68a623451f2a37' }, this.legendData.map(legendInfo => {
            console.log(legendInfo);
            return (h("tr", { key: `legend_${legendInfo.id}`, class: "legendRow " }, h("td", null, legendInfo.design === 'broom' ? (h("svg", { xmlns: "http://www.w3.org/2000/svg", height: "12", width: "13.5", viewBox: "0 0 576 512", style: { display: 'block' } }, h("path", { fill: "black", d: "M566.6 54.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192-34.7-34.7c-4.2-4.2-10-6.6-16-6.6c-12.5 0-22.6 10.1-22.6 22.6l0 29.1L364.3 320l29.1 0c12.5 0 22.6-10.1 22.6-22.6c0-6-2.4-11.8-6.6-16l-34.7-34.7 192-192zM341.1 353.4L222.6 234.9c-42.7-3.7-85.2 11.7-115.8 42.3l-8 8C76.5 307.5 64 337.7 64 369.2c0 6.8 7.1 11.2 13.2 8.2l51.1-25.5c5-2.5 9.5 4.1 5.4 7.9L7.3 473.4C2.7 477.6 0 483.6 0 489.9C0 502.1 9.9 512 22.1 512l173.3 0c38.8 0 75.9-15.4 103.4-42.8c30.6-30.6 45.9-73.1 42.3-115.8z" }))) : legendInfo.design === 'check' ? (h("svg", { height: 14, width: 14, xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 640 640" }, h("path", { fill: "green", d: "M530.8 134.1C545.1 144.5 548.3 164.5 537.9 178.8L281.9 530.8C276.4 538.4 267.9 543.1 258.5 543.9C249.1 544.7 240 541.2 233.4 534.6L105.4 406.6C92.9 394.1 92.9 373.8 105.4 361.3C117.9 348.8 138.2 348.8 150.7 361.3L252.2 462.8L486.2 141.1C496.6 126.8 516.6 123.6 530.9 134z" }))) : (h("div", { class: `legend_${legendInfo.design}`, style: { backgroundColor: legendInfo.color } }))), h("td", null, h("span", { class: "font-small-3" }, legendInfo.name))));
        }))), h("hr", { key: 'c4a4103c405188138766d7eee9986d98764d581a' }), h("div", { key: '6bc624c2ab4e6da4579829ab5cdaa7680511ffe0', class: "mt-2" }, h("div", { key: '82a00ab8ba0eb67fa64eaa26d0a4a0856d9dfd3f', class: "legendCalendar" }, h("div", { key: '7f63cf6889d431e4ede9c86ad4d5c3ea9b50e712', class: "legendRow align-items-center" }, h("div", { key: '9488dfa3d5120e571190613d6659ef8cd025321d', class: "legendCal br-t br-s br-bt" }, h("strong", { key: '62669f736b93b6daf44b1650ecb556f780ea1b76' }, "MAR 2022")), h("div", { key: '6954fae19e182d25ea410e4836b76308acfdaea1', class: "highphenLegend" }, locales.entries.Lcz_MonthAndYear)), h("div", { key: 'a519aa4f1981bedf90d00eacf8dda19c325c1686', class: "legendRow" }, h("div", { key: 'e1db7be87f9eb378865da4dc3202eb7f34985afd', class: "legendCal headerCell align-items-center br-s" }, h("span", { key: '92f755f6ffdd97689d8dd84fb6c2c4f3c78aa6fb', class: "badge badge-info  badge-pill" }, "3")), h("div", { key: 'c7b2d95d248c65be1922ca8e842c6addd6a9ebde', class: "highphenLegend" }, h("div", { key: 'd36a903f1c26934a34c5a6da67e8df603a2e0346' }, locales.entries.Lcz_UnassignedUnits))), h("div", { key: 'c9284ac9a586bbdb309d5060bdda2528d0d9e655', class: "legendRow" }, h("div", { key: '9c26f6005dd621da439bd2a4878c7b81b26953e6', class: "legendCal dayTitle br-s" }, "Fri 18"), h("div", { key: '8b886d3c75e7b098c55b4693bd54fb55e00920b2', class: "highphenLegend" }, locales.entries.Lcz_Date)), h("div", { key: '3f00a81e0a805d35cfa0d0d091cd73eb70eae4a3', class: "legendRow" }, h("div", { key: 'c7d654be95d1b631a8eed05759fc3ce5bfa8e59b', class: "legendCal br-s br-bt dayCapacityPercent" }, "15%"), h("div", { key: '0fed6df3bea770a3bbd2230467487bed53960dce', class: "highphenLegend" }, locales.entries.Lcz_Occupancy)), h("div", { key: '1cfe1a0a09017cf28446f02b456ec01fdbed7650', class: "legendRow" }, h("div", { key: '6b3695f9d46429ffe1c98818c1d4b974d890c2b2', class: "legendCal br-s br-bt  font-weight-bold total-availability" }, "20"), h("div", { key: '4ef04b5ca37151cf43e653d1ea0ec7297860ad71', class: "highphenLegend" }, locales.entries.Lcz_TotalAvailability))))))));
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
