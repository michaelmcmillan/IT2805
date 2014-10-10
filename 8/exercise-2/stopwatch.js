/**
 * Stopwatch
 * - A stopwatch that keeps track of elapsed time
 */
function Stopwatch () {

    var self = this;

    this.paused = true;

    this.elapsedTime = 0;

    this.clock = setInterval (function () {
        if (!self.paused) self.elapsedTime++;
    }, 10);

    this.toggle = function () {
        this.paused = !this.paused;
    }

    this.reset = function () {
        this.paused = true, this.elapsedTime = 0;
    }

    this.toString = function () {
        return  ('0' + parseInt(this.elapsedTime / 6000) % 60 % 60)
                       .slice(-2)
                + ':' +

                ('0' + parseInt(this.elapsedTime / 6000) % 60)
                       .slice(-2)
                + ':' +

                ('0' + Number(this.elapsedTime   / 100   % 60)
                       .toFixed(3))
                       .slice(-6);
    }
}

document.addEventListener('DOMContentLoaded', function (event) {

    var stopwatch = new Stopwatch ();

    var elements = {
        display: document.getElementById('display-area'),
        toggle:  document.getElementById('toggle-button'),
        reset:   document.getElementById('reset-button')
    }

    elements.toggle.addEventListener('click', function () {
        stopwatch.toggle();
    });

    elements.reset.addEventListener('click', function () {
        stopwatch.reset();
    });

    setInterval(function () {
        elements.display.textContent = stopwatch.toString();
    }, 1);
});
