import {useState,useEffect} from 'react';
const ListOfTeachers = () => {

   useEffect(() => {
          handleSubmit();
      },[]);
    const[data,setData]=useState([]);
    let[list,setList]=useState("");

    const handleSubmit = async() =>{
        console.log("==================2");
            const response = await fetch (
                 "widenskills.mywebcommunity.org/React/ManageTeacher.php",
                {
                    method:"POST",
                    headers : {
                        "Content-type":"application/json",
                    },
                    body : JSON.stringify({
                        operation: "list",
                    }),
                }
            );
            const data = await response.json();
            for (let i=0;i<data.length;i++){
                console.log(data[i].name);
            }
            setData(data);
        }   
        return (

       
                <>
                <table border='4'>
                <tr><th>Teacher id</th><th>Name</th><th>Phone</th><th>Email</th></tr>   
                {data.map(teacher=>(
                   <tr><td>{teacher.teacherid}</td><td>{teacher.name}</td>
                   <td>{teacher.phone}</td><td>{teacher.email}</td>
                   </tr>  
               ))}
               </table> 
               </> 
           );
         };
       
         export default ListOfTeachers;
       