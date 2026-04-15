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
        return (h(Host, { key: '3005e1d833dd29ccbd14a52672de8ca179e65dad' }, h("form", { key: '5faac7b23062267110715547ea7b73ddda004653', onSubmit: e => {
                e.preventDefault();
                this.handleSubmit();
            }, class: "ir-rectifier__form", id: this.formId }, h("wa-callout", { key: 'a9bb416096193aad48b50d02eb2064945969faa5', size: "small", appearance: "filled", variant: "warning" }, h("wa-icon", { key: '56fd99d0367ab6be78fd6ee4c42e8da3a1ea09e8', slot: "icon", name: "triangle-exclamation" }), "This will update the total availability of the select room types by calculating: No. of physical rooms - Booked - Blocked - Pending"), h("div", { key: '97b32613fe3a970adf4a84029ea6004f69579ff5', class: "ir-rectifier__roomtypes" }, roomTypes.map(roomtype => {
            const roomTypeId = Number(roomtype?.id);
            if (!Number.isFinite(roomTypeId)) {
                return null;
            }
            const isSelected = this.form.room_type_ids.includes(roomTypeId);
            return (h("wa-checkbox", { class: "ir-rectifier__roomtype-checkbox", checked: isSelected, onchange: e => {
                    const checked = e.target.checked;
                    this.updateRoomTypeSelection(roomTypeId, checked);
                } }, roomtype.name));
        })), this.showRoomTypeError && h("p", { key: '54264c4ea290b7e9573795a3aff5cb08fb31ff15', class: "text-danger m-0" }, "Please select at least one room type."), h("div", { key: 'c51f558c39c766a53917d2ea96ad881c81e52a64', class: "ir-rectifier__date-range" }, h("ir-validator", { key: 'af9ffc5b20b3302ae9979d61f6dbf7a1ffb46053', value: this.form.from ?? null, schema: ExposedRectifierParamsSchema.shape.from, autovalidate: this.autoValidate }, h("ir-custom-date-picker", { key: '202567ae31ceda6c048c63169d28eb30df08ea4d', class: "ir-rectifier__date-picker ir-rectifier__date-picker--from", label: "Date from", emitEmptyDate: true, date: this.form.from, onDateChanged: e => {
                const from = e.detail.start?.format('YYYY-MM-DD') ?? null;
                this.updateForm(this.normalizeDateRange({ from }));
                requestAnimationFrame(() => this.toDateRef?.openDatePicker());
            } })), h("ir-validator", { key: '28499ed70d55d8074915b80c2ac8da8d3a44fa73', value: this.form.to ?? null, schema: ExposedRectifierParamsSchema.shape.to, autovalidate: this.autoValidate }, h("ir-custom-date-picker", { key: '4b07ecc505fc9f1b4cf2add83e44472867fbbe76', class: "ir-rectifier__date-picker ir-rectifier__date-picker--to", label: "To (inclusive)", emitEmptyDate: true, disabled: !this.form.from, ref: el => (this.toDateRef = el), date: this.form.to, minDate: this.form.from, onDateChanged: e => {
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