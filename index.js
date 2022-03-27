function findLongest(str) {
    let newArr = str.split(" ");
    let long = newArr.reduce((acc, current) =>  acc.length < current.length ? current : acc);
    return long;
}

module.exports = findLongest