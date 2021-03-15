import React from 'react';
import axios from 'axios';

const CollegeDetails = (props) =>{
    const uri = 'http://localhost:5000/colleges/'+props.chk;
    var name='';
    console.log("URI = "+uri);
    axios.get(uri)
    .then(function (response) {
      // handle success
      name=response.data.name;
      // console.log("name="+response.data.name);
      
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    .then(function () {
      // always executed
      
    });

    return(
        <>
            <p>
                {/* {uri} */}
                {/* {name}  */}
                {/* {props.CID}
                {props.name} */}
            </p>
        </>

    )
}

export default CollegeDetails;