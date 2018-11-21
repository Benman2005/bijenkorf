import React, {PureComponent} from 'react'
import Select from 'react-select'

class Home extends PureComponent{
  state = {
    query: '',
    select1:null

  }

  handleInputChange = () => {
    this.setState({
      query: this.search.value,
    })
     const url =`https://raw.githubusercontent.com/Benman2005/frontend-dev-assignment/master/api/_search.get.json`
     fetch(url, { method: 'GET' })
     .then(res => res.text())
     .then(data => JSON.parse(data))
     .then(result => result.suggestions.filter(one => one.searchterm.includes(this.state.query)))
     .then(truien => this.setState({truien: truien}))
     .then(console.log(this.state.truien))
     .then(final=> console.log(final))
  }
  componentDidMount(){
    // const url =`http://localhost:3000/search\?q\=${this.state.query}`
    const url =`https://raw.githubusercontent.com/Benman2005/frontend-dev-assignment/master/api/_search.get.json`
    // const url =`../../api/_search.get.json` 
    fetch(url, { method: 'GET' })
    .then(res => res.text())
    .then(data => JSON.parse(data))
    .then(result => this.setState({truien: result.suggestions.map(trui=> trui.searchterm)}))
  } 

  handleChange = select1 => {
    this.setState({select1})
  }

  render(){
    const { select1} = this.state;
    let truien = null
    if(this.state.truien) truien = this.state.truien.map(trui=>{return {value:trui, label: trui}})
    return(
      <div>
      {console.log(this.state.truien)}
      {/* {truien && console.log(truien)} */}
        <h1>Hi, folks</h1>
        {truien && <Select value={select1} onChange={this.handleChange} options={truien}></Select>}

        <form>
          <input
            placeholder="Search for..."
            ref={input => this.search = input}
            onChange={this.handleInputChange}
          />
          <p>{this.state.query}</p>
        </form>
      </div>
    )
  }

}

export default Home