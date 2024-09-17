function toggleSkill(element, skillText) {
    // Check if the innerText matches the toggled state
    if (element.innerText === skillText) {
        element.innerText = element.getAttribute('data-original-text');
        element.style.backgroundColor = '#363b4e'; // Original background color
        element.style.color = '#c4bbf0'; // Original text color
    } else {
        // Store the original text in a custom attribute
        element.setAttribute('data-original-text', element.innerText);
        element.innerText = skillText;
        element.style.backgroundColor = '#4f3b78'; // New background color
        element.style.color = 'white'; // New text color
    }
}

// Add click event listeners for each skill
document.getElementById('skill1').addEventListener('click', function() {
    toggleSkill(this, 'HTML5');
});

document.getElementById('skill2').addEventListener('click', function() {
    toggleSkill(this, 'CSS3');
});

document.getElementById('skill3').addEventListener('click', function() {
    toggleSkill(this, 'JavaScript');
});

document.getElementById('skill4').addEventListener('click', function() {
    toggleSkill(this, 'TypeScript');
});

document.getElementById('skill5').addEventListener('click', function() {
    toggleSkill(this, 'AngularJS');
});

