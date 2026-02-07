# hlavi.com

Official landing page for Hlavi - CLI-based kanban task management with AI agent support.

## Table of Contents

- [Getting Started](#getting-started)
- [Documentation](#documentation)
- [Development](#development)
- [Contributing](#contributing)
- [Contact](#contact)

## Getting Started

A quick guide on how you can get started running and working on the applicatoin on your local machine.

### Requirements

- Node.js 18 or higher
- npm

### Clone

```bash
git clone https://github.com/mmuhlariholdings/hlavi.com.git
cd hlavi.com
```

### Install Dependencies

```bash
npm install
```

### Development

Watch SASS files and start local server:

```bash
npm run dev
```

This will:
- Watch for SASS changes and compile automatically
- Start a local server at `http://localhost:8000`

### Build for Production

Compile SASS to compressed CSS:

```bash
npm run sass:build
```

## Documentation

The landing page is built with vanilla HTML, CSS (compiled from SASS), and JavaScript. No frameworks required.

### Project Structure

```
hlavi.com/
├── index.html          # Main HTML file
├── css/               # Compiled CSS
├── scss/              # SASS source files
├── js/                # JavaScript
└── assets/            # Icons and images
```

## Development

### Scripts

- `npm run sass` - Compile SASS once
- `npm run sass:watch` - Watch and compile SASS
- `npm run sass:build` - Compile and minify for production
- `npm run serve` - Start local HTTP server
- `npm run dev` - Watch SASS and serve simultaneously

## Contributing

Take a moment to review our [contribution guide](CONTRIBUTING.md) before submitting your first pull request.

Make sure that you check for open issues and pull requests to see if someone else is working on something similar.

## Contact

For feedback, requests or enquiries:

🌐 [http://www.mmuhlariholdings.co.za](http://www.mmuhlariholdings.co.za)