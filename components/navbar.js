function renderNavbar() {
    const navbar = document.createElement("nav");
    navbar.classList.add("navbar", "navbar-expand-lg", "navbar-dark", "bg-dark");
  
    const container = document.createElement("div");
    container.classList.add("container");
  
    const brandLink = document.createElement("a");
    brandLink.classList.add("navbar-brand");
    brandLink.href = "#";
    brandLink.textContent = "Upload.cometbot.info";
  
    const togglerButton = document.createElement("button");
    togglerButton.classList.add("navbar-toggler");
    togglerButton.type = "button";
    togglerButton.dataset.bsToggle = "collapse";
    togglerButton.dataset.bsTarget = "#navbarNav";
    togglerButton.setAttribute("aria-controls", "navbarNav");
    togglerButton.setAttribute("aria-expanded", "false");
    togglerButton.setAttribute("aria-label", "Toggle navigation");
  
    const togglerIcon = document.createElement("span");
    togglerIcon.classList.add("navbar-toggler-icon");
    togglerButton.appendChild(togglerIcon);
  
    const collapseDiv = document.createElement("div");
    collapseDiv.classList.add("collapse", "navbar-collapse");
    collapseDiv.id = "navbarNav";
  
    const navList = document.createElement("ul");
    navList.classList.add("navbar-nav", "ml-auto");
  
    const navItems = [
      { text: "Home", href: "index.html" },
      { text: "Login", href: "login.html" },
      { text: "Register", href: "register.html" },
      { text: "Dashboard", href: "dashboard.html" }
    ];
  
    navItems.forEach(item => {
      const listItem = document.createElement("li");
      listItem.classList.add("nav-item");
  
      const link = document.createElement("a");
      link.classList.add("nav-link");
      link.href = item.href;
      link.textContent = item.text;
  
      listItem.appendChild(link);
      navList.appendChild(listItem);
    });
  
    collapseDiv.appendChild(navList);
    container.append(brandLink, togglerButton, collapseDiv);
    navbar.appendChild(container);
  
    document.body.insertBefore(navbar, document.body.firstChild);
  }
  
  renderNavbar();
  