import { useState, useEffect } from "react";
import axios from "axios";

const CACHE_KEY = "cached_cat_names";

interface CatSelectProps {
    onCatChange: (catName: string) => void;
}

function CatSelect({ onCatChange }: CatSelectProps) {
    const [catNames, setCatNames] = useState<string[]>(() => {
        const saved = sessionStorage.getItem(CACHE_KEY);
        return saved ? JSON.parse(saved) : [];
    });

    useEffect(() => {
        if (catNames.length > 0) return;

        axios.get("http://localhost:3001/get-a-cat-info-datail/get-all-names/")
            .then(r => {
                setCatNames(r.data);
                sessionStorage.setItem(CACHE_KEY, JSON.stringify(r.data));
            })
            .catch(err => console.error(err));
    }, [catNames.length]);

    return (
        <select defaultValue="Pick a cat" className="select select-secondary"
            onChange={(e) => onCatChange(e.target.value)}>
            <option disabled value="Pick a cat">Pick a Cat</option>
            {
                catNames.map((cat, index) => (
                    <option key={index} value={cat}>
                        {cat}
                    </option>
                ))
            }
        </select>
    );
}

export default CatSelect