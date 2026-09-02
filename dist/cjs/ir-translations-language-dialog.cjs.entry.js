'use strict';

var index = require('./index-P5Mginch.js');
var utils = require('./utils-DGikCG8C.js');

const irTranslationsLanguageDialogCss = () => `.sc-ir-translations-language-dialog-h{--ir-dialog-width:34rem}.language-dialog__body.sc-ir-translations-language-dialog{display:flex;flex-direction:column;gap:1.25rem}.language-dialog__list.sc-ir-translations-language-dialog{list-style:none;margin:0;padding:0;display:flex;flex-direction:column}.language-dialog__item.sc-ir-translations-language-dialog{display:flex;align-items:center;gap:0.65rem;padding:0.4rem 0.5rem;border-bottom:1px solid var(--wa-color-neutral-border-quiet, #e2e8f0)}.language-dialog__item.sc-ir-translations-language-dialog:last-child{border-bottom:0}.language-dialog__item.sc-ir-translations-language-dialog:hover{background:var(--wa-color-neutral-fill-quiet)}.language-dialog__code.sc-ir-translations-language-dialog{flex:0 0 2.5rem;padding:0.1rem 0;font-size:var(--wa-font-size-xs, 0.75rem);font-weight:var(--wa-font-weight-semibold, 600);text-align:center;color:var(--wa-color-text-quiet);background:var(--wa-color-neutral-fill-quiet);border-radius:var(--wa-border-radius-s)}.language-dialog__name.sc-ir-translations-language-dialog{display:flex;align-items:center;gap:0.4rem;flex:1 1 auto;min-width:0;font-size:var(--wa-font-size-s);color:var(--wa-color-text-normal)}.language-dialog__source-tag.sc-ir-translations-language-dialog{flex:0 0 auto;padding:0.05rem 0.35rem;font-size:0.6875rem;color:var(--wa-color-brand-on-quiet);background:var(--wa-color-brand-fill-quiet);border-radius:var(--wa-border-radius-s)}.language-dialog__coverage.sc-ir-translations-language-dialog{display:flex;align-items:center;gap:0.5rem;flex:0 0 auto}.language-dialog__bar.sc-ir-translations-language-dialog{width:4.5rem;--track-height:0.25rem;--indicator-color:var(--wa-color-brand-fill-loud)}.language-dialog__percent.sc-ir-translations-language-dialog{min-width:2.5rem;font-size:var(--wa-font-size-xs, 0.75rem);font-variant-numeric:tabular-nums;text-align:end;color:var(--wa-color-text-quiet)}.language-dialog__add.sc-ir-translations-language-dialog{display:flex;flex-direction:column;gap:0.5rem;padding-top:1rem;border-top:1px solid var(--wa-color-neutral-border-quiet, #e2e8f0)}.language-dialog__add-title.sc-ir-translations-language-dialog{margin:0;font-size:var(--wa-font-size-s);font-weight:var(--wa-font-weight-semibold, 600);color:var(--wa-color-text-normal)}.language-dialog__add-row.sc-ir-translations-language-dialog{display:flex;align-items:flex-end;gap:0.5rem}.language-dialog__select.sc-ir-translations-language-dialog{flex:1 1 auto;min-width:0}.language-dialog__add-row.sc-ir-translations-language-dialog ir-custom-button.sc-ir-translations-language-dialog{flex:0 0 auto}.language-dialog__hint.sc-ir-translations-language-dialog{margin:0;font-size:var(--wa-font-size-s);color:var(--wa-color-text-quiet)}.language-dialog__footer.sc-ir-translations-language-dialog{display:flex;justify-content:flex-end}`;

const IrTranslationsLanguageDialog = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.addLanguage = index.createEvent(this, "addLanguage");
        this.removeLanguage = index.createEvent(this, "removeLanguage");
        this.setSourceLanguage = index.createEvent(this, "setSourceLanguage");
        this.closeDialog = index.createEvent(this, "closeDialog");
    }
    open = false;
    languages = [];
    /** Every language this property exposes and Setup can persist — the picker offers whichever of these aren't already shown. */
    catalog = [];
    /** Every entry across every table, used to report per-language coverage. */
    entries = [];
    addLanguage;
    /** Hides a language from this manager's view. Every CODE_VALUE_* column always exists in Setup, so nothing is deleted. */
    removeLanguage;
    setSourceLanguage;
    closeDialog;
    pendingCode = '';
    dialogRef;
    handleOpenChange(open) {
        if (open) {
            this.pendingCode = '';
            this.dialogRef?.openModal();
        }
        else {
            this.dialogRef?.closeModal();
        }
    }
    get availableLanguages() {
        return this.catalog.filter(language => !this.languages.some(shown => shown.code === language.code));
    }
    handleAdd = () => {
        const language = this.catalog.find(item => item.code === this.pendingCode);
        if (!language) {
            return;
        }
        this.addLanguage.emit({ code: language.code, name: language.name });
        this.pendingCode = '';
    };
    renderLanguageRow(language) {
        const percent = utils.completionFor(this.entries, language.code);
        const isSource = !!language.isSource;
        return (index.h("li", { key: language.code, class: "language-dialog__item" }, index.h("span", { class: "language-dialog__code" }, language.code.toUpperCase()), index.h("span", { class: "language-dialog__name" }, language.name, isSource && index.h("span", { class: "language-dialog__source-tag" }, "Source")), index.h("span", { class: "language-dialog__coverage" }, index.h("wa-progress-bar", { class: "language-dialog__bar", value: percent, label: `${language.name} coverage` }), index.h("span", { class: "language-dialog__percent" }, percent, "%")), index.h("wa-dropdown", { "onwa-select": (e) => {
                if (e.detail.item.value === 'source') {
                    this.setSourceLanguage.emit(language.code);
                }
                else if (e.detail.item.value === 'remove') {
                    this.removeLanguage.emit(language.code);
                }
            } }, index.h("ir-custom-button", { slot: "trigger", appearance: "plain", variant: "neutral", iconBtn: true }, index.h("wa-icon", { name: "ellipsis", label: `Actions for ${language.name}` })), index.h("wa-dropdown-item", { value: "source", disabled: isSource }, index.h("wa-icon", { slot: "icon", name: "star" }), "Set as source"), index.h("wa-dropdown-item", { value: "remove", disabled: isSource }, index.h("wa-icon", { slot: "icon", name: "eye-slash" }), "Hide from view"))));
    }
    render() {
        const availableLanguages = this.availableLanguages;
        return (index.h("ir-dialog", { key: '90a053add7efd2e3124b44115470185ffc1b92d8', label: "Languages", ref: el => (this.dialogRef = el), onIrDialogHide: () => this.closeDialog.emit() }, index.h("div", { key: 'ffbfaaa0d1ea3599356736b573385ced7439b2eb', class: "language-dialog__body" }, this.languages.length === 0 ? (index.h("ir-empty-state", { message: "No languages shown. Add one below." })) : (index.h("ul", { class: "language-dialog__list" }, this.languages.map(language => this.renderLanguageRow(language)))), index.h("div", { key: 'd969194e2253f717308599097661b2aab0d6868b', class: "language-dialog__add" }, availableLanguages.length === 0 ? (index.h("p", { class: "language-dialog__hint" }, "All exposed languages are shown.")) : (index.h(index.Fragment, null, index.h("h3", { class: "language-dialog__add-title" }, "Show a language"), index.h("div", { class: "language-dialog__add-row" }, index.h("wa-select", { label: "Language", size: "s", class: "language-dialog__select", value: this.pendingCode, onchange: (e) => (this.pendingCode = e.target.value) }, availableLanguages.map(language => (index.h("wa-option", { key: language.code, value: language.code }, language.name, " (", language.code.toUpperCase(), ")")))), index.h("ir-custom-button", { appearance: "filled", variant: "brand", disabled: !this.pendingCode, onClickHandler: this.handleAdd }, "Add")))))), index.h("div", { key: 'acfaa16455464619a0723af19c66484b413d2af5', slot: "footer", class: "language-dialog__footer" }, index.h("ir-custom-button", { key: '353b903648fd2f16ddd0aa8b6815f0b91acd186d', appearance: "filled", variant: "neutral", onClickHandler: () => this.closeDialog.emit() }, "Done"))));
    }
    static get watchers() { return {
        "open": [{
                "handleOpenChange": 0
            }]
    }; }
};
IrTranslationsLanguageDialog.style = irTranslationsLanguageDialogCss();

exports.ir_translations_language_dialog = IrTranslationsLanguageDialog;
