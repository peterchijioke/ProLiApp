import Toast from "react-native-toast-message";

export enum ToastEnum {
error='error',
info="info",
success='success'
}
export default (text1:string,type:ToastEnum) =>Toast.show({
  type,text1
})