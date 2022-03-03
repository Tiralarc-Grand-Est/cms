module.exports = ({ env }) => {
  let origin = env('CORS_ORIGIN', '*');
  if (origin !== '*') {
    origin = origin.split(',')
  }

  return [
    'strapi::errors',
    'strapi::security',
    {
      name: 'strapi::cors',
      config: { origin }
    },
    'strapi::logger',
    'strapi::query',
    'strapi::body',
    'strapi::session',
    'strapi::favicon',
    'strapi::public',
  ]
};
