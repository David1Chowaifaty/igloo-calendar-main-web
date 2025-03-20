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
        return (h(Host, { key: '7c6f6f45519c6b38afcd4676feeee23e90dd5e54', class: "legendContainer pr-1 text-left" }, h("div", { key: 'd5c904979a1c216185a6f573eb0e7d2844950fd8', class: 'w-full' }, h("div", { key: 'c13b31c747a54b2192023e27265e996edfcd345b', class: 'w-full' }, h("div", { key: '3768507a824e125d7823f9f2a808ef0726a35480', class: "stickyHeader pt-1 " }, h("p", { key: '741585c87605efb82f8ffd61dc94c7391c9a8e67', class: "legendHeader" }, locales.entries.Lcz_Legend), h("div", { key: '052344a6eba12aa7b3676100ef0883649326f360', class: "legendCloseBtn", onClick: () => this.handleOptionEvent('closeSideMenu') }, h("svg", { key: '91778d01bb9ee1e557b719b668a597548527239c', xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", height: 18, width: 18 }, h("path", { key: '2284be1e2e2344ee0b5bb2eef9dd10ad537cb7be', fill: "#6b6f82", d: "M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 246.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160zm352-160l-160 160c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L301.3 256 438.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0z" }))), h("hr", { key: '0a234d32f65038872cbcc3750944d1c01ac311d8' })), h("div", { key: 'abde1013f3d2d4a060eb646de375c8de844da940', class: "mt-2 pl-1" }, this.legendData.map(legendInfo => (h("div", { class: "legendRow " }, h("div", { class: `legend_${legendInfo.design} mr-1`, style: { backgroundColor: legendInfo.color } }), h("span", { class: "font-small-3" }, legendInfo.name))))), h("hr", { key: 'bafeb99dde0d7f04431ee7fb70c8ce10bc098b28' }), h("div", { key: '486131297e672dad2926eab7815b84a5e4c61ec7', class: "mt-2" }, h("div", { key: '67e01c05b4a2005777152177a751a45c5310f1ca', class: "legendCalendar" }, h("div", { key: '35a3851db2a39f3c50504bed8d65f35fa6ade64b', class: "legendRow align-items-center" }, h("div", { key: '05009b54dbc005bbed611bb2b08f86a89c6b5ffd', class: "legendCal br-t br-s br-bt" }, h("strong", { key: 'ae6cfbf15eb893267839dd6eee0cea8518011b5f' }, "MAR 2022")), h("div", { key: 'f005a567e18cc53a5f03f5a09a7bb814372c994f', class: "highphenLegend" }, locales.entries.Lcz_MonthAndYear)), h("div", { key: '13ac0e8d7eee0d658783b35e3fd0634667ac26bd', class: "legendRow" }, h("div", { key: '572c5ed29117e4877a828630c44a53b1e1e2a445', class: "legendCal headerCell align-items-center br-s" }, h("span", { key: '965b5407f15dce2db1014c290eb2739f08ff2e0c', class: "badge badge-info  badge-pill" }, "3")), h("div", { key: 'fba2f11b2dd374ddef2f3db5c4a7ab2c72888833', class: "highphenLegend" }, h("div", { key: 'b23ca536ec1906e47574ce4e6dd36d8d3f80bc96' }, locales.entries.Lcz_UnassignedUnits))), h("div", { key: 'fdfe5954c069ef7dbe90583ba018b47d08eb216f', class: "legendRow" }, h("div", { key: '888093644f5a176adbc36a89b6cc7044e027bfd5', class: "legendCal dayTitle br-s" }, "Fri 18"), h("div", { key: '1f673a06682ae2d61b4887d176d882ca61093fea', class: "highphenLegend" }, locales.entries.Lcz_Date)), h("div", { key: '51d22d67338759082f0bd4fa4850aeb9b0cbb85d', class: "legendRow" }, h("div", { key: 'fbeae48592ecdb8bc60a83c2cb16547e1a63d71b', class: "legendCal br-s br-bt dayCapacityPercent" }, "15%"), h("div", { key: '8d687f6c653e3989fff2cd94feea412a0a0ecf76', class: "highphenLegend" }, locales.entries.Lcz_Occupancy)), h("div", { key: '64591b3996afc8f2f26bc90ddb8c1e7984ff8ba0', class: "legendRow" }, h("div", { key: '60462887c86bd549aa8fae7a8e14489a28cf24b6', class: "legendCal br-s br-bt  font-weight-bold total-availability" }, "20"), h("div", { key: 'dda94ef152308518e1a53342d8f67916ebd8c064', class: "highphenLegend" }, locales.entries.Lcz_TotalAvailability))))))));
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
