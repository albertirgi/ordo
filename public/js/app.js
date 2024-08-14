// SECTION 1
document.addEventListener('DOMContentLoaded', function() {
    const categoryItems = document.querySelectorAll('.section1-category-item');
    
    categoryItems.forEach(item => {
        item.addEventListener('click', function(event) {
            event.preventDefault();
            categoryItems.forEach(btn => btn.classList.remove('active'));
            item.classList.add('active');
        });
    });
});

// SECTION 3
const indicators = document.querySelectorAll('.section3-bar-indicator-1, .section3-bar-indicator-2');

const leftButton = document.querySelector('.button-arrow-left');
const rightButton = document.querySelector('.button-arrow-right');

let activeIndex = 0;

function updateIndicators(index) {
    indicators.forEach((indicator, i) => {
        indicator.style.backgroundColor = i === index ? '#2D9444' : '#DDDDDD';
    });
}

rightButton.addEventListener('click', () => {
    activeIndex = (activeIndex + 1) % indicators.length;
    updateIndicators(activeIndex);
});

leftButton.addEventListener('click', () => {
    activeIndex = (activeIndex - 1 + indicators.length) % indicators.length;
    updateIndicators(activeIndex);
});

updateIndicators(activeIndex);
