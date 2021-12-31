import React from 'react'
import TableHeader from './TableHeader'
import TableItems from './TableItems'


const TableList = ({posts, remove}) => {
    return (
        <>
       
        <h2>Favorite Programming Language</h2>
        <table>
          <TableHeader />
          <tbody>
            {posts.map((post, index) => (
              <TableItems remove={remove} number={index + 1} post={post} key={post.id} />
            ))}
          </tbody>
        </table>
        </>
    )
}
export default TableList;