---
title: Stock Market Data Analysis
description: Stock Market Data Analysis is the process of analyzing stock market data to identify patterns and trends that can help predict future price movements.
---

# Stock Market Data Analysis

* Technical analysis: This involves analyzing past market data to identify patterns and trends that can help predict future price movements. You can use tools such as moving averages, relative strength index (RSI), and Bollinger bands to perform technical analysis.
* Fundamental analysis: This involves analyzing a company's financial statements, such as its balance sheet, income statement, and cash flow statement, to determine its financial health and estimate its intrinsic value.
* Quantitative analysis: This involves using statistical and mathematical models to analyze market data and develop trading strategies. You can use techniques such as regression analysis, time series analysis, and machine learning algorithms to perform quantitative analysis.
* Risk management: This involves using statistical methods to manage the risk associated with trading. You can use tools such as value at risk (VaR) and Monte Carlo simulations to assess the risk of a trading strategy and determine appropriate risk management measures.


## Technical Analysis

Here's an example Python code for performing technical analysis using moving averages, RSI, and Bollinger bands:

```python
import pandas as pd
import yfinance as yf
import talib

# Download stock data
df = yf.download('AAPL', start='2021-01-01', end='2022-01-01')

# Calculate moving averages
df['MA_20'] = talib.SMA(df['Close'], timeperiod=20)
df['MA_50'] = talib.SMA(df['Close'], timeperiod=50)

# Calculate RSI
df['RSI'] = talib.RSI(df['Close'], timeperiod=14)

# Calculate Bollinger Bands
df['upper_band'], df['middle_band'], df['lower_band'] = talib.BBANDS(df['Close'], timeperiod=20)

# Buy signal: 20-day MA crosses above 50-day MA and RSI is below 30
df['Buy_Signal'] = ((df['MA_20'] > df['MA_50']) & (df['RSI'] < 30)).astype(int)

# Sell signal: 20-day MA crosses below 50-day MA and RSI is above 70 or price hits upper Bollinger Band
df['Sell_Signal'] = (((df['MA_20'] < df['MA_50']) & (df['RSI'] > 70)) | (df['Close'] > df['upper_band'])).astype(int)

# Combine buy and sell signals
df['Signal'] = df['Buy_Signal'] - df['Sell_Signal']

# Calculate returns
df['Returns'] = df['Close'].pct_change() * df['Signal'].shift(1)

# Calculate cumulative returns
df['Cumulative_Returns'] = (1 + df['Returns']).cumprod()

# Plot cumulative returns
df['Cumulative_Returns'].plot(figsize=(10, 5), title='Cumulative Returns')
```

This code downloads daily stock price data for Apple from Yahoo Finance, calculates the 20-day and 50-day moving averages, RSI, and Bollinger Bands, and generates buy and sell signals based on these indicators. The code also calculates daily returns and cumulative returns based on the buy and sell signals, and plots the cumulative returns over time. This is just one example of how technical analysis can be used in Python to analyze stock market data.


## Fundamental Analysis

To retrieve and generate the information required for fundamental analysis, we can use financial data APIs such as the Alpha Vantage API or the Yahoo Finance API. Here is some sample Python code using the Alpha Vantage API to retrieve financial data for a specific company:

```python
import requests

# Alpha Vantage API key
api_key = 'YOUR_API_KEY'

# Company symbol (e.g. AAPL for Apple Inc.)
symbol = 'AAPL'

# Request URL for the balance sheet
balance_sheet_url = f'https://www.alphavantage.co/query?function=BALANCE_SHEET&symbol={symbol}&apikey={api_key}'

# Request URL for the income statement
income_statement_url = f'https://www.alphavantage.co/query?function=INCOME_STATEMENT&symbol={symbol}&apikey={api_key}'

# Request URL for the cash flow statement
cash_flow_url = f'https://www.alphavantage.co/query?function=CASH_FLOW&symbol={symbol}&apikey={api_key}'

# Send requests to retrieve financial data
balance_sheet_response = requests.get(balance_sheet_url)
income_statement_response = requests.get(income_statement_url)
cash_flow_response = requests.get(cash_flow_url)

# Convert responses to JSON format
balance_sheet_data = balance_sheet_response.json()
income_statement_data = income_statement_response.json()
cash_flow_data = cash_flow_response.json()

# Print financial data
print('Balance Sheet:')
print(balance_sheet_data)
print('Income Statement:')
print(income_statement_data)
print('Cash Flow:')
print(cash_flow_data)
```

This code retrieves the balance sheet, income statement, and cash flow statement for Apple Inc. using the Alpha Vantage API and prints the data in JSON format. We can then use this data to perform fundamental analysis and make investment decisions.

Here’s an example of how to use the Yahoo Finance API to retrieve financial statement data for a company:

```python
import yfinance as yf

# define the stock symbol for the company you want to analyze
symbol = "AAPL"

# create a Yahoo Finance Ticker object
ticker = yf.Ticker(symbol)

# retrieve the financial statements for the company
income_statement = ticker.financials
balance_sheet = ticker.balance_sheet
cash_flow_statement = ticker.cashflow

# print out the data for each financial statement
print("Income Statement:")
print(income_statement)
print("\nBalance Sheet:")
print(balance_sheet)
print("\nCash Flow Statement:")
print(cash_flow_statement)
```

This code creates a yf.Ticker object for Apple (AAPL) and retrieves the financial statements using the financials, balance_sheet, and cashflow attributes. The data is then printed out for each statement. You can modify the symbol variable to retrieve financial data for other companies.


## Quantitative Analysis

Here is some starter code that demonstrates the use of regression analysis and time series analysis in quantitative analysis:

```python
import pandas as pd
import numpy as np
import statsmodels.api as sm
from sklearn.linear_model import LinearRegression
import yfinance as yf

# Download historical data for a stock
ticker = 'AAPL'
data = yf.download(ticker, start='2015-01-01', end='2022-01-31')

# Calculate daily returns
data['returns'] = data['Adj Close'].pct_change()

# Regression analysis
X = np.array(data['returns'].shift(1).dropna()).reshape(-1, 1)
Y = np.array(data['returns'].dropna()).reshape(-1, 1)
reg = LinearRegression().fit(X, Y)
print('Regression coefficient:', reg.coef_[0][0])

# Time series analysis
res = sm.tsa.ARMA(data['returns'].dropna(), order=(1, 1)).fit()
print('ARMA model coefficients:')
print(res.params)
```

This code downloads historical data for a stock (in this example, Apple), calculates its daily returns, and performs both regression analysis and time series analysis on the returns data. The regression analysis calculates the correlation between the returns on one day and the returns on the previous day, while the time series analysis fits an autoregressive moving average (ARMA) model to the returns data to identify trends and patterns. Both techniques can be used to develop quantitative trading strategies.


## Risk Management

Here's a starter code that performs risk management by calculating the VaR using historical simulation and implementing a stop-loss to limit potential losses:

```python
import numpy as np
import pandas as pd

# Load historical price data
data = pd.read_csv('historical_data.csv')

# Define trading strategy
positions = np.sign(data['close'].rolling(window=20).mean() - data['close'].rolling(window=50).mean())

# Calculate daily returns
returns = np.log(data['close']/data['close'].shift(1))

# Define VaR level
VaR_level = 0.05

# Calculate VaR using historical simulation
VaR = -np.percentile(returns, VaR_level*100)

# Implement stop-loss
stop_loss = -2*VaR

# Apply stop-loss to positions
positions = np.where(positions == 1, np.where(returns > stop_loss, 1, 0), np.where(returns < -stop_loss, -1, 0))
```

This code calculates the daily returns and implements a mean reversion strategy based on the 20-day and 50-day moving averages of the closing price. It then calculates the VaR using historical simulation with a confidence level of 95%, and sets a stop-loss at 2 times the VaR. Finally, it applies the stop-loss to the trading positions, such that long positions are closed if the daily returns fall below the stop-loss level, and short positions are closed if the daily returns rise above the stop-loss level. This helps limit potential losses and manage the risk associated with the trading strategy.

Another risk management strategy is ***`stop-loss orders`***, which are used to automatically sell a security when its price falls below a certain level, limiting the potential loss. Here's an example of how to implement stop-loss orders in Python:

```python
import pandas as pd
import yfinance as yf

# Define symbol and date range for data retrieval
symbol = 'AAPL'
start_date = '2020-01-01'
end_date = '2022-02-07'

# Retrieve stock data from Yahoo Finance
stock_data = yf.download(symbol, start=start_date, end=end_date)

# Define stop loss level
stop_loss = 0.1  # 10% drop from current price

# Calculate the stop loss price for each day
stop_loss_price = stock_data['Close'] * (1 - stop_loss)

# Add stop loss price as a new column in the data frame
stock_data['Stop Loss Price'] = stop_loss_price

# Initialize variables for tracking trades and P&L
position = 0  # 0 for no position, 1 for long, -1 for short
entry_price = 0
exit_price = 0
pnl = 0

# Loop through the data frame
for index, row in stock_data.iterrows():
    # Check if the stop loss level has been triggered
    if position != 0 and row['Low'] <= row['Stop Loss Price']:
        # Sell at the stop loss price
        exit_price = row['Stop Loss Price']
        pnl += position * (exit_price - entry_price)
        position = 0
        print(f'Stop loss triggered on {index.date()}. P&L: {pnl:.2f}')

    # Check for a buy signal
    elif row['Close'] > row['Stop Loss Price'] and position == 0:
        # Enter long position
        entry_price = row['Close']
        position = 1
        print(f'Buy signal on {index.date()}. Entry price: {entry_price:.2f}')

    # Check for a sell signal
    elif row['Close'] < row['Stop Loss Price'] and position == 1:
        # Exit long position
        exit_price = row['Close']
        pnl += (exit_price - entry_price)
        position = 0
        print(f'Sell signal on {index.date()}. Exit price: {exit_price:.2f}. P&L: {pnl:.2f}')

# Print the final P&L
print(f'Final P&L: {pnl:.2f}')
```

This code retrieves historical stock data for Apple from Yahoo Finance, calculates the stop loss price for each day based on a 10% drop from the current price, and uses a loop to simulate trading based on the stop loss strategy. The code prints out buy and sell signals as well as the final P&L. Note that this is a simplified example and does not take into account factors such as transaction costs or slippage.
