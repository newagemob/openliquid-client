---
title: Trading Algorithms
description: Trading Algorithms are the core of any algorithmic trading workflow. They are the programs that are used to identify profitable trading opportunities and execute trades based on the results of all other components of the workflow.
---

# Trading Algorithms

There are many different types of trading algorithms that can be used in an algorithmic trading workflow. The most effective, efficient, and profitable algorithms will depend on a variety of factors, including the specific goals of the trading strategy, the characteristics of the market being traded, and the data available.
Some of the most commonly used trading algorithms are:
* Moving Average Crossover: This algorithm involves comparing short-term and long-term moving averages of a stock's price to identify buy and sell signals.
* Mean Reversion: This algorithm involves identifying when a stock's price has deviated from its historical average and buying or selling the stock to take advantage of the expected reversion to the mean.
* Momentum: This algorithm involves identifying stocks that are experiencing upward or downward momentum and buying or selling the stock to take advantage of the trend.
* Arbitrage: This algorithm involves identifying price discrepancies between two or more markets and buying and selling the same asset in different markets to take advantage of the price difference.
* Market Making: A market-making trading algorithm is a type of trading algorithm used to provide liquidity to the market by simultaneously buying and selling assets at slightly different prices. The algorithm monitors the market for changes in the bid and ask prices and adjusts its own bid and ask prices accordingly, with the goal of making a profit on the bid-ask spread. While market-making algorithms can be highly profitable in markets with high trading volumes and low bid-ask spreads, they can also be risky and subject to regulatory oversight.


Examples

1. Moving Average Crossover

```python
import pandas as pd

# Import stock price data
df = pd.read_csv('stock_data.csv')

# Calculate short-term and long-term moving averages
short_window = 50
long_window = 200
df['short_ma'] = df['price'].rolling(short_window).mean()
df['long_ma'] = df['price'].rolling(long_window).mean()

# Generate buy and sell signals based on crossover
df['signal'] = 0.0
df['signal'][short_window:] = \
    np.where(df['short_ma'][short_window:] > df['long_ma'][short_window:], 1.0, 0.0)
df['positions'] = df['signal'].diff()

# Plot the results
import matplotlib.pyplot as plt
fig = plt.figure(figsize=(10,5))
ax1 = fig.add_subplot(111, ylabel='Price')
df['price'].plot(ax=ax1, color='black')
df['short_ma'].plot(ax=ax1, color='blue')
df['long_ma'].plot(ax=ax1, color='red')
ax1.plot(df.loc[df.positions == 1.0].index, df.short_ma[df.positions == 1.0],'^', markersize=10, color='g')
ax1.plot(df.loc[df.positions == -1.0].index, df.short_ma[df.positions == -1.0],'v', markersize=10, color='r')
plt.show()
```


2. Mean Reversion

```python
import pandas as pd
import numpy as np

def mean_reversion(data, window=20, threshold=1.5):
    # Calculate the rolling mean and standard deviation
    rolling_mean = data['close'].rolling(window=window).mean()
    rolling_std = data['close'].rolling(window=window).std()

    # Calculate the z-score
    z_score = (data['close'] - rolling_mean) / rolling_std

    # Create a position column based on the z-score crossing the threshold
    data['position'] = np.where(z_score > threshold, -1, np.nan)
    data['position'] = np.where(z_score < -threshold, 1, data['position'])

    # Forward fill the position column
    data['position'] = data['position'].ffill()

    # Calculate the returns
    data['returns'] = data['close'].pct_change() * data['position'].shift(1)

    return data[['close', 'position', 'returns']]
```


3. Momentum

```python
import pandas as pd

# Load data
df = pd.read_csv('stock_data.csv')

# Compute returns
df['returns'] = df['price'].pct_change()

# Compute rolling mean and standard deviation
rolling_mean = df['returns'].rolling(window=30).mean()
rolling_std = df['returns'].rolling(window=30).std()

# Compute z-score
df['z_score'] = (df['returns'] - rolling_mean) / rolling_std

# Define signal
df['signal'] = 0
df.loc[df['z_score'] > 1, 'signal'] = 1
df.loc[df['z_score'] < -1, 'signal'] = -1

# Compute strategy returns
df['strategy_returns'] = df['signal'].shift(1) * df['returns']

# Compute cumulative returns
df['cumulative_returns'] = (1 + df['strategy_returns']).cumprod()

# Plot cumulative returns
df['cumulative_returns'].plot()
```


4. Arbitrage

```python
import pandas as pd

# Load data for two markets
market1 = pd.read_csv('market1_data.csv')
market2 = pd.read_csv('market2_data.csv')

# Merge data
df = pd.merge(market1, market2, on='date', suffixes=('_market1', '_market2'))

# Compute price difference
df['price_diff'] = df['price_market1'] - df['price_market2']

# Define signal
df['signal'] = 0
df.loc[df['price_diff'] > 0.5, 'signal'] = -1
df.loc[df['price_diff'] < -0.5, 'signal'] = 1

# Compute strategy returns
df['strategy_returns'] = df['signal'].shift(1) * df['price_diff']

# Compute cumulative returns
df['cumulative_returns'] = (1 + df['strategy_returns']).cumprod()

# Plot cumulative returns
df['cumulative_returns'].plot()
```


5. Market Making

```python
import random

class MarketMaker:
    def __init__(self, symbol, starting_price, bid_ask_spread):
        self.symbol = symbol
        self.bid_price = starting_price
        self.ask_price = starting_price + bid_ask_spread

    def update_prices(self):
        # Simulate market conditions by randomly adjusting prices up or down
        price_change = random.uniform(-0.5, 0.5)
        self.bid_price += price_change
        self.ask_price += price_change

    def trade(self, order_type, price, quantity):
        # Update prices based on market conditions
        self.update_prices()

        # Adjust bid and ask prices based on order type and quantity
        if order_type == 'BUY':
            self.bid_price = max(self.bid_price, price)
            self.ask_price = max(self.bid_price, price + bid_ask_spread)
        elif order_type == 'SELL':
            self.ask_price = min(self.ask_price, price)
            self.bid_price = min(self.ask_price - bid_ask_spread, price)

        # Execute trade at the best available price
        if order_type == 'BUY' and price >= self.ask_price:
            return (self.symbol, self.ask_price, quantity)
        elif order_type == 'SELL' and price <= self.bid_price:
            return (self.symbol, self.bid_price, quantity)
        else:
            return None
```
