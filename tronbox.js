module.exports = {
  networks: {
    development: {
// For trontools/quickstart docker image
      privateKey: 'a70c9dc52cadb0516b3c5607334b40e60b0f3434d653fbe1aa54a25957b4a11d',
      consume_user_resource_percent: 30,
      fee_limit: 100000000,
      solidityNode: "http://127.0.0.1:8091",
      network_id: "*"
    },
    shasta: {
      privateKey: 'a70c9dc52cadb0516b3c5607334b40e60b0f3434d653fbe1aa54a25957b4a11d',
      consume_user_resource_percent: 30,
      fee_limit: 100000000,
      fullHost: "https://api.shasta.trongrid.io",
      solidityNode: "https://api.shasta.trongrid.io",
      network_id: "*"
    },
    mainnet: {
// Don't put your private key here, pass it using an env variable, like:
// PK=da146374a75310b9666e834ee4ad0866d6f4035967bfc76217c5a495fff9f0d0 tronbox migrate --network mainnet
      privateKey: process.env.PK,
      consume_user_resource_percent: 30,
      fee_limit: 100000000,
      fullNode: "https://api.trongrid.io",
      solidityNode: "https://api.trongrid.io",
      eventServer: "https://api.trongrid.io",
      network_id: "*"
    }
  }
};
