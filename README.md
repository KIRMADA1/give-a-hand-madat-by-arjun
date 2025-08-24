# MADAT - A Donation Platform

**Making A Difference Through Donations** - A modern, user-friendly platform connecting generous donors with verified NGOs to create meaningful impact in communities.

## 🌟 Project Overview

MADAT is a comprehensive donation platform that makes giving back simple, secure, and transparent. Our mission is to bridge the gap between those who want to help and those who need help, creating a seamless experience for meaningful donations.

## ✨ Features

### Core Functionality
- **Multi-Category Donations**: Support for Food 🍲, Clothes 👕, Books 📚, and Toys 🧸
- **Verified NGO Network**: Curated list of trusted NGO partners with ratings and reviews
- **24/7 Helpline**: Emergency support and general assistance
- **Digital Certificates**: Downloadable donation certificates for contributors
- **User Authentication**: Secure login/signup with Google OAuth integration

### Pages & Components
1. **Home Page**: Hero section with impact statistics and call-to-action
2. **Donate Page**: Category-based donation forms with pickup requests
3. **NGOs Page**: Directory of verified partner organizations
4. **Helpline Page**: Emergency contact and pickup request forms
5. **About Us Page**: Mission, values, team, and impact stories
6. **Login/Signup**: Secure authentication with social login options

### Technical Features
- **Responsive Design**: Mobile-first approach with beautiful UI/UX
- **Modern Tech Stack**: React, TypeScript, Tailwind CSS, Vite
- **Design System**: Consistent theming with semantic tokens
- **Performance Optimized**: Fast loading with optimized images and animations
- **Accessibility**: WCAG compliant with proper semantic HTML

## 🚀 Tech Stack

- **Frontend**: React 18, TypeScript, Vite
- **Styling**: Tailwind CSS with custom design system
- **UI Components**: Radix UI primitives with shadcn/ui
- **Routing**: React Router v6
- **State Management**: TanStack Query
- **Icons**: Lucide React
- **Authentication**: Firebase (planned)
- **PDF Generation**: React-PDF (planned)

## 🎨 Design System

MADAT features a carefully crafted design system with:
- **Primary Colors**: Trustworthy blues and teals (#007BA7)
- **Secondary Colors**: Warm oranges and greens for accents
- **Typography**: Clean, accessible font hierarchy
- **Components**: Consistent spacing, shadows, and animations
- **Responsive**: Mobile-first with fluid layouts

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── ui/             # shadcn/ui components
│   ├── Navbar.tsx      # Navigation component
│   └── Footer.tsx      # Footer component
├── pages/              # Route components
│   ├── Home.tsx        # Landing page
│   ├── Donate.tsx      # Donation interface
│   ├── NGOs.tsx        # NGO directory
│   ├── Helpline.tsx    # Support & emergency
│   ├── About.tsx       # About us page
│   └── Login.tsx       # Authentication
├── hooks/              # Custom React hooks
├── lib/                # Utility functions
├── assets/             # Images and static files
└── index.css           # Global styles & design tokens
```

## 🛠️ Setup & Installation

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn package manager

### Local Development

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd madat-donation-platform
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   ```
   http://localhost:8080
   ```

### Build for Production

```bash
# Create optimized production build
npm run build

# Preview production build locally
npm run preview
```

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. **Connect to Vercel**
   - Push code to GitHub
   - Connect repository to Vercel
   - Automatic deployments on push

2. **Manual Deployment**
   ```bash
   npm install -g vercel
   vercel
   ```

3. **Environment Variables**
   - Set up Firebase config variables
   - Configure any API keys in Vercel dashboard

### Other Deployment Options
- **Netlify**: Drag & drop `dist` folder or connect GitHub
- **GitHub Pages**: Use `gh-pages` package
- **Surge.sh**: Simple static hosting

## 🔧 Environment Setup

Create a `.env.local` file for local development:

```env
# Firebase Configuration (when integrated)
VITE_FIREBASE_API_KEY=your_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_domain
VITE_FIREBASE_PROJECT_ID=your_project_id

# API Endpoints
VITE_API_BASE_URL=your_api_url
```

## 🤝 Contributing

We welcome contributions! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Development Guidelines
- Follow TypeScript best practices
- Use semantic commit messages
- Maintain design system consistency
- Write responsive, accessible code
- Test across different devices

## 📱 Features Roadmap

### Phase 1 (Current)
- ✅ Core platform with donation categories
- ✅ NGO directory and ratings
- ✅ Helpline and emergency support
- ✅ Responsive design system

### Phase 2 (Planned)
- 🔄 Firebase authentication integration
- 🔄 PDF certificate generation
- 🔄 User dashboard with donation history
- 🔄 Real-time notifications

### Phase 3 (Future)
- 📱 Mobile app development
- 💳 Payment gateway integration
- 📊 Analytics and impact tracking
- 🌍 Multi-language support

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🌟 Acknowledgments

- **Design Inspiration**: Modern charity platforms and social impact websites
- **UI Components**: shadcn/ui for beautiful, accessible components
- **Icons**: Lucide React for consistent iconography
- **Color Palette**: Carefully selected for trust and accessibility

## 📞 Support

For support and questions:

- 📧 Email: support@madat.org
- 📱 Helpline: +1 (555) 123-4567
- 🌐 Website: [madat.org](https://your-deployed-url.vercel.app)

---

**MADAT** - Making A Difference Through Donations
*Built with ❤️ for a better world*

## 🔗 Deployed Link

**Live Demo**: [https://your-app-name.vercel.app](https://your-deployed-url.vercel.app)

> Note: Replace with your actual deployed URL after deployment