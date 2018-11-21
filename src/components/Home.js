import React, {PureComponent} from 'react'

class Home extends PureComponent{
  state = {
    query: '',
    select1:null
  }
  handleInputChange = () => {
    this.setState({
      query: this.search.value,
    })
     const url =`https://raw.githubusercontent.com/Benman2005/bijenkorf/noselect/api/_search.get.json`
     if(this.search.value && this.search.value.length >1){fetch(url, { method: 'GET' })
     .then(res => res.text())
     .then(data => JSON.parse(data))
     .then(result => result.suggestions.filter(one => one.searchterm.includes(this.search.value)))
     .then(truien => this.setState({truien: truien}))
     .catch(err=>console.log(err))    
    }
  }
  componentDidMount(){
    this.search.focus()
    const url =`https://raw.githubusercontent.com/Benman2005/bijenkorf/noselect/api/_search.get.json`
    fetch(url, { method: 'GET' })
    .then(res => res.text())
    .then(data => JSON.parse(data))
    .then(result => this.setState({truien2: result.suggestions.map(trui=> trui.searchterm)}))
    .catch(err=>console.log(err))    
  } 
  handleChange = select1 => {
    this.setState({select1})
  }
  render(){
    let truien = null
    let truien2 = null
    if(this.state.truien) truien = this.state.truien.map(trui=>`${trui.searchterm} (${trui.nrResults})`)
    if(this.state.truien2) truien2 = this.state.truien2.map(trui=>`${trui}`)
    return(
      <div>
      {console.log(truien)}
        <h1>Hi, folks</h1>
        <form>
          <input
            placeholder="Search for..."
            ref={input => this.search = input}
            onChange={this.handleInputChange}
          />
          <table>
            <tbody>
              {truien && truien.map(trui=>{return <tr key={trui}><td>{trui}</td></tr>})}
            </tbody>
          </table>
          {/* <p>{this.state.query}</p> */}
        </form>
        <input list="truien" />
        <datalist id="truien">
          {truien2 && truien2.map(trui=>{return <option key={trui} value={trui}></option>})}
        </datalist>
      </div>
    )
  }
}

export default Home