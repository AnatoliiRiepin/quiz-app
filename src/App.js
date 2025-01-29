import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import { QuizSetting } from "./pages/setQuiz/QuizSetting";
import { GuidesAndHelp } from "./pages/guidesHelp/GuidesAndHelp";
import { LeaderBoard } from "./pages/leaderboard/LeaderBoard";
import { QuestionsAndSuggestions } from "./pages/questionsSuggestions/QuestionsAndSuggestions";
import { Quiz } from "./pages/quiz/Quiz";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<QuizSetting />} />
          <Route path="/guidesHelp" element={<GuidesAndHelp />} />
          <Route path="/leaderboard" element={<LeaderBoard />} />
          <Route path="/questionsSuggestions" element={<QuestionsAndSuggestions />} />
          <Route path="/quiz" element={<Quiz />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
