import React from 'react'

const NewsletterPage = ({
  match: {
    params: { newsletterId },
  },
}) => {
  return <div>Newsletter! {newsletterId}</div>
}

export default NewsletterPage
