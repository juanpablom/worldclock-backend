const { ErrorHandler } = require("../helpers/error");
const { WORLDCLOCK_API_URL } = require("../config");
const axios = require('axios');

const worldclockService = {

  getTimezones: async () => {
    try{
        const response = await axios.get(`${WORLDCLOCK_API_URL}/timezones`);        
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
      return { datetime, timezone };      
    }catch(e){
      console.log(e);
      throw new ErrorHandler(404, 'Not found');
    }
  }
};

module.exports = worldclockService;
