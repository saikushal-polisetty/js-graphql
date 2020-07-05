const fetch = require('node-fetch');

const url = 'https://qa.apigateway.honeywellhome.com/devices/privateapi/devices?$top=750';
(async () => {
    const response = await fetch(url);
	const json = await response.json();
    return json;	
})()
.then(function (res){    
    console.log(JSON.stringify(res));
})
.catch(function (err){
    console.log(err);
});
