# VitalSy - Healthcare Clinic Website

![VitalSy](public/home.png)

Welcome to the **VitalSy** project! This is a modern, responsive healthcare clinic website built with React and Tailwind CSS.

## Table of Contents

- [About](#about)
- [Features](#features)
- [Installation](#installation)
- [Structure](#structure)
- [Contributors](#contributors)
- [Contributing](#contributing)
- [License](#license)

## About

**VitalSy** is a sleek and modern website template for healthcare clinics. It features a responsive design, booking system integration, service listings, and various health tools like a BMI calculator.

## Features

- **Modern UI/UX**: Built with Glassmorphism and modern design principles.
- **Responsive Design**: Fully responsive across mobile, tablet, and desktop.
- **Interactive Elements**: Smooth scrolling, hover effects, and animations using Framer Motion.
- **Health Tools**: Integrated BMI Calculator.
- **Booking System**: Contact form with EmailJS integration.
- **Iconography**: Using Lucide React for consistent and crisp icons.

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/aabubokarr/vitalsy.git
   ```
2. Navigate to the project directory:
   ```bash
   cd vitalsy
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Run the development server:
   ```bash
   npm run dev
   ```
5. Build for production:
   ```bash
   npm run build
   ```

## Structure

```
vitalsy/
├── public/             # Static assets
├── src/                # Source code
│   ├── assets/         # Project assets (images, etc)
│   ├── components/     # React components
│   │   ├── sections/   # Application sections (Home, About, Services, etc)
│   │   ├── ui/         # Reusable UI components (Button, etc)
│   │   ├── Footer.jsx  # Global Footer
│   │   └── Navbar.jsx  # Global Navbar
│   ├── App.jsx         # Main application component
│   ├── index.css       # Global styles and Tailwind directives
│   └── main.jsx        # Entry point
├── index.html          # HTML Entry point
├── package.json        # Project metadata and dependencies
└── tailwind.config.js  # Tailwind CSS configuration
```

## Contributors

<p align="center">
  <a href="https://github.com/aabubokarr/triumph/graphs/contributors">
    <img src="https://contrib.rocks/image?repo=aabubokarr/triumph" alt="Contributors" />
  </a>
</p>

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository.
2. Create a new branch:
   ```bash
   git checkout -b feature-name
   ```
3. Commit your changes:
   ```bash
   git commit -m "Add feature-name"
   ```
4. Push to the branch:
   ```bash
   git push origin feature-name
   ```
5. Open a pull request.

## License

This project is licensed under the [MIT License](LICENSE).
