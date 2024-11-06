import React from 'react'
import photo1 from '../photos/bg-title-01.jpg';
export default function Body() {
    return (
        <div>
            <div className="card mt-3" style={{ "width": "18rem","maxHeight":"360px" }}>
                <img src={photo1} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Some quick example text</p>
                    <div className='container w-100'>
                        <select className='m-2 h-100 bg-success'>
                                {Array.from(Array(6),(e,i)=>{
                                    return(
                                        <option key={i+1} value={i+1}>{i+1}</option>
                                    )
                                })}
                        </select>
                        <select className='m-2 h-100 bg-success rounded'>
                                <option value="helf">half</option>
                                <option value="full">full</option>
                        </select>
                        <div className='d-inline h-100 fs-5'>
                            Total
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
