import React, {PureComponent} from 'react'
import Select from 'react-select'

class Home extends PureComponent{
  state = {
    select1:null
  }
  componentDidMount(){
    const url =`https://raw.githubusercontent.com/Benman2005/bijenkorf/noselect/api/_search.get.json`
    fetch(url, { method: 'GET' })
    .then(res => res.text())
    // .then(res => console.log(res))
    .then(data => JSON.parse(data))
    .then(result => this.setState({truien: result.suggestions.map(trui=> `${trui.searchterm} ( ${trui.nrResults} )`)}))
  } 
  handleChange = select1 => {
    this.setState({select1})
  }
  render(){
    const { select1} = this.state;
    let truien = null
    if(this.state.truien) truien = this.state.truien.map(trui=>{return {value:trui, label: trui}})
    const customStyles = {
      control: () => ({
        width: "80vmin",
        border: '2px solid black'
      })
    }
    return(
      <div>
      {/* {console.log(this.state.truien)} */}
        <h1>Hi, folks</h1>
        {truien && <Select styles={customStyles} value={select1} onChange={this.handleChange} options={truien}></Select>}
      </div>
    )
  }
}

export default Home