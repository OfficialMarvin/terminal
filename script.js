document.addEventListener('DOMContentLoaded', () => {
    const commandInput = document.getElementById('commandInput');
    const resumeSection = document.querySelector('.resume');

    commandInput.addEventListener('keydown', function(event) {
        if (event.key === 'Enter') {
            handleCommand(this.value);
            this.value = ''; // Clear input after processing
        }
    });

    function handleCommand(command) {
        command = command.trim().toLowerCase();

        if (command === 'help') {
            displayHelp();
        } else if (command === 'game') {
            startGame();
        } else {
            displayError(command);
        }
    }

    function displayHelp() {
        resumeSection.innerHTML = `
            <p>Available commands:</p>
            <ul>
                <li>'help' - Displays this help message.</li>
                <li>'game' - Starts an embedded game.</li>
            </ul>
        `;
    }

    function startGame() {
        resumeSection.innerHTML = `
            <p>Game starting... (This is a placeholder. Implement game logic here.)</p>
        `;
        // Initialize game logic or redirect to game setup here
    }

    function displayError(command) {
        resumeSection.innerHTML = `
            <p>Error: '${command}' is not recognized as a valid command.</p>
            <p>Type 'help' for a list of available commands.</p>
        `;
    }
});