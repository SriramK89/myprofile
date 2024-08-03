$(function() {
  _cscExtraOpen = false;
  _tcsExtraOpen = false;
  _softuraExtraOpen = false;
  _payodaExtraOpen = false;
  _prjExtraOpen = false;
  _action = '';
  _toggleEmail = false;
  _toggleCV = false;
  _emailChatMsg = false;
  _resumeChatMsg = false;

  $('body').ready(function(event) {
    if(window.scrollY > 300) {
     $('#topNavBar').addClass('navbar-shrink');
    }
    return false;
  });

  $('a#cscextralink').bind('click', function(event) {
    _hideOrShowInfo(_cscExtraOpen, 'a#cscextralink', 'p#extracscworkinfo');
    _cscExtraOpen = !_cscExtraOpen;
    event.preventDefault();
    event.stopPropagation();
  });

  $('a#tcsextralink').bind('click', function(event) {
    _hideOrShowInfo(_tcsExtraOpen, 'a#tcsextralink', 'p#extratcsworkinfo');
    _tcsExtraOpen = !_tcsExtraOpen;
    event.preventDefault();
    event.stopPropagation();
  });

  $('a#softuraextralink').bind('click', function(event) {
    _hideOrShowInfo(_softuraExtraOpen, 'a#softuraextralink', 'p#extrasofturaworkinfo');
    _softuraExtraOpen = !_softuraExtraOpen;
    event.preventDefault();
    event.stopPropagation();
  });

  $('a#payodaextralink').bind('click', function(event) {
    _hideOrShowInfo(_payodaExtraOpen, 'a#payodaextralink', 'p#extrapayodaworkinfo');
    _payodaExtraOpen = !_payodaExtraOpen;
    event.preventDefault();
    event.stopPropagation();
  });

  $('a#projectsextralink').bind('click', function(event) {
    _hideOrShowInfo(_prjExtraOpen, 'a#projectsextralink', 'div#extraprojectsinfo');
    _prjExtraOpen = !_prjExtraOpen;
    event.preventDefault();
    event.stopPropagation();
  });

  $('#chat-bubble').bind('click', function(event) {
    $('#chat-bubble').hide();
    $('#chat-section').show();
  });

  $('.chat-close').bind('click', function(event) {
    $('#chat-bubble').show();
    $('#chat-section').hide();
  });

  $('.chat-msg.clickable').bind('click', function(event) {
    if($(event.target).hasClass('email')) {
      if(_emailChatMsg) { return; }

      var emailContent = '<div class="chat-msg response-content">My email is ';
      emailContent += '<a href="mailto:sriramhearing@gmail.com">';
      emailContent += 'sriramhearing@gmail.com</a>.</div>';

      _emailChatMsg = true;

      $('.chat-body').append(emailContent);
      $(event.target).removeClass('clickable').addClass('clicked');
    } else if($(event.target).hasClass('resume')) {
      if(_resumeChatMsg) { return; }

      var resumeContent = '<div class="chat-msg response-content">';
      resumeContent += '<a href="SriramResume.pdf" download>';
      resumeContent += 'Click here</a> to download my resume.</div>';

      _resumeChatMsg = true;

      $('.chat-body').append(resumeContent);
      $(event.target).removeClass('clickable').addClass('clicked');
    }
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
    event.preventDefault();
    event.stopPropagation();
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
