exports.bubbleSort = function(items) {
    let length = items.length;
    for (let i = (length - 1); i > 0; i--) {
        for (let j = (length - i); j > 0; j--) {
            if (items[j] < items[j - 1]) {
                let tmp = items[j];
                items[j] = items[j - 1];
                items[j - 1] = tmp;
            }
        }
    }
};

exports.bubbleSort = function(items) {
    let swapped = true;
    while (swapped) {
        swapped = false;
        for (let i = 0; i < items.length-1; i++) {
            if (items[i] > items[i + 1]) {
                let temp = items[i];
                items[i] = items[i + 1];
                items[i + 1] = temp;
                swapped = true;
            }
        }
    }
    return items;
};
