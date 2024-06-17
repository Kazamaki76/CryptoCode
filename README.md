# Crypto Price API

This API provides current price information for specified cryptocurrencies. It uses the CoinMarketCap API to fetch data and caches responses to improve performance.

## Features

- Fetch current price and name of a cryptocurrency by its ticker symbol.
- Cache responses to reduce redundant API calls and improve performance.
- Built using Express.js and Axios.

## Prerequisites

- Node.js and npm installed
- CoinMarketCap API key

## Installation

1. Clone the repository:
2. npm install
3. Create envfile and add this into env
    CMC_API_KEY="APIKEY"
    PORT=3000
4. npm run start 
Use the following endpoint to get the name and current price of a cryptocurrency:
    http://localhost:3000/:ticker
    for example  http://localhost:3000/SOL

## Usage 
Use the following endpoint to get the name and current price of a cryptocurrency:

http://localhost:3000/:ticker
Replace :ticker with the ticker symbol of the cryptocurrency (e.g., BTC for Bitcoin).

- Example Request
    To get the current price of Solana (SOL):

    GET http://localhost:3000/SOL

- Example Response
    {
      "name": "Solana",
      "price": 47720.32
    }
