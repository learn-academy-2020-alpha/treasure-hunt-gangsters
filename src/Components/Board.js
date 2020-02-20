import React, {Component} from 'react';
import Square from "./Square"
import './Component.css'

class Board extends Component {
    constructor(props){
        super(props)
        this.state = {
            board: ["?", "?", "?", "?", "?", "?", "?", "?", "?"],
            counter: 4,
            treasureIndex: -1,
            gameState: false
        }
    }
    handleLocation = (index) => {
        if(this.state.gameState){
            document.getElementById(index).innerHTML = (this.state.board[index]);
            let newCounter = this.state.counter - 1;
            if(newCounter >= 0) {
                this.setState({counter: newCounter})
            }
            if(index=== this.state.treasureIndex){
                alert("You Win!!!")
                this.setState({gameState: false})
            }
            if(newCounter === -1){
                alert("You Lose")
                this.setState({gameState: false})
            }
        }
    }
    startGame = () => {
        for(let i = 0; i < 9; i++){
            document.getElementById(i).innerHTML = "?"
        }
        let newTreasureIndex = Math.floor(Math.random() * 8)
        let newBoard = [0, 0, 0, 0, 0, 0, 0, 0, 0]
        for (let i=0; i<newBoard.length; i++) {
            if ( i === newTreasureIndex ) {
                newBoard[i] = "💰"
            }
            else{
                    newBoard[i] = "🌴"
            }
        }
        this.setState({board: newBoard, treasureIndex: newTreasureIndex, counter: 4, gameState: true})
    }
    render(){
        let square = this.state.board.map((value, index) => {
          return (
              <Square
                  handleLocation={ this.handleLocation }
                  index={ index }
                  value={ value }
              />

          )
        }
    )

        return(
        <>
        <div id="board">
            { square }
            <button onClick={this.startGame}> Start </button>
            <p> Counter: {this.state.counter} </p>
        </div>
        </>
        );
    }
}











export default Board
