import { useSelector, useDispatch } from 'react-redux'

const Article = () => {
  const dispatch = useDispatch()
  const article = useSelector(state => state.article.article)
  const articleOpen = () => {
    dispatch({ type: 'ARTICLE_OPEN' })
  }
  return (
    <section>
      <article>{article}</article>
      <button onClick={articleOpen}>Open</button>
    </section>
  )
}
export default Article