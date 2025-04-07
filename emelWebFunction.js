const welcomeLink = document.getElementById('welcomeLink');
const resumeLink = document.getElementById('resumeLink');
const photosLink = document.getElementById('photosLink');
const videosLink = document.getElementById('videosLink');
const aboutLink = document.getElementById('aboutLink');
const sendButton = document.getElementById('submitButton');

const logo = document.getElementById('logo');

const welcomePage = document.getElementById('welcomePage');
const resumePage = document.getElementById('resumePage');
const photosPage = document.getElementById('photosPage');
const videosPage = document.getElementById('videosPage');
const aboutPage = document.getElementById('aboutPage');

const welcomePageTitle = document.getElementById('welcomePageTitle');
const resumePageTitle = document.getElementById('resumePageTitle');
const photosPageTitle = document.getElementById('photosPageTitle');
const videosPageTitle = document.getElementById('videosPageTitle');
const aboutPageTitle = document.getElementById('aboutPageTitle');

welcomeLink.addEventListener('click', () => openPage(welcomePage, welcomePageTitle, true));
resumeLink.addEventListener('click', () => openPage(resumePage, resumePageTitle, true));
photosLink.addEventListener('click', () => openPage(photosPage, photosPageTitle, true));
videosLink.addEventListener('click', () => openPage(videosPage, videosPageTitle, true));
aboutLink.addEventListener('click', () => openPage(aboutPage, aboutPageTitle, true));
sendButton.addEventListener('click',() => clearEntries());
logo.addEventListener('click', () => openPage(welcomePage, welcomePageTitle, false));

function openPage(page, title, sidebarToggle) {
    const pages = [welcomePage, resumePage, photosPage, videosPage, aboutPage];
    const titles = [welcomePageTitle, resumePageTitle, photosPageTitle, videosPageTitle, aboutPageTitle]
    pages.forEach(s => s.classList.add('hidden'));
    titles.forEach(s => s.classList.add('hidden'));
    page.classList.remove('hidden');
    title.classList.remove('hidden');
    if(sidebarToggle) {
        toggleSidebar();
    }
    
}

function toggleSidebar() {
    const sidebar = document.getElementById("sidebar");
    sidebar.classList.toggle("active");
}

function clearEntries() {
    setTimeout(() => {
        document.getElementById('contactForm').reset();
    }, 3);
}