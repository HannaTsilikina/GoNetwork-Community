import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./../components/Header/Header";
import SearchingPage from "./../Pages/SearchingPage/SearchingPage";
import "./../style/App.scss";
import CompaniesAndDirections from "../Pages/CompaniesAndDirections/CompaniesAndDirections";

import MainScreen from "./Main/MainScreen";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<MainScreen />} />
        <Route path="/search" element={<SearchingPage />} />
        <Route
          path="/companies"
          element={<CompaniesAndDirections companyName="СибГеоТоп" />}
        />
      </Routes>
    </Router>
  );
}
export default App;
