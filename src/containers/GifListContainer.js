import React, {Component} from 'react'
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'

class GifListContainer extends Component{
    state = {
        data: []
    }
    getThree = (apiData) => {
        let gifs = []
        for(let i=0; i< apiData.length; i++){
           gifs.push(apiData[i]['images']['original']['url']) 
        }
        this.saveState(gifs)
        console.log(this.state.data)
    }

    saveState = (d) =>{
        this.setState({
            data: d
        })
    }

    submitSearch = (value) => {
        fetch(`https://api.giphy.com/v1/gifs/search?q=${value}&api_key=KeBEFS80JJDU8NAr3cVmIzxHSx0btt9V&limit=3`)
        .then(resp => resp.json())
        .then(json => this.getThree(json.data))
    }

    componentDidMount(){
        this.submitSearch()
    }

    render(){
        return(
            <div>
                <GifList gifs={this.state.data}/>
                <GifSearch submitSearch={this.submitSearch} />
            </div>
        )
    }
}

export default GifListContainer