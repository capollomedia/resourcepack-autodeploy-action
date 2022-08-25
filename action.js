const core = require('@actions/core');
const github = require('@actions/github');
const axios = require('axios');

(
    async () => {
        try {
            var serverIP = core.getInput("serverIP");
            var serverKey = core.getInput("serverKey");
            var url = core.getInput("packURL");
            
            core.notice('Sending resourcepack to server with ip' +serverIP +" and key " +serverKey +"...");
            axios
            .get(serverIP +'/updatepack/' +url)
            .then(res => {
                core.notice('ServerResourcpackDeployManager responded with' +res.status);
                core.notice(res);
            })           

        } catch {
            core.setFailed(error.message);
        }
    }
)