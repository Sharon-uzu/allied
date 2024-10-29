import React from 'react'
import BlogSlider from './BlogSlider'

const Blog = () => {
  return (
    <div className='blog'>
        <div className='plans'>
            <div className="plan1 org-p blog-p">
                <h2>From small businesses to big organizations, our plans cater for all</h2>
                <button>More insights</button>

                
            </div>
        </div>
        <BlogSlider/>
    </div>
  )
}

export default Blog