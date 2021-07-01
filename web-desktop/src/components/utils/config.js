export let header={
"securekey":12345,
"Content-Type":"application/json"
}

const  URL={
    "domain": "https://apiserver.trendin.com",
    "shopName": "",
    "shopID": "",
    "brand":"vh",
    "brandName": "VH",
    "brandID": "",
    "methods": {
        "registerdevice": {
            "path": "device/register",
            "method": "POST",
            "cache": false,
            "Content-Type": "application/json",
            "ttl": 3600
        },
        "authenticatecustomer": {
            "path": "customer/authenticate",
            "method": "POST",
            "cache": false,
            "ContentType": "JSON"
        }
    }
}
export default URL