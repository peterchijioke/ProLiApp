  import CryptoJS from "react-native-crypto-js";
import secrets from "../../secrets";

export const encryptPassword =  (password:string):string=>{
const cipherPassword = CryptoJS.AES.encrypt(password, secrets().passwordSecret).toString();
return cipherPassword
}

export const decryptPassword=(hashed:string):string=>{
  const bytes  = CryptoJS.AES.decrypt(hashed, secrets().passwordSecret);
  const password = bytes.toString(CryptoJS.enc.Utf8);
  console.log(hashed,"hash")
  console.log(password)
return password
}

export function trimText(text: string, length: number): string {
    let trimmedText = text?.trim();
    if (trimmedText?.length > length) {
        trimmedText = trimmedText?.slice(0, length);
        trimmedText = trimmedText?.replace(/\.\.\.$/, ''); 
        trimmedText += '...'; 
    }
    return trimmedText;
}