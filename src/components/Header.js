import React from 'react';
import './Header.css';

const Header = () => {
    const handleDownload = () => {
        const link = document.createElement("a");
        link.href = "/assets/Dereje_Dena_Resume.pdf";
        link.download = "Dereje_Dena_Resume.pdf";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <header>
        <h1>Dereje Dena</h1>
        <p>Software Engineer</p>
        <p>Email: dereje.dena@gmail.com | Phone: 571-263-4871 | <a href="https://www.linkedin.com/in/dereje-dena-a013a317a/">LinkedIn</a> | Germantown, MD</p>
        <button id="download-resume" class="btn" onClick={handleDownload}>Download Resume</button>
            
        </header>
    );
};

export default Header;