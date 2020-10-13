(function () {
    // Get all images with the `detail-view` class
    var zoomBoxes = document.querySelectorAll('.js-image-magnify');

    // Extract the URL
    zoomBoxes.forEach(function (image) {
        var imageCss = window.getComputedStyle(image, false),
            imageUrl = imageCss.backgroundImage
                .slice(4, -1).replace(/['"]/g, '');

        // Get the original source image
        var imageSrc = new Image();
        imageSrc.onload = function () {
            var imageWidth = imageSrc.naturalWidth,
                imageHeight = imageSrc.naturalHeight,
                ratio = imageHeight / imageWidth;

            // Adjust the box to fit the image and to adapt responsively
            var percentage = ratio * 100 + '%';
            image.style.paddingBottom = percentage;

            // Zoom and scan on mousemove
            image.onmousemove = function (e) {
                // Get the width of the thumbnail
                var boxWidth = image.clientWidth,
                    // Get the cursor position, minus element offset
                    x = e.pageX - this.offsetLeft,
                    y = e.pageY - this.offsetTop,
                    // Convert coordinates to % of elem. width & height
                    xPercent = x / (boxWidth / 100) + '%',
                    yPercent = y / (boxWidth * ratio / 100) + '%';
                console.log('box width ', boxWidth)
                console.log('e.pagex ', e.pageX)
                console.log('e.pageY ', e.pageY)
                console.log('this.offsetLeft ', this.offsetLeft);
                console.log('this.offsetTop ', this.offsetTop);

                // Update styles w/actual size
                Object.assign(image.style, {
                    backgroundPosition: xPercent + ' ' + yPercent,
                    backgroundSize: imageWidth + 'px'
                });
            };

            // Reset when mouse leaves
            image.onmouseleave = function (e) {
                Object.assign(image.style, {
                    backgroundPosition: 'center',
                    backgroundSize: 'cover'
                });
            };
        }
        imageSrc.src = imageUrl;
    });
})();


