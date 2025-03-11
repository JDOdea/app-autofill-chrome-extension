document.getElementById("save").addEventListener("click", () => {
    const userData = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        phone: document.getElementById("phone").value
    };

    chrome.storage.sync.set({ userData }, () => {
        alert("Data saved!");
    });
});