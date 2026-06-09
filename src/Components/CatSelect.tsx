import { useState, useEffect } from "react";
import axios from "axios";

interface CatSelectProps {
    onCatChange: (catName: string) => void;
    url: string;
    cache_key: string;
}

function CatSelect({ onCatChange, url, cache_key }: CatSelectProps) {
    const [catNames, setCatNames] = useState<string[]>(() => {
        const saved = sessionStorage.getItem(cache_key);
        if (saved) {
            try {
                const parsed = JSON.parse(saved);
                if (Array.isArray(parsed)) return parsed;
            } catch (e) {
                console.error("Hibás cache adat, ürítés...", e);
                sessionStorage.removeItem(cache_key);
            }
        }
        return [];
    });

    useEffect(() => {
        if (catNames.length > 0) return;

        axios.get(url)
            .then(r => {
                if (Array.isArray(r.data)) {
                    setCatNames(r.data);
                    sessionStorage.setItem(cache_key, JSON.stringify(r.data));
                } else {
                    console.error("A backend válasza nem tömb:", r.data);
                }
            })
            .catch(err => {
                console.error("API hiba történt:", err.message);
            });
    }, [url, cache_key, catNames.length]); 

    return (
        <select defaultValue="Pick a cat" className="select select-secondary"
            onChange={(e) => onCatChange(e.target.value)}>
            <option disabled value="Pick a cat">Pick a Cat</option>
            {Array.isArray(catNames) && catNames.map((cat, index) => (
                <option key={index} value={cat}>
                    {cat}
                </option>
            ))}
        </select>
    );
}

export default CatSelect;