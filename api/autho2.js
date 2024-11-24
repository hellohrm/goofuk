'use strict';
const { JWT } = require('google-auth-library');
const fs = require('fs');

async function main(
    // Full path to the service account credential
    keyFile = '../brick-d29e0-firebase-adminsdk-w6ww9-e08901396b.json'//process.env.GOOGLE_APPLICATION_CREDENTIALS
) {


    const keys = JSON.parse(fs.readFileSync(keyFile, 'utf8'));

    const client = new JWT({

        email: keys.client_email,

        key: keys.private_key,

        scopes: ['https://www.googleapis.com/auth/firebase.messaging'],

    });


    client.authorize(function (err, tokens) {
        if (err) {
            return reject(err);
            return;
        }
        return resolve(tokens.access_token);
    });


}

async function f() {

    let promise = new Promise((resolve, reject) => {
        setTimeout(() => resolve("done!"), 1000)
    });

    let result = await promise; // wait till the promise resolves (*)

    var abc = result;

    //alert(result); // "done!"
}

function minutesDiff(d1, d2,factor) {
    var v = (d1 - d2) / 1000;
    v /= factor;//60=minute, 1 = seconde
    return Math.abs(Math.round(v));
}

const _tok = {};

const tokens = function (value) {
    //var x = 1;
    //var y = x + 1 + value;

    //f();


    //const args = process.argv.slice(2);
    //await fuck= getRequestData(...args).catch(console.error);

    const tok_remain = 180;//3 phut nua het han....
    //
    //
    return new Promise((resolve, reject) => {
        //
        //
        if (_tok.expiry_date && minutesDiff(new Date(new Date(_tok.expiry_date).toGMTString()).getTime(),

            new Date(new Date().toGMTString()).getTime()

            , 1) > tok_remain) {

            return resolve(_tok);

        };
        //
        //process.env.GOOGLE_APPLICATION_CREDENTIALS;//
        const keyFile = '../brick-d29e0-firebase-adminsdk-w6ww9-e08901396b.json';
        //
        const keys = JSON.parse(

                process.env.GOOGLE_APPLICATION_CREDENTIALS && atob(process.env.GOOGLE_APPLICATION_CREDENTIALS) || fs.readFileSync(keyFile, 'utf8')

            );

        const client = new JWT({

            email: keys.client_email,

            key: keys.private_key,

            scopes: ['https://www.googleapis.com/auth/firebase.messaging'],

        });


        client.authorize(function (err, tokens) {
            if (err) {
                 reject(err);
                return;
            };
            //cache lai
            Object.assign(_tok, tokens);
            //
            resolve(tokens);
        });


    });



};




// Export object which contains the above method
module.exports = {

    tokens: tokens

};
