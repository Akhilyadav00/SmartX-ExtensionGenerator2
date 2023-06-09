let mediaStream = null;
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

// Trigger the stopRecording function after 5 seconds
// setTimeout(() => {
//   stopRecording();
// }, 5000);
