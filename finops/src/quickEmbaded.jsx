import React, { useEffect } from "react";
import { embedDashboard,QuickSightEmbedding } from 'amazon-quicksight-embedding-sdk';


export function QuickEmbeded(props){
    var dashboard;
   
    function onDashboardLoad(payload){
        console.log("Do something when the dashboard is fully loaded.");
    }

    function onError(payload){
        console.log("Do something when the dashboard fails loading");
    }

    function loadDashboard(){
        var containerDiv = document.getElementById("quickSightContainer");
        var options = {
            url: "https://us-west-2.quicksight.aws.amazon.com/sn/accounts/450746307223/dashboards/edf40bbd-435a-4249-aac9-e6d6c91129da?directory_alias=finops-quicksight-trukker",
            container: containerDiv,
            parameters: {
                country: "United States"
            },
            scrolling: "no",
            height: "100%",
            width: "100%",
            locale: "en-US",
            footerPaddingEnabled: true
        };
        dashboard = embedDashboard(options);
        dashboard.on("error", ()=>{onError});
        dashboard.on("load", ()=>{onDashboardLoad});
    }

    
    useEffect(() => {
        loadDashboard();
      }, []);

  return(
      <div id="quickSightContainer"></div>
  );  

} 
export default QuickEmbeded