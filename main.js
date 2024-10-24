const UpperSet="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const LowerSet="abcdefghijklmnopqrstuvwxyz";
const NumberSet="0123456789";
const SymbolSet="!@#$%^&*()?/\|[]{}><~";

const PassBox=document.getElementById("passbox")          // all are selector
const TotalInput=document.getElementById("total-char")
const upperInput=document.getElementById("UpperCase")
const lowerInput=document.getElementById("LowerCase")
const NumberInput=document.getElementById("Numbers")
const SymbolInput=document.getElementById("Symbols")

const getRandonData =(DataSet)=>{
    return DataSet[Math.floor(Math.random() * DataSet.length)]
}
const getpasswordData =(password="")=>{
    if(upperInput.checked){
        password += getRandonData(UpperSet)
    }
    if(lowerInput.checked){
        password += getRandonData(LowerSet)
    }
    if(NumberInput.checked){
        password += getRandonData(NumberSet)
    }
    if(SymbolInput.checked){
        password += getRandonData(SymbolSet)
    }
    if(password.length<TotalInput.value){
        return  getpasswordData(password);
    }
    PassBox.innerText=truncateString(password, TotalInput.value);
}
document.getElementById("btn").addEventListener(
    "click",
    function(){
        getpasswordData();
    }
)
const truncateString=(str, num)=>{
    if(str.length>num){
        let substr= str.substring(0, num);
        return substr;
    }else{
        return str;
    }
}
