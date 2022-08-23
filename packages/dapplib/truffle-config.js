require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'heavy prize flee venture street crawl snow hospital give glide flat genuine'; 
let testAccounts = [
"0x3bc5d4a8aa664075980a487bfd94b2c618913bd21387f7d51bfddbcf03dd402b",
"0xf1faf1ad92c4d2281acdf0ff3f9f0952cc62e5e364f57f75b159006ecb14d11c",
"0x0652932b7a389b3ec014a712a50b3bc4c7b04ae91f58a046b0f7c6405a2af427",
"0xa851a3fc1bd04236657d6dc97c46b23ef7cd1e8217d70f3958291888d0db9059",
"0x9c0eb91700a73d4d368de4962d43bb64e53e11fc77521d19eed4c51a9be4f82a",
"0xc06071e5521997865b063fc395916bc906c206160d1c06c56f8ba719e4244e75",
"0x049f55967686b237a002af4ba43b1a77f03e643aa295eea4d7c713fe10330ce9",
"0xb07f270e8e04ca61cccb0321551927a30f90fd2e7cc226d031089231c94ad0b3",
"0x3b8230d6af1809abbfd57725c1dc95b0ca14bdae550faf2af8933dd3c665674f",
"0xa98c4879e7f88e8310d4ef0d28c72c2f55eeb5e4dc18af703088cff2a39f95ab"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

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
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


