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

Built with ❤️ by the IEEE Jadara University Student Branch

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
