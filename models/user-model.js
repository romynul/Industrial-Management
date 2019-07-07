var db = require('./db');



module.exports = {
	validate: function(user, callback){
		var sql = "select * from users where email=? and password=?";
		db.getResult(sql, [user.email, user.password], function(results){			
			if(results.length > 0){
				callback(true);
			}else{
				callback(false);
			}
		});
	},
	getById: function(id, callback){
		var sql = "select * from user where id=?";
		db.getResult(sql, [id], function(result){
			callback(result);
		});
	},
	getAll: function(callback){
		var sql = "select * from users";
		db.getResult(sql, [], function(results){
			callback(results);
		});
	},
	insert: function(user, callback){
		var sql = "insert into users values (?,?,?,?,?,?,?,?,?)";
		
		
		
		db.execute(sql,[6,user.username,user.email,user.password,user.address, user.contact,user.job,user.salary,0], function(status){
			callback(status)
		});
	},
	update: function(user, callback){
		var sql = "update user set username=?, password=? where id=?";
		db.execute(sql, [user.username, user.password, user.id], function(status){
			callback(status);
		});
	},
	delete: function(id, callback){
		var sql = "delete from user where id=?";
		db.execute(sql, [id], function(status){
			callback(status)
		});
	}
}