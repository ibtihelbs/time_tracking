let card=document.querySelector(".card2");
let show_daily=document.getElementById("daily");
let show_weekly=document.getElementById("weekly");
let show_monthly=document.getElementById("monthly");
let fet = {};
let _html=[];
let show=(z,date)=>{
   // let timeframes = z.timeframes.date;
 return{
      title:z.title,
      current : date.current,
      previous: date.previous
 }
}
/**show_weekly.addEventListener("click",alert("hi"));
show_monthly.addEventListener("click",alert("hi")); */

let html_inner=(title,timeframes,time)=>{
  return   `
    
    <p>${title}</p>
    <h1>${time}hrs</h1>
    <p>${timeframes} </p> 
    
  `
   }

function showOj(per) {
    for (let i in per) {
        
        let timeframes=fet[i].timeframes;
        let daily=timeframes.daily;
        let weekly=timeframes.weekly;
        let monthly=timeframes.monthly;
        let title=show(fet[i],weekly).title;
        let timeframe =show(fet[i],weekly).current;
        let time=show(fet[i],weekly).previous;
        
        _html[i]=html_inner(title,timeframe,time);
    }
     
}
console.log(_html);
let joe=()=>{
    for (let i in _html){
        var h =document.createElement("div");
        h.setAttribute("class", "card");
        var cls =h.innerHTML=_html[i];
        card.appendChild(h);
    }
}
 fetch ("data.json")
.then(function(resp){
    return resp.json();
})
.then(function(data){
    //console.log (data);
    fet=data;
    let feti= JSON.stringify(fet);
    let per= JSON.parse(feti);
    
    showOj(per);
    joe();
})


/**let feti= JSON.stringify(fet);
let per= JSON.parse(feti);

console.log(per.title);
 */