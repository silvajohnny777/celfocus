import React, { useEffect, useState } from "react"
import db from "./db.json"
import { Link, useNavigate, useParams } from "react-router-dom"

interface numbersType {
    id: string, 
    type: string,
    company_id: number
}

const CompanyNumbers: React.FC = () => {
    const navigate = useNavigate();
    let params = useParams();
    const [ numbersArray, setNumbersArray ] = useState<numbersType[]>([])

    useEffect(() => {
      // Update the document title using the browser API
      document.title = `Local public office`;
    });

    useEffect(() => {

        setNumbersArray(db.phone_numbers.filter((num: any) => num.company_id.toString() === params.companyId))

    }, [params.companyId])

    return (

        <div>

            <button onClick={() => navigate(-1)}>Go back</button>

            <h1>Local public office</h1>

                {

                    numbersArray?.length > 0 &&
                
                    <div className="row">
    
                        <div className="column">Number</div>
                        <div className="column">Type</div>
    
                    </div>
                    
                }

                {

                    numbersArray?.length > 0 ?
                
                        numbersArray?.map((number: numbersType) => {

                            return (

                                <div key={number.id} className="row">

                                    <Link to={`/number/${number.id}`} className="column">{number.id.replace(/^(.{3})(.*)$/, "$1 $2")}</Link>

                                    <div className="column">{number.type}</div>

                                </div>

                            )

                        })

                    :

                        "No numbers were found for that company"
                
                }

        </div>

    )

}

export default CompanyNumbers;
