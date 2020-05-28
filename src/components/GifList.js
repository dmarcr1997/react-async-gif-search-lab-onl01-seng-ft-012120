import React, {Component} from 'react'
class GifList extends Component{
    renderList(){
        return(
            <ul>
                {this.props.gifs.map(gif => <li><img key={gif} src={gif} alt="gif"/></li>)}
            </ul>
        )
    }

    render(){
        return(
            <div>
                {this.renderList()}
            </div>
        )
    }
}


export default GifList