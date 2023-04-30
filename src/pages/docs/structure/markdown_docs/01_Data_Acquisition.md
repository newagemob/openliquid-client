---
title: Data Acquisition
description: Stock Market Data Acquisition is the process of collecting and analyzing stock market data to identify patterns and trends that can help predict future price movements.
---

## 📀 Data Acquisition

The Data Acquisition script is the initial step in building the ORBIT algo trading pipeline. This script is responsible for collecting the necessary market data required for analysis, modeling, and backtesting trading strategies.

## Prerequisites
To run the Data Acquisition script, ensure you have the following prerequisites:
- Python 3.x installed
- Required Python packages (backtrader, pandas, requests, etc.) installed
- API keys or access to data sources (e.g., Alpha Vantage, Quandl, etc.)

## Installation
1. Clone the algorithmic trading pipeline repository from GitHub:

```bash
git clone https://github.com/newagemob/orbit.git
```

2. Navigate to the `orbit` directory and install the required Python packages:

```bash
cd path/to/orbit && pip install -r requirements.txt
```

3. Create a `.env` file in the `orbit` directory and add the following environment variables:

```bash
# Alpha Vantage API Key - Optional
ALPHA_VANTAGE_API_KEY=YOUR_API_KEY
# Alpaca API Key - Required
ALPACA_API_KEY=YOUR_API_KEY
# OANDA API Key - Optional (Required if Trading Forex)
OANDA_API_KEY=YOUR_API_KEY
```


## Usage

In order to use the Data Acquisition script, you'll need to follow these steps:

1. *Configure Data Sources*: Open the Data Acquisition script and specify the data sources you want to use. For example, if you plan to retrieve stock price data from Alpha Vantage, provide your API key and adjust any required parameters.

2. *Define Symbols*: Specify the symbols or tickers of the stocks or assets for which you want to collect data. Update the symbol list in the script accordingly.

3. *Data Retrieval*: Run the script to retrieve the data from the specified sources. The script will make API calls to the data providers and download the historical market data for the specified symbols.

4. *Data Cleaning*: The downloaded data may contain missing values, outliers, or inconsistencies. Implement necessary data cleaning techniques to handle these issues, such as removing missing data points or applying interpolation methods.

5. *Save Data*: Optionally, you can save the cleaned data in a suitable format (e.g., CSV, HDF5) for further processing and analysis in subsequent steps of the pipeline.

## Example
Here's an example of how to use the Data Acquisition script with backtrader library to collect stock price data from Alpha Vantage:

```python
import backtrader as bt
from backtrader.feeds import AlphaVantageData

# Define the symbols or tickers of the stocks
symbols = ['AAPL', 'MSFT', 'GOOGL']

# Define the Alpha Vantage API key
api_key = 'your-api-key'

# Define the Data Feed class
class MyData(bt.feeds.AlphaVantageData):
 params = (
     ('apikey', api_key),
     ('reversed', False),  # Set to True for oldest-to-newest data
 )

# Create a cerebro instance
cerebro = bt.Cerebro()

# Add the Data Feed to cerebro
for symbol in symbols:
 data = MyData(dataname=symbol, timeframe=bt.TimeFrame.Days)
 cerebro.adddata(data)

# Run the Data Acquisition script
cerebro.run()
```

Please note that the above example is just a demonstration of how to use the Data Acquisition script. You can use any other library or data source to collect the data. You'll also need to use your own API keys, of course.

## Next Steps

Before you continue, make sure the data doesn't contain any missing values or serious outliers. You can use the `pandas` library to check for missing values and apply interpolation methods to fill in the missing values. You can also use the `matplotlib` library to visualize the data and identify any outliers.

The Data Acquisition script plays a crucial role in collecting the required market data for algorithmic trading analysis. The next step in the pipeline is to preprocess the data and perform feature engineering to prepare the data for modeling and backtesting.
