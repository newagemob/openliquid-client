---
title: Roadmap
description: OpenLiquid Roadmap
---

# OpenLiquid Roadmap

***Where we've been, where we are, and where we're going.***

ORBIT is the primary agent for the OpenLiquid platform - an optimized risk based intelligent trader. While we plan to create an entire ecosystem of open source financial agents, ORBIT is the first and most important agent. With a focus on profitability and risk management, ORBIT can perform long term analysis on traditional stocks and short term analysis and execution on foreign exchange and crypto markets.

# 🧠 Current Status

### ORBIT is currently in the **Alpha** phase of development.

ORBIT is currently in **Alpha**. This release will be the first version of the OpenLiquid platform that is ready for public consumption. It will be a minimal viable product (MVP) that will allow users to create and deploy their own financial agents inside of their OpenLiquid account, or by deploying their own ***ORBIT Nodes***.

The ***[ORBIT Node](https://github.com/newagemob/ORBIT)*** is the decentralized component of the OpenLiquid platform. It is a lightweight server/client that is installed and runs on a user's machine. The ***ORBIT Node*** will allow users to run their own financial agents on their own hardware, without having to trust a third party.

## Current Release (v0.2.1)

key | value
--- | ---
Release Date  | 2023-04-30
Release Notes | [v0.2.1 Release Notes]()
Release Status | [v0.2.1 Release Status]()

## Current Milestone (v0.2.1)

key | value
--- | ---
Milestone Date  | 2023-04-30
Milestone Notes | [v0.2.1 Milestone Notes]()
Milestone Status | [v0.2.1 Milestone Status]()
Milestone Issues | [v0.2.1 Milestone Issues]()


# 🔮 Future Plans

### The next phase of development is the **Beta** phase.

**Beta** is the second phase of development. During this phase, we will be working on the second release of the OpenLiquid platform. This release will still not implement the full vision of the OpenLiquid platform, but it will be a significant step forward. While we're not planning to release the decentralized nodes in this release, we will be working on the infrastructure that will allow us to do so in the future.

### ***Task List***:

- [ ] Create UI for ORBIT. Currently just a CLI.
- [ ] Write Unit Tests for the entire ORBIT pipeline. Unit Tests are currently isolated in their respective steps.
- [ ] Create UI for OpenLiquid User Dashboard.
- [ ] Implement API for ORBIT stats and metrics, and integrate it into the User Dashboard.


# 🏃‍♂️ Past Releases

## v0.2.0

key | value
--- | ---
Release Date  | 2023-02-24
Release Notes | [v0.2.0 Release Notes]()
Release Status | [v0.2.0 Release Status]()

## v0.1.0

key | value
--- | ---
Release Date  | 2023-02-22
Release Notes | [v0.1.0 Release Notes]()
Release Status | [v0.1.0 Release Status]()

## v0.0.0

key | value
--- | ---
Release Date  | 2023-02-19
Release Notes | [v0.0.0 Release Notes]()
Release Status | [v0.0.0 Release Status]()


# 🛰️ ORBIT Implementations

* Determine the goal and scope of the analysis, such as identifying potential trading opportunities, assessing market trends, or optimizing trading strategies.

* Identify and obtain relevant data sources, such as stock prices, financial reports, and news articles. This could involve scraping websites, accessing APIs, or downloading data from databases.

* Preprocess and clean the data to remove any errors, inconsistencies, or missing values. This step could include converting data types, normalizing values, and filling in missing data.

* Conduct exploratory data analysis (EDA) to gain insights into the data and identify any patterns or relationships. This could involve visualizing the data using charts, graphs, and other tools.

* Apply statistical and machine learning techniques to the data to develop trading algorithms. This could include regression analysis, time series forecasting, and clustering.

* Backtest the trading algorithms using historical data to assess their performance and identify any issues or limitations. This step could involve simulating trades and analyzing the results.

* Refine and optimize the trading algorithms based on the results of the backtesting. This could involve tweaking the parameters of the algorithms or incorporating new data sources.

* Implement the trading algorithms in a live trading environment, such as a trading platform or API. This step requires integrating the algorithms with the trading system and monitoring their performance in real-time.

* Monitor and evaluate the performance of the trading algorithms over time. This could involve analyzing trade data, adjusting the algorithms based on market conditions, and identifying areas for improvement.

* Continuously refine and improve the trading algorithms based on ongoing analysis and feedback. This step requires staying up-to-date with market trends and adapting to changing conditions.

**The data structure for OpenLiquid's algorithmic trading pipeline could include the following components:**

Market Data: Raw data from different sources such as stock exchanges, news outlets, social media platforms, and economic calendars.

Preprocessing Pipeline: This pipeline will transform the raw market data into features that can be used by machine learning models. This process will include the following steps:

a. Data Cleaning: Removing missing or irrelevant data.

b. Feature Engineering: Creating new features that might be useful to the model.

c. Feature Scaling: Normalizing the data so that all features have the same scale.

d. Feature Selection: Selecting only the relevant features for the model.

Machine Learning Models: This component will contain different machine learning models, such as regression, clustering, and classification algorithms, to predict market trends and trading signals.

Trading Strategies: Based on the predictions of the machine learning models, trading strategies will be designed to execute trades in the market. These strategies could be simple or complex, such as mean-reversion, momentum, or trend-following.

Order Management System: This system will receive the trading signals from the trading strategies and execute the trades in the market. It will also manage the orders and handle the order book.

Portfolio Management System: This system will manage the portfolio of the trades executed by the order management system. It will analyze the performance of the portfolio and adjust the trading strategies based on the market conditions.

Risk Management System: This system will manage the risk associated with the trades executed by the order management system. It will monitor the risk factors such as market volatility, liquidity, and counterparty risk, and adjust the trading strategies to minimize the risk.

Reporting and Analysis System: This system will provide the reports and analysis of the trading performance. It will generate the daily, weekly, and monthly reports, and provide the insights and recommendations for the portfolio management system.

The input data for the OpenLiquid's algorithmic trading pipeline will be raw market data from different sources such as stock exchanges, news outlets, social media platforms, and economic calendars. The output of the pipeline will be trading signals generated by the trading strategies and executed by the order management system. The pipeline will also provide the reports and analysis of the trading performance generated by the reporting and analysis system.
