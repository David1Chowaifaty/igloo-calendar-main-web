class BarRegistry {
    win;
    bars = new Set();
    openBar = null;
    constructor(win) {
        this.win = win;
    }
    get isEmpty() {
        return this.bars.size === 0;
    }
    add(bar) {
        if (this.bars.size === 0) {
            this.win.addEventListener('moveBookingTo', this.onMoveBookingTo);
            this.win.addEventListener('revertBooking', this.onRevertBooking);
        }
        this.bars.add(bar);
    }
    remove(bar) {
        this.release(bar);
        this.bars.delete(bar);
        if (this.bars.size === 0) {
            this.win.removeEventListener('moveBookingTo', this.onMoveBookingTo);
            this.win.removeEventListener('revertBooking', this.onRevertBooking);
        }
    }
    /** Makes `bar` the one bar with an open bubble, closing whichever bar had it before. */
    claim(bar) {
        if (this.openBar === bar) {
            return;
        }
        const previous = this.openBar;
        this.openBar = bar;
        if (previous) {
            previous.closeInfo();
        }
        else {
            this.win.addEventListener('click', this.onClick);
        }
    }
    /** `bar`'s bubble closed; stop watching for outside clicks if it was the open one. */
    release(bar) {
        if (this.openBar !== bar) {
            return;
        }
        this.openBar = null;
        this.win.removeEventListener('click', this.onClick);
    }
    /** Closes whichever bubble is open, if any. */
    closeOpen() {
        this.openBar?.closeInfo();
    }
    onClick = (event) => {
        if (this.openBar && !this.openBar.element.contains(event.target)) {
            this.openBar.closeInfo();
        }
    };
    onMoveBookingTo = (event) => {
        const bookingId = event.detail?.bookingId;
        for (const bar of this.bars) {
            if (bar.bookingId() === bookingId) {
                bar.onMoveBookingTo(event);
            }
        }
    };
    onRevertBooking = (event) => {
        for (const bar of this.bars) {
            if (bar.pool() === event.detail) {
                bar.onRevertBooking();
            }
        }
    };
}
const registries = new WeakMap();
function windowOf(bar) {
    return bar.element.ownerDocument?.defaultView ?? null;
}
export function registerBar(bar) {
    const win = windowOf(bar);
    if (!win) {
        return;
    }
    let registry = registries.get(win);
    if (!registry) {
        registry = new BarRegistry(win);
        registries.set(win, registry);
    }
    registry.add(bar);
}
export function unregisterBar(bar) {
    const win = windowOf(bar);
    const registry = win && registries.get(win);
    if (!registry) {
        return;
    }
    registry.remove(bar);
    if (registry.isEmpty) {
        registries.delete(win);
    }
}
export function claimInfoBubble(bar) {
    const win = windowOf(bar);
    win && registries.get(win)?.claim(bar);
}
export function releaseInfoBubble(bar) {
    const win = windowOf(bar);
    win && registries.get(win)?.release(bar);
}
/** Closes any open bubble in `bar`'s calendar - a drag starting anywhere should not leave one up. */
export function closeOpenInfoBubble(bar) {
    const win = windowOf(bar);
    win && registries.get(win)?.closeOpen();
}
