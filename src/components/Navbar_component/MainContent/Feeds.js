import React, { useContext,useState } from 'react'
import { SearchContext } from '@/contexts/Searchcontext'
import styles from './Feeds.module.css'

const Feeds = () => {
  const {result, setResult } = useContext(SearchContext)
  const [playingVideo, setPlayingVideo] = useState(null)  //state to
  // tract video playing

  const handleplayVideo =(params)=>{
    setPlayingVideo(params)
  }
  return (
    <div className={styles.container}>
      {
        result.map((eachItem, index, array)=>(
          <div key={index} className={styles.content}>
          {
            playingVideo === eachItem.video_id ?
            <iframe
            src={`https://www.youtube.com/embed/${eachItem.video_id}`}
            // frameborder="0"
            >
            </iframe>
            :
            (
              <div>
                <img src={eachItem.thumbnails[0].url} alt="image"
                onClick={() =>handleplayVideo(eachItem.video_id)} />
         <h1>{eachItem.title}</h1>
         <p>{eachItem.video_length}</p>
         <p>{eachItem.number_of_views}views.{eachItem.published_time}</p>
         </div>
            )
          }
        </div>
         ))
      }
      </div>
  )
}

export default Feeds
