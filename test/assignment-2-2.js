
casper.test.begin('Assignment 2-2: Organize links in a bulleted list.', 1, function suit (test) {
    var server = casper.cli.get("server");

    casper.start(server + '/2/exercise-2/linkorama.html', function () {
        test.assertEval(function() {
            return __utils__.findAll("ul > li > a").length === 19;
        }, "19 links within an unordered list found");
    });

    casper.run(function() {
        test.done();
    });
});
