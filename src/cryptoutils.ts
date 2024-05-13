import * as createHmac from 'create-hmac'
const randomBytes = require('randombytes')
import * as moment from 'moment'
const base32 = require('base32')
import shajs from 'sha.js'
import * as EC from 'elliptic'
import * as aesjs from 'aes-js'
import { Buffer } from 'buffer/';
import { BlockChypCredentials } from './client'

export class BlockChypCrypto {
  generateGatewayHeaders (creds: BlockChypCredentials) {
    const nonce = this.generateNonce()
    const ts = this.generateIsoTimestamp()
    const toSign = creds.apiKey + creds.bearerToken + ts + nonce
    // const bufferKey = Buffer.from(creds.signingKey, 'hex')
    const hmac = createHmac('sha256', creds.signingKey)
    console.log('hmac: ', hmac)
    hmac.update(toSign)
    const sig = hmac.digest('hex')

    const results = {
      'Nonce': nonce,
      'Timestamp': ts,
      'Authorization': 'Dual ' + creds.bearerToken + ':' + creds.apiKey + ':' + sig
    }

    return results
  }

  encrypt (hexKey: string, plainText: string) {
    const key = Buffer.from(hexKey, 'hex').slice(0, 32)
    const keyArr = [...key]

    const iv = randomBytes(16)
    const ivArr = [...iv]

    const aesCbc = new aesjs.ModeOfOperation.cbc(keyArr, ivArr)
    const plainBytes = aesjs.padding.pkcs7.pad(aesjs.utils.utf8.toBytes(plainText))
    const encryptedBytes = aesCbc.encrypt(plainBytes)

    return iv.toString('hex') + aesjs.utils.hex.fromBytes(encryptedBytes)
  }

  sha256Hash (msg: string) {
    return shajs('sha256').update(msg, 'hex').digest('hex')
  }

  validateSignature (publicKey: any, msg: string, sig: any) {
    const ec = new EC.ec('p256')
    const key = ec.keyFromPublic({x: publicKey.x, y: publicKey.y})
    const msgHash = this.sha256Hash(msg)
    return key.verify(msgHash, {r: sig.r, s: sig.s})
  }

  decrypt (hexKey: string, cipherText: string) {
    const key = Buffer.from(hexKey, 'hex').slice(0, 32)
    const keyArr = [...key]

    const cipherBytes = Buffer.from(cipherText, 'hex')
    const iv = cipherBytes.slice(0, 16)

    const aesCbc = new aesjs.ModeOfOperation.cbc(keyArr, iv)

    const cipher = cipherBytes.slice(16, cipherBytes.length)
    const cipherArr = [...cipher]
    const decryptedBytes = aesjs.padding.pkcs7.strip(aesCbc.decrypt(cipherArr))

    return aesjs.utils.utf8.fromBytes(decryptedBytes)
  }

  generateNonce () {
    return base32.encode(randomBytes(32)).toUpperCase()
  }

  generateIsoTimestamp () {
    return moment().utc().format('YYYY-MM-DDTHH:mm:ss.SSS') + 'Z'
  }
}


const CryptoUtils = new BlockChypCrypto()
export default CryptoUtils
