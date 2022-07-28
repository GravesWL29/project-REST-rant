const React = require('react')
const Def = require('../default')

function show (data) {
    return (
        <Def>
          <main>
            <h1>{ data.place.name }</h1>
            <img src={data.place.pic} alt={data.place.name} width="400" height="400"/>
            <h2>Description</h2>
            <p>Located in {data.place.city},{data.place.state}<br></br> and they serve {data.place.cuisines}!</p>
            
          </main>
          <body>
            <img>{data.place.placePicture}</img>
            <h2>Rating</h2>
            <p>Not Rated Yet</p>
            <h2>Comments</h2>
            <p>No comments yet</p>
            <a href={`/places/${data.id}/edit`} className="btn btn-warning"> 
            Edit
            </a>     

            <form method="POST" action={`/places/${data.id}?_method=DELETE`}> 
            <button type="submit" className="btn btn-danger">
            Delete
            </button>
            </form> 

          </body>
        </Def>
    )
}

module.exports = show
