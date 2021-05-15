module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset'
  ],
  plugins: [
    [
      "module-resolver",
      {
        "alias": {
          "@components": `${__dirname}/src/components`,
          "@assets": `${__dirname}/src/assets`,
          "@atoms" : `${__dirname}/src/components/atoms`,
          "@organisms" : `${__dirname}/src/components/organisms`,
          "@moleculs" : `${__dirname}/src/components/moleculs`,
          "@templates" : `${__dirname}/src/components/templates`,
          "@pages" : `${__dirname}/src/components/pages`,

        }
      }
    ]
  ],
}
