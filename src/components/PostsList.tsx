import usePosts from "../hooks/usePosts"

const PostsList = () => {

    const {data,fetchNextPage,hasNextPage} = usePosts();


  return (
    <div>
        <div>
            <ul>
                {data?.pages.map(page => (
                    page.map(post => (
                        <li key={post.id}>
                            {post.title}
                        </li>
                    ))
                ))}
            </ul>
        </div>
        <button disabled={!hasNextPage} onClick={() => {
            fetchNextPage()
        }}>
            {hasNextPage ? "Load More" : "No More Data Avaialble"}
        </button>
    </div>
  )
}

export default PostsList