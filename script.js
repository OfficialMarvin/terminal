// Define the resume information
let resume = {
    "about": `
    Marvin Jakobs
    Email: mkj5388@psu.edu | Mobile: +1-612-298-3926
    LinkedIn: linkedin.com/in/marvinjakobs | GitHub: github.com/OfficialMarvin
    Education: Data Sciences - College of Information Sciences and Technology, Penn State
    Location: State College, PA
    `,
    "skills": `
    Languages: Python, R, SQL, JavaScript
    Libraries: Sklearn, Matplotlib, Pandas, NumPy, Beautiful Soup, PyTorch
    Tools: Salesforce, RStudio, SQLite, Jupyter, Tableau
    Soft Skills: Teamwork, Writing, Speaking, Problem-solving
    `,
    "experience": `
    - Customer Relationship Management Intern, AmerisourceBergen (Jun 2022 - Aug 2022)
    - Community Tech Manager, Save the Martians NFT (Sep 2021 - May 2022)
    - Summer Research Assistant, College of IST, Penn State (May 2021 - Sep 2021)
    - Freelance App Developer (2018 - 2020)
    `,
    "projects": `
    - Blockchain Battleship: A decentralized game on Ethereum using Solidity and JavaScript.
    - Stock Trend Prediction: Predict stock trends using sentiment analysis on tweets.
    - Brain Tumor Classification: Machine learning models for grading gliomas.
    `,
    "games": {
        "game1": "Game 1 description",
        "game2": "Game 2 description"
    }
};

// Center the terminal window
window.onload = function() {
    let terminal = document.getElementById('terminal');
    let inputLine = document.getElementById('inputLine');
    inputLine.addEventListener('keydown', function(event) {
        if (event.key === 'Enter') {
            event.preventDefault();
            let command = inputLine.value;
            inputLine.value = '';
            terminal.textContent += '> ' + command + '\n';
            handleCommand(command);
        }
    });
    function handleCommand(command) {
        if (command in resume) {
            terminal.textContent += resume[command] + '\n';
        } else if (command.startsWith('play ')) {
            let game = command.slice(5);
            if (game in resume["games"]) {
                terminal.textContent += `Starting the game: ${game}\n`;
                terminal.textContent += resume["games"][game] + '\n';
            } else {
                terminal.textContent += 'Game not found: ' + game + '\n';
            }
        } else {
            terminal.textContent += 'Command not found: ' + command + '\n';
        }
        terminal.scrollTop = terminal.scrollHeight;
    }
}