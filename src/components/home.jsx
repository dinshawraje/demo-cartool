import React from 'react';

class Home extends React.Component {
  constructor() {
    super();
 
    this.state = {
      hits: [],
      isLoading: false,

    };
  }

  componentDidMount() {
    const apiUrl = 'http://localhost:8008/account/user/?username=rasingh2dd';
    fetch(apiUrl)
      .then((response) => response.json())
      .then(data => this.setState({ hits: data, isLoading: false }));
  }
  render() {
    const { hits, isLoading } = this.state;
 
    if (isLoading) {
      return <p>Loading ...</p>;
    }

  return (
    <div>
      <h3>my Component has Mounted, Check the browser{hits.username}  </h3>
    </div>
  );
  }
}
export default Home;
