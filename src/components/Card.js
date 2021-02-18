import React from 'react'

function Card({data, isLoading}) {

    console.log(data, isLoading)

    return (
        <div>
            {
                isLoading ? <h2>Loading...</h2> : 
                <div>
                    {data[0].map(item => {
                        return (
                            <div key={item.id}>
                                {item.title}
                                <img src={item.images.downsized.url} width="150px" />
                            </div>
                        )
                    })}
                </div>
            }
            
        </div>
    )
}

export default Card
