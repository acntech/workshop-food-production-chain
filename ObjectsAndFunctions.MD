### Object to be stored on the blockchain:
{
    FoodID: String - Identifying the food. Can have additional information about food in a seperate file if possible.
    FarmID: String - Identifying where the mango was grown and harvested.
    BatchID: String - Identifying the batch of mango from Farm to Packaging house.
    DateOfHarvest: String - Date of when the fruit was harvested.
    
    PackagingHouseID: String - identifying which package house the batch was packaged.
    DateOfPackaging: String - When package house receives the batch.
    PackageID: String - Identifying a specific package.
    
    DistributionCenterID: String - Identifying which Distribution Center that distributed the batch.
    DateOfDistribution: String - Date and time when the distribituion center received the batch from packaging house.

	StoreID: String - Store identifier.
	DateOfDelivery: String - Delivery date at store.
}

### Timeline
1. Farm registers the fruit before it's sent to the packaging house. Information required is what type of food the items are (FoodId), the ID of the farm (FarmID), the batch id for the fruit (BatchID) and the date the fruit was harvested.

2. The packaging house recieves the food (DateOfPackaging) and seperates the food to seperate packaging which has a unique identifier (PackageID).

3. The distribution center recieves the packaged food and registers the date (DateOfDistribution)


### Function to be written for blockchain
registerBatch(FoodID, FarmID, BatchID, HarvestDate) : Registers the harvest date, the batch, what food the batch is and date of harvest on blockchain.

registerFoodFromFarmToPackageHouse(PackagingHouseID, DateOfPackaging) : Is called when the packaging house recieves the food. Registers the date and Package house on the blockchain.

registerPackageID(PackageID, BatchID): Fetches information about the BatchID, adds this information to a new blockchain object with the packageID.

registerFromPackageHouseToDistributionCenter(PackageID, DateOfDistribution, DistributionCenterID) : Is called when the distribution center receives the food from the packaging house. Registers the date and distribution center of the package on the blockchain.

registerFromDistributionCenterToStore(StoreID, DateOfDelivery) : Is called when the store receives the packages from the distribution center. Registers the date sore of the package on the blockchain.

getBatch(BatchID) : Retrieves information about the batch and all objects from the batch.
getPackage(PackageID) : Retrieves all information from a specific batch.

### Functions to be written for fetching off chain data
getInformationAboutSupplyChainMember(SupplyChainMemberID(Ex: FarmID
 or StoreID)) : Retrieves all addition information about a farm, distribution center, store, packaging house. The information is what is needed in the front end. For example, name, reference to an image etc.
getInformationAboutFood(FoodID) : Retrieves all addition information about a food item. The information is what is needed in the front end. For example, name, reference to an image etc.
