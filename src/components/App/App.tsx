import { Container } from "@mui/material";
import Layout from "../Layout";
import Header from "../Header";
import React, { useState, useEffect } from 'react';
import { WordleRequestItem, WordleResponse, fetchWordleResult } from '../../api/api';

function App() {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [words, setWords] = useState<string[]>([]);

    function handleSuccess(response: WordleResponse) {
      console.log('success');
      console.log(response);
      setWords((prev) => [response.guess, ...prev]);
      setLoading(false);
    }

    function handleError(error: Error) {
      console.log('error');
      console.log(error);
      setError(true);
    }

    function handleWordleRequest(word: string, clue: string) {
      const requestItem: WordleRequestItem = { word, clue };

      fetchWordleResult([requestItem])
        .then(handleSuccess, handleError)
        .catch(handleError);
    }

    function generateStartingWord(): string {
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
                {/* Insert App here */}
            </Container>
        </Layout>
    );
}

export default App;
