import React, { Component } from 'react'

export class NewsItems extends Component {
    render() {
        let {title,description,imageUrl,newsUrl}=this.props
        return (
            <div>

                <div className="card" style={{width: "18 rem"}}>
                    <img src={imageUrl} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{description}</p>
                        <a href={newsUrl} target="_blank" className="btn btn-primary">Read More</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default NewsItems
