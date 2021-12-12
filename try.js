class App {
    _timeBtnsContainer = document.querySelector('.time-control');
    _parentContainer = document.querySelector('main');
  
    // run the _fetchData function directly
    constructor() {
      this._fetchData();
    }
  
    /*
      1) Get the data from JSON file - [async - await]
      2) operate the _render function on the event of page loading
      3) operate the _addHandlerBtn function
     */
    async _fetchData() {
      const response = await fetch('./data.json');
      const dataArr = await response.json();
  
      window.addEventListener('DOMContentLoaded', this._render(dataArr));
  
      this._AddHandlerBtn(dataArr);
    }
  
    /*
      render the data on the page
      1) @param time = 'weekly' is default in the event of page loading
      2) remove all elements from the page except the static controller card
      3) getting the markup and adding it to the parent element
      4) making the clicked buttton active
    */
    _render(dataArr, time = 'weekly') {
      while (this._parentContainer.childNodes.length > 2)
        this._parentContainer.removeChild(this._parentContainer.lastChild);
  
      dataArr.forEach(data => {
        const specificTime = data.timeframes[time];
        const markup = this._generateMarkup(data, specificTime);
        this._parentContainer.insertAdjacentHTML('beforeend', markup);
      });
  
      document.querySelector(`[data-format="${time}"]`).classList.add('active');
    }
  
    /*
      control the event of clicking a button
      1) getting the time format from the data attribute
      2) removing the active class from all butttons before adding it later on the intended one
      3) rendering the data according to the right time format
    */
    _AddHandlerBtn(data) {
      this._timeBtnsContainer.addEventListener('click', e => {
        const btn = e.target.closest('.time-btn');
        if (!btn) return;
  
        const timeFormat = btn.dataset.format;
  
        document
          .querySelectorAll('.time-btn')
          .forEach(btn => btn.classList.remove('active'));
  
        this._render(data, timeFormat);
      });
    }
  
    _generateMarkup(data, time) {
      // converting the title from data to the HTML classes convention
      const title = `${data.title}`.toLowerCase().split(' ').join('-');
  
      return `
        <div class="card card-${title}">
          <img class="card-icon" src="./images/icon-${title}.svg" alt="${title}-icon" />
          <div class="card-content">
            <div class="title-container">
              <p class="title">${data.title}</p>
              <span class="dots">...</span>
            </div>
            <div class="time-container">
              <p class="now pulse"><span class="time-now">${time.current}</span>hrs</p>
              <p class="before pulse">
                Last week - <span class="time-before">${time.previous}</span>hrs
              </p>
            </div>
          </div>
        </div>
      `;
    }
  }
  
  const app = new App();