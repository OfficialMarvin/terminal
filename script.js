const terminalOutput = document.querySelector('.terminal-output');
const commandInput = document.getElementById('command-input');
const gameContainer = document.getElementById('game-container');

// Chip-8 Games
const games = {
  'PONG': 'https://this.st/pong.ch8',
  'TETRIS': 'https://this.st/tetris.ch8',
  'SPACE INVADERS': 'https://this.st/invaders.ch8',
  'BRIX': 'https://this.st/brix.ch8',
  // Add more games here
};

const resume = `
Marvin Jakobs
LinkedIn: linkedin.com/in/marvinjakobs
Github: github.com/OfficialMarvin
Education:
• The Pennsylvania State University
  Data Sciences - College of Information Sciences and Technology
  Semester Abroad - Rochester Institute of Technology, Croatia
  Courses: Data Science 1-4, Computer Science 1-2, Calculus 1-2, Matrices 2, Discrete Mathematics 2, Statistics 1-3, Data Integration, and Machine Learning
Skills Summary:
• Languages: Python, R, SQL, JavaScript
• Libraries: Sklearn, Matplotlib, Pandas, NumPy, Beautiful Soup, Git, PyTorch
• Tools: Salesforce, RStudio, SQLite, Jupyter, Tableau
• Soft Skills: Teamwork, Writing, Speaking, Problem-solving
Employment History:
• AmerisourceBergen
  Customer Relationship Management Intern
  ◦ Worked with the IT team to export and document metadata and UI/UX ...
• Save the Martians NFT
  Remote Community Tech Manager
  ◦ Was responsible for tasks such as automating ...
• College of IST, Penn State
  Remote Summer Research Assistance
  ◦ Researched anomalies ...
• App Developer
  Remote Freelance
  ◦ Developed and sold both iOS and Android apps ...
Publications:
• An Analysis of Wildlife Seizure Data Distributions using Spatial Clustering ...
Top Projects:
• Blockchain Battleship
• Stock Trend Prediction
• Brain Tumor Classification
Contact:
- Email: mkj5388@psu.edu
- Mobile: +1-612-298-3926
- Location: State College, PA
`;

const projects = [
  {
    name: 'Blockchain Battleship',
    description: 'Developed a decentralized game on Ethereum with Solidity and JavaScript. Features included real-time messaging and gameplay mechanics, with a focus on smart contract security and frontend interaction via Web3.js.',
    technologies: ['Ethereum', 'Solidity', 'JavaScript', 'Web3.js'],
    repository: 'https://github.com/OfficialMarvin/blockchain-battleship'
  },
  {
    name: 'Stock Trend Prediction',
    description: 'Utilized sentiment analysis on tweets and historical stock data to predict stock trends with a model accuracy of 51%. Implemented data processing and machine learning models in Databricks, employing VADER for sentiment analysis.',
    technologies: ['Python', 'Databricks', 'VADER', 'Machine Learning'],
    repository: 'https://github.com/OfficialMarvin/stock-trend-prediction'
  },
  {
    name: 'Brain Tumor Classification',
    description: 'Developed machine learning models for grading gliomas using imaging and genomic data, emphasizing algorithm selection and model accuracy. Used datasets from UC Irvine and TCGA, tested SVM, Random Forest, and neural networks.',
    technologies: ['Python', 'Machine Learning', 'SVM', 'Random Forest', 'Neural Networks'],
    repository: 'https://github.com/OfficialMarvin/brain-tumor-classification'
  }
];

function printMessage(message) {
  const output = document.createElement('div');
  output.textContent = message;
  terminalOutput.appendChild(output);
  terminalOutput.scrollTop = terminalOutput.scrollHeight;
}

function printResume() {
  printMessage(resume);
}

function printProjects() {
  projects.forEach(project => {
    printMessage(`${project.name}: ${project.description}`);
    printMessage(`Technologies: ${project.technologies.join(', ')}`);
    printMessage(`Repository: ${project.repository}`);
    printMessage('');
  });
}

async function executeCommand(command) {
  switch (command) {
    case 'resume.txt':
      printResume();
      break;
    case 'projects':
      printProjects();
      break;
    case 'ls games':
      printMessage(Object.keys(games).join(' '));
      break;
    case command.startsWith('play '):
      const gameName = command.slice(5).toUpperCase();
      if (games[gameName]) {
        // playGame(gameName); // Uncomment and define this function if gameplaying is intended.
      } else {
        printMessage('Game not found. Try "ls games" to see available games.');
      }
      break;
    default:
      printMessage('Unknown command. Try "resume.txt", "projects", or "ls games".');
  }
}

commandInput.addEventListener('keydown', async (event) => {
  if (event.key === 'Enter') {
    const command = commandInput.value.trim();
    commandInput.value = '';  // Clear the input after processing
    await executeCommand(command);
  }
});
