import './App.css';
import { Fragment } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { publicRoutes } from './Routes';
import { DefaultLayout } from './Layout';
function App() {
    return (
        <Router>
            <div className="App">
                <Routes>
                    {publicRoutes.map((route, index) => {
                        c;
                        const layOut = DefaultLayout;
                        if (route.layout) {
                            layOut = route.layout;
                        } else if (route.layout == null) {
                            layOut = Fragment;
                        }
                        const Page = route.component;
                        return (
                            <Route
                                path={route.path}
                                element={
                                    <layOut>
                                        <Page />
                                    </layOut>
                                }
                                key={index}
                            />
                        );
                    })}
                </Routes>
            </div>
        </Router>
    );
}

export default App;
