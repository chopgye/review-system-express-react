import React from "react";

const RestaurantList  = () => {
    return (
      <div class="list-group">
           
           <table class="table table-striped table-hover .thead-dark">
            <thead>
                <tr>
                <th scope="col">#</th>
                <th scope="col">Restaurant</th>
                <th scope="col">Location</th>
                <th scope="col">Price Range</th>
                <th scope="col">Ratings</th>
                <th scope="col">Edit</th>
                <th scope="col">Delete</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th scope="row">1</th>
                    <td>McDonalds</td>
                    <td>New York</td>
                    <td>$$</td>
                    <td>Rating</td>
                    <td><div class="button btn btn-warning">Update</div></td>
                    <td><div class="button btn btn-danger">Delete</div></td>
                </tr>
                <tr>
                    <th scope="row">2</th>
                    <td>Wendys</td>
                    <td>New York</td>
                    <td>$</td>
                    <td>Rating</td>
                    <td><div class="button btn btn-warning">Update</div></td>
                    <td><div class="button btn btn-danger">Delete</div></td>
                </tr>
                <tr>
                    <th scope="row">3</th>
                    <td>Chattime</td>
                    <td>Toronto</td>
                    <td>$$</td>
                    <td>Rating</td>
                    <td><div class="button btn btn-warning">Update</div></td>
                    <td><div class="button btn btn-danger">Delete</div></td>
                </tr>
            </tbody>
        </table>




      </div>
    );
  };
  
  export default RestaurantList;