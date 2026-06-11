import { useState } from 'react'
import CatSelect from '../CatSelect'

import './APIDescription.css'

function APIDescription() {
  const [choicedName, setChoicedName] = useState("");
  const [choicedInfo, setChoicedInfo] = useState("");
  const getInfoURL = `https://getacat-backend.onrender.com/get-a-cat-info/${choicedName}`;
  const getInfoURLWithProp = `https://getacat-backend.onrender.com/get-a-cat-info/${choicedName}/${choicedInfo}`

  return (
    <div>
      <h1>Api</h1>
      <p>
        Heres you can build your own API variation.
      </p>

      <div className="tabs tabs-box md:w-3/4 mx-auto">
        <input type="radio" name="my_tabs_6" className="tab tab-color" aria-label="Images" defaultChecked />
        <div className="tab-content bg-base-100 border-base-300 p-6">
          <h3>Images</h3>
          <p className="url" onClick={() => navigator.clipboard.writeText("https://getacat-backend.onrender.com/get-a-cat-image")}
            style={{ cursor: 'pointer', marginTop: "2%" }} title="Click to copy.">https://getacat-backend.onrender.com/get-a-cat-image</p>
        </div>

        <input type="radio" name="my_tabs_6" className="tab tab-color" aria-label="Cat Datatils" />
        <div className="tab-content bg-base-100 border-base-300 p-6">
          <h3>Cat Datatils</h3>
          <p className="select-description">Select the intended name belove.</p>

          <CatSelect onCatChange={setChoicedName}
            url={"https://getacat-backend.onrender.com/get-a-cat-info-datail/get-all-names/"}
            cache_key={"cached_cat_names"}
            nameOrprop={"Name"}
            regex={false} />

          <p className="url" onClick={() => navigator.clipboard.writeText(getInfoURL)}
            style={{ cursor: 'pointer', marginTop: "2%" }} title="Click to copy.">{getInfoURL}</p>

          <hr />

          <p className="select-description">Select the intended properti belove.</p>
          <CatSelect onCatChange={setChoicedInfo}
            url={"https://getacat-backend.onrender.com/get-a-cat-info-datail/get-all-properties/"}
            cache_key={"cached_cat_properties"}
            nameOrprop={"Propertie"}
            regex={true} />

          <p className="url" onClick={() => navigator.clipboard.writeText(getInfoURLWithProp)}
            style={{ cursor: 'pointer', marginTop: "2%" }} title="Click to copy.">{getInfoURLWithProp}</p>

        </div>
      </div>
    </div>
  )
}

export default APIDescription
