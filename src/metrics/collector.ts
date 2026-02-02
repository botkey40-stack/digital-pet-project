// Mock system metrics for MVP
// In a real implementation, this would interface with actual system metrics

export interface CPUMetrics {
  usage: number; // Percentage (0-100)
  temp: number;  // Temperature in Celsius
  cores: number;
}

export interface MemoryMetrics {
  total: number; // Total in MB
  available: number; // Available in MB
  percent: number; // Percentage used (0-100)
}

export interface NetworkMetrics {
  rx: number; // Received KB/s
  tx: number; // Transmitted KB/s
}

export interface SystemMetrics {
  cpu: CPUMetrics;
  memory: MemoryMetrics;
  network: NetworkMetrics;
  timestamp: number;
}

export class MetricsCollector {
  private lastMetrics: SystemMetrics;

  constructor() {
    // Initialize with mock values
    this.lastMetrics = this.generateMockMetrics();
  }

  public getMetrics(): SystemMetrics {
    // For MVP, generate mock metrics that change over time
    this.lastMetrics = this.generateMockMetrics();
    return this.lastMetrics;
  }

  private generateMockMetrics(): SystemMetrics {
    // Generate realistic-looking mock metrics
    const timeFactor = Date.now() * 0.0001;
    
    return {
      cpu: {
        usage: Math.abs(Math.sin(timeFactor) * 50 + 30), // 30-80%
        temp: Math.abs(Math.cos(timeFactor * 0.7) * 15 + 65), // 65-80°C
        cores: 4,
      },
      memory: {
        total: 8192, // 8GB
        available: 8192 - (Math.abs(Math.sin(timeFactor * 1.3) * 3000 + 2000)), // 2-5GB used
        percent: Math.abs(Math.sin(timeFactor * 1.3) * 50 + 30), // 30-80%
      },
      network: {
        rx: Math.abs(Math.sin(timeFactor * 2.1) * 500 + 100), // 100-600 KB/s
        tx: Math.abs(Math.cos(timeFactor * 1.8) * 300 + 50), // 50-350 KB/s
      },
      timestamp: Date.now(),
    };
  }

  public async initialize(): Promise<void> {
    // In a real implementation, this would initialize connections to system metrics
    console.log('Metrics collector initialized');
  }
}