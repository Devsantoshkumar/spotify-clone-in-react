import React from 'react'
import "./playhead.css"
import {icons} from "../../api/icons.js"
import singer1 from "../../assets/images/singer1.jpg";

const Playhead = () => {
  return (
    <div className="row playhead z-3">
        <div className="col d-flex align-items-center">
            <div className="row ms-3">
              <div className="col d-flex align-items-center">
                 <img src={singer1} className='object-fit-cover rounded' width={50} height={50}  alt="" />
              </div>
              <div className="col songInPlayHead pt-3 d-flex flex-column">
                <span className='text-start text-light'>3:56</span>
                <p className='text-nowrap text-light'>Lorem ipsum dolor sit amet.</p>
              </div>
              <div className="col d-flex align-items-center playHeadHeart">
                {icons.outlineHeart}
              </div>
            </div>
        </div>
        <div className="col d-flex gap-2 flex-column align-items-center justify-content-center">
            
            <div className="row">
              <div className="col d-flex align-items-center gap-4 playHeadControls">
                 <span>{icons.shuffle}</span>
                 <span>{icons.backward}</span>
                 <span className='play'>{icons.playCircle}</span>
                 <span>{icons.forward}</span>
                 <span>{icons.roateRight}</span>
              </div>
            </div>
            <div className="row">
               <div className="col d-flex gap-2 align-items-center payHeadLineTime">
                  <span>1:9</span>
                  <div className="playLine rounded"></div>
                  <span>5:00</span>
               </div>
            </div>

        </div>
        <div className="col rightControls pe-4 d-flex gap-3 align-items-center justify-content-end">
            <span>{icons.playButton}</span>
            <span>{icons.mic}</span>
            <span>{icons.listBar}</span>
            <span className='d-flex align-items-center rounded gap-2'>{icons.valume} <div className="musicLine"></div></span>
            <span>{icons.ract}</span>
        </div>
    </div>
  )
}

export default Playhead