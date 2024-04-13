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

async function executeCommand(command) {
  const output = document.createElement('div');
  output.innerHTML = `<span class="prompt">$</span> ${command}`;
  terminalOutput.appendChild(output);

  switch (command) {
    case 'hello':
      printMessage('Hello! Welcome to my interactive resume.');
      break;
    case 'ls':
      printMessage('resume.txt projects games');
      break;
    case 'cat resume.txt':
      printMessage('Marvin Jakobs');
      printMessage('Email: mkj5388@psu.edu');
      printMessage('Mobile: +1-612-298-3926');
      printMessage('LinkedIn: linkedin.com/in/marvinjakobs');
      printMessage('Github: github.com/OfficialMarvin');
      printMessage('Education:');
      printMessage('• The Pennsylvania State University');
      printMessage('  Data Sciences - College of Information Sciences and Technology');
      printMessage('  Semester Abroad - Rochester Institute of Technology, Croatia');
      printMessage('  Courses: Data Science 1-4, Computer Science 1-2, Calculus 1-2, Matrices 2, Discrete Mathematics 2, Statistics 1-3, Data Integration, and Machine Learning');
      printMessage('Skills Summary:');
      printMessage('• Languages: Python, R, SQL, JavaScript');
      printMessage('• Libraries: Sklearn, Matplotlib, Pandas, NumPy, Beautiful Soup, Git, PyTorch');
      printMessage('• Tools: Salesforce, RStudio, SQLite, Jupyter, Tableau');
      printMessage('• Soft Skills: Teamwork, Writing, Speaking, Problem-solving');
      break;
    case 'cd projects':
      printMessage('Opening projects...');
      printMessage('• Blockchain Battleship: Developed a decentralized game on Ethereum with Solidity and JavaScript. Features included real-time messaging and gameplay mechanics, with a focus on smart contract security and frontend interaction via Web3.js.');
      printMessage('• Stock Trend Prediction: Utilized sentiment analysis on tweets and historical stock data to predict stock trends with a model accuracy of 51%. Implemented data processing and machine learning models in Databricks, employing VADER for sentiment analysis.');
      printMessage('• Brain Tumor Classification: Developed machine learning models for grading gliomas using imaging and genomic data, emphasizing algorithm selection and model accuracy. Used datasets from UC Irvine and TCGA, tested SVM, Random Forest, and neural networks.');
      break;
    case 'ls games':
      printMessage(Object.keys(games).join(' '));
      break;
    case 'play':
      printMessage('Please specify a game to play, e.g., "play PONG".');
      break;
    case command.startsWith('play '):
      const gameName = command.slice(5).toUpperCase();
      await playGame(gameName);
      break;
    case 'help':
    case '?':
      printMessage('Available commands:');
      printMessage('- hello: Display a welcome message');
      printMessage('- ls: List available files and directories');
      printMessage('- cat resume.txt: Open the resume file');
      printMessage('- cd projects: Open the projects directory');
      printMessage('- ls games: List available games');
      printMessage('- play <game>: Play a specific game');
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

// Function to load and play a Chip-8 game
async function playGame(gameName) {
  const gameUrl = games[gameName];
  if (!gameUrl) {
    printMessage(`Game "${gameName}" not found.`);
    return;
  }

  gameContainer.innerHTML = '<canvas></canvas>';
  gameContainer.style.display = 'flex';

  const chip8 = new Chip8();
  await chip8.loadRom(gameUrl);
  chip8.start();

  document.addEventListener('keydown', (event) => {
    chip8.handleInput(event.key);
  });

  gameContainer.addEventListener('click', () => {
    gameContainer.style.display = 'none';
    chip8.stop();
  });
}

// Chip-8 emulator implementation goes here

// Display initial welcome message
printMessage('Welcome to the interactive resume of Marvin Jakobs!');
printMessage('Type "help" or "?" to see available commands.');
