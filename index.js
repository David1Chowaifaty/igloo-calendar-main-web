function getToken() {
    return "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE3MjI4Mzc4NzUsIkNMQUlNLTAxIjoicktLMi9DY1dQQnM9IiwiQ0xBSU0tMDIiOiI5UStMQm93VTl6az0iLCJDTEFJTS0wMyI6Ilp3Tys5azJoTzUwPSIsIkNMQUlNLTA0IjoiQUVxVnRCMm1kWTg9IiwiQ0xBSU0tMDUiOiJFQTEzejA3ejBUcWRkM2gwNElyYThKREVlek9SWU5LeiJ9.YDBi-dmt_kKoG9_ExR8mnLUy7_biGejdEHe2SASLbDY"
}
function getId() {
    return "42"
}

const links = [
    { href: "index.html", name: "Housekeeping first page", current: false },
    { href: "tasks.html", name: "Housekeeping tasks", current: false },
    { href: "front-desk.html", name: "Front desk", current: false },
    { href: "booking-details.html", name: "Booking details", current: false },
    { href: "booking-listing.html", name: "Booking listing", current: false },
    { href: "channel.html", name: "Channel", current: false },
    { href: "be-demo.html", name: "BE Demo", current: false },
    { href: "be-theo.html", name: "BE Theo", current: false },
    { href: "be-regency-palace.html", name: "BE Regency Palace", current: false },
    { href: "booking-widget.html", name: "BE Widget", current: false },
    { href: "be-napa.html", name: "Napa City", current: false },
    { href: "be-demo-injected.html", name: "Demo injected", current: false }
];

function renderNavbar(active_link) {
    const ul = document.createElement('ul');
    ul.classList.add('navbar-nav', 'mr-auto');

    links.forEach(link => {
        const li = document.createElement('li');
        li.classList.add('nav-item');
        if (link.href === active_link) {
            li.classList.add('active');
        }

        const a = document.createElement('a');
        a.classList.add('nav-link');
        a.href = link.href;
        a.textContent = link.name;
        if (link.current) {
            const span = document.createElement('span');
            span.classList.add('sr-only');
            span.textContent = "(current)";
            a.appendChild(span);
        }

        li.appendChild(a);
        ul.appendChild(li);
    });

    document.getElementById('navbarSupportedContent').appendChild(ul);
}