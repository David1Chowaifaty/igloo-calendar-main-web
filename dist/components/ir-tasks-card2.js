import { proxyCustomElement, HTMLElement, createEvent, h, Host } from '@stencil/core/internal/client';
import { t as toggleTaskSelection } from './hk-tasks.store.js';
import { d as defineCustomElement$2 } from './ir-button2.js';
import { d as defineCustomElement$1 } from './ir-icons2.js';

const irTasksCardCss = "";
const IrTasksCardStyle0 = irTasksCardCss;

const IrTasksCard = /*@__PURE__*/ proxyCustomElement(class IrTasksCard extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.cleanSelectedTask = createEvent(this, "cleanSelectedTask", 7);
    }
    render() {
        const baseText = 'Mark as clean';
        const btnText = this.task.housekeeper ? `${baseText} for ${this.task.housekeeper.slice(0, 20)}` : baseText;
        return (h(Host, { key: 'b625dded59cdf054b8b83b9684e9d6c41f94ae40', class: "card p-1 flex-fill m-0", style: { gap: '0.5rem' } }, h("div", { key: '76e93de1823a2b326f9bb1d82d00d96cc50f7975', class: "d-flex align items-center p-0 m-0 justify-content-between", style: { gap: '0.5rem' } }, h("div", { key: '6f432546b81676cb540d0ba21934a9c44eb675ea', class: "d-flex align items-center p-0 m-0", style: { gap: '0.5rem' } }, h("p", { key: 'de7385498316bc3d2db5c85f4189e5b6acd4b1c4', class: "m-0 p-0" }, this.task.formatted_date), h("span", { key: 'f34cf9dd856a4b3cf4f08bcb135973856d6d7913' }, "-"), h("p", { key: '1fa5d0e7b03cbd3f5107ea6b4c30d6853b4e2051', class: "m-0 p-0" }, "Unit ", h("b", { key: 'd4b93bd252585a4b801aff282c631a48338a5dda' }, this.task.unit.name)))), h("p", { key: '950161d1e8d2a925dc7c4ac4456387d3eafc520e', class: "m-0 p-0" }, this.task.status.description, " ", h("span", { key: 'ea3a922310cd94f2aa985f1bf3edc7bec2e6946f', style: { marginLeft: '0.5rem' } }, this.task.hint)), h("p", { key: '5c6d5eab1953db19a3896184c0ccbddf519178b9', class: "m-0 p-0 d-flex align-items-center mb-1", style: { gap: '1rem' } }, h("span", { key: '010058ed0cbec6d018a632a63be6796e46a8788a', class: "m-0 p-0 d-flex align-items-center", style: { gap: '0.5rem' } }, h("svg", { key: 'c13800583c7322e6c07d8126b5cd0676b70874d1', width: "16", height: "16", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 448 512" }, h("path", { key: 'ecee153e848b852cd3b28646ac3923d9f5ae03db', fill: "currentColor", d: "M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512l388.6 0c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304l-91.4 0z" })), h("span", { key: '3342fec4b5390e34867bfc0872851c043247baa3' }, h("b", { key: 'b555a2ace72390f5bf5d37c04cfdb59bf17862cf' }, this.task.adult), " Adults")), h("span", { key: 'e6a67851a40a70a1dc93fa90024702f1e761bc7f', class: "m-0 p-0 d-flex align-items-center", style: { gap: '0.5rem' } }, h("svg", { key: '94de441399671c21d7be4ec7bc2968ccfde3523d', xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", viewBox: "0 0 320 512" }, h("path", { key: 'ecc02eb0f0c76db9deb9d9deb6fde8012f9dab2e', fill: "currentColor", d: "M96 64a64 64 0 1 1 128 0A64 64 0 1 1 96 64zm48 320l0 96c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-192.2L59.1 321c-9.4 15-29.2 19.4-44.1 10S-4.5 301.9 4.9 287l39.9-63.3C69.7 184 113.2 160 160 160s90.3 24 115.2 63.6L315.1 287c9.4 15 4.9 34.7-10 44.1s-34.7 4.9-44.1-10L240 287.8 240 480c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-96-32 0z" })), h("span", { key: '97ce78d5af5812dfaec3438b33f230a9b1353a9a' }, h("b", { key: 'a23b819caa906da02a747405ff3a7f250035868d' }, this.task.child), " Children")), h("span", { key: 'e699f6b887ef62717c030f2d79682f9c45815a6e', class: "m-0 p-0 d-flex align-items-center", style: { gap: '0.5rem' } }, h("svg", { key: '8b0f3cb642b9c746bf439e9a70c3bd022e803aad', xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round", class: "lucide lucide-baby-icon lucide-baby" }, h("path", { key: '265fb5d1425d3fb1afc87e6a8d093647f6144e0e', d: "M10 16c.5.3 1.2.5 2 .5s1.5-.2 2-.5" }), h("path", { key: '19890002e93863a1b89c264d5d0b3a90bd821c0f', d: "M15 12h.01" }), h("path", { key: '3aba9d8b333c2275beb738c74d028f062dcd3810', d: "M19.38 6.813A9 9 0 0 1 20.8 10.2a2 2 0 0 1 0 3.6 9 9 0 0 1-17.6 0 2 2 0 0 1 0-3.6A9 9 0 0 1 12 3c2 0 3.5 1.1 3.5 2.5s-.9 2.5-2 2.5c-.8 0-1.5-.4-1.5-1" }), h("path", { key: 'aa479e581cd6c52732b86c707c76ba9f25c6c2b0', d: "M9 12h.01" })), h("span", { key: 'f174a8e8c5db281a33da1f7b852776e7051c2a41' }, h("b", { key: '380e6e462fe13c54b198345bb2dfd82ee369179e' }, this.task.infant), " Infants"))), this.isCheckable && (h("div", { key: 'f7f241e4ad2eac4a95060f5fbb3e61027eb2ebc6' }, h("ir-button", { key: '044ff0e125a9662858ad2180d451d9e05ebbd076', onClickHandler: () => {
                toggleTaskSelection(this.task);
                this.cleanSelectedTask.emit(this.task);
            }, size: "sm", text: btnText, labelStyle: { textAlign: 'left !important' }, btn_styles: "text-left" })))));
    }
    static get style() { return IrTasksCardStyle0; }
}, [2, "ir-tasks-card", {
        "task": [16],
        "isCheckable": [4, "is-checkable"]
    }]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["ir-tasks-card", "ir-button", "ir-icons"];
    components.forEach(tagName => { switch (tagName) {
        case "ir-tasks-card":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, IrTasksCard);
            }
            break;
        case "ir-button":
            if (!customElements.get(tagName)) {
                defineCustomElement$2();
            }
            break;
        case "ir-icons":
            if (!customElements.get(tagName)) {
                defineCustomElement$1();
            }
            break;
    } });
}

export { IrTasksCard as I, defineCustomElement as d };

//# sourceMappingURL=ir-tasks-card2.js.map