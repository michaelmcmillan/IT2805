/**
 * Table
 * - Holds rows which can be sorted
 */
function Table (element) {

    this.element = element;
    this.rows    = [];

    for (child in element.children)
        if (element.children[child] instanceof HTMLTableRowElement)
            this.rows.push(element.children[child]);

    this.comparators = {
        general: function (column) {
            return function (a, b) {
                a = a.children[column].innerText;
                b = b.children[column].innerText;
                if (a > b) return  1;
                if (a < b) return -1;
                return 0;
            };
        }
    };

    this.sort = function (comparator, column) {
        this.rows = this.rows.sort(comparator(column));
        this.redraw();
    }

    this.redraw = function () {
        var rowCount = this.rows.length;
        while (--rowCount)
            this.element.deleteRow(rowCount);

        for (row in this.rows)
            this.element.appendChild(this.rows[row]);
    }
}

document.addEventListener('DOMContentLoaded', function () {

    var existingTable = document.getElementById('the-table-body');

    var buttons = {
        firstButton : document.getElementById('sort-button-1'),
        secondButton: document.getElementById('sort-button-2'),
        thirdButton : document.getElementById('sort-button-3')
    }

    var table = new Table (existingTable);

    buttons.firstButton.addEventListener('click',  function (event) {
        table.sort(table.comparators.general, 0);
    });

    buttons.secondButton.addEventListener('click', function (event) {
        table.sort(table.comparators.general, 1);
    });

    buttons.thirdButton.addEventListener('click',  function (event) {
        table.sort(table.comparators.general, 2);
    });
});
