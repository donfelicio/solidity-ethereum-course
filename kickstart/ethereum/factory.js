import web3 from "./web3";
import CampaignFactory from "./build/CampaignFactory.json";

const instance = new web3.eth.Contract(
	JSON.parse(CampaignFactory.interface),
	"0xfaA83f69a73cD260948c1f5acea3091D024fd1b6"
);

export default instance;
