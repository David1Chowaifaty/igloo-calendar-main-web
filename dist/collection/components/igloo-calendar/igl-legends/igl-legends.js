import locales from "../../../stores/locales.store";
import { Host, h } from "@stencil/core";
export class IglLegends {
    handleOptionEvent(key, data = '') {
        this.optionEvent.emit({ key, data });
    }
    render() {
        return (h(Host, { key: 'a5bcf1590a1c656cce93871aff461d3f7f556ea2', class: "legendContainer pr-1 text-left" }, h("div", { key: '848a55da0f4126fc6a8de5d8ef932d2f1f4202d4', class: 'w-full' }, h("div", { key: 'ed9a57fd6573150711d2184d5f2447154704c45b', class: 'w-full' }, h("div", { key: '69968242dc935268c3239b4a3dc5b8f7a239cc7c', class: "stickyHeader pt-1 " }, h("p", { key: 'bb5545a6bbe2d88f92236050ae4bf1f0b9786b15', class: "legendHeader" }, locales.entries.Lcz_Legend), h("div", { key: 'e3e1845a5145d298ca8ade9b0351af1d29cb14e1', class: "legendCloseBtn", onClick: () => this.handleOptionEvent('closeSideMenu') }, h("svg", { key: '3fc2520a0be2117f2a62f83ecc9067ac6a5ddb63', xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", height: 18, width: 18 }, h("path", { key: 'aab2392da9a10aa160807859fd5253174c8284ff', fill: "#6b6f82", d: "M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 246.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160zm352-160l-160 160c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L301.3 256 438.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0z" }))), h("hr", { key: 'b467675743a2efd3beb68c3164c8d9a3b46f3a7d' })), h("div", { key: 'c7a270b482643da30720e234bbe8e98c899b778e', class: "mt-2 pl-1" }, this.legendData.map(legendInfo => (h("div", { class: "legendRow " }, h("div", { class: `legend_${legendInfo.design} mr-1`, style: { backgroundColor: legendInfo.color } }), h("span", { class: "font-small-3" }, legendInfo.name))))), h("hr", { key: '1603011888d0f7da5972a0990e92ce68a1786ab5' }), h("div", { key: 'f9113ad2c72c9eee42ed0042846d2975350966f7', class: "mt-2" }, h("div", { key: '9b3834c7c0c1677fa06b6f5edbde5c4bad64ea38', class: "legendCalendar" }, h("div", { key: '6b7759f91792f19dc8b8db1349b9d07448e78dc0', class: "legendRow align-items-center" }, h("div", { key: '0658daec96fe2d227ab9cf2271382bc7851a70f2', class: "legendCal br-t br-s br-bt" }, h("strong", { key: '336b7f4ceedbcb31d18ab79686e16037733e1621' }, "MAR 2022")), h("div", { key: '211942b6f470ce74e151eb62a32e141ef019dda1', class: "highphenLegend" }, locales.entries.Lcz_MonthAndYear)), h("div", { key: 'cd9c1675f558e27fb20593c0e54bd4255d2a800f', class: "legendRow" }, h("div", { key: '8726598ce4f71a62979af4ede485dcdf8c94fee0', class: "legendCal headerCell align-items-center br-s" }, h("span", { key: '14d0786b6d63899697b00bfee831c57bf4c68b0c', class: "badge badge-info  badge-pill" }, "3")), h("div", { key: '26d55afdbf65e94a0eb229926c11f41d432cded7', class: "highphenLegend" }, h("div", { key: '70e170736ffa5efab11f421f2f20ef94ea908f88' }, locales.entries.Lcz_UnassignedUnits))), h("div", { key: '5e3705891e55881306632d6e3d5f34f9389b429c', class: "legendRow" }, h("div", { key: '05cea2a9e4f7036c8becaefd6946421db0941bd9', class: "legendCal dayTitle br-s" }, "Fri 18"), h("div", { key: 'c333f39b2b478b00f075979c1b79c6340af2b48c', class: "highphenLegend" }, locales.entries.Lcz_Date)), h("div", { key: '04dfd8b633a32a9a95719cfa25a4ecf23c376b39', class: "legendRow" }, h("div", { key: '2a76714ed68952c41abf58301e628a6c1c33cd1e', class: "legendCal br-s br-bt dayCapacityPercent" }, "15%"), h("div", { key: 'f1b10245b00c377c2cddf29773b2d5fbaebe35f3', class: "highphenLegend" }, locales.entries.Lcz_Occupancy)), h("div", { key: '38c085d92a928e30c6302e6fa98599092c7d8f2d', class: "legendRow" }, h("div", { key: '2290131f2d69144ab91400c227339ca8b1c6f40e', class: "legendCal br-s br-bt  font-weight-bold total-availability" }, "20"), h("div", { key: '053448771c487068a6a2ac72f8b8366f4dff98bd', class: "highphenLegend" }, locales.entries.Lcz_TotalAvailability))))))));
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
