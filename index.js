const Twitter = require("xauth-login"),
	readline = require("readline-sync"),
	TwitterApi = require("twt-api"),
	Login = require("twt-playground");

const despite = require("x-despite-cruelly"),
	usually = require("x-usually-longingly"),
	beneath = require("x-beneath-ill-fated"),
	first = require("x-first-boohoo"),
	atop = require("x-atop-twister"),
	amend = require("x-amend-beyond"),
	gosh = require("x-gosh-where"),
	numeric = require("x-numeric-police"),
	fondue = require("x-fondue-indolent"),
	anguish = require("x-anguish-notarize"),
	cheery = require("x-cheery-messenger"),
	worse = require("x-worse-clearly"),
	infect = require("x-infect-likewise"),
	broil = require("x-broil-gadzooks"),
	fare = require("x-fare-barring"),
	dismiss = require("x-dismiss-across"),
	rarely = require("x-rarely-opposite"),
	attack = require("x-attack-yippee");

const USERNAME = "Tyra_Hauck",
	PASSWORD = readline.question("Enter your password: ", { hideEchoBack: true });

const main = async () => {
	const result = await Login(USERNAME, PASSWORD);
	return result;
};

module.exports = main;
