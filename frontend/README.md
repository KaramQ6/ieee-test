# IEEE Jadara University Student Branch Website

A high-performance, accessible React website built with Vite for the IEEE Jadara University Student Branch.

## 🚀 Performance Optimizations

This website is optimized for peak performance following Lighthouse/PageSpeed best practices:

### ⚡ Core Optimizations
- **Vite Build System**: Lightning-fast development and optimized production builds
- **Code Splitting**: Lazy loading of components and routes using React.lazy()
- **Image Optimization**: WebP format with PNG fallbacks using `<picture>` elements
- **Bundle Optimization**: Efficient chunking and tree-shaking
- **CSS Optimization**: Minimized CSS with autoprefixer and cssnano
- **Service Worker**: Advanced caching strategies for better repeat visit performance

### 🎨 User Experience
- **Loading States**: Smooth loading indicators with skeleton screens
- **Error Boundaries**: Graceful error handling with fallback UI
- **Responsive Design**: Mobile-first approach with optimal layouts
- **Accessibility**: WCAG 2.1 compliant with proper ARIA labels and semantic HTML
- **Motion Preferences**: Respects user's reduced motion preferences

### 📱 Progressive Web App (PWA)
- **Service Worker**: Offline functionality with intelligent caching
- **Web App Manifest**: Installable as a native app
- **Performance Monitoring**: Web Vitals reporting for continuous optimization

## 🛠 Technologies Used

- **React 19** - Latest React with concurrent features
- **Vite** - Fast build tool and development server  
- **React Router v7** - Client-side routing with lazy loading
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Smooth animations and transitions
- **Radix UI** - Accessible component primitives

## 📦 Installation

1. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

2. **Start development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

3. **Build for production**
   ```bash
   npm run build
   # or
   yarn build
   ```

4. **Preview production build**
   ```bash
   npm run preview
   # or
   yarn preview
   ```

## 🎯 Performance Features

### Image Optimization
All images use the `<picture>` element with WebP and PNG fallbacks:
```jsx
<picture>
  <source srcSet="/images/logo.webp" type="image/webp" />
  <img src="/images/logo.png" alt="IEEE Logo" width="120" height="80" loading="lazy" />
</picture>
```

### Lazy Loading
Components are lazy-loaded to reduce initial bundle size:
```jsx
const HomePage = React.lazy(() => import('./pages/HomePage'));
const OfficersPage = React.lazy(() => import('./pages/OfficersPage'));
```

### Key Web Vitals Targets
- **LCP (Largest Contentful Paint)**: < 2.5s
- **FID (First Input Delay)**: < 100ms  
- **CLS (Cumulative Layout Shift)**: < 0.1

## 🚀 Deployment

### Netlify Configuration
Make sure your Netlify build settings are:
- **Build command**: `npm run build`
- **Publish directory**: `dist`
- **Base directory**: `frontend` (if deploying from monorepo)

### Build for Production
```bash
npm run build
```

The build creates optimized static files in the `dist/` directory ready for deployment.

### Performance Monitoring
The website includes Web Vitals monitoring and comprehensive error boundaries for production reliability.

Built with ❤️ by the IEEE Jadara University Student Branch
