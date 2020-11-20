import { Request, Response } from 'express';
import * as fs from 'fs';
const multer = require('multer');
var upload = multer({dest:'public/src/assets/excel'}); //local
// var upload = multer({ dest: 'public/assets/excel/' }); //server
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './public/src/assets/excel'); //local
        // cb(null, './public/assets/excel/'); //server
    },
    filename: function (req, file, cb) {
        cb(null, 'CM3D_Report_Inventory.xlsx');
    }
});
var upload = multer({ storage: storage })

class StorageController {

    public uploadControl(req: Request, resp: Response) {
        upload.single('file')(req, resp, (err) => {
            if (err) {
                resp.status(400).send("Something went wrong!");
            }
            // resp.send({status: 'success'});
            resp.writeHead(200, { 'Content-Type': 'text/html' });
            // resp.status(200).send('status: success')
            // resp.json({requestBody: req.body})
            // resp.json({status: 'success'});
        });
    }

    public getFile(req: Request, res: Response) {
        res.status(200).send('status: success')

    }

}

const controller = new StorageController();
export default controller;