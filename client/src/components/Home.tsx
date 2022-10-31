import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// import { filter, getAllDiets, getAllProducts, getAllUsers } from '../redux/actions';
// import { getAllCategories, clearDetail } from "../redux/actions";

import NavBar from "./NavScroll";


export default function Home() {

    const dispatch = useDispatch();

    // const { allProducts, filterBy } = useSelector(state => state);
    // para Loading
    // const [load, setLoad] = useState(false);
    // const [isOpen, setIsOpen] = useState(false)

    // useEffect(() => {
    //     setLoad(true);
    //     dispatch(getAllProducts());
    //     setTimeout(() => {
    //         setLoad(false)
    //     }, 1500)
    //     dispatch(clearDetail())
    // }, [dispatch])
    // useEffect(() => {
    //     dispatch(filter())
    // }, [filterBy, allProducts]);

    // useEffect(() => {
    //     dispatch(getAllCategories());
    //     dispatch(getAllUsers());
    //     dispatch(getAllDiets());
    // }, [])

    // function handleClick(e) {
    //     e.preventDefault()
    //     setIsOpen(!isOpen)

    // }

    return (
<>
            <NavBar />
            {/* <button className={styles.btn} onClick={(e) => handleClick(e)}><BsChat /></button>
            <Slides interval={5000} images={images} />
            <div className={styles.container}>
                {isOpen === true &&
                    <Chat className={styles.chat} />
                }
            </div>
            <Cards load={load} />
            <Footer /> */}
</>
    );
}