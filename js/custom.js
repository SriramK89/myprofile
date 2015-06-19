$(function() {
  _cscExtraOpen = false;
  _tcsExtraOpen = false;
  _prjExtraOpen = false;

  $('body').ready(function(event) {
    if(window.scrollY > 300) {
     $('#topNavBar').addClass('navbar-shrink');
    }
  });

  $('a#cscextralink').bind('click', function(event) {
    _hideOrShowInfo(_cscExtraOpen, 'a#cscextralink', 'p#extracscworkinfo');
    _cscExtraOpen = !_cscExtraOpen;
    return false;
  });

  $('a#tcsextralink').bind('click', function(event) {
    _hideOrShowInfo(_tcsExtraOpen, 'a#tcsextralink', 'p#extratcsworkinfo');
    _tcsExtraOpen = !_tcsExtraOpen;
    return false;
  });

  $('a#projectsextralink').bind('click', function(event) {
    _hideOrShowInfo(_prjExtraOpen, 'a#projectsextralink', 'div#extraprojectsinfo');
    _prjExtraOpen = !_prjExtraOpen;
    return false;
  });

  function _hideOrShowInfo(boolean_var, anchor_id, extra_dom_id) {
    if(boolean_var) {
      $(anchor_id).html('See more...');
    } else {
      $(anchor_id).html('See less...');
    }
    $(extra_dom_id).slideToggle();
  }
});