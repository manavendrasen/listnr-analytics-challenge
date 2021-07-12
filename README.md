<h1 align="center">Frontend (Google) Analytics
Challenge</h1>
<p align="center">Repository for Frontend (Google) Analytics Challenge for Internship at Listnr Inc.</p>

## Preview

**Line Chart** - one feature (visits, hits etc) of plotted by day and month

![Line Chart](https://user-images.githubusercontent.com/26283488/125293866-72014f80-e341-11eb-80b8-536c000218a9.png)

**Pie Chart** - displays for a channel grouping, the total amounts, and percentage for each category in the selected range.

![Pie Chart](https://user-images.githubusercontent.com/26283488/125294255-bf7dbc80-e341-11eb-8c3b-0cee7cbdf02b.png)

<!-- GETTING STARTED -->

## Getting Started

To get a local copy up and running follow these simple steps.

**For node script**
Follow the instructions [here](https://github.com/manavendrasen/listnr-analytics-challenge/tree/main/json_node_script#readme)

### Prerequisites

This is an example of how to list things you need to use the software and how to install them.

- npm

```bash
npm install npm@latest -g
```

### Installation

1. Clone the repo

```bash
git clone https://github.com/manavendrasen/listnr-analytics-challenge

cd listnr-analytics-challenge
```

2. Install NPM packages

```bash
yarn install
```

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

## File Structure

```
src
├── App.tsx
├── components
│   ├── DateRangePicker
│   │   ├── DateRangePicker.css
│   │   └── index.tsx
│   ├── LineChart
│   │   └── index.tsx
│   ├── Navbar
│   │   ├── index.tsx
│   │   └── Navbar.css
│   └── PieChart
│       └── index.tsx
├── constants
│   ├── api
│   │   └── stats.ts
│   ├── colors
│   │   └── chartColors.ts
│   ├── models
│   │   ├── pageViewStats.ts
│   │   └── sessions.ts
│   └── routes.ts
├── index.css
├── index.tsx
├── utils
│   ├── getAmountGrouped.ts
│   ├── getCategoryDataByFeature.ts
│   ├── getData.ts
│   ├── getGroupedSessionList.ts
│   ├── getSessionsByDateRange.ts
│   ├── getSessionsByStartEndDate.ts
│   └── Stats
│       └── sortStats.ts
└── views
    ├── ChannelGroupingStats
    │   ├── ChannelGroupingStats.css
    │   └── index.tsx
    ├── index.tsx
    └── PageViewStats
        ├── index.tsx
        └── PageViewStats.css


```

## Contact

Manavendra Sen

- Portfolio: [https://www.manavendrasen.co/](https://www.manavendrasen.co/)
- Phone: [+91 78790 71212](tel:+917879071212)
- Email: [manavendra4288@gmail.com](mailto:manavendra4288@gmail.com)
