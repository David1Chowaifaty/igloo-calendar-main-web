import { h } from "@stencil/core";
import locales from "../../../stores/locales.store";
import { calculateDaysBetweenDates } from "../../../utils/booking";
import moment from "moment";
export class IglDateRange {
    size = 'small';
    defaultData;
    disabled = false;
    minDate;
    dateLabel;
    maxDate;
    withDateDifference = true;
    variant = 'default';
    hint;
    renderAgain = false;
    dateSelectEvent;
    dateRangeChange;
    toast;
    totalNights = 0;
    fromDate = moment().toDate();
    toDate = moment().add(1, 'day').toDate();
    isInvalid;
    componentWillLoad() {
        this.initializeDates();
    }
    handleDataChange(newValue, oldValue) {
        if (JSON.stringify(newValue) !== JSON.stringify(oldValue)) {
            this.initializeDates();
        }
    }
    initializeDates() {
        if (this.defaultData) {
            if (this.defaultData.fromDate) {
                this.fromDate = new Date(this.defaultData.fromDate);
                this.fromDate.setHours(0, 0, 0, 0);
            }
            if (this.defaultData.toDate) {
                this.toDate = new Date(this.defaultData.toDate);
                this.toDate.setHours(0, 0, 0, 0);
            }
        }
        if (this.fromDate && this.toDate) {
            this.calculateTotalNights();
        }
    }
    calculateTotalNights() {
        this.totalNights = calculateDaysBetweenDates(moment(this.fromDate).format('YYYY-MM-DD'), moment(this.toDate).format('YYYY-MM-DD'));
    }
    handleDateSelectEvent(key, data = '') {
        this.dateSelectEvent.emit({ key, data });
    }
    handleDateChange(evt) {
        const { start, end } = evt.detail;
        this.fromDate = start.toDate();
        this.toDate = end.toDate();
        this.calculateTotalNights();
        this.handleDateSelectEvent('selectedDateRange', {
            fromDate: this.fromDate.getTime(),
            toDate: this.toDate.getTime(),
            fromDateStr: start.format('DD MMM YYYY'),
            toDateStr: end.format('DD MMM YYYY'),
            dateDifference: this.totalNights,
        });
        this.dateRangeChange.emit({
            checkIn: start,
            checkOut: end,
        });
        this.renderAgain = !this.renderAgain;
    }
    // private renderDateSummary(showNights: boolean) {
    //   const fromDateDisplay = moment(this.fromDate).format('MMM DD, YYYY');
    //   const toDateDisplay = moment(this.toDate).format('MMM DD, YYYY');
    //   const shouldRenderNights = showNights && this.totalNights > 0;
    //   return (
    //     <div
    //       class={{
    //         'date-range-display': true,
    //         'date-range-display--disabled': this.disabled,
    //       }}
    //     >
    //       <wa-icon variant="regular" name="calendar"></wa-icon>
    //       <span class="date-range-date">{fromDateDisplay}</span>
    //       <wa-icon name="arrow-right"></wa-icon>
    //       <span class="date-range-date">{toDateDisplay}</span>
    //       {shouldRenderNights && (
    //         <span class="date-range-nights">{this.totalNights + (this.totalNights > 1 ? ` ${locales.entries.Lcz_Nights}` : ` ${locales.entries.Lcz_Night}`)}</span>
    //       )}
    //     </div>
    //   );
    // }
    get dates() {
        const fromDate = moment(this.fromDate).format('YYYY-MM-DD');
        const toDate = moment(this.toDate).format('YYYY-MM-DD');
        return [fromDate, toDate];
    }
    handleAriaInvalidChange(newValue) {
        this.isInvalid = newValue;
    }
    render() {
        const showNights = this.variant === 'booking' && this.withDateDifference;
        return (
        // <Host size={this.size}>
        //   <div class={`date-range-shell ${this.disabled ? 'disabled' : ''} ${this.variant === 'booking' ? 'picker' : ''}`}>
        //     <ir-date-range
        //       maxDate={this.maxDate}
        //       class={'date-range-input'}
        //       disabled={this.disabled}
        //       fromDate={this.fromDate}
        //       toDate={this.toDate}
        //       minDate={this.minDate}
        //       autoApply
        //       data-state={this.disabled ? 'disabled' : 'active'}
        //       onDateRangeChange={evt => {
        //         this.handleDateChange(evt);
        //       }}
        //     ></ir-date-range>
        //     {this.renderDateSummary(showNights)}
        //   </div>
        // </Host>
        h("ir-date-select", { key: 'ae20a84a7221ceecca2a700e9a88bf75d7048a1b', disabled: this.disabled, class: "custom-picker", minDate: this.minDate, "aria-invalid": this.isInvalid, maxDate: this.maxDate, onDateChanged: e => this.handleDateChange(e), range: true,
            // hint={this.hint}
            dates: this.dates }, h("wa-icon", { key: 'd2bcc2d1644c615037556129482c1e23d1ebf58f', slot: "start", variant: "regular", name: "calendar" }), showNights && (h("span", { key: '76d533c05ab6563dff91fedd4dd1e1ffb88337f8', slot: "end", class: "date-range-nights" }, this.totalNights + (this.totalNights > 1 ? ` ${locales.entries.Lcz_Nights}` : ` ${locales.entries.Lcz_Night}`)))));
    }
    static get is() { return "igl-date-range"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["igl-date-range.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["igl-date-range.css"]
        };
    }
    static get properties() {
        return {
            "size": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "'small' | 'medium' | 'large'",
                    "resolved": "\"large\" | \"medium\" | \"small\"",
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
                "attribute": "size",
                "reflect": true,
                "defaultValue": "'small'"
            },
            "defaultData": {
                "type": "unknown",
                "mutable": false,
                "complexType": {
                    "original": "{ [key: string]: any }",
                    "resolved": "{ [key: string]: any; }",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false
            },
            "disabled": {
                "type": "boolean",
                "mutable": false,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
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
                "attribute": "disabled",
                "reflect": true,
                "defaultValue": "false"
            },
            "minDate": {
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
                "attribute": "min-date",
                "reflect": false
            },
            "dateLabel": {
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
                "attribute": "date-label",
                "reflect": false
            },
            "maxDate": {
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
                "attribute": "max-date",
                "reflect": false
            },
            "withDateDifference": {
                "type": "boolean",
                "mutable": false,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
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
                "attribute": "with-date-difference",
                "reflect": false,
                "defaultValue": "true"
            },
            "variant": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "'booking' | 'default'",
                    "resolved": "\"booking\" | \"default\"",
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
                "attribute": "variant",
                "reflect": false,
                "defaultValue": "'default'"
            },
            "hint": {
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
                "attribute": "hint",
                "reflect": false
            }
        };
    }
    static get states() {
        return {
            "renderAgain": {},
            "fromDate": {},
            "toDate": {},
            "isInvalid": {}
        };
    }
    static get events() {
        return [{
                "method": "dateSelectEvent",
                "name": "dateSelectEvent",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "complexType": {
                    "original": "{ [key: string]: any }",
                    "resolved": "{ [key: string]: any; }",
                    "references": {}
                }
            }, {
                "method": "dateRangeChange",
                "name": "dateRangeChange",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "complexType": {
                    "original": "DateRangeChangeEvent",
                    "resolved": "{ checkIn: Moment; checkOut: Moment; }",
                    "references": {
                        "DateRangeChangeEvent": {
                            "location": "local",
                            "path": "/Users/davidchowaifaty/code/igloorooms/modified-ir-webcmp/src/components/igloo-calendar/igl-date-range/igl-date-range.tsx",
                            "id": "src/components/igloo-calendar/igl-date-range/igl-date-range.tsx::DateRangeChangeEvent"
                        }
                    }
                }
            }, {
                "method": "toast",
                "name": "toast",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "complexType": {
                    "original": "IToast",
                    "resolved": "ICustomToast & Partial<IToastWithButton> | IDefaultToast & Partial<IToastWithButton>",
                    "references": {
                        "IToast": {
                            "location": "import",
                            "path": "@components/ui/ir-toast/toast",
                            "id": "src/components/ui/ir-toast/toast.ts::IToast"
                        }
                    }
                }
            }];
    }
    static get watchers() {
        return [{
                "propName": "defaultData",
                "methodName": "handleDataChange"
            }, {
                "propName": "aria-invalid",
                "methodName": "handleAriaInvalidChange"
            }];
    }
}
//# sourceMappingURL=igl-date-range.js.map
