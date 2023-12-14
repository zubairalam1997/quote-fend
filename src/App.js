import React, { useEffect, useState } from 'react'
import "./App.css"

const App = () => {
  const [quote , setQuote] =useState([]);
  const [author , setAuthor] =useState([]);
  useEffect(()=>{
    getNewQuote();
  },[]);

  const getNewQuote = async()=>{
    let result = await fetch('http://localhost:3006/home');
    const data = await result.json();
    console.log(result);
    setQuote(data.quoteText);
    setAuthor(data.quoteAuthor);
  }
  return (
    <div className="App">
    <div className="quote">
       <h2>" {quote}"</h2>
       <small>'-{author}-'</small>
    </div><br />
    <button className="btn" onClick={getNewQuote}>Get New Quote</button>
</div>
  );
}

export default App
