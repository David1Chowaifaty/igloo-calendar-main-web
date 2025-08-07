import locales from "../../../stores/locales.store";
import { Host, h } from "@stencil/core";
export class IglLegends {
    handleOptionEvent(key, data = '') {
        this.optionEvent.emit({ key, data });
    }
    render() {
        return (h(Host, { key: 'ed9c0c97c4ac9c2ca0af08dc4afb1703816ad49a', class: "legendContainer pr-1 text-left" }, h("div", { key: '6aa97506965e993b903e4a4e333816d4f792647c', class: 'w-full' }, h("div", { key: '99cbd4cb14049f543fe27a5dd99001ceb13f9f97', class: 'w-full' }, h("div", { key: '49346530e092c10c5d38984743ea934bed959d1c', class: "stickyHeader pt-1 " }, h("p", { key: '6aec61cc3a6b06d716e035b013d58562455b54a1', class: "legendHeader" }, locales.entries.Lcz_Legend), h("div", { key: '1b045cb400e30b9b7548f7f62c124ce83e0cac0a', class: "legendCloseBtn", onClick: () => this.handleOptionEvent('closeSideMenu') }, h("svg", { key: '9ee9354ec18d5f303916ae150ee18b24b40bb9d8', xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", height: 18, width: 18 }, h("path", { key: '03b2705c5a94c444b359ce537180d018540a6520', fill: "#6b6f82", d: "M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 246.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160zm352-160l-160 160c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L301.3 256 438.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0z" }))), h("hr", { key: 'fab0fdbc2d502e7b5a8df89749d436132166325d' })), h("div", { key: '683c21c4ee84aea6e3615742888178327aa73b2d', class: "mt-2 pl-1" }, h("table", { key: '82aa053103187b6f7165ad15365b21d755033fce' }, this.legendData.map(legendInfo => {
            console.log(legendInfo);
            return (h("tr", { key: `legend_${legendInfo.id}`, class: "legendRow " }, h("td", null, h("div", { class: `legend_${legendInfo.design}`, style: { backgroundColor: legendInfo.color } })), h("td", null, h("span", { class: "font-small-3" }, legendInfo.name))));
        }))), h("hr", { key: '3490c9d5668ee7330e9cbe0183001ceaabd8d85d' }), h("div", { key: '7318184f8357c79e1a0337e6444c286a98cdce30', class: "mt-2" }, h("div", { key: '4943ec2202d8d79adefa622090b260fa2ed82567', class: "legendCalendar" }, h("div", { key: '8524c8aa2be86b59392cf34b3309a5c229078b75', class: "legendRow align-items-center" }, h("div", { key: '320ca99363bd9bac98733c1d9ff9927b6779b421', class: "legendCal br-t br-s br-bt" }, h("strong", { key: '6b3e491c6bff9dc4d60348be4e682b0beba7f617' }, "MAR 2022")), h("div", { key: '3586e7b40ba90d8f6ac9615e7d2873af082fa0b4', class: "highphenLegend" }, locales.entries.Lcz_MonthAndYear)), h("div", { key: '7097609023bb993afce62e17a7efff50e3f2f978', class: "legendRow" }, h("div", { key: '0d8d6063a8ad0f87c7846de37f9d5fbebca263b8', class: "legendCal headerCell align-items-center br-s" }, h("span", { key: '3e007fede4f43179c5817b0a6e39824a26523ee5', class: "badge badge-info  badge-pill" }, "3")), h("div", { key: '94e1f225dd1f9f25e12a04ea6d80aad8008e61c0', class: "highphenLegend" }, h("div", { key: '84a8b146f48691beef544bd7c491241e3b088fb8' }, locales.entries.Lcz_UnassignedUnits))), h("div", { key: '9b8d7b07e1ffb6b4fe2467d8c00a350a6161924b', class: "legendRow" }, h("div", { key: 'd0ae99df863d9a856d1aaaab3614e154479590eb', class: "legendCal dayTitle br-s" }, "Fri 18"), h("div", { key: '70e355d40cab1677fb11a33e357f80535165c03a', class: "highphenLegend" }, locales.entries.Lcz_Date)), h("div", { key: 'f1bcd03443c5ab1335aebd4b597ebb1abeaceeb3', class: "legendRow" }, h("div", { key: '1466b01506242d11ea8add0991cce7de9513aaf9', class: "legendCal br-s br-bt dayCapacityPercent" }, "15%"), h("div", { key: '2a83ad42f84b700a52f43896f5a0e42176ddf05c', class: "highphenLegend" }, locales.entries.Lcz_Occupancy)), h("div", { key: 'b7454dc46754e8145a33ac6cb5364b0c351c8b07', class: "legendRow" }, h("div", { key: 'ae2cad55b490c7f1e32562edcff3e3d3493c3134', class: "legendCal br-s br-bt  font-weight-bold total-availability" }, "20"), h("div", { key: '8e6c52089c8e5c69b19cb710a4a211090ac90474', class: "highphenLegend" }, locales.entries.Lcz_TotalAvailability))))))));
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
