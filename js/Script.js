const skills = [
    { name: 'HTML', icon: 'https://skillicons.dev/icons?i=html' },
    { name: 'CSS', icon: 'https://skillicons.dev/icons?i=css' },
    { name: 'JavaScript', icon: 'https://skillicons.dev/icons?i=javascript' },
    { name: 'TypeScript', icon: 'https://skillicons.dev/icons?i=typescript' },
    { name: 'jquery', icon: 'https://skillicons.dev/icons?i=jquery' },
    { name: 'Angular', icon: 'https://skillicons.dev/icons?i=angular' },
    { name: 'Bootstrap', icon: 'https://skillicons.dev/icons?i=bootstrap' },
    { name: 'Tailwind CSS', icon: 'https://skillicons.dev/icons?i=tailwind' },
    { name: 'Sass', icon: 'https://skillicons.dev/icons?i=sass' },
    { name: 'Git', icon: 'https://skillicons.dev/icons?i=git' },
    { name: 'GitHub', icon: 'https://skillicons.dev/icons?i=github' },
    { name: 'Next.js', icon: 'https://skillicons.dev/icons?i=nextjs' },
    { name: 'powershell', icon: 'https://skillicons.dev/icons?i=powershell' },
    { name: 'C++', icon: 'https://skillicons.dev/icons?i=cpp' },
  ];
  
  const skillsGrid = document.getElementById('skills-grid');
  
  // Function to create skill elements
  function renderSkills() {
    skills.forEach(skill => {
      const skillElement = document.createElement('div');
      skillElement.classList.add('skill');
      
      const imgElement = document.createElement('img');
      imgElement.src = skill.icon;
      imgElement.alt = skill.name;
  
      const textElement = document.createElement('p');
      textElement.textContent = skill.name;
  
      skillElement.appendChild(imgElement);
      skillElement.appendChild(textElement);
      
      skillsGrid.appendChild(skillElement);
    });
  }
  
  // Initialize skills rendering
  renderSkills();




// 
// 
const projectstwo = [
  {
    title: 'snapbuy',
    imgSrc: 'img/snpbuy.jpg',
    liveDemo: 'https://uyfudywg.github.io/Snapbuy/',
    sourceCode: 'https://github.com/uyfudywg/Snapbuy.git',
    type: 'Angular'
  },
  {
    title: 'Book Store',
    imgSrc: 'img/bookstory.jpg',
    liveDemo: 'https://unique-yeot-2626e4.netlify.app/home',
    sourceCode: 'https://github.com/uyfudywg/Book-Store.git',
    type: 'Angular'
  },
  {
    title: 'Academy_online_courses',
    imgSrc: 'img/Academy_online_courses.jpg',
    liveDemo: 'https://uyfudywg.github.io/Academy_online_courses/',
    sourceCode: 'https://github.com/uyfudywg/Academy_online_courses.git',
    type: 'JavaScript'
  },
  {
    title: 'DevFolio',
    imgSrc: 'img/DevFolio.jpg',
    liveDemo: 'https://uyfudywg.github.io/DevFolio/',
    sourceCode: 'https://github.com/uyfudywg/DevFolio.git',
    type: 'Html&Css'
  },
  {
    title: 'Product-list-with-cart',
    imgSrc: 'img/Product-list-with-cart.jpg',
    liveDemo: 'https://uyfudywg.github.io/Product-list-with-cart/',
    sourceCode: 'https://github.com/uyfudywg/Product-list-with-cart.git',
    type: 'JavaScript'
  },
  {
    title: 'protfolio',
    imgSrc: 'img/protfolio.jpg',
    liveDemo: 'https://uyfudywg.github.io/protfolio/',
    sourceCode: 'https://github.com/uyfudywg/protfolio.git',
    type: 'JavaScript'
  },
  {
    title: 'hospital-website',
    imgSrc: 'img/hospital-website.jpg',
    liveDemo: 'https://uyfudywg.github.io/hospital-website/',
    sourceCode: 'https://github.com/uyfudywg/hospital-website.git',
    type: 'JavaScript'
  },
  {
    title: 'Furni',
    imgSrc: 'img/Furni.jpg',
    liveDemo: 'https://uyfudywg.github.io/Furni-/',
    sourceCode: 'https://github.com/uyfudywg/Furni-.git',
    type: 'Html&Css'
  },
  {
    title: 'cart-list',
    imgSrc: 'img/cart-list.jpg',
    liveDemo: 'https://demo.com',
    sourceCode: 'https://github.com',
    type: 'Angular'
  },
  {
    title: 'wheathercast',
    imgSrc: 'img/wheathercast.jpg',
    liveDemo: 'https://uyfudywg.github.io/weathercast/',
    sourceCode: 'https://github.com/uyfudywg/weathercast.git',
    type: 'JavaScript'
  },
  {
    title: 'bookmark',
    imgSrc: 'img/bookmark.jpg',
    liveDemo: 'https://demo.com',
    sourceCode: 'https://github.com',
    type: 'JavaScript'
  },
  {
    title: 'CRUD SYSTEM',
    imgSrc: 'img/CRUD SYSTEM.jpg',
    liveDemo: 'https://demo.com',
    sourceCode: 'https://github.com',
    type: 'JavaScript'
  }
];


const categories = ['All','Html&Css', 'JavaScript', 'Angular']; // Categories for filtering
let selectedCategory = 'All'; // Default category

// Function to render category buttons
function renderCategoryButtons() {
  const categoryButtonsContainer = document.getElementById('category-buttons');
  categoryButtonsContainer.innerHTML = ''; // Clear existing buttons

  categories.forEach(category => {
    const button = document.createElement('button');
    button.textContent = category;
    // Add active class if the category is selected
    if (category === selectedCategory) {
      button.classList.add('active');
    }

    button.addEventListener('click', () => {
      selectedCategory = category;
      filterProjects(category); // Filter projects based on category
      renderCategoryButtons(); // Re-render category buttons to update active class
    });

    categoryButtonsContainer.appendChild(button);
  });
}

// Function to render project cards
function renderProjects(filteredProjects) {
  const projectsContainer = document.getElementById('projectstwo');
  projectsContainer.innerHTML = ''; // Clear previous projects

  filteredProjects.forEach(project => {
    const col = document.createElement('div');
    col.classList.add('col-lg-4', 'col-md-6');

    const card = document.createElement('div');
    card.classList.add('card');
    card.setAttribute('data-aos', 'zoom-in');

    const title = document.createElement('h4');
    title.textContent = project.title;

    const link = document.createElement('a');
    link.href = project.liveDemo;
    link.target = "_blank";

    const img = document.createElement('img');
    img.src = project.imgSrc;
    img.alt = project.title;

    const linksDiv = document.createElement('div');
    linksDiv.classList.add('links', 'd-flex', 'justify-content-between', 'm-3');

    const liveBtn = document.createElement('a');
    liveBtn.classList.add('btn', 'btn-primary', 'text-capitalize');
    liveBtn.href = project.liveDemo;
    liveBtn.target = "_blank";
    liveBtn.textContent = 'live demo';

    const sourceCodeBtn = document.createElement('a');
    sourceCodeBtn.classList.add('btn', 'btn-dark', 'text-capitalize');
    sourceCodeBtn.href = project.sourceCode;
    sourceCodeBtn.target = "_blank";
    sourceCodeBtn.textContent = 'source code';

    // Append elements
    link.appendChild(img);
    linksDiv.appendChild(liveBtn);
    linksDiv.appendChild(sourceCodeBtn);
    card.appendChild(title);
    card.appendChild(link);
    card.appendChild(linksDiv);
    col.appendChild(card);

    projectsContainer.appendChild(col);
  });
}

// Function to filter projects based on selected category
function filterProjects(category) {
  const filteredProjects = category === 'All' 
    ? projectstwo 
    : projectstwo.filter(project => project.type === category);

  renderProjects(filteredProjects);
}

// Initialize the page
renderCategoryButtons();
filterProjects(selectedCategory);
