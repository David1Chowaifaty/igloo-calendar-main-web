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

var fr$2 = {};

var hasRequiredFr;

function requireFr () {
	if (hasRequiredFr) return fr$2;
	hasRequiredFr = 1;

	Object.defineProperty(fr$2, "__esModule", {
	  value: true
	});
	fr$2.default = void 0;
	var _default = {
	  days: ['Dimanche', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi'],
	  daysShort: ['Dim', 'Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam'],
	  daysMin: ['Di', 'Lu', 'Ma', 'Me', 'Je', 'Ve', 'Sa'],
	  months: ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'],
	  monthsShort: ['Jan', 'Fév', 'Mars', 'Avr', 'Mai', 'Juin', 'Juil', 'Août', 'Sep', 'Oct', 'Nov', 'Dec'],
	  today: "Aujourd'hui",
	  clear: 'Effacer',
	  dateFormat: 'dd/MM/yyyy',
	  timeFormat: 'HH:mm',
	  firstDay: 1
	};
	fr$2.default = _default;
	return fr$2;
}

var frExports = requireFr();
var fr = /*@__PURE__*/_commonjsHelpers.getDefaultExportFromCjs(frExports);

var fr$1 = /*#__PURE__*/_mergeNamespaces({
  __proto__: null,
  default: fr
}, [frExports]);

exports.fr = fr$1;
