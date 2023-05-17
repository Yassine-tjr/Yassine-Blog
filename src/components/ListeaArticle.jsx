import React from 'react'
import articles from '../data'
import ArticleCard from './ArticleCard'


const ListeArticle = () => {
    return (
        <div className="flex-[4] mt-10 bg-white p-10 space-y-4" >
            <h2 className='text-2xl font-bold underline' >Liste des Articles </h2>
            <div className=' grid grid-cols-3 gap-4' >
              {
                articles.map((article, index)=>{
                    return <ArticleCard article={article} id={index} key={index}/>
                }
                )

                
              }
            </div>
        </div>
    )
}
export default ListeArticle