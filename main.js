#!/usr/bin/env node

"use strict";

require('app-module-path')
    .addPath(__dirname);

const commander = require('commander');
const config = require('common/config');
const chalk = require('chalk');

commander
    .version('0.0.1')
    .option('-a --app <app>', 'App Name, will ' + chalk.green('require(apps/APPNAME)') + ' Default value: \'default\'', 'default')
    .option('-p --program <config>', 'Run a program inside of APP')
    .parse(process.argv);

const app_module = commander.app;
