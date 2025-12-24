"use strict";

const chalk = require("chalk");

console.log(chalk.magentaBright.bold("\n• depannn Baileys ✨\n"));
console.log(
  chalk.magenta("O") + chalk.cyan("l") + chalk.green("a") + chalk.yellow("a") +
  chalk.blue(", ") + chalk.red("t") + chalk.magenta("h") + chalk.cyan("a") +
  chalk.green("n") + chalk.yellow("k") + chalk.blue(" ") + chalk.red("y") +
  chalk.magenta("o") + chalk.cyan("u") + chalk.green(" ") + chalk.yellow("f") +
  chalk.blue("o") + chalk.red("r") + chalk.magenta(" ") + chalk.cyan("u") +
  chalk.green("s") + chalk.yellow("i") + chalk.blue("n") + chalk.red("g") +
  chalk.magenta(" ") + chalk.cyan("m") + chalk.green("y") + chalk.yellow(" ") +
  chalk.blue("B") + chalk.red("a") + chalk.magenta("i") + chalk.cyan("l") +
  chalk.green("e") + chalk.yellow("y") + chalk.blue("s")
);
console.log(chalk.cyan("• Telegram: ") + chalk.greenBright("@depstore11"));
console.log(chalk.cyan("• GitHub: ") + chalk.blueBright("github.com/depannn11"));

const latestUpdate = new Date("2025-12-24");
const today = new Date();
const daysSinceUpdate = Math.floor((today - latestUpdate) / (1000 * 60 * 60 * 24));

console.log(chalk.cyan("• Latest update: ") + chalk.whiteBright(latestUpdate.toLocaleDateString()));
console.log(chalk.cyan("• Days since update: ") + 
  (daysSinceUpdate === 0 ? chalk.greenBright("Today") : 
   daysSinceUpdate < 7 ? chalk.yellowBright(`${daysSinceUpdate} days`) : 
   chalk.redBright(`${daysSinceUpdate} days`)));

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeWASocket = void 0;
const Socket_1 = __importDefault(require("./Socket"));
exports.makeWASocket = Socket_1.default;
__exportStar(require("../WAProto"), exports);
__exportStar(require("./Utils"), exports);
__exportStar(require("./Types"), exports);
__exportStar(require("./Store"), exports);
__exportStar(require("./Defaults"), exports);
__exportStar(require("./WABinary"), exports);
__exportStar(require("./WAM"), exports);
__exportStar(require("./WAUSync"), exports);

exports.default = Socket_1.default;
