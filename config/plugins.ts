export default ({ env }) => {
  // const redisEnabled = env.bool("REDIS_ENABLED", false);

  return {
    "rest-cache": {
      config: {
        provider: {
          name: "memory",
          options: {
            max: 32767,
            maxAge: 3600,
          },
        },
        strategy: {
          contentTypes: ["api::category.category"],
        },
      },
    },

    // redis: {
    //   enabled: redisEnabled,
    //   config: {
    //     connections: {
    //       default: {
    //         connection: {
    //           host: env("REDIS_HOST", "127.0.0.1"),
    //           port: env.int("REDIS_PORT", 6379),
    //           db: env.int("REDIS_DB", 0),
    //           username: env("REDIS_USERNAME"),
    //           password: env("REDIS_PASSWORD"),
    //         },
    //         settings: {
    //           debug: true,
    //         },
    //       },
    //     },
    //   },
    // },
    // "rest-cache": {
    //   enabled: redisEnabled,
    //   config: {
    //     provider: {
    //       name: "redis",
    //       options: {
    //         max: 32767,
    //         connection: "default",
    //       },
    //     },
    //     strategy: {
    //       keysPrefix: "strapi_",
    //       enableEtagSupport: true,
    //       logs: true,
    //       debug: true,
    //       hitpass: false,
    //       clearRelatedCache: true,
    //       maxAge: 3600000,
    //       contentTypes: ["api::category.category"],
    //     },
    //   },
    // },
  };
};
