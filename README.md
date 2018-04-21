# Node Simple Spamcop Api

Use Node to check for malicious IPs in [spamcop](https://www.spamcop.net)

## Install
`npm install simplespamcop`

## How to use

```javascript
const simplespamcop = require('simplespamcop');

// Use checkIP(<IP>) to check that IP against projecthoneypot.org
// A promise will be returned
ip = "127.1.1.1";
simplespamcop.checkIP(ip).then(function(result){ 
        console.log(result);
    }, function(err) {
        console.log(err);
});


/*
Outputs examples
{ malicious: true, title: 'Spammer' }
{ malicious: false, title: 'Spammer' }
*/
```
