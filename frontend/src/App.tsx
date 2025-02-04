import React from "react";
import { BrowserRouter as Router, Route, Routes, NavLink } from "react-router-dom";
import ConnectWallet from "./componenets/Wallet/ConnectWallet";
import UploadImage from "./componenets/Event/UploadImage";
import MintTickets from ".//componenets/Event/MintTickets";
import Home from "./pages/Home";
import Events from "./pages/Events";
import TicketDetails from "./pages/TicketDetails";

const App: React.FC = () => {
    return (
        <Router>
            <div className="app">
                {/* Navigation Bar */}
                <nav>
                    <ul>
                        <li>
                            <NavLink to="/" className={({ isActive }) => (isActive ? "active" : "")}>
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/events" className={({ isActive }) => (isActive ? "active" : "")}>
                                Events
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/upload" className={({ isActive }) => (isActive ? "active" : "")}>
                                Upload Image
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/mint" className={({ isActive }) => (isActive ? "active" : "")}>
                                Mint Tickets
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/wallet" className={({ isActive }) => (isActive ? "active" : "")}>
                                Connect Wallet
                            </NavLink>
                        </li>
                    </ul>
                </nav>

                {/* App Routes */}
                <main>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/events" element={<Events />} />
                        <Route path="/ticket/:id" element={<TicketDetails />} />
                        <Route path="/upload" element={<UploadImage />} />
                        <Route path="/mint" element={<MintTickets />} />
                        <Route path="/wallet" element={<ConnectWallet />} />
                    </Routes>
                </main>
            </div>
        </Router>
    );
};

export default App;
