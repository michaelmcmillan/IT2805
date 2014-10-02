
casper.test.begin('Assignment 3-1: Reorganize the files into proper directories.', 5, function suit (test) {
    var server = casper.cli.get("server");

    casper.start(server + '/3/exercise-1/');

    casper.then(function getLinks () {
         relativeLinks = this.evaluate(function(){
            var links = document.getElementsByTagName('a');
            links = Array.prototype.map.call(links, function (link) {
                    return link.getAttribute('href');
            });
            return links;
         });
    });

    casper.then(function () {
        this.each(relativeLinks, function (self, link) {
            self.thenOpen(self.getCurrentUrl() + link, function (response) {


                test.assertEquals(response.status, 200, 'HTTP 200 (Found) for ' + link);
            });
        });
    });

    casper.run(function() {
        test.done();
    });
});
