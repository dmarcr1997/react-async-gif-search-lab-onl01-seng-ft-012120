import React, {Component} from 'react'

export default class GifSearch extends Component{
    state = {
        search: "any"
    }

    handleChange = event =>{
        event.persist();
        this.setState({
           search: event.target.value 
        })
    }

    submit = event =>{
        event.preventDefault()
        this.props.submitSearch(this.state.search)
    }
    render(){
        return(
            <form onSubmit={this.submit}>
                <button type='submit'>Search</button>
                <input type="text" id="gif-name" value={this.state.search} onChange={this.handleChange}></input>
            </form>
        )
    }
} 