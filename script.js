document.addEventListener('DOMContentLoaded', function() {
    const commandInput = document.getElementById('commandInput');
    const resumeSection = document.querySelector('.resume');

    commandInput.addEventListener('keydown', function(event) {
        if (event.key === 'Enter') {
            handleCommand(this.value);
            this.value = ''; // Clear the input after command execution
        }
    });

    function handleCommand(command) {
        command = command.trim().toLowerCase();
        const args = command.split(' ');
        const cmd = args[0];

        switch(cmd) {
            case 'help':
                displayHelp();
                break;
            case 'game':
                startGame();
                break;
            case 'ls':
                listDirectory();
                break;
            default:
                displayError(command);
                break;
        }
    }

    function displayHelp() {
        resumeSection.innerHTML = `
            <p>Available commands:</p>
            <ul>
                <li>'help' - Displays this help message.</li>
                <li>'game' - Starts an embedded game.</li>
                <li>'ls' - Lists files in the directory.</li>
            </ul>
        `;
    }

    function startGame() {
        resumeSection.innerHTML = '<p>Game starting... (This is a placeholder. Implement game logic here.)</p>';
    }

    function listDirectory() {
        resumeSection.innerHTML = `
            <p>Listing directory contents:</p>
            <ul>
                <li>resume.txt</li>
                <li>portfolio.html</li>
                <li>contact_info.txt</li>
            </ul>
        `;
    }

    function displayError(command) {
        resumeSection.innerHTML = `<p>Error: '${command}' is not recognized as a valid command.</p><p>Type 'help' for a list of available commands.</p>`;
    }
});