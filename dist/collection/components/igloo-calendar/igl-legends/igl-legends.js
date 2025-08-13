import locales from "../../../stores/locales.store";
import { Host, h } from "@stencil/core";
export class IglLegends {
    handleOptionEvent(key, data = '') {
        this.optionEvent.emit({ key, data });
    }
    render() {
        return (h(Host, { key: 'f87ac5a5846a2937b740e7161545f6df2aa4ba82', class: "legendContainer pr-1 text-left" }, h("div", { key: '80a10120a60a81979866fca59946d03c4151975f', class: 'w-full' }, h("div", { key: 'f285217b7ca45cdd1d30c433e5582099a4281999', class: 'w-full' }, h("div", { key: '5105c2d091e919c090da6f2cfe9e873f50b68971', class: "stickyHeader pt-1 " }, h("p", { key: '25dc9dd523b68ee62b5971fb6b7e94e96cf67aaa', class: "legendHeader" }, locales.entries.Lcz_Legend), h("div", { key: '8638690eaa4dd6cba210766a2c8029cb46987991', class: "legendCloseBtn", onClick: () => this.handleOptionEvent('closeSideMenu') }, h("svg", { key: 'b854d96eddfd334d5ccaa051000ea90d0a3a287c', xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", height: 18, width: 18 }, h("path", { key: '506a45064bd7c7ac24b16ad365dde461e69b4a33', fill: "#6b6f82", d: "M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 246.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160zm352-160l-160 160c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L301.3 256 438.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0z" }))), h("hr", { key: 'a0b1627779aa98080777b817a3930d750904afc9' })), h("div", { key: '3e03d969d788293f3cc599fa4e4a6e171c791ec0', class: "mt-2 pl-1" }, h("table", { key: '22877924bcfe117ac0767be1a00e679b215d1bd3' }, this.legendData.map(legendInfo => {
            console.log(legendInfo);
            return (h("tr", { key: `legend_${legendInfo.id}`, class: "legendRow " }, h("td", null, h("div", { class: `legend_${legendInfo.design}`, style: { backgroundColor: legendInfo.color } })), h("td", null, h("span", { class: "font-small-3" }, legendInfo.name))));
        }))), h("hr", { key: '12f73da038ae46c6d1efa2d4c15225f69a0a0b86' }), h("div", { key: 'b99bbb42239818531096bbadb6a74938f5186c75', class: "mt-2" }, h("div", { key: 'ddc3ddac7428d18933fb90d1f267287a5d561353', class: "legendCalendar" }, h("div", { key: '9900a0978716d4701842b8fbcf879ebc84779104', class: "legendRow align-items-center" }, h("div", { key: '13c66d533a72421d68168280b84ef288e57ec7fd', class: "legendCal br-t br-s br-bt" }, h("strong", { key: '7359fac430b6a3daa9b5bee08ff8ae84d182cf91' }, "MAR 2022")), h("div", { key: 'f0e1f902d209cb736659e6be2a4fb567942bf109', class: "highphenLegend" }, locales.entries.Lcz_MonthAndYear)), h("div", { key: 'ed378c95978f6f209fb929a7a556d2e7a29208b6', class: "legendRow" }, h("div", { key: 'eb33ef53270da68ae11500351aef05a3465c211a', class: "legendCal headerCell align-items-center br-s" }, h("span", { key: 'a20f9635da1182dbbcefe934f4919c5af72a8df0', class: "badge badge-info  badge-pill" }, "3")), h("div", { key: 'a754c981ab7383398a8315021f198f62afcbe669', class: "highphenLegend" }, h("div", { key: '04882cde450a7108086da8eea9e550c5be034c67' }, locales.entries.Lcz_UnassignedUnits))), h("div", { key: 'b7278c2bd7c60556fc7c89e9fdf4c85c4c9eeff3', class: "legendRow" }, h("div", { key: '2c5f5b3c5a39fd77567da0f8d22c5abe7744f87a', class: "legendCal dayTitle br-s" }, "Fri 18"), h("div", { key: '6ae127678fb575ecc06a654c7f7750283f2749af', class: "highphenLegend" }, locales.entries.Lcz_Date)), h("div", { key: 'e1422da9d866cd1df53040528ec35949adb96a9f', class: "legendRow" }, h("div", { key: '3e305db164cb187bb056dad8cf13f437fde0b7cf', class: "legendCal br-s br-bt dayCapacityPercent" }, "15%"), h("div", { key: '457fd0c89f6a73d5b01a2ce660e560f308cead63', class: "highphenLegend" }, locales.entries.Lcz_Occupancy)), h("div", { key: '94a2814d61c64558b1851ed15ac53fa12d8f62c5', class: "legendRow" }, h("div", { key: '7a6e598ce9a55641be88fa68f3893bbdc9545b13', class: "legendCal br-s br-bt  font-weight-bold total-availability" }, "20"), h("div", { key: '8f7b7e2f649aedd1f2c8f56d8b43841a4c48da1e', class: "highphenLegend" }, locales.entries.Lcz_TotalAvailability))))))));
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
