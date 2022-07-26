/**
 * MAKING A EXPRESS REQUEST LOGGER MIDDLEWARE:
 */
require('colors') // colors 5k* VS. chlalk 18k*
const s = (v) => JSON.stringify(v, null, 2)
// const isTesting = process.env.NODE_ENV === 'test'
const logMw = (req, res, next) => {
	// if (!isTesting) {
	// }

	// learn why req.baseurl ? : https://stackoverflow.com/a/56380963/10012446
	// Making log on finish request event coz I want to print the response status code on the request log like morgan does.
	res.on('finish', () => {
		console.log(`${req.method.bgGreen} ${req.baseUrl.brightYellow} ${res.statusCode.toString().brightYellow.bold.bgMagenta} ${Object.keys(req.query).length === 0 ? '' : '@query: ' + s(req.query).cyan} ${Object.keys(req.params).length === 0 ? '' : '@params: ' + s(req.params).cyan} ${Object.keys(req.body).length === 0 ? '' : '@payload:' + s(req.body).cyan} `)
	})

	next()
}

module.exports = logMw
