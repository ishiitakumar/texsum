fetch("https://rewriter-paraphraser-text-changer-multi-language.p.rapidapi.com/rewrite", {
	"method": "POST",
	"headers": {
		"content-type": "application/json",
		"x-rapidapi-host": "rewriter-paraphraser-text-changer-multi-language.p.rapidapi.com",
		"x-rapidapi-key": "4b5318812dmshcbf8372d2b753ddp158562jsn8f0df0dd875c"
	},
	"body": {
		"language": "en",
		"strength": 3,
		"text": "lets do this"
	}
})
.then(response => {
	console.log(response);
})
.catch(err => {
	console.error(err);
});
