import React from 'react'

const Details = ({company,
                recent,
                featured,
                position,
                role,
                postedAt,
                location,
                contract,
                languages,
                level,
                tools,
                }) => {
    return (
        <div className="details">
            <div className="company-info">
                <p className="name">
                    {company}
                </p>
                <span className={`${recent? "recent" : ""}`}>
                    {recent ? "new" : ""}
                </span>
                <span className={`${featured? "featured" : ""}`}>
                    {featured ? "featured" : ""}
                </span>
            </div>
            <div className="job-name">
                {position}
            </div>
            <div className="job-info">
                <small className="posted">
                    {postedAt} -
                </small>
                <small className="type">
                    {contract} -
                </small>
                <small className='location'>
                    {location}
                </small>
            </div>
        </div>
    )
}

export default Details