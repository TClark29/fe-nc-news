import { getArticleById } from "../../api"
import { useEffect, useState } from "react"
import { useNavigate } from 'react-router-dom'


function ArticleContent(props){
    
    const articleId = props.articleId
    const [article, setArticle] = useState(null)
    const navigate = useNavigate()

    useEffect(()=>{
        getArticleById(articleId)
        .then((response)=>{
            console.log(response)
            setArticle(response.article)
        })
    
  


    }, [])

    function handleArticleButton(){
        navigate('/')

    }


if (article!==null){


    return (
        <div className="article-content">
            <h1 className="article-header">{article.title}</h1>
                <div className="article-info"><p>By {article.author}</p><p>{article.created_at.slice(0,10)}</p></div>
            
            <img className = 'single-article-image'src={article.article_img_url} alt={`A picture for the article ${article.title}`} />
            <p className="article-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti eius vel ea in pariatur, quas ad laborum soluta? Similique ducimus maxime perspiciatis ipsum fugit, excepturi nulla? Illo deserunt nobis a, cumque dolore veritatis nulla. Quaerat, voluptatum iure. Ad quia reiciendis pariatur ut vel beatae quam maxime, dignissimos optio doloribus dicta aut! Dolorem tempora ducimus tempore odio, doloremque culpa sed animi et repellendus architecto numquam eum cumque quo earum reiciendis iste consequatur ipsum. Reiciendis architecto odit nobis modi officia ratione unde placeat sit soluta doloribus neque sed tempora ab aliquid beatae illum in tenetur, asperiores dignissimos qui, magni sapiente obcaecati voluptatem laudantium! Aliquid, ea ex blanditiis illo at doloremque nemo hic omnis excepturi quo voluptate cum doloribus earum dicta necessitatibus distinctio nulla! Porro quos assumenda mollitia eos saepe ducimus voluptatem molestiae dolore nobis officiis sunt voluptate, perferendis eligendi minus laboriosam consequatur beatae voluptatibus libero cupiditate distinctio commodi cumque nemo placeat. Ducimus libero ipsam odio. Animi obcaecati dicta, autem corrupti blanditiis omnis officia eius. Atque distinctio dolor nobis minus consequatur quas non odio commodi fuga deserunt doloremque quasi, excepturi vero assumenda ducimus reiciendis exercitationem qui aspernatur numquam veniam impedit modi quisquam. Quae impedit enim perferendis sequi in nisi, recusandae mollitia ad quidem.
            <br/>
            <br/>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi deleniti ad unde quo id recusandae animi impedit perspiciatis ut, voluptas facilis itaque mollitia esse tempora! Commodi atque, autem doloribus quos libero dolorum consequuntur laudantium accusamus voluptates odit. Illo porro quos possimus harum iusto excepturi atque mollitia consectetur error nihil accusamus, voluptatum tempore labore pariatur eveniet impedit. Odit magni sit ut labore ullam unde ratione iusto nemo esse aperiam numquam odio repudiandae accusantium maxime quod aspernatur voluptatem iure voluptas quam quibusdam vitae, quaerat quos eveniet. Nostrum temporibus itaque voluptas id necessitatibus fuga non rem consectetur deserunt! Fuga dolorem sed rem in sit, quasi aliquam natus! Sequi, quasi possimus. Soluta aspernatur dolorum, ducimus totam incidunt ad, beatae recusandae repudiandae et rem dolores cum modi sit ratione. Fugiat voluptatum porro laborum rerum nobis accusantium tempora mollitia magnam blanditiis exercitationem, quae nulla alias nam asperiores voluptas, a, non omnis rem. Aut sit neque at excepturi. Dolores, a. Vitae in provident, excepturi a minus officiis debitis quo nihil voluptatibus cupiditate necessitatibus labore velit eveniet? Repudiandae tempore cum, molestiae asperiores nostrum eius quae voluptatibus saepe ad vero. Accusamus minus fugiat eveniet ratione deserunt nisi quam culpa veniam soluta alias, cum ipsam quas nemo ut dolorem illum!
            <br/>
            <br/>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis dolores quisquam numquam odio quod nisi ut voluptates odit, repudiandae facere distinctio ullam! Officiis, delectus eveniet cupiditate ipsum itaque architecto laboriosam.
            </p>
            <button onClick={handleArticleButton}>Return to articles</button>
        </div>
    )
}
}

export default ArticleContent