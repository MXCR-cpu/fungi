import './EmitterList.css'
import { useState } from 'react';


function EmitterList() {
  const [list, setList] = useState([]);

  return (
    <div className="EmitterList">
      <ul>
      </ul>
    </div>
  )
}

export default EmitterList
