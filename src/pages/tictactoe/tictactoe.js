import React from 'react'
import ProjectCSS from "./proj.module.css"

const GameContext = React.createContext({
    over: false,
    turn: true
})

class Tictactoe extends React.Component {
    constructor(props) {
        super(props)
        this.changeTurn = this.changeTurn.bind(this)
        this.checkGameOver = this.checkGameOver.bind(this)
        this.resetGame = this.resetGame.bind(this)
        this.state = {
            over: false,
            turn: "X",
            toggleTurn: this.changeTurn,
            gameData: [
                ["", "", ""],
                ["", "", ""],
                ["", "", ""],
            ]
        }

        this.message = ""
    }

    resetGame() {
        let newState = {
            over: false,
            turn: "X",
            toggleTurn: this.changeTurn,
            gameData: [
                ["", "", ""],
                ["", "", ""],
                ["", "", ""],
            ]
        }
        this.message = ""
        this.setState(newState)
    }

    changeTurn() {
        let newState = {
            over: false,
            turn: "X",
            toggleTurn: this.changeTurn,
            gameData: this.state.gameData
        }

        const gameState = this.checkGameOver()
        if (gameState != "") {
            newState.over = true
            if (gameState != "done") {
                this.message = "The winner is " + gameState + "!"
            } else {
                this.message = "Cat's game! :("
            }
        }
        if (this.checkGameOver()) {
            newState.over = true
        }

        if (this.state.turn == "X") {
            newState.turn = "O"
            this.setState(newState)
        } else {
            newState.turn = "X"
            this.setState(newState)
        }
    }

    checkGameOver() {
        const patterns = [
            [[0, 0], [0, 1], [0, 2]],
            [[1, 0], [1, 1], [1, 2]],
            [[2, 0], [2, 1], [2, 2]],
            [[0, 0], [1, 0], [2, 0]],
            [[0, 1], [1, 1], [2, 1]],
            [[0, 2], [1, 2], [2, 2]],
            [[0, 0], [1, 1], [2, 2]],
            [[0, 2], [1, 1], [2, 0]],
        ]

        let winner = ""
        patterns.every(arr => {
            if (this.state.gameData[arr[0][0]][arr[0][1]] == "" ||
                this.state.gameData[arr[1][0]][arr[1][1]] == "" ||
                this.state.gameData[arr[2][0]][arr[2][1]] == "") {
                return true
            }

            if (this.state.gameData[arr[0][0]][arr[0][1]] == this.state.gameData[arr[1][0]][arr[1][1]] &&
                this.state.gameData[arr[0][0]][arr[0][1]] == this.state.gameData[arr[2][0]][arr[2][1]] &&
                this.state.gameData[arr[1][0]][arr[1][1]] == this.state.gameData[arr[2][0]][arr[2][1]]) {
                winner = this.state.gameData[arr[0][0]][arr[0][1]]
                return false
            }
            return true
        })
        let over = this.state.gameData.every(row => {
            return row.every(element => {
                return element != ""
            })
        })
        if (winner != "" || !over) {
            return winner
        }
        else {
            return "done"
        }
    }

    render() {
        return (
            <div className={ProjectCSS.Container}>
                <h1 className={ProjectCSS.Title}>Here is a simple Tic-Tac-Toe game I made using react!</h1>
                <h1 className={ProjectCSS.SubHeading}>{this.message}</h1>
                <div className={ProjectCSS.board}>
                    <GameContext.Provider value={this.state}>
                        <Cell row="1" col="1" />
                        <Cell row="1" col="2" color="blue" />
                        <Cell row="1" col="3" />
                        <Cell row="2" col="1" />
                        <Cell row="2" col="2" />
                        <Cell row="2" col="3" />
                        <Cell row="3" col="1" />
                        <Cell row="3" col="2" />
                        <Cell row="3" col="3" />
                    </GameContext.Provider>
                </div>
                <button className={ProjectCSS.Button} onClick={this.resetGame}>Reset Game</button>
                <h1 className={ProjectCSS.desc}>
                    This game has it's own React component in my website, you can look at the source code on my {" "}
                    <a href="https://github.com/akilpath/akilpath.github.io" target="_blank" rel="noopener noreferrer">GitHub!</a>
                </h1>
            </div>
        )
    }
}

class Cell extends React.Component {
    static contextType = GameContext

    constructor(props) {
        super(props)
        this.row = props.row
        this.col = props.col
        this.fillCell = this.fillCell.bind(this)
    }

    render() {
        return (
            <div style={{ gridRow: this.row, gridColumn: this.col }} className={ProjectCSS.cell} onClick={this.fillCell}>
                <p className={ProjectCSS.cellText}>{this.context.gameData[this.row - 1][this.col - 1]}</p>
            </div>
        )
    }

    fillCell() {
        if (this.context.gameData[this.row - 1][this.col - 1] != "" || this.context.over) {
            return
        }
        this.context.gameData[this.row - 1][this.col - 1] = this.context.turn
        this.context.toggleTurn()
    }
}

export default Tictactoe;