import { Host, h } from "@stencil/core";
import { toggleTaskSelection } from "../../../../../stores/hk-tasks.store";
export class IrTasksCard {
    render() {
        const baseText = 'Mark as clean';
        const btnText = this.task.housekeeper ? `${baseText} for ${this.task.housekeeper.slice(0, 20)}` : baseText;
        return (h(Host, { key: '4d257d6b98ea9ccb11395aaf481bab446a1656ae', class: "card p-1 flex-fill m-0", style: { gap: '0.5rem' } }, h("div", { key: '32b9c52fa182c86e6a681628fb0d4124f95cdda4', class: "d-flex align items-center p-0 m-0 justify-content-between", style: { gap: '0.5rem' } }, h("div", { key: '43d3e2fae5fb515f059a2710ae681e8f876554ba', class: "d-flex align items-center p-0 m-0", style: { gap: '0.5rem' } }, h("p", { key: 'c1aea398dca645e90b30f79b89ee3b10fd44602e', class: "m-0 p-0" }, this.task.formatted_date), h("span", { key: '8c918ccd1c88260258fb4cc93c78391559ccee3a' }, "-"), h("p", { key: '48fddae42ef99cf44357f9a90e9cfe7223704469', class: "m-0 p-0" }, "Unit ", h("b", { key: '1a50e58272c135324f91faec54b4df051672e5fd' }, this.task.unit.name)))), h("p", { key: 'd37152b1335148b0008be305db1d734c63bca940', class: "m-0 p-0" }, this.task.status.description, " ", h("span", { key: '3b45878f339ebda9ddea706a466e9ed7a66964d2', style: { marginLeft: '0.5rem' } }, this.task.hint)), h("p", { key: '1bddb1b059ba1fe41f279a507e284f595603df1d', class: "m-0 p-0 d-flex align-items-center mb-1", style: { gap: '1rem' } }, h("span", { key: '6f10569b32264d6873e68925b76cbd8bb5d78ce9', class: "m-0 p-0 d-flex align-items-center", style: { gap: '0.5rem' } }, h("svg", { key: 'd361fa411cd560ff06441140b15b622e997f0365', width: "16", height: "16", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 448 512" }, h("path", { key: '1d4da5bf41d1766ad38c57fd7d20760e019ce3b0', fill: "currentColor", d: "M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512l388.6 0c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304l-91.4 0z" })), h("span", { key: '22eb75ee6756d6c51acb1d6fc5703d62ff61bfb9' }, h("b", { key: '7bbd286d47d545232faae01d70508f990c9e288f' }, this.task.adult), " Adults")), h("span", { key: 'd7b200f8490dbc0cf8044971d89e2a82cb7b0dcb', class: "m-0 p-0 d-flex align-items-center", style: { gap: '0.5rem' } }, h("svg", { key: 'ead3f36b94552cd12557a80e9d3d1783a79c3192', xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", viewBox: "0 0 320 512" }, h("path", { key: 'dea8316101d56585f1f227823fc0184577cc0b2c', fill: "currentColor", d: "M96 64a64 64 0 1 1 128 0A64 64 0 1 1 96 64zm48 320l0 96c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-192.2L59.1 321c-9.4 15-29.2 19.4-44.1 10S-4.5 301.9 4.9 287l39.9-63.3C69.7 184 113.2 160 160 160s90.3 24 115.2 63.6L315.1 287c9.4 15 4.9 34.7-10 44.1s-34.7 4.9-44.1-10L240 287.8 240 480c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-96-32 0z" })), h("span", { key: 'cee5e9008eb4e8d413c6bbdb18bebeceab167e17' }, h("b", { key: '100a50b4b93b10af9c1229d80c1231f1712d00a4' }, this.task.child), " Children")), h("span", { key: 'c34523ae0b4eb176142b1119892b491a0711faf1', class: "m-0 p-0 d-flex align-items-center", style: { gap: '0.5rem' } }, h("svg", { key: '888c4a8e02ba234abba0138f74bd8d321b70bfed', xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round", class: "lucide lucide-baby-icon lucide-baby" }, h("path", { key: '8ab00db4cce8803a689a0130a52ec5aa6f964990', d: "M10 16c.5.3 1.2.5 2 .5s1.5-.2 2-.5" }), h("path", { key: 'a6934813d4a791c445ff3f23396cbfb24e4a7248', d: "M15 12h.01" }), h("path", { key: '97737977f8c7b7036322eabc047318f6cec38ee9', d: "M19.38 6.813A9 9 0 0 1 20.8 10.2a2 2 0 0 1 0 3.6 9 9 0 0 1-17.6 0 2 2 0 0 1 0-3.6A9 9 0 0 1 12 3c2 0 3.5 1.1 3.5 2.5s-.9 2.5-2 2.5c-.8 0-1.5-.4-1.5-1" }), h("path", { key: '2297d2624f3eded53571ff83a5109c54435e9949', d: "M9 12h.01" })), h("span", { key: '79a35c7ae98c54188eb552d82d3794e8fbdfb5db' }, h("b", { key: 'e1831ac5e25a7270fcffa19b0e9612a94ea4b0ea' }, this.task.infant), " Infants"))), this.isCheckable && (h("div", { key: 'fb38e90527bd49cac2ef59351408cec30e3cda8c' }, h("ir-button", { key: '33bdbeb8cb39ff78d1934cae56215b9ea0f32a1c', onClickHandler: () => {
                toggleTaskSelection(this.task);
                this.headerButtonPress.emit({ name: 'cleaned' });
            }, size: "sm", text: btnText, labelStyle: { textAlign: 'left !important' }, btn_styles: "text-left" })))));
    }
    static get is() { return "ir-tasks-card"; }
    static get encapsulation() { return "scoped"; }
    static get originalStyleUrls() {
        return {
            "$": ["ir-tasks-card.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["ir-tasks-card.css"]
        };
    }
    static get properties() {
        return {
            "task": {
                "type": "unknown",
                "mutable": false,
                "complexType": {
                    "original": "Task",
                    "resolved": "Task",
                    "references": {
                        "Task": {
                            "location": "import",
                            "path": "@/models/housekeeping",
                            "id": "src/models/housekeeping.ts::Task"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false
            },
            "isCheckable": {
                "type": "boolean",
                "mutable": false,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "attribute": "is-checkable",
                "reflect": false
            }
        };
    }
    static get events() {
        return [{
                "method": "headerButtonPress",
                "name": "headerButtonPress",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "complexType": {
                    "original": "{ name: 'cleaned' | 'export' | 'archive' }",
                    "resolved": "{ name: \"cleaned\" | \"export\" | \"archive\"; }",
                    "references": {}
                }
            }];
    }
}
//# sourceMappingURL=ir-tasks-card.js.map
