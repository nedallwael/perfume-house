    // get slider item
    var sliderImages = Array.from(document.querySelectorAll('.slider-container img'));
    // console.log(sliderImages);
    
    // get number of slide
    var slidesCount = sliderImages.length;
    // console.log(slidesCount);

    // set current slide
    var currentSlide = 1;

    // get slide number element
    var slideNumberElement = document.getElementById('slider-number');

    // previous and next buttons
    var nextButton = document.getElementById('next');
    var prevButton = document.getElementById('prev');

    // handle click on previous and next button
    nextButton.onclick = nextSlide;
    prevButton.onclick = prevSlide;

    // next slide function
    function nextSlide() {
        // console.log('Next');
    }

    // previous slide function
    function prevSlide() {
        // console.log('Previous');
    }