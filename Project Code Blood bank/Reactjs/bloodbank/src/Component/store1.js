import { createStore } from "@reduxjs/toolkit";
import reducer1 from "./reducer1";


const initialSt={loggedin:false};
const mystore1=createStore(reducer1,initialSt)
