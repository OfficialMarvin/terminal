const terminalOutput = document.querySelector('.terminal-output');
const commandInput = document.getElementById('command-input');

function executeCommand(command) {
    const output = document.createElement('div');
    output.innerHTML = `<span class="prompt">$</span> ${command}`;
    terminalOutput.appendChild(output);

    switch (command) {
        case 'hello':
            printMessage('Hello! Welcome to my interactive resume.');
            break;
        case 'ls':
            printMessage('resume.txt projects');
            break;
        case 'cd resume.txt':
            printMessage('Opening resume...');
            // Display resume content here
            break;
        case 'cd projects':
            printMessage('Opening projects...');
            // Display projects here
            break;
        case 'help':
        case '?':
            printMessage('Available commands:');
            printMessage('- hello: Display a welcome message');
            printMessage('- ls: List available files and directories');
            printMessage('- cd resume.txt: Open the resume file');
            printMessage('- cd projects: Open the projects directory');
            printMessage('- help or ?: Show available commands');
            break;
        default:
            printMessage(`Command not found: ${command}`);
    }

    commandInput.value = '';
    terminalOutput.scrollTop = terminalOutput.scrollHeight;
}

function printMessage(message) {
    const output = document.createElement('div');
    output.textContent = message;
    terminalOutput.appendChild(output);
}

commandInput.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        executeCommand(commandInput.value.trim());
    }
});

// Display initial welcome message
printMessage('Welcome to the interactive resume of Your Name!');
printMessage('Type "help" or "?" to see available commands.');
