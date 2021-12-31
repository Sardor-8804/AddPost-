
import React, { useMemo, useState } from 'react'
import "./app.css"
import SetForm from './components/Table/SetForm';
import TableList from './components/Table/TableList';
import FilterAndSearch from './components/UI/FilterAndSearch';

import { data } from './data';

function App() {
  const [posts, setPosts] = useState(data);
  const [filter, setFilter] = useState({sort: "", query: ""})

  const SortedPosts = useMemo(() => {
    console.log('render');
    if (filter.sort) {
    return [...posts].sort((a, b) => a[filter.sort].localeCompare(b[filter.sort]))
  }
    return posts
  }, [filter.sort, posts]) 

  const sortAndSearchPosts = useMemo(() => {
    return SortedPosts.filter(post => post.title.toLocaleLowerCase().includes(filter.query.toLocaleLowerCase()));
  }, [filter.query, SortedPosts])

  const createPost = (newPost) => {
    setPosts([...posts, newPost])
  }
  const removePost = (post) => {
    setPosts(posts.filter(e => e.id !== post.id))
  }

  return (
    <>

      <div className="container">
        <h2>Create First Post</h2>
        <SetForm createPost={createPost} />
        <FilterAndSearch filter={filter} setFilter={setFilter} />
        {sortAndSearchPosts.length
          ? <TableList remove={removePost} posts={sortAndSearchPosts} />
          : <h2 className="h">Not Found</h2>
        }
      </div>
    </>
  )

}

export default App;

