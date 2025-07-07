import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import UrlRedirect from "./components/urlRedirect";
import './App.css';

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path='/' element={ <Home /> } />
                <Route path='/:urlCode' element={ <UrlRedirect /> } />
            </Routes>
        </div>
    );
}

export default App;