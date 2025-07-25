const SpeechRecognition =
	window.SpeechRecognition || window.webkitSpeechRecognition;

const rec = new SpeechRecognition();

rec.lang = 'en-US';
rec.continuous = true;

rec.onresult = function (e) {
	const acceptedColors = [
		'red',
		'green',
		'blue',
		'yellow',
		'black',
		'white',
		'purple',
		'orange',
		'pink',
		'gray',
		'brown',
		'cyan',
		'magenta',
		'lime',
		'maroon',
		'navy',
		'teal',
		'olive',
		'silver',
		'gold',
	];

	for (let i = e.resultIndex; i < e.results.length; i++) {
		const script = e.results[i][0].transcript.toLowerCase().trim();
		if (acceptedColors.includes(script)) {
			document.body.style.backgroundColor = script;
		} else {
			alert('please say a color');
		}
	}
};

rec.start();
