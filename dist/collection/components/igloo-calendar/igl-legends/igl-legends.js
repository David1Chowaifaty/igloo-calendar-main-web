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
        return (h(Host, { key: 'cc43d823caeebf9928e174c25385855e9ce31be5', class: "legendContainer pr-1 text-left" }, h("div", { key: 'f1d031cdc323d4d62cc6f161e13c5c97c3509a66', class: 'w-full' }, h("div", { key: 'e4e38cd9f7eaf15fd9f1365b69f594b89337c106', class: 'w-full' }, h("div", { key: 'c5be9e360c022ab78f385a7129d06a16b7f9ec44', class: "stickyHeader pt-1 " }, h("p", { key: '419d3f5586467a81e2c956b6aa2468a7a26e6750', class: "legendHeader" }, locales.entries.Lcz_Legend), h("div", { key: 'e8ef2ab34a35a68129c7136776c20c1522249332', class: "legendCloseBtn", onClick: () => this.handleOptionEvent('closeSideMenu') }, h("svg", { key: '15e0c4beb164de5160a8b83cdc090f4e4ac7a4a8', xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", height: 18, width: 18 }, h("path", { key: '83d009d38c89d9cb631966931b06fc5872853d7e', fill: "#6b6f82", d: "M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 246.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160zm352-160l-160 160c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L301.3 256 438.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0z" }))), h("hr", { key: '808bd84a7d9654e09f24b2ad77ed745af2448f16' })), h("div", { key: '30093996ce63bd5dab651a65e4fb55c88ce496cc', class: "mt-2 pl-1" }, this.legendData.map(legendInfo => (h("div", { class: "legendRow " }, h("div", { class: `legend_${legendInfo.design} mr-1`, style: { backgroundColor: legendInfo.color } }), h("span", { class: "font-small-3" }, legendInfo.name))))), h("hr", { key: '659f60a60fb7f5e235367956a9e108099400c1af' }), h("div", { key: 'eeb9917796c572582e10cab3019d6e1aba12036e', class: "mt-2" }, h("div", { key: '459ebb15bd39353a6ad85b0a72b5018e92566333', class: "legendCalendar" }, h("div", { key: 'ab69457624f64429502877318fb423873b63e9da', class: "legendRow align-items-center" }, h("div", { key: '8929e3dfe853189bf864f5e792b3fd55ddbb3138', class: "legendCal br-t br-s br-bt" }, h("strong", { key: '1ce77039539af84c31d5a7e773681b7a176e4835' }, "MAR 2022")), h("div", { key: 'b4d142fa55bfaae18d0238486710176b8a123836', class: "highphenLegend" }, locales.entries.Lcz_MonthAndYear)), h("div", { key: '64703ac23a65a08c87e9e34f7fc048a0fb1f46d5', class: "legendRow" }, h("div", { key: '82884ff4347d9e054326e855a18ee6a0bdde66d4', class: "legendCal headerCell align-items-center br-s" }, h("span", { key: '1fbb32fba304e47aac67a8def03e4b4ecf52da15', class: "badge badge-info  badge-pill" }, "3")), h("div", { key: '8bb79779387e514ed50f3f1492a92cbfa40695ab', class: "highphenLegend" }, h("div", { key: '690b01435e5797e5423c315bf79126e722c56ac1' }, locales.entries.Lcz_UnassignedUnits))), h("div", { key: '9d79969ad6613bdd39b643b051bc42743c540cd4', class: "legendRow" }, h("div", { key: '3347ed8722e92c3ece94f41a1534ccbfa5de3c6e', class: "legendCal dayTitle br-s" }, "Fri 18"), h("div", { key: '2fe60b74ad95ec689246fc395b8344f60e017d17', class: "highphenLegend" }, locales.entries.Lcz_Date)), h("div", { key: '338e3bca15f9200020b0815dec4a3c1e02ed773e', class: "legendRow" }, h("div", { key: '8eb7c6a7c3a7db390cbc5ee1c4169a47406325ae', class: "legendCal br-s br-bt dayCapacityPercent" }, "15%"), h("div", { key: 'aae87f53ee41957c944b28f6417fc84262d949f4', class: "highphenLegend" }, locales.entries.Lcz_Occupancy)), h("div", { key: 'ee5b70407130dbbc77d0951840234c086fe1e848', class: "legendRow" }, h("div", { key: 'cf2fc2a9642cbfce61f06c6d95715a009649a3db', class: "legendCal br-s br-bt  font-weight-bold total-availability" }, "20"), h("div", { key: 'd0e190e9c7c94aef4d840cd80c409d17cd0b8c30', class: "highphenLegend" }, locales.entries.Lcz_TotalAvailability))))))));
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
