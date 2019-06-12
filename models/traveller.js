const Traveller = function(journeys) {
  this.journeys = journeys;
};

Traveller.prototype.getJourneyStartLocations = function() {
  let result = this.journeys.map((journey) => {
    return journey.startLocation;
  })
  return result;
};

Traveller.prototype.getJourneyEndLocations = function () {
  let result = this.journeys.map((journey) => {
    return journey.endLocation;
  })
return result;
};

Traveller.prototype.getJourneysByTransport = function (transport) {
  let result = this.journeys.filter((journey) => {
    return journey.transport === transport;
  })
  return result;
};

Traveller.prototype.getJourneysByMinDistance = function (minDistance) {
  let result = this.journeys.filter((journey) => {
    return journey.distance > minDistance;
  })
  return result;
};

Traveller.prototype.calculateTotalDistanceTravelled = function () {
  let result = this.journeys.reduce((total, journey) => {
    return total + journey.distance
  }, 0)
  return result
};

Traveller.prototype.getUniqueModesOfTransport = function () {
  let modesOfTransport = this.journeys.map((journey) => {
    return journey.transport;
  })
  return [...new Set(modesOfTransport)];
};


module.exports = Traveller;
