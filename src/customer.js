const express = require('express');
const app = express();

app.use(express.json());
const customers = [];

app.get('/customers', (req, res) => {
    if(customers.length === 0) {
        return res.status(404).json({message: 'No customers found.'});
    }
    return res.status(200).json({data:customers});
});

app.get('/customers/:id', (req, res) => {
    const {id} = req.params;
    const customer = customers.find((cust) => cust.id === Number(id));
    if(!customer){
        return res.status(404).json({message: 'Customer not found.'});
    }
    return res.status(200).json({data: customer});
});

app.post('/add-customer', (req, res) => {
    const {name, email} = req.body;
    if(!name || !email){
        return res.status(400).json({message: 'Please provide name and email.'});
    }
    const customer = {
        id: customers.length + 1,
        name,
        email,
    };
    customers.push(customer);
    return res.status(201).json({message: 'Customer added sucessfully.', data: customer});
});

app.put('/update-customer/:id', (req, res) => {
    const {id} = req.params;
    const {name, email} = req.body;
    const customer = customers.find((cust) => cust.id === Number(id));
    if(!customer){
        return res.status(404).json({message: 'Customer not found.'});
    }
    if(name){
        customer.name = name;
    }
    if(email){
        customer.email = email;
    }
    return res.status(200).json({message: 'Customer updated successfully.', data: customer})
})

app.delete('/delete-customer/:id', (req, res) => {
    const {id} = req.params;
    const customer = customers.find((cust) => cust.id === Number(id));
    if(!customer){
        return res.status(404).json({message: 'Customer not found'});
    }
    customers.splice(customers.indexOf(customer), 1);
    return res.status(200).json({message: 'Customer deleted successfully.'});
});

app.listen(3002, () => {
    console.log('Server is running on port 3002.');
});

