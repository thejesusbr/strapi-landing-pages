module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '0fe2743e3a17bc9a4af2be5fda9fd075'),
  },
});
