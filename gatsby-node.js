// const path = require('path');

// exports.createPages = ({ graphql, boundActionCreators }) => {
//   const { createPage } = boundActionCreators;
//   return new Promise((resolve, reject) => {
//     const newsPostTemplate = path.resolve('src/templates/news-post.js');
//     resolve(
//       graphql(`
//         {
//           allContentfulNewsPost(sort: { fields: [date], order: DESC }) {
//             edges {
//               previous {
//                 id
//               }
//               next {
//                 id
//               }
//               node {
//                 id
//                 title
//                 image {
//                   title
//                   description
//                   sizes(maxWidth: 904) {
//                     sizes
//                     srcWebp
//                     srcSetWebp
//                     tracedSVG
//                     aspectRatio
//                     src
//                     srcSet
//                   }
//                 }
//                 date(formatString: "Do MMM, YYYY")
//                 slug
//                 body {
//                   childMarkdownRemark {
//                     html
//                     excerpt
//                   }
//                 }
//                 tags
//               }
//             }
//           }
//         }
//       `).then((result) => {
//         if (result.errors) {
//           reject(result.errors);
//         }
//         const { edges: newsPosts } = result.data.allContentfulNewsPost;

//         newsPosts.forEach(({ node: newsPost }, i) => {
//           const { slug } = newsPost;
//           createPage({
//             path: `news/${slug}`,
//             component: newsPostTemplate,
//             context: {
//               prev: i === 0 ? null : newsPosts[i - 1].node,
//               next: i === newsPosts.length - 1 ? null : newsPosts[i + 1].node,
//               slug
//             }
//           });
//         });
//       })
//     );
//   });
// };
