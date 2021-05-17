const api="https://coronavirus.app/get-places"

fetch(api)
.then((data)=>data.json())
.then((data)=>{
    console.log(data)
})
.catch((err)=>{
    console.log(err)
})