document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM Content Loaded. Initializing script.');

    const categoryFilterDropdown = document.getElementById('categoryFilter');

    const carousel = document.querySelector('.carousel');
    const list = carousel ? carousel.querySelector('.list') : null;
    let items = list ? Array.from(list.querySelectorAll('.item')) : [];
    const seeMoreButtons = document.querySelectorAll('.seeMore');
    const backArrows = document.querySelectorAll('.back-arrow');
    const secondNavLinks = document.querySelectorAll('.second-nav .nav-links a');

    
    
    let currentActive = 0;
    let autoSlideInterval;

    if (categoryFilterDropdown) {
        categoryFilterDropdown.addEventListener('change', (event) => {
            console.log('Category filter changed to:', event.target.value);
        });
    }

    if (secondNavLinks.length > 0) {
        secondNavLinks.forEach(link => {
            link.addEventListener('mouseenter', function () {
                this.classList.add('nav-link-hover-effect');
            });
            link.addEventListener('mouseleave', function () {
                this.classList.remove('nav-link-hover-effect');
            });
        });
    }

    if (carousel && list && items.length > 0) {

        function setCssVariables() {
            items.forEach(item => {
                const intro = item.querySelector('.intro');
                const detail = item.querySelector('.detail');
                if (intro) {
                    intro.querySelectorAll('.title, .topic, .des, .seeMore').forEach(el => {
                        el.style.animation = 'none';
                        void el.offsetWidth;
                    });
                }
                if (detail) {
                    detail.querySelectorAll('.title, .des, .specification, .checkout').forEach(el => {
                        el.style.animation = 'none';
                        void el.offsetWidth;
                    });
                }
            });

            items.forEach((item, index) => {
                const relativeIndex = (index - currentActive + items.length) % items.length;

                let transformValue, filterValue, zIndexValue, opacityValue, pointerEventsValue;

                if (relativeIndex === 0) {
                    transformValue = 'var(--item2-transform)';
                    filterValue = 'var(--item2-filter)';
                    zIndexValue = 'var(--item2-zIndex)';
                    opacityValue = 'var(--item2-opacity)';
                    pointerEventsValue = 'auto';
                } else if (relativeIndex === 1) {
                    transformValue = 'var(--item3-transform)';
                    filterValue = 'var(--item3-filter)';
                    zIndexValue = 'var(--item3-zIndex)';
                    opacityValue = 'var(--item3-opacity)';
                    pointerEventsValue = 'auto';
                } else if (relativeIndex === 2) {
                    transformValue = 'var(--item4-transform)';
                    filterValue = 'var(--item4-filter)';
                    zIndexValue = 'var(--item4-zIndex)';
                    opacityValue = 'var(--item4-opacity)';
                    pointerEventsValue = 'auto';
                } else if (relativeIndex === items.length - 1) {
                    transformValue = 'var(--item1-transform)';
                    filterValue = 'var(--item1-filter)';
                    zIndexValue = 'var(--item1-zIndex)';
                    opacityValue = 'var(--item1-opacity)';
                    pointerEventsValue = 'none';
                } else {
                    transformValue = 'var(--item1-transform)';
                    filterValue = 'var(--item1-filter)';
                    zIndexValue = 'var(--item1-zIndex)';
                    opacityValue = 'var(--item1-opacity)';
                    pointerEventsValue = 'none';
                }

                item.style.transform = transformValue;
                item.style.filter = filterValue;
                item.style.zIndex = zIndexValue;
                item.style.opacity = opacityValue;
                item.style.pointerEvents = pointerEventsValue;

                const intro = item.querySelector('.intro');
                const detail = item.querySelector('.detail');

                if (!carousel.classList.contains('showDetail')) {
                    if (intro) intro.style.opacity = (relativeIndex === 0) ? 1 : 0;
                    if (detail) detail.style.opacity = 0;
                } else {
                    if (intro) intro.style.opacity = 0;
                    if (detail) detail.style.opacity = (relativeIndex === 0) ? 1 : 0;
                }

                item.style.transition = 'transform 0.6s ease, filter 0.6s ease, opacity 0.6s ease, z-index 0s 0.3s';
            });

            if (!carousel.classList.contains('showDetail')) {
                const activeItemIntro = items[currentActive].querySelector('.intro');
                if (activeItemIntro) {
                    activeItemIntro.querySelectorAll('.title, .topic, .des, .seeMore').forEach((el, i) => {
                        el.style.animation = `showContent 0.35s ${0.5 + i * 0.1}s ease-in-out 1 forwards`;
                    });
                }
            }
        }

        function startAutoSlide() {
            clearInterval(autoSlideInterval);
            autoSlideInterval = setInterval(() => {
                currentActive = (currentActive + 1) % items.length;
                setCssVariables();
            }, 3500);
        }

        setCssVariables();
        startAutoSlide();

        carousel.addEventListener('mouseenter', () => clearInterval(autoSlideInterval));
        carousel.addEventListener('mouseleave', () => {
            if (!carousel.classList.contains('showDetail')) {
                startAutoSlide();
            }
        });

       document.querySelectorAll('.seeMore').forEach(button => {
    button.addEventListener('click', (event) => {
        const clickedItem = event.target.closest('.item');
        if (!clickedItem) return;

        // Always fetch fresh list of items from DOM
        const list = document.querySelector('.carousel .list');
        const currentItems = Array.from(list.children);
        
        // Highlight the clicked item
        currentItems.forEach(item => item.classList.remove('active'));
        clickedItem.classList.add('active');

        // Set current active index based on updated DOM
        currentActive = currentItems.indexOf(clickedItem);

        // Show detail and update CSS
        document.querySelector('.carousel').classList.add('showDetail');
        setCssVariables();

        // Stop the auto slide
        clearInterval(autoSlideInterval);

        // Play animation on detail section
        const detail = clickedItem.querySelector('.detail');
        if (detail) {
            detail.querySelectorAll('.title, .des, .specification, .checkout').forEach((el, i) => {
                el.style.animation = `showContent 0.35s ${0.5 + i * 0.1}s ease-in-out 1 forwards`;
            });
        }
    });
});


        backArrows.forEach((arrow) => {
            arrow.addEventListener('click', () => {
                carousel.classList.remove('showDetail');
                items.forEach(item => item.classList.remove('active'));
                setCssVariables();
                startAutoSlide();
            });
        });

        document.querySelectorAll('.detail .checkout button').forEach(button => {
            button.addEventListener('click', (event) => {
                event.preventDefault();
                const itemTitle = event.target.closest('.item').querySelector('.detail .title').textContent;
                if (event.target.textContent === 'ADD TO CART') {
                    console.log(`"${itemTitle}" added to cart.`);
                    window.location.href = 'cart.html';
                } else if (event.target.textContent === 'BUY NOW') {
                    console.log(`Buying "${itemTitle}" now.`);
                }
            });
        });
    }
});


// Function to add product to cart
function addToCart(productName, price) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    // Check if product already in cart
    let existing = cart.find(item => item.name === productName);
    if (existing) {
        existing.quantity += 1;
    } else {
        cart.push({ name: productName, price: price, quantity: 1 });
    }

    localStorage.setItem('cart', JSON.stringify(cart));
    alert(productName + " added to cart!");
}

// Example usage for your product cards
document.querySelectorAll('.add-to-cart-btn').forEach(button => {
    button.addEventListener('click', function() {
        const productName = this.getAttribute('data-name');
        const price = parseFloat(this.getAttribute('data-price'));
        addToCart(productName, price);
    });
});


