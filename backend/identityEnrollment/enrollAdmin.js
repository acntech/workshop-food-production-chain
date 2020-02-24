'use strict';

 const FabricCAServices = require('fabric-ca-client');
 const { FileSystemWallet, X509WalletMixin } = require('fabric-network');
 const fs = require('fs');
 const path = require('path');

 const ccpPath = path.resolve(__dirname, '../connectionProfiles/connection.json');
 const ccpJSON = fs.readFileSync(ccpPath, 'utf8');
 const ccp = JSON.parse(ccpJSON);

 async function main() {
   try {

   // Create a new CA client for interacting with the CA. Add the IP to the CA below.
   const caURL = ccp.certificateAuthorities['184.173.5.139:30763'].url;
   const ca = new FabricCAServices(caURL);

   // Create a new file system based wallet for managing identities.
   const walletPath = path.join(process.cwd(), 'wallet');
   const wallet = new FileSystemWallet(walletPath);
   console.log(`Wallet path: ${walletPath}`);

   // Check to see if we've already enrolled the admin user.
   const userExists = await wallet.exists('ecostore-uiuser');
   if (userExists) {
     console.log('An identity for "uiuser" already exists in the wallet');
     return;
   }

   // Enroll the admin user, and import the new identity into the wallet.
   const enrollment = await ca.enroll({ enrollmentID: 'ecostore-uiuser', enrollmentSecret: 'ecostore-uiuserpw' });
   const identity = X509WalletMixin.createIdentity('ecostoremsp', enrollment.certificate, enrollment.key.toBytes());
   await wallet.import('ecostore-uiuser', identity);
   console.log('Successfully enrolled client "uiuser" and imported it into the wallet');

   } catch (error) {
     console.error(`Failed to enroll "uiadmin": ${error}`);
     process.exit(1);
   }
 }

 main();