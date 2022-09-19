var express = require('express');
var router = express.Router();
const {validateToken} = require("../jwt")

const ctrlUser = require("../controllers/user");


router
.route('/profile')
.get(validateToken, ctrlUser.getProfile)

router
.route('/auth/login')
.post(ctrlUser.signinUser)

router
.route('/auth/register')
.post(ctrlUser.createUser)


router
.route('/user/:userid')
.put(ctrlUser.updateUser)
.delete(ctrlUser.deleteUser)

module.exports = router;