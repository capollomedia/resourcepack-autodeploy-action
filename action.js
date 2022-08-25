const core = require("@actions/core");
const github = require("@actions/github")

(
    async () => {
        try {
            core.notice("Sending resourcepack to server..")
        } catch {
            core.setFailed(error.message)
        }
    }
)