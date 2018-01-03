const router = require('express').Router();
const R = require('./random');

// GET method route, which will return all suffled array list
// End-point: http://localhost:3000/random/500
router.get('/:range', function (req, res) {
    try {
        //calling implemented util method
        R.getRandomList(parseInt(req.params.range), function (err, result) {
            if (err) {
                // returning error
                return res.status(500).json({
                    error: err.stack
                });
            }
            // if there is not error, a successful result will returnined as a response
            return res.send({
                data: result
            });
        });
    } catch (err) {
        // returning error
        return res.status(500).json({
            error: err
        });
    }
});

module.exports = router;