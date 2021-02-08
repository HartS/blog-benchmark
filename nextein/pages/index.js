import React from 'react'
import withPosts from 'nextein/posts'
import { Content } from 'nextein/post'

export default withPosts(({ posts }) => {
  return (
    <main>
    {
      posts.map(post => (        
        <article key={post.data.__id}>
          <h1>{post.data.title}</h1>
          <Content {...post} />
        </article>
      ))
    }
    </main>
  )
})

