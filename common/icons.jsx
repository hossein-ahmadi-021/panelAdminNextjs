import { FacebookFilled, GooglePlusSquareFilled, LinkedinFilled, TwitterSquareFilled } from '@ant-design/icons'
import { Fragment } from 'react'

const FormIcon = () => {
    return (
        <Fragment>
            <ul className="col-12 pb-2 pt-2">
                <li>
                    <FacebookFilled />

                </li>
                <li>
                    <TwitterSquareFilled />

                </li>
                <li>
                    <GooglePlusSquareFilled />
                </li>
                <li>
                    <LinkedinFilled />

                </li>
            </ul>
        </Fragment>
    );
}

export default FormIcon;