### Object to be stored on the blockchain
```
Two assets 
Batch of mangos
{
    *KEY* BatchID: String starting with BI ex: BI13232 - Identifying the batch of mango from Farm to Packaging house.
    FoodID: String - Identifying the food. Can have additional information about food in a seperate file if possible.
    FarmID: String - Identifying where the mango was grown and harvested.
    LotNo: String - The lot where the fruit was harvested.
    DateOfHarvest: String - Date of when the fruit was harvested.
    PackagingHouseID: String - identifying which package house the batch was packaged.
    DateOfPackaging: String - When package house receives the batch.
}

Package of Mangos
{
    *KEY* PackageID: String starting with PI ex: PI12584 - Identifying a specific package.
    BatchID : String staring with BI ex: BI121323 - Identifying which batch it came from.
    
    DistributionCenterID: String - Identifying which Distribution Center that distributed the batch.
    DateOfDistribution: String - Date and time when the distribituion center received the batch from packaging house.

    StoreID: String - Store identifier.
	DateOfDelivery: String - Delivery date at store.
}
```

### Timeline
1. Farm registers the fruit before it's sent to the packaging house. Information required is what type of food the items are (FoodId), the ID of the farm (FarmID), the batch id for the fruit (BatchID) and the date the fruit was harvested.

2. The packaging house recieves the food and registers the date. This action uses the function registerFoodFromFarmToPackageHouse.

3. The packaging house seperates the food to seperate packaging which has a unique identifier (PackageID). 
This action uses the function registerPackage.

4. The distribution center recieves the packaged food and registers the date (DateOfDistribution)
This action uses the function registerFromPackageHouseToDistributionCenter.

5. The store receives the packaged food from the distributer and registers the date (DateOfDelivery)
This action uses the function registerFromDistributionCenterToStore.

6.  The user scans the package for the fruit in the store through the store's application. This action uses the function getItem.

###  Functions in smart contract
```
registerBatch(foodID, farmID, lotNo, batchID, harvestDate) : Registers the harvest date, the batch, what food the batch is and date of harvest on blockchain.

registerFoodFromFarmToPackageHouse(batchID, packagingHouseID, dateOfPackaging) : Is called when the packaging house recieves the food. Registers the date and Package house on the blockchain.

registerPackage(packageID, batchID) : Fetches information about the BatchID, adds this information to a new blockchain object with the packageID.

registerFromPackageHouseToDistributionCenter(packageID, dateOfDistribution, distributionCenterID) : Is called when the distribution center receives the food from the packaging house. Registers the date and distribution center of the package on the blockchain.

registerFromDistributionCenterToStore(packageID, storeID, dateOfDelivery) : Is called when the store receives the packages from the distribution center. Registers the date sore of the package on the blockchain.

getItem(itemID) : Fetches item (batch or package object) form blockchain.
```

### Function in REST API

### POST
```
/registerBatch 
{ 
	"batchID" : "B1", 
	"foodID": "1",
	"farmID" : "F1",
	"lotNo" : "1",
	"dateOfHarvest" : "DDMMYYYY"
}
```

```
/registerPackage 
{ 
	"packageID": "P1",
	"batchID" : "B1"
}
```

```
/registerFoodFromFarmToPackageHouse 
{ 
	"batchID" : "B1",
	"packagingHouseID" : "PH1",
	"dateOfPackaging" : "DDMMYYYY"
}
```

```
/registerFromPackageHouseToDistributionCenter 
{ 
	"packageID" : "P1",
	"distributionCenterID" : "DC1",
	"dateOfDistribution" : "DDMMYYYY"
}
```

```
/registerFromDistributionCenterToStore 
{ 
	"packageID" : "P1",
	"storeID" : "S1",
	"dateOfDelivery" : "DDMMYYYY"
}
```

###
GET
```
/getItem/ItemID  

Returns following object:
{"status":"success","result:{"batchID":"B1","foodID":"1","farmID":"F1","lotNo":"1","dateOfHarvest":"DDMMYYYY","packagingHouseID":"","dateOfPackaging":""}}
```

```
/getAllPackages  

Returns following object:
{"status":"success","result":[{"batchID":"B1","dateOfDelivery":"","dateOfDistribution":"","dateOfPackaging":"DDMMYYYY","distributionCenterID":"","packageID":"B5","packagingHouseID":"PH1","storeID":""},{"batchID":"B1","dateOfDelivery":"DDMMYYYY","dateOfDistribution":"DDMMYYYY","distributionCenterID":"DC1","packageID":"P1","storeID":"S1"},{"batchID":"B3","dateOfDelivery":"","dateOfDistribution":"","distributionCenterID":"","packageID":"P11113","storeID":""},{"batchID":"B3","dateOfDelivery":"DDMMYYYY","dateOfDistribution":"DDMMYYYY","distributionCenterID":"DC3","packageID":"P3","storeID":"S3"}]}
```

```
/getAllItems 

Returns following object:
{"status":"success","result":[{"batchID":"B1","dateOfHarvest":"DDMMYYYY","dateOfPackaging":"DDMMYYYY","farmID":"F1","foodID":"1","lotNo":"1","packagingHouseID":"PH1"},{"batchID":"B2","dateOfHarvest":"DDMMYYYY","dateOfPackaging":"","farmID":"F1","foodID":"1","lotNo":"1","packagingHouseID":""},{"batchID":"B3","dateOfHarvest":"DDMMYYYY","dateOfPackaging":"DDMMYYYY","farmID":"F1","foodID":"1","lotNo":"1","packagingHouseID":"PH1"},{"batchID":"B1","dateOfDelivery":"","dateOfDistribution":"","dateOfPackaging":"DDMMYYYY","distributionCenterID":"","packageID":"B5","packagingHouseID":"PH1","storeID":""},{"batchID":"B1","dateOfDelivery":"DDMMYYYY","dateOfDistribution":"DDMMYYYY","distributionCenterID":"DC1","packageID":"P1","storeID":"S1"},{"batchID":"B3","dateOfDelivery":"DDMMYYYY","dateOfDistribution":"DDMMYYYY","distributionCenterID":"DC3","packageID":"P3","storeID":"S3"}]}
```

If any route is failing, the following object will be returned.
{"status":"error","message":"Error message"}

### Functions to be written for fetching off chain data
```
getInformationAboutSupplyChainMember(SupplyChainMemberID(Ex: FarmID
 or StoreID)) : Retrieves all addition information about a farm, distribution center, store, packaging house. The information is what is needed in the front end. For example, name, reference to an image etc.
getInformationAboutFood(FoodID) : Retrieves all addition information about a food item. The information is what is needed in the front end. For example, name, reference to an image etc.
```
