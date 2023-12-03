import React, { useEffect, useState } from "react";
import "./Gallery.css";
import { ImageModal } from "../imageModal/ImageModal";

export default function Gallery() {
  const [imageArray] = useState([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
  const [isModalOn, setIsModalOn] = useState(false)
  const [selectedItem, setSelectedItem] = useState(1)
  const [isHovered, setIsHovered] = useState(0)

  const selectItem = (itemIndex) => {
    setIsModalOn(true)
    setSelectedItem(itemIndex)
  }

  const handleMouseEnter = (index) => {
    setIsHovered(index);
  };

  const handleMouseLeave = (index) => {
    setIsHovered(index);
  };

  const cardStyle = {
    backgroundColor: 'lightblue'
  }
  const cardStyle2 = {
    backgroundColor: 'white'
  }
  /*-------------div-------------*/

  return <>
    <div className="  flex flex-wrap font-semibold">
      {imageArray.map((item, index) => {
        return <div className="w-full md:w-1/2 lg:w-1/3 h-64 p-2">
          <div
            key={index}
            className="galleryImage h-full w-full"
            onClick={() => selectItem(index)}
            style={index === isHovered ? cardStyle : cardStyle2}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
          >{item}</div>
        </div>

      })}
    </div>
    {isModalOn && <ImageModal setIsModalOn={setIsModalOn} selectedItem={selectedItem} />}
  </>
}
