import sys

# Define the resume information
resume = {
    "about": """
    Marvin Jakobs
    Email: mkj5388@psu.edu | Mobile: +1-612-298-3926
    LinkedIn: linkedin.com/in/marvinjakobs | GitHub: github.com/OfficialMarvin
    Education: Data Sciences - College of Information Sciences and Technology, Penn State
    Location: State College, PA
    """,
    "skills": """
    Languages: Python, R, SQL, JavaScript
    Libraries: Sklearn, Matplotlib, Pandas, NumPy, Beautiful Soup, PyTorch
    Tools: Salesforce, RStudio, SQLite, Jupyter, Tableau
    Soft Skills: Teamwork, Writing, Speaking, Problem-solving
    """,
    "experience": """
    - Customer Relationship Management Intern, AmerisourceBergen (Jun 2022 - Aug 2022)
    - Community Tech Manager, Save the Martians NFT (Sep 2021 - May 2022)
    - Summer Research Assistant, College of IST, Penn State (May 2021 - Sep 2021)
    - Freelance App Developer (2018 - 2020)
    """,
    "projects": """
    - Blockchain Battleship: A decentralized game on Ethereum using Solidity and JavaScript.
    - Stock Trend Prediction: Predict stock trends using sentiment analysis on tweets.
    - Brain Tumor Classification: Machine learning models for grading gliomas.
    """,
    "contact": "Email: mkj5388@psu.edu | LinkedIn: linkedin.com/in/marvinjakobs",
    "games": {
        "Blockchain Battleship": "A game of strategy played on a decentralized platform."
    }
}

# Define commands
def ls():
    print("Available sections:")
    for key in resume:
        print(f"- {key}")

def about():
    print(resume["about"])

def skills():
    print(resume["skills"])

def experience():
    print(resume["experience"])

def projects():
    print(resume["projects"])

def contact():
    print(resume["contact"])

def ls_games():
    print("Available games:")
    for game in resume["games"]:
        print(f"- {game}")

def play(game):
    if game in resume["games"]:
        print(f"Starting the game: {game}")
        print(resume["games"][game])
    else:
        print("Game not found.")

# Main function to handle command input
def main():
    print("Welcome to Marvin Jakobs' Interactive Resume Terminal!")
    print("Type 'ls' for a list of commands.")
    
    while True:
        command = input("Enter command: ").strip().lower()
        if command == "ls":
            ls()
        elif command == "about":
            about()
        elif command == "skills":
            skills()
        elif command == "experience":
            experience()
        elif command == "projects":
            projects()
        elif command == "contact":
            contact()
        elif command == "ls games":
            ls_games()
        elif command.startswith("play "):
            game_name = command[5:]
            play(game_name)
        elif command == "quit":
            print("Exiting the terminal. Goodbye!")
            break
        else:
            print("Unknown command. Type 'ls' for a list of commands.")
document.addEventListener('DOMContentLoaded', () => {
    setupGreeting();
    setupSmoothScrolling();
    setupDetailToggles();
});

function setupGreeting() {
    const hour = new Date().getHours();
    const greeting = document.getElementById('greeting');
    if (hour < 12) {
        greeting.innerText = 'Good morning!';
    } else if (hour < 18) {
        greeting.innerText = 'Good afternoon!';
    } else {
        greeting.innerText = 'Good evening!';
    }
}

function setupSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
}

function setupDetailToggles() {
    const buttons = document.querySelectorAll('.details-button');
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const details = button.nextElementSibling;
            if (details.style.display === 'block') {
                details.style.display = 'none';
                button.innerText = 'Show Details';
            } else {
                details.style.display = 'block';
                button.innerText = 'Hide Details';
            }
        });
    });
}


if __name__ == "__main__":
    main()
