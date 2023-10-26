// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.


var today = dayjs();
$('#currentDay').text(today.format('dddd, MMMM D '));

$(function () {
  // TODO: Add a listener for click events on the save button. This code should use the id in the containing time-block as a key to save the user input in local storage. 
  
  var saveBtn = $('.saveBtn');

  saveBtn.on('click', function () {
    //get the string in the text field with the class of `.description`
    var taskDetails = $(this).parent().children().eq(1).val();
    var timeDetail = $(this).parent().attr('id');
    localStorage.setItem(timeDetail, taskDetails);
  }); 
  
  
  $('#hour-9 .description').val(localStorage.getItem('hour-9'));
  $('#hour-10 .description').val(localStorage.getItem('hour-10'));
  $('#hour-11 .description').val(localStorage.getItem('hour-11'));
  $('#hour-12 .description').val(localStorage.getItem('hour-12'));
  $('#hour-13 .description').val(localStorage.getItem('hour-13'));
  $('#hour-14 .description').val(localStorage.getItem('hour-14'));
  $('#hour-15 .description').val(localStorage.getItem('hour-15'));
  $('#hour-16 .description').val(localStorage.getItem('hour-16'));
  $('#hour-17 .description').val(localStorage.getItem('hour-17'));

  // HINT: What does `this` reference in the click listener function? 
  
  // How can DOM traversal be used to get the "hour-x" id of the time-block containing the button that was clicked? 
  
  // How might the id be useful when saving the description in local storage?
 
  // ----------------------------

  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. 
  



  function updater(){
  var currentHour = dayjs().hour();
  // var currentHour = 13
  $('.time-block').each(function (){//.time-block is seen on the div id containing id
    var taskTime = parseInt($(this).attr('id').split('-')[1])
    // console.log($(this));
    if(taskTime < currentHour){
      $(this).addClass('past')
      $(this).remove('future')

      // console.log($(this));
    }else if(taskTime === currentHour){
      $(this).removeClass('past')
      $(this).addClass('present')
      // console.log($(this));
    }else{
      $(this).removeClass('present')
      $(this).removeClass('past')
      $(this).addClass('future') 
      // console.log($(this));
   }
  })
} 

updater();

// setInterval(updater, 5000);


// ------------------------------

  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. 
  
  
   

  
  // HINT: How can the id attribute of each time-block be used to do this?
  
  
});
