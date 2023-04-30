---
title: ORBIT Overview
description: How OpenLiquid utilizes machine learning and statistical modeling to create trading strategies.
---

**ORBIT** (Optimized Risk Base Intelligence Trading) is the first  open-source trading agent from [OpenLiquid](/). ORBIT provides an algorithmic trading pipeline that allows users to create, test, and execute automated trading strategies using real-time market data and advanced analytics. It's a powerful tool for traders, investors, and developers to create, optimize, and backtest trading strategies. ORBIT provides users with a wide range of features, including easy-to-use development tools, powerful analytics and data visualization capabilities, and the ability to execute trades in real-time.

We run a [public ORBIT server](/dashboard) that analyzes, backtests, and executes trades based on popular algorithms such as Moving Average Crossover, Mean Reversion, Momentum, Arbitrage, and Market Making similar to how a hedge fund would - except we show you how we do it.

Alternatively, you can run ORBIT your own server by downloading the repository and following the guide on [GitHub](https://github.com/newagemob/ORBIT).

## Steps to take for every trade:

1. Data Aquistion: The first step is to collect and clean the data required for the analysis. You can use various sources like Yahoo Finance, Alpha Vantage, or Quandl to get stock price data. Then, clean the data by removing missing values, outliers, and any other errors.

2. Preprocessing and Feature Engineering: In this step, you will preprocess the data by scaling and normalizing it to make it more suitable for machine learning algorithms. You can also engineer new features by using technical indicators, statistical features, or any other relevant features that can improve the performance of the model.

3. Model Selection and Training: Next, you will select a suitable machine learning algorithm like regression, classification, or clustering based on the problem you want to solve. Train the model on the preprocessed data and tune the hyperparameters using techniques like cross-validation to improve the model's performance.

4. Backtesting: Use the backtrader library to backtest the model on historical data. Backtesting allows you to test the model's performance on past data to see how well it would have performed if it was used to make actual trades.

5. Trading Strategy Optimization: Optimize the trading strategy by fine-tuning the model's parameters and hyperparameters. This can be done using techniques like grid search or Bayesian optimization to maximize the strategy's performance.

6. Trade Execution: Finally, use an API like Alpaca, Interactive Brokers, or TD Ameritrade to execute trades based on the trading strategy developed in step 5.


## Data Collection and Cleaning

Data Collection and Cleaning involves obtaining and preparing the necessary data for analysis. Here are some steps to consider:

 - Identify Data Sources: Determine the data sources you will use to collect the required market data. This can include historical price data, fundamental data, economic indicators, news sentiment data, or any other relevant information.

 - Data Retrieval: Use APIs or web scraping techniques to retrieve the data from the identified sources. Popular financial data providers include Alpha Vantage, Quandl, and Intrinio.

 - Data Cleaning: Clean the collected data by removing any missing values, outliers, or inconsistencies. Handle any data quality issues or errors that may affect the accuracy of your analysis.

 - Data Integration: Combine and integrate the collected data into a format suitable for further analysis. Ensure that the data is properly aligned and synchronized, especially if you are working with multiple data sources.

 - Data Transformation: Convert the raw data into a structured format that can be easily processed by the algorithms. This may involve aggregating or resampling the data into different time intervals or performing other transformations to enhance the dataset.

 - Splitting the Data: Divide the dataset into training, validation, and testing sets. The training set is used to train the model, the validation set is used to fine-tune and optimize the model's parameters, and the testing set is used to evaluate the model's performance.

By following these steps, you can ensure that your data is accurate, consistent, and ready for analysis and modeling.

## Feature Engineering

Once the data is collected and cleaned, the next step is feature engineering. Feature engineering involves creating additional features from the existing data that can provide more information to the trading algorithms. Here are some common techniques:

  - Technical Indicators: Calculate technical indicators such as moving averages, relative strength index (RSI), stochastic oscillator, and Bollinger Bands. These indicators can capture price patterns and trends in the data.

  - Statistical Features: Compute statistical features like mean, standard deviation, skewness, and kurtosis. These features can provide insights into the distribution and volatility of the data.

  - Sentiment Analysis: Analyze news articles or social media sentiment related to the stocks or the overall market sentiment. This can be done using natural language processing (NLP) techniques to determine positive, negative, or neutral sentiment.

  - Market Variables: Include additional market-related variables such as interest rates, exchange rates, or macroeconomic indicators that may influence stock prices.

  - Lagged Variables: Create lagged versions of the features to capture the historical behavior of the data. For example, include lagged prices or volume data to provide information about past trends.

The goal of feature engineering is to provide meaningful and relevant information to the trading algorithms, enabling them to make better predictions and decisions.


## Model Selection and Training

Once the features are engineered, the next step is to select an appropriate machine learning or statistical model for your trading strategy. The choice of model depends on the nature of the problem and the available data. Some commonly used models for algorithmic trading include:

  - Regression Models: Linear regression, ridge regression, or support vector regression (SVR) can be used for predicting continuous variables such as future stock prices or returns.

  - Classification Models: Logistic regression, random forests, or support vector machines (SVM) can be employed for binary classification problems like predicting the direction of stock price movements (up or down).

  - Time Series Models: Models like autoregressive integrated moving average (ARIMA), GARCH (Generalized Autoregressive Conditional Heteroskedasticity), or recurrent neural networks (RNN) can capture the temporal dependencies and patterns in the data.

  - Ensemble Methods: Ensemble methods such as random forests, gradient boosting, or stacking can combine multiple models to improve prediction accuracy.

Once the model is selected, it needs to be trained on the historical data. This involves splitting the data into training and validation sets, fitting the model on the training set, and evaluating its performance on the validation set. Fine-tune the model's hyperparameters, such as learning rate, regularization, or depth of the tree, using techniques like cross-validation or grid search to optimize its performance.

## Backtesting

After the model is trained, it's crucial to evaluate its performance using backtesting. Backtesting involves simulating the execution of trades based on historical data to assess the profitability and risk of the trading strategy. The backtesting process typically includes the following steps:

  - Define Trading Rules: Convert the model's predictions into actionable trading signals based on predefined rules. For example, buy when the predicted return is above a certain threshold and sell when it's below another threshold.

  - Implement Portfolio Management: Develop a portfolio management strategy that determines the allocation of capital to different trades. Consider factors such as risk management, position sizing, and diversification.

  - Simulate Trades: Simulate the execution of trades using historical data. Take into account transaction costs, slippage, and other real-world constraints to estimate the actual performance of the strategy.

  - Performance Evaluation: Calculate key performance metrics such as returns, risk-adjusted returns (e.g., Sharpe ratio), maximum drawdown, and other relevant metrics to evaluate the performance of the trading strategy. Compare the strategy's performance against benchmarks or other baseline strategies to assess its effectiveness.

Backtesting provides insights into the potential profitability and risk of the trading strategy under historical market conditions. It helps identify areas for improvement, such as refining trading rules or adjusting risk management techniques, before deploying the strategy in live trading.

## Strategy Optimization

Based on the results of the backtesting and performance evaluation, refine and develop the trading strategy. Consider incorporating additional features, modifying trading rules, or adjusting risk parameters to improve the strategy's performance.

It's essential to consider the practical aspects of executing trades, such as slippage, transaction costs, and liquidity constraints. Incorporate risk management techniques, such as stop-loss orders or position sizing rules, to manage downside risks and protect against adverse market movements.

Ensure that the trading strategy aligns with your risk tolerance and investment objectives. Regularly monitor and evaluate the strategy's performance to identify any necessary adjustments or refinements.

## Trade Execution

Once the trading strategy is developed and tested, it's time to execute trades in a live trading environment. This involves connecting to a brokerage or trading platform API to place trades automatically based on the strategy's signals. Some popular brokerage APIs include Alpaca, Interactive Brokers, or TD Ameritrade.

Make sure to thoroughly test the trade execution process in a simulated or paper trading environment before executing real trades. Monitor the execution quality, order fill rates, and other trade execution metrics to ensure that the strategy performs as expected.

## ☢️ Disclaimer and Risk Warning ☢️

It's important to note that algorithmic trading involves financial risks, and past performance is not indicative of future results. Continuously monitor the strategy's performance and make necessary adjustments as market conditions change.

## 📚 Resources 📚

🐍 Python Libraries
  - [Backtrader Library](https://www.backtrader.com/docu/quickstart/quickstart/#basic-setup)

📰 Media Sources
  - [Top Stocks](https://www.investopedia.com/top-stocks-4581225)
  - [Earnings Reports](https://www.investopedia.com/earnings-reports-5218419)
  - [Whale Wisdom](https://whalewisdom.com/filing/latest_filings)
