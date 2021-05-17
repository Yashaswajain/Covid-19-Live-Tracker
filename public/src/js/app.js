const api="https://api.covid19api.com/summary";
const input=document.querySelector("#country")
const button=document.querySelector("#search")

fetch(api)
    .then((data)=>data.json())
    .then((data)=>{
        console.log(data)
        document.querySelector("#time").innerHTML="LAST UPDATE TIME : "+data.Global.Date
        document.querySelector("#newconfirm").innerHTML=data.Global.NewConfirmed
        document.querySelector("#newdead").innerHTML=data.Global.NewDeaths
        document.querySelector("#newrecover").innerHTML=data.Global.NewRecovered
        document.querySelector("#totalconfirm").innerHTML=data.Global.TotalConfirmed
        document.querySelector("#totaldead").innerHTML=data.Global.TotalDeaths
        document.querySelector("#totalrecover").innerHTML=data.Global.TotalRecovered
    })
    

button.onclick=function(){
    const country=input.value
    fetch(api)
    .then((data)=>data.json())
    .then((data)=>{
        console.log(data)
        var array=data.Countries
        var len=array.length
        var index=-1
        for(i=0;i<len;i++){
            if(array[i].Country==country){
                index=i;
                break;
            }
        }
        if(country==""){
            alert("Please enter the country name first")
        }else if(index==-1){
            input.value=""
            alert("The country name is wrong")
        }else{input.value=""
            document.querySelector("#mainhead").innerHTML=array[index].Country+"("+array[index].CountryCode+")"
            document.querySelector("#time").innerHTML="LAST UPDATE TIME : "+array[i].Date
            document.querySelector("#newconfirm").innerHTML=array[i].NewConfirmed
            document.querySelector("#newdead").innerHTML=array[i].NewDeaths
            document.querySelector("#newrecover").innerHTML=array[i].NewRecovered
            document.querySelector("#totalconfirm").innerHTML=array[i].TotalConfirmed
            document.querySelector("#totaldead").innerHTML=array[i].TotalDeaths
            document.querySelector("#totalrecover").innerHTML=array[i].TotalRecovered
        }

    })
}





