const { slugify } = require("./src/util/utilityFunctions")
const path = require("path")
const authors = require("./src/util/authors")

exports.onCreateNode = ({ node, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === "MarkdownRemark") {
    const slugFromTitle = slugify(node.frontmatter.title)
    createNodeField({
      node,
      name: "slug",
      value: slugFromTitle,
    })
  }
}
exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions
  const templates = {
    singlePostTemplate: path.resolve("src/templates/single-post.js"),
    tagsPage: path.resolve("src/templates/tags-page.js"),
  }
  return graphql(`
    {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              author
              tags
            }
            fields {
              slug
            }
          }
        }
      }
    }
  `).then(res => {
    if (res.errors) return Promise.reject(res.errors)
    const posts = res.data.allMarkdownRemark.edges
    posts.forEach(({ node }) => {
      //create single post pages
      createPage({
        path: node.fields.slug,
        component: templates.singlePostTemplate,
        context: {
          // Passing slug for template to use to get post
          slug: node.fields.slug,
          // Find author imageUrl from authors and pass it to the single post template
          imageUrl: authors.find(x => x.name === node.frontmatter.author)
            .imageUrl,
        },
      })
    })
    // Get all tags
    let tags = []
    _.each(posts, edge => {
      if (_.get(edge, "node.frontmatter.tags")) {
        tags = tags.concat(edge.node.frontmatter.tags)
      }
    })

    let tagPostCounts = {} // { tutorial: 2, design: 1}
    tags.forEach(tag => {
      // Or 0 cause it might not exist yet
      tagPostCounts[tag] = (tagPostCounts[tag] || 0) + 1
    })

    // Remove duplicates
    tags = _.uniq(tags)

    // Tags page (all tags)
    createPage({
      path: "/tags",
      component: templates.tagsPage,
      context: {
        tags,
        tagPostCounts,
      },
    })
  })
}
