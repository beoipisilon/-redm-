const percentages = {
    heart: 0,
    shield: 0,
    gold: 0,
    water: 0,
    energy: 0
};

function updatePercentage(iconId, newValue) {
    const icon = document.getElementById(iconId);
    const percentageElement = icon.querySelector('.percentage');
    percentageElement.textContent = `${newValue}%`;

    // Add heartbeat animation
    const topBackground = icon.querySelector('.top-background');
    const bottomBackground = icon.querySelector('.bottom-background');
    topBackground.classList.add('heartbeat');
    bottomBackground.classList.add('heartbeat');

    // Remove heartbeat animation after it's done
    setTimeout(() => {
        topBackground.classList.remove('heartbeat');
        bottomBackground.classList.remove('heartbeat');
    }, 500);
}

function incrementPercentage(iconId) {
    let currentValue = percentages[iconId];
    const interval = setInterval(() => {
        if (currentValue < 100) {
            currentValue++;
            percentages[iconId] = currentValue;
            updatePercentage(iconId, currentValue);
        } else {
            clearInterval(interval);
        }
    }, 1000);
}

// Start incrementing percentages
incrementPercentage('heart');
//incrementPercentage('shield');
//incrementPercentage('gold');
//incrementPercentage('water');
//incrementPercentage('energy');
