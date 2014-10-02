
casper.test.begin('Assignment 5-2: Re-create the image little-boxes.jpg.', 4, function suit (test) {
    var server = casper.cli.get("server");

    casper.start(server + '/5/exercise-2/positioning.html');

    casper.then(function () {

        test.assertEval(function() {
            return document.querySelector('div#three').clientWidth  === 100
                && document.querySelector('div#three').clientHeight === 100;
        }, "div#three has correct dimensions (100px * 100px)");

        test.assertEval(function() {
            return window.getComputedStyle(document.getElementById('three')).backgroundColor  === 'rgb(156, 137, 81)';
        }, "div#three is the right color rgb(156, 137, 81)");

    });

    casper.then(function () {

        test.assertEval(function() {
            return document.querySelector('div#four').clientWidth  === 100
                && document.querySelector('div#four').clientHeight === 100;
        }, "div#four has correct dimensions (100px * 100px)");

        test.assertEval(function() {
            return window.getComputedStyle(document.getElementById('four')).backgroundColor  === 'rgb(71, 171, 222)';
        }, "div#four is the right color rgb(71, 171, 222)");

    });

    casper.run(function() {
        test.done();
    });
});
