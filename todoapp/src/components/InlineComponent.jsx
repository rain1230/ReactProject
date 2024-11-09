// const header={color:"blue", fontSize:"140px"};
// import '../css/style.css'

import styles from './inlinecomponent.module.css';
export default function InlineComponent(){
    return<div>
        {/* <h1 style={{color:"blue", fontSize:"140px"}}>This is inline component</h1> */}
        {/* <h1 style={header}>This is inline component</h1> */}
        <h1 className={styles.header}>This is inline component</h1>
        </div>
}