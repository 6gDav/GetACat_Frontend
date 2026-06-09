import "../styles/Description.css"
import CatDatails from "../Components/CatSelect"
import { useState } from "react";

function APIDescription() {
  const [choiced, setChoiced] = useState("");
  const getInfoURL = `https://getacat-backend.onrender.com/get-a-cat-info/${choiced}`;

  return (
    <div>
      <h1>Api</h1>
      <p>
        Heres you can build your own API variation.
      </p>

      <div className="tabs tabs-box md:w-3/4 mx-auto">
        <input type="radio" name="my_tabs_6" className="tab" aria-label="Images" defaultChecked />
        <div className="tab-content bg-base-100 border-base-300 p-6">
          <h3>Images</h3>
          <p className="url" onClick={() => navigator.clipboard.writeText("https://getacat-backend.onrender.com/get-a-cat-image")}
            style={{ cursor: 'pointer', marginTop: "2%" }} title="Click to copy.">https://getacat-backend.onrender.com/get-a-cat-image</p> 
        </div>

        <input type="radio" name="my_tabs_6" className="tab" aria-label="Cat Datatils" />
        <div className="tab-content bg-base-100 border-base-300 p-6">
          <h3>Cat Datatils</h3>
          <CatDatails onCatChange={setChoiced} />
          <p className="url" onClick={() => navigator.clipboard.writeText(getInfoURL)}
            style={{ cursor: 'pointer', marginTop: "2%" }} title="Click to copy.">{getInfoURL}</p> 

            <hr />


        </div>
      </div>
    </div>
  )
}

export default APIDescription
