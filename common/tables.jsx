import React from "react";
import {Table} from 'react-bootstrap'



const Tables = () => {
    return (
        <React.Fragment>
            <Table striped bordered>
                <thead>
                    <tr>
                        <th>شناسه</th>
                        <th>نام و نام خانوادگی</th>
                        <th>موبایل</th>
                        <th>نام کاربری</th>
                        <th>شغل</th>
                        <th>شهر</th>
                        <th>اینستاگرام</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>sdd</td>
                        <td>sdd</td>
                        <td>sdd</td>
                        <td>@mdo</td>
                    </tr>
                    <tr>
                    <td>2</td>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>sdd</td>
                        <td>sdd</td>
                        <td>sdd</td>
                        <td>@mdo</td>
                    </tr>
                    <tr>
                    <td>2</td>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>sdd</td>
                        <td>sdd</td>
                        <td>sdd</td>
                        <td>@mdo</td>
                    </tr>
                </tbody>
            </Table>
        </React.Fragment>
    );
}

export default Tables;