# Miscellaneous <a id="miscellaneous"></a>

## klay_sha3 <a id="klay_sha3"></a>

Returns Keccak-256 (not the standardized SHA3-256) of the given data.

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| data | DATA | The data to convert into a SHA3 hash. |

**Return Value**

| Type | Description |
| --- | --- |
| 32-byte DATA | The SHA3 result of the given data. |


**Example**

```shell
// Request
curl -H "Content-Type: application/json" --data '{"jsonrpc":"2.0","method":"klay_sha3","params":["0x11223344"],"id":1}' https://public-en-baobab.klaytn.net

// Result
{
  "jsonrpc":"2.0",
  "id":1,
  "result":"0x36712aa4d0dd2f64a9ae6ac09555133a157c74ddf7c079a70c33e8b4bf70dd73"
}
```



## klay_recoverFromTransaction <a id="klay_recoverFromTransaction"></a>

Returns the recovered sender address from RLP encoded transaction bytes.
If the sender address of the tx has composite accountKey type, it will return the sender address, not the addresses extracted from signatures.
If the recovery failed, it returns 0x0 address.

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| data | DATA | RLP encoded transaction bytes |
| block number | QUANTITY &#124; TAG | Integer or hexadecimal block number, or the string `"earliest"`, `"latest"` or `"pending"` as in the [default block parameter](#the-default-block-parameter). |

**Return Value**

| Type | Description |
| --- | --- |
| 20-byte DATA | Recovered address. |

**Example**

```shell
// Request
curl -H "Content-Type: application/json" --data '{"jsonrpc":"2.0","method":"klay_recoverFromTransaction","params":["0x08f88307850ba43b74008366926694000000000000000000000000000000000000dead843b9aca00945bd2fb3c21564c023a4a735935a2b7a238c4cceaf847f8458207f6a09c57511347c7b88c3539a6584b4d57991f6c4665ffcde89da0e9895eb078bef7a0296f4fd2a765567e034f4754cf31a9902c49d6a1d465a2e3fd10b165476cffa8", "latest"],"id":1}' https://public-en-baobab.klaytn.net

// Result
{
  "jsonrpc":"2.0",
  "id":1,
  "result":"0xe15cd70a41dfb05e7214004d7d054801b2a2f06b"
}
```


## klay_recoverFromMessage <a id="klay_recoverFromMessage"></a>

Returns signer address from message signature.
Validates that the message is signed by one of the keys in the given account.

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| address | string | The address of the signer account. |
| message | DATA | Message bytes |
| signature | 65-byte DATA | Signature bytes |
| block number | QUANTITY &#124; TAG | Integer or hexadecimal block number, or the string `"earliest"`, `"latest"` or `"pending"` as in the [default block parameter](#the-default-block-parameter). |

**Return Value**

| Type | Description |
| --- | --- |
| 20-byte DATA | Recovered address. |


**Example**

```shell
// Request
curl -H "Content-Type: application/json" --data '{
  "jsonrpc":"2.0",
  "method":"klay_recoverFromMessage"
  ,"params":[
"0xA2a8854b1802D8Cd5De631E690817c253d6a9153",
"0xdeadbeef", 
"0x1e6338d6e4a8d688a25de78cf2a92efec9a92e52eb8425acaaee8c3957e68cdb3f91bdc483f0ed05a0da26eca3be4c566d087d90dc2ca293be23b2a9de0bcafc1c", 
"latest"
], 
  "Id":1
}
' https://public-en-baobab.klaytn.net

// Result
{
  "jsonrpc":"2.0",
  "id":1,
  "result":"0xa2a8854b1802d8cd5de631e690817c253d6a9153"
}
```


## klay_forkStatus <a id="klay_forkStatus"></a>

Returns the whole list of hardforks and their effectiveness at the given block.

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| block number | QUANTITY &#124; TAG | Integer or hexadecimal block number, or the string `"earliest"`, `"latest"` or `"pending"` as in the [default block parameter](#the-default-block-parameter). |

**Return Value**

| Type | Description |
| --- | --- |
| JSON | List of forks and their effectiveness |


**Example**

```shell
// Request
curl -H "Content-Type: application/json" --data '{"jsonrpc":"2.0","method":"klay_forkStatus","params":["latest"],"id":1}' https://public-en-baobab.klaytn.net

// Result
{
  "jsonrpc": "2.0",
  "id": 1,
  "result": {
    "EthTxType": true,
    "Istanbul": true,
    "KIP103": false,
    "Kore": true,
    "London": true,
    "Magma": true,
    "Shanghai": false
  }
}
```
