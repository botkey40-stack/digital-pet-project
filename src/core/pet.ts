import * as PIXI from 'pixi.js';
import { SystemMetrics } from '../metrics/collector';

interface PetState {
  mood: 'happy' | 'sad' | 'excited' | 'sleepy' | 'busy';
  energy: number;
  hunger: number;
  position: { x: number; y: number };
  scale: number;
}

export class Pet {
  public sprite: PIXI.Sprite;
  private state: PetState;
  private textures: Map<string, PIXI.Texture>;
  private currentAnimation: string;

  constructor() {
    this.state = {
      mood: 'happy',
      energy: 100,
      hunger: 0,
      position: { x: 400, y: 300 },
      scale: 1,
    };
    this.textures = new Map();
    this.currentAnimation = 'idle';
    this.sprite = new PIXI.Sprite(); // Placeholder, will be set in init
  }

  public async init(app: PIXI.Application): Promise<void> {
    // Load pet textures (in a real implementation, these would be actual image files)
    // For MVP, we'll create simple colored rectangles as placeholders
    
    // Create a simple circle texture as a placeholder
    const graphics = new PIXI.Graphics();
    graphics.beginFill(0xFF0000); // Red circle for MVP
    graphics.drawCircle(0, 0, 50);
    graphics.endFill();
    
    // Create texture from graphics
    const texture = app.renderer.generateTexture(graphics);
    this.sprite.texture = texture;
    
    // Position the pet
    this.sprite.x = this.state.position.x;
    this.sprite.y = this.state.position.y;
    this.sprite.anchor.set(0.5);
  }

  public update(metrics: SystemMetrics, delta: number): void {
    // Update pet state based on system metrics
    this.adjustMoodBasedOnMetrics(metrics);
    this.updateNeeds(delta);
    this.updatePosition();
  }

  private adjustMoodBasedOnMetrics(metrics: SystemMetrics): void {
    // Adjust pet mood based on system metrics
    if (metrics.cpu.usage > 80) {
      this.state.mood = 'busy'; // Pet gets busy when CPU is high
    } else if (metrics.cpu.temp > 70) {
      this.state.mood = 'sleepy'; // Pet gets sleepy when temp is high
    } else if (metrics.memory.percent > 85) {
      this.state.mood = 'excited'; // Pet gets excited with high memory usage
    } else {
      this.state.mood = 'happy'; // Default happy mood
    }
  }

  private updateNeeds(delta: number): void {
    // Slowly decrease energy and increase hunger over time
    this.state.energy -= delta * 0.01;
    this.state.hunger += delta * 0.005;

    // Keep values within bounds
    this.state.energy = Math.max(0, Math.min(100, this.state.energy));
    this.state.hunger = Math.max(0, Math.min(100, this.state.hunger));
  }

  private updatePosition(): void {
    // Simple position update based on mood
    switch (this.state.mood) {
      case 'happy':
        // Gentle movement
        this.state.position.x += Math.sin(Date.now() * 0.001) * 0.5;
        break;
      case 'excited':
        // More energetic movement
        this.state.position.x += Math.sin(Date.now() * 0.005) * 2;
        break;
      case 'sleepy':
        // Minimal movement
        this.state.position.x += Math.sin(Date.now() * 0.0005) * 0.1;
        break;
      case 'busy':
        // Focused movement
        this.state.position.x += Math.sin(Date.now() * 0.002) * 1;
        break;
    }

    // Update sprite position
    this.sprite.x = this.state.position.x;
    this.sprite.y = this.state.position.y;
  }

  public animate(delta: number): void {
    // Update animation based on mood
    switch (this.state.mood) {
      case 'happy':
        this.sprite.scale.set(this.state.scale);
        this.sprite.alpha = 1;
        break;
      case 'excited':
        // Pulsing animation
        const pulse = Math.sin(Date.now() * 0.01) * 0.1 + 1;
        this.sprite.scale.set(this.state.scale * pulse);
        break;
      case 'sleepy':
        // Slower movements and dimming
        this.sprite.alpha = 0.7;
        break;
      case 'busy':
        // Faster movements
        this.sprite.alpha = 1;
        break;
    }
  }

  public feed(): void {
    // Feed the pet to reduce hunger
    this.state.hunger = Math.max(0, this.state.hunger - 20);
    this.state.mood = 'happy';
  }

  public play(): void {
    // Play with the pet to increase energy
    this.state.energy = Math.min(100, this.state.energy + 15);
    this.state.mood = 'excited';
  }

  public getState(): PetState {
    return { ...this.state };
  }
}