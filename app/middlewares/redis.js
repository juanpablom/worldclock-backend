const redisClient = require('../../redis-client');

  getTimezones = async (req, res, next) => {
    const key = 'timezones';
    const rawData = await redisClient.getAsync(key);
    if(rawData)
        return res.json(JSON.parse(rawData));

    next();    
  };

  getTimezoneByName = async (req, res, next) => {
    const key = req.params[0];
    const rawData = await redisClient.getAsync(key);
    if(rawData)
        return res.json(JSON.parse(rawData));
        
    next();    
  }; 


  const redis = {
    getTimezones,
    getTimezoneByName,
  };

  module.exports = redis;