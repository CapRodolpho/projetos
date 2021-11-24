const initZoom = {
    center: [-53.99235736195203, -27.426307807866984],
    zoom: 4.83
}

const map = new maplibregl.Map({
    container: 'map',
    style: 'https://api.maptiler.com/maps/streets/style.json?key=get_your_own_OpIi9ZULNHzrESv6T2vL',
    ...initZoom

});

let activeChapterName = null;

function isElementOnScreen(id) {
    try {
        const element = document.getElementById(id);
        const rect = element.getBoundingClientRect();
        return !(
            (rect.x + rect.width) < 0
            || (rect.y + rect.height) < 0
            || (rect.x > window.innerWidth || rect.y > window.innerHeight)
        );
    } catch (error) {
        return false
    }
}

function loadLegend(chapterName) {
    var layers = chapters[chapterName].legend.filter((value, index) => { return (index % 2) == 0 });
    var colors = chapters[chapterName].legend.filter((value, index) => { return (index % 2) != 0 });

    const legend = document.getElementById('legend');
    legend.style.height = `${layers.length * 22}px`
    legend.style.display = 'block'
    legend.innerHTML = ''
    for (i = 0; i < layers.length; i++) {
        var layer = layers[i];
        var color = colors[i];
        var item = document.createElement('div');
        var key = document.createElement('span');
        key.className = 'legend-key';
        key.style.backgroundColor = color;

        var value = document.createElement('span');
        value.className = 'legend-value';
        value.innerHTML = layer;
        item.appendChild(key);
        item.appendChild(value);
        legend.appendChild(item);
    }
}

function loadGeoJSON(chapterName) {
    return fetch(`data/${chapterName}.json`
        , {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        }
    )
        .then(function (response) {
            return response.json();
        })
        .then(async function (geoJson) {
            map.addSource(chapterName, {
                "type": "geojson",
                "data": geoJson
            })
            var styles = JSON.parse(JSON.stringify(chapters[chapterName].styles))
            for (let style of styles) {
                map.addLayer(style)
            }
        });

}

async function setCurrentChapter(chapterName) {
    map.fitBounds(chapters[chapterName].zoom);
    //document.getElementById(chapterName).classList.add('active');
    await loadGeoJSON(chapterName)
    loadLegend(chapterName)
    activeChapterName = chapterName
}

function unsetChapter() {
    if (!activeChapterName) return
    var styles = JSON.parse(JSON.stringify(chapters[activeChapterName].styles))
    for (let style of styles) {
        map.removeLayer(style.id)
    }
    map.removeSource(activeChapterName)
    activeChapterName = ''
    const legend = document.getElementById('legend');
    legend.style.display = 'none'
}


map.on('load', () => {
    map.flyTo(initZoom)
    document.getElementById('info').scrollTo(0, 0)
    /* map.on('mouseup', () => {
        console.log(map.getZoom())
    }); */
})


//map.scrollZoom.disable();
map.addControl(new maplibregl.NavigationControl());

function plugin({ swiper, extendParams, on }) {
    extendParams({
        debugger: false,
    });

    on('slideChange', async () => {
        if (!swiper.slides[swiper.previousIndex]) return
        let previousSlideId = swiper.slides[swiper.previousIndex].getAttribute('id')
        let currentSlideId = swiper.slides[swiper.activeIndex].getAttribute('id')
        if (previousSlideId == currentSlideId) return
        if (Object.keys(chapters).includes(previousSlideId)) {
            unsetChapter()
        }
        if (!Object.keys(chapters).includes(currentSlideId)) return
        await setCurrentChapter(currentSlideId)

    });

}

var swiperDesktop = new Swiper(".swiper-desktop", {
    modules: [plugin],
    direction: "horizontal",
    mousewheel: true,
    pagination: {
        el: ".swiper-pagination.desktop",
        clickable: true,
        dynamicBullets: true,
    },
    navigation: {
        nextEl: '.swiper-button-next.desktop',
        prevEl: '.swiper-button-prev.desktop',
    }
});

var swiperMobile = new Swiper(".swiper-mobile", {
    modules: [plugin],
    direction: "horizontal",
    mousewheel: true,
    pagination: {
        el: ".swiper-pagination.mobile",
        clickable: true,
        dynamicBullets: true,
    },
    navigation: {
        nextEl: '.swiper-button-next.mobile',
        prevEl: '.swiper-button-prev.mobile',
    }
});

getCurrentSwiper = () => {
    return (window.innerWidth <= 960) ? swiperMobile : swiperDesktop
}

getSlideIndex = (slideId) => {
    let screenMode = (window.innerWidth <= 960) ? 'mobile' : 'desktop'
    let index
    document.querySelectorAll(`.swiper-slide.${screenMode}`).forEach((el, idx) => {
        if (el.getAttribute('id') == slideId) {
            index = idx
        }
    })
    return index
}

document
    .querySelector('#summary-button-desktop')
    .addEventListener('click', (e) => {
        e.preventDefault();
        getCurrentSwiper().slideTo(
            getSlideIndex('summary-desktop'),
            0
        );
    });

document
    .querySelector('#summary-button-mobile')
    .addEventListener('click', (e) => {
        e.preventDefault();
        getCurrentSwiper().slideTo(
            getSlideIndex('summary-mobile'),
            0
        );
    });


document
    .querySelectorAll('a')
    .forEach(el => {
        if (el.getAttribute('id') && el.getAttribute('id').includes('summary-button')) {
            return
        }
        el.addEventListener('click', (e) => {
            e.preventDefault();
            getCurrentSwiper().slideTo(
                getSlideIndex(
                    e.target.getAttribute('id')
                ),
                0
            );
        });
    })


