const fs = require('fs');
let c = fs.readFileSync('/Users/vishalgowda/Desktop/dl/cnn_blog_website.html', 'utf8');
let pgMarker = '<!-- ARCHITECTURE PLAYGROUND -->';
let crMarker = '<!-- COMPARISON TABLE -->';

let idxStart = c.indexOf(pgMarker);
let lastIdxEnd = c.lastIndexOf(crMarker);

if (idxStart !== -1 && lastIdxEnd !== -1) {
    let clean = c.substring(0, idxStart) + crMarker + c.substring(lastIdxEnd + crMarker.length);
    fs.writeFileSync('/Users/vishalgowda/Desktop/dl/cnn_blog_website.html', clean);
    console.log("File cleaned. Restored to original state just before COMPARISON TABLE.");
}
