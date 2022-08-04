let channels = new Pusher('cedb822271ce03b61013', {
    cluster: 'ap1',
  });
  
  // Subscribe to the appropriate channel
  let channel = channels.subscribe('rstp');
  
  // Bind a callback function to an event within the subscribed channel
  channel.bind('call', function (data) {
    console.log(JSON.stringify(data));
  });

  async function pushData(data) {
    const res = await fetch('/api/rtsp', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    if (!res.ok) {
      console.error('failed to push data');
    }
  }