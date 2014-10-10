
casper.test.begin('Assignment 8-1: Log to console 1..20 (inclusively)', 1, function suit (test) {
    var server = casper.cli.get("server");

    casper.start(server + '/8/exercise-1/multimedia.html');

    casper.then(function () {
        test.assertExists('video[poster="bbb-splash.png"]', "poster attribute was found on video-element");
    });

    casper.run(function() {
        test.done();
    });
});
