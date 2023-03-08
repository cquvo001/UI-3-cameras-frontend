import './App.css';

import { useState } from 'react';
import VideoPlayer from './Components/VideoPlayer';

function App() {

  const [videoId, setVideoId] = useState(null)

  function playVideo(e, videoId){
    e.preventDefault()
    setVideoId(videoId)
  }

  return (
    <div className="App">
      <h1>Hệ thống camera quan sát </h1>
      <table>
      <tr>
        <th>Camera 1  <VideoPlayer videoId='camera1'/></th>
        
        <th> Camera 2  <VideoPlayer videoId='camera2'/> </th>

        <th>Camera 3  <VideoPlayer videoId='camera3'/>  </th>cd

      </tr>
      </table>      
      {videoId && <VideoPlayer videoId={videoId}></VideoPlayer>} <br />
      <button onClick={(e)=>{playVideo(e, 'camera1')}}>Play Camera 1</button>
      <button onClick={(e)=>{playVideo(e, 'camera2')}}>Play Camera 2</button>
      <button onClick={(e)=>{playVideo(e, 'camera3')}}>Play Camera 3</button>
      

    </div>
  );
}

export default App;
