import PlanCard from "./components/PlanCard";
import "./exchangeProgramPlans.scss";
import { basicPlanData, freePlanData, premiumPlanData, starterPlanData } from "./components/planData";

const ExchangeProgramPlans = () => {
  return (
    <div className="ep-plan-div" id="plans">
      <div className="wrapper text-center pt-4">
        <h2>Right Plan For Your Learning</h2>
        <p>Igbo Conversation Exchange</p>
        <div className="plan-card-div d-flex justify-content-center mt-4">
          <PlanCard {...freePlanData} />
          <PlanCard {...starterPlanData} />
          <PlanCard {...basicPlanData} />
          <PlanCard {...premiumPlanData} />
        </div>
      </div>
    </div>
  );
};

export default ExchangeProgramPlans;
