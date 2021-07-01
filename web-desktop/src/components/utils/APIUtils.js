
import React, { Component } from 'react'
import axios from 'axios'
import apiConfig from './config';
import headers from './config'
import md5 from 'md5';

const domain = apiConfig.domain;
const shopName = apiConfig.shopName;
const shopId = apiConfig.shopID;
const brandname = apiConfig.brandName;
const brandId = apiConfig.brandID;
const brand = apiConfig.brand;

export default async function callAPI(apikey, requestJSON) {
    console.log("Requested API :: ", apikey)
    console.log("requestJSON :: ", requestJSON)

    let apiDetails = apiConfig.methods[apikey];
    console.log("apiDetails :: ", apiDetails)
    let apiURL = domain + '/' + apiDetails.path;
    requestJSON = Object.assign(requestJSON, apiDetails)
    requestJSON["shopName"] = shopName;
    requestJSON["shopId"] = shopId;
    requestJSON["brandName"] = brandname;
    requestJSON["brandID"] = brandId;
    requestJSON["brand"] = brand;
    delete requestJSON['path'];
    console.log(JSON.stringify(requestJSON))
    let encryptedRequestPayload = md5(JSON.stringify(requestJSON));
    requestJSON["hash"] = encryptedRequestPayload;

    console.log("Modified requestJSON :: ", requestJSON);
    let req =
    {
        "brandID": "",
        "brandName": "VH",
        "cache": false,
        "deviceId": "1234kdfklnjihuihb",
        "shopId": "",
        "shopName": "",
        "brand": "vh",
        "ttl": 3600
    }

    console.log("make", md5(req));

    try {
        const response = axios(apiURL, { headers: headers, body: requestJSON })
        console.log("response", response)
    } catch (error) {
        console.log(error)
    }

}