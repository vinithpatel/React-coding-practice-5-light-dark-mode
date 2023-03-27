import {Component} from 'react'
import './index.css'

class LightDarkMode extends Component {
  state = {isDarkMode: true}

  onClickDarkMode = () => this.setState({isDarkMode: true})

  onClickLightMode = () => this.setState({isDarkMode: false})

  render() {
    const {isDarkMode} = this.state
    const className = isDarkMode ? 'dark-mode' : 'light-mode'

    return (
      <div className="bg-container">
        <div className={`mode-container ${className}`}>
          <h1 className={`heading ${className}`}>Click To Change Mode</h1>
          {isDarkMode && (
            <button
              className="mode-button"
              type="button"
              onClick={this.onClickLightMode}
            >
              Light Mode
            </button>
          )}
          {!isDarkMode && (
            <button
              className="mode-button"
              type="button"
              onClick={this.onClickDarkMode}
            >
              Dark Mode
            </button>
          )}
        </div>
      </div>
    )
  }
}

export default LightDarkMode
