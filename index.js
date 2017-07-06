$('.list').on('click', 'li', function(e) {
  e.preventDefault();

  let link = './mortgage/' + $(this).context.innerText.replace(/\(.*?\)/, "") + '/index.html'

  $('iframe').attr('src', link)
});


// $('.numbers').on('click', function(e) {
//   e.preventDefault();
//
//   let numbersList = $('.numbers-list')
//   let numbersHeader = $('.numbers')
//
//   if( numbersList.attr('id') === 'hide' ) {
//     numbersList.attr('id', 'show');
//     numbersHeader.text('- Numbers:');
//   } else {
//     numbersList.attr('id', 'hide');
//     numbersHeader.text('+ Numbers:');
//   }
// });
//
//
// $('.home').on('click', function(e) {
//   e.preventDefault();
//
//   let homeList = $('.home-list')
//   let homeHeader = $('.home')
//
//   if( homeList.attr('id') === 'hide' ) {
//     homeList.attr('id', 'show');
//     homeHeader.text('- Home:');
//   } else {
//     homeList.attr('id', 'hide');
//     homeHeader.text('+ Home:');
//   }
// });
