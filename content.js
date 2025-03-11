// Fills forms automatically.
chrome.storage.sync.get("userData", (data) => {
    if (!data.userData) return;

    const { name, email, phone } = data.userData;

    document.querySelectorAll("input").forEach((input) => {
        if (input.name.toLowerCase().includes("name")) {
            input.value = name;
        } else if (input.name.toLowerCase().includes("email")) {
            input.value = email;
        } else if (input.name.toLowerCase().includes("phone")) {
            input.value = phone;
        }
    });
});