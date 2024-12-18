
document.addEventListener("DOMContentLoaded", function() {
    const downloadButton = document.getElementById('download-resume');

    downloadButton.addEventListener('click', function() {
        const link = document.createElement('a');
        link.href = '/assets/Dereje_Dena_Resume.pdf'; // Path to the resume file
        link.download = 'Dereje_Resume.pdf'; // The name of the file to be downloaded
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    });
});