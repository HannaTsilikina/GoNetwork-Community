import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "../Components/Header/Header";
import SearchingPage from "../Pages/SearchingPage/SearchingPage";
import "../style/App.scss";
import MainScreen from "./Main/MainScreen";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<MainScreen />} />
        <Route path="/search" element={<SearchingPage />} />
      </Routes>
    </Router>
  );
}
export default App;
