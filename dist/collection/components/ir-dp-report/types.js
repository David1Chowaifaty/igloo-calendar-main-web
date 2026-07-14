function getExtraValue(booking, key) {
    const found = booking.extras?.find(e => e.key === key);
    const num = Number(found?.value);
    return Number.isFinite(num) ? num : 0;
}
export function mapBookingToDpRow(booking) {
    return {
        booking_nbr: booking.booking_nbr,
        date: booking.booked_on?.date ?? booking.from_date,
        currencySymbol: booking.currency?.symbol ?? '$',
        accommodationGross: getExtraValue(booking, 'DP_INITIAL_ACCOMODATION_GROSS'),
        optimBaseGross: getExtraValue(booking, 'DP_OPTIM_BASE_GROSS'),
        inventoryBaseGross: getExtraValue(booking, 'DP_INVENTORY_BASE_GROSS'),
        profit: booking.profit,
        raw: booking,
    };
}
