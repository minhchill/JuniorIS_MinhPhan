class Header extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `
        <head>
          <meta charset="UTF-8">
          <meta http-equiv="X-UA-Compatible" content="IE=edge">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Parallax Scrolling Website | Codehal</title>
          <link rel="stylesheet" href="Stylesheets/mainmenu.css">
        </head>  
        <header>
          <h2 class="logo">Chill Sandbox</h2>
          <nav class="navigation">
              <a href="#" class="active">Home</a>
              <a href="clothsimulation.html">Cloth Simulation</a>
              <a href="about.html">About</a>
              <a href="">Source Code</a>
          </nav>
        </header> 
      `;
    }
  }
  
  customElements.define('header-component', Header);