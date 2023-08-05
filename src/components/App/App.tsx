import { Container } from "@mui/material";
import Layout from "../Layout";
import Header from "../Header";
import React, { useState, useEffect } from 'react';
import { WordleRequestItem, WordleResponse, fetchWordleResult } from '../../api/api';
import WordleBoard from '../WordleBoard/WordleBoard';

function App() {
    const [error, setError] = useState(false);
    const [words, setWords] = useState<string[]>([]);

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
      const requestItem: WordleRequestItem = { word, clue };

      fetchWordleResult([requestItem])
        .then(handleSuccess, handleError)
        .catch(handleError);
    }

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
        <Layout>
            <Container maxWidth="sm">
                <Header />
                <WordleBoard words={words} />
            </Container>
        </Layout>
    );
}

export default App;
