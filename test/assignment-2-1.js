
casper.test.begin('Assignment 2-1: Heading, an image and a short text with two paragraphs, each with one heading', 3, function suit (test) {
    var server = casper.cli.get("server");

    casper.start(server + '/2/exercise-1', function () {
        test.assertEval(function() {
            return __utils__.findAll("h1").length === 1;
        }, "a title for the page (h1)");
    });

    casper.then(function() {
        test.assertEval(function() {
            return (__utils__.findAll("h2 + p").length == 2)
            ||     (__utils__.findAll("h3 + p").length == 2)
            ||     (__utils__.findAll("h4 + p").length == 2);
        }, "a pair of one header followed by a paragraph");
    });

    casper.then(function() {
        test.assertExists('img', "found an image (portrait) on the page.");
    });

    casper.run(function() {
        test.done();
    });
});
