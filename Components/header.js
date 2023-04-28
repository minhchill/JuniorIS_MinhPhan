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
          <title>Chill's Sandbox</title>
          <link rel="stylesheet" href="Stylesheets/mainmenu.css">
        </head>  
        <header>
          <nav>
            <div class="logo">
              <a href="mainmenu.html"><img src="Images/SandboxLogo.png"
            </div>
          </nav> 
          <nav class="navigation">
              <a href="mainmenu.html" class="active">Home</a>
              <a href="clothsimulation_noninteractive.html">Simulation 1</a>
              <a href="clothsimulation.html">Simulation 2</a>
              <a href="https://github.com/minhchill/MuseumOfBanhMi.git">Source Code</a>
          </nav>
        </header>
      `;
    }
  }
  
  customElements.define('header-component', Header);

  // <h2 class="logo">Chill Sandbox</h2>