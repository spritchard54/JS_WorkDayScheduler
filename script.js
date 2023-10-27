//Start JS Code
var today = dayjs();

$('#currentDay').text(today.format('dddd, MMMM D '));

$(function () {

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

setInterval(updater, 10000);
  
});
