import { Box, Container, CircularProgress } from "@mui/material";
import Layout from "../Layout";
import Header from "../Header";
import React, { useState, useEffect } from 'react';
import { WordleRequestItem, WordleResponse, fetchWordleResult } from '../../api/api';
import WordleBoard from '../WordleBoard/WordleBoard';
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { baseThemeOptions } from "../theme";

const appTheme = createTheme(baseThemeOptions);
console.log(appTheme);

function App() {
    const [error, setError] = useState(false);
    const [words, setWords] = useState<string[]>([]);
    const [complete, setComplete] = useState(false);
    const [win, setWin] = useState(false);

    const successMessage = `Congratulations! Your word was guessed in ${words.length} guess${words.length === 1 ? '': 'es'}!`;
    const failureMessage = 'Unfortunately, you did not win this time.';
    const errorMessage = `Apologies, an error has occurred. Error: ${error}.`;

    const handleSuccess = (response: WordleResponse) => {
      console.log('success');
      console.log(response);
      setWords((prev) => [...prev, response.guess]);
    }

    const handleError = (error: Error) => {
      console.log('error');
      console.log(error);
      setError(true);
    }

    const handleWordleRequest = (word: string, clue: string) => {
      console.log('handling wordle request');
      const requestItem: WordleRequestItem = { word, clue };
      console.log(requestItem);

      fetchWordleResult([requestItem])
        .then(handleSuccess, handleError)
        .catch(handleError);
    }

    const handleSubmit = (word: string, clue: string) => {
      if (clue === 'ggggg') {
        setComplete(true);
        setWin(true);
      } else if (words.length === 6) {
        setComplete(true);
        setWin(false);
      } else {
        handleWordleRequest(word, clue);
      }
    };

    const generateStartingWord = (): string => {
      let startingWord = '';

      for (let i = 0; i < 5; i++) {
        let offset = Math.floor(Math.random() * 26);
        startingWord += String.fromCharCode(97 + offset);
      }

      return startingWord;
    }

    useEffect(() => {
      handleWordleRequest(generateStartingWord(), 'xxxxx');
    }, []);

    return (
      <ThemeProvider theme={appTheme}>
        <Layout>
            <Container maxWidth='md'>
              <Header />
              {words.length < 1 ? <Box display='flex' justifyContent='center' alignItems='center' height='20vh'><CircularProgress size={60} /></Box> : ''}
              <WordleBoard words={words} complete={complete} handleSubmit={handleSubmit} />
              <Box display='flex' justifyContent='center' alignItems='center'>
                {complete ? (win ? <h2>{successMessage}</h2> : <h2>{failureMessage}</h2>) : ''}
                {error ? <h2>{errorMessage}</h2> : ''}
              </Box>
            </Container>
        </Layout>
      </ThemeProvider>

    );
}

export default App;
