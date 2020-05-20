const path = require('path');
const express = require('express');
const app = express();
app.use(express.static(path.join(__dirname, 'build')))

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'))
})

app.get('/api/user', (req, res) => res.send({
    user: req.headers.user,
    logonUser:req.headers["logon-user"],
    remoteUser:req.headers["remote-user"],
    oidcUser:req.headers["oidc-user"],
    oidcUserEmail:req.headers["oidc-user-email"],
}))

app.get('/api/userInfo', (req, res) => res.send(req.headers))

app.listen(8080)