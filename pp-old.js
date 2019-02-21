const http = require('http');

http.createServer((req, res) =>{

	res.writeHead(200, {'Content-Type':'application/json'});

	let lid = {
		nombre: 'ngel',
		pellido: 'bejrno',
		url: req.url
	}

	res.write(JSON.stringify(lid));
	//res.write('hol mundo');
	res.end();

})
.listen(8080);

console.log('ecuchndo el puerto 8080');