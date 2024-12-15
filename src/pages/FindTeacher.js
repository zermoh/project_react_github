import {useState,useEffect} from 'react';
const FindTeacher = () => {

   useEffect(() => {
          handleSubmit();
      },[]);
    const[data,setData]=useState([]);
    let[list,setList]=useState("");

    const handleSubmit = async() =>{
        console.log("==================2");
        const response = await fetch ("http://widenskills.mywebcommunity.org/React/TestList.php");
       /*  console.log(response);
                
            const data = await response.json();
            for (let i=0;i<data.length;i++){
                console.log(data[i].name);
            }
            setData(data); */
        }   
        return (

       
                <>
                <p>Hello</p>
               </> 
           );
         };
       
         export default FindTeacher;
       