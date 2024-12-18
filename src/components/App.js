import React from 'react';
import Header from './Header';
import ProfessionalSummary from './ProfessionalSummary';
import ProfessionalExperience from './ProfessionalExperience';
import Education from './Education';
import TechnicalSkills from './TechnicalSkills';
import KeyQualifications from './KeyQualifications';
import Certifications from './Certifications';
import '../App.css';

const App = () => {
    return (
        <div className="App">
            <Header />
            <ProfessionalSummary />
            <ProfessionalExperience />
            <Education />
            <TechnicalSkills />
            <KeyQualifications />
            <Certifications />
            <footer>
                <p>&copy; 2023 Dereje Dena. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default App;