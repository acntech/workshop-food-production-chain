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

    async createBatch(ctx, foodId, value) {
        const exists = await this.itemExists(ctx, itemID);
        if (exists) {
            throw new Error(`The food ${foodId} already exists`);
        }
        const asset = { value };
        const buffer = Buffer.from(JSON.stringify(asset));
        await ctx.stub.putState(foodId, buffer);
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
