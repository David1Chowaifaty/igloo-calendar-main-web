'use strict';

require('./moment-1780b03a.js');

function isBlockUnit(status_code) {
    return ['003', '002', '004'].includes(status_code);
}
function getCurrencySymbol(currencyCode) {
    const formatter = new Intl.NumberFormat(undefined, {
        style: 'currency',
        currency: currencyCode,
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
    });
    return formatter.format(0).replace(/[0-9]/g, '').trim();
}
function renderTime(time) {
    return time < 10 ? time.toString().padStart(2, '0') : time.toString();
}
function formatAmount(currency, amount) {
    const symbol = getCurrencySymbol(currency);
    return symbol + amount.toFixed(2);
}
const extras = [
    {
        key: 'private_note',
        value: '',
    },
    {
        key: 'is_backend',
        value: true,
    },
];
function manageAnchorSession(data, mode = 'add') {
    const anchor = JSON.parse(sessionStorage.getItem('backend_anchor'));
    if (anchor) {
        if (mode === 'add') {
            return sessionStorage.setItem('backend_anchor', JSON.stringify(Object.assign(Object.assign({}, anchor), data)));
        }
        else if (mode === 'remove') {
            const keys = Object.keys(data);
            keys.forEach(key => {
                if (key in anchor) {
                    delete anchor[key];
                }
            });
            return sessionStorage.setItem('backend_anchor', JSON.stringify(anchor));
        }
    }
    else {
        if (mode === 'add') {
            return sessionStorage.setItem('backend_anchor', JSON.stringify(Object.assign({}, data)));
        }
    }
}
function checkUserAuthState() {
    const anchor = JSON.parse(sessionStorage.getItem('backend_anchor'));
    if (anchor) {
        return anchor.login || null;
    }
    return null;
}

exports.checkUserAuthState = checkUserAuthState;
exports.extras = extras;
exports.formatAmount = formatAmount;
exports.isBlockUnit = isBlockUnit;
exports.manageAnchorSession = manageAnchorSession;
exports.renderTime = renderTime;

//# sourceMappingURL=utils-99cc1968.js.map