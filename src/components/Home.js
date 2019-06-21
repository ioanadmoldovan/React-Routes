import React, { Component } from 'react';
import axios from 'axios';

class Home extends Component {

    // need a state to output the data
    state = {
        posts: [ ]
    } 

    componentDidMount() {
        axios.get( 'https://jsonplaceholder.typicode.com/posts' )  // gets the data, returns a promise
            .then( res => {
                console.log( res );
                this.setState({
                    posts: res.data.slice( 0,10 ) 
                    // don't want to fetch all the objects in the res, so we slice it to get the firs 10
                })
            })
    }
    render() {
        const { posts } = this.state;
        const postList = posts => {
            // check to see if we have fetched the data
            if (posts.length > 0) {
                posts.map( ( post ) => {
                    return(
                        <div className="post card" key={ post.id }> {/* the objs in the response have an id*/}
                            <div className="card-content">
                                <span className="card-title">{ post.title }</span>
                                <p>{ post.body }</p>
                            </div>
                        </div>
                    )
                }
            } else {
                return (
                    <div className='center'> No posts yet </div>
                )
            }
        }
        return(
            <div className="container">
                <h3 className="center"> Home </h3>
                <p> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus iusto consequatur temporibus rerum eligendi cumque expedita commodi, non nisi suscipit obcaecati eius, provident ex nobis. Maxime sequi reiciendis quasi inventore.</p>
            </div>   
        )
    }
}


export default Home;