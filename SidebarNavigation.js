class SidebarNavigation extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.isOpen = false;
    this.isMobile = window.innerWidth < 768;

    // Bind methods to this instance
    this.toggleSidebar = this.toggleSidebar.bind(this);
    this.closeSidebar = this.closeSidebar.bind(this);
    this.handleKeydown = this.handleKeydown.bind(this);
    this.handleResize = this.handleResize.bind(this);
    this.toggleSubmenu = this.toggleSubmenu.bind(this);
    this.handleSubmenuKeydown = this.handleSubmenuKeydown.bind(this);
    this.attributeChangedCallback = this.attributeChangedCallback.bind(this);
  }

  static get observedAttributes() {
    return ['data-links'];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (name === 'data-links' && oldValue !== newValue) {
      this.render();
    }
  }

  connectedCallback() {
    this.render();

    // Get elements
    this.sidebarElement = this.shadowRoot.querySelector('.sidebar');
    this.toggleButton = this.shadowRoot.querySelector('.toggle-button');
    this.closeButton = this.shadowRoot.querySelector('.close-button');
    this.backdrop = this.shadowRoot.querySelector('.backdrop');
    this.mainContent = this.shadowRoot.querySelector('.main-content');

    // Add event listeners
    this.toggleButton.addEventListener('click', this.toggleSidebar);
    this.closeButton.addEventListener('click', this.closeSidebar);
    document.addEventListener('keydown', this.handleKeydown);
    this.backdrop.addEventListener('click', this.closeSidebar);
    window.addEventListener('resize', this.handleResize);

    // Initialize submenu toggles
    const submenuToggles = this.shadowRoot.querySelectorAll('.has-submenu');
    submenuToggles.forEach(toggle => {
      toggle.addEventListener('click', this.toggleSubmenu);
      toggle.addEventListener('keydown', this.handleSubmenuKeydown);
    });

    // Set initial state based on screen size
    this.handleResize();

    // Mark current page in navigation
    this.highlightCurrentPage();
  }

  disconnectedCallback() {
    this.toggleButton.removeEventListener('click', this.toggleSidebar);
    this.closeButton.removeEventListener('click', this.closeSidebar);
    document.removeEventListener('keydown', this.handleKeydown);
    this.backdrop.removeEventListener('click', this.closeSidebar);
    window.removeEventListener('resize', this.handleResize);

    const submenuToggles = this.shadowRoot.querySelectorAll('.has-submenu');
    submenuToggles.forEach(toggle => {
      toggle.removeEventListener('click', this.toggleSubmenu);
      toggle.removeEventListener('keydown', this.handleSubmenuKeydown);
    });
  }

  handleResize() {
    const wasMobile = this.isMobile;
    this.isMobile = window.innerWidth < 768;

    if (wasMobile !== this.isMobile) {
      // If device type changed, adjust the sidebar state
      if (this.isMobile) {
        // Switch to mobile: close sidebar and show burger
        this.isOpen = false;
        this.updateSidebarState();
      } else {
        // Switch to desktop: open sidebar
        this.isOpen = true;
        this.updateSidebarState();
      }
    }
  }

  handleKeydown(event) {
    // Close sidebar with Escape key when it's open
    if (event.key === 'Escape' && this.isOpen && this.isMobile) {
      this.closeSidebar();
    }

    // Tab trap inside the sidebar when open on mobile
    if (event.key === 'Tab' && this.isOpen && this.isMobile) {
      const focusableElements = this.shadowRoot.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
      const firstElement = focusableElements[0];
      const lastElement = focusableElements[focusableElements.length - 1];

      if (event.shiftKey && document.activeElement === firstElement) {
        lastElement.focus();
        event.preventDefault();
      } else if (!event.shiftKey && document.activeElement === lastElement) {
        firstElement.focus();
        event.preventDefault();
      }
    }
  }

  handleSubmenuKeydown(event) {
    const submenuButton = event.currentTarget;

    // Toggle submenu with Enter or Space
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      this.toggleSubmenu(event);
    }

    // Navigate with arrow keys
    if (event.key === 'ArrowDown') {
      event.preventDefault();
      const submenu = submenuButton.nextElementSibling;
      if (submenu && submenu.classList.contains('submenu')) {
        // If submenu is not open, open it
        if (!submenu.classList.contains('open')) {
          this.toggleSubmenu({ currentTarget: submenuButton });
        }
        // Focus on the first link in submenu
        const firstLink = submenu.querySelector('a');
        if (firstLink) firstLink.focus();
      } else {
        // Focus on the next nav item
        const nextItem = submenuButton.closest('li').nextElementSibling;
        if (nextItem) {
          const nextButton = nextItem.querySelector('button') || nextItem.querySelector('a');
          if (nextButton) nextButton.focus();
        }
      }
    }

    if (event.key === 'ArrowUp') {
      event.preventDefault();
      // Focus on the previous nav item
      const prevItem = submenuButton.closest('li').previousElementSibling;
      if (prevItem) {
        const prevButton = prevItem.querySelector('button') || prevItem.querySelector('a');
        if (prevButton) prevButton.focus();
      }
    }
  }

  toggleSidebar() {
    this.isOpen = !this.isOpen;
    this.updateSidebarState();

    // Set focus on the close button when opened
    if (this.isOpen && this.isMobile) {
      setTimeout(() => {
        this.closeButton.focus();
      }, 100);
    }
  }

  closeSidebar() {
    if (this.isOpen && this.isMobile) {
      this.isOpen = false;
      this.updateSidebarState();
      this.toggleButton.focus();
    }
  }

  toggleSubmenu(event) {
    const submenuButton = event.currentTarget;
    const submenu = submenuButton.nextElementSibling;
    const isExpanded = submenuButton.getAttribute('aria-expanded') === 'true';

    // Toggle aria-expanded attribute
    submenuButton.setAttribute('aria-expanded', !isExpanded);

    // Toggle submenu visibility
    if (submenu && submenu.classList.contains('submenu')) {
      submenu.classList.toggle('open');
    }

    // Stop propagation to prevent sidebar toggling
    event.stopPropagation();
  }

  updateSidebarState() {
    if (this.isOpen) {
      this.sidebarElement.classList.add('open');
      if (this.isMobile) {
        this.backdrop.classList.add('visible');
        document.body.style.overflow = 'hidden';
        this.toggleButton.style.display = 'none';
        this.closeButton.style.display = 'flex';
      }
      this.toggleButton.setAttribute('aria-expanded', 'true');
    } else {
      this.sidebarElement.classList.remove('open');
      this.backdrop.classList.remove('visible');
      document.body.style.overflow = '';
      this.toggleButton.style.display = 'flex';
      this.closeButton.style.display = 'none';
      this.toggleButton.setAttribute('aria-expanded', 'false');
    }
  }

  highlightCurrentPage() {
    // Get current URL path
    const currentPath = window.location.pathname;
    const currentUrl = currentPath.substring(currentPath.lastIndexOf('/') + 1);

    // Find and mark current links
    const allLinks = this.shadowRoot.querySelectorAll('.sb-nav-link');
    allLinks.forEach(link => {
      const href = link.getAttribute('href');
      // If href matches current URL or ends with current URL
      if (href === currentUrl || href.endsWith('/' + currentUrl)) {
        link.classList.add('active');

        // If link is in submenu, open the parent submenu
        const parentSubmenu = link.closest('.submenu');
        if (parentSubmenu) {
          parentSubmenu.classList.add('open');
          const parentButton = parentSubmenu.previousElementSibling;
          if (parentButton && parentButton.classList.contains('has-submenu')) {
            parentButton.setAttribute('aria-expanded', 'true');
          }
        }
      } else {
        link.classList.remove('active');
      }
    });
  }

  renderNavItem(item) {
    const hasSubmenu = item.subroutes && item.subroutes.length > 0;
    const currentClass = item.current ? 'current' : '';

    if (hasSubmenu) {
      return `
        <li class="sb-nav-item-container">
          <button class="sb-nav-item has-submenu ${currentClass}" aria-expanded="false" aria-haspopup="true"> 
          ${item.name}
            <span class="submenu-icon">
              <svg viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" width="16" height="16">
                <path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clip-rule="evenodd" />
              </svg>
            </span>
          </button>
          <ul class="submenu">
             <a href="${item.href}" class="sb-nav-link" tabindex="-1">Home</a>
            ${item.subroutes.map(subItem => `
              <li>
                <a href="${subItem.href}" class="sb-nav-link ${subItem.current ? 'current' : ''}">${subItem.name}</a>
              </li>
            `).join('')}
          </ul>
        </li>
      `;
    } else {
      return `
        <li class="sb-nav-item-container">
          <a href="${item.href}" class="sb-nav-link ${currentClass}">${item.name}</a>
        </li>
      `;
    }
  }

  render() {
    // Get navigation links from the data-links attribute
    let links;
    try {
      links = JSON.parse(this.getAttribute('data-links') || '[]');
    } catch (e) {
      console.error('Invalid data-links format:', e);
      links = [];
    }

    this.shadowRoot.innerHTML = `
      <style>
        :host {
          --sidebar-width: 250px;
          --sidebar-bg-color: #ffffff;
          --sidebar-text-color: #333333;
          --sidebar-hover-color: #f0f0f0;
          --sidebar-active-color: #e0e0e0;
          --sidebar-current-color: #3b82f6;
          --sidebar-border-color: #e5e5e5;
          --sidebar-icon-color: #666666;
          --sidebar-transition: 0.3s ease;
          --z-index-sidebar: 1000;
          --z-index-backdrop: 999;
          --z-index-button: 1001;
          font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
          display: block;
        }
        
        * {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
        }
        
        .sidebar-container {
          position: relative;
          min-height: 100vh;
          display: flex;
          overflow:auto;
        }
        
        .toggle-button, .close-button {
          z-index: var(--z-index-button);
          padding: 10px;
          background: var(--sidebar-bg-color);
          border: 1px solid var(--sidebar-border-color);
          border-radius: 4px;
          cursor: pointer;
          display: none;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          width: 40px;
          height: 40px;
          transition: all var(--sidebar-transition);
        }
        
        .toggle-button span {
          display: block;
          width: 20px;
          height: 2px;
          margin: 2px 0;
          background-color: var(--sidebar-text-color);
        }
        
        .close-button svg {
          width: 20px;
          height: 20px;
          color: var(--sidebar-text-color);
        }
        
        .sidebar {
          width: var(--sidebar-width);
          background-color: var(--sidebar-bg-color);
          border-right: 1px solid var(--sidebar-border-color);
          transition: transform var(--sidebar-transition);
          z-index: var(--z-index-sidebar);
          overflow-y: auto;
          overflow-x: hidden;
          height: 100vh;
        }
        
        .backdrop {
          position: fixed;
          top: 0;
          left: 0;
          width: 100vw;
          height: 100vh;
          background-color: rgba(0, 0, 0, 0.5);
          z-index: var(--z-index-backdrop);
          opacity: 0;
          visibility: hidden;
          transition: opacity var(--sidebar-transition), visibility var(--sidebar-transition);
        }
        
        .backdrop.visible {
          opacity: 1;
          visibility: visible;
        }
        
        .sidebar-header {
          padding: 20px 15px;
          border-bottom: 1px solid var(--sidebar-border-color);
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        
        .sidebar-title {
          font-size: 1.2rem;
          font-weight: 600;
          color: var(--sidebar-text-color);
        }
        
        .sidebar-content {
          padding: 15px 0;
        }
        
        .nav-list {
          list-style: none;
        }
        
        .sb-nav-item-container {
          margin-bottom: 3px;
        }
        
        .sb-nav-link {
          display: block;
          padding: 10px 15px;
          color: var(--sidebar-text-color);
          text-decoration: none;
          transition: background-color var(--sidebar-transition);
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          border-radius: 4px;
          margin: 0 5px;
        }
        
        .sb-nav-link:hover, .sb-nav-link:focus,.sb-nav-item:hover, .sb-nav-item:focus {
          background-color: var(--sidebar-hover-color);
          outline: none;
        }
        
        .sb-nav-link.active, .sb-nav-link.current,.sb-nav-item.active, .sb-nav-item.current {
          background-color: var(--sidebar-active-color);
          color: var(--sidebar-current-color);
          font-weight: 600;
        }
        
        .sb-nav-item {
          display: flex;
          justify-content: space-between;
          align-items: center;
          width: 100%;
          background: none;
          border: none;
          text-align: left;
          cursor: pointer;
          padding: 0;
          margin: 0;
           padding: 10px 15px;
        }
           
        
        .submenu-icon {
          margin-right: 15px;
          display: flex;
          align-items: center;
          transition: transform var(--sidebar-transition);
        }
        
        .has-submenu[aria-expanded="true"] .submenu-icon {
          transform: rotate(180deg);
        }
        
        .submenu {
          max-height: 0;
          overflow: hidden;
          transition: max-height var(--sidebar-transition);
          list-style: none;
      
          margin-left: 15px;
        }
        
        .submenu.open {
          max-height: 500px; /* Arbitrarily high value to accommodate all items */
        }
        
        .main-content {
          flex: 1;
          transition: margin-left var(--sidebar-transition);
        }
        
        /* Mobile/Tablet styles */
        @media (max-width: 767px) {
          .sidebar-container {
            display: block;
          }
          
          .toggle-button {
            display: flex;
          }
          
          .sidebar {
            position: fixed;
            top: 0;
            left: 0;
            height: 100vh;
            width: 80%;
            max-width: 300px;
            transform: translateX(-100%);
            box-shadow: 4px 0px 10px rgba(0, 0, 0, 0.1);
          }
          
          .sidebar.open {
            transform: translateX(0);
          }
          
          .main-content {
            margin-left: 0 !important;
          }
        }
        
        /* Desktop styles */
        @media (min-width: 768px) {
          .sidebar {
            position: sticky;
            top: 0;
            left: 0;
            height: 100vh;
          }
          
          /* Hide backdrop on desktop */
          .backdrop {
            display: none;
          }
        }
      </style>
      
      <div class="sidebar-container">
        <button class="toggle-button" aria-label="Open navigation" aria-controls="sidebar" aria-expanded="false">
          <span></span>
          <span></span>
          <span></span>
        </button>
        
        <button class="close-button" aria-label="Close navigation" aria-controls="sidebar">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>
        
        <div class="backdrop"></div>
        
        <aside class="sidebar" id="sidebar" role="navigation" aria-label="Main navigation">
          <div class="sidebar-header">
            <div class="sidebar-title">Components</div>
          </div>
          
          <div class="sidebar-content">
            <ul class="nav-list">
              ${links.map(item => this.renderNavItem(item)).join('')}
            </ul>
          </div>
        </aside>
        
        <div class="main-content">
          <slot name="main-content"></slot>
        </div>
      </div>
    `;
  }
}

// Define the custom element
customElements.define('sidebar-navigation', SidebarNavigation);

// Usage example:
// <sidebar-navigation data-links='[{"href":"index.html","name":"Home",...}]'>
//   Your main content here
// </sidebar-navigation>