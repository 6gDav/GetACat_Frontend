import "../styles/Description.css"

function APIDescription() {
  return (
    <div>
      <h1>Api Description</h1>
      <p>
        Heres you can build your own API variation.
      </p>
      
      <div className="tabs tabs-box md:w-3/4 mx-auto">
        <input type="radio" name="my_tabs_6" className="tab" aria-label="Tab 1" />
        <div className="tab-content bg-base-100 border-base-300 p-6">Tab content 1</div>

        <input type="radio" name="my_tabs_6" className="tab" aria-label="Tab 2" defaultChecked />
        <div className="tab-content bg-base-100 border-base-300 p-6">Tab content 2</div>

        <input type="radio" name="my_tabs_6" className="tab" aria-label="Tab 3" />
        <div className="tab-content bg-base-100 border-base-300 p-6">Tab content 3</div>
      </div>
    </div>
  )
}

export default APIDescription
