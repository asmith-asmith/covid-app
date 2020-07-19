const router = require('express').Router();
const forumsCtrl = require('../../controllers/forums');

router.get('/', forumsCtrl.index);
router.get('/:id', forumsCtrl.show);
router.post('/', forumsCtrl.create);
// router.put('/:id', forumsCtrl.update);
router.delete('/:id', forumsCtrl.delete);

function checkAuth(req, res, next) {
    if (req.user) return next();
    return res.status(401).json({msg: 'Not Authorized'});
}

module.exports = router;