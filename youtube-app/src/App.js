import React, { Component } from 'react';
import axios from 'axios';
import Frame from './components/frame';
import Thumbnails from './components/thumbnails';
import Searchbar from './components/searchbar';
import './App.css';

const ROOT_URL = 'https://www.googleapis.com/youtube/v3/search';
const API_KEY = 'AIzaSyCP1Tn01JZW-IC3H6ayD1_8RVeLMkV_Iz8';

class App extends Component {
  state={
    params: {
      part: 'snippet',
      key: API_KEY,
      q: 'PewDiePie',
      type: 'video'
    },
    selectedVid: null,
    videos: [],
    searchText: ''
  }


  constructor(props) {
    super(props);
    console.log('Constructor init');
  }

  componentDidMount(){
    //axios.get(`${ROOT_URL}?part=snippet&key=${API_KEY}&q=tank&type=video`)
    //axios.get(`https://jsonplaceholder.typicode.com/todos/1`)
    //axios.get(ROOT_URL + '?part=snippet&key=' + API_KEY + '&q=dog&type=video')
    this.sendRequest (this.state.params)
  }

  render() {
    return (
      <div className="App">
      <table><tbody><tr>
        <td>
          <Searchbar 
          search={this.videoSearch}
          handleInputChange={this.handleInputChange}
          handleSubmission={this.handleSubmission}
          />
        </td>
       <td> 
         <Frame video={this.state.selectedVid}/>
      </td>
        <td>
        {
          this.state.videos.map(element => 
          <Thumbnails video={element}
          changeVideo={this.changeVideo.bind(this)}
          key={element.id.videoId}
          /> )
        }
        </td>
        </tr></tbody></table>
      </div>
    );
  }
  changeVideo(video){
      this.setState({
        selectedVid: video 
      });
    }
  handleInputChange = (event) => {
    this.setState({
      searchText: event.target.value
    })
  }
  handleSubmission = () =>{
    const params = Object.assign({},this.state.params);
    params.q = this.state.searchText;
    this.sendRequest(params)
    /*this.setState({
      params: params
    }, this.sendRequest(params));*/
  }

  sendRequest = (parameters) => {
    axios.get(ROOT_URL, { params: parameters })
    .then(response => {
      console.log(response.data)
      this.setState({
        selectedVid: response.data.items[0],
        videos: response.data.items
      })
    })
    .catch(err => console.log(err))
  }
}

export default App;
