// Handle login, signup, and history as before

// Automatically load history when visiting the history page
window.onload = async function () {
    const username = localStorage.getItem('username');
    if (window.location.pathname.includes('history.html')) {
        if (username) {
            loadHistory(username);
        } else {
            document.getElementById('history').innerHTML = "<p>Please log in to view your history.</p>";
        }
    }
};
