import ValueItem from "./components/ValueItem";
import './companyValues.scss';

const CompanyValues = () => {
    return (
        <div className="au-company-div">
            <div className="wrapper">
                <h2 className="text-center">Company Values</h2>
                <p className="text-center">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugiat, numquam.</p>
                <div className="grid-items-container">
                    <ValueItem />
                </div>
            </div>
        </div>
    )
}

export default CompanyValues;