// Define our header component as a custom element
class HeaderComponent extends HTMLElement {
    constructor() {
        super();
        // Attach an open shadow root
        this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        // Our navigation links array
        const links = [
            {
                href: "index.html", name: "Housekeeping", current: false, subroutes: [
                    { href: "tasks.html", name: "Housekeeping tasks", current: false, subroutes: null },
                ]
            },
            { href: "secure-tasks.html", name: "Secure HK tasks", current: false, subroutes: null },
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

        // Render the component's HTML template
        this.shadowRoot.innerHTML = `
        <style>
          /* You can include additional scoped styles if needed.
             Note: Preline UI and Tailwind CSS should be loaded globally in your page. */
          :host {
            display: block;
          }
          /* Ensure the sidebar takes full height on larger screens */
          .sidebar {
            height: 100vh;
            overflow-y: auto;
            transition: transform 0.3s ease;
          }
        </style>
  
        <!-- Main header -->
        <header class="bg-white border-b border-gray-200">
          <div class="flex items-center justify-between p-4">
            <!-- Logo/Title -->
            <div class="text-xl font-bold">My Website</div>
            <!-- Burger button: visible on mobile (and PC if you want to toggle sidebar) -->
            <button id="burger-btn" class="inline-flex md:hidden p-2 rounded focus:outline-none focus:ring"
              aria-label="Toggle sidebar">
              <!-- Simple burger icon -->
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
          </div>
          <!-- Sidebar for navigation -->
          <div class="flex">
            <aside id="sidebar" class="sidebar bg-gray-50 border-r border-gray-200 p-4 hidden md:block">
              <nav>
                <ul class="space-y-2">
                  ${links.map(link => {
            // If there are subroutes, render as a mega menu.
            if (link.subroutes && Array.isArray(link.subroutes)) {
                return `
                        <li class="relative group">
                          <a href="${link.href}" class="block p-2 font-semibold hover:bg-gray-200 rounded">
                            ${link.name}
                          </a>
                          <!-- Mega menu container; using Preline UI dropdown conventions -->
                          <div class="absolute left-full top-0 mt-0 w-56 bg-white border border-gray-200 rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity z-10">
                            <!-- Default home link from the parent -->
                            <a href="${link.href}" class="block p-3 border-b border-gray-100 hover:bg-gray-100 font-bold">
                              Home
                            </a>
                            <!-- Render each subroute -->
                            ${link.subroutes.map(sub => `
                              <a href="${sub.href}" class="block p-3 hover:bg-gray-100">
                                ${sub.name}
                              </a>
                            `).join('')}
                          </div>
                        </li>
                      `;
            } else {
                // Simple link (no subroutes)
                return `
                        <li>
                          <a href="${link.href}" class="block p-2 hover:bg-gray-200 rounded">
                            ${link.name}
                          </a>
                        </li>
                      `;
            }
        }).join('')}
                </ul>
              </nav>
            </aside>
            <!-- Content placeholder: on mobile, you might want to slide the sidebar over the content -->
            <div id="content" class="flex-1 p-4">
              <slot></slot>
            </div>
          </div>
        </header>
      `;

        // Toggle sidebar on mobile via the burger button
        const burgerBtn = this.shadowRoot.getElementById('burger-btn');
        const sidebar = this.shadowRoot.getElementById('sidebar');
        burgerBtn.addEventListener('click', () => {
            sidebar.classList.toggle('hidden');
        });

        // For larger screens (PC) we add an additional burger button
        // that toggles the sidebar (if desired). You can duplicate the logic,
        // or customize based on your responsive design requirements.
        // For example, if you want a burger button on PC, you might add:
        const pcBurgerBtn = document.createElement('button');
        pcBurgerBtn.innerHTML = `
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
            d="M4 6h16M4 12h16M4 18h16"></path>
        </svg>`;
        pcBurgerBtn.className = "hidden md:inline-flex p-2 rounded focus:outline-none focus:ring ml-4";
        pcBurgerBtn.setAttribute("aria-label", "Toggle sidebar");
        // Append PC burger button to header title container for example:
        const headerTitle = this.shadowRoot.querySelector("div.text-xl");
        headerTitle.parentNode.appendChild(pcBurgerBtn);
        pcBurgerBtn.addEventListener('click', () => {
            sidebar.classList.toggle('hidden');
        });
    }
}

// Define the custom element so you can use <header-component> in your HTML.
customElements.define('header-component', HeaderComponent);