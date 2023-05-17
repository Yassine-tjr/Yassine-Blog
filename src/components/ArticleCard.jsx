import React from 'react'

const ArticleCard = ({id, article}) => {
  return (
    <div className='w-56 rounded-md overflow-hidden space-y-4' >
        <img className='w-full' src="https://placehold.co/600x400" alt="" />
        <div className='space-y-1 px-2'>
            <span className='bg-indigo-400 text-white py-1 px-2 rounded-full text-xs'>{article.category}</span>
            <h2 className='text-sm capitalize font bold'>{article.title}</h2>
            <p className='text-xs text-gray-600'>{article.text}</p>

        </div>
        <div className='flex space-x-2'>
            <img className='w-14 h-14 rounded-full' src={`https://robohash.org/${id}?200X200`} alt="" />
            <div className='flex flex-col'>
                <span className='text-xs text-gray-600'>{article.publishedDate}</span>
                <span  className='text-xs text-gray-600'>{article.publishedHour}</span>
            </div>
        </div>


    </div>
  )
}

export default ArticleCard