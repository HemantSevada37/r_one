// ................
import React, { Component } from 'react'

export default class Nov22ErrorBoundry extends Component {
    constructor(props){
        super(props)
        this.state = {
            error:null,
            errorInfo:null
        }
    }
    componentDidCatch(error,Info){
        this.setState({
            error : error,
            errorInfo : Info,
        })
    }
  render() {
    if(this.state.errorInfo){
        return(
            <div>
                <h2>An error has occured</h2>
                <h1>
                    {this.state.error && this.state.error.toString()}
                    {this.state.errorInfo.componentStack}
                </h1>
            </div>
        )
    }
    return this.props.children
    
  }
}
