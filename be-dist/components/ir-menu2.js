import { proxyCustomElement, HTMLElement, createEvent, h, Fragment } from '@stencil/core/internal/client';
import { c as createPopper } from './popper.js';

const irMenuCss = "*.sc-ir-menu,.sc-ir-menu:after,.sc-ir-menu:before{--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-scroll-snap-strictness:proximity;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgba(59,130,246,.5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;border:0 solid #e5e7eb;box-sizing:border-box}.sc-ir-menu:after,.sc-ir-menu:before{--tw-content:\"\"}.sc-ir-menu-h,html.sc-ir-menu{-webkit-text-size-adjust:100%;font-feature-settings:normal;-webkit-tap-highlight-color:transparent;font-family:ui-sans-serif,system-ui,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;font-variation-settings:normal;line-height:1.5;-moz-tab-size:4;tab-size:4}body.sc-ir-menu{line-height:inherit;margin:0}hr.sc-ir-menu{border-top-width:1px;color:inherit;height:0}abbr.sc-ir-menu:where([title]){text-decoration:underline dotted}h1.sc-ir-menu,h2.sc-ir-menu,h3.sc-ir-menu,h4.sc-ir-menu,h5.sc-ir-menu,h6.sc-ir-menu{font-size:inherit;font-weight:inherit}a.sc-ir-menu{color:inherit;text-decoration:inherit}b.sc-ir-menu,strong.sc-ir-menu{font-weight:bolder}code.sc-ir-menu,kbd.sc-ir-menu,pre.sc-ir-menu,samp.sc-ir-menu{font-feature-settings:normal;font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace;font-size:1em;font-variation-settings:normal}small.sc-ir-menu{font-size:80%}sub.sc-ir-menu,sup.sc-ir-menu{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub.sc-ir-menu{bottom:-.25em}sup.sc-ir-menu{top:-.5em}table.sc-ir-menu{border-collapse:collapse;border-color:inherit;text-indent:0}button.sc-ir-menu,input.sc-ir-menu,optgroup.sc-ir-menu,select.sc-ir-menu,textarea.sc-ir-menu{font-feature-settings:inherit;color:inherit;font-family:inherit;font-size:100%;font-variation-settings:inherit;font-weight:inherit;line-height:inherit;margin:0;padding:0}button.sc-ir-menu,select.sc-ir-menu{text-transform:none}[type=button].sc-ir-menu,[type=reset].sc-ir-menu,[type=submit].sc-ir-menu,button.sc-ir-menu{-webkit-appearance:button;background-color:transparent;background-image:none}.sc-ir-menu:-moz-focusring{outline:auto}.sc-ir-menu:-moz-ui-invalid{box-shadow:none}progress.sc-ir-menu{vertical-align:baseline}.sc-ir-menu::-webkit-inner-spin-button,.sc-ir-menu::-webkit-outer-spin-button{height:auto}[type=search].sc-ir-menu{-webkit-appearance:textfield;outline-offset:-2px}.sc-ir-menu::-webkit-search-decoration{-webkit-appearance:none}.sc-ir-menu::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}summary.sc-ir-menu{display:list-item}blockquote.sc-ir-menu,dd.sc-ir-menu,dl.sc-ir-menu,fieldset.sc-ir-menu,figure.sc-ir-menu,h1.sc-ir-menu,h2.sc-ir-menu,h3.sc-ir-menu,h4.sc-ir-menu,h5.sc-ir-menu,h6.sc-ir-menu,hr.sc-ir-menu,p.sc-ir-menu,pre.sc-ir-menu{margin:0}fieldset.sc-ir-menu,legend.sc-ir-menu{padding:0}menu.sc-ir-menu,ol.sc-ir-menu,ul.sc-ir-menu{list-style:none;margin:0;padding:0}dialog.sc-ir-menu{padding:0}textarea.sc-ir-menu{resize:vertical}input.sc-ir-menu::placeholder,textarea.sc-ir-menu::placeholder{color:#9ca3af;opacity:1}[role=button].sc-ir-menu,button.sc-ir-menu{cursor:pointer}.sc-ir-menu:disabled{cursor:default}audio.sc-ir-menu,canvas.sc-ir-menu,embed.sc-ir-menu,iframe.sc-ir-menu,img.sc-ir-menu,object.sc-ir-menu,svg.sc-ir-menu,video.sc-ir-menu{display:block;vertical-align:middle}img.sc-ir-menu,video.sc-ir-menu{height:auto;max-width:100%}[hidden].sc-ir-menu{display:none}.sc-ir-menu::backdrop{--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-scroll-snap-strictness:proximity;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgba(59,130,246,.5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;}.relative.sc-ir-menu{position:relative}.block.sc-ir-menu{display:block}.flex.sc-ir-menu{display:flex}.border.sc-ir-menu{border-width:1px}.sc-ir-menu-h{display:block;position:relative}button.sc-ir-menu,div.sc-ir-menu,li.sc-ir-menu,ul.sc-ir-menu{all:unset;box-sizing:border-box}.SelectTrigger.sc-ir-menu{align-items:center;border:1px solid var(--gray-300,#d0d5dd);border-radius:var(--radius,8px);display:inline-flex;font-size:16px;justify-content:space-between;line-height:1;padding:10px 14px;width:100%}.SelectContent.sc-ir-menu{background:#fff;border-radius:8px;max-height:250px;min-width:160px;overflow-y:auto;width:-moz-max-content;width:max-content;z-index:99999}.SelectContent[data-state=open].sc-ir-menu{border:1px solid var(--gray-100,#f2f4f7);box-shadow:0 16px 12px -4px rgba(16,24,40,.08),0 6px 4px -2px rgba(16,24,40,.03);padding:10px 0}.menu-item.sc-ir-menu{align-items:center;color:var(--gray-700,#344054);cursor:default;display:flex;font-size:14px;justify-content:space-between;line-height:1;line-height:20px;padding:10px 1rem;-webkit-user-select:none;-moz-user-select:none;user-select:none;width:100%}.menu-item[data-highlighted=true].sc-ir-menu{background-color:var(--gray-50,#f9fafb);color:var(--gray-900,#101828)}.menu-item[data-disabled].sc-ir-menu{color:var(--gray-300,#d0d5dd)}@keyframes fadeIn{0%{opacity:0}to{opacity:1}}@keyframes fadeOut{0%{opacity:1}to{opacity:0}}.static.sc-ir-menu{position:static}.sr-only.sc-ir-menu{clip:rect(0,0,0,0);border-width:0;height:1px;margin:-1px;overflow:hidden;padding:0;white-space:nowrap;width:1px}.absolute.sc-ir-menu,.sr-only.sc-ir-menu{position:absolute}.right-2.sc-ir-menu{right:.5rem}.top-2.sc-ir-menu{top:.5rem}.mx-auto.sc-ir-menu{margin-left:auto;margin-right:auto}.mt-2.sc-ir-menu{margin-top:.5rem}.mt-2\\.5.sc-ir-menu{margin-top:.625rem}.table.sc-ir-menu{display:table}.grid.sc-ir-menu{display:grid}.hidden.sc-ir-menu{display:none}.h-screen.sc-ir-menu{height:100vh}.w-full.sc-ir-menu{width:100%}.max-w-6xl.sc-ir-menu{max-width:72rem}.max-w-full.sc-ir-menu{max-width:100%}.max-w-md.sc-ir-menu{max-width:28rem}.flex-col.sc-ir-menu{flex-direction:column}.place-content-center.sc-ir-menu{place-content:center}.items-center.sc-ir-menu{align-items:center}.justify-end.sc-ir-menu{justify-content:flex-end}.justify-center.sc-ir-menu{justify-content:center}.justify-between.sc-ir-menu{justify-content:space-between}.gap-2.sc-ir-menu{gap:.5rem}.gap-2\\.5.sc-ir-menu{gap:.625rem}.gap-4.sc-ir-menu{gap:1rem}.space-y-1.sc-ir-menu>.sc-ir-menu:not([hidden])~.sc-ir-menu:not([hidden]){--tw-space-y-reverse:0;margin-bottom:calc(.25rem*var(--tw-space-y-reverse));margin-top:calc(.25rem*(1 - var(--tw-space-y-reverse)))}.space-y-1\\.5.sc-ir-menu>.sc-ir-menu:not([hidden])~.sc-ir-menu:not([hidden]){--tw-space-y-reverse:0;margin-bottom:calc(.375rem*var(--tw-space-y-reverse));margin-top:calc(.375rem*(1 - var(--tw-space-y-reverse)))}.space-y-4.sc-ir-menu>.sc-ir-menu:not([hidden])~.sc-ir-menu:not([hidden]){--tw-space-y-reverse:0;margin-bottom:calc(1rem*var(--tw-space-y-reverse));margin-top:calc(1rem*(1 - var(--tw-space-y-reverse)))}.overflow-x-auto.sc-ir-menu{overflow-x:auto}.overflow-x-hidden.sc-ir-menu{overflow-x:hidden}.rounded-xl.sc-ir-menu{border-radius:.75rem}.bg-gray-100.sc-ir-menu{--tw-bg-opacity:1;background-color:rgb(243 244 246/var(--tw-bg-opacity))}.p-4.sc-ir-menu{padding:1rem}.p-6.sc-ir-menu{padding:1.5rem}.px-4.sc-ir-menu{padding-left:1rem;padding-right:1rem}.px-\\[20px\\].sc-ir-menu{padding-left:20px;padding-right:20px}.py-\\[16px\\].sc-ir-menu{padding-bottom:16px;padding-top:16px}.pb-2.sc-ir-menu{padding-bottom:.5rem}.text-base.sc-ir-menu{font-size:1rem;line-height:1.5rem}.text-lg.sc-ir-menu{font-size:1.125rem;line-height:1.75rem}.text-sm.sc-ir-menu{font-size:.875rem;line-height:1.25rem}.font-medium.sc-ir-menu{font-weight:500}.font-semibold.sc-ir-menu{font-weight:600}.leading-none.sc-ir-menu{line-height:1}.tracking-tight.sc-ir-menu{letter-spacing:-.025em}.shadow-md.sc-ir-menu{--tw-shadow:0 4px 6px -1px rgba(0,0,0,.1),0 2px 4px -2px rgba(0,0,0,.1);--tw-shadow-colored:0 4px 6px -1px var(--tw-shadow-color),0 2px 4px -2px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow)}.outline.sc-ir-menu{outline-style:solid}@media (min-width:768px){.md\\:block.sc-ir-menu{display:block}.md\\:hidden.sc-ir-menu{display:none}.md\\:flex-row.sc-ir-menu{flex-direction:row}.md\\:items-center.sc-ir-menu{align-items:center}.md\\:justify-between.sc-ir-menu{justify-content:space-between}}.right-3.sc-ir-menu{right:.75rem}.top-3.sc-ir-menu{top:.75rem}.shadow.sc-ir-menu{--tw-shadow:0 1px 3px 0 rgba(0,0,0,.1),0 1px 2px -1px rgba(0,0,0,.1);--tw-shadow-colored:0 1px 3px 0 var(--tw-shadow-color),0 1px 2px -1px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow)}.h-5.sc-ir-menu{height:1.25rem}.w-5.sc-ir-menu{width:1.25rem}.mx-1.sc-ir-menu{margin-left:.25rem;margin-right:.25rem}.justify-start.sc-ir-menu{justify-content:flex-start}.mb-4.sc-ir-menu{margin-bottom:1rem}.max-h-\\[83vh\\].sc-ir-menu{max-height:83vh}.overflow-y-auto.sc-ir-menu{overflow-y:auto}.text-xl.sc-ir-menu{font-size:1.25rem;line-height:1.75rem}.text-\\[var\\(--gray-600\\2c \\#475467\\)\\].sc-ir-menu{color:var(--gray-600,#475467)}.text-\\[var\\(--gray-700\\2c \\#344054\\)\\].sc-ir-menu{color:var(--gray-700,#344054)}@media (min-width:768px){.md\\:p-6.sc-ir-menu{padding:1.5rem}}.pointer-events-none.sc-ir-menu{pointer-events:none}.inset-y-0.sc-ir-menu{bottom:0;top:0}.end-1.sc-ir-menu{inset-inline-end:.25rem}.start-2.sc-ir-menu{inset-inline-start:.5rem}.h-full.sc-ir-menu{height:100%}.rounded-md.sc-ir-menu{border-radius:.375rem}.bg-white.sc-ir-menu{--tw-bg-opacity:1;background-color:rgb(255 255 255/var(--tw-bg-opacity))}.px-\\[0\\.3rem\\].sc-ir-menu{padding-left:.3rem;padding-right:.3rem}.px-\\[0\\.875rem\\].sc-ir-menu{padding-left:.875rem;padding-right:.875rem}.py-1.sc-ir-menu{padding-bottom:.25rem;padding-top:.25rem}.py-\\[0\\.625rem\\].sc-ir-menu{padding-bottom:.625rem;padding-top:.625rem}.pe-7.sc-ir-menu{padding-inline-end:1.75rem}.ps-9.sc-ir-menu{padding-inline-start:2.25rem}.pt-1.sc-ir-menu{padding-top:.25rem}.text-\\[1rem\\].sc-ir-menu{font-size:1rem}.text-xs.sc-ir-menu{font-size:.75rem;line-height:1rem}.text-\\[\\#667085\\].sc-ir-menu{--tw-text-opacity:1;color:rgb(102 112 133/var(--tw-text-opacity))}.text-gray-900.sc-ir-menu{--tw-text-opacity:1;color:rgb(17 24 39/var(--tw-text-opacity))}.fixed.sc-ir-menu{position:fixed}.right-0.sc-ir-menu{right:0}.right-4.sc-ir-menu{right:1rem}.top-0.sc-ir-menu{top:0}.top-4.sc-ir-menu{top:1rem}.z-50.sc-ir-menu{z-index:50}.mt-8.sc-ir-menu{margin-top:2rem}.min-w-\\[70\\%\\].sc-ir-menu{min-width:70%}.translate-x-0.sc-ir-menu{--tw-translate-x:0px}.translate-x-0.sc-ir-menu,.translate-x-\\[100\\%\\].sc-ir-menu{transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.translate-x-\\[100\\%\\].sc-ir-menu{--tw-translate-x:100%}.shadow.sc-ir-menu,.shadow-md.sc-ir-menu{box-shadow:var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow)}.transition-transform.sc-ir-menu{transition-duration:.15s;transition-property:transform;transition-timing-function:cubic-bezier(.4,0,.2,1)}.duration-300.sc-ir-menu{transition-duration:.3s}.ease-in-out.sc-ir-menu{transition-timing-function:cubic-bezier(.4,0,.2,1)}.data-\\[state\\=\\'closed\\'\\]\\:translate-x-\\[100\\%\\][data-state=closed].sc-ir-menu{--tw-translate-x:100%}.data-\\[state\\=\\'closed\\'\\]\\:translate-x-\\[100\\%\\][data-state=closed].sc-ir-menu,.data-\\[state\\=\\'opened\\'\\]\\:translate-x-0[data-state=opened].sc-ir-menu{transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.data-\\[state\\=\\'opened\\'\\]\\:translate-x-0[data-state=opened].sc-ir-menu{--tw-translate-x:0px}.text-red-500.sc-ir-menu{--tw-text-opacity:1;color:rgb(239 68 68/var(--tw-text-opacity))}@media (min-width:640px){.sm\\:p-6.sc-ir-menu{padding:1.5rem}}@media (min-width:768px){.md\\:w-fit.sc-ir-menu{width:fit-content}.md\\:flex-row-reverse.sc-ir-menu{flex-direction:row-reverse}}.transform.sc-ir-menu{transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.size-3.sc-ir-menu{height:.75rem;width:.75rem}.mb-2.sc-ir-menu{margin-bottom:.5rem}.mb-2\\.5.sc-ir-menu{margin-bottom:.625rem}.mb-6.sc-ir-menu{margin-bottom:1.5rem}.mt-4.sc-ir-menu{margin-top:1rem}.h-\\[1px\\].sc-ir-menu{height:1px}.w-\\[45\\%\\].sc-ir-menu{width:45%}.space-y-3.sc-ir-menu>.sc-ir-menu:not([hidden])~.sc-ir-menu:not([hidden]){--tw-space-y-reverse:0;margin-bottom:calc(.75rem*var(--tw-space-y-reverse));margin-top:calc(.75rem*(1 - var(--tw-space-y-reverse)))}.bg-\\[var\\(--gray-200\\)\\].sc-ir-menu{background-color:var(--gray-200)}.text-\\[var\\(--gray-500\\)\\].sc-ir-menu{color:var(--gray-500)}";
const IrMenuStyle0 = irMenuCss;

const IrMenu = /*@__PURE__*/ proxyCustomElement(class IrMenu extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.itemSelect = createEvent(this, "itemSelect", 7);
        this.data = [];
        this.menuItem = 'Toggle Menu';
        this.isDropdownVisible = false;
        this.searchQuery = '';
        this.selectedItemName = '';
        this.currentHighlightedIndex = -1;
        this.usingKeyboard = false;
    }
    handleKeyDown(event) {
        if (!this.isDropdownVisible) {
            return;
        }
        switch (event.key) {
            case 'ArrowDown':
                event.preventDefault();
                this.moveHighlight(1);
                break;
            case 'ArrowUp':
                event.preventDefault();
                this.moveHighlight(-1);
                break;
            case 'Enter':
                event.preventDefault();
                if (this.currentHighlightedIndex !== -1) {
                    this.selectItem(this.currentHighlightedIndex);
                }
                break;
            case 'Escape':
                console.log('first');
                event.preventDefault();
                event.stopPropagation();
                event.stopImmediatePropagation();
                this.closeDropdown();
                break;
            case 'Tab':
                this.closeDropdown();
                break;
        }
    }
    componentDidLoad() {
        this.popoverInstance = createPopper(this.buttonRef, this.contentElement, {
            placement: 'bottom-end',
            modifiers: [
                {
                    name: 'offset',
                    options: {
                        offset: [0, 8],
                    },
                },
                {
                    name: 'preventOverflow',
                    options: {
                        boundary: 'viewport',
                        padding: 10,
                    },
                },
            ],
        });
    }
    handleDocumentClick(event) {
        const target = event.target;
        if (!this.el.contains(target)) {
            this.isDropdownVisible = false;
        }
    }
    handleMouseMove() {
        if (this.usingKeyboard)
            this.disableKeyboardPriority();
    }
    moveHighlight(delta) {
        let newIndex = this.currentHighlightedIndex;
        do {
            newIndex = (newIndex + delta + this.data.length) % this.data.length;
        } while (this.data[newIndex].disabled);
        this.currentHighlightedIndex = newIndex;
        this.scrollToItem(newIndex);
    }
    selectItem(index) {
        const item = this.data[index];
        if (item && !item.disabled) {
            this.selectedItemName = item.item;
            this.itemSelect.emit(item.item);
            this.closeDropdown();
        }
    }
    closeDropdown() {
        this.isDropdownVisible = false;
        this.buttonRef.focus();
    }
    toggleDropdown() {
        this.isDropdownVisible = !this.isDropdownVisible;
        if (this.isDropdownVisible) {
            this.currentHighlightedIndex = -1;
            this.adjustPopoverPlacement();
        }
    }
    adjustPopoverPlacement() {
        requestAnimationFrame(() => {
            const rect = this.contentElement.getBoundingClientRect();
            if (rect.bottom > window.innerHeight) {
                this.popoverInstance.setOptions({
                    placement: 'top-end',
                });
            }
            else if (rect.top < 0) {
                this.popoverInstance.setOptions({
                    placement: 'bottom-end',
                });
            }
            this.popoverInstance.update();
        });
    }
    scrollToItem(index) {
        var _a;
        const item = (_a = this.listRef) === null || _a === void 0 ? void 0 : _a.querySelector(`li:nth-of-type(${index + 1})`);
        item === null || item === void 0 ? void 0 : item.scrollIntoView({ block: 'center' });
    }
    disableKeyboardPriority() {
        this.usingKeyboard = false;
    }
    disconnectedCallback() {
        if (this.popoverInstance) {
            this.popoverInstance.destroy();
        }
    }
    render() {
        return (h(Fragment, { key: '8b7ae19d35dd6722d796313514860d780b71cac8' }, h("button", { key: '05e1f7f5fd887f1d992edc7d895551fcbb4bf13d', ref: el => (this.buttonRef = el), type: "button", "aria-haspopup": "listbox", "aria-expanded": this.isDropdownVisible.toString(), onClick: () => this.toggleDropdown() }, h("slot", { key: '784bad7c2b7d39bc97368fe6b202a936d0c249f7', name: "menu-trigger" }, h("div", { key: '03c98b41d54c0c7db757fa92bf1495a8640d8b89', class: "SelectTrigger" }, this.selectedItemName || this.menuItem, h("svg", { key: '26f68ec6526a0405c4e60c24151234a3aef033ab', width: "15", height: "15", viewBox: "0 0 15 15", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, h("path", { key: '7897d3a3030ac73d9e0eed0053ee83c25e9221d1', d: "M4.93179 5.43179C4.75605 5.60753 4.75605 5.89245 4.93179 6.06819C5.10753 6.24392 5.39245 6.24392 5.56819 6.06819L7.49999 4.13638L9.43179 6.06819C9.60753 6.24392 9.89245 6.24392 10.0682 6.06819C10.2439 5.89245 10.2439 5.60753 10.0682 5.43179L7.81819 3.18179C7.73379 3.0974 7.61933 3.04999 7.49999 3.04999C7.38064 3.04999 7.26618 3.0974 7.18179 3.18179L4.93179 5.43179ZM10.0682 9.56819C10.2439 9.39245 10.2439 9.10753 10.0682 8.93179C9.89245 8.75606 9.60753 8.75606 9.43179 8.93179L7.49999 10.8636L5.56819 8.93179C5.39245 8.75606 5.10753 8.75606 4.93179 8.93179C4.75605 9.10753 4.75605 9.39245 4.93179 9.56819L7.18179 11.8182C7.35753 11.9939 7.64245 11.9939 7.81819 11.8182L10.0682 9.56819Z", fill: "currentColor", "fill-rule": "evenodd", "clip-rule": "evenodd" }))))), h("div", { key: '2ec15f1ff08563e9aa77bece14047b4c042a1726', ref: el => (this.contentElement = el), class: "SelectContent", "data-state": this.isDropdownVisible ? 'open' : 'closed' }, this.isDropdownVisible && (h("ul", { role: "menu", ref: el => (this.listRef = el), tabindex: "-1" }, this.data.map((item, index) => (h("li", { "data-disabled": item.disabled, "data-state": this.currentHighlightedIndex === index ? 'checked' : 'unchecked', "data-highlighted": this.currentHighlightedIndex === index ? 'true' : 'false', class: 'menu-item', tabindex: -1, role: "menuitem", "aria-disabled": item.disabled ? 'true' : 'false', "aria-selected": this.selectedItemName === item.item ? 'true' : 'false', onClick: () => {
                this.selectItem(index);
                this.disableKeyboardPriority();
            }, onMouseOver: () => {
                if (item.disabled) {
                    return;
                }
                this.currentHighlightedIndex = index;
            } }, item.item, this.selectedItemName === item.item && (h("svg", { width: "20", height: "20", viewBox: "0 0 15 15", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, h("path", { d: "M11.4669 3.72684C11.7558 3.91574 11.8369 4.30308 11.648 4.59198L7.39799 11.092C7.29783 11.2452 7.13556 11.3467 6.95402 11.3699C6.77247 11.3931 6.58989 11.3355 6.45446 11.2124L3.70446 8.71241C3.44905 8.48022 3.43023 8.08494 3.66242 7.82953C3.89461 7.57412 4.28989 7.55529 4.5453 7.78749L6.75292 9.79441L10.6018 3.90792C10.7907 3.61902 11.178 3.53795 11.4669 3.72684Z", fill: "var(--brand-600)", "fill-rule": "evenodd", "clip-rule": "evenodd" })))))))))));
    }
    get el() { return this; }
    static get style() { return IrMenuStyle0; }
}, [6, "ir-menu", {
        "data": [16],
        "menuItem": [513, "menu-item"],
        "isDropdownVisible": [32],
        "searchQuery": [32],
        "selectedItemName": [32],
        "currentHighlightedIndex": [32],
        "usingKeyboard": [32]
    }, [[16, "keydown", "handleKeyDown"], [4, "click", "handleDocumentClick"], [1, "mousemove", "handleMouseMove"]]]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["ir-menu"];
    components.forEach(tagName => { switch (tagName) {
        case "ir-menu":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, IrMenu);
            }
            break;
    } });
}

export { IrMenu as I, defineCustomElement as d };

//# sourceMappingURL=ir-menu2.js.map