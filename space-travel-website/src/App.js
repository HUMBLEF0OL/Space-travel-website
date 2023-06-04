import './App.css';
import Navigation from './components/navigation/navigation';
import Home from './components/home/home';
import Crew from './components/crew/crew';
import Technology from './components/technology/technology';
import Destination from './components/destination/destination';
import { Route, Routes } from 'react-router-dom';

function App() {
    return (
        <div className="home">
            <Navigation />
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/crew" element={<Crew />}></Route>
                <Route path="/destination" element={<Destination />}></Route>
                <Route path="/technology" element={<Technology />}></Route>
            </Routes>
        </div>
    );
}

export default App;
