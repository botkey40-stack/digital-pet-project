import * as PIXI from 'pixi.js';
import { Pet } from './pet';
import { MetricsCollector } from '../metrics/collector';

export class Engine {
  private app: PIXI.Application;
  private pet: Pet;
  private metricsCollector: MetricsCollector;
  private ticker: PIXI.Ticker;

  constructor(containerId: string) {
    // Initialize PixiJS application
    this.app = new PIXI.Application({
      width: 800,
      height: 600,
      backgroundColor: 0x1090bb,
    });

    // Add canvas to DOM
    const container = document.getElementById(containerId);
    if (container) {
      container.appendChild(this.app.view as unknown as HTMLElement);
    }

    // Initialize components
    this.metricsCollector = new MetricsCollector();
    this.pet = new Pet();

    // Set up game loop
    this.ticker = PIXI.Ticker.shared;
    this.ticker.add(this.update.bind(this));

    // Start the engine
    this.start();
  }

  private update(delta: number): void {
    // Collect system metrics
    const metrics = this.metricsCollector.getMetrics();
    
    // Update pet behavior based on metrics
    this.pet.update(metrics, delta);
    
    // Update pet animations
    this.pet.animate(delta);
  }

  private async start(): Promise<void> {
    // Initialize the pet
    await this.pet.init(this.app);
    
    // Add pet to the scene
    this.app.stage.addChild(this.pet.sprite);
  }

  public destroy(): void {
    this.ticker.remove(this.update, this);
    this.app.destroy(true);
  }
}