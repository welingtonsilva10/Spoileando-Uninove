document.addEventListener('DOMContentLoaded', function() {

    imgDin[0].addEventListener('change', function() {
        displayImagePreview(this);
    });

    function displayImagePreview(input) {
        if (input.files && input.files[0]) {
            const reader = new FileReader();

            reader.onload = function(e) {
                imgDin[1].src = e.target.result;
            };

            reader.readAsDataURL(input.files[0]);
        }
    }
});