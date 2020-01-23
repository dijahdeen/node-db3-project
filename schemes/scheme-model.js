
const db = require('../data/seeds/01-schemes');
module.exports = {
    find,
    findById,
    findSteps,
}


function find(){
    return db.select('*').from ('schemes');
}

function findById(id){
    return db("users") .where ({id});
}

function findSteps(id){
    return db ('schemes') .where({id});
}

