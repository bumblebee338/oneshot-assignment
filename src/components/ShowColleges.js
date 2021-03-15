import React from 'react'
import axios from 'axios'
import CollegeDetails from "./CollegeDetails";

class ShowCollege extends React.Component
{
    state = {
        colleges : [],
        college_id:''
    }
    getcolleges = ()=>{
        axios.get('http://localhost:5000/')
        .then(res=>{
            //console.log(res);
            this.setState({colleges:res.data});
        })
    }
    componentDidMount = ()=>{
        this.getcolleges();
    }
    
    render()
    {
        return(
            <div style={{textAlign:'center',display:'flex', justifyContent:'center',alignItems:'center'}}>
                            <table style={{width:'100%', margin:'10px'}}>
                                <tbody>
                                <tr>
                                <th style={{border: '1px solid black'}}>Name</th>
                                <th style={{border: '1px solid black'}}>Year of Founded</th>
                                <th style={{border: '1px solid black'}}>City</th>
                                <th style={{border: '1px solid black'}}>State</th>
                                <th style={{border: '1px solid black'}}>Country</th>
                                <th style={{border: '1px solid black'}}>No of studen</th>
                                <th style={{border: '1px solid black'}}>Course</th>
                                <th style={{border: '1px solid black'}}></th>
                                </tr>
              {
                  this.state.colleges.map(college=>(
                      <tr key={college._id} class="card" >
                            <td style={{border: '1px solid black'}}>{college.name}</td>
                            <td style={{border: '1px solid black'}}>{college.yearoffounded}</td>
                            <td style={{border: '1px solid black'}}>{college.city}</td>
                            <td style={{border: '1px solid black'}}>{college.state}</td>
                            <td style={{border: '1px solid black'}}>{college.country}</td>
                            <td style={{border: '1px solid black'}}>{college.noofstudents}</td>
                            <td style={{border: '1px solid black'}}>{college.courses}</td>
                            <td style={{border: '1px solid black'}}> <button>View Details</button> </td>
                            <CollegeDetails CID={college._id} name={college.name}/>
                      </tr> 

                      
                  ))
              }
                                </tbody>
                            </table>
            </div>
        );
    }
}
export default ShowCollege;