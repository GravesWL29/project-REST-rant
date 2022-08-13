const req = require('express/lib/request')
const React = require('react')
const places = require('../../models/places')
const Def = require('../default')

function new_comment (data) {
    console.log(data)

    return (
        <Def>
          <main>
            <h1>Add a New Comment</h1>
            <form method="POST" action={`/places/${places.id}/rant`}>
                <div className="form-group">
                    <label htmlFor="author">Your Name</label>
                    <input className="form-control" id="author" name="author" required />
                </div>
                <div className="form-group">
                    <label htmlFor="content">Content</label>
                    <input className="form-control" id="content" name="content" />
                </div>
                <div className="form-group">
                    <label htmlFor="stars">Star Rating</label>
                    <input type="range" id="stars" name="stars"  min="0" max="5"/>
                </div>
                <div className="form-group">
                    <label htmlFor="rant">Rant </label>
                    <input type="checkbox" id="rant" name="rant" />
                </div>
                <input className="btn btn-primary" type="submit" value="Make Comment" />
            </form>
          </main>
        </Def>
    )
}

module.exports = new_comment