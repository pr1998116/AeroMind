import { Client, Account,Databases,ID } from "appwrite";

export const client = new Client()
  .setEndpoint("https://fra.cloud.appwrite.io/v1") // Appwrite endpoint
  .setProject("69439b13000bd0c69d46"); // 🔴 Replace with your project ID

export const account = new Account(client);
export const databases =new Databases(client);
export {ID}
