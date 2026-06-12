import { useState, useEffect } from "react";
import axios from "axios";

interface CatSelectProps {
    onCatChange: (catName: string) => void;
    url: string;
    cache_key: string;
    nameOrprop: "Name" | "Propertie";
    //regex: boolean //This is unused because I realised this is basicly unnecesarry. Just a buty thing.
}

function CatSelect({ onCatChange, url, cache_key, nameOrprop }: CatSelectProps) {
    const selectDefaultValue = `Pick a cat ${nameOrprop}`;

    const [catNames, setCatNames] = useState<string[]>(() => {
        const saved = sessionStorage.getItem(cache_key);
        if (saved) {
            try {
                const parsed = JSON.parse(saved);
                if (Array.isArray(parsed)) return parsed;
            } catch (e) {
                console.error("Falsy cache data...", e);
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
                    // if (regex) {
                    //     const newRegexedDataList = []
                    //     r.data.forEach(i => {
                    //         const result = i.replace(/(^[a-z])|_/g, (_, firstLetter) => {
                    //             return firstLetter ? firstLetter.toUpperCase() : ' ';
                    //         });
                    //         newRegexedDataList.push(result);
                    //     });
                    //     setCatNames(newRegexedDataList);
                    //     sessionStorage.setItem(cache_key, JSON.stringify(newRegexedDataList));
                    // } else {
                    //     setCatNames(r.data);
                    //     sessionStorage.setItem(cache_key, JSON.stringify(r.data));
                    // }

                    setCatNames(r.data);
                    sessionStorage.setItem(cache_key, JSON.stringify(r.data));
                } else {
                    console.error("The backend doesn't response", r.data);
                }
            })
            .catch(err => {
                console.error("Error occured", err.message);
            });
    }, [url, cache_key, catNames.length]);

    return (
        <select defaultValue={selectDefaultValue} className="select select-secondary"
            onChange={(e) => onCatChange(e.target.value)}>
            <option disabled value={selectDefaultValue}>{selectDefaultValue}</option>
            {Array.isArray(catNames) && catNames.map((cat, index) => (
                <option key={index} value={cat}>
                    {cat}
                </option>
            ))}
        </select>
    );
}

export default CatSelect;