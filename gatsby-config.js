module.exports = {
  siteMetadata: {
    title: 'Aerochamber Plus Flow-Vu | Anti-Static Valved Holding Chamber',
    desc: 'Anti-Static Valved Holding Chamber'
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-styled-components',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'img',
        path: `${__dirname}/src/images`
      }
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp'
  ]
}
