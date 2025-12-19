// Filename - App.js

import "./App.css";
import Sidebar from "./components/Sidebar";
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";
import {
    Dashboard,
} 
 from "./pages/Dashboard";
import {
    Master,
    BranchMaster,
    DivisionMaster,
    DepartmentMaster,
} from "./pages/Master";
import {
    Report,
   LogReport,
    AttendanceReport,
    MonthlyReport
} from "./pages/Report";

import Profile from "./pages/Profile";
import{ 
  Pageaccess, 
  UserRegister 
 } from "./pages/PageAccess";
 import { PageAccess } from "./pages/PageAccess";
import { ChangePassword } from "./pages/ChangePassword";
import { Logout } from "./pages/Logout";

function App() {
    return (
        <Router>
            <Sidebar />
            <Routes>
                <Route
                    path="/Dashboard"
                    element={<Dashboard />}
                />
                
                <Route
                    path="/Master"
                    element={<Master />}
                />
                <Route
                    path="/master/BranchMaster"
                    element={<BranchMaster />}
                />
                <Route
                    path="/master/DivisionMaster"
                    element={<DivisionMaster />}
                />
                <Route
                    path="/master/DepartmentMaster"
                    element={<DepartmentMaster />}
                />
                <Route
                    path="/PageAccess"
                    element={<PageAccess />}
                />
                 <Route
                    path="/pageaccess/Pageaccess"
                    element={<Pageaccess />}
                />
                 <Route
                    path="/pageaccess/UserRegister"
                    element={<UserRegister />}
                />
                <Route
                    path="/Report"
                    element={<Report />}
                />
                <Route
                    path="/report/LogReport"
                    element={<LogReport />}
                />
                <Route
                    path="/report/AttendanceReport"
                    element={<AttendanceReport />}
                />
                 <Route
                    path="/report/MonthlyReport"
                    element={<MonthlyReport />}
                />

                <Route
                    path="/Profile"
                    element={<Profile />}
                />
                <Route
                    path="/ChangePassword"
                    element={<ChangePassword />}
                />
                <Route
                    path="/Logout"
                    element={<Logout />}
                />

            </Routes>
        </Router>
    );
}

export default App;

