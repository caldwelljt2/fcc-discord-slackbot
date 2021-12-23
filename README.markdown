# FCC: Simple bot for forwarding traffic between discord and slack

Using the API documentation, various videos, etc I have managed to get the core functionality working on my private server.

The tokens are properly hidden in environment variables, but you will need to include them at some point, they are:


.env file contents
DISCORDJS_BOT_TOKEN=XXXXXXXXXXXXXXXXX.XXXXXX.XXXXXXXXXXXXXXXXXXXXXXXXXXX
SLACK_SIGNING_SECRET=XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
SLACK_VERIFICATION_TOKEN=XXXXXXXXXXXXXXXXXXXXXXXX
SLACK_OAUTH_TOKEN=XXXX-XXXXXXXXXXXXX-XXXXXXXXXXXXX-XXXXXXXXXXXXXXXXXXXXXXXX
PORT_NUMBER=####


URLs for setting up each bot:


There are currently some hard coded channel names that will need replaced to use this in production. NOTE: unless you get the permissions right up front, you may have to add and remove your bot a number of times before it will communicate properly with the client.

Error capturing is only partly working because I haven't made it that far yet.