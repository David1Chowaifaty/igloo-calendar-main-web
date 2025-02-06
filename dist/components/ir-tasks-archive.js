import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';

const irTasksArchiveCss = ".sc-ir-tasks-archive-h{display:block}";
const IrTasksArchiveStyle0 = irTasksArchiveCss;

const IrTasksArchive$1 = /*@__PURE__*/ proxyCustomElement(class IrTasksArchive extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
    }
    render() {
        return (h(Host, { key: 'cc2794b76dabfad7abf1b762383a83f8708fb566' }, h("slot", { key: 'edc900512342bb06869c104a199f111251baf7b5' })));
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