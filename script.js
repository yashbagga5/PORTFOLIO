// Tab functionality
document.addEventListener('DOMContentLoaded', function() {
    const tabButtons = document.querySelectorAll('.tab-btn');
    const tabPanes = document.querySelectorAll('.tab-pane');
    const viewDetailsButtons = document.querySelectorAll('.view-details-btn');

    // Tab switching functionality
    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            const targetTab = button.getAttribute('data-tab');
            
            // Remove active class from all buttons and panes
            tabButtons.forEach(btn => btn.classList.remove('active'));
            tabPanes.forEach(pane => pane.classList.remove('active'));
            
            // Add active class to clicked button and corresponding pane
            button.classList.add('active');
            document.getElementById(targetTab).classList.add('active');
        });
    });

    // View details button functionality
    viewDetailsButtons.forEach(button => {
        button.addEventListener('click', () => {
            const targetTab = button.getAttribute('data-tab');
            
            // Remove active class from all buttons and panes
            tabButtons.forEach(btn => btn.classList.remove('active'));
            tabPanes.forEach(pane => pane.classList.remove('active'));
            
            // Add active class to target button and corresponding pane
            document.querySelector(`[data-tab="${targetTab}"]`).classList.add('active');
            document.getElementById(targetTab).classList.add('active');
        });
    });

    // Smooth scrolling for better UX
    function smoothScrollTo(element) {
        element.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }

    // Add smooth scrolling to tab switches
    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            const targetTab = button.getAttribute('data-tab');
            const targetPane = document.getElementById(targetTab);
            setTimeout(() => {
                smoothScrollTo(targetPane);
            }, 100);
        });
    });

    // Add smooth scrolling to view details buttons
    viewDetailsButtons.forEach(button => {
        button.addEventListener('click', () => {
            const targetTab = button.getAttribute('data-tab');
            const targetPane = document.getElementById(targetTab);
            setTimeout(() => {
                smoothScrollTo(targetPane);
            }, 100);
        });
    });
});

// Typing animation for rotating header points
const rotatingPoints = [
  'Turning data into stories',
  'Predicting the future with ML',
  'Visualizing insights with dashboards',
  'Automating analytics workflows',
  'Building smart recommendation systems',
  'Cleaning and wrangling messy data',
  'Deploying models to production',
  'Explaining results with clarity',
  'Experimenting with neural networks',
  'Optimizing business with data science'
];
let rotatingIndex = 0;
let typingTimeout, erasingTimeout, typingInterval;
const rotatingEl = document.getElementById('rotating-point');

function typeText(text, i = 0) {
  if (!rotatingEl) return;
  rotatingEl.textContent = text.slice(0, i);
  if (i <= text.length) {
    typingTimeout = setTimeout(() => typeText(text, i + 1), 70);
  } else {
    // Wait, then erase
    erasingTimeout = setTimeout(() => eraseText(text), 1800);
  }
}

function eraseText(text, i = text.length) {
  if (!rotatingEl) return;
  rotatingEl.textContent = text.slice(0, i);
  if (i > 0) {
    erasingTimeout = setTimeout(() => eraseText(text, i - 1), 40);
  } else {
    // Next point
    rotatingIndex = (rotatingIndex + 1) % rotatingPoints.length;
    typingTimeout = setTimeout(() => typeText(rotatingPoints[rotatingIndex]), 300);
  }
}

function startTypingRotation() {
  if (!rotatingEl) return;
  clearTimeout(typingTimeout);
  clearTimeout(erasingTimeout);
  typeText(rotatingPoints[rotatingIndex]);
}

startTypingRotation(); 