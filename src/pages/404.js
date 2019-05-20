import React from "react"
import Typography from "@material-ui/core/Typography"
import SEO from "../components/seo"
import Layout from "../components/layout"
import { Link } from "gatsby"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <Typography variant="h2" gutterBottom>
      PAGE NOT FOUND
    </Typography>
    <Typography component="p" variant="body1">
      There's nothing here. <br />
      <br />
      <Link to="/">Try the home page instead?</Link>
    </Typography>
  </Layout>
)

export default NotFoundPage
