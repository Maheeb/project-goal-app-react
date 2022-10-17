import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import {Alert, Col, Container, ListGroup, Row} from "react-bootstrap";
import {useState} from "react";
import CloseButton from 'react-bootstrap/CloseButton';

// let goals = props.goalList
const GoalList = (props) => {

    let addedGoals = props.goalList;

    let removeGoal = (event) => {
        let id = event.target.id;
        props.deleteItem(id);
    }

    return (
        <div>
            <Container>
                <Row>
                    <Col lg={12}>
                        <div className={'d-flex justify-content-center mt-5'}>
                            {addedGoals.length > 0 &&
                                <ListGroup>
                                    {
                                        addedGoals.map((value, index) =>
                                            <ListGroup.Item variant={'success'}
                                                            style={{width: '643px', marginBottom: "7px"}} key={index}
                                                            id={value} >
                                                {value}
                                                <CloseButton  style={{float:"right"}}  onClick={removeGoal} key={index}
                                                              id={value}/>
                                            </ListGroup.Item>
                                        )
                                    }
                                </ListGroup>
                            }

                        </div>
                    </Col>
                </Row>
            </Container>

        </div>
    )


}

export default GoalList;

