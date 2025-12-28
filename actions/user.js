const sdk = require('node-appwrite');

const client = new sdk.Client()
    .setEndpoint('https://fra.cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('69439b13000bd0c69d46'); // Your project ID

const account = new sdk.Account(client);

const result = await account.create({
    userId: '<USER_ID>',
    email: 'email@example.com',
    password: '',
    name: '<NAME>' // optional
});
