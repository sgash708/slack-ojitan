import { App } from '@slack/bolt';

const app: App = new App({
  token: process.env.SLACK_BOT_TOKEN,
  signingSecret: process.env.SLACK_SIGNING_SECRET
});

app.message('hello', async ({ message, say }) => {
  await say(`hello <@${message.type}>!`);
});

(async () => {
  await app.start(Number(process.env.PORT));
})();