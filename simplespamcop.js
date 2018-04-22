const request = require('request');

function checkIP(ip){
    var promise = new Promise(function(resolve, reject) {
        var url = 'https://www.spamcop.net/w3m?action=checkblock&ip='+ip;
        request({url: url}, function (error, response, body) {
            if (error) reject(Error("Error using spamcop: "+error));
            if (body){
                if (body.indexOf("not listed") != -1) resolve({malicious: false, title: "Not Malicious"});
                resolve({malicious: true, title: "Spammer"});
            }
        });
    });
    return promise;
}

exports.checkIP = checkIP;
