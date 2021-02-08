import React from 'react'
import withPosts from 'nextein/posts'
import { Content } from 'nextein/post'

export default withPosts(({ posts }) => {
  return (
    <main>
    {
      posts.map(post => (        
        <article key={post.data.__id}>
          <h1><a href={post.data.url}>{post.data.title}</a></h1>
          <Content excerpt {...post} />
        </article>
      ))
    }
    </main>
  )
})

