// Chip-8 Games
const games = {
  'PONG': 'https://this.st/pong.ch8',
  'TETRIS': 'https://this.st/tetris.ch8',
  'SPACE INVADERS': 'https://this.st/invaders.ch8',
  'BRIX': 'https://this.st/brix.ch8',
  'MAZE': 'https://this.st/maze.ch8',
  'MISSILE': 'https://this.st/missile.ch8',
  'GUESS': 'https://this.st/guess.ch8',
  'CONNECT 4': 'https://this.st/connect4.ch8',
  'PONG 2': 'https://this.st/pong2.ch8',
  'TANK': 'https://this.st/tank.ch8',
  'UFO': 'https://this.st/ufo.ch8',
  'WIPEOUT': 'https://this.st/wipeout.ch8',
  'ASTEROIDS': 'https://this.st/asteroids.ch8',
  'BREAKOUT': 'https://this.st/breakout.ch8',
  'SERIES': 'https://this.st/series.ch8',
  'HIDDEN': 'https://this.st/hidden.ch8',
  'MISSILE COMMAND': 'https://this.st/missile_command.ch8',
  'DEFENDER': 'https://this.st/defender.ch8',
  'VBRIX': 'https://this.st/vbrix.ch8',
  'CAVE': 'https://this.st/cave.ch8',
  'TANK WAR': 'https://this.st/tank_war.ch8',
  'INVADERS': 'https://this.st/invaders.ch8',
  'COUNTDOWN': 'https://this.st/countdown.ch8',
  'MERLIN': 'https://this.st/merlin.ch8',
  'KALEID': 'https://this.st/kaleid.ch8',
  'TRON': 'https://this.st/tron.ch8',
  'MISSILE COMMAND 2': 'https://this.st/missile_command_2.ch8',
  'BLITZ': 'https://this.st/blitz.ch8',
  'FLOOD': 'https://this.st/flood.ch8',
  'GUNFIGHT': 'https://this.st/gunfight.ch8',
  'KEYPAD': 'https://this.st/keypad.ch8',
  'SPADE': 'https://this.st/spade.ch8',
  'VERS': 'https://this.st/vers.ch8',
  'ANIMAL RACE': 'https://this.st/animal_race.ch8',
  'SPACEFIGHT': 'https://this.st/spacefight.ch8',
  'OXXO': 'https://this.st/oxxo.ch8',
  'BLINKEN': 'https://this.st/blinken.ch8'
};

// Function to load and play a Chip-8 game
async function playGame(gameName) {
  const gameUrl = games[gameName];
  if (!gameUrl) {
    console.error(`Game "${gameName}" not found.`);
    return;
  }

  try {
    const response = await fetch(gameUrl);
    const romBuffer = new RomBuffer(await response.arrayBuffer());
    const cpu = new CPU(new MockCpuInterface());
    cpu.load(romBuffer);

    while (true) {
      cpu.step();
    }
  } catch (error) {
    console.error(`Error playing game "${gameName}": ${error}`);
  }
}

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
            printMessage('resume.txt, projects, games');
            break;
        case 'cat resume.txt':
            printMessage('Marvin Jakobs');
            printMessage('Email: mkj5388@psu.edu');
            printMessage('
