/**
 * Created by Greg on 4/15/2016.
 */
module.exports = {
  retrieve(req, res, next){
    try {
      //TODO: return mock data

      res.status(200);
      res.set('Conent-Type','application/json');
      res.ok({});
    } catch (e) {
      next(e);
    }
  }
};
