// jQuery Task 01 — Intro
$(function(){                        // $(document).ready shorthand
  const $log = $('#log');

  function log(msg){                 // small helper to show logs
    $log.prepend(new Date().toLocaleTimeString() + ' — ' + msg + '\n');
    console.log(msg);
  }

  // 1) Selection & text manipulation
  $('#btnText').on('click', function(){
    $('#title').text('Title updated by jQuery');
    $('#desc').text('Text changed using .text()');
    log('Changed title & description text');
  });

  // 2) Toggle CSS class
  $('#btnToggle').on('click', function(){
    $('#box').toggleClass('highlight');
    log('Toggled highlight class on box');
  });

  // 3) Simple effect (fade)
  $('#btnFade').on('click', function(){
    $('#box').fadeToggle(300);
    log('Toggled fade on box');
  });

  // 4) Delegation & dynamic items
  let nextId = 3;
  $('#addItem').on('click', function(){
    $('#items').append('<li data-id="' + nextId + '">Item ' + nextId + '</li>');
    log('Appended Item ' + nextId);
    nextId++;
  });

  // event delegation (handles dynamically added items too)
  $('#items').on('click', 'li', function(){
    const id = $(this).data('id');
    $(this).toggleClass('highlight');
    log('Clicked Item ' + id);
  });

  // 5) Tiny AJAX demo (public API, CORS permitting)
  $('#btnAjax').on('click', function(){
    // using a simple public API that returns JSON
    $.get('https://api.quotable.io/random')
      .done(function(data){
        $('#desc').text('Quote: ' + data.content + ' — ' + data.author);
        log('AJAX success: quote loaded');
      })
      .fail(function(){
        log('AJAX failed — maybe CORS or offline');
      });
  });

  log('jQuery ready. Task 01 loaded.');
});
