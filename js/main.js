/**
 * Created by phucnguyen on 7/11/15.
 */
App = (function(){
  function getStart(step){
    switch(step){
      case '1':
        $('#inform-status').html('continute sign up');
        $('#inform-describe').html('complete your registration to see today\'s menu');
        $('#getstart-step1').addClass('hide');
        $('#getstart-step2').removeClass('hide');
        return false;
      case '2':

      }



  }
  return {
    getStart:getStart
  }
})()