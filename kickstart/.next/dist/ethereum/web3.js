"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _web = require("web3");

var _web2 = _interopRequireDefault(_web);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var web3 = void 0;

if (typeof window !== "undefined" && typeof window.web3 !== "undefined") {
	// We are in the browser and metamask has injected web3
	window.ethereum.enable();
	web3 = new _web2.default(window.web3.currentProvider);
} else {
	// We are on the server *OR* the user is not running metamask
	var provider = new _web2.default.providers.HttpProvider("https://rinkeby.infura.io/v3/c00f7a4647ce45efa0e5fb0e0b9d1707");
	web3 = new _web2.default(provider);
}
exports.default = web3;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV0aGVyZXVtL3dlYjMuanMiXSwibmFtZXMiOlsiV2ViMyIsIndlYjMiLCJ3aW5kb3ciLCJldGhlcmV1bSIsImVuYWJsZSIsImN1cnJlbnRQcm92aWRlciIsInByb3ZpZGVyIiwicHJvdmlkZXJzIiwiSHR0cFByb3ZpZGVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxBQUFPLEFBQVA7Ozs7OztBQUVBLElBQUksWUFBSjs7QUFFQSxJQUFJLE9BQU8sQUFBUCxXQUFrQixBQUFsQixlQUFpQyxPQUFPLE9BQU8sQUFBZCxTQUF1QixBQUE1RCxhQUF5RSxBQUN4RTtBQUNBO1FBQU8sQUFBUCxTQUFnQixBQUFoQixBQUNBO1FBQU8sQUFBSSxBQUFKLGtCQUFTLE9BQU8sQUFBUCxLQUFZLEFBQXJCLEFBQVAsQUFDQTtBQUpELE9BSU8sQUFDTjtBQUNBO0tBQU0sV0FBVyxJQUFJLGNBQUssQUFBTCxVQUFlLEFBQW5CLGFBQ2hCLEFBRGdCLEFBQWpCLEFBR0E7UUFBTyxBQUFJLEFBQUosa0JBQVMsQUFBVCxBQUFQLEFBQ0E7QUFDRDtrQkFBZSxBQUFmIiwiZmlsZSI6IndlYjMuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2ZlbGl4bGVwb3V0cmUvRG9jdW1lbnRzL3dlYmRldi9ldGgtY291cnNlL2tpY2tzdGFydCJ9