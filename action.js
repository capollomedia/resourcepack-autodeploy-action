const core = require('@actions/core');
const github = require('@actions/github');
const axios = require('axios');

(
    async () => {
        try {
            var serverIP = core.getInput("serverIP");
            var serverKey = core.getInput("serverKey");
            var url = core.getInput("packURL");
            core.info('Sending resourcepack to server with ip ' + serverIP + " and key " + serverKey + "...");
            axios
                .get("http://" +serverIP +'/' +serverKey +"?url=" +url, {
                    timeout: 10000
                })
                .then(res => {
                    core.info('ServerResourcpackDeployManager responded with' + res.status);
                    core.info(res);
                })
                .catch(error => core.setFailed(error.message));
        } catch (error) {
            core.setFailed(error.message);
        }
    }

)();
