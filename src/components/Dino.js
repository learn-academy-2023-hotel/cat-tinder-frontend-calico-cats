
import React, { useEffect, useRef, useState } from "react"
import "./Dino.css"

const Dino = () => {
    const dinoRef = useRef()
    const cactusRef = useRef()
    const [score, setScore] = useState(0)
    const [isGameOver, setIsGameOver] = useState(false)

    const jump = () => {
    if (!!dinoRef.current && dinoRef.current.classList !== "jump") {
        dinoRef.current.classList.add("jump")
        setTimeout(function () {
        dinoRef.current.classList.remove("jump")
        }, 300)
    }
    }

    useEffect(() => {
    if (!isGameOver) {
        const gameInterval = setInterval(function () {
        const dinoTop = parseInt(
            getComputedStyle(dinoRef.current).getPropertyValue("top")
        )
        let cactusLeft = parseInt(
            getComputedStyle(cactusRef.current).getPropertyValue("left")
        )

        if (cactusLeft < 40 && cactusLeft > 0 && dinoTop >= 140) {
            setIsGameOver(true)
            alert(`Game over! Your score: ${score}`)
        } else {
            setScore((prevScore) => prevScore + 1)
        }
        }, 10)

        return () => clearInterval(gameInterval);
    }
    }, [isGameOver, score])

    useEffect(() => {
    document.addEventListener("keydown", jump)
    return () => document.removeEventListener("keydown", jump)
    }, [])

    return (
    <div className="game">
        Jump with the space bar or up arrow <p>Score: {score}</p>
        <div id="dino" ref={dinoRef}></div>
        <div id="cactus" ref={cactusRef}></div>
    </div>
    )
}

export default Dino;