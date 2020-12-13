const { ErrorHandler } = require("../helpers/error");
const { WORLDCLOCK_API_URL } = require("../config");
const axios = require('axios');
const redisClient = require('../../redis-client');

const worldclockService = {

  getTimezones: async () => {
    try{
        const response = await axios.get(`${WORLDCLOCK_API_URL}/timezones`);
        await redisClient.setAsync('timezones', JSON.stringify(response.data));
        return response.data;
      }catch(e){
        console.log(e);
        throw new ErrorHandler(404, 'Not found');
      }    
  },

  getTimezoneByName: async (name) => {
    try{      
      const response = await axios.get(`${WORLDCLOCK_API_URL}/timezone/${name}`);
      const { datetime, timezone } = response.data;
      const json = { datetime, timezone };
      await redisClient.setAsync(timezone, JSON.stringify(json), "EX", 30);      
      return json;
    }catch(e){
      console.log(e);
      throw new ErrorHandler(404, 'Not found');
    }
  }
};

module.exports = worldclockService;
