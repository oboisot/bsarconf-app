import WebGL from '../three/capabilities/WebGL.js';

if ( !WebGL.isWebGLAvailable() ) {
    const loader = document.getElementById( 'loader' );
    const closeButton = document.getElementById( 'closeButton' );
    const warning = WebGL.getWebGLErrorMessage();
    // Loader update
    loader.style['background-image'] = "None";
    loader.style['text-align'] = "center";
    loader.style['top'] = loader.style['left'] = "0";
    loader.style.width = "100%";
    loader.style.height = "100%";
    loader.textContent = `${warning.textContent}`;
    // Close buttonupdate
    closeButton.style.display = "inline-block";
    closeButton.onclick = () => {
        window.__TAURI__.process.exit(1);
    }
}
