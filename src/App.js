import logo from './logo.svg';
import './App.css';

import GoalForm from "./components/GoalForm";
import GoalList from "./components/GoalList";
import {useState} from "react";

function App() {
    const [goalList, updateGoal] = useState("");
    const getGoals = (value) => {

        updateGoal((prevGoal) => {
            return [value.goal, ...prevGoal]
        })

    }

    const remainingGoals = (value) => {
        let deleteItem = goalList.filter(item => item !== value);
        updateGoal(deleteItem);
    }


    return (
        <div>
            <GoalForm parentCallback={getGoals}></GoalForm>
            <GoalList goalList={goalList} deleteItem={remainingGoals}></GoalList>
        </div>
    );
}

export default App;
