import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HomePage } from "./home.route";
import { ProfilePage } from "./profile.route";
import { MatchesPage } from "./matches.route";
import { NotFoundPage } from "./notFound.route";

export function ReactRouter() {
    return (
        <Router>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/matches" element={<MatchesPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Router> 
    )
}
