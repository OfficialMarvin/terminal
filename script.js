const terminalOutput = document.querySelector('.terminal-output');
const commandInput = document.getElementById('command-input');

const resume = `
Marvin Jakobs
LinkedIn: linkedin.com/in/marvinjakobs Github: github.com/OfficialMarvin

Education
• The Pennsylvania State University
  Data Sciences - College of Information Sciences and Technology
  Semester Abroad - Rochester Institute of Technology, Croatia
  Courses: Data Science 1-4, Computer Science 1-2, Calculus 1-2, Matrices 2, Discrete Mathematics 2, Statistics 1-3, Data Integration, and Machine Learning

Skills Summary
• Languages: Python, R, SQL, JavaScript
• Libraries: Sklearn, Matplotlib, Pandas, NumPy, Beautiful Soup, Git, PyTorch
• Tools: Salesforce, RStudio, SQLite, Jupyter, Tableau
• Soft Skills: Teamwork, Writing, Speaking, Problem-solving

Employment History
• AmerisourceBergen
  Customer Relationship Management Intern
  ◦ Worked with the IT team to export and document metadata and UI/UX for multiple permission sets in production. Gave suggestions for field and flow updates. Became proficient in Salesforce and used SQL and Excel.

• Save the Martians NFT
  Remote Community Tech Manager
  ◦ Was responsible for tasks such as automating and maintaining bots, providing cross-chain support, web development, creating multi-media, etc. Worked with people globally to create a NFT with fun utility.

• College of IST, Penn State
  Remote Summer Research Assistance
  ◦ Researched anomalies in global wildlife trade and illegal seizure data using Python tools. Cleaned and spatially clustered data to recognize patterns and modus operandi of poachers/illegal wildlife traders.

• App Developer
  Remote Freelance
  ◦ Developed and sold both iOS and Android apps. Used Unity with C sharp for Amazon, and XCode with C++ for iOS. Auctioned the rights to several apps on Flippa, used Google AdSense, and ran Instagram ads to market.

Publications
• An Analysis of Wildlife Seizure Data Distributions using Spatial Clustering:
  Presented at Tanzania Wildlife Research Institution Conference, December 2021 (Co-authored with Faizan, Kalidindi, Mitra, and Kinyua)

Top Projects
• Blockchain Battleship: Developed a decentralized game on Ethereum with Solidity and JavaScript. Features included real-time messaging and gameplay mechanics, with a focus on smart contract security and frontend interaction via Web3.js.

• Stock Trend Prediction: Utilized sentiment analysis on tweets and historical stock data to predict stock trends with a model accuracy of 51%. Implemented data processing and machine learning models in Databricks, employing VADER for sentiment analysis.

• Brain Tumor Classification: Developed machine learning models for grading gliomas using imaging and genomic data, emphasizing algorithm selection and model accuracy. Used datasets from UC Irvine and TCGA, tested SVM, Random Forest, and neural networks.

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
      printResume();
      break;
    case 'ls projects':
      printProjects();
      break;
    default:
      printMessage(`Command not found: ${command}`);
  }

  terminalOutput.scrollTop = terminalOutput.scrollHeight;
  commandInput.value = '';
}

commandInput.addEventListener('keydown', async (event) => {
  if (event.key === 'Enter') {
    const command = commandInput.value.trim();
    await executeCommand(command);
  }
});
document.addEventListener('DOMContentLoaded', function() {
    const terminalOutput = document.querySelector('.terminal-output');
    const commandInput = document.querySelector('#command-input');

    commandInput.addEventListener('keydown', function(event) {
        if (event.key === 'Enter') {
            executeCommand(this.value);
            this.value = '';
        }
    });

    function executeCommand(command) {
        const normalizedCommand = command.trim().toLowerCase();

        switch (normalizedCommand) {
            case 'play snake':
                playSnake();
                break;
            case 'ls':
                terminalOutput.textContent += '\nAvailable Games: Snake\n';
                break;
            default:
                terminalOutput.textContent += `\nCommand not found: ${command}`;
        }
        terminalOutput.scrollTop = terminalOutput.scrollHeight;
    }

    function playSnake() {
        terminalOutput.textContent += '\nLaunching Snake... (simplified version)\n';
        // Implement a simple version of Snake here or call another function
        terminalOutput.textContent += '\nGame over! Your score: 10\n';
    }
});
