
import classes from "./Game.module.css"
import {useState} from "react";


export function Game() {

    const [game, setGame] = useState(0);
    const [gameLayout, setGameLayout] = useState([[0,1,0],[1,1,1],[0,0,1]])


    function handleClick (row, column){
        console.log(row,column)
        setGameLayout([])
    }
    return(
        <>
            <div className={classes.layout}>
                <div>
                    {gameLayout[0]?.map((layout, index) => {
                        return (
                            <span onClick={() => handleClick(0, index)} key={'0' + index}>{layout}</span>
                        )
                    })}
                </div>
                <div>
                    {gameLayout[1]?.map((layout, index) => {
                        return (
                            <span onClick={() => handleClick(1, index)} key={'1' + index}>{layout}</span>
                        )
                    })}
                </div>
                <div>
                    {gameLayout[2]?.map((layout, index) => {
                        return (
                            <span onClick={() => handleClick(2, index)} key={'2' + index}>{layout}</span>
                        )
                    })}
                </div>
            </div>

            <h3>Ходит игрок</h3>
        </>

    )
}