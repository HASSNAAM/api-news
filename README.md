﻿# API News

Welcome to the API News project! This is a simple web application that fetches and displays the latest business news from different countries using the News API. The interface is built using Bootstrap for a responsive and modern look.

## Features

- Fetch and display business news for the US, Egypt, and Australia.
- Responsive design that works well on both desktop and mobile devices.
- Loading spinner to indicate when data is being fetched.
- Highlights the active news category in the navbar.

## How to Use

1. Open the `index.html` file in your favorite web browser.
2. Add your API Key.
3. Click on the "US Business News", "Egypt Business News", or "Australia Business News" links in the navbar to load the latest business news for the selected country.
4. Enjoy reading the latest headlines and summaries of top business news articles.

## Code Overview

### HTML Structure

- The main layout is built using Bootstrap classes.
- The navbar allows users to switch between news categories.
- A container holds the news content and a loading spinner.

### JavaScript Functionality

- The `showApi` function fetches news data from the News API.
- The `display` function dynamically generates and inserts news articles into the DOM.
- The `setActiveNavLink` function highlights the active news category link in the navbar.

### CSS Customization

- Custom styles are used to highlight the active navbar link and manage the loading spinner's visibility.

## Setup

1. Clone this repository.
2. Open `index.html` in your web browser.
3. Replace `your_api_key_here` with your actual News API key in the `showApi` function.
4. Start browsing the latest business news!

---

Happy news reading! 📚📰✨
