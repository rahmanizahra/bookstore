const dataModel = require('../models/dataModels');
//const addClientController = require('./addClientController');
​
exports.getClientPage = (req,res) => {
    const data = dataModel.clientData();
    res.json(data);
};
​
exports.addBooks = (req,res) => {
    const { books } = req.body;
    dataModel.addBooks(books);
    // Respond with a success message
    res.json({ message: 'Books added successfully on the server' });
}
​
exports.updateBooks = (req,res) => {
    const { books } = req.body;
    dataModel.updateBooks(books);
    // Respond with a success message
    res.json({ message: 'Books updated successfully on the server' });
}