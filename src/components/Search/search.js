import { performSearch, removeResults } from "../Util/doSearch.js";
import { placeappear } from "./placefetch.js";
 

export function mainsearchbar(){ //for search bar in main page, run this function when enter key is pressed
    removeResults()
    performSearch(document.getElementById("search-input"), "") //search for the input value
        .then((result) => {//if search is successful, show the results
          placeappear(result)//clicking on the result will show the details of the place
        })
        .catch((error) => {
          console.error("Error fetching search results:", error);
        });
  }
  
  
