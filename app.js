/**var url = document.URL;
if(url.includes('?')== false){
    location.href = "index.html?id=daily&prev=last day"
}  */
/**let times = time.forEach((item,keys)=>{
    item.addEventListener("click",(e)=>{
        alert(e.target.innerHTML);
    })  
})
 */
let card=document.querySelector(".card2");
let time= document.querySelectorAll("li");
//console.log(time);
let times = "";
time.forEach((item,keys,times)=>{
    item.addEventListener("click",(e,times)=>{
       times=e.target.innerHTML;
        
    })
})
console.log(times);
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

let html_inner=(title,timeframes,time,pageSize_2)=>{
  return   `
    
    <p>${title}</p>
    <h1>${time}hrs</h1>
    <p>${pageSize_2}-${timeframes}hrs</p> 
    
  `
   }

function showOj(per) {
    for (let i in per) {
        
        let timeframes=fet[i].timeframes;
        
        let daily=timeframes.daily;
        //console.log(daily);
        //console.log(typeof(daily));
        //let weekly=timeframes.weekly;
        let monthly=timeframes.monthly;
        const urlParams = new URLSearchParams(window.location.search);
        
        let pageSize = urlParams.get('id');   
        let pageSize_2 = urlParams.get('prev');
        if(pageSize==null){
            pageSize ="daily";
            pageSize_2 ="last day";
        }
        //console.log(pageSize,pageSize_2);
        let date=timeframes[pageSize];

        let title=show(fet[i],date).title;
        let timeframe =show(fet[i],date).current;
        let time=show(fet[i],date).previous;
        _html[i]=html_inner(title,timeframe,time,pageSize_2);
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
const urlParams = new URLSearchParams(window.location.search);
const pageSize = urlParams.get('id');

/**let feti= JSON.stringify(fet);
let per= JSON.parse(feti);

console.log(per.title);
 */
