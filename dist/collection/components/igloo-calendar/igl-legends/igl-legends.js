import locales from "../../../stores/locales.store";
import { Host, h } from "@stencil/core";
export class IglLegends {
    handleOptionEvent(key, data = '') {
        this.optionEvent.emit({ key, data });
    }
    render() {
        return (h(Host, { key: '73c01488a22db5b6d7907b39bd29fd889f789ff3', class: "legendContainer pr-1 text-left" }, h("div", { key: 'a7f2e17edb7ca0012e8a74fa984282565ec82f8c', class: 'w-full' }, h("div", { key: '1bb439049095e064dbee8f4167d46ec930b32791', class: 'w-full' }, h("div", { key: 'c8bf0c072aaeb3072ee0f51386b2e7438ee1fc45', class: "stickyHeader pt-1 " }, h("p", { key: 'c9886f892843b271213a000b951640dc6dddee6f', class: "legendHeader" }, locales.entries.Lcz_Legend), h("div", { key: '1a50ec68851ab06e63cf6c0ef3484c215492f9b6', class: "legendCloseBtn", onClick: () => this.handleOptionEvent('closeSideMenu') }, h("svg", { key: '84815a1fc5b7f7aa203312327172ec0e0c2e0245', xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", height: 18, width: 18 }, h("path", { key: '5c83f08905650a81e95d1bc7e4e22d0d141b2b19', fill: "#6b6f82", d: "M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 246.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160zm352-160l-160 160c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L301.3 256 438.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0z" }))), h("hr", { key: '9a5ff289a9e7faa3d1354ca8522833415fcdb517' })), h("div", { key: '134a7e2bb7cdbb811290c144a2de9b6c8fc57e4e', class: "mt-2 pl-1" }, h("table", { key: '0a9a56a1bc9a1176e892245aa79eb441ebb3c006' }, this.legendData.map(legendInfo => {
            console.log(legendInfo);
            return (h("tr", { key: `legend_${legendInfo.id}`, class: "legendRow " }, h("td", null, legendInfo.design === 'broom' ? (h("svg", { xmlns: "http://www.w3.org/2000/svg", height: "12", width: "13.5", viewBox: "0 0 576 512", style: { display: 'block' } }, h("path", { fill: "black", d: "M566.6 54.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192-34.7-34.7c-4.2-4.2-10-6.6-16-6.6c-12.5 0-22.6 10.1-22.6 22.6l0 29.1L364.3 320l29.1 0c12.5 0 22.6-10.1 22.6-22.6c0-6-2.4-11.8-6.6-16l-34.7-34.7 192-192zM341.1 353.4L222.6 234.9c-42.7-3.7-85.2 11.7-115.8 42.3l-8 8C76.5 307.5 64 337.7 64 369.2c0 6.8 7.1 11.2 13.2 8.2l51.1-25.5c5-2.5 9.5 4.1 5.4 7.9L7.3 473.4C2.7 477.6 0 483.6 0 489.9C0 502.1 9.9 512 22.1 512l173.3 0c38.8 0 75.9-15.4 103.4-42.8c30.6-30.6 45.9-73.1 42.3-115.8z" }))) : legendInfo.design === 'check' ? (h("svg", { height: 14, width: 14, xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 640 640" }, h("path", { fill: "green", d: "M530.8 134.1C545.1 144.5 548.3 164.5 537.9 178.8L281.9 530.8C276.4 538.4 267.9 543.1 258.5 543.9C249.1 544.7 240 541.2 233.4 534.6L105.4 406.6C92.9 394.1 92.9 373.8 105.4 361.3C117.9 348.8 138.2 348.8 150.7 361.3L252.2 462.8L486.2 141.1C496.6 126.8 516.6 123.6 530.9 134z" }))) : (h("div", { class: `legend_${legendInfo.design}`, style: { backgroundColor: legendInfo.color } }))), h("td", null, h("span", { class: "font-small-3" }, legendInfo.name))));
        }))), h("hr", { key: 'd4c001bd96b743f5a45f66779da0e3b903690a7c' }), h("div", { key: '94c10fb8c1cbbce024ddd48a87ae8d139cbd9bb1', class: "mt-2" }, h("div", { key: 'b134a2d2cd45a8dab406d5cb44bf76af2460d497', class: "legendCalendar" }, h("div", { key: '6277c2a2d800e4404b566c445b7bb05aa35a6a97', class: "legendRow align-items-center" }, h("div", { key: '214b9aeb28fda1e66837ab7b03f75e5efd19c83c', class: "legendCal br-t br-s br-bt" }, h("strong", { key: '3899421cd306031afd2152438c2eb5fa4f499cee' }, "MAR 2022")), h("div", { key: 'ead4fdb1eec7cf82911e3ba6375819781417d65f', class: "highphenLegend" }, locales.entries.Lcz_MonthAndYear)), h("div", { key: '9b303e4a6f22098988e645216a9144bcc11391f4', class: "legendRow" }, h("div", { key: 'de40e3982012f7c1a853000a1b903e28e0742ec6', class: "legendCal headerCell align-items-center br-s" }, h("span", { key: 'e0fb0c5a1f48c9774d41c0e594856f8f43a1c283', class: "badge badge-info  badge-pill" }, "3")), h("div", { key: '11976c2b26a78a331989426fcff99904ee1e7c77', class: "highphenLegend" }, h("div", { key: '173eb31b56eb2364ce231b75b38422323dad9c9a' }, locales.entries.Lcz_UnassignedUnits))), h("div", { key: 'ec63efaf62c4befd0b6ec4b9a3f834c8d80519be', class: "legendRow" }, h("div", { key: 'e49fe9bec86a5309a956dc776c08d2dd2bfa7b8f', class: "legendCal dayTitle br-s" }, "Fri 18"), h("div", { key: 'a90622e8c40e7fa88f606763f90389f6fd7e88a6', class: "highphenLegend" }, locales.entries.Lcz_Date)), h("div", { key: 'aba6d30ca3dada5965cb09af80aef7fdbe90c7d7', class: "legendRow" }, h("div", { key: '5cbb39cf7d572acf636bc8b5a42c2608550aabab', class: "legendCal br-s br-bt dayCapacityPercent" }, "15%"), h("div", { key: '1f79a9e71b6786dfa516c638992108ba0885c961', class: "highphenLegend" }, locales.entries.Lcz_Occupancy)), h("div", { key: '236bc58e136137fd3f75aaf24978400a82b8ec31', class: "legendRow" }, h("div", { key: '12734c20bce8d86624f5516fee1678b36b4e0e62', class: "legendCal br-s br-bt  font-weight-bold total-availability" }, "20"), h("div", { key: 'b85b15e55ca2068138f75c1950e79f9956934549', class: "highphenLegend" }, locales.entries.Lcz_TotalAvailability))))))));
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
