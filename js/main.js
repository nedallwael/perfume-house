        // Get Slider Items | Array.form [ES6 Feature]
        var sliderImages = Array.from(document.querySelectorAll('.slider-container img'));

        // Get Number Of Slides
        var slidesCount = sliderImages.length;

        // Set Current Slide
        var currentSlide = 1;

        // Slide Number Element
        var slideNumberElement = document.getElementById('slide-number');

        // Previous and Next Buttons
        var nextButton = document.getElementById('next');
        var prevButton = document.getElementById('prev');

        // Handle Click on Previous and Next Buttons
        nextButton.onclick = nextSlide;
        prevButton.onclick = prevSlide;

        // Create The Main UL Element
        var paginationElement = document.createElement('ul');

        // Set ID On Created Ul Element
        paginationElement.setAttribute('id', 'pagination-ul');

        // Create List Items Based On Slides Count
        for (var i = 1; i <= slidesCount; i++) {

        // Create The LI
        var paginationItem = document.createElement('li');

        // Set Custom Attribute
        paginationItem.setAttribute('data-index', i);

        // Set Item Content
        paginationItem.appendChild(document.createTextNode(i));

        // Append Items to The Main Ul List
        paginationElement.appendChild(paginationItem);

        }

        // Add The Created UL Element to The Page
        document.getElementById('indicators').appendChild(paginationElement);

        // Get The New Created UL
        var paginationCreatedUl = document.getElementById('pagination-ul');

        // Trigger The Checker Function
        theChecker();





        // next slide function
        function nextSlide() {
            // console.log('Next');
        }

        // previous slide function
        function prevSlide() {
            // console.log('Previous');
        }

        // Create The Checker Function
        function theChecker() {

            // Set The Slide Number
            slideNumberElement.textContent = 'Slide #' + (currentSlide) + ' of ' + (slidesCount);
            
            // Set Active Class On Current Slide
            sliderImages[currentSlide - 1].classList.add('active');

            // Set Active Class on Current Pagination Item
            paginationCreatedUl.children[currentSlide - 1].classList.add('active');
            // console.log(paginationCreatedUl.children);
        
        }