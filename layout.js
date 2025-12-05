/**
 * Configuration
 */
const links = [
    {
        href: "index.html", name: "Housekeeping", current: false, subroutes: [
            { href: "tasks.html", name: "Housekeeping tasks", current: false, subroutes: null },
        ]
    },
    { href: "secure-tasks.html", name: "Secure Screens", current: false, subroutes: null },
    { href: "front-desk.html", name: "Front desk", current: false, subroutes: null },
    { href: "property-payment.html", name: "Payment Option", current: false, subroutes: null },
    { href: "booking-details.html", name: "Booking details", current: false, subroutes: null },
    { href: "booking-listing.html", name: "Booking listing", current: false, subroutes: null },
    { href: "channel.html", name: "Channel", current: false, subroutes: null },
    {
        href: "be-demo.html", name: "BE", current: false, subroutes: [
            { href: "be-casa-mespilea.html", name: "Casa Mespilea", current: false, subroutes: null },
            { href: "be-napa.html", name: "Napa City Apartments", current: false, subroutes: null },
            { href: "be-regency-palace.html", name: "Regency Palace Hotel", current: false, subroutes: null },
            { href: "be-theo.html", name: "Theo Sunset Bay Hotel", current: false, subroutes: null },
            { href: "be-daralma.html", name: "Dar Alma", current: false, subroutes: null },
            { href: "be-demo-injected.html", name: "Demo injected", current: false, subroutes: null },
        ]
    },
    { href: "booking-widget.html", name: "BE Widget", current: false, subroutes: null },
];

/**
 * 1. Logic to determine current page
 */
function isCurrentPage(href) {
    const path = window.location.pathname;
    const page = path.split("/").pop(); // Get 'index.html' from '/folder/index.html'

    // Handle root path or exact match
    return page === href || (page === '' && href === 'index.html');
}

/**
 * 2. Function to generate HTML recursively
 */
function generateMenuHTML(items) {
    let html = '';

    items.forEach(link => {
        const isActive = isCurrentPage(link.href);
        const checkedAttr = isActive ? 'checked' : '';
        const variant = isActive ? 'brand' : 'plain'
        if (link.subroutes && link.subroutes.length > 0) {
            // It has children: Use wa-details
            // We check if a child is active to keep the parent details open logically (optional)
            // But per your request, we default 'open' to true.

            const childrenHtml = generateMenuHTML(link.subroutes);

            html += `
                <wa-details appearance="plain" open summary="${link.name}">
                    <div style="padding-left: 1rem;">
                        <wa-button style="display:block;text-align:left" size="small" appearance="plain" variant="${variant}" href="${link.href}" ${checkedAttr}>
                            ${link.name} (Overview)
                        </wa-button>
                        ${childrenHtml}
                    </div>
                </wa-details>
            `;
        } else {
            // It's a standard link: Use wa-menu-item
            html += `
                <wa-button style="display:block;text-align:left"  size="small" appearance="plain" variant="${variant}" href="${link.href}" ${checkedAttr}>
                    ${link.name}
                </wa-button>
            `;
        }
    });

    return html;
}

/**
 * 3. Initialize the shared layout (header + sidebar)
 */
document.addEventListener('DOMContentLoaded', () => {
    const headerHTML = `
        <header class="igloo-header">
            <wa-button id="menu-toggle" data-drawer="open site-sidebar" appearance="plain" variant="neutral" circle>
                <wa-icon name="bars" label="Open Menu"></wa-icon>
            </wa-button>
            <a href="index.html">
                <img id="logo" style="height: 25px;max-width: 100%;object-fit: contain;"
                    alt="Login to igloorooms extranet"
                    src="https://x.igloorooms.com/app-assets/images/logo/logo-dark.png">
            </a>
        </header>
    `;

    if (!document.querySelector('.igloo-header')) {
        document.body.insertAdjacentHTML('afterbegin', headerHTML);
    }

    // Generate the Sidebar Content
    const menuContent = generateMenuHTML(links);

    // Inject or update the Drawer
    const drawerHTML = `
        <wa-drawer without-header id="site-sidebar" label="" placement="start" class="site-drawer">
            <nav class="nav-container">
                ${menuContent}
            </nav>
        </wa-drawer>
    `;

    const existingDrawer = document.getElementById('site-sidebar');
    if (existingDrawer) {
        const navContainer = existingDrawer.querySelector('.nav-container');
        if (navContainer) {
            navContainer.innerHTML = menuContent;
        } else {
            existingDrawer.innerHTML = `<nav class="nav-container">${menuContent}</nav>`;
        }
    } else {
        document.body.insertAdjacentHTML('beforeend', drawerHTML);
    }

    const drawer = document.getElementById('site-sidebar');
    const toggleButton = document.getElementById('menu-toggle');

    const openDrawer = () => {
        if (!drawer) return;
        if (typeof drawer.show === 'function') {
            drawer.show();
        } else {
            drawer.setAttribute('open', '');
        }
    };

    const closeDrawer = () => {
        if (!drawer) return;
        if (typeof drawer.hide === 'function') {
            drawer.hide();
        } else {
            drawer.removeAttribute('open');
        }
    };

    if (toggleButton) {
        toggleButton.addEventListener('click', (event) => {
            event.preventDefault();
            openDrawer();
        });
    }

    if (drawer) {
        drawer.addEventListener('wa-after-hide', () => {
            toggleButton?.focus();
        });
        drawer.addEventListener('sl-after-hide', () => {
            toggleButton?.focus();
        });

        drawer.addEventListener('click', (event) => {
            const target = event.target;
            if (target instanceof Element && target.closest('wa-button')) {
                closeDrawer();
            }
        });
    }
});
