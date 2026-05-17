fetch('https://script.google.com/macros/s/AKfycbyWBbAdqmPxS2E291oH2guCRgp0Zs6Z3WKjCjlstQGMxSoOdM56WiBwUhK8w0LhURZSnQ/exec')
  .then(response => response.json())
  .then(data => console.log(data));
