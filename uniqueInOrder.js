function uniqueInOrder(iterable) {

    const list = [];

    for (let i = 0; i < iterable.length; i++) {
        if (iterable[i] !== iterable[i+1]) {
            list.push(iterable[i]);
        }
    }

    return list;

}

module.exports = uniqueInOrder;