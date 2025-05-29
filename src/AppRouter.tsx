import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "./App"; // Your layout wrapper
import IntroductionPage from "./pages/introduction"; 

export default function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route
         //the "/" route and also the introduction page route
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
