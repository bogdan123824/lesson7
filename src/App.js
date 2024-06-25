import axios from "axios";
import React, { useState, useEffect } from "react";
import './App.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const baseURL = "https://api.monobank.ua/bank/currency";

export default function App() {
  const [post, setPost] = useState([]);

  useEffect(() => {
    axios.get(baseURL)
      .then((response) => {
        setPost(response.data);
      })
  }, []);

  const usdToUah = post.find(valut => valut.currencyCodeA === 840 && valut.currencyCodeB === 980);
  const euroToUah = post.find(valut => valut.currencyCodeA === 978 && valut.currencyCodeB === 980);

  return (
    <div>
      <div className="cont">
      <h1>Currency Rates</h1>
      <div>
        {usdToUah && (
          <div className="card">
            <h2>USD to UAH</h2>
            <div>
              <p>Buy: {usdToUah.rateBuy}</p>
              <p>Sell: {usdToUah.rateSell}</p>
            </div>
          </div>
        )}
        {euroToUah && (
          <div className="card">
            <h2>EURO to UAH</h2>
            <div>
              <p>Buy: {euroToUah.rateBuy}</p>
              <p>Sell: {euroToUah.rateSell}</p>
            </div>
          </div>
        )}
      </div>
    </div>
    </div>
  );
}
