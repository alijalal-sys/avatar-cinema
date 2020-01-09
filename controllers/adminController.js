const Admin = require('../db/models/adminModel')
const User = require('../db/models/userModel')
exports.hundleSginin = (req, res) => {
    admin = req.body;
    Admin.findAdmin({ username: admin.username }, (err, result) => {
        if (result) {
            res.status(200).json({
                status: true,
                message: "OK",
                data: result
            })
        } else {
            res.status(401).json({
                status: false,
                message: "Admin with this username does not exists",
                data: err
            })
        }
    })
}

exports.hundleMainDashboard = (req, res) => {
    User.findUser({}, (err, result) => {
        if (result) {
            res.status(200).json({
                status: true,
                data: result
            })
        } else {
            res.status(404).json({
                status: false,
                data: err
            })
        }


    });
}