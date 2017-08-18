let pool = require('./mysql');

let query = function(sql, callback){
    pool.getConnection(function (err, conn) {
        if(err){
            callback(err, null, null);
        }else{
            conn.query(sql, function (qerr,vals,fields) {
                conn.release();

                callback(qerr,vals,fields);
            });
        }
    })
};

module.exports = query;