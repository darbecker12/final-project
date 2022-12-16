import React, { useEffect, useState } from "react";
import Navbar from "./component/Navbar";


const images = [
  { id: '1', imageName: "bankhead-arch.JPG", tag: "Bankhead" },
  { id: '2', imageName: "bankhead-wall.JPG", tag: "Bankhead" },
  { id: '3', imageName: "forest-metal.JPG", tag: "Bankhead" },
  { id: "4", imageName: "forest-wall-art.JPG", tag: "Bankhead" },
  { id: "5", imageName: "forest-wood.JPG", tag: "Bankhead" },
  { id: "6", imageName: "Billy-Kohut.jpg ", tag: "Sports" },
  { id: "7", imageName: "Brody-Wilson.jpg", tag: "Sports" },
  { id: "8", imageName: "Fire-Train.jpg", tag: "Sports" },
  { id: "9", imageName: "Fire-Whip.jpg", tag: "Sports" },
  { id: "10", imageName: "Jeremy-Stenberg.jpg", tag: "Sports" },
  { id: "11", imageName: "Kassie-Boone.jpg", tag: "Sports" },
  { id: "13", imageName: "Keith-Sayers.jpg", tag: "Sports" },
  { id: "14", imageName: "Train-Whip.jpg", tag: "Sports" },
  { id: "15", imageName: "fall-leaf.jpg", tag: "Nature" },
  { id: "16", imageName: "fc-dead-tree.jpg", tag: "Nature" },
  { id: "17", imageName: "fc-falling-leaves.jpg", tag: "Nature" },
  { id: "18", imageName: "fc-ground-leaf.jpg", tag: "Nature" },
  { id: "19", imageName: "fc-leaf-path.jpg", tag: "Nature" },
  { id: "20", imageName: "fc-leaf.jpg", tag: "Nature" },
  { id: "21", imageName: "fc-night.jpg", tag: "Nature" },
  { id: "22", imageName: "fc-path.jpg", tag: "Nature" },
  { id: "23", imageName: "fc-pond.jpg", tag: "Nature" },
  { id: "24", imageName: "fc-purple-leaf.jpg", tag: "Nature" },
  { id: "25", imageName: "fc-red-leaf.jpg", tag: "Nature" },
  { id: "26", imageName: "fc-reflection.jpg", tag: "Nature" },
  { id: "27", imageName: "fc-rocks.jpg", tag: "Nature" },
  { id: "28", imageName: "fc-stump.jpg", tag: "Nature" },
  { id: "29", imageName: "fc-tall-tree.jpg", tag: "Nature" },
  { id: "30", imageName: "fc-tree.jpg", tag: "Nature" },
  { id: "31", imageName: "aurora.JPG", tag: "Night" },
  { id: "32", imageName: "bhs-night.jpg", tag: "Night" },
  { id: "33", imageName: "cf-18.JPG", tag: "Planes" },
  { id: "34", imageName: "corsair.JPG", tag: "Planes" },
  { id: "35", imageName: "front-cf-18.JPG", tag: "Planes" },
  { id: "36", imageName: "gray-red-p51.JPG", tag: "Planes" },
  { id: "37", imageName: "silver-p51.JPG", tag: "Planes" },
  { id: "38", imageName: "snow-birds-formation.JPG", tag: "Planes" },
  { id: "39", imageName: "snow-birds-heart.JPG", tag: "Planes" },
  { id: "40", imageName: "snow-birds-split.JPG", tag: "Planes" },
  { id: "41", imageName: "snow-birds.JPG", tag: "Planes" },
];

const Photos = () => {
  const [tag, setTag] = useState("All");
  const [filteredImages, setFilteredImages] = useState([]);

  useEffect(() => {
    tag === 'All'
      ? setFilteredImages(images)
      : setFilteredImages(images.filter(image => image.tag === tag))
  }, [tag]);

  return (
    <div className="bg-hero bg-center bg-no-repeat bg-cover h-full">
      <Navbar />
      <div handleSetTag={setTag} >
        <div className="text-center my-3">
        <TagButton name="All" handleSetTag={setTag}/>
        <TagButton name="Bankhead" handleSetTag={setTag}/>
        <TagButton name="Sports" handleSetTag={setTag}/>
        <TagButton name="Night" handleSetTag={setTag}/>
        <TagButton name="Nature" handleSetTag={setTag}/>
        <TagButton name="Planes" handleSetTag={setTag}/>
        </div>
        
        <div className="container px-4 py-8 mx-auto items-center">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-2">
          {filteredImages.map(image => 
            <div key={image.id} className=" ">
              <img className="border-4 border-blue-400 rounded-md" src={`/images/${image.imageName}`} alt="" loading="lazy" />
              </div>      
          )}  
          </div>
        </div>
      </div>
      
    </div>
  );
};

const TagButton = ( {name, handleSetTag}) => {
  return <button onClick={ () => handleSetTag(name)}>{name.toUpperCase()}</button>
}

export default Photos;
