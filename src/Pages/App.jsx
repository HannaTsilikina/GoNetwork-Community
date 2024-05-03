import "../style/App.scss";
import Header from "../Components/Header/Header";
import MainScreen from "../Components/Main/MainScreen/MainScreen";
import SearchingPage from '../Pages/SearchingPage/SearchingPage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
    return (
        <Router>
            <Header />
            <Routes>
                <Route path='/' element={<MainScreen />} />
                <Route path='/search' element={<SearchingPage />} />
            </Routes>
        </Router>
    );
}
export default App;

