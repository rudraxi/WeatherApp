class weatherAll extends Component {
    render() {
        return (
          <div className="weatherAll">
            <MessagesContainer messages={this.state.messages}/>
            <div className="bottom_wrapper clearfix">
              <City/>
            </div>
          </div>
        );
      }
    }