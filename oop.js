class Time_tracker {
   constructor(){
       Data_app();
   }

   
    /**import Jason Data */
    async _fetchData() {
        const response = await fetch('data.json');
        const Data = await response.json();
         
      }

    /**Generate markup*/

     html_inner=()=>{
        return   `
          
          <p>${title}</p>
          <h1>${time}hrs</h1>
          <p>${pageSize_2}-${timeframes} </p> 
          
        `
         }
    /**get time by add_event_listener */


}

/**get the time  */
time.forEach((item,keys)=>{
    item.addEventListener("click",(e)=>{
        alert(e.target.innerHTML);
    })
})