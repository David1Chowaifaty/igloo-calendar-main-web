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
        return (h(Host, { key: 'aad30bbf99bcca73a199e696106ce5fba0eac973', class: "legendContainer pr-1 text-left" }, h("div", { key: '788bda7277825f04908ec3f8523331dfbfd26e6c', class: 'w-full' }, h("div", { key: 'b002bfb3d165481b4d39ba5ae5624fc5ee32f5a2', class: 'w-full' }, h("div", { key: '6eb078d30ecbdf75e95c7561a2be0a83b4e467c8', class: "stickyHeader pt-1 " }, h("p", { key: '752c301eda37fe3ac2b535cf05afab38ba4aad46', class: "legendHeader" }, locales.entries.Lcz_Legend), h("div", { key: 'd43a6d09fcf39ef8917b0bab877825fccae49f57', class: "legendCloseBtn", onClick: () => this.handleOptionEvent('closeSideMenu') }, h("svg", { key: '01f5b786d07bea0dba5843ae9d346ce315aa8880', xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", height: 18, width: 18 }, h("path", { key: '21addb4306b528a1fad2fd6e649bd153529a648b', fill: "#6b6f82", d: "M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 246.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160zm352-160l-160 160c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L301.3 256 438.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0z" }))), h("hr", { key: 'a0704f49deb14bc65b27717887a05628932a623e' })), h("div", { key: '45d30658662730af8f38cb163c549618d1866dbf', class: "mt-2 pl-1" }, this.legendData.map(legendInfo => (h("div", { class: "legendRow " }, h("div", { class: `legend_${legendInfo.design} mr-1`, style: { backgroundColor: legendInfo.color } }), h("span", { class: "font-small-3" }, legendInfo.name))))), h("hr", { key: '1cf5c9eacb6a3afdfe323e2af8fb57a3e7c5a45f' }), h("div", { key: '77bee324ebcf84fbdb264dce64faefa1b0025f96', class: "mt-2" }, h("div", { key: 'b6d5d7253ae0240caf9562fe5977c143b3df775b', class: "legendCalendar" }, h("div", { key: '7acf414ed268a5572cf2a164f6149271d68537c0', class: "legendRow align-items-center" }, h("div", { key: 'e729ec720edb701346a87e9e0185de40c76ae1cb', class: "legendCal br-t br-s br-bt" }, h("strong", { key: 'acc8b57e43615a2670ff5511529c80024749175e' }, "MAR 2022")), h("div", { key: '28dcef8e617ab27afda62c84e8e9a2e18205f008', class: "highphenLegend" }, locales.entries.Lcz_MonthAndYear)), h("div", { key: '53c76d10e529a832be8edfa23f3adad7fad1bc05', class: "legendRow" }, h("div", { key: 'def20f24183e7e83e56d397fe8e02060bc661aaf', class: "legendCal headerCell align-items-center br-s" }, h("span", { key: 'd5dc4a7abac0ec69814d559d16f7181655a42dc5', class: "badge badge-info  badge-pill" }, "3")), h("div", { key: 'c013131f7d2a573d59752a27513eb54b86f962ba', class: "highphenLegend" }, h("div", { key: '9b1af6fac134177e7eccb2029f0cb4623b961143' }, locales.entries.Lcz_UnassignedUnits))), h("div", { key: '8106fa60ae03b4e6b204a0f14110217da2b811ab', class: "legendRow" }, h("div", { key: 'da241fb3dcc9bda67e2c2d966153b9d9eb38ea76', class: "legendCal dayTitle br-s" }, "Fri 18"), h("div", { key: '4774fecdc37887c95f5e03fbf2e205c916cdce58', class: "highphenLegend" }, locales.entries.Lcz_Date)), h("div", { key: '49e90dc3e66803878e0acbaec70436bf9f9f0112', class: "legendRow" }, h("div", { key: '5d7553b2ea85dc9cc10fed519f1b218d5376df11', class: "legendCal br-s br-bt dayCapacityPercent" }, "15%"), h("div", { key: '9227334029e8a717d2bd46655f3588909f558da1', class: "highphenLegend" }, locales.entries.Lcz_Occupancy)), h("div", { key: '4abacf616a36cdf9134f76d10a84411735074090', class: "legendRow" }, h("div", { key: '87fdfacdd2b175ea926cd42edbbab19c42b5f311', class: "legendCal br-s br-bt  font-weight-bold total-availability" }, "20"), h("div", { key: '487abb6248ab9360d2b7c4806432d4e63bb776e4', class: "highphenLegend" }, locales.entries.Lcz_TotalAvailability))))))));
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
