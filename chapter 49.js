
    
    
        document.addEventListener('DOMContentLoaded', function() {
            var readMoreButtons = document.querySelectorAll('.read-more');
        
            readMoreButtons.forEach(function(button) {
                button.addEventListener('click', function() {
                    var showMoreElement = button.parentElement.querySelector('.show-more');
                    if (showMoreElement.style.display === 'none') {
                        showMoreElement.style.display = 'inline';
                        button.textContent = 'Read less';
                    } else {
                        showMoreElement.style.display = 'none';
                        button.textContent = 'Read more';
                    }
                });
            });
        });   