import { useState } from "react";
import './Board.css';
function Square({value, onSquareClick}){
    // const [value, setValue] = useState(null)
    // function handleClick(){
    //     setValue('X');
    // }

    return (<button className="square" 
            onClick={onSquareClick}> {value} 
            </button>
    );
}

export default function Board()
{
    const [squares, setSquares] = useState(Array(9).fill(null));
    const [xIsNext, setIIsNext] = useState(true);
    function handleClick(i){
            if(squares[i]  || claculateWinner(squares))
            {
                return;
            }

            const nextSquares = squares.slice();
            if(xIsNext){
                nextSquares[i] = "X";
            }else{
                nextSquares[i] = "O";
            }
            
            setSquares(nextSquares);
            setIIsNext(!xIsNext);
    }

    const winner = claculateWinner(squares);
    let status; 
    if(winner){
        status = "Winner: "+ winner;
    }else{
        status = "Next player: "+ (xIsNext ? "X" : "O");
    }

    function newgame(){
        window.location.reload();
    }

    return (
        <div className = "board">
            <h2>Tic Tac Toe</h2>
            <div className="board-row">
                <ul>
                    <li>
                    <Square value = {squares[0]} onSquareClick={ () => handleClick(0)}/>
                    </li>
                    <li>
                    <Square value = {squares[1]} onSquareClick={ () => handleClick(1)}/>
                    </li>
                    <li>
                    <Square value = {squares[2]} onSquareClick={ () => handleClick(2)}/>
                    </li>
                </ul>
            </div>
            <div className="board-row">
                <ul>
                    <li>
                    <Square value = {squares[3]} onSquareClick={ () => handleClick(3)}/>
                    </li>
                    <li>
                    <Square value = {squares[4]} onSquareClick={ () => handleClick(4)}/>
                    </li>
                    <li>
                    <Square value = {squares[5]} onSquareClick={ () => handleClick(5)}/>
                    </li>
                </ul>
            </div>
            <div className="board-row">
                <ul>
                    <li>
                    <Square value = {squares[6]} onSquareClick={ () => handleClick(6)}/>
                    </li>
                    <li>
                    <Square value = {squares[7]} onSquareClick={ () => handleClick(7)}/>
                    </li>
                    <li>
                    <Square value = {squares[8]} onSquareClick={ () => handleClick(8)}/>
                    </li>
                </ul>
            </div>
            
            <div className="Status">
                <input type = "text" value = {status}/>
            </div>
            <div className = "newgame">
                <button className="new-game" onClick={newgame}> New Game</button>
            </div>
        </div>
    )
}

function claculateWinner(squares){
    const lines = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ];
    for(let i=0; i <lines.length; i++)
    {
        const [a,b,c] = lines[i];
        if(squares[a] === squares[b] && squares[b] === squares[c] && squares[a] === squares[c])
        {
            return squares[a];
        }   
    }
    return null;
}
