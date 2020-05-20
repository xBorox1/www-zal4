import {createServer} from 'http';
import * as fs from 'fs';


async function zapiszCos() {
	let fd = -1;
	try {
		fd = await open('plik3.txt', 'a');
		await write(fd, 'To jeszcze z async/await');
		await close(fd);

	} catch (e) {
		console.log('Jakiś błąd w trakcie zapisywania', e);
		if (fd != -1) {
			await close(fd);
		}
	}
}

let server = createServer(
	(req, res) => {
		res.write('Ale super!');
		res.end();
	}
);


server.listen(8080);
