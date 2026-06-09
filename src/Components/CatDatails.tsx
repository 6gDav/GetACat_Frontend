import { useEffect, useState } from "react"
import axios from "axios"
import CatSelect from "./CatSelect"

import "../styles/CatDatails.css"

interface CatDatailsName {
    id: string,
    name: string,
    lifespan: string,
    avg_weight: number,
    colors: string[],
    character: string[],
    image: string
}

function CatDatails() {
    const [choiced, setChoiced] = useState("");
    const [choicedCatDatails, setChoicedCatDatails] = useState<CatDatailsName>()


    useEffect(() => {
        axios.get(`https://getacat-backend.onrender.com/get-a-cat-info/${choiced}`)
            .then(r => setChoicedCatDatails(r.data))
            .catch(err => console.error(err))
    }, [choiced]);

    //console.log("From CatDatails", choicedCatDatails)

    return (
        <div>
            <h1>Cat Datails</h1>
            <CatSelect onCatChange={setChoiced} />

            <div className="mt-12 px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32 W-full max-w-6xl mx-auto">
                {!choicedCatDatails ? (
                    <div className="text-center p-8 bg-base-200 rounded-2xl shadow-inner">
                        <p className="text-xl font-semibold text-base-content/70">Cat not found</p>
                    </div>
                ) : (
                    <div className="card md:card-side bg-base-100 shadow-xl border border-base-200 overflow-hidden transition-all duration-300 hover:shadow-2xl">
                        <figure className="md:w-2/5 h-64 md:h-auto relative min-h-[300px]">
                            <img
                                src={choicedCatDatails.image}
                                alt={choicedCatDatails.name || "Cat Image"}
                                className="absolute inset-0 w-full h-full object-cover"
                            />
                        </figure>
                        <div className="card-body md:w-3/5 p-8 justify-between">
                            <div>
                                <h2 className="card-title text-3xl font-extrabold tracking-tight text-primary mb-6 border-b pb-2 border-base-200">
                                    {choicedCatDatails.name}
                                </h2>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <div className="flex flex-col p-3 bg-base-200/50 rounded-xl">
                                        <span className="text-xs uppercase tracking-wider font-semibold text-base-content/60 mb-1">Lifespan</span>
                                        <span className="text-base font-medium text-base-content">{choicedCatDatails.lifespan}</span>
                                    </div>

                                    <div className="flex flex-col p-3 bg-base-200/50 rounded-xl">
                                        <span className="text-xs uppercase tracking-wider font-semibold text-base-content/60 mb-1">Avg Weight</span>
                                        <span className="text-base font-medium text-base-content">{choicedCatDatails.avg_weight}</span>
                                    </div>

                                    <div className="flex flex-col p-3 bg-base-200/50 rounded-xl sm:col-span-2">
                                        <span className="text-xs uppercase tracking-wider font-semibold text-base-content/60 mb-1">Colors</span>
                                        <span className="text-base font-medium text-base-content">{...choicedCatDatails.colors}</span>
                                    </div>

                                    <div className="flex flex-col p-3 bg-base-200/50 rounded-xl sm:col-span-2">
                                        <span className="text-xs uppercase tracking-wider font-semibold text-base-content/60 mb-1">Character</span>
                                        <span className="text-base font-medium text-base-content italic">"{...choicedCatDatails.character}"</span>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                )}
            </div>


        </div>
    )
}

export default CatDatails
