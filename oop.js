
class Time_tracker {
   _menu_time= document.querySelectorAll('li');
   constructor(){
       this.Data_app();
   }
  
    /**Insert Html elements*/
    _html(data){
        //console.log(typeof(data.title),time.current);
        return   `
          <div class="card">
          <p>${data.title}</p>
          <h1>${data.timeframes["daily"].current}hrs</h1>
          <span class="times">Yesterday</span>-<span class="previous">${data.timeframes["daily"].previous}hrs</span>
          </div>
        `
         }
    _change_date(data){
      /**data.forEach((data)=> {
         this._menu_time.addEventListener("click",(e)=>{
           console.log(e.target.innerHTML.toLowerCase());
         }) 

      })*/
      this._menu_time.forEach((item)=>{
        console.log(item.innerHTML);
        
         item.addEventListener("click",(event)=>{
          const btn=event.target.innerHTML.toLowerCase();
          console.log(event.target.dataset.format);
          let html=document.querySelectorAll(".card h1");
          let html2=document.querySelectorAll(".previous");
          let html3=document.querySelectorAll(".times");
          
          data.forEach((data,keys)=>{
            
              
            html[keys].innerHTML=data.timeframes[btn].current+"hrs";
            html2[keys].innerHTML=data.timeframes[btn].previous+"hrs";
            html3[keys].innerHTML=event.target.dataset.format;
            
          })
         })
        
      })
    }
    async Data_app() {
        const response = await fetch('data.json');
        const data = await response.json();
        
        data.map((item)=>{
            document.querySelector(".card2").innerHTML +=this._html(item);
          });
        
         this._change_date(data);
      }
     
     /***this._menu_time.forEach((item)=>{
             item.addEventListener('click',(e)=>{
               time = e.target.innerHTML.toLowerCase();
               let _time = data.timeframes[time];
                const newdata= this._html(data,_time);
                //this._html(data,_time);
                document.querySelector(".card2").innerHTML +=newdata; })
             }) */

}
let app= new Time_tracker();
/**get the time  */
/***let times = time.forEach((item,keys)=>{
    item.addEventListener("click",(e)=>{
        alert(e.target.innerHTML);
    })
}) */