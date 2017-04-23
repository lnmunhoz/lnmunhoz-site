const fs = require( 'fs' );
const path = require('path');
const exec = require( 'child_process' ).exec;

/**
 * Optimize images recursively
 * @see https://developers.google.com/speed/docs/insights/OptimizeImages
 * @param {String} startPath 
 * @param {String} filter 
 */
function optimizeImages(startPath, filter){
  if (!fs.existsSync(startPath)){
    console.log("Directory not found ",startPath);
    return;
  }
  
  const files = fs.readdirSync(startPath);
  for(var i=0;i<files.length;i++){
    const filename = path.join(startPath,files[i]);
    const stat = fs.lstatSync(filename);
    if (stat.isDirectory()){
      optimizeImages(filename, filter); 
    } else if (filename.indexOf(filter) >= 0) {
      const cmd = `convert ${filename} -sampling-factor 4:2:0 -strip -quality 85 -interlace JPEG -colorspace RGB ${filename}`
      exec(cmd, function(error, stdout, stderr) {
        if (error) {
          console.log('Error', error);
          return;
        }
        
        console.log(filename, 'optimized.')
      });
    };
  };
};

optimizeImages('../img','.jpg');