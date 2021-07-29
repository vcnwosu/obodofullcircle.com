import ValueItem from "./components/ValueItem";
import './companyValues.scss';

const CompanyValues = () => {
    return (
        <div className="au-company-div">
            <div className="wrapper">
                <h2 className="text-center">Company Values</h2>
                <p className="text-center">Striving to deliver excellent services every single day</p>
                <div className="grid-items-container">
                    <ValueItem />
                </div>
            </div>
        </div>
    )
}

export default CompanyValues;