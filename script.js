// Get references to form, resume display area, and buttons
var form = document.getElementById('resumeForm');
var resumeDisplayElement = document.getElementById('resume-display');
var shareableLinkContainer = document.getElementById('shareable-link-container');
var downloadPdfButton = document.getElementById('download-pdf');
var shareableLink = document.getElementById('shareable-link');
// Function to generate the resume and link
var generateResume = function (event) {
    event.preventDefault(); // Prevent form submission/reload
    // Collect values from form inputs
    var username = document.getElementById('username').value;
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var education = document.getElementById('education').value;
    var experience = document.getElementById('experience').value;
    var skills = document.getElementById('skills').value;
    // Create the resume content dynamically
    var resumeContent = "\n    <h2>Your Resume</h2>\n    <h3>Personal Information</h3>\n    <p><b>Username:</b> ".concat(username, "</p>\n    <p><b>Name:</b> ").concat(name, "</p>\n    <p><b>Email:</b> ").concat(email, "</p>\n    <p><b>Phone:</b> ").concat(phone, "</p>\n    <h3>Education</h3>\n    <p>").concat(education, "</p>\n    <h3>Experience</h3>\n    <p>").concat(experience, "</p>\n    <h3>Skills</h3>\n    <p>").concat(skills, "</p>\n  ");
    // Display the generated resume in the resume display div
    resumeDisplayElement.innerHTML = resumeContent;
    resumeDisplayElement.style.display = 'block'; // Show the resume display
    // Generate shareable link with URL parameters containing the form data
    var queryParams = new URLSearchParams({
        username: encodeURIComponent(username),
        name: encodeURIComponent(name),
        email: encodeURIComponent(email),
        phone: encodeURIComponent(phone),
        education: encodeURIComponent(education),
        experience: encodeURIComponent(experience),
        skills: encodeURIComponent(skills)
    });
    // Construct the unique link with the query parameters
    var baseUrl = 'https://your-domain.com/resume-viewer.html';
    var shareableUrl = "".concat(baseUrl, "?").concat(queryParams.toString());
    shareableLink.href = shareableUrl;
    shareableLink.textContent = shareableUrl;
    // Show the shareable link and PDF download button
    shareableLinkContainer.style.display = 'block';
};
// Add event listener for form submission
form.addEventListener('submit', generateResume);
// Function to trigger PDF download
downloadPdfButton.addEventListener('click', function () {
    window.print(); // Opens the print dialog to allow saving as PDF
});
