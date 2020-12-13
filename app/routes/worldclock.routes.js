const controller = require("../controllers/worldclock.controller");
const { redis } = require("../middlewares");

module.exports = function (app) {
  app.use(function (req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  app.get(
    "/api/timezones",    
    redis.getTimezones,
    controller.getTimezones
  );

  app.get(
    "/api/timezones/*",    
    redis.getTimezoneByName,
    controller.getTimezoneByName
  );

  app.put(
    "/api/timezones/:name",    
    controller.editTimezoneByName
  );

  app.delete(
    "/api/timezones/:name",    
    controller.removeTimezoneByName
  );

};
