const terminalOutput = document.querySelector('.terminal-output');
const commandInput = document.getElementById('command-input');

async function executeCommand(command) {
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
        case 'ai':
            printMessage('Activating Hugging Face AI...');
            const response = await fetch('https://api-inference.huggingface.co/models/gpt2', {
                method: 'POST',
                headers: {
                    'Authorization': 'Bearer YOUR_API_TOKEN',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    inputs: 'Hello, how are you?',
                    parameters: {
                        max_length: 50
                    }
                })
            });
            const data = await response.json();
            printMessage(data[0].generated_text);
            break;
        case 'help':
        case '?':
            printMessage('Available commands:');
            printMessage('- hello: Display a welcome message');
            printMessage('- ls: List available files and directories');
            printMessage('- cat resume.txt: Open the resume file');
            printMessage('- cd projects: Open the projects directory');
            printMessage('- ai: Activate Hugging Face AI');
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
printMessage('Welcome to the interactive resume of Marvin Jakobs!');
printMessage('Type "help" or "?" to see available commands.');
