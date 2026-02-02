# Digital Pet Project

A cute and goofy digital pet that runs on Pi400 during livestreams with nostalgic title sequences and system metric reactivity.

## Table of Contents
- [Overview](#overview)
- [Features](#features)
- [Architecture](#architecture)
- [Technology Stack](#technology-stack)
- [Installation](#installation)
- [Configuration](#configuration)
- [Usage](#usage)
- [Development](#development)
- [Roadmap](#roadmap)
- [Contributing](#contributing)
- [License](#license)
- [Support](#support)

## Overview
This project creates a reactive digital pet that responds to system metrics like CPU temperature and usage, featuring nostalgic title sequences inspired by pop culture references like Final Fantasy VIII intros. The digital pet serves as an engaging companion during livestreams, providing entertainment and real-time system status information.

## Features
- **System Metric Reactivity**: Responds to CPU usage, temperature, memory consumption, and network activity
- **Nostalgic Title Sequences**: Features retro-style animations and music reminiscent of classic games
- **Pi400 Optimized**: Specifically designed for the Raspberry Pi 400 hardware
- **Livestream Integration**: Engaging visual elements perfect for stream audiences
- **Customizable Avatars**: Multiple pet types and personalities to choose from
- **Real-time Status Display**: Shows system health and performance metrics in a fun way
- **Modular Architecture**: Easy to extend with new pet types, behaviors, and visual effects

## Architecture
The digital pet project consists of several key components:

### Core Engine
- Hardware abstraction layer for Pi400-specific optimizations
- Real-time metric polling and processing
- Animation and rendering pipeline
- Event management system

### Reactive Systems
- CPU usage indicator integration
- Temperature-based behavior modifiers
- Memory pressure responses
- Network activity visualization
- Battery level monitoring (if applicable)

### Visual Components
- Nostalgic title sequence engine
- Sprite-based character animation
- Dynamic UI elements showing system stats
- Retro-inspired sound effects
- Particle systems for special effects

### Configuration System
- YAML/JSON-based configuration files
- Theme customization
- Behavior parameter tuning
- Performance optimization settings

## Technology Stack

### Core Technologies
- **Language**: TypeScript/JavaScript
- **Graphics**: PixiJS or Canvas API for 2D rendering
- **Metrics**: Built-in system APIs for Raspberry Pi
- **Audio**: Web Audio API for sound effects
- **Build System**: Webpack or Vite

### Pi400 Specific
- GPIO integration (if needed)
- Hardware acceleration for graphics
- Power management considerations
- Thermal monitoring

### Development Tools
- ESLint for code linting
- Prettier for code formatting
- Jest for testing
- GitHub Actions for CI/CD

## Installation

### Prerequisites
- Raspberry Pi 400 with compatible OS
- Node.js v16 or higher
- npm or yarn package manager

### Setup
1. Clone the repository:
```bash
git clone https://github.com/botkey40-stack/digital-pet-project.git
cd digital-pet-project
```

2. Install dependencies:
```bash
npm install
```

3. Configure for your environment:
```bash
cp config/default.yaml config/local.yaml
# Edit config/local.yaml with your specific settings
```

4. Build the project:
```bash
npm run build
```

5. Run the digital pet:
```bash
npm start
```

## Configuration

The digital pet can be customized through configuration files located in the `config/` directory. Key configuration options include:

- `behavior.sensitivity`: How responsive the pet is to system metrics
- `visual.theme`: Visual theme (retro, modern, minimalist)
- `audio.enabled`: Whether to play sound effects
- `metrics.cpuThresholds`: CPU usage thresholds that trigger different behaviors
- `livestream.overlay`: Settings for overlay during streams

## Usage

### Running in Development Mode
```bash
npm run dev
```

### Running in Production
```bash
npm start
```

### Building for Distribution
```bash
npm run build
```

### Running Tests
```bash
npm test
```

## Development

### Project Structure
```
digital-pet-project/
├── src/
│   ├── core/
│   │   ├── engine.ts          # Main game loop and engine
│   │   ├── pet.ts             # Digital pet class
│   │   └── renderer.ts        # Rendering system
│   ├── metrics/
│   │   ├── collector.ts       # System metrics collection
│   │   └── processor.ts       # Metrics processing
│   ├── visuals/
│   │   ├── sprites.ts         # Sprite management
│   │   ├── animations.ts      # Animation system
│   │   └── effects.ts         # Visual effects
│   ├── audio/
│   │   └── sound-manager.ts   # Audio system
│   ├── ui/
│   │   └── overlays.ts        # UI elements
│   ├── config/
│   │   └── index.ts          # Configuration loading
│   └── main.ts               # Entry point
├── config/
│   ├── default.yaml          # Default configuration
│   └── local.yaml            # Local overrides
├── assets/
│   ├── sprites/              # Sprite images
│   ├── audio/                # Sound files
│   └── themes/               # Theme definitions
├── tests/
│   └── *.spec.ts             # Test files
├── docs/
└── build/
```

### Adding New Pet Types
1. Create a new class extending the base Pet class
2. Define unique sprites and animations
3. Implement custom behavior patterns
4. Register the new pet type in the pet factory

### Adding New Behaviors
1. Create behavior modules in the `behaviors/` directory
2. Define triggers based on system metrics
3. Implement visual/audio responses
4. Register the behavior with the engine

### Contributing
We welcome contributions to the Digital Pet Project! Please follow our contribution guidelines:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Make your changes
4. Add tests if applicable
5. Ensure all tests pass (`npm test`)
6. Commit your changes with conventional commit messages
7. Push to the branch (`git push origin feature/amazing-feature`)
8. Open a pull request

#### Code Standards
- Use TypeScript for type safety
- Follow ESLint and Prettier configurations
- Write comprehensive tests for new functionality
- Document public APIs
- Maintain performance on Pi400 hardware

## Roadmap
- [ ] Advanced AI-driven pet behaviors
- [ ] More diverse pet types and customization options
- [ ] Enhanced livestream integration features
- [ ] Cross-platform compatibility (Windows, macOS, Linux)
- [ ] Mobile companion app
- [ ] Plugin system for custom behaviors
- [ ] Cloud synchronization for pet states
- [ ] AR integration for physical interaction

## License
This project is licensed under the MIT License.

## Support
For support, please open an issue in the repository or contact the development team.

### Community
- Join our Discord for real-time discussions
- Check the wiki for detailed guides and tutorials
- Browse existing issues for known problems and solutions