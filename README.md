# Prospective Customer Segmentation Dashboard

A landing page UI that visualizes customer segmentation for a digital banking platform — dividing prospective customers into three groups (Satisfied, Underserved, Underbanked) based on satisfaction and access to banking products.

## Overview

This project recreates a modern fintech dashboard design using React and Tailwind CSS, featuring a horizontally scrollable card carousel with image overlays, gradient contrast layers, and interactive elements.

## Tech Stack

- **React** — component-based UI
- **Vite** — build tool and dev server
- **Tailwind CSS v4** — utility-first styling
- **Lucide React** — icon library

## Features

- Horizontally scrollable card carousel (hidden scrollbar, smooth overflow)
- Dynamic card rendering from a data array (image, intro text, tag)
- Gradient overlay for text contrast against background images
- Responsive layout with fixed-width flex cards
- Reusable, prop-driven component structure

## Project Structure

```
src/
├── components/
│   └── section1/
│       ├── Navbar.jsx
│       ├── Herotext.jsx
│       ├── Leftcontent.jsx
│       ├── Rightcontent.jsx
│       ├── Rightcard.jsx
│       ├── RightCardContent.jsx
│       ├── Arrow.jsx
│       └── Section1.jsx
├── assets/
├── App.jsx
├── App.css
├── index.css
└── main.jsx
```

## Getting Started

Clone the repository and install dependencies:

```bash
git clone https://github.com/Aanya-Jain07/customer-segmentation-dashboard.git
cd customer-segmentation-dashboard
npm install
npm run dev
```

The app will be available at `http://localhost:5173` by default.

## Status

🚧 In progress — actively being built and refined.

## Author

**Aanya Jain**
[GitHub](https://github.com/Aanya-Jain07)
