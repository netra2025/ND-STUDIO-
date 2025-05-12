function generateVideo() {
    const input = document.getElementById('inputText').value;
    const status = document.getElementById('status');
    const video = document.getElementById('videoPreview');
  
    if (!input.trim()) {
      status.textContent = "Please enter text.";
      return;
    }
  
    status.textContent = "Generating video using AI...";
    
    // Placeholder delay to simulate AI generation
    setTimeout(() => {
      status.textContent = "Preview generated (Placeholder)";
      video.src = "sample.mp4"; // You must include a placeholder video named sample.mp4 in your project
      video.style.display = 'block';
    }, 3000);
  }
  