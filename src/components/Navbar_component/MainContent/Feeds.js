import React, { useContext,useState } from 'react'
import { SearchContext } from '@/contexts/Searchcontext'
import styles from './Feeds.module.css'

const Feeds = () => {
  const {result, setResult } = useContext(SearchContext)
  const [playingVideo, setPlayingVideo] = useState(null)  //state to
  // tract video playing
const [hoveredVideo, setHoveredVideo] =useState(null)


  //function to play video related to the thumbnail
  const handleplayVideo =(params)=>{
    setPlayingVideo(params)
  }

  const handleMouseEnter = (videoId) =>{
    setHoveredVideo(videoId)
  }

  const handleMouseLeave =() =>{
    setHoveredVideo(null)
  }


  return (
    <div className={styles.container}>
      {
        result.map((eachItem, index, array)=>(
          <div key={index} className={styles.content}>
          {
            hoveredVideo === eachItem.video_id ?(
            <iframe
            src={`https://www.youtube.com/embed/${eachItem.video_id}?autoplay=1`}
            allow="autoplay"
            allowFullScreen
            // frameborder="0"
            >
            </iframe>
            ):
            playingVideo === eachItem.videoId ?
            <iframe
            src={`https://www.youtube.com/embed/${eachItem.video_id}?autoplay=1`}
            allow="autoplay"
            allowFullScreen
            >
            </iframe>
            :
            (
              <div>
                <img src={eachItem.thumbnails[0].url} alt="image"
                onClick={() =>handleplayVideo(eachItem.video_id)} 
                onMouseEnter={()=>handleMouseEnter(eachItem.video_id)}
                onMouseLeave={()=>handleMouseLeave}
                />
             </div>
            )
          }
          <h1>{eachItem.title}</h1>
         <p>{eachItem.video_length}</p>
         <p>{eachItem.number_of_views}views.{eachItem.published_time}</p>
         </div>
         ))
      }
      </div>
  )
}

export default Feeds
