function calculateTotalPersons(booking) {
    const sumOfOccupancy = ({ adult_nbr, children_nbr, infant_nbr }) => {
        return (adult_nbr ?? 0) + (children_nbr ?? 0) + (infant_nbr ?? 0);
    };
    return booking.rooms.reduce((prev, cur) => {
        return sumOfOccupancy(cur.occupancy) + prev;
    }, 0);
}
function getBookedAt(booking) {
    const bookedOn = booking.booked_on;
    const date = bookedOn?.date ? new Date(`${bookedOn.date}T${String(bookedOn.hour ?? 0).padStart(2, '0')}:${String(bookedOn.minute ?? 0).padStart(2, '0')}:00`) : null;
    return date && !Number.isNaN(date.getTime()) ? date.getTime() : 0;
}
function getGuestTotal(booking) {
    return Number(booking.guest_financial?.gross_total ?? 0);
}
function calculateUnvoicedGuestAmount(invoiceInfo) {
    return invoiceInfo?.invoiceable_items.filter(item => item.is_invoiceable).reduce((sum, item) => sum + item.amount, 0) ?? 0;
}
export function mapBookingToUninvoicedRow(booking) {
    const totalGuestAmount = getGuestTotal(booking);
    return {
        booking_nbr: booking.booking_nbr,
        bookedAt: getBookedAt(booking),
        currencySymbol: booking.currency?.symbol ?? '$',
        totalGuestAmount,
        uninvoicedGuestAmount: calculateUnvoicedGuestAmount(booking.invoice_info),
        totalGuests: calculateTotalPersons(booking),
        raw: booking,
    };
}
