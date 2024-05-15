import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "../Components/Header/Header";
import SearchingPage from "../Pages/SearchingPage/SearchingPage";
import "../style/App.scss";
import CompaniesAndDirections from "../components/componentsCompaniesAndDirections/CompaniesAndDirections";

import MainScreen from "./Main/MainScreen";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<MainScreen />} />
        <Route path="/search" element={<SearchingPage />} />
        <Route path="/companies" element={<CompaniesAndDirections />} />
      </Routes>
    </Router>
  );
}
export default App;
