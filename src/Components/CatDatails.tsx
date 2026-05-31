import { useEffect, useState } from "react"
import axios from "axios"

function CatDatails() {
    const [res, setRes] = useState([])

    useEffect(() => {
        axios.get("http://localhost:3001/get-a-cat-info-datail/get-all-names/")
            .then(r => setRes(r.data))
            .catch(err => console.error(err))
    }, [])

    console.log(res)

    return (
        <div>
            <select defaultValue="Pick a cat" className="select select-secondary">
                <option disabled value="Pick a cat">Pick a cat</option>
                {
                    res.map((cat, _) => (
                        <option key={cat.id} value={cat}>
                            {cat}
                        </option>
                    ))
                }
            </select>
        </div>
    )
}

export default CatDatails
