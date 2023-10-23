import WebGL from '../three/capabilities/WebGL.js';

if ( !WebGL.isWebGLAvailable() ) {
    const warning = WebGL.getWebGLErrorMessage();
    const loader = document.getElementById( 'loader' );
    loader.style['background-image'] = "None";
    loader.style['text-align'] = "center";
    loader.style['top'] = loader.style['left'] = "0";
    loader.style.width = "100%";
    loader.style.height = "100%";
    loader.textContent = `${warning.textContent}`;
    // loader.appendChild( warning );
    const closeButton = document.getElementById( 'closeButton' );
    closeButton.style.display = "inline-block";
    closeButton.onclick = () => {
        window.__TAURI__.process.exit(1);
    }
}
