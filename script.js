// Array of news articles
const newsArticles = [
    {
        title: "Stock Market Trends: How to Stay Ahead of the Curve",
        content: "The stock market is constantly evolving, and investors need to be strategic. Here's how you can stay on top...",
        updateTime: "Updated 10 minutes ago",
        link: "#"
    },
    {
        title: "Crypto Volatility: What Investors Need to Know",
        content: "Cryptocurrency continues to see dramatic price changes. Learn what factors influence these fluctuations...",
        updateTime: "Updated 30 minutes ago",
        link: "#"
    },
    {
        title: "Trading Strategies for the Upcoming Quarter",
        content: "Prepare for the next trading quarter with these actionable strategies. Discover insights on risk management...",
        updateTime: "Updated 1 hour ago",
        link: "#"
    },
    {
        title: "Understanding Technical Indicators for Better Decision Making",
        content: "Learn the basics of technical indicators and how they can help you make more informed trading decisions...",
        updateTime: "Updated 2 hours ago",
        link: "#"
    }
];

// Function to display the news feed
function displayNewsFeed() {
    const newsFeedContainer = document.getElementById("news-feed");

    // Clear the existing content
    newsFeedContainer.innerHTML = '';

    // Loop through the news articles and create HTML elements
    newsArticles.forEach(article => {
        const newsItem = document.createElement("div");
        newsItem.classList.add("news-item");

        newsItem.innerHTML = `
            <h3><a href="${article.link}">${article.title}</a></h3>
            <p>${article.content}</p>
            <div class="update-time">${article.updateTime}</div>
        `;

        // Append the news item to the news feed container
        newsFeedContainer.appendChild(newsItem);
    });
}

// Call the function to display the news feed when the page loads
window.onload = displayNewsFeed;
