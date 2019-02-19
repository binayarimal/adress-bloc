const inquirer = require('inquirer')
const MenuController = require('./controller/MenuController');
const menu = new MenuController();

menu.clear();
menu.main();
