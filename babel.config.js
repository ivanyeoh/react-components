const presets = [
  "@babel/preset-react",
  [
    "@babel/env",
    {
      targets: {
        chrome: "77",
      },
      modules: 'auto',
      useBuiltIns: "usage",
    },
  ],
];

module.exports = { presets };
