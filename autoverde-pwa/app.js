// Renderizado inicial
const app = document.getElementById('app');

function renderHome() {
  app.innerHTML = `
    <header class="app-header">
      <h1>AutoVerde</h1>
      <button id="install-btn" hidden>Instalar</button>
    </header>
    
    <main class="main-content">
      <div class="search-box">
        <input type="text" placeholder="¿A dónde vas?" id="address-input">
      </div>
      
      <div class="map-container" id="map">
        <!-- Mapa se cargará aquí -->
      </div>
    </main>
  `;

  // Configura el botón de instalación
  let deferredPrompt;
  window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault();
    deferredPrompt = e;
    document.getElementById('install-btn').hidden = false;
  });

  document.getElementById('install-btn').onclick = () => {
    deferredPrompt.prompt();
  };
}

// Inicializa la app
renderHome();

// Geolocalización básica
if ('geolocation' in navigator) {
  navigator.geolocation.getCurrentPosition(
    (position) => {
      console.log("Tu ubicación:", position.coords);
    },
    (error) => {
      console.error("Error de geolocalización:", error);
    }
  );
}