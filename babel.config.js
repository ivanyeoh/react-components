const presets = [
  "@babel/preset-react",
  [
    "@babel/env",
    {
      targets: {
        chrome: "77",
      },
      modules: false,
      useBuiltIns: "usage",
    },
  ],
];

module.exports = { presets };
