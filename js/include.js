function include(space) {
  fetch('/blocks/' + space + '.html')
    .then(response => {
      if (!response.ok) throw new Error('Failed to load ' + space + '.html');
      return response.text(); // Get content as text
    })
    .then(html => {
      document.getElementById(space + '-container').innerHTML = html; // Insert content
    })
    .catch(error => {
      console.error('Error:', error);
      document.getElementById(space + '-container').innerHTML = '<p>' + space + ' failed to load.</p>';
    });
}