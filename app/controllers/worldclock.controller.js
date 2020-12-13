const worldclockService = require("../services/worldclock.service");

exports.getTimezones = async (req, res, next) => {
  try {
    const result = await worldclockService.getTimezones();
    res.status(200).send(result);
  } catch (err) {
    console.log(err);
    next(err);
  }
};

exports.getTimezoneByName = async (req, res, next) => {
  const name = req.params[0];
  try {
    const result = await worldclockService.getTimezoneByName(name);    
    res.status(200).send(result);
  } catch (err) {
    console.log(err);
    next(err);
  }
};

exports.editTimezoneByName = async (req, res, next) => {
  try {
    console.log('edited');
    res.status(200).send('Edited!');
  } catch (err) {
    console.log(err);
    next(err);
  }
};

exports.removeTimezoneByName = async (req, res, next) => {
  try {
    console.log('removed');
    res.status(200).send('Removed!');
  } catch (err) {
    console.log(err);
    next(err);
  }
};
