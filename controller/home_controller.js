module.exports.home = function(req, res){
    return res.end('<h1>Express is up for codial</h1>');
}


module.exports.profile = function(req, res){
    return res.end('<h1>Inside profile action</h1>');
}