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
5. For postman colletion

`{"info": {"name": "Crypto Price API", "schema": "https://schema.getpostman.com/json/collection/v2.1.0/collection.json"}, "item": [{"name": "Get Crypto Price", "request": {"method": "GET", "header": [], "url": {"raw": "http://localhost:3000/:ticker", "protocol": "http", "host": ["localhost"], "port": "3000", "path": [":ticker"], "variable": [{"key": "ticker", "value": "SOL", "description": "Ticker symbol of the cryptocurrency"}]}}, "response": []}]}`
