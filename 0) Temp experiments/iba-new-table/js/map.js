const mapInit = (locationArr) => {
    if(!locationArr.length) { return false }

    let isMobile = true;
    if(window.outerWidth > 992) {
        const a = document.querySelector('#js-scroll-map').offsetTop + 50;
        $('#js-scroll-map').css('height', `calc(100vh - ${a}px)`);
        $('body').addClass('overflow-h');
        isMobile = false;
    }

    const centered = new google.maps.LatLng(locationArr[0][0], locationArr[0][1]);

    const mapOptions = {
        center: centered,
        zoom: 15,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        disableDefaultUI: true,
    };

    const mapCanvas = document.getElementById("js-map-canvas");
    const map = new google.maps.Map(mapCanvas, mapOptions);

    const infoWindow = new google.maps.InfoWindow();
    let marker, i;
    const baseURL = window.location.origin;

    for (i = 0; i < locationArr.length; i++) {
        marker = new google.maps.Marker({
            position: new google.maps.LatLng(locationArr[i][0], locationArr[i][1]),
            animation: google.maps.Animation.DROP,
            map: map,
            icon: {
                url: baseURL + '/ibar/img/icons/'+ locationArr[i][2] +'-map.svg',
                scaledSize: new google.maps.Size(95, 95),
            }
        });


        const clickSlideSelector = (isMobile) ? '.js-slide-button' : '.js-slide-header';
        document.querySelectorAll(clickSlideSelector)[i].addEventListener('click', ((marker) => {
            return (e) => {
                /*infoWindow.setContent(locationArr[i][2]);
                infoWindow.open(map, marker);*/
                const clicked = !!$(e.target).hasClass('clicked');
                resizeMarker(marker, map, marker.getPosition(), clicked);
                e.target.classList.add('clicked');
                $(('#js-map-block')).toggleClass('left-0');
                $('.map-gradient').toggleClass('d-none');
            }
        })(marker, map));
    }
};


const resizeMarker = (marker, map, pos = {}, isClicked = false) => {
    const oldIcon = marker.getIcon();
    const sizeX = oldIcon.scaledSize.width;
    const sizeY = oldIcon.scaledSize.height;
    const newIcon = { url: oldIcon.url, scaledSize: new google.maps.Size(sizeX + 50, sizeY + 50) };
    if(!isClicked) {
        marker.setIcon(newIcon);
    }
    if(Object.keys(pos).length) {
        map.panTo(pos);
    }
};


const getLocations = (selector) => {
    const locations = document.querySelectorAll(selector);
    if(!locations.length) { return [] }

    return Array.from(locations).map(el => [Number(el.dataset.lat), Number(el.dataset.lng), el.dataset.icon]);
};

const mapClose = () => {
    $('.map-close').on('click', e => {
        $('#js-map-block').toggleClass('left-0');
        $('.map-gradient').toggleClass('d-none');
    });
};
mapClose();

mapInit(getLocations('.js-slide-header'));