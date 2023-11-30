import React from 'react';
import '/Typescript/react-typescript-demo/src/Hector/Assets/CSS/Table.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faBars,} from '@fortawesome/free-solid-svg-icons';
import {faClock} from '@fortawesome/free-regular-svg-icons';


function Table() {
  return (
    <div >
        <div className='bigtable clients m-4'>
        <div className='container-fluid'>
            <div className="row p-3" >
                <div className='col-lg-8 col-md-6'>
                    <input type="text" className='col-lg-9 col-md-6' placeholder='Search and filter'/>

                </div>
                <div className='col-lg-3 col-md-6 col-sm-12'>
                    <input type="date" placeholder='09/01/2023-09/07/2023' />
                    <FontAwesomeIcon icon={faBars} className='ms-3'/>
                </div>


            </div>

        </div>
        <div className='container-fluid'>
            <div className='row '>
                <div className='col-lg-3 tab m-3'>
                    <table>
                        <tr>
                            <th>Clients 12</th>
                            <td><FontAwesomeIcon icon={faClock} /></td>
                            <td>Time Spent:</td>
                            <th>300 hrs 200 mins</th>
                        </tr>
                        <tr>
                            <th><input type="checkbox" /></th>
                        
                            <th>Clients</th>
                            <th>Time Spent</th>
                            <th>Share</th>
                        </tr>
                        <tr>
                            <td><input type="checkbox" /></td>
                            <td>Man Matters</td>
                            <td>12 hrs 20 mins</td>
                            <td>45%</td>
                        </tr>
                        <tr>
                            <td><input type="checkbox" /></td>
                            <td>Carat Caraze</td>
                            <td>8 hrs 10 mins</td>
                            <td>5%</td>
                        </tr>
                        <tr>
                            <td><input type="checkbox" /></td>
                            <td>Pilgrim India</td>
                            <td>28 hrs 30 mins</td>
                            <td>60%</td>
                        </tr>
                        <tr>
                            <td><input type="checkbox" /></td>
                            <td>Bata</td>
                            <td>6 hrs 40 mins</td>
                            <td>60%</td>
                        </tr>
                        <tr>
                            <td><input type="checkbox" /></td>
                            <td>Bata India</td>
                            <td>2 hrs 30 mins</td>
                            <td>3%</td>
                        </tr>
                        <tr>
                            <td><input type="checkbox" /></td>
                            <td>Ryze</td>
                            <td>10 hrs 45 mins</td>
                            <td>20%</td>
                        </tr>
                        <tr>
                            <td><input type="checkbox" /></td>
                            <td>Stlylify LLC</td>
                            <td>30 hrs 30 mins</td>
                            <td>75%</td>
                        </tr>
                        <tr>
                            <td><input type="checkbox" /></td>
                            <td>Stlylify LLC</td>
                            <td>30 hrs 30 mins</td>
                            <td>75%</td>
                        </tr>
                        <tr>
                            <td><input type="checkbox" /></td>
                            <td>Stlylify LLC</td>
                            <td>6 hrs 40 mins</td>
                            <td>75%</td>
                        </tr>
                        <tr>
                            <td><input type="checkbox" /></td>
                            <td>Carat Caraze</td>
                            <td>30 hrs 30 mins</td>
                            <td>60%</td>
                        </tr>
                        <tr>
                            <td><input type="checkbox" /></td>
                            <td>Stlylify LLC</td>
                            <td>6 hrs 40 mins</td>
                            <td>45%</td>
                        </tr>

                    </table>

                </div>
                <div className='col-lg-4 tab m-3'>
                    <table>
                        <tr>
                            <th>Users 7</th>
                            <td><FontAwesomeIcon icon={faClock} /></td>
                            <td>Time Spent:</td>
                            <th>100 hrs 50 mins</th>
                        </tr>
                        <tr>
                            <th><input type="checkbox" name="" id="" /></th>
                            <th>Users</th>
                            <th>Role</th>
                            <th>Time Spent</th>
                            <th>Share</th>
                        </tr>
                        <tr>
                            <td><input type="checkbox" name="" id="" /></td>
                            <td>Phoenix Baker</td>
                            <td>Admin</td>
                            <td>12 hrs 20 mins</td>
                            <td>45%</td>
                        </tr>
                        <tr>
                            <td><input type="checkbox" name="" id="" /></td>
                            <td>Lana Steiner</td>
                            <td>SuperAdmin</td>
                            <td>8 hrs 10 mins</td>
                            <td>5%</td>
                        </tr>
                        <tr>
                            <td><input type="checkbox" name="" id="" /></td>
                            <td>Demi Wilkinson</td>
                            <td>Admin</td>
                            <td>28 hrs 30 mins</td>
                            <td>60%</td>
                        </tr>
                        <tr>
                            <td><input type="checkbox" name="" id="" /></td>
                            <td>Drew Cano </td>
                            <td>Admin</td>
                            <td>12 hrs 20 mins</td>
                            <td>25%</td>
                        </tr>
                        <tr>
                            <td><input type="checkbox" name="" id="" /></td>
                            <td>Kate Morrison</td>
                            <td>Admin</td>
                            <td>2 hrs 30 mins</td>
                            <td>3%</td>
                        </tr>
                        <tr>
                            <td><input type="checkbox" name="" id="" /></td>
                            <td>Koray Okumus</td>
                            <td>Admin</td>
                            <td>10 hrs 45 mins</td>
                            <td>20%</td>
                        </tr>
                        <tr>
                            <td><input type="checkbox" name="" id="" /></td>
                            <td>Lori Bryson</td>
                            <td>Admin</td>
                            <td>30 hrs 30 mins</td>
                            <td>75%</td>
                        </tr>

                    </table>

                </div>
                <div className='col-lg-4 tab m-3'>
                    <table>
                        <tr>
                            <th>Pages  4</th>
                            <td><FontAwesomeIcon icon={faClock} /></td>
                            <td>Time Spent:</td>
                            <th>84 hrs 70 mins</th>
                        </tr>
                        <tr>
                            <th><input type="checkbox" /></th>
                            <th>Pages</th>
                            <th>Time Spent</th>
                            <th>Share</th>
                        </tr>
                        <tr>
                            <td><input type="checkbox" /></td>
                            <td>/summary/targeting</td>
                            <td>12 hrs 20 mins</td>
                            <td>45%</td>
                        </tr>
                        <tr>
                            <td><input type="checkbox" /></td>
                            <td>/add/account</td>
                            <td>8 hrs 10 mins</td>
                            <td>5%</td>
                        </tr>
                        <tr>
                            <td><input type="checkbox" /></td>
                            <td>/profile</td>
                            <td>28 hrs 30 mins</td>
                            <td>60%</td>
                        </tr>
                        <tr>
                            <td><input type="checkbox" /></td>
                            <td>/flipkart-dashboard</td>
                            <td>30 hrs 30 mins</td>
                            <td>25%</td>
                        </tr>
                    </table>

                </div>

            </div>

        </div>
        </div>
    </div>
  )
}

export default Table