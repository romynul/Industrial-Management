var express = require('express');
var user	= require.main.require('./models/user-model');
var router = express.Router();


router.get('/', function(req, res){
	res.render('home/auth-login-2');
});

router.get('/dashboard', function(req, res){
	res.render('dashboard');
});

router.get('/auth-register', function(req, res){
	res.render('home/auth-register');
});




router.post('/', function(req, res){
	
	var data = {
		email: req.body.email,
		password: req.body.password
	};

	user.validate(data, function(status){
		if(status){
			req.session.email = req.body.email;
			res.redirect('/dashboard');
		}else{
			res.send('invalid email/password...');
		}
	});

});





module.exports = router;