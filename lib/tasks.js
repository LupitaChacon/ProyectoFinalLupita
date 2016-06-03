/**
 * Created by lupita on 2/06/16.
 */

var Redis = require('ioredis')
var redis = new Redis(6379,'localhost')

exports.Tasks = function(args){



    this.createTask = function (key,values) {

        console.log("[DEBUG][createTask values ] %s", JSON.stringify(values))

        redis.set(key, JSON.stringify(values))

    }



    this.getTask = function (key, callback) {

        redis.get(key,function (err, result) {
            return callback(err, result)
        })
    }
}