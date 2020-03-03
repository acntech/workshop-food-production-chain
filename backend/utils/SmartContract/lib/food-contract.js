/*
 * SPDX-License-Identifier: Apache-2.0
 */

'use strict';

const { Contract } = require('fabric-contract-api');

class FoodContract extends Contract {
    //TODO extract check if batch exist to own function
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
            packagingHouseID : '',
            dateOfPackaging : ''};
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
            distributionCenterID : '',
            dateOfDistribution : '',
            storeID : '',
            dateOfDelivery : ''};

        const buffer = Buffer.from(JSON.stringify(asset));
        await ctx.stub.putState(_packageID, buffer);
    }

    //Update asset
    async registerFoodFromFarmToPackageHouse(ctx, _batchID, _packagingHouseID, _dateOfPackaging) {
        let batch = await ctx.stub.getState(_batchID);
        if (!batch || batch.length === 0) {
            throw new Error(`${_batchID} is not found.`);
        }

        batch = JSON.parse(batch.toString());
        batch.packagingHouseID = _packagingHouseID;
        batch.dateOfPackaging = _dateOfPackaging;

        await ctx.stub.putState(_batchID, Buffer.from(JSON.stringify(batch)));
    }

    async registerFromPackageHouseToDistributionCenter(ctx, _packageID, _dateOfDistribution, _distributionCenterID) {
        let _package = await ctx.stub.getState(_packageID);
        if (!_package || _package.length === 0) {
            throw new Error(`${_packageID} is not found.`);
        }
        _package = JSON.parse(_package.toString());
        _package.distributionCenterID = _dateOfDistribution;
        _package.dateOfDistribution = _distributionCenterID;

        await ctx.stub.putState(_packageID, Buffer.from(JSON.stringify(_package)));
    }

    async registerFromDistributionCenterToStore(ctx, _packageID, _storeID, _dateOfDelivery) {
        let _package = await ctx.stub.getState(_packageID);
        if (!_package || _package.length === 0) {
            throw new Error(`${_packageID} is not found.`);
        }

        _package = JSON.parse(_package.toString());
        _package.storeID = _storeID;
        _package.dateOfDelivery = _dateOfDelivery;

        await ctx.stub.putState(_packageID, Buffer.from(JSON.stringify(_package)));
    }

    async getItem(ctx, itemID) {
        const item = await ctx.stub.getState(itemID);
        if (!item || item.length === 0) {
            throw new Error(`${item} couldn't be fetched from ledger.`);
        }

        return JSON.parse(item.toString());
    }


}

module.exports = FoodContract;
