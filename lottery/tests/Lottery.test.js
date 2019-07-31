const assert = require("assert");
const ganache = require("ganache-cli");
const Web3 = require("web3");
const web3 = new Web3(ganache.provider());

const { interface, bytecode } = require("../compile");

let lottery;
let accounts;

beforeEach(async () => {
	accounts = await web3.eth.getAccounts();

	lottery = await new web3.eth.Contract(JSON.parse(interface))
		.deploy({ data: bytecode })
		.send({ from: accounts[0], gas: 1000000 });
});

describe("Lottery contract", () => {
	it("Should deploy contract", () => {
		assert.ok(lottery.options.address);
	});

	it("Should allow one account to enter", async () => {
		await lottery.methods
			.enter()
			.send({
				from: accounts[0],
				value: web3.utils.toWei("0.2", "ether")
			});
		const players = await lottery.methods
			.getPlayers()
			.call({ from: accounts[0] });
		assert.equal(players[0], accounts[0]);
		assert.equal(1, players.length);
	});

	it("Should allow multiple accounts to enter", async () => {
		await lottery.methods
			.enter()
			.send({
				from: accounts[0],
				value: web3.utils.toWei("0.2", "ether")
			});
		await lottery.methods
			.enter()
			.send({
				from: accounts[1],
				value: web3.utils.toWei("0.2", "ether")
			});
		await lottery.methods
			.enter()
			.send({
				from: accounts[2],
				value: web3.utils.toWei("0.2", "ether")
			});
		const players = await lottery.methods
			.getPlayers()
			.call({ from: accounts[0] });
		assert.equal(players[0], accounts[0]);
		assert.equal(players[1], accounts[1]);
		assert.equal(players[2], accounts[2]);
		assert.equal(3, players.length);
	});

	it("Should fail if the amount of ether is too low", async () => {
		try {
			await lottery.methods
				.enter()
				.send({ from: accounts[0], value: 200 });
			assert(false);
		} catch (err) {
			assert(err);
		}
	});
	it("Should only allow manager to run pickWinner", async () => {
		try {
			await lottery.methods.pickWinner().send({
				from: accounts[1]
			});
		} catch (err) {
			assert(err);
			return;
		}
		assert(false);
	});

	it("Should send money to winner and reset the players array", async () => {
		await lottery.methods
			.enter()
			.send({ from: accounts[0], value: web3.utils.toWei("2", "ether") });
		const initialBalance = await web3.eth.getBalance(accounts[0]);
		await lottery.methods.pickWinner().send({ from: accounts[0] });
		const finalBalance = await web3.eth.getBalance(accounts[0]);
		const difference = finalBalance - initialBalance;

		assert(difference > web3.utils.toWei("1.8", "ether"));
	});
});
