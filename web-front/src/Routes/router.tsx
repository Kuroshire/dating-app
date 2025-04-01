import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HomePage } from "./home.route";
import { ProfilePage } from "./profile.route";
import { AllProfilesPage } from "./allProfiles.route";
import { MatchesPage } from "./matches.route";
import { NotFoundPage } from "./notFound.route";
import { PageFooter } from "../Component/pageFooter";

export function ReactRouter() {
    return (
      <>
        <Router>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/yourProfile" element={<ProfilePage />} />
            <Route path="/profile/:userId" element={<ProfilePage />} />
            <Route path="/allProfiles" element={<AllProfilesPage />} />
            <Route path="/matches" element={<MatchesPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Router>
        <PageFooter />
      </>
    )
}
