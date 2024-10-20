function showFront() {
  document.getElementById('card').style.transform = 'rotateY(0deg)';
}

function showInside() {
  document.getElementById('card').style.transform = 'rotateY(180deg)';
}

// Add interactivity for uploading photo
document.getElementById('photo-input').addEventListener('change', function() {
  const photoBox = document.querySelector('.photo-box');
  photoBox.innerHTML = `<p>Here's Your Photo:</p><img src="${URL.createObjectURL(this.files[0])}" alt="Uploaded Photo" style="width:100%; border-radius: 10px;">`;
});
