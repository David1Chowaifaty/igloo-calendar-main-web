'use strict';

var _commonjsHelpers = require('./_commonjsHelpers-BJu3ubxk.js');

function _mergeNamespaces(n, m) {
  m.forEach(function (e) {
    e && typeof e !== 'string' && !Array.isArray(e) && Object.keys(e).forEach(function (k) {
      if (k !== 'default' && !(k in n)) {
        var d = Object.getOwnPropertyDescriptor(e, k);
        Object.defineProperty(n, k, d.get ? d : {
          enumerable: true,
          get: function () { return e[k]; }
        });
      }
    });
  });
  return Object.freeze(n);
}

var ar$2 = {};

var hasRequiredAr;

function requireAr () {
	if (hasRequiredAr) return ar$2;
	hasRequiredAr = 1;

	Object.defineProperty(ar$2, "__esModule", {
	  value: true
	});
	ar$2.default = void 0;
	var _default = {
	  days: ['الأحد', 'الأثنين', 'الثلاثاء', 'الأربعاء', 'الخميس', 'الجمعه', 'السبت'],
	  daysShort: ['الأحد', 'الأثنين', 'الثلاثاء', 'الأربعاء', 'الخميس', 'الجمعه', 'السبت'],
	  daysMin: ['الأحد', 'الأثنين', 'الثلاثاء', 'الأربعاء', 'الخميس', 'الجمعه', 'السبت'],
	  months: ['يناير', 'فبراير', 'مارس', 'أبريل', 'مايو', 'يونيو', 'يوليو', 'أغسطس', 'سبتمبر', 'اكتوبر', 'نوفمبر', 'ديسمبر'],
	  monthsShort: ['يناير', 'فبراير', 'مارس', 'أبريل', 'مايو', 'يونيو', 'يوليو', 'أغسطس', 'سبتمبر', 'اكتوبر', 'نوفمبر', 'ديسمبر'],
	  today: 'اليوم',
	  clear: 'حذف',
	  dateFormat: 'dd/MM/yyyy',
	  timeFormat: 'hh:mm aa',
	  firstDay: 0
	};
	ar$2.default = _default;
	return ar$2;
}

var arExports = requireAr();
var ar = /*@__PURE__*/_commonjsHelpers.getDefaultExportFromCjs(arExports);

var ar$1 = /*#__PURE__*/_mergeNamespaces({
  __proto__: null,
  default: ar
}, [arExports]);

exports.ar = ar$1;
