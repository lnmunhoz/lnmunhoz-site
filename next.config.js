module.exports = {
  exportTrailingSlash: true,
  exportPathMap: function() {
    return {
      "/": { page: "/" },
      "/uses": { page: "/uses" },
      "/experience": { page: "/experience" }
    };
  }
};
