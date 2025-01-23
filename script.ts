// Get references to form, resume display area, and buttons
const form = document.getElementById('resumeForm') as HTMLFormElement;
const resumeDisplayElement = document.getElementById('resume-display') as HTMLDivElement;
const shareableLinkContainer = document.getElementById('shareable-link-container') as HTMLDivElement;
const downloadPdfButton = document.getElementById('download-pdf') as HTMLButtonElement;
const shareableLink = document.getElementById('shareable-link') as HTMLAnchorElement;

// Function to generate the resume and link
const generateResume = (event: Event) => {
  event.preventDefault(); // Prevent form submission/reload

  // Collect values from form inputs
  const username = (document.getElementById('username') as HTMLInputElement).value;
  const name = (document.getElementById('name') as HTMLInputElement).value;
  const email = (document.getElementById('email') as HTMLInputElement).value;
  const phone = (document.getElementById('phone') as HTMLInputElement).value;
  const education = (document.getElementById('education') as HTMLTextAreaElement).value;
  const experience = (document.getElementById('experience') as HTMLTextAreaElement).value;
  const skills = (document.getElementById('skills') as HTMLTextAreaElement).value;

  // Create the resume content dynamically
  const resumeContent = `
    <h2>Your Resume</h2>
    <h3>Personal Information</h3>
    <p><b>Username:</b> ${username}</p>
    <p><b>Name:</b> ${name}</p>
    <p><b>Email:</b> ${email}</p>
    <p><b>Phone:</b> ${phone}</p>
    <h3>Education</h3>
    <p>${education}</p>
    <h3>Experience</h3>
    <p>${experience}</p>
    <h3>Skills</h3>
    <p>${skills}</p>
  `;

  // Display the generated resume in the resume display div
  resumeDisplayElement.innerHTML = resumeContent;
  resumeDisplayElement.style.display = 'block'; // Show the resume display

  // Generate shareable link with URL parameters containing the form data
  const queryParams = new URLSearchParams({
    username: encodeURIComponent(username),
    name: encodeURIComponent(name),
    email: encodeURIComponent(email),
    phone: encodeURIComponent(phone),
    education: encodeURIComponent(education),
    experience: encodeURIComponent(experience),
    skills: encodeURIComponent(skills)
  });

  // Construct the unique link with the query parameters
  const baseUrl = 'https://your-domain.com/resume-viewer.html';
  const shareableUrl = `${baseUrl}?${queryParams.toString()}`;
  shareableLink.href = shareableUrl;
  shareableLink.textContent = shareableUrl;

  // Show the shareable link and PDF download button
  shareableLinkContainer.style.display = 'block';
};

// Add event listener for form submission
form.addEventListener('submit', generateResume);

// Function to trigger PDF download
downloadPdfButton.addEventListener('click', () => {
  window.print(); // Opens the print dialog to allow saving as PDF
});
