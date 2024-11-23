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



const tokens = function (value) {
    var x = 1;
    var y = x + 1 + value;

    f();

    //const args = process.argv.slice(2);
    //await fuck= getRequestData(...args).catch(console.error);



    return new Promise((resolve, reject) => {

        const keyFile = "eyJ0eXBlIjoic2VydmljZV9hY2NvdW50IiwicHJvamVjdF9pZCI6ImJyaWNrLWQyOWUwIiwicHJpdmF0ZV9rZXlfaWQiOiJlMDg5MDEzOTZiZDdmMWJiOGI2N2U4NGQyMTQ2ZGI3MTIyYzFmYjQzIiwicHJpdmF0ZV9rZXkiOiItLS0tLUJFR0lOIFBSSVZBVEUgS0VZLS0tLS1cbk1JSUV2UUlCQURBTkJna3Foa2lHOXcwQkFRRUZBQVNDQktjd2dnU2pBZ0VBQW9JQkFRQ1AxQ2h4OVI2K1VlUXhcbnVqc3E2d3JQanlFL05vY2NTUmQ2SDJWVWVtRGZoWjhydjU0QlBIeDBlRlVsQmJ4WDMyWUlRSkFZRU5WcUlLbDdcbnk0QzY1bktqbVZIMkFyNFVZK0xRQjhteFdtbUZ3dzUwLzZyZENVMWtaMjFvWFBhajd5cXRjaGJ4dFI2VE5xVldcbnBzcGNidXBoOXEyOGV3cmVuS3lDV3lCQWZjM0pVSEJXVTZOOVpQQ1ZwQ2YxV1REeHRkN1VZNzl3QjBGWnFiUjdcbnFCZXhtVjlpK01saDBoOS9xMkpmVXEwODVhZ09HSm9QYUhZZWZTUGQ3L2JMdmVGWk04cDlzQkhaVmlON0RaMFpcbnNidmFaRkxjRW45L2dWdU5OdmxidFlDYmdSVHlZTDk5ZzZLZE93NGNqTHgrVVZiR3RwUitBV0ZDT1ZDbndpQ0dcbndlM1hCVXZaQWdNQkFBRUNnZ0VBUDNkWDdZbERhcW9LTHVORnJwZU82cTMyOXNUaDg5cFE4TU9mM0Jvd1d4SEVcbmZmS05EM0NZWG5DbTZiSlJQTmxJVmNYZmo2OEY3VkhDViswaHZkZG9xTVpFQTNHTVhNVUMxZGRKNmVmQ2ZwTG1cbjh6dktNc1VqRUhZUE1pa3JjSVZkNkxGYWJJZ0dtT0ZaTGhabFgwcFdSS29zV2VwVmpvdkdGN09NVk1qdW9MRWpcbm1GemYrV3VyZm9KMmFONW83MmNxVDJtWW5RcU0yTWkwdk9vZ2g0WjQ2S203VzVjTS96SzcyYWlrY1BESlAxK21cbkdBWDJNcEhWRDQ3T3ZGZU1pcDBFSi9oZDlFcFMzRHNyYk9SYzYyTE96cXZUWlRyelJBeFR3VVhSalg0T3ZhNzdcbll2aE8rVUdZaXlLVHpXY0lybksvSEtQZ3NwM2tLZjhYRlZDV0xEbElyUUtCZ1FESFpYQjJkVzFVZGUwN0JNWDNcbkNjdUw1Zk4waFlabVB2R2JVd2pXMXV2bEc1bXBFNXdKUmU2SkVZTnpJU1RLYzhiemxVS21COVdPaUhNb0Jmb2xcbllTbGxISG5NTUVJUUtVbW90eWpvUHVoaWx1UkVWZTdtMTl1Sjlhb3ZEU0ZpSnFVV3dMUE9hYk1FSVRXY1kwbkhcbnhZRDFtTllBUDZieElwdVVxME82Q1NTaDV3S0JnUUM0cUlHNkJ6TkI2dEJDOXEwS2tMN242U01PVllJMkZlR0Jcbk9KRDRleFRlYWpudi9KdG51Z0JQMTM1MUplNTRtTFZ3TXBwVE5FaDFyTE9nb2dpOU1xeGk4Z3BBRDFzR2dWUWlcbm9Qc0Y2STRGcVhzRDlYa2lScFU3ejVYU3ljMkc2SXA1bmZ0ZnVmZG5JTkhvVTgwRWZRT2I2SlluRExHUHozc3VcbnZJRURXU3hzUHdLQmdRQ0tDUDVPODBISmU0M01FcVRkUE9tdEluWmtUdDlZdnZCUlA2MVoxUlVlMlBtS0k2b2NcbmZVNEJrNTgxUDFlUjA0NkNKKzBvdFRtdzMyTWc3T3Bib0NTZys1S1J1VUt5bjNKL21yUjErcjZ6S1pSQ2ZsN1JcbmJkTnNjU1hzUnFHNnFkZ1ZwVGVVaUhYR1FSczA5VU1wU2QvWnBZRllVTGhJTEZZYUdHbmRTdUVTTndLQmdIU2ZcbndDYnNpenZ6Z0lyNlhubVF4M0dTdGRoRXV4TkxxSHZEYlJQeU1GRDBpQmtBMG1tbGVMTDBaK0szRFREUFNiQk5cbjFWZjlhbElmdStjVXp5NG5CZWNMOU50V2wyZTVZSmpxVVAvL1MwdGFLZDVyTjVFbFFQVmdlc0NCUWJRVncvZGhcbmhyU0RzRFJLN3llclhZMmJJeDlodXd0NG9lQXc2eHl1WTFEcERmeGpBb0dBYWZMRkhRc0lpb3hyQ2xDY1krQ3JcbmRLakJPYVBwSmxibzM5L3J5TjBOc09DVWVDSVcrRjVONWt0dWtuMXV1UW83dnNxbFBPeW9sTmIzN3I2ancrb3lcbkxHN2hVMTFiV20wUDZtZ29jOWliZjA3SUpYREphNWNxNm1GRkUzZ2FJaWVJanZOWGRXREhjdngxOEh6U1RSSS9cbkNkUXArTnZudnA2TmY3UitJWW5uS0JBPVxuLS0tLS1FTkQgUFJJVkFURSBLRVktLS0tLVxuIiwiY2xpZW50X2VtYWlsIjoiZmlyZWJhc2UtYWRtaW5zZGstdzZ3dzlAYnJpY2stZDI5ZTAuaWFtLmdzZXJ2aWNlYWNjb3VudC5jb20iLCJjbGllbnRfaWQiOiIxMDUxNDgzNTkxNzE4OTczNTc3ODAiLCJhdXRoX3VyaSI6Imh0dHBzOi8vYWNjb3VudHMuZ29vZ2xlLmNvbS9vL29hdXRoMi9hdXRoIiwidG9rZW5fdXJpIjoiaHR0cHM6Ly9vYXV0aDIuZ29vZ2xlYXBpcy5jb20vdG9rZW4iLCJhdXRoX3Byb3ZpZGVyX3g1MDlfY2VydF91cmwiOiJodHRwczovL3d3dy5nb29nbGVhcGlzLmNvbS9vYXV0aDIvdjEvY2VydHMiLCJjbGllbnRfeDUwOV9jZXJ0X3VybCI6Imh0dHBzOi8vd3d3Lmdvb2dsZWFwaXMuY29tL3JvYm90L3YxL21ldGFkYXRhL3g1MDkvZmlyZWJhc2UtYWRtaW5zZGstdzZ3dzklNDBicmljay1kMjllMC5pYW0uZ3NlcnZpY2VhY2NvdW50LmNvbSIsInVuaXZlcnNlX2RvbWFpbiI6Imdvb2dsZWFwaXMuY29tIn0="//process.env.GOOGLE_APPLICATION_CREDENTIALS
        const keys = JSON.parse(atob(keyFile) );

        const client = new JWT({

            email: keys.client_email,

            key: keys.private_key,

            scopes: ['https://www.googleapis.com/auth/firebase.messaging'],

        });


        client.authorize(function (err, tokens) {
            if (err) {
                 reject(err);
                return;
            }
             resolve(tokens.access_token);
        });


    });



};




// Export object which contains the above method
module.exports = {

    tokens: tokens

};
