import React from 'react'
import articles from '../data'
import ArticleCard from './ArticleCard'


const ListeArticle = () => {
    return (
        <div className="flex-[4] mt-10 " >
            <h1 className='text-2xl font-bold underline' >Liste des Articles </h1>
            <div className='bg-white grid grid-cols-3 gap-4 p-10' >
              {
                articles.map((article, index)=>{
                    return <ArticleCard key={index}/>
                }
                )

                
              }
            </div>
        </div>
    )
}
export default ListeArticle