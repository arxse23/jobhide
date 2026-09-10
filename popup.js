function loadKeywords() {
  chrome.storage.local.get("keywords", function(result) {
    let list = result.keywords || [];
    let ul = document.getElementById("listKeywords");
    ul.innerHTML = "";

    list.forEach(function(keyword) {
        let li = document.createElement("li");
        li.textContent = keyword;
        let button = document.createElement("button")
        button.innerText = "x"
        button.addEventListener("click", () => {
            console.log("remove clicked:", keyword);
            chrome.storage.local.get("keywords", function(result) { 
                let list = result.keywords || [];
                let newList = list.filter(item => item !== keyword);
                chrome.storage.local.set({keywords: newList}, function() {
                    loadKeywords();
                });
             })
        })
        li.appendChild(button);
        ul.appendChild(li);
    });
  });
}

loadKeywords();


let userInput = document.getElementById("keywords")
let addBtn = document.getElementById("addBtn")
addBtn.addEventListener("click", () => {
    let newKeyword = userInput.value;
    chrome.storage.local.get("keywords", function(result) {
        let list = result.keywords || [];
        list.push(newKeyword);
        chrome.storage.local.set({keywords: list}, function() {
            loadKeywords();
            userInput.value = "";
        });
    });
});
