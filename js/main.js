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

         // Get pagination Items | Array.form [ES6 Feature]
         var paginationsBullets = Array.from(document.querySelectorAll('#pagination-ul li'));

        //  loop throught all bullets item
        for(var i = 0; i < paginationsBullets.length; i++) {

            paginationsBullets[i].onclick = function () {

                currentSlide=parseInt(this.getAttribute('data-index'));

                theChecker();
            }

        }

        // Trigger The Checker Function
        theChecker();





        // next slide function
        function nextSlide() {
            // console.log('Next');

            if (nextButton.classList.contains('disabled')) {
                // do nothing
                return false;
            }else {

                currentSlide++;

                theChecker();
            }
        }


        // previous slide function
        function prevSlide() {
            // console.log('Previous');

            if (prevButton.classList.contains('disabled')) {

                return false;

            }else {

                currentSlide--;

                theChecker();
            }
        }


        // Create The Checker Function
        function theChecker() {

            // Set The Slide Number
            slideNumberElement.textContent = 'Slide #' + (currentSlide) + ' of ' + (slidesCount);
            
            // remove all active classes
            removeAllActive();

            // Set Active Class On Current Slide
            sliderImages[currentSlide - 1].classList.add('active');

            // Set Active Class on Current Pagination Item
            paginationCreatedUl.children[currentSlide - 1].classList.add('active');
            // console.log(paginationCreatedUl.children);

            // check if current slide is the first
            if (currentSlide == 1) {

                // add disabled class on previous button
                prevButton.classList.add('disabled');

            }else {

                // remove disabled class from previous button
                prevButton.classList.remove('disabled');
            }

            // check if current slide is the last
            if (currentSlide == slidesCount) {

                 // add disabled class on next button
                nextButton.classList.add('disabled');

            }else {

                 // remove disabled class from next button
                nextButton.classList.remove('disabled');
            }

        
        }


        // remove all active classes from images and pagination bullets
        function removeAllActive() {

            // loop throught images
            sliderImages.forEach(function (img) {

                img.classList.remove('active');
                
            });

            // loop throught pagination bullets
            paginationsBullets.forEach(function (bullet) {
            
                bullet.classList.remove('active');

            });
            
        }