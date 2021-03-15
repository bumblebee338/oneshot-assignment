import React from 'react'
import axios from 'axios'
class InputColleges extends React.Component
{
    state = {
        name : '',
        yearoffounded: '',
        city:'',
        state:'',
        country:'',
        noofstudents:'',
        courses:''
    }
    handleChange = (e)=>{
        // console.log(e.target.name);
        // console.log(e.target.value);
        this.setState({[e.target.name]:e.target.value})
    }
    handleSubmit = ()=>{
            axios.post('http://localhost:5000/colleges',this.state)
            .then(res=>{
                console.log('successfully posted');
                this.setState({firstname:'',lastname:'',place:''});
            });
            window.location = '/';
           
    }
    render()
    {
        return(
            <div class="row text-center">
                <div class="col-md-4">
                    <form onSubmit={()=>this.handleSubmit()}>
                        <input name='name' onChange={(e)=>this.handleChange(e)}  value={this.state.name} style={{fontSize:'15px',marginLeft:'20px',marginTop:'20px'}} placeholder="Name"/>
                        <input name='yearoffounded' onChange={(e)=>this.handleChange(e)} value={this.state.yearoffounded} style={{fontSize:'15px',marginLeft:'20px',marginTop:'20px'}} placeholder="year of founded"/>
                        <input name='city' onChange={(e)=>this.handleChange(e)} value={this.state.city} style={{fontSize:'15px',marginLeft:'20px',marginTop:'20px'}} placeholder="city"/>
                        <input name='state' onChange={(e)=>this.handleChange(e)} value={this.state.state} style={{fontSize:'15px',marginLeft:'20px',marginTop:'20px'}} placeholder="state"/>
                        <input name='country' onChange={(e)=>this.handleChange(e)} value={this.state.country} style={{fontSize:'15px',marginLeft:'20px',marginTop:'20px'}} placeholder="country"/>
                        <input name='noofstudents' onChange={(e)=>this.handleChange(e)} value={this.state.noofstudents} style={{fontSize:'15px',marginLeft:'20px',marginTop:'20px'}} placeholder="no of students"/>
                        <input name='courses' onChange={(e)=>this.handleChange(e)} value={this.state.courses} style={{fontSize:'15px',marginLeft:'20px',marginTop:'20px'}} placeholder="courses"/>

                        <button style={{fontSize:'19px',outline:'none',color:'white',backgroundColor:'#000066',marginLeft:'20px',marginTop:'20px'}} class="btn">Add College</button>
                    </form>
                </div>
                <div class="col-md-8">
                    {/* <img src={team}/> */}
                </div>
            </div>
        );
    }
}
export default InputColleges;