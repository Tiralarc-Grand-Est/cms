module.exports = ({ env }) => ({
  email: {
    config: {
      provider: 'nodemailer',
      providerOptions: {
        host: env('SMTP_HOST'),
        port: env('SMTP_PORT', 587),
        auth: {
          user: env('SMTP_USERNAME'),
          pass: env('SMTP_PASSWORD'),
        },
      },
      settings: {
        defaultFrom: 'CRTA Grand Est <bonjour@tiralarc-grand-est.fr>',
        defaultReplyTo: 'bonjour@tiralarc-grand-est.fr',
      },
    },
  },
});
