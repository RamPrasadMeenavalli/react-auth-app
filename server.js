const http = requrie('http');
const path = require('path');
const express = require('express');
const app = express();
app.use(express.static(path.join(__dirname, 'build')))

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'))
})

app.get('/api/user', (req, res) => {
    
    const options = {
        host: req.headers["oidc-userinfo-url"],
        method: 'GET',
        headers: req.headers
    };

    const oidcReq = http.request(options, (res) => {
        console.dir(res);
        res.on('data', (chunk) => {
            console.log(`BODY: ${chunk}`);
            res.send(chunk);
        });
        res.on('end', () => {
            console.log('No more data in response.');
        });
    });

    oidcReq.end();
   
})

// res.send({
//     user: req.headers.user,
//     logonUser:req.headers["logon-user"],
//     remoteUser:req.headers["remote-user"],
//     oidcUser:req.headers["oidc-user"],
//     oidcUserEmail:req.headers["oidc-user-email"],
// }))

app.get('/api/userInfo', (req, res) => res.send(req.headers))

app.listen(8080)