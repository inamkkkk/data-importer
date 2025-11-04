const DataModel = require('../models/DataModel');
const fileParser = require('../utils/fileParser');
const fs = require('fs');

exports.importData = async (req, res) => {
    try {
        if (!req.file) {
            return res.status(400).json({ message: 'No file uploaded' });
        }

        const filePath = req.file.path;
        const fileType = req.file.originalname.split('.').pop().toLowerCase();
        let data;

        if (fileType === 'csv') {
            data = await fileParser.parseCsv(filePath);
        } else if (fileType === 'json') {
            data = await fileParser.parseJson(filePath);
        } else {
            fs.unlinkSync(filePath);
            return res.status(400).json({ message: 'Invalid file type' });
        }

        await DataModel.insertMany(data);

        fs.unlinkSync(filePath);
        res.status(201).json({ message: 'Data imported successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error importing data', error: error.message });
    }
};