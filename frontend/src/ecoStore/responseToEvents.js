const resposponseToEvents = (response, fruits) => {
    const events = [];
    if (!(response && fruits)) return events;

    const fruit = fruits.find(f => f.foodID === response.foodID);

    if (response.dateOfHarvest) {
      events.push({
        timestamp: response.dateOfHarvest,
        description: `Your ${fruit.name} was harvested at farm ${response.farmID} ` + 
        `on lot ${response.lotNo} alongside many others in batch ${response.batchID}!`
      })
    }
    if (response.dateOfPackaging) {
      events.push({
        timestamp: response.dateOfPackaging,
        description: `It was soon packaged at packaging house ${response.packagingHouseID}.`
      })
    }
    if (response.dateOfDistribution) {
      events.push({
        timestamp: response.dateOfDistribution,
        description: `Your ${fruit.name} reached distribution center ${response.distributionCenterID} and shipped to the store.`
      })
    }
    if (response.dateOfDelivery) {
      events.push({
        timestamp: response.dateOfDelivery,
        image: fruit.image,
        description: `Was delivered to this EcoStore (${response.storeID}) and is now in your hand! \n` + 
        `Enjoy your fresh ${fruit.name}, knowing it has had a safe and tracable trip.`
      })
    }
    return events;
  }

  export default resposponseToEvents;