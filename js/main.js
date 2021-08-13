const initZoom = {
    center: [-53.99235736195203, -27.426307807866984],
    zoom: 4.83
}

const map = new mapboxgl.Map({
    container: 'map',
    style: 'https://api.maptiler.com/maps/streets/style.json?key=get_your_own_OpIi9ZULNHzrESv6T2vL',
    ...initZoom

});

let activeChapterName = 'logo';

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
    legend.style.height = `${layers.length * 18.2}px`
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
    map.flyTo(chapters[chapterName].zoom);
    //document.getElementById(chapterName).classList.add('active');
    await loadGeoJSON(chapterName)
    loadLegend(chapterName)
    activeChapterName = chapterName
}

function unsetChapter() {
    for (var sourceName in chapters) {
        var styles = JSON.parse(JSON.stringify(chapters[sourceName].styles))
        for (let style of styles) {
            try {
                map.removeLayer(style.id)
            } catch (error) {

            }
        }
        try {
            map.removeSource(sourceName)
        } catch (error) {

        }
    }
    activeChapterName = ''
    const legend = document.getElementById('legend');
    legend.style.display = 'none'
}

window.onscroll = async () => {
    let loaded = false;
    for (const chapterName in chapters) {
        if (
            isElementOnScreen(chapterName) &&
            chapters[chapterName] != undefined
        ) {
            loaded = true;
            if (chapterName == activeChapterName) break
            unsetChapter()
            await setCurrentChapter(chapterName)
            break;
        }
    }
    if (!loaded) unsetChapter()
};

map.on('load', () => {
    map.flyTo( initZoom )
    window.scrollTo(0, 0)
    /* map.on('mouseup', () => {
        const { lng, lat } = map.getCenter();
        console.log([lng, lat])
        console.log(map.getZoom())
    }); */
})


