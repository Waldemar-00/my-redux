import { useSelector, useDispatch } from 'react-redux'
import { article_open } from '../actions/actions'
const Article = () => {
  const dispatch = useDispatch()
  const article = useSelector(state => state.article.article)
  const articleOpen = () => {
    dispatch(article_open(
      'Сколько не находил ресурсов  для обучения по JS этот единственный, который поясняет последовательно и вполне ясно. Не хватает таких ресурсов по HTML & CSS. Уважение ребятам!'))
  }
  return (
    <section className="article">
      <article>{article}</article>
      <button onClick={articleOpen}>Open</button>
    </section>
  )
}
export default Article