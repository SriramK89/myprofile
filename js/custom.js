$(function() {
  _cscExtraOpen = false;
  _tcsExtraOpen = false;
  _softuraExtraOpen = false;
  _payodaExtraOpen = false;
  _prjExtraOpen = false;
  _action = '';
  _toggleEmail = false;
  _toggleCV = false;

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

  $('a#softuraextralink').bind('click', function(event) {
    _hideOrShowInfo(_softuraExtraOpen, 'a#softuraextralink', 'p#extrasofturaworkinfo');
    _softuraExtraOpen = !_softuraExtraOpen;
    return false;
  });

  $('a#payodaextralink').bind('click', function(event) {
    _hideOrShowInfo(_payodaExtraOpen, 'a#payodaextralink', 'p#extrapayodaworkinfo');
    _payodaExtraOpen = !_payodaExtraOpen;
    return false;
  });

  $('a#projectsextralink').bind('click', function(event) {
    _hideOrShowInfo(_prjExtraOpen, 'a#projectsextralink', 'div#extraprojectsinfo');
    _prjExtraOpen = !_prjExtraOpen;
    return false;
  });

  $(document).keypress(function(event){
    _keyStroke = String.fromCharCode(event.which);
    switch(_keyStroke) {
      case 'e':
        _action = 'e';
        break;
      case 'm':
        if(_action == 'e') {
          _action = 'em';
        }
        break;
      case 'a':
        if(_action == 'em') {
          _action = 'ema';
        }
        break;
      case 'i':
        if(_action == 'ema') {
          _action = 'emai';
        }
        break;
      case 'l':
        if(_action == 'emai') {
          _action = '';
          _toggleEmail = true;
        }
        break;
      case 'c':
        _action = 'c';
        break;
      case 'v':
        if(_action == 'c') {
          _action = '';
          _toggleCV = true;
        }
        break;
      default:
        _action = '';
    }
    if(_toggleEmail) {
      _toggleEmail = false;
      $('#openEmail').modal('show');
    }
    if(_toggleCV) {
      _toggleCV = false;
      $('#openCV').modal('show');
    }
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
