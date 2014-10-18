/**
 * Table
 * - Holds rows which can be sorted
 */
function Table (element) {

    var element = element;
    var rows    = [];

    for (child in element.children)
        if (element.children[child] instanceof HTMLTableRowElement)
            rows.push(element.children[child]);

    this.comparators = {
        general: function (column) {
            return function (a, b) {
                a = a.children[column].textContent;
                b = b.children[column].textContent;
                if (a > b) return  1;
                if (a < b) return -1;
                return 0;
            };
        }
    };

    this.sort = function (comparator, column) {
        rows = rows.sort(comparator(column));
        this.redraw();
    }

    this.redraw = function () {
        var rowCount = rows.length;
        while (--rowCount)
            element.deleteRow(rowCount);

        for (row in rows)
            element.appendChild(rows[row]);
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
