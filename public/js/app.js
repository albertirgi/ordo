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

document.addEventListener('DOMContentLoaded', () => {
    const treeCount = document.getElementById('tree-count');
    const targetCount = 5690;
    const duration = 2000;
    const steps = 85;
    const stepDuration = duration / steps;

    let currentCount = 0;
    const increment = targetCount / steps;

    const updateCount = () => {
        currentCount += increment;
        if (currentCount > targetCount) currentCount = targetCount;
        treeCount.textContent = Math.round(currentCount).toLocaleString();
        
        if (currentCount < targetCount) {
            setTimeout(updateCount, stepDuration);
        }
    };

    setTimeout(updateCount, 500);
});

// INDICATOR BAR ANIMATION
document.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        document.querySelector('.section1-bar-inner').classList.add('animate');
    }, 500);
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


// IMAGE
document.addEventListener('DOMContentLoaded', function() {
    const images = [
        "./images/section3-img.webp",
        "./images/section3-img2.webp",
        "./images/section3-img3.webp",
        "./images/section3-img4.webp",
        "./images/section3-img5.webp"
    ];
    let currentIndex = 0;
    const imgElement = document.getElementById('section3-img');
    const nextButton = document.getElementById('next-image');
    const prevButton = document.getElementById('prev-image');
    const indicators = [
        document.getElementById('section3-img1'),
        document.getElementById('section3-img2'),
        document.getElementById('section3-img3'),
        document.getElementById('section3-img4'),
        document.getElementById('section3-img5')
    ];

    function updateImage(index) {
        imgElement.src = images[index];
        indicators.forEach((indicator, i) => {
            indicator.className = i === index ? 'section3-bar-indicator-1' : 'section3-bar-indicator-2';
        });
    }

    nextButton.addEventListener('click', function() {
        currentIndex = (currentIndex + 1) % images.length;
        updateImage(currentIndex);
    });

    prevButton.addEventListener('click', function() {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        updateImage(currentIndex);
    });
});