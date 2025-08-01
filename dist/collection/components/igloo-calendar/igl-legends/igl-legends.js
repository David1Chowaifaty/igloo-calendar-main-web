import locales from "../../../stores/locales.store";
import { Host, h } from "@stencil/core";
export class IglLegends {
    handleOptionEvent(key, data = '') {
        this.optionEvent.emit({ key, data });
    }
    render() {
        return (h(Host, { key: 'f7dc39f828acdd87a08c2e3a01663b431d1d62eb', class: "legendContainer pr-1 text-left" }, h("div", { key: 'ddd590a13f6762f4ee707397ab5da9089708fcc2', class: 'w-full' }, h("div", { key: '92a8ed997b4d817372ea8454a296f54901de8efc', class: 'w-full' }, h("div", { key: '7f5a3b6b4f73b1f3966087a426e2c172f0ec6584', class: "stickyHeader pt-1 " }, h("p", { key: 'e940adc055c3669d1f8119f13bff34e386590fae', class: "legendHeader" }, locales.entries.Lcz_Legend), h("div", { key: '1c4b5b8e034736249033252a3065778bcd50c115', class: "legendCloseBtn", onClick: () => this.handleOptionEvent('closeSideMenu') }, h("svg", { key: '73e9b3122a359f9e084b5dcb12e402a5b136d701', xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", height: 18, width: 18 }, h("path", { key: 'cab7748859b876d8db1c69be6b3dc749ad84857b', fill: "#6b6f82", d: "M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 246.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160zm352-160l-160 160c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L301.3 256 438.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0z" }))), h("hr", { key: '7ea00e170695a3044f97dca90fc8201239b877c5' })), h("div", { key: 'e1d0387913ac3b24e62b1b76f31b25cda53db9c1', class: "mt-2 pl-1" }, h("table", { key: '92f9f243041b88229bb97f0c4706bc1bfa9b427a' }, this.legendData.map(legendInfo => {
            console.log(legendInfo);
            return (h("tr", { key: `legend_${legendInfo.id}`, class: "legendRow " }, h("td", null, h("div", { class: `legend_${legendInfo.design}`, style: { backgroundColor: legendInfo.color } })), h("td", null, h("span", { class: "font-small-3" }, legendInfo.name))));
        }))), h("hr", { key: '2c7a8da10d26a154e122e7388282f18244491ae5' }), h("div", { key: 'bae46e9befeb31109659487430cde4c828f32603', class: "mt-2" }, h("div", { key: '0e3d1f479be1343304502bf13325b50326dbe51c', class: "legendCalendar" }, h("div", { key: '636c637ab485eacae717922d5dccc29f0674e84e', class: "legendRow align-items-center" }, h("div", { key: '1478685b283b591ea180633a02572d89b615b0ac', class: "legendCal br-t br-s br-bt" }, h("strong", { key: '7acfbb8f046bee9b1a193f64f5e598d261fca27f' }, "MAR 2022")), h("div", { key: 'd629773ab4f11a893fd4be46eb7288b06ac6f815', class: "highphenLegend" }, locales.entries.Lcz_MonthAndYear)), h("div", { key: '604b99ca077359f4fc5e97016cc905b73544baac', class: "legendRow" }, h("div", { key: '6cff2148b46ada4c1fd9fad5ffd87bf1494763fe', class: "legendCal headerCell align-items-center br-s" }, h("span", { key: 'b311b93373527f40b0dd71781cab4ce3e593fe40', class: "badge badge-info  badge-pill" }, "3")), h("div", { key: 'df34e9e1105097a250d29cad0979d615bbd18234', class: "highphenLegend" }, h("div", { key: '473f85e83056d6ca7ee531a06b221c3e04ceaeae' }, locales.entries.Lcz_UnassignedUnits))), h("div", { key: '1edcedad106c37102f75f8f16b193775049ad6b1', class: "legendRow" }, h("div", { key: 'f038e480b261f21b957e6bbaabafa12ea06668ae', class: "legendCal dayTitle br-s" }, "Fri 18"), h("div", { key: '94b93a894d05bdcf08ad99a453995e6557797a77', class: "highphenLegend" }, locales.entries.Lcz_Date)), h("div", { key: '7135ff7cda8fd0f04101133c28bf54c07a7b8b62', class: "legendRow" }, h("div", { key: '4de93e6ab668c6d05b15a5327c86b607e5f8f204', class: "legendCal br-s br-bt dayCapacityPercent" }, "15%"), h("div", { key: 'a100027809bcf31b170408c20ec3cc01f1883fbc', class: "highphenLegend" }, locales.entries.Lcz_Occupancy)), h("div", { key: '942b6c682911d458700970a496795d83ce9476f3', class: "legendRow" }, h("div", { key: 'f003fd51e3ff002bc76d4bf46f822b57474c03b0', class: "legendCal br-s br-bt  font-weight-bold total-availability" }, "20"), h("div", { key: '4b86588f7946aad85047d96a53545ad0c949171b', class: "highphenLegend" }, locales.entries.Lcz_TotalAvailability))))))));
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
