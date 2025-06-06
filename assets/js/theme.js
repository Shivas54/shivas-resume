
function toggleTheme() {
  
  if (localStorage.getItem('theme')) {
  
    if (localStorage.getItem('theme') === 'dark') {
      document.body.classList.remove('dark-theme');
      document.body.classList.add('light-theme');
      localStorage.setItem('theme', 'light');
      document.getElementById('theme-toggle').innerHTML = '🌜'; 
    } else {
     
      document.body.classList.remove('light-theme');
      document.body.classList.add('dark-theme');
      localStorage.setItem('theme', 'dark');
      document.getElementById('theme-toggle').innerHTML = '☀️'; 
    }
  } else {
    
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
     
      document.body.classList.add('light-theme');
      localStorage.setItem('theme', 'light');
      document.getElementById('theme-toggle').innerHTML = '🌜';
    } else {
      
      document.body.classList.add('dark-theme');
      localStorage.setItem('theme', 'dark');
      document.getElementById('theme-toggle').innerHTML = '☀️';
    }
  }
}


function initializeTheme() {
 
  const toggleButton = document.createElement('button');
  toggleButton.id = 'theme-toggle';
  toggleButton.setAttribute('aria-label', 'Toggle dark/light mode');
  toggleButton.addEventListener('click', toggleTheme);
  document.body.appendChild(toggleButton);


  if (localStorage.getItem('theme')) {
    if (localStorage.getItem('theme') === 'dark') {
      document.body.classList.add('dark-theme');
      toggleButton.innerHTML = '☀️'; 
    } else {
      document.body.classList.add('light-theme');
      toggleButton.innerHTML = '🌜'; 
    }
  } else {
    
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      
      toggleButton.innerHTML = '☀️'; 
    } else {
      
      toggleButton.innerHTML = '🌜'; 
    }
  }
}


document.addEventListener('DOMContentLoaded', initializeTheme);
