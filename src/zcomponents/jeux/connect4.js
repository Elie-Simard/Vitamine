import React, { useState } from 'react';
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, Typography } from '@mui/material';

//components qui permet de jouer au jeu de connect4

const ROWS = 6;
const COLS = 7;
const PLAYER1_COLOR = '#FF0000'; // Red
const PLAYER2_COLOR = '#FFFF00'; // Yellow

const Connect4 = () => {
    const [currentPlayer, setCurrentPlayer] = useState(1);
    const [board, setBoard] = useState(Array.from({ length: ROWS }, () => Array.from({ length: COLS }, () => 0)));
    const [winner, setWinner] = useState(null);
    const [openDialog, setOpenDialog] = useState(false);
    const [winnerMessage, setWinnerMessage] = useState('');

    const handleDropDisc = (col) => {
        if (winner) return;
        const row = getLowestEmptyRow(col);
        if (row === -1) return;
        const newBoard = [...board];
        newBoard[row][col] = currentPlayer;
        setBoard(newBoard);
        if (checkForWin(row, col)) {
            const winner = currentPlayer === 1 ? 'Rouge' : 'Jaune';
            setWinner(winner);
            setWinnerMessage(`Joueur ${winner} a gagné!`);
            setOpenDialog(true);
        } else if (checkForDraw()) {
            setWinnerMessage("C'est un match nul !");
            setOpenDialog(true);
        } else {
            setCurrentPlayer(currentPlayer === 1 ? 2 : 1);
        }
    };

    const getLowestEmptyRow = (col) => {
        for (let i = ROWS - 1; i >= 0; i--) {
            if (board[i][col] === 0) {
                return i;
            }
        }
        return -1;
    };

    const checkForWin = (row, col) => {
        const directions = [
            [0, 1], // horizontal
            [1, 0], // vertical
            [1, 1], // diagonal (bottom-left to top-right)
            [-1, 1], // diagonal (top-left to bottom-right)
        ];

        for (const [dx, dy] of directions) {
            let count = 1;
            for (let i = 1; i <= 3; i++) {
                const newRow = row + i * dx;
                const newCol = col + i * dy;
                if (
                    newRow >= 0 &&
                    newRow < ROWS &&
                    newCol >= 0 &&
                    newCol < COLS &&
                    board[newRow][newCol] === currentPlayer
                ) {
                    count++;
                } else {
                    break;
                }
            }
            for (let i = 1; i <= 3; i++) {
                const newRow = row - i * dx;
                const newCol = col - i * dy;
                if (
                    newRow >= 0 &&
                    newRow < ROWS &&
                    newCol >= 0 &&
                    newCol < COLS &&
                    board[newRow][newCol] === currentPlayer
                ) {
                    count++;
                } else {
                    break;
                }
            }
            if (count >= 4) {
                return true;
            }
        }
        return false;
    };

    const checkForDraw = () => {
        for (let col = 0; col < COLS; col++) {
            if (getLowestEmptyRow(col) !== -1) {
                return false;
            }
        }
        return true;
    };

    const resetGame = () => {
        setCurrentPlayer(1);
        setBoard(Array.from({ length: ROWS }, () => Array.from({ length: COLS }, () => 0)));
        setWinner(null);
    };

    const renderCircle = (cell) => {
        const circleSize = 40;
        const circleColor = cell === 0 ? 'white' : cell === 1 ? PLAYER1_COLOR : PLAYER2_COLOR;
        return (
            <svg width={circleSize} height={circleSize} style={{ margin: 'auto' }}>
                <circle cx={circleSize / 2} cy={circleSize / 2} r={circleSize / 2 - 2} fill={circleColor} />
            </svg>
        );
    };

    return (
        <div>
            <div style={{ marginBottom: '10px', textAlign: 'center' }}>
                {winner ? (
                    <div>Joueur {winner} a gagné!</div>
                ) : checkForDraw() ? (
                    <div>C'est un match nul!</div>
                ) : (
                    <div>Tour du joueur {currentPlayer === 1 ? 'Rouge' : 'Jaune'}</div>
                )}
            </div>
            <div>
                {board.map((row, rowIndex) => (
                    <div key={rowIndex} style={{ display: 'flex' }}>
                        {row.map((cell, colIndex) => (
                            <div
                                key={colIndex}
                                style={{
                                    width: '50px',
                                    height: '50px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    cursor: winner ? 'not-allowed' : 'pointer',
                                }}
                                onClick={() => handleDropDisc(colIndex)}
                            >
                                {renderCircle(cell)}
                            </div>
                        ))}
                    </div>
                ))}
            </div>
            <br />
            <Button onClick={resetGame} variant="contained" color="primary" style={{
                marginTop: '5px',
                marginBottom: '5px',
                padding: '10px',
                maxWidth: '500px', // Utiliser maxWidth au lieu de width pour une meilleure responsivité
                margin: '0 auto', // Ajout pour centrer le conteneur dans la vue
                display: 'flex', // S'assure que les enfants sont flexibles
                flexDirection: 'column'
            }}>Réinitialiser la partie</Button>
            <Dialog open={openDialog} onClose={() => setOpenDialog(false)}>
                <DialogTitle>Fin de la partie</DialogTitle>
                <DialogContent>
                    <Typography>{winnerMessage}</Typography>
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => setOpenDialog(false)} color="primary">
                        Fermer
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
};

export default Connect4;
