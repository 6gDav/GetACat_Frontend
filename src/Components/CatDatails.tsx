import { useEffect, useState } from "react"
import axios from "axios"

import "../styles/CatDatails.css"

interface CatDatailsyName {
    id: string,
    name: string,
    lifespan: string,
    avg_weight: number,
    colors: string[],
    character: string[]
}

function CatDatails() {
    const [catNames, setCatNames] = useState([])
    const [choiced, setChoiced] = useState("");
    const [choicedCatDatails, setChoicedCatDatails] = useState<CatDatailsyName>()

    useEffect(() => {
        axios.get("http://localhost:3001/get-a-cat-info-datail/get-all-names/")
            .then(r => setCatNames(r.data))
            .catch(err => console.error(err))
    }, [])

    useEffect(() => {
        axios.get(`http://localhost:3001/get-a-cat-info/${choiced}`)
            .then(r => setChoicedCatDatails(r.data))
            .catch(err => console.error(err))
    }, [choiced]);

    console.log("From CatDatails", choicedCatDatails)

    return (
        <div>
            <select defaultValue="Pick a cat" className="select select-secondary"
                onChange={(e) => setChoiced(e.target.value)}>
                <option disabled value="Pick a cat">Pick a Cat</option>
                {
                    catNames.map((cat, index) => (
                        <option key={index} value={cat}>
                            {cat}
                        </option>
                    ))
                }
            </select>

            <div style={{ marginTop: "5%" }}>
                {!choicedCatDatails ? (
                    <p>Cat not found</p>
                ) : (
                    <div className="card card-side bg-base-0 shadow-sm card-with">
                        <figure>
                            <img
                                src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/A-Cat.jpg/3840px-A-Cat.jpg?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=thumbnail"
                                alt="Cat Image" className="card-iamge-style"/>
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title">{choicedCatDatails.name}</h2>
                            <ul>
                                <li>Lifespan: {choicedCatDatails.lifespan}</li>
                                <li>Avg weight: {choicedCatDatails.avg_weight}</li>
                                <li>Colors: {choicedCatDatails.colors}</li>
                                <li>character: {choicedCatDatails.character}</li>
                            </ul>
                        </div>
                    </div>
                )}
            </div>


        </div>
    )
}

export default CatDatails
