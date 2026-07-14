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

var en$1 = {};

var hasRequiredEn;

function requireEn () {
	if (hasRequiredEn) return en$1;
	hasRequiredEn = 1;

	Object.defineProperty(en$1, "__esModule", {
	  value: true
	});
	en$1.default = void 0;
	var _default = {
	  days: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
	  daysShort: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
	  daysMin: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
	  months: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
	  monthsShort: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
	  today: 'Today',
	  clear: 'Clear',
	  dateFormat: 'MM/dd/yyyy',
	  timeFormat: 'hh:mm aa',
	  firstDay: 0
	};
	en$1.default = _default;
	return en$1;
}

var enExports = requireEn();
var localeEn = /*@__PURE__*/_commonjsHelpers.getDefaultExportFromCjs(enExports);

var en = /*#__PURE__*/_mergeNamespaces({
  __proto__: null,
  default: localeEn
}, [enExports]);

exports.en = en;
exports.localeEn = localeEn;
