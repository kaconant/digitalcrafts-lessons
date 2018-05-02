/*

Design
JS Logic
Features That Need to be Added

Or start with HTML/CSS and move onto JS


Modular JS

script.js or init.js -- factory for js classes

-------------
Page 1

$(function() {
    var currentModule;

    $('.map').click(function() {
        var currentModule = new MapModule();
    });

    $('.search').click(function() {
        var currentModule = new SearchModule('.app');
    });
})

-------------
Page 2

class MapModule() {
    constructor() {
        console.log('Map Module is initiatlizing');
        this.container = $(container);

        this.render();
    }

    render() {
        this.container.empy();
        this.container.append('<div>This is a map</div>')

    }
    dropPins() {

    }
}
        this.container.append('<button class="mapButton">Map</button>')
        this.bindClickListeners();

*/