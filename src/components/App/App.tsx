import { Box, Container, CircularProgress } from "@mui/material";
import Layout from "../Layout";
import Header from "../Header";
import React, { useState, useEffect } from 'react';
import { WordleRequestItem, WordleRequest, WordleResponse, fetchWordleResult } from '../../api/api';
import WordleBoard from '../WordleBoard/WordleBoard';
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { baseThemeOptions } from "../theme";

const appTheme = createTheme(baseThemeOptions);

function App() {
    const [error, setError] = useState<Error>();
    const [words, setWords] = useState<WordleRequest>([]);
    const [complete, setComplete] = useState(false);
    const [win, setWin] = useState(false);

    const successMessage = `Congratulations! Your word was guessed in ${words.length} guess${words.length === 1 ? '': 'es'}!`;
    const failureMessage = 'Unfortunately, you did not win this time.';
    const errorMessage = `${error}.`;

    const handleSuccess = (response: WordleResponse) =>
      setWords((prev) => [...prev, { word: response.guess, clue: 'xxxxx'}]);

    const handleError = (error: Error) =>
      setError(error);

    const handleWordleRequest = (word: WordleRequestItem) =>
      fetchWordleResult(words)
        .then(handleSuccess, handleError)
        .catch(handleError);

    const handleSubmit = (word: WordleRequestItem) => {
      if (word.clue === 'ggggg') {
        setComplete(true);
        setWin(true);
      } else if (words.length === 6) {
        setComplete(true);
        setWin(false);
      } else {
        handleWordleRequest(word);
      }
    };

    const handleClueChange = (word: WordleRequestItem, newClue: string, index: number) => {
      setWords((prev) =>
        prev.map(w => {
          if (w.word === word.word) {
            const letters = Array.from(w.clue);
            letters[index] = newClue;
            w.clue = letters.join('');
          }

          return w;
        }));
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
      handleWordleRequest({ word:generateStartingWord(), clue:'xxxxx'});
    }, []);

    return (
      <ThemeProvider theme={appTheme}>
        <Layout>
            <Container maxWidth='md'>
              <Header />
              {words.length < 1 ? <Box display='flex' justifyContent='center' alignItems='center' height='20vh'><CircularProgress size={60} /></Box> : ''}
              <WordleBoard words={words} complete={complete || error !== undefined} handleSubmit={handleSubmit} handleClueChange={handleClueChange} />
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
