import { Button, Col, Container, Row, Spinner } from "react-bootstrap";
import { useHistory, useParams } from "react-router";
import useFoodsData from "../../hooks/useFoodsData";
import './FootDetails.css'
import {MdAdd} from 'react-icons/md'
import {CgShoppingCart} from 'react-icons/cg'
import {GrFormSubtract} from 'react-icons/gr'
import { useEffect, useState } from "react";

const FootDetails = () => {
    const [displayFood ,setDisplayFood]=useState({})
    const [isLoading ,setIsloading]=useState(true)
    const [count,setCount]=useState(1);
    const {foodKey}=useParams()
    const {foods}=useFoodsData()
    const history = useHistory()

    useEffect(()=>{
        const newDisplayFood=foods?.find(food => food.key===parseFloat(foodKey));
        setDisplayFood(newDisplayFood)
        setIsloading(false)
    },[foods]) 


    if(isLoading){
        return <Spinner animation="border" variant="danger" />
    }

    // handle counter
    const handleCount=(isAdd)=>{
        if(isAdd){
            count>=10?setCount(count):setCount(count+1)
        }
        else{
            count<=1?setCount(count):setCount(count-1)
        }
    }

    // handle go back
    const handleGoBack=()=>{
        history.push('/')
    }

    return (
        <Container className='p-5'>
            <Row className='my-5'>
                <Col md={6} className='text-start pt-5' >
                    <h1>{displayFood?.name}</h1>
                    <p className='text-muted'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio necessitatibus ipsam nesciunt alias sunt at possimus voluptate amet eum repellendus. Veniam praesentium nam doloribus id ea doloremque eveniet neque a quisquam magni cumque ab, rem soluta, quam ipsum, enim quo!</p>
                    <div className='d-flex'>
                        <span className='fw-bold fs-3 me-4'>$ {displayFood?.price}</span>
                        <div className='count-btn-group'> 
                            <button 
                            className='count-btn' 
                            onClick={()=>handleCount(false)}>
                                <GrFormSubtract></GrFormSubtract>
                            </button>
                            <span className='px-1'>{count}</span>
                            <button 
                            onClick={()=>handleCount(true)}
                            className='count-btn'>
                                <MdAdd></MdAdd>
                            </button>
                        </div>
                    </div>
                    <Button 
                    variant="danger" 
                    className='hot-btn mt-4 me-3'>
                        <CgShoppingCart className='me-1'></CgShoppingCart>
                         Add
                    </Button>
                    <Button 
                    onClick={handleGoBack}
                    variant="warning" 
                    className='hot-btn mt-4'>
                         Go back
                    </Button>
                </Col>
                <Col md={6}>
                    <img width='400px' className='img-fluid' src={displayFood?.img} alt="" />
                </Col>
            </Row>
        </Container>
    );
};

export default FootDetails;