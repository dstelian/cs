var ProgressBar = require('progress');
var chalk = require('chalk');


config.test();

var bar = new ProgressBar('[:bar] :percent :etas', {
    total: 100,
    complete: chalk.green('='),
    incomplete: chalk.dim.red('-'),
    width: 10,
});

console.log('\nloading... ');

var timer = setInterval(function() {
    bar.tick();
    if (bar.complete) {
        console.log('\ncomplete\n');
        clearInterval(timer);
    }
}, 30);
