document.addEventListener('DOMContentLoaded', () => {
    // Logic for Flight/Hotel tab switching (from previous response)
    const tabButtons = document.querySelectorAll('.tab-button');
    const searchForms = document.querySelectorAll('.search-form');

    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            const targetTab = button.dataset.tab;

            tabButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            searchForms.forEach(form => form.style.display = 'none');
            document.getElementById(`${targetTab}-form`).style.display = 'flex';
        });
    });

    // Optional: Logic for Recommended Destination tabs (Popular, Adventure, Beach)
    // If you want these tabs to filter content, you'll need more complex JS.
    // For now, let's just make the active state work:
    const destTabButtons = document.querySelectorAll('.dest-tab-button');
    destTabButtons.forEach(button => {
        button.addEventListener('click', () => {
            destTabButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            // Add filtering logic here if you have different content for each tab
        });
    });


    // Optional: Initialize a date picker library if you include one
    /*
    flatpickr("#leave-date", {
        dateFormat: "d M, D",
        // Add more options as needed
    });
    flatpickr("#return-date", {
        dateFormat: "d M, D",
        // Add more options as needed
    });
    flatpickr("#check-in", {
        dateFormat: "d M, D",
    });
    flatpickr("#check-out", {
        dateFormat: "d M, D",
    });
    */
});