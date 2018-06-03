const twilio = require('twilio');
const AccessToken = twilio.jwt.AccessToken;
const IpMessagingGrant = AccessToken.ChatGrant;

function TokenGenerator(identity, deviceId) {
  const appName = 'TwilioChat';
  //unique ID for client on their device
  const endpointId = appName + ':' + identity + ':' + deviceId;
  //grant to enable client to use IPM as a user on their device
  const ipmGrant = new IpMessagingGrant({
    serviceSid: process.env.TWILIO_IPM_SERVICE_SID,
    endpointId: endpointId
  });
  //access token to sign and return to client w/ grant
  const token = new AccessToken(
    process.env.TWILIO_ACCOUNT_SID,
    process.env.TWILIO_API_KEY,
    process.env.TWILIO_API_SECRET
  );

  token.addGrant(ipmGrant);
  token.identity = identity;
  return token;
}
module.exports = { generate: TokenGenerator };
