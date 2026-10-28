import { PropertyService } from "../../../services/property.service";
import { ExposedRectifierParamsSchema } from "../../../services/property/types";
import calendar_data from "../../../stores/calendar-data";
import { showToast } from "../../../utils/utils";
import { Host, h } from "@stencil/core";
import moment from "moment";
import { t } from "../../../services/locale/t";
export class IrRectifier {
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
        if (from && to && moment(from).isAfter(to, 'day')) {
            if (next.from) {
                return { ...next, to: from };
            }
            if (next.to) {
                return { ...next, from: to };
            }
        }
        return next;
    }
    getValidRoomTypeIds() {
        const roomTypes = calendar_data.property?.roomtypes ?? [];
        return roomTypes.map(roomtype => Number(roomtype?.id)).filter(id => Number.isFinite(id));
    }
    toggleSelectAllRoomTypes(checked) {
        this.showRoomTypeError = false;
        this.updateForm({ room_type_ids: checked ? this.getValidRoomTypeIds() : [] });
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
            showToast({
                type: 'success',
                title: t('Lcz_UpdateBeingProcessed', { fallback: 'The update is being processed.' }),
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
        const validRoomTypeIds = this.getValidRoomTypeIds();
        const allSelected = validRoomTypeIds.length > 0 && validRoomTypeIds.every(id => this.form.room_type_ids.includes(id));
        const someSelected = validRoomTypeIds.some(id => this.form.room_type_ids.includes(id));
        return (h(Host, { key: 'e65c83d255286ac8ccd270cf13e08cd7d14a6f56' }, h("form", { key: 'cec95c87e0ca4d82e1a50e20edef4be99933b175', onSubmit: e => {
                e.preventDefault();
                this.handleSubmit();
            }, class: "ir-rectifier__form", id: this.formId }, h("wa-callout", { key: 'b45b0e7d722cd04ebf05c3a06c951901167f7550', size: "s", appearance: "filled", variant: "warning" }, h("wa-icon", { key: 'a4d0dbd64f2d31cf4a54947369b7b494b48792c0', slot: "icon", name: "triangle-exclamation" }), t('Lcz_RectifierCalloutExplanation', {
            fallback: 'This will update the total availability of the selected room types by calculating: No. of physical rooms - Booked - Blocked - Pending',
        })), h("div", { key: 'c7980c485317bfd10f02d25850aadf7e105367e7', class: "ir-rectifier__roomtypes" }, validRoomTypeIds.length > 0 && (h("wa-checkbox", { key: '2fb4b19971f08a09932dadce5dcd3522b7ea57f1', class: "ir-rectifier__roomtype-checkbox ir-rectifier__roomtype-checkbox--all", checked: allSelected, indeterminate: !allSelected && someSelected, onchange: e => {
                const checked = e.target.checked;
                this.toggleSelectAllRoomTypes(checked);
            } }, t('Lcz_SelectAll', { fallback: 'Select all' }))), roomTypes.map(roomtype => {
            const roomTypeId = Number(roomtype?.id);
            if (!Number.isFinite(roomTypeId)) {
                return null;
            }
            const isSelected = this.form.room_type_ids.includes(roomTypeId);
            return (h("wa-checkbox", { class: "ir-rectifier__roomtype-checkbox", checked: isSelected, onchange: e => {
                    const checked = e.target.checked;
                    this.updateRoomTypeSelection(roomTypeId, checked);
                } }, roomtype.name));
        })), this.showRoomTypeError && h("p", { key: 'a94fa726ab64a0d33eefbca289cf157c9b2d8495', class: "text-danger m-0" }, t('Lcz_PleaseSelectAtLeastOneRoomType', { fallback: 'Please select at least one room type.' })), h("div", { key: '87dcbdbccef01289522277017776aaaaecce0e80', class: "ir-rectifier__date-range" }, h("ir-validator", { key: 'edc8abcfd4cf9a327b94c7c64dcc4b10651a398f', value: this.form.from ?? null, schema: ExposedRectifierParamsSchema.shape.from, autovalidate: this.autoValidate }, h("ir-date-select", { key: 'c2191854e8ecb28627eabd582ac4a56095b3a3cb', class: "ir-rectifier__date-picker ir-rectifier__date-picker--from", label: t('Lcz_DateFrom', { fallback: 'Date from' }), emitEmptyDate: true, date: this.form.from, onDateChanged: e => {
                const from = e.detail.start?.format('YYYY-MM-DD') ?? null;
                this.updateForm(this.normalizeDateRange({ from }));
                requestAnimationFrame(() => this.toDateRef?.show());
            } })), h("ir-validator", { key: 'ae43cebf39290e8c0ecfb5d9cbcb8e7421e2759c', value: this.form.to ?? null, schema: ExposedRectifierParamsSchema.shape.to, autovalidate: this.autoValidate }, h("ir-date-select", { key: '59d47b5fb343a1c92bafcefb9aaadd7a65b99f01', class: "ir-rectifier__date-picker ir-rectifier__date-picker--to", label: t('Lcz_ToInclusive', { fallback: 'To (inclusive)' }), emitEmptyDate: true, disabled: !this.form.from, ref: el => (this.toDateRef = el), date: this.form.to, minDate: this.form.from, onDateChanged: e => {
                const to = e.detail.start?.format('YYYY-MM-DD') ?? null;
                this.updateForm(this.normalizeDateRange({ to }));
            } }))))));
    }
    static get is() { return "ir-rectifier"; }
    static get encapsulation() { return "scoped"; }
    static get originalStyleUrls() {
        return {
            "$": ["ir-rectifier.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["ir-rectifier.css"]
        };
    }
    static get properties() {
        return {
            "formId": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
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
                "reflect": false,
                "attribute": "form-id"
            }
        };
    }
    static get states() {
        return {
            "form": {},
            "autoValidate": {},
            "showRoomTypeError": {}
        };
    }
    static get events() {
        return [{
                "method": "loadingChanged",
                "name": "loadingChanged",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                }
            }, {
                "method": "closeDrawer",
                "name": "closeDrawer",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "complexType": {
                    "original": "void",
                    "resolved": "void",
                    "references": {}
                }
            }];
    }
}
