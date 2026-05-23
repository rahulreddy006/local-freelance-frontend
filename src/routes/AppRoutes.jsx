import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import ProtectedRoute from '../components/common/ProtectedRoute';
import RoleProtectedRoute from '../components/common/RoleProtectedRoute';
import MainLayout from '../layouts/MainLayout';
import AuthLayout from '../layouts/AuthLayout';
import DashboardLayout from '../layouts/DashboardLayout';
import AboutPage from '../pages/public/AboutPage';

// Public Pages
import LandingPage from '../pages/public/LandingPage';
import LoginPage from '../pages/public/LoginPage';
import RegisterPage from '../pages/public/RegisterPage';
import GigsPage from '../pages/public/GigsPage';
import GigDetailsPage from '../pages/public/GigDetailsPage';
import UnauthorizedPage from '../pages/public/UnauthorizedPage';
import NotFoundPage from '../pages/public/NotFoundPage';
import PricingPage from '../pages/public/PricingPage';
import ContactPage from '../pages/public/ContactPage';
import TermsPage from '../pages/public/TermsPage';

// Onboarding
import CompleteProfilePage from '../pages/onboarding/CompleteProfilePage';

// OAuth
import OAuthSuccessPage from '../pages/auth/OAuthSuccessPage';

// Student Pages
import StudentDashboard from '../pages/student/StudentDashboard';
import MyApplicationsPage from '../pages/student/MyApplicationsPage';

// Business Pages
import BusinessDashboard from '../pages/business/BusinessDashboard';
import CreateGigPage from '../pages/business/CreateGigPage';
import MyGigsPage from '../pages/business/MyGigsPage';
import GigApplicationsPage from '../pages/business/GigApplicationsPage';

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public Routes with MainLayout */}
        <Route element={<MainLayout />}>
          <Route path="/" element={<LandingPage />} />
          <Route path="/gigs" element={<GigsPage />} />
          <Route path="/gigs/:gigId" element={<GigDetailsPage />} />
          <Route path="/unauthorized" element={<UnauthorizedPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/pricing" element={<PricingPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/terms" element={<TermsPage />} />
        </Route>

        {/* Auth Routes with AuthLayout */}
        <Route element={<AuthLayout />}>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
        </Route>

        {/* OAuth Callback Route (no layout — standalone transition page) */}
        <Route path="/oauth-success" element={<OAuthSuccessPage />} />

        {/* Protected Onboarding Route */}
        <Route element={<ProtectedRoute />}>
          <Route path="/complete-profile" element={<CompleteProfilePage />} />
        </Route>

        {/* Student Routes */}
        <Route
          path="/student"
          element={
            <RoleProtectedRoute allowedRole="student">
              <DashboardLayout role="student" />
            </RoleProtectedRoute>
          }
        >
          <Route path="dashboard" element={<StudentDashboard />} />
          <Route path="applications" element={<MyApplicationsPage />} />
        </Route>

        {/* Business Routes */}
        <Route
          path="/business"
          element={
            <RoleProtectedRoute allowedRole="business">
              <DashboardLayout role="business" />
            </RoleProtectedRoute>
          }
        >
          <Route path="dashboard" element={<BusinessDashboard />} />
          <Route path="create-gig" element={<CreateGigPage />} />
          <Route path="my-gigs" element={<MyGigsPage />} />
          <Route path="gigs/:gigId/applications" element={<GigApplicationsPage />} />
        </Route>

        {/* Fallback */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
