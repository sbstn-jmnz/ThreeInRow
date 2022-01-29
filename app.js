const GameState = [[0,0,0],
                   [0,0,0],
                   [0,0,0]]

const ThreeInRow = {
  cells: null,

  humanPlay(){
    this.innerText = 'X'
    let cords = this.getAttribute('data-cel').split(':')
    ThreeInRow.updateState(cords ,'X')
    this.removeEventListener('click',ThreeInRow.humanPlay)
    ThreeInRow.cells.remove
    ThreeInRow.checkWin()
    ThreeInRow.machinePlay(ThreeInRow.cells)
  },

  machinePlay(){
    // Find a non played cell and mark it with 'O'
      let cel = ThreeInRow.findNotPlayedCel()
      cel.innerText = 'O'
      let cords = cel.getAttribute('data-cel').split(':')
      ThreeInRow.updateState(cords ,'O')
      cel.removeEventListener('click',ThreeInRow.humanPlay)
      ThreeInRow.checkWin()
  },

  findNotPlayedCel(){
    let randomCel = Math.floor(Math.random() * ThreeInRow.cells.length);
    if(ThreeInRow.cells[randomCel].childNodes.length === 0){
      return ThreeInRow.cells[randomCel]
    }else{
      ThreeInRow.checkWin()
      ThreeInRow.findNotPlayedCel()
    }
  },

  updateState(cords,sign){
    GameState[cords[0]][cords[1]] = sign
  },

  //TODO: Complete the function below
  checkWin(){},

  init(){
    // Select all cells and add click listener
    this.cells = Array.from(document.querySelectorAll(".col"))
    this.cells.forEach((cel)=> cel.addEventListener('click', this.humanPlay))
    
    // If random_boolean is bigger than 0,5 the machine plays first
    const random_boolean = Math.random() < 0.5;
    if(random_boolean) this.machinePlay() 
  }
}

document.addEventListener('DOMContentLoaded', () => ThreeInRow.init())