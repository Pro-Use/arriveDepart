module.exports = app => {
  const arrivals = require("../controllers/arrival.controller.js");

  // Create a new Arrival
  app.post("/arrivals", arrivals.create);

  // Retrieve all Arrivals
  app.get("/arrivals", arrivals.findModerated);

  // Retrieve all Arrivals to be moderated
  app.get("/arrivals/moderation", arrivals.findUnmoderated);

  // Retrieve current Arrivals board
  app.get("/arrivals/webBoard", arrivals.findBoard);

  // Retrieve a single Arrival with arrivalId
  app.get("/arrivals/:arrivalId", arrivals.findOne);

  // Update a Arrival with arrivalId
  app.get("/arrivals/accept/:arrivalId", arrivals.update);

  // Delete a Arrival with arrivalId
  app.delete("/arrivals/:arrivalId", arrivals.delete);

};


