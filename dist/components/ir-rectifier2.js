import { proxyCustomElement, HTMLElement, createEvent, h, Host } from '@stencil/core/internal/client';
import { P as PropertyService, E as ExposedRectifierParamsSchema } from './property.service.js';
import { c as calendar_data } from './calendar-data.js';
import { h as hooks } from './moment.js';
import { d as defineCustomElement$4 } from './ir-air-date-picker2.js';
import { d as defineCustomElement$3 } from './ir-date-select2.js';
import { d as defineCustomElement$2 } from './ir-input2.js';
import { d as defineCustomElement$1 } from './ir-validator2.js';

const irRectifierCss = ".ir-rectifier__form.sc-ir-rectifier{padding:0 1.5rem;display:flex;flex-direction:column;gap:1.5rem}.ir-rectifier__roomtypes.sc-ir-rectifier{display:flex;flex-direction:column;gap:1rem}.ir-rectifier__date-range.sc-ir-rectifier{display:flex;align-items:center;gap:1rem}";
const IrRectifierStyle0 = irRectifierCss;

const IrRectifier = /*@__PURE__*/ proxyCustomElement(class IrRectifier extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.loadingChanged = createEvent(this, "loadingChanged", 7);
        this.closeDrawer = createEvent(this, "closeDrawer", 7);
        this.toast = createEvent(this, "toast", 7);
    }
    formId;
    form = {
        property_id: null,
        room_type_ids: [],
        from: null,
        to: null,
    };
    autoValidate = false;
    showRoomTypeError = false;
    loadingChanged;
    closeDrawer;
    toast;
    propertyService = new PropertyService();
    toDateRef;
    componentWillLoad() {
        this.form = {
            ...this.form,
            property_id: calendar_data.property?.id ?? calendar_data.id ?? null,
        };
    }
    updateForm(next) {
        this.form = {
            ...this.form,
            ...next,
        };
    }
    normalizeDateRange(next) {
        const from = next.from ?? this.form.from;
        const to = next.to ?? this.form.to;
        if (from && to && hooks(from).isAfter(to, 'day')) {
            if (next.from) {
                return { ...next, to: from };
            }
            if (next.to) {
                return { ...next, from: to };
            }
        }
        return next;
    }
    updateRoomTypeSelection(roomTypeId, checked) {
        const nextIds = new Set(this.form.room_type_ids);
        if (checked) {
            nextIds.add(roomTypeId);
        }
        else {
            nextIds.delete(roomTypeId);
        }
        this.showRoomTypeError = false;
        this.updateForm({ room_type_ids: Array.from(nextIds) });
    }
    async handleSubmit() {
        this.loadingChanged.emit(true);
        this.autoValidate = true;
        this.showRoomTypeError = false;
        try {
            const propertyId = this.form.property_id ?? calendar_data.property?.id ?? calendar_data.id ?? undefined;
            const result = ExposedRectifierParamsSchema.safeParse({
                ...this.form,
                property_id: propertyId,
            });
            if (!result.success) {
                this.showRoomTypeError = result.error.issues.some(issue => issue.path[0] === 'room_type_ids');
                return;
            }
            await this.propertyService.exposedRectifier(result.data);
            this.toast.emit({
                type: 'success',
                title: 'The update is being processed.',
                description: '',
            });
            this.closeDrawer.emit();
        }
        catch (error) {
            console.error(error);
        }
        finally {
            this.loadingChanged.emit(false);
        }
    }
    render() {
        const roomTypes = calendar_data.property?.roomtypes ?? [];
        return (h(Host, { key: 'fe9928a516a0be4bfb49ffb8c996041bdd7f6c38' }, h("form", { key: '00f8f7ad0b2f2d1021bc8d89a151ffd9d778d776', onSubmit: e => {
                e.preventDefault();
                this.handleSubmit();
            }, class: "ir-rectifier__form", id: this.formId }, h("wa-callout", { key: 'a0a43bdd74ebc54e5669bdd441e7ade9bb5316d6', size: "small", appearance: "filled", variant: "warning" }, h("wa-icon", { key: 'eb9a6a1cbaeb6f1eb381dfc16351c17e3a2acd1f', slot: "icon", name: "triangle-exclamation" }), "This will update the total availability of the select room types by calculating: No. of physical rooms - Booked - Blocked - Pending"), h("div", { key: '7ae9348d8ef95c624e3f0f0cc9c004c036914c5d', class: "ir-rectifier__roomtypes" }, roomTypes.map(roomtype => {
            const roomTypeId = Number(roomtype?.id);
            if (!Number.isFinite(roomTypeId)) {
                return null;
            }
            const isSelected = this.form.room_type_ids.includes(roomTypeId);
            return (h("wa-checkbox", { class: "ir-rectifier__roomtype-checkbox", checked: isSelected, onchange: e => {
                    const checked = e.target.checked;
                    this.updateRoomTypeSelection(roomTypeId, checked);
                } }, roomtype.name));
        })), this.showRoomTypeError && h("p", { key: 'c6d2a592db1c01dbdab38173773e9fddcae00a8c', class: "text-danger m-0" }, "Please select at least one room type."), h("div", { key: '73836d52ca8af6c3ffdcf92a210f416433606a14', class: "ir-rectifier__date-range" }, h("ir-validator", { key: 'd51a09ab225fd3887176eaef3c8f1bd2ce652b20', value: this.form.from ?? null, schema: ExposedRectifierParamsSchema.shape.from, autovalidate: this.autoValidate }, h("ir-date-select", { key: '61f3af5e8d2a712ced8b0c85973660363ad0e538', class: "ir-rectifier__date-picker ir-rectifier__date-picker--from", label: "Date from", emitEmptyDate: true, date: this.form.from, onDateChanged: e => {
                const from = e.detail.start?.format('YYYY-MM-DD') ?? null;
                this.updateForm(this.normalizeDateRange({ from }));
                requestAnimationFrame(() => this.toDateRef?.openDatePicker());
            } })), h("ir-validator", { key: '7fca6e977bf3585f47f19a03b2c16cefdd9f5ffa', value: this.form.to ?? null, schema: ExposedRectifierParamsSchema.shape.to, autovalidate: this.autoValidate }, h("ir-date-select", { key: 'd4fd343b8613eba9fe20f937bb59413cceffa2f7', class: "ir-rectifier__date-picker ir-rectifier__date-picker--to", label: "To (inclusive)", emitEmptyDate: true, disabled: !this.form.from, ref: el => (this.toDateRef = el), date: this.form.to, minDate: this.form.from, onDateChanged: e => {
                const to = e.detail.start?.format('YYYY-MM-DD') ?? null;
                this.updateForm(this.normalizeDateRange({ to }));
            } }))))));
    }
    static get style() { return IrRectifierStyle0; }
}, [2, "ir-rectifier", {
        "formId": [1, "form-id"],
        "form": [32],
        "autoValidate": [32],
        "showRoomTypeError": [32]
    }]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["ir-rectifier", "ir-air-date-picker", "ir-date-select", "ir-input", "ir-validator"];
    components.forEach(tagName => { switch (tagName) {
        case "ir-rectifier":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, IrRectifier);
            }
            break;
        case "ir-air-date-picker":
            if (!customElements.get(tagName)) {
                defineCustomElement$4();
            }
            break;
        case "ir-date-select":
            if (!customElements.get(tagName)) {
                defineCustomElement$3();
            }
            break;
        case "ir-input":
            if (!customElements.get(tagName)) {
                defineCustomElement$2();
            }
            break;
        case "ir-validator":
            if (!customElements.get(tagName)) {
                defineCustomElement$1();
            }
            break;
    } });
}

export { IrRectifier as I, defineCustomElement as d };

//# sourceMappingURL=ir-rectifier2.js.map