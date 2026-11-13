
import {
  BrowserRouter,
  Routes,
  Route,
  useLocation,
  Navigate,
} from 'react-router-dom';

import CustomCursor from '@/components/CustomCursor';
import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';
import ScrollToTop from '@/components/ScrollToTop';
import ScrollProgress from '@/components/ScrollProgress';
import ScrollObserver from '@/components/ScrollObserver';

import HomePage from '@/routes/HomePage';
import AboutRoute from '@/routes/AboutRoute';
import ExperienceRoute from '@/routes/ExperienceRoute';
import CapabilitiesRoute from '@/routes/CapabilitiesRoute';
import TechnicalRoute from '@/routes/TechnicalRoute';
import SelectedWorkRoute from '@/routes/SelectedWorkRoute';
import VisualArchiveRoute from '@/routes/VisualArchiveRoute';
import ContactRoute from '@/routes/ContactRoute';

function AppContent() {
  const location = useLocation();

  return (
    <div className="flex min-h-screen flex-col overflow-x-clip bg-[#090909] text-white selection:bg-white selection:text-black">

      {/* Global interface */}

      <CustomCursor />
      <ScrollProgress />
      <ScrollObserver />
      <ScrollToTop />

      {/* Site navigation */}

      <SiteHeader />

      {/* Main page viewport */}

      <main
        id="main-content"
        key={location.pathname}
        className="screen-wrapper route-enter flex-1"
      >
        <Routes>
          <Route path="/" element={<HomePage />} />

          <Route path="/about" element={<AboutRoute />} />

          <Route
            path="/experience"
            element={<ExperienceRoute />}
          />

          <Route
            path="/capabilities"
            element={<CapabilitiesRoute />}
          />

          <Route
            path="/technical"
            element={<TechnicalRoute />}
          />

          <Route
            path="/work"
            element={<SelectedWorkRoute />}
          />

          <Route
            path="/archive"
            element={<VisualArchiveRoute />}
          />

          <Route
            path="/contact"
            element={<ContactRoute />}
          />

          {/* Unknown routes return to homepage */}

          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>

      {/* Global footer */}

      <SiteFooter />

    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}
