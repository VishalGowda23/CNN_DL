const fs = require('fs');
let c = fs.readFileSync('/Users/vishalgowda/Desktop/dl/cnn_blog_website.html', 'utf8');
const pg = fs.readFileSync('/tmp/pg.html', 'utf8');

// The file has multiple insertions of the pg.html. It also deleted the matching line (e.g. `</section>`).
// We should restore original by looking at the original cnn_blog_website.html from earlier in the chat or we just replace the whole pg.html block with `</section>`.
// Yes! The `sed` command replaced `/<\/section>/` with the contents of `/tmp/pg.html`.

let parts = c.split(pg);
// The parts array will have the text between the insertions. 
// We just need to join them with `</section>`
let restored = parts.join('</section>');

// Now the file is restored to before the sed command!
// Let's verify and write it back.
fs.writeFileSync('/Users/vishalgowda/Desktop/dl/cnn_blog_website.html', restored);
console.log("Restored lines: " + restored.split('\n').length);
