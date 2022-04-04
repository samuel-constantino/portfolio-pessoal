import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';

import Home from '../pages/Home/index';
import About from '../pages/About/index';
import SoftSkills from '../pages/SoftSkills/index';
import SoftSkillDetails from '../pages/SoftSkills/SoftSkillDetails/index';
import HardSkills from '../pages/HardSkills/index';
import HardSkillDetails from '../pages/HardSkills/HardSkillDetails/index';
import Projects from '../pages/Projects/index';
import ProjectDetails from '../pages/Projects/ProjectDetails/index';

export default function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="/about" element={ <About /> } />
        <Route path="/soft-skills" element={ <SoftSkills /> } />
        <Route path="/soft-skills/:id" element={ <SoftSkillDetails /> } />
        <Route path="/hard-skills" element={ <HardSkills /> } />
        <Route path="/hard-skills/:id" element={ <HardSkillDetails /> } />
        <Route path="/projects" element={ <Projects /> } />
        <Route path="/projects/:id" element={ <ProjectDetails /> } />
      </Routes>
    </Router>
  );
}
