const { config } = require('./config/config');
const { Resend } = require('resend');

const resend = new Resend(config.resendApiKey);

(async function () {
  const { data, error } = await resend.emails.send({
    from: 'Acme <onboarding@resend.dev>',
    to: ['alexgbcr@proton.me'],
    subject: 'Hello World',
    html: '<strong>It works!</strong>',
  });

  if (error) {
    return console.error({ error });
  }

  console.log({ data });
})();
