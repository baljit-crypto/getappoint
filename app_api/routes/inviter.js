var express = require('express');
var router = express.Router();

var ctrlInviter = require('../controllers/inviter');

router
.route('/inviter')
.post(ctrlInviter.createInviter);

router
.route('/inviter')
.get(ctrlInviter.getInviters);

router
.route('/inviter/:inviterid')
.get(ctrlInviter.getInviterById);

module.exports = router;