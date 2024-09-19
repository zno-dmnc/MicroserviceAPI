# MicroserviceAPI
**Exercise 3:** Designing and Building a Microservices API  
Requirement for IT 3103 - SYSTEMS INTEGRATION AND ARCHITECTURE

## Microservices
**1. Product Service**  
 * **POST /add-product:** Add a new product.    
 * **GET /products/:id:** Get product details by ID.    
 * **PUT /update-product/:id:** Update a product.    
 * **DELETE /delete-product/:id:** Delete a product.
  
**2. Customer Service**  
 * **POST /add-customer:** Add a new customer.  
 * **GET /customers/:id:** Get customer details by ID.  
 * **PUT /update-customer/:id:** Update customer information.  
 * **DELETE /delete-customer/:id:** Delete a customer.

**3. Order Service**
 * **POST /add-order:** Create a new order.
 * **GET /orders/:id:** Get order details.
 * **PUT /update-order/:id:** Update an order.
 * **DELETE /delete-order/:id:** Delete an order.

## Getting Started
**1.** Clone the Repository  
```
git clone https://github.com/zno-dmnc/MicroserviceAPI.git
```
```
cd MicroserviceAPI
```

**2.** Install Dependencies  
```
npm install express
```
```
npm install axios
```
**3.** Running the APIs  
```
node src\product.js
```
```
node src\customer.js
```
```
node src\orders.js
```

**4.** Testing with Postman  
 * Open Postman.
 * Enter http://localhost:3000/endpoint (replace /endpoint with your API endpoint and make sure the port number aligns with the microservice).  
   &emsp;**PORT NUMBERS:**  
   &emsp; - Product Service: 3001  
   &emsp; - Customer Service: 3002  
   &emsp; - Orders Service: 3003
 * Copy the __*product.json*__ file from __*JSON FILES*__ folder and head to the Postman body section.  Click __*raw*__ and select __*JSON*__ as the file type, then paste the copied content inside.
 * Send the Request
