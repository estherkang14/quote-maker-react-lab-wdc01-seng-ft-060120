import React, { Component } from 'react';
import { connect } from 'react-redux';
import QuoteCard from '../components/QuoteCard';
import { removeQuote, upvoteQuote, downvoteQuote } from '../actions/quotes'; 

class Quotes extends Component {

  render() {
    const { quotes, removeQuote, upvoteQuote, downvoteQuote } = this.props 
      // we did this ^ otherwise we would have to keep writing 'this.props.quotes' or
      // 'this.props.removeQuote' 'this.props.upvoteQuote' 
      // and quotes comes from mapStateToProps 

    return (
      <div>
        <hr />
        <div className="row justify-content-center">
          <h2>Quotes</h2>
        </div>
        <hr />
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              {/* rendering each quote from mapStateToProps-quotes
              and using QuoteCard component for each and passing the quote + 
              dispatch actions/functions */}
              {quotes.map(quote => <QuoteCard key={quote.id}
              upvoteQuote={upvoteQuote}
              downvoteQuote={downvoteQuote}
              removeQuote={removeQuote}
              quote={quote}
              />)}

            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { quotes: state.quotes }
}

//add arguments to connect as needed
export default connect(mapStateToProps, { removeQuote, upvoteQuote, downvoteQuote })(Quotes);
