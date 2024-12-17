function updatePrice() {
    const foodSelect = document.getElementById('foodName');
    const selectedOption = foodSelect.options[foodSelect.selectedIndex];
    const price = selectedOption.getAttribute('data-price');
    document.getElementById('foodPrice').value = price; // Update harga otomatis
}

document.getElementById('foodForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Get form values
    const foodName = document.getElementById('foodName').value;
    const foodQuantity = parseInt(document.getElementById('foodQuantity').value);
    const foodPeriod = document.getElementById('foodPeriod').value;
    const foodPrice = parseInt(document.getElementById('foodPrice').value);
    
    // Add the new food data to the array
    foodData.push({
        name: foodName,
        quantity: foodQuantity,
        period: foodPeriod,
        price: foodPrice
    });
    
    // Calculate the moving average
    const movingAverage = calculateMovingAverage(foodData.map(data => data.quantity), 3);
    
    // Create a new row
    const table = document.getElementById('foodTable').getElementsByTagName('tbody')[0];
    const newRow = table.insertRow();
    
    // Insert cells in the new row
    const cell1 = newRow.insertCell(0);
    const cell2 = newRow.insertCell(1);
    const cell3 = newRow.insertCell(2);
    const cell4 = newRow.insertCell(3);
    const cell5 = newRow.insertCell(4);
    
    // Add text to the new cells
    cell1.textContent = foodName;
    cell2.textContent = foodQuantity;
    cell3.textContent = foodPeriod;
    cell4.textContent = foodPrice;
    cell5.textContent = movingAverage;
    
    // Update the total earnings
    totalEarnings += foodPrice * foodQuantity;
    document.getElementById('totalEarnings').textContent = totalEarnings;
    
    // Clear the form
    document.getElementById('foodForm').reset();
    updatePrice(); // Reset harga setelah form dikosongkan
});
script>
    function logout() {
        // Contoh: Mengarahkan ke halaman login
        window.location.href = 'login.html';
        
        // Jika menggunakan sesi, tambahkan logika penghapusan sesi di sini:
        // sessionStorage.clear();
        // localStorage.clear();
    }
</script>