


//data render krne wala example...................................................................................
import React, { Component } from 'react'

export default class Nov15Child1 extends Component {
  render() {
    let {title, desscription, imageUrl, newsUrl} = this.props;
    console.log(imageUrl);
    return (
      <div>
        <div className='card' style={{ width: "18rem"}}>
            <img src={imageUrl} className="card-img-top" />
            <div className='card-body'>
                <h5 className='card-title'>{title}</h5>
                <p className='card-text'>{desscription}</p>
                <a href={newsUrl} className='btn btn-primary'>Read More</a>
            </div>

        </div>
      </div>
    )
  }
}



// Example of Hook useCallback.........................................................................
// import React, { memo } from 'react'

// function Nov15Child1({fun}) {
//     console.log("child is rendering")
//   return (
//     <div>
//       Child Element
//     </div>
//   )
// }
// export default memo(Nov15Child1) 