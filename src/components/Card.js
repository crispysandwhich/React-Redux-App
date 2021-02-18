import React from 'react'

function Card({data, isLoading}) {
    return (
        <div>
            {
                isLoading ? <h2>Loading...</h2> : 
                <div className="card-section">
                    {data[0].map(item => {
                        return (
                            <div key={item.id} className="single-card">
                                <h4>{item.title}</h4>
                                <img src={item.images.downsized.url} />
                            </div>
                        )
                    })}
                </div>
            }
            
        </div>
    )
}

export default Card
