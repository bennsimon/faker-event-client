
**Faker Event Client**  
  
To begin:  
````  
npm install --save  
````  

> To begin:
 
If you have the same payload, skip step 2:
1. Update the `.env` file with your properties
	````
	USER_NAME=<user_name>
	PASSWORD=<password>
	TEAM=<team> 
	TEAM_ID=<team-id>
	LOCATION_ID=<location-id>  
	PROVIDER_ID=<provider-id>  
	URL=<url>
	````
		
2. Create another folder (from `create-dummy-child-clients`), Update `payload.js`with your payload, change the replace parameters in `process.js`
3. Update the count in `process.js` the execute the below 
	````  
	npm start  
	````
	
