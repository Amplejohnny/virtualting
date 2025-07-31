import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import App from "./App"; // Your layout wrapper
import IntroductionPage from "./pages/introduction";
import ArchitecturePage from "./pages/architecture";
import GettingStartedPage from "./pages/getting-started";
import ToolsAndIntegrationPage from "./pages/tools-integration";
import BestPracticesPage from "./pages/best-practices";
import VersioningPage from "./pages/versioning";
import ResourcesPage from "./pages/resources";
import { MobileMenuProvider } from "./context/MobileMenuContext";

export default function AppRouter() {
  return (
    <Router>
      <MobileMenuProvider>
        <Routes>
          {/* Redirect root path to /docs/introduction */}
          <Route
            path="/"
            element={<Navigate to="/docs/introduction" replace />}
          />
          <Route
            path="/docs/introduction"
            element={
              <App>
                <IntroductionPage />
              </App>
            }
          />
          <Route
            path="/docs/architecture"
            element={
              <App>
                <ArchitecturePage />
              </App>
            }
          />
          <Route
            path="/docs/getting-started"
            element={
              <App>
                <GettingStartedPage />
              </App>
            }
          />
          <Route
            path="/docs/tools-integration"
            element={
              <App>
                <ToolsAndIntegrationPage />
              </App>
            }
          />
          <Route
            path="/docs/best-practices"
            element={
              <App>
                <BestPracticesPage />
              </App>
            }
          />
          <Route
            path="/docs/versioning"
            element={
              <App>
                <VersioningPage />
              </App>
            }
          />
          <Route
            path="/docs/resources"
            element={
              <App>
                <ResourcesPage />
              </App>
            }
          />
          {/* Catch-all route for 404 */}
          <Route
            path="*"
            element={
              <App>
                <div className="p-4">Page not found</div>
              </App>
            }
          />
        </Routes>
      </MobileMenuProvider>
    </Router>
  );
}
