import React, { useEffect } from "react"
import db from "./db.json"
import { Link } from "react-router-dom"

interface companiesTypes {
    id: number, 
    name: string,
    vatin: string
}

const Home: React.FC = () => {

    useEffect(() => {
      // Update the document title using the browser API
      document.title = `Companies`;
    });

    return (

        <div>

            <h1>Companies</h1>

            <div>
                
                <div className="row">

                    <div className="column">Company name</div>
                    <div className="column">Vatin</div>

                </div>

                {db.companies.map((company: companiesTypes) => {

                    return (

                        <div key={company.id} className="row">

                            <Link to={`company/${company.id}`} className="column">{company.name}</Link>

                            <div className="column">{company.vatin}</div>

                        </div>

                    )

                })}

            </div>

        </div>

    )

}

export default Home;
