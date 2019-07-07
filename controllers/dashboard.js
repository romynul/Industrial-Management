var express = require('express');
var user = require.main.require('./models/user-model');
var router = express.Router();


// router.get('*', function(req, res, next){
// 	if(req.session.un != null){
// 		next();
// 	}else{
// 		res.redirect('/login');
// 	}
// });

router.get('/', function(req, res){
	res.render('dashboard/index');
});

router.get('/add_employee', function(req, res){
	res.render('dashboard/addemployee');
});

// router.get('/employee', function(req, res){
// 	res.render('dashboard/employee');
// });

router.get('/employee', function(req, res){
	user.getAll(function(results){
		res.render('dashboard/employee', {userList: results});
	});
});

router.get('/add_project', function(req, res){
	res.render('dashboard/add_project');
});

router.get('/project', function(req, res){
	res.render('dashboard/project');
});

router.get('/add_labour', function(req, res){
	res.render('dashboard/add_labour');
});

router.get('/labour', function(req, res){
	res.render('dashboard/labour');
});

router.get('/add_supplier', function(req, res){
	res.render('dashboard/addsupplier');
});

router.get('/supplier', function(req, res){
	res.render('dashboard/supplier');
});

router.get('/add_client', function(req, res){
	res.render('dashboard/add_client');
});

router.get('/client', function(req, res){
	res.render('dashboard/client');
});

router.get('/add_expense', function(req, res){
	res.render('dashboard/add_expense');
});

router.get('/expense', function(req, res){
	res.render('dashboard/expense');
});

router.get('/logs', function(req, res){
	res.render('dashboard/logs');
});

module.exports = router;
