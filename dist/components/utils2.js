import './moment.js';

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
];

export { extras as e, formatAmount as f, isBlockUnit as i, renderTime as r };

//# sourceMappingURL=utils2.js.map