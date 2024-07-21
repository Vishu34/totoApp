import React, { useEffect, useState } from "react";
import { IoIosAlert } from "react-icons/io";

import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import { MdAdd } from "react-icons/md";

import { FaAngleDown, FaStar } from "react-icons/fa";
import { IoNotificationsOutline } from "react-icons/io5";
import { IoRepeat } from "react-icons/io5";
import { FaBook } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { MdEdit } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { addtodoData, edittodoData , deleteTask , addCheckData , removeCheckData} from "./redux/TodoSlice";
import { UseshowLastCol } from "./Context/ShowLastProvider";
import { CiStar } from "react-icons/ci";



export const MidColumn = () => {

  const {listData, settodoData}= UseshowLastCol();

  const mode = useSelector((state) => state.togglemode.value);



  const dispatch=useDispatch();

  const todos=useSelector((state=>state.todo.todos))

  const completedTask=useSelector((state=>state.todo.completetask));

  console.log(completedTask)
  console.log(todos)

  const [addTask, setTask] = useState(false);

  const [editTask, seteditTask] = useState(" ");

  const [inputTask, setinputTask] = useState(" ");
  const [inputTask1, setinputTask1] = useState(" ");

  const handleInput = (e) => {
    setinputTask1(e.target.value)
    setinputTask(e.target.value);
    console.log(e.target.value);
  };

  const addTodoTask = (event) => {
    event.preventDefault();

    if(inputTask ===" " || inputTask1===" "){
      alert("task is empty enter value");
    }else{
      setTask(false);
      setinputTask(" ");
      setinputTask1(" ");
      
      dispatch(addtodoData(inputTask))
      alert("Task added successfully");

// setTimeout(() => {
//   window.location.reload();
// }, 1000);

    }

  };

  console.log(editTask)


  // edit the task 

  const editTodoTask = (event) => {
    event.preventDefault();


    if(inputTask ===" " || inputTask1===" "){
      alert("task is empty enter value");
    }else{
      dispatch(edittodoData({editTask ,inputTask1}))
      seteditTask(" ");
      setinputTask(" ");
      setinputTask1(" ");
      
     

      
      alert("Task edited successfully");

     
    }
  }


    
  


  useEffect(()=>{

    if (todos.length > 0) {
      localStorage.setItem("todoData", JSON.stringify(todos));
    }

    if (completedTask.length > 0) {
      localStorage.setItem("CompletedData", JSON.stringify(todos));
    }
   
  },[todos , completedTask]);



  // delete the task from the list


    const handleDelete=(id)=>{

      dispatch(deleteTask(id));

   
     
      // const data = todos.filter(elm=>elm.id===id);
      // if(!data){
        alert("task deleted succeffulyy")
      // }

    }
   



    const [checked , setchecked]=useState();

  // handle cheack

  

  const handleCheck=(id)=>(event)=>{
    event.preventDefault();
    console.log(event.target.checked , id)
    const checked= event.target.checked;
    setchecked(event.target.checked);
    dispatch(addCheckData({checked , id}))
  };


  const [checked1 , setchecked1]=useState(false);

  const handleCheck1=(id)=>(event)=>{
    event.preventDefault();
    console.log(event.target.checked , id)
    
    setchecked1(event.target.checked);
    dispatch(removeCheckData({checked , id}))
  };


  



// get the todolist data 


const [CompleteData, settodoData1]=useState([]);

useEffect(()=>{


  const data=localStorage.getItem("todoData");
  if(data){
    settodoData(JSON.parse(data));
  }
},[todos ]);

console.log(listData)

// get teh completeed data


useEffect(()=>{


  const data=localStorage.getItem("todoData");
  if(data){
    settodoData(JSON.parse(data));
  }

  const data1=localStorage.getItem("CompletedData");
  if(data1){
    settodoData1(JSON.parse(data));
  }
},[todos , completedTask
 ]);

console.log(listData )
console.log(CompleteData)




// show last column by clicking particular data


const {showCol , setCol , ColId,
  setId}=UseshowLastCol();

const showLastcol=(id)=>{
console.log(id)
setId(id);
setCol(true)
}

console.log(showCol)

  return (
    <>
      <section className={`space-y-4 
      ${ mode ==="dark-mode" ? "mid-column1" : "mid-column" } 
       ${ showCol ? "mid-column-width" : "mid-column-width1"}`}>
        <div className="">
          <div className="">
            <p className=
            {`flex gap-1 items-center  ${ mode ==="dark-mode" ? "todo" : "" } `}
            >
              Todo <FaAngleDown />
            </p>
          </div>
        </div>

        <div className=
        {`space-y-4 border-b-2 pb-5 ${ mode ==="dark-mode" ? "Add-box1" : "Add-box" }`}
        >
          <div className="">
            <h1 className="text-left"> Add a Task</h1>
          </div>

          {/* ***********Add task************ */}

          <ul className="pt-5 flex justify-between items-center">
            <li className="flex gap-3">
              {" "}
              <IoNotificationsOutline className="icon" />
              <IoRepeat className="icon" />
              <FaBook className="icon" />
            </li>

            <li className=
            

            {`  ${ mode ==="dark-mode" ? "add-task1" : "add-task" }`}
            onClick={() => setTask(true)}>
              Add Taks
            </li>
          </ul>
        </div>

        {/* **************All task list*************** */}

        <div className="">
          <div className="space-y-1">
           {
            listData?.map(elm=>{
              return(
                <React.Fragment key={elm.id}>
                <ul className=

{`cursor-pointer  ${ mode ==="dark-mode" ? "all-list1" : "all-list" }`}
                >
              <li className="flex items-center">
                <input type="checkbox" onChange={handleCheck(elm.id)}/>
                <ListItem>{elm.task}</ListItem>
              </li>

              <li className="gap-5 flex items-center">
                <MdEdit className="Edit icon" onClick={()=>seteditTask(elm.id)}/>
                <MdDelete className="Delete icon" onClick={()=>handleDelete(elm.id)}/>
                <CiStar className="icon" onClick={()=>showLastcol(elm.id)}/>
              </li>
            </ul>
                </React.Fragment>   
              )
            })
           }

           
          </div>
        </div>

        {/* *************Completed ************* */}

        <div className="">
          <h1 className="text-left">Completed</h1>
          <div className="">
           
           {
            completedTask?.map(elm=>{
              return(
                <React.Fragment key={elm.id}>
                <ul className=
                {`cursor-pointer  ${ mode ==="dark-mode" ? "all-list1" : "all-list" }`}

                >
              <li className="flex items-center">
                <input type="checkbox"  checked={elm.checked ? elm.checked: checked1}
                  onChange={handleCheck1(elm.id)}
                />
                <ListItem><strike>{elm.task}</strike></ListItem>
              </li>

              
            </ul>
                </React.Fragment>
              )
            })
           }
          </div>
        </div>

        {/* *****************Add taks in list ************* */}

        {addTask ? (
          <>
            <div className="">
              <form
                className=

                {`Add-box2 p-5 rounded-sm space-y-5 z-50 ${ mode ==="dark-mode" ? "Add-box1" : "Add-box" }`}
                onSubmit={addTodoTask}
              >
                <input
                  type="text"
                  value={inputTask}
                  onChange={handleInput}
                  placeholder="add task"

                  className=" border-2 border-slate-300 w-[100%] rounded-sm p-2 text-black"
                />
                <ul className="flex justify-between ">
                  <li className=
                  
                  {`cursor-pointer  ${ mode ==="dark-mode" ? "add-task1" : "add-task" }`}

                  >
                    <button type="submit">Add Taks</button>
                  </li>
                  <li className=
                  
                  {`cursor-pointer  ${ mode ==="dark-mode" ? "add-task1" : "add-task" }`}>
                    <button type="reset" onClick={() => setTask(false)}>
                      Cancel
                    </button>
                  </li>
                </ul>
              </form>
            </div>
          </>
        ) : null}

        {/* **********Edit the task in list************ */}

        {editTask !== " " ? (
          <>
            <div className="">
              <form className=

{`Add-box2 p-5 rounded-sm space-y-5  ${ mode ==="dark-mode" ? "Add-box1" : "Add-box" }`}
              onSubmit={editTodoTask}>
              <input
                  type="text"
                  value={inputTask1}
                  onChange={handleInput}
                  placeholder="add task"
                  className=" border-2 border-slate-300 w-[100%] rounded-sm p-2 text-black"
                />
                <ul className="flex justify-between ">
                  <li className=
                  {`cursor-pointer  ${ mode ==="dark-mode" ? "add-task1" : "add-task" }`}>
                  
                    <button type="submit" >Edit Taks</button>
                  </li>
                  <li className=
                  {`cursor-pointer  ${ mode ==="dark-mode" ? "add-task1" : "add-task" }`}>
                  
                    <button type="reset" onClick={() => seteditTask(" ")}>
                      Cancel
                    </button>
                  </li>
                </ul>
              </form>
            </div>
          </>
        ) : null}
      </section>
    </>
  );
}
