'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-aeea0adf.js');

const irPopoverCss = ".sc-ir-popover-h{display:block;width:100%}*.sc-ir-popover{box-sizing:border-box}.popover-title.sc-ir-popover{position:relative;width:100%;height:100%;margin:0;padding:0;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;z-index:10;left:0}.popover-container.sc-ir-popover{position:absolute;bottom:0px;left:var(--ir-popover-left, 10px);background:rgb(0, 0, 0);color:white;min-width:100%;box-shadow:rgba(0, 0, 0, 0.2) 0px 2px 10px;z-index:9999;padding:3.5px 7px;border-radius:5px;pointer-events:none;opacity:0;transition:all 100ms ease;font-family:'Open Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;font-style:normal;font-weight:400;line-height:1.45;text-decoration:none;text-shadow:none;font-size:0.875rem}.popover-container[data-state='show'].sc-ir-popover{opacity:1}";
const IrPopoverStyle0 = irPopoverCss;

const IrPopover = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.isHovered = false;
        this.showPopover = false;
        this.irPopoverLeft = '10px';
        this.handleMouseEnter = () => {
            if (!this.showPopover) {
                return;
            }
            if (this.showPopover) {
                this.isHovered = true;
            }
        };
        this.handleMouseLeave = () => {
            if (!this.showPopover) {
                return;
            }
            this.isHovered = false;
        };
    }
    componentWillLoad() {
        this.checkTitleWidth();
    }
    checkTitleWidth() {
        requestAnimationFrame(() => {
            const titleElement = this.el.querySelector('.popover-title');
            if (titleElement) {
                const width = titleElement.scrollWidth;
                this.showPopover = width > 150; // Show popover if title width exceeds 170px
            }
        });
    }
    render() {
        return (index.h(index.Host, { key: 'af5c93946993c24dad89aecceeee28999d255cff', style: { '--ir-popover-left': this.irPopoverLeft } }, index.h("p", { key: '4c6e4dc661a25eedafde27c6086ad4dcfc39c894', class: "popover-title", onMouseLeave: this.handleMouseLeave, onMouseEnter: this.handleMouseEnter }, this.popoverTitle), this.showPopover && this.isHovered && (index.h("div", { key: '3c10448c05071df5a599ad75d858fe892bbc0915', "data-state": "show", class: "popover-container" }, this.popoverTitle))));
    }
    get el() { return index.getElement(this); }
};
IrPopover.style = IrPopoverStyle0;

exports.ir_popover = IrPopover;

//# sourceMappingURL=ir-popover.cjs.entry.js.map