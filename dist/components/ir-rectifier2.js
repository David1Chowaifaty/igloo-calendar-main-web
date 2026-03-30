import { proxyCustomElement, HTMLElement, createEvent, h, Host } from '@stencil/core/internal/client';
import { P as PropertyService, E as ExposedRectifierParamsSchema } from './property.service.js';
import { c as calendar_data } from './calendar-data.js';
import { h as hooks } from './moment.js';
import { d as defineCustomElement$3 } from './ir-custom-date-picker2.js';
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
        return (h(Host, { key: 'bc45b32d56accf0c757c76b064b1672678ca8e81' }, h("form", { key: '1df5998b1530a3a3a6080f07d7e651eaa7cd525e', onSubmit: e => {
                e.preventDefault();
                this.handleSubmit();
            }, class: "ir-rectifier__form", id: this.formId }, h("wa-callout", { key: '969625e54c2d05e38e3edec5babcee1e71fbb4eb', size: "small", appearance: "filled", variant: "warning" }, h("wa-icon", { key: '8f736fa1cd477d21ef2e6f3fadab2f8886992f17', slot: "icon", name: "triangle-exclamation" }), "This will update the total availability of the select room types by calculating: No. of physical rooms - Booked - Blocked - Pending"), h("div", { key: 'd3b8c7b1d4f119c67d2b7ee069243a8b0b7939e8', class: "ir-rectifier__roomtypes" }, roomTypes.map(roomtype => {
            const roomTypeId = Number(roomtype?.id);
            if (!Number.isFinite(roomTypeId)) {
                return null;
            }
            const isSelected = this.form.room_type_ids.includes(roomTypeId);
            return (h("wa-checkbox", { class: "ir-rectifier__roomtype-checkbox", checked: isSelected, onchange: e => {
                    const checked = e.target.checked;
                    this.updateRoomTypeSelection(roomTypeId, checked);
                } }, roomtype.name));
        })), this.showRoomTypeError && h("p", { key: 'dff1995b0fd3f1a0eaee1fbf704d3cf629ac5743', class: "text-danger m-0" }, "Please select at least one room type."), h("div", { key: '339b5c40a28e6598047276628f9ff055dd31b800', class: "ir-rectifier__date-range" }, h("ir-validator", { key: '1acee8fa90a6cac3d1e1666950fc7fbaa1a64e4b', value: this.form.from ?? null, schema: ExposedRectifierParamsSchema.shape.from, autovalidate: this.autoValidate }, h("ir-custom-date-picker", { key: 'd1e152fc8264ceea0bebd6cd09186457ffd1ea1f', class: "ir-rectifier__date-picker ir-rectifier__date-picker--from", label: "Date from", emitEmptyDate: true, date: this.form.from, onDateChanged: e => {
                const from = e.detail.start?.format('YYYY-MM-DD') ?? null;
                this.updateForm(this.normalizeDateRange({ from }));
                requestAnimationFrame(() => this.toDateRef?.openDatePicker());
            } })), h("ir-validator", { key: '8ebbcc2315756e2a3e5bcf45ad3746eab865c925', value: this.form.to ?? null, schema: ExposedRectifierParamsSchema.shape.to, autovalidate: this.autoValidate }, h("ir-custom-date-picker", { key: '94984a0921ff3fd05295f137b05628965bc9a697', class: "ir-rectifier__date-picker ir-rectifier__date-picker--to", label: "To (inclusive)", emitEmptyDate: true, disabled: !this.form.from, ref: el => (this.toDateRef = el), date: this.form.to, minDate: this.form.from, onDateChanged: e => {
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
    const components = ["ir-rectifier", "ir-custom-date-picker", "ir-input", "ir-validator"];
    components.forEach(tagName => { switch (tagName) {
        case "ir-rectifier":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, IrRectifier);
            }
            break;
        case "ir-custom-date-picker":
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