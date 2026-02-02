import { Engine } from './core/engine';

// Initialize the digital pet when the page loads
window.addEventListener('load', () => {
  try {
    // Create the digital pet engine
    const engine = new Engine('digital-pet-container');
    
    console.log('Digital Pet initialized successfully!');
    
    // Expose engine globally for debugging purposes
    (window as any).digitalPetEngine = engine;
  } catch (error) {
    console.error('Failed to initialize Digital Pet:', error);
  }
});

// Handle window unload to clean up resources
window.addEventListener('beforeunload', () => {
  const engine = (window as any).digitalPetEngine;
  if (engine && typeof engine.destroy === 'function') {
    engine.destroy();
  }
});