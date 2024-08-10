  import CryptoJS from "react-native-crypto-js";
import secrets from "../../secrets";

export const encryptPassword =  (password:string):string=>{
const cipherPassword = CryptoJS.AES.encrypt(password, secrets().passwordSecret).toString();
return cipherPassword
}

export const decryptPassword=(hashed:string):string=>{
  const bytes  = CryptoJS.AES.decrypt(hashed, 'secret key 123');
  const password = bytes.toString(CryptoJS.enc.Utf8);
return password
}