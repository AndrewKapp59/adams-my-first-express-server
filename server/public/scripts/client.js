$(document).ready(onReady);
//$(onReady);

function onReady(){
  getQuotes();
}

function getQuotes () {
  // get quotes from the server using AJAX
  $.ajax({
    method: 'GET',
    url: '/quotes'
  }).then(function(response){
    console.log('Great success!', response);
    // TODO append quotes to DOM
    renderToDom(response);
  }).catch(function(response){
    console.log('oops no luck', response);
  });
}

function renderToDom(quotes) {
  for (let quote of quotes) {
    $('#output').append(`
      <p>${quote.text}, <i>${quote.author}</i></p>
    `)
  }
}