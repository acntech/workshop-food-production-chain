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
    async registerBatch(ctx, _batchID, _boodID, _farmID, _lotNo, _dateOfHarvest) {
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


    async readFood(ctx, foodId) {
        const exists = await this.itemExists(ctx, foodId);
        if (!exists) {
            throw new Error(`The food ${foodId} does not exist`);
        }
        const buffer = await ctx.stub.getState(foodId);
        const asset = JSON.parse(buffer.toString());
        return asset;
    }

    async updateFood(ctx, foodId, newValue) {
        const exists = await this.itemExists(ctx, foodId);
        if (!exists) {
            throw new Error(`The food ${foodId} does not exist`);
        }
        const asset = { value: newValue };
        const buffer = Buffer.from(JSON.stringify(asset));
        await ctx.stub.putState(foodId, buffer);
    }

    async deleteFood(ctx, foodId) {
        const exists = await this.itemExists(ctx, foodId);
        if (!exists) {
            throw new Error(`The food ${foodId} does not exist`);
        }
        await ctx.stub.deleteState(foodId);
    }

}

module.exports = FoodContract;
