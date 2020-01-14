
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


exports.getObject = async function (objectID) {
    try {
        var response = {};

        // Create a new file system based wallet for managing identities.
        const walletPath = path.join(process.cwd(), '/wallet');
        const wallet = new FileSystemWallet(walletPath);
        console.log(`Wallet path: ${walletPath}`);

        // Check to see if we've already enrolled the user.
        const userExists = await wallet.exists(userName);

        if (!userExists) {
            console.log('An identity for the user ' + userName + ' does not exist in the wallet');
            console.log('Run the registerUser.js application before retrying');
            response.error = 'An identity for the user ' + userName + ' does not exist in the wallet. Register ' + userName + ' first';
            return response;
        }

     // Create a new gateway for connecting to our peer.
        const gateway = new Gateway();

        //Connect to peer
        await gateway.connect(ccp, { wallet, identity: userName, discovery: gatewayDiscovery });

        //Get channel
        const channel = await gateway.getNetwork('channelName');

        // Get the contract from the network.
        const contract = channel.getContract('contractName');

        let transactionResult = await contract.submitTransaction('getObject', objectID);

        console.log('getObject - Transaction has been submitted');

        await gateway.disconnect();

        return [transactionResult];

    } catch (error) {
        console.error(`Failed to evaluate transaction: ${error}`);
        response.error = error.message;
        return response;
    }
}

exports.getAllObjects = async function () {
    try {
        var response = {};

        // Create a new file system based wallet for managing identities.
        const walletPath = path.join(process.cwd(), '/wallet');
        const wallet = new FileSystemWallet(walletPath);
        console.log(`Wallet path: ${walletPath}`);

        // Check to see if we've already enrolled the user.
        const userExists = await wallet.exists(userName);

        if (!userExists) {
            console.log('An identity for the user ' + userName + ' does not exist in the wallet');
            console.log('Run the registerUser.js application before retrying');
            response.error = 'An identity for the user ' + userName + ' does not exist in the wallet. Register ' + userName + ' first';
            return response;
        }

        // Create a new gateway for connecting to our peer.
        const gateway = new Gateway();

        //Connect to peer
        await gateway.connect(ccp, { wallet, identity: userName, discovery: gatewayDiscovery });

        // Get the network (channel) our contract is deployed to.
        const channel = await gateway.getNetwork('channelName');

        // Get the contract from the network.
        const contract = channel.getContract('contractName');

        // Evaluate the specified transaction.
        const transactionResult = await contract.evaluateTransaction('getAllObjects');

        console.log('getAllObjects - Transaction has been submitted');

        // Disconnect from the gateway.
        gateway.disconnect();

        return [transactionResult];

    } catch (error) {
        console.error(`Failed to evaluate transaction: ${error}`);
        response.error = error.message;
        return response;
    }
}
