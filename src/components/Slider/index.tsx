import { useState } from "react";
import "./slider.styles.css"

const images = [
  "https://images.unsplash.com/photo-1509721434272-b79147e0e708?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
  "https://images.unsplash.com/photo-1506710507565-203b9f24669b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1536&q=80",
  "https://images.unsplash.com/photo-1536987333706-fc9adfb10d91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
];

export function Slider(){
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const onPrev = () => {
    const _currentImageIndex = currentImageIndex - 1
    if( _currentImageIndex < 0){
      setCurrentImageIndex(images.length - 1)  
    }else{
      setCurrentImageIndex(currentImageIndex - 1)
    }
  }

  const onNext = () => {
    const _currentImageIndex = currentImageIndex + 1
    if(currentImageIndex >= images.length - 1){
      setCurrentImageIndex(0)  
    }else{
      setCurrentImageIndex(_currentImageIndex)
    }
  }

  return (
    <div className="slider-container">
      <div className="nav">
        <button onClick={onPrev}>prev</button>
      </div>
      <div className="images-wrapper">
        {images.map((img,idx)=><img key={`slide-${idx}`} src={img} alt="teststst" className={`image ${idx === currentImageIndex ? "active" : ""}`}/> )}
      </div>
      <div className="nav">
        <button onClick={onNext}>next</button>
      </div>
    </div>
  )
}