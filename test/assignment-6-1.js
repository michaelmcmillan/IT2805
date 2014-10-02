
casper.test.begin('Assignment 6-1: Multimedia on a webpage and forms to external website.', 9, function suit (test) {
    var server = casper.cli.get("server");

    casper.start(server + '/6/exercise-1/multimedia.html');

    casper.then(function () {
        test.assertExists('video[poster="bbb-splash.png"]', "poster attribute was found on video-element");
    });

    casper.thenOpen(server + '/6/exercise-2/form.html', function() {
        test.assertExists('form[method="POST"]', "form with POST method found");
        test.assertExists('form[action$="idi.ntnu.no/~michailg/IT2805/form.php"]', "form posts to correct resource");
    });

    casper.then(function () {
        test.assertExists('input[name="name"][required]');
        test.assertExists('input[name="email"][required]');
        test.assertExists('input[name="address"]');
        test.assertExists('input[name="phone"]');
        test.assertExists('*[name="startDate"][required]');
        test.assertExists('*[name="classes[]"][required]');
    });

    casper.run(function() {
        test.done();
    });
});
