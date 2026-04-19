const fs = require('fs');
let c = fs.readFileSync('/Users/vishalgowda/Desktop/dl/cnn_blog_website.html', 'utf8');
let pg2 = fs.readFileSync('/tmp/pg2.html', 'utf8');
let parts = c.split('<!-- COMPARISON TABLE -->');
if(parts.length > 1) {
  let reconstructed = parts[0] + pg2 + '\n\n<!-- COMPARISON TABLE -->' + parts[1];
  fs.writeFileSync('/Users/vishalgowda/Desktop/dl/cnn_blog_website.html', reconstructed);
  console.log('Injected new canvas visualization.');
}
