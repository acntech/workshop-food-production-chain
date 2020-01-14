
'use strict';
const { FileSystemWallet, Gateway, X509WalletMixin } = require('fabric-network');
const fs = require('fs');
const path = require('path');

// capture network variables from config.json
const configPath = path.join(process.cwd(), './connectionProfiles/config.json');
const configJSON = fs.readFileSync(configPath, 'utf8');
const config = JSON.parse(configJSON);
var connection_file = config.connection_file;
var userName = config.userName;
var gatewayDiscovery = config.gatewayDiscovery;

// connect to the connection file
const ccpPath = path.join(process.cwd(), connection_file);
const ccpJSON = fs.readFileSync(ccpPath, 'utf8');
const ccp = JSON.parse(ccpJSON);

doesIdentityExistInWallet = function(){
    // Create a new file system based wallet for managing identities.
    const walletPath = path.join(process.cwd(), '/wallet');
    const wallet = new FileSystemWallet(walletPath);
    console.log(`Wallet path: ${walletPath}`);

    // Check to see if we've already enrolled the user.
    const userExists = await wallet.exists(userName);

    if (!userExists) {
        console.log('An identity for the user ' + userName + ' does not exist in the wallet');
        console.log('Run the registerUser.js application before retrying');
        return false;
    }
    return true;
}

exports.getItem = async function (itemID) {
    try {
        let response = {}
        if(!doesIdentityExistInWallet()){
            response.error = 'An identity for the user ' + userName + ' does not exist in the wallet. Register ' + userName + ' first';
            return response;
        }

        //Create a new gateway for connecting to our peer.
        const gateway = new Gateway();

        //Connect to peer
        await gateway.connect(ccp, { wallet, identity: userName, discovery: gatewayDiscovery });

        //Get channel
        const channel = await gateway.getNetwork('SupplyChainChannel');

        // Get the contract from the network.
        const contract = channel.getContract('food-contract');

        //Run the transaction.
        await contract.submitTransaction('getItem', itemID);

        console.log(`getItem(${itemID}) - Transaction has been submitted`);
        await gateway.disconnect();
        
        response.msg = 'getItem Transaction has been submitted';
        return response;

    } catch (error) {
        console.error(`Failed to evaluate transaction: ${error}`);
        response.error = error.message;
        return response;
    }
}



exports.registerBatch = async function (_batchID, _foodID, _farmID, _lotNo, _dateOfHarvest) {
    try {
        let response = {}
        if(!doesIdentityExistInWallet()){
            response.error = 'An identity for the user ' + userName + ' does not exist in the wallet. Register ' + userName + ' first';
            return response;
        }

        //Create a new gateway for connecting to our peer.
        const gateway = new Gateway();

        //Connect to peer
        await gateway.connect(ccp, { wallet, identity: userName, discovery: gatewayDiscovery });

        //Get channel
        const channel = await gateway.getNetwork('SupplyChainChannel');

        // Get the contract from the network.
        const contract = channel.getContract('food-contract');

        //Run the transaction.
        await contract.submitTransaction('registerBatch', _batchID, _foodID, _farmID, _lotNo, _dateOfHarvest);

        console.log(`registerBatch(${_batchID}) - Transaction has been submitted`);
        await gateway.disconnect();

        response.msg = 'registerBatch Transaction has been submitted';
        return response;

    } catch (error) {
        console.error(`Failed to evaluate transaction in registerBatch: ${error}`);
        response.error = error.message;
        return response;
    }
}

exports.registerPackage = async function (_packageID, _batchID) {
    try {
        let response = {}
        if(!doesIdentityExistInWallet()){
            response.error = 'An identity for the user ' + userName + ' does not exist in the wallet. Register ' + userName + ' first';
            return response;
        }

        //Create a new gateway for connecting to our peer.
        const gateway = new Gateway();

        //Connect to peer
        await gateway.connect(ccp, { wallet, identity: userName, discovery: gatewayDiscovery });

        //Get channel
        const channel = await gateway.getNetwork('SupplyChainChannel');

        // Get the contract from the network.
        const contract = channel.getContract('food-contract');

        //Run the transaction.
         await contract.submitTransaction('registerPackage', _packageID, _batchID);

        console.log(`registerPackage(${_packageID}) - Transaction has been submitted`);
        await gateway.disconnect();

        response.msg = 'registerPackage Transaction has been submitted';
        return response;


    } catch (error) {
        console.error(`Failed to evaluate transaction in registerPackage: ${error}`);
        response.error = error.message;
        return response;
    }
}

exports.registerFoodFromFarmToPackageHouse = async function (_batchID, _packagingHouseID, _dateOfPackaging) {
    try {
        let response = {}
        if(!doesIdentityExistInWallet()){
            response.error = 'An identity for the user ' + userName + ' does not exist in the wallet. Register ' + userName + ' first';
            return response;
        }

        //Create a new gateway for connecting to our peer.
        const gateway = new Gateway();

        //Connect to peer
        await gateway.connect(ccp, { wallet, identity: userName, discovery: gatewayDiscovery });

        //Get channel
        const channel = await gateway.getNetwork('SupplyChainChannel');

        // Get the contract from the network.
        const contract = channel.getContract('food-contract');

        //Run the transaction.
        await contract.submitTransaction('registerFoodFromFarmToPackageHouse', _batchID, _packagingHouseID, _dateOfPackaging);

        console.log(`registerFoodFromFarmToPackageHouse(${_batchID}) - Transaction has been submitted`);
        await gateway.disconnect();
        
        response.msg = 'registerFoodFromFarmToPackageHouse Transaction has been submitted';
        return response;

    } catch (error) {
        console.error(`Failed to evaluate transaction in registerFoodFromFarmToPackageHouse: ${error}`);
        response.error = error.message;
        return response;
    }
}

exports.registerFromPackageHouseToDistributionCenter = async function (_packageID, _dateOfDistribution, _distributionCenterID) {
    try {
        let response = {}
        if(!doesIdentityExistInWallet()){
            response.error = 'An identity for the user ' + userName + ' does not exist in the wallet. Register ' + userName + ' first';
            return response;
        }

        //Create a new gateway for connecting to our peer.
        const gateway = new Gateway();

        //Connect to peer
        await gateway.connect(ccp, { wallet, identity: userName, discovery: gatewayDiscovery });

        //Get channel
        const channel = await gateway.getNetwork('SupplyChainChannel');

        // Get the contract from the network.
        const contract = channel.getContract('food-contract');

        //Run the transaction.
        await contract.submitTransaction('registerFromPackageHouseToDistributionCenter', _packageID, _dateOfDistribution, _distributionCenterID);

        console.log(`registerFromPackageHouseToDistributionCenter(${_packageID}) - Transaction has been submitted`);
        await gateway.disconnect();

        response.msg = 'registerFromPackageHouseToDistributionCenter Transaction has been submitted';
        return response;

    } catch (error) {
        console.error(`Failed to evaluate transaction in registerFromPackageHouseToDistributionCenter: ${error}`);
        response.error = error.message;
        return response;
    }
}

exports.registerFromDistributionCenterToStore = async function (_packageID, _storeID, _dateOfDelivery) {
    try {
        let response = {}
        if(!doesIdentityExistInWallet()){
            response.error = 'An identity for the user ' + userName + ' does not exist in the wallet. Register ' + userName + ' first';
            return response;
        }

        //Create a new gateway for connecting to our peer.
        const gateway = new Gateway();

        //Connect to peer
        await gateway.connect(ccp, { wallet, identity: userName, discovery: gatewayDiscovery });

        //Get channel
        const channel = await gateway.getNetwork('SupplyChainChannel');

        // Get the contract from the network.
        const contract = channel.getContract('food-contract');

        //Run the transaction.
        await contract.submitTransaction('registerFromDistributionCenterToStore', _packageID, _storeID, _dateOfDelivery);

        console.log(`registerFromDistributionCenterToStore(${_packageID}) - Transaction has been submitted`);
        await gateway.disconnect();

        response.msg = 'registerFromDistributionCenterToStore Transaction has been submitted';
        return response;

    } catch (error) {
        console.error(`Failed to evaluate transaction in registerFromDistributionCenterToStore: ${error}`);
        response.error = error.message;
        return response;
    }
}