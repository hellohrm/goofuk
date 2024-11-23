// Copyright 2017 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

'use strict';

/**
 * The JWT authorization is ideal for performing server-to-server
 * communication without asking for user consent. Usually, you aren't
 * going to directly instantiate a JWT instance.  Typically, this is acquired
 * by using the `auth.getClient()` method.
 *
 * Suggested reading for Admin SDK users using service accounts:
 * https://developers.google.com/admin-sdk/directory/v1/guides/delegation
 **/

const {JWT} = require('google-auth-library');
const fs = require('fs');

//async function getAccessToken() {
//    return new Promise(function (resolve, reject) {

//        const key = {
//            "project_id": "brick-d29e0",
//            "private_key": "528e31d459197a1eeeff7476943db691adf1a7d2",
//            "client_email": "firebase-adminsdk-sd2v2@brick-d29e0.iam.gserviceaccount.com",
//        }
//            , SCOPES = ['https://www.googleapis.com/auth/firebase.messaging'];




//        const jwtClient = new google.auth.JWT(
//            key.client_email,
//            null,
//            key.private_key,
//            SCOPES,
//            null
//        );

//        jwtClient.authorize(function (err, tokens) {

//            if (err) {
//                reject(err);
//                return;
//            }

//            resolve(tokens.access_token);

//        });
//  });
//}

//getAccessToken();

async function main(
  // Full path to the service account credential
    keyFile = './brick-d29e0-firebase-adminsdk-w6ww9-e08901396b.json'//process.env.GOOGLE_APPLICATION_CREDENTIALS
) {


    const keys = JSON.parse(fs.readFileSync(keyFile, 'utf8'));



    const client = new JWT({

        email: keys.client_email,

        key: keys.private_key,

        scopes: ['https://www.googleapis.com/auth/firebase.messaging'],

    });

    // Generate the url that will be used for the consent dialog.









    client.authorize(function (err, tokens) {
        if (err) {
            reject(err);
           return;
        }
        resolve(tokens.access_token);
    });




























  //  const url = `https://fcm.googleapis.com/v1/projects/${keys.project_id}`;

  //const res = await client.request({url});
  //console.log('DNS Info:');
  //console.log(res.data);

  //// After acquiring an access_token, you may want to check on the audience, expiration,
  //// or original scopes requested.  You can do that with the `getTokenInfo` method.
  //const tokenInfo = await client.getTokenInfo(client.credentials.access_token);
  //  console.log(tokenInfo);

}



const args = process.argv.slice(2);
main(...args).catch(console.error);
