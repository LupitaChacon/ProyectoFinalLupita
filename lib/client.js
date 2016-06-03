/**
 * Created by lupita on 2/06/16.
 */


var database = require('../lib/tasks')
var data = new database.Tasks()

var key = "L0001"
var values = {'name':'Go to the gym', 'author':'Lupita Chacon', 'duration':'1 hour', 'date':'6/2/2016', 'priority':'Medium'}

data.createTask(key,values)
data.getTask( key ,function(err, result)
{
    console.log(result)
});