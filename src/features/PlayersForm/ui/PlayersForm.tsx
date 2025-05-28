import React, { memo, useState } from "react";
import * as cls from "./PlayersForm.module.scss";
import { Button, FormGroup, TextField, Typography } from "@mui/material";

export const PlayersForm = memo(({}) => {
    const [player1, setPlayer1] = useState('')
    const [player2, setPlayer2] = useState('')

    const handleChangePlayer1 = ({target}: React.ChangeEvent<HTMLInputElement>) => {
        setPlayer1(target.value)
    }

    const handleChangePlayer2 = ({target}: React.ChangeEvent<HTMLInputElement>) => {
        setPlayer2(target.value)
    }

    const handleSubmit = () => {
        localStorage.setItem("players", JSON.stringify({
            player1, player2
        }));
    }
  return (
    <div className={cls.PlayersForm}>
        <FormGroup>
            <Typography variant="h6">Введите имена игроков:</Typography>
            <TextField
                id='player1'
                name='player1'
                label="Player 1"
                margin="normal"
                value={player1}
                onChange={handleChangePlayer1}/>
            <TextField
                id='player2'
                name='player2'
                label="Player 2"
                margin="normal"
                value={player2}
                onChange={handleChangePlayer2}/>
            <div className={cls.button}>
                <Button
                    variant="contained"
                    color="secondary"
                    fullWidth
                    onClick={handleSubmit}>
                    Save
                </Button>
            </div>
        </FormGroup>
    </div>
  )
});

