'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-64d31e17.js');
const appGlobals = require('./app-globals-3a1e7e63.js');

const defineCustomElements = async (win, options) => {
  if (typeof window === 'undefined') return undefined;
  await appGlobals.globalScripts();
  return index.bootstrapLazy([["my-component.cjs",[[2,"my-component"]]],["ir-alert-dialog.cjs",[[1,"ir-alert-dialog",{"isOpen":[32],"openModal":[64],"closeModal":[64]},[[4,"keydown","handleKeyDown"]]]]],["ir-checkbox.cjs",[[1,"ir-checkbox",{"checked":[4],"label":[1],"checkboxId":[1,"checkbox-id"],"name":[1],"disabled":[4],"currentChecked":[32]},null,{"checked":["handleCheckedChange"]}]]],["ir-drawer.cjs",[[1,"ir-drawer",{"open":[1540],"label":[1],"placement":[1],"contained":[4],"noHeader":[4,"no-header"],"hasFooter":[32],"isVisible":[32],"show":[64],"hide":[64]},null,{"open":["handleOpenChange"]}]]],["ir-dropdown.cjs",[[1,"ir-dropdown",{"itemNames":[16],"rtl":[1540],"search":[516],"dropdownTitle":[513,"dropdown-title"],"isDropdownVisible":[32],"searchQuery":[32],"selectedItemName":[32],"currentHighlightedIndex":[32],"usingKeyboard":[32]},[[0,"keydown","handleKeyDown"],[16,"click","handleClickOutside"],[1,"mousemove","handleMouseMove"]]]]],["ir-google-maps.cjs",[[1,"ir-google-maps"]]],["ir-interceptor.cjs",[[1,"ir-interceptor",{"handledEndpoints":[16],"isShown":[32],"isLoading":[32],"isUnassignedUnit":[32]}]]],["ir-modal.cjs",[[1,"ir-modal",{"isOpen":[32],"openModal":[64],"closeModal":[64]},[[4,"keydown","handleKeyDown"]]]]],["ir-switch.cjs",[[1,"ir-switch",{"checked":[1028],"switchId":[1,"switch-id"],"disabled":[4]}]]],["ir-textarea.cjs",[[1,"ir-textarea",{"inputId":[1,"input-id"],"leftIcon":[516,"left-icon"],"value":[1],"name":[513],"placeholder":[513],"inputid":[513],"class":[513],"required":[516],"disabled":[516],"readonly":[516],"maxlength":[514],"min":[520],"max":[520],"step":[520],"pattern":[513],"autocomplete":[513],"autofocus":[516],"size":[514],"multiple":[516],"error":[4]}]]],["ir-tooltip.cjs",[[1,"ir-tooltip",{"message":[513],"withHtml":[4,"with-html"],"customSlot":[4,"custom-slot"],"open":[32]}]]],["ir-adult-child-counter_23.cjs",[[1,"ir-testcmp",{"token":[1],"propertyId":[2,"property-id"],"baseUrl":[1,"base-url"],"selectedLocale":[32],"property":[32],"currencies":[32],"languages":[32]},null,{"token":["handleTokenChange"]}],[1,"ir-nav",{"currencies":[16],"languages":[16],"logo":[1],"website":[1],"exposed_property":[16],"currentPage":[32]},[[0,"closeDialog","handleCloseDialog"]]],[1,"ir-availibility-header",{"exposedBookingAvailabiltyParams":[32],"errorCause":[32],"isLoading":[32]},[[0,"dateChange","handleDateChange"],[0,"addAdultsAndChildren","handleAdultChildChange"]]],[1,"ir-property-gallery",{"exposed_property":[16],"property_state":[1],"roomType":[16]},[[0,"openGallery","handleOpenGallery"],[0,"carouselImageClicked","handleOpenCarouselGallery"]]],[1,"ir-footer",{"exposedProperty":[16]}],[1,"ir-auth",{"authState":[32],"animationDirection":[32]},[[0,"navigate","handleNavigation"]]],[1,"ir-date-popup",{"dates":[16],"isPopoverOpen":[32]},null,{"dates":["handleDatesChange"]}],[1,"ir-adult-child-counter",{"adultCount":[1538,"adult-count"],"childrenCount":[1538,"children-count"],"minAdultCount":[2,"min-adult-count"],"minChildrenCount":[2,"min-children-count"],"maxAdultCount":[2,"max-adult-count"],"maxChildrenCount":[2,"max-children-count"]}],[1,"ir-booking-code"],[1,"ir-language-picker",{"currencies":[16],"languages":[16],"selectedOptions":[32]}],[1,"ir-facilities",{"properties":[16]}],[1,"ir-sheet",{"open":[4],"hideCloseButton":[4,"hide-close-button"],"isVisible":[32],"openSheet":[64],"closeSheet":[64]},[[16,"keydown","handleKeyDown"]],{"open":["handleOpenChange"]}],[1,"ir-gallery",{"images":[16],"totalImages":[2,"total-images"]}],[2,"ir-signin"],[1,"ir-signup"],[1,"ir-carousel",{"slides":[16]}],[1,"ir-date-range",{"fromDate":[16],"toDate":[16],"minDate":[16],"maxDate":[16],"dateModifiers":[16],"maxSpanDays":[2,"max-span-days"],"showPrice":[4,"show-price"],"locale":[16],"selectedDates":[32],"displayedDaysArr":[32],"hoveredDate":[32],"weekdays":[32]},null,{"locale":["handleLocale"]}],[1,"ir-select",{"label":[1],"value":[8],"data":[16],"select_id":[1],"variant":[1]}],[1,"ir-popover",{"active":[4],"trigger_label":[1],"placement":[1],"stopListeningForOutsideClicks":[4,"stop-listening-for-outside-clicks"],"isVisible":[32],"isMobile":[32],"previousIsMobile":[32],"toggleVisibility":[64]},[[9,"resize","handleResize"]]],[2,"ir-icons",{"name":[1],"svgClassName":[1,"svg-class-name"]}],[1,"ir-dialog",{"isOpen":[32],"openModal":[64],"closeModal":[64]},[[16,"keydown","handleKeyDown"]]],[6,"ir-input",{"inputId":[1,"input-id"],"leftIcon":[516,"left-icon"],"inputStyles":[16],"value":[1],"type":[1],"name":[513],"placeholder":[513],"inputid":[513],"class":[513],"required":[516],"disabled":[516],"readonly":[516],"maxlength":[514],"min":[520],"max":[520],"step":[520],"pattern":[513],"autocomplete":[513],"autofocus":[516],"size":[514],"multiple":[516],"error":[4]}],[6,"ir-button",{"size":[1],"disabled":[4],"label":[1],"name":[1],"buttonId":[1,"button-id"],"type":[1],"haveLeftIcon":[4,"have-left-icon"],"variants":[1],"isLoading":[4,"is-loading"],"buttonStyles":[16],"buttonClassName":[1,"button-class-name"]}]]]], options);
};

exports.setNonce = index.setNonce;
exports.defineCustomElements = defineCustomElements;

//# sourceMappingURL=loader.cjs.js.map