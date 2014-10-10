
casper.test.begin('Assignment 8-2: Create a stopwatch', 3, function suit (test) {
    var server = casper.cli.get("server");

    casper.start(server + '/8/exercise-2/index.html');

    /* Start the stopwatch */
    casper.then(function() {
        this.click('button#toggle-button');
    });
    casper.then(function () {
        test.assertSelectorDoesntHaveText('output#display-area', '00:00:00.000', 'Stopwatch started');
    });

    /* Reset the stopwatch */
    casper.then(function() {
        this.click('button#reset-button');
    });
    casper.then(function () {
        test.assertSelectorHasText('output#display-area', '00:00:00.000', 'Stopwatch reset');
    });

    /* Start stopwatch, wait 5 seconds, evaluate */
    casper.then(function () {
        this.click('button#toggle-button');
    });
    casper.then(function () {
        this.echo('Waiting for 5 seconds to pass.')
        this.wait(5000, function () {
            test.assertEval(function() {
                return parseInt(__utils__.findOne('output#display-area').textContent[7]) >= 4;
            }, 'Stopwatch started, then successfully passed the 5 second mark');
        });
    });


    casper.run(function() {
        test.done();
    });
});
