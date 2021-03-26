const { Keyring } = require("@polkadot/keyring");
const { ApiPromise, WsProvider } = require("@polkadot/api");

const keyring = new Keyring();

const addressList = [
  "5HmbZEZ6QFTBB5hXaYDi2Qx9Yq4vscLGqa1B2AD3McCNNQ98",
  "5Dh8vK5Q6JK8YBYfbVEmgrUw49iGHXnVgx1jX48kQ9meKkKn",
  "5DA9yUXbMd6pwuZ5GyYTEMb6Um8XLVKUcaTsqqgwy7GVZCQ8",
  "5FHCaBgXVmj4iStBArBgPKubNJGRZCjja1j1SfdaKMu5KA2X",
  "5GLKuwUPAUkMft7NT194LWpmTBcKBEXwSxZyGsMbf5LDNNTp",
  "5FbfExGfDFk3uVWsaidShjAMeY2r4P68PMbTz781mjFsvDRy",
  "5GNa8pNBVWtgxHdXWovcMe3W9VQJJsNi2WPwZED6q5CnsghH",
  "5DUuWf643Fcoqk88wSyY1iBkWnQBKmxtVcDmC9K1MsskRULp",
  "5EKsgSQKi6TGhmHVfVpC3n75G7LSXbAFp68xVmrcKx6V9WQK",
  "5CZzpzpKgXVnJUuKZ3S4EASzYV77sb7rAp7UU5Jgp1QgaSBu",
  "5CDA3teXpfFAqQDTebUXiZn47udHReALJapzcteBPPSHPFJf",
  "5EKsgSQKi6TGhmHVfVpC3n75G7LSXbAFp68xVmrcKx6V9WQK",
  "5GCc7JDdXQ8QKnm8itDBd7hbKCKziS8eDrTTFeXmj6HhKTHk",
  "5HT4E3o4U8wrHs6m3DrzKvZvMtxy2ncDsq7zCSizPy8Lif8H",
  "5ENZGGyRryWv2siiDtCJjoVfQ1kWyTAAdeJqdpd8UBwoQqwE",
  "5G3zwZ72e6rbJgx6cfmpKac3yBPsLM1hC173U6XNeMexqMhS",
  "5DA9yUXbMd6pwuZ5GyYTEMb6Um8XLVKUcaTsqqgwy7GVZCQ8",
  "5CFfibmK6AhCLXfGtL5qCfvkJohb8nCqPiwAw68GMbmdUKVJ",
  "5CZzpzpKgXVnJUuKZ3S4EASzYV77sb7rAp7UU5Jgp1QgaSBu",
  "5FjXFxPrEyLwXBVYC12CXufXgWQzddnpsArg8P8fJi7KwsFq",
  "5FHCaBgXVmj4iStBArBgPKubNJGRZCjja1j1SfdaKMu5KA2X",
  "5HYmh2R1iFuzmTFChezjTqGvioQKzCPWpqM85HYc3ZcCTTes",
  "5G94Wzuc5EBemwKGnBf18JwxUw8QtenRkrEiSbLCaMc8WFpR",
  "5DskzyXfQsxD2vJZDzCfXFnRhicHfAtrZ8qcM7BHsQFg7Wrg",
  "5G94Wzuc5EBemwKGnBf18JwxUw8QtenRkrEiSbLCaMc8WFpR",
  "5CFfibmK6AhCLXfGtL5qCfvkJohb8nCqPiwAw68GMbmdUKVJ",
  "5GMvp5okVesv3JHxNA21SeFbXtMMtwy6EmPvtN5HpHLUuRCy",
  "5HT4E3o4U8wrHs6m3DrzKvZvMtxy2ncDsq7zCSizPy8Lif8H",
  "5DJAQKqgstka75mBA18QZwCQkMXCkqSUaNzhYu78Eygi8VA4",
  "5GBQRFTq5aei48Greedwys58bDYrHg54yh48m2scxemZvAeX",
  "5FHCaBgXVmj4iStBArBgPKubNJGRZCjja1j1SfdaKMu5KA2X",
  "5HT4E3o4U8wrHs6m3DrzKvZvMtxy2ncDsq7zCSizPy8Lif8H",
  "5GHjYXd7nzTsGSkMDxf4EqjhCwnpq6SguJ59WraeYVtf8ddi",
  "5FQsJbDnzxqyxp85nzWy4HbTFRSKa1CarVN9Xm7QBsw3vVrx",
  "5HEU4JEfGS3mW2PSq4TmuJKWyKwyber4cFVEZrgPhxNs8Db3",
  "5Dh8vK5Q6JK8YBYfbVEmgrUw49iGHXnVgx1jX48kQ9meKkKn",
  "5FRcBR5j4LDToJsYUqWBK4TBtMbrMZZ922M3NEFw3zMH1LeJ",
  "5CHrvcSjs21YwECGVoi8pEGn6v72CRBWP6PpUqUsJ366MqA3",
  "5DyEcs3fV2pmcTQVshC3Gr5WyA9f5xSMxirvzrgr7muoVG7M",
  "5CHrvcSjs21YwECGVoi8pEGn6v72CRBWP6PpUqUsJ366MqA3",
  "5GMvp5okVesv3JHxNA21SeFbXtMMtwy6EmPvtN5HpHLUuRCy",
  "5FbfExGfDFk3uVWsaidShjAMeY2r4P68PMbTz781mjFsvDRy",
  "5ESBGD6qa8xDE9z318wTg6vSCbTht1PAvzy29zB2eHyNH6Zu",
  "5G6pKktDYWMqEkGJhspUGeKLp8JugubEv9Jfbs6CMkJ5Ev47",
  "5DyEcs3fV2pmcTQVshC3Gr5WyA9f5xSMxirvzrgr7muoVG7M",
  "5HQFXgz67bre8PdfcNVJywWX3rNo7R1do9HfB3g6edDffR46",
  "5FHCaBgXVmj4iStBArBgPKubNJGRZCjja1j1SfdaKMu5KA2X",
  "5HmbZEZ6QFTBB5hXaYDi2Qx9Yq4vscLGqa1B2AD3McCNNQ98",
  "5CAyvM4JtZQqjs1eFUG3LcDzs8fZiPtNHRtBc7kPYfxfVB6s",
  "5DA9yUXbMd6pwuZ5GyYTEMb6Um8XLVKUcaTsqqgwy7GVZCQ8",
  "5GNa8pNBVWtgxHdXWovcMe3W9VQJJsNi2WPwZED6q5CnsghH",
  "5GHjYXd7nzTsGSkMDxf4EqjhCwnpq6SguJ59WraeYVtf8ddi",
  "5CFfibmK6AhCLXfGtL5qCfvkJohb8nCqPiwAw68GMbmdUKVJ",
  "5HmbZEZ6QFTBB5hXaYDi2Qx9Yq4vscLGqa1B2AD3McCNNQ98",
  "5Dh8vK5Q6JK8YBYfbVEmgrUw49iGHXnVgx1jX48kQ9meKkKn",
  "5DA9yUXbMd6pwuZ5GyYTEMb6Um8XLVKUcaTsqqgwy7GVZCQ8",
  "5FHCaBgXVmj4iStBArBgPKubNJGRZCjja1j1SfdaKMu5KA2X",
];

async function main() {
  const addressBalances = [];

  const wsProvider = new WsProvider("wss://kusama-rpc.polkadot.io");
  const api = await ApiPromise.create({ provider: wsProvider });

  // The list of Promises to await
  const promises = [];

  for (let address of addressList) {
    const kusamaAddress = keyring.encodeAddress(address, 2);

    // Query each account address and store the resulting promise
    promises.push(
      api.query.system.account(kusamaAddress, ({ data: balance }) => {
        addressBalances.push([kusamaAddress, balance.free.toHuman()]);
      })
    );
  }

  // Wait for all of the promises to resolve
  await Promise.all(promises);

  console.log(addressBalances);
}

main().then(() => {
  console.log("Finished");
  process.exit(0);
});
