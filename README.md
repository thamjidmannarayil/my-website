<div align="center">
  <img alt="Logo" src="https://raw.githubusercontent.com/thamjidmannarayil/my-website/refs/heads/master/public/logo.png" width="120" />
</div>

<h1 align="center">Thamjid Mannarayil — Personal Portfolio</h1>

<p align="center">
  A modern developer portfolio built with Next.js, Tailwind CSS, and custom theme-based audio playback.
</p>

<p align="center">
  <a href="https://thamjidthachu.dev" target="_blank">Live site</a> ·
  <a href="https://github.com/thamjidmannarayil/my-website" target="_blank">GitHub</a>
</p>

---

## Overview

This repository contains a personal portfolio website for Thamjid Mannarayil. The site includes a rich, animated experience with support for theme switching, theme-driven music playback, project showcases, testimonials, and contact details.

The frontend is built with:

- Next.js 14
- React 18
- Tailwind CSS
- Framer Motion
- React Leaflet and Google Maps support
- Custom theme audio and UI state management

---

## Features

- Responsive portfolio homepage
- Theme selector with custom audio tracks
- Animated intro and project sections
- Testimonials, gallery, and contact form components
- IP-based access restriction support via environment variables
- Optional Google Maps / location-based utility support

---

## Getting Started

### Prerequisites

- Node.js 18 or newer
- Yarn 4

### Install

```bash
git clone https://github.com/thamjidmannarayil/my-website.git
cd my-website
yarn install
```

### Run locally

```bash
yarn dev
```

Open `http://localhost:3000` to view the site.

### Build for production

```bash
yarn build
```

### Start production server

```bash
yarn start
```

---

## Optional Environment Variables

The website works without environment variables, but these can enable optional behavior:

- `NEXT_PUBLIC_KEY_GOOGLE_API` — optional Google Maps API key for location/zipcode features

Create a `.env` file in the project root to set any of these values.

---

## Project Structure

- `pages/` — Next.js pages and API routes
- `components/` — React components used across the site
- `public/` — static assets including images and audio files
- `styles/` — Tailwind and global styles

---

## Notable Files

- `pages/index.tsx` — homepage layout and logic
- `components/AppContextFolder/ThemeContext.tsx` — theme provider and theme state
- `components/AppContextFolder/ThemeAudio.tsx` — theme-based audio playback
- `components/Home/` — homepage section components
- `components/Header/` — navigation and theme selector components

---

## License

MIT License

Copyright (c) 2026 Thamjid Mannarayil

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

---

[Back To The Top](#overview)
