import { useSelector, useDispatch } from 'react-redux'
import { article_open } from '../store/articleSlice'
import { nanoid } from '@reduxjs/toolkit'
const Article = () => {
  const dispatch = useDispatch()
  const article = useSelector(state => state.article.entities)
  const articleOpen = () => {
    dispatch(article_open({
      id: nanoid(), article: 'Сколько не находил ресурсов  для обучения по JS этот единственный, который поясняет последовательно и вполне ясно. Не хватает таких ресурсов по HTML & CSS.Уважение ребятам!' }
    ))
  }
  return (
    <section className="article">
      <article>{Object.values(article).map(article => article.article)}</article>
      <button onClick={articleOpen}>Open</button>
    </section>
  )
}
export default Article