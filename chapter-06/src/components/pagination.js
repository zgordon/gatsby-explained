import React from "react"
import { Link } from "gatsby"

const Pagination = ({
  pageContext,
  pageContext: { currentPage, numPages },
}) => {
  const isFirst = currentPage === 1
  const isLast = currentPage === numPages
  const prevPage = currentPage - 1 === 1 ? "/blog" : `/blog/${currentPage - 2}`
  const nextPage = `/blog/${currentPage}`

  console.log(pageContext, isFirst, isLast, prevPage, nextPage)
  return (
    <nav
      style={{
        display: `flex`,
        justifyContent: `space-between`,
        margin: `2rem 0`,
      }}
    >
      {!isFirst && (
        <Link to={prevPage} rel="prev">
          ← Previous Page
        </Link>
      )}
      {!isLast && (
        <Link to={nextPage} rel="next">
          Next Page →
        </Link>
      )}
    </nav>
  )
}

export default Pagination
