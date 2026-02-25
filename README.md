# Henk van Jaarsveld - Personal Website

A modern, responsive personal website built with clean HTML, CSS, and JavaScript. Designed for GitHub Pages hosting with a focus on performance, accessibility, and professional presentation.

## 🚀 Live Website

[Visit the live website](https://your-username.github.io/your-repo-name)

## 📋 Features

- **Modern Design**: Clean, professional design suitable for an Engineering Director
- **Responsive Layout**: Optimized for all devices (desktop, tablet, mobile)
- **Fast Loading**: Minimal dependencies, optimized assets
- **Accessible**: WCAG 2.1 compliant with proper semantic HTML
- **SEO Optimized**: Meta tags, Open Graph, and Twitter Card support
- **GitHub Pages Ready**: Static files with no build process required

## 🏗️ Built With

- **HTML5**: Semantic markup with accessibility in mind
- **CSS3**: Modern styling with CSS Grid, Flexbox, and CSS Custom Properties
- **Vanilla JavaScript**: Progressive enhancement without external dependencies
- **Google Fonts**: Inter font family for modern typography

## 📁 Project Structure

```
├── index.html          # Main HTML file
├── style.css           # Main stylesheet
├── script.js           # JavaScript for enhanced UX
├── favicon.ico         # Website icon
├── favicon.svg         # SVG favicon source
└── README.md          # This file
```

## 🚀 GitHub Pages Setup

### Option 1: Quick Deploy (Recommended)

1. **Fork or create repository**:
   - Fork this repository or create a new one
   - Name it `your-username.github.io` for user site, or any name for project site

2. **Enable GitHub Pages**:
   - Go to repository **Settings** → **Pages**
   - Under "Source", select **"Deploy from a branch"**
   - Choose **"main"** branch and **"/ (root)"** folder
   - Click **Save**

3. **Wait for deployment**:
   - GitHub will automatically build and deploy your site
   - Visit `https://your-username.github.io/your-repo-name`

### Option 2: Custom Domain

1. **Follow steps 1-2 above**
2. **Add custom domain**:
   - In Pages settings, add your domain (e.g., `henkvanjade.com`)
   - Create a `CNAME` file in the repository root with your domain
3. **Configure DNS**:
   - Add CNAME record pointing to `your-username.github.io`

## 🛠️ Local Development

1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-username/your-repo-name.git
   cd your-repo-name
   ```

2. **Serve locally**:
   ```bash
   # Using Python 3
   python -m http.server 8000
   
   # Using Node.js (if you have it)
   npx serve .
   
   # Using PHP
   php -S localhost:8000
   ```

3. **Open in browser**:
   - Navigate to `http://localhost:8000`

## ✏️ Customization

### Personal Information

Edit the following in `index.html`:

- **Name and title**: Update the `<title>` tag and hero section
- **Bio content**: Modify text in the About section
- **Experience**: Update the Experience section with your background
- **Contact links**: Update email, LinkedIn, GitHub links in the Contact section

### Styling

Customize the look by editing `style.css`:

- **Colors**: Modify CSS custom properties in `:root`
- **Typography**: Change font families or sizes
- **Layout**: Adjust spacing, grid layouts, or responsive breakpoints

### Content Sections

Add or remove sections by:

1. Adding new `<section>` elements in `index.html`
2. Adding corresponding navigation links
3. Styling the new sections in `style.css`

## 🎨 Design System

### Colors
- **Primary**: `#2563eb` (Blue)
- **Text**: `#1e293b` (Dark Slate)
- **Secondary Text**: `#64748b` (Slate)
- **Background**: `#ffffff` (White)
- **Background Alt**: `#f8fafc` (Light Slate)

### Typography
- **Font Family**: Inter (from Google Fonts)
- **Base Size**: 16px
- **Scale**: Modular scale based on CSS custom properties

### Spacing
- **Base Unit**: 1rem (16px)
- **Scale**: 0.25rem, 0.5rem, 1rem, 1.5rem, 2rem, 3rem, 4rem, 5rem

## 📱 Responsive Design

The website uses a mobile-first approach with breakpoints:

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## ♿ Accessibility Features

- Semantic HTML5 elements
- ARIA labels and landmarks
- Keyboard navigation support
- High contrast mode support
- Screen reader optimized
- Skip to main content link
- Minimum touch target sizes (44px)

## ⚡ Performance Optimizations

- Minimal CSS and JavaScript
- Optimized images and fonts
- CSS custom properties for theming
- Lazy loading animations
- Efficient event handling

## 🔧 Browser Support

- **Modern browsers**: Chrome 60+, Firefox 55+, Safari 12+, Edge 79+
- **Mobile**: iOS Safari 12+, Chrome Mobile 60+
- **Progressive enhancement**: Basic functionality works in older browsers

## 📈 SEO Features

- Structured HTML with semantic elements
- Meta description and keywords
- Open Graph tags for social sharing
- Twitter Card support
- Proper heading hierarchy
- Fast loading times

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/new-feature`
3. Commit changes: `git commit -m 'Add new feature'`
4. Push to branch: `git push origin feature/new-feature`
5. Submit a pull request

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🐛 Issues & Support

If you encounter any issues or have questions:

1. Check the [Issues](../../issues) page
2. Create a new issue with detailed information
3. Include browser, device, and steps to reproduce

## 🔗 Links

- [GitHub Pages Documentation](https://docs.github.com/en/pages)
- [Web Accessibility Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)
- [HTML5 Semantic Elements](https://developer.mozilla.org/en-US/docs/Web/HTML/Element)

---

**Built with ❤️ by Henk van Jaarsveld**

*Engineering Director passionate about simplifying complex technical solutions*