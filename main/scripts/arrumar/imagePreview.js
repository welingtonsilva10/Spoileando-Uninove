document.addEventListener('DOMContentLoaded', function() {
    const imageInput = document.getElementById('picture_input');
    const imagePreview = document.getElementById('imagePreview');

    imageInput.addEventListener('change', function() {
        displayImagePreview(this);
    });

    function displayImagePreview(input) {
        if (input.files && input.files[0]) {
            const reader = new FileReader();

            reader.onload = function(e) {
                imagePreview.src = e.target.result;
            };

            reader.readAsDataURL(input.files[0]);
        }
    }
});
