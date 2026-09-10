function hideMatchingJobs(keywords) {
    let jobCard = document.querySelectorAll("article[data-testid='job-card']");
    jobCard.forEach(element => {
        let jobTitle = element.querySelector("[data-automation='jobTitle']");
        let titleText = jobTitle.textContent.toLowerCase();
        let hideCard = keywords.some(word => titleText.includes(word.toLowerCase()));
        if (hideCard) {
            element.style.display = "none";
        }
    });
}

chrome.storage.local.get("keywords", function(result) {
    let words = result.keywords || [];
    hideMatchingJobs(words);
    });