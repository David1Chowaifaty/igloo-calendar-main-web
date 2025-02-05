import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';

const irTasksArchiveCss = ".sc-ir-tasks-archive-h{display:block}";
const IrTasksArchiveStyle0 = irTasksArchiveCss;

const IrTasksArchive$1 = /*@__PURE__*/ proxyCustomElement(class IrTasksArchive extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
    }
    render() {
        return (h(Host, { key: 'b3a0a8c931ba6e72cd9f7b0ebc263e72b409ddf4' }, h("slot", { key: 'a19089fc798e8c41b73d63de296bf4a4d66cdd24' })));
    }
    static get style() { return IrTasksArchiveStyle0; }
}, [6, "ir-tasks-archive"]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["ir-tasks-archive"];
    components.forEach(tagName => { switch (tagName) {
        case "ir-tasks-archive":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, IrTasksArchive$1);
            }
            break;
    } });
}

const IrTasksArchive = IrTasksArchive$1;
const defineCustomElement = defineCustomElement$1;

export { IrTasksArchive, defineCustomElement };

//# sourceMappingURL=ir-tasks-archive.js.map