/**
 * helper hbs
 */
const hbs = require('hbs');

hbs.registerHelper('getNio', () => new Date().getFullYear());


hbs.registerHelper('cpitlir', (plbr) =>{
	let plb = plbr.split(' ');

	plb.forEach((pl, id) => {
		plb[id] = pl.charAt(0).toUpperCase() + pl.slice(1).toLowerCase();
	});

	return plb.join(' ');
});