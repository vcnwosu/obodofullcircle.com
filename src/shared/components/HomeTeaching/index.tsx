import { CustomButton } from "../Button";
import './homeTeaching.scss';

const HomeTeaching = () => {
    return (
        <div className="teaching-div wrapper d-flex justify-content-center align-items-center">
            <div className="text-center">
                <h1 className="head">Ready to Start Teaching?</h1>
                <p className="mb-4">Get started today by completing our assessment and booking your first interview call!</p>
                <CustomButton type="button" text="Contact us" variant="primary" />
            </div>
        </div>
    )
}

export default HomeTeaching;