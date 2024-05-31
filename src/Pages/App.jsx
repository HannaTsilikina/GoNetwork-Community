import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "../Components/Header/Header";
import MainScreen from "../Components/Main/MainScreen/MainScreen";
import SearchingPage from '../Pages/SearchingPage/SearchingPage';
import CompanyPage from '../Pages/CompanyPage/CompanyPage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
    return (
        <Router>
            <Header />
            <Routes>
                <Route path='/' element={<MainScreen />} />
                <Route path='/search' element={<SearchingPage />} />
                <Route path='/companies' element={<CompanyPage />} />

            </Routes>
        </Router>
    );
}
export default App;
