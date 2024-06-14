# binfoapi

binfoapi is a RESTful API that provides price information for various cryptocurrencies from the Binance exchange.

## Installation

Follow the steps below to set up the project on your local machine:

### Prerequisites

- Node.js (>=12.x)
- Bun (https://bun.sh/)

### Steps

1. Clone the repository:

    ```sh
    git clone https://github.com/queaxtra/binfoapi.git
    cd binfoapi
    ```

2. Install dependencies:

    ```sh
    bun install
    ```

3. Start the application:

    ```sh
    bun start index.ts
    ```

The application will run on `http://localhost:3000` by default.

## Usage

Use the following endpoints to retrieve price information for different cryptocurrencies:

- `/btcusdt`: Bitcoin (BTC) - USDT price
- `/btctry`: Bitcoin (BTC) - TRY price
- `/btceur`: Bitcoin (BTC) - EUR price
- `/ethusdt`: Ethereum (ETH) - USDT price
- `/ethtry`: Ethereum (ETH) - TRY price
- `/etheur`: Ethereum (ETH) - EUR price
- `/bnbusdt`: Binance Coin (BNB) - USDT price
- `/bnbtry`: Binance Coin (BNB) - TRY price
- `/bnbeur`: Binance Coin (BNB) - EUR price
- `/adausdt`: Cardano (ADA) - USDT price
- `/adatry`: Cardano (ADA) - TRY price
- `/adaeur`: Cardano (ADA) - EUR price
- `/xrpusdt`: Ripple (XRP) - USDT price
- `/xrptry`: Ripple (XRP) - TRY price
- `/xrpeur`: Ripple (XRP) - EUR price
- `/solusdt`: Solana (SOL) - USDT price
- `/soltry`: Solana (SOL) - TRY price
- `/soleur`: Solana (SOL) - EUR price
- `/dogeusdt`: Dogecoin (DOGE) - USDT price
- `/dogetry`: Dogecoin (DOGE) - TRY price
- `/dogeeur`: Dogecoin (DOGE) - EUR price
- `/dotusdt`: Polkadot (DOT) - USDT price
- `/dottry`: Polkadot (DOT) - TRY price
- `/doteur`: Polkadot (DOT) - EUR price
- `/shibusdt`: Shiba Inu (SHIB) - USDT price
- `/shibtry`: Shiba Inu (SHIB) - TRY price
- `/shibeur`: Shiba Inu (SHIB) - EUR price
- `/ltcusdt`: Litecoin (LTC) - USDT price
- `/ltctry`: Litecoin (LTC) - TRY price
- `/ltceur`: Litecoin (LTC) - EUR price
- `/ltcbtc`: Litecoin (LTC) - BTC price
- `/ethbtc`: Ethereum (ETH) - BTC price

Each endpoint returns the current price of the specified cryptocurrency on Binance in JSON format.

## Error Handling

The API will return a 500 HTTP status code with an error message in case of any failure.

## Contributing

If you would like to contribute, please fork the repository and make changes in a new branch. Then, submit a pull request with your changes.

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/fooBar`).
3. Make your changes (`git commit -am 'Add some fooBar'`).
4. Push to the branch (`git push origin feature/fooBar`).
5. Create a new pull request.

## License

This project is licensed under the MIT License. See the `LICENSE` file for more details.
