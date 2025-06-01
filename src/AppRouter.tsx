import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import App from "./App"; // Your layout wrapper
import IntroductionPage from "./pages/introduction";

export default function AppRouter() {
  return (
    <Router>
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
        {/* Add more routes like this for other side-headings */}
      </Routes>
    </Router>
  );
}
