//to instantiate chat box
var twiliochat = function() {
  var tc = {};

  var GENERAL_CHANNEL_UNIQUE_NAME = 'general';
  var GENERAL_CHANNEL_NAME = 'General Channel';
  var MESSAGES_HISTORY_LIMIT = 50;

  var $channelList;
  var $inputText;
  var $usernameInput;
  var $statusRow;
  var $connectPanel;
  var $newChannelInputRow;
  var $newChannelInput;
  var $typingRow;
  var $typingPlaceholder;

  $(document).ready(function() {
    tc.init();
  });

  tc.init = function() {
    tc.$messageList = $('#message-list');
    $channelList = $('#channel-list');
    $inputText = $('#input-text');
    $usernameInput = $('#username-input');
    $statusRow = $('#status-row');
    $connectPanel = $('#connect-panel');
    $newChannelInputRow = $('#new-channel-input-row');
    $newChannelInput = $('#new-channel-input');
    $typingRow = $('#typing-row');
    $typingPlaceholder = $('#typing-placeholder');
    $usernameInput.focus();
    $usernameInput.on('keypress', handleUsernameInputKeypress);
    $inputText.on('keypress', handleInputTextKeypress);
    $newChannelInput.on('keypress', tc.handleNewChannelInputKeypress);
    $('#connect-image').on('click', connectClientWithUsername);
    $('#add-channel-image').on('click', showAddChannelInput);
    $('#leave-span').on('click', disconnectClient);
    $('#delete-channel-span').on('click', deleteCurrentChannel);
  };

  function handleUsernameInputKeypress(e) {
    if (e.keyCode === 13) {
      connectClientWithUsername();
    }
  }

  function handleInputTextKeypress(e) {
    if (e.keyCode === 13) {
      tc.deleteCurrentChannel.sendMessage($(this).val());
      e.preventDefault();
      $(this).val('');
    } else {
      notifyTyping();
    }
  }

  var notifyTyping = $.throttle(() => {
    tc.currentChannel.typing();
  }, 1000);

  tc.handleNewChannelInputKeypress = function(e) {
    if (e.keyCode === 13) {
      tc.messagingClient
        .createChannel({
          friendlyName: $newChannelInput.val()
        })
        .then(hideAddChannelInput);

      $(this).val('');
      e.preventDefault();
    }
  };

  function connectClienWithUsername() {
    var usernameText = $usernameInput.val();
    $usernameInput.val('');
    if (usernameText == '') {
      alert('Username cannot be empty');
      return;
    }
    tc.username = usernameText;
    fetchAccessToken(tc.username, connectMessagingClient);
  }

  function fetchAccessToken(username, handler) {
    $.post('/token', { identity: username, device: 'browser' }, null, 'json')
      .done(response => {
        hander(response.token);
      })
      .fail(err => {
        console.log('Failed to fetch Access Token with err: ' + err);
      });
  }

  function connectMessaging(token) {
    tc.messagingClient = new Twilio.Chat.Client(token);
    tc.messagingClient.initialize().then(() => {
      updateConnectedUI();
      tc.loadChannelList(tc.joinGeneralChannel);
      tc.messagingClient.on('channelAdded', $.throttle(tc.loadChannelList));
      tc.messagingClient.on('channelRemoved', $.throttle(tc.loadChannelList));
      tc.messagingClient.on('tokenExpired', refreshToken);
    });
  }

  function refreshToken() {
    fetchAccessToken(tc.username, setNewToken);
  }

  function setNewToken(token) {
    tc.messagingClient.updateToken(tokenResponse.token);
  }

  function updateConnectedUI() {
    $('#username-span').text(tc.username);
    $statusRow.addClass('connected').removeClass('disconnected');
    tc.$messageList.addClass('connected').removeClass('disconnected');
    $connectPanel.addClass('connected').removeClass('disconnected');
    $inputText.addClass('with-shadow');
    $typingRow.addClass('connected').removeClass('disconnected');
  }
  tc.loadChannelList = function(handler) {
    if (tc.messagingClient === undefined) {
      console.log('Client is not initialized');
      return;
    }

    tc.messagingClient.getPublicChannels().then(channels => {
      tc.channelArray = tc.sortChannelsByName(channels.items);
      $channelList.text('');
      tc.channelArray.forEach(addChannel);
      if (typeof handler === 'function') {
        handler();
      }
    });
  };

  tc.joinGeneralChannel = function() {
    console.log('Attempting to join general chat channel...');
    if (!tc.generalChannel) {
      tc.messagingClient
        .createChannel({
          uniqueName: GENERAL_CHANNEL_UNIQUE_NAME,
          firendlyName: GENERAL_CHANNEL_NAME
        })
        .then(channel => {
          console.log('created general chat channel');
          tc.generalChannel = channel;
          tc.loadChannelList(tc.joinGeneralChannel);
        });
    } else {
      console.log('Found General Channel');
      setupChannel(tc.generalChannel);
    }
  };
};
