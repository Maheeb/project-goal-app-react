import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import {Col, Container, Row} from "react-bootstrap";
import {useState} from "react";
import '../css/styles.css';




const styles = {
    invalid: {
        border: "1px solid red"

    }

};



const GoalForm = (props) => {
    const [goal,updateGoal] = useState("");
    const[color, setColor] = useState('');
    const getCourseGoals=(e)=>{

       updateGoal(e.target.value);
    }

    const GoalSubmit = (event) =>
    {

            event.preventDefault();
            const goals = {
                goal: goal
            }

            if (goals.goal !== '') {
                // alert('dsad')
                props.parentCallback(goals);
            }
            else
            {
                // emptyItem();

                setColor('invalid');

                // alert('Please input your project goal !!')
            }
        // props.parentCallback(goals);


        // let emptyItem =() =>{
        //   return   this.setState({
        //         inputClass: styles.invalid
        //     })
        // }



    }

    return (
        <div>


            <Container>
                <Row>
                    <Col lg={12}>
                        <div className={'d-flex justify-content-center mt-2'}>

                        <Card style={{width: '40rem'}} >

                            <Card.Body>
                                <Card.Title>Project Goal</Card.Title>
                                <Form action={""} onSubmit={GoalSubmit}>
                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Control type="text" placeholder="Enter Goal" name="name" onChange={getCourseGoals} className={color}/>

                                    </Form.Group>

                                    <Button variant="danger" type="submit" >
                                        Add Goal
                                    </Button>
                                </Form>
                            </Card.Body>
                        </Card>
                        </div>
                    </Col>
                </Row>
            </Container>

        </div>
    )


}

export default GoalForm;

