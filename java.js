document.getElementById('regForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Stops the page from refreshing

    const name = document.getElementById('userName').value;
    const phone = document.getElementById('userPhone').value;
    const status = document.getElementById('statusMessage');

    // Simple Logic: Check if phone number is long enough
    if (phone.length >= 10) {
        status.innerHTML = `<p style="color: green;">Processing registration for ${name}...</p>`;
        console.log("Data sent to server:", { name, phone });
    } else {
        status.innerHTML = `<p style="color: red;">Error: Phone number too short.</p>`;
    }
});