import React from 'react'
import { useGlobalContext } from '../context'
import times from '../images/icon-remove.png'
const Filter = () => {
    const { filters ,deleteFilter,clearAllFilters} = useGlobalContext();
    return (
        <div className='filter-wrapper'>
            { filters.length > 0 &&  
                <div className="filter-container">
                    <div className="filter-btns">
                        {filters.map((filter,index) => {
                            return (
                                <div className="filter-btn" key={index} >
                                    <span>
                                        {filter}
                                    </span>
                                    <div className="remove" onClick={()=>deleteFilter(filter)}>
                                        <img src={times} alt="remove" />
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                    <button className="clear" onClick={clearAllFilters}>clear</button>
                </div>
            }
        </div>
    )
}

export default Filter