import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import SkillLinkLanding from './components/SkillLinkLanding'
import Login from './components/Login'
import Register from './components/Register'
import StudentDashboard from './components/StudentDashboard'
import ClientDashboard from './components/ClientDashboard'
import BrowseProjects from './components/BrowseProjects'
import MyProjects from './components/MyProjects'
import PostProject from './components/PostProject'
import ProjectDetail from './components/ProjectDetail'
import ClientProjects from './components/ClientProjects'
import Portfolio from './components/Portfolio'
import MyApplications from './components/MyApplications'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SkillLinkLanding />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<StudentDashboard />} />
        <Route path="/client-dashboard" element={<ClientDashboard />} />
        <Route path="/browse-projects" element={<BrowseProjects />} />
        <Route path="/my-projects" element={<MyProjects />} />
        <Route path="/my-applications" element={<MyApplications />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/client-projects" element={<ClientProjects />} />
        <Route path="/post-project" element={<PostProject />} />
        <Route path="/project/:id" element={<ProjectDetail />} />
      </Routes>
    </Router>
  )
}

export default App

