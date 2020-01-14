/*
 * SPDX-License-Identifier: Apache-2.0
 */

'use strict';

const { Contract } = require('fabric-contract-api');

class FoodContract extends Contract {

    async itemExists(ctx, itemID) {
        const buffer = await ctx.stub.getState(itemID);
        return (!!buffer && buffer.length > 0);
    }

    //Create assets
    async registerBatch(ctx, _batchID, _foodID, _farmID, _lotNo, _dateOfHarvest) {
        const exists = await this.itemExists(ctx, _batchID);
        if (exists) {
            throw new Error(`The batch ${_batchID} already exists`);
        }
        const asset = {
            batchID : _batchID,
            foodID : _foodID,
            farmID : _farmID,
            lotNo : _lotNo,
            dateOfHarvest : _dateOfHarvest,
            packagingHouseID : "",
            dateOfPackaging : ""
         };
        const buffer = Buffer.from(JSON.stringify(asset));
        await ctx.stub.putState(_batchID, buffer);
    }

    async registerPackage(ctx, _packageID, _batchID) {
        const exists = await this.itemExists(ctx, _packageID);
        if (exists) {
            throw new Error(`The package ${_packageID} already exists`);
        }

        const asset = {
            packageID : _packageID,
            batchID : _batchID,
            distributionCenterID : "",
            dateOfDistribution : "",
            storeID : "",
            dateOfDelivery : ""
         };

        const buffer = Buffer.from(JSON.stringify(asset));
        await ctx.stub.putState(_packageID, buffer);
    }

    //Update asset
    async registerFoodFromFarmToPackageHouse(ctx, _batchID, _packagingHouseID, _dateOfPackaging) {
        let batch = await this.itemExists(ctx, _batchID);
        if (!batch) {
            throw new Error(`The batch ${_batchID} does not exist`);
        }

        batch = JSON.parse(batch.toString());
        batch.packagingHouseID = _packagingHouseID;
        batch.dateOfPackaging = _dateOfPackaging

        await ctx.stub.putState(_batchID, Buffer.from(JSON.stringify(batch)));
    }

    async registerFromPackageHouseToDistributionCenter(ctx, _packageID, _dateOfDistribution, _distributionCenterID) {
        let _package = await this.itemExists(ctx, _packageID);
        if (!_package) {
            throw new Error(`The package ${_packageID} does not exist`);
        }
        _package = JSON.parse(_package.toString());
        _package.distributionCenterID = _dateOfDistribution;
        _package.dateOfDistribution = _distributionCenterID

        await ctx.stub.putState(_packageID, Buffer.from(JSON.stringify(_package)));
    }

    async registerFromDistributionCenterToStore(ctx, _packageID, _storeID, _dateOfDelivery) {
        let _package = await this.itemExists(ctx, _packageID);
        if (!_package) {
            throw new Error(`The package ${_packageID} does not exist`);
        }

        _package = JSON.parse(_package.toString());
        _package.storeID = _storeID;
        _package.dateOfDelivery = _dateOfDelivery

        await ctx.stub.putState(_packageID, Buffer.from(JSON.stringify(_package)));
    }

    //Fetch Object from database
    async getItem(ctx, itemID) {
        const item = await this.itemExists(ctx, itemID);
        if (!item) {
            throw new Error(`The item ${itemID} does not exist`);
        }
        const buffer = await ctx.stub.getState(itemID);
        const asset = JSON.parse(buffer.toString());
        return asset;
    }

    //Delete object from database
    async deleteObject(ctx, itemID) {
        const exists = await this.itemExists(ctx, itemID);
        if (!exists) {
            throw new Error(`The item ${itemID} does not exist`);
        }
        await ctx.stub.deleteState(itemID);
    }
}

module.exports = FoodContract;
