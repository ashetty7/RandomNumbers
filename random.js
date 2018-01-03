function getRandomList(range, cb) {
    try {
        var arr = [];
        for (var a = 1; a <= range; a++) {
            arr.push(a);
        }
        // Fisher-Yates shuffle (modern)
        // To shuffle an array a of n elements (indices 0..n-1):

        // for i from n − 1 downto 1 do
        for (var i = arr.length - 1; i > 0; i--) {
            // j ← random integer with 0 ≤ j ≤ i
            var j = Math.floor(Math.random() * (i + 1));
            // exchange a[j] and a[i]	
            var temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
            if (arr.length - 1 === i) {
                //returns final array with shiffled list
                return cb(null, arr);
            }
        }
    } catch (err) {
        //if error cought, returns with error stack
        return cb(err, err.stack);
    }
}

module.exports = {
    getRandomList: getRandomList
}