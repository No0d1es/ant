module.exports = function(app, db, fc) {
	var path = '/addons/ant.setting.about/';
	app.route(path + 'client.js')
		.get(function(req, res) {
			fc.sendFile(req, res, __dirname + '/client.min.js', true);
		})
}