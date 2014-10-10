
casper.test.begin('Assignment 8-1: Log to console 1..20 (inclusively)', 1, function suit (test) {
    var server = casper.cli.get("server");

    casper.start(server + '/8/exercise-1/index.html');

    var numbers = [
        1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
        11, 12, 13, 14, 15, 16, 17, 18,
        19, 20
    ];

    var receivedNumbers = [];

    casper.on('remote.message', function (msg) {
        receivedNumbers.push(parseInt(msg));
    });

    casper.then(function() {
        test.assertEquals(numbers, receivedNumbers, 'console.logged numbers are 1..20');
    });

    casper.run(function() {
        test.done();
    });
});
