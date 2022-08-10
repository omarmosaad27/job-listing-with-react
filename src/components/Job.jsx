import React from 'react'
import { useGlobalContext } from '../context'
import Details from './Details'
const Job = ({item}) => {
    const { addFilter } = useGlobalContext()
    let keywords = [item.role, item.level, ...item.languages, ...item.tools];
    return (
        <div className="job">
            <div className="left">
                <div className="logo">
                    <img src={item.logo} alt={item.company} />
                </div>
                <Details
                    company={item.company}
                    recent={item.recent}
                    featured={item.featured}
                    position={item.position}
                    role={item.role}
                    postedAt={item.postedAt}
                    location={item.location}
                    contract={item.contract}
                    languages={item.languages}
                    level={item.level}
                    tools={item.tools}
                    new={item.new}
                />
            </div>

            <div className="right">
                {keywords.map((key,index) => {
                    return (
                        <div className="key" key={index}>
                            <button className='key-btn' onClick={()=>addFilter(key)} >  
                                {key}
                            </button>
                            
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Job