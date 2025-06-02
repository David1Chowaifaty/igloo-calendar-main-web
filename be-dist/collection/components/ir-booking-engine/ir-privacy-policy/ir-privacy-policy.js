import app_store from "../../../stores/app.store";
import localizedWords from "../../../stores/localization.store";
import { Host, h } from "@stencil/core";
export class IrPrivacyPolicy {
    constructor() {
        this.label = 'privacy policy';
        this.hideTrigger = false;
    }
    replaceStringByObjectValue(input, replacements) {
        if (!input) {
            return '';
        }
        for (const [key, value] of Object.entries(replacements)) {
            const escapedKey = key.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
            input = input.replace(new RegExp(escapedKey, 'g'), value);
        }
        return input;
    }
    async openModal() {
        this.dialogRef.openModal();
    }
    async closeModal() {
        this.dialogRef.closeModal();
    }
    render() {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o;
        return (h(Host, { key: '1c02928691e8a1cc7a70f889cd0b01df4a268993' }, !this.hideTrigger && (h("ir-button", { key: '4462f77b6aa1189a40ecbce1ea40e7f66b076344', label: this.label, buttonStyles: Object.assign({ padding: '0', background: 'transparent' }, this.policyTriggerStyle), variants: "link", onButtonClick: () => this.dialogRef.openModal() })), h("ir-dialog", { key: '93e3b6896974502d5de64853e7e99c53c7173dcc', ref: el => (this.dialogRef = el) }, h("div", { key: '05df1602883776afd54aff2ca2a40f86207e3973', class: "max-h-[83vh] overflow-y-auto p-4  text-[var(--gray-600,#475467)] md:p-6", slot: "modal-title" }, h("h1", { key: '52d75ebb1b6ffa2de54511c5c40d09cb3e4c06ac', class: "mb-4 text-xl font-semibold capitalize text-[var(--gray-700,#344054)]" }, localizedWords.entries.Lcz_PrivacyPolicy), h("div", { key: '16eb2e4e798227133425fa8bbbf530460560a41f', class: "text-sm font-normal" }, h("p", { key: '9cf42ba16f12907ede89b9345d3a6bc11a82bc26', innerHTML: this.replaceStringByObjectValue((_a = app_store.property) === null || _a === void 0 ? void 0 : _a.privacy_policy, {
                '[AC_NAME]': (_c = (_b = app_store.property) === null || _b === void 0 ? void 0 : _b.name) !== null && _c !== void 0 ? _c : '',
                '[URL]': (_e = (_d = app_store.property) === null || _d === void 0 ? void 0 : _d.space_theme.website) !== null && _e !== void 0 ? _e : '',
                '[ADDRESS]': (_g = (_f = app_store.property) === null || _f === void 0 ? void 0 : _f.address) !== null && _g !== void 0 ? _g : '',
                '[AREA]': (_j = (_h = app_store.property) === null || _h === void 0 ? void 0 : _h.area) !== null && _j !== void 0 ? _j : '',
                '[LEVEL2]': (_l = (_k = app_store.property) === null || _k === void 0 ? void 0 : _k.city.name) !== null && _l !== void 0 ? _l : '',
                '[COUNTRY]': (_o = (_m = app_store.property) === null || _m === void 0 ? void 0 : _m.country.name) !== null && _o !== void 0 ? _o : '',
            }) }))))));
    }
    static get is() { return "ir-privacy-policy"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["ir-privacy-policy.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["ir-privacy-policy.css"]
        };
    }
    static get properties() {
        return {
            "label": {
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
                "attribute": "label",
                "reflect": false,
                "defaultValue": "'privacy policy'"
            },
            "hideTrigger": {
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
                "attribute": "hide-trigger",
                "reflect": false,
                "defaultValue": "false"
            },
            "policyTriggerStyle": {
                "type": "unknown",
                "mutable": false,
                "complexType": {
                    "original": "Partial<CSSStyleDeclaration>",
                    "resolved": "{ [x: number]: string; accentColor?: string; alignContent?: string; alignItems?: string; alignSelf?: string; alignmentBaseline?: string; all?: string; animation?: string; animationComposition?: string; animationDelay?: string; animationDirection?: string; animationDuration?: string; animationFillMode?: string; animationIterationCount?: string; animationName?: string; animationPlayState?: string; animationTimingFunction?: string; appearance?: string; aspectRatio?: string; backdropFilter?: string; backfaceVisibility?: string; background?: string; backgroundAttachment?: string; backgroundBlendMode?: string; backgroundClip?: string; backgroundColor?: string; backgroundImage?: string; backgroundOrigin?: string; backgroundPosition?: string; backgroundPositionX?: string; backgroundPositionY?: string; backgroundRepeat?: string; backgroundSize?: string; baselineShift?: string; baselineSource?: string; blockSize?: string; border?: string; borderBlock?: string; borderBlockColor?: string; borderBlockEnd?: string; borderBlockEndColor?: string; borderBlockEndStyle?: string; borderBlockEndWidth?: string; borderBlockStart?: string; borderBlockStartColor?: string; borderBlockStartStyle?: string; borderBlockStartWidth?: string; borderBlockStyle?: string; borderBlockWidth?: string; borderBottom?: string; borderBottomColor?: string; borderBottomLeftRadius?: string; borderBottomRightRadius?: string; borderBottomStyle?: string; borderBottomWidth?: string; borderCollapse?: string; borderColor?: string; borderEndEndRadius?: string; borderEndStartRadius?: string; borderImage?: string; borderImageOutset?: string; borderImageRepeat?: string; borderImageSlice?: string; borderImageSource?: string; borderImageWidth?: string; borderInline?: string; borderInlineColor?: string; borderInlineEnd?: string; borderInlineEndColor?: string; borderInlineEndStyle?: string; borderInlineEndWidth?: string; borderInlineStart?: string; borderInlineStartColor?: string; borderInlineStartStyle?: string; borderInlineStartWidth?: string; borderInlineStyle?: string; borderInlineWidth?: string; borderLeft?: string; borderLeftColor?: string; borderLeftStyle?: string; borderLeftWidth?: string; borderRadius?: string; borderRight?: string; borderRightColor?: string; borderRightStyle?: string; borderRightWidth?: string; borderSpacing?: string; borderStartEndRadius?: string; borderStartStartRadius?: string; borderStyle?: string; borderTop?: string; borderTopColor?: string; borderTopLeftRadius?: string; borderTopRightRadius?: string; borderTopStyle?: string; borderTopWidth?: string; borderWidth?: string; bottom?: string; boxShadow?: string; boxSizing?: string; breakAfter?: string; breakBefore?: string; breakInside?: string; captionSide?: string; caretColor?: string; clear?: string; clip?: string; clipPath?: string; clipRule?: string; color?: string; colorInterpolation?: string; colorInterpolationFilters?: string; colorScheme?: string; columnCount?: string; columnFill?: string; columnGap?: string; columnRule?: string; columnRuleColor?: string; columnRuleStyle?: string; columnRuleWidth?: string; columnSpan?: string; columnWidth?: string; columns?: string; contain?: string; containIntrinsicBlockSize?: string; containIntrinsicHeight?: string; containIntrinsicInlineSize?: string; containIntrinsicSize?: string; containIntrinsicWidth?: string; container?: string; containerName?: string; containerType?: string; content?: string; contentVisibility?: string; counterIncrement?: string; counterReset?: string; counterSet?: string; cssFloat?: string; cssText?: string; cursor?: string; cx?: string; cy?: string; d?: string; direction?: string; display?: string; dominantBaseline?: string; emptyCells?: string; fill?: string; fillOpacity?: string; fillRule?: string; filter?: string; flex?: string; flexBasis?: string; flexDirection?: string; flexFlow?: string; flexGrow?: string; flexShrink?: string; flexWrap?: string; float?: string; floodColor?: string; floodOpacity?: string; font?: string; fontFamily?: string; fontFeatureSettings?: string; fontKerning?: string; fontOpticalSizing?: string; fontPalette?: string; fontSize?: string; fontSizeAdjust?: string; fontStretch?: string; fontStyle?: string; fontSynthesis?: string; fontSynthesisSmallCaps?: string; fontSynthesisStyle?: string; fontSynthesisWeight?: string; fontVariant?: string; fontVariantAlternates?: string; fontVariantCaps?: string; fontVariantEastAsian?: string; fontVariantLigatures?: string; fontVariantNumeric?: string; fontVariantPosition?: string; fontVariationSettings?: string; fontWeight?: string; forcedColorAdjust?: string; gap?: string; grid?: string; gridArea?: string; gridAutoColumns?: string; gridAutoFlow?: string; gridAutoRows?: string; gridColumn?: string; gridColumnEnd?: string; gridColumnGap?: string; gridColumnStart?: string; gridGap?: string; gridRow?: string; gridRowEnd?: string; gridRowGap?: string; gridRowStart?: string; gridTemplate?: string; gridTemplateAreas?: string; gridTemplateColumns?: string; gridTemplateRows?: string; height?: string; hyphenateCharacter?: string; hyphens?: string; imageOrientation?: string; imageRendering?: string; inlineSize?: string; inset?: string; insetBlock?: string; insetBlockEnd?: string; insetBlockStart?: string; insetInline?: string; insetInlineEnd?: string; insetInlineStart?: string; isolation?: string; justifyContent?: string; justifyItems?: string; justifySelf?: string; left?: string; readonly length?: number; letterSpacing?: string; lightingColor?: string; lineBreak?: string; lineHeight?: string; listStyle?: string; listStyleImage?: string; listStylePosition?: string; listStyleType?: string; margin?: string; marginBlock?: string; marginBlockEnd?: string; marginBlockStart?: string; marginBottom?: string; marginInline?: string; marginInlineEnd?: string; marginInlineStart?: string; marginLeft?: string; marginRight?: string; marginTop?: string; marker?: string; markerEnd?: string; markerMid?: string; markerStart?: string; mask?: string; maskClip?: string; maskComposite?: string; maskImage?: string; maskMode?: string; maskOrigin?: string; maskPosition?: string; maskRepeat?: string; maskSize?: string; maskType?: string; mathDepth?: string; mathStyle?: string; maxBlockSize?: string; maxHeight?: string; maxInlineSize?: string; maxWidth?: string; minBlockSize?: string; minHeight?: string; minInlineSize?: string; minWidth?: string; mixBlendMode?: string; objectFit?: string; objectPosition?: string; offset?: string; offsetAnchor?: string; offsetDistance?: string; offsetPath?: string; offsetPosition?: string; offsetRotate?: string; opacity?: string; order?: string; orphans?: string; outline?: string; outlineColor?: string; outlineOffset?: string; outlineStyle?: string; outlineWidth?: string; overflow?: string; overflowAnchor?: string; overflowClipMargin?: string; overflowWrap?: string; overflowX?: string; overflowY?: string; overscrollBehavior?: string; overscrollBehaviorBlock?: string; overscrollBehaviorInline?: string; overscrollBehaviorX?: string; overscrollBehaviorY?: string; padding?: string; paddingBlock?: string; paddingBlockEnd?: string; paddingBlockStart?: string; paddingBottom?: string; paddingInline?: string; paddingInlineEnd?: string; paddingInlineStart?: string; paddingLeft?: string; paddingRight?: string; paddingTop?: string; page?: string; pageBreakAfter?: string; pageBreakBefore?: string; pageBreakInside?: string; paintOrder?: string; readonly parentRule?: CSSRule; perspective?: string; perspectiveOrigin?: string; placeContent?: string; placeItems?: string; placeSelf?: string; pointerEvents?: string; position?: string; printColorAdjust?: string; quotes?: string; r?: string; resize?: string; right?: string; rotate?: string; rowGap?: string; rubyPosition?: string; rx?: string; ry?: string; scale?: string; scrollBehavior?: string; scrollMargin?: string; scrollMarginBlock?: string; scrollMarginBlockEnd?: string; scrollMarginBlockStart?: string; scrollMarginBottom?: string; scrollMarginInline?: string; scrollMarginInlineEnd?: string; scrollMarginInlineStart?: string; scrollMarginLeft?: string; scrollMarginRight?: string; scrollMarginTop?: string; scrollPadding?: string; scrollPaddingBlock?: string; scrollPaddingBlockEnd?: string; scrollPaddingBlockStart?: string; scrollPaddingBottom?: string; scrollPaddingInline?: string; scrollPaddingInlineEnd?: string; scrollPaddingInlineStart?: string; scrollPaddingLeft?: string; scrollPaddingRight?: string; scrollPaddingTop?: string; scrollSnapAlign?: string; scrollSnapStop?: string; scrollSnapType?: string; scrollbarColor?: string; scrollbarGutter?: string; scrollbarWidth?: string; shapeImageThreshold?: string; shapeMargin?: string; shapeOutside?: string; shapeRendering?: string; stopColor?: string; stopOpacity?: string; stroke?: string; strokeDasharray?: string; strokeDashoffset?: string; strokeLinecap?: string; strokeLinejoin?: string; strokeMiterlimit?: string; strokeOpacity?: string; strokeWidth?: string; tabSize?: string; tableLayout?: string; textAlign?: string; textAlignLast?: string; textAnchor?: string; textCombineUpright?: string; textDecoration?: string; textDecorationColor?: string; textDecorationLine?: string; textDecorationSkipInk?: string; textDecorationStyle?: string; textDecorationThickness?: string; textEmphasis?: string; textEmphasisColor?: string; textEmphasisPosition?: string; textEmphasisStyle?: string; textIndent?: string; textOrientation?: string; textOverflow?: string; textRendering?: string; textShadow?: string; textTransform?: string; textUnderlineOffset?: string; textUnderlinePosition?: string; textWrap?: string; textWrapMode?: string; textWrapStyle?: string; top?: string; touchAction?: string; transform?: string; transformBox?: string; transformOrigin?: string; transformStyle?: string; transition?: string; transitionBehavior?: string; transitionDelay?: string; transitionDuration?: string; transitionProperty?: string; transitionTimingFunction?: string; translate?: string; unicodeBidi?: string; userSelect?: string; vectorEffect?: string; verticalAlign?: string; visibility?: string; webkitAlignContent?: string; webkitAlignItems?: string; webkitAlignSelf?: string; webkitAnimation?: string; webkitAnimationDelay?: string; webkitAnimationDirection?: string; webkitAnimationDuration?: string; webkitAnimationFillMode?: string; webkitAnimationIterationCount?: string; webkitAnimationName?: string; webkitAnimationPlayState?: string; webkitAnimationTimingFunction?: string; webkitAppearance?: string; webkitBackfaceVisibility?: string; webkitBackgroundClip?: string; webkitBackgroundOrigin?: string; webkitBackgroundSize?: string; webkitBorderBottomLeftRadius?: string; webkitBorderBottomRightRadius?: string; webkitBorderRadius?: string; webkitBorderTopLeftRadius?: string; webkitBorderTopRightRadius?: string; webkitBoxAlign?: string; webkitBoxFlex?: string; webkitBoxOrdinalGroup?: string; webkitBoxOrient?: string; webkitBoxPack?: string; webkitBoxShadow?: string; webkitBoxSizing?: string; webkitFilter?: string; webkitFlex?: string; webkitFlexBasis?: string; webkitFlexDirection?: string; webkitFlexFlow?: string; webkitFlexGrow?: string; webkitFlexShrink?: string; webkitFlexWrap?: string; webkitJustifyContent?: string; webkitLineClamp?: string; webkitMask?: string; webkitMaskBoxImage?: string; webkitMaskBoxImageOutset?: string; webkitMaskBoxImageRepeat?: string; webkitMaskBoxImageSlice?: string; webkitMaskBoxImageSource?: string; webkitMaskBoxImageWidth?: string; webkitMaskClip?: string; webkitMaskComposite?: string; webkitMaskImage?: string; webkitMaskOrigin?: string; webkitMaskPosition?: string; webkitMaskRepeat?: string; webkitMaskSize?: string; webkitOrder?: string; webkitPerspective?: string; webkitPerspectiveOrigin?: string; webkitTextFillColor?: string; webkitTextSizeAdjust?: string; webkitTextStroke?: string; webkitTextStrokeColor?: string; webkitTextStrokeWidth?: string; webkitTransform?: string; webkitTransformOrigin?: string; webkitTransformStyle?: string; webkitTransition?: string; webkitTransitionDelay?: string; webkitTransitionDuration?: string; webkitTransitionProperty?: string; webkitTransitionTimingFunction?: string; webkitUserSelect?: string; whiteSpace?: string; whiteSpaceCollapse?: string; widows?: string; width?: string; willChange?: string; wordBreak?: string; wordSpacing?: string; wordWrap?: string; writingMode?: string; x?: string; y?: string; zIndex?: string; zoom?: string; getPropertyPriority?: (property: string) => string; getPropertyValue?: (property: string) => string; item?: (index: number) => string; removeProperty?: (property: string) => string; setProperty?: (property: string, value: string, priority?: string) => void; }",
                    "references": {
                        "Partial": {
                            "location": "global",
                            "id": "global::Partial"
                        },
                        "CSSStyleDeclaration": {
                            "location": "global",
                            "id": "global::CSSStyleDeclaration"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false
            }
        };
    }
    static get methods() {
        return {
            "openModal": {
                "complexType": {
                    "signature": "() => Promise<void>",
                    "parameters": [],
                    "references": {
                        "Promise": {
                            "location": "global",
                            "id": "global::Promise"
                        }
                    },
                    "return": "Promise<void>"
                },
                "docs": {
                    "text": "",
                    "tags": []
                }
            },
            "closeModal": {
                "complexType": {
                    "signature": "() => Promise<void>",
                    "parameters": [],
                    "references": {
                        "Promise": {
                            "location": "global",
                            "id": "global::Promise"
                        }
                    },
                    "return": "Promise<void>"
                },
                "docs": {
                    "text": "",
                    "tags": []
                }
            }
        };
    }
}
//# sourceMappingURL=ir-privacy-policy.js.map
