function solve (input) {
	var nameReg = /<embed\s.+\sname="(.+?)"/g;
	var srcReg = /<embed\ssrc="(.+?)"/g;
	var widthReg = /<embed\s.+\swidth="(.+?)"/g;
	var heightReg = /<embed\s.+\sheight="(.+?)"/g;
	var versionReg = /version=(.+?)"/g;

	matchName = nameReg.exec(input);
	matchSrc = srcReg.exec(input);
	matchWidth = widthReg.exec(input);
	matchHeight = heightReg.exec(input);
	matchVersion = versionReg.exec(input);
	var NewVersion = matchVersion[1].replace(/,/g, '.');

	// console.log(matchName[1]);
	// console.log(matchSrc[1]);
	// console.log(matchWidth[1]);
	// console.log(matchHeight[1]);
	// console.log(NewVersion);

console.log('<div id="' + matchName[1] + '"></div><script>swfobject.embedSWF("' + matchSrc[1] + '", "' + matchName[1] + '", "' + matchWidth[1] + '", "' + matchHeight[1] + '", "' + NewVersion + '");</script>');

}


solve([
   '<object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=6,0,40,0" width="468" height="60" id="mymoviename">',
      '<param name="movie" value="example.swf" />',
      '<param name="quality" value="high" />',
      '<param name="bgcolor" value="#ffffff" />',
      '<embed src="example.swf" quality="high" bgcolor="#ffffff" width="468" height="60" name="mymoviename" align="" type="application/x-shockwave-flash" pluginspage="http://www.macromedia.com/go/getflashplayer"></embed>',
   '</object>'
].join(''));

// console.log(input);


// Output:
// console.log('<div id="mymoviename"></div><script>swfobject.embedSWF("example.swf", "mymoviename", "468", "60", "6.0.40.0");</script>');
// <div id="mymoviename"></div><script>swfobject.embedSWF("example.swf", "mymoviename", "468", "60", "6.0.40.0");</script>
 