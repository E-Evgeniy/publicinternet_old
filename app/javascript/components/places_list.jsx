import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";

function PlacesList() {
    const [loading, setloading] = useState(true)
    const [loadedPlaces, setLoadedPlaces] = useState([])

    useEffect(() => {
        //Hit the server and get the places

        const apiEndpoint = "/api/places"

        fetch(apiEndpoint)
          .then(response => response.json())
          .then(data => {
                  console.log(data)
                  setLoadedPlaces(data["places"])
                  setloading(false)}
                );
    }, [])

    const loadingSection = (<div>Loading...</div>)
    const dataSection = loadedPlaces.map((place, index) =>
      <div key= {index}>
        <table>
          <tr>
            <th>Name</th>
            <th>City</th>
            <th>Recent Upload Speed</th>
            <th>Recent Upload Units</th>
            <th>Number ofmeasurements</th>
          </tr>
          <tr>
            <td> {place.name} </td>
            <td> {place.city} </td>
            <td> {place.most_recent_download_speed} </td>
            <td> {place.most_recent_speed_units} </td>
            <td> {place.number_of_measurement} </td>
          </tr>
        </table>
      </div>
    )

    if (loading) {
        return loadingSection
    } else {
        return dataSection
    }
}

// Add some javascript to replace the div where = 'places-list-container'
// with com=ntent render above

const placesList = ReactDOM.createRoot(document.getElementById("places-list-container"));
placesList.render(<PlacesList />);