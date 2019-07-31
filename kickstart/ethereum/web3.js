import Web3 from "web3";

let web3;

if (typeof window !== "undefined" && typeof window.web3 !== "undefined") {
	// We are in the browser and metamask has injected web3
	window.ethereum.enable();
	web3 = new Web3(window.web3.currentProvider);
} else {
	// We are on the server *OR* the user is not running metamask
	const provider = new Web3.providers.HttpProvider(
		"https://rinkeby.infura.io/v3/c00f7a4647ce45efa0e5fb0e0b9d1707"
	);
	web3 = new Web3(provider);
}
export default web3;
