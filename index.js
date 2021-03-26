const { Keyring } = require("@polkadot/keyring");

const keyring = new Keyring();

const address = "enter an address here";

console.log(keyring.encodeAddress(address, 2));
