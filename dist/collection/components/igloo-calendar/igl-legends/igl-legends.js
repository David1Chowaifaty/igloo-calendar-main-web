import locales from "../../../stores/locales.store";
import { Host, h } from "@stencil/core";
export class IglLegends {
    handleOptionEvent(key, data = '') {
        this.optionEvent.emit({ key, data });
    }
    render() {
        return (h(Host, { key: '04f4a855e5d3481f0d3219ab6456c1f46eb9da38', class: "legendContainer pr-1 text-left" }, h("div", { key: 'ec4be7dd9aa8d478365a0312dba128116bca5fa9', class: 'w-full' }, h("div", { key: 'd4e35449b1cbe65b0bcbf2f575ded962cbca35f4', class: 'w-full' }, h("div", { key: '7f8ca08e0eaedbe7e8975ea5a1022ccd15858e4c', class: "stickyHeader pt-1 " }, h("p", { key: '5cd85fe0fe65503b8fb9ed4691febbbfed881ecd', class: "legendHeader" }, locales.entries.Lcz_Legend), h("div", { key: 'd9a131e61eab0606ed41bd6b88d928a7ab8ddc83', class: "legendCloseBtn", onClick: () => this.handleOptionEvent('closeSideMenu') }, h("svg", { key: 'c32815807a4a398a0e23415ea079b8fc95ec372d', xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", height: 18, width: 18 }, h("path", { key: 'd142c913eadc9a4ab14d5bc800b8c693f4765304', fill: "#6b6f82", d: "M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 246.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160zm352-160l-160 160c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L301.3 256 438.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0z" }))), h("hr", { key: 'b9797b09ecf83e1be5fb117c5866f1d81e06d821' })), h("div", { key: '534f3b99f7b0567a445917fa44912650f65a49a9', class: "mt-2 pl-1" }, this.legendData.map(legendInfo => (h("div", { class: "legendRow " }, h("div", { class: `legend_${legendInfo.design} mr-1`, style: { backgroundColor: legendInfo.color } }), h("span", { class: "font-small-3" }, legendInfo.name))))), h("hr", { key: '28a27dd5f47546351eec3cf779351341ce5e7077' }), h("div", { key: '3f620fb6acbfa0311450016d1444681a827f2035', class: "mt-2" }, h("div", { key: '189478423b050cb2d53178bdbdebac4decd7a079', class: "legendCalendar" }, h("div", { key: 'a68f2b773cd3683e2eeb83bc34d9378992891fda', class: "legendRow align-items-center" }, h("div", { key: 'c97934b0555f1d9f04818139d77cfabe16088ab3', class: "legendCal br-t br-s br-bt" }, h("strong", { key: '08f49f415d4c8d944151df3141fe78599eaa26a3' }, "MAR 2022")), h("div", { key: '7874a9ba359c353f4c642fc7d1c9ec96d3ed76d7', class: "highphenLegend" }, locales.entries.Lcz_MonthAndYear)), h("div", { key: 'b6cf7d97740ea79852bd51bc0bebe8c96acc0048', class: "legendRow" }, h("div", { key: '2aeaece91ad8973c7c141312c9d000b28917cee4', class: "legendCal headerCell align-items-center br-s" }, h("span", { key: 'b9b54842795bda9b4f52349b7e2a61e8a0bd4127', class: "badge badge-info  badge-pill" }, "3")), h("div", { key: '9ec8d83f5390c49abe501b4313df774d53fb8162', class: "highphenLegend" }, h("div", { key: '6608f47e8ea78ddcd80cacf002c543d191d5c7aa' }, locales.entries.Lcz_UnassignedUnits))), h("div", { key: 'dc923321fe0b60e4b7b1e03b70e6bbc08e5a064f', class: "legendRow" }, h("div", { key: '74d9e97857dec3f50036ea3f65c038de9e413d1e', class: "legendCal dayTitle br-s" }, "Fri 18"), h("div", { key: 'f5c83f1963ea8f3f733ea56c81d0f44d62cca5b8', class: "highphenLegend" }, locales.entries.Lcz_Date)), h("div", { key: '386b1296e5564f848e71bdaf0df34247f3403382', class: "legendRow" }, h("div", { key: 'b562ff78774b20442834eb48056ddae5d5bf63f3', class: "legendCal br-s br-bt dayCapacityPercent" }, "15%"), h("div", { key: 'cd5329de4de6817b62b4485beca4f98c152c5a34', class: "highphenLegend" }, locales.entries.Lcz_Occupancy)), h("div", { key: '2abe4c2ea267e3e122a6cfd99323fa38a4a31b89', class: "legendRow" }, h("div", { key: 'bb8fdc411efdd960b272ff1630996f3bffd1943a', class: "legendCal br-s br-bt  font-weight-bold total-availability" }, "20"), h("div", { key: '8d74e28e376cef8cc06a1c1cab4dc7ba9fec8fd9', class: "highphenLegend" }, locales.entries.Lcz_TotalAvailability))))))));
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
