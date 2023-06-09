const ext_config = {
  manifest: (name, description, icon48, icon128, permissions) => ({
    manifest_version: 3,
    name,
    description,
    action: {
      default_icon: `icons/${icon48}`
    },
    icons: {
      48: `icons/${icon48}`,
      128: `icons/${icon128}`
    },
    version: '1.0',
    chrome_url_overrides: {
      newtab: 'new_tab.html'
    },
    content_scripts: [{ matches: ['http://*/*', 'https://*/*'], js: ['scripts/content_script.js'] }],
    permissions
  }),
  scripts: [
    {
      filename: 'background.js',
      content: (code) => `chrome.browserAction.onClicked.addListener(function() {
chrome.tabs.create({url: "https://www.example.com"});
});`
    }
  ],
  html: [
    {
      filename: 'new_tab.html',
      content: (body) => `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <!-- Font Awesome -->
<link
  href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css"
  rel="stylesheet"
/>
<!-- Google Fonts -->
<link
  href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
  rel="stylesheet"
/>
<!-- MDB -->
<link
  href="https://cdnjs.cloudflare.com/ajax/libs/mdb-ui-kit/6.2.0/mdb.min.css"
  rel="stylesheet"
/>
    <title>Custom Extension Tab</title>
</head>
<body>
    ${body}
</body>
</html>`
    }
  ],
  OptionalScripts: {
    ScreenRecorder: () => `let mediaStream = null;
    let mediaRecorder = null;
    let recordedChunks = [];
    
    // Get the screen media stream
    document.querySelector('#startrec').addEventListener('click', async () => {
      navigator.mediaDevices.getDisplayMedia({ video: true }).then((stream) => {
        mediaStream = stream;
        startRecording();
      });
    })
    
    document.querySelector('#stoprec').addEventListener('click', async () => {
      stopRecording();
    })
    
    // Start recording the screen
    function startRecording() {
      mediaRecorder = new MediaRecorder(mediaStream);
    
      // Listen to dataavailable event to collect recorded data
      mediaRecorder.addEventListener('dataavailable', (event) => {
        if (event.data.size > 0) {
          recordedChunks.push(event.data);
        }
      });
    
      // Start the media recorder
      mediaRecorder.start();
      document.querySelector('#stoprec').disabled = false;
    }
    
    // Stop recording and download the recorded file
    function stopRecording() {
      mediaRecorder.stop();
      mediaStream.getTracks().forEach(track => track.stop());
      
      // Combine all recorded chunks into a single Blob
      const recordedBlob = new Blob(recordedChunks, { type: 'video/webm' });
    
      // Download the recorded file
      const downloadLink = document.createElement('a');
      downloadLink.href = URL.createObjectURL(recordedBlob);
      downloadLink.download = 'recorded-screen.webm';
      downloadLink.click();
    }
    `,
    DriveFolder: () => ``,
    GoogleSheet: () => ``,
    ClipBoard: () => `function displayClipboardContents() {
      // Check if the Clipboard API is supported by the browser
      if ('clipboard' in navigator) {
        navigator.clipboard.readText()
          .then(text => {
            document.getElementById('clipboardData').textContent = text;
          })
          .catch(err => {
            console.error('Failed to read clipboard contents: ', err);
          });
      }
    }

    // Call the function to display clipboard contents
    displayClipboardContents();`,
    GoogleCalender: () => ``
  }
};

module.exports = ext_config;
