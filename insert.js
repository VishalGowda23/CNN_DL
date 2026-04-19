const fs = require('fs');
let c = fs.readFileSync('/Users/vishalgowda/Desktop/dl/cnn_blog_website.html', 'utf8');
const pg = fs.readFileSync('/tmp/pg.html', 'utf8');

// Find this exact block:
const target = `    </div>
  </div>
</section>

<!-- COMPARISON TABLE -->`;

if (c.includes(target)) {
    const split = c.split(target);
    const newText = `    </div>
  </div>
</section>

${pg}

<!-- COMPARISON TABLE -->`;
    fs.writeFileSync('/Users/vishalgowda/Desktop/dl/cnn_blog_website.html', split[0] + newText + split[1]);
    console.log("Success! Replaced block exactly.");
} else {
    console.log("Could not find the exact target block. The string might be slightly different.");
    // try to find just "<!-- COMPARISON TABLE -->"
    const fallback = `<!-- COMPARISON TABLE -->`;
    if (c.includes(fallback)) {
        const split2 = c.split(fallback);
        fs.writeFileSync('/Users/vishalgowda/Desktop/dl/cnn_blog_website.html', split2[0] + pg + "\n\n" + fallback + split2[1]);
        console.log("Success! Used fallback index to inject just before COMPARISON TABLE.");
    }
}
