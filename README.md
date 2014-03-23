# jQuery.getScripts

Load one or multiple JavaScript files from the server using a GET HTTP request, then execute them..

## Installation

This package is available through Bower. From the command-line, run: 
  
  bower install jquery.getscripts 

Include script *after* the jQuery library (unless you are packaging scripts somehow else):

```html
<script src="/path/to/jquery.getscripts.js"></script>
```

**Do not include the script directly from GitHub (http://raw.github.com/...).** The file is being served as text/plain and as such being blocked
in Internet Explorer on Windows 7 for instance (because of the wrong MIME type). Bottom line: GitHub is not a CDN.

The plugin can also be loaded as AMD or CommonJS module.

## Usage

```html
<script>
$.getScripts({
  urls: ['/path/to/one.js', 'path/to/two.js'],
  cache: true,  // Default
  async: false, // Default
  success: function(response) {
    // Files have loaded
  }
});
</script>
```

## Authors

[David Hudson](https://github.com/hudsonfoo)