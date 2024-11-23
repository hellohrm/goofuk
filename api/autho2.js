
const tokens = function (value) {
    var x = 1;
    var y = x + 1 + value;
    return y;
};

// Export object which contains the above method
module.exports = {

    tokens: tokens

};
