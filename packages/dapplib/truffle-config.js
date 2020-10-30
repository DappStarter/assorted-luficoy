require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gesture oppose swift top edge rare remember modify grid enrich swift venture'; 
let testAccounts = [
"0x2a9623345fa0262c72b10b54287b00e00dc4706c6cffa1c0441917acf6b2834d",
"0xc8f53755fa39c2d32fe98e7a2d6fa19bef609773dc62aae260040c97c7d1aa41",
"0xc8e279de353231b31f12e35cc912be5c1f95582c8b634c9ddbaf38a6245f2099",
"0x269d4bd54695b7fa93619d7063cc8b363917fc52e1dcc5b21e269d3647482dd3",
"0x3613aa4a411de54a839fd5a3e384f3ed1b5fa4fff2d74a87a5fbce3f656fad21",
"0xa2134544c689ed48df4e92b2142d2ca4768e6dc009165fd14a7ecb2d610ae49b",
"0x977e1a5fc64cf37894b9a37604fecbb016d460e169d1545664f920e63c339a83",
"0xee59d351efac69f64e61b1fe53cc3fd1fde38b429c4442479b93d7c3e2ca9b78",
"0x33bc9d3215035db48ac7b4ac09022e9816fbf9e6e27b0fe58d80371e5424665a",
"0x901a85316f033cb11aeeedb0bb124d977a1ab6c141466a9197a72a3a8cf4475c"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
