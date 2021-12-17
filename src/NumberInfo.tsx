import React, { useEffect, useState } from "react"
import db from "./db.json"
import { Link, useNavigate, useParams } from "react-router-dom"

interface numbersType {
    id: string, 
    type: string,
    company_id: number
}

const NumberInfo: React.FC = () => {
    const navigate = useNavigate();
    let params = useParams();
    const [ numberInfo, setNumberInfo ] = useState<numbersType[]>([])

    useEffect(() => {
      // Update the document title using the browser API
      document.title = `Local public office > ${params.numberId}`;
    });

    useEffect(() => {

        setNumberInfo(db.phone_numbers.filter((num: any) => num.id.toString() === params.numberId))

    }, [params.companyId])

    return (

        <div>

            <div><button onClick={() => navigate(-1)}>Go back</button></div>
            
            <p>{params.numberId?.replace(/^(.{3})(.*)$/, "$1 $2")}</p>

            <p>{numberInfo[0]?.type}</p>

        </div>

    )

}

export default NumberInfo;