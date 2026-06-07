import "../styles/Description.css"
import CatDatails from "../Components/CatSelect"
import { useState } from "react";

function APIDescription() {
  const [choiced, setChoiced] = useState("");

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
          <p className="url" onClick={() => navigator.clipboard.writeText("http://localhost:3001/get-a-cat-image")}
            style={{ cursor: 'pointer' }} title="Click to copy.">http://localhost:3001/get-a-cat-image</p> 
            {/* Fix */}
        </div>

        <input type="radio" name="my_tabs_6" className="tab" aria-label="Cat Datatils" />
        <div className="tab-content bg-base-100 border-base-300 p-6">
          <h3>Cat Datatils</h3>
          <CatDatails onCatChange={setChoiced} />
        </div>

        <input type="radio" name="my_tabs_6" className="tab" aria-label="Tab 3" />
        <div className="tab-content bg-base-100 border-base-300 p-6">Tab content 3</div>
      </div>
    </div>
  )
}

export default APIDescription
